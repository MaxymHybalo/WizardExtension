console.log('Welcome extension script');

// function
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   handleJIRA(request.jira);
//   console.log(chrome.storage.local.get(['test'], (result) => {
//     console.log('chrome.storage.local', result);
//   }));
// });

// console.log(chrome.storage.local.get(['test'], (result) => {
//   console.log('chrome.storage.local', result);
// }));

class Tweaks {
  constructor(config) {
    const { jira } = config;
    this.jira = jira;
    this.run();
  }

  run() {
    this.handleJIRA(this.jira);
  }

  handleJIRA(enable) {
    const links = document.body.querySelectorAll('a');
    Array.from(links, (a) => {
      a.target = enable ? '_blank' : '_target';
      a.style.color = enable ? '#464444' : 'inherit';
      a.style.textDecoration = enable ? 'underline' : 'unset';
      return a;
    });
  }
}

class Extension {
  constructor() {
    this.initConfig();
  }

  initConfig() {
    this.initTweaks();
  }

  initTweaks() {
    chrome.storage.local.set({
      tweaks: {
        jira: true,
      },
    }, () => console.log('tweaks inited'));
  }

  tweaks() {
    chrome.storage.local.get(['tweaks'], (result) => new Tweaks(result.tweaks));
  }
}

const ext = new Extension();
ext.tweaks();

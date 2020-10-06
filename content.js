console.log('Welcome extension script');

function handleJIRA(enable) {
  const links = document.body.querySelectorAll('a');
  Array.from(links, (a) => {
    a.target = enable ? '_blank' : '_target';
    a.style.color = enable ? '#ddd' : 'inherit';
    return a;
  });
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  handleJIRA(request.jira);
});

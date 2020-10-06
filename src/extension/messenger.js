const sendMessage = () => {
  console.log('send message');
  chrome.tabs.query({ }, (tabs) => {
    console.log('tabs', tabs);
    chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, (response) => {
      console.log(response);
    });
  });
};

export default {
  sendMessage,
};

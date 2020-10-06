const sendMessage = () => {
  console.log('send message');
  // eslint-disable-next-line no-undef
  chrome.tabs.query({ }, (tabs) => {
    console.log('tabs', tabs);
    // eslint-disable-next-line no-undef
    chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, (response) => {
      console.log(response);
    });
  });
};

export default {
  sendMessage,
};

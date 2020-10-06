const JIRA_TAB_PATTERN = /.atlassian.net/;

function filterTabsByConfig(tabs, config) {
  let result = [];
  const { jira } = config;
  if (jira) result = tabs.filter((tab) => JIRA_TAB_PATTERN.test(tab.url));
  return result;
}

const sendMessage = (config) => {
  chrome.tabs.query({ }, (tabs) => {
    const filtredTabs = filterTabsByConfig(tabs, config);
    console.log('filtredTabs', filtredTabs);

    filtredTabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, config, () => {});
    });
  });
};

export default {
  sendMessage,
};

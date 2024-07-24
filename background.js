chrome.action.onClicked.addListener((tab) => {
    const githubComPattern = /^https:\/\/github\.com\/(.*)$/;
    const githubDevPattern = /^https:\/\/github\.dev\/(.*)$/;
  
    if (githubComPattern.test(tab.url)) {
      const newUrl = tab.url.replace(githubComPattern, 'https://github.dev/$1');
      chrome.tabs.update(tab.id, { url: newUrl });
    } else if (githubDevPattern.test(tab.url)) {
      const newUrl = tab.url.replace(githubDevPattern, 'https://github.com/$1');
      chrome.tabs.update(tab.id, { url: newUrl });
    } else {
      alert('This extension only works on GitHub repository pages.');
    }
  });
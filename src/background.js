chrome.contextMenus.create({
	title: "Zoom",
	contexts: ["all"],
	onclick: function(info, tab){
		chrome.tabs.sendRequest(tab.id, {});
	}
});

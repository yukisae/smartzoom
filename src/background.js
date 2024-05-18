const ID_TRIGGER_ZOOM = "trigger-zoom"

chrome.contextMenus.create({
	id: ID_TRIGGER_ZOOM,
	title: "Zoom",
	contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener((info,tab) => {
	switch (info.menuItemId) {
		case ID_TRIGGER_ZOOM:
			return chrome.tabs.sendMessage(tab.id, {})
	}
})
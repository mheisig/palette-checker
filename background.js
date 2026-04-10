chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  } catch {
    // Can't run on this page
    return;
  }

  try {
    await chrome.tabs.sendMessage(tab.id, { type: "arm" });
  } catch {
    // Content script not ready
  }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "pick-color") {
    const { x, y, dpr } = msg;
    chrome.tabs
      .captureVisibleTab(sender.tab.windowId, { format: "png" })
      .then(async (dataUrl) => {
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const bitmap = await createImageBitmap(blob);
        const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(bitmap, 0, 0);
        const px = Math.round(x * dpr);
        const py = Math.round(y * dpr);
        const pixel = ctx.getImageData(px, py, 1, 1).data;
        const hex =
          "#" +
          [pixel[0], pixel[1], pixel[2]]
            .map((v) => v.toString(16).padStart(2, "0"))
            .join("");
        sendResponse({ hex });
      })
      .catch(() => {
        sendResponse({ hex: null });
      });
    return true; // keep channel open for async response
  }

  if (msg.type === "verdict") {
    const colors = {
      in: "#4a9e4a",
      borderline: "#c89b2b",
      out: "#c94a4a",
    };
    chrome.action.setBadgeText({ text: " " });
    chrome.action.setBadgeBackgroundColor({
      color: colors[msg.verdict] || "#888",
    });
  }
});

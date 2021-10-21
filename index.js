(() => {
  const isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  if (!isChrome) {
    document.getElementById("iframeAudio").remove();
  } else {
    document.getElementById("playAudio").remove();
  }
})();

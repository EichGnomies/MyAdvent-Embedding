iFrameResize({ heightCalculationMethod: 'lowestElement', checkOrigin: false }, '.myadvent-calendar');
document.addEventListener('scroll', function(e) {
  var calendarElement = document.getElementsByClassName('myadvent-calendar')[0];
  if (!calendarElement) return;
  var originalDistanceToTop = calendarElement.getBoundingClientRect().y;
  var scrollOffset = 0;
  if (originalDistanceToTop < 0) scrollOffset = -originalDistanceToTop;
  calendarElement.contentWindow.postMessage(JSON.stringify({ scrollOffset: scrollOffset }), '*');
  console.log(scrollOffset);
});

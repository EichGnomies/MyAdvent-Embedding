document.addEventListener('scroll', function(e) {
  const calendars = document.getElementsByClassName('myadvent-calendar');
  for (let calendar of calendars) {
    const originalDistanceToTop = calendar.getBoundingClientRect().y;
    let scrollOffset = 0;
    if (originalDistanceToTop < 0) scrollOffset = -originalDistanceToTop;
    calendar.contentWindow.postMessage({ scrollOffset: scrollOffset }, '*');
  }
});

window.addEventListener('message', e=> {
  if (e.data?.action !== 'SET_HEIGHT') return;
  const calendars = window.document.getElementsByClassName('myadvent-calendar');
  for (let calendar of calendars) {
    calendar.style.height = `${e.data.height}px`;
  }
});

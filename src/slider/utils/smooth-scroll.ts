const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const smoothScroll = (
  scroller: HTMLDivElement,
  end: number,
  duration: number,
) => {
  const start = scroller.scrollLeft;
  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = (currentTime - startTime) / duration;
    const progress = Math.min(easeOutCubic(elapsed), 1);
    scroller.scrollLeft = start + (end - start) * progress;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

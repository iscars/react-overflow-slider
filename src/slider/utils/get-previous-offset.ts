export function getPreviousOffset(
  scroller: HTMLDivElement,
  items: (HTMLDivElement | null)[],
) {
  const findFirstVisibleItemIndex = (scrollLeft: number, widths: number[]) => {
    let first = 0,
      i = 0;
    while (first < scrollLeft) {
      first += widths[i];
      i++;
    }
    return i;
  };

  const findPreviousItemIndex = (
    visibleScroll: number,
    firstVisible: number,
    widths: number[],
  ) => {
    let i = firstVisible,
      possible = 0;
    if (widths[i - 1] >= visibleScroll) return i - 1;
    do {
      i--;
      possible += widths[i];
    } while (possible < visibleScroll && i > -1);
    return i + 1;
  };

  const scrollerVisibleWidth = scroller.offsetWidth;
  const scrollerScrollLeft = scroller.scrollLeft;
  const itemsWidths = items.map((item) => (item ? item.offsetWidth : 0));
  const firstVisible = findFirstVisibleItemIndex(
    scrollerScrollLeft,
    itemsWidths,
  );
  const prevItemIndex = findPreviousItemIndex(
    scrollerVisibleWidth,
    firstVisible,
    itemsWidths,
  );
  const itemsOffsetLeft = items.map((item) => (item ? item.offsetLeft : 0));

  return itemsOffsetLeft[prevItemIndex];
}

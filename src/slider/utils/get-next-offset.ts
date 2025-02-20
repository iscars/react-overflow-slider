export function getNextOffset(
  scroller: HTMLDivElement,
  items: (HTMLDivElement | null)[],
) {
  const findNextItemIndex = (left: number, right: number, widths: number[]) => {
    let availableWidth = 0;
    let visibleWidth = 0;
    let i = 0;

    do {
      availableWidth += widths[i];
      i++;
    } while (right >= availableWidth && i < widths.length);

    i = i - 1;
    for (let j = 0; j < i; j++) {
      visibleWidth += widths[j];
    }

    return visibleWidth <= left ? i + 1 : i;
    // ⚠️ Potential Issue with Font-Based Width Calculations:
    // When elements have widths influenced by fonts, fractional values can cause rounding errors.
    // Example:
    //   79.68 + 81.73 rounds to 80 + 82 = 162,
    //   but scrollLeft might return 161.41, which rounds to 161.
    // This mismatch can result in infinite loops or prevent scrolling to the next element.
    //
    // 💡 Solutions:
    // 1. Use universal fonts (e.g., system-native fonts, sans-serif) for consistent rendering across OS.
    //    Note: Fonts like Arial may render inconsistently on macOS.
    // 2. Apply a tolerance range in the condition:
    //    Change the condition to (visibleWidth - n <= left), where **n** is the pixel tolerance.
    //    Increase **n** as the scroll moves further left to account for larger cumulative rounding errors.
  };

  const scrollerVisibleWidth = scroller.offsetWidth;
  const scrollerScrollLeft = scroller.scrollLeft;
  const scrollerScrollRight = scrollerScrollLeft + scrollerVisibleWidth;
  const itemsWidths = items.map((item) => (item ? item.offsetWidth : 0));
  const itemsOffsetLeft = items.map((item) => (item ? item.offsetLeft : 0));
  const nextItemIndex = findNextItemIndex(
    scrollerScrollLeft,
    scrollerScrollRight,
    itemsWidths,
  );
  const scrollerWidth = scroller.scrollWidth;
  const possibleScroll = scrollerWidth - scrollerVisibleWidth + 1;
  const nextItem =
    nextItemIndex !== items.length ? itemsOffsetLeft[nextItemIndex] : null;

  return nextItem !== null && possibleScroll >= nextItem
    ? nextItem
    : possibleScroll;
}

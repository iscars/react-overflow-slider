export function findFirstVisibleIndex(items: (HTMLDivElement | null)[]) {
  return items.findIndex((item) => {
    if (!item) return false;
    if (item.dataset.firstVisible === "true") return true;
    if (item.firstElementChild?.getAttribute("data-first-visible") === "true")
      return true;
    return Array.from(item.children).some(
      (el) => (el as HTMLElement).dataset.firstVisible === "true",
    );
  });
}

export function scrollToFirstVisible(
  itemsRef: React.MutableRefObject<(HTMLDivElement | null)[]>,
  scrollToOffset: (offset: number) => void,
  initialScrollDone: React.MutableRefObject<boolean>,
) {
  if (initialScrollDone.current) return;

  const index = findFirstVisibleIndex(itemsRef.current);

  if (index !== -1) {
    const targetOffset = itemsRef.current[index]?.offsetLeft ?? 0;
    scrollToOffset(targetOffset);
    initialScrollDone.current = true;
  }
}

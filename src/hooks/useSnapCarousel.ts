import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

const EDGE_OFFSET = 16;

export interface SnapCarousel {
  scrollRef: RefObject<HTMLDivElement | null>;
  current: number;
  total: number;
  scrollTo: (index: number) => void;
  prev: () => void;
  next: () => void;
}

export function useSnapCarousel(total: number): SnapCarousel {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement | undefined;
    if (!card) return;

    container.scrollTo({ left: card.offsetLeft - EDGE_OFFSET, behavior: "smooth" });
    setCurrent(index);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const container: HTMLDivElement = element;

    function closestCard(): number {
      const cards = Array.from(container.children) as HTMLElement[];
      const { scrollLeft } = container;
      let closest = 0;
      let minDist = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const dist = Math.abs(card.offsetLeft - EDGE_OFFSET - scrollLeft);
        if (dist < minDist) {
          minDist = dist;
          closest = index;
        }
      });

      return closest;
    }

    function handleScroll(): void {
      setCurrent(closestCard());
    }

    function handleMouseDown(event: MouseEvent): void {
      dragging.current = true;
      startX.current = event.pageX;
      scrollStart.current = container.scrollLeft;
      container.style.scrollBehavior = "auto";
      container.style.cursor = "grabbing";
    }

    function handleMouseMove(event: MouseEvent): void {
      if (!dragging.current) return;
      event.preventDefault();
      container.scrollLeft = scrollStart.current - (event.pageX - startX.current);
    }

    function handleMouseUp(): void {
      if (!dragging.current) return;
      dragging.current = false;
      container.style.scrollBehavior = "smooth";
      container.style.cursor = "";
      scrollTo(closestCard());
    }

    container.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [scrollTo]);

  const prev = (): void => {
    scrollTo(Math.max(0, current - 1));
  };

  const next = (): void => {
    scrollTo(Math.min(total - 1, current + 1));
  };

  return { scrollRef, current, total, scrollTo, prev, next };
}

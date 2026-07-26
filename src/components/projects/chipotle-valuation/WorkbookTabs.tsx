"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { FinancialTable } from "./FinancialTable";
import type { ViewerSheet } from "./types";

function slugify(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}

export function WorkbookTabs({ sheets }: { sheets: ViewerSheet[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function selectTab(index: number) {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % sheets.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + sheets.length) % sheets.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = sheets.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectTab(nextIndex);
  }

  const activeSheet = sheets[activeIndex];
  const activeSlug = slugify(activeSheet.name);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Workbook sections"
        className="flex overflow-x-auto border-b border-zinc-300"
      >
        {sheets.map((sheet, index) => {
          const slug = slugify(sheet.name);
          const isActive = activeIndex === index;

          return (
            <button
              key={sheet.name}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`tab-${slug}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${slug}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`min-h-14 shrink-0 border-b-2 px-5 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-zinc-900 text-zinc-950"
                  : "border-transparent text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {sheet.name}
            </button>
          );
        })}
      </div>

      <div
        id={`panel-${activeSlug}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeSlug}`}
        tabIndex={0}
        className="pt-6 focus-visible:outline-offset-4"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-zinc-600">
            Source range{" "}
            <span className="font-mono text-xs text-zinc-900">
              {activeSheet.range}
            </span>
          </p>
          <p className="text-xs text-zinc-500">
            Scroll horizontally to view all columns
          </p>
        </div>
        <FinancialTable sheet={activeSheet} />
      </div>
    </div>
  );
}

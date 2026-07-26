export type CellRole =
  | "spacer"
  | "note"
  | "header"
  | "section"
  | "output"
  | "emphasis"
  | "body";

export type CellFormatKind =
  | "percentage"
  | "currency"
  | "multiple"
  | "date"
  | "number"
  | "general";

export interface CellStyle {
  numberFormat: string | null;
  kind: CellFormatKind;
  bold: boolean;
  fill: string | null;
  align: string | null;
}

export interface ModelCell {
  address: string;
  display: string;
  numericValue: number | null;
  formula: string | null;
  formulaRedacted: boolean;
  valueUnavailable: boolean;
  style: CellStyle;
}

export interface ViewerCell {
  display: string;
  numericValue: number | null;
  valueUnavailable: boolean;
  style: CellStyle;
}

export interface ModelRow {
  rowNumber: number;
  role: CellRole;
  cells: Array<ModelCell | null>;
}

export interface ViewerRow {
  rowNumber: number;
  role: CellRole;
  cells: Array<ViewerCell | null>;
}

export interface SheetMerge {
  range: string;
  startRow: number;
  startColumn: number;
  endRow: number;
  endColumn: number;
}

export interface SheetStats {
  formulaCount: number;
  formulasWithoutCachedValues: number;
  redactedExternalFormulas: number;
}

export interface ModelSheet {
  name: string;
  range: string;
  startRow: number;
  startColumn: number;
  rowCount: number;
  columnCount: number;
  columnWidths: Array<number | null>;
  merges: SheetMerge[];
  rows: ModelRow[];
  stats: SheetStats;
}

export interface ViewerSheet {
  name: string;
  range: string;
  rowCount: number;
  columnCount: number;
  columnWidths: Array<number | null>;
  merges: SheetMerge[];
  rows: ViewerRow[];
}

export interface SummaryOutput {
  label: string;
  value: string;
  sourceCell: string;
}

export interface ChipotleModel {
  formatVersion: number;
  sourceFile: string;
  sheetOrder: string[];
  sheets: ModelSheet[];
  summaryOutputs: SummaryOutput[];
  stats: SheetStats;
}

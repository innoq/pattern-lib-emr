import { createElement } from "complate-stream";

import { configToRows } from "../index"

export const NUMERIC_LAYOUT = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [".", 0, { type: "BACKSPACE", key: "Bksp" }]
]

export const INTEGER_LAYOUT = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [{ type: "BLANK" }, 0, { type: "BACKSPACE", key: "Bksp" }]
]

export function NumericKeyboard({ inputId }, ...children) {
  return <emr-numeric-keyboard data-input-id={inputId}>
    {children}
  </emr-numeric-keyboard>
}

export function KeyboardHelper({ inputId, config }) {
  return <NumericKeyboard inputId={inputId}>
    {configToRows(config)}
  </NumericKeyboard>
}
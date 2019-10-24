import { createElement } from "complate-stream";

import { configToRows } from "../keyboard"

export const MONTH_LAYOUT = [
  [{ key: "Jan (01)", value: "01" }, { key: "Feb (02)", value: "02" }, { key: "Mar (03)", value: "03" }],
  [{ key: "Apr (04)", value: "04" }, { key: "May (05)", value: "05" }, { key: "Jun (06)", value: "06" }],
  [{ key: "Jul (07)", value: "07" }, { key: "Aug (08)", value: "08" }, { key: "Sep (09)", value: "09" }],
  [{ key: "Oct (10)", value: "10" }, { key: "Nov (11)", value: "11" }, { key: "Dec (12)", value: "12" }],
  [{ type: "BACKSPACE", key: "Clear Field" }]
]

export function SelectingKeyboard({ inputId }, ...children) {
  return <emr-selecting-keyboard data-input-id={inputId}>
    {children}
  </emr-selecting-keyboard>
}

export function KeyboardHelper({ inputId, config }) {
  return <SelectingKeyboard inputId={inputId}>
    {configToRows(config)}
  </SelectingKeyboard>
}
import { createElement } from "complate-stream";

import { KeyboardRow } from "../keyboard-row"
import { KeyboardKey, BackspaceKey } from "../keyboard-key"

export const ALPHABETIC_LAYOUT = [
  ["A", "B", "C", "D", "E", "F", "G", "H", { type: "BACKSPACE", key: "Bksp" }],
  ["I", "J", "K", "L", "M", "N", "O", "P", "'", "-"],
  ["Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
]

export const NUMERIC_LAYOUT = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [".", 0, { type: "BACKSPACE", key: "Bksp" }]
]

export function Keyboard({ inputId, transform }, ...children) {
  return <emr-keyboard data-input-id={inputId} data-transform={transform}>
    {children}
  </emr-keyboard>
}

export function CapitalizingKeyboard({ inputId }, ...children) {
  return <Keyboard inputId={inputId} transform="capitalize">
    {children}
  </Keyboard>
}

export function configToRows(config) {
  return config.map(row => {
    return <KeyboardRow>
      {row.map(key => {
        if (key["type"] && key.type === "BACKSPACE") {
          return <BackspaceKey key={key["key"] || "Bksp"} />
        }
        if (key["value"]) {
          return <KeyboardKey key={key["key"] || key["value"]} value={key["value"]} />
        }
        return <KeyboardKey key={key} />
      })}
    </KeyboardRow>
  })
}

export function KeyboardHelper({ inputId, config, transform = "capitalize" }) {
  return <Keyboard inputId={inputId} transform={transform}>
    {configToRows(config)}
  </Keyboard>
}
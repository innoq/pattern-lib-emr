title: Selecting Keyboard

This is a variant of a keyboard, but instead of asking the user
to type individual letters/numbers, it provides a selection of
possible options and replaces the currently selected option
if the user selects a new option.

```jsx
import { SelectingKeyboard } from "./components/selecting-keyboard";
import { KeyboardRow } from "./components/keyboard-row";
import { KeyboardKey } from "./components/keyboard-key";
import { createElement } from "complate-stream";

<div>
  <input id="input" name="input" type="text" />
  <SelectingKeyboard inputId="input">
    <KeyboardRow>
      <KeyboardKey key="A" />
      <KeyboardKey key="B" />
      <KeyboardKey key="C" />
      <KeyboardKey key="D" />
    </KeyboardRow>
    <KeyboardRow>
      <KeyboardKey key="E" />
      <KeyboardKey key="F" />
      <KeyboardKey key="G" />
      <KeyboardKey key="H" />
    </KeyboardRow>
  </SelectingKeyboard>
</div>
```

Here is a keyboard layout for the selection of months.

```jsx
import { KeyboardHelper, MONTH_LAYOUT } from "./components/selecting-keyboard";
import { createElement } from "complate-stream";

<div>
  <input id="input" name="input" type="text" />
  <KeyboardHelper inputId="input" config={MONTH_LAYOUT} />
</div>
```

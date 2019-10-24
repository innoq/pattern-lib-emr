title: Keyboard Row

This is a component to collect keys and allow them to be placed
next to each other.

This components should help to provide some responsive behavior for the keys
which are placed inside of the row, and some spacing between keys. If there is
extra space, the keys in a row should grow to fill the available space. If there
is not sufficient space in a row, the keys should wrap around and fill the space
in the next row.

```jsx
import { KeyboardKey } from "./components/keyboard-key";
import { KeyboardRow } from "./components/keyboard-row";
import { createElement } from "complate-stream";

<KeyboardRow>
  <KeyboardKey key="A" />
  <KeyboardKey key="B" />
  <KeyboardKey key="C" />
  <KeyboardKey key="D" />
  <KeyboardKey key="E" />
  <KeyboardKey key="F" />
  <KeyboardKey key="G" />
  <KeyboardKey key="H" />
</KeyboardRow>
```

And you can pile a few rows on top of each other too to make a few rows
of keys.

```jsx
import { KeyboardKey } from "./components/keyboard-key";
import { KeyboardRow } from "./components/keyboard-row";
import { createElement } from "complate-stream";

<div>
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
</div>
```
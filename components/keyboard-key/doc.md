title: Keyboard-Key

A key in a keyboard that can be pressed.

```jsx
import { KeyboardKey } from "./components/keyboard-key";
import { createElement } from "complate-stream";

<KeyboardKey key="A" />
```

Or put some keys next to each other

```jsx
import { KeyboardKey } from "./components/keyboard-key";
import { createElement } from "complate-stream";

<div>
  <KeyboardKey key="A" />
  <KeyboardKey key="B" />
  <KeyboardKey key="C" />
</div>
```

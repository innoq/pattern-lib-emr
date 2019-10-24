title: Keyboard-Key

A key in a keyboard that can be pressed.

```jsx
import { KeyboardKey } from "./components/keyboard-key";
import { createElement } from "complate-stream";

<KeyboardKey key="A" />
```

Or put some keys next to each other. Padding will be added between
the keys by putting them inside a keyboard-row.

```jsx
import { KeyboardKey } from "./components/keyboard-key";
import { createElement } from "complate-stream";

<div>
  <KeyboardKey key="A" />
  <KeyboardKey key="B" />
  <KeyboardKey key="C" />
</div>
```

It's also possible to create a backspace key.

```jsx
import { BackspaceKey } from "./components/keyboard-key";
import { createElement } from "complate-stream";

<div>
  <BackspaceKey key="Bksp" />
</div>
```
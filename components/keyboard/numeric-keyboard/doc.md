title: Numeric Keyboard:

```jsx
import { KeyboardHelper, NUMERIC_LAYOUT } from "./components/keyboard/numeric-keyboard";
import { createElement } from "complate-stream";

<div>
  <input id="input" name="input" type="text" />
  <KeyboardHelper inputId="input" config={NUMERIC_LAYOUT} />
</div>
```

And if you want to only insert integers?:

Note that here you can add a `<div>` Element in the Keyboard
Layout to show that 

```jsx
import { KeyboardHelper, INTEGER_LAYOUT } from "./components/keyboard/numeric-keyboard";
import { createElement } from "complate-stream";

<div>
  <input id="input" name="input" type="text" />
  <KeyboardHelper inputId="input" config={INTEGER_LAYOUT} />
</div>
```
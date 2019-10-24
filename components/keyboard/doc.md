title: Keyboard

This JavaScript component provides the glue between the keys and
the input fields that they are providing. 

```jsx
import { Keyboard } from "./components/keyboard";
import { KeyboardRow } from "./components/keyboard-row";
import { KeyboardKey } from "./components/keyboard-key";
import { createElement } from "complate-stream";

<Keyboard>
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
</Keyboard>
```

Visually, this looks the same as when you only have keyboard rows next
to each other (because the styling for the rows is contained in the
KeyboardRow component), but the magic happens when you add the
corresponding text field.

See? Add a text field and then you can type into the text field!

```jsx
import { Keyboard } from "./components/keyboard";
import { KeyboardRow } from "./components/keyboard-row";
import { KeyboardKey } from "./components/keyboard-key";
import { createElement } from "complate-stream";

<div>
  <input id="input" name="input" type="text" />
  <Keyboard inputId="input">
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
  </Keyboard>
</div>
```

And what about capitalization? This is a variant of our
keyboard which we can configure to add a property.

```jsx
import { CapitalizingKeyboard } from "./components/keyboard";
import { KeyboardRow } from "./components/keyboard-row";
import { KeyboardKey } from "./components/keyboard-key";
import { createElement } from "complate-stream";

<div>
  <input id="input" name="input" type="text" />
  <CapitalizingKeyboard inputId="input">
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
  </CapitalizingKeyboard>
</div>
```

Backspace is also possible.

```jsx
import { CapitalizingKeyboard } from "./components/keyboard";
import { KeyboardRow } from "./components/keyboard-row";
import { KeyboardKey, BackspaceKey } from "./components/keyboard-key";
import { createElement } from "complate-stream";

<div>
  <input id="input" name="input" type="text" />
  <CapitalizingKeyboard inputId="input">
    <KeyboardRow>
      <KeyboardKey key="A" />
      <KeyboardKey key="B" />
      <KeyboardKey key="C" />
      <BackspaceKey key="Bksp" />
    </KeyboardRow>
    <KeyboardRow>
      <KeyboardKey key="E" />
      <KeyboardKey key="F" />
      <KeyboardKey key="G" />
      <KeyboardKey key="H" />
    </KeyboardRow>
  </CapitalizingKeyboard>
</div>
```

You can also use the helper to create custom Keyboard Layouts

```jsx
import { KeyboardHelper } from "./components/keyboard";
import { createElement } from "complate-stream";

<div>
  <input id="input" name="input" type="text" />
  <KeyboardHelper inputId="input" config={[
  ["A", "B", "C", "D", "E", { type: "BACKSPACE", key: "Bksp" }],
  ["F", "G", "H", "I", "J", "K" ]
]} />
</div>
```

And here are some pregenerated keyboards for your use.

Aphabetic:

```jsx
import { KeyboardHelper, ALPHABETIC_LAYOUT } from "./components/keyboard";
import { createElement } from "complate-stream";

<div>
  <input id="input" name="input" type="text" />
  <KeyboardHelper inputId="input" config={ALPHABETIC_LAYOUT} />
</div>
```

Numeric:

```jsx
import { KeyboardHelper, NUMERIC_LAYOUT } from "./components/keyboard";
import { createElement } from "complate-stream";

<div>
  <input id="input" name="input" type="text" />
  <KeyboardHelper inputId="input" config={NUMERIC_LAYOUT} />
</div>
```
title: Icon-Element

An icon element.

```jsx
import { IconElement } from "./components/icon-element";
import { createElement } from "complate-stream";

<div>
  <IconElement icon="heart" label="heartrate" />
  <IconElement icon="angle-left" label="backward" />
  <IconElement icon="angle-right" label="forward" />
  <IconElement icon="trash" label="clear" />
</div>
```

You can also add the icon after a label.

```jsx
import { IconAfter } from "./components/icon-element";
import { createElement } from "complate-stream";

<IconAfter icon="angle-right" label="forward" />
```
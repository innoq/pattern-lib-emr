title: footer

This is a component for displaying the buttons for navigating at the bottom
of a page.

The footer is a container element. A developer can add buttons to the 
footer. To push the navigation buttons to the right, add the `ml-auto` class
to the "Back" Button.

```jsx
import { Footer } from "./components/footer";
import { IconElement, IconAfter }  from "./components/icon-element";
import { createElement } from "complate-stream";

<Footer>
  <button class="btn btn-danger">
    <IconElement icon="window-close" label="Cancel" />
  </button>
  <button class="btn btn-light ml-auto">
    <IconElement icon="angle-left" label="Back" />
  </button>
  <button class="btn btn-light">
    <IconElement icon="trash-alt" label="Clear" />
  </button>
  <button class="btn btn-success">
    <IconAfter icon="angle-right" label="Next" />
  </button>
</Footer>
```

And a variant for finishing off the workflow

```jsx
import { Footer } from "./components/footer";
import { IconElement, IconAfter }  from "./components/icon-element";
import { createElement } from "complate-stream";

<Footer>
  <button class="btn btn-danger">
    <IconElement icon="window-close" label="Cancel" />
  </button>
  <button class="btn btn-light ml-auto">
    <IconElement icon="angle-left" label="Back" />
  </button>
  <button class="btn btn-light">
    <IconElement icon="trash-alt" label="Clear" />
  </button>
  <button class="btn btn-success">
    <IconElement icon="check" label="Finish" />
  </button>
</Footer>
```
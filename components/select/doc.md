title: Select-Element

An Element to select a single Item.

```jsx
import { Select } from "./components/select";
import { SelectOption } from "./components/select-option";
import { createElement } from "complate-stream";

<Select label="aLabel" id="anId">
  <SelectOption text="aText" value="aValue" />
  <SelectOption text="anothertext" value="anotherValue" />
</Select>
```

An Element to select multiple Items.

```jsx
import { Select } from "./components/select";
import { SelectOption } from "./components/select-option";
import { createElement } from "complate-stream";

<Select label="zwei" id="theId" multiple>
  <SelectOption text="theText" value="theValue" multiple />
  <SelectOption text="theOtherText" value="theOtherValue" multiple />
</Select>
```
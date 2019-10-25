title: Select-Element

An Element to select a single Item.

```jsx
import { Select } from "./components/select";
import { createElement } from "complate-stream";

<label class="emr-select"> Foo
    <select name="Foo" size="3">
        <option>Bar</option>
        <option>Bob</option>
        <option>Blub</option>
    </select>
</label>
```

An Element to select multiple Items.

```jsx
import { Select } from "./components/select";
import { createElement } from "complate-stream";

<label class="emr-select"> Foo
    <select name="Foo" size="3" multiple>
        <option>Bar</option>
        <option>Bob</option>
        <option>Blub</option>
    </select>
</label>
```
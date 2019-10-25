title: Select-Element

An Element to select a single Item.

JavaScript Styles to Add:
```
https://code.jquery.com/jquery-3.4.1.min.js
```

```jsx
import { Select } from "./components/select";
import { createElement } from "complate-stream";

<label class="emr-select"> Select Country
    <select name="Country" size="3">
        <option>Burkina Faso</option>
        <option>Senegal Verde</option>
        <option>Angola</option>
    </select>
</label>
```

An Element to select multiple Items.

```jsx
import { Select } from "./components/select";
import { createElement } from "complate-stream";

<label class="emr-select"> Select Citiy or Cities
    <select name="Cities" size="3" multiple>
        <option>Luanda</option>
        <option>N'dalatando</option>
        <option>Huambo</option>
    </select>
</label>
```
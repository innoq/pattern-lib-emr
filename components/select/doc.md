title: Select-Element

An Element to select a single Item.

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
    <select name="Cities" size="7" multiple>
        <option>Luanda</option>
        <option>N'dalatando</option>
        <option>Huambo</option>
        <option>Lobito</option>
        <option>Benguela</option>
        <option>Cuito</option>
        <option>Lubango</option>
        <option>Malanje</option>
        <option>Namibe</option>
        <option>Soio</option>
        <option>Cabinda</option>
        <option>Uige</option>
        <option>Saurimo</option>
        <option>Sumbe</option>
        <option>Menongue</option>
        <option>Caxito</option>
        <option>Longonjo</option>
        <option>Mbanza Congo</option>
        <option>Caala</option>
        <option>Luena</option>
        <option>Lucapa</option>
        <option>Camacupa</option>
        <option>Catabola</option>
        <option>Luau</option>
        <option>N'zeto</option>
        <option>Catumbela</option>
    </select>
</label>
```
title: One of the views

You can't really see how the page with the footer behaves
here. Click [here](0.html) to play around with it.

Please use the `main` Tag for the main contents between the
header and footer areas.

```html
<header is="emr-header" class="emr-header"><div class="emr-header-element emr-header-element__name">Amlesu Ncube</div><div class="emr-header-element">female</div><div class="emr-header-element"><div>1970-01-01</div><div>85 yrs</div></div><div class="emr-header-element emr-header-element__address"><span class="fas fa-star-of-life emr-header-element__address__icon"></span>Bavaria/Nuremberg</div><div class="emr-header-element emr-header-element__address"><span class="fas fa-home emr-header-element__address__icon"></span>Bavaria/Munich</div></header>
<main class="container">
    <h1>Current Address</h1>
    <label for="anId">Country</label>
    <select class="emr-select" id="anId" size="3">
      <option class="emr-select-option">Burkina Faso</option>
      <option class="emr-select-option">Senegal Verde</option>
      <option class="emr-select-option">Angola</option>
    </select>
    <label for="theId">City(ies)</label>
    <select class="emr-select" id="anId" size="7" multiple>
      <option is="emr-select-option" class="emr-select-option">Luanda</option>
      <option is="emr-select-option" class="emr-select-option">N'dalatando</option>
      <option is="emr-select-option" class="emr-select-option">Huambo</option>
      <option is="emr-select-option" class="emr-select-option">Lobito</option>
      <option is="emr-select-option" class="emr-select-option">Benguela</option>
      <option is="emr-select-option" class="emr-select-option">Cuito</option>
      <option is="emr-select-option" class="emr-select-option">Lubango</option>
      <option is="emr-select-option" class="emr-select-option">Malanje</option>
    </select>    
</main>
<footer class="emr-footer"><button class="btn btn-danger"><span class="emr-icon"><i class="fa fa-window-close"></i>Cancel</span></button><button class="btn btn-light ml-auto"><span class="emr-icon"><i class="fa fa-angle-left"></i>Back</span></button><button class="btn btn-light"><span class="emr-icon"><i class="fa fa-trash-alt"></i>Clear</span></button><button class="btn btn-success"><span class="emr-icon-after">Next<i class="fa fa-angle-right"></i></span></button></footer>
```
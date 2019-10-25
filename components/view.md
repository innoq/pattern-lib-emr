title: One of the views

You can't really see how the page with the footer behaves
here. Click [here](0.html) to play around with it.

Please use the `main` Tag for the main contents between the
header and footer areas.

```html
<header is="emr-header" class="emr-header"><div class="emr-header-element emr-header-element__name">Amlesu Ncube</div><div class="emr-header-element">female</div><div class="emr-header-element"><div class="">1970-01-01</div><div>85 yrs</div></div><div class="emr-header-element emr-header-element__address"><span class="fas fa-star-of-life emr-header-element__address__icon"></span>Bavaria/Nuremberg</div><div class="emr-header-element emr-header-element__address"><span class="fas fa-home emr-header-element__address__icon"></span>Bavaria/Munich</div></header>
<main class="container">
    <h4>Current Address</h4>
    <div>
        <div class="row">
            <div class="col"><input class="form-control-plaintext" type="text" value="Region" readonly=""><input type="text" id="input-region">
                <ul class="list-group" id="list-region" style="max-height:450px; overflow:scroll">
                    <li class="list-group-item list-group-item-action"><span>Northern</span></li>
                    <li class="list-group-item list-group-item-action active"><span>Central</span></li>
                    <li class="list-group-item list-group-item-action"><span>Southern</span></li>
                    <li class="list-group-item list-group-item-action"><span>Not In Malawi</span></li>
                    <li class="list-group-item list-group-item-action"><span>Unknown</span></li>
                </ul>
            </div>
            <div class="col"><input class="form-control-plaintext" type="text" value="District" readonly=""><input type="text" id="input-district">
                <ul class="list-group" id="list-district" style="max-height:450px; overflow:scroll">
                    <li class="list-group-item list-group-item-action"><span>Dedza</span></li>
                    <li class="list-group-item list-group-item-action"><span>Dowa</span></li>
                    <li class="list-group-item list-group-item-action"><span>Kasungu</span></li>
                    <li class="list-group-item list-group-item-action"><span>Lilongwe</span></li>
                    <li class="list-group-item list-group-item-action active"><span>Lilongwe City</span></li>
                    <li class="list-group-item list-group-item-action"><span>Mchinji</span></li>
                    <li class="list-group-item list-group-item-action"><span>Nkhotakota</span></li>
                    <li class="list-group-item list-group-item-action"><span>Ntcheu</span></li>
                    <li class="list-group-item list-group-item-action"><span>Ntchisi</span></li>
                    <li class="list-group-item list-group-item-action"><span>Salima</span></li>
                </ul>
            </div>
            <div class="col"><input class="form-control-plaintext" type="text" value="Traditional Authority" readonly=""><input type="text" id="input-ta">
                <ul class="list-group" id="list-ta" style="max-height:450px; overflow:scroll">
                    <li class="list-group-item list-group-item-action"><span>Kaphiri</span></li>
                    <li class="list-group-item list-group-item-action active"><span>Kauma</span></li>
                    <li class="list-group-item list-group-item-action"><span>Kawale I (A4)</span></li>
                    <li class="list-group-item list-group-item-action"><span>Kawale II (A4)</span></li>
                    <li class="list-group-item list-group-item-action"><span>Likuni</span></li>
                    <li class="list-group-item list-group-item-action"><span>Lumbadzi</span></li>
                </ul>
            </div>
            <div class="col"><input class="form-control-plaintext" type="text" value="Village" readonly=""><input type="text" id="input-village">
                <ul class="list-group" id="list-village" style="max-height:450px; overflow:scroll">
                    <li class="list-group-item list-group-item-action"><span>Kaphiri</span></li>
                    <li class="list-group-item list-group-item-action active"><span>Kauma</span></li>
                    <li class="list-group-item list-group-item-action"><span>Kawale I (A4)</span></li>
                    <li class="list-group-item list-group-item-action"><span>Kawale II (A4)</span></li>
                    <li class="list-group-item list-group-item-action"><span>Likuni</span></li>
                    <li class="list-group-item list-group-item-action"><span>Lumbadzi</span></li>
                </ul>
            </div>
        </div>
    </div>
</main>
<footer class="emr-footer"><button class="btn btn-danger"><span class="emr-icon"><i class="fa fa-window-close"></i>Cancel</span></button><button class="btn btn-light ml-auto"><span class="emr-icon"><i class="fa fa-angle-left"></i>Back</span></button><button class="btn btn-light"><span class="emr-icon"><i class="fa fa-trash-alt"></i>Clear</span></button><button class="btn btn-success"><span class="emr-icon-after">Next<i class="fa fa-angle-right"></i></span></button></footer>
```
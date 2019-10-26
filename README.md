# pattern-lib-emr

## Getting started
 1. Clone the repo
 2. Install dependencies
 
         npm install
     
 3. Start the Application
 
        npm start
     
 4. Browse to [http://127.0.0.1:4444/](http://127.0.0.1:4444/)

## Technologies Used

The technologies used to create this pattern library are
as follows:

* [aiur](https://github.com/moonglum/aiur/) is the
engine used to generate the pattern library
* In the background, the awesome [faucet](https://www.faucet-pipeline.org/) pipeline compiles the CSS
and JavaScript files for use.

When you execute `npm start`, the pattern library will
start, and the assets will be generated in the
background. This means, that you can get the necessary
CSS and JavaScript. The relevant files are:

* `script-guide-0.js`
* `style-guide-0.css`

For some of the components (e.g. select, datepicker)
require separate sources (e.g. jQuery). This is
documented in the pattern library on the pages about
the components.
# Angular

## Install:

npm install -g @angular/cli || brew install -g @angular-cli
ng version

## Initialize project:

ng new project-name (don't call it project-name!!!)
from that new folder: ng serve --port 4500 (check localhost:4500)

app.component.html = template
app.component.ts = component

## STEPS:

1. ng new FirstAngular
2. app.component.html >> delete everything
3. (in src/app) >> ng generate component form >> THEN https://angular.io/guide/forms
4. add the array of languages to the 'class FormComponent' with this syntax languages: string[] = ['HTML', 'CSS', 'JS', 'TS', 'Carbon', 'Rust'];
5. the form can be added to the MAIN FILE (app.component.html) by using the selector from the form component = `<app-form></app-form>`
   https://medium.com/@arpitmalaiya/3-ways-to-include-component-in-angular-application-dcbd4d0f4c1a
6.
7. friend class >> https://angular.io/guide/architecture-components

Friend class needs importing at form.component.ts,
friendModel: Friend = new Friend('', '', '', '', ''); this is in form.component.ts & app.component.ts

{{ formName.value | json }} to {{ friendModel | json }} >>> notice new doesn't have '.value' :: the | (pipe) means the friendModel will flow through this pipe to the json function (jsonizer :) eg {{ birthday | date }} will take a bday & make it into a date format for this template expression. << more info https://angular.io/guide/pipes >>

222. IF touched && invalid, border = red:
     [class.inputInvalid]="firstName.touched && firstName.invalid"
     [class.futureClass]="value.condition"
     this adds the class 'inputInvalid' when the condictions are true, aka toggle class:
     https://malcoded.com/posts/angular-ngclass/

NgModel
DIRECTIVE
Creates a FormControl instance from a domain model and binds it to a form control element.

[(ngModel)]="friendModel.firstName"
local variable OR template variable

333. Pattern Validation (aka regex dingbats)
     Angular has a built in validators, but also allows regex 'Pattern Validation' (i don't know yet which is more secure/stable/usable)
     eg. (inside the tag) >> pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
     eg.
     pattern="[A-Za-z0-9 \-_.\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]"
     <!-- regex pattern to support diacritics (umlaut, accute, grave etc) as they are fairly common :)  -->

     eg.
     ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
     <!-- for phone numbers: https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number -->

     https://www.abstractapi.com/guides/angular-email-validation#:~:text=Angular%20Email%20Validation%20with%20Regex,company's%20email%20address%20for%20verification.

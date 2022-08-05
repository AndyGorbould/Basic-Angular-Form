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

{{ formName.value | json }} to {{ friendModel | json }} >>> notice new doesn't have '.value'

NgModel
DIRECTIVE
Creates a FormControl instance from a domain model and binds it to a form control element.

[(ngModel)]="friendModel.firstName"
local variable OR template variable

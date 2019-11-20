# NgxCollapse

Bootstrap styles based collapse for Angular

## Should I use this ?

> I'm using `bootsrap.css` for styles, but I dont want to add use `bootstrap.js` and `jQuery` in the application.
<!-- > I'm not using any bootstap dependencies but want to have a bootstrap like collapse without any importing any large libraries like 'ngx-bootstrap' -->

## Installation

Simply run `npm i ngx-collapse`.
Add `NgxCollapseModule` to your NgModule with `import { NgxCollapseModule } from 'ngx-collapse'`.

## Using

- Provides two directives collapse and collapseContent. 
- Assign `collapseContent` directive to local template reference variable, something like this `#content1="collapseContent`, here content1 is variable
- Assign the local variable to `collapse` directive.

`````
  <div [collapse]="content1" > <button > toggle</button> </div>

  <div collapseContent  #content1="collapseContent" >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga iure eum obcaecati. Illum placeat eum animi culpa, numquam architecto in nam exercitationem praesentium, magni ratione voluptatibus nobis. Dolores, unde.
  </div>
`````


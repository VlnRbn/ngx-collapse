# NgxCollapse

Bootstrap styles based collapse for Angular

## Should I use this ?

> I'm using `bootsrap.css` for styles, but I do not want to add use `bootstrap.js` and `jQuery` in the application.
> I'm not using `bootsrap`, And I want bootstrap-like collapse.

## Why not ngx-bootstap ?

> I did not want to declare component property for each collapsable item. I just want somthing more simpler.

## Installation

> Assuming `bootsrap.css` is already added to the project.

- Simply run `npm i ngx-collapse`.
- Add `NgxCollapseModule` to your NgModule with `import { NgxCollapseModule } from 'ngx-collapse'`.

> Not using bootstap?

- Add the following in styles.scss
````
.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
````

## Implimentation

- Provides two directives collapse and collapseContent. 
- Assign `collapseContent` directive to local template reference variable, something like this `#content1="collapseContent`, here content1 is variable
- Assign the local variable to `collapse` directive.

- Option 1: Control one item
`````
  <div [collapse]="content1" > <button > toggle</button> </div>

  <div collapseContent  #content1="collapseContent" >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga iure eum obcaecati. Illum placeat eum animi culpa, numquam architecto in nam exercitationem praesentium, magni ratione voluptatibus nobis. Dolores, unde.
  </div>
`````

- Option 2: Pass an array of multiple contents
`````
  <div [collapse]="[content1, content2]" > <button > toggle</button> </div>

  <div collapseContent  #content1="collapseContent" >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga iure eum obcaecati. Illum placeat eum animi culpa, numquam architecto in nam exercitationem praesentium, magni ratione voluptatibus nobis. Dolores, unde.
  </div>

  <div collapseContent  #content2="collapseContent" >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga iure eum obcaecati. Illum placeat eum animi culpa, numquam architecto in nam exercitationem praesentium, magni ratione voluptatibus nobis. Dolores, unde.
  </div>
`````

# weAR

Bring a clothing store in your room

## Build Setup

``` bash
# install dependencies
npm install

# build Vue components and pages for serving
npm run build

# run server
npm run start
```

The second step must be repeated each time a page or a component is modified because we need WebPack to be able to track all changes to those files.

## Code Structure

`components` contains all the Vue.js components we want to reuse, e.g. Header, Footer, Clothing Item, etc.

`pages` contains one folder per page of our application. Each folder must contain at least:
 - one HTML whose name must be the same of the page's folder
 - one `App.vue` file which needs to provide the page's layout in a Vue style
 - one `main.js` which is the page's entry point. It must include the `App.vue` file in order for WebPack to properly parse it
Among the mentioned files, only the HTML ones are visible to the user (look at `server.js` for more informations)

`public` contains all the public resources, e.g. images, style sheet files, etc.

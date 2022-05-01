npm run start
npm run build

Component build
- Nunjucks Macros used to allow components to be given parameters in each child instance
- [Pattern](https://www.trysmudford.com/blog/encapsulated-11ty-components/)
- src/_includes/components/button_action/button_action.njk contains html and param slots
- src/_includes/system/component.njk is a global component macro. This allows simpler code to instantiate each instance.
- any page which needs to call component.njk must have a reference to it at the start of the page - {%- from "./_includes/system/component.njk" import component -%}

Image handling
Blog at https://www.aleksandrhovhannisyan.com/blog/eleventy-image-lazy-loading/
easier https://alexpeterhall.com/blog/2021/04/05/responsive-images-eleventy/
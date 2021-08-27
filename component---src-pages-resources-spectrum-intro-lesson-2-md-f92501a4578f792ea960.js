(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[8116],{61481:function(e,s,t){"use strict";t.r(s),t.d(s,{_frontmatter:function(){return c},default:function(){return m}});var n=t(22122),a=t(19756),o=(t(15007),t(64983)),p=t(99536),r=["components"],c={},i={_frontmatter:c},l=p.Z;function m(e){var s=e.components,t=(0,a.Z)(e,r);return(0,o.mdx)(l,(0,n.Z)({},i,t,{components:s,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"lesson-2-spectrum-css"},"Lesson 2: Spectrum CSS"),(0,o.mdx)("p",null,"Spectrum CSS is the CSS-only implementation of Spectrum."),(0,o.mdx)("h2",{id:"using-spectrum-css"},"Using Spectrum CSS"),(0,o.mdx)("p",null,"The preferred method of using Spectrum CSS relies on custom properties to swap out variables for different themes and colorstops. This has the lowest bundle size and the simplest usage, but is incompatible with < IE 11."),(0,o.mdx)("p",null,"Each component is released on npm as a separate, individually versioned package inside of the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/org/spectrum-css"},"@spectrum-css org"),"."),(0,o.mdx)("h2",{id:"building-a-simple-form-using-spectrum-css"},"Building a simple form using Spectrum CSS"),(0,o.mdx)("p",null,"This example will show how to build a simple form using Spectrum CSS. "),(0,o.mdx)("p",null,"To get started, install the following components:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"npm install @spectrum-css/vars @spectrum-css/typography @spectrum-css/page @spectrum-css/icon @spectrum-css/button @spectrum-css/textfield @spectrum-css/checkbox @spectrum-css/fieldlabel")),(0,o.mdx)("p",null,"Then simply include the stylesheets:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Include global variables first --\x3e\n<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css">\n\n\x3c!-- Include only the scales your application needs --\x3e\n<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css">\n<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-large.css">\n\n\x3c!-- Include only the colorstops your application needs --\x3e\n<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">\n\n\x3c!-- Include index-vars.css for all components you need --\x3e\n<link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css">\n<link rel="stylesheet" href="node_modules/@spectrum-css/typography/dist/index-vars.css">\n<link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css">\n<link rel="stylesheet" href="node_modules/@spectrum-css/textfield/dist/index-vars.css">\n<link rel="stylesheet" href="node_modules/@spectrum-css/fieldlabel/dist/index-vars.css">  \n')),(0,o.mdx)("p",null,"Then, make sure you've included the relevant classes to choose which scale and colorstop you want:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},'<html lang="en" dir="ltr" class="spectrum spectrum--medium spectrum--light"> \n')),(0,o.mdx)("p",null,"Then include the Adobe Fonts e.g. using your Typekit id. Visit ",(0,o.mdx)("a",{parentName:"p",href:"https://typekit.com/account/kits"},"https://typekit.com/account/kits")," to create one."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},"\x3c!-- mge7bvf is the Typekit id. Please don't reuse, it's not meant for production. --\x3e\n<script src=\"https://use.typekit.net/mge7bvf.js\"><\/script>\n<script>window.Typekit.load()<\/script>\n")),(0,o.mdx)("p",null,"Then you can start using components by copy/pasting their code from the ",(0,o.mdx)("a",{parentName:"p",href:"http://opensource.adobe.com/spectrum-css/"},"documentation"),".\nFor our example, we'll use following components: "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Heading: ",(0,o.mdx)("a",{parentName:"li",href:"https://opensource.adobe.com/spectrum-css/components/typography-heading/"},"https://opensource.adobe.com/spectrum-css/components/typography-heading/")),(0,o.mdx)("li",{parentName:"ul"},"Form: ",(0,o.mdx)("a",{parentName:"li",href:"https://opensource.adobe.com/spectrum-css/components/form/"},"https://opensource.adobe.com/spectrum-css/components/form/")),(0,o.mdx)("li",{parentName:"ul"},"CTA Button: ",(0,o.mdx)("a",{parentName:"li",href:"https://opensource.adobe.com/spectrum-css/components/button-cta/"},"https://opensource.adobe.com/spectrum-css/components/button-cta/")),(0,o.mdx)("li",{parentName:"ul"},"Textfield: ",(0,o.mdx)("a",{parentName:"li",href:"https://opensource.adobe.com/spectrum-css/components/textfield/"},"https://opensource.adobe.com/spectrum-css/components/textfield/")),(0,o.mdx)("li",{parentName:"ul"},"Checkbox: ",(0,o.mdx)("a",{parentName:"li",href:"https://opensource.adobe.com/spectrum-css/components/checkbox/"},"https://opensource.adobe.com/spectrum-css/components/checkbox/"))),(0,o.mdx)("p",null,"Resulting in the following code: "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},'\x3c!-- .spectrum-Typography will apply margins to all typography components like headings. --\x3e\n<main class="spectrum-Typography">\n  <h3 class="spectrum-Heading spectrum-Heading--M" id="login-label">Login</h3>\n  <form class="spectrum-Form spectrum-Form--labelsAbove" aria-labelledby="login-label" id="login">\n    <div class="spectrum-Form-item">\n      <label for="email" class="spectrum-Form-itemLabel spectrum-FieldLabel--left">Email</label>\n      <div class="spectrum-Form-itemField">\n        <input class="spectrum-Textfield" id="email" placeholder="Enter your email" name="email"/>\n      </div>\n    </div>\n    <div class="spectrum-Form-item">\n      <label class="spectrum-Form-itemLabel spectrum-FieldLabel--left" for="password">Password</label>\n      <div class="spectrum-Form-itemField">\n        <input class="spectrum-Textfield" type="password" placeholder="Enter your password" id="password">\n      </div>\n    </div>\n    <div class="spectrum-Form-item">\n      <div class="spectrum-Form-itemField">\n        <div class="spectrum-FieldGroup">\n          <label class="spectrum-Checkbox">\n            <input type="checkbox" class="spectrum-Checkbox-input">\n            <span class="spectrum-Checkbox-box">\n              <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">\n                <use xlink:href="#spectrum-css-icon-CheckmarkSmall"></use>\n              </svg>\n            </span>\n            <span class="spectrum-Checkbox-label">Remember me</span>\n          </label>\n        </div>\n      </div>\n    </div>\n    <button form="login" type="submit" class="spectrum-Button spectrum-Button--cta">\n        <span class="spectrum-Button-label">Login</span>\n    </button>\n  </form>\n</main>\n')),(0,o.mdx)("p",null,"The checkbox component requires the ",(0,o.mdx)("inlineCode",{parentName:"p"},"spectrum-css-icon-CheckmarkSmall")," SVG icon. It's recommended to use ",(0,o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/loadicons"},"loadicons")," to load the ",(0,o.mdx)("inlineCode",{parentName:"p"},"spectrum-css-icons.svg")," collection which includes that icon:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},"<script src=\"node_modules/loadicons/index.js\"><\/script>\n<script>\n  loadIcons('node_modules/@spectrum-css/icon/dist/spectrum-css-icons.svg');\n<\/script> \n")),(0,o.mdx)("p",null,"Spectrum supports the ",(0,o.mdx)("inlineCode",{parentName:"p"},":focus-visible")," property but you'll have to include a script to make it work across all browsers:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"npm i @adobe/focus-ring-polyfill \n")),(0,o.mdx)("p",null,"then include the script:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'<script src="node_modules/@adobe/focus-ring-polyfill/index.js"><\/script>\n')),(0,o.mdx)("p",null,"Now when you tab into a button for example, you should see a focus-ring appearing around the button: "),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"180px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.55555555555556%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/c1f968d1d228e9257d8134e1ed8f91a8/89b46/focus-ring.webp 180w"],sizes:"(max-width: 180px) 100vw, 180px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/c1f968d1d228e9257d8134e1ed8f91a8/e9ff0/focus-ring.png 180w"],sizes:"(max-width: 180px) 100vw, 180px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/c1f968d1d228e9257d8134e1ed8f91a8/e9ff0/focus-ring.png",alt:"focus-ring",title:"focus-ring",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"  "),(0,o.mdx)("h3",{id:"finally-"},"Finally ..."),(0,o.mdx)("p",null,"If you stick all pieces together, you should see following: "),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1068px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.187499999999996%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/0df0d38124f5e52d615f8b0d5b5f7e4e/cb523/web-assets.webp 320w","/project-firefly/static/0df0d38124f5e52d615f8b0d5b5f7e4e/797b9/web-assets.webp 640w","/project-firefly/static/0df0d38124f5e52d615f8b0d5b5f7e4e/80a15/web-assets.webp 1068w"],sizes:"(max-width: 1068px) 100vw, 1068px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/0df0d38124f5e52d615f8b0d5b5f7e4e/72799/web-assets.png 320w","/project-firefly/static/0df0d38124f5e52d615f8b0d5b5f7e4e/6af66/web-assets.png 640w","/project-firefly/static/0df0d38124f5e52d615f8b0d5b5f7e4e/d53ff/web-assets.png 1068w"],sizes:"(max-width: 1068px) 100vw, 1068px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/0df0d38124f5e52d615f8b0d5b5f7e4e/d53ff/web-assets.png",alt:"app",title:"app",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"  "),(0,o.mdx)("p",null,"That's quite some work therefore ",(0,o.mdx)("strong",{parentName:"p"},"Spectrum CSS should only be used by implementations of Spectrum, or very simple applications that only need things like typography, textfields etc.")),(0,o.mdx)("p",null,"Adobe maintains separate JavaScript libraries written with React, Angular, and web components that use Spectrum CSS to create fully interactive Spectrum components.\nThese libraries support font loading, SVG icons and have built-in accessibility and internationalization. We recommend using them over Spectrum CSS. "))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-spectrum-intro-lesson-2-md-f92501a4578f792ea960.js.map
(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[6124],{9753:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return d}});var a=n(22122),i=n(19756),r=(n(15007),n(64983)),l=n(99536),o=["components"],s={},p={_frontmatter:s},m=l.Z;function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.mdx)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"lesson-3-end-to-end-test"},"Lesson 3: End to end test"),(0,r.mdx)("p",null,"In the previous lessons, we have setup two firefly apps:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Event provider that automatically generating events "),(0,r.mdx)("li",{parentName:"ul"},"Event consumer that automatically pulling from journaling api and write to firefly storage")),(0,r.mdx)("p",null,"If you would like to config the alarm package to automatically trigger events or pulling events from journaling API, let's setup ",(0,r.mdx)("inlineCode",{parentName:"p"},"manifest.yml")," and try the ",(0,r.mdx)("inlineCode",{parentName:"p"},"/whisk.system/alarms/interval")," feed of the OpenWhisk Alarm Package to fire trigger events on an interval base schedule. To see the effect instantly, we will make it run every minute. You will need a trigger set up with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"/whisk.system/alarms/interval")," feed, and a rule to wire this trigger to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"publish-event")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"consume-event")," action created earlier."),(0,r.mdx)("p",null,"The only required param for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"interval")," feed is ",(0,r.mdx)("inlineCode",{parentName:"p"},"minutes"),", which is an integer representing the length of the interval (in minutes) between trigger fires. Optional params are ",(0,r.mdx)("inlineCode",{parentName:"p"},"trigger_payload"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"startDate")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"stopDate"),"."),(0,r.mdx)("p",null,"Now we deployed these two apps separately in different namespaces, we can configure these two apps at different paces to trigger. if succesful, the events will be stored in the firefly database. "))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-journaling-events-lesson-3-md-c9bdcd27366d7b4abd41.js.map
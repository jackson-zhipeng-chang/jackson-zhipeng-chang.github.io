(this["webpackJsonpjackson-website"]=this["webpackJsonpjackson-website"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"basics":{"name":"Jackson Chang","label":"Software Engineer","picture":"images/jchang.jpeg","x_pictureFallback":"images/jchang.jpeg","x_title":"Hello, World!","summary":"A full-stack software developer with a demonstrated history of 2+ years working experience with web application development. Loves coding and solving problems. Highly teachable, helpful, motivated, and detail oriented.","location":{"country":"Canada","countryCode":"CA","region":"Edmonton"},"profiles":[{"network":"LinkedIn","username":"jzchang","url":"https://www.linkedin.com/in/jzchang","x_icon":"fab fa-2x fa-linkedin"},{"network":"GitHub","username":"Zhipeng-Chang","url":"https://github.com/Zhipeng-Chang","x_icon":"fab fa-2x fa-github"},{"network":"Email","username":"Zhipeng-Chang","url":"mailto:zchang0302@gmail.com","x_icon":"fas fa-2x fa-envelope"}]},"work":[{"company":"Alberta Motor Association","position":"Software Engineer","website":"https://www.ama.ab.ca","startDate":"2020-04-01","endDate":"","summary":"Building web apps using React.js and AWS.","highlights":["React.js, Jest, enzyme, AWS"]},{"company":"City of Edmonton","position":"Junior Software Developer Summer Student","website":"https://www.edmonton.ca/city_government/city_organization/open-city-technology.aspx","startDate":"2019-06-01","endDate":"2019-08-31","summary":"Rehired by my previous team, worked on .NET/C#, React.js, GCP development","highlights":[".NET/C#, React.js, GCP"]},{"company":"City of Edmonton","position":"Junior Software Developer Co-op Student","website":"https://www.edmonton.ca/city_government/city_organization/open-city-technology.aspx","startDate":"2018-06-01","endDate":"2018-12-31","summary":"My first internship, developed several web apps in .NET/C#, React.js, and GCP development.","highlights":[".NET/C#, React.js, GCP"]},{"company":"University of Alberta","position":"Software Developer","website":"https://www.ualberta.ca","startDate":"2018-04-01","endDate":"2018-09-01","summary":"Mobile App Backend developer. Develop a \u201cgeo-app\u201d that will collect data from pedestrians regarding their location, routes, speed, stopping periods at intersections and their perception of the built space they\u2019re walking through for a research group.","highlights":["Android Studio, Google API, ArcGIS"]}],"education":[{"institution":"University of Alberta","area":"BSc Honors in Computing Science with Science Internship Program","studyType":"Bachelor","startDate":"2015-10-01","endDate":"2020-01-01","courses":["Object Oriented Programming","Database Management Systems","Operating systems and computers architectures","Requirements Engineering"]}],"skills":[{"name":"Javascript","level":"Advanced","keywords":["Languages"]},{"name":"Python","level":"Advanced","keywords":["Languages"]},{"name":"C","level":"Basic","keywords":["Languages"]},{"name":"Java","level":"Intermediate","keywords":["Languages"]},{"name":"C#","level":"Intermediate","keywords":["Languages"]},{"name":"HTML5","level":"Intermediate","keywords":["Languages"]},{"name":"CSS3","level":"Intermediate","keywords":["Languages"]},{"name":"React.js","level":"Advanced","keywords":["Software Developer"]},{"name":"Django","level":"Advanced","keywords":["Software Developer"]},{"name":"Node.js","level":"Intermediate","keywords":["Software Developer"]},{"name":".NET","level":"Intermediate","keywords":["Software Developer"]},{"name":"Spring Boot","level":"Basic","keywords":["Software Developer"]},{"name":"AWS Cloud Computing","level":"Intermediate","keywords":["Software Developer"]},{"name":"Docker/Kubernetes","level":"Basic","keywords":["Software Developer"]}],"languages":[{"language":"English","fluency":"Fluent speaker"},{"language":"Mandarin","fluency":"Native speaker"}],"interests":[{"name":"Dog lover","x_icon":"fa-dog"}],"projects":[]}')},20:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),c=s.n(n),i=s(11),r=s.n(i),l=s(4),o=s(5),d=s(8),j=s(7),h=s(6);var m=function(e){return Object(a.jsx)("a",{href:e.href,className:"navbar-item is-unselectable",children:e.text})},b=s(1),u=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={showMenu:!1},a.handleMenuClick=a.handleMenuClick.bind(Object(h.a)(a)),a}return Object(o.a)(s,[{key:"handleMenuClick",value:function(e){var t=this.state.showMenu;this.setState({showMenu:!t})}},{key:"render",value:function(){return Object(a.jsx)("nav",{className:"navbar is-transparent",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"navbar-brand",children:[Object(a.jsx)("a",{href:"/",className:"navbar-item title is-unselectable my-name",children:b.basics.name}),Object(a.jsxs)("span",{className:"navbar-burger burger",onClick:this.handleMenuClick,children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{})]})]}),Object(a.jsx)("div",{className:"navbar-menu nav-menu "+(this.state.showMenu?"is-active":null),children:Object(a.jsxs)("div",{className:"navbar-end",onClick:this.handleMenuClick,children:[Object(a.jsx)(m,{text:"About Me",href:"#aboutMe"}),Object(a.jsx)(m,{text:"Education",href:"#education"}),Object(a.jsx)(m,{text:"Experience",href:"#experience"}),Object(a.jsx)(m,{text:"Skills",href:"#skills"}),0!==b.projects.length&&Object(a.jsx)(m,{text:"Projects",href:"#projects"})]})})]})})}}]),s}(c.a.Component);var x=function(){return Object(a.jsxs)("section",{className:"hero is-dark is-fullheight has-bg-image",children:[Object(a.jsx)("div",{className:"hero-head",children:Object(a.jsx)(u,{})}),Object(a.jsx)("div",{className:"hero-body",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("p",{className:"subtitle is-5 has-text-weight-light",children:"I'm a"}),Object(a.jsx)("h1",{className:"title",children:b.basics.label}),Object(a.jsxs)("h2",{className:"subtitle",children:[b.basics.location.region,", ",b.basics.location.country]})]})}),Object(a.jsx)("div",{className:"hero-foot",style:{paddingBottom:"20px"},children:Object(a.jsxs)("div",{className:"columns is-mobile",children:[Object(a.jsx)("div",{className:"column"}),b.basics.profiles.map((function(e,t){return Object(a.jsx)("div",{className:"column has-text-centered",children:Object(a.jsx)("a",{href:e.url,target:"blank",className:"is-hovered",title:e.network,children:Object(a.jsx)("span",{className:"icon is-medium is-",children:Object(a.jsx)("i",{className:e.x_icon})})})},t)})),Object(a.jsx)("div",{className:"column"})]})})]})};var p=function(){return Object(a.jsx)("header",{children:Object(a.jsx)(x,{})})};var g=function(e){var t="fas fa-1x "+e.faIcon;return Object(a.jsx)("div",{className:"control",children:Object(a.jsxs)("div",{className:"tags has-addons",children:[Object(a.jsx)("span",{className:"tag is-dark",children:e.text}),Object(a.jsx)("span",{className:"tag is-success",children:Object(a.jsx)("i",{className:t})})]})})};var O=function(){return Object(a.jsx)("section",{className:"section",id:"aboutMe",children:Object(a.jsxs)("div",{className:"container has-text-centered",children:[Object(a.jsx)("figure",{className:"image container is-180x180",children:Object(a.jsx)("img",{width:"180px",height:"180px",src:b.basics.picture,alt:b.basics.name,className:"is-rounded",onError:function(e){e.target.onerror=null,e.target.src=b.basics.x_pictureFallback}})}),Object(a.jsx)("p",{className:"subtitle is-4 has-text-weight-bold",children:b.basics.x_title}),Object(a.jsx)("p",{className:"subtitle is-5 has-text-weight-bold summary-text",children:b.basics.summary}),Object(a.jsx)("div",{className:"container interests",children:Object(a.jsx)("div",{className:"field is-grouped is-grouped-multiline has-text-centered",children:b.interests.map((function(e,t){return Object(a.jsx)(g,{text:e.name,faIcon:e.x_icon},t)}))})})]})})},v=s(12),f={Advanced:100,Intermediate:66,Basic:33};var N=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"title is-5 is-spaced",children:e.text}),Object(a.jsx)("span",{className:"subtitle is-6 skill-percentage",children:e.level}),Object(a.jsxs)("progress",{className:"progress is-success",value:f[e.level],max:"100",children:[f[e.level],"%"]})]})};function w(e){var t=[],s=0;return Object.entries(e).forEach((function(e){var n=Object(v.a)(e,2),c=n[0],i=n[1];t.push(Object(a.jsx)("li",{children:Object(a.jsx)(N,{text:c,level:i},s)},s)),s++})),t}var y=function(e){var t=e.skills;return Object(a.jsx)("ul",{className:"skill-list",children:w(t)})};var k=function(){return Object(a.jsx)("section",{className:"section",id:"skills",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"Skills"}),Object(a.jsxs)("div",{className:"columns",children:[Object(a.jsxs)("div",{className:"column is-6",children:[Object(a.jsxs)("div",{className:"has-text-centered",children:[Object(a.jsx)("span",{className:"icon has-text-link",children:Object(a.jsx)("i",{className:"fas fa-3x fa-cogs"})}),Object(a.jsx)("h2",{className:"title is-5",children:"Programming Languages"})]}),Object(a.jsx)(y,{skills:b.skills.filter((function(e){return e.keywords.includes("Languages")})).reduce((function(e,t){return e[t.name]=t.level,e}),{})})]}),Object(a.jsxs)("div",{className:"column is-6",children:[Object(a.jsxs)("div",{className:"has-text-centered",children:[Object(a.jsx)("span",{className:"icon has-text-link",children:Object(a.jsx)("i",{className:"fas fa-3x fa-laptop-code"})}),Object(a.jsx)("h2",{className:"title is-5",children:"Software Development"})]}),Object(a.jsx)(y,{skills:b.skills.filter((function(e){return e.keywords.includes("Software Developer")})).reduce((function(e,t){return e[t.name]=t.level,e}),{})})]})]})]})})};var D=function(e){return Object(a.jsxs)("div",{className:"timeline-item is-success",children:[Object(a.jsx)("div",{className:"timeline-marker is-image is-32x32",children:Object(a.jsx)("img",{src:"",alt:""})}),Object(a.jsxs)("div",{className:"timeline-content",children:[Object(a.jsx)("h1",{className:"title is-5",children:e.position}),Object(a.jsxs)("p",{className:"heading",children:[e.startDate," - ","Invalid Date"===e.endDate?"present":e.endDate]}),Object(a.jsx)("h1",{className:"title is-4",children:Object(a.jsx)("a",{className:"has-text-black",href:e.website,children:e.company})}),Object(a.jsx)("p",{style:{maxWidth:"25em"},children:e.summary}),Object(a.jsx)("p",{style:{maxWidth:"25em",fontWeight:"bold"},children:e.highlights})]})]})};var C=function(){var e=[];return Object(a.jsxs)("div",{className:"timeline is-centered",children:[Object(a.jsx)("header",{className:"timeline-header",children:Object(a.jsx)("span",{className:"tag is-medium is-dark",children:(new Date).getFullYear()})}),Object(a.jsxs)("div",{className:"timeline-item",children:[Object(a.jsx)("div",{className:"timeline-marker is-success"}),Object(a.jsx)("div",{className:"timeline-content"})]}),b.work.map((function(e){return new Date(e.startDate).getFullYear()})).map((function(t,s){var n=[];return e.includes(t)||(e.push(t),n.push(Object(a.jsx)("header",{className:"timeline-header",children:Object(a.jsx)("span",{className:"tag is-success",children:t})},s)),n.push(b.work.filter((function(e){return new Date(e.startDate).getFullYear()===t})).map((function(e,t){return Object(a.jsx)(D,{startDate:new Date(e.startDate).toLocaleString("en-CA",{month:"long",year:"numeric"}),endDate:new Date(e.endDate).toLocaleString("en-CA",{month:"long",year:"numeric"}),company:e.company,position:e.position,website:e.website,summary:e.summary,highlights:e.highlights},t)})))),n}))]})};var S=function(){return Object(a.jsx)("section",{className:"section",id:"experience",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"Experience"}),Object(a.jsx)(C,{})]})})};var A=function(e){return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("div",{className:"card-header",children:[Object(a.jsx)("a",{href:e.url,target:"blank",children:Object(a.jsx)("p",{className:"card-header-title",children:e.title})}),Object(a.jsx)("a",{href:e.url,target:"blank",className:"card-header-icon","aria-label":"Dev Community",children:Object(a.jsx)("span",{className:"icon",children:Object(a.jsx)("i",{className:"fab fa-2x fa-dev"})})})]}),Object(a.jsx)("div",{className:"card-image",children:Object(a.jsx)("figure",{className:"image",children:Object(a.jsx)("img",{width:"1000",height:"420",src:e.image,alt:""})})}),Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("h1",{className:"heading",children:"DEV.TO"}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("p",{children:e.extract})}),Object(a.jsx)("a",{href:e.url,target:"blank",children:"Read the full article"})]})]})};var E=function(){var e=[];b.projects.forEach((function(t,s){e.push(Object(a.jsx)("div",{className:"column",children:Object(a.jsx)(A,{title:t.title,url:t.url,image:t.cover_image,extract:t.description},s)},s))}));for(var t=4-b.projects.length,s=0;s<t;s++)e.push(Object(a.jsx)("div",{className:"column"}));return e};var M=function(){return 0!==b.projects.length?Object(a.jsx)("section",{className:"section",id:"projects",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"Projects"}),Object(a.jsx)(E,{})]})}):Object(a.jsx)(a.Fragment,{})};var I=function(){return Object(a.jsx)("section",{className:"section",id:"education",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"Education"}),Object(a.jsxs)("div",{className:"has-text-centered",children:[Object(a.jsx)("span",{className:"icon has-text-link",children:Object(a.jsx)("i",{className:"fas fa-3x fa-graduation-cap"})}),Object(a.jsxs)("div",{className:"education-information",children:[Object(a.jsx)("p",{className:"heading",children:b.education[0].studyType}),Object(a.jsx)("p",{className:"title is-4",children:Object(a.jsxs)("a",{href:"https://www.ualberta.ca",className:"has-text-black",children:[" ",Object(a.jsx)("strong",{children:"University of Alberta"})," "]})}),Object(a.jsx)("p",{className:"title is-5",children:b.education[0].area}),Object(a.jsxs)("p",{className:"title is-6",children:[new Date(b.education[0].startDate).toLocaleString("en-CA",{month:"long",year:"numeric"})," - ",new Date(b.education[0].endDate).toLocaleString("en-CA",{month:"long",year:"numeric"})]})]})]})]})})};var L=function(){return Object(a.jsxs)("main",{children:[Object(a.jsx)(O,{}),Object(a.jsx)(I,{}),Object(a.jsx)(S,{}),Object(a.jsx)(k,{}),Object(a.jsx)(M,{})]})};var _=function(){return Object(a.jsx)("footer",{className:"footer ",id:"footer",children:Object(a.jsx)("div",{className:"content has-text-centered has-text-white",children:Object(a.jsxs)("p",{children:["Built by"," ",Object(a.jsx)("a",{href:"https://github.com/Zhipeng-Chang",className:"has-text-white",children:Object(a.jsx)("strong",{children:"Jackson Zhipeng Chang"})})]})})})},B=s(10);B.a.initialize("UA-89926853-1"),B.a.pageview("/homepage");var P=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){document.title=[b.basics.name,b.basics.label,[b.basics.location.region,b.basics.location.country].join(", ")].join(" | ")}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{}),Object(a.jsx)(L,{}),Object(a.jsx)(_,{})]})}}]),s}(n.Component);r.a.render(Object(a.jsx)(P,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.58be44e0.chunk.js.map
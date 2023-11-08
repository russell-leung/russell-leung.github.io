(function(){var e={6615:function(e,n,t){"use strict";var i=t(9242),o=t(3396);function a(e,n,t,i,a,r){const s=(0,o.up)("MainPage");return(0,o.wg)(),(0,o.j4)(s)}function r(e,n,t,i,a,r){const s=(0,o.up)("NavBar"),c=(0,o.up)("HomePage"),l=(0,o.up)("PortfolioPage"),u=(0,o.up)("ExperiencePage"),d=(0,o.up)("ContactPage");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s),(0,o.Wm)(c),(0,o.Wm)(l),(0,o.Wm)(u),(0,o.Wm)(d)])}var s=t(7139);const c=e=>((0,o.dD)("data-v-3bd9f718"),e=e(),(0,o.Cn)(),e),l={id:"navBar"},u=c((()=>(0,o._)("div",null,[(0,o._)("h1",{class:"logo",id:"logoLarge"},"Russell Leung"),(0,o._)("h1",{class:"logo",id:"logoSmall"},"RL")],-1))),d={id:"linksContainer"},p={id:"links"},h=["href"],g={key:0,id:"navBarDropdown"},m=["href"];function f(e,n,t,i,a,r){const c=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",l,[u,(0,o._)("div",d,[(0,o._)("ul",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.links,((e,n,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},[(0,o._)("a",{rel:"noopener",href:e},(0,s.zw)(n),9,h)])))),128))]),(0,o._)("div",null,[(0,o.Wm)(c,{icon:["fas","bars"],id:"hamburgerMenu",onClick:n[0]||(n[0]=e=>r.openNavDropdown())})])])]),a.showNavDropdown?((0,o.wg)(),(0,o.iD)("div",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.links,((e,t,i)=>((0,o.wg)(),(0,o.iD)("div",{key:i,class:"navBarDropdownItem",onClick:n[1]||(n[1]=e=>r.closeDropdownMenu())},[(0,o._)("a",{rel:"noopener",href:e},(0,s.zw)(t),9,m)])))),128))])):(0,o.kq)("",!0)],64)}var v={name:"NavBar",data(){return{links:{Home:"#",Portfolio:"#portfolioPage",Experience:"#experiencePage",Contact:"#contactPage"},showNavDropdown:!1}},methods:{openNavDropdown(){this.showNavDropdown=!this.showNavDropdown},closeDropdownMenu(){this.showNavDropdown=!1}}},w=t(89);const y=(0,w.Z)(v,[["render",f],["__scopeId","data-v-3bd9f718"]]);var k=y;const b=e=>((0,o.dD)("data-v-3ffc9972"),e=e(),(0,o.Cn)(),e),_={id:"homePage"},C=b((()=>(0,o._)("div",{id:"greeting"},[(0,o._)("h2",{id:"greetingTop"},"Hi, I'm"),(0,o._)("h1",{id:"greetingBottom"},"Russell Leung")],-1))),D=b((()=>(0,o._)("div",{id:"aboutMe"}," I'm a college student studying Computer Science at Northeastern University! I'm looking to pursue a career in and have experience with Full-Stack development. ",-1))),S=[C,D];function x(e,n,t,i,a,r){return(0,o.wg)(),(0,o.iD)("div",_,S)}var P={name:"HomePage"};const I=(0,w.Z)(P,[["render",x],["__scopeId","data-v-3ffc9972"]]);var M=I;const H=e=>((0,o.dD)("data-v-4e8f10ec"),e=e(),(0,o.Cn)(),e),T={id:"portfolioPage"},j=H((()=>(0,o._)("div",null,[(0,o._)("h1",null,"Portfolio"),(0,o._)("h2",null,"Here is a few projects I've worked on!")],-1))),E={id:"projectsContainer"},B={class:"projectCard"},N=["alt","src"],L=["href"];function O(e,n,i,a,r,c){return(0,o.wg)(),(0,o.iD)("div",T,[j,(0,o._)("div",E,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.projects,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:"projectCardContainer"},[(0,o._)("div",B,[(0,o._)("img",{alt:e["title"],src:t(9255)(`./${n}.png`)},null,8,N),(0,o._)("h3",null,(0,s.zw)(e["title"]),1),(0,o._)("p",null,(0,s.zw)(e["description"]),1),(0,o._)("p",null,[(0,o._)("a",{href:e["link"],target:"_blank"},"Check it out!",8,L)])])])))),128))])])}var A={name:"PortfolioPage",data(){return{projects:{personalPortfolioWebsite:{title:"Personal Portfolio Website",link:"https://github.com/russell-leung/personal-portfolio",description:"A personal portfolio website to showcase my skills as a software developer, built with Vue.js, HTML, and CSS. In fact it is the website that you are currently viewing."},hangman:{title:"Hangman",link:"https://github.com/russell-leung/hangman",description:"A hangman game built with Python. It provides more than 800 words to guess from, and allows users to play multiple games in a row."},bank:{title:"Bank",link:"https://github.com/russell-leung/ATM",description:"A bank program that allows users to create accounts, deposit, withdraw, and transfer money, and view their transaction history. Built with Python."},war:{title:"War Simulation",link:"https://github.com/russell-leung/war",description:"A simulation of the card game War, built with Python. The program simulates 10 games of War, and outputs the average number of rounds it takes to win a game of War."}}}}};const q=(0,w.Z)(A,[["render",O],["__scopeId","data-v-4e8f10ec"]]);var W=q;const z=e=>((0,o.dD)("data-v-791569ad"),e=e(),(0,o.Cn)(),e),F={id:"experiencePage"},Y=z((()=>(0,o._)("h1",null,"Experience",-1))),K={id:"techStackContainer"},$={id:"techStackIconsContainer"},J={id:"techStackDescriptionContainer",ref:"techStackDescriptionContainer"},U={id:"techStackDescriptionTitle",ref:"techStackDescriptionTitle"},Z={id:"techStackDescription",ref:"techStackDescription"},G={id:"experienceContainer"},R={id:"workExperienceContainer"},Q=z((()=>(0,o._)("h4",null,"Work Experience",-1))),V={class:"experienceSection"},X={class:"experienceCardTitle"},ee={class:"experienceCardSecondaryTitle"},ne={id:"educationExperienceContainer"},te=z((()=>(0,o._)("h4",null,"Education Experience",-1))),ie={class:"experienceSection"},oe={class:"experienceCardTitle"},ae={class:"experienceCardSecondaryTitle"};function re(e,n,t,i,a,r){const c=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",F,[Y,(0,o._)("div",null,[(0,o._)("div",K,[(0,o._)("div",$,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.techStackIcons,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n},[(0,o.Wm)(c,{icon:["fab",n],alt:e,id:n,class:"icon techStackIcon",onClick:e=>r.changeTechStackDescription(n)},null,8,["icon","alt","id","onClick"])])))),128))]),(0,o._)("div",J,[(0,o.Wm)(c,{icon:["fas","x"],class:"icon",id:"closeDescription",style:{float:"right"},onClick:n[0]||(n[0]=e=>r.hideTechStackDescription())}),(0,o._)("h4",U,"Click an Icon above to learn more!",512),(0,o._)("p",Z,null,512)],512)]),(0,o._)("div",G,[(0,o._)("div",R,[Q,(0,o._)("div",V,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.workExperience,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:"experienceCard"},[(0,o._)("p",X,[(0,o._)("b",null,(0,s.zw)(n),1)]),(0,o._)("ul",null,[(0,o._)("p",ee,[(0,o._)("b",null,[(0,o._)("u",null,(0,s.zw)(e["jobTitle"]),1)])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e["experienceBulletPoints"],((e,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n,class:"experienceCardBulletPoint"},(0,s.zw)(e),1)))),128))])])))),128))])]),(0,o._)("div",ne,[te,(0,o._)("div",ie,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.educationExperience,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:"experienceCard"},[(0,o._)("p",oe,[(0,o._)("b",null,(0,s.zw)(n),1)]),(0,o._)("ul",null,[(0,o._)("p",ae,[(0,o._)("b",null,[(0,o._)("u",null,(0,s.zw)(e["degree"]),1)])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e["experienceBulletPoints"],((e,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n,class:"experienceCardBulletPoint"},(0,s.zw)(e),1)))),128))])])))),128))])])])])])}var se={name:"ExperiencePage",data(){return{currentTechStackIcon:null,techStackIcons:{js:"I have 3+ years of experience with JavaScript (JS). I've used JS, Node.js, JQuery, and Vue.js both in personal projects, such as this website you're viewing currently, as well as in my prior internship experience at HydraCor, LLC as a Software Developer Intern.",python:"I have 4+ years of experience with Python. I've used Django, Flask, and NumPy in personal projects and classes. I'm familiar with Python Object Oriented Programming and Data Structures.",java:"I have about a year of experience using Java. I earned a 5 on the AP Computer Science A test, and am familiar with basic Java Object Oriented Programming and Algorithms.",html5:"I have 4+ years of experience using HTML (HyperText Markup Language) via multiple classes and projects, like the website you are viewing now. You can find more examples on my github (https://github.com/russell-leung)",css3:"I have 4+ years of experience using CSS (Cascading Style Sheets) throught many projects and classes, similar to HTML as they go hand in hand. I also have experience using TailwindCSS and Bootstrap.",php:"I have about 2 years of experience using PHP via personal projects and my internship at HydraCor, LLC. I have experience using CakePHP, a PHP framework. I've used PHP to create API endpoints and write server-side web application logic along with SQL and MariaDB.",linux:"I have about a year of experience with Linux. I've used Linux (Ubuntu) during my internship at HydraCor, LLC. I'm also familiar with Unix (MacOS).",git:"I've been using Git and GitHub for 4+ years now. I'm very familiar with version control. Checkout my github @russell-leung (<a>https://github.com/russell-leung</a>) for some of my projects!"},workExperience:{HydraCor:{jobTitle:"Software Developer Intern",experienceBulletPoints:["Created a QR Code generation and display system","Discovered and squashed bugs","Advised and aided junior developers and peers","Refactored and optimized legacy code throughout the codebase","Authored unit tests and database migrations"]},"Haverhill Public Schools":{jobTitle:"Senior Additive Manufacturing Instructor",experienceBulletPoints:["Instructed middle and elementary students","Developed a comprehensive 3D printing curriculum","Innovated by broadening the program to encompass underrepresented STEM demographics","Led the program, overseeing junior STEM interns"]}},educationExperience:{"Northeastern University":{degree:"B.S. Computer Science",experienceBulletPoints:["est. Grad Date 2026","Concentration in Software Engineering","Northeastern Honors","NEU Oasis"]},"Haverhill High School":{degree:"High School Diploma",experienceBulletPoints:["CVTE Computer Science Academy","STEM Academy","Classical Academy","Advanced Placement (AP)","Dual Enrollment @ NECC"]}}}},methods:{changeTechStackDescription(e){this.currentTechStackIcon&&(document.querySelector(`#${this.currentTechStackIcon}`).style.color="inherit"),this.currentTechStackIcon=e,document.querySelector(`#${e}`).style.color="#F1A208",this.$refs.techStackDescriptionTitle.innerHTML=e.toUpperCase(),this.$refs.techStackDescription.innerHTML=this.techStackIcons[e],this.$refs.techStackDescriptionContainer.style.display="block"},hideTechStackDescription(){this.currentTechStackIcon&&(document.querySelector(`#${this.currentTechStackIcon}`).style.color="inherit"),this.$refs.techStackDescriptionContainer.style.display="none"}}};const ce=(0,w.Z)(se,[["render",re],["__scopeId","data-v-791569ad"]]);var le=ce;const ue=e=>((0,o.dD)("data-v-39195cc2"),e=e(),(0,o.Cn)(),e),de={id:"contactPage"},pe=ue((()=>(0,o._)("h1",null,"Contact Me",-1))),he={key:0,id:"contactMessageContainer"},ge={id:"contactMessage"},me={id:"contactContainer"},fe=ue((()=>(0,o._)("div",{id:"loading-bar-spinner",class:"spinner",style:{display:"none"}},[(0,o._)("div",{class:"spinner-icon"})],-1))),ve=["id","name","type","placeholder","required"],we={ref:"submitButton",type:"submit",value:"Contact Me!",id:"contact-form-submit-btn"},ye={id:"contactInfo"},ke=ue((()=>(0,o._)("p",null,[(0,o._)("b",null,"Contact Information")],-1))),be=["href"],_e=ue((()=>(0,o._)("br",null,null,-1))),Ce=ue((()=>(0,o._)("p",null,[(0,o._)("b",null,"Social Media")],-1))),De=["href"];function Se(e,n,t,a,r,c){const l=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",de,[pe,r.showContactMessage?((0,o.wg)(),(0,o.iD)("div",he,[(0,o.Wm)(l,{icon:["fas","x"],class:"icon",style:{float:"right"},onClick:n[0]||(n[0]=e=>c.hideContactMessage())}),(0,o._)("h4",ge,(0,s.zw)(r.contactMessage),1)])):(0,o.kq)("",!0),(0,o._)("div",me,[fe,(0,o._)("form",{id:"contactForm",ref:"contactForm",onSubmit:n[1]||(n[1]=(0,i.iM)((e=>c.submitForm()),["prevent"]))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.formFields,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n},[(0,o._)("input",{id:n,name:n,type:e["type"],placeholder:e["placeholder"],required:e["required"]},null,8,ve)])))),128)),(0,o._)("input",we,null,512)],544),(0,o._)("div",ye,[(0,o._)("div",null,[ke,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.emails,(e=>((0,o.wg)(),(0,o.iD)("p",{key:e},[(0,o._)("a",{href:"mailto:"+e},(0,s.zw)(e),9,be)])))),128))]),_e,(0,o._)("div",null,[Ce,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.socialMedia,((e,n)=>((0,o.wg)(),(0,o.iD)("p",{key:n},[(0,o._)("a",{href:e["link"],target:"_blank"},[(0,o.Wm)(l,{icon:["fab",n]},null,8,["icon"]),(0,o.Uk)(" "+(0,s.zw)(e["handle"]),1)],8,De)])))),128))])])])])}var xe=t(4294),Pe={name:"ContactPage",data(){return{formFields:{fullName:{type:"text",placeholder:"Full Name",required:!0},email:{type:"email",placeholder:"Email",required:!0},message:{type:"text",placeholder:"Message",required:!0}},emails:["contact-me@russell-leung.com"],socialMedia:{linkedin:{handle:"Russell Leung",link:"https://www.linkedin.com/in/russell-leung/"},instagram:{handle:"ru.leung",link:"https://www.instagram.com/ru.leung/"}},showContactMessage:!1,contactMessage:""}},methods:{submitForm(){this.$refs.submitButton.style.disabled="disabled",document.querySelector("#loading-bar-spinner").style.display="block";let e=document.querySelector("#fullName").value,n=document.querySelector("#email").value,t=document.querySelector("#message").value;xe.ZP.send("service_hqooctc","template_r5zjfh7",{reply_to:e,message:t,email:n},"KmBAJApgiWb5lMjxe").then((()=>{this.$refs.contactForm.reset(),this.contactMessage="Thank you for contacting me! Expect to hear back soon!"}),(e=>{console.log(e),this.contactMessage="Form submission failed. Please try again."})).finally((()=>{this.$refs.submitButton.style.disabled=!1,document.querySelector("#loading-bar-spinner").style.display="none",this.showContactMessage=!0,setTimeout((()=>{this.showContactMessage=!1}),1e4)}))},hideContactMessage(){this.showContactMessage=!1}}};const Ie=(0,w.Z)(Pe,[["render",Se],["__scopeId","data-v-39195cc2"]]);var Me=Ie,He={name:"MainPage",components:{NavBar:k,HomePage:M,PortfolioPage:W,ExperiencePage:le,ContactPage:Me}};const Te=(0,w.Z)(He,[["render",r]]);var je=Te,Ee={name:"App",components:{MainPage:je}};const Be=(0,w.Z)(Ee,[["render",a]]);var Ne=Be,Le=t(3494),Oe=t(7749),Ae=t(4551),qe=t(8539);Le.vI.add(Ae.DTC,Ae.Bmx,Ae.P$n,Ae.GJX,Ae.Gu1,Ae.r1q,Ae.qJE,Ae.XSg,qe.EOp,Ae.D9H,Ae.Zzi,qe.xiG),(0,i.ri)(Ne).component("font-awesome-icon",Oe.GN).mount("#app")},9255:function(e,n,t){var i={"./bank.png":7356,"./hangman.png":7303,"./personalPortfolioWebsite.png":2503,"./war.png":9502};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id=9255},7356:function(e,n,t){"use strict";e.exports=t.p+"img/bank.d1c8bef4.png"},7303:function(e,n,t){"use strict";e.exports=t.p+"img/hangman.040a0066.png"},2503:function(e,n,t){"use strict";e.exports=t.p+"img/personalPortfolioWebsite.66aaa669.png"},9502:function(e,n,t){"use strict";e.exports=t.p+"img/war.767336d2.png"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={exports:{}};return e[i].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,i,o,a){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,c=0;c<i.length;c++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](i[c])}))?i.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(u--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var o,a,r=i[0],s=i[1],c=i[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var u=c(t)}for(n&&n(i);l<r.length;l++)a=r[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},i=self["webpackChunkpersonal_portfolio"]=self["webpackChunkpersonal_portfolio"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(6615)}));i=t.O(i)})();
//# sourceMappingURL=app.476c1137.js.map
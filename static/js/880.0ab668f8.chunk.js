"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[880],{880:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(434),r=t(351),s="Contacts_contacts__Eg+6p",i=t(208),l=t(184),o=function(){var e=(0,a.I0)(),n=(0,a.v9)(r.Af);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{className:s,children:n.map((function(n){return(0,l.jsxs)("li",{children:[n.name,": ",n.phone,(0,l.jsx)("button",{type:"button",onClick:function(){e((0,i.GK)(n.id))},children:"Delete"})]},n.id)}))})})},c=t(895),d="Filter_wrapper__9Ksqy",u=t(763),h=function(){var e=(0,a.I0)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)("div",{className:d,children:(0,l.jsx)("label",{htmlFor:"filter",children:(0,l.jsx)("input",{placeholder:"search by name",id:"filter",type:"search",onChange:(0,u.debounce)((function(n){var t=n.target.value.toLowerCase();e((0,c.T)(t))}),500)})})})]})},m=t(686),p=function(){var e=(0,a.v9)(r.Af),n=(0,a.I0)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"Phonebook"}),(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=t.target,r=a.elements.name.value;if(e.some((function(e){return e.name.toLowerCase()===r.toLowerCase()})))m.Notify.failure("Hey, ".concat(r," is already in the phonebook"));else{var s=a.elements.number.value;n((0,i.uK)({name:r,number:s}))}a.reset()},children:[(0,l.jsxs)("label",{children:["Name:",(0,l.jsx)("input",{type:"text",name:"name",autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("label",{children:["Phone number:",(0,l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]})]})};function f(){var e=(0,a.v9)(r.Af).isLoading;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"YOUR CONTATCS"}),(0,l.jsxs)("div",{className:"app",children:[(0,l.jsx)(p,{}),(0,l.jsx)(h,{}),e&&(0,l.jsx)("p",{children:"Loading..."}),(0,l.jsx)(o,{})]})]})}}}]);
//# sourceMappingURL=880.0ab668f8.chunk.js.map
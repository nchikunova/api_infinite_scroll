(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4xUq":function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,o){var r,l=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,c=n.escapeExpression,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="col-lg-4" data-id='+c("function"==typeof(r=null!=(r=s(t,"id")||(null!=e?s(e,"id"):e))?r:i)?r.call(l,{name:"id",hash:{},data:o,loc:{start:{line:2,column:30},end:{line:2,column:36}}}):r)+">\r\n  <img src="+c("function"==typeof(r=null!=(r=s(t,"image")||(null!=e?s(e,"image"):e))?r:i)?r.call(l,{name:"image",hash:{},data:o,loc:{start:{line:3,column:11},end:{line:3,column:20}}}):r)+' class="bd-placeholder-img rounded-circle" />\r\n\r\n  <h2>'+c("function"==typeof(r=null!=(r=s(t,"name")||(null!=e?s(e,"name"):e))?r:i)?r.call(l,{name:"name",hash:{},data:o,loc:{start:{line:5,column:6},end:{line:5,column:14}}}):r)+"</h2>\r\n  <p>"+c("function"==typeof(r=null!=(r=s(t,"description")||(null!=e?s(e,"description"):e))?r:i)?r.call(l,{name:"description",hash:{},data:o,loc:{start:{line:6,column:5},end:{line:6,column:20}}}):r)+'</p>\r\n  <p><a class="btn btn-secondary" href="#">View details »</a></p>\r\n</div>\r\n'},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,o){var r;return null!=(r=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,o,0),inverse:n.noop,data:o,loc:{start:{line:1,column:0},end:{line:9,column:9}}}))?r:""},useData:!0})},L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("RtS0"),t("3dw1"),t("JBxO"),t("FdtR"),t("lmye"),t("D/wG");var a=t("4xUq"),o=t.n(a),r=(t("L1EO"),document.querySelector(".js-data-list")),l=document.querySelector(".anchor"),i=0;new IntersectionObserver((function(n,e){n.forEach((function(n){var e;n.isIntersecting&&(i+=1,console.log(i),(e="https://rickandmortyapi.com/api/character/?page="+i,void 0===e&&(e="https://rickandmortyapi.com/api/character/"),fetch(e).then((function(n){return n.json()})).then((function(n){return function(n){return{info:n.info,characters:n.results.map((function(n){var e=n.id,t=n.name,a=n.image,o=n.gender,r=n.species,l=n.status,i=n.location.name;return{id:e,name:t,image:a,description:"Alive"===l?t+" is "+r.toLowerCase()+" and "+("Male"===o?"he":"she")+" lives on the "+i:t+" is dead"}}))}}(n)}))).then((function(n){var e=o()(n.characters);r.insertAdjacentHTML("beforeend",e)})))}))}),{rootMargin:"500px"}).observe(l)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.4a2f03dfbacd09a84793.js.map
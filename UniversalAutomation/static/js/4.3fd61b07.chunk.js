/*! For license information please see 4.3fd61b07.chunk.js.LICENSE.txt */
(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[4],{1135:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(457),i=r(422),o=r(95),a=(r(0),r(247)),l=r(446),u=r(341),s=r(605),c=r(68),f=r(71),m=r.n(f),d=r(4),h=r(1327);function b(e){var t=e.job;return Object(d.jsxs)(n.b,{direction:"horizontal",size:"middle",children:[Object(d.jsxs)(n.b,{children:[Object(d.jsx)(i.a.Text,{type:"secondary",style:{fontSize:12},children:Object(d.jsx)(a.a,{style:{color:"inherit",fontSize:"inherit"}})}),Object(d.jsx)(i.a.Text,{type:"secondary",style:{fontSize:12},children:Object(d.jsx)(o.a,{title:m()(null===t||void 0===t?void 0:t.startTime).toString(),children:Object(c.d)(t)})})]}),Object(d.jsxs)(n.b,{children:[Object(d.jsx)(i.a.Text,{type:"secondary",style:{fontSize:12},children:Object(d.jsx)(l.a,{style:{color:"inherit",fontSize:"inherit"}})}),Object(d.jsx)(i.a.Text,{type:"secondary",style:{fontSize:12},children:Object(c.f)(t)})]}),0!==(null===t||void 0===t?void 0:t.processId)&&Object(d.jsxs)(o.a,{title:"Process ID",children:[Object(d.jsx)(u.a,{})," ",Object(d.jsx)(i.a.Text,{type:"secondary",style:{fontSize:12},children:null===t||void 0===t?void 0:t.processId})]}),0!==(null===t||void 0===t?void 0:t.memoryBytes)&&Object(d.jsxs)(o.a,{title:"Average Memory Usage",children:[Object(d.jsx)(s.a,{})," ",Object(d.jsx)(i.a.Text,{type:"secondary",style:{fontSize:12},children:h(null===t||void 0===t?void 0:t.memoryBytes).format("0.00 b")})]})]})}},1327:function(e,t,r){var n,i;void 0===(i="function"===typeof(n=function(){var e,t,r="2.0.6",n={},i={},o={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},a={currentLocale:o.currentLocale,zeroFormat:o.zeroFormat,nullFormat:o.nullFormat,defaultFormat:o.defaultFormat,scalePercentBy100:o.scalePercentBy100};function l(e,t){this._input=e,this._value=t}return(e=function(r){var i,o,u,s;if(e.isNumeral(r))i=r.value();else if(0===r||"undefined"===typeof r)i=0;else if(null===r||t.isNaN(r))i=null;else if("string"===typeof r)if(a.zeroFormat&&r===a.zeroFormat)i=0;else if(a.nullFormat&&r===a.nullFormat||!r.replace(/[^0-9]+/g,"").length)i=null;else{for(o in n)if((s="function"===typeof n[o].regexps.unformat?n[o].regexps.unformat():n[o].regexps.unformat)&&r.match(s)){u=n[o].unformat;break}i=(u=u||e._.stringToNumber)(r)}else i=Number(r)||null;return new l(r,i)}).version=r,e.isNumeral=function(e){return e instanceof l},e._=t={numberToFormat:function(t,r,n){var o,a,l,u,s,c,f,m=i[e.options.currentLocale],d=!1,h=!1,b=0,p="",g=1e12,v=1e9,y=1e6,x=1e3,_="",F=!1;if(t=t||0,a=Math.abs(t),e._.includes(r,"(")?(d=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(s=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(o=!!(o=r.match(/a(k|m|b|t)?/))&&o[1],e._.includes(r," a")&&(p=" "),r=r.replace(new RegExp(p+"a[kmbt]?"),""),a>=g&&!o||"t"===o?(p+=m.abbreviations.trillion,t/=g):a<g&&a>=v&&!o||"b"===o?(p+=m.abbreviations.billion,t/=v):a<v&&a>=y&&!o||"m"===o?(p+=m.abbreviations.million,t/=y):(a<y&&a>=x&&!o||"k"===o)&&(p+=m.abbreviations.thousand,t/=x)),e._.includes(r,"[.]")&&(h=!0,r=r.replace("[.]",".")),l=t.toString().split(".")[0],u=r.split(".")[1],c=r.indexOf(","),b=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),_=e._.toFixed(t,u[0].length+u[1].length,n,u[1].length)):_=e._.toFixed(t,u.length,n),l=_.split(".")[0],_=e._.includes(_,".")?m.delimiters.decimal+_.split(".")[1]:"",h&&0===Number(_.slice(1))&&(_="")):l=e._.toFixed(t,0,n),p&&!o&&Number(l)>=1e3&&p!==m.abbreviations.trillion)switch(l=String(Number(l)/1e3),p){case m.abbreviations.thousand:p=m.abbreviations.million;break;case m.abbreviations.million:p=m.abbreviations.billion;break;case m.abbreviations.billion:p=m.abbreviations.trillion}if(e._.includes(l,"-")&&(l=l.slice(1),F=!0),l.length<b)for(var j=b-l.length;j>0;j--)l="0"+l;return c>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===r.indexOf(".")&&(l=""),f=l+_+(p||""),d?f=(d&&F?"(":"")+f+(d&&F?")":""):s>=0?f=0===s?(F?"-":"+")+f:f+(F?"-":"+"):F&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,o=i[a.currentLocale],l=e,u={thousand:3,million:6,billion:9,trillion:12};if(a.zeroFormat&&e===a.zeroFormat)r=0;else if(a.nullFormat&&e===a.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),u)if(n=new RegExp("[^a-zA-Z]"+o.abbreviations[t]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),l.match(n)){r*=Math.pow(10,u[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return"number"===typeof e&&isNaN(e)})),includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),i=n.length>>>0,o=0;if(3===arguments.length)r=arguments[2];else{for(;o<i&&!(o in n);)o++;if(o>=i)throw new TypeError("Reduce of empty array with no initial value");r=n[o++]}for(;o<i;o++)o in n&&(r=t(r,n[o],o,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var i,o,a,l,u=e.toString().split("."),s=t-(n||0);return i=2===u.length?Math.min(Math.max(u[1].length,s),t):s,a=Math.pow(10,i),l=(r(e+"e+"+i)/a).toFixed(i),n>t-i&&(o=new RegExp("\\.?0{1,"+(n-(t-i))+"}$"),l=l.replace(o,"")),l}},e.options=a,e.formats=n,e.locales=i,e.locale=function(e){return e&&(a.currentLocale=e.toLowerCase()),a.currentLocale},e.localeData=function(e){if(!e)return i[a.currentLocale];if(e=e.toLowerCase(),!i[e])throw new Error("Unknown locale : "+e);return i[e]},e.reset=function(){for(var e in o)a[e]=o[e]},e.zeroFormat=function(e){a.zeroFormat="string"===typeof e?e:null},e.nullFormat=function(e){a.nullFormat="string"===typeof e?e:null},e.defaultFormat=function(e){a.defaultFormat="string"===typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,i,o,a,l,u,s,c;if("string"!==typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{s=e.localeData(r)}catch(f){s=e.localeData(e.locale())}return o=s.currency.symbol,l=s.abbreviations,n=s.delimiters.decimal,i="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,(null===(c=t.match(/^[^\d]+/))||(t=t.substr(1),c[0]===o))&&(null===(c=t.match(/[^\d]+$/))||(t=t.slice(0,-1),c[0]===l.thousand||c[0]===l.million||c[0]===l.billion||c[0]===l.trillion))&&(u=new RegExp(i+"{2}"),!t.match(/[^\d.,]/g)&&!((a=t.split(n)).length>2)&&(a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(u):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(u)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(u)&&!!a[1].match(/^\d+$/)))},e.fn=l.prototype={clone:function(){return e(this)},format:function(t,r){var i,o,l,u=this._value,s=t||a.defaultFormat;if(r=r||Math.round,0===u&&null!==a.zeroFormat)o=a.zeroFormat;else if(null===u&&null!==a.nullFormat)o=a.nullFormat;else{for(i in n)if(s.match(n[i].regexps.format)){l=n[i].format;break}o=(l=l||e._.numberToFormat)(u,s,r)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,i){return e+Math.round(r*t)}return this._value=t.reduce([this._value,e],n,0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,i){return e-Math.round(r*t)}return this._value=t.reduce([e],n,Math.round(this._value*r))/r,this},multiply:function(e){function r(e,r,n,i){var o=t.correctionFactor(e,r);return Math.round(e*o)*Math.round(r*o)/Math.round(o*o)}return this._value=t.reduce([this._value,e],r,1),this},divide:function(e){function r(e,r,n,i){var o=t.correctionFactor(e,r);return Math.round(e*o)/Math.round(r*o)}return this._value=t.reduce([this._value,e],r),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var i,o=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),i=e._.numberToFormat(t,r,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"BPS"),i=i.join("")):i=i+o+"BPS",i},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),function(){var t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=t.suffixes.concat(r.suffixes.filter((function(e){return t.suffixes.indexOf(e)<0}))).join("|");n="("+n.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)},format:function(n,i,o){var a,l,u,s=e._.includes(i,"ib")?r:t,c=e._.includes(i," b")||e._.includes(i," ib")?" ":"";for(i=i.replace(/\s?i?b/,""),a=0;a<=s.suffixes.length;a++)if(l=Math.pow(s.base,a),u=Math.pow(s.base,a+1),null===n||0===n||n>=l&&n<u){c+=s.suffixes[a],l>0&&(n/=l);break}return e._.numberToFormat(n,i,o)+c},unformat:function(n){var i,o,a=e._.stringToNumber(n);if(a){for(i=t.suffixes.length-1;i>=0;i--){if(e._.includes(n,t.suffixes[i])){o=Math.pow(t.base,i);break}if(e._.includes(n,r.suffixes[i])){o=Math.pow(r.base,i);break}}a*=o||1}return a}})}(),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var i,o,a=e.locales[e.options.currentLocale],l={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),i=e._.numberToFormat(t,r,n),t>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),o=0;o<l.before.length;o++)switch(l.before[o]){case"$":i=e._.insert(i,a.currency.symbol,o);break;case" ":i=e._.insert(i," ",o+a.currency.symbol.length-1)}for(o=l.after.length-1;o>=0;o--)switch(l.after[o]){case"$":i=o===l.after.length-1?i+a.currency.symbol:e._.insert(i,a.currency.symbol,-(l.after.length-(1+o)));break;case" ":i=o===l.after.length-1?i+" ":e._.insert(i," ",-(l.after.length-(1+o)+a.currency.symbol.length-1))}return i}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var i=("number"!==typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(i[0]),r,n)+"e"+i[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),i=Number(r[1]);function o(t,r,n,i){var o=e._.correctionFactor(t,r);return t*o*(r*o)/(o*o)}return i=e._.includes(t,"e-")?i*=-1:i,e._.reduce([n,Math.pow(10,i)],o,1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var i=e.locales[e.options.currentLocale],o=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),o+=i.ordinal(t),e._.numberToFormat(t,r,n)+o}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var i,o=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),i=e._.numberToFormat(t,r,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"%"),i=i.join("")):i=i+o+"%",i},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),i=Math.floor((e-60*n*60)/60),o=Math.round(e-60*n*60-60*i);return n+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e})?n.call(t,r,t,e):n)||(e.exports=i)}}]);
//# sourceMappingURL=4.3fd61b07.chunk.js.map
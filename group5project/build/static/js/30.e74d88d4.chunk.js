(this.webpackJsonpgroup5project=this.webpackJsonpgroup5project||[]).push([[30],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_select_mfa_type",(function(){return T}));var i=n(7),a=n(25),r=n(4),s=n(21),o=n(39),u=n(3),l=n(13),h=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function s(e){try{u(i.next(e))}catch(t){r(t)}}function o(e){try{u(i.throw(e))}catch(t){r(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}u((i=i.apply(e,t||[])).next())}))},c=function(e,t){var n,i,a,r,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){s.label=r[1];break}if(6===r[0]&&s.label<a[1]){s.label=a[1],a=r;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(r);break}a[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(o){r=[6,o],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}},p=new a.a("SelectMFAType"),T=function(){function e(e){var t=this;Object(i.k)(this,e),this.handleSubmit=function(e){return t.verify(e)},this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1}return e.prototype.handleRadioButtonChange=function(e){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1;var t=e.target,n=t.value,i=t.type,a=t.checked,r=["radio","checkbox"].includes(i);n===s.c.SMS&&r&&(this.isSMS=a),n===s.c.TOTP&&r&&(this.isTOTP=a),n===s.c.NOMFA&&r&&(this.isNoMFA=a)},e.prototype.verify=function(e){return h(this,void 0,void 0,(function(){var t,n,i,a;return c(this,(function(h){switch(h.label){case 0:if(e&&e.preventDefault(),p.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=s.c.TOTP:this.isSMS?this.MFAMethod=s.c.SMS:this.isNoMFA&&(this.MFAMethod=s.c.NOMFA),t=this.authData,!o.a||"function"!==typeof o.a.setPreferredMFA)throw new Error(l.d);this.loading=!0,h.label=1;case 1:return h.trys.push([1,3,4,5]),[4,o.a.setPreferredMFA(t,this.MFAMethod)];case 2:return n=h.sent(),p.debug("Set Preferred MFA Succeeded",n),this.selectMessage=r.a.get(u.a.SUCCESS_MFA_TYPE)+" "+this.MFAMethod,[3,5];case 3:return i=h.sent(),(a=i.message)===l.o||a===l.p?(this.TOTPSetup=!0,this.selectMessage=r.a.get(u.a.SETUP_TOTP_REQUIRED)):(p.debug("Set Preferred MFA failed",i),this.selectMessage=r.a.get(u.a.UNABLE_TO_SETUP_MFA_AT_THIS_TIME)),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.contentBuilder=function(){var e=this;if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return p.debug(r.a.get(u.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)),Object(i.i)("div",null,Object(i.i)("a",null,r.a.get(u.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)));var t=this.MFATypes,n=t.SMS,a=t.TOTP,s=t.Optional;return Object(i.i)("amplify-form-section",{submitButtonText:r.a.get(u.a.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:r.a.get(u.a.SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:function(t){return e.handleSubmit(t)},loading:this.loading},n?Object(i.i)("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,a?Object(i.i)("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,s?Object(i.i)("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null)},e.prototype.render=function(){return Object(i.i)("div",null,this.contentBuilder(),this.TOTPSetup?Object(i.i)("amplify-totp-setup",{user:this.authData}):null)},e}()}}]);
//# sourceMappingURL=30.e74d88d4.chunk.js.map
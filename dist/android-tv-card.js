/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@formatjs/intl-utils/lib/src/diff.js":
/*!***********************************************************!*\
  !*** ./node_modules/@formatjs/intl-utils/lib/src/diff.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_THRESHOLDS: () => (/* binding */ DEFAULT_THRESHOLDS),
/* harmony export */   selectUnit: () => (/* binding */ selectUnit)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var MS_PER_SECOND = 1e3;
var SECS_PER_MIN = 60;
var SECS_PER_HOUR = SECS_PER_MIN * 60;
var SECS_PER_DAY = SECS_PER_HOUR * 24;
var SECS_PER_WEEK = SECS_PER_DAY * 7;
function selectUnit(from, to, thresholds) {
    if (to === void 0) { to = Date.now(); }
    if (thresholds === void 0) { thresholds = {}; }
    var resolvedThresholds = __assign(__assign({}, DEFAULT_THRESHOLDS), (thresholds || {}));
    var secs = (+from - +to) / MS_PER_SECOND;
    if (Math.abs(secs) < resolvedThresholds.second) {
        return {
            value: Math.round(secs),
            unit: 'second',
        };
    }
    var mins = secs / SECS_PER_MIN;
    if (Math.abs(mins) < resolvedThresholds.minute) {
        return {
            value: Math.round(mins),
            unit: 'minute',
        };
    }
    var hours = secs / SECS_PER_HOUR;
    if (Math.abs(hours) < resolvedThresholds.hour) {
        return {
            value: Math.round(hours),
            unit: 'hour',
        };
    }
    var days = secs / SECS_PER_DAY;
    if (Math.abs(days) < resolvedThresholds.day) {
        return {
            value: Math.round(days),
            unit: 'day',
        };
    }
    var fromDate = new Date(from);
    var toDate = new Date(to);
    var years = fromDate.getFullYear() - toDate.getFullYear();
    if (Math.round(Math.abs(years)) > 0) {
        return {
            value: Math.round(years),
            unit: 'year',
        };
    }
    var months = years * 12 + fromDate.getMonth() - toDate.getMonth();
    if (Math.round(Math.abs(months)) > 0) {
        return {
            value: Math.round(months),
            unit: 'month',
        };
    }
    var weeks = secs / SECS_PER_WEEK;
    return {
        value: Math.round(weeks),
        unit: 'week',
    };
}
var DEFAULT_THRESHOLDS = {
    second: 45,
    minute: 45,
    hour: 22,
    day: 5,
};


/***/ }),

/***/ "./node_modules/custom-card-helpers/dist/index.m.js":
/*!**********************************************************!*\
  !*** ./node_modules/custom-card-helpers/dist/index.m.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_DOMAIN_ICON: () => (/* binding */ G),
/* harmony export */   DEFAULT_PANEL: () => (/* binding */ J),
/* harmony export */   DEFAULT_VIEW_ENTITY_ID: () => (/* binding */ re),
/* harmony export */   DOMAINS_HIDE_MORE_INFO: () => (/* binding */ X),
/* harmony export */   DOMAINS_MORE_INFO_NO_HISTORY: () => (/* binding */ Y),
/* harmony export */   DOMAINS_TOGGLE: () => (/* binding */ $),
/* harmony export */   DOMAINS_WITH_CARD: () => (/* binding */ K),
/* harmony export */   DOMAINS_WITH_MORE_INFO: () => (/* binding */ Q),
/* harmony export */   NumberFormat: () => (/* binding */ t),
/* harmony export */   STATES_OFF: () => (/* binding */ Z),
/* harmony export */   TimeFormat: () => (/* binding */ r),
/* harmony export */   UNIT_C: () => (/* binding */ ee),
/* harmony export */   UNIT_F: () => (/* binding */ te),
/* harmony export */   applyThemesOnElement: () => (/* binding */ q),
/* harmony export */   computeCardSize: () => (/* binding */ A),
/* harmony export */   computeDomain: () => (/* binding */ E),
/* harmony export */   computeEntity: () => (/* binding */ j),
/* harmony export */   computeRTL: () => (/* binding */ R),
/* harmony export */   computeRTLDirection: () => (/* binding */ z),
/* harmony export */   computeStateDisplay: () => (/* binding */ W),
/* harmony export */   computeStateDomain: () => (/* binding */ L),
/* harmony export */   createThing: () => (/* binding */ oe),
/* harmony export */   debounce: () => (/* binding */ ue),
/* harmony export */   domainIcon: () => (/* binding */ me),
/* harmony export */   evaluateFilter: () => (/* binding */ se),
/* harmony export */   fireEvent: () => (/* binding */ ne),
/* harmony export */   fixedIcons: () => (/* binding */ ce),
/* harmony export */   formatDate: () => (/* binding */ a),
/* harmony export */   formatDateMonth: () => (/* binding */ f),
/* harmony export */   formatDateMonthYear: () => (/* binding */ l),
/* harmony export */   formatDateNumeric: () => (/* binding */ u),
/* harmony export */   formatDateShort: () => (/* binding */ m),
/* harmony export */   formatDateTime: () => (/* binding */ v),
/* harmony export */   formatDateTimeNumeric: () => (/* binding */ k),
/* harmony export */   formatDateTimeWithSeconds: () => (/* binding */ y),
/* harmony export */   formatDateWeekday: () => (/* binding */ n),
/* harmony export */   formatDateYear: () => (/* binding */ p),
/* harmony export */   formatNumber: () => (/* binding */ H),
/* harmony export */   formatTime: () => (/* binding */ D),
/* harmony export */   formatTimeWeekday: () => (/* binding */ I),
/* harmony export */   formatTimeWithSeconds: () => (/* binding */ F),
/* harmony export */   forwardHaptic: () => (/* binding */ le),
/* harmony export */   getLovelace: () => (/* binding */ ke),
/* harmony export */   handleAction: () => (/* binding */ he),
/* harmony export */   handleActionConfig: () => (/* binding */ pe),
/* harmony export */   handleClick: () => (/* binding */ be),
/* harmony export */   hasAction: () => (/* binding */ ve),
/* harmony export */   hasConfigOrEntityChanged: () => (/* binding */ _e),
/* harmony export */   hasDoubleClick: () => (/* binding */ ye),
/* harmony export */   isNumericState: () => (/* binding */ P),
/* harmony export */   navigate: () => (/* binding */ de),
/* harmony export */   numberFormatToLocale: () => (/* binding */ U),
/* harmony export */   relativeTime: () => (/* binding */ M),
/* harmony export */   round: () => (/* binding */ B),
/* harmony export */   stateIcon: () => (/* binding */ Se),
/* harmony export */   timerTimeRemaining: () => (/* binding */ C),
/* harmony export */   toggleEntity: () => (/* binding */ ge),
/* harmony export */   turnOnOffEntities: () => (/* binding */ we),
/* harmony export */   turnOnOffEntity: () => (/* binding */ fe)
/* harmony export */ });
/* harmony import */ var _formatjs_intl_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formatjs/intl-utils */ "./node_modules/@formatjs/intl-utils/lib/src/diff.js");
var t,r,n=function(e,t){return i(t).format(e)},i=function(e){return new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"})},a=function(e,t){return o(t).format(e)},o=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})},u=function(e,t){return c(t).format(e)},c=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"})},m=function(e,t){return s(t).format(e)},s=function(e){return new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"})},l=function(e,t){return d(t).format(e)},d=function(e){return new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"})},f=function(e,t){return g(t).format(e)},g=function(e){return new Intl.DateTimeFormat(e.language,{month:"long"})},p=function(e,t){return h(t).format(e)},h=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric"})};!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(t||(t={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(r||(r={}));var b=function(e){if(e.time_format===r.language||e.time_format===r.system){var t=e.time_format===r.language?e.language:void 0,n=(new Date).toLocaleString(t);return n.includes("AM")||n.includes("PM")}return e.time_format===r.am_pm},v=function(e,t){return _(t).format(e)},_=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:b(e)?"numeric":"2-digit",minute:"2-digit",hour12:b(e)})},y=function(e,t){return w(t).format(e)},w=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:b(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:b(e)})},k=function(e,t){return x(t).format(e)},x=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:b(e)})},D=function(e,t){return S(t).format(e)},S=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:b(e)})},F=function(e,t){return T(t).format(e)},T=function(e){return new Intl.DateTimeFormat(e.language,{hour:b(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:b(e)})},I=function(e,t){return N(t).format(e)},N=function(e){return new Intl.DateTimeFormat(e.language,{hour:b(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:b(e)})},M=function(t,r,n,i){void 0===i&&(i=!0);var a=(0,_formatjs_intl_utils__WEBPACK_IMPORTED_MODULE_0__.selectUnit)(t,n);return i?function(e){return new Intl.RelativeTimeFormat(e.language,{numeric:"auto"})}(r).format(a.value,a.unit):Intl.NumberFormat(r.language,{style:"unit",unit:a.unit,unitDisplay:"long"}).format(Math.abs(a.value))};function C(e){var t,r=3600*(t=e.attributes.remaining.split(":").map(Number))[0]+60*t[1]+t[2];if("active"===e.state){var n=(new Date).getTime(),i=new Date(e.last_changed).getTime();r=Math.max(r-(n-i)/1e3,0)}return r}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var q=function(e,t,r,n){void 0===n&&(n=!1),e._themes||(e._themes={});var i=t.default_theme;("default"===r||r&&t.themes[r])&&(i=r);var a=O({},e._themes);if("default"!==i){var o=t.themes[i];Object.keys(o).forEach(function(t){var r="--"+t;e._themes[r]="",a[r]=o[t]})}if(e.updateStyles?e.updateStyles(a):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,a),n){var u=document.querySelector("meta[name=theme-color]");if(u){u.hasAttribute("default-content")||u.setAttribute("default-content",u.getAttribute("content"));var c=a["--primary-color"]||u.getAttribute("default-content");u.setAttribute("content",c)}}},A=function(e){return"function"==typeof e.getCardSize?e.getCardSize():4};function E(e){return e.substr(0,e.indexOf("."))}function j(e){return e.substr(e.indexOf(".")+1)}function R(e){var t,r=(null==e||null==(t=e.locale)?void 0:t.language)||"en";return e.translationMetadata.translations[r]&&e.translationMetadata.translations[r].isRTL||!1}function z(e){return R(e)?"rtl":"ltr"}function L(e){return E(e.entity_id)}var P=function(e){return!!e.attributes.unit_of_measurement||!!e.attributes.state_class},U=function(e){switch(e.number_format){case t.comma_decimal:return["en-US","en"];case t.decimal_comma:return["de","es","it"];case t.space_comma:return["fr","sv","cs"];case t.system:return;default:return e.language}},B=function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)},H=function(e,r,n){var i=r?U(r):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==r?void 0:r.number_format)!==t.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(i,V(e,n)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,V(e,n)).format(Number(e))}return"string"==typeof e?e:B(e,null==n?void 0:n.maximumFractionDigits).toString()+("currency"===(null==n?void 0:n.style)?" "+n.currency:"")},V=function(e,t){var r=O({maximumFractionDigits:2},t);if("string"!=typeof e)return r;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var n=e.indexOf(".")>-1?e.split(".")[1].length:0;r.minimumFractionDigits=n,r.maximumFractionDigits=n}return r},W=function(e,t,r,n){var i=void 0!==n?n:t.state;if("unknown"===i||"unavailable"===i)return e("state.default."+i);if(P(t)){if("monetary"===t.attributes.device_class)try{return H(i,r,{style:"currency",currency:t.attributes.unit_of_measurement})}catch(e){}return H(i,r)+(t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:"")}var o=L(t);if("input_datetime"===o){var u;if(void 0===n)return t.attributes.has_date&&t.attributes.has_time?(u=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),v(u,r)):t.attributes.has_date?(u=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),a(u,r)):t.attributes.has_time?((u=new Date).setHours(t.attributes.hour,t.attributes.minute),D(u,r)):t.state;try{var c=n.split(" ");if(2===c.length)return v(new Date(c.join("T")),r);if(1===c.length){if(n.includes("-"))return a(new Date(n+"T00:00"),r);if(n.includes(":")){var m=new Date;return D(new Date(m.toISOString().split("T")[0]+"T"+n),r)}}return n}catch(e){return n}}return"humidifier"===o&&"on"===i&&t.attributes.humidity?t.attributes.humidity+" %":"counter"===o||"number"===o||"input_number"===o?H(i,r):t.attributes.device_class&&e("component."+o+".state."+t.attributes.device_class+"."+i)||e("component."+o+".state._."+i)||i},G="mdi:bookmark",J="lovelace",K=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],Q=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","updater","vacuum","water_heater","weather"],X=["input_number","input_select","input_text","scene","weblink"],Y=["camera","configurator","history_graph","scene"],Z=["closed","locked","off"],$=new Set(["fan","input_boolean","light","switch","group","automation"]),ee="°C",te="°F",re="group.default_view",ne=function(e,t,r,n){n=n||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,e.dispatchEvent(i),i},ie=new Set(["call-service","divider","section","weblink","cast","select"]),ae={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},oe=function(e,t){void 0===t&&(t=!1);var r=function(e,t){return n("hui-error-card",{type:"error",error:e,config:t})},n=function(e,t){var n=window.document.createElement(e);try{if(!n.setConfig)return;n.setConfig(t)}catch(n){return console.error(e,n),r(n.message,t)}return n};if(!e||"object"!=typeof e||!t&&!e.type)return r("No type defined",e);var i=e.type;if(i&&i.startsWith("custom:"))i=i.substr("custom:".length);else if(t)if(ie.has(i))i="hui-"+i+"-row";else{if(!e.entity)return r("Invalid config given.",e);var a=e.entity.split(".",1)[0];i="hui-"+(ae[a]||"text")+"-entity-row"}else i="hui-"+i+"-card";if(customElements.get(i))return n(i,e);var o=r("Custom element doesn't exist: "+e.type+".",e);o.style.display="None";var u=setTimeout(function(){o.style.display=""},2e3);return customElements.whenDefined(e.type).then(function(){clearTimeout(u),ne(o,"ll-rebuild",{},o)}),o},ue=function(e,t,r){var n;return void 0===r&&(r=!1),function(){var i=[].slice.call(arguments),a=this,o=function(){n=null,r||e.apply(a,i)},u=r&&!n;clearTimeout(n),n=setTimeout(o,t),u&&e.apply(a,i)}},ce={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function me(e,t){if(e in ce)return ce[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var se=function(e,t){var r=t.value||t,n=t.attribute?e.attributes[t.attribute]:e.state;switch(t.operator||"=="){case"==":return n===r;case"<=":return n<=r;case"<":return n<r;case">=":return n>=r;case">":return n>r;case"!=":return n!==r;case"regex":return n.match(r);default:return!1}},le=function(e){ne(window,"haptic",e)},de=function(e,t,r){void 0===r&&(r=!1),r?history.replaceState(null,"",t):history.pushState(null,"",t),ne(window,"location-changed",{replace:r})},fe=function(e,t,r){void 0===r&&(r=!0);var n,i=E(t),a="group"===i?"homeassistant":i;switch(i){case"lock":n=r?"unlock":"lock";break;case"cover":n=r?"open_cover":"close_cover";break;default:n=r?"turn_on":"turn_off"}return e.callService(a,n,{entity_id:t})},ge=function(e,t){var r=Z.includes(e.states[t].state);return fe(e,t,r)},pe=function(e,t,r,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some(function(e){return e.user===t.user.id})||(le("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(r.entity||r.camera_image)&&ne(e,"hass-more-info",{entityId:r.entity?r.entity:r.camera_image});break;case"navigate":n.navigation_path&&de(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":r.entity&&(ge(t,r.entity),le("success"));break;case"call-service":if(!n.service)return void le("failure");var i=n.service.split(".",2);t.callService(i[0],i[1],n.service_data,n.target),le("success");break;case"fire-dom-event":ne(e,"ll-custom",n)}},he=function(e,t,r,n){var i;"double_tap"===n&&r.double_tap_action?i=r.double_tap_action:"hold"===n&&r.hold_action?i=r.hold_action:"tap"===n&&r.tap_action&&(i=r.tap_action),pe(e,t,r,i)},be=function(e,t,r,n,i){var a;if(i&&r.double_tap_action?a=r.double_tap_action:n&&r.hold_action?a=r.hold_action:!n&&r.tap_action&&(a=r.tap_action),a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some(function(e){return e.user===t.user.id})||confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?"))switch(a.action){case"more-info":(a.entity||r.entity||r.camera_image)&&(ne(e,"hass-more-info",{entityId:a.entity?a.entity:r.entity?r.entity:r.camera_image}),a.haptic&&le(a.haptic));break;case"navigate":a.navigation_path&&(de(0,a.navigation_path),a.haptic&&le(a.haptic));break;case"url":a.url_path&&window.open(a.url_path),a.haptic&&le(a.haptic);break;case"toggle":r.entity&&(ge(t,r.entity),a.haptic&&le(a.haptic));break;case"call-service":if(!a.service)return;var o=a.service.split(".",2),u=o[0],c=o[1],m=O({},a.service_data);"entity"===m.entity_id&&(m.entity_id=r.entity),t.callService(u,c,m,a.target),a.haptic&&le(a.haptic);break;case"fire-dom-event":ne(e,"ll-custom",a),a.haptic&&le(a.haptic)}};function ve(e){return void 0!==e&&"none"!==e.action}function _e(e,t,r){if(t.has("config")||r)return!0;if(e.config.entity){var n=t.get("hass");return!n||n.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}function ye(e){return void 0!==e&&"none"!==e.action}var we=function(e,t,r){void 0===r&&(r=!0);var n={};t.forEach(function(t){if(Z.includes(e.states[t].state)===r){var i=E(t),a=["cover","lock"].includes(i)?i:"homeassistant";a in n||(n[a]=[]),n[a].push(t)}}),Object.keys(n).forEach(function(t){var i;switch(t){case"lock":i=r?"unlock":"lock";break;case"cover":i=r?"open_cover":"close_cover";break;default:i=r?"turn_on":"turn_off"}e.callService(t,i,{entity_id:n[t]})})},ke=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null},xe={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},De={binary_sensor:function(e,t){var r="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return r?"mdi:battery":"mdi:battery-outline";case"battery_charging":return r?"mdi:battery":"mdi:battery-charging";case"cold":return r?"mdi:thermometer":"mdi:snowflake";case"connectivity":return r?"mdi:server-network-off":"mdi:server-network";case"door":return r?"mdi:door-closed":"mdi:door-open";case"garage_door":return r?"mdi:garage":"mdi:garage-open";case"power":return r?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return r?"mdi:check-circle":"mdi:alert-circle";case"smoke":return r?"mdi:check-circle":"mdi:smoke";case"heat":return r?"mdi:thermometer":"mdi:fire";case"light":return r?"mdi:brightness-5":"mdi:brightness-7";case"lock":return r?"mdi:lock":"mdi:lock-open";case"moisture":return r?"mdi:water-off":"mdi:water";case"motion":return r?"mdi:walk":"mdi:run";case"occupancy":return r?"mdi:home-outline":"mdi:home";case"opening":return r?"mdi:square":"mdi:square-outline";case"plug":return r?"mdi:power-plug-off":"mdi:power-plug";case"presence":return r?"mdi:home-outline":"mdi:home";case"running":return r?"mdi:stop":"mdi:play";case"sound":return r?"mdi:music-note-off":"mdi:music-note";case"update":return r?"mdi:package":"mdi:package-up";case"vibration":return r?"mdi:crop-portrait":"mdi:vibrate";case"window":return r?"mdi:window-closed":"mdi:window-open";default:return r?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return me("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in xe)return xe[t];if("battery"===t){var r=Number(e.state);if(isNaN(r))return"mdi:battery-unknown";var n=10*Math.round(r/10);return n>=100?"mdi:battery":n<=0?"mdi:battery-alert":"hass:battery-"+n}var i=e.attributes.unit_of_measurement;return"°C"===i||"°F"===i?"mdi:thermometer":me("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?me("input_datetime"):"mdi:calendar":"mdi:clock"}},Se=function(e){if(!e)return"mdi:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=E(e.entity_id);return t in De?De[t](e):me(t,e.state)};
//# sourceMappingURL=index.m.js.map


/***/ }),

/***/ "./src/android-tv-card.ts":
/*!********************************!*\
  !*** ./src/android-tv-card.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const lit_element_1 = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/development/index.js");
const custom_card_helpers_1 = __webpack_require__(/*! custom-card-helpers */ "./node_modules/custom-card-helpers/dist/index.m.js");
const models_1 = __webpack_require__(/*! ./models */ "./src/models/index.ts");
console.info(`%c ANDROID-TV-CARD`, 'color: white; font-weight: bold; background: green');
const HAElement = Object.getPrototypeOf(customElements.get('ha-panel-lovelace'));
window.customCards = window.customCards || [];
window.customCards.push({
    type: 'android-tv-card',
    name: 'Android TV Card',
    description: 'Remote for Android TV',
});
class AndroidTVCard extends HAElement {
    constructor() {
        super();
        this.defaultKeys = models_1.defaultKeys;
        this.defaultSources = models_1.defaultSources;
        this.customKeys = {};
        this.customSources = {};
        this.customIcons = {};
        this.clickTimer = null;
        this.clickCount = 0;
        this.touchAction = '';
        this.touchTimer = null;
        this.touchInterval = null;
        this.touchLongClick = false;
        this.holdAction = '';
        this.holdTimer = null;
        this.holdInterval = null;
        this.holdLongClick = false;
    }
    static get properties() {
        return {
            _hass: {},
            _config: {},
            _apps: {},
            trigger: {},
        };
    }
    static getStubConfig() {
        return {};
    }
    getCardSize() {
        let numRows = Object.keys(this._config).filter((key) => key.includes('_row')).length;
        if ('title' in this._config) {
            numRows += 1;
        }
        return numRows;
    }
    setConfig(config) {
        return __awaiter(this, void 0, void 0, function* () {
            this._config = Object.assign({ theme: 'default' }, config);
            this.customKeys = config.custom_keys || {};
            this.customSources = config.custom_sources || {};
            this.customIcons = config.custom_icons || {};
            this.defaultKeys = models_1.defaultKeys;
            this.defaultSources = models_1.defaultSources;
            if (this._config.alt_volume_icons) {
                this.useAltVolumeIcons();
            }
            yield this.loadCardHelpers();
            yield this.loadHassHelpers();
            if (this._config.volume_row == 'slider') {
                yield this.renderVolumeSlider();
            }
            this.triggerRender();
        });
    }
    isButtonEnabled(row, button) {
        return (row.includes('_row') &&
            this._config[row].includes(button));
    }
    set hass(hass) {
        this._hass = hass;
        if (this.volume_slider) {
            this.volume_slider.hass = hass;
        }
        if (this._hassResolve) {
            this._hassResolve();
        }
    }
    get hass() {
        return this._hass;
    }
    loadCardHelpers() {
        return __awaiter(this, void 0, void 0, function* () {
            this._helpers = yield window.loadCardHelpers();
            if (this._helpersResolve)
                this._helpersResolve();
        });
    }
    loadHassHelpers() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._helpers === undefined)
                yield new Promise((resolve) => (this._helpersResolve = resolve));
            if (this._hass === undefined)
                yield new Promise((resolve) => (this._hassResolve = resolve));
            this._helpersResolve = undefined;
            this._hassResolve = undefined;
        });
    }
    fireEvent(window, type, detail) {
        const e = new Event(type, {
            bubbles: false,
        });
        e.detail = detail;
        window.dispatchEvent(e);
        return e;
    }
    fireHapticEvent(window, detail) {
        if (this._config.enable_button_feedback === undefined ||
            this._config.enable_button_feedback) {
            this.fireEvent(window, 'haptic', detail);
        }
    }
    renderVolumeSlider() {
        return __awaiter(this, void 0, void 0, function* () {
            let slider_config = {
                type: 'custom:my-slider',
                entity: this._config.media_player_id,
                height: '50px',
                mainSliderColor: 'white',
                secondarySliderColor: 'rgb(60, 60, 60)',
                mainSliderColorOff: 'rgb(60, 60, 60)',
                secondarySliderColorOff: 'rgb(60, 60, 60)',
                thumbWidth: '0px',
                thumbHorizontalPadding: '0px',
                radius: '25px',
            };
            if (this._config.slider_config instanceof Object) {
                slider_config = Object.assign(Object.assign({}, slider_config), this._config.slider_config);
            }
            // this.volume_slider = await this._helpers.createCardElement(slider_config);
            this.volume_slider = yield (0, custom_card_helpers_1.createThing)(slider_config);
            // this.volume_slider.style = 'flex: 0.9;';
            this.volume_slider.setAttribute('style', 'flex: 0.9;');
            this.volume_slider.ontouchstart = (e) => {
                e.stopImmediatePropagation();
                this.fireHapticEvent(window, 'light');
            };
            this.volume_slider.addEventListener('input', (_e) => {
                this.fireHapticEvent(window, 'light');
            }, true);
            this.volume_slider.hass = this._hass;
        });
    }
    useAltVolumeIcons() {
        this.defaultKeys.volume_up.icon = 'mdi:volume-high';
        this.defaultKeys.volume_down.icon = 'mdi:volume-medium';
        this.defaultKeys.volume_mute.icon = 'mdi:volume-variant-off';
    }
    /**
     * Send command to an Android TV remote
     * @param {string} key
     */
    sendKey(key, longPress = false) {
        const data = {
            entity_id: this._config.remote_id,
            command: key,
        };
        if (longPress) {
            data.hold_secs = 0.5;
        }
        this._hass.callService('remote', 'send_command', data);
    }
    getInfo(action) {
        return (this.customKeys[action] ||
            this.customSources[action] ||
            this.defaultKeys[action] ||
            this.defaultSources[action] ||
            {});
    }
    /**
     * Send either a command to an Android TV remote or a custom key to any service
     * @param {string} action
     * @param {boolean} [longPress=false]
     */
    sendAction(action, longPress = false) {
        const info = this.getInfo(action);
        if ('key' in info) {
            const key = info.key;
            this.sendKey(key, longPress);
        }
        else if ('source' in info) {
            this.changeSource(info.source);
        }
        else if ('service' in info) {
            const service_data = JSON.parse(JSON.stringify(info.service_data || {}));
            if (longPress && info.service == 'remote.send_command') {
                service_data.hold_secs = 0.5;
            }
            const [domain, service] = info.service.split('.', 2);
            this._hass.callService(domain, service, service_data);
        }
    }
    /**
     * Open an Android TV app using it's deep link
     * @param {string} source Android TV deep link for an app
     */
    changeSource(source) {
        this._hass.callService('remote', 'turn_on', {
            activity: source,
            entity_id: this._config.remote_id,
        });
    }
    /**
     * Event handler for touchpad click with no movement
     * @param {Event} e
     */
    onTouchClick(e) {
        e.stopImmediatePropagation();
        const click_action = () => {
            clearTimeout(this.clickTimer);
            this.clickTimer = null;
            this.onButtonClick(e, 'center', false);
            this.clickCount = 0;
        };
        if (e.detail && e.detail > this.clickCount) {
            this.clickCount++;
        }
        if (this._config.enable_double_click) {
            if (this.clickCount == 2) {
                this.onTouchDoubleClick(e);
            }
            else {
                this.clickTimer = setTimeout(click_action, 200);
            }
        }
        else {
            click_action();
        }
    }
    /**
     * Event handler for touchpad double click
     * @param {Event} e
     */
    onTouchDoubleClick(e) {
        var _a;
        clearTimeout(this.clickTimer);
        this.clickTimer = null;
        this.clickCount = 0;
        const action = (_a = this._config.double_click_keycode) !== null && _a !== void 0 ? _a : 'back';
        this.onButtonClick(e, action, false);
    }
    /**
     * Event handler for touchpad swipe and long click start
     * @param {Event} e
     */
    onTouchStart(e) {
        this.touchTimer = setTimeout(() => {
            var _a;
            this.touchLongClick = true;
            // Only repeat hold action for directional keys
            if (['up', 'down', 'left', 'right'].includes(this.touchAction)) {
                this.touchInterval = setInterval(() => {
                    this.onButtonClick(e, this.touchAction, false);
                }, 100);
            }
            else {
                this.onButtonClick(e, (_a = this._config.long_click_keycode) !== null && _a !== void 0 ? _a : 'center', this._config.long_click_keycode ? false : true);
            }
        }, 500);
        window.initialX = e.touches[0].clientX;
        window.initialY = e.touches[0].clientY;
    }
    /**
     * Event handler for touchpad swipe end
     * @param {Event} e
     */
    onTouchEnd(e) {
        if (this.touchLongClick) {
            this.touchLongClick = false;
            e.stopImmediatePropagation();
            e.preventDefault();
        }
        clearTimeout(this.touchTimer);
        clearInterval(this.touchInterval);
        clearTimeout(this.clickTimer);
        this.touchAction = '';
        this.touchTimer = null;
        this.touchInterval = null;
        this.clickTimer = null;
    }
    /**
     * Event handler for touchpad swipe move
     * @param {Event} e
     */
    onTouchMove(e) {
        if (!window.initialX || !window.initialY) {
            return;
        }
        const currentX = e.touches[0].clientX || 0;
        const currentY = e.touches[0].clientY || 0;
        const diffX = window.initialX - currentX;
        const diffY = window.initialY - currentY;
        let action;
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Sliding horizontally
            action = diffX > 0 ? 'left' : 'right';
        }
        else {
            // Sliding vertically
            action = diffY > 0 ? 'up' : 'down';
        }
        this.touchAction = action;
        this.onButtonClick(e, action, false);
        window.initialX = undefined;
        window.initialY = undefined;
    }
    /**
     * Event handler for button click
     * @param {Event} e
     * @param {string} [action]
     * @param {boolean} [longPress=false]
     */
    onButtonClick(e, action, longPress = false) {
        var _a;
        action = action || ((_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.action) || '';
        const info = this.getInfo(action);
        let haptic = longPress ? 'medium' : 'light';
        if (action == 'center' && !longPress) {
            haptic = 'selection';
        }
        else if (action == this._config.double_click_keycode) {
            haptic = 'success';
        }
        this.fireHapticEvent(window, haptic);
        const key = 'key' in info ? info.key : '';
        switch (key) {
            case 'KEYBOARD':
                this.onKeyboardPress(e, longPress);
                break;
            case 'TEXTBOX':
                this.onTextboxPress(e, longPress);
                break;
            case 'SEARCH':
                this.onSearchPress(e, longPress);
                break;
            default:
                this.sendAction(action, longPress);
                break;
        }
    }
    /**
     * Event handler for button long click start
     * @param {Event} e
     */
    onButtonLongClickStart(e) {
        this.holdAction = e.currentTarget.action;
        this.holdTimer = setTimeout(() => {
            this.holdLongClick = true;
            // Only repeat hold action for directional keys and volume
            // prettier-ignore
            if (['up', 'down', 'left', 'right', 'volume_up', 'volume_down', 'delete'].includes(this.holdAction)) {
                this.holdInterval = setInterval(() => {
                    this.onButtonClick(e, this.holdAction, false);
                }, 100);
            }
            else {
                this.onButtonClick(e, this.holdAction, true);
            }
        }, 500);
    }
    /**
     * Event handler for button long click end
     * @param {Event} e
     */
    onButtonLongClickEnd(e) {
        if (this.holdLongClick) {
            this.holdLongClick = false;
            e.stopImmediatePropagation();
            e.preventDefault();
        }
        clearTimeout(this.holdTimer);
        clearInterval(this.holdInterval);
        this.holdAction = '';
        this.holdTimer = null;
        this.holdInterval = null;
    }
    /**
     * Event handler for keyboard keydown events, used for non-alphanumerical keys
     * @param {Event} e
     */
    onKeyDown(e) {
        var _a;
        e.stopImmediatePropagation();
        const keyToKey = {
            Backspace: 'delete',
            Delete: 'forward_delete',
            Enter: 'enter',
            ArrowLeft: 'left',
            ArrowRight: 'right',
        };
        const key = keyToKey[(_a = e.key) !== null && _a !== void 0 ? _a : ''];
        if (key) {
            if (e.currentTarget.value != '') {
                e.currentTarget.blur();
                e.currentTarget.value = '';
                e.currentTarget.focus();
            }
            this.sendAction(key);
        }
    }
    /**
     * Event handler for keyboard input events, used for alphanumerical keys and works on all platforms
     * @param {Event} e
     */
    onInput(e) {
        e.stopImmediatePropagation();
        if (e.data) {
            const data = {
                entity_id: this._config.adb_id,
                command: 'input text "' + e.data + '"',
            };
            this._hass.callService('androidtv', 'adb_command', data);
        }
    }
    /**
     * Event handler for paste events, as onInput paste events return null for data field
     * @param {Event} e
     */
    onPaste(e) {
        var _a;
        e.stopImmediatePropagation();
        e.preventDefault();
        const text = (_a = e.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('Text');
        if (text) {
            const data = {
                entity_id: this._config.adb_id,
                command: 'input text "' + text + '"',
            };
            this._hass.callService('androidtv', 'adb_command', data);
        }
        e.currentTarget.blur();
        e.currentTarget.value = '';
        e.currentTarget.focus();
    }
    /**
     * Event handler for on focus events, clears input and changes icon color
     * @param {Event} e
     */
    onFocus(e) {
        e.currentTarget.value = '';
        e.currentTarget.parentElement
            .children[0].style.color = 'var(--state-active-color)';
        e.currentTarget.style.zIndex = '9';
        e.currentTarget.parentElement.style.zIndex = '1';
    }
    /**
     * Event handler for on focus out events, clears input and resets icon color
     * @param {Event} e
     */
    onFocusOut(e) {
        e.currentTarget.value = '';
        e.currentTarget.parentElement
            .children[0].style.color = '';
        e.currentTarget.style.zIndex = '';
        e.currentTarget.parentElement.style.zIndex = '';
    }
    /**
     * Event handler for clicking the keyboard button
     * @param {Event} e
     * @param {boolean} [longPress=false]
     */
    onKeyboardPress(e, _longpress) {
        e.currentTarget.children[1].focus();
    }
    /**
     * Event handler for sending bulk text via legacy prompt method
     * @param {Event} e
     * @param {boolean} [longPress=false]
     */
    onTextboxPress(e, _longpress) {
        e.stopImmediatePropagation();
        const text = prompt('Text Input: ');
        if (text) {
            const data = {
                entity_id: this._config.adb_id,
                command: 'input text "' + text + '"',
            };
            this._hass.callService('androidtv', 'adb_command', data);
        }
    }
    /**
     * Event handler for global Google Assistant search
     * @param {Event} e
     * @param {boolean} [longPress=false]
     */
    onSearchPress(e, _longpress) {
        e.stopImmediatePropagation();
        const text = prompt('Google Assistant Search: ');
        if (text) {
            const data = {
                entity_id: this._config.adb_id,
                command: 'am start -a "android.search.action.GLOBAL_SEARCH" --es query "' +
                    text +
                    '"',
            };
            this._hass.callService('androidtv', 'adb_command', data);
        }
    }
    buildIconButton(action) {
        var _a, _b, _c, _d, _f;
        const info = this.getInfo(action);
        let icon = (_a = info === null || info === void 0 ? void 0 : info.icon) !== null && _a !== void 0 ? _a : '';
        let svg_path = (_c = (_b = info.svg_path) !== null && _b !== void 0 ? _b : this.customIcons[icon]) !== null && _c !== void 0 ? _c : '';
        // Use original icon if none provided for custom key or source
        if (!(icon || svg_path)) {
            const iconInfo = this.defaultKeys[action] || this.defaultSources[action] || {};
            icon = (_d = iconInfo === null || iconInfo === void 0 ? void 0 : iconInfo.icon) !== null && _d !== void 0 ? _d : '';
            svg_path = (_f = iconInfo === null || iconInfo === void 0 ? void 0 : iconInfo.svg_path) !== null && _f !== void 0 ? _f : '';
        }
        let kInput = (0, lit_element_1.html) ``;
        if ('key' in info && info.key == 'KEYBOARD') {
            kInput = (0, lit_element_1.html) `
				<input
					spellcheck="false"
					autocorrect="off"
					autocomplete="off"
					autocapitalize="off"
					onchange="this.value=''"
					onkeyup="this.value=''"
					@focus="${this.onFocus}"
					@focusout="${this.onFocusOut}"
					@input="${this.onInput}"
					@paste="${this.onPaste}"
					@keydown="${this.onKeyDown}"
				></input>
			`;
        }
        return (0, lit_element_1.html) `
			<ha-icon-button
				.action="${action}"
				@click="${this.onButtonClick}"
				@touchstart="${this.onButtonLongClickStart}"
				@touchend="${this.onButtonLongClickEnd}"
				title="${action}"
				.path="${svg_path}"
			>
				<ha-icon .icon="${!svg_path ? icon : ''}"></ha-icon>
				${kInput}
			</ha-icon-button>
		`;
    }
    buildRow(content) {
        return (0, lit_element_1.html) ` <div class="row">${content}</div> `;
    }
    buildButtonsFromActions(actions) {
        return actions.map((action) => this.buildIconButton(action));
    }
    triggerRender() {
        this.trigger = Math.random();
    }
    render() {
        if (!this._config || !this._hass) {
            return (0, lit_element_1.html) ``;
        }
        const content = [];
        Object.keys(this._config).forEach((row_name) => {
            if (row_name.includes('_row')) {
                switch (row_name) {
                    case 'volume_row': {
                        if (this._config.volume_row == 'buttons') {
                            content.push([
                                this.buildIconButton('volume_down'),
                                this.buildIconButton('volume_mute'),
                                this.buildIconButton('volume_up'),
                            ]);
                        }
                        else if (this._config.volume_row == 'slider') {
                            content.push([
                                this.volume_slider,
                            ]);
                        }
                        break;
                    }
                    case 'navigation_row': {
                        switch (this._config.navigation_row) {
                            case 'buttons': {
                                content.push([this.buildIconButton('up')]);
                                content.push([
                                    this.buildIconButton('left'),
                                    this.buildIconButton('center'),
                                    this.buildIconButton('right'),
                                ]);
                                content.push([this.buildIconButton('down')]);
                                break;
                            }
                            case 'touchpad':
                            default: {
                                const touchpad = [
                                    (0, lit_element_1.html) `
										<toucharea
											id="toucharea"
											@click="${this.onTouchClick}"
											@touchstart="${this.onTouchStart}"
											@touchmove="${this.onTouchMove}"
											@touchend="${this.onTouchEnd}"
										>
										</toucharea>
									`,
                                ];
                                content.push(touchpad);
                            }
                        }
                        break;
                    }
                    default: {
                        content.push(this.buildButtonsFromActions(this._config[row_name]));
                    }
                }
            }
        });
        const mappedContent = content.map(this.buildRow);
        const output = (0, lit_element_1.html) `
			${this.renderStyle()}
			<ha-card .header="${this._config.title}">${mappedContent}</ha-card>
		`;
        return (0, lit_element_1.html) `${output}`;
    }
    renderStyle() {
        return (0, lit_element_1.html) `
			<style>
				.remote {
					padding: 16px 0px 16px 0px;
				}
				img,
				ha-icon-button {
					width: 48px;
					height: 48px;
					cursor: pointer;
					--mdc-icon-size: 100%;
					position: relative;
				}
				input {
					opacity: 0;
					filter: alpha(opacity=0);
					top: 0;
					left: 0;
					position: absolute;
					width: -moz-available;
					width: -webkit-fill-available;
					width: fill-available;
					height: -moz-available;
					height: -webkit-fill-available;
					height: fill-available;
				}
				.row {
					display: flex;
					padding: 8px 36px 8px 36px;
					justify-content: space-evenly;
				}
				.diagonal {
					background-color: var(--light-primary-color);
				}
				toucharea {
					border-radius: 30px;
					flex-grow: 1;
					height: ${this._config['touchpad_height'] || '250px'};
					background: #6d767e;
					touch-action: none;
					text-align: center;
				}
			</style>
		`;
    }
    applyThemesOnElement(element, themes, localTheme) {
        var _a;
        element._themes = (_a = element._themes) !== null && _a !== void 0 ? _a : {};
        let themeName = themes.default_theme;
        if (localTheme === 'default' ||
            (localTheme && themes.themes[localTheme])) {
            themeName = localTheme;
        }
        const styles = Object.assign({}, element._themes);
        if (themeName !== 'default') {
            const theme = themes.themes[themeName];
            Object.keys(theme).forEach((key) => {
                const prefixedKey = '--' + key;
                element._themes[prefixedKey] = '';
                styles[prefixedKey] = theme[key];
            });
        }
        if (element.updateStyles) {
            element.updateStyles(styles);
        }
        else if (window.ShadyCSS) {
            // implement updateStyles() method of Polemer elements
            window.ShadyCSS.styleSubtree(
            /** @type {!HTMLElement} */
            element, styles);
        }
        const meta = document.querySelector('meta[name=theme-color]');
        if (meta) {
            if (!meta.hasAttribute('default-content')) {
                meta.setAttribute('default-content', meta.getAttribute('content'));
            }
            const themeColor = styles['--primary-color'] ||
                meta.getAttribute('default-content');
            meta.setAttribute('content', themeColor);
        }
    }
}
customElements.define('android-tv-card', AndroidTVCard);


/***/ }),

/***/ "./src/models/defaultKeys.ts":
/*!***********************************!*\
  !*** ./src/models/defaultKeys.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultKeys = void 0;
/**
 * This is the list of most common commands from the Android TV Remote integration page.
 * Not all are ensured to work, and if they do not it is likely an issue with the underlying package used by the Android TV Remote integration or the Android TV Remote Protocol V2 itself.
 * https://www.home-assistant.io/integrations/androidtv_remote/#remote
 */
exports.defaultKeys = {
    power: { key: 'POWER', icon: 'mdi:power' },
    volume_up: { key: 'VOLUME_UP', icon: 'mdi:volume-plus' },
    volume_down: { key: 'VOLUME_DOWN', icon: 'mdi:volume-minus' },
    volume_mute: { key: 'MUTE', icon: 'mdi:volume-mute' },
    back: { key: 'BACK', icon: 'mdi:keyboard-backspace' },
    home: { key: 'HOME', icon: 'mdi:home' },
    up: { key: 'DPAD_UP', icon: 'mdi:chevron-up' },
    left: { key: 'DPAD_LEFT', icon: 'mdi:chevron-left' },
    center: { key: 'DPAD_CENTER', icon: 'mdi:checkbox-blank-circle' },
    right: { key: 'DPAD_RIGHT', icon: 'mdi:chevron-right' },
    down: { key: 'DPAD_DOWN', icon: 'mdi:chevron-down' },
    play: { key: 'MEDIA_PLAY', icon: 'mdi:play' },
    pause: { key: 'MEDIA_PAUSE', icon: 'mdi:pause' },
    play_pause: { key: 'MEDIA_PLAY_PAUSE', icon: 'mdi:play-pause' },
    stop: { key: 'MEDIA_STOP', icon: 'mdi:stop' },
    rewind: { key: 'MEDIA_REWIND', icon: 'mdi:rewind' },
    fast_forward: { key: 'MEDIA_FAST_FORWARD', icon: 'mdi:fast-forward' },
    previous: { key: 'MEDIA_PREVIOUS', icon: 'mdi:skip-previous' },
    record: { key: 'MEDIA_RECORD', icon: 'mdi:record' },
    next: { key: 'MEDIA_NEXT', icon: 'mdi:skip-next' },
    menu: { key: 'MENU', icon: 'mdi:menu' },
    a: { key: 'BUTTON_A', icon: 'mdi:alpha-a-circle' },
    b: { key: 'BUTTON_B', icon: 'mdi:alpha-B-circle' },
    x: { key: 'BUTTON_X', icon: 'mdi:alpha-x-circle' },
    y: { key: 'BUTTON_Y', icon: 'mdi:alpha-y-circle' },
    n0: { key: '0', icon: 'mdi:numeric-0' },
    n1: { key: '1', icon: 'mdi:numeric-1' },
    n2: { key: '2', icon: 'mdi:numeric-2' },
    n3: { key: '3', icon: 'mdi:numeric-3' },
    n4: { key: '4', icon: 'mdi:numeric-4' },
    n5: { key: '5', icon: 'mdi:numeric-5' },
    n6: { key: '6', icon: 'mdi:numeric-6' },
    n7: { key: '7', icon: 'mdi:numeric-7' },
    n8: { key: '8', icon: 'mdi:numeric-8' },
    n9: { key: '9', icon: 'mdi:numeric-9' },
    channel_up: { key: 'CHANNEL_UP', icon: 'mdi:arrow-up-circle' },
    channel_down: { key: 'CHANNEL_DOWN', icon: 'mdi:arrow-down-circle' },
    f1: { key: 'F1', icon: 'mdi:keyboard-f1' },
    f2: { key: 'F2', icon: 'mdi:keyboard-f2' },
    f3: { key: 'F3', icon: 'mdi:keyboard-f3' },
    f4: { key: 'F4', icon: 'mdi:keyboard-f4' },
    f5: { key: 'F5', icon: 'mdi:keyboard-f5' },
    f6: { key: 'F6', icon: 'mdi:keyboard-f6' },
    f7: { key: 'F7', icon: 'mdi:keyboard-f7' },
    f8: { key: 'F8', icon: 'mdi:keyboard-f8' },
    f9: { key: 'F9', icon: 'mdi:keyboard-f9' },
    f10: { key: 'F10', icon: 'mdi:keyboard-f10' },
    f11: { key: 'F11', icon: 'mdi:keyboard-f11' },
    f12: { key: 'F12', icon: 'mdi:keyboard-f12' },
    tv: { key: 'TV', icon: 'mdi:television-box' },
    red: { key: 'PROG_RED', icon: 'mdi:alpha-r-box' },
    green: { key: 'PROG_GREEN', icon: 'mdi:alpha-g-box' },
    yellow: { key: 'PROG_YELLOW', icon: 'mdi:alpha-y-box' },
    blue: { key: 'PROG_BLUE', icon: 'mdi:alpha-b-box' },
    button_mode: { key: 'BUTTON_MODE', icon: 'mdi:gesture-tap-buton' },
    explorer: { key: 'EXPLORER', icon: 'mdi:folder-multiple' },
    info: { key: 'INFO', icon: 'mdi:information' },
    guide: { key: 'GUIDE', icon: 'mdi:television-guide' },
    teletext: { key: 'TV_TELETEXT', icon: 'mdi:card-text' },
    captions: { key: 'CAPTIONS', icon: 'mdi:closed-caption' },
    dvr: { key: 'DVR', icon: 'mdi:audio-video' },
    audio_track: { key: 'MEDIA_AUDIO_TRACK', icon: 'mdi:waveform' },
    settings: { key: 'SETTINGS', icon: 'mdi:cog' },
    delete: { key: 'DEL', icon: 'mdi:backspace' },
    forward_delete: { key: 'FOWARD_DEL', icon: 'mdi:backspace-reverse' },
    enter: { key: 'ENTER', icon: 'mdi:magnify' },
    keyboard: { key: 'KEYBOARD', icon: 'mdi:keyboard' },
    search: { key: 'SEARCH', icon: 'mdi:google-assistant' },
    textbox: { key: 'TEXTBOX', icon: 'mdi:text-box' },
};


/***/ }),

/***/ "./src/models/defaultSources.ts":
/*!**************************************!*\
  !*** ./src/models/defaultSources.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultSources = void 0;
const _1 = __webpack_require__(/*! . */ "./src/models/index.ts");
/**
 * This is a list of common streaming apps, their icons, and the deep links to open them in Android TV, mostly collected from the following Home Assistant Community Forum guide.
 * Not all have been tested, if any do not work please let me know!
 * https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921
 */
exports.defaultSources = {
    appletv: {
        source: 'https://tv.apple.com',
        svg_path: _1.svg.APPLETV,
    },
    crunchyroll: {
        source: 'crunchyroll://',
        svg_path: _1.svg.CRUNCHYROLL,
    },
    disney: {
        source: 'https://www.disneyplus.com',
        svg_path: _1.svg.DISNEY,
    },
    emby: {
        source: 'embyatv://tv.emby.embyatv/startapp',
        icon: 'mdi:emby',
    },
    foxsports: {
        source: 'foxsports://live',
        svg_path: _1.svg.FOXSPORTS,
    },
    hulu: {
        source: 'hulu://',
        icon: 'mdi:hulu',
    },
    max: {
        source: 'https://play.max.com',
        svg_path: _1.svg.MAX,
    },
    mlbtv: {
        source: 'mlbatbat://',
        svg_path: _1.svg.MLBTV,
    },
    nba: {
        source: 'gametime://',
        svg_path: _1.svg.NBA,
    },
    netflix: { source: 'netflix://', icon: 'mdi:netflix' },
    plex: {
        source: 'plex://',
        icon: 'mdi:plex',
    },
    primevideo: {
        source: 'https://app.primevideo.com',
        svg_path: _1.svg.PRIMEVIDEO,
    },
    pia: {
        source: 'piavpn://',
        svg_path: _1.svg.PIA,
    },
    spotify: { source: 'spotify://', icon: 'mdi:spotify' },
    surfshark: {
        source: 'https://surfshark.com/locations-ul',
        svg_path: _1.svg.SURFSHARK,
    },
    vudu: {
        source: 'vuduapp://',
        svg_path: _1.svg.VUDU,
    },
    youtube: { source: 'vnd.youtube://', icon: 'mdi:youtube' },
    youtubetv: {
        source: 'https://tv.youtube.com',
        icon: 'mdi:youtube-tv',
    },
};


/***/ }),

/***/ "./src/models/enums/index.ts":
/*!***********************************!*\
  !*** ./src/models/enums/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./svg */ "./src/models/enums/svg.ts"), exports);


/***/ }),

/***/ "./src/models/enums/svg.ts":
/*!*********************************!*\
  !*** ./src/models/enums/svg.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.svg = void 0;
var svg;
(function (svg) {
    svg["APPLETV"] = "M 6.820312 8.246094 C 7.179688 7.824219 7.398438 7.273438 7.398438 6.675781 C 7.398438 6.613281 7.398438 6.550781 7.394531 6.492188 L 7.394531 6.5 C 6.746094 6.566406 6.183594 6.871094 5.785156 7.324219 L 5.78125 7.328125 C 5.417969 7.726562 5.195312 8.261719 5.195312 8.851562 C 5.195312 8.910156 5.199219 8.96875 5.203125 9.023438 L 5.203125 9.015625 C 5.207031 9.015625 5.214844 9.015625 5.222656 9.015625 C 5.867188 9.015625 6.445312 8.71875 6.820312 8.25 Z M 8.195312 12.304688 C 8.203125 13.292969 8.796875 14.140625 9.648438 14.511719 L 9.664062 14.519531 C 9.46875 15.109375 9.214844 15.625 8.894531 16.09375 L 8.90625 16.070312 C 8.449219 16.734375 7.980469 17.398438 7.230469 17.414062 C 6.5 17.429688 6.269531 16.980469 5.425781 16.980469 C 4.589844 16.980469 4.328125 17.398438 3.632812 17.429688 C 2.925781 17.453125 2.375 16.703125 1.914062 16.039062 C 1.226562 15.109375 0.8125 13.941406 0.8125 12.671875 C 0.8125 11.902344 0.964844 11.167969 1.242188 10.5 L 1.226562 10.535156 C 1.679688 9.734375 2.519531 9.195312 3.484375 9.171875 L 3.488281 9.171875 C 4.191406 9.15625 4.863281 9.648438 5.296875 9.648438 C 5.726562 9.648438 6.535156 9.0625 7.386719 9.148438 C 8.210938 9.179688 8.933594 9.59375 9.378906 10.21875 L 9.386719 10.226562 C 8.675781 10.664062 8.210938 11.429688 8.195312 12.304688 Z M 15.019531 17.304688 C 14.589844 17.429688 14.097656 17.5 13.585938 17.5 C 13.582031 17.5 13.574219 17.5 13.566406 17.5 C 12.417969 17.5 11.847656 16.851562 11.847656 15.546875 L 11.847656 9.796875 L 10.851562 9.796875 L 10.851562 8.753906 L 11.898438 8.753906 L 11.898438 7.398438 L 13.28125 6.832031 L 13.28125 8.761719 L 14.878906 8.761719 L 14.878906 9.804688 L 13.289062 9.804688 L 13.289062 15.238281 C 13.285156 15.277344 13.285156 15.320312 13.285156 15.367188 C 13.285156 15.640625 13.359375 15.898438 13.492188 16.117188 L 13.492188 16.109375 C 13.644531 16.265625 13.855469 16.363281 14.089844 16.363281 C 14.128906 16.363281 14.160156 16.359375 14.195312 16.355469 L 14.191406 16.355469 C 14.492188 16.34375 14.777344 16.304688 15.050781 16.242188 L 15.019531 16.25 Z M 20.019531 17.367188 L 18.324219 17.367188 L 15.195312 8.753906 L 16.726562 8.753906 L 18.617188 14.355469 C 18.6875 14.574219 18.871094 15.199219 19.164062 16.242188 L 19.441406 15.308594 L 19.75 14.367188 L 21.710938 8.746094 L 23.230469 8.746094 Z M 20.019531 17.367188 ";
    svg["CRUNCHYROLL"] = "M 2.933594 13.46875 C 2.707031 10.601562 3.65625 7.769531 5.566406 5.621094 C 7.476562 3.476562 10.179688 2.199219 13.050781 2.089844 C 15.921875 1.984375 18.710938 3.050781 20.777344 5.046875 C 22.847656 7.042969 24.007812 9.792969 24 12.667969 L 24 12 C 24 5.371094 18.628906 0 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 L 12.800781 24 C 7.261719 23.609375 2.964844 19.015625 2.933594 13.46875 Z M 19.199219 14 C 14.886719 14.015625 13.8125 8.011719 17.867188 6.53125 C 16.679688 5.898438 15.347656 5.574219 14 5.601562 C 10.601562 5.601562 7.539062 7.648438 6.238281 10.785156 C 4.9375 13.925781 5.65625 17.539062 8.058594 19.941406 C 10.460938 22.34375 14.074219 23.0625 17.214844 21.761719 C 20.351562 20.460938 22.398438 17.398438 22.398438 14 C 22.421875 13.464844 22.378906 12.925781 22.265625 12.398438 C 21.609375 13.449219 20.4375 14.0625 19.199219 14 Z M 19.199219 14 ";
    svg["DISNEY"] = "M 22.152344 9.085938 C 19.335938 5.117188 13.601562 2.890625 10.4375 2.363281 C 6.941406 1.78125 4.8125 2.003906 3.039062 2.328125 C 2.382812 2.449219 0.390625 2.816406 0.078125 4.324219 C -0.199219 5.683594 1.136719 6.652344 1.40625 6.832031 C 1.941406 7.1875 2.660156 7.042969 3.019531 6.511719 C 3.378906 5.980469 3.242188 5.253906 2.710938 4.890625 C 2.6875 4.875 2.664062 4.855469 2.640625 4.835938 C 2.824219 4.773438 3.089844 4.699219 3.460938 4.628906 C 4.921875 4.359375 6.753906 4.121094 10.054688 4.671875 C 12.726562 5.117188 17.859375 7.078125 20.246094 10.4375 C 21.273438 11.882812 21.652344 13.425781 21.378906 15.019531 C 21.113281 16.558594 20.4375 17.601562 19.3125 18.214844 C 17.285156 19.316406 14.074219 18.84375 11.707031 18.195312 L 11.707031 13.195312 C 12.476562 13.195312 13.199219 13.269531 14.128906 13.441406 C 14.742188 13.558594 15.105469 13.882812 15.222656 14.074219 C 15.199219 14.085938 15.171875 14.097656 15.140625 14.105469 C 14.527344 14.3125 14.195312 14.972656 14.402344 15.585938 C 14.605469 16.199219 15.265625 16.53125 15.882812 16.328125 C 17.234375 15.875 17.65625 14.835938 17.597656 14.007812 C 17.507812 12.660156 16.226562 11.453125 14.554688 11.140625 C 13.476562 10.941406 12.621094 10.855469 11.707031 10.855469 L 11.707031 8.78125 C 11.707031 8.136719 11.183594 7.613281 10.539062 7.613281 C 9.894531 7.613281 9.367188 8.136719 9.367188 8.78125 L 9.367188 10.957031 C 5.082031 11.28125 3.0625 12.171875 2.722656 13.847656 C 2.214844 16.363281 6.445312 18.636719 8.324219 19.511719 C 8.386719 19.539062 8.769531 19.699219 9.367188 19.910156 L 9.367188 21.066406 C 9.367188 21.714844 9.894531 22.238281 10.539062 22.238281 C 11.183594 22.238281 11.707031 21.714844 11.707031 21.066406 L 11.707031 20.613281 C 13.027344 20.941406 14.59375 21.214844 16.160156 21.214844 C 17.65625 21.214844 19.15625 20.964844 20.429688 20.273438 C 22.199219 19.308594 23.292969 17.675781 23.683594 15.417969 C 24.066406 13.1875 23.554688 11.054688 22.152344 9.085938 Z M 9.277344 17.375 C 7.226562 16.417969 5.214844 14.964844 5.03125 14.324219 C 5.179688 14.167969 5.96875 13.582031 9.367188 13.304688 L 9.367188 17.410156 C 9.339844 17.398438 9.304688 17.386719 9.277344 17.375 Z M 9.277344 17.375 ";
    svg["FOXSPORTS"] = "M 0.2305 15.125 L 0.2305 5 L 6.2148 5 L 6.3984 7.7695 L 3.0469 7.7695 L 3.0469 9.0898 L 5.7773 9.0898 L 5.7773 11.8516 L 3.0273 11.8516 L 3.0273 15.125 L 0.2305 15.125 M 23.2813 15.0938 L 20.2852 9.8398 L 23.0078 5 L 20.0117 5 L 18.7695 7.1797 L 17.5469 5 L 14.4453 5 L 17.2188 9.875 L 14.2813 15.1016 L 17.293 15.0977 L 18.7305 12.5391 L 20.1836 15.0938 L 23.2813 15.0938 M 11.9102 12.0977 L 11.9102 8.0508 C 11.9102 7.5898 11.5156 7.1758 11.0703 7.1758 C 10.6289 7.1758 10.2695 7.5898 10.2695 8.0508 L 10.2695 12.082 C 10.2695 12.5469 10.6289 12.918 11.0703 12.918 C 11.5156 12.918 11.9102 12.5586 11.9102 12.0977 Z M 6.3242 10.0742 C 6.3242 7.3594 8.4414 5.1523 11.0586 5.1523 C 13.6758 5.1523 15.7969 7.3594 15.7969 10.0742 C 15.7969 12.793 13.6758 14.9961 11.0586 14.9961 C 8.4414 14.9961 6.3242 12.793 6.3242 10.0742 Z M 0 19.5195 L 0 18.9961 L 0.2617 18.7344 L 2.3867 18.7344 L 2.4648 18.6563 L 2.4648 18.1016 L 2.4102 18.0391 L 0.4375 18.0391 L 0 17.5938 L 0 16.3203 L 0.5039 15.8086 L 3.3633 15.8086 L 3.3633 16.3711 L 3.1563 16.5859 L 1.082 16.5859 L 1.0039 16.668 L 1.0039 17.207 L 1.0625 17.2656 L 3.0273 17.2656 L 3.4648 17.7148 L 3.4648 19.0039 L 2.9609 19.5195 L 0 19.5195 M 6.4609 17.6055 L 6.6094 17.4531 L 6.6094 16.7422 L 6.4609 16.5938 L 5.0938 16.5938 L 5.0938 17.6055 Z M 4.0898 15.8086 L 7.0547 15.8086 L 7.6172 16.3789 L 7.6172 17.7539 L 7.0547 18.3281 L 5.0938 18.3281 L 5.0938 19.5195 L 4.0898 19.5195 Z M 10.5156 18.6484 L 10.7227 18.4414 L 10.7227 16.8203 L 10.5156 16.6133 L 9.3477 16.6133 L 9.1406 16.8203 L 9.1406 18.4414 L 9.3477 18.6484 Z M 8.1445 18.9492 L 8.1445 16.3789 L 8.6992 15.8086 L 11.1602 15.8086 L 11.7227 16.3789 L 11.7227 18.9492 L 11.1602 19.5195 L 8.6992 19.5195 Z M 14.7344 17.3984 L 14.875 17.2539 L 14.875 16.7109 L 14.7344 16.5664 L 13.3828 16.5664 L 13.3828 17.3984 Z M 12.3789 15.8086 L 15.375 15.8086 L 15.8789 16.3203 L 15.8789 17.5039 L 15.3984 17.9961 L 16.0313 19.5195 L 14.9141 19.5195 L 14.4453 18.1719 L 13.3828 18.1719 L 13.3828 19.5195 L 12.3789 19.5195 Z M 17.3789 16.668 L 16.2188 16.668 L 16.2188 15.8086 L 19.5391 15.8086 L 19.5391 16.668 L 18.3828 16.668 L 18.3828 19.5195 L 17.3789 19.5195 L 17.3789 16.668 M 20.082 19.6211 L 20.082 19.0977 L 20.3438 18.8359 L 22.4688 18.8359 L 22.5469 18.7578 L 22.5469 18.2031 L 22.4922 18.1406 L 20.5195 18.1406 L 20.082 17.6953 L 20.082 16.4219 L 20.5859 15.9102 L 23.4453 15.9102 L 23.4453 16.4727 L 23.2383 16.6875 L 21.168 16.6875 L 21.0859 16.7695 L 21.0859 17.3086 L 21.1445 17.3672 L 23.1133 17.3672 L 23.5469 17.8164 L 23.5469 19.1055 L 23.043 19.6211 L 20.082 19.6211";
    svg["MAX"] = "M 3.7443 8 C 3.0949 8 2.4381 8.2932 1.5957 8.9574 L 1.5957 8.167 L 0 8.167 L 0 14.4756 L 1.6959 14.4756 L 1.6959 10.5531 C 2.4381 9.9557 2.7758 9.7664 3.0541 9.7664 C 3.3844 9.7664 3.5996 9.9742 3.5996 10.5012 L 3.5996 14.4756 L 5.2955 14.4756 L 5.2955 10.542 C 6.0377 9.9557 6.368 9.7664 6.6537 9.7664 C 6.984 9.7664 7.1992 9.9742 7.1992 10.5012 L 7.1992 14.4756 L 8.8951 14.4756 L 8.8951 9.8926 C 8.8951 8.4713 8.1047 8 7.3439 8 C 6.6945 8 6.0377 8.2746 5.173 8.9463 C 4.8947 8.2412 4.2898 8 3.7443 8 Z M 12.3426 8 C 10.6578 8 9.2588 9.4807 9.2588 11.3213 C 9.2588 13.1619 10.6578 14.6426 12.3426 14.6426 C 13.1775 14.6426 13.8975 14.3271 14.4504 13.6443 L 14.4504 14.4756 L 16.0684 14.4756 L 16.0684 8.167 L 14.4504 8.167 L 14.4504 8.9982 C 13.8975 8.3154 13.1775 8 12.3426 8 Z M 16.3652 8.167 C 17.0629 9.284 17.857 10.2822 18.7811 11.2805 C 17.857 12.3195 17.0629 13.4031 16.3652 14.4756 L 18.41 14.4756 C 18.8961 13.674 19.4416 12.9504 20.0687 12.2676 C 20.6848 12.9504 21.2006 13.674 21.683 14.4756 L 23.75 14.4756 C 23.0412 13.3697 22.2693 12.3195 21.3416 11.2805 C 22.2582 10.2822 23.0412 9.2506 23.75 8.167 L 21.7238 8.167 C 21.2191 8.9686 20.6736 9.6402 20.0687 10.3008 C 19.449 9.6402 18.9072 8.9686 18.41 8.167 Z M 12.5986 9.4621 C 13.608 9.4621 14.4207 10.2896 14.4207 11.3213 C 14.4207 12.3529 13.608 13.1805 12.5986 13.1805 C 11.593 13.1805 10.7803 12.3529 10.7803 11.3213 C 10.7803 10.2896 11.593 9.4621 12.5986 9.4621 Z M 12.5986 9.8814 C 11.8268 9.8814 11.1996 10.5234 11.1996 11.3213 C 11.1996 12.1191 11.8268 12.7611 12.5986 12.7611 C 13.3705 12.7611 13.9977 12.1191 13.9977 11.3213 C 13.9977 10.5234 13.3705 9.8814 12.5986 9.8814 Z M 12.5986 9.8814";
    svg["MLBTV"] = "M 23.2539 7.0039 C 23.2656 6.293 22.6953 5.7109 21.9883 5.7031 C 21.9805 5.7031 21.9727 5.7031 21.9648 5.7031 L 16.3828 5.7031 L 19.5859 11.0625 L 19.8789 11.1016 L 20.0664 11.3438 L 20.0664 11.5742 L 20.2695 11.6172 L 20.457 11.8711 L 20.457 12.0898 L 20.6641 12.1289 L 20.875 12.3594 L 20.875 12.8672 C 21.1289 13.0977 21.4102 13.2852 21.7188 13.4297 C 22 13.5391 22.0313 13.9922 22.2031 14.2344 C 22.4141 14.5859 22.707 14.7266 22.6445 14.9258 C 22.5039 15.4492 21.9648 16.3398 21.4648 16.3789 L 19.4805 16.3789 L 19.4805 17.2305 L 21.9648 17.2305 C 22.6836 17.2266 23.2617 16.6445 23.2578 15.9258 L 23.2578 7.0039 M 9.6016 16.3945 L 8.6445 16.3945 C 8.6445 13.9922 9.4531 12.6641 10.4258 12.3984 C 10.5586 12.375 10.4922 11.7188 10.3242 11.5195 L 9.7656 11.5195 C 9.6758 11.5195 9.7266 11.3477 9.7266 11.3477 L 10.1797 10.3789 L 10.1211 10.1094 L 8.4414 10.1094 L 9.8203 9.1445 C 9.8828 6.5938 12.4961 6.3945 14.0664 7.457 C 15.0039 8.0781 15.0742 9.3086 15.0039 10.1563 C 14.9922 10.2109 14.7578 10.1758 14.7578 10.1758 C 14.7578 10.1758 14.6016 11.1133 15.0156 11.1133 L 16.8516 11.1133 C 17.5977 11.082 18.3203 11.5898 18.3203 11.5898 L 18.4961 10.9453 L 14.4766 5.7031 L 1.9961 5.7031 C 1.6523 5.6992 1.3203 5.8359 1.0742 6.0781 C 0.832 6.3242 0.6953 6.6563 0.6992 7.0039 L 0.6992 15.9297 C 0.6953 16.2734 0.8281 16.6094 1.0742 16.8516 C 1.3203 17.0977 1.6523 17.2344 1.9961 17.2344 L 10.0977 17.2344 C 9.9023 16.8945 9.6758 16.5078 9.6055 16.3945 M 2.5 14.5 C 2.5 14.0078 2.8945 13.6094 3.3867 13.6094 C 3.875 13.6094 4.2734 14.0078 4.2734 14.5 C 4.2734 14.9883 3.875 15.3867 3.3867 15.3867 L 3.3789 15.3867 C 2.8945 15.3867 2.5 14.9961 2.5 14.5117 C 2.5 14.5078 2.5 14.5039 2.5 14.5";
    svg["NBA"] = "M 7.8555 21.1602 C 7.5547 20.8906 7.7539 20.7734 7.7383 20.6563 C 7.5391 19.8203 6.8672 19.3203 7.2188 19.0547 C 7.1484 18.8438 7.0664 18.6367 6.9688 18.4336 C 5.9336 17.8477 5.0625 16.8789 4.9141 16.7461 C 4.7617 16.6133 4.4297 16.3438 4.3633 16.1953 C 4.2969 16.043 2.9063 14.2383 2.625 13.6211 L 2.1406 13.5547 C 1.9219 12.6367 1.1719 11.8672 1.1523 10.9648 C 1.1758 10.543 1.25 10.1289 1.3711 9.7266 C 1.4688 9.5781 1.5859 9.4414 1.7227 9.3242 L 1.7227 9.0742 C 0.6523 9.1094 0.9531 8.9922 0.7695 8.5742 C 0.5859 8.1563 0.7344 8.2227 0.7852 8.0234 C 0.9375 7.4375 1.4023 6.5195 1.6055 6.1016 C 1.8047 5.6836 1.8711 5.3828 1.8711 5.3828 C 2.6758 3.7617 2.9766 3.8789 3.9258 3.7773 L 3.9766 3.7109 C 4.9297 3.6758 4.7813 3.5938 4.9141 2.6758 C 4.7813 2.7422 4.7305 2.3906 4.7305 2.3906 C 4.6445 1.8711 4.8789 1.9727 4.9805 1.957 C 4.9961 1.1016 5.0977 0.8203 5.7148 0.5859 L 2.4922 0.5859 C 1.4375 0.5859 0.5859 1.4375 0.5859 2.4883 L 0.5859 21.5078 C 0.5859 22.5625 1.4375 23.4141 2.4922 23.4141 L 8.1055 23.4141 C 7.4531 23.0625 7.8398 22.4141 7.8555 21.1602 M 21.5078 0.5859 L 6.2852 0.5859 C 6.5156 0.6484 6.7148 0.7969 6.8359 1.0039 C 7.0703 1.0195 7.3555 1.5547 6.918 2.3242 C 7.1211 2.457 6.9688 2.6406 6.8203 2.8594 C 6.668 3.0742 6.7344 3.0586 6.6172 3.043 C 6.4531 3.3945 6.25 3.7266 6.1016 3.7422 C 6.0352 3.8203 6.0273 3.9297 6.082 4.0117 C 6.3086 4.1016 6.5156 4.2266 6.7031 4.3789 L 6.7031 4.4609 C 6.8672 4.5625 6.9531 4.6445 7.1367 4.7461 C 7.5859 5.0313 8.1563 5.5469 8.0898 7.3203 C 8.2227 7.7031 8.2734 8.457 8.3906 8.707 C 8.5078 8.957 8.793 9.4922 8.8594 9.9258 C 8.8594 9.9258 8.9258 10.5781 9.0078 10.6641 L 9.0586 10.6641 C 9.4414 10.7461 9.375 10.7969 9.4102 10.8633 L 9.5078 10.9453 C 9.6094 10.9961 9.7773 11.0469 9.7773 11.2305 L 9.8594 11.3633 C 9.9102 11.4453 9.957 11.5273 9.9961 11.6172 C 10.1289 11.9922 10.1289 12.4063 9.9961 12.7852 L 9.9961 12.8359 C 9.8477 13.2031 9.5742 13.5039 9.2266 13.6875 L 9.1914 13.6875 L 9.1406 13.7227 C 8.918 13.8281 8.6719 13.8867 8.4219 13.8867 C 7.4883 13.7656 6.832 12.9063 6.957 11.9727 C 7.0391 11.3594 7.4453 10.8398 8.0234 10.6133 C 7.8203 10.1289 7.4219 9.3438 7.3047 9.0938 C 7.1875 8.8398 6.9023 7.2188 6.8516 6.9023 C 6.8008 6.5859 6.1172 7.3203 6.1172 7.3555 C 6.1172 7.3867 5.582 8.6914 5.5664 8.7578 C 5.5547 8.8281 5.5469 8.9023 5.5469 8.9766 C 5.5469 8.9766 5.8008 9.0078 5.9336 9.4258 C 6.0664 9.8438 6.5 11.3984 6.5 11.3984 L 6.3828 11.5156 C 6.918 13.3047 6.7344 14.0742 6.9688 14.6055 C 7.2031 15.1406 7.3555 15.2422 7.6055 15.8789 C 7.8555 16.5117 7.9883 18.1172 8.0742 18.1836 C 8.3555 18.5508 8.5234 18.8359 8.5234 19.0352 C 8.5234 19.2383 8.2734 19.8555 8.375 20.2227 C 8.4727 20.5898 8.457 20.9063 8.5586 20.9922 C 8.6563 21.0742 8.6406 21.1758 8.6055 21.2422 C 8.5898 21.2734 8.5781 21.3086 8.5742 21.3438 C 8.7227 21.9102 9.2422 22.8633 8.4219 23.3633 L 8.375 23.3984 L 21.543 23.3984 C 22.582 23.3906 23.4219 22.5508 23.4336 21.5117 L 23.4336 2.4922 C 23.4219 1.4336 22.5664 0.5859 21.5078 0.5859 Z M 21.5078 0.5859 M 15.793 5.1133 L 19.2383 5.1133 L 18.5352 16.6289 L 17.7813 5.1133 L 21.1406 5.1133 L 19.6563 18.9023 L 17.2461 18.9023 Z M 15.3438 6.8359 L 13.8867 6.8359 L 13.8867 18.8867 L 12.0352 18.8867 L 12.0352 6.8359 L 10.6133 6.8359 L 10.6133 5.0977 L 15.3438 5.0977 Z M 3.543 22.2266 L 3.543 18.7852 L 4.2109 18.7852 C 4.5977 18.7852 4.8281 18.9844 4.8281 19.4727 L 4.8281 19.9883 C 4.8281 20.3047 4.7305 20.457 4.5977 20.5391 C 4.7539 20.6563 4.8438 20.8438 4.8281 21.043 L 4.8281 21.543 C 4.8281 22.0117 4.5781 22.2266 4.2109 22.2266 Z M 4.0117 20.7227 L 4.0117 21.793 L 4.1953 21.793 C 4.3438 21.793 4.3945 21.7109 4.3945 21.543 L 4.3945 20.957 C 4.3945 20.793 4.3438 20.7227 4.1953 20.7227 Z M 4.0117 19.2188 L 4.0117 20.3555 L 4.1797 20.3555 C 4.3438 20.3555 4.3789 20.3047 4.3789 20.1055 L 4.3789 19.4375 C 4.3789 19.2695 4.3281 19.2031 4.1797 19.2031 L 4.0117 19.2031 Z M 5.9336 21.5273 L 5.5156 21.5273 L 5.4648 22.2266 L 4.9961 22.2266 L 5.4141 18.7852 L 6.0664 18.7852 L 6.4688 22.2266 L 5.9844 22.2266 Z M 5.7148 19.168 L 5.6992 19.168 C 5.6641 19.5859 5.6172 20.3047 5.5977 20.5391 L 5.5469 21.1406 L 5.8984 21.1406 L 5.8477 20.5391 C 5.832 20.3047 5.7656 19.5859 5.7148 19.168 M 2.1875 22.2266 L 1.7891 22.2266 L 1.7891 18.7852 L 2.4219 18.7852 L 2.9414 21.6094 C 2.8906 20.9414 2.8398 20.1211 2.8398 19.4219 L 2.8398 18.7852 L 3.2422 18.7852 L 3.2422 22.2266 L 2.6563 22.2266 L 2.1406 19.4727 C 2.1719 20.1055 2.1875 20.625 2.1875 21.1406 Z M 2.1875 22.2266";
    svg["PRIMEVIDEO"] = "M 1.160156 2.453125 Z M 1.160156 2.453125 Z M 10.246094 0.414062 C 9.792969 0.414062 9.523438 0.636719 9.488281 1.042969 C 9.46875 1.453125 9.703125 1.691406 10.027344 1.75 C 10.15625 1.777344 10.285156 1.777344 10.414062 1.75 C 10.710938 1.710938 10.933594 1.46875 10.953125 1.171875 C 10.980469 0.824219 10.824219 0.554688 10.515625 0.453125 C 10.425781 0.425781 10.339844 0.40625 10.246094 0.414062 Z M 3.496094 2.324219 C 3.046875 2.316406 2.636719 2.472656 2.253906 2.757812 C 2.21875 2.789062 2.179688 2.816406 2.128906 2.84375 C 2.117188 2.835938 2.109375 2.832031 2.109375 2.824219 C 2.089844 2.769531 2.078125 2.707031 2.0625 2.65625 C 2.015625 2.507812 1.960938 2.460938 1.808594 2.460938 C 1.636719 2.460938 1.457031 2.464844 1.285156 2.460938 C 1.160156 2.453125 1.039062 2.472656 0.941406 2.574219 C 0.941406 4.566406 0.949219 6.570312 0.949219 8.554688 C 1.023438 8.675781 1.136719 8.695312 1.273438 8.695312 C 1.476562 8.691406 1.683594 8.695312 1.886719 8.695312 C 2.246094 8.695312 2.246094 8.695312 2.246094 8.339844 L 2.246094 6.71875 C 2.246094 6.679688 2.226562 6.628906 2.265625 6.597656 C 2.554688 6.820312 2.898438 6.953125 3.257812 6.988281 C 3.765625 7.042969 4.214844 6.914062 4.601562 6.578125 C 4.878906 6.320312 5.085938 5.988281 5.195312 5.625 C 5.34375 5.160156 5.355469 4.679688 5.316406 4.207031 C 5.296875 3.910156 5.214844 3.613281 5.09375 3.351562 C 4.859375 2.859375 4.5 2.5 3.953125 2.371094 C 3.796875 2.335938 3.644531 2.324219 3.496094 2.324219 Z M 14.660156 2.324219 C 14.515625 2.324219 14.375 2.335938 14.234375 2.371094 C 13.863281 2.4375 13.53125 2.601562 13.214844 2.796875 C 13.179688 2.816406 13.140625 2.859375 13.085938 2.859375 C 13.058594 2.769531 13.039062 2.695312 13.011719 2.621094 C 12.976562 2.519531 12.917969 2.460938 12.808594 2.460938 L 12.101562 2.460938 C 12.03125 2.460938 11.964844 2.5 11.9375 2.566406 C 11.933594 2.613281 11.925781 2.660156 11.925781 2.707031 L 11.925781 6.65625 C 11.925781 6.851562 11.972656 6.914062 12.175781 6.914062 L 12.9375 6.914062 C 13.148438 6.914062 13.195312 6.867188 13.195312 6.65625 L 13.195312 3.613281 C 13.179688 3.574219 13.214844 3.519531 13.253906 3.503906 C 13.566406 3.355469 13.917969 3.289062 14.253906 3.316406 C 14.449219 3.324219 14.613281 3.457031 14.652344 3.652344 C 14.679688 3.75 14.6875 3.855469 14.6875 3.949219 L 14.6875 6.644531 C 14.6875 6.859375 14.726562 6.90625 14.941406 6.90625 L 15.542969 6.90625 C 15.628906 6.90625 15.71875 6.90625 15.804688 6.902344 C 15.886719 6.902344 15.949219 6.847656 15.949219 6.765625 C 15.960938 6.710938 15.960938 6.65625 15.960938 6.605469 L 15.960938 3.605469 C 15.953125 3.558594 15.980469 3.511719 16.027344 3.5 C 16.332031 3.355469 16.671875 3.289062 17.007812 3.316406 C 17.191406 3.324219 17.351562 3.453125 17.390625 3.625 C 17.425781 3.726562 17.433594 3.828125 17.425781 3.9375 L 17.425781 6.578125 C 17.425781 6.644531 17.425781 6.707031 17.441406 6.765625 C 17.453125 6.832031 17.507812 6.894531 17.574219 6.902344 C 17.621094 6.90625 17.667969 6.90625 17.714844 6.90625 L 18.410156 6.90625 C 18.667969 6.90625 18.703125 6.875 18.703125 6.617188 L 18.703125 3.660156 C 18.703125 3.59375 18.703125 3.53125 18.695312 3.472656 C 18.667969 3.175781 18.585938 2.898438 18.371094 2.675781 C 18.148438 2.4375 17.851562 2.34375 17.527344 2.332031 C 17.074219 2.304688 16.628906 2.40625 16.230469 2.613281 C 16.078125 2.695312 15.925781 2.78125 15.785156 2.871094 C 15.777344 2.859375 15.773438 2.859375 15.777344 2.851562 C 15.773438 2.84375 15.757812 2.832031 15.746094 2.808594 C 15.597656 2.585938 15.355469 2.425781 15.085938 2.371094 C 14.941406 2.335938 14.800781 2.324219 14.660156 2.324219 Z M 21.894531 2.363281 C 21.707031 2.34375 21.511719 2.351562 21.320312 2.371094 C 20.421875 2.480469 19.835938 2.972656 19.566406 3.835938 C 19.375 4.421875 19.402344 5.015625 19.550781 5.613281 C 19.753906 6.367188 20.253906 6.820312 21.015625 6.980469 C 21.449219 7.078125 21.882812 7.054688 22.320312 6.988281 C 22.550781 6.949219 22.777344 6.894531 22.996094 6.804688 C 23.125 6.757812 23.191406 6.679688 23.183594 6.53125 C 23.183594 6.394531 23.183594 6.253906 23.183594 6.109375 C 23.183594 5.933594 23.117188 5.882812 22.953125 5.921875 C 22.785156 5.960938 22.628906 5.996094 22.460938 6.03125 C 22.109375 6.105469 21.746094 6.105469 21.386719 6.042969 C 20.902344 5.949219 20.59375 5.53125 20.617188 5.015625 C 20.671875 5.023438 20.726562 5.03125 20.78125 5.042969 C 21.207031 5.117188 21.644531 5.125 22.078125 5.058594 C 22.328125 5.023438 22.5625 4.949219 22.785156 4.828125 C 23.042969 4.679688 23.230469 4.476562 23.3125 4.195312 C 23.507812 3.472656 23.203125 2.75 22.453125 2.480469 C 22.273438 2.425781 22.082031 2.386719 21.894531 2.363281 Z M 8.820312 2.410156 C 8.449219 2.386719 8.085938 2.5 7.789062 2.730469 C 7.671875 2.816406 7.566406 2.917969 7.457031 3.019531 C 7.4375 3.054688 7.402344 3.074219 7.363281 3.085938 C 7.328125 2.933594 7.292969 2.789062 7.253906 2.648438 C 7.214844 2.507812 7.144531 2.453125 6.996094 2.453125 L 6.449219 2.453125 C 6.1875 2.453125 6.160156 2.484375 6.160156 2.75 L 6.160156 6.625 C 6.160156 6.664062 6.160156 6.710938 6.167969 6.757812 C 6.175781 6.832031 6.226562 6.894531 6.300781 6.902344 C 6.34375 6.90625 6.390625 6.90625 6.429688 6.90625 L 7.171875 6.90625 C 7.207031 6.90625 7.253906 6.90625 7.292969 6.902344 C 7.367188 6.902344 7.429688 6.847656 7.429688 6.773438 C 7.4375 6.71875 7.4375 6.671875 7.4375 6.625 L 7.4375 3.882812 C 7.4375 3.824219 7.4375 3.769531 7.515625 3.734375 C 7.875 3.621094 8.246094 3.546875 8.632812 3.578125 C 8.707031 3.585938 8.785156 3.585938 8.859375 3.585938 C 8.960938 3.574219 9.003906 3.53125 9.027344 3.429688 C 9.042969 3.351562 9.042969 3.277344 9.035156 3.195312 C 9.035156 3 9.042969 2.804688 9.035156 2.609375 C 9.023438 2.464844 8.96875 2.417969 8.820312 2.410156 Z M 9.777344 2.453125 C 9.644531 2.460938 9.589844 2.511719 9.582031 2.648438 L 9.582031 4.671875 C 9.582031 5.320312 9.582031 5.96875 9.582031 6.605469 C 9.582031 6.644531 9.582031 6.691406 9.582031 6.738281 C 9.589844 6.820312 9.65625 6.878906 9.738281 6.886719 C 9.765625 6.894531 9.792969 6.894531 9.820312 6.894531 L 10.617188 6.894531 C 10.648438 6.894531 10.675781 6.894531 10.710938 6.886719 C 10.785156 6.878906 10.839844 6.832031 10.84375 6.757812 C 10.851562 6.691406 10.859375 6.628906 10.859375 6.570312 L 10.859375 2.777344 C 10.859375 2.722656 10.859375 2.675781 10.851562 2.628906 C 10.839844 2.492188 10.796875 2.453125 10.667969 2.453125 C 10.371094 2.445312 10.074219 2.445312 9.777344 2.453125 Z M 21.636719 3.242188 C 21.746094 3.25 21.847656 3.269531 21.941406 3.308594 C 22.089844 3.371094 22.183594 3.503906 22.207031 3.667969 C 22.226562 3.761719 22.21875 3.871094 22.183594 3.964844 C 22.117188 4.167969 21.957031 4.253906 21.753906 4.296875 C 21.636719 4.324219 21.511719 4.335938 21.382812 4.324219 C 21.160156 4.324219 20.9375 4.308594 20.714844 4.273438 C 20.625 4.261719 20.625 4.261719 20.640625 4.167969 C 20.652344 4.03125 20.691406 3.902344 20.746094 3.777344 C 20.914062 3.355469 21.273438 3.214844 21.636719 3.242188 Z M 3.082031 3.289062 C 3.164062 3.289062 3.25 3.296875 3.332031 3.316406 C 3.574219 3.351562 3.777344 3.503906 3.871094 3.722656 C 3.960938 3.910156 4.015625 4.105469 4.019531 4.308594 C 4.054688 4.671875 4.054688 5.039062 3.953125 5.382812 C 3.914062 5.558594 3.824219 5.71875 3.691406 5.839844 C 3.542969 5.960938 3.359375 6.035156 3.171875 6.035156 C 2.878906 6.058594 2.589844 5.996094 2.332031 5.855469 C 2.273438 5.828125 2.230469 5.765625 2.238281 5.699219 L 2.238281 4.667969 C 2.238281 4.324219 2.246094 3.984375 2.238281 3.640625 C 2.230469 3.558594 2.277344 3.492188 2.351562 3.464844 C 2.589844 3.351562 2.824219 3.289062 3.082031 3.289062 Z M 6.59375 8.832031 C 6.550781 8.824219 6.511719 8.832031 6.464844 8.839844 C 6.105469 8.863281 5.84375 9.113281 5.808594 9.453125 C 5.777344 9.878906 5.972656 10.167969 6.347656 10.261719 C 6.417969 10.269531 6.484375 10.28125 6.550781 10.28125 C 7.042969 10.296875 7.414062 10.019531 7.367188 9.457031 C 7.355469 9.203125 7.191406 8.980469 6.957031 8.890625 C 6.835938 8.84375 6.714844 8.816406 6.59375 8.832031 Z M 11.707031 8.871094 C 11.472656 8.871094 11.433594 8.914062 11.433594 9.148438 L 11.433594 11.125 C 11.433594 11.171875 11.445312 11.214844 11.417969 11.253906 C 11.363281 11.253906 11.332031 11.214844 11.289062 11.1875 C 10.65625 10.816406 9.988281 10.75 9.3125 11.058594 C 8.839844 11.28125 8.550781 11.679688 8.359375 12.152344 C 8.179688 12.605469 8.132812 13.078125 8.144531 13.5625 C 8.144531 14.015625 8.246094 14.460938 8.449219 14.867188 C 8.683594 15.3125 9.023438 15.65625 9.507812 15.796875 C 10.175781 16.007812 10.796875 15.90625 11.371094 15.480469 C 11.410156 15.460938 11.433594 15.414062 11.492188 15.40625 C 11.519531 15.472656 11.546875 15.546875 11.558594 15.613281 C 11.582031 15.714844 11.667969 15.785156 11.769531 15.785156 L 11.917969 15.785156 C 12.140625 15.785156 12.351562 15.789062 12.566406 15.785156 C 12.742188 15.785156 12.789062 15.730469 12.796875 15.546875 L 12.796875 9.109375 C 12.789062 8.914062 12.742188 8.871094 12.558594 8.871094 Z M 21.050781 10.871094 C 20.855469 10.863281 20.660156 10.871094 20.464844 10.902344 C 19.640625 11.023438 19.046875 11.464844 18.757812 12.246094 C 18.480469 12.996094 18.484375 13.8125 18.761719 14.5625 C 19.003906 15.238281 19.5 15.667969 20.199219 15.84375 C 20.570312 15.9375 20.964844 15.960938 21.347656 15.90625 C 22.628906 15.75 23.164062 14.777344 23.25 13.933594 C 23.25 13.933594 23.285156 13.683594 23.285156 13.5625 L 23.277344 13.058594 C 23.277344 12.984375 23.257812 12.839844 23.257812 12.835938 C 23.246094 12.71875 23.222656 12.605469 23.191406 12.488281 C 22.96875 11.6875 22.453125 11.152344 21.632812 10.945312 C 21.4375 10.898438 21.246094 10.875 21.050781 10.871094 Z M 15.976562 10.921875 C 14.949219 10.945312 14.164062 11.464844 13.847656 12.488281 C 13.632812 13.171875 13.660156 13.859375 13.867188 14.542969 C 14.085938 15.238281 14.578125 15.664062 15.273438 15.851562 C 15.570312 15.925781 15.878906 15.953125 16.191406 15.945312 C 16.636719 15.9375 17.082031 15.851562 17.5 15.6875 C 17.683594 15.621094 17.722656 15.5625 17.722656 15.371094 L 17.722656 14.933594 C 17.714844 14.757812 17.640625 14.695312 17.46875 14.738281 C 17.332031 14.769531 17.203125 14.804688 17.070312 14.839844 C 16.65625 14.933594 16.230469 14.953125 15.8125 14.878906 C 15.402344 14.796875 15.117188 14.5625 15.007812 14.144531 C 14.976562 14.023438 14.949219 13.902344 14.941406 13.773438 C 14.96875 13.773438 15.003906 13.773438 15.023438 13.785156 C 15.429688 13.851562 15.839844 13.886719 16.25 13.851562 C 16.601562 13.832031 16.960938 13.765625 17.277344 13.597656 C 17.601562 13.433594 17.824219 13.132812 17.890625 12.78125 C 17.9375 12.558594 17.9375 12.328125 17.890625 12.105469 C 17.765625 11.558594 17.414062 11.214844 16.886719 11.039062 C 16.597656 10.945312 16.277344 10.910156 15.976562 10.921875 Z M 0.6875 11.019531 C 0.566406 11.019531 0.515625 11.078125 0.539062 11.199219 C 0.558594 11.28125 0.585938 11.371094 0.617188 11.445312 C 0.984375 12.410156 1.359375 13.367188 1.726562 14.324219 C 1.875 14.730469 2.035156 15.140625 2.191406 15.546875 C 2.257812 15.714844 2.367188 15.796875 2.554688 15.789062 C 2.824219 15.789062 3.097656 15.789062 3.367188 15.789062 C 3.5 15.804688 3.621094 15.722656 3.667969 15.59375 C 3.683594 15.554688 3.703125 15.519531 3.710938 15.480469 C 4.121094 14.421875 4.535156 13.347656 4.945312 12.289062 L 5.308594 11.316406 C 5.390625 11.09375 5.335938 11.023438 5.109375 11.023438 L 4.175781 11.023438 C 4.066406 11.023438 3.960938 11.09375 3.933594 11.199219 L 3.890625 11.316406 C 3.617188 12.261719 3.332031 13.199219 3.046875 14.148438 C 3.015625 14.273438 2.980469 14.386719 2.941406 14.507812 C 2.925781 14.507812 2.921875 14.507812 2.925781 14.5 C 2.675781 13.652344 2.433594 12.800781 2.183594 11.949219 C 2.109375 11.714844 2.042969 11.476562 1.976562 11.246094 C 1.933594 11.121094 1.875 11.019531 1.726562 11.019531 C 1.382812 11.019531 1.03125 11.011719 0.6875 11.019531 Z M 6.148438 11.023438 C 5.957031 11.023438 5.902344 11.078125 5.902344 11.269531 L 5.902344 15.5 C 5.902344 15.535156 5.902344 15.582031 5.910156 15.613281 C 5.917969 15.738281 5.976562 15.789062 6.101562 15.789062 C 6.429688 15.796875 6.753906 15.796875 7.085938 15.789062 C 7.207031 15.789062 7.261719 15.730469 7.273438 15.609375 L 7.273438 11.269531 C 7.273438 11.078125 7.21875 11.023438 7.023438 11.023438 Z M 15.851562 11.863281 C 15.933594 11.847656 16.023438 11.855469 16.109375 11.863281 C 16.136719 11.863281 16.164062 11.875 16.191406 11.875 C 16.625 11.941406 16.722656 12.28125 16.648438 12.609375 C 16.582031 12.859375 16.386719 12.949219 16.15625 12.996094 C 16.035156 13.015625 15.90625 13.03125 15.777344 13.023438 C 15.53125 13.015625 15.28125 12.996094 15.035156 12.960938 C 14.984375 12.957031 14.960938 12.933594 14.96875 12.875 C 15.015625 12.636719 15.070312 12.410156 15.21875 12.214844 C 15.386719 11.984375 15.605469 11.882812 15.851562 11.863281 Z M 10.394531 11.910156 C 10.71875 11.882812 11.039062 11.941406 11.332031 12.078125 C 11.40625 12.097656 11.445312 12.171875 11.4375 12.253906 C 11.433594 12.632812 11.4375 13.003906 11.4375 13.375 L 11.4375 14.488281 C 11.453125 14.554688 11.40625 14.628906 11.335938 14.65625 C 11.046875 14.820312 10.710938 14.886719 10.378906 14.839844 C 10.09375 14.8125 9.851562 14.636719 9.722656 14.386719 C 9.628906 14.191406 9.570312 13.980469 9.554688 13.765625 C 9.5 13.378906 9.535156 12.988281 9.625 12.617188 C 9.65625 12.515625 9.691406 12.414062 9.75 12.320312 C 9.878906 12.085938 10.121094 11.929688 10.394531 11.910156 Z M 20.808594 11.941406 C 20.921875 11.929688 21.039062 11.929688 21.152344 11.949219 C 21.402344 12.003906 21.605469 12.160156 21.710938 12.386719 C 21.8125 12.597656 21.875 12.839844 21.886719 13.078125 C 21.894531 13.191406 21.902344 13.300781 21.894531 13.40625 C 21.914062 13.675781 21.882812 13.941406 21.808594 14.191406 C 21.773438 14.320312 21.71875 14.433594 21.636719 14.546875 C 21.503906 14.738281 21.289062 14.859375 21.058594 14.878906 C 20.941406 14.886719 20.828125 14.886719 20.707031 14.867188 C 20.449219 14.8125 20.242188 14.644531 20.132812 14.40625 C 20.046875 14.21875 19.984375 14.007812 19.972656 13.800781 C 19.9375 13.441406 19.929688 13.078125 20.019531 12.726562 C 20.050781 12.585938 20.113281 12.441406 20.179688 12.320312 C 20.316406 12.097656 20.550781 11.957031 20.808594 11.941406 Z M 20.808594 17.726562 C 20.457031 17.742188 20.121094 17.773438 19.78125 17.84375 C 19.34375 17.949219 18.929688 18.105469 18.558594 18.367188 C 18.507812 18.402344 18.453125 18.457031 18.410156 18.511719 C 18.378906 18.566406 18.363281 18.625 18.398438 18.6875 C 18.433594 18.746094 18.492188 18.753906 18.558594 18.746094 L 19.160156 18.671875 C 19.605469 18.613281 20.066406 18.589844 20.523438 18.613281 C 20.6875 18.625 20.847656 18.652344 20.996094 18.699219 C 21.164062 18.753906 21.273438 18.894531 21.28125 19.0625 C 21.289062 19.164062 21.28125 19.261719 21.273438 19.359375 C 21.238281 19.636719 21.1875 19.90625 21.105469 20.164062 C 20.96875 20.652344 20.800781 21.109375 20.625 21.574219 C 20.605469 21.628906 20.597656 21.675781 20.59375 21.722656 C 20.597656 21.816406 20.660156 21.871094 20.753906 21.84375 C 20.816406 21.824219 20.867188 21.792969 20.910156 21.742188 C 21.132812 21.542969 21.328125 21.296875 21.484375 21.035156 C 21.921875 20.304688 22.183594 19.488281 22.253906 18.640625 C 22.257812 18.496094 22.253906 18.347656 22.238281 18.214844 C 22.21875 18.09375 22.144531 17.984375 22.035156 17.9375 C 21.949219 17.898438 21.867188 17.871094 21.773438 17.84375 C 21.457031 17.761719 21.132812 17.742188 20.808594 17.726562 Z M 1.785156 17.984375 C 1.753906 17.992188 1.71875 18.011719 1.699219 18.039062 C 1.644531 18.09375 1.632812 18.167969 1.664062 18.234375 C 1.679688 18.289062 1.71875 18.335938 1.753906 18.367188 C 1.929688 18.53125 2.089844 18.6875 2.265625 18.839844 C 4.128906 20.496094 6.269531 21.628906 8.707031 22.195312 C 9.414062 22.359375 10.128906 22.472656 10.859375 22.527344 C 11.128906 22.546875 11.40625 22.554688 11.675781 22.566406 C 11.878906 22.566406 12.074219 22.566406 12.277344 22.566406 C 13.058594 22.539062 13.847656 22.453125 14.625 22.316406 C 15.976562 22.0625 17.285156 21.621094 18.511719 21 C 19.160156 20.671875 19.773438 20.277344 20.347656 19.832031 C 20.417969 19.785156 20.46875 19.71875 20.511719 19.644531 C 20.523438 19.625 20.53125 19.605469 20.539062 19.585938 C 20.578125 19.414062 20.476562 19.246094 20.316406 19.207031 C 20.214844 19.1875 20.105469 19.199219 20.019531 19.246094 C 19.417969 19.523438 18.804688 19.765625 18.167969 19.976562 C 16.972656 20.375 15.738281 20.652344 14.484375 20.8125 C 13.949219 20.878906 13.410156 20.933594 12.871094 20.949219 C 11.871094 20.980469 10.859375 20.933594 9.867188 20.8125 C 9.171875 20.726562 8.476562 20.597656 7.792969 20.441406 C 5.753906 19.960938 3.804688 19.160156 2.023438 18.058594 C 1.980469 18.03125 1.933594 18.011719 1.894531 17.992188 C 1.859375 17.976562 1.820312 17.976562 1.785156 17.984375 Z M 1.785156 17.984375 ";
    svg["PIA"] = "M 24 12 C 24 18.628906 18.628906 24 12 24 C 5.371094 24 0 18.628906 0 12 C 0 5.371094 5.371094 0 12 0 C 18.628906 0 24 5.371094 24 12 Z M 24 12 M 11.40625 8.695312 C 11.40625 8.332031 10.96875 8.152344 10.710938 8.40625 C 10.457031 8.664062 10.636719 9.101562 11 9.101562 C 11.222656 9.101562 11.40625 8.917969 11.402344 8.695312 M 13.003906 8.289062 C 12.640625 8.289062 12.457031 8.726562 12.714844 8.984375 C 12.972656 9.238281 13.40625 9.058594 13.40625 8.695312 C 13.40625 8.472656 13.226562 8.289062 13.003906 8.289062 M 12.566406 9.363281 C 12.242188 9.652344 11.757812 9.652344 11.4375 9.363281 C 11.332031 9.277344 11.199219 9.425781 11.292969 9.519531 C 11.691406 9.894531 12.3125 9.894531 12.707031 9.519531 C 12.75 9.480469 12.75 9.414062 12.710938 9.375 C 12.671875 9.332031 12.609375 9.328125 12.566406 9.363281 M 16.304688 10.933594 L 16.304688 10.929688 C 16.304688 10.550781 16.054688 10.21875 15.691406 10.117188 L 15.691406 9.390625 C 15.691406 7.414062 14.089844 5.8125 12.113281 5.8125 L 11.976562 5.8125 C 10 5.8125 8.394531 7.414062 8.394531 9.390625 L 8.394531 10.097656 C 7.996094 10.171875 7.707031 10.515625 7.703125 10.921875 C 7.59375 11.105469 7.535156 11.316406 7.535156 11.53125 L 7.535156 16.121094 C 7.535156 16.667969 7.902344 17.144531 8.429688 17.289062 C 8.570312 17.605469 8.886719 17.8125 9.234375 17.8125 L 10.238281 17.8125 C 10.570312 17.8125 10.875 17.625 11.027344 17.328125 L 12.871094 17.328125 C 13.019531 17.625 13.324219 17.8125 13.65625 17.8125 L 14.660156 17.8125 C 15 17.8125 15.308594 17.617188 15.457031 17.3125 C 16.039062 17.214844 16.464844 16.710938 16.464844 16.121094 L 16.464844 11.53125 C 16.464844 11.324219 16.410156 11.117188 16.304688 10.933594 Z M 13.113281 15.382812 C 13.136719 15.539062 13.089844 15.695312 12.988281 15.816406 C 12.886719 15.933594 12.738281 16.003906 12.578125 16.003906 L 11.421875 16.003906 C 11.265625 16.003906 11.113281 15.933594 11.011719 15.816406 C 10.910156 15.695312 10.863281 15.539062 10.886719 15.382812 L 11.109375 13.871094 C 10.691406 13.515625 10.527344 12.949219 10.6875 12.421875 C 10.847656 11.898438 11.300781 11.519531 11.84375 11.460938 C 12.445312 11.390625 13.019531 11.722656 13.261719 12.277344 C 13.5 12.832031 13.351562 13.480469 12.890625 13.871094 Z M 13.246094 10.324219 L 10.761719 10.324219 C 10.605469 10.167969 10.390625 10.082031 10.171875 10.082031 L 9.75 10.082031 L 9.75 9.332031 C 9.75 8.09375 10.753906 7.089844 11.992188 7.089844 L 12.101562 7.089844 C 13.339844 7.089844 14.339844 8.09375 14.339844 9.332031 L 14.339844 10.082031 L 13.835938 10.082031 C 13.613281 10.082031 13.402344 10.167969 13.246094 10.324219 Z M 12.730469 15.457031 C 12.742188 15.496094 12.734375 15.535156 12.707031 15.570312 C 12.683594 15.601562 12.644531 15.617188 12.605469 15.617188 L 11.402344 15.617188 C 11.363281 15.617188 11.324219 15.601562 11.300781 15.566406 C 11.273438 15.535156 11.265625 15.496094 11.277344 15.457031 L 11.507812 13.785156 C 11.507812 13.761719 11.503906 13.738281 11.496094 13.714844 C 11.476562 13.683594 11.453125 13.660156 11.421875 13.636719 C 11.417969 13.632812 11.417969 13.632812 11.414062 13.628906 C 11.070312 13.375 10.925781 12.933594 11.058594 12.527344 C 11.191406 12.121094 11.566406 11.84375 11.992188 11.839844 C 12.421875 11.839844 12.800781 12.109375 12.9375 12.515625 C 13.074219 12.917969 12.9375 13.367188 12.59375 13.621094 C 12.59375 13.625 12.59375 13.628906 12.582031 13.636719 C 12.550781 13.660156 12.527344 13.683594 12.507812 13.714844 C 12.503906 13.722656 12.5 13.734375 12.5 13.746094 Z M 12.730469 15.457031 ";
    svg["SURFSHARK"] = "M 24 12 C 24 18.628906 18.628906 24 12 24 C 5.371094 24 0 18.628906 0 12 C 0 5.371094 5.371094 0 12 0 C 18.628906 0 24 5.371094 24 12 Z M 24 12M 16.546875 8.351562 L 16.546875 8.34375 C 16.539062 8.242188 16.53125 8.125 16.527344 8 C 16.511719 7.765625 16.496094 7.515625 16.480469 7.320312 C 16.457031 7.1875 16.425781 7.070312 16.386719 6.960938 C 16.148438 6.429688 15.683594 6.175781 15.191406 6.054688 C 14.964844 6.015625 14.691406 6.007812 14.398438 6 L 11.570312 6 C 9.75 6.097656 8.984375 7.152344 8.78125 7.714844 C 7.984375 10.097656 7.484375 13.1875 7.128906 15.414062 C 7.121094 15.460938 7.113281 15.5 7.105469 15.542969 L 6.988281 16.601562 C 6.980469 16.769531 7 16.953125 7.042969 17.128906 C 7.265625 17.773438 7.941406 18.320312 9.425781 17.777344 C 10.832031 17.167969 12.488281 16.410156 14.199219 15.558594 C 15.175781 14.996094 16.605469 13.703125 16.679688 12.066406 C 16.667969 10.859375 16.628906 9.589844 16.546875 8.351562 Z M 14.289062 9.246094 C 14.289062 9.386719 14.175781 9.5 14.035156 9.5 C 13.183594 9.5 12.496094 10.191406 12.496094 11.039062 L 12.496094 11.980469 C 12.496094 13.5625 11.214844 14.84375 9.636719 14.84375 C 9.496094 14.84375 9.386719 14.730469 9.386719 14.59375 L 9.386719 13.8125 C 9.386719 13.671875 9.5 13.558594 9.640625 13.558594 C 10.492188 13.558594 11.179688 12.871094 11.179688 12.019531 L 11.179688 11.078125 C 11.179688 9.5 12.460938 8.21875 14.042969 8.21875 C 14.179688 8.21875 14.289062 8.328125 14.289062 8.464844 Z M 14.289062 9.246094 ";
    svg["VUDU"] = "M 6.0971 6.9926 L 5.0469 6.9926 C 4.8725 6.9963 4.7129 7.1039 4.6535 7.2709 C 4.6535 7.282 4.6535 7.2895 4.6535 7.3006 C 4.2602 8.4324 3.915 9.4047 3.518 10.5365 C 3.4141 10.8371 3.3102 11.134 3.1914 11.4346 C 3.184 11.4605 3.1654 11.4828 3.1395 11.4939 C 3.0949 11.4939 3.0949 11.4605 3.0838 11.4309 C 2.8389 10.7221 2.5939 10.017 2.3416 9.3119 L 1.6217 7.2561 C 1.6254 7.2486 1.6254 7.2412 1.6217 7.2338 C 1.5475 7.0854 1.399 6.9926 1.2357 6.9926 L 0.1707 6.9926 C 0.0854 6.9852 0.0111 7.0482 0 7.1336 C -0.0037 7.1633 0.0037 7.193 0.0148 7.2189 C 0.6271 8.9297 1.2357 10.6404 1.8443 12.3475 L 1.9705 12.7 C 2.1486 13.2195 2.6348 13.5646 3.1803 13.5609 L 3.3213 13.5609 C 3.5551 13.5498 3.7889 13.5201 4.0227 13.4682 L 4.4531 12.2287 L 6.2566 7.2301 C 6.2641 7.2078 6.2678 7.1893 6.2752 7.1707 C 6.2863 7.0854 6.227 7.0037 6.1416 6.9926 C 6.1268 6.9926 6.1156 6.9926 6.1008 6.9926 M 11.9418 7.4416 C 11.9418 7.2152 11.7674 7.0297 11.5447 7.0111 L 10.4574 7.0111 L 10.4574 7.6123 C 10.4574 8.7441 10.4574 9.7498 10.4574 10.8854 C 10.4611 11.0004 10.45 11.1154 10.424 11.2268 C 10.3424 11.635 10.0455 11.9578 9.6484 12.0729 C 9.0436 12.2695 8.3904 11.9393 8.1937 11.3307 C 8.1566 11.2119 8.1381 11.0895 8.1381 10.967 C 8.1381 10.184 8.1381 8.5104 8.1381 7.6049 L 8.1381 7 C 8.1381 7 7.0545 7 7.0471 7 C 6.8244 7.0148 6.65 7.2041 6.65 7.4268 L 6.65 7.6457 C 6.65 8.8221 6.65 9.8314 6.65 11.0301 C 6.6574 12.4773 7.8301 13.6426 9.2699 13.6314 C 9.4406 13.6314 9.6076 13.6129 9.7746 13.5795 C 10.4203 13.4719 11.0029 13.1193 11.4037 12.5998 C 11.7451 12.1693 11.9344 11.6387 11.9418 11.0857 C 11.9418 10.4586 11.9418 9.8314 11.9418 9.2006 Z M 11.9418 7.4416 M 23.75 7.4416 C 23.75 7.2189 23.5793 7.0297 23.3566 7.0111 L 22.2656 7.0111 L 22.2656 7.6123 C 22.2656 8.7441 22.2656 9.7498 22.2656 10.8854 C 22.2656 11.0004 22.2545 11.1154 22.2285 11.2268 C 22.1506 11.6312 21.85 11.9578 21.4529 12.0729 C 20.8518 12.2732 20.2023 11.943 20.002 11.3381 C 19.9611 11.2193 19.9426 11.0932 19.9426 10.967 C 19.9426 10.184 19.9426 8.5104 19.9426 7.6049 L 19.9426 7 C 19.9426 7 18.8627 7 18.8479 7 C 18.6289 7.0186 18.4582 7.2041 18.4545 7.4268 L 18.4545 7.6457 C 18.4545 8.8221 18.4545 9.8314 18.4545 11.0301 C 18.4656 12.4773 19.6383 13.6426 21.0744 13.6314 C 21.2451 13.6314 21.4158 13.6129 21.5828 13.5795 C 22.2285 13.4719 22.8074 13.1193 23.2082 12.5998 C 23.5533 12.1693 23.7426 11.6387 23.7463 11.0857 C 23.7463 10.4586 23.7463 9.8314 23.7463 9.2006 L 23.7463 7.4416 Z M 23.75 7.4416 M 16.1352 11.5385 C 15.8457 11.8873 15.4338 12.1062 14.9885 12.1471 C 14.8994 12.1508 14.8104 12.1508 14.7213 12.1471 L 13.9531 12.1471 C 13.8604 12.1471 13.8566 12.1471 13.8566 12.0506 L 13.8566 8.4584 C 13.8566 8.373 13.8566 8.373 13.942 8.373 C 14.2686 8.373 14.5691 8.373 14.8809 8.373 C 15.4375 8.3916 15.9496 8.6811 16.2539 9.1486 C 16.4506 9.4381 16.5656 9.7795 16.5805 10.132 C 16.6213 10.6404 16.4617 11.1451 16.1352 11.5385 M 16.5693 7.4898 C 16.1018 7.1893 15.56 7.0223 15.0033 7.0074 C 14.7436 7.0074 14.4875 7.0074 14.224 7.0074 L 12.8473 7.0074 C 12.6098 7.0074 12.4205 7.2004 12.4205 7.4379 L 12.4205 13.1156 C 12.4205 13.3531 12.6098 13.5461 12.8473 13.5461 L 14.9143 13.5461 C 15.0701 13.5461 15.226 13.5313 15.3818 13.5016 C 16.0053 13.4088 16.5842 13.1305 17.0443 12.7037 C 17.9016 11.9541 18.2912 10.8 18.0686 9.6793 C 17.9127 8.7701 17.3672 7.976 16.5805 7.5047 M 19.0334 14.4293 C 18.4656 14.4553 18.024 14.9451 18.0463 15.5166 C 18.0686 16.0881 18.5473 16.5297 19.115 16.5074 C 19.6717 16.4852 20.1096 16.025 20.1021 15.4646 C 20.1133 14.9117 19.6791 14.4479 19.1262 14.4293 L 19.0334 14.4293 M 19.616 15.5092 C 19.6049 15.6354 19.5492 15.7578 19.4639 15.8506 L 19.4342 15.8803 C 19.1967 16.1029 18.8256 16.0918 18.6029 15.8543 C 18.3803 15.6205 18.3914 15.2457 18.6289 15.023 C 18.8627 14.8004 19.2338 14.8115 19.4564 15.049 C 19.4564 15.049 19.4564 15.049 19.4602 15.049 C 19.5529 15.1492 19.6086 15.2791 19.616 15.4164 Z M 19.616 15.5092 M 16.818 15.3199 L 16.818 15.7727 L 17.2633 15.7727 L 17.2633 15.9285 C 17.1557 16.0102 17.0295 16.051 16.8959 16.051 C 16.6027 16.0621 16.3541 15.832 16.343 15.5352 C 16.3393 15.5129 16.3393 15.4906 16.343 15.4721 C 16.3207 15.1752 16.5396 14.9154 16.8365 14.8932 L 16.8959 14.8932 C 17.0703 14.8969 17.2299 14.9934 17.3152 15.1455 L 17.7457 14.9229 C 17.575 14.6111 17.2484 14.4256 16.8959 14.4367 C 16.3281 14.4219 15.8568 14.8746 15.842 15.4424 C 15.8271 15.9953 16.2428 16.4629 16.792 16.5037 L 16.8959 16.5037 C 17.1965 16.5037 17.4859 16.3887 17.7012 16.1734 C 17.7346 16.14 17.7568 16.0881 17.7605 16.0361 L 17.7605 15.3199 Z M 16.818 15.3199 M 15.3187 14.485 L 15.2779 14.485 C 15.1666 14.4924 15.0812 14.5852 15.0775 14.6965 L 15.0775 15.5797 L 14.276 14.485 L 13.7416 14.485 L 13.7416 16.4777 L 14.2537 16.4777 L 14.2537 15.3311 L 15.0924 16.4777 L 15.5822 16.4777 L 15.5822 14.485 Z M 15.3187 14.485 M 12.8139 14.485 L 12.1607 14.485 L 11.4111 16.4814 L 11.9937 16.4814 L 12.0939 16.192 L 12.8732 16.192 L 12.9252 16.3404 C 12.9586 16.4221 13.0328 16.474 13.1182 16.4777 L 13.5561 16.4777 Z M 12.2387 15.743 L 12.491 14.9896 L 12.7396 15.743 Z M 12.2387 15.743 M 10.3943 14.485 L 9.5557 14.485 L 9.5557 16.2699 C 9.5631 16.385 9.6559 16.4777 9.7709 16.4814 L 10.3943 16.4814 C 10.9398 16.5111 11.4111 16.0918 11.4408 15.5389 C 11.4742 14.9896 11.0549 14.5184 10.5057 14.485 C 10.4686 14.485 10.4314 14.485 10.3943 14.485 M 10.3943 16.0361 L 10.0678 16.0361 L 10.0678 14.9229 L 10.3943 14.9229 C 10.6764 14.908 10.9139 15.1232 10.9324 15.4053 L 10.9324 15.4646 C 10.9324 15.7615 10.6912 16.0361 10.398 16.0361 C 10.3943 16.0361 10.398 16.0324 10.398 16.0324 L 10.4018 16.0287 M 8.9063 14.485 C 8.7949 14.4887 8.7021 14.5777 8.6984 14.6891 L 8.6984 15.5797 L 7.8783 14.485 L 7.3439 14.485 L 7.3439 16.4777 L 7.8523 16.4777 L 7.8523 15.3311 L 8.6947 16.4852 L 9.1883 16.4852 L 9.1883 14.485 Z M 8.9063 14.485 M 6.4311 14.485 L 5.7779 14.485 L 5.032 16.4777 L 5.6258 16.4777 L 5.726 16.1883 L 6.5127 16.1883 L 6.5646 16.3404 C 6.598 16.4184 6.6723 16.4703 6.7576 16.4777 L 7.1918 16.4777 Z M 5.8559 15.743 L 6.1119 14.9896 L 6.3605 15.743 Z M 5.8559 15.743 M 5.2213 14.908 L 5.2213 14.459 L 3.6961 14.459 L 3.6961 16.448 L 4.2342 16.448 L 4.2342 15.7578 L 4.7686 15.7578 C 4.865 15.7467 4.9355 15.6687 4.943 15.5723 L 4.943 15.3051 L 4.2416 15.3051 L 4.2416 14.908 Z M 5.2213 14.908 M 0.3971 15.3941 L 3.2471 15.3941 L 3.2471 15.55 L 0.3971 15.55 Z M 0.3971 15.3941 M 20.5549 15.3941 L 23.4049 15.3941 L 23.4049 15.55 L 20.5549 15.55 Z M 20.5549 15.3941";
})(svg || (exports.svg = svg = {}));


/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./enums */ "./src/models/enums/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./interfaces */ "./src/models/interfaces/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./defaultKeys */ "./src/models/defaultKeys.ts"), exports);
__exportStar(__webpack_require__(/*! ./defaultSources */ "./src/models/defaultSources.ts"), exports);


/***/ }),

/***/ "./src/models/interfaces/IConfig.ts":
/*!******************************************!*\
  !*** ./src/models/interfaces/IConfig.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/ICustomAction.ts":
/*!************************************************!*\
  !*** ./src/models/interfaces/ICustomAction.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/IKey.ts":
/*!***************************************!*\
  !*** ./src/models/interfaces/IKey.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/IServiceData.ts":
/*!***********************************************!*\
  !*** ./src/models/interfaces/IServiceData.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/ISource.ts":
/*!******************************************!*\
  !*** ./src/models/interfaces/ISource.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/index.ts":
/*!****************************************!*\
  !*** ./src/models/interfaces/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./IConfig */ "./src/models/interfaces/IConfig.ts"), exports);
__exportStar(__webpack_require__(/*! ./ICustomAction */ "./src/models/interfaces/ICustomAction.ts"), exports);
__exportStar(__webpack_require__(/*! ./IKey */ "./src/models/interfaces/IKey.ts"), exports);
__exportStar(__webpack_require__(/*! ./IServiceData */ "./src/models/interfaces/IServiceData.ts"), exports);
__exportStar(__webpack_require__(/*! ./ISource */ "./src/models/interfaces/ISource.ts"), exports);


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* binding */ CSSResult),
/* harmony export */   adoptStyles: () => (/* binding */ adoptStyles),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   getCompatibleStyle: () => (/* binding */ getCompatibleStyle),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* binding */ unsafeCSS)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = global.ShadowRoot &&
    (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = new WeakMap();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */
class CSSResult {
    constructor(cssText, strings, safeToken) {
        // This property needs to remain unminified.
        this['_$cssResult$'] = true;
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
        this._strings = strings;
    }
    // This is a getter so that it's lazy. In practice, this means stylesheets
    // are not created until the first element instance is made.
    get styleSheet() {
        // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
        // constructable.
        let styleSheet = this._styleSheet;
        const strings = this._strings;
        if (supportsAdoptingStyleSheets && styleSheet === undefined) {
            const cacheable = strings !== undefined && strings.length === 1;
            if (cacheable) {
                styleSheet = cssTagCache.get(strings);
            }
            if (styleSheet === undefined) {
                (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
                if (cacheable) {
                    cssTagCache.set(strings, styleSheet);
                }
            }
        }
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const textFromCSSResult = (value) => {
    // This property needs to remain unminified.
    if (value['_$cssResult$'] === true) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ` +
            `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` +
            `to ensure page security.`);
    }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */
const css = (strings, ...values) => {
    const cssText = strings.length === 1
        ? strings[0]
        : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, strings, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
const adoptStyles = (renderRoot, styles) => {
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    }
    else {
        styles.forEach((s) => {
            const style = document.createElement('style');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nonce = global['litNonce'];
            if (nonce !== undefined) {
                style.setAttribute('nonce', nonce);
            }
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        });
    }
};
const cssResultFromStyleSheet = (sheet) => {
    let cssText = '';
    for (const rule of sheet.cssRules) {
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets ||
    (NODE_MODE && global.CSSStyleSheet === undefined)
    ? (s) => s
    : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/base.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/base.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decorateProperty: () => (/* binding */ decorateProperty),
/* harmony export */   legacyPrototypeMethod: () => (/* binding */ legacyPrototypeMethod),
/* harmony export */   standardPrototypeMethod: () => (/* binding */ standardPrototypeMethod)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyPrototypeMethod = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardPrototypeMethod = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
/**
 * Helper for decorating a property that is compatible with both TypeScript
 * and Babel decorators. The optional `finisher` can be used to perform work on
 * the class. The optional `descriptor` should return a PropertyDescriptor
 * to install for the given property.
 *
 * @param finisher {function} Optional finisher method; receives the element
 * constructor and property key as arguments and has no return value.
 * @param descriptor {function} Optional descriptor method; receives the
 * property key as an argument and returns a property descriptor to define for
 * the given property.
 * @returns {ClassElement|void}
 */
const decorateProperty = ({ finisher, descriptor, }) => (protoOrDescriptor, name
// Note TypeScript requires the return type to be `void|any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
    var _a;
    // TypeScript / Babel legacy mode
    if (name !== undefined) {
        const ctor = protoOrDescriptor
            .constructor;
        if (descriptor !== undefined) {
            Object.defineProperty(protoOrDescriptor, name, descriptor(name));
        }
        finisher === null || finisher === void 0 ? void 0 : finisher(ctor, name);
        // Babel standard mode
    }
    else {
        // Note, the @property decorator saves `key` as `originalKey`
        // so try to use it here.
        const key = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (_a = protoOrDescriptor.originalKey) !== null && _a !== void 0 ? _a : protoOrDescriptor.key;
        const info = descriptor != undefined
            ? {
                kind: 'method',
                placement: 'prototype',
                key,
                descriptor: descriptor(protoOrDescriptor.key),
            }
            : { ...protoOrDescriptor, key };
        if (finisher != undefined) {
            info.finisher = function (ctor) {
                finisher(ctor, key);
            };
        }
        return info;
    }
};
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/custom-element.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* binding */ customElement)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyCustomElement = (tagName, clazz) => {
    customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            customElements.define(tagName, clazz);
        },
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
const customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === 'function'
    ? legacyCustomElement(tagName, classOrDescriptor)
    : standardCustomElement(tagName, classOrDescriptor);
//# sourceMappingURL=custom-element.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/event-options.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/event-options.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventOptions: () => (/* binding */ eventOptions)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */
function eventOptions(options) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        finisher: (ctor, name) => {
            Object.assign(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ctor.prototype[name], options);
        },
    });
}
//# sourceMappingURL=event-options.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/property.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   property: () => (/* binding */ property)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' &&
        element.descriptor &&
        !('value' in element.descriptor)) {
        return {
            ...element,
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            },
        };
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // store the original key so subsequent decorators have access to it.
            originalKey: element.key,
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            },
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a reactive property that reflects a
 * corresponding attribute value. When a decorated property is set
 * the element will update and render. A {@linkcode PropertyDeclaration} may
 * optionally be supplied to configure property features.
 *
 * This decorator should only be used for public fields. As public fields,
 * properties should be considered as primarily settable by element users,
 * either via attribute or the property itself.
 *
 * Generally, properties that are changed by the element should be private or
 * protected fields and should use the {@linkcode state} decorator.
 *
 * However, sometimes element code does need to set a public property. This
 * should typically only be done in response to user interaction, and an event
 * should be fired informing the user; for example, a checkbox sets its
 * `checked` property when clicked and fires a `changed` event. Mutating public
 * properties should typically not be done for non-primitive (object or array)
 * properties. In other cases when an element needs to manage state, a private
 * property decorated via the {@linkcode state} decorator should be used. When
 * needed, state properties can be initialized via public properties to
 * facilitate complex interactions.
 *
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (protoOrDescriptor, name) => name !== undefined
        ? legacyProperty(options, protoOrDescriptor, name)
        : standardProperty(options, protoOrDescriptor);
}
//# sourceMappingURL=property.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-all.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-all.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAll: () => (/* binding */ queryAll)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs: NodeListOf<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function queryAll(selector) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a, _b;
                return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector)) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-all.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedElements: () => (/* binding */ queryAssignedElements)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a;
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
/**
 * A tiny module scoped polyfill for HTMLSlotElement.assignedElements.
 */
const slotAssignedElements = ((_a = global.HTMLSlotElement) === null || _a === void 0 ? void 0 : _a.prototype.assignedElements) != null
    ? (slot, opts) => slot.assignedElements(opts)
    : (slot, opts) => slot
        .assignedNodes(opts)
        .filter((node) => node.nodeType === Node.ELEMENT_NODE);
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedElements` of the given `slot`. Provides a declarative
 * way to use
 * [`HTMLSlotElement.assignedElements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements).
 *
 * Can be passed an optional {@linkcode QueryAssignedElementsOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedElements({ slot: 'list' })
 *   listItems!: Array<HTMLElement>;
 *   @queryAssignedElements()
 *   unnamedSlotEls!: Array<HTMLElement>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *       <slot></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note, the type of this property should be annotated as `Array<HTMLElement>`.
 *
 * @category Decorator
 */
function queryAssignedElements(options) {
    const { slot, selector } = options !== null && options !== void 0 ? options : {};
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a;
                const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                const elements = slotEl != null ? slotAssignedElements(slotEl, options) : [];
                if (selector) {
                    return elements.filter((node) => node.matches(selector));
                }
                return elements;
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-assigned-elements.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedNodes: () => (/* binding */ queryAssignedNodes)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */


function queryAssignedNodes(slotOrOptions, flatten, selector) {
    // Normalize the overloaded arguments.
    let slot = slotOrOptions;
    let assignedNodesOptions;
    if (typeof slotOrOptions === 'object') {
        slot = slotOrOptions.slot;
        assignedNodesOptions = slotOrOptions;
    }
    else {
        assignedNodesOptions = { flatten };
    }
    // For backwards compatibility, queryAssignedNodes with a selector behaves
    // exactly like queryAssignedElements with a selector.
    if (selector) {
        return (0,_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__.queryAssignedElements)({
            slot: slot,
            flatten,
            selector,
        });
    }
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a, _b;
                const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                return (_b = slotEl === null || slotEl === void 0 ? void 0 : slotEl.assignedNodes(assignedNodesOptions)) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-assigned-nodes.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-async.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-async.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAsync: () => (/* binding */ queryAsync)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first: Promise<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */
function queryAsync(selector) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            async get() {
                var _a;
                await this.updateComplete;
                return (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-async.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   query: () => (/* binding */ query)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 *     once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first: HTMLDivElement;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (name) => {
            const descriptor = {
                get() {
                    var _a, _b;
                    return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                },
                enumerable: true,
                configurable: true,
            };
            if (cache) {
                const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
                descriptor.get = function () {
                    var _a, _b;
                    if (this[key] === undefined) {
                        this[key] = (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                    }
                    return this[key];
                };
            }
            return descriptor;
        },
    });
}
//# sourceMappingURL=query.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/state.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

/**
 * Declares a private or protected reactive property that still triggers
 * updates to the element when it changes. It does not reflect from the
 * corresponding attribute.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
function state(options) {
    return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__.property)({
        ...options,
        state: true,
    });
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   ReactiveElement: () => (/* binding */ ReactiveElement),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   defaultConverter: () => (/* binding */ defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   notEqual: () => (/* binding */ notEqual),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
var _e;
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */

// In the Node build, this import will be injected by Rollup:
// import {HTMLElement, customElements} from '@lit-labs/ssr-dom-shim';

const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
if (NODE_MODE) {
    (_a = global.customElements) !== null && _a !== void 0 ? _a : (global.customElements = customElements);
}
const DEV_MODE = true;
let requestUpdateThenable;
let issueWarning;
const trustedTypes = global
    .trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
const polyfillSupport = DEV_MODE
    ? global.reactiveElementPolyfillSupportDevMode
    : global.reactiveElementPolyfillSupport;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_b = global.litIssuedWarnings) !== null && _b !== void 0 ? _b : (global.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
    // Issue polyfill support warning.
    if (((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.inUse) && polyfillSupport === undefined) {
        issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` +
            `the \`polyfill-support\` module has not been loaded.`);
    }
    requestUpdateThenable = (name) => ({
        then: (onfulfilled, _onrejected) => {
            issueWarning('request-update-promise', `The \`requestUpdate\` method should no longer return a Promise but ` +
                `does so on \`${name}\`. Use \`updateComplete\` instead.`);
            if (onfulfilled !== undefined) {
                onfulfilled(false);
            }
        },
    });
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                value = value ? emptyStringForBooleanAttribute : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute(value, type) {
        let fromValue = value;
        switch (type) {
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                }
                catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    },
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual,
};
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class ReactiveElement
// In the Node build, this `extends` clause will be substituted with
// `(globalThis.HTMLElement ?? HTMLElement)`.
//
// This way, we will first prefer any global `HTMLElement` polyfill that the
// user has assigned, and then fall back to the `HTMLElement` shim which has
// been imported (see note at the top of this file about how this import is
// generated by Rollup). Note that the `HTMLElement` variable has been
// shadowed by this import, so it no longer refers to the global.
 extends HTMLElement {
    constructor() {
        super();
        this.__instanceProperties = new Map();
        /**
         * True if there is a pending update as a result of calling `requestUpdate()`.
         * Should only be read.
         * @category updates
         */
        this.isUpdatePending = false;
        /**
         * Is set to `true` after the first update. The element code cannot assume
         * that `renderRoot` exists before the element `hasUpdated`.
         * @category updates
         */
        this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */
        this.__reflectingProperty = null;
        this.__initialize();
    }
    /**
     * Adds an initializer function to the class that is called during instance
     * construction.
     *
     * This is useful for code that runs against a `ReactiveElement`
     * subclass, such as a decorator, that needs to do work for each
     * instance, such as setting up a `ReactiveController`.
     *
     * ```ts
     * const myDecorator = (target: typeof ReactiveElement, key: string) => {
     *   target.addInitializer((instance: ReactiveElement) => {
     *     // This is run during construction of the element
     *     new MyController(instance);
     *   });
     * }
     * ```
     *
     * Decorating a field will then cause each instance to run an initializer
     * that adds a controller:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   @myDecorator foo;
     * }
     * ```
     *
     * Initializers are stored per-constructor. Adding an initializer to a
     * subclass does not add it to a superclass. Since initializers are run in
     * constructors, initializers will run in order of the class hierarchy,
     * starting with superclasses and progressing to the instance's class.
     *
     * @nocollapse
     */
    static addInitializer(initializer) {
        var _a;
        this.finalize();
        ((_a = this._initializers) !== null && _a !== void 0 ? _a : (this._initializers = [])).push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.elementProperties.forEach((v, p) => {
            const attr = this.__attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a {@linkcode PropertyDeclaration} for the property with the
     * given options. The property setter calls the property's `hasChanged`
     * property option or uses a strict identity check to determine whether or not
     * to request an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * ```ts
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        var _a;
        // if this is a state property, force the attribute to false.
        if (options.state) {
            // Cast as any since this is readonly.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options.attribute = false;
        }
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure finalization has been kicked off.
        this.finalize();
        this.elementProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                Object.defineProperty(this.prototype, name, descriptor);
                if (DEV_MODE) {
                    // If this class doesn't have its own set, create one and initialize
                    // with the values in the set from the nearest ancestor class, if any.
                    if (!this.hasOwnProperty('__reactivePropertyKeys')) {
                        this.__reactivePropertyKeys = new Set((_a = this.__reactivePropertyKeys) !== null && _a !== void 0 ? _a : []);
                    }
                    this.__reactivePropertyKeys.add(name);
                }
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     * ```ts
     * class MyElement extends LitElement {
     *   static getPropertyDescriptor(name, key, options) {
     *     const defaultDescriptor =
     *         super.getPropertyDescriptor(name, key, options);
     *     const setter = defaultDescriptor.set;
     *     return {
     *       get: defaultDescriptor.get,
     *       set(value) {
     *         setter.call(this, value);
     *         // custom action.
     *       },
     *       configurable: true,
     *       enumerable: true
     *     }
     *   }
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true,
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a `PropertyDeclaration` via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override
     * {@linkcode createProperty}.
     *
     * @nocollapse
     * @final
     * @category properties
     */
    static getPropertyOptions(name) {
        return this.elementProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties, sets up element
     * styling, and ensures any superclasses are also finalized. Returns true if
     * the element was finalized.
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(finalized)) {
            return false;
        }
        this[finalized] = true;
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        superCtor.finalize();
        // Create own set of initializers for this class if any exist on the
        // superclass and copy them down. Note, for a small perf boost, avoid
        // creating initializers unless needed.
        if (superCtor._initializers !== undefined) {
            this._initializers = [...superCtor._initializers];
        }
        this.elementProperties = new Map(superCtor.elementProperties);
        // initialize Map populated in observedAttributes
        this.__attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...Object.getOwnPropertySymbols(props),
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeScript lack of support for symbol in
                // index types
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.createProperty(p, props[p]);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        // DEV mode warnings
        if (DEV_MODE) {
            const warnRemovedOrRenamed = (name, renamed = false) => {
                if (this.prototype.hasOwnProperty(name)) {
                    issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${this.name}. It ` +
                        `has been ${renamed ? 'renamed' : 'removed'} ` +
                        `in this version of LitElement.`);
                }
            };
            warnRemovedOrRenamed('initialize');
            warnRemovedOrRenamed('requestUpdateInternal');
            warnRemovedOrRenamed('_getUpdateComplete', true);
        }
        return true;
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */
    static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // Casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set) {
                elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
            }
        }
        else if (styles !== undefined) {
            elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false
            ? undefined
            : typeof attribute === 'string'
                ? attribute
                : typeof name === 'string'
                    ? name.toLowerCase()
                    : undefined;
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     */
    __initialize() {
        var _a;
        this.__updatePromise = new Promise((res) => (this.enableUpdating = res));
        this._$changedProperties = new Map();
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        (_a = this.constructor._initializers) === null || _a === void 0 ? void 0 : _a.forEach((i) => i(this));
    }
    /**
     * Registers a `ReactiveController` to participate in the element's reactive
     * update cycle. The element automatically calls into any registered
     * controllers during its lifecycle callbacks.
     *
     * If the element is connected when `addController()` is called, the
     * controller's `hostConnected()` callback will be immediately called.
     * @category controllers
     */
    addController(controller) {
        var _a, _b;
        ((_a = this.__controllers) !== null && _a !== void 0 ? _a : (this.__controllers = [])).push(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            (_b = controller.hostConnected) === null || _b === void 0 ? void 0 : _b.call(controller);
        }
    }
    /**
     * Removes a `ReactiveController` from the element.
     * @category controllers
     */
    removeController(controller) {
        var _a;
        // Note, if the indexOf is -1, the >>> will flip the sign which makes the
        // splice do nothing.
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.splice(this.__controllers.indexOf(controller) >>> 0, 1);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    __saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor.elementProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                this.__instanceProperties.set(p, this[p]);
                delete this[p];
            }
        });
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        const renderRoot = (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this.attachShadow(this.constructor.shadowRootOptions);
        (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        // create renderRoot before first update.
        if (this.renderRoot === undefined) {
            this.renderRoot = this.createRenderRoot();
        }
        this.enableUpdating(true);
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostConnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */
    enableUpdating(_requestedUpdate) { }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostDisconnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Synchronizes property values when attributes change.
     *
     * Specifically, when an attribute is set, the corresponding property is set.
     * You should rarely need to implement this callback. If this method is
     * overridden, `super.attributeChangedCallback(name, _old, value)` must be
     * called.
     *
     * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
     * on MDN for more information about the `attributeChangedCallback`.
     * @category attributes
     */
    attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        var _a;
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            const converter = ((_a = options.converter) === null || _a === void 0 ? void 0 : _a.toAttribute) !==
                undefined
                ? options.converter
                : defaultConverter;
            const attrValue = converter.toAttribute(value, options.type);
            if (DEV_MODE &&
                this.constructor.enabledWarnings.indexOf('migration') >= 0 &&
                attrValue === undefined) {
                issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` +
                    `undefined on element ${this.localName}. The attribute will be ` +
                    `removed, but in the previous version of \`ReactiveElement\`, ` +
                    `the attribute would not have changed.`);
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */
    _$attributeToProperty(name, value) {
        var _a;
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            const options = ctor.getPropertyOptions(propName);
            const converter = typeof options.converter === 'function'
                ? { fromAttribute: options.converter }
                : ((_a = options.converter) === null || _a === void 0 ? void 0 : _a.fromAttribute) !== undefined
                    ? options.converter
                    : defaultConverter;
            // mark state reflecting
            this.__reflectingProperty = propName;
            this[propName] = converter.fromAttribute(value, options.type
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            );
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @category updates
     */
    requestUpdate(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            options =
                options ||
                    this.constructor.getPropertyOptions(name);
            const hasChanged = options.hasChanged || notEqual;
            if (hasChanged(this[name], oldValue)) {
                if (!this._$changedProperties.has(name)) {
                    this._$changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true && this.__reflectingProperty !== name) {
                    if (this.__reflectingProperties === undefined) {
                        this.__reflectingProperties = new Map();
                    }
                    this.__reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this.isUpdatePending && shouldRequestUpdate) {
            this.__updatePromise = this.__enqueueUpdate();
        }
        // Note, since this no longer returns a promise, in dev mode we return a
        // thenable which warns if it's called.
        return DEV_MODE
            ? requestUpdateThenable(this.localName)
            : undefined;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
        }
        catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.scheduleUpdate();
        // If `scheduleUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Schedules an element update. You can override this method to change the
     * timing of updates by returning a Promise. The update will await the
     * returned Promise, and you should resolve the Promise to allow the update
     * to proceed. If this method is overridden, `super.scheduleUpdate()`
     * must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```ts
     * override protected async scheduleUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.scheduleUpdate();
     * }
     * ```
     * @category updates
     */
    scheduleUpdate() {
        return this.performUpdate();
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * Call `performUpdate()` to immediately process a pending update. This should
     * generally not be needed, but it can be done in rare cases when you need to
     * update synchronously.
     *
     * Note: To ensure `performUpdate()` synchronously completes a pending update,
     * it should not be overridden. In LitElement 2.x it was suggested to override
     * `performUpdate()` to also customizing update scheduling. Instead, you should now
     * override `scheduleUpdate()`. For backwards compatibility with LitElement 2.x,
     * scheduling updates via `performUpdate()` continues to work, but will make
     * also calling `performUpdate()` to synchronously process updates difficult.
     *
     * @category updates
     */
    performUpdate() {
        var _a, _b;
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({ kind: 'update' });
        // create renderRoot before first update.
        if (!this.hasUpdated) {
            // Produce warning if any class properties are shadowed by class fields
            if (DEV_MODE) {
                const shadowedProperties = [];
                (_a = this.constructor.__reactivePropertyKeys) === null || _a === void 0 ? void 0 : _a.forEach((p) => {
                    var _a;
                    if (this.hasOwnProperty(p) && !((_a = this.__instanceProperties) === null || _a === void 0 ? void 0 : _a.has(p))) {
                        shadowedProperties.push(p);
                    }
                });
                if (shadowedProperties.length) {
                    throw new Error(`The following properties on element ${this.localName} will not ` +
                        `trigger updates as expected because they are set using class ` +
                        `fields: ${shadowedProperties.join(', ')}. ` +
                        `Native class fields and some compiled output will overwrite ` +
                        `accessors used for detecting changes. See ` +
                        `https://lit.dev/msg/class-field-shadowing ` +
                        `for more information.`);
                }
            }
        }
        // Mixin instance properties once, if they exist.
        if (this.__instanceProperties) {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.__instanceProperties.forEach((v, p) => (this[p] = v));
            this.__instanceProperties = undefined;
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.willUpdate(changedProperties);
                (_b = this.__controllers) === null || _b === void 0 ? void 0 : _b.forEach((c) => { var _a; return (_a = c.hostUpdate) === null || _a === void 0 ? void 0 : _a.call(c); });
                this.update(changedProperties);
            }
            else {
                this.__markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * Invoked before `update()` to compute values needed during the update.
     *
     * Implement `willUpdate` to compute property values that depend on other
     * properties and are used in the rest of the update process.
     *
     * ```ts
     * willUpdate(changedProperties) {
     *   // only need to check changed properties for an expensive computation.
     *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
     *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
     *   }
     * }
     *
     * render() {
     *   return html`SHA: ${this.sha}`;
     * }
     * ```
     *
     * @category updates
     */
    willUpdate(_changedProperties) { }
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostUpdated) === null || _a === void 0 ? void 0 : _a.call(c); });
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (DEV_MODE &&
            this.isUpdatePending &&
            this.constructor.enabledWarnings.indexOf('change-in-update') >= 0) {
            issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` +
                `(generally because a property was set) ` +
                `after an update completed, causing a new update to be scheduled. ` +
                `This is inefficient and should be avoided unless the next update ` +
                `can only be scheduled as a side effect of the previous update.`);
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   override async getUpdateComplete() {
     *     const result = await super.getUpdateComplete();
     *     await this._myChild.updateComplete;
     *     return result;
     *   }
     * }
     * ```
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update()` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    update(_changedProperties) {
        if (this.__reflectingProperties !== undefined) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));
            this.__reflectingProperties = undefined;
        }
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    updated(_changedProperties) { }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * ```ts
     * firstUpdated() {
     *   this.renderRoot.getElementById('my-text-area').focus();
     * }
     * ```
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    firstUpdated(_changedProperties) { }
}
_e = finalized;
/**
 * Marks class as having finished creating properties.
 */
ReactiveElement[_e] = true;
/**
 * Memoized list of all element properties, including any superclass properties.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category properties
 */
ReactiveElement.elementProperties = new Map();
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = { mode: 'open' };
// Apply polyfills if available
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ ReactiveElement });
// Dev mode warnings...
if (DEV_MODE) {
    // Default warning set.
    ReactiveElement.enabledWarnings = ['change-in-update'];
    const ensureOwnWarnings = function (ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function (warning) {
        ensureOwnWarnings(this);
        if (this.enabledWarnings.indexOf(warning) < 0) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function (warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
((_d = global.reactiveElementVersions) !== null && _d !== void 0 ? _d : (global.reactiveElementVersions = [])).push('1.6.3');
if (DEV_MODE && global.reactiveElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=reactive-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/development/decorators.js":
/*!************************************************************!*\
  !*** ./node_modules/lit-element/development/decorators.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_1__.customElement),
/* harmony export */   decorateProperty: () => (/* reexport safe */ _lit_reactive_element_decorators_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty),
/* harmony export */   eventOptions: () => (/* reexport safe */ _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_4__.eventOptions),
/* harmony export */   legacyPrototypeMethod: () => (/* reexport safe */ _lit_reactive_element_decorators_base_js__WEBPACK_IMPORTED_MODULE_0__.legacyPrototypeMethod),
/* harmony export */   property: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property),
/* harmony export */   query: () => (/* reexport safe */ _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_5__.query),
/* harmony export */   queryAll: () => (/* reexport safe */ _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_6__.queryAll),
/* harmony export */   queryAssignedElements: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedElements),
/* harmony export */   queryAssignedNodes: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_9__.queryAssignedNodes),
/* harmony export */   queryAsync: () => (/* reexport safe */ _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_7__.queryAsync),
/* harmony export */   standardPrototypeMethod: () => (/* reexport safe */ _lit_reactive_element_decorators_base_js__WEBPACK_IMPORTED_MODULE_0__.standardPrototypeMethod),
/* harmony export */   state: () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_3__.state)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js");
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/development/decorators/state.js");
/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/development/decorators/event-options.js");
/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/development/decorators/query.js");
/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/development/decorators/query-all.js");
/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/development/decorators/query-async.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */










//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/lit-element/development/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-element/development/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   LitElement: () => (/* reexport safe */ _lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   UpdatingElement: () => (/* reexport safe */ _lit_element_js__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement),
/* harmony export */   _$LE: () => (/* reexport safe */ _lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   customElement: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.customElement),
/* harmony export */   decorateProperty: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.decorateProperty),
/* harmony export */   defaultConverter: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   eventOptions: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.eventOptions),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   legacyPrototypeMethod: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.legacyPrototypeMethod),
/* harmony export */   noChange: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   property: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.property),
/* harmony export */   query: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.query),
/* harmony export */   queryAll: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.queryAll),
/* harmony export */   queryAssignedElements: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.queryAssignedElements),
/* harmony export */   queryAssignedNodes: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.queryAssignedNodes),
/* harmony export */   queryAsync: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.queryAsync),
/* harmony export */   render: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   standardPrototypeMethod: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.standardPrototypeMethod),
/* harmony export */   state: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_3__.state),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lit-element.js */ "./node_modules/lit-element/development/lit-element.js");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators.js */ "./node_modules/lit-element/development/decorators.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */




console.warn("The main 'lit-element' module entrypoint is deprecated. Please update " +
    "your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' " +
    "or import from 'lit-element/lit-element.ts'. See " +
    'https://lit.dev/msg/deprecated-import-path for more information.');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   LitElement: () => (/* binding */ LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   UpdatingElement: () => (/* binding */ UpdatingElement),
/* harmony export */   _$LE: () => (/* binding */ _$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   noChange: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




// For backwards compatibility export ReactiveElement as UpdatingElement. Note,
// IE transpilation requires exporting like this.
const UpdatingElement = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;
const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */
class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
    constructor() {
        super(...arguments);
        /**
         * @category rendering
         */
        this.renderOptions = { host: this };
        this.__childPart = undefined;
    }
    /**
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        var _b;
        const renderRoot = super.createRenderRoot();
        // When adoptedStyleSheets are shimmed, they are inserted into the
        // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
        // any styles in Lit content render before adoptedStyleSheets. This is
        // important so that adoptedStyleSheets have precedence over styles in
        // the shadowRoot.
        (_a = (_b = this.renderOptions).renderBefore) !== null && _a !== void 0 ? _a : (_b.renderBefore = renderRoot.firstChild);
        return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const value = this.render();
        if (!this.hasUpdated) {
            this.renderOptions.isConnected = this.isConnected;
        }
        super.update(changedProperties);
        this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
    }
    /**
     * Invoked when the component is added to the document's DOM.
     *
     * In `connectedCallback()` you should setup tasks that should only occur when
     * the element is connected to the document. The most common of these is
     * adding event listeners to nodes external to the element, like a keydown
     * event handler added to the window.
     *
     * ```ts
     * connectedCallback() {
     *   super.connectedCallback();
     *   addEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * Typically, anything done in `connectedCallback()` should be undone when the
     * element is disconnected, in `disconnectedCallback()`.
     *
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(true);
    }
    /**
     * Invoked when the component is removed from the document's DOM.
     *
     * This callback is the main signal to the element that it may no longer be
     * used. `disconnectedCallback()` should ensure that nothing is holding a
     * reference to the element (such as event listeners added to nodes external
     * to the element), so that it is free to be garbage collected.
     *
     * ```ts
     * disconnectedCallback() {
     *   super.disconnectedCallback();
     *   window.removeEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * An element may be re-connected after being disconnected.
     *
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */
    render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement['finalized'] = true;
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
// Install hydration if available
(_b = globalThis.litElementHydrateSupport) === null || _b === void 0 ? void 0 : _b.call(globalThis, { LitElement });
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? globalThis.litElementPolyfillSupportDevMode
    : globalThis.litElementPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ LitElement });
// DEV mode warnings
if (DEV_MODE) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // Note, for compatibility with closure compilation, this access
    // needs to be as a string property index.
    LitElement['finalize'] = function () {
        const finalized = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement.finalize.call(this);
        if (!finalized) {
            return false;
        }
        const warnRemovedOrRenamed = (obj, name, renamed = false) => {
            if (obj.hasOwnProperty(name)) {
                const ctorName = (typeof obj === 'function' ? obj : obj.constructor)
                    .name;
                issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${ctorName}. It ` +
                    `has been ${renamed ? 'renamed' : 'removed'} ` +
                    `in this version of LitElement.`);
            }
        };
        warnRemovedOrRenamed(this, 'render');
        warnRemovedOrRenamed(this, 'getStyles', true);
        warnRemovedOrRenamed(this.prototype, 'adoptStyles');
        return true;
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
const _$LE = {
    _$attributeToProperty: (el, name, value) => {
        // eslint-disable-next-line
        el._$attributeToProperty(name, value);
    },
    // eslint-disable-next-line
    _$changedProperties: (el) => el._$changedProperties,
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
((_c = globalThis.litElementVersions) !== null && _c !== void 0 ? _c : (globalThis.litElementVersions = [])).push('3.3.3');
if (DEV_MODE && globalThis.litElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _$LH: () => (/* binding */ _$LH),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   noChange: () => (/* binding */ noChange),
/* harmony export */   nothing: () => (/* binding */ nothing),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   svg: () => (/* binding */ svg)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
const NODE_MODE = false;
// Use window for browser builds because IE11 doesn't have globalThis.
const global = NODE_MODE ? globalThis : window;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
let issueWarning;
if (DEV_MODE) {
    (_a = global.litIssuedWarnings) !== null && _a !== void 0 ? _a : (global.litIssuedWarnings = new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += code
            ? ` See https://lit.dev/msg/${code} for more information.`
            : '';
        if (!global.litIssuedWarnings.has(warning)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
}
const wrap = ENABLE_SHADYDOM_NOPATCH &&
    ((_b = global.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) &&
    ((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true
    ? global.ShadyDOM.wrap
    : (node) => node;
const trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = trustedTypes
    ? trustedTypes.createPolicy('lit-html', {
        createHTML: (s) => s,
    })
    : undefined;
const identityFunction = (value) => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */
const setSanitizer = (newSanitizer) => {
    if (!ENABLE_EXTRA_SECURITY_HOOKS) {
        return;
    }
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error(`Attempted to overwrite existing lit-html security policy.` +
            ` setSanitizeDOMValueFactory should be called at most once.`);
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${String(Math.random()).slice(9)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = NODE_MODE && global.document === undefined
    ? {
        createTreeWalker() {
            return {};
        },
    }
    : document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = () => d.createComment('');
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const isArray = Array.isArray;
const isIterable = (value) => isArray(value) ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === 'function';
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
const HTML_RESULT = 1;
const SVG_RESULT = 2;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
const tag = (type) => (strings, ...values) => {
    // Warn against templates octal escape sequences
    // We do this here rather than in render so that the warning is closer to the
    // template definition.
    if (DEV_MODE && strings.some((s) => s === undefined)) {
        console.warn('Some template strings are undefined.\n' +
            'This is probably caused by illegal octal escape sequences.');
    }
    return {
        // This property needs to remain unminified.
        ['_$litType$']: type,
        strings,
        values,
    };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus cannot be used within an `<svg>` HTML element.
 */
const svg = tag(SVG_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - the must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
const templateCache = new WeakMap();
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */, null, false);
let sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
    // A security check to prevent spoofing of Lit template results.
    // In the future, we may be able to replace this with Array.isTemplateObject,
    // though we might need to make that check inside of the html and svg
    // functions, because precompiled templates don't come in as
    // TemplateStringArray objects.
    if (!Array.isArray(tsa) || !tsa.hasOwnProperty('raw')) {
        let message = 'invalid template strings array';
        if (DEV_MODE) {
            message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `
                .trim()
                .replace(/\n */g, '\n');
        }
        throw new Error(message);
    }
    return policy !== undefined
        ? policy.createHTML(stringFromTSA)
        : stringFromTSA;
}
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
const getTemplateHtml = (strings, type) => {
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT ? '<svg>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for (let i = 0; i < l; i++) {
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while (lastIndex < s.length) {
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                }
                else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                }
                else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                    }
                    regex = tagEndRegex;
                }
                else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    if (DEV_MODE) {
                        throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' +
                            'See https://lit.dev/docs/templates/expressions/#static-expressions');
                    }
                    regex = tagEndRegex;
                }
            }
            else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                }
                else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                }
                else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex =
                        match[QUOTE_CHAR] === undefined
                            ? tagEndRegex
                            : match[QUOTE_CHAR] === '"'
                                ? doubleQuoteAttrEndRegex
                                : singleQuoteAttrEndRegex;
                }
            }
            else if (regex === doubleQuoteAttrEndRegex ||
                regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            }
            else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            }
            else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        if (DEV_MODE) {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 ||
                regex === tagEndRegex ||
                regex === singleQuoteAttrEndRegex ||
                regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html +=
            regex === textEndRegex
                ? s + nodeMarker
                : attrNameEndIndex >= 0
                    ? (attrNames.push(attrName),
                        s.slice(0, attrNameEndIndex) +
                            boundAttributeSuffix +
                            s.slice(attrNameEndIndex)) +
                        marker +
                        end
                    : s +
                        marker +
                        (attrNameEndIndex === -2 ? (attrNames.push(undefined), i) : end);
    }
    const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : '');
    // Returned as an array for terseness
    return [trustFromTemplateString(strings, htmlResult), attrNames];
};
class Template {
    constructor(
    // This property needs to remain unminified.
    { strings, ['_$litType$']: type }, options) {
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Reparent SVG nodes into template root
        if (type === SVG_RESULT) {
            const content = this.el.content;
            const svgElement = content.firstChild;
            svgElement.remove();
            content.append(...svgElement.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while ((node = walker.nextNode()) !== null && parts.length < partCount) {
            if (node.nodeType === 1) {
                if (DEV_MODE) {
                    const tag = node.localName;
                    // Warn if `textarea` includes an expression and throw if `template`
                    // does since these are not supported. We do this by checking
                    // innerHTML for anything that looks like a marker. This catches
                    // cases like bindings in textarea there markers turn into text nodes.
                    if (/^(?:textarea|template)$/i.test(tag) &&
                        node.innerHTML.includes(marker)) {
                        const m = `Expressions are not supported inside \`${tag}\` ` +
                            `elements. See https://lit.dev/msg/expression-in-${tag} for more ` +
                            `information.`;
                        if (tag === 'template') {
                            throw new Error(m);
                        }
                        else
                            issueWarning('', m);
                    }
                }
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    // We defer removing bound attributes because on IE we might not be
                    // iterating attributes in their template order, and would sometimes
                    // remove an attribute that we still need to create a part for.
                    const attrsToRemove = [];
                    for (const name of node.getAttributeNames()) {
                        // `name` is the name of the attribute we're iterating over, but not
                        // _necessarily_ the name of the attribute we will create a part
                        // for. They can be different in browsers that don't iterate on
                        // attributes in source order. In that case the attrNames array
                        // contains the attribute name we'll process next. We only need the
                        // attribute name here to know if we should process a bound attribute
                        // on this element.
                        if (name.endsWith(boundAttributeSuffix) ||
                            name.startsWith(marker)) {
                            const realName = attrNames[attrNameIndex++];
                            attrsToRemove.push(name);
                            if (realName !== undefined) {
                                // Lowercase for case-sensitive SVG attributes like viewBox
                                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                                const statics = value.split(marker);
                                const m = /([.?@])?(.*)/.exec(realName);
                                parts.push({
                                    type: ATTRIBUTE_PART,
                                    index: nodeIndex,
                                    name: m[2],
                                    strings: statics,
                                    ctor: m[1] === '.'
                                        ? PropertyPart
                                        : m[1] === '?'
                                            ? BooleanAttributePart
                                            : m[1] === '@'
                                                ? EventPart
                                                : AttributePart,
                                });
                            }
                            else {
                                parts.push({
                                    type: ELEMENT_PART,
                                    index: nodeIndex,
                                });
                            }
                        }
                    }
                    for (const name of attrsToRemove) {
                        node.removeAttribute(name);
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes
                            ? trustedTypes.emptyScript
                            : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        // We can't use empty text nodes as markers because they're
                        // normalized when cloning in IE (could simplify when
                        // IE is no longer supported)
                        for (let i = 0; i < lastIndex; i++) {
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({ type: CHILD_PART, index: ++nodeIndex });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            }
            else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({ type: CHILD_PART, index: nodeIndex });
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        parts.push({ type: COMMENT_PART, index: nodeIndex });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
        // We could set walker.currentNode to another node here to prevent a memory
        // leak, but every time we prepare a template, we immediately render it
        // and re-use the walker in new TemplateInstance._clone().
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'template prep',
            template: this,
            clonableTemplate: this.el,
            parts: this.parts,
            strings,
        });
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @nocollapse */
    static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
    var _a, _b, _c;
    var _d;
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined
        ? (_a = parent.__directives) === null || _a === void 0 ? void 0 : _a[attributeIndex]
        : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value)
        ? undefined
        : // This property needs to remain unminified.
            value['_$litDirective$'];
    if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
        // This property needs to remain unminified.
        (_b = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(currentDirective, false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        }
        else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            ((_c = (_d = parent).__directives) !== null && _c !== void 0 ? _c : (_d.__directives = []))[attributeIndex] =
                currentDirective;
        }
        else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
class TemplateInstance {
    constructor(template, parent) {
        this._$parts = [];
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
    // Called by ChildPart parentNode getter
    get parentNode() {
        return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        var _a;
        const { el: { content }, parts: parts, } = this._$template;
        const fragment = ((_a = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a !== void 0 ? _a : d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while (templatePart !== undefined) {
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                }
                else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                }
                else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._$parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        // We need to set the currentNode away from the cloned tree so that we
        // don't hold onto the tree even if the tree is detached and should be
        // freed.
        walker.currentNode = d;
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._$parts) {
            if (part !== undefined) {
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'set part',
                    part,
                    value: values[i],
                    valueIndex: i,
                    values,
                    templateInstance: this,
                });
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                }
                else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
}
class ChildPart {
    constructor(startNode, endNode, parent, options) {
        var _a;
        this.type = CHILD_PART;
        this._$committedValue = nothing;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        // Note __isConnected is only ever accessed on RootParts (i.e. when there is
        // no _$parent); the value on a non-root-part is "don't care", but checking
        // for parent would be more code
        this.__isConnected = (_a = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a !== void 0 ? _a : true;
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        var _a, _b;
        // ChildParts that are not at the root should always be created with a
        // parent; only RootChildNode's won't, so they return the local isConnected
        // state
        return (_b = (_a = this._$parent) === null || _a === void 0 ? void 0 : _a._$isConnected) !== null && _b !== void 0 ? _b : this.__isConnected;
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */
    get parentNode() {
        let parentNode = wrap(this._$startNode).parentNode;
        const parent = this._$parent;
        if (parent !== undefined &&
            (parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 11 /* Node.DOCUMENT_FRAGMENT */) {
            // If the parentNode is a DocumentFragment, it may be because the DOM is
            // still in the cloned fragment during initial render; if so, get the real
            // parentNode the part will be committed into by asking the parent.
            parentNode = parent.parentNode;
        }
        return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
    get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
    get endNode() {
        return this._$endNode;
    }
    _$setValue(value, directiveParent = this) {
        var _a;
        if (DEV_MODE && this.parentNode === null) {
            throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
        }
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                        kind: 'commit nothing to child',
                        start: this._$startNode,
                        end: this._$endNode,
                        parent: this._$parent,
                        options: this.options,
                    });
                    this._$clear();
                }
                this._$committedValue = nothing;
            }
            else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
            // This property needs to remain unminified.
        }
        else if (value['_$litType$'] !== undefined) {
            this._commitTemplateResult(value);
        }
        else if (value.nodeType !== undefined) {
            if (DEV_MODE && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.host) === value) {
                this._commitText(`[probable mistake: rendered a template's host in itself ` +
                    `(commonly caused by writing \${this} in a template]`);
                console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
                return;
            }
            this._commitNode(value);
        }
        else if (isIterable(value)) {
            this._commitIterable(value);
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
    }
    _commitNode(value) {
        var _a;
        if (this._$committedValue !== value) {
            this._$clear();
            if (ENABLE_EXTRA_SECURITY_HOOKS &&
                sanitizerFactoryInternal !== noopSanitizer) {
                const parentNodeName = (_a = this._$startNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    let message = 'Forbidden';
                    if (DEV_MODE) {
                        if (parentNodeName === 'STYLE') {
                            message =
                                `Lit does not support binding inside style nodes. ` +
                                    `This is a security risk, as style injection attacks can ` +
                                    `exfiltrate data and spoof UIs. ` +
                                    `Consider instead using css\`...\` literals ` +
                                    `to compose styles, and make do dynamic styling with ` +
                                    `css custom properties, ::parts, <slot>s, ` +
                                    `and by mutating the DOM rather than stylesheets.`;
                        }
                        else {
                            message =
                                `Lit does not support binding inside script nodes. ` +
                                    `This is a security risk, as it could allow arbitrary ` +
                                    `code execution.`;
                        }
                    }
                    throw new Error(message);
                }
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit node',
                start: this._$startNode,
                parent: this._$parent,
                value: value,
                options: this.options,
            });
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        // If the committed value is a primitive it means we called _commitText on
        // the previous render, and we know that this._$startNode.nextSibling is a
        // Text node. We can now just replace the text content (.data) of the node.
        if (this._$committedValue !== nothing &&
            isPrimitive(this._$committedValue)) {
            const node = wrap(this._$startNode).nextSibling;
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit text',
                node,
                value,
                options: this.options,
            });
            node.data = value;
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                const textNode = d.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its content.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: textNode,
                    value,
                    options: this.options,
                });
                textNode.data = value;
            }
            else {
                this._commitNode(d.createTextNode(value));
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: wrap(this._$startNode).nextSibling,
                    value,
                    options: this.options,
                });
            }
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        var _a;
        // This property needs to remain unminified.
        const { values, ['_$litType$']: type } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof type === 'number'
            ? this._$getTemplate(result)
            : (type.el === undefined &&
                (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)),
                type);
        if (((_a = this._$committedValue) === null || _a === void 0 ? void 0 : _a._$template) === template) {
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template updating',
                template,
                instance: this._$committedValue,
                parts: this._$committedValue._$parts,
                options: this.options,
                values,
            });
            this._$committedValue._update(values);
        }
        else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated',
                template,
                instance,
                parts: instance._$parts,
                options: this.options,
                fragment,
                values,
            });
            instance._update(values);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated and updated',
                template,
                instance,
                parts: instance._$parts,
                options: this.options,
                fragment,
                values,
            });
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */
    _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, (template = new Template(result)));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push((itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)));
            }
            else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives in
     *     those Parts.
     *
     * @internal
     */
    _$clear(start = wrap(this._$startNode).nextSibling, from) {
        var _a;
        (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, false, true, from);
        while (start && start !== this._$endNode) {
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this metod
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */
    setConnected(isConnected) {
        var _a;
        if (this._$parent === undefined) {
            this.__isConnected = isConnected;
            (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, isConnected);
        }
        else if (DEV_MODE) {
            throw new Error('part.setConnected() may only be called on a ' +
                'RootPart returned from render().');
        }
    }
}
class AttributePart {
    constructor(element, name, strings, parent, options) {
        this.type = ATTRIBUTE_PART;
        /** @internal */
        this._$committedValue = nothing;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(new String());
            this.strings = strings;
        }
        else {
            this._$committedValue = nothing;
        }
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            this._sanitizer = undefined;
        }
    }
    get tagName() {
        return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */
    _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change =
                !isPrimitive(value) ||
                    (value !== this._$committedValue && value !== noChange);
            if (change) {
                this._$committedValue = value;
            }
        }
        else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for (i = 0; i < strings.length - 1; i++) {
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
                if (v === nothing) {
                    value = nothing;
                }
                else if (value !== nothing) {
                    value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */
    _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value !== null && value !== void 0 ? value : '');
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit attribute',
                element: this.element,
                name: this.name,
                value,
                options: this.options,
            });
            wrap(this.element).setAttribute(this.name, (value !== null && value !== void 0 ? value : ''));
        }
    }
}
class PropertyPart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = PROPERTY_PART;
    }
    /** @internal */
    _commitValue(value) {
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit property',
            element: this.element,
            name: this.name,
            value,
            options: this.options,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
}
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
class BooleanAttributePart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
    /** @internal */
    _commitValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit boolean attribute',
            element: this.element,
            name: this.name,
            value: !!(value && value !== nothing),
            options: this.options,
        });
        if (value && value !== nothing) {
            wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
        }
        else {
            wrap(this.element).removeAttribute(this.name);
        }
    }
}
class EventPart extends AttributePart {
    constructor(element, name, strings, parent, options) {
        super(element, name, strings, parent, options);
        this.type = EVENT_PART;
        if (DEV_MODE && this.strings !== undefined) {
            throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` +
                'invalid content. Event listeners in templates must have exactly ' +
                'one expression and no surrounding text.');
        }
    }
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */
    _$setValue(newListener, directiveParent = this) {
        var _a;
        newListener =
            (_a = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a !== void 0 ? _a : nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = (newListener === nothing && oldListener !== nothing) ||
            newListener.capture !==
                oldListener.capture ||
            newListener.once !==
                oldListener.once ||
            newListener.passive !==
                oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing &&
            (oldListener === nothing || shouldRemoveListener);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit event listener',
            element: this.element,
            name: this.name,
            value: newListener,
            options: this.options,
            removeListener: shouldRemoveListener,
            addListener: shouldAddListener,
            oldListener,
        });
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            // Beware: IE11 and Chrome 41 don't like using the listener as the
            // options object. Figure out how to deal w/ this in IE11 - maybe
            // patch addEventListener?
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        var _a, _b;
        if (typeof this._$committedValue === 'function') {
            this._$committedValue.call((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : this.element, event);
        }
        else {
            this._$committedValue.handleEvent(event);
        }
    }
}
class ElementPart {
    constructor(element, parent, options) {
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$parent = parent;
        this.options = options;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit to element binding',
            element: this.element,
            value,
            options: this.options,
        });
        resolveDirective(this, value);
    }
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
const _$LH = {
    // Used in lit-ssr
    _boundAttributeSuffix: boundAttributeSuffix,
    _marker: marker,
    _markerMatch: markerMatch,
    _HTML_RESULT: HTML_RESULT,
    _getTemplateHtml: getTemplateHtml,
    // Used in tests and private-ssr-support
    _TemplateInstance: TemplateInstance,
    _isIterable: isIterable,
    _resolveDirective: resolveDirective,
    _ChildPart: ChildPart,
    _AttributePart: AttributePart,
    _BooleanAttributePart: BooleanAttributePart,
    _EventPart: EventPart,
    _PropertyPart: PropertyPart,
    _ElementPart: ElementPart,
};
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? global.litHtmlPolyfillSupportDevMode
    : global.litHtmlPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
((_d = global.litHtmlVersions) !== null && _d !== void 0 ? _d : (global.litHtmlVersions = [])).push('2.8.0');
if (DEV_MODE && global.litHtmlVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` +
        `Loading multiple versions is not recommended.`);
}
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */
const render = (value, container, options) => {
    var _a, _b;
    if (DEV_MODE && container == null) {
        // Give a clearer error message than
        //     Uncaught TypeError: Cannot read properties of null (reading
        //     '_$litPart$')
        // which reads like an internal Lit error.
        throw new TypeError(`The container to render into may not be ${container}`);
    }
    const renderId = DEV_MODE ? debugLogRenderId++ : 0;
    const partOwnerNode = (_a = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a !== void 0 ? _a : container;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode['_$litPart$'];
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'begin render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    if (part === undefined) {
        const endNode = (_b = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b !== void 0 ? _b : null;
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
    }
    part._$setValue(value);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'end render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    if (DEV_MODE) {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse =
            _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
}
//# sourceMappingURL=lit-html.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/android-tv-card.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5kcm9pZC10di1jYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUI7QUFDekIsaUNBQWlDO0FBQ2pDLGlEQUFpRCx3Q0FBd0M7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRWtELHdCQUF3QixzQkFBc0IsZUFBZSwyQ0FBMkMsMENBQTBDLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLDJDQUEyQywwQ0FBMEMsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsMkNBQTJDLDZDQUE2QyxFQUFFLGlCQUFpQixzQkFBc0IsZUFBZSwyQ0FBMkMsNEJBQTRCLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLDJDQUEyQyw0QkFBNEIsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsMkNBQTJDLGFBQWEsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsMkNBQTJDLGVBQWUsR0FBRyxhQUFhLGtKQUFrSixTQUFTLGVBQWUsd0VBQXdFLFNBQVMsR0FBRyxrQkFBa0IseURBQXlELGtGQUFrRiwwQ0FBMEMsK0JBQStCLGlCQUFpQixzQkFBc0IsZUFBZSwyQ0FBMkMscUdBQXFHLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLDJDQUEyQyxzSEFBc0gsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsMkNBQTJDLHlGQUF5RixFQUFFLGlCQUFpQixzQkFBc0IsZUFBZSwyQ0FBMkMsNENBQTRDLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLDJDQUEyQyw0RUFBNEUsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsMkNBQTJDLDRFQUE0RSxFQUFFLHFCQUFxQixtQkFBbUIsTUFBTSxnRUFBQyxNQUFNLHFCQUFxQiwrQ0FBK0MsZUFBZSxFQUFFLHlEQUF5RCw0Q0FBNEMsNkJBQTZCLGNBQWMsK0VBQStFLHVCQUF1QixnRUFBZ0UsMEJBQTBCLFNBQVMsYUFBYSxvQ0FBb0MsWUFBWSxtQkFBbUIsS0FBSyxtQkFBbUIsc0VBQXNFLFNBQVMsd0JBQXdCLHdCQUF3QiwyQ0FBMkMsRUFBRSxzQkFBc0IsdUNBQXVDLFVBQVUsWUFBWSxrQkFBa0Isa0JBQWtCLG1DQUFtQyxhQUFhLDBCQUEwQixFQUFFLDBGQUEwRix1REFBdUQsTUFBTSwrRkFBK0YsOERBQThELDhCQUE4QixlQUFlLDBEQUEwRCxjQUFjLGtDQUFrQyxjQUFjLGtDQUFrQyxjQUFjLDhEQUE4RCw4RkFBOEYsY0FBYyx3QkFBd0IsY0FBYyxzQkFBc0Isa0JBQWtCLHFFQUFxRSxlQUFlLHdCQUF3QiwwQ0FBMEMsNENBQTRDLDBDQUEwQyxxQkFBcUIsMkJBQTJCLGlCQUFpQixxRUFBcUUsbUJBQW1CLG9CQUFvQiw0Q0FBNEMsK0JBQStCLCtFQUErRSx5REFBeUQsU0FBUywrRUFBK0UsNElBQTRJLGlCQUFpQixTQUFTLHdCQUF3QixJQUFJLCtCQUErQiwyREFBMkQsaURBQWlELG9EQUFvRCxTQUFTLHFCQUFxQiwyQkFBMkIsaUVBQWlFLFNBQVMsOENBQThDLGNBQWMsMkRBQTJELEVBQUUsVUFBVSx5RkFBeUYsV0FBVyx5QkFBeUIsTUFBTSw0WEFBNFgsSUFBSSxtQkFBbUIsa0RBQWtELGlCQUFpQixvREFBb0Qsb0JBQW9CLGVBQWUsMkRBQTJELFNBQVMsU0FBUyxVQUFVLHFRQUFxUSxnckJBQWdyQixPQUFPLGFBQWEsR0FBRyxtQkFBbUIsZ0hBQWdILEVBQUUsdUNBQXVDLGdGQUFnRiwrWkFBK1osa0JBQWtCLG1CQUFtQixvQkFBb0IsMkJBQTJCLDhCQUE4QixFQUFFLGlCQUFpQix1Q0FBdUMsSUFBSSx1QkFBdUIsZUFBZSxTQUFTLHlDQUF5QyxVQUFVLHFFQUFxRSxhQUFhLDJEQUEyRCx5Q0FBeUMsS0FBSyxpREFBaUQsK0JBQStCLHVDQUF1Qyx3QkFBd0IsdUNBQXVDLHVEQUF1RCx1QkFBdUIsNEJBQTRCLG1CQUFtQixNQUFNLDBEQUEwRCxvQ0FBb0MsSUFBSSxJQUFJLG9CQUFvQixNQUFNLHFDQUFxQyxtREFBbUQsdUJBQXVCLFNBQVMsbURBQW1ELEtBQUssODlCQUE4OUIsaUJBQWlCLHdCQUF3QixVQUFVLG9DQUFvQyx1Q0FBdUMseUNBQXlDLHdDQUF3QyxzQ0FBc0MseUJBQXlCLDBGQUEwRixxRUFBcUUsK0RBQStELG1GQUFtRixzQkFBc0IscUNBQXFDLGlDQUFpQywwQ0FBMEMsMkJBQTJCLDRGQUE0RixxQkFBcUIsaUVBQWlFLHlCQUF5QixzQkFBc0IscUJBQXFCLG1CQUFtQixxQkFBcUIsbUJBQW1CLHNCQUFzQiw4QkFBOEIsa0JBQWtCLGdCQUFnQixzQkFBc0Isb0JBQW9CLGdIQUFnSCxVQUFVLEVBQUUsb0JBQW9CLG1CQUFtQiw2Q0FBNkMsVUFBVSwrQkFBK0IsTUFBTSwyQ0FBMkMsTUFBTSxpQ0FBaUMsMEJBQTBCLFlBQVksRUFBRSxrQkFBa0Isb0NBQW9DLGlCQUFpQixzQkFBc0IsVUFBVSxtQkFBbUIseUZBQXlGLDBCQUEwQiwyR0FBMkcsbUVBQW1FLDBDQUEwQyxFQUFFLE1BQU0sMERBQTBELE1BQU0sOENBQThDLE1BQU0sc0RBQXNELE1BQU0sMkRBQTJELDZCQUE2QiwrREFBK0QsTUFBTSwwQ0FBMEMsc0JBQXNCLE1BQU0sNEpBQTRKLHdCQUF3QixNQUFNLDJIQUEySCxtQkFBbUIseUZBQXlGLDBCQUEwQiwyRkFBMkYsOEVBQThFLDREQUE0RCwwQkFBMEIsTUFBTSxtRkFBbUYsTUFBTSxxRUFBcUUsTUFBTSwrREFBK0QsTUFBTSx3Q0FBd0MsaURBQWlELGlCQUFpQixvR0FBb0csTUFBTSxrRUFBa0UsZUFBZSxxQ0FBcUMsbUJBQW1CLCtCQUErQixvQkFBb0Isb0JBQW9CLHFFQUFxRSxTQUFTLGVBQWUscUNBQXFDLHVCQUF1QixtQkFBbUIsU0FBUyxzQkFBc0Isc0NBQXNDLDREQUE0RCxnQ0FBZ0MscUNBQXFDLE1BQU0sVUFBVSwrQkFBK0IsTUFBTSwyQ0FBMkMsTUFBTSxpQ0FBaUMsbUJBQW1CLGVBQWUsRUFBRSxFQUFFLGVBQWUsK0NBQStDLHVRQUF1USxpQkFBaUIscUNBQXFDLFlBQVksS0FBSyw0SkFBNEosS0FBSyw0QkFBNEIsZ0JBQWdCLGlEQUFpRCwyREFBMkQscUVBQXFFLHNEQUFzRCwwRUFBMEUsc0RBQXNELDBEQUEwRCwyREFBMkQsaUdBQWlHLG9EQUFvRCxpREFBaUQsMkRBQTJELCtDQUErQyxvREFBb0QsMkNBQTJDLHVEQUF1RCx5REFBeUQsMERBQTBELHNEQUFzRCw2Q0FBNkMsMkRBQTJELHFEQUFxRCwyREFBMkQsNERBQTRELG9FQUFvRSxtQkFBbUIseUJBQXlCLGtDQUFrQyxxREFBcUQsc0RBQXNELHNFQUFzRSxvREFBb0QsNERBQTRELG9DQUFvQyxvQkFBb0IsZ0NBQWdDLDJCQUEyQixrQkFBa0Isc0JBQXNCLHdDQUF3QywwQkFBMEIsdUVBQXVFLHVDQUF1Qyx3REFBd0QsNEJBQTRCLG9HQUFvRyxnQkFBZ0IsMkJBQTJCLDhDQUE4QyxxQkFBcUIsdUNBQWt3QztBQUMzemtCOzs7Ozs7Ozs7OztBQ0RhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyxvRUFBYTtBQUMzQyw4QkFBOEIsbUJBQU8sQ0FBQywrRUFBcUI7QUFDM0QsaUJBQWlCLG1CQUFPLENBQUMsdUNBQVU7QUFDbkMsa0RBQWtELG1CQUFtQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsa0JBQWtCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGtCQUFrQixnQkFBZ0I7QUFDbEMsZUFBZSxhQUFhO0FBQzVCLGVBQWUsYUFBYTtBQUM1QixpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGNBQWMsbUJBQW1CO0FBQ2pDLG1CQUFtQiw0QkFBNEI7QUFDL0MsaUJBQWlCLDBCQUEwQjtBQUMzQyxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsUUFBUTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDLDBCQUEwQixrQkFBa0I7QUFDNUMseUJBQXlCLGlCQUFpQjtBQUMxQyx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTCx1QkFBdUIsbUJBQW1CLElBQUksY0FBYztBQUM1RDtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6c0JhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGFBQWEsaUNBQWlDO0FBQzlDLGlCQUFpQiwyQ0FBMkM7QUFDNUQsbUJBQW1CLDhDQUE4QztBQUNqRSxtQkFBbUIsc0NBQXNDO0FBQ3pELFlBQVksNkNBQTZDO0FBQ3pELFlBQVksK0JBQStCO0FBQzNDLFVBQVUsd0NBQXdDO0FBQ2xELFlBQVksNENBQTRDO0FBQ3hELGNBQWMsdURBQXVEO0FBQ3JFLGFBQWEsOENBQThDO0FBQzNELFlBQVksNENBQTRDO0FBQ3hELFlBQVkscUNBQXFDO0FBQ2pELGFBQWEsdUNBQXVDO0FBQ3BELGtCQUFrQixpREFBaUQ7QUFDbkUsWUFBWSxxQ0FBcUM7QUFDakQsY0FBYyx5Q0FBeUM7QUFDdkQsb0JBQW9CLHFEQUFxRDtBQUN6RSxnQkFBZ0Isa0RBQWtEO0FBQ2xFLGNBQWMseUNBQXlDO0FBQ3ZELFlBQVksMENBQTBDO0FBQ3RELFlBQVksK0JBQStCO0FBQzNDLFNBQVMsNkNBQTZDO0FBQ3RELFNBQVMsNkNBQTZDO0FBQ3RELFNBQVMsNkNBQTZDO0FBQ3RELFNBQVMsNkNBQTZDO0FBQ3RELFVBQVUsaUNBQWlDO0FBQzNDLFVBQVUsaUNBQWlDO0FBQzNDLFVBQVUsaUNBQWlDO0FBQzNDLFVBQVUsaUNBQWlDO0FBQzNDLFVBQVUsaUNBQWlDO0FBQzNDLFVBQVUsaUNBQWlDO0FBQzNDLFVBQVUsaUNBQWlDO0FBQzNDLFVBQVUsaUNBQWlDO0FBQzNDLFVBQVUsaUNBQWlDO0FBQzNDLFVBQVUsaUNBQWlDO0FBQzNDLGtCQUFrQixnREFBZ0Q7QUFDbEUsb0JBQW9CLG9EQUFvRDtBQUN4RSxVQUFVLG9DQUFvQztBQUM5QyxVQUFVLG9DQUFvQztBQUM5QyxVQUFVLG9DQUFvQztBQUM5QyxVQUFVLG9DQUFvQztBQUM5QyxVQUFVLG9DQUFvQztBQUM5QyxVQUFVLG9DQUFvQztBQUM5QyxVQUFVLG9DQUFvQztBQUM5QyxVQUFVLG9DQUFvQztBQUM5QyxVQUFVLG9DQUFvQztBQUM5QyxXQUFXLHNDQUFzQztBQUNqRCxXQUFXLHNDQUFzQztBQUNqRCxXQUFXLHNDQUFzQztBQUNqRCxVQUFVLHVDQUF1QztBQUNqRCxXQUFXLDBDQUEwQztBQUNyRCxhQUFhLDRDQUE0QztBQUN6RCxjQUFjLDZDQUE2QztBQUMzRCxZQUFZLDJDQUEyQztBQUN2RCxtQkFBbUIsbURBQW1EO0FBQ3RFLGdCQUFnQiw4Q0FBOEM7QUFDOUQsWUFBWSxzQ0FBc0M7QUFDbEQsYUFBYSw0Q0FBNEM7QUFDekQsZ0JBQWdCLDJDQUEyQztBQUMzRCxnQkFBZ0IsNkNBQTZDO0FBQzdELFdBQVcscUNBQXFDO0FBQ2hELG1CQUFtQixnREFBZ0Q7QUFDbkUsZ0JBQWdCLGtDQUFrQztBQUNsRCxjQUFjLG1DQUFtQztBQUNqRCxzQkFBc0Isa0RBQWtEO0FBQ3hFLGFBQWEsbUNBQW1DO0FBQ2hELGdCQUFnQix1Q0FBdUM7QUFDdkQsY0FBYyw2Q0FBNkM7QUFDM0QsZUFBZSxzQ0FBc0M7QUFDckQ7Ozs7Ozs7Ozs7O0FDOUVhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNCQUFzQjtBQUN0QixXQUFXLG1CQUFPLENBQUMsZ0NBQUc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlLDJDQUEyQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlLDJDQUEyQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWUsK0NBQStDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7QUN6RWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYSxtQkFBTyxDQUFDLHdDQUFPOzs7Ozs7Ozs7OztBQ2hCZjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVUsV0FBVyxXQUFXOzs7Ozs7Ozs7OztBQ2hCcEI7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYSxtQkFBTyxDQUFDLDRDQUFTO0FBQzlCLGFBQWEsbUJBQU8sQ0FBQyxzREFBYztBQUNuQyxhQUFhLG1CQUFPLENBQUMsa0RBQWU7QUFDcEMsYUFBYSxtQkFBTyxDQUFDLHdEQUFrQjs7Ozs7Ozs7Ozs7QUNuQjFCO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDOzs7Ozs7Ozs7OztBQ0RoRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7QUNEaEQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7O0FDRGhEO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDOzs7Ozs7Ozs7OztBQ0RoRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7QUNEaEQ7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYSxtQkFBTyxDQUFDLHFEQUFXO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxpRUFBaUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLCtDQUFRO0FBQzdCLGFBQWEsbUJBQU8sQ0FBQywrREFBZ0I7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHFEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxJQUFJLDZCQUE2QjtBQUNqQztBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVUsMEJBQTBCO0FBQ3hEO0FBQ0Esc0JBQXNCLFVBQVUsNEJBQTRCO0FBQzVEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDTyw0QkFBNEIsdUJBQXVCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQkFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxXQUFXLDBEQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxpQkFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFdBQVcsMERBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0NBQXdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsWUFBWSxpQkFBaUI7QUFDN0IsV0FBVywwREFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQixLQUFLLG9CQUFvQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZDO0FBQ3dCO0FBQzlEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0ZBQXFCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFdBQVcsMERBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQkFBZ0IsS0FBSyxvQkFBb0I7QUFDckY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsV0FBVywwREFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsV0FBVywwREFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxLQUFLO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFdBQVcsc0RBQVE7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNCQUFzQjtBQUMxQjtBQUNBO0FBQ2dFO0FBQ2hFO0FBQ0EsV0FBVyw2QkFBNkI7QUFDWDtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQkFBK0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGVBQWU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsS0FBSztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUJBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLEtBQUssNkJBQTZCLFVBQVU7QUFDM0gsb0NBQW9DLGlDQUFpQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtEQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0RBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixRQUFRLGdGQUFnRjtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixRQUFRLG1GQUFtRjtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixNQUFNO0FBQy9GLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixnQkFBZ0I7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwyRUFBMkUsZ0JBQWdCO0FBQzNGO0FBQ0EsbUNBQW1DLDhCQUE4QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsUUFBUSw2RUFBNkU7QUFDeEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQkFBZ0IsRUFBRSxjQUFjO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsUUFBUSw4RUFBOEU7QUFDakw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxnQkFBZ0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxvRkFBb0YsaUJBQWlCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNVO0FBQ047QUFDSDtBQUNRO0FBQ1I7QUFDSTtBQUNFO0FBQ1k7QUFDSDtBQUN6RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQztBQUNiO0FBQ1E7QUFDRDtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQkFBc0IsS0FBSyxnQkFBZ0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDWjtBQUNOO0FBQ2I7QUFDekI7QUFDQTtBQUNPLHdCQUF3QixrRUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0Q0FBNEM7QUFDMUQsSUFBSSxvQkFBb0I7QUFDeEI7QUFDTyx5QkFBeUIsa0VBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhDQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0dBQXNHLFlBQVk7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsWUFBWTtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0VBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsS0FBSyw2QkFBNkIsU0FBUztBQUN0SCxnQ0FBZ0MsaUNBQWlDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVyxNQUFNLFVBQVUsS0FBSyxXQUFXLElBQUksV0FBVyxNQUFNLGdCQUFnQjtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxNQUFNO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGlCQUFpQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLElBQUk7QUFDaEYsK0VBQStFLEtBQUs7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGVBQWU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHNDQUFzQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9DQUFvQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0NBQXNDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTSxTQUFTLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxNQUFNO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0JBQStCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtCQUFrQixlQUFlLEtBQUs7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBCQUEwQjtBQUM1QyxXQUFXLGdCQUFnQixJQUFJLGNBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0EsSUFBSTtBQUNKO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsVUFBVTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFMQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDeDhDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvaW50bC11dGlscy9saWIvc3JjL2RpZmYuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL2N1c3RvbS1jYXJkLWhlbHBlcnMvZGlzdC9pbmRleC5tLmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9hbmRyb2lkLXR2LWNhcmQudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9kZWZhdWx0S2V5cy50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2RlZmF1bHRTb3VyY2VzLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvZW51bXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9lbnVtcy9zdmcudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2ludGVyZmFjZXMvSUNvbmZpZy50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2ludGVyZmFjZXMvSUN1c3RvbUFjdGlvbi50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2ludGVyZmFjZXMvSUtleS50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2ludGVyZmFjZXMvSVNlcnZpY2VEYXRhLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9JU291cmNlLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2Nzcy10YWcuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9ldmVudC1vcHRpb25zLmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYWxsLmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtbm9kZXMuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzeW5jLmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9yZWFjdGl2ZS1lbGVtZW50LmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9kZXZlbG9wbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvZGV2ZWxvcG1lbnQvbGl0LWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2xpdC1odG1sLmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIE1TX1BFUl9TRUNPTkQgPSAxZTM7XG52YXIgU0VDU19QRVJfTUlOID0gNjA7XG52YXIgU0VDU19QRVJfSE9VUiA9IFNFQ1NfUEVSX01JTiAqIDYwO1xudmFyIFNFQ1NfUEVSX0RBWSA9IFNFQ1NfUEVSX0hPVVIgKiAyNDtcbnZhciBTRUNTX1BFUl9XRUVLID0gU0VDU19QRVJfREFZICogNztcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RVbml0KGZyb20sIHRvLCB0aHJlc2hvbGRzKSB7XG4gICAgaWYgKHRvID09PSB2b2lkIDApIHsgdG8gPSBEYXRlLm5vdygpOyB9XG4gICAgaWYgKHRocmVzaG9sZHMgPT09IHZvaWQgMCkgeyB0aHJlc2hvbGRzID0ge307IH1cbiAgICB2YXIgcmVzb2x2ZWRUaHJlc2hvbGRzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfVEhSRVNIT0xEUyksICh0aHJlc2hvbGRzIHx8IHt9KSk7XG4gICAgdmFyIHNlY3MgPSAoK2Zyb20gLSArdG8pIC8gTVNfUEVSX1NFQ09ORDtcbiAgICBpZiAoTWF0aC5hYnMoc2VjcykgPCByZXNvbHZlZFRocmVzaG9sZHMuc2Vjb25kKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogTWF0aC5yb3VuZChzZWNzKSxcbiAgICAgICAgICAgIHVuaXQ6ICdzZWNvbmQnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgbWlucyA9IHNlY3MgLyBTRUNTX1BFUl9NSU47XG4gICAgaWYgKE1hdGguYWJzKG1pbnMpIDwgcmVzb2x2ZWRUaHJlc2hvbGRzLm1pbnV0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IE1hdGgucm91bmQobWlucyksXG4gICAgICAgICAgICB1bml0OiAnbWludXRlJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGhvdXJzID0gc2VjcyAvIFNFQ1NfUEVSX0hPVVI7XG4gICAgaWYgKE1hdGguYWJzKGhvdXJzKSA8IHJlc29sdmVkVGhyZXNob2xkcy5ob3VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogTWF0aC5yb3VuZChob3VycyksXG4gICAgICAgICAgICB1bml0OiAnaG91cicsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBkYXlzID0gc2VjcyAvIFNFQ1NfUEVSX0RBWTtcbiAgICBpZiAoTWF0aC5hYnMoZGF5cykgPCByZXNvbHZlZFRocmVzaG9sZHMuZGF5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogTWF0aC5yb3VuZChkYXlzKSxcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgZnJvbURhdGUgPSBuZXcgRGF0ZShmcm9tKTtcbiAgICB2YXIgdG9EYXRlID0gbmV3IERhdGUodG8pO1xuICAgIHZhciB5ZWFycyA9IGZyb21EYXRlLmdldEZ1bGxZZWFyKCkgLSB0b0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBpZiAoTWF0aC5yb3VuZChNYXRoLmFicyh5ZWFycykpID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IE1hdGgucm91bmQoeWVhcnMpLFxuICAgICAgICAgICAgdW5pdDogJ3llYXInLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgbW9udGhzID0geWVhcnMgKiAxMiArIGZyb21EYXRlLmdldE1vbnRoKCkgLSB0b0RhdGUuZ2V0TW9udGgoKTtcbiAgICBpZiAoTWF0aC5yb3VuZChNYXRoLmFicyhtb250aHMpKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBNYXRoLnJvdW5kKG1vbnRocyksXG4gICAgICAgICAgICB1bml0OiAnbW9udGgnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgd2Vla3MgPSBzZWNzIC8gU0VDU19QRVJfV0VFSztcbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogTWF0aC5yb3VuZCh3ZWVrcyksXG4gICAgICAgIHVuaXQ6ICd3ZWVrJyxcbiAgICB9O1xufVxuZXhwb3J0IHZhciBERUZBVUxUX1RIUkVTSE9MRFMgPSB7XG4gICAgc2Vjb25kOiA0NSxcbiAgICBtaW51dGU6IDQ1LFxuICAgIGhvdXI6IDIyLFxuICAgIGRheTogNSxcbn07XG4iLCJpbXBvcnR7c2VsZWN0VW5pdCBhcyBlfWZyb21cIkBmb3JtYXRqcy9pbnRsLXV0aWxzXCI7dmFyIHQscixuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGkodCkuZm9ybWF0KGUpfSxpPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChlLmxhbmd1YWdlLHt3ZWVrZGF5OlwibG9uZ1wiLG1vbnRoOlwibG9uZ1wiLGRheTpcIm51bWVyaWNcIn0pfSxhPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG8odCkuZm9ybWF0KGUpfSxvPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChlLmxhbmd1YWdlLHt5ZWFyOlwibnVtZXJpY1wiLG1vbnRoOlwibG9uZ1wiLGRheTpcIm51bWVyaWNcIn0pfSx1PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGModCkuZm9ybWF0KGUpfSxjPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChlLmxhbmd1YWdlLHt5ZWFyOlwibnVtZXJpY1wiLG1vbnRoOlwibnVtZXJpY1wiLGRheTpcIm51bWVyaWNcIn0pfSxtPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHModCkuZm9ybWF0KGUpfSxzPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChlLmxhbmd1YWdlLHtkYXk6XCJudW1lcmljXCIsbW9udGg6XCJzaG9ydFwifSl9LGw9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZCh0KS5mb3JtYXQoZSl9LGQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use21vbnRoOlwibG9uZ1wiLHllYXI6XCJudW1lcmljXCJ9KX0sZj1mdW5jdGlvbihlLHQpe3JldHVybiBnKHQpLmZvcm1hdChlKX0sZz1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoZS5sYW5ndWFnZSx7bW9udGg6XCJsb25nXCJ9KX0scD1mdW5jdGlvbihlLHQpe3JldHVybiBoKHQpLmZvcm1hdChlKX0saD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoZS5sYW5ndWFnZSx7eWVhcjpcIm51bWVyaWNcIn0pfTshZnVuY3Rpb24oZSl7ZS5sYW5ndWFnZT1cImxhbmd1YWdlXCIsZS5zeXN0ZW09XCJzeXN0ZW1cIixlLmNvbW1hX2RlY2ltYWw9XCJjb21tYV9kZWNpbWFsXCIsZS5kZWNpbWFsX2NvbW1hPVwiZGVjaW1hbF9jb21tYVwiLGUuc3BhY2VfY29tbWE9XCJzcGFjZV9jb21tYVwiLGUubm9uZT1cIm5vbmVcIn0odHx8KHQ9e30pKSxmdW5jdGlvbihlKXtlLmxhbmd1YWdlPVwibGFuZ3VhZ2VcIixlLnN5c3RlbT1cInN5c3RlbVwiLGUuYW1fcG09XCIxMlwiLGUudHdlbnR5X2ZvdXI9XCIyNFwifShyfHwocj17fSkpO3ZhciBiPWZ1bmN0aW9uKGUpe2lmKGUudGltZV9mb3JtYXQ9PT1yLmxhbmd1YWdlfHxlLnRpbWVfZm9ybWF0PT09ci5zeXN0ZW0pe3ZhciB0PWUudGltZV9mb3JtYXQ9PT1yLmxhbmd1YWdlP2UubGFuZ3VhZ2U6dm9pZCAwLG49KG5ldyBEYXRlKS50b0xvY2FsZVN0cmluZyh0KTtyZXR1cm4gbi5pbmNsdWRlcyhcIkFNXCIpfHxuLmluY2x1ZGVzKFwiUE1cIil9cmV0dXJuIGUudGltZV9mb3JtYXQ9PT1yLmFtX3BtfSx2PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIF8odCkuZm9ybWF0KGUpfSxfPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChlLmxhbmd1YWdlLHt5ZWFyOlwibnVtZXJpY1wiLG1vbnRoOlwibG9uZ1wiLGRheTpcIm51bWVyaWNcIixob3VyOmIoZSk/XCJudW1lcmljXCI6XCIyLWRpZ2l0XCIsbWludXRlOlwiMi1kaWdpdFwiLGhvdXIxMjpiKGUpfSl9LHk9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdyh0KS5mb3JtYXQoZSl9LHc9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use3llYXI6XCJudW1lcmljXCIsbW9udGg6XCJsb25nXCIsZGF5OlwibnVtZXJpY1wiLGhvdXI6YihlKT9cIm51bWVyaWNcIjpcIjItZGlnaXRcIixtaW51dGU6XCIyLWRpZ2l0XCIsc2Vjb25kOlwiMi1kaWdpdFwiLGhvdXIxMjpiKGUpfSl9LGs9ZnVuY3Rpb24oZSx0KXtyZXR1cm4geCh0KS5mb3JtYXQoZSl9LHg9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use3llYXI6XCJudW1lcmljXCIsbW9udGg6XCJudW1lcmljXCIsZGF5OlwibnVtZXJpY1wiLGhvdXI6XCJudW1lcmljXCIsbWludXRlOlwiMi1kaWdpdFwiLGhvdXIxMjpiKGUpfSl9LEQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUyh0KS5mb3JtYXQoZSl9LFM9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use2hvdXI6XCJudW1lcmljXCIsbWludXRlOlwiMi1kaWdpdFwiLGhvdXIxMjpiKGUpfSl9LEY9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gVCh0KS5mb3JtYXQoZSl9LFQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use2hvdXI6YihlKT9cIm51bWVyaWNcIjpcIjItZGlnaXRcIixtaW51dGU6XCIyLWRpZ2l0XCIsc2Vjb25kOlwiMi1kaWdpdFwiLGhvdXIxMjpiKGUpfSl9LEk9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gTih0KS5mb3JtYXQoZSl9LE49ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use2hvdXI6YihlKT9cIm51bWVyaWNcIjpcIjItZGlnaXRcIixtaW51dGU6XCIyLWRpZ2l0XCIsc2Vjb25kOlwiMi1kaWdpdFwiLGhvdXIxMjpiKGUpfSl9LE09ZnVuY3Rpb24odCxyLG4saSl7dm9pZCAwPT09aSYmKGk9ITApO3ZhciBhPWUodCxuKTtyZXR1cm4gaT9mdW5jdGlvbihlKXtyZXR1cm4gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use251bWVyaWM6XCJhdXRvXCJ9KX0ocikuZm9ybWF0KGEudmFsdWUsYS51bml0KTpJbnRsLk51bWJlckZvcm1hdChyLmxhbmd1YWdlLHtzdHlsZTpcInVuaXRcIix1bml0OmEudW5pdCx1bml0RGlzcGxheTpcImxvbmdcIn0pLmZvcm1hdChNYXRoLmFicyhhLnZhbHVlKSl9O2Z1bmN0aW9uIEMoZSl7dmFyIHQscj0zNjAwKih0PWUuYXR0cmlidXRlcy5yZW1haW5pbmcuc3BsaXQoXCI6XCIpLm1hcChOdW1iZXIpKVswXSs2MCp0WzFdK3RbMl07aWYoXCJhY3RpdmVcIj09PWUuc3RhdGUpe3ZhciBuPShuZXcgRGF0ZSkuZ2V0VGltZSgpLGk9bmV3IERhdGUoZS5sYXN0X2NoYW5nZWQpLmdldFRpbWUoKTtyPU1hdGgubWF4KHItKG4taSkvMWUzLDApfXJldHVybiByfWZ1bmN0aW9uIE8oKXtyZXR1cm4oTz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1hcmd1bWVudHNbdF07Zm9yKHZhciBuIGluIHIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsbikmJihlW25dPXJbbl0pfXJldHVybiBlfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBxPWZ1bmN0aW9uKGUsdCxyLG4pe3ZvaWQgMD09PW4mJihuPSExKSxlLl90aGVtZXN8fChlLl90aGVtZXM9e30pO3ZhciBpPXQuZGVmYXVsdF90aGVtZTsoXCJkZWZhdWx0XCI9PT1yfHxyJiZ0LnRoZW1lc1tyXSkmJihpPXIpO3ZhciBhPU8oe30sZS5fdGhlbWVzKTtpZihcImRlZmF1bHRcIiE9PWkpe3ZhciBvPXQudGhlbWVzW2ldO09iamVjdC5rZXlzKG8pLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIHI9XCItLVwiK3Q7ZS5fdGhlbWVzW3JdPVwiXCIsYVtyXT1vW3RdfSl9aWYoZS51cGRhdGVTdHlsZXM/ZS51cGRhdGVTdHlsZXMoYSk6d2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1Muc3R5bGVTdWJ0cmVlKGUsYSksbil7dmFyIHU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbbmFtZT10aGVtZS1jb2xvcl1cIik7aWYodSl7dS5oYXNBdHRyaWJ1dGUoXCJkZWZhdWx0LWNvbnRlbnRcIil8fHUuc2V0QXR0cmlidXRlKFwiZGVmYXVsdC1jb250ZW50XCIsdS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpKTt2YXIgYz1hW1wiLS1wcmltYXJ5LWNvbG9yXCJdfHx1LmdldEF0dHJpYnV0ZShcImRlZmF1bHQtY29udGVudFwiKTt1LnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIixjKX19fSxBPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUuZ2V0Q2FyZFNpemU/ZS5nZXRDYXJkU2l6ZSgpOjR9O2Z1bmN0aW9uIEUoZSl7cmV0dXJuIGUuc3Vic3RyKDAsZS5pbmRleE9mKFwiLlwiKSl9ZnVuY3Rpb24gaihlKXtyZXR1cm4gZS5zdWJzdHIoZS5pbmRleE9mKFwiLlwiKSsxKX1mdW5jdGlvbiBSKGUpe3ZhciB0LHI9KG51bGw9PWV8fG51bGw9PSh0PWUubG9jYWxlKT92b2lkIDA6dC5sYW5ndWFnZSl8fFwiZW5cIjtyZXR1cm4gZS50cmFuc2xhdGlvbk1ldGFkYXRhLnRyYW5zbGF0aW9uc1tyXSYmZS50cmFuc2xhdGlvbk1ldGFkYXRhLnRyYW5zbGF0aW9uc1tyXS5pc1JUTHx8ITF9ZnVuY3Rpb24geihlKXtyZXR1cm4gUihlKT9cInJ0bFwiOlwibHRyXCJ9ZnVuY3Rpb24gTChlKXtyZXR1cm4gRShlLmVudGl0eV9pZCl9dmFyIFA9ZnVuY3Rpb24oZSl7cmV0dXJuISFlLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudHx8ISFlLmF0dHJpYnV0ZXMuc3RhdGVfY2xhc3N9LFU9ZnVuY3Rpb24oZSl7c3dpdGNoKGUubnVtYmVyX2Zvcm1hdCl7Y2FzZSB0LmNvbW1hX2RlY2ltYWw6cmV0dXJuW1wiZW4tVVNcIixcImVuXCJdO2Nhc2UgdC5kZWNpbWFsX2NvbW1hOnJldHVybltcImRlXCIsXCJlc1wiLFwiaXRcIl07Y2FzZSB0LnNwYWNlX2NvbW1hOnJldHVybltcImZyXCIsXCJzdlwiLFwiY3NcIl07Y2FzZSB0LnN5c3RlbTpyZXR1cm47ZGVmYXVsdDpyZXR1cm4gZS5sYW5ndWFnZX19LEI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MiksTWF0aC5yb3VuZChlKk1hdGgucG93KDEwLHQpKS9NYXRoLnBvdygxMCx0KX0sSD1mdW5jdGlvbihlLHIsbil7dmFyIGk9cj9VKHIpOnZvaWQgMDtpZihOdW1iZXIuaXNOYU49TnVtYmVyLmlzTmFOfHxmdW5jdGlvbiBlKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0JiZlKHQpfSwobnVsbD09cj92b2lkIDA6ci5udW1iZXJfZm9ybWF0KSE9PXQubm9uZSYmIU51bWJlci5pc05hTihOdW1iZXIoZSkpJiZJbnRsKXRyeXtyZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGksVihlLG4pKS5mb3JtYXQoTnVtYmVyKGUpKX1jYXRjaCh0KXtyZXR1cm4gY29uc29sZS5lcnJvcih0KSxuZXcgSW50bC5OdW1iZXJGb3JtYXQodm9pZCAwLFYoZSxuKSkuZm9ybWF0KE51bWJlcihlKSl9cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/ZTpCKGUsbnVsbD09bj92b2lkIDA6bi5tYXhpbXVtRnJhY3Rpb25EaWdpdHMpLnRvU3RyaW5nKCkrKFwiY3VycmVuY3lcIj09PShudWxsPT1uP3ZvaWQgMDpuLnN0eWxlKT9cIiBcIituLmN1cnJlbmN5OlwiXCIpfSxWPWZ1bmN0aW9uKGUsdCl7dmFyIHI9Tyh7bWF4aW11bUZyYWN0aW9uRGlnaXRzOjJ9LHQpO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiByO2lmKCF0fHwhdC5taW5pbXVtRnJhY3Rpb25EaWdpdHMmJiF0Lm1heGltdW1GcmFjdGlvbkRpZ2l0cyl7dmFyIG49ZS5pbmRleE9mKFwiLlwiKT4tMT9lLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg6MDtyLm1pbmltdW1GcmFjdGlvbkRpZ2l0cz1uLHIubWF4aW11bUZyYWN0aW9uRGlnaXRzPW59cmV0dXJuIHJ9LFc9ZnVuY3Rpb24oZSx0LHIsbil7dmFyIGk9dm9pZCAwIT09bj9uOnQuc3RhdGU7aWYoXCJ1bmtub3duXCI9PT1pfHxcInVuYXZhaWxhYmxlXCI9PT1pKXJldHVybiBlKFwic3RhdGUuZGVmYXVsdC5cIitpKTtpZihQKHQpKXtpZihcIm1vbmV0YXJ5XCI9PT10LmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKXRyeXtyZXR1cm4gSChpLHIse3N0eWxlOlwiY3VycmVuY3lcIixjdXJyZW5jeTp0LmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudH0pfWNhdGNoKGUpe31yZXR1cm4gSChpLHIpKyh0LmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudD9cIiBcIit0LmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDpcIlwiKX12YXIgbz1MKHQpO2lmKFwiaW5wdXRfZGF0ZXRpbWVcIj09PW8pe3ZhciB1O2lmKHZvaWQgMD09PW4pcmV0dXJuIHQuYXR0cmlidXRlcy5oYXNfZGF0ZSYmdC5hdHRyaWJ1dGVzLmhhc190aW1lPyh1PW5ldyBEYXRlKHQuYXR0cmlidXRlcy55ZWFyLHQuYXR0cmlidXRlcy5tb250aC0xLHQuYXR0cmlidXRlcy5kYXksdC5hdHRyaWJ1dGVzLmhvdXIsdC5hdHRyaWJ1dGVzLm1pbnV0ZSksdih1LHIpKTp0LmF0dHJpYnV0ZXMuaGFzX2RhdGU/KHU9bmV3IERhdGUodC5hdHRyaWJ1dGVzLnllYXIsdC5hdHRyaWJ1dGVzLm1vbnRoLTEsdC5hdHRyaWJ1dGVzLmRheSksYSh1LHIpKTp0LmF0dHJpYnV0ZXMuaGFzX3RpbWU/KCh1PW5ldyBEYXRlKS5zZXRIb3Vycyh0LmF0dHJpYnV0ZXMuaG91cix0LmF0dHJpYnV0ZXMubWludXRlKSxEKHUscikpOnQuc3RhdGU7dHJ5e3ZhciBjPW4uc3BsaXQoXCIgXCIpO2lmKDI9PT1jLmxlbmd0aClyZXR1cm4gdihuZXcgRGF0ZShjLmpvaW4oXCJUXCIpKSxyKTtpZigxPT09Yy5sZW5ndGgpe2lmKG4uaW5jbHVkZXMoXCItXCIpKXJldHVybiBhKG5ldyBEYXRlKG4rXCJUMDA6MDBcIikscik7aWYobi5pbmNsdWRlcyhcIjpcIikpe3ZhciBtPW5ldyBEYXRlO3JldHVybiBEKG5ldyBEYXRlKG0udG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0rXCJUXCIrbikscil9fXJldHVybiBufWNhdGNoKGUpe3JldHVybiBufX1yZXR1cm5cImh1bWlkaWZpZXJcIj09PW8mJlwib25cIj09PWkmJnQuYXR0cmlidXRlcy5odW1pZGl0eT90LmF0dHJpYnV0ZXMuaHVtaWRpdHkrXCIgJVwiOlwiY291bnRlclwiPT09b3x8XCJudW1iZXJcIj09PW98fFwiaW5wdXRfbnVtYmVyXCI9PT1vP0goaSxyKTp0LmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzJiZlKFwiY29tcG9uZW50LlwiK28rXCIuc3RhdGUuXCIrdC5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcytcIi5cIitpKXx8ZShcImNvbXBvbmVudC5cIitvK1wiLnN0YXRlLl8uXCIraSl8fGl9LEc9XCJtZGk6Ym9va21hcmtcIixKPVwibG92ZWxhY2VcIixLPVtcImNsaW1hdGVcIixcImNvdmVyXCIsXCJjb25maWd1cmF0b3JcIixcImlucHV0X3NlbGVjdFwiLFwiaW5wdXRfbnVtYmVyXCIsXCJpbnB1dF90ZXh0XCIsXCJsb2NrXCIsXCJtZWRpYV9wbGF5ZXJcIixcInNjZW5lXCIsXCJzY3JpcHRcIixcInRpbWVyXCIsXCJ2YWN1dW1cIixcIndhdGVyX2hlYXRlclwiLFwid2VibGlua1wiXSxRPVtcImFsYXJtX2NvbnRyb2xfcGFuZWxcIixcImF1dG9tYXRpb25cIixcImNhbWVyYVwiLFwiY2xpbWF0ZVwiLFwiY29uZmlndXJhdG9yXCIsXCJjb3ZlclwiLFwiZmFuXCIsXCJncm91cFwiLFwiaGlzdG9yeV9ncmFwaFwiLFwiaW5wdXRfZGF0ZXRpbWVcIixcImxpZ2h0XCIsXCJsb2NrXCIsXCJtZWRpYV9wbGF5ZXJcIixcInNjcmlwdFwiLFwic3VuXCIsXCJ1cGRhdGVyXCIsXCJ2YWN1dW1cIixcIndhdGVyX2hlYXRlclwiLFwid2VhdGhlclwiXSxYPVtcImlucHV0X251bWJlclwiLFwiaW5wdXRfc2VsZWN0XCIsXCJpbnB1dF90ZXh0XCIsXCJzY2VuZVwiLFwid2VibGlua1wiXSxZPVtcImNhbWVyYVwiLFwiY29uZmlndXJhdG9yXCIsXCJoaXN0b3J5X2dyYXBoXCIsXCJzY2VuZVwiXSxaPVtcImNsb3NlZFwiLFwibG9ja2VkXCIsXCJvZmZcIl0sJD1uZXcgU2V0KFtcImZhblwiLFwiaW5wdXRfYm9vbGVhblwiLFwibGlnaHRcIixcInN3aXRjaFwiLFwiZ3JvdXBcIixcImF1dG9tYXRpb25cIl0pLGVlPVwiwrBDXCIsdGU9XCLCsEZcIixyZT1cImdyb3VwLmRlZmF1bHRfdmlld1wiLG5lPWZ1bmN0aW9uKGUsdCxyLG4pe249bnx8e30scj1udWxsPT1yP3t9OnI7dmFyIGk9bmV3IEV2ZW50KHQse2J1YmJsZXM6dm9pZCAwPT09bi5idWJibGVzfHxuLmJ1YmJsZXMsY2FuY2VsYWJsZTpCb29sZWFuKG4uY2FuY2VsYWJsZSksY29tcG9zZWQ6dm9pZCAwPT09bi5jb21wb3NlZHx8bi5jb21wb3NlZH0pO3JldHVybiBpLmRldGFpbD1yLGUuZGlzcGF0Y2hFdmVudChpKSxpfSxpZT1uZXcgU2V0KFtcImNhbGwtc2VydmljZVwiLFwiZGl2aWRlclwiLFwic2VjdGlvblwiLFwid2VibGlua1wiLFwiY2FzdFwiLFwic2VsZWN0XCJdKSxhZT17YWxlcnQ6XCJ0b2dnbGVcIixhdXRvbWF0aW9uOlwidG9nZ2xlXCIsY2xpbWF0ZTpcImNsaW1hdGVcIixjb3ZlcjpcImNvdmVyXCIsZmFuOlwidG9nZ2xlXCIsZ3JvdXA6XCJncm91cFwiLGlucHV0X2Jvb2xlYW46XCJ0b2dnbGVcIixpbnB1dF9udW1iZXI6XCJpbnB1dC1udW1iZXJcIixpbnB1dF9zZWxlY3Q6XCJpbnB1dC1zZWxlY3RcIixpbnB1dF90ZXh0OlwiaW5wdXQtdGV4dFwiLGxpZ2h0OlwidG9nZ2xlXCIsbG9jazpcImxvY2tcIixtZWRpYV9wbGF5ZXI6XCJtZWRpYS1wbGF5ZXJcIixyZW1vdGU6XCJ0b2dnbGVcIixzY2VuZTpcInNjZW5lXCIsc2NyaXB0Olwic2NyaXB0XCIsc2Vuc29yOlwic2Vuc29yXCIsdGltZXI6XCJ0aW1lclwiLHN3aXRjaDpcInRvZ2dsZVwiLHZhY3V1bTpcInRvZ2dsZVwiLHdhdGVyX2hlYXRlcjpcImNsaW1hdGVcIixpbnB1dF9kYXRldGltZTpcImlucHV0LWRhdGV0aW1lXCJ9LG9lPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9ITEpO3ZhciByPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4oXCJodWktZXJyb3ItY2FyZFwiLHt0eXBlOlwiZXJyb3JcIixlcnJvcjplLGNvbmZpZzp0fSl9LG49ZnVuY3Rpb24oZSx0KXt2YXIgbj13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTt0cnl7aWYoIW4uc2V0Q29uZmlnKXJldHVybjtuLnNldENvbmZpZyh0KX1jYXRjaChuKXtyZXR1cm4gY29uc29sZS5lcnJvcihlLG4pLHIobi5tZXNzYWdlLHQpfXJldHVybiBufTtpZighZXx8XCJvYmplY3RcIiE9dHlwZW9mIGV8fCF0JiYhZS50eXBlKXJldHVybiByKFwiTm8gdHlwZSBkZWZpbmVkXCIsZSk7dmFyIGk9ZS50eXBlO2lmKGkmJmkuc3RhcnRzV2l0aChcImN1c3RvbTpcIikpaT1pLnN1YnN0cihcImN1c3RvbTpcIi5sZW5ndGgpO2Vsc2UgaWYodClpZihpZS5oYXMoaSkpaT1cImh1aS1cIitpK1wiLXJvd1wiO2Vsc2V7aWYoIWUuZW50aXR5KXJldHVybiByKFwiSW52YWxpZCBjb25maWcgZ2l2ZW4uXCIsZSk7dmFyIGE9ZS5lbnRpdHkuc3BsaXQoXCIuXCIsMSlbMF07aT1cImh1aS1cIisoYWVbYV18fFwidGV4dFwiKStcIi1lbnRpdHktcm93XCJ9ZWxzZSBpPVwiaHVpLVwiK2krXCItY2FyZFwiO2lmKGN1c3RvbUVsZW1lbnRzLmdldChpKSlyZXR1cm4gbihpLGUpO3ZhciBvPXIoXCJDdXN0b20gZWxlbWVudCBkb2Vzbid0IGV4aXN0OiBcIitlLnR5cGUrXCIuXCIsZSk7by5zdHlsZS5kaXNwbGF5PVwiTm9uZVwiO3ZhciB1PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvLnN0eWxlLmRpc3BsYXk9XCJcIn0sMmUzKTtyZXR1cm4gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoZS50eXBlKS50aGVuKGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHUpLG5lKG8sXCJsbC1yZWJ1aWxkXCIse30sbyl9KSxvfSx1ZT1mdW5jdGlvbihlLHQscil7dmFyIG47cmV0dXJuIHZvaWQgMD09PXImJihyPSExKSxmdW5jdGlvbigpe3ZhciBpPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxhPXRoaXMsbz1mdW5jdGlvbigpe249bnVsbCxyfHxlLmFwcGx5KGEsaSl9LHU9ciYmIW47Y2xlYXJUaW1lb3V0KG4pLG49c2V0VGltZW91dChvLHQpLHUmJmUuYXBwbHkoYSxpKX19LGNlPXthbGVydDpcIm1kaTphbGVydFwiLGF1dG9tYXRpb246XCJtZGk6cGxheWxpc3QtcGxheVwiLGNhbGVuZGFyOlwibWRpOmNhbGVuZGFyXCIsY2FtZXJhOlwibWRpOnZpZGVvXCIsY2xpbWF0ZTpcIm1kaTp0aGVybW9zdGF0XCIsY29uZmlndXJhdG9yOlwibWRpOnNldHRpbmdzXCIsY29udmVyc2F0aW9uOlwibWRpOnRleHQtdG8tc3BlZWNoXCIsZGV2aWNlX3RyYWNrZXI6XCJtZGk6YWNjb3VudFwiLGZhbjpcIm1kaTpmYW5cIixncm91cDpcIm1kaTpnb29nbGUtY2lyY2xlcy1jb21tdW5pdGllc1wiLGhpc3RvcnlfZ3JhcGg6XCJtZGk6Y2hhcnQtbGluZVwiLGhvbWVhc3Npc3RhbnQ6XCJtZGk6aG9tZS1hc3Npc3RhbnRcIixob21la2l0OlwibWRpOmhvbWUtYXV0b21hdGlvblwiLGltYWdlX3Byb2Nlc3Npbmc6XCJtZGk6aW1hZ2UtZmlsdGVyLWZyYW1lc1wiLGlucHV0X2Jvb2xlYW46XCJtZGk6ZHJhd2luZ1wiLGlucHV0X2RhdGV0aW1lOlwibWRpOmNhbGVuZGFyLWNsb2NrXCIsaW5wdXRfbnVtYmVyOlwibWRpOnJheS12ZXJ0ZXhcIixpbnB1dF9zZWxlY3Q6XCJtZGk6Zm9ybWF0LWxpc3QtYnVsbGV0ZWRcIixpbnB1dF90ZXh0OlwibWRpOnRleHRib3hcIixsaWdodDpcIm1kaTpsaWdodGJ1bGJcIixtYWlsYm94OlwibWRpOm1haWxib3hcIixub3RpZnk6XCJtZGk6Y29tbWVudC1hbGVydFwiLHBlcnNvbjpcIm1kaTphY2NvdW50XCIscGxhbnQ6XCJtZGk6Zmxvd2VyXCIscHJveGltaXR5OlwibWRpOmFwcGxlLXNhZmFyaVwiLHJlbW90ZTpcIm1kaTpyZW1vdGVcIixzY2VuZTpcIm1kaTpnb29nbGUtcGFnZXNcIixzY3JpcHQ6XCJtZGk6ZmlsZS1kb2N1bWVudFwiLHNlbnNvcjpcIm1kaTpleWVcIixzaW1wbGVfYWxhcm06XCJtZGk6YmVsbFwiLHN1bjpcIm1kaTp3aGl0ZS1iYWxhbmNlLXN1bm55XCIsc3dpdGNoOlwibWRpOmZsYXNoXCIsdGltZXI6XCJtZGk6dGltZXJcIix1cGRhdGVyOlwibWRpOmNsb3VkLXVwbG9hZFwiLHZhY3V1bTpcIm1kaTpyb2JvdC12YWN1dW1cIix3YXRlcl9oZWF0ZXI6XCJtZGk6dGhlcm1vbWV0ZXJcIix3ZWJsaW5rOlwibWRpOm9wZW4taW4tbmV3XCJ9O2Z1bmN0aW9uIG1lKGUsdCl7aWYoZSBpbiBjZSlyZXR1cm4gY2VbZV07c3dpdGNoKGUpe2Nhc2VcImFsYXJtX2NvbnRyb2xfcGFuZWxcIjpzd2l0Y2godCl7Y2FzZVwiYXJtZWRfaG9tZVwiOnJldHVyblwibWRpOmJlbGwtcGx1c1wiO2Nhc2VcImFybWVkX25pZ2h0XCI6cmV0dXJuXCJtZGk6YmVsbC1zbGVlcFwiO2Nhc2VcImRpc2FybWVkXCI6cmV0dXJuXCJtZGk6YmVsbC1vdXRsaW5lXCI7Y2FzZVwidHJpZ2dlcmVkXCI6cmV0dXJuXCJtZGk6YmVsbC1yaW5nXCI7ZGVmYXVsdDpyZXR1cm5cIm1kaTpiZWxsXCJ9Y2FzZVwiYmluYXJ5X3NlbnNvclwiOnJldHVybiB0JiZcIm9mZlwiPT09dD9cIm1kaTpyYWRpb2JveC1ibGFua1wiOlwibWRpOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIjtjYXNlXCJjb3ZlclwiOnJldHVyblwiY2xvc2VkXCI9PT10P1wibWRpOndpbmRvdy1jbG9zZWRcIjpcIm1kaTp3aW5kb3ctb3BlblwiO2Nhc2VcImxvY2tcIjpyZXR1cm4gdCYmXCJ1bmxvY2tlZFwiPT09dD9cIm1kaTpsb2NrLW9wZW5cIjpcIm1kaTpsb2NrXCI7Y2FzZVwibWVkaWFfcGxheWVyXCI6cmV0dXJuIHQmJlwib2ZmXCIhPT10JiZcImlkbGVcIiE9PXQ/XCJtZGk6Y2FzdC1jb25uZWN0ZWRcIjpcIm1kaTpjYXN0XCI7Y2FzZVwiendhdmVcIjpzd2l0Y2godCl7Y2FzZVwiZGVhZFwiOnJldHVyblwibWRpOmVtb3RpY29uLWRlYWRcIjtjYXNlXCJzbGVlcGluZ1wiOnJldHVyblwibWRpOnNsZWVwXCI7Y2FzZVwiaW5pdGlhbGl6aW5nXCI6cmV0dXJuXCJtZGk6dGltZXItc2FuZFwiO2RlZmF1bHQ6cmV0dXJuXCJtZGk6ei13YXZlXCJ9ZGVmYXVsdDpyZXR1cm4gY29uc29sZS53YXJuKFwiVW5hYmxlIHRvIGZpbmQgaWNvbiBmb3IgZG9tYWluIFwiK2UrXCIgKFwiK3QrXCIpXCIpLFwibWRpOmJvb2ttYXJrXCJ9fXZhciBzZT1mdW5jdGlvbihlLHQpe3ZhciByPXQudmFsdWV8fHQsbj10LmF0dHJpYnV0ZT9lLmF0dHJpYnV0ZXNbdC5hdHRyaWJ1dGVdOmUuc3RhdGU7c3dpdGNoKHQub3BlcmF0b3J8fFwiPT1cIil7Y2FzZVwiPT1cIjpyZXR1cm4gbj09PXI7Y2FzZVwiPD1cIjpyZXR1cm4gbjw9cjtjYXNlXCI8XCI6cmV0dXJuIG48cjtjYXNlXCI+PVwiOnJldHVybiBuPj1yO2Nhc2VcIj5cIjpyZXR1cm4gbj5yO2Nhc2VcIiE9XCI6cmV0dXJuIG4hPT1yO2Nhc2VcInJlZ2V4XCI6cmV0dXJuIG4ubWF0Y2gocik7ZGVmYXVsdDpyZXR1cm4hMX19LGxlPWZ1bmN0aW9uKGUpe25lKHdpbmRvdyxcImhhcHRpY1wiLGUpfSxkZT1mdW5jdGlvbihlLHQscil7dm9pZCAwPT09ciYmKHI9ITEpLHI/aGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCxcIlwiLHQpOmhpc3RvcnkucHVzaFN0YXRlKG51bGwsXCJcIix0KSxuZSh3aW5kb3csXCJsb2NhdGlvbi1jaGFuZ2VkXCIse3JlcGxhY2U6cn0pfSxmZT1mdW5jdGlvbihlLHQscil7dm9pZCAwPT09ciYmKHI9ITApO3ZhciBuLGk9RSh0KSxhPVwiZ3JvdXBcIj09PWk/XCJob21lYXNzaXN0YW50XCI6aTtzd2l0Y2goaSl7Y2FzZVwibG9ja1wiOm49cj9cInVubG9ja1wiOlwibG9ja1wiO2JyZWFrO2Nhc2VcImNvdmVyXCI6bj1yP1wib3Blbl9jb3ZlclwiOlwiY2xvc2VfY292ZXJcIjticmVhaztkZWZhdWx0Om49cj9cInR1cm5fb25cIjpcInR1cm5fb2ZmXCJ9cmV0dXJuIGUuY2FsbFNlcnZpY2UoYSxuLHtlbnRpdHlfaWQ6dH0pfSxnZT1mdW5jdGlvbihlLHQpe3ZhciByPVouaW5jbHVkZXMoZS5zdGF0ZXNbdF0uc3RhdGUpO3JldHVybiBmZShlLHQscil9LHBlPWZ1bmN0aW9uKGUsdCxyLG4pe2lmKG58fChuPXthY3Rpb246XCJtb3JlLWluZm9cIn0pLCFuLmNvbmZpcm1hdGlvbnx8bi5jb25maXJtYXRpb24uZXhlbXB0aW9ucyYmbi5jb25maXJtYXRpb24uZXhlbXB0aW9ucy5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBlLnVzZXI9PT10LnVzZXIuaWR9KXx8KGxlKFwid2FybmluZ1wiKSxjb25maXJtKG4uY29uZmlybWF0aW9uLnRleHR8fFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIFwiK24uYWN0aW9uK1wiP1wiKSkpc3dpdGNoKG4uYWN0aW9uKXtjYXNlXCJtb3JlLWluZm9cIjooci5lbnRpdHl8fHIuY2FtZXJhX2ltYWdlKSYmbmUoZSxcImhhc3MtbW9yZS1pbmZvXCIse2VudGl0eUlkOnIuZW50aXR5P3IuZW50aXR5OnIuY2FtZXJhX2ltYWdlfSk7YnJlYWs7Y2FzZVwibmF2aWdhdGVcIjpuLm5hdmlnYXRpb25fcGF0aCYmZGUoMCxuLm5hdmlnYXRpb25fcGF0aCk7YnJlYWs7Y2FzZVwidXJsXCI6bi51cmxfcGF0aCYmd2luZG93Lm9wZW4obi51cmxfcGF0aCk7YnJlYWs7Y2FzZVwidG9nZ2xlXCI6ci5lbnRpdHkmJihnZSh0LHIuZW50aXR5KSxsZShcInN1Y2Nlc3NcIikpO2JyZWFrO2Nhc2VcImNhbGwtc2VydmljZVwiOmlmKCFuLnNlcnZpY2UpcmV0dXJuIHZvaWQgbGUoXCJmYWlsdXJlXCIpO3ZhciBpPW4uc2VydmljZS5zcGxpdChcIi5cIiwyKTt0LmNhbGxTZXJ2aWNlKGlbMF0saVsxXSxuLnNlcnZpY2VfZGF0YSxuLnRhcmdldCksbGUoXCJzdWNjZXNzXCIpO2JyZWFrO2Nhc2VcImZpcmUtZG9tLWV2ZW50XCI6bmUoZSxcImxsLWN1c3RvbVwiLG4pfX0saGU9ZnVuY3Rpb24oZSx0LHIsbil7dmFyIGk7XCJkb3VibGVfdGFwXCI9PT1uJiZyLmRvdWJsZV90YXBfYWN0aW9uP2k9ci5kb3VibGVfdGFwX2FjdGlvbjpcImhvbGRcIj09PW4mJnIuaG9sZF9hY3Rpb24/aT1yLmhvbGRfYWN0aW9uOlwidGFwXCI9PT1uJiZyLnRhcF9hY3Rpb24mJihpPXIudGFwX2FjdGlvbikscGUoZSx0LHIsaSl9LGJlPWZ1bmN0aW9uKGUsdCxyLG4saSl7dmFyIGE7aWYoaSYmci5kb3VibGVfdGFwX2FjdGlvbj9hPXIuZG91YmxlX3RhcF9hY3Rpb246biYmci5ob2xkX2FjdGlvbj9hPXIuaG9sZF9hY3Rpb246IW4mJnIudGFwX2FjdGlvbiYmKGE9ci50YXBfYWN0aW9uKSxhfHwoYT17YWN0aW9uOlwibW9yZS1pbmZvXCJ9KSwhYS5jb25maXJtYXRpb258fGEuY29uZmlybWF0aW9uLmV4ZW1wdGlvbnMmJmEuY29uZmlybWF0aW9uLmV4ZW1wdGlvbnMuc29tZShmdW5jdGlvbihlKXtyZXR1cm4gZS51c2VyPT09dC51c2VyLmlkfSl8fGNvbmZpcm0oYS5jb25maXJtYXRpb24udGV4dHx8XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gXCIrYS5hY3Rpb24rXCI/XCIpKXN3aXRjaChhLmFjdGlvbil7Y2FzZVwibW9yZS1pbmZvXCI6KGEuZW50aXR5fHxyLmVudGl0eXx8ci5jYW1lcmFfaW1hZ2UpJiYobmUoZSxcImhhc3MtbW9yZS1pbmZvXCIse2VudGl0eUlkOmEuZW50aXR5P2EuZW50aXR5OnIuZW50aXR5P3IuZW50aXR5OnIuY2FtZXJhX2ltYWdlfSksYS5oYXB0aWMmJmxlKGEuaGFwdGljKSk7YnJlYWs7Y2FzZVwibmF2aWdhdGVcIjphLm5hdmlnYXRpb25fcGF0aCYmKGRlKDAsYS5uYXZpZ2F0aW9uX3BhdGgpLGEuaGFwdGljJiZsZShhLmhhcHRpYykpO2JyZWFrO2Nhc2VcInVybFwiOmEudXJsX3BhdGgmJndpbmRvdy5vcGVuKGEudXJsX3BhdGgpLGEuaGFwdGljJiZsZShhLmhhcHRpYyk7YnJlYWs7Y2FzZVwidG9nZ2xlXCI6ci5lbnRpdHkmJihnZSh0LHIuZW50aXR5KSxhLmhhcHRpYyYmbGUoYS5oYXB0aWMpKTticmVhaztjYXNlXCJjYWxsLXNlcnZpY2VcIjppZighYS5zZXJ2aWNlKXJldHVybjt2YXIgbz1hLnNlcnZpY2Uuc3BsaXQoXCIuXCIsMiksdT1vWzBdLGM9b1sxXSxtPU8oe30sYS5zZXJ2aWNlX2RhdGEpO1wiZW50aXR5XCI9PT1tLmVudGl0eV9pZCYmKG0uZW50aXR5X2lkPXIuZW50aXR5KSx0LmNhbGxTZXJ2aWNlKHUsYyxtLGEudGFyZ2V0KSxhLmhhcHRpYyYmbGUoYS5oYXB0aWMpO2JyZWFrO2Nhc2VcImZpcmUtZG9tLWV2ZW50XCI6bmUoZSxcImxsLWN1c3RvbVwiLGEpLGEuaGFwdGljJiZsZShhLmhhcHRpYyl9fTtmdW5jdGlvbiB2ZShlKXtyZXR1cm4gdm9pZCAwIT09ZSYmXCJub25lXCIhPT1lLmFjdGlvbn1mdW5jdGlvbiBfZShlLHQscil7aWYodC5oYXMoXCJjb25maWdcIil8fHIpcmV0dXJuITA7aWYoZS5jb25maWcuZW50aXR5KXt2YXIgbj10LmdldChcImhhc3NcIik7cmV0dXJuIW58fG4uc3RhdGVzW2UuY29uZmlnLmVudGl0eV0hPT1lLmhhc3Muc3RhdGVzW2UuY29uZmlnLmVudGl0eV19cmV0dXJuITF9ZnVuY3Rpb24geWUoZSl7cmV0dXJuIHZvaWQgMCE9PWUmJlwibm9uZVwiIT09ZS5hY3Rpb259dmFyIHdlPWZ1bmN0aW9uKGUsdCxyKXt2b2lkIDA9PT1yJiYocj0hMCk7dmFyIG49e307dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFouaW5jbHVkZXMoZS5zdGF0ZXNbdF0uc3RhdGUpPT09cil7dmFyIGk9RSh0KSxhPVtcImNvdmVyXCIsXCJsb2NrXCJdLmluY2x1ZGVzKGkpP2k6XCJob21lYXNzaXN0YW50XCI7YSBpbiBufHwoblthXT1bXSksblthXS5wdXNoKHQpfX0pLE9iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGk7c3dpdGNoKHQpe2Nhc2VcImxvY2tcIjppPXI/XCJ1bmxvY2tcIjpcImxvY2tcIjticmVhaztjYXNlXCJjb3ZlclwiOmk9cj9cIm9wZW5fY292ZXJcIjpcImNsb3NlX2NvdmVyXCI7YnJlYWs7ZGVmYXVsdDppPXI/XCJ0dXJuX29uXCI6XCJ0dXJuX29mZlwifWUuY2FsbFNlcnZpY2UodCxpLHtlbnRpdHlfaWQ6blt0XX0pfSl9LGtlPWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhvbWUtYXNzaXN0YW50XCIpO2lmKGU9KGU9KGU9KGU9KGU9KGU9KGU9KGU9ZSYmZS5zaGFkb3dSb290KSYmZS5xdWVyeVNlbGVjdG9yKFwiaG9tZS1hc3Npc3RhbnQtbWFpblwiKSkmJmUuc2hhZG93Um9vdCkmJmUucXVlcnlTZWxlY3RvcihcImFwcC1kcmF3ZXItbGF5b3V0IHBhcnRpYWwtcGFuZWwtcmVzb2x2ZXJcIikpJiZlLnNoYWRvd1Jvb3R8fGUpJiZlLnF1ZXJ5U2VsZWN0b3IoXCJoYS1wYW5lbC1sb3ZlbGFjZVwiKSkmJmUuc2hhZG93Um9vdCkmJmUucXVlcnlTZWxlY3RvcihcImh1aS1yb290XCIpKXt2YXIgdD1lLmxvdmVsYWNlO3JldHVybiB0LmN1cnJlbnRfdmlldz1lLl9fX2N1clZpZXcsdH1yZXR1cm4gbnVsbH0seGU9e2h1bWlkaXR5OlwibWRpOndhdGVyLXBlcmNlbnRcIixpbGx1bWluYW5jZTpcIm1kaTpicmlnaHRuZXNzLTVcIix0ZW1wZXJhdHVyZTpcIm1kaTp0aGVybW9tZXRlclwiLHByZXNzdXJlOlwibWRpOmdhdWdlXCIscG93ZXI6XCJtZGk6Zmxhc2hcIixzaWduYWxfc3RyZW5ndGg6XCJtZGk6d2lmaVwifSxEZT17YmluYXJ5X3NlbnNvcjpmdW5jdGlvbihlLHQpe3ZhciByPVwib2ZmXCI9PT1lO3N3aXRjaChudWxsPT10P3ZvaWQgMDp0LmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKXtjYXNlXCJiYXR0ZXJ5XCI6cmV0dXJuIHI/XCJtZGk6YmF0dGVyeVwiOlwibWRpOmJhdHRlcnktb3V0bGluZVwiO2Nhc2VcImJhdHRlcnlfY2hhcmdpbmdcIjpyZXR1cm4gcj9cIm1kaTpiYXR0ZXJ5XCI6XCJtZGk6YmF0dGVyeS1jaGFyZ2luZ1wiO2Nhc2VcImNvbGRcIjpyZXR1cm4gcj9cIm1kaTp0aGVybW9tZXRlclwiOlwibWRpOnNub3dmbGFrZVwiO2Nhc2VcImNvbm5lY3Rpdml0eVwiOnJldHVybiByP1wibWRpOnNlcnZlci1uZXR3b3JrLW9mZlwiOlwibWRpOnNlcnZlci1uZXR3b3JrXCI7Y2FzZVwiZG9vclwiOnJldHVybiByP1wibWRpOmRvb3ItY2xvc2VkXCI6XCJtZGk6ZG9vci1vcGVuXCI7Y2FzZVwiZ2FyYWdlX2Rvb3JcIjpyZXR1cm4gcj9cIm1kaTpnYXJhZ2VcIjpcIm1kaTpnYXJhZ2Utb3BlblwiO2Nhc2VcInBvd2VyXCI6cmV0dXJuIHI/XCJtZGk6cG93ZXItcGx1Zy1vZmZcIjpcIm1kaTpwb3dlci1wbHVnXCI7Y2FzZVwiZ2FzXCI6Y2FzZVwicHJvYmxlbVwiOmNhc2VcInNhZmV0eVwiOmNhc2VcInRhbXBlclwiOnJldHVybiByP1wibWRpOmNoZWNrLWNpcmNsZVwiOlwibWRpOmFsZXJ0LWNpcmNsZVwiO2Nhc2VcInNtb2tlXCI6cmV0dXJuIHI/XCJtZGk6Y2hlY2stY2lyY2xlXCI6XCJtZGk6c21va2VcIjtjYXNlXCJoZWF0XCI6cmV0dXJuIHI/XCJtZGk6dGhlcm1vbWV0ZXJcIjpcIm1kaTpmaXJlXCI7Y2FzZVwibGlnaHRcIjpyZXR1cm4gcj9cIm1kaTpicmlnaHRuZXNzLTVcIjpcIm1kaTpicmlnaHRuZXNzLTdcIjtjYXNlXCJsb2NrXCI6cmV0dXJuIHI/XCJtZGk6bG9ja1wiOlwibWRpOmxvY2stb3BlblwiO2Nhc2VcIm1vaXN0dXJlXCI6cmV0dXJuIHI/XCJtZGk6d2F0ZXItb2ZmXCI6XCJtZGk6d2F0ZXJcIjtjYXNlXCJtb3Rpb25cIjpyZXR1cm4gcj9cIm1kaTp3YWxrXCI6XCJtZGk6cnVuXCI7Y2FzZVwib2NjdXBhbmN5XCI6cmV0dXJuIHI/XCJtZGk6aG9tZS1vdXRsaW5lXCI6XCJtZGk6aG9tZVwiO2Nhc2VcIm9wZW5pbmdcIjpyZXR1cm4gcj9cIm1kaTpzcXVhcmVcIjpcIm1kaTpzcXVhcmUtb3V0bGluZVwiO2Nhc2VcInBsdWdcIjpyZXR1cm4gcj9cIm1kaTpwb3dlci1wbHVnLW9mZlwiOlwibWRpOnBvd2VyLXBsdWdcIjtjYXNlXCJwcmVzZW5jZVwiOnJldHVybiByP1wibWRpOmhvbWUtb3V0bGluZVwiOlwibWRpOmhvbWVcIjtjYXNlXCJydW5uaW5nXCI6cmV0dXJuIHI/XCJtZGk6c3RvcFwiOlwibWRpOnBsYXlcIjtjYXNlXCJzb3VuZFwiOnJldHVybiByP1wibWRpOm11c2ljLW5vdGUtb2ZmXCI6XCJtZGk6bXVzaWMtbm90ZVwiO2Nhc2VcInVwZGF0ZVwiOnJldHVybiByP1wibWRpOnBhY2thZ2VcIjpcIm1kaTpwYWNrYWdlLXVwXCI7Y2FzZVwidmlicmF0aW9uXCI6cmV0dXJuIHI/XCJtZGk6Y3JvcC1wb3J0cmFpdFwiOlwibWRpOnZpYnJhdGVcIjtjYXNlXCJ3aW5kb3dcIjpyZXR1cm4gcj9cIm1kaTp3aW5kb3ctY2xvc2VkXCI6XCJtZGk6d2luZG93LW9wZW5cIjtkZWZhdWx0OnJldHVybiByP1wibWRpOnJhZGlvYm94LWJsYW5rXCI6XCJtZGk6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwifX0sY292ZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJjbG9zZWRcIiE9PWUuc3RhdGU7c3dpdGNoKGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3Mpe2Nhc2VcImdhcmFnZVwiOnJldHVybiB0P1wibWRpOmdhcmFnZS1vcGVuXCI6XCJtZGk6Z2FyYWdlXCI7Y2FzZVwiZG9vclwiOnJldHVybiB0P1wibWRpOmRvb3Itb3BlblwiOlwibWRpOmRvb3ItY2xvc2VkXCI7Y2FzZVwic2h1dHRlclwiOnJldHVybiB0P1wibWRpOndpbmRvdy1zaHV0dGVyLW9wZW5cIjpcIm1kaTp3aW5kb3ctc2h1dHRlclwiO2Nhc2VcImJsaW5kXCI6cmV0dXJuIHQ/XCJtZGk6YmxpbmRzLW9wZW5cIjpcIm1kaTpibGluZHNcIjtjYXNlXCJ3aW5kb3dcIjpyZXR1cm4gdD9cIm1kaTp3aW5kb3ctb3BlblwiOlwibWRpOndpbmRvdy1jbG9zZWRcIjtkZWZhdWx0OnJldHVybiBtZShcImNvdmVyXCIsZS5zdGF0ZSl9fSxzZW5zb3I6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcztpZih0JiZ0IGluIHhlKXJldHVybiB4ZVt0XTtpZihcImJhdHRlcnlcIj09PXQpe3ZhciByPU51bWJlcihlLnN0YXRlKTtpZihpc05hTihyKSlyZXR1cm5cIm1kaTpiYXR0ZXJ5LXVua25vd25cIjt2YXIgbj0xMCpNYXRoLnJvdW5kKHIvMTApO3JldHVybiBuPj0xMDA/XCJtZGk6YmF0dGVyeVwiOm48PTA/XCJtZGk6YmF0dGVyeS1hbGVydFwiOlwiaGFzczpiYXR0ZXJ5LVwiK259dmFyIGk9ZS5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQ7cmV0dXJuXCLCsENcIj09PWl8fFwiwrBGXCI9PT1pP1wibWRpOnRoZXJtb21ldGVyXCI6bWUoXCJzZW5zb3JcIil9LGlucHV0X2RhdGV0aW1lOmZ1bmN0aW9uKGUpe3JldHVybiBlLmF0dHJpYnV0ZXMuaGFzX2RhdGU/ZS5hdHRyaWJ1dGVzLmhhc190aW1lP21lKFwiaW5wdXRfZGF0ZXRpbWVcIik6XCJtZGk6Y2FsZW5kYXJcIjpcIm1kaTpjbG9ja1wifX0sU2U9ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuXCJtZGk6Ym9va21hcmtcIjtpZihlLmF0dHJpYnV0ZXMuaWNvbilyZXR1cm4gZS5hdHRyaWJ1dGVzLmljb247dmFyIHQ9RShlLmVudGl0eV9pZCk7cmV0dXJuIHQgaW4gRGU/RGVbdF0oZSk6bWUodCxlLnN0YXRlKX07ZXhwb3J0e0cgYXMgREVGQVVMVF9ET01BSU5fSUNPTixKIGFzIERFRkFVTFRfUEFORUwscmUgYXMgREVGQVVMVF9WSUVXX0VOVElUWV9JRCxYIGFzIERPTUFJTlNfSElERV9NT1JFX0lORk8sWSBhcyBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZLCQgYXMgRE9NQUlOU19UT0dHTEUsSyBhcyBET01BSU5TX1dJVEhfQ0FSRCxRIGFzIERPTUFJTlNfV0lUSF9NT1JFX0lORk8sdCBhcyBOdW1iZXJGb3JtYXQsWiBhcyBTVEFURVNfT0ZGLHIgYXMgVGltZUZvcm1hdCxlZSBhcyBVTklUX0MsdGUgYXMgVU5JVF9GLHEgYXMgYXBwbHlUaGVtZXNPbkVsZW1lbnQsQSBhcyBjb21wdXRlQ2FyZFNpemUsRSBhcyBjb21wdXRlRG9tYWluLGogYXMgY29tcHV0ZUVudGl0eSxSIGFzIGNvbXB1dGVSVEwseiBhcyBjb21wdXRlUlRMRGlyZWN0aW9uLFcgYXMgY29tcHV0ZVN0YXRlRGlzcGxheSxMIGFzIGNvbXB1dGVTdGF0ZURvbWFpbixvZSBhcyBjcmVhdGVUaGluZyx1ZSBhcyBkZWJvdW5jZSxtZSBhcyBkb21haW5JY29uLHNlIGFzIGV2YWx1YXRlRmlsdGVyLG5lIGFzIGZpcmVFdmVudCxjZSBhcyBmaXhlZEljb25zLGEgYXMgZm9ybWF0RGF0ZSxmIGFzIGZvcm1hdERhdGVNb250aCxsIGFzIGZvcm1hdERhdGVNb250aFllYXIsdSBhcyBmb3JtYXREYXRlTnVtZXJpYyxtIGFzIGZvcm1hdERhdGVTaG9ydCx2IGFzIGZvcm1hdERhdGVUaW1lLGsgYXMgZm9ybWF0RGF0ZVRpbWVOdW1lcmljLHkgYXMgZm9ybWF0RGF0ZVRpbWVXaXRoU2Vjb25kcyxuIGFzIGZvcm1hdERhdGVXZWVrZGF5LHAgYXMgZm9ybWF0RGF0ZVllYXIsSCBhcyBmb3JtYXROdW1iZXIsRCBhcyBmb3JtYXRUaW1lLEkgYXMgZm9ybWF0VGltZVdlZWtkYXksRiBhcyBmb3JtYXRUaW1lV2l0aFNlY29uZHMsbGUgYXMgZm9yd2FyZEhhcHRpYyxrZSBhcyBnZXRMb3ZlbGFjZSxoZSBhcyBoYW5kbGVBY3Rpb24scGUgYXMgaGFuZGxlQWN0aW9uQ29uZmlnLGJlIGFzIGhhbmRsZUNsaWNrLHZlIGFzIGhhc0FjdGlvbixfZSBhcyBoYXNDb25maWdPckVudGl0eUNoYW5nZWQseWUgYXMgaGFzRG91YmxlQ2xpY2ssUCBhcyBpc051bWVyaWNTdGF0ZSxkZSBhcyBuYXZpZ2F0ZSxVIGFzIG51bWJlckZvcm1hdFRvTG9jYWxlLE0gYXMgcmVsYXRpdmVUaW1lLEIgYXMgcm91bmQsU2UgYXMgc3RhdGVJY29uLEMgYXMgdGltZXJUaW1lUmVtYWluaW5nLGdlIGFzIHRvZ2dsZUVudGl0eSx3ZSBhcyB0dXJuT25PZmZFbnRpdGllcyxmZSBhcyB0dXJuT25PZmZFbnRpdHl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsaXRfZWxlbWVudF8xID0gcmVxdWlyZShcImxpdC1lbGVtZW50XCIpO1xuY29uc3QgY3VzdG9tX2NhcmRfaGVscGVyc18xID0gcmVxdWlyZShcImN1c3RvbS1jYXJkLWhlbHBlcnNcIik7XG5jb25zdCBtb2RlbHNfMSA9IHJlcXVpcmUoXCIuL21vZGVsc1wiKTtcbmNvbnNvbGUuaW5mbyhgJWMgQU5EUk9JRC1UVi1DQVJEYCwgJ2NvbG9yOiB3aGl0ZTsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJhY2tncm91bmQ6IGdyZWVuJyk7XG5jb25zdCBIQUVsZW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1wYW5lbC1sb3ZlbGFjZScpKTtcbndpbmRvdy5jdXN0b21DYXJkcyA9IHdpbmRvdy5jdXN0b21DYXJkcyB8fCBbXTtcbndpbmRvdy5jdXN0b21DYXJkcy5wdXNoKHtcbiAgICB0eXBlOiAnYW5kcm9pZC10di1jYXJkJyxcbiAgICBuYW1lOiAnQW5kcm9pZCBUViBDYXJkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlbW90ZSBmb3IgQW5kcm9pZCBUVicsXG59KTtcbmNsYXNzIEFuZHJvaWRUVkNhcmQgZXh0ZW5kcyBIQUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRlZmF1bHRLZXlzID0gbW9kZWxzXzEuZGVmYXVsdEtleXM7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNvdXJjZXMgPSBtb2RlbHNfMS5kZWZhdWx0U291cmNlcztcbiAgICAgICAgdGhpcy5jdXN0b21LZXlzID0ge307XG4gICAgICAgIHRoaXMuY3VzdG9tU291cmNlcyA9IHt9O1xuICAgICAgICB0aGlzLmN1c3RvbUljb25zID0ge307XG4gICAgICAgIHRoaXMuY2xpY2tUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xpY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudG91Y2hBY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy50b3VjaFRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3VjaEludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3VjaExvbmdDbGljayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhvbGRBY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5ob2xkVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmhvbGRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuaG9sZExvbmdDbGljayA9IGZhbHNlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBfaGFzczoge30sXG4gICAgICAgICAgICBfY29uZmlnOiB7fSxcbiAgICAgICAgICAgIF9hcHBzOiB7fSxcbiAgICAgICAgICAgIHRyaWdnZXI6IHt9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0U3R1YkNvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBnZXRDYXJkU2l6ZSgpIHtcbiAgICAgICAgbGV0IG51bVJvd3MgPSBPYmplY3Qua2V5cyh0aGlzLl9jb25maWcpLmZpbHRlcigoa2V5KSA9PiBrZXkuaW5jbHVkZXMoJ19yb3cnKSkubGVuZ3RoO1xuICAgICAgICBpZiAoJ3RpdGxlJyBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgICAgICAgIG51bVJvd3MgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtUm93cztcbiAgICB9XG4gICAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7IHRoZW1lOiAnZGVmYXVsdCcgfSwgY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tS2V5cyA9IGNvbmZpZy5jdXN0b21fa2V5cyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tU291cmNlcyA9IGNvbmZpZy5jdXN0b21fc291cmNlcyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tSWNvbnMgPSBjb25maWcuY3VzdG9tX2ljb25zIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0S2V5cyA9IG1vZGVsc18xLmRlZmF1bHRLZXlzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0U291cmNlcyA9IG1vZGVsc18xLmRlZmF1bHRTb3VyY2VzO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hbHRfdm9sdW1lX2ljb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VBbHRWb2x1bWVJY29ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgdGhpcy5sb2FkQ2FyZEhlbHBlcnMoKTtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMubG9hZEhhc3NIZWxwZXJzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLnZvbHVtZV9yb3cgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnJlbmRlclZvbHVtZVNsaWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0J1dHRvbkVuYWJsZWQocm93LCBidXR0b24pIHtcbiAgICAgICAgcmV0dXJuIChyb3cuaW5jbHVkZXMoJ19yb3cnKSAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnW3Jvd10uaW5jbHVkZXMoYnV0dG9uKSk7XG4gICAgfVxuICAgIHNldCBoYXNzKGhhc3MpIHtcbiAgICAgICAgdGhpcy5faGFzcyA9IGhhc3M7XG4gICAgICAgIGlmICh0aGlzLnZvbHVtZV9zbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5oYXNzID0gaGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faGFzc1Jlc29sdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc3NSZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGhhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNzO1xuICAgIH1cbiAgICBsb2FkQ2FyZEhlbHBlcnMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9oZWxwZXJzID0geWllbGQgd2luZG93LmxvYWRDYXJkSGVscGVycygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hlbHBlcnNSZXNvbHZlKVxuICAgICAgICAgICAgICAgIHRoaXMuX2hlbHBlcnNSZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkSGFzc0hlbHBlcnMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faGVscGVycyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiAodGhpcy5faGVscGVyc1Jlc29sdmUgPSByZXNvbHZlKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5faGFzcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiAodGhpcy5faGFzc1Jlc29sdmUgPSByZXNvbHZlKSk7XG4gICAgICAgICAgICB0aGlzLl9oZWxwZXJzUmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuX2hhc3NSZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHdpbmRvdywgdHlwZSwgZGV0YWlsKSB7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgICAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBlLmRldGFpbCA9IGRldGFpbDtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBmaXJlSGFwdGljRXZlbnQod2luZG93LCBkZXRhaWwpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5lbmFibGVfYnV0dG9uX2ZlZWRiYWNrID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5lbmFibGVfYnV0dG9uX2ZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVFdmVudCh3aW5kb3csICdoYXB0aWMnLCBkZXRhaWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlclZvbHVtZVNsaWRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCBzbGlkZXJfY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjdXN0b206bXktc2xpZGVyJyxcbiAgICAgICAgICAgICAgICBlbnRpdHk6IHRoaXMuX2NvbmZpZy5tZWRpYV9wbGF5ZXJfaWQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgICAgICAgbWFpblNsaWRlckNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeVNsaWRlckNvbG9yOiAncmdiKDYwLCA2MCwgNjApJyxcbiAgICAgICAgICAgICAgICBtYWluU2xpZGVyQ29sb3JPZmY6ICdyZ2IoNjAsIDYwLCA2MCknLFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeVNsaWRlckNvbG9yT2ZmOiAncmdiKDYwLCA2MCwgNjApJyxcbiAgICAgICAgICAgICAgICB0aHVtYldpZHRoOiAnMHB4JyxcbiAgICAgICAgICAgICAgICB0aHVtYkhvcml6b250YWxQYWRkaW5nOiAnMHB4JyxcbiAgICAgICAgICAgICAgICByYWRpdXM6ICcyNXB4JyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLnNsaWRlcl9jb25maWcgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBzbGlkZXJfY29uZmlnID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzbGlkZXJfY29uZmlnKSwgdGhpcy5fY29uZmlnLnNsaWRlcl9jb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy52b2x1bWVfc2xpZGVyID0gYXdhaXQgdGhpcy5faGVscGVycy5jcmVhdGVDYXJkRWxlbWVudChzbGlkZXJfY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlciA9IHlpZWxkICgwLCBjdXN0b21fY2FyZF9oZWxwZXJzXzEuY3JlYXRlVGhpbmcpKHNsaWRlcl9jb25maWcpO1xuICAgICAgICAgICAgLy8gdGhpcy52b2x1bWVfc2xpZGVyLnN0eWxlID0gJ2ZsZXg6IDAuOTsnO1xuICAgICAgICAgICAgdGhpcy52b2x1bWVfc2xpZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmxleDogMC45OycpO1xuICAgICAgICAgICAgdGhpcy52b2x1bWVfc2xpZGVyLm9udG91Y2hzdGFydCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVIYXB0aWNFdmVudCh3aW5kb3csICdsaWdodCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChfZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZUhhcHRpY0V2ZW50KHdpbmRvdywgJ2xpZ2h0Jyk7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5oYXNzID0gdGhpcy5faGFzcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVzZUFsdFZvbHVtZUljb25zKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRLZXlzLnZvbHVtZV91cC5pY29uID0gJ21kaTp2b2x1bWUtaGlnaCc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEtleXMudm9sdW1lX2Rvd24uaWNvbiA9ICdtZGk6dm9sdW1lLW1lZGl1bSc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEtleXMudm9sdW1lX211dGUuaWNvbiA9ICdtZGk6dm9sdW1lLXZhcmlhbnQtb2ZmJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBjb21tYW5kIHRvIGFuIEFuZHJvaWQgVFYgcmVtb3RlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqL1xuICAgIHNlbmRLZXkoa2V5LCBsb25nUHJlc3MgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcucmVtb3RlX2lkLFxuICAgICAgICAgICAgY29tbWFuZDoga2V5LFxuICAgICAgICB9O1xuICAgICAgICBpZiAobG9uZ1ByZXNzKSB7XG4gICAgICAgICAgICBkYXRhLmhvbGRfc2VjcyA9IDAuNTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdyZW1vdGUnLCAnc2VuZF9jb21tYW5kJywgZGF0YSk7XG4gICAgfVxuICAgIGdldEluZm8oYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jdXN0b21LZXlzW2FjdGlvbl0gfHxcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tU291cmNlc1thY3Rpb25dIHx8XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRLZXlzW2FjdGlvbl0gfHxcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFNvdXJjZXNbYWN0aW9uXSB8fFxuICAgICAgICAgICAge30pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kIGVpdGhlciBhIGNvbW1hbmQgdG8gYW4gQW5kcm9pZCBUViByZW1vdGUgb3IgYSBjdXN0b20ga2V5IHRvIGFueSBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2xvbmdQcmVzcz1mYWxzZV1cbiAgICAgKi9cbiAgICBzZW5kQWN0aW9uKGFjdGlvbiwgbG9uZ1ByZXNzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuZ2V0SW5mbyhhY3Rpb24pO1xuICAgICAgICBpZiAoJ2tleScgaW4gaW5mbykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaW5mby5rZXk7XG4gICAgICAgICAgICB0aGlzLnNlbmRLZXkoa2V5LCBsb25nUHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCdzb3VyY2UnIGluIGluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU291cmNlKGluZm8uc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgnc2VydmljZScgaW4gaW5mbykge1xuICAgICAgICAgICAgY29uc3Qgc2VydmljZV9kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbmZvLnNlcnZpY2VfZGF0YSB8fCB7fSkpO1xuICAgICAgICAgICAgaWYgKGxvbmdQcmVzcyAmJiBpbmZvLnNlcnZpY2UgPT0gJ3JlbW90ZS5zZW5kX2NvbW1hbmQnKSB7XG4gICAgICAgICAgICAgICAgc2VydmljZV9kYXRhLmhvbGRfc2VjcyA9IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFtkb21haW4sIHNlcnZpY2VdID0gaW5mby5zZXJ2aWNlLnNwbGl0KCcuJywgMik7XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKGRvbWFpbiwgc2VydmljZSwgc2VydmljZV9kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBPcGVuIGFuIEFuZHJvaWQgVFYgYXBwIHVzaW5nIGl0J3MgZGVlcCBsaW5rXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBBbmRyb2lkIFRWIGRlZXAgbGluayBmb3IgYW4gYXBwXG4gICAgICovXG4gICAgY2hhbmdlU291cmNlKHNvdXJjZSkge1xuICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdyZW1vdGUnLCAndHVybl9vbicsIHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiBzb3VyY2UsXG4gICAgICAgICAgICBlbnRpdHlfaWQ6IHRoaXMuX2NvbmZpZy5yZW1vdGVfaWQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0b3VjaHBhZCBjbGljayB3aXRoIG5vIG1vdmVtZW50XG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hDbGljayhlKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrX2FjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCAnY2VudGVyJywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGUuZGV0YWlsICYmIGUuZGV0YWlsID4gdGhpcy5jbGlja0NvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmVuYWJsZV9kb3VibGVfY2xpY2spIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrQ291bnQgPT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMub25Ub3VjaERvdWJsZUNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gc2V0VGltZW91dChjbGlja19hY3Rpb24sIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGlja19hY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0b3VjaHBhZCBkb3VibGUgY2xpY2tcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Ub3VjaERvdWJsZUNsaWNrKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGlja1RpbWVyKTtcbiAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gKF9hID0gdGhpcy5fY29uZmlnLmRvdWJsZV9jbGlja19rZXljb2RlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnYmFjayc7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCBhY3Rpb24sIGZhbHNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgdG91Y2hwYWQgc3dpcGUgYW5kIGxvbmcgY2xpY2sgc3RhcnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy50b3VjaFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTG9uZ0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIE9ubHkgcmVwZWF0IGhvbGQgYWN0aW9uIGZvciBkaXJlY3Rpb25hbCBrZXlzXG4gICAgICAgICAgICBpZiAoWyd1cCcsICdkb3duJywgJ2xlZnQnLCAncmlnaHQnXS5pbmNsdWRlcyh0aGlzLnRvdWNoQWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGUsIHRoaXMudG91Y2hBY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGUsIChfYSA9IHRoaXMuX2NvbmZpZy5sb25nX2NsaWNrX2tleWNvZGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdjZW50ZXInLCB0aGlzLl9jb25maWcubG9uZ19jbGlja19rZXljb2RlID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgd2luZG93LmluaXRpYWxYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHdpbmRvdy5pbml0aWFsWSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0b3VjaHBhZCBzd2lwZSBlbmRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Ub3VjaEVuZChlKSB7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoTG9uZ0NsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTG9uZ0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZXIpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudG91Y2hJbnRlcnZhbCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZXIpO1xuICAgICAgICB0aGlzLnRvdWNoQWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudG91Y2hUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xpY2tUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRvdWNocGFkIHN3aXBlIG1vdmVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Ub3VjaE1vdmUoZSkge1xuICAgICAgICBpZiAoIXdpbmRvdy5pbml0aWFsWCB8fCAhd2luZG93LmluaXRpYWxZKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WCB8fCAwO1xuICAgICAgICBjb25zdCBjdXJyZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZIHx8IDA7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gd2luZG93LmluaXRpYWxYIC0gY3VycmVudFg7XG4gICAgICAgIGNvbnN0IGRpZmZZID0gd2luZG93LmluaXRpYWxZIC0gY3VycmVudFk7XG4gICAgICAgIGxldCBhY3Rpb247XG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiBNYXRoLmFicyhkaWZmWSkpIHtcbiAgICAgICAgICAgIC8vIFNsaWRpbmcgaG9yaXpvbnRhbGx5XG4gICAgICAgICAgICBhY3Rpb24gPSBkaWZmWCA+IDAgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU2xpZGluZyB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICBhY3Rpb24gPSBkaWZmWSA+IDAgPyAndXAnIDogJ2Rvd24nO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG91Y2hBY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCBhY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgd2luZG93LmluaXRpYWxYID0gdW5kZWZpbmVkO1xuICAgICAgICB3aW5kb3cuaW5pdGlhbFkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGJ1dHRvbiBjbGlja1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjdGlvbl1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgb25CdXR0b25DbGljayhlLCBhY3Rpb24sIGxvbmdQcmVzcyA9IGZhbHNlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgYWN0aW9uID0gYWN0aW9uIHx8ICgoX2EgPSBlLmN1cnJlbnRUYXJnZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hY3Rpb24pIHx8ICcnO1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5nZXRJbmZvKGFjdGlvbik7XG4gICAgICAgIGxldCBoYXB0aWMgPSBsb25nUHJlc3MgPyAnbWVkaXVtJyA6ICdsaWdodCc7XG4gICAgICAgIGlmIChhY3Rpb24gPT0gJ2NlbnRlcicgJiYgIWxvbmdQcmVzcykge1xuICAgICAgICAgICAgaGFwdGljID0gJ3NlbGVjdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09IHRoaXMuX2NvbmZpZy5kb3VibGVfY2xpY2tfa2V5Y29kZSkge1xuICAgICAgICAgICAgaGFwdGljID0gJ3N1Y2Nlc3MnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlyZUhhcHRpY0V2ZW50KHdpbmRvdywgaGFwdGljKTtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2tleScgaW4gaW5mbyA/IGluZm8ua2V5IDogJyc7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdLRVlCT0FSRCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWJvYXJkUHJlc3MoZSwgbG9uZ1ByZXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1RFWFRCT1gnOlxuICAgICAgICAgICAgICAgIHRoaXMub25UZXh0Ym94UHJlc3MoZSwgbG9uZ1ByZXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1NFQVJDSCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vblNlYXJjaFByZXNzKGUsIGxvbmdQcmVzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEFjdGlvbihhY3Rpb24sIGxvbmdQcmVzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgYnV0dG9uIGxvbmcgY2xpY2sgc3RhcnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25CdXR0b25Mb25nQ2xpY2tTdGFydChlKSB7XG4gICAgICAgIHRoaXMuaG9sZEFjdGlvbiA9IGUuY3VycmVudFRhcmdldC5hY3Rpb247XG4gICAgICAgIHRoaXMuaG9sZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvbGRMb25nQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgLy8gT25seSByZXBlYXQgaG9sZCBhY3Rpb24gZm9yIGRpcmVjdGlvbmFsIGtleXMgYW5kIHZvbHVtZVxuICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICBpZiAoWyd1cCcsICdkb3duJywgJ2xlZnQnLCAncmlnaHQnLCAndm9sdW1lX3VwJywgJ3ZvbHVtZV9kb3duJywgJ2RlbGV0ZSddLmluY2x1ZGVzKHRoaXMuaG9sZEFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGUsIHRoaXMuaG9sZEFjdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZSwgdGhpcy5ob2xkQWN0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgYnV0dG9uIGxvbmcgY2xpY2sgZW5kXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uQnV0dG9uTG9uZ0NsaWNrRW5kKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9sZExvbmdDbGljaykge1xuICAgICAgICAgICAgdGhpcy5ob2xkTG9uZ0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhvbGRUaW1lcik7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ob2xkSW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLmhvbGRBY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5ob2xkVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmhvbGRJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGtleWJvYXJkIGtleWRvd24gZXZlbnRzLCB1c2VkIGZvciBub24tYWxwaGFudW1lcmljYWwga2V5c1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbktleURvd24oZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGtleVRvS2V5ID0ge1xuICAgICAgICAgICAgQmFja3NwYWNlOiAnZGVsZXRlJyxcbiAgICAgICAgICAgIERlbGV0ZTogJ2ZvcndhcmRfZGVsZXRlJyxcbiAgICAgICAgICAgIEVudGVyOiAnZW50ZXInLFxuICAgICAgICAgICAgQXJyb3dMZWZ0OiAnbGVmdCcsXG4gICAgICAgICAgICBBcnJvd1JpZ2h0OiAncmlnaHQnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlUb0tleVsoX2EgPSBlLmtleSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyddO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VuZEFjdGlvbihrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGtleWJvYXJkIGlucHV0IGV2ZW50cywgdXNlZCBmb3IgYWxwaGFudW1lcmljYWwga2V5cyBhbmQgd29ya3Mgb24gYWxsIHBsYXRmb3Jtc1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbklucHV0KGUpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBlbnRpdHlfaWQ6IHRoaXMuX2NvbmZpZy5hZGJfaWQsXG4gICAgICAgICAgICAgICAgY29tbWFuZDogJ2lucHV0IHRleHQgXCInICsgZS5kYXRhICsgJ1wiJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdhbmRyb2lkdHYnLCAnYWRiX2NvbW1hbmQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBwYXN0ZSBldmVudHMsIGFzIG9uSW5wdXQgcGFzdGUgZXZlbnRzIHJldHVybiBudWxsIGZvciBkYXRhIGZpZWxkXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uUGFzdGUoZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IChfYSA9IGUuY2xpcGJvYXJkRGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldERhdGEoJ1RleHQnKTtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcuYWRiX2lkLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdpbnB1dCB0ZXh0IFwiJyArIHRleHQgKyAnXCInLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX2hhc3MuY2FsbFNlcnZpY2UoJ2FuZHJvaWR0dicsICdhZGJfY29tbWFuZCcsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuZm9jdXMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igb24gZm9jdXMgZXZlbnRzLCBjbGVhcnMgaW5wdXQgYW5kIGNoYW5nZXMgaWNvbiBjb2xvclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbkZvY3VzKGUpIHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAuY2hpbGRyZW5bMF0uc3R5bGUuY29sb3IgPSAndmFyKC0tc3RhdGUtYWN0aXZlLWNvbG9yKSc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS56SW5kZXggPSAnOSc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igb24gZm9jdXMgb3V0IGV2ZW50cywgY2xlYXJzIGlucHV0IGFuZCByZXNldHMgaWNvbiBjb2xvclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbkZvY3VzT3V0KGUpIHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAuY2hpbGRyZW5bMF0uc3R5bGUuY29sb3IgPSAnJztcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnpJbmRleCA9ICcnO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS56SW5kZXggPSAnJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgY2xpY2tpbmcgdGhlIGtleWJvYXJkIGJ1dHRvblxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgb25LZXlib2FyZFByZXNzKGUsIF9sb25ncHJlc3MpIHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmZvY3VzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHNlbmRpbmcgYnVsayB0ZXh0IHZpYSBsZWdhY3kgcHJvbXB0IG1ldGhvZFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgb25UZXh0Ym94UHJlc3MoZSwgX2xvbmdwcmVzcykge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gcHJvbXB0KCdUZXh0IElucHV0OiAnKTtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcuYWRiX2lkLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdpbnB1dCB0ZXh0IFwiJyArIHRleHQgKyAnXCInLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX2hhc3MuY2FsbFNlcnZpY2UoJ2FuZHJvaWR0dicsICdhZGJfY29tbWFuZCcsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGdsb2JhbCBHb29nbGUgQXNzaXN0YW50IHNlYXJjaFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgb25TZWFyY2hQcmVzcyhlLCBfbG9uZ3ByZXNzKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBwcm9tcHQoJ0dvb2dsZSBBc3Npc3RhbnQgU2VhcmNoOiAnKTtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcuYWRiX2lkLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdhbSBzdGFydCAtYSBcImFuZHJvaWQuc2VhcmNoLmFjdGlvbi5HTE9CQUxfU0VBUkNIXCIgLS1lcyBxdWVyeSBcIicgK1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ICtcbiAgICAgICAgICAgICAgICAgICAgJ1wiJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdhbmRyb2lkdHYnLCAnYWRiX2NvbW1hbmQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidWlsZEljb25CdXR0b24oYWN0aW9uKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2Y7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmdldEluZm8oYWN0aW9uKTtcbiAgICAgICAgbGV0IGljb24gPSAoX2EgPSBpbmZvID09PSBudWxsIHx8IGluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluZm8uaWNvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XG4gICAgICAgIGxldCBzdmdfcGF0aCA9IChfYyA9IChfYiA9IGluZm8uc3ZnX3BhdGgpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMuY3VzdG9tSWNvbnNbaWNvbl0pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6ICcnO1xuICAgICAgICAvLyBVc2Ugb3JpZ2luYWwgaWNvbiBpZiBub25lIHByb3ZpZGVkIGZvciBjdXN0b20ga2V5IG9yIHNvdXJjZVxuICAgICAgICBpZiAoIShpY29uIHx8IHN2Z19wYXRoKSkge1xuICAgICAgICAgICAgY29uc3QgaWNvbkluZm8gPSB0aGlzLmRlZmF1bHRLZXlzW2FjdGlvbl0gfHwgdGhpcy5kZWZhdWx0U291cmNlc1thY3Rpb25dIHx8IHt9O1xuICAgICAgICAgICAgaWNvbiA9IChfZCA9IGljb25JbmZvID09PSBudWxsIHx8IGljb25JbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpY29uSW5mby5pY29uKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcbiAgICAgICAgICAgIHN2Z19wYXRoID0gKF9mID0gaWNvbkluZm8gPT09IG51bGwgfHwgaWNvbkluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGljb25JbmZvLnN2Z19wYXRoKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiAnJztcbiAgICAgICAgfVxuICAgICAgICBsZXQga0lucHV0ID0gKDAsIGxpdF9lbGVtZW50XzEuaHRtbCkgYGA7XG4gICAgICAgIGlmICgna2V5JyBpbiBpbmZvICYmIGluZm8ua2V5ID09ICdLRVlCT0FSRCcpIHtcbiAgICAgICAgICAgIGtJbnB1dCA9ICgwLCBsaXRfZWxlbWVudF8xLmh0bWwpIGBcclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRhdXRvY29ycmVjdD1cIm9mZlwiXHJcblx0XHRcdFx0XHRhdXRvY29tcGxldGU9XCJvZmZcIlxyXG5cdFx0XHRcdFx0YXV0b2NhcGl0YWxpemU9XCJvZmZcIlxyXG5cdFx0XHRcdFx0b25jaGFuZ2U9XCJ0aGlzLnZhbHVlPScnXCJcclxuXHRcdFx0XHRcdG9ua2V5dXA9XCJ0aGlzLnZhbHVlPScnXCJcclxuXHRcdFx0XHRcdEBmb2N1cz1cIiR7dGhpcy5vbkZvY3VzfVwiXHJcblx0XHRcdFx0XHRAZm9jdXNvdXQ9XCIke3RoaXMub25Gb2N1c091dH1cIlxyXG5cdFx0XHRcdFx0QGlucHV0PVwiJHt0aGlzLm9uSW5wdXR9XCJcclxuXHRcdFx0XHRcdEBwYXN0ZT1cIiR7dGhpcy5vblBhc3RlfVwiXHJcblx0XHRcdFx0XHRAa2V5ZG93bj1cIiR7dGhpcy5vbktleURvd259XCJcclxuXHRcdFx0XHQ+PC9pbnB1dD5cclxuXHRcdFx0YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDAsIGxpdF9lbGVtZW50XzEuaHRtbCkgYFxyXG5cdFx0XHQ8aGEtaWNvbi1idXR0b25cclxuXHRcdFx0XHQuYWN0aW9uPVwiJHthY3Rpb259XCJcclxuXHRcdFx0XHRAY2xpY2s9XCIke3RoaXMub25CdXR0b25DbGlja31cIlxyXG5cdFx0XHRcdEB0b3VjaHN0YXJ0PVwiJHt0aGlzLm9uQnV0dG9uTG9uZ0NsaWNrU3RhcnR9XCJcclxuXHRcdFx0XHRAdG91Y2hlbmQ9XCIke3RoaXMub25CdXR0b25Mb25nQ2xpY2tFbmR9XCJcclxuXHRcdFx0XHR0aXRsZT1cIiR7YWN0aW9ufVwiXHJcblx0XHRcdFx0LnBhdGg9XCIke3N2Z19wYXRofVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8aGEtaWNvbiAuaWNvbj1cIiR7IXN2Z19wYXRoID8gaWNvbiA6ICcnfVwiPjwvaGEtaWNvbj5cclxuXHRcdFx0XHQke2tJbnB1dH1cclxuXHRcdFx0PC9oYS1pY29uLWJ1dHRvbj5cclxuXHRcdGA7XG4gICAgfVxuICAgIGJ1aWxkUm93KGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuICgwLCBsaXRfZWxlbWVudF8xLmh0bWwpIGAgPGRpdiBjbGFzcz1cInJvd1wiPiR7Y29udGVudH08L2Rpdj4gYDtcbiAgICB9XG4gICAgYnVpbGRCdXR0b25zRnJvbUFjdGlvbnMoYWN0aW9ucykge1xuICAgICAgICByZXR1cm4gYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gdGhpcy5idWlsZEljb25CdXR0b24oYWN0aW9uKSk7XG4gICAgfVxuICAgIHRyaWdnZXJSZW5kZXIoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuX2hhc3MpIHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgbGl0X2VsZW1lbnRfMS5odG1sKSBgYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50ID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2NvbmZpZykuZm9yRWFjaCgocm93X25hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3dfbmFtZS5pbmNsdWRlcygnX3JvdycpKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyb3dfbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2b2x1bWVfcm93Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy52b2x1bWVfcm93ID09ICdidXR0b25zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCd2b2x1bWVfZG93bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbigndm9sdW1lX211dGUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEljb25CdXR0b24oJ3ZvbHVtZV91cCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fY29uZmlnLnZvbHVtZV9yb3cgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZvbHVtZV9zbGlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICduYXZpZ2F0aW9uX3Jvdyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fY29uZmlnLm5hdmlnYXRpb25fcm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYnV0dG9ucyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKFt0aGlzLmJ1aWxkSWNvbkJ1dHRvbigndXAnKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEljb25CdXR0b24oJ2xlZnQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCdjZW50ZXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCdyaWdodCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKFt0aGlzLmJ1aWxkSWNvbkJ1dHRvbignZG93bicpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3VjaHBhZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3VjaHBhZCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBsaXRfZWxlbWVudF8xLmh0bWwpIGBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dG91Y2hhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cInRvdWNoYXJlYVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCIke3RoaXMub25Ub3VjaENsaWNrfVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAdG91Y2hzdGFydD1cIiR7dGhpcy5vblRvdWNoU3RhcnR9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEB0b3VjaG1vdmU9XCIke3RoaXMub25Ub3VjaE1vdmV9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEB0b3VjaGVuZD1cIiR7dGhpcy5vblRvdWNoRW5kfVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdG91Y2hhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnB1c2godG91Y2hwYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaCh0aGlzLmJ1aWxkQnV0dG9uc0Zyb21BY3Rpb25zKHRoaXMuX2NvbmZpZ1tyb3dfbmFtZV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1hcHBlZENvbnRlbnQgPSBjb250ZW50Lm1hcCh0aGlzLmJ1aWxkUm93KTtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gKDAsIGxpdF9lbGVtZW50XzEuaHRtbCkgYFxyXG5cdFx0XHQke3RoaXMucmVuZGVyU3R5bGUoKX1cclxuXHRcdFx0PGhhLWNhcmQgLmhlYWRlcj1cIiR7dGhpcy5fY29uZmlnLnRpdGxlfVwiPiR7bWFwcGVkQ29udGVudH08L2hhLWNhcmQ+XHJcblx0XHRgO1xuICAgICAgICByZXR1cm4gKDAsIGxpdF9lbGVtZW50XzEuaHRtbCkgYCR7b3V0cHV0fWA7XG4gICAgfVxuICAgIHJlbmRlclN0eWxlKCkge1xuICAgICAgICByZXR1cm4gKDAsIGxpdF9lbGVtZW50XzEuaHRtbCkgYFxyXG5cdFx0XHQ8c3R5bGU+XHJcblx0XHRcdFx0LnJlbW90ZSB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4IDBweCAxNnB4IDBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW1nLFxyXG5cdFx0XHRcdGhhLWljb24tYnV0dG9uIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0OHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA0OHB4O1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0LS1tZGMtaWNvbi1zaXplOiAxMDAlO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbnB1dCB7XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0XHRcdFx0ZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcclxuXHRcdFx0XHRcdHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cdFx0XHRcdFx0d2lkdGg6IGZpbGwtYXZhaWxhYmxlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcclxuXHRcdFx0XHRcdGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuXHRcdFx0XHRcdGhlaWdodDogZmlsbC1hdmFpbGFibGU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5yb3cge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDhweCAzNnB4IDhweCAzNnB4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5kaWFnb25hbCB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dG91Y2hhcmVhIHtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0XHRcdFx0XHRmbGV4LWdyb3c6IDE7XHJcblx0XHRcdFx0XHRoZWlnaHQ6ICR7dGhpcy5fY29uZmlnWyd0b3VjaHBhZF9oZWlnaHQnXSB8fCAnMjUwcHgnfTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICM2ZDc2N2U7XHJcblx0XHRcdFx0XHR0b3VjaC1hY3Rpb246IG5vbmU7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0YDtcbiAgICB9XG4gICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoZWxlbWVudCwgdGhlbWVzLCBsb2NhbFRoZW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgZWxlbWVudC5fdGhlbWVzID0gKF9hID0gZWxlbWVudC5fdGhlbWVzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7fTtcbiAgICAgICAgbGV0IHRoZW1lTmFtZSA9IHRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuICAgICAgICBpZiAobG9jYWxUaGVtZSA9PT0gJ2RlZmF1bHQnIHx8XG4gICAgICAgICAgICAobG9jYWxUaGVtZSAmJiB0aGVtZXMudGhlbWVzW2xvY2FsVGhlbWVdKSkge1xuICAgICAgICAgICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50Ll90aGVtZXMpO1xuICAgICAgICBpZiAodGhlbWVOYW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lID0gdGhlbWVzLnRoZW1lc1t0aGVtZU5hbWVdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhlbWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZWZpeGVkS2V5ID0gJy0tJyArIGtleTtcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll90aGVtZXNbcHJlZml4ZWRLZXldID0gJyc7XG4gICAgICAgICAgICAgICAgc3R5bGVzW3ByZWZpeGVkS2V5XSA9IHRoZW1lW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC51cGRhdGVTdHlsZXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgICAgICAgICAvLyBpbXBsZW1lbnQgdXBkYXRlU3R5bGVzKCkgbWV0aG9kIG9mIFBvbGVtZXIgZWxlbWVudHNcbiAgICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZVN1YnRyZWUoXG4gICAgICAgICAgICAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgICAgIGVsZW1lbnQsIHN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT10aGVtZS1jb2xvcl0nKTtcbiAgICAgICAgaWYgKG1ldGEpIHtcbiAgICAgICAgICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpKSB7XG4gICAgICAgICAgICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcsIG1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGhlbWVDb2xvciA9IHN0eWxlc1snLS1wcmltYXJ5LWNvbG9yJ10gfHxcbiAgICAgICAgICAgICAgICBtZXRhLmdldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50Jyk7XG4gICAgICAgICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoZW1lQ29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhbmRyb2lkLXR2LWNhcmQnLCBBbmRyb2lkVFZDYXJkKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0S2V5cyA9IHZvaWQgMDtcbi8qKlxuICogVGhpcyBpcyB0aGUgbGlzdCBvZiBtb3N0IGNvbW1vbiBjb21tYW5kcyBmcm9tIHRoZSBBbmRyb2lkIFRWIFJlbW90ZSBpbnRlZ3JhdGlvbiBwYWdlLlxuICogTm90IGFsbCBhcmUgZW5zdXJlZCB0byB3b3JrLCBhbmQgaWYgdGhleSBkbyBub3QgaXQgaXMgbGlrZWx5IGFuIGlzc3VlIHdpdGggdGhlIHVuZGVybHlpbmcgcGFja2FnZSB1c2VkIGJ5IHRoZSBBbmRyb2lkIFRWIFJlbW90ZSBpbnRlZ3JhdGlvbiBvciB0aGUgQW5kcm9pZCBUViBSZW1vdGUgUHJvdG9jb2wgVjIgaXRzZWxmLlxuICogaHR0cHM6Ly93d3cuaG9tZS1hc3Npc3RhbnQuaW8vaW50ZWdyYXRpb25zL2FuZHJvaWR0dl9yZW1vdGUvI3JlbW90ZVxuICovXG5leHBvcnRzLmRlZmF1bHRLZXlzID0ge1xuICAgIHBvd2VyOiB7IGtleTogJ1BPV0VSJywgaWNvbjogJ21kaTpwb3dlcicgfSxcbiAgICB2b2x1bWVfdXA6IHsga2V5OiAnVk9MVU1FX1VQJywgaWNvbjogJ21kaTp2b2x1bWUtcGx1cycgfSxcbiAgICB2b2x1bWVfZG93bjogeyBrZXk6ICdWT0xVTUVfRE9XTicsIGljb246ICdtZGk6dm9sdW1lLW1pbnVzJyB9LFxuICAgIHZvbHVtZV9tdXRlOiB7IGtleTogJ01VVEUnLCBpY29uOiAnbWRpOnZvbHVtZS1tdXRlJyB9LFxuICAgIGJhY2s6IHsga2V5OiAnQkFDSycsIGljb246ICdtZGk6a2V5Ym9hcmQtYmFja3NwYWNlJyB9LFxuICAgIGhvbWU6IHsga2V5OiAnSE9NRScsIGljb246ICdtZGk6aG9tZScgfSxcbiAgICB1cDogeyBrZXk6ICdEUEFEX1VQJywgaWNvbjogJ21kaTpjaGV2cm9uLXVwJyB9LFxuICAgIGxlZnQ6IHsga2V5OiAnRFBBRF9MRUZUJywgaWNvbjogJ21kaTpjaGV2cm9uLWxlZnQnIH0sXG4gICAgY2VudGVyOiB7IGtleTogJ0RQQURfQ0VOVEVSJywgaWNvbjogJ21kaTpjaGVja2JveC1ibGFuay1jaXJjbGUnIH0sXG4gICAgcmlnaHQ6IHsga2V5OiAnRFBBRF9SSUdIVCcsIGljb246ICdtZGk6Y2hldnJvbi1yaWdodCcgfSxcbiAgICBkb3duOiB7IGtleTogJ0RQQURfRE9XTicsIGljb246ICdtZGk6Y2hldnJvbi1kb3duJyB9LFxuICAgIHBsYXk6IHsga2V5OiAnTUVESUFfUExBWScsIGljb246ICdtZGk6cGxheScgfSxcbiAgICBwYXVzZTogeyBrZXk6ICdNRURJQV9QQVVTRScsIGljb246ICdtZGk6cGF1c2UnIH0sXG4gICAgcGxheV9wYXVzZTogeyBrZXk6ICdNRURJQV9QTEFZX1BBVVNFJywgaWNvbjogJ21kaTpwbGF5LXBhdXNlJyB9LFxuICAgIHN0b3A6IHsga2V5OiAnTUVESUFfU1RPUCcsIGljb246ICdtZGk6c3RvcCcgfSxcbiAgICByZXdpbmQ6IHsga2V5OiAnTUVESUFfUkVXSU5EJywgaWNvbjogJ21kaTpyZXdpbmQnIH0sXG4gICAgZmFzdF9mb3J3YXJkOiB7IGtleTogJ01FRElBX0ZBU1RfRk9SV0FSRCcsIGljb246ICdtZGk6ZmFzdC1mb3J3YXJkJyB9LFxuICAgIHByZXZpb3VzOiB7IGtleTogJ01FRElBX1BSRVZJT1VTJywgaWNvbjogJ21kaTpza2lwLXByZXZpb3VzJyB9LFxuICAgIHJlY29yZDogeyBrZXk6ICdNRURJQV9SRUNPUkQnLCBpY29uOiAnbWRpOnJlY29yZCcgfSxcbiAgICBuZXh0OiB7IGtleTogJ01FRElBX05FWFQnLCBpY29uOiAnbWRpOnNraXAtbmV4dCcgfSxcbiAgICBtZW51OiB7IGtleTogJ01FTlUnLCBpY29uOiAnbWRpOm1lbnUnIH0sXG4gICAgYTogeyBrZXk6ICdCVVRUT05fQScsIGljb246ICdtZGk6YWxwaGEtYS1jaXJjbGUnIH0sXG4gICAgYjogeyBrZXk6ICdCVVRUT05fQicsIGljb246ICdtZGk6YWxwaGEtQi1jaXJjbGUnIH0sXG4gICAgeDogeyBrZXk6ICdCVVRUT05fWCcsIGljb246ICdtZGk6YWxwaGEteC1jaXJjbGUnIH0sXG4gICAgeTogeyBrZXk6ICdCVVRUT05fWScsIGljb246ICdtZGk6YWxwaGEteS1jaXJjbGUnIH0sXG4gICAgbjA6IHsga2V5OiAnMCcsIGljb246ICdtZGk6bnVtZXJpYy0wJyB9LFxuICAgIG4xOiB7IGtleTogJzEnLCBpY29uOiAnbWRpOm51bWVyaWMtMScgfSxcbiAgICBuMjogeyBrZXk6ICcyJywgaWNvbjogJ21kaTpudW1lcmljLTInIH0sXG4gICAgbjM6IHsga2V5OiAnMycsIGljb246ICdtZGk6bnVtZXJpYy0zJyB9LFxuICAgIG40OiB7IGtleTogJzQnLCBpY29uOiAnbWRpOm51bWVyaWMtNCcgfSxcbiAgICBuNTogeyBrZXk6ICc1JywgaWNvbjogJ21kaTpudW1lcmljLTUnIH0sXG4gICAgbjY6IHsga2V5OiAnNicsIGljb246ICdtZGk6bnVtZXJpYy02JyB9LFxuICAgIG43OiB7IGtleTogJzcnLCBpY29uOiAnbWRpOm51bWVyaWMtNycgfSxcbiAgICBuODogeyBrZXk6ICc4JywgaWNvbjogJ21kaTpudW1lcmljLTgnIH0sXG4gICAgbjk6IHsga2V5OiAnOScsIGljb246ICdtZGk6bnVtZXJpYy05JyB9LFxuICAgIGNoYW5uZWxfdXA6IHsga2V5OiAnQ0hBTk5FTF9VUCcsIGljb246ICdtZGk6YXJyb3ctdXAtY2lyY2xlJyB9LFxuICAgIGNoYW5uZWxfZG93bjogeyBrZXk6ICdDSEFOTkVMX0RPV04nLCBpY29uOiAnbWRpOmFycm93LWRvd24tY2lyY2xlJyB9LFxuICAgIGYxOiB7IGtleTogJ0YxJywgaWNvbjogJ21kaTprZXlib2FyZC1mMScgfSxcbiAgICBmMjogeyBrZXk6ICdGMicsIGljb246ICdtZGk6a2V5Ym9hcmQtZjInIH0sXG4gICAgZjM6IHsga2V5OiAnRjMnLCBpY29uOiAnbWRpOmtleWJvYXJkLWYzJyB9LFxuICAgIGY0OiB7IGtleTogJ0Y0JywgaWNvbjogJ21kaTprZXlib2FyZC1mNCcgfSxcbiAgICBmNTogeyBrZXk6ICdGNScsIGljb246ICdtZGk6a2V5Ym9hcmQtZjUnIH0sXG4gICAgZjY6IHsga2V5OiAnRjYnLCBpY29uOiAnbWRpOmtleWJvYXJkLWY2JyB9LFxuICAgIGY3OiB7IGtleTogJ0Y3JywgaWNvbjogJ21kaTprZXlib2FyZC1mNycgfSxcbiAgICBmODogeyBrZXk6ICdGOCcsIGljb246ICdtZGk6a2V5Ym9hcmQtZjgnIH0sXG4gICAgZjk6IHsga2V5OiAnRjknLCBpY29uOiAnbWRpOmtleWJvYXJkLWY5JyB9LFxuICAgIGYxMDogeyBrZXk6ICdGMTAnLCBpY29uOiAnbWRpOmtleWJvYXJkLWYxMCcgfSxcbiAgICBmMTE6IHsga2V5OiAnRjExJywgaWNvbjogJ21kaTprZXlib2FyZC1mMTEnIH0sXG4gICAgZjEyOiB7IGtleTogJ0YxMicsIGljb246ICdtZGk6a2V5Ym9hcmQtZjEyJyB9LFxuICAgIHR2OiB7IGtleTogJ1RWJywgaWNvbjogJ21kaTp0ZWxldmlzaW9uLWJveCcgfSxcbiAgICByZWQ6IHsga2V5OiAnUFJPR19SRUQnLCBpY29uOiAnbWRpOmFscGhhLXItYm94JyB9LFxuICAgIGdyZWVuOiB7IGtleTogJ1BST0dfR1JFRU4nLCBpY29uOiAnbWRpOmFscGhhLWctYm94JyB9LFxuICAgIHllbGxvdzogeyBrZXk6ICdQUk9HX1lFTExPVycsIGljb246ICdtZGk6YWxwaGEteS1ib3gnIH0sXG4gICAgYmx1ZTogeyBrZXk6ICdQUk9HX0JMVUUnLCBpY29uOiAnbWRpOmFscGhhLWItYm94JyB9LFxuICAgIGJ1dHRvbl9tb2RlOiB7IGtleTogJ0JVVFRPTl9NT0RFJywgaWNvbjogJ21kaTpnZXN0dXJlLXRhcC1idXRvbicgfSxcbiAgICBleHBsb3JlcjogeyBrZXk6ICdFWFBMT1JFUicsIGljb246ICdtZGk6Zm9sZGVyLW11bHRpcGxlJyB9LFxuICAgIGluZm86IHsga2V5OiAnSU5GTycsIGljb246ICdtZGk6aW5mb3JtYXRpb24nIH0sXG4gICAgZ3VpZGU6IHsga2V5OiAnR1VJREUnLCBpY29uOiAnbWRpOnRlbGV2aXNpb24tZ3VpZGUnIH0sXG4gICAgdGVsZXRleHQ6IHsga2V5OiAnVFZfVEVMRVRFWFQnLCBpY29uOiAnbWRpOmNhcmQtdGV4dCcgfSxcbiAgICBjYXB0aW9uczogeyBrZXk6ICdDQVBUSU9OUycsIGljb246ICdtZGk6Y2xvc2VkLWNhcHRpb24nIH0sXG4gICAgZHZyOiB7IGtleTogJ0RWUicsIGljb246ICdtZGk6YXVkaW8tdmlkZW8nIH0sXG4gICAgYXVkaW9fdHJhY2s6IHsga2V5OiAnTUVESUFfQVVESU9fVFJBQ0snLCBpY29uOiAnbWRpOndhdmVmb3JtJyB9LFxuICAgIHNldHRpbmdzOiB7IGtleTogJ1NFVFRJTkdTJywgaWNvbjogJ21kaTpjb2cnIH0sXG4gICAgZGVsZXRlOiB7IGtleTogJ0RFTCcsIGljb246ICdtZGk6YmFja3NwYWNlJyB9LFxuICAgIGZvcndhcmRfZGVsZXRlOiB7IGtleTogJ0ZPV0FSRF9ERUwnLCBpY29uOiAnbWRpOmJhY2tzcGFjZS1yZXZlcnNlJyB9LFxuICAgIGVudGVyOiB7IGtleTogJ0VOVEVSJywgaWNvbjogJ21kaTptYWduaWZ5JyB9LFxuICAgIGtleWJvYXJkOiB7IGtleTogJ0tFWUJPQVJEJywgaWNvbjogJ21kaTprZXlib2FyZCcgfSxcbiAgICBzZWFyY2g6IHsga2V5OiAnU0VBUkNIJywgaWNvbjogJ21kaTpnb29nbGUtYXNzaXN0YW50JyB9LFxuICAgIHRleHRib3g6IHsga2V5OiAnVEVYVEJPWCcsIGljb246ICdtZGk6dGV4dC1ib3gnIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHRTb3VyY2VzID0gdm9pZCAwO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbi8qKlxuICogVGhpcyBpcyBhIGxpc3Qgb2YgY29tbW9uIHN0cmVhbWluZyBhcHBzLCB0aGVpciBpY29ucywgYW5kIHRoZSBkZWVwIGxpbmtzIHRvIG9wZW4gdGhlbSBpbiBBbmRyb2lkIFRWLCBtb3N0bHkgY29sbGVjdGVkIGZyb20gdGhlIGZvbGxvd2luZyBIb21lIEFzc2lzdGFudCBDb21tdW5pdHkgRm9ydW0gZ3VpZGUuXG4gKiBOb3QgYWxsIGhhdmUgYmVlbiB0ZXN0ZWQsIGlmIGFueSBkbyBub3Qgd29yayBwbGVhc2UgbGV0IG1lIGtub3chXG4gKiBodHRwczovL2NvbW11bml0eS5ob21lLWFzc2lzdGFudC5pby90L2FuZHJvaWQtdHYtcmVtb3RlLWFwcC1saW5rcy1kZWVwLWxpbmtpbmctZ3VpZGUvNTY3OTIxXG4gKi9cbmV4cG9ydHMuZGVmYXVsdFNvdXJjZXMgPSB7XG4gICAgYXBwbGV0djoge1xuICAgICAgICBzb3VyY2U6ICdodHRwczovL3R2LmFwcGxlLmNvbScsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuQVBQTEVUVixcbiAgICB9LFxuICAgIGNydW5jaHlyb2xsOiB7XG4gICAgICAgIHNvdXJjZTogJ2NydW5jaHlyb2xsOi8vJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5DUlVOQ0hZUk9MTCxcbiAgICB9LFxuICAgIGRpc25leToge1xuICAgICAgICBzb3VyY2U6ICdodHRwczovL3d3dy5kaXNuZXlwbHVzLmNvbScsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuRElTTkVZLFxuICAgIH0sXG4gICAgZW1ieToge1xuICAgICAgICBzb3VyY2U6ICdlbWJ5YXR2Oi8vdHYuZW1ieS5lbWJ5YXR2L3N0YXJ0YXBwJyxcbiAgICAgICAgaWNvbjogJ21kaTplbWJ5JyxcbiAgICB9LFxuICAgIGZveHNwb3J0czoge1xuICAgICAgICBzb3VyY2U6ICdmb3hzcG9ydHM6Ly9saXZlJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5GT1hTUE9SVFMsXG4gICAgfSxcbiAgICBodWx1OiB7XG4gICAgICAgIHNvdXJjZTogJ2h1bHU6Ly8nLFxuICAgICAgICBpY29uOiAnbWRpOmh1bHUnLFxuICAgIH0sXG4gICAgbWF4OiB7XG4gICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vcGxheS5tYXguY29tJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5NQVgsXG4gICAgfSxcbiAgICBtbGJ0djoge1xuICAgICAgICBzb3VyY2U6ICdtbGJhdGJhdDovLycsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuTUxCVFYsXG4gICAgfSxcbiAgICBuYmE6IHtcbiAgICAgICAgc291cmNlOiAnZ2FtZXRpbWU6Ly8nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLk5CQSxcbiAgICB9LFxuICAgIG5ldGZsaXg6IHsgc291cmNlOiAnbmV0ZmxpeDovLycsIGljb246ICdtZGk6bmV0ZmxpeCcgfSxcbiAgICBwbGV4OiB7XG4gICAgICAgIHNvdXJjZTogJ3BsZXg6Ly8nLFxuICAgICAgICBpY29uOiAnbWRpOnBsZXgnLFxuICAgIH0sXG4gICAgcHJpbWV2aWRlbzoge1xuICAgICAgICBzb3VyY2U6ICdodHRwczovL2FwcC5wcmltZXZpZGVvLmNvbScsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuUFJJTUVWSURFTyxcbiAgICB9LFxuICAgIHBpYToge1xuICAgICAgICBzb3VyY2U6ICdwaWF2cG46Ly8nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLlBJQSxcbiAgICB9LFxuICAgIHNwb3RpZnk6IHsgc291cmNlOiAnc3BvdGlmeTovLycsIGljb246ICdtZGk6c3BvdGlmeScgfSxcbiAgICBzdXJmc2hhcms6IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly9zdXJmc2hhcmsuY29tL2xvY2F0aW9ucy11bCcsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuU1VSRlNIQVJLLFxuICAgIH0sXG4gICAgdnVkdToge1xuICAgICAgICBzb3VyY2U6ICd2dWR1YXBwOi8vJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5WVURVLFxuICAgIH0sXG4gICAgeW91dHViZTogeyBzb3VyY2U6ICd2bmQueW91dHViZTovLycsIGljb246ICdtZGk6eW91dHViZScgfSxcbiAgICB5b3V0dWJldHY6IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly90di55b3V0dWJlLmNvbScsXG4gICAgICAgIGljb246ICdtZGk6eW91dHViZS10dicsXG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3N2Z1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3ZnID0gdm9pZCAwO1xudmFyIHN2ZztcbihmdW5jdGlvbiAoc3ZnKSB7XG4gICAgc3ZnW1wiQVBQTEVUVlwiXSA9IFwiTSA2LjgyMDMxMiA4LjI0NjA5NCBDIDcuMTc5Njg4IDcuODI0MjE5IDcuMzk4NDM4IDcuMjczNDM4IDcuMzk4NDM4IDYuNjc1NzgxIEMgNy4zOTg0MzggNi42MTMyODEgNy4zOTg0MzggNi41NTA3ODEgNy4zOTQ1MzEgNi40OTIxODggTCA3LjM5NDUzMSA2LjUgQyA2Ljc0NjA5NCA2LjU2NjQwNiA2LjE4MzU5NCA2Ljg3MTA5NCA1Ljc4NTE1NiA3LjMyNDIxOSBMIDUuNzgxMjUgNy4zMjgxMjUgQyA1LjQxNzk2OSA3LjcyNjU2MiA1LjE5NTMxMiA4LjI2MTcxOSA1LjE5NTMxMiA4Ljg1MTU2MiBDIDUuMTk1MzEyIDguOTEwMTU2IDUuMTk5MjE5IDguOTY4NzUgNS4yMDMxMjUgOS4wMjM0MzggTCA1LjIwMzEyNSA5LjAxNTYyNSBDIDUuMjA3MDMxIDkuMDE1NjI1IDUuMjE0ODQ0IDkuMDE1NjI1IDUuMjIyNjU2IDkuMDE1NjI1IEMgNS44NjcxODggOS4wMTU2MjUgNi40NDUzMTIgOC43MTg3NSA2LjgyMDMxMiA4LjI1IFogTSA4LjE5NTMxMiAxMi4zMDQ2ODggQyA4LjIwMzEyNSAxMy4yOTI5NjkgOC43OTY4NzUgMTQuMTQwNjI1IDkuNjQ4NDM4IDE0LjUxMTcxOSBMIDkuNjY0MDYyIDE0LjUxOTUzMSBDIDkuNDY4NzUgMTUuMTA5Mzc1IDkuMjE0ODQ0IDE1LjYyNSA4Ljg5NDUzMSAxNi4wOTM3NSBMIDguOTA2MjUgMTYuMDcwMzEyIEMgOC40NDkyMTkgMTYuNzM0Mzc1IDcuOTgwNDY5IDE3LjM5ODQzOCA3LjIzMDQ2OSAxNy40MTQwNjIgQyA2LjUgMTcuNDI5Njg4IDYuMjY5NTMxIDE2Ljk4MDQ2OSA1LjQyNTc4MSAxNi45ODA0NjkgQyA0LjU4OTg0NCAxNi45ODA0NjkgNC4zMjgxMjUgMTcuMzk4NDM4IDMuNjMyODEyIDE3LjQyOTY4OCBDIDIuOTI1NzgxIDE3LjQ1MzEyNSAyLjM3NSAxNi43MDMxMjUgMS45MTQwNjIgMTYuMDM5MDYyIEMgMS4yMjY1NjIgMTUuMTA5Mzc1IDAuODEyNSAxMy45NDE0MDYgMC44MTI1IDEyLjY3MTg3NSBDIDAuODEyNSAxMS45MDIzNDQgMC45NjQ4NDQgMTEuMTY3OTY5IDEuMjQyMTg4IDEwLjUgTCAxLjIyNjU2MiAxMC41MzUxNTYgQyAxLjY3OTY4OCA5LjczNDM3NSAyLjUxOTUzMSA5LjE5NTMxMiAzLjQ4NDM3NSA5LjE3MTg3NSBMIDMuNDg4MjgxIDkuMTcxODc1IEMgNC4xOTE0MDYgOS4xNTYyNSA0Ljg2MzI4MSA5LjY0ODQzOCA1LjI5Njg3NSA5LjY0ODQzOCBDIDUuNzI2NTYyIDkuNjQ4NDM4IDYuNTM1MTU2IDkuMDYyNSA3LjM4NjcxOSA5LjE0ODQzOCBDIDguMjEwOTM4IDkuMTc5Njg4IDguOTMzNTk0IDkuNTkzNzUgOS4zNzg5MDYgMTAuMjE4NzUgTCA5LjM4NjcxOSAxMC4yMjY1NjIgQyA4LjY3NTc4MSAxMC42NjQwNjIgOC4yMTA5MzggMTEuNDI5Njg4IDguMTk1MzEyIDEyLjMwNDY4OCBaIE0gMTUuMDE5NTMxIDE3LjMwNDY4OCBDIDE0LjU4OTg0NCAxNy40Mjk2ODggMTQuMDk3NjU2IDE3LjUgMTMuNTg1OTM4IDE3LjUgQyAxMy41ODIwMzEgMTcuNSAxMy41NzQyMTkgMTcuNSAxMy41NjY0MDYgMTcuNSBDIDEyLjQxNzk2OSAxNy41IDExLjg0NzY1NiAxNi44NTE1NjIgMTEuODQ3NjU2IDE1LjU0Njg3NSBMIDExLjg0NzY1NiA5Ljc5Njg3NSBMIDEwLjg1MTU2MiA5Ljc5Njg3NSBMIDEwLjg1MTU2MiA4Ljc1MzkwNiBMIDExLjg5ODQzOCA4Ljc1MzkwNiBMIDExLjg5ODQzOCA3LjM5ODQzOCBMIDEzLjI4MTI1IDYuODMyMDMxIEwgMTMuMjgxMjUgOC43NjE3MTkgTCAxNC44Nzg5MDYgOC43NjE3MTkgTCAxNC44Nzg5MDYgOS44MDQ2ODggTCAxMy4yODkwNjIgOS44MDQ2ODggTCAxMy4yODkwNjIgMTUuMjM4MjgxIEMgMTMuMjg1MTU2IDE1LjI3NzM0NCAxMy4yODUxNTYgMTUuMzIwMzEyIDEzLjI4NTE1NiAxNS4zNjcxODggQyAxMy4yODUxNTYgMTUuNjQwNjI1IDEzLjM1OTM3NSAxNS44OTg0MzggMTMuNDkyMTg4IDE2LjExNzE4OCBMIDEzLjQ5MjE4OCAxNi4xMDkzNzUgQyAxMy42NDQ1MzEgMTYuMjY1NjI1IDEzLjg1NTQ2OSAxNi4zNjMyODEgMTQuMDg5ODQ0IDE2LjM2MzI4MSBDIDE0LjEyODkwNiAxNi4zNjMyODEgMTQuMTYwMTU2IDE2LjM1OTM3NSAxNC4xOTUzMTIgMTYuMzU1NDY5IEwgMTQuMTkxNDA2IDE2LjM1NTQ2OSBDIDE0LjQ5MjE4OCAxNi4zNDM3NSAxNC43NzczNDQgMTYuMzA0Njg4IDE1LjA1MDc4MSAxNi4yNDIxODggTCAxNS4wMTk1MzEgMTYuMjUgWiBNIDIwLjAxOTUzMSAxNy4zNjcxODggTCAxOC4zMjQyMTkgMTcuMzY3MTg4IEwgMTUuMTk1MzEyIDguNzUzOTA2IEwgMTYuNzI2NTYyIDguNzUzOTA2IEwgMTguNjE3MTg4IDE0LjM1NTQ2OSBDIDE4LjY4NzUgMTQuNTc0MjE5IDE4Ljg3MTA5NCAxNS4xOTkyMTkgMTkuMTY0MDYyIDE2LjI0MjE4OCBMIDE5LjQ0MTQwNiAxNS4zMDg1OTQgTCAxOS43NSAxNC4zNjcxODggTCAyMS43MTA5MzggOC43NDYwOTQgTCAyMy4yMzA0NjkgOC43NDYwOTQgWiBNIDIwLjAxOTUzMSAxNy4zNjcxODggXCI7XG4gICAgc3ZnW1wiQ1JVTkNIWVJPTExcIl0gPSBcIk0gMi45MzM1OTQgMTMuNDY4NzUgQyAyLjcwNzAzMSAxMC42MDE1NjIgMy42NTYyNSA3Ljc2OTUzMSA1LjU2NjQwNiA1LjYyMTA5NCBDIDcuNDc2NTYyIDMuNDc2NTYyIDEwLjE3OTY4OCAyLjE5OTIxOSAxMy4wNTA3ODEgMi4wODk4NDQgQyAxNS45MjE4NzUgMS45ODQzNzUgMTguNzEwOTM4IDMuMDUwNzgxIDIwLjc3NzM0NCA1LjA0Njg3NSBDIDIyLjg0NzY1NiA3LjA0Mjk2OSAyNC4wMDc4MTIgOS43OTI5NjkgMjQgMTIuNjY3OTY5IEwgMjQgMTIgQyAyNCA1LjM3MTA5NCAxOC42Mjg5MDYgMCAxMiAwIEMgNS4zNzEwOTQgMCAwIDUuMzcxMDk0IDAgMTIgQyAwIDE4LjYyODkwNiA1LjM3MTA5NCAyNCAxMiAyNCBMIDEyLjgwMDc4MSAyNCBDIDcuMjYxNzE5IDIzLjYwOTM3NSAyLjk2NDg0NCAxOS4wMTU2MjUgMi45MzM1OTQgMTMuNDY4NzUgWiBNIDE5LjE5OTIxOSAxNCBDIDE0Ljg4NjcxOSAxNC4wMTU2MjUgMTMuODEyNSA4LjAxMTcxOSAxNy44NjcxODggNi41MzEyNSBDIDE2LjY3OTY4OCA1Ljg5ODQzOCAxNS4zNDc2NTYgNS41NzQyMTkgMTQgNS42MDE1NjIgQyAxMC42MDE1NjIgNS42MDE1NjIgNy41MzkwNjIgNy42NDg0MzggNi4yMzgyODEgMTAuNzg1MTU2IEMgNC45Mzc1IDEzLjkyNTc4MSA1LjY1NjI1IDE3LjUzOTA2MiA4LjA1ODU5NCAxOS45NDE0MDYgQyAxMC40NjA5MzggMjIuMzQzNzUgMTQuMDc0MjE5IDIzLjA2MjUgMTcuMjE0ODQ0IDIxLjc2MTcxOSBDIDIwLjM1MTU2MiAyMC40NjA5MzggMjIuMzk4NDM4IDE3LjM5ODQzOCAyMi4zOTg0MzggMTQgQyAyMi40MjE4NzUgMTMuNDY0ODQ0IDIyLjM3ODkwNiAxMi45MjU3ODEgMjIuMjY1NjI1IDEyLjM5ODQzOCBDIDIxLjYwOTM3NSAxMy40NDkyMTkgMjAuNDM3NSAxNC4wNjI1IDE5LjE5OTIxOSAxNCBaIE0gMTkuMTk5MjE5IDE0IFwiO1xuICAgIHN2Z1tcIkRJU05FWVwiXSA9IFwiTSAyMi4xNTIzNDQgOS4wODU5MzggQyAxOS4zMzU5MzggNS4xMTcxODggMTMuNjAxNTYyIDIuODkwNjI1IDEwLjQzNzUgMi4zNjMyODEgQyA2Ljk0MTQwNiAxLjc4MTI1IDQuODEyNSAyLjAwMzkwNiAzLjAzOTA2MiAyLjMyODEyNSBDIDIuMzgyODEyIDIuNDQ5MjE5IDAuMzkwNjI1IDIuODE2NDA2IDAuMDc4MTI1IDQuMzI0MjE5IEMgLTAuMTk5MjE5IDUuNjgzNTk0IDEuMTM2NzE5IDYuNjUyMzQ0IDEuNDA2MjUgNi44MzIwMzEgQyAxLjk0MTQwNiA3LjE4NzUgMi42NjAxNTYgNy4wNDI5NjkgMy4wMTk1MzEgNi41MTE3MTkgQyAzLjM3ODkwNiA1Ljk4MDQ2OSAzLjI0MjE4OCA1LjI1MzkwNiAyLjcxMDkzOCA0Ljg5MDYyNSBDIDIuNjg3NSA0Ljg3NSAyLjY2NDA2MiA0Ljg1NTQ2OSAyLjY0MDYyNSA0LjgzNTkzOCBDIDIuODI0MjE5IDQuNzczNDM4IDMuMDg5ODQ0IDQuNjk5MjE5IDMuNDYwOTM4IDQuNjI4OTA2IEMgNC45MjE4NzUgNC4zNTkzNzUgNi43NTM5MDYgNC4xMjEwOTQgMTAuMDU0Njg4IDQuNjcxODc1IEMgMTIuNzI2NTYyIDUuMTE3MTg4IDE3Ljg1OTM3NSA3LjA3ODEyNSAyMC4yNDYwOTQgMTAuNDM3NSBDIDIxLjI3MzQzOCAxMS44ODI4MTIgMjEuNjUyMzQ0IDEzLjQyNTc4MSAyMS4zNzg5MDYgMTUuMDE5NTMxIEMgMjEuMTEzMjgxIDE2LjU1ODU5NCAyMC40Mzc1IDE3LjYwMTU2MiAxOS4zMTI1IDE4LjIxNDg0NCBDIDE3LjI4NTE1NiAxOS4zMTY0MDYgMTQuMDc0MjE5IDE4Ljg0Mzc1IDExLjcwNzAzMSAxOC4xOTUzMTIgTCAxMS43MDcwMzEgMTMuMTk1MzEyIEMgMTIuNDc2NTYyIDEzLjE5NTMxMiAxMy4xOTkyMTkgMTMuMjY5NTMxIDE0LjEyODkwNiAxMy40NDE0MDYgQyAxNC43NDIxODggMTMuNTU4NTk0IDE1LjEwNTQ2OSAxMy44ODI4MTIgMTUuMjIyNjU2IDE0LjA3NDIxOSBDIDE1LjE5OTIxOSAxNC4wODU5MzggMTUuMTcxODc1IDE0LjA5NzY1NiAxNS4xNDA2MjUgMTQuMTA1NDY5IEMgMTQuNTI3MzQ0IDE0LjMxMjUgMTQuMTk1MzEyIDE0Ljk3MjY1NiAxNC40MDIzNDQgMTUuNTg1OTM4IEMgMTQuNjA1NDY5IDE2LjE5OTIxOSAxNS4yNjU2MjUgMTYuNTMxMjUgMTUuODgyODEyIDE2LjMyODEyNSBDIDE3LjIzNDM3NSAxNS44NzUgMTcuNjU2MjUgMTQuODM1OTM4IDE3LjU5NzY1NiAxNC4wMDc4MTIgQyAxNy41MDc4MTIgMTIuNjYwMTU2IDE2LjIyNjU2MiAxMS40NTMxMjUgMTQuNTU0Njg4IDExLjE0MDYyNSBDIDEzLjQ3NjU2MiAxMC45NDE0MDYgMTIuNjIxMDk0IDEwLjg1NTQ2OSAxMS43MDcwMzEgMTAuODU1NDY5IEwgMTEuNzA3MDMxIDguNzgxMjUgQyAxMS43MDcwMzEgOC4xMzY3MTkgMTEuMTgzNTk0IDcuNjEzMjgxIDEwLjUzOTA2MiA3LjYxMzI4MSBDIDkuODk0NTMxIDcuNjEzMjgxIDkuMzY3MTg4IDguMTM2NzE5IDkuMzY3MTg4IDguNzgxMjUgTCA5LjM2NzE4OCAxMC45NTcwMzEgQyA1LjA4MjAzMSAxMS4yODEyNSAzLjA2MjUgMTIuMTcxODc1IDIuNzIyNjU2IDEzLjg0NzY1NiBDIDIuMjE0ODQ0IDE2LjM2MzI4MSA2LjQ0NTMxMiAxOC42MzY3MTkgOC4zMjQyMTkgMTkuNTExNzE5IEMgOC4zODY3MTkgMTkuNTM5MDYyIDguNzY5NTMxIDE5LjY5OTIxOSA5LjM2NzE4OCAxOS45MTAxNTYgTCA5LjM2NzE4OCAyMS4wNjY0MDYgQyA5LjM2NzE4OCAyMS43MTQ4NDQgOS44OTQ1MzEgMjIuMjM4MjgxIDEwLjUzOTA2MiAyMi4yMzgyODEgQyAxMS4xODM1OTQgMjIuMjM4MjgxIDExLjcwNzAzMSAyMS43MTQ4NDQgMTEuNzA3MDMxIDIxLjA2NjQwNiBMIDExLjcwNzAzMSAyMC42MTMyODEgQyAxMy4wMjczNDQgMjAuOTQxNDA2IDE0LjU5Mzc1IDIxLjIxNDg0NCAxNi4xNjAxNTYgMjEuMjE0ODQ0IEMgMTcuNjU2MjUgMjEuMjE0ODQ0IDE5LjE1NjI1IDIwLjk2NDg0NCAyMC40Mjk2ODggMjAuMjczNDM4IEMgMjIuMTk5MjE5IDE5LjMwODU5NCAyMy4yOTI5NjkgMTcuNjc1NzgxIDIzLjY4MzU5NCAxNS40MTc5NjkgQyAyNC4wNjY0MDYgMTMuMTg3NSAyMy41NTQ2ODggMTEuMDU0Njg4IDIyLjE1MjM0NCA5LjA4NTkzOCBaIE0gOS4yNzczNDQgMTcuMzc1IEMgNy4yMjY1NjIgMTYuNDE3OTY5IDUuMjE0ODQ0IDE0Ljk2NDg0NCA1LjAzMTI1IDE0LjMyNDIxOSBDIDUuMTc5Njg4IDE0LjE2Nzk2OSA1Ljk2ODc1IDEzLjU4MjAzMSA5LjM2NzE4OCAxMy4zMDQ2ODggTCA5LjM2NzE4OCAxNy40MTAxNTYgQyA5LjMzOTg0NCAxNy4zOTg0MzggOS4zMDQ2ODggMTcuMzg2NzE5IDkuMjc3MzQ0IDE3LjM3NSBaIE0gOS4yNzczNDQgMTcuMzc1IFwiO1xuICAgIHN2Z1tcIkZPWFNQT1JUU1wiXSA9IFwiTSAwLjIzMDUgMTUuMTI1IEwgMC4yMzA1IDUgTCA2LjIxNDggNSBMIDYuMzk4NCA3Ljc2OTUgTCAzLjA0NjkgNy43Njk1IEwgMy4wNDY5IDkuMDg5OCBMIDUuNzc3MyA5LjA4OTggTCA1Ljc3NzMgMTEuODUxNiBMIDMuMDI3MyAxMS44NTE2IEwgMy4wMjczIDE1LjEyNSBMIDAuMjMwNSAxNS4xMjUgTSAyMy4yODEzIDE1LjA5MzggTCAyMC4yODUyIDkuODM5OCBMIDIzLjAwNzggNSBMIDIwLjAxMTcgNSBMIDE4Ljc2OTUgNy4xNzk3IEwgMTcuNTQ2OSA1IEwgMTQuNDQ1MyA1IEwgMTcuMjE4OCA5Ljg3NSBMIDE0LjI4MTMgMTUuMTAxNiBMIDE3LjI5MyAxNS4wOTc3IEwgMTguNzMwNSAxMi41MzkxIEwgMjAuMTgzNiAxNS4wOTM4IEwgMjMuMjgxMyAxNS4wOTM4IE0gMTEuOTEwMiAxMi4wOTc3IEwgMTEuOTEwMiA4LjA1MDggQyAxMS45MTAyIDcuNTg5OCAxMS41MTU2IDcuMTc1OCAxMS4wNzAzIDcuMTc1OCBDIDEwLjYyODkgNy4xNzU4IDEwLjI2OTUgNy41ODk4IDEwLjI2OTUgOC4wNTA4IEwgMTAuMjY5NSAxMi4wODIgQyAxMC4yNjk1IDEyLjU0NjkgMTAuNjI4OSAxMi45MTggMTEuMDcwMyAxMi45MTggQyAxMS41MTU2IDEyLjkxOCAxMS45MTAyIDEyLjU1ODYgMTEuOTEwMiAxMi4wOTc3IFogTSA2LjMyNDIgMTAuMDc0MiBDIDYuMzI0MiA3LjM1OTQgOC40NDE0IDUuMTUyMyAxMS4wNTg2IDUuMTUyMyBDIDEzLjY3NTggNS4xNTIzIDE1Ljc5NjkgNy4zNTk0IDE1Ljc5NjkgMTAuMDc0MiBDIDE1Ljc5NjkgMTIuNzkzIDEzLjY3NTggMTQuOTk2MSAxMS4wNTg2IDE0Ljk5NjEgQyA4LjQ0MTQgMTQuOTk2MSA2LjMyNDIgMTIuNzkzIDYuMzI0MiAxMC4wNzQyIFogTSAwIDE5LjUxOTUgTCAwIDE4Ljk5NjEgTCAwLjI2MTcgMTguNzM0NCBMIDIuMzg2NyAxOC43MzQ0IEwgMi40NjQ4IDE4LjY1NjMgTCAyLjQ2NDggMTguMTAxNiBMIDIuNDEwMiAxOC4wMzkxIEwgMC40Mzc1IDE4LjAzOTEgTCAwIDE3LjU5MzggTCAwIDE2LjMyMDMgTCAwLjUwMzkgMTUuODA4NiBMIDMuMzYzMyAxNS44MDg2IEwgMy4zNjMzIDE2LjM3MTEgTCAzLjE1NjMgMTYuNTg1OSBMIDEuMDgyIDE2LjU4NTkgTCAxLjAwMzkgMTYuNjY4IEwgMS4wMDM5IDE3LjIwNyBMIDEuMDYyNSAxNy4yNjU2IEwgMy4wMjczIDE3LjI2NTYgTCAzLjQ2NDggMTcuNzE0OCBMIDMuNDY0OCAxOS4wMDM5IEwgMi45NjA5IDE5LjUxOTUgTCAwIDE5LjUxOTUgTSA2LjQ2MDkgMTcuNjA1NSBMIDYuNjA5NCAxNy40NTMxIEwgNi42MDk0IDE2Ljc0MjIgTCA2LjQ2MDkgMTYuNTkzOCBMIDUuMDkzOCAxNi41OTM4IEwgNS4wOTM4IDE3LjYwNTUgWiBNIDQuMDg5OCAxNS44MDg2IEwgNy4wNTQ3IDE1LjgwODYgTCA3LjYxNzIgMTYuMzc4OSBMIDcuNjE3MiAxNy43NTM5IEwgNy4wNTQ3IDE4LjMyODEgTCA1LjA5MzggMTguMzI4MSBMIDUuMDkzOCAxOS41MTk1IEwgNC4wODk4IDE5LjUxOTUgWiBNIDEwLjUxNTYgMTguNjQ4NCBMIDEwLjcyMjcgMTguNDQxNCBMIDEwLjcyMjcgMTYuODIwMyBMIDEwLjUxNTYgMTYuNjEzMyBMIDkuMzQ3NyAxNi42MTMzIEwgOS4xNDA2IDE2LjgyMDMgTCA5LjE0MDYgMTguNDQxNCBMIDkuMzQ3NyAxOC42NDg0IFogTSA4LjE0NDUgMTguOTQ5MiBMIDguMTQ0NSAxNi4zNzg5IEwgOC42OTkyIDE1LjgwODYgTCAxMS4xNjAyIDE1LjgwODYgTCAxMS43MjI3IDE2LjM3ODkgTCAxMS43MjI3IDE4Ljk0OTIgTCAxMS4xNjAyIDE5LjUxOTUgTCA4LjY5OTIgMTkuNTE5NSBaIE0gMTQuNzM0NCAxNy4zOTg0IEwgMTQuODc1IDE3LjI1MzkgTCAxNC44NzUgMTYuNzEwOSBMIDE0LjczNDQgMTYuNTY2NCBMIDEzLjM4MjggMTYuNTY2NCBMIDEzLjM4MjggMTcuMzk4NCBaIE0gMTIuMzc4OSAxNS44MDg2IEwgMTUuMzc1IDE1LjgwODYgTCAxNS44Nzg5IDE2LjMyMDMgTCAxNS44Nzg5IDE3LjUwMzkgTCAxNS4zOTg0IDE3Ljk5NjEgTCAxNi4wMzEzIDE5LjUxOTUgTCAxNC45MTQxIDE5LjUxOTUgTCAxNC40NDUzIDE4LjE3MTkgTCAxMy4zODI4IDE4LjE3MTkgTCAxMy4zODI4IDE5LjUxOTUgTCAxMi4zNzg5IDE5LjUxOTUgWiBNIDE3LjM3ODkgMTYuNjY4IEwgMTYuMjE4OCAxNi42NjggTCAxNi4yMTg4IDE1LjgwODYgTCAxOS41MzkxIDE1LjgwODYgTCAxOS41MzkxIDE2LjY2OCBMIDE4LjM4MjggMTYuNjY4IEwgMTguMzgyOCAxOS41MTk1IEwgMTcuMzc4OSAxOS41MTk1IEwgMTcuMzc4OSAxNi42NjggTSAyMC4wODIgMTkuNjIxMSBMIDIwLjA4MiAxOS4wOTc3IEwgMjAuMzQzOCAxOC44MzU5IEwgMjIuNDY4OCAxOC44MzU5IEwgMjIuNTQ2OSAxOC43NTc4IEwgMjIuNTQ2OSAxOC4yMDMxIEwgMjIuNDkyMiAxOC4xNDA2IEwgMjAuNTE5NSAxOC4xNDA2IEwgMjAuMDgyIDE3LjY5NTMgTCAyMC4wODIgMTYuNDIxOSBMIDIwLjU4NTkgMTUuOTEwMiBMIDIzLjQ0NTMgMTUuOTEwMiBMIDIzLjQ0NTMgMTYuNDcyNyBMIDIzLjIzODMgMTYuNjg3NSBMIDIxLjE2OCAxNi42ODc1IEwgMjEuMDg1OSAxNi43Njk1IEwgMjEuMDg1OSAxNy4zMDg2IEwgMjEuMTQ0NSAxNy4zNjcyIEwgMjMuMTEzMyAxNy4zNjcyIEwgMjMuNTQ2OSAxNy44MTY0IEwgMjMuNTQ2OSAxOS4xMDU1IEwgMjMuMDQzIDE5LjYyMTEgTCAyMC4wODIgMTkuNjIxMVwiO1xuICAgIHN2Z1tcIk1BWFwiXSA9IFwiTSAzLjc0NDMgOCBDIDMuMDk0OSA4IDIuNDM4MSA4LjI5MzIgMS41OTU3IDguOTU3NCBMIDEuNTk1NyA4LjE2NyBMIDAgOC4xNjcgTCAwIDE0LjQ3NTYgTCAxLjY5NTkgMTQuNDc1NiBMIDEuNjk1OSAxMC41NTMxIEMgMi40MzgxIDkuOTU1NyAyLjc3NTggOS43NjY0IDMuMDU0MSA5Ljc2NjQgQyAzLjM4NDQgOS43NjY0IDMuNTk5NiA5Ljk3NDIgMy41OTk2IDEwLjUwMTIgTCAzLjU5OTYgMTQuNDc1NiBMIDUuMjk1NSAxNC40NzU2IEwgNS4yOTU1IDEwLjU0MiBDIDYuMDM3NyA5Ljk1NTcgNi4zNjggOS43NjY0IDYuNjUzNyA5Ljc2NjQgQyA2Ljk4NCA5Ljc2NjQgNy4xOTkyIDkuOTc0MiA3LjE5OTIgMTAuNTAxMiBMIDcuMTk5MiAxNC40NzU2IEwgOC44OTUxIDE0LjQ3NTYgTCA4Ljg5NTEgOS44OTI2IEMgOC44OTUxIDguNDcxMyA4LjEwNDcgOCA3LjM0MzkgOCBDIDYuNjk0NSA4IDYuMDM3NyA4LjI3NDYgNS4xNzMgOC45NDYzIEMgNC44OTQ3IDguMjQxMiA0LjI4OTggOCAzLjc0NDMgOCBaIE0gMTIuMzQyNiA4IEMgMTAuNjU3OCA4IDkuMjU4OCA5LjQ4MDcgOS4yNTg4IDExLjMyMTMgQyA5LjI1ODggMTMuMTYxOSAxMC42NTc4IDE0LjY0MjYgMTIuMzQyNiAxNC42NDI2IEMgMTMuMTc3NSAxNC42NDI2IDEzLjg5NzUgMTQuMzI3MSAxNC40NTA0IDEzLjY0NDMgTCAxNC40NTA0IDE0LjQ3NTYgTCAxNi4wNjg0IDE0LjQ3NTYgTCAxNi4wNjg0IDguMTY3IEwgMTQuNDUwNCA4LjE2NyBMIDE0LjQ1MDQgOC45OTgyIEMgMTMuODk3NSA4LjMxNTQgMTMuMTc3NSA4IDEyLjM0MjYgOCBaIE0gMTYuMzY1MiA4LjE2NyBDIDE3LjA2MjkgOS4yODQgMTcuODU3IDEwLjI4MjIgMTguNzgxMSAxMS4yODA1IEMgMTcuODU3IDEyLjMxOTUgMTcuMDYyOSAxMy40MDMxIDE2LjM2NTIgMTQuNDc1NiBMIDE4LjQxIDE0LjQ3NTYgQyAxOC44OTYxIDEzLjY3NCAxOS40NDE2IDEyLjk1MDQgMjAuMDY4NyAxMi4yNjc2IEMgMjAuNjg0OCAxMi45NTA0IDIxLjIwMDYgMTMuNjc0IDIxLjY4MyAxNC40NzU2IEwgMjMuNzUgMTQuNDc1NiBDIDIzLjA0MTIgMTMuMzY5NyAyMi4yNjkzIDEyLjMxOTUgMjEuMzQxNiAxMS4yODA1IEMgMjIuMjU4MiAxMC4yODIyIDIzLjA0MTIgOS4yNTA2IDIzLjc1IDguMTY3IEwgMjEuNzIzOCA4LjE2NyBDIDIxLjIxOTEgOC45Njg2IDIwLjY3MzYgOS42NDAyIDIwLjA2ODcgMTAuMzAwOCBDIDE5LjQ0OSA5LjY0MDIgMTguOTA3MiA4Ljk2ODYgMTguNDEgOC4xNjcgWiBNIDEyLjU5ODYgOS40NjIxIEMgMTMuNjA4IDkuNDYyMSAxNC40MjA3IDEwLjI4OTYgMTQuNDIwNyAxMS4zMjEzIEMgMTQuNDIwNyAxMi4zNTI5IDEzLjYwOCAxMy4xODA1IDEyLjU5ODYgMTMuMTgwNSBDIDExLjU5MyAxMy4xODA1IDEwLjc4MDMgMTIuMzUyOSAxMC43ODAzIDExLjMyMTMgQyAxMC43ODAzIDEwLjI4OTYgMTEuNTkzIDkuNDYyMSAxMi41OTg2IDkuNDYyMSBaIE0gMTIuNTk4NiA5Ljg4MTQgQyAxMS44MjY4IDkuODgxNCAxMS4xOTk2IDEwLjUyMzQgMTEuMTk5NiAxMS4zMjEzIEMgMTEuMTk5NiAxMi4xMTkxIDExLjgyNjggMTIuNzYxMSAxMi41OTg2IDEyLjc2MTEgQyAxMy4zNzA1IDEyLjc2MTEgMTMuOTk3NyAxMi4xMTkxIDEzLjk5NzcgMTEuMzIxMyBDIDEzLjk5NzcgMTAuNTIzNCAxMy4zNzA1IDkuODgxNCAxMi41OTg2IDkuODgxNCBaIE0gMTIuNTk4NiA5Ljg4MTRcIjtcbiAgICBzdmdbXCJNTEJUVlwiXSA9IFwiTSAyMy4yNTM5IDcuMDAzOSBDIDIzLjI2NTYgNi4yOTMgMjIuNjk1MyA1LjcxMDkgMjEuOTg4MyA1LjcwMzEgQyAyMS45ODA1IDUuNzAzMSAyMS45NzI3IDUuNzAzMSAyMS45NjQ4IDUuNzAzMSBMIDE2LjM4MjggNS43MDMxIEwgMTkuNTg1OSAxMS4wNjI1IEwgMTkuODc4OSAxMS4xMDE2IEwgMjAuMDY2NCAxMS4zNDM4IEwgMjAuMDY2NCAxMS41NzQyIEwgMjAuMjY5NSAxMS42MTcyIEwgMjAuNDU3IDExLjg3MTEgTCAyMC40NTcgMTIuMDg5OCBMIDIwLjY2NDEgMTIuMTI4OSBMIDIwLjg3NSAxMi4zNTk0IEwgMjAuODc1IDEyLjg2NzIgQyAyMS4xMjg5IDEzLjA5NzcgMjEuNDEwMiAxMy4yODUyIDIxLjcxODggMTMuNDI5NyBDIDIyIDEzLjUzOTEgMjIuMDMxMyAxMy45OTIyIDIyLjIwMzEgMTQuMjM0NCBDIDIyLjQxNDEgMTQuNTg1OSAyMi43MDcgMTQuNzI2NiAyMi42NDQ1IDE0LjkyNTggQyAyMi41MDM5IDE1LjQ0OTIgMjEuOTY0OCAxNi4zMzk4IDIxLjQ2NDggMTYuMzc4OSBMIDE5LjQ4MDUgMTYuMzc4OSBMIDE5LjQ4MDUgMTcuMjMwNSBMIDIxLjk2NDggMTcuMjMwNSBDIDIyLjY4MzYgMTcuMjI2NiAyMy4yNjE3IDE2LjY0NDUgMjMuMjU3OCAxNS45MjU4IEwgMjMuMjU3OCA3LjAwMzkgTSA5LjYwMTYgMTYuMzk0NSBMIDguNjQ0NSAxNi4zOTQ1IEMgOC42NDQ1IDEzLjk5MjIgOS40NTMxIDEyLjY2NDEgMTAuNDI1OCAxMi4zOTg0IEMgMTAuNTU4NiAxMi4zNzUgMTAuNDkyMiAxMS43MTg4IDEwLjMyNDIgMTEuNTE5NSBMIDkuNzY1NiAxMS41MTk1IEMgOS42NzU4IDExLjUxOTUgOS43MjY2IDExLjM0NzcgOS43MjY2IDExLjM0NzcgTCAxMC4xNzk3IDEwLjM3ODkgTCAxMC4xMjExIDEwLjEwOTQgTCA4LjQ0MTQgMTAuMTA5NCBMIDkuODIwMyA5LjE0NDUgQyA5Ljg4MjggNi41OTM4IDEyLjQ5NjEgNi4zOTQ1IDE0LjA2NjQgNy40NTcgQyAxNS4wMDM5IDguMDc4MSAxNS4wNzQyIDkuMzA4NiAxNS4wMDM5IDEwLjE1NjMgQyAxNC45OTIyIDEwLjIxMDkgMTQuNzU3OCAxMC4xNzU4IDE0Ljc1NzggMTAuMTc1OCBDIDE0Ljc1NzggMTAuMTc1OCAxNC42MDE2IDExLjExMzMgMTUuMDE1NiAxMS4xMTMzIEwgMTYuODUxNiAxMS4xMTMzIEMgMTcuNTk3NyAxMS4wODIgMTguMzIwMyAxMS41ODk4IDE4LjMyMDMgMTEuNTg5OCBMIDE4LjQ5NjEgMTAuOTQ1MyBMIDE0LjQ3NjYgNS43MDMxIEwgMS45OTYxIDUuNzAzMSBDIDEuNjUyMyA1LjY5OTIgMS4zMjAzIDUuODM1OSAxLjA3NDIgNi4wNzgxIEMgMC44MzIgNi4zMjQyIDAuNjk1MyA2LjY1NjMgMC42OTkyIDcuMDAzOSBMIDAuNjk5MiAxNS45Mjk3IEMgMC42OTUzIDE2LjI3MzQgMC44MjgxIDE2LjYwOTQgMS4wNzQyIDE2Ljg1MTYgQyAxLjMyMDMgMTcuMDk3NyAxLjY1MjMgMTcuMjM0NCAxLjk5NjEgMTcuMjM0NCBMIDEwLjA5NzcgMTcuMjM0NCBDIDkuOTAyMyAxNi44OTQ1IDkuNjc1OCAxNi41MDc4IDkuNjA1NSAxNi4zOTQ1IE0gMi41IDE0LjUgQyAyLjUgMTQuMDA3OCAyLjg5NDUgMTMuNjA5NCAzLjM4NjcgMTMuNjA5NCBDIDMuODc1IDEzLjYwOTQgNC4yNzM0IDE0LjAwNzggNC4yNzM0IDE0LjUgQyA0LjI3MzQgMTQuOTg4MyAzLjg3NSAxNS4zODY3IDMuMzg2NyAxNS4zODY3IEwgMy4zNzg5IDE1LjM4NjcgQyAyLjg5NDUgMTUuMzg2NyAyLjUgMTQuOTk2MSAyLjUgMTQuNTExNyBDIDIuNSAxNC41MDc4IDIuNSAxNC41MDM5IDIuNSAxNC41XCI7XG4gICAgc3ZnW1wiTkJBXCJdID0gXCJNIDcuODU1NSAyMS4xNjAyIEMgNy41NTQ3IDIwLjg5MDYgNy43NTM5IDIwLjc3MzQgNy43MzgzIDIwLjY1NjMgQyA3LjUzOTEgMTkuODIwMyA2Ljg2NzIgMTkuMzIwMyA3LjIxODggMTkuMDU0NyBDIDcuMTQ4NCAxOC44NDM4IDcuMDY2NCAxOC42MzY3IDYuOTY4OCAxOC40MzM2IEMgNS45MzM2IDE3Ljg0NzcgNS4wNjI1IDE2Ljg3ODkgNC45MTQxIDE2Ljc0NjEgQyA0Ljc2MTcgMTYuNjEzMyA0LjQyOTcgMTYuMzQzOCA0LjM2MzMgMTYuMTk1MyBDIDQuMjk2OSAxNi4wNDMgMi45MDYzIDE0LjIzODMgMi42MjUgMTMuNjIxMSBMIDIuMTQwNiAxMy41NTQ3IEMgMS45MjE5IDEyLjYzNjcgMS4xNzE5IDExLjg2NzIgMS4xNTIzIDEwLjk2NDggQyAxLjE3NTggMTAuNTQzIDEuMjUgMTAuMTI4OSAxLjM3MTEgOS43MjY2IEMgMS40Njg4IDkuNTc4MSAxLjU4NTkgOS40NDE0IDEuNzIyNyA5LjMyNDIgTCAxLjcyMjcgOS4wNzQyIEMgMC42NTIzIDkuMTA5NCAwLjk1MzEgOC45OTIyIDAuNzY5NSA4LjU3NDIgQyAwLjU4NTkgOC4xNTYzIDAuNzM0NCA4LjIyMjcgMC43ODUyIDguMDIzNCBDIDAuOTM3NSA3LjQzNzUgMS40MDIzIDYuNTE5NSAxLjYwNTUgNi4xMDE2IEMgMS44MDQ3IDUuNjgzNiAxLjg3MTEgNS4zODI4IDEuODcxMSA1LjM4MjggQyAyLjY3NTggMy43NjE3IDIuOTc2NiAzLjg3ODkgMy45MjU4IDMuNzc3MyBMIDMuOTc2NiAzLjcxMDkgQyA0LjkyOTcgMy42NzU4IDQuNzgxMyAzLjU5MzggNC45MTQxIDIuNjc1OCBDIDQuNzgxMyAyLjc0MjIgNC43MzA1IDIuMzkwNiA0LjczMDUgMi4zOTA2IEMgNC42NDQ1IDEuODcxMSA0Ljg3ODkgMS45NzI3IDQuOTgwNSAxLjk1NyBDIDQuOTk2MSAxLjEwMTYgNS4wOTc3IDAuODIwMyA1LjcxNDggMC41ODU5IEwgMi40OTIyIDAuNTg1OSBDIDEuNDM3NSAwLjU4NTkgMC41ODU5IDEuNDM3NSAwLjU4NTkgMi40ODgzIEwgMC41ODU5IDIxLjUwNzggQyAwLjU4NTkgMjIuNTYyNSAxLjQzNzUgMjMuNDE0MSAyLjQ5MjIgMjMuNDE0MSBMIDguMTA1NSAyMy40MTQxIEMgNy40NTMxIDIzLjA2MjUgNy44Mzk4IDIyLjQxNDEgNy44NTU1IDIxLjE2MDIgTSAyMS41MDc4IDAuNTg1OSBMIDYuMjg1MiAwLjU4NTkgQyA2LjUxNTYgMC42NDg0IDYuNzE0OCAwLjc5NjkgNi44MzU5IDEuMDAzOSBDIDcuMDcwMyAxLjAxOTUgNy4zNTU1IDEuNTU0NyA2LjkxOCAyLjMyNDIgQyA3LjEyMTEgMi40NTcgNi45Njg4IDIuNjQwNiA2LjgyMDMgMi44NTk0IEMgNi42NjggMy4wNzQyIDYuNzM0NCAzLjA1ODYgNi42MTcyIDMuMDQzIEMgNi40NTMxIDMuMzk0NSA2LjI1IDMuNzI2NiA2LjEwMTYgMy43NDIyIEMgNi4wMzUyIDMuODIwMyA2LjAyNzMgMy45Mjk3IDYuMDgyIDQuMDExNyBDIDYuMzA4NiA0LjEwMTYgNi41MTU2IDQuMjI2NiA2LjcwMzEgNC4zNzg5IEwgNi43MDMxIDQuNDYwOSBDIDYuODY3MiA0LjU2MjUgNi45NTMxIDQuNjQ0NSA3LjEzNjcgNC43NDYxIEMgNy41ODU5IDUuMDMxMyA4LjE1NjMgNS41NDY5IDguMDg5OCA3LjMyMDMgQyA4LjIyMjcgNy43MDMxIDguMjczNCA4LjQ1NyA4LjM5MDYgOC43MDcgQyA4LjUwNzggOC45NTcgOC43OTMgOS40OTIyIDguODU5NCA5LjkyNTggQyA4Ljg1OTQgOS45MjU4IDguOTI1OCAxMC41NzgxIDkuMDA3OCAxMC42NjQxIEwgOS4wNTg2IDEwLjY2NDEgQyA5LjQ0MTQgMTAuNzQ2MSA5LjM3NSAxMC43OTY5IDkuNDEwMiAxMC44NjMzIEwgOS41MDc4IDEwLjk0NTMgQyA5LjYwOTQgMTAuOTk2MSA5Ljc3NzMgMTEuMDQ2OSA5Ljc3NzMgMTEuMjMwNSBMIDkuODU5NCAxMS4zNjMzIEMgOS45MTAyIDExLjQ0NTMgOS45NTcgMTEuNTI3MyA5Ljk5NjEgMTEuNjE3MiBDIDEwLjEyODkgMTEuOTkyMiAxMC4xMjg5IDEyLjQwNjMgOS45OTYxIDEyLjc4NTIgTCA5Ljk5NjEgMTIuODM1OSBDIDkuODQ3NyAxMy4yMDMxIDkuNTc0MiAxMy41MDM5IDkuMjI2NiAxMy42ODc1IEwgOS4xOTE0IDEzLjY4NzUgTCA5LjE0MDYgMTMuNzIyNyBDIDguOTE4IDEzLjgyODEgOC42NzE5IDEzLjg4NjcgOC40MjE5IDEzLjg4NjcgQyA3LjQ4ODMgMTMuNzY1NiA2LjgzMiAxMi45MDYzIDYuOTU3IDExLjk3MjcgQyA3LjAzOTEgMTEuMzU5NCA3LjQ0NTMgMTAuODM5OCA4LjAyMzQgMTAuNjEzMyBDIDcuODIwMyAxMC4xMjg5IDcuNDIxOSA5LjM0MzggNy4zMDQ3IDkuMDkzOCBDIDcuMTg3NSA4LjgzOTggNi45MDIzIDcuMjE4OCA2Ljg1MTYgNi45MDIzIEMgNi44MDA4IDYuNTg1OSA2LjExNzIgNy4zMjAzIDYuMTE3MiA3LjM1NTUgQyA2LjExNzIgNy4zODY3IDUuNTgyIDguNjkxNCA1LjU2NjQgOC43NTc4IEMgNS41NTQ3IDguODI4MSA1LjU0NjkgOC45MDIzIDUuNTQ2OSA4Ljk3NjYgQyA1LjU0NjkgOC45NzY2IDUuODAwOCA5LjAwNzggNS45MzM2IDkuNDI1OCBDIDYuMDY2NCA5Ljg0MzggNi41IDExLjM5ODQgNi41IDExLjM5ODQgTCA2LjM4MjggMTEuNTE1NiBDIDYuOTE4IDEzLjMwNDcgNi43MzQ0IDE0LjA3NDIgNi45Njg4IDE0LjYwNTUgQyA3LjIwMzEgMTUuMTQwNiA3LjM1NTUgMTUuMjQyMiA3LjYwNTUgMTUuODc4OSBDIDcuODU1NSAxNi41MTE3IDcuOTg4MyAxOC4xMTcyIDguMDc0MiAxOC4xODM2IEMgOC4zNTU1IDE4LjU1MDggOC41MjM0IDE4LjgzNTkgOC41MjM0IDE5LjAzNTIgQyA4LjUyMzQgMTkuMjM4MyA4LjI3MzQgMTkuODU1NSA4LjM3NSAyMC4yMjI3IEMgOC40NzI3IDIwLjU4OTggOC40NTcgMjAuOTA2MyA4LjU1ODYgMjAuOTkyMiBDIDguNjU2MyAyMS4wNzQyIDguNjQwNiAyMS4xNzU4IDguNjA1NSAyMS4yNDIyIEMgOC41ODk4IDIxLjI3MzQgOC41NzgxIDIxLjMwODYgOC41NzQyIDIxLjM0MzggQyA4LjcyMjcgMjEuOTEwMiA5LjI0MjIgMjIuODYzMyA4LjQyMTkgMjMuMzYzMyBMIDguMzc1IDIzLjM5ODQgTCAyMS41NDMgMjMuMzk4NCBDIDIyLjU4MiAyMy4zOTA2IDIzLjQyMTkgMjIuNTUwOCAyMy40MzM2IDIxLjUxMTcgTCAyMy40MzM2IDIuNDkyMiBDIDIzLjQyMTkgMS40MzM2IDIyLjU2NjQgMC41ODU5IDIxLjUwNzggMC41ODU5IFogTSAyMS41MDc4IDAuNTg1OSBNIDE1Ljc5MyA1LjExMzMgTCAxOS4yMzgzIDUuMTEzMyBMIDE4LjUzNTIgMTYuNjI4OSBMIDE3Ljc4MTMgNS4xMTMzIEwgMjEuMTQwNiA1LjExMzMgTCAxOS42NTYzIDE4LjkwMjMgTCAxNy4yNDYxIDE4LjkwMjMgWiBNIDE1LjM0MzggNi44MzU5IEwgMTMuODg2NyA2LjgzNTkgTCAxMy44ODY3IDE4Ljg4NjcgTCAxMi4wMzUyIDE4Ljg4NjcgTCAxMi4wMzUyIDYuODM1OSBMIDEwLjYxMzMgNi44MzU5IEwgMTAuNjEzMyA1LjA5NzcgTCAxNS4zNDM4IDUuMDk3NyBaIE0gMy41NDMgMjIuMjI2NiBMIDMuNTQzIDE4Ljc4NTIgTCA0LjIxMDkgMTguNzg1MiBDIDQuNTk3NyAxOC43ODUyIDQuODI4MSAxOC45ODQ0IDQuODI4MSAxOS40NzI3IEwgNC44MjgxIDE5Ljk4ODMgQyA0LjgyODEgMjAuMzA0NyA0LjczMDUgMjAuNDU3IDQuNTk3NyAyMC41MzkxIEMgNC43NTM5IDIwLjY1NjMgNC44NDM4IDIwLjg0MzggNC44MjgxIDIxLjA0MyBMIDQuODI4MSAyMS41NDMgQyA0LjgyODEgMjIuMDExNyA0LjU3ODEgMjIuMjI2NiA0LjIxMDkgMjIuMjI2NiBaIE0gNC4wMTE3IDIwLjcyMjcgTCA0LjAxMTcgMjEuNzkzIEwgNC4xOTUzIDIxLjc5MyBDIDQuMzQzOCAyMS43OTMgNC4zOTQ1IDIxLjcxMDkgNC4zOTQ1IDIxLjU0MyBMIDQuMzk0NSAyMC45NTcgQyA0LjM5NDUgMjAuNzkzIDQuMzQzOCAyMC43MjI3IDQuMTk1MyAyMC43MjI3IFogTSA0LjAxMTcgMTkuMjE4OCBMIDQuMDExNyAyMC4zNTU1IEwgNC4xNzk3IDIwLjM1NTUgQyA0LjM0MzggMjAuMzU1NSA0LjM3ODkgMjAuMzA0NyA0LjM3ODkgMjAuMTA1NSBMIDQuMzc4OSAxOS40Mzc1IEMgNC4zNzg5IDE5LjI2OTUgNC4zMjgxIDE5LjIwMzEgNC4xNzk3IDE5LjIwMzEgTCA0LjAxMTcgMTkuMjAzMSBaIE0gNS45MzM2IDIxLjUyNzMgTCA1LjUxNTYgMjEuNTI3MyBMIDUuNDY0OCAyMi4yMjY2IEwgNC45OTYxIDIyLjIyNjYgTCA1LjQxNDEgMTguNzg1MiBMIDYuMDY2NCAxOC43ODUyIEwgNi40Njg4IDIyLjIyNjYgTCA1Ljk4NDQgMjIuMjI2NiBaIE0gNS43MTQ4IDE5LjE2OCBMIDUuNjk5MiAxOS4xNjggQyA1LjY2NDEgMTkuNTg1OSA1LjYxNzIgMjAuMzA0NyA1LjU5NzcgMjAuNTM5MSBMIDUuNTQ2OSAyMS4xNDA2IEwgNS44OTg0IDIxLjE0MDYgTCA1Ljg0NzcgMjAuNTM5MSBDIDUuODMyIDIwLjMwNDcgNS43NjU2IDE5LjU4NTkgNS43MTQ4IDE5LjE2OCBNIDIuMTg3NSAyMi4yMjY2IEwgMS43ODkxIDIyLjIyNjYgTCAxLjc4OTEgMTguNzg1MiBMIDIuNDIxOSAxOC43ODUyIEwgMi45NDE0IDIxLjYwOTQgQyAyLjg5MDYgMjAuOTQxNCAyLjgzOTggMjAuMTIxMSAyLjgzOTggMTkuNDIxOSBMIDIuODM5OCAxOC43ODUyIEwgMy4yNDIyIDE4Ljc4NTIgTCAzLjI0MjIgMjIuMjI2NiBMIDIuNjU2MyAyMi4yMjY2IEwgMi4xNDA2IDE5LjQ3MjcgQyAyLjE3MTkgMjAuMTA1NSAyLjE4NzUgMjAuNjI1IDIuMTg3NSAyMS4xNDA2IFogTSAyLjE4NzUgMjIuMjI2NlwiO1xuICAgIHN2Z1tcIlBSSU1FVklERU9cIl0gPSBcIk0gMS4xNjAxNTYgMi40NTMxMjUgWiBNIDEuMTYwMTU2IDIuNDUzMTI1IFogTSAxMC4yNDYwOTQgMC40MTQwNjIgQyA5Ljc5Mjk2OSAwLjQxNDA2MiA5LjUyMzQzOCAwLjYzNjcxOSA5LjQ4ODI4MSAxLjA0Mjk2OSBDIDkuNDY4NzUgMS40NTMxMjUgOS43MDMxMjUgMS42OTE0MDYgMTAuMDI3MzQ0IDEuNzUgQyAxMC4xNTYyNSAxLjc3NzM0NCAxMC4yODUxNTYgMS43NzczNDQgMTAuNDE0MDYyIDEuNzUgQyAxMC43MTA5MzggMS43MTA5MzggMTAuOTMzNTk0IDEuNDY4NzUgMTAuOTUzMTI1IDEuMTcxODc1IEMgMTAuOTgwNDY5IDAuODI0MjE5IDEwLjgyNDIxOSAwLjU1NDY4OCAxMC41MTU2MjUgMC40NTMxMjUgQyAxMC40MjU3ODEgMC40MjU3ODEgMTAuMzM5ODQ0IDAuNDA2MjUgMTAuMjQ2MDk0IDAuNDE0MDYyIFogTSAzLjQ5NjA5NCAyLjMyNDIxOSBDIDMuMDQ2ODc1IDIuMzE2NDA2IDIuNjM2NzE5IDIuNDcyNjU2IDIuMjUzOTA2IDIuNzU3ODEyIEMgMi4yMTg3NSAyLjc4OTA2MiAyLjE3OTY4OCAyLjgxNjQwNiAyLjEyODkwNiAyLjg0Mzc1IEMgMi4xMTcxODggMi44MzU5MzggMi4xMDkzNzUgMi44MzIwMzEgMi4xMDkzNzUgMi44MjQyMTkgQyAyLjA4OTg0NCAyLjc2OTUzMSAyLjA3ODEyNSAyLjcwNzAzMSAyLjA2MjUgMi42NTYyNSBDIDIuMDE1NjI1IDIuNTA3ODEyIDEuOTYwOTM4IDIuNDYwOTM4IDEuODA4NTk0IDIuNDYwOTM4IEMgMS42MzY3MTkgMi40NjA5MzggMS40NTcwMzEgMi40NjQ4NDQgMS4yODUxNTYgMi40NjA5MzggQyAxLjE2MDE1NiAyLjQ1MzEyNSAxLjAzOTA2MiAyLjQ3MjY1NiAwLjk0MTQwNiAyLjU3NDIxOSBDIDAuOTQxNDA2IDQuNTY2NDA2IDAuOTQ5MjE5IDYuNTcwMzEyIDAuOTQ5MjE5IDguNTU0Njg4IEMgMS4wMjM0MzggOC42NzU3ODEgMS4xMzY3MTkgOC42OTUzMTIgMS4yNzM0MzggOC42OTUzMTIgQyAxLjQ3NjU2MiA4LjY5MTQwNiAxLjY4MzU5NCA4LjY5NTMxMiAxLjg4NjcxOSA4LjY5NTMxMiBDIDIuMjQ2MDk0IDguNjk1MzEyIDIuMjQ2MDk0IDguNjk1MzEyIDIuMjQ2MDk0IDguMzM5ODQ0IEwgMi4yNDYwOTQgNi43MTg3NSBDIDIuMjQ2MDk0IDYuNjc5Njg4IDIuMjI2NTYyIDYuNjI4OTA2IDIuMjY1NjI1IDYuNTk3NjU2IEMgMi41NTQ2ODggNi44MjAzMTIgMi44OTg0MzggNi45NTMxMjUgMy4yNTc4MTIgNi45ODgyODEgQyAzLjc2NTYyNSA3LjA0Mjk2OSA0LjIxNDg0NCA2LjkxNDA2MiA0LjYwMTU2MiA2LjU3ODEyNSBDIDQuODc4OTA2IDYuMzIwMzEyIDUuMDg1OTM4IDUuOTg4MjgxIDUuMTk1MzEyIDUuNjI1IEMgNS4zNDM3NSA1LjE2MDE1NiA1LjM1NTQ2OSA0LjY3OTY4OCA1LjMxNjQwNiA0LjIwNzAzMSBDIDUuMjk2ODc1IDMuOTEwMTU2IDUuMjE0ODQ0IDMuNjEzMjgxIDUuMDkzNzUgMy4zNTE1NjIgQyA0Ljg1OTM3NSAyLjg1OTM3NSA0LjUgMi41IDMuOTUzMTI1IDIuMzcxMDk0IEMgMy43OTY4NzUgMi4zMzU5MzggMy42NDQ1MzEgMi4zMjQyMTkgMy40OTYwOTQgMi4zMjQyMTkgWiBNIDE0LjY2MDE1NiAyLjMyNDIxOSBDIDE0LjUxNTYyNSAyLjMyNDIxOSAxNC4zNzUgMi4zMzU5MzggMTQuMjM0Mzc1IDIuMzcxMDk0IEMgMTMuODYzMjgxIDIuNDM3NSAxMy41MzEyNSAyLjYwMTU2MiAxMy4yMTQ4NDQgMi43OTY4NzUgQyAxMy4xNzk2ODggMi44MTY0MDYgMTMuMTQwNjI1IDIuODU5Mzc1IDEzLjA4NTkzOCAyLjg1OTM3NSBDIDEzLjA1ODU5NCAyLjc2OTUzMSAxMy4wMzkwNjIgMi42OTUzMTIgMTMuMDExNzE5IDIuNjIxMDk0IEMgMTIuOTc2NTYyIDIuNTE5NTMxIDEyLjkxNzk2OSAyLjQ2MDkzOCAxMi44MDg1OTQgMi40NjA5MzggTCAxMi4xMDE1NjIgMi40NjA5MzggQyAxMi4wMzEyNSAyLjQ2MDkzOCAxMS45NjQ4NDQgMi41IDExLjkzNzUgMi41NjY0MDYgQyAxMS45MzM1OTQgMi42MTMyODEgMTEuOTI1NzgxIDIuNjYwMTU2IDExLjkyNTc4MSAyLjcwNzAzMSBMIDExLjkyNTc4MSA2LjY1NjI1IEMgMTEuOTI1NzgxIDYuODUxNTYyIDExLjk3MjY1NiA2LjkxNDA2MiAxMi4xNzU3ODEgNi45MTQwNjIgTCAxMi45Mzc1IDYuOTE0MDYyIEMgMTMuMTQ4NDM4IDYuOTE0MDYyIDEzLjE5NTMxMiA2Ljg2NzE4OCAxMy4xOTUzMTIgNi42NTYyNSBMIDEzLjE5NTMxMiAzLjYxMzI4MSBDIDEzLjE3OTY4OCAzLjU3NDIxOSAxMy4yMTQ4NDQgMy41MTk1MzEgMTMuMjUzOTA2IDMuNTAzOTA2IEMgMTMuNTY2NDA2IDMuMzU1NDY5IDEzLjkxNzk2OSAzLjI4OTA2MiAxNC4yNTM5MDYgMy4zMTY0MDYgQyAxNC40NDkyMTkgMy4zMjQyMTkgMTQuNjEzMjgxIDMuNDU3MDMxIDE0LjY1MjM0NCAzLjY1MjM0NCBDIDE0LjY3OTY4OCAzLjc1IDE0LjY4NzUgMy44NTU0NjkgMTQuNjg3NSAzLjk0OTIxOSBMIDE0LjY4NzUgNi42NDQ1MzEgQyAxNC42ODc1IDYuODU5Mzc1IDE0LjcyNjU2MiA2LjkwNjI1IDE0Ljk0MTQwNiA2LjkwNjI1IEwgMTUuNTQyOTY5IDYuOTA2MjUgQyAxNS42Mjg5MDYgNi45MDYyNSAxNS43MTg3NSA2LjkwNjI1IDE1LjgwNDY4OCA2LjkwMjM0NCBDIDE1Ljg4NjcxOSA2LjkwMjM0NCAxNS45NDkyMTkgNi44NDc2NTYgMTUuOTQ5MjE5IDYuNzY1NjI1IEMgMTUuOTYwOTM4IDYuNzEwOTM4IDE1Ljk2MDkzOCA2LjY1NjI1IDE1Ljk2MDkzOCA2LjYwNTQ2OSBMIDE1Ljk2MDkzOCAzLjYwNTQ2OSBDIDE1Ljk1MzEyNSAzLjU1ODU5NCAxNS45ODA0NjkgMy41MTE3MTkgMTYuMDI3MzQ0IDMuNSBDIDE2LjMzMjAzMSAzLjM1NTQ2OSAxNi42NzE4NzUgMy4yODkwNjIgMTcuMDA3ODEyIDMuMzE2NDA2IEMgMTcuMTkxNDA2IDMuMzI0MjE5IDE3LjM1MTU2MiAzLjQ1MzEyNSAxNy4zOTA2MjUgMy42MjUgQyAxNy40MjU3ODEgMy43MjY1NjIgMTcuNDMzNTk0IDMuODI4MTI1IDE3LjQyNTc4MSAzLjkzNzUgTCAxNy40MjU3ODEgNi41NzgxMjUgQyAxNy40MjU3ODEgNi42NDQ1MzEgMTcuNDI1NzgxIDYuNzA3MDMxIDE3LjQ0MTQwNiA2Ljc2NTYyNSBDIDE3LjQ1MzEyNSA2LjgzMjAzMSAxNy41MDc4MTIgNi44OTQ1MzEgMTcuNTc0MjE5IDYuOTAyMzQ0IEMgMTcuNjIxMDk0IDYuOTA2MjUgMTcuNjY3OTY5IDYuOTA2MjUgMTcuNzE0ODQ0IDYuOTA2MjUgTCAxOC40MTAxNTYgNi45MDYyNSBDIDE4LjY2Nzk2OSA2LjkwNjI1IDE4LjcwMzEyNSA2Ljg3NSAxOC43MDMxMjUgNi42MTcxODggTCAxOC43MDMxMjUgMy42NjAxNTYgQyAxOC43MDMxMjUgMy41OTM3NSAxOC43MDMxMjUgMy41MzEyNSAxOC42OTUzMTIgMy40NzI2NTYgQyAxOC42Njc5NjkgMy4xNzU3ODEgMTguNTg1OTM4IDIuODk4NDM4IDE4LjM3MTA5NCAyLjY3NTc4MSBDIDE4LjE0ODQzOCAyLjQzNzUgMTcuODUxNTYyIDIuMzQzNzUgMTcuNTI3MzQ0IDIuMzMyMDMxIEMgMTcuMDc0MjE5IDIuMzA0Njg4IDE2LjYyODkwNiAyLjQwNjI1IDE2LjIzMDQ2OSAyLjYxMzI4MSBDIDE2LjA3ODEyNSAyLjY5NTMxMiAxNS45MjU3ODEgMi43ODEyNSAxNS43ODUxNTYgMi44NzEwOTQgQyAxNS43NzczNDQgMi44NTkzNzUgMTUuNzczNDM4IDIuODU5Mzc1IDE1Ljc3NzM0NCAyLjg1MTU2MiBDIDE1Ljc3MzQzOCAyLjg0Mzc1IDE1Ljc1NzgxMiAyLjgzMjAzMSAxNS43NDYwOTQgMi44MDg1OTQgQyAxNS41OTc2NTYgMi41ODU5MzggMTUuMzU1NDY5IDIuNDI1NzgxIDE1LjA4NTkzOCAyLjM3MTA5NCBDIDE0Ljk0MTQwNiAyLjMzNTkzOCAxNC44MDA3ODEgMi4zMjQyMTkgMTQuNjYwMTU2IDIuMzI0MjE5IFogTSAyMS44OTQ1MzEgMi4zNjMyODEgQyAyMS43MDcwMzEgMi4zNDM3NSAyMS41MTE3MTkgMi4zNTE1NjIgMjEuMzIwMzEyIDIuMzcxMDk0IEMgMjAuNDIxODc1IDIuNDgwNDY5IDE5LjgzNTkzOCAyLjk3MjY1NiAxOS41NjY0MDYgMy44MzU5MzggQyAxOS4zNzUgNC40MjE4NzUgMTkuNDAyMzQ0IDUuMDE1NjI1IDE5LjU1MDc4MSA1LjYxMzI4MSBDIDE5Ljc1MzkwNiA2LjM2NzE4OCAyMC4yNTM5MDYgNi44MjAzMTIgMjEuMDE1NjI1IDYuOTgwNDY5IEMgMjEuNDQ5MjE5IDcuMDc4MTI1IDIxLjg4MjgxMiA3LjA1NDY4OCAyMi4zMjAzMTIgNi45ODgyODEgQyAyMi41NTA3ODEgNi45NDkyMTkgMjIuNzc3MzQ0IDYuODk0NTMxIDIyLjk5NjA5NCA2LjgwNDY4OCBDIDIzLjEyNSA2Ljc1NzgxMiAyMy4xOTE0MDYgNi42Nzk2ODggMjMuMTgzNTk0IDYuNTMxMjUgQyAyMy4xODM1OTQgNi4zOTQ1MzEgMjMuMTgzNTk0IDYuMjUzOTA2IDIzLjE4MzU5NCA2LjEwOTM3NSBDIDIzLjE4MzU5NCA1LjkzMzU5NCAyMy4xMTcxODggNS44ODI4MTIgMjIuOTUzMTI1IDUuOTIxODc1IEMgMjIuNzg1MTU2IDUuOTYwOTM4IDIyLjYyODkwNiA1Ljk5NjA5NCAyMi40NjA5MzggNi4wMzEyNSBDIDIyLjEwOTM3NSA2LjEwNTQ2OSAyMS43NDYwOTQgNi4xMDU0NjkgMjEuMzg2NzE5IDYuMDQyOTY5IEMgMjAuOTAyMzQ0IDUuOTQ5MjE5IDIwLjU5Mzc1IDUuNTMxMjUgMjAuNjE3MTg4IDUuMDE1NjI1IEMgMjAuNjcxODc1IDUuMDIzNDM4IDIwLjcyNjU2MiA1LjAzMTI1IDIwLjc4MTI1IDUuMDQyOTY5IEMgMjEuMjA3MDMxIDUuMTE3MTg4IDIxLjY0NDUzMSA1LjEyNSAyMi4wNzgxMjUgNS4wNTg1OTQgQyAyMi4zMjgxMjUgNS4wMjM0MzggMjIuNTYyNSA0Ljk0OTIxOSAyMi43ODUxNTYgNC44MjgxMjUgQyAyMy4wNDI5NjkgNC42Nzk2ODggMjMuMjMwNDY5IDQuNDc2NTYyIDIzLjMxMjUgNC4xOTUzMTIgQyAyMy41MDc4MTIgMy40NzI2NTYgMjMuMjAzMTI1IDIuNzUgMjIuNDUzMTI1IDIuNDgwNDY5IEMgMjIuMjczNDM4IDIuNDI1NzgxIDIyLjA4MjAzMSAyLjM4NjcxOSAyMS44OTQ1MzEgMi4zNjMyODEgWiBNIDguODIwMzEyIDIuNDEwMTU2IEMgOC40NDkyMTkgMi4zODY3MTkgOC4wODU5MzggMi41IDcuNzg5MDYyIDIuNzMwNDY5IEMgNy42NzE4NzUgMi44MTY0MDYgNy41NjY0MDYgMi45MTc5NjkgNy40NTcwMzEgMy4wMTk1MzEgQyA3LjQzNzUgMy4wNTQ2ODggNy40MDIzNDQgMy4wNzQyMTkgNy4zNjMyODEgMy4wODU5MzggQyA3LjMyODEyNSAyLjkzMzU5NCA3LjI5Mjk2OSAyLjc4OTA2MiA3LjI1MzkwNiAyLjY0ODQzOCBDIDcuMjE0ODQ0IDIuNTA3ODEyIDcuMTQ0NTMxIDIuNDUzMTI1IDYuOTk2MDk0IDIuNDUzMTI1IEwgNi40NDkyMTkgMi40NTMxMjUgQyA2LjE4NzUgMi40NTMxMjUgNi4xNjAxNTYgMi40ODQzNzUgNi4xNjAxNTYgMi43NSBMIDYuMTYwMTU2IDYuNjI1IEMgNi4xNjAxNTYgNi42NjQwNjIgNi4xNjAxNTYgNi43MTA5MzggNi4xNjc5NjkgNi43NTc4MTIgQyA2LjE3NTc4MSA2LjgzMjAzMSA2LjIyNjU2MiA2Ljg5NDUzMSA2LjMwMDc4MSA2LjkwMjM0NCBDIDYuMzQzNzUgNi45MDYyNSA2LjM5MDYyNSA2LjkwNjI1IDYuNDI5Njg4IDYuOTA2MjUgTCA3LjE3MTg3NSA2LjkwNjI1IEMgNy4yMDcwMzEgNi45MDYyNSA3LjI1MzkwNiA2LjkwNjI1IDcuMjkyOTY5IDYuOTAyMzQ0IEMgNy4zNjcxODggNi45MDIzNDQgNy40Mjk2ODggNi44NDc2NTYgNy40Mjk2ODggNi43NzM0MzggQyA3LjQzNzUgNi43MTg3NSA3LjQzNzUgNi42NzE4NzUgNy40Mzc1IDYuNjI1IEwgNy40Mzc1IDMuODgyODEyIEMgNy40Mzc1IDMuODI0MjE5IDcuNDM3NSAzLjc2OTUzMSA3LjUxNTYyNSAzLjczNDM3NSBDIDcuODc1IDMuNjIxMDk0IDguMjQ2MDk0IDMuNTQ2ODc1IDguNjMyODEyIDMuNTc4MTI1IEMgOC43MDcwMzEgMy41ODU5MzggOC43ODUxNTYgMy41ODU5MzggOC44NTkzNzUgMy41ODU5MzggQyA4Ljk2MDkzOCAzLjU3NDIxOSA5LjAwMzkwNiAzLjUzMTI1IDkuMDI3MzQ0IDMuNDI5Njg4IEMgOS4wNDI5NjkgMy4zNTE1NjIgOS4wNDI5NjkgMy4yNzczNDQgOS4wMzUxNTYgMy4xOTUzMTIgQyA5LjAzNTE1NiAzIDkuMDQyOTY5IDIuODA0Njg4IDkuMDM1MTU2IDIuNjA5Mzc1IEMgOS4wMjM0MzggMi40NjQ4NDQgOC45Njg3NSAyLjQxNzk2OSA4LjgyMDMxMiAyLjQxMDE1NiBaIE0gOS43NzczNDQgMi40NTMxMjUgQyA5LjY0NDUzMSAyLjQ2MDkzOCA5LjU4OTg0NCAyLjUxMTcxOSA5LjU4MjAzMSAyLjY0ODQzOCBMIDkuNTgyMDMxIDQuNjcxODc1IEMgOS41ODIwMzEgNS4zMjAzMTIgOS41ODIwMzEgNS45Njg3NSA5LjU4MjAzMSA2LjYwNTQ2OSBDIDkuNTgyMDMxIDYuNjQ0NTMxIDkuNTgyMDMxIDYuNjkxNDA2IDkuNTgyMDMxIDYuNzM4MjgxIEMgOS41ODk4NDQgNi44MjAzMTIgOS42NTYyNSA2Ljg3ODkwNiA5LjczODI4MSA2Ljg4NjcxOSBDIDkuNzY1NjI1IDYuODk0NTMxIDkuNzkyOTY5IDYuODk0NTMxIDkuODIwMzEyIDYuODk0NTMxIEwgMTAuNjE3MTg4IDYuODk0NTMxIEMgMTAuNjQ4NDM4IDYuODk0NTMxIDEwLjY3NTc4MSA2Ljg5NDUzMSAxMC43MTA5MzggNi44ODY3MTkgQyAxMC43ODUxNTYgNi44Nzg5MDYgMTAuODM5ODQ0IDYuODMyMDMxIDEwLjg0Mzc1IDYuNzU3ODEyIEMgMTAuODUxNTYyIDYuNjkxNDA2IDEwLjg1OTM3NSA2LjYyODkwNiAxMC44NTkzNzUgNi41NzAzMTIgTCAxMC44NTkzNzUgMi43NzczNDQgQyAxMC44NTkzNzUgMi43MjI2NTYgMTAuODU5Mzc1IDIuNjc1NzgxIDEwLjg1MTU2MiAyLjYyODkwNiBDIDEwLjgzOTg0NCAyLjQ5MjE4OCAxMC43OTY4NzUgMi40NTMxMjUgMTAuNjY3OTY5IDIuNDUzMTI1IEMgMTAuMzcxMDk0IDIuNDQ1MzEyIDEwLjA3NDIxOSAyLjQ0NTMxMiA5Ljc3NzM0NCAyLjQ1MzEyNSBaIE0gMjEuNjM2NzE5IDMuMjQyMTg4IEMgMjEuNzQ2MDk0IDMuMjUgMjEuODQ3NjU2IDMuMjY5NTMxIDIxLjk0MTQwNiAzLjMwODU5NCBDIDIyLjA4OTg0NCAzLjM3MTA5NCAyMi4xODM1OTQgMy41MDM5MDYgMjIuMjA3MDMxIDMuNjY3OTY5IEMgMjIuMjI2NTYyIDMuNzYxNzE5IDIyLjIxODc1IDMuODcxMDk0IDIyLjE4MzU5NCAzLjk2NDg0NCBDIDIyLjExNzE4OCA0LjE2Nzk2OSAyMS45NTcwMzEgNC4yNTM5MDYgMjEuNzUzOTA2IDQuMjk2ODc1IEMgMjEuNjM2NzE5IDQuMzI0MjE5IDIxLjUxMTcxOSA0LjMzNTkzOCAyMS4zODI4MTIgNC4zMjQyMTkgQyAyMS4xNjAxNTYgNC4zMjQyMTkgMjAuOTM3NSA0LjMwODU5NCAyMC43MTQ4NDQgNC4yNzM0MzggQyAyMC42MjUgNC4yNjE3MTkgMjAuNjI1IDQuMjYxNzE5IDIwLjY0MDYyNSA0LjE2Nzk2OSBDIDIwLjY1MjM0NCA0LjAzMTI1IDIwLjY5MTQwNiAzLjkwMjM0NCAyMC43NDYwOTQgMy43NzczNDQgQyAyMC45MTQwNjIgMy4zNTU0NjkgMjEuMjczNDM4IDMuMjE0ODQ0IDIxLjYzNjcxOSAzLjI0MjE4OCBaIE0gMy4wODIwMzEgMy4yODkwNjIgQyAzLjE2NDA2MiAzLjI4OTA2MiAzLjI1IDMuMjk2ODc1IDMuMzMyMDMxIDMuMzE2NDA2IEMgMy41NzQyMTkgMy4zNTE1NjIgMy43NzczNDQgMy41MDM5MDYgMy44NzEwOTQgMy43MjI2NTYgQyAzLjk2MDkzOCAzLjkxMDE1NiA0LjAxNTYyNSA0LjEwNTQ2OSA0LjAxOTUzMSA0LjMwODU5NCBDIDQuMDU0Njg4IDQuNjcxODc1IDQuMDU0Njg4IDUuMDM5MDYyIDMuOTUzMTI1IDUuMzgyODEyIEMgMy45MTQwNjIgNS41NTg1OTQgMy44MjQyMTkgNS43MTg3NSAzLjY5MTQwNiA1LjgzOTg0NCBDIDMuNTQyOTY5IDUuOTYwOTM4IDMuMzU5Mzc1IDYuMDM1MTU2IDMuMTcxODc1IDYuMDM1MTU2IEMgMi44Nzg5MDYgNi4wNTg1OTQgMi41ODk4NDQgNS45OTYwOTQgMi4zMzIwMzEgNS44NTU0NjkgQyAyLjI3MzQzOCA1LjgyODEyNSAyLjIzMDQ2OSA1Ljc2NTYyNSAyLjIzODI4MSA1LjY5OTIxOSBMIDIuMjM4MjgxIDQuNjY3OTY5IEMgMi4yMzgyODEgNC4zMjQyMTkgMi4yNDYwOTQgMy45ODQzNzUgMi4yMzgyODEgMy42NDA2MjUgQyAyLjIzMDQ2OSAzLjU1ODU5NCAyLjI3NzM0NCAzLjQ5MjE4OCAyLjM1MTU2MiAzLjQ2NDg0NCBDIDIuNTg5ODQ0IDMuMzUxNTYyIDIuODI0MjE5IDMuMjg5MDYyIDMuMDgyMDMxIDMuMjg5MDYyIFogTSA2LjU5Mzc1IDguODMyMDMxIEMgNi41NTA3ODEgOC44MjQyMTkgNi41MTE3MTkgOC44MzIwMzEgNi40NjQ4NDQgOC44Mzk4NDQgQyA2LjEwNTQ2OSA4Ljg2MzI4MSA1Ljg0Mzc1IDkuMTEzMjgxIDUuODA4NTk0IDkuNDUzMTI1IEMgNS43NzczNDQgOS44Nzg5MDYgNS45NzI2NTYgMTAuMTY3OTY5IDYuMzQ3NjU2IDEwLjI2MTcxOSBDIDYuNDE3OTY5IDEwLjI2OTUzMSA2LjQ4NDM3NSAxMC4yODEyNSA2LjU1MDc4MSAxMC4yODEyNSBDIDcuMDQyOTY5IDEwLjI5Njg3NSA3LjQxNDA2MiAxMC4wMTk1MzEgNy4zNjcxODggOS40NTcwMzEgQyA3LjM1NTQ2OSA5LjIwMzEyNSA3LjE5MTQwNiA4Ljk4MDQ2OSA2Ljk1NzAzMSA4Ljg5MDYyNSBDIDYuODM1OTM4IDguODQzNzUgNi43MTQ4NDQgOC44MTY0MDYgNi41OTM3NSA4LjgzMjAzMSBaIE0gMTEuNzA3MDMxIDguODcxMDk0IEMgMTEuNDcyNjU2IDguODcxMDk0IDExLjQzMzU5NCA4LjkxNDA2MiAxMS40MzM1OTQgOS4xNDg0MzggTCAxMS40MzM1OTQgMTEuMTI1IEMgMTEuNDMzNTk0IDExLjE3MTg3NSAxMS40NDUzMTIgMTEuMjE0ODQ0IDExLjQxNzk2OSAxMS4yNTM5MDYgQyAxMS4zNjMyODEgMTEuMjUzOTA2IDExLjMzMjAzMSAxMS4yMTQ4NDQgMTEuMjg5MDYyIDExLjE4NzUgQyAxMC42NTYyNSAxMC44MTY0MDYgOS45ODgyODEgMTAuNzUgOS4zMTI1IDExLjA1ODU5NCBDIDguODM5ODQ0IDExLjI4MTI1IDguNTUwNzgxIDExLjY3OTY4OCA4LjM1OTM3NSAxMi4xNTIzNDQgQyA4LjE3OTY4OCAxMi42MDU0NjkgOC4xMzI4MTIgMTMuMDc4MTI1IDguMTQ0NTMxIDEzLjU2MjUgQyA4LjE0NDUzMSAxNC4wMTU2MjUgOC4yNDYwOTQgMTQuNDYwOTM4IDguNDQ5MjE5IDE0Ljg2NzE4OCBDIDguNjgzNTk0IDE1LjMxMjUgOS4wMjM0MzggMTUuNjU2MjUgOS41MDc4MTIgMTUuNzk2ODc1IEMgMTAuMTc1NzgxIDE2LjAwNzgxMiAxMC43OTY4NzUgMTUuOTA2MjUgMTEuMzcxMDk0IDE1LjQ4MDQ2OSBDIDExLjQxMDE1NiAxNS40NjA5MzggMTEuNDMzNTk0IDE1LjQxNDA2MiAxMS40OTIxODggMTUuNDA2MjUgQyAxMS41MTk1MzEgMTUuNDcyNjU2IDExLjU0Njg3NSAxNS41NDY4NzUgMTEuNTU4NTk0IDE1LjYxMzI4MSBDIDExLjU4MjAzMSAxNS43MTQ4NDQgMTEuNjY3OTY5IDE1Ljc4NTE1NiAxMS43Njk1MzEgMTUuNzg1MTU2IEwgMTEuOTE3OTY5IDE1Ljc4NTE1NiBDIDEyLjE0MDYyNSAxNS43ODUxNTYgMTIuMzUxNTYyIDE1Ljc4OTA2MiAxMi41NjY0MDYgMTUuNzg1MTU2IEMgMTIuNzQyMTg4IDE1Ljc4NTE1NiAxMi43ODkwNjIgMTUuNzMwNDY5IDEyLjc5Njg3NSAxNS41NDY4NzUgTCAxMi43OTY4NzUgOS4xMDkzNzUgQyAxMi43ODkwNjIgOC45MTQwNjIgMTIuNzQyMTg4IDguODcxMDk0IDEyLjU1ODU5NCA4Ljg3MTA5NCBaIE0gMjEuMDUwNzgxIDEwLjg3MTA5NCBDIDIwLjg1NTQ2OSAxMC44NjMyODEgMjAuNjYwMTU2IDEwLjg3MTA5NCAyMC40NjQ4NDQgMTAuOTAyMzQ0IEMgMTkuNjQwNjI1IDExLjAyMzQzOCAxOS4wNDY4NzUgMTEuNDY0ODQ0IDE4Ljc1NzgxMiAxMi4yNDYwOTQgQyAxOC40ODA0NjkgMTIuOTk2MDk0IDE4LjQ4NDM3NSAxMy44MTI1IDE4Ljc2MTcxOSAxNC41NjI1IEMgMTkuMDAzOTA2IDE1LjIzODI4MSAxOS41IDE1LjY2Nzk2OSAyMC4xOTkyMTkgMTUuODQzNzUgQyAyMC41NzAzMTIgMTUuOTM3NSAyMC45NjQ4NDQgMTUuOTYwOTM4IDIxLjM0NzY1NiAxNS45MDYyNSBDIDIyLjYyODkwNiAxNS43NSAyMy4xNjQwNjIgMTQuNzc3MzQ0IDIzLjI1IDEzLjkzMzU5NCBDIDIzLjI1IDEzLjkzMzU5NCAyMy4yODUxNTYgMTMuNjgzNTk0IDIzLjI4NTE1NiAxMy41NjI1IEwgMjMuMjc3MzQ0IDEzLjA1ODU5NCBDIDIzLjI3NzM0NCAxMi45ODQzNzUgMjMuMjU3ODEyIDEyLjgzOTg0NCAyMy4yNTc4MTIgMTIuODM1OTM4IEMgMjMuMjQ2MDk0IDEyLjcxODc1IDIzLjIyMjY1NiAxMi42MDU0NjkgMjMuMTkxNDA2IDEyLjQ4ODI4MSBDIDIyLjk2ODc1IDExLjY4NzUgMjIuNDUzMTI1IDExLjE1MjM0NCAyMS42MzI4MTIgMTAuOTQ1MzEyIEMgMjEuNDM3NSAxMC44OTg0MzggMjEuMjQ2MDk0IDEwLjg3NSAyMS4wNTA3ODEgMTAuODcxMDk0IFogTSAxNS45NzY1NjIgMTAuOTIxODc1IEMgMTQuOTQ5MjE5IDEwLjk0NTMxMiAxNC4xNjQwNjIgMTEuNDY0ODQ0IDEzLjg0NzY1NiAxMi40ODgyODEgQyAxMy42MzI4MTIgMTMuMTcxODc1IDEzLjY2MDE1NiAxMy44NTkzNzUgMTMuODY3MTg4IDE0LjU0Mjk2OSBDIDE0LjA4NTkzOCAxNS4yMzgyODEgMTQuNTc4MTI1IDE1LjY2NDA2MiAxNS4yNzM0MzggMTUuODUxNTYyIEMgMTUuNTcwMzEyIDE1LjkyNTc4MSAxNS44Nzg5MDYgMTUuOTUzMTI1IDE2LjE5MTQwNiAxNS45NDUzMTIgQyAxNi42MzY3MTkgMTUuOTM3NSAxNy4wODIwMzEgMTUuODUxNTYyIDE3LjUgMTUuNjg3NSBDIDE3LjY4MzU5NCAxNS42MjEwOTQgMTcuNzIyNjU2IDE1LjU2MjUgMTcuNzIyNjU2IDE1LjM3MTA5NCBMIDE3LjcyMjY1NiAxNC45MzM1OTQgQyAxNy43MTQ4NDQgMTQuNzU3ODEyIDE3LjY0MDYyNSAxNC42OTUzMTIgMTcuNDY4NzUgMTQuNzM4MjgxIEMgMTcuMzMyMDMxIDE0Ljc2OTUzMSAxNy4yMDMxMjUgMTQuODA0Njg4IDE3LjA3MDMxMiAxNC44Mzk4NDQgQyAxNi42NTYyNSAxNC45MzM1OTQgMTYuMjMwNDY5IDE0Ljk1MzEyNSAxNS44MTI1IDE0Ljg3ODkwNiBDIDE1LjQwMjM0NCAxNC43OTY4NzUgMTUuMTE3MTg4IDE0LjU2MjUgMTUuMDA3ODEyIDE0LjE0NDUzMSBDIDE0Ljk3NjU2MiAxNC4wMjM0MzggMTQuOTQ5MjE5IDEzLjkwMjM0NCAxNC45NDE0MDYgMTMuNzczNDM4IEMgMTQuOTY4NzUgMTMuNzczNDM4IDE1LjAwMzkwNiAxMy43NzM0MzggMTUuMDIzNDM4IDEzLjc4NTE1NiBDIDE1LjQyOTY4OCAxMy44NTE1NjIgMTUuODM5ODQ0IDEzLjg4NjcxOSAxNi4yNSAxMy44NTE1NjIgQyAxNi42MDE1NjIgMTMuODMyMDMxIDE2Ljk2MDkzOCAxMy43NjU2MjUgMTcuMjc3MzQ0IDEzLjU5NzY1NiBDIDE3LjYwMTU2MiAxMy40MzM1OTQgMTcuODI0MjE5IDEzLjEzMjgxMiAxNy44OTA2MjUgMTIuNzgxMjUgQyAxNy45Mzc1IDEyLjU1ODU5NCAxNy45Mzc1IDEyLjMyODEyNSAxNy44OTA2MjUgMTIuMTA1NDY5IEMgMTcuNzY1NjI1IDExLjU1ODU5NCAxNy40MTQwNjIgMTEuMjE0ODQ0IDE2Ljg4NjcxOSAxMS4wMzkwNjIgQyAxNi41OTc2NTYgMTAuOTQ1MzEyIDE2LjI3NzM0NCAxMC45MTAxNTYgMTUuOTc2NTYyIDEwLjkyMTg3NSBaIE0gMC42ODc1IDExLjAxOTUzMSBDIDAuNTY2NDA2IDExLjAxOTUzMSAwLjUxNTYyNSAxMS4wNzgxMjUgMC41MzkwNjIgMTEuMTk5MjE5IEMgMC41NTg1OTQgMTEuMjgxMjUgMC41ODU5MzggMTEuMzcxMDk0IDAuNjE3MTg4IDExLjQ0NTMxMiBDIDAuOTg0Mzc1IDEyLjQxMDE1NiAxLjM1OTM3NSAxMy4zNjcxODggMS43MjY1NjIgMTQuMzI0MjE5IEMgMS44NzUgMTQuNzMwNDY5IDIuMDM1MTU2IDE1LjE0MDYyNSAyLjE5MTQwNiAxNS41NDY4NzUgQyAyLjI1NzgxMiAxNS43MTQ4NDQgMi4zNjcxODggMTUuNzk2ODc1IDIuNTU0Njg4IDE1Ljc4OTA2MiBDIDIuODI0MjE5IDE1Ljc4OTA2MiAzLjA5NzY1NiAxNS43ODkwNjIgMy4zNjcxODggMTUuNzg5MDYyIEMgMy41IDE1LjgwNDY4OCAzLjYyMTA5NCAxNS43MjI2NTYgMy42Njc5NjkgMTUuNTkzNzUgQyAzLjY4MzU5NCAxNS41NTQ2ODggMy43MDMxMjUgMTUuNTE5NTMxIDMuNzEwOTM4IDE1LjQ4MDQ2OSBDIDQuMTIxMDk0IDE0LjQyMTg3NSA0LjUzNTE1NiAxMy4zNDc2NTYgNC45NDUzMTIgMTIuMjg5MDYyIEwgNS4zMDg1OTQgMTEuMzE2NDA2IEMgNS4zOTA2MjUgMTEuMDkzNzUgNS4zMzU5MzggMTEuMDIzNDM4IDUuMTA5Mzc1IDExLjAyMzQzOCBMIDQuMTc1NzgxIDExLjAyMzQzOCBDIDQuMDY2NDA2IDExLjAyMzQzOCAzLjk2MDkzOCAxMS4wOTM3NSAzLjkzMzU5NCAxMS4xOTkyMTkgTCAzLjg5MDYyNSAxMS4zMTY0MDYgQyAzLjYxNzE4OCAxMi4yNjE3MTkgMy4zMzIwMzEgMTMuMTk5MjE5IDMuMDQ2ODc1IDE0LjE0ODQzOCBDIDMuMDE1NjI1IDE0LjI3MzQzOCAyLjk4MDQ2OSAxNC4zODY3MTkgMi45NDE0MDYgMTQuNTA3ODEyIEMgMi45MjU3ODEgMTQuNTA3ODEyIDIuOTIxODc1IDE0LjUwNzgxMiAyLjkyNTc4MSAxNC41IEMgMi42NzU3ODEgMTMuNjUyMzQ0IDIuNDMzNTk0IDEyLjgwMDc4MSAyLjE4MzU5NCAxMS45NDkyMTkgQyAyLjEwOTM3NSAxMS43MTQ4NDQgMi4wNDI5NjkgMTEuNDc2NTYyIDEuOTc2NTYyIDExLjI0NjA5NCBDIDEuOTMzNTk0IDExLjEyMTA5NCAxLjg3NSAxMS4wMTk1MzEgMS43MjY1NjIgMTEuMDE5NTMxIEMgMS4zODI4MTIgMTEuMDE5NTMxIDEuMDMxMjUgMTEuMDExNzE5IDAuNjg3NSAxMS4wMTk1MzEgWiBNIDYuMTQ4NDM4IDExLjAyMzQzOCBDIDUuOTU3MDMxIDExLjAyMzQzOCA1LjkwMjM0NCAxMS4wNzgxMjUgNS45MDIzNDQgMTEuMjY5NTMxIEwgNS45MDIzNDQgMTUuNSBDIDUuOTAyMzQ0IDE1LjUzNTE1NiA1LjkwMjM0NCAxNS41ODIwMzEgNS45MTAxNTYgMTUuNjEzMjgxIEMgNS45MTc5NjkgMTUuNzM4MjgxIDUuOTc2NTYyIDE1Ljc4OTA2MiA2LjEwMTU2MiAxNS43ODkwNjIgQyA2LjQyOTY4OCAxNS43OTY4NzUgNi43NTM5MDYgMTUuNzk2ODc1IDcuMDg1OTM4IDE1Ljc4OTA2MiBDIDcuMjA3MDMxIDE1Ljc4OTA2MiA3LjI2MTcxOSAxNS43MzA0NjkgNy4yNzM0MzggMTUuNjA5Mzc1IEwgNy4yNzM0MzggMTEuMjY5NTMxIEMgNy4yNzM0MzggMTEuMDc4MTI1IDcuMjE4NzUgMTEuMDIzNDM4IDcuMDIzNDM4IDExLjAyMzQzOCBaIE0gMTUuODUxNTYyIDExLjg2MzI4MSBDIDE1LjkzMzU5NCAxMS44NDc2NTYgMTYuMDIzNDM4IDExLjg1NTQ2OSAxNi4xMDkzNzUgMTEuODYzMjgxIEMgMTYuMTM2NzE5IDExLjg2MzI4MSAxNi4xNjQwNjIgMTEuODc1IDE2LjE5MTQwNiAxMS44NzUgQyAxNi42MjUgMTEuOTQxNDA2IDE2LjcyMjY1NiAxMi4yODEyNSAxNi42NDg0MzggMTIuNjA5Mzc1IEMgMTYuNTgyMDMxIDEyLjg1OTM3NSAxNi4zODY3MTkgMTIuOTQ5MjE5IDE2LjE1NjI1IDEyLjk5NjA5NCBDIDE2LjAzNTE1NiAxMy4wMTU2MjUgMTUuOTA2MjUgMTMuMDMxMjUgMTUuNzc3MzQ0IDEzLjAyMzQzOCBDIDE1LjUzMTI1IDEzLjAxNTYyNSAxNS4yODEyNSAxMi45OTYwOTQgMTUuMDM1MTU2IDEyLjk2MDkzOCBDIDE0Ljk4NDM3NSAxMi45NTcwMzEgMTQuOTYwOTM4IDEyLjkzMzU5NCAxNC45Njg3NSAxMi44NzUgQyAxNS4wMTU2MjUgMTIuNjM2NzE5IDE1LjA3MDMxMiAxMi40MTAxNTYgMTUuMjE4NzUgMTIuMjE0ODQ0IEMgMTUuMzg2NzE5IDExLjk4NDM3NSAxNS42MDU0NjkgMTEuODgyODEyIDE1Ljg1MTU2MiAxMS44NjMyODEgWiBNIDEwLjM5NDUzMSAxMS45MTAxNTYgQyAxMC43MTg3NSAxMS44ODI4MTIgMTEuMDM5MDYyIDExLjk0MTQwNiAxMS4zMzIwMzEgMTIuMDc4MTI1IEMgMTEuNDA2MjUgMTIuMDk3NjU2IDExLjQ0NTMxMiAxMi4xNzE4NzUgMTEuNDM3NSAxMi4yNTM5MDYgQyAxMS40MzM1OTQgMTIuNjMyODEyIDExLjQzNzUgMTMuMDAzOTA2IDExLjQzNzUgMTMuMzc1IEwgMTEuNDM3NSAxNC40ODgyODEgQyAxMS40NTMxMjUgMTQuNTU0Njg4IDExLjQwNjI1IDE0LjYyODkwNiAxMS4zMzU5MzggMTQuNjU2MjUgQyAxMS4wNDY4NzUgMTQuODIwMzEyIDEwLjcxMDkzOCAxNC44ODY3MTkgMTAuMzc4OTA2IDE0LjgzOTg0NCBDIDEwLjA5Mzc1IDE0LjgxMjUgOS44NTE1NjIgMTQuNjM2NzE5IDkuNzIyNjU2IDE0LjM4NjcxOSBDIDkuNjI4OTA2IDE0LjE5MTQwNiA5LjU3MDMxMiAxMy45ODA0NjkgOS41NTQ2ODggMTMuNzY1NjI1IEMgOS41IDEzLjM3ODkwNiA5LjUzNTE1NiAxMi45ODgyODEgOS42MjUgMTIuNjE3MTg4IEMgOS42NTYyNSAxMi41MTU2MjUgOS42OTE0MDYgMTIuNDE0MDYyIDkuNzUgMTIuMzIwMzEyIEMgOS44Nzg5MDYgMTIuMDg1OTM4IDEwLjEyMTA5NCAxMS45Mjk2ODggMTAuMzk0NTMxIDExLjkxMDE1NiBaIE0gMjAuODA4NTk0IDExLjk0MTQwNiBDIDIwLjkyMTg3NSAxMS45Mjk2ODggMjEuMDM5MDYyIDExLjkyOTY4OCAyMS4xNTIzNDQgMTEuOTQ5MjE5IEMgMjEuNDAyMzQ0IDEyLjAwMzkwNiAyMS42MDU0NjkgMTIuMTYwMTU2IDIxLjcxMDkzOCAxMi4zODY3MTkgQyAyMS44MTI1IDEyLjU5NzY1NiAyMS44NzUgMTIuODM5ODQ0IDIxLjg4NjcxOSAxMy4wNzgxMjUgQyAyMS44OTQ1MzEgMTMuMTkxNDA2IDIxLjkwMjM0NCAxMy4zMDA3ODEgMjEuODk0NTMxIDEzLjQwNjI1IEMgMjEuOTE0MDYyIDEzLjY3NTc4MSAyMS44ODI4MTIgMTMuOTQxNDA2IDIxLjgwODU5NCAxNC4xOTE0MDYgQyAyMS43NzM0MzggMTQuMzIwMzEyIDIxLjcxODc1IDE0LjQzMzU5NCAyMS42MzY3MTkgMTQuNTQ2ODc1IEMgMjEuNTAzOTA2IDE0LjczODI4MSAyMS4yODkwNjIgMTQuODU5Mzc1IDIxLjA1ODU5NCAxNC44Nzg5MDYgQyAyMC45NDE0MDYgMTQuODg2NzE5IDIwLjgyODEyNSAxNC44ODY3MTkgMjAuNzA3MDMxIDE0Ljg2NzE4OCBDIDIwLjQ0OTIxOSAxNC44MTI1IDIwLjI0MjE4OCAxNC42NDQ1MzEgMjAuMTMyODEyIDE0LjQwNjI1IEMgMjAuMDQ2ODc1IDE0LjIxODc1IDE5Ljk4NDM3NSAxNC4wMDc4MTIgMTkuOTcyNjU2IDEzLjgwMDc4MSBDIDE5LjkzNzUgMTMuNDQxNDA2IDE5LjkyOTY4OCAxMy4wNzgxMjUgMjAuMDE5NTMxIDEyLjcyNjU2MiBDIDIwLjA1MDc4MSAxMi41ODU5MzggMjAuMTEzMjgxIDEyLjQ0MTQwNiAyMC4xNzk2ODggMTIuMzIwMzEyIEMgMjAuMzE2NDA2IDEyLjA5NzY1NiAyMC41NTA3ODEgMTEuOTU3MDMxIDIwLjgwODU5NCAxMS45NDE0MDYgWiBNIDIwLjgwODU5NCAxNy43MjY1NjIgQyAyMC40NTcwMzEgMTcuNzQyMTg4IDIwLjEyMTA5NCAxNy43NzM0MzggMTkuNzgxMjUgMTcuODQzNzUgQyAxOS4zNDM3NSAxNy45NDkyMTkgMTguOTI5Njg4IDE4LjEwNTQ2OSAxOC41NTg1OTQgMTguMzY3MTg4IEMgMTguNTA3ODEyIDE4LjQwMjM0NCAxOC40NTMxMjUgMTguNDU3MDMxIDE4LjQxMDE1NiAxOC41MTE3MTkgQyAxOC4zNzg5MDYgMTguNTY2NDA2IDE4LjM2MzI4MSAxOC42MjUgMTguMzk4NDM4IDE4LjY4NzUgQyAxOC40MzM1OTQgMTguNzQ2MDk0IDE4LjQ5MjE4OCAxOC43NTM5MDYgMTguNTU4NTk0IDE4Ljc0NjA5NCBMIDE5LjE2MDE1NiAxOC42NzE4NzUgQyAxOS42MDU0NjkgMTguNjEzMjgxIDIwLjA2NjQwNiAxOC41ODk4NDQgMjAuNTIzNDM4IDE4LjYxMzI4MSBDIDIwLjY4NzUgMTguNjI1IDIwLjg0NzY1NiAxOC42NTIzNDQgMjAuOTk2MDk0IDE4LjY5OTIxOSBDIDIxLjE2NDA2MiAxOC43NTM5MDYgMjEuMjczNDM4IDE4Ljg5NDUzMSAyMS4yODEyNSAxOS4wNjI1IEMgMjEuMjg5MDYyIDE5LjE2NDA2MiAyMS4yODEyNSAxOS4yNjE3MTkgMjEuMjczNDM4IDE5LjM1OTM3NSBDIDIxLjIzODI4MSAxOS42MzY3MTkgMjEuMTg3NSAxOS45MDYyNSAyMS4xMDU0NjkgMjAuMTY0MDYyIEMgMjAuOTY4NzUgMjAuNjUyMzQ0IDIwLjgwMDc4MSAyMS4xMDkzNzUgMjAuNjI1IDIxLjU3NDIxOSBDIDIwLjYwNTQ2OSAyMS42Mjg5MDYgMjAuNTk3NjU2IDIxLjY3NTc4MSAyMC41OTM3NSAyMS43MjI2NTYgQyAyMC41OTc2NTYgMjEuODE2NDA2IDIwLjY2MDE1NiAyMS44NzEwOTQgMjAuNzUzOTA2IDIxLjg0Mzc1IEMgMjAuODE2NDA2IDIxLjgyNDIxOSAyMC44NjcxODggMjEuNzkyOTY5IDIwLjkxMDE1NiAyMS43NDIxODggQyAyMS4xMzI4MTIgMjEuNTQyOTY5IDIxLjMyODEyNSAyMS4yOTY4NzUgMjEuNDg0Mzc1IDIxLjAzNTE1NiBDIDIxLjkyMTg3NSAyMC4zMDQ2ODggMjIuMTgzNTk0IDE5LjQ4ODI4MSAyMi4yNTM5MDYgMTguNjQwNjI1IEMgMjIuMjU3ODEyIDE4LjQ5NjA5NCAyMi4yNTM5MDYgMTguMzQ3NjU2IDIyLjIzODI4MSAxOC4yMTQ4NDQgQyAyMi4yMTg3NSAxOC4wOTM3NSAyMi4xNDQ1MzEgMTcuOTg0Mzc1IDIyLjAzNTE1NiAxNy45Mzc1IEMgMjEuOTQ5MjE5IDE3Ljg5ODQzOCAyMS44NjcxODggMTcuODcxMDk0IDIxLjc3MzQzOCAxNy44NDM3NSBDIDIxLjQ1NzAzMSAxNy43NjE3MTkgMjEuMTMyODEyIDE3Ljc0MjE4OCAyMC44MDg1OTQgMTcuNzI2NTYyIFogTSAxLjc4NTE1NiAxNy45ODQzNzUgQyAxLjc1MzkwNiAxNy45OTIxODggMS43MTg3NSAxOC4wMTE3MTkgMS42OTkyMTkgMTguMDM5MDYyIEMgMS42NDQ1MzEgMTguMDkzNzUgMS42MzI4MTIgMTguMTY3OTY5IDEuNjY0MDYyIDE4LjIzNDM3NSBDIDEuNjc5Njg4IDE4LjI4OTA2MiAxLjcxODc1IDE4LjMzNTkzOCAxLjc1MzkwNiAxOC4zNjcxODggQyAxLjkyOTY4OCAxOC41MzEyNSAyLjA4OTg0NCAxOC42ODc1IDIuMjY1NjI1IDE4LjgzOTg0NCBDIDQuMTI4OTA2IDIwLjQ5NjA5NCA2LjI2OTUzMSAyMS42Mjg5MDYgOC43MDcwMzEgMjIuMTk1MzEyIEMgOS40MTQwNjIgMjIuMzU5Mzc1IDEwLjEyODkwNiAyMi40NzI2NTYgMTAuODU5Mzc1IDIyLjUyNzM0NCBDIDExLjEyODkwNiAyMi41NDY4NzUgMTEuNDA2MjUgMjIuNTU0Njg4IDExLjY3NTc4MSAyMi41NjY0MDYgQyAxMS44Nzg5MDYgMjIuNTY2NDA2IDEyLjA3NDIxOSAyMi41NjY0MDYgMTIuMjc3MzQ0IDIyLjU2NjQwNiBDIDEzLjA1ODU5NCAyMi41MzkwNjIgMTMuODQ3NjU2IDIyLjQ1MzEyNSAxNC42MjUgMjIuMzE2NDA2IEMgMTUuOTc2NTYyIDIyLjA2MjUgMTcuMjg1MTU2IDIxLjYyMTA5NCAxOC41MTE3MTkgMjEgQyAxOS4xNjAxNTYgMjAuNjcxODc1IDE5Ljc3MzQzOCAyMC4yNzczNDQgMjAuMzQ3NjU2IDE5LjgzMjAzMSBDIDIwLjQxNzk2OSAxOS43ODUxNTYgMjAuNDY4NzUgMTkuNzE4NzUgMjAuNTExNzE5IDE5LjY0NDUzMSBDIDIwLjUyMzQzOCAxOS42MjUgMjAuNTMxMjUgMTkuNjA1NDY5IDIwLjUzOTA2MiAxOS41ODU5MzggQyAyMC41NzgxMjUgMTkuNDE0MDYyIDIwLjQ3NjU2MiAxOS4yNDYwOTQgMjAuMzE2NDA2IDE5LjIwNzAzMSBDIDIwLjIxNDg0NCAxOS4xODc1IDIwLjEwNTQ2OSAxOS4xOTkyMTkgMjAuMDE5NTMxIDE5LjI0NjA5NCBDIDE5LjQxNzk2OSAxOS41MjM0MzggMTguODA0Njg4IDE5Ljc2NTYyNSAxOC4xNjc5NjkgMTkuOTc2NTYyIEMgMTYuOTcyNjU2IDIwLjM3NSAxNS43MzgyODEgMjAuNjUyMzQ0IDE0LjQ4NDM3NSAyMC44MTI1IEMgMTMuOTQ5MjE5IDIwLjg3ODkwNiAxMy40MTAxNTYgMjAuOTMzNTk0IDEyLjg3MTA5NCAyMC45NDkyMTkgQyAxMS44NzEwOTQgMjAuOTgwNDY5IDEwLjg1OTM3NSAyMC45MzM1OTQgOS44NjcxODggMjAuODEyNSBDIDkuMTcxODc1IDIwLjcyNjU2MiA4LjQ3NjU2MiAyMC41OTc2NTYgNy43OTI5NjkgMjAuNDQxNDA2IEMgNS43NTM5MDYgMTkuOTYwOTM4IDMuODA0Njg4IDE5LjE2MDE1NiAyLjAyMzQzOCAxOC4wNTg1OTQgQyAxLjk4MDQ2OSAxOC4wMzEyNSAxLjkzMzU5NCAxOC4wMTE3MTkgMS44OTQ1MzEgMTcuOTkyMTg4IEMgMS44NTkzNzUgMTcuOTc2NTYyIDEuODIwMzEyIDE3Ljk3NjU2MiAxLjc4NTE1NiAxNy45ODQzNzUgWiBNIDEuNzg1MTU2IDE3Ljk4NDM3NSBcIjtcbiAgICBzdmdbXCJQSUFcIl0gPSBcIk0gMjQgMTIgQyAyNCAxOC42Mjg5MDYgMTguNjI4OTA2IDI0IDEyIDI0IEMgNS4zNzEwOTQgMjQgMCAxOC42Mjg5MDYgMCAxMiBDIDAgNS4zNzEwOTQgNS4zNzEwOTQgMCAxMiAwIEMgMTguNjI4OTA2IDAgMjQgNS4zNzEwOTQgMjQgMTIgWiBNIDI0IDEyIE0gMTEuNDA2MjUgOC42OTUzMTIgQyAxMS40MDYyNSA4LjMzMjAzMSAxMC45Njg3NSA4LjE1MjM0NCAxMC43MTA5MzggOC40MDYyNSBDIDEwLjQ1NzAzMSA4LjY2NDA2MiAxMC42MzY3MTkgOS4xMDE1NjIgMTEgOS4xMDE1NjIgQyAxMS4yMjI2NTYgOS4xMDE1NjIgMTEuNDA2MjUgOC45MTc5NjkgMTEuNDAyMzQ0IDguNjk1MzEyIE0gMTMuMDAzOTA2IDguMjg5MDYyIEMgMTIuNjQwNjI1IDguMjg5MDYyIDEyLjQ1NzAzMSA4LjcyNjU2MiAxMi43MTQ4NDQgOC45ODQzNzUgQyAxMi45NzI2NTYgOS4yMzgyODEgMTMuNDA2MjUgOS4wNTg1OTQgMTMuNDA2MjUgOC42OTUzMTIgQyAxMy40MDYyNSA4LjQ3MjY1NiAxMy4yMjY1NjIgOC4yODkwNjIgMTMuMDAzOTA2IDguMjg5MDYyIE0gMTIuNTY2NDA2IDkuMzYzMjgxIEMgMTIuMjQyMTg4IDkuNjUyMzQ0IDExLjc1NzgxMiA5LjY1MjM0NCAxMS40Mzc1IDkuMzYzMjgxIEMgMTEuMzMyMDMxIDkuMjc3MzQ0IDExLjE5OTIxOSA5LjQyNTc4MSAxMS4yOTI5NjkgOS41MTk1MzEgQyAxMS42OTE0MDYgOS44OTQ1MzEgMTIuMzEyNSA5Ljg5NDUzMSAxMi43MDcwMzEgOS41MTk1MzEgQyAxMi43NSA5LjQ4MDQ2OSAxMi43NSA5LjQxNDA2MiAxMi43MTA5MzggOS4zNzUgQyAxMi42NzE4NzUgOS4zMzIwMzEgMTIuNjA5Mzc1IDkuMzI4MTI1IDEyLjU2NjQwNiA5LjM2MzI4MSBNIDE2LjMwNDY4OCAxMC45MzM1OTQgTCAxNi4zMDQ2ODggMTAuOTI5Njg4IEMgMTYuMzA0Njg4IDEwLjU1MDc4MSAxNi4wNTQ2ODggMTAuMjE4NzUgMTUuNjkxNDA2IDEwLjExNzE4OCBMIDE1LjY5MTQwNiA5LjM5MDYyNSBDIDE1LjY5MTQwNiA3LjQxNDA2MiAxNC4wODk4NDQgNS44MTI1IDEyLjExMzI4MSA1LjgxMjUgTCAxMS45NzY1NjIgNS44MTI1IEMgMTAgNS44MTI1IDguMzk0NTMxIDcuNDE0MDYyIDguMzk0NTMxIDkuMzkwNjI1IEwgOC4zOTQ1MzEgMTAuMDk3NjU2IEMgNy45OTYwOTQgMTAuMTcxODc1IDcuNzA3MDMxIDEwLjUxNTYyNSA3LjcwMzEyNSAxMC45MjE4NzUgQyA3LjU5Mzc1IDExLjEwNTQ2OSA3LjUzNTE1NiAxMS4zMTY0MDYgNy41MzUxNTYgMTEuNTMxMjUgTCA3LjUzNTE1NiAxNi4xMjEwOTQgQyA3LjUzNTE1NiAxNi42Njc5NjkgNy45MDIzNDQgMTcuMTQ0NTMxIDguNDI5Njg4IDE3LjI4OTA2MiBDIDguNTcwMzEyIDE3LjYwNTQ2OSA4Ljg4NjcxOSAxNy44MTI1IDkuMjM0Mzc1IDE3LjgxMjUgTCAxMC4yMzgyODEgMTcuODEyNSBDIDEwLjU3MDMxMiAxNy44MTI1IDEwLjg3NSAxNy42MjUgMTEuMDI3MzQ0IDE3LjMyODEyNSBMIDEyLjg3MTA5NCAxNy4zMjgxMjUgQyAxMy4wMTk1MzEgMTcuNjI1IDEzLjMyNDIxOSAxNy44MTI1IDEzLjY1NjI1IDE3LjgxMjUgTCAxNC42NjAxNTYgMTcuODEyNSBDIDE1IDE3LjgxMjUgMTUuMzA4NTk0IDE3LjYxNzE4OCAxNS40NTcwMzEgMTcuMzEyNSBDIDE2LjAzOTA2MiAxNy4yMTQ4NDQgMTYuNDY0ODQ0IDE2LjcxMDkzOCAxNi40NjQ4NDQgMTYuMTIxMDk0IEwgMTYuNDY0ODQ0IDExLjUzMTI1IEMgMTYuNDY0ODQ0IDExLjMyNDIxOSAxNi40MTAxNTYgMTEuMTE3MTg4IDE2LjMwNDY4OCAxMC45MzM1OTQgWiBNIDEzLjExMzI4MSAxNS4zODI4MTIgQyAxMy4xMzY3MTkgMTUuNTM5MDYyIDEzLjA4OTg0NCAxNS42OTUzMTIgMTIuOTg4MjgxIDE1LjgxNjQwNiBDIDEyLjg4NjcxOSAxNS45MzM1OTQgMTIuNzM4MjgxIDE2LjAwMzkwNiAxMi41NzgxMjUgMTYuMDAzOTA2IEwgMTEuNDIxODc1IDE2LjAwMzkwNiBDIDExLjI2NTYyNSAxNi4wMDM5MDYgMTEuMTEzMjgxIDE1LjkzMzU5NCAxMS4wMTE3MTkgMTUuODE2NDA2IEMgMTAuOTEwMTU2IDE1LjY5NTMxMiAxMC44NjMyODEgMTUuNTM5MDYyIDEwLjg4NjcxOSAxNS4zODI4MTIgTCAxMS4xMDkzNzUgMTMuODcxMDk0IEMgMTAuNjkxNDA2IDEzLjUxNTYyNSAxMC41MjczNDQgMTIuOTQ5MjE5IDEwLjY4NzUgMTIuNDIxODc1IEMgMTAuODQ3NjU2IDExLjg5ODQzOCAxMS4zMDA3ODEgMTEuNTE5NTMxIDExLjg0Mzc1IDExLjQ2MDkzOCBDIDEyLjQ0NTMxMiAxMS4zOTA2MjUgMTMuMDE5NTMxIDExLjcyMjY1NiAxMy4yNjE3MTkgMTIuMjc3MzQ0IEMgMTMuNSAxMi44MzIwMzEgMTMuMzUxNTYyIDEzLjQ4MDQ2OSAxMi44OTA2MjUgMTMuODcxMDk0IFogTSAxMy4yNDYwOTQgMTAuMzI0MjE5IEwgMTAuNzYxNzE5IDEwLjMyNDIxOSBDIDEwLjYwNTQ2OSAxMC4xNjc5NjkgMTAuMzkwNjI1IDEwLjA4MjAzMSAxMC4xNzE4NzUgMTAuMDgyMDMxIEwgOS43NSAxMC4wODIwMzEgTCA5Ljc1IDkuMzMyMDMxIEMgOS43NSA4LjA5Mzc1IDEwLjc1MzkwNiA3LjA4OTg0NCAxMS45OTIxODggNy4wODk4NDQgTCAxMi4xMDE1NjIgNy4wODk4NDQgQyAxMy4zMzk4NDQgNy4wODk4NDQgMTQuMzM5ODQ0IDguMDkzNzUgMTQuMzM5ODQ0IDkuMzMyMDMxIEwgMTQuMzM5ODQ0IDEwLjA4MjAzMSBMIDEzLjgzNTkzOCAxMC4wODIwMzEgQyAxMy42MTMyODEgMTAuMDgyMDMxIDEzLjQwMjM0NCAxMC4xNjc5NjkgMTMuMjQ2MDk0IDEwLjMyNDIxOSBaIE0gMTIuNzMwNDY5IDE1LjQ1NzAzMSBDIDEyLjc0MjE4OCAxNS40OTYwOTQgMTIuNzM0Mzc1IDE1LjUzNTE1NiAxMi43MDcwMzEgMTUuNTcwMzEyIEMgMTIuNjgzNTk0IDE1LjYwMTU2MiAxMi42NDQ1MzEgMTUuNjE3MTg4IDEyLjYwNTQ2OSAxNS42MTcxODggTCAxMS40MDIzNDQgMTUuNjE3MTg4IEMgMTEuMzYzMjgxIDE1LjYxNzE4OCAxMS4zMjQyMTkgMTUuNjAxNTYyIDExLjMwMDc4MSAxNS41NjY0MDYgQyAxMS4yNzM0MzggMTUuNTM1MTU2IDExLjI2NTYyNSAxNS40OTYwOTQgMTEuMjc3MzQ0IDE1LjQ1NzAzMSBMIDExLjUwNzgxMiAxMy43ODUxNTYgQyAxMS41MDc4MTIgMTMuNzYxNzE5IDExLjUwMzkwNiAxMy43MzgyODEgMTEuNDk2MDk0IDEzLjcxNDg0NCBDIDExLjQ3NjU2MiAxMy42ODM1OTQgMTEuNDUzMTI1IDEzLjY2MDE1NiAxMS40MjE4NzUgMTMuNjM2NzE5IEMgMTEuNDE3OTY5IDEzLjYzMjgxMiAxMS40MTc5NjkgMTMuNjMyODEyIDExLjQxNDA2MiAxMy42Mjg5MDYgQyAxMS4wNzAzMTIgMTMuMzc1IDEwLjkyNTc4MSAxMi45MzM1OTQgMTEuMDU4NTk0IDEyLjUyNzM0NCBDIDExLjE5MTQwNiAxMi4xMjEwOTQgMTEuNTY2NDA2IDExLjg0Mzc1IDExLjk5MjE4OCAxMS44Mzk4NDQgQyAxMi40MjE4NzUgMTEuODM5ODQ0IDEyLjgwMDc4MSAxMi4xMDkzNzUgMTIuOTM3NSAxMi41MTU2MjUgQyAxMy4wNzQyMTkgMTIuOTE3OTY5IDEyLjkzNzUgMTMuMzY3MTg4IDEyLjU5Mzc1IDEzLjYyMTA5NCBDIDEyLjU5Mzc1IDEzLjYyNSAxMi41OTM3NSAxMy42Mjg5MDYgMTIuNTgyMDMxIDEzLjYzNjcxOSBDIDEyLjU1MDc4MSAxMy42NjAxNTYgMTIuNTI3MzQ0IDEzLjY4MzU5NCAxMi41MDc4MTIgMTMuNzE0ODQ0IEMgMTIuNTAzOTA2IDEzLjcyMjY1NiAxMi41IDEzLjczNDM3NSAxMi41IDEzLjc0NjA5NCBaIE0gMTIuNzMwNDY5IDE1LjQ1NzAzMSBcIjtcbiAgICBzdmdbXCJTVVJGU0hBUktcIl0gPSBcIk0gMjQgMTIgQyAyNCAxOC42Mjg5MDYgMTguNjI4OTA2IDI0IDEyIDI0IEMgNS4zNzEwOTQgMjQgMCAxOC42Mjg5MDYgMCAxMiBDIDAgNS4zNzEwOTQgNS4zNzEwOTQgMCAxMiAwIEMgMTguNjI4OTA2IDAgMjQgNS4zNzEwOTQgMjQgMTIgWiBNIDI0IDEyTSAxNi41NDY4NzUgOC4zNTE1NjIgTCAxNi41NDY4NzUgOC4zNDM3NSBDIDE2LjUzOTA2MiA4LjI0MjE4OCAxNi41MzEyNSA4LjEyNSAxNi41MjczNDQgOCBDIDE2LjUxMTcxOSA3Ljc2NTYyNSAxNi40OTYwOTQgNy41MTU2MjUgMTYuNDgwNDY5IDcuMzIwMzEyIEMgMTYuNDU3MDMxIDcuMTg3NSAxNi40MjU3ODEgNy4wNzAzMTIgMTYuMzg2NzE5IDYuOTYwOTM4IEMgMTYuMTQ4NDM4IDYuNDI5Njg4IDE1LjY4MzU5NCA2LjE3NTc4MSAxNS4xOTE0MDYgNi4wNTQ2ODggQyAxNC45NjQ4NDQgNi4wMTU2MjUgMTQuNjkxNDA2IDYuMDA3ODEyIDE0LjM5ODQzOCA2IEwgMTEuNTcwMzEyIDYgQyA5Ljc1IDYuMDk3NjU2IDguOTg0Mzc1IDcuMTUyMzQ0IDguNzgxMjUgNy43MTQ4NDQgQyA3Ljk4NDM3NSAxMC4wOTc2NTYgNy40ODQzNzUgMTMuMTg3NSA3LjEyODkwNiAxNS40MTQwNjIgQyA3LjEyMTA5NCAxNS40NjA5MzggNy4xMTMyODEgMTUuNSA3LjEwNTQ2OSAxNS41NDI5NjkgTCA2Ljk4ODI4MSAxNi42MDE1NjIgQyA2Ljk4MDQ2OSAxNi43Njk1MzEgNyAxNi45NTMxMjUgNy4wNDI5NjkgMTcuMTI4OTA2IEMgNy4yNjU2MjUgMTcuNzczNDM4IDcuOTQxNDA2IDE4LjMyMDMxMiA5LjQyNTc4MSAxNy43NzczNDQgQyAxMC44MzIwMzEgMTcuMTY3OTY5IDEyLjQ4ODI4MSAxNi40MTAxNTYgMTQuMTk5MjE5IDE1LjU1ODU5NCBDIDE1LjE3NTc4MSAxNC45OTYwOTQgMTYuNjA1NDY5IDEzLjcwMzEyNSAxNi42Nzk2ODggMTIuMDY2NDA2IEMgMTYuNjY3OTY5IDEwLjg1OTM3NSAxNi42Mjg5MDYgOS41ODk4NDQgMTYuNTQ2ODc1IDguMzUxNTYyIFogTSAxNC4yODkwNjIgOS4yNDYwOTQgQyAxNC4yODkwNjIgOS4zODY3MTkgMTQuMTc1NzgxIDkuNSAxNC4wMzUxNTYgOS41IEMgMTMuMTgzNTk0IDkuNSAxMi40OTYwOTQgMTAuMTkxNDA2IDEyLjQ5NjA5NCAxMS4wMzkwNjIgTCAxMi40OTYwOTQgMTEuOTgwNDY5IEMgMTIuNDk2MDk0IDEzLjU2MjUgMTEuMjE0ODQ0IDE0Ljg0Mzc1IDkuNjM2NzE5IDE0Ljg0Mzc1IEMgOS40OTYwOTQgMTQuODQzNzUgOS4zODY3MTkgMTQuNzMwNDY5IDkuMzg2NzE5IDE0LjU5Mzc1IEwgOS4zODY3MTkgMTMuODEyNSBDIDkuMzg2NzE5IDEzLjY3MTg3NSA5LjUgMTMuNTU4NTk0IDkuNjQwNjI1IDEzLjU1ODU5NCBDIDEwLjQ5MjE4OCAxMy41NTg1OTQgMTEuMTc5Njg4IDEyLjg3MTA5NCAxMS4xNzk2ODggMTIuMDE5NTMxIEwgMTEuMTc5Njg4IDExLjA3ODEyNSBDIDExLjE3OTY4OCA5LjUgMTIuNDYwOTM4IDguMjE4NzUgMTQuMDQyOTY5IDguMjE4NzUgQyAxNC4xNzk2ODggOC4yMTg3NSAxNC4yODkwNjIgOC4zMjgxMjUgMTQuMjg5MDYyIDguNDY0ODQ0IFogTSAxNC4yODkwNjIgOS4yNDYwOTQgXCI7XG4gICAgc3ZnW1wiVlVEVVwiXSA9IFwiTSA2LjA5NzEgNi45OTI2IEwgNS4wNDY5IDYuOTkyNiBDIDQuODcyNSA2Ljk5NjMgNC43MTI5IDcuMTAzOSA0LjY1MzUgNy4yNzA5IEMgNC42NTM1IDcuMjgyIDQuNjUzNSA3LjI4OTUgNC42NTM1IDcuMzAwNiBDIDQuMjYwMiA4LjQzMjQgMy45MTUgOS40MDQ3IDMuNTE4IDEwLjUzNjUgQyAzLjQxNDEgMTAuODM3MSAzLjMxMDIgMTEuMTM0IDMuMTkxNCAxMS40MzQ2IEMgMy4xODQgMTEuNDYwNSAzLjE2NTQgMTEuNDgyOCAzLjEzOTUgMTEuNDkzOSBDIDMuMDk0OSAxMS40OTM5IDMuMDk0OSAxMS40NjA1IDMuMDgzOCAxMS40MzA5IEMgMi44Mzg5IDEwLjcyMjEgMi41OTM5IDEwLjAxNyAyLjM0MTYgOS4zMTE5IEwgMS42MjE3IDcuMjU2MSBDIDEuNjI1NCA3LjI0ODYgMS42MjU0IDcuMjQxMiAxLjYyMTcgNy4yMzM4IEMgMS41NDc1IDcuMDg1NCAxLjM5OSA2Ljk5MjYgMS4yMzU3IDYuOTkyNiBMIDAuMTcwNyA2Ljk5MjYgQyAwLjA4NTQgNi45ODUyIDAuMDExMSA3LjA0ODIgMCA3LjEzMzYgQyAtMC4wMDM3IDcuMTYzMyAwLjAwMzcgNy4xOTMgMC4wMTQ4IDcuMjE4OSBDIDAuNjI3MSA4LjkyOTcgMS4yMzU3IDEwLjY0MDQgMS44NDQzIDEyLjM0NzUgTCAxLjk3MDUgMTIuNyBDIDIuMTQ4NiAxMy4yMTk1IDIuNjM0OCAxMy41NjQ2IDMuMTgwMyAxMy41NjA5IEwgMy4zMjEzIDEzLjU2MDkgQyAzLjU1NTEgMTMuNTQ5OCAzLjc4ODkgMTMuNTIwMSA0LjAyMjcgMTMuNDY4MiBMIDQuNDUzMSAxMi4yMjg3IEwgNi4yNTY2IDcuMjMwMSBDIDYuMjY0MSA3LjIwNzggNi4yNjc4IDcuMTg5MyA2LjI3NTIgNy4xNzA3IEMgNi4yODYzIDcuMDg1NCA2LjIyNyA3LjAwMzcgNi4xNDE2IDYuOTkyNiBDIDYuMTI2OCA2Ljk5MjYgNi4xMTU2IDYuOTkyNiA2LjEwMDggNi45OTI2IE0gMTEuOTQxOCA3LjQ0MTYgQyAxMS45NDE4IDcuMjE1MiAxMS43Njc0IDcuMDI5NyAxMS41NDQ3IDcuMDExMSBMIDEwLjQ1NzQgNy4wMTExIEwgMTAuNDU3NCA3LjYxMjMgQyAxMC40NTc0IDguNzQ0MSAxMC40NTc0IDkuNzQ5OCAxMC40NTc0IDEwLjg4NTQgQyAxMC40NjExIDExLjAwMDQgMTAuNDUgMTEuMTE1NCAxMC40MjQgMTEuMjI2OCBDIDEwLjM0MjQgMTEuNjM1IDEwLjA0NTUgMTEuOTU3OCA5LjY0ODQgMTIuMDcyOSBDIDkuMDQzNiAxMi4yNjk1IDguMzkwNCAxMS45MzkzIDguMTkzNyAxMS4zMzA3IEMgOC4xNTY2IDExLjIxMTkgOC4xMzgxIDExLjA4OTUgOC4xMzgxIDEwLjk2NyBDIDguMTM4MSAxMC4xODQgOC4xMzgxIDguNTEwNCA4LjEzODEgNy42MDQ5IEwgOC4xMzgxIDcgQyA4LjEzODEgNyA3LjA1NDUgNyA3LjA0NzEgNyBDIDYuODI0NCA3LjAxNDggNi42NSA3LjIwNDEgNi42NSA3LjQyNjggTCA2LjY1IDcuNjQ1NyBDIDYuNjUgOC44MjIxIDYuNjUgOS44MzE0IDYuNjUgMTEuMDMwMSBDIDYuNjU3NCAxMi40NzczIDcuODMwMSAxMy42NDI2IDkuMjY5OSAxMy42MzE0IEMgOS40NDA2IDEzLjYzMTQgOS42MDc2IDEzLjYxMjkgOS43NzQ2IDEzLjU3OTUgQyAxMC40MjAzIDEzLjQ3MTkgMTEuMDAyOSAxMy4xMTkzIDExLjQwMzcgMTIuNTk5OCBDIDExLjc0NTEgMTIuMTY5MyAxMS45MzQ0IDExLjYzODcgMTEuOTQxOCAxMS4wODU3IEMgMTEuOTQxOCAxMC40NTg2IDExLjk0MTggOS44MzE0IDExLjk0MTggOS4yMDA2IFogTSAxMS45NDE4IDcuNDQxNiBNIDIzLjc1IDcuNDQxNiBDIDIzLjc1IDcuMjE4OSAyMy41NzkzIDcuMDI5NyAyMy4zNTY2IDcuMDExMSBMIDIyLjI2NTYgNy4wMTExIEwgMjIuMjY1NiA3LjYxMjMgQyAyMi4yNjU2IDguNzQ0MSAyMi4yNjU2IDkuNzQ5OCAyMi4yNjU2IDEwLjg4NTQgQyAyMi4yNjU2IDExLjAwMDQgMjIuMjU0NSAxMS4xMTU0IDIyLjIyODUgMTEuMjI2OCBDIDIyLjE1MDYgMTEuNjMxMiAyMS44NSAxMS45NTc4IDIxLjQ1MjkgMTIuMDcyOSBDIDIwLjg1MTggMTIuMjczMiAyMC4yMDIzIDExLjk0MyAyMC4wMDIgMTEuMzM4MSBDIDE5Ljk2MTEgMTEuMjE5MyAxOS45NDI2IDExLjA5MzIgMTkuOTQyNiAxMC45NjcgQyAxOS45NDI2IDEwLjE4NCAxOS45NDI2IDguNTEwNCAxOS45NDI2IDcuNjA0OSBMIDE5Ljk0MjYgNyBDIDE5Ljk0MjYgNyAxOC44NjI3IDcgMTguODQ3OSA3IEMgMTguNjI4OSA3LjAxODYgMTguNDU4MiA3LjIwNDEgMTguNDU0NSA3LjQyNjggTCAxOC40NTQ1IDcuNjQ1NyBDIDE4LjQ1NDUgOC44MjIxIDE4LjQ1NDUgOS44MzE0IDE4LjQ1NDUgMTEuMDMwMSBDIDE4LjQ2NTYgMTIuNDc3MyAxOS42MzgzIDEzLjY0MjYgMjEuMDc0NCAxMy42MzE0IEMgMjEuMjQ1MSAxMy42MzE0IDIxLjQxNTggMTMuNjEyOSAyMS41ODI4IDEzLjU3OTUgQyAyMi4yMjg1IDEzLjQ3MTkgMjIuODA3NCAxMy4xMTkzIDIzLjIwODIgMTIuNTk5OCBDIDIzLjU1MzMgMTIuMTY5MyAyMy43NDI2IDExLjYzODcgMjMuNzQ2MyAxMS4wODU3IEMgMjMuNzQ2MyAxMC40NTg2IDIzLjc0NjMgOS44MzE0IDIzLjc0NjMgOS4yMDA2IEwgMjMuNzQ2MyA3LjQ0MTYgWiBNIDIzLjc1IDcuNDQxNiBNIDE2LjEzNTIgMTEuNTM4NSBDIDE1Ljg0NTcgMTEuODg3MyAxNS40MzM4IDEyLjEwNjIgMTQuOTg4NSAxMi4xNDcxIEMgMTQuODk5NCAxMi4xNTA4IDE0LjgxMDQgMTIuMTUwOCAxNC43MjEzIDEyLjE0NzEgTCAxMy45NTMxIDEyLjE0NzEgQyAxMy44NjA0IDEyLjE0NzEgMTMuODU2NiAxMi4xNDcxIDEzLjg1NjYgMTIuMDUwNiBMIDEzLjg1NjYgOC40NTg0IEMgMTMuODU2NiA4LjM3MyAxMy44NTY2IDguMzczIDEzLjk0MiA4LjM3MyBDIDE0LjI2ODYgOC4zNzMgMTQuNTY5MSA4LjM3MyAxNC44ODA5IDguMzczIEMgMTUuNDM3NSA4LjM5MTYgMTUuOTQ5NiA4LjY4MTEgMTYuMjUzOSA5LjE0ODYgQyAxNi40NTA2IDkuNDM4MSAxNi41NjU2IDkuNzc5NSAxNi41ODA1IDEwLjEzMiBDIDE2LjYyMTMgMTAuNjQwNCAxNi40NjE3IDExLjE0NTEgMTYuMTM1MiAxMS41Mzg1IE0gMTYuNTY5MyA3LjQ4OTggQyAxNi4xMDE4IDcuMTg5MyAxNS41NiA3LjAyMjMgMTUuMDAzMyA3LjAwNzQgQyAxNC43NDM2IDcuMDA3NCAxNC40ODc1IDcuMDA3NCAxNC4yMjQgNy4wMDc0IEwgMTIuODQ3MyA3LjAwNzQgQyAxMi42MDk4IDcuMDA3NCAxMi40MjA1IDcuMjAwNCAxMi40MjA1IDcuNDM3OSBMIDEyLjQyMDUgMTMuMTE1NiBDIDEyLjQyMDUgMTMuMzUzMSAxMi42MDk4IDEzLjU0NjEgMTIuODQ3MyAxMy41NDYxIEwgMTQuOTE0MyAxMy41NDYxIEMgMTUuMDcwMSAxMy41NDYxIDE1LjIyNiAxMy41MzEzIDE1LjM4MTggMTMuNTAxNiBDIDE2LjAwNTMgMTMuNDA4OCAxNi41ODQyIDEzLjEzMDUgMTcuMDQ0MyAxMi43MDM3IEMgMTcuOTAxNiAxMS45NTQxIDE4LjI5MTIgMTAuOCAxOC4wNjg2IDkuNjc5MyBDIDE3LjkxMjcgOC43NzAxIDE3LjM2NzIgNy45NzYgMTYuNTgwNSA3LjUwNDcgTSAxOS4wMzM0IDE0LjQyOTMgQyAxOC40NjU2IDE0LjQ1NTMgMTguMDI0IDE0Ljk0NTEgMTguMDQ2MyAxNS41MTY2IEMgMTguMDY4NiAxNi4wODgxIDE4LjU0NzMgMTYuNTI5NyAxOS4xMTUgMTYuNTA3NCBDIDE5LjY3MTcgMTYuNDg1MiAyMC4xMDk2IDE2LjAyNSAyMC4xMDIxIDE1LjQ2NDYgQyAyMC4xMTMzIDE0LjkxMTcgMTkuNjc5MSAxNC40NDc5IDE5LjEyNjIgMTQuNDI5MyBMIDE5LjAzMzQgMTQuNDI5MyBNIDE5LjYxNiAxNS41MDkyIEMgMTkuNjA0OSAxNS42MzU0IDE5LjU0OTIgMTUuNzU3OCAxOS40NjM5IDE1Ljg1MDYgTCAxOS40MzQyIDE1Ljg4MDMgQyAxOS4xOTY3IDE2LjEwMjkgMTguODI1NiAxNi4wOTE4IDE4LjYwMjkgMTUuODU0MyBDIDE4LjM4MDMgMTUuNjIwNSAxOC4zOTE0IDE1LjI0NTcgMTguNjI4OSAxNS4wMjMgQyAxOC44NjI3IDE0LjgwMDQgMTkuMjMzOCAxNC44MTE1IDE5LjQ1NjQgMTUuMDQ5IEMgMTkuNDU2NCAxNS4wNDkgMTkuNDU2NCAxNS4wNDkgMTkuNDYwMiAxNS4wNDkgQyAxOS41NTI5IDE1LjE0OTIgMTkuNjA4NiAxNS4yNzkxIDE5LjYxNiAxNS40MTY0IFogTSAxOS42MTYgMTUuNTA5MiBNIDE2LjgxOCAxNS4zMTk5IEwgMTYuODE4IDE1Ljc3MjcgTCAxNy4yNjMzIDE1Ljc3MjcgTCAxNy4yNjMzIDE1LjkyODUgQyAxNy4xNTU3IDE2LjAxMDIgMTcuMDI5NSAxNi4wNTEgMTYuODk1OSAxNi4wNTEgQyAxNi42MDI3IDE2LjA2MjEgMTYuMzU0MSAxNS44MzIgMTYuMzQzIDE1LjUzNTIgQyAxNi4zMzkzIDE1LjUxMjkgMTYuMzM5MyAxNS40OTA2IDE2LjM0MyAxNS40NzIxIEMgMTYuMzIwNyAxNS4xNzUyIDE2LjUzOTYgMTQuOTE1NCAxNi44MzY1IDE0Ljg5MzIgTCAxNi44OTU5IDE0Ljg5MzIgQyAxNy4wNzAzIDE0Ljg5NjkgMTcuMjI5OSAxNC45OTM0IDE3LjMxNTIgMTUuMTQ1NSBMIDE3Ljc0NTcgMTQuOTIyOSBDIDE3LjU3NSAxNC42MTExIDE3LjI0ODQgMTQuNDI1NiAxNi44OTU5IDE0LjQzNjcgQyAxNi4zMjgxIDE0LjQyMTkgMTUuODU2OCAxNC44NzQ2IDE1Ljg0MiAxNS40NDI0IEMgMTUuODI3MSAxNS45OTUzIDE2LjI0MjggMTYuNDYyOSAxNi43OTIgMTYuNTAzNyBMIDE2Ljg5NTkgMTYuNTAzNyBDIDE3LjE5NjUgMTYuNTAzNyAxNy40ODU5IDE2LjM4ODcgMTcuNzAxMiAxNi4xNzM0IEMgMTcuNzM0NiAxNi4xNCAxNy43NTY4IDE2LjA4ODEgMTcuNzYwNSAxNi4wMzYxIEwgMTcuNzYwNSAxNS4zMTk5IFogTSAxNi44MTggMTUuMzE5OSBNIDE1LjMxODcgMTQuNDg1IEwgMTUuMjc3OSAxNC40ODUgQyAxNS4xNjY2IDE0LjQ5MjQgMTUuMDgxMiAxNC41ODUyIDE1LjA3NzUgMTQuNjk2NSBMIDE1LjA3NzUgMTUuNTc5NyBMIDE0LjI3NiAxNC40ODUgTCAxMy43NDE2IDE0LjQ4NSBMIDEzLjc0MTYgMTYuNDc3NyBMIDE0LjI1MzcgMTYuNDc3NyBMIDE0LjI1MzcgMTUuMzMxMSBMIDE1LjA5MjQgMTYuNDc3NyBMIDE1LjU4MjIgMTYuNDc3NyBMIDE1LjU4MjIgMTQuNDg1IFogTSAxNS4zMTg3IDE0LjQ4NSBNIDEyLjgxMzkgMTQuNDg1IEwgMTIuMTYwNyAxNC40ODUgTCAxMS40MTExIDE2LjQ4MTQgTCAxMS45OTM3IDE2LjQ4MTQgTCAxMi4wOTM5IDE2LjE5MiBMIDEyLjg3MzIgMTYuMTkyIEwgMTIuOTI1MiAxNi4zNDA0IEMgMTIuOTU4NiAxNi40MjIxIDEzLjAzMjggMTYuNDc0IDEzLjExODIgMTYuNDc3NyBMIDEzLjU1NjEgMTYuNDc3NyBaIE0gMTIuMjM4NyAxNS43NDMgTCAxMi40OTEgMTQuOTg5NiBMIDEyLjczOTYgMTUuNzQzIFogTSAxMi4yMzg3IDE1Ljc0MyBNIDEwLjM5NDMgMTQuNDg1IEwgOS41NTU3IDE0LjQ4NSBMIDkuNTU1NyAxNi4yNjk5IEMgOS41NjMxIDE2LjM4NSA5LjY1NTkgMTYuNDc3NyA5Ljc3MDkgMTYuNDgxNCBMIDEwLjM5NDMgMTYuNDgxNCBDIDEwLjkzOTggMTYuNTExMSAxMS40MTExIDE2LjA5MTggMTEuNDQwOCAxNS41Mzg5IEMgMTEuNDc0MiAxNC45ODk2IDExLjA1NDkgMTQuNTE4NCAxMC41MDU3IDE0LjQ4NSBDIDEwLjQ2ODYgMTQuNDg1IDEwLjQzMTQgMTQuNDg1IDEwLjM5NDMgMTQuNDg1IE0gMTAuMzk0MyAxNi4wMzYxIEwgMTAuMDY3OCAxNi4wMzYxIEwgMTAuMDY3OCAxNC45MjI5IEwgMTAuMzk0MyAxNC45MjI5IEMgMTAuNjc2NCAxNC45MDggMTAuOTEzOSAxNS4xMjMyIDEwLjkzMjQgMTUuNDA1MyBMIDEwLjkzMjQgMTUuNDY0NiBDIDEwLjkzMjQgMTUuNzYxNSAxMC42OTEyIDE2LjAzNjEgMTAuMzk4IDE2LjAzNjEgQyAxMC4zOTQzIDE2LjAzNjEgMTAuMzk4IDE2LjAzMjQgMTAuMzk4IDE2LjAzMjQgTCAxMC40MDE4IDE2LjAyODcgTSA4LjkwNjMgMTQuNDg1IEMgOC43OTQ5IDE0LjQ4ODcgOC43MDIxIDE0LjU3NzcgOC42OTg0IDE0LjY4OTEgTCA4LjY5ODQgMTUuNTc5NyBMIDcuODc4MyAxNC40ODUgTCA3LjM0MzkgMTQuNDg1IEwgNy4zNDM5IDE2LjQ3NzcgTCA3Ljg1MjMgMTYuNDc3NyBMIDcuODUyMyAxNS4zMzExIEwgOC42OTQ3IDE2LjQ4NTIgTCA5LjE4ODMgMTYuNDg1MiBMIDkuMTg4MyAxNC40ODUgWiBNIDguOTA2MyAxNC40ODUgTSA2LjQzMTEgMTQuNDg1IEwgNS43Nzc5IDE0LjQ4NSBMIDUuMDMyIDE2LjQ3NzcgTCA1LjYyNTggMTYuNDc3NyBMIDUuNzI2IDE2LjE4ODMgTCA2LjUxMjcgMTYuMTg4MyBMIDYuNTY0NiAxNi4zNDA0IEMgNi41OTggMTYuNDE4NCA2LjY3MjMgMTYuNDcwMyA2Ljc1NzYgMTYuNDc3NyBMIDcuMTkxOCAxNi40Nzc3IFogTSA1Ljg1NTkgMTUuNzQzIEwgNi4xMTE5IDE0Ljk4OTYgTCA2LjM2MDUgMTUuNzQzIFogTSA1Ljg1NTkgMTUuNzQzIE0gNS4yMjEzIDE0LjkwOCBMIDUuMjIxMyAxNC40NTkgTCAzLjY5NjEgMTQuNDU5IEwgMy42OTYxIDE2LjQ0OCBMIDQuMjM0MiAxNi40NDggTCA0LjIzNDIgMTUuNzU3OCBMIDQuNzY4NiAxNS43NTc4IEMgNC44NjUgMTUuNzQ2NyA0LjkzNTUgMTUuNjY4NyA0Ljk0MyAxNS41NzIzIEwgNC45NDMgMTUuMzA1MSBMIDQuMjQxNiAxNS4zMDUxIEwgNC4yNDE2IDE0LjkwOCBaIE0gNS4yMjEzIDE0LjkwOCBNIDAuMzk3MSAxNS4zOTQxIEwgMy4yNDcxIDE1LjM5NDEgTCAzLjI0NzEgMTUuNTUgTCAwLjM5NzEgMTUuNTUgWiBNIDAuMzk3MSAxNS4zOTQxIE0gMjAuNTU0OSAxNS4zOTQxIEwgMjMuNDA0OSAxNS4zOTQxIEwgMjMuNDA0OSAxNS41NSBMIDIwLjU1NDkgMTUuNTUgWiBNIDIwLjU1NDkgMTUuMzk0MVwiO1xufSkoc3ZnIHx8IChleHBvcnRzLnN2ZyA9IHN2ZyA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VudW1zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pbnRlcmZhY2VzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9kZWZhdWx0S2V5c1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZGVmYXVsdFNvdXJjZXNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vSUNvbmZpZ1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vSUN1c3RvbUFjdGlvblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vSUtleVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vSVNlcnZpY2VEYXRhXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9JU291cmNlXCIpLCBleHBvcnRzKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG5jb25zdCBnbG9iYWwgPSBOT0RFX01PREUgPyBnbG9iYWxUaGlzIDogd2luZG93O1xuLyoqXG4gKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgYGFkb3B0ZWRTdHlsZVNoZWV0c2AuXG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgPSBnbG9iYWwuU2hhZG93Um9vdCAmJlxuICAgIChnbG9iYWwuU2hhZHlDU1MgPT09IHVuZGVmaW5lZCB8fCBnbG9iYWwuU2hhZHlDU1MubmF0aXZlU2hhZG93KSAmJlxuICAgICdhZG9wdGVkU3R5bGVTaGVldHMnIGluIERvY3VtZW50LnByb3RvdHlwZSAmJlxuICAgICdyZXBsYWNlJyBpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZTtcbmNvbnN0IGNvbnN0cnVjdGlvblRva2VuID0gU3ltYm9sKCk7XG5jb25zdCBjc3NUYWdDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBhIHN0cmluZyBvZiBDU1MgdGV4dCwgdGhhdCBtYXkgYmUgdXNlZCB0byBjcmVhdGUgYSBDU1NTdHlsZVNoZWV0LlxuICpcbiAqIENTU1Jlc3VsdCBpcyB0aGUgcmV0dXJuIHZhbHVlIG9mIGBjc3NgLXRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFscyBhbmRcbiAqIGB1bnNhZmVDU1MoKWAuIEluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IENTU1Jlc3VsdHMgYXJlIG9ubHkgY3JlYXRlZCB2aWEgdGhlXG4gKiBgY3NzYCB0YWcgYW5kIGB1bnNhZmVDU1MoKWAsIENTU1Jlc3VsdCBjYW5ub3QgYmUgY29uc3RydWN0ZWQgZGlyZWN0bHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDU1NSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKGNzc1RleHQsIHN0cmluZ3MsIHNhZmVUb2tlbikge1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICB0aGlzWydfJGNzc1Jlc3VsdCQnXSA9IHRydWU7XG4gICAgICAgIGlmIChzYWZlVG9rZW4gIT09IGNvbnN0cnVjdGlvblRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NTU1Jlc3VsdCBpcyBub3QgY29uc3RydWN0YWJsZS4gVXNlIGB1bnNhZmVDU1NgIG9yIGBjc3NgIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICAgICAgdGhpcy5fc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgfVxuICAgIC8vIFRoaXMgaXMgYSBnZXR0ZXIgc28gdGhhdCBpdCdzIGxhenkuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHN0eWxlc2hlZXRzXG4gICAgLy8gYXJlIG5vdCBjcmVhdGVkIHVudGlsIHRoZSBmaXJzdCBlbGVtZW50IGluc3RhbmNlIGlzIG1hZGUuXG4gICAgZ2V0IHN0eWxlU2hlZXQoKSB7XG4gICAgICAgIC8vIElmIGBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHNgIGlzIHRydWUgdGhlbiB3ZSBhc3N1bWUgQ1NTU3R5bGVTaGVldCBpc1xuICAgICAgICAvLyBjb25zdHJ1Y3RhYmxlLlxuICAgICAgICBsZXQgc3R5bGVTaGVldCA9IHRoaXMuX3N0eWxlU2hlZXQ7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLl9zdHJpbmdzO1xuICAgICAgICBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzICYmIHN0eWxlU2hlZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGVhYmxlID0gc3RyaW5ncyAhPT0gdW5kZWZpbmVkICYmIHN0cmluZ3MubGVuZ3RoID09PSAxO1xuICAgICAgICAgICAgaWYgKGNhY2hlYWJsZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQgPSBjc3NUYWdDYWNoZS5nZXQoc3RyaW5ncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMuX3N0eWxlU2hlZXQgPSBzdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKSkucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc1RhZ0NhY2hlLnNldChzdHJpbmdzLCBzdHlsZVNoZWV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlU2hlZXQ7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jc3NUZXh0O1xuICAgIH1cbn1cbmNvbnN0IHRleHRGcm9tQ1NTUmVzdWx0ID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICBpZiAodmFsdWVbJ18kY3NzUmVzdWx0JCddID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jc3NUZXh0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgcGFzc2VkIHRvICdjc3MnIGZ1bmN0aW9uIG11c3QgYmUgYSAnY3NzJyBmdW5jdGlvbiByZXN1bHQ6IGAgK1xuICAgICAgICAgICAgYCR7dmFsdWV9LiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dCB0YWtlIGNhcmUgYCArXG4gICAgICAgICAgICBgdG8gZW5zdXJlIHBhZ2Ugc2VjdXJpdHkuYCk7XG4gICAgfVxufTtcbi8qKlxuICogV3JhcCBhIHZhbHVlIGZvciBpbnRlcnBvbGF0aW9uIGluIGEge0BsaW5rY29kZSBjc3N9IHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsLlxuICpcbiAqIFRoaXMgaXMgdW5zYWZlIGJlY2F1c2UgdW50cnVzdGVkIENTUyB0ZXh0IGNhbiBiZSB1c2VkIHRvIHBob25lIGhvbWVcbiAqIG9yIGV4ZmlsdHJhdGUgZGF0YSB0byBhbiBhdHRhY2tlciBjb250cm9sbGVkIHNpdGUuIFRha2UgY2FyZSB0byBvbmx5IHVzZVxuICogdGhpcyB3aXRoIHRydXN0ZWQgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVDU1MgPSAodmFsdWUpID0+IG5ldyBDU1NSZXN1bHQodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKSwgdW5kZWZpbmVkLCBjb25zdHJ1Y3Rpb25Ub2tlbik7XG4vKipcbiAqIEEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgd2hpY2ggY2FuIGJlIHVzZWQgd2l0aCBMaXRFbGVtZW50J3NcbiAqIHtAbGlua2NvZGUgTGl0RWxlbWVudC5zdHlsZXN9IHByb3BlcnR5IHRvIHNldCBlbGVtZW50IHN0eWxlcy5cbiAqXG4gKiBGb3Igc2VjdXJpdHkgcmVhc29ucywgb25seSBsaXRlcmFsIHN0cmluZyB2YWx1ZXMgYW5kIG51bWJlciBtYXkgYmUgdXNlZCBpblxuICogZW1iZWRkZWQgZXhwcmVzc2lvbnMuIFRvIGluY29ycG9yYXRlIG5vbi1saXRlcmFsIHZhbHVlcyB7QGxpbmtjb2RlIHVuc2FmZUNTU31cbiAqIG1heSBiZSB1c2VkIGluc2lkZSBhbiBleHByZXNzaW9uLlxuICovXG5leHBvcnQgY29uc3QgY3NzID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGNzc1RleHQgPSBzdHJpbmdzLmxlbmd0aCA9PT0gMVxuICAgICAgICA/IHN0cmluZ3NbMF1cbiAgICAgICAgOiB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT4gYWNjICsgdGV4dEZyb21DU1NSZXN1bHQodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgICByZXR1cm4gbmV3IENTU1Jlc3VsdChjc3NUZXh0LCBzdHJpbmdzLCBjb25zdHJ1Y3Rpb25Ub2tlbik7XG59O1xuLyoqXG4gKiBBcHBsaWVzIHRoZSBnaXZlbiBzdHlsZXMgdG8gYSBgc2hhZG93Um9vdGAuIFdoZW4gU2hhZG93IERPTSBpc1xuICogYXZhaWxhYmxlIGJ1dCBgYWRvcHRlZFN0eWxlU2hlZXRzYCBpcyBub3QsIHN0eWxlcyBhcmUgYXBwZW5kZWQgdG8gdGhlXG4gKiBgc2hhZG93Um9vdGAgdG8gW21pbWljIHNwZWMgYmVoYXZpb3JdKGh0dHBzOi8vd2ljZy5naXRodWIuaW8vY29uc3RydWN0LXN0eWxlc2hlZXRzLyN1c2luZy1jb25zdHJ1Y3RlZC1zdHlsZXNoZWV0cykuXG4gKiBOb3RlLCB3aGVuIHNoaW1taW5nIGlzIHVzZWQsIGFueSBzdHlsZXMgdGhhdCBhcmUgc3Vic2VxdWVudGx5IHBsYWNlZCBpbnRvXG4gKiB0aGUgc2hhZG93Um9vdCBzaG91bGQgYmUgcGxhY2VkICpiZWZvcmUqIGFueSBzaGltbWVkIGFkb3B0ZWQgc3R5bGVzLiBUaGlzXG4gKiB3aWxsIG1hdGNoIHNwZWMgYmVoYXZpb3IgdGhhdCBnaXZlcyBhZG9wdGVkIHNoZWV0cyBwcmVjZWRlbmNlIG92ZXIgc3R5bGVzIGluXG4gKiBzaGFkb3dSb290LlxuICovXG5leHBvcnQgY29uc3QgYWRvcHRTdHlsZXMgPSAocmVuZGVyUm9vdCwgc3R5bGVzKSA9PiB7XG4gICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cykge1xuICAgICAgICByZW5kZXJSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IHN0eWxlcy5tYXAoKHMpID0+IHMgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0ID8gcyA6IHMuc3R5bGVTaGVldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdHlsZXMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlID0gZ2xvYmFsWydsaXROb25jZSddO1xuICAgICAgICAgICAgaWYgKG5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzLmNzc1RleHQ7XG4gICAgICAgICAgICByZW5kZXJSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGNzc1Jlc3VsdEZyb21TdHlsZVNoZWV0ID0gKHNoZWV0KSA9PiB7XG4gICAgbGV0IGNzc1RleHQgPSAnJztcbiAgICBmb3IgKGNvbnN0IHJ1bGUgb2Ygc2hlZXQuY3NzUnVsZXMpIHtcbiAgICAgICAgY3NzVGV4dCArPSBydWxlLmNzc1RleHQ7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVDU1MoY3NzVGV4dCk7XG59O1xuZXhwb3J0IGNvbnN0IGdldENvbXBhdGlibGVTdHlsZSA9IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyB8fFxuICAgIChOT0RFX01PREUgJiYgZ2xvYmFsLkNTU1N0eWxlU2hlZXQgPT09IHVuZGVmaW5lZClcbiAgICA/IChzKSA9PiBzXG4gICAgOiAocykgPT4gcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldChzKSA6IHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdGFnLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuZXhwb3J0IGNvbnN0IGxlZ2FjeVByb3RvdHlwZU1ldGhvZCA9IChkZXNjcmlwdG9yLCBwcm90bywgbmFtZSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuZXhwb3J0IGNvbnN0IHN0YW5kYXJkUHJvdG90eXBlTWV0aG9kID0gKGRlc2NyaXB0b3IsIGVsZW1lbnQpID0+ICh7XG4gICAga2luZDogJ21ldGhvZCcsXG4gICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgICBrZXk6IGVsZW1lbnQua2V5LFxuICAgIGRlc2NyaXB0b3IsXG59KTtcbi8qKlxuICogSGVscGVyIGZvciBkZWNvcmF0aW5nIGEgcHJvcGVydHkgdGhhdCBpcyBjb21wYXRpYmxlIHdpdGggYm90aCBUeXBlU2NyaXB0XG4gKiBhbmQgQmFiZWwgZGVjb3JhdG9ycy4gVGhlIG9wdGlvbmFsIGBmaW5pc2hlcmAgY2FuIGJlIHVzZWQgdG8gcGVyZm9ybSB3b3JrIG9uXG4gKiB0aGUgY2xhc3MuIFRoZSBvcHRpb25hbCBgZGVzY3JpcHRvcmAgc2hvdWxkIHJldHVybiBhIFByb3BlcnR5RGVzY3JpcHRvclxuICogdG8gaW5zdGFsbCBmb3IgdGhlIGdpdmVuIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSBmaW5pc2hlciB7ZnVuY3Rpb259IE9wdGlvbmFsIGZpbmlzaGVyIG1ldGhvZDsgcmVjZWl2ZXMgdGhlIGVsZW1lbnRcbiAqIGNvbnN0cnVjdG9yIGFuZCBwcm9wZXJ0eSBrZXkgYXMgYXJndW1lbnRzIGFuZCBoYXMgbm8gcmV0dXJuIHZhbHVlLlxuICogQHBhcmFtIGRlc2NyaXB0b3Ige2Z1bmN0aW9ufSBPcHRpb25hbCBkZXNjcmlwdG9yIG1ldGhvZDsgcmVjZWl2ZXMgdGhlXG4gKiBwcm9wZXJ0eSBrZXkgYXMgYW4gYXJndW1lbnQgYW5kIHJldHVybnMgYSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIGRlZmluZSBmb3JcbiAqIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIHtDbGFzc0VsZW1lbnR8dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRlY29yYXRlUHJvcGVydHkgPSAoeyBmaW5pc2hlciwgZGVzY3JpcHRvciwgfSkgPT4gKHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lXG4vLyBOb3RlIFR5cGVTY3JpcHQgcmVxdWlyZXMgdGhlIHJldHVybiB0eXBlIHRvIGJlIGB2b2lkfGFueWBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4pID0+IHtcbiAgICB2YXIgX2E7XG4gICAgLy8gVHlwZVNjcmlwdCAvIEJhYmVsIGxlZ2FjeSBtb2RlXG4gICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjdG9yID0gcHJvdG9PckRlc2NyaXB0b3JcbiAgICAgICAgICAgIC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lLCBkZXNjcmlwdG9yKG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5pc2hlciA9PT0gbnVsbCB8fCBmaW5pc2hlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmluaXNoZXIoY3RvciwgbmFtZSk7XG4gICAgICAgIC8vIEJhYmVsIHN0YW5kYXJkIG1vZGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIE5vdGUsIHRoZSBAcHJvcGVydHkgZGVjb3JhdG9yIHNhdmVzIGBrZXlgIGFzIGBvcmlnaW5hbEtleWBcbiAgICAgICAgLy8gc28gdHJ5IHRvIHVzZSBpdCBoZXJlLlxuICAgICAgICBjb25zdCBrZXkgPSBcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgKF9hID0gcHJvdG9PckRlc2NyaXB0b3Iub3JpZ2luYWxLZXkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHByb3RvT3JEZXNjcmlwdG9yLmtleTtcbiAgICAgICAgY29uc3QgaW5mbyA9IGRlc2NyaXB0b3IgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBraW5kOiAnbWV0aG9kJyxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdwcm90b3R5cGUnLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yOiBkZXNjcmlwdG9yKHByb3RvT3JEZXNjcmlwdG9yLmtleSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHsgLi4ucHJvdG9PckRlc2NyaXB0b3IsIGtleSB9O1xuICAgICAgICBpZiAoZmluaXNoZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbmZvLmZpbmlzaGVyID0gZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hlcihjdG9yLCBrZXkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IGxlZ2FjeUN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSwgY2xhenopID0+IHtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhenopO1xuICAgIC8vIENhc3QgYXMgYW55IGJlY2F1c2UgVFMgZG9lc24ndCByZWNvZ25pemUgdGhlIHJldHVybiB0eXBlIGFzIGJlaW5nIGFcbiAgICAvLyBzdWJ0eXBlIG9mIHRoZSBkZWNvcmF0ZWQgY2xhc3Mgd2hlbiBjbGF6eiBpcyB0eXBlZCBhc1xuICAgIC8vIGBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD5gIGZvciBzb21lIHJlYXNvbi5cbiAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBpcyBoZWxwZnVsIHRvIG1ha2Ugc3VyZSB0aGUgZGVjb3JhdG9yIGlzXG4gICAgLy8gYXBwbGllZCB0byBlbGVtZW50cyBob3dldmVyLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuIGNsYXp6O1xufTtcbmNvbnN0IHN0YW5kYXJkQ3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lLCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3QgeyBraW5kLCBlbGVtZW50cyB9ID0gZGVzY3JpcHRvcjtcbiAgICByZXR1cm4ge1xuICAgICAgICBraW5kLFxuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgb25jZSB0aGUgY2xhc3MgaXMgb3RoZXJ3aXNlIGZ1bGx5IGRlZmluZWRcbiAgICAgICAgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGF6eik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogYGBganNcbiAqIEBjdXN0b21FbGVtZW50KCdteS1lbGVtZW50JylcbiAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBAcGFyYW0gdGFnTmFtZSBUaGUgdGFnIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSkgPT4gKGNsYXNzT3JEZXNjcmlwdG9yKSA9PiB0eXBlb2YgY2xhc3NPckRlc2NyaXB0b3IgPT09ICdmdW5jdGlvbidcbiAgICA/IGxlZ2FjeUN1c3RvbUVsZW1lbnQodGFnTmFtZSwgY2xhc3NPckRlc2NyaXB0b3IpXG4gICAgOiBzdGFuZGFyZEN1c3RvbUVsZW1lbnQodGFnTmFtZSwgY2xhc3NPckRlc2NyaXB0b3IpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIHRvIGEgbWV0aG9kIHVzZWQgYXMgYW4gZXZlbnQgbGlzdGVuZXIgaW4gYVxuICogbGl0LWh0bWwgdGVtcGxhdGUuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgYXMgYWNjZXB0ZWQgYnlcbiAqIGBFdmVudFRhcmdldCNhZGRFdmVudExpc3RlbmVyYCBhbmQgYEV2ZW50VGFyZ2V0I3JlbW92ZUV2ZW50TGlzdGVuZXJgLlxuICpcbiAqIEN1cnJlbnQgYnJvd3NlcnMgc3VwcG9ydCB0aGUgYGNhcHR1cmVgLCBgcGFzc2l2ZWAsIGFuZCBgb25jZWAgb3B0aW9ucy4gU2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXIjUGFyYW1ldGVyc1xuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBjbGlja2VkID0gZmFsc2U7XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IEBjbGljaz0ke3RoaXMuX29uQ2xpY2t9PlxuICogICAgICAgICA8YnV0dG9uPjwvYnV0dG9uPlxuICogICAgICAgPC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICpcbiAqICAgQGV2ZW50T3B0aW9ucyh7Y2FwdHVyZTogdHJ1ZX0pXG4gKiAgIF9vbkNsaWNrKGUpIHtcbiAqICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBmaW5pc2hlcjogKGN0b3IsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgY3Rvci5wcm90b3R5cGVbbmFtZV0sIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtb3B0aW9ucy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IHN0YW5kYXJkUHJvcGVydHkgPSAob3B0aW9ucywgZWxlbWVudCkgPT4ge1xuICAgIC8vIFdoZW4gZGVjb3JhdGluZyBhbiBhY2Nlc3NvciwgcGFzcyBpdCB0aHJvdWdoIGFuZCBhZGQgcHJvcGVydHkgbWV0YWRhdGEuXG4gICAgLy8gTm90ZSwgdGhlIGBoYXNPd25Qcm9wZXJ0eWAgY2hlY2sgaW4gYGNyZWF0ZVByb3BlcnR5YCBlbnN1cmVzIHdlIGRvbid0XG4gICAgLy8gc3RvbXAgb3ZlciB0aGUgdXNlcidzIGFjY2Vzc29yLlxuICAgIGlmIChlbGVtZW50LmtpbmQgPT09ICdtZXRob2QnICYmXG4gICAgICAgIGVsZW1lbnQuZGVzY3JpcHRvciAmJlxuICAgICAgICAhKCd2YWx1ZScgaW4gZWxlbWVudC5kZXNjcmlwdG9yKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZWxlbWVudCxcbiAgICAgICAgICAgIGZpbmlzaGVyKGNsYXp6KSB7XG4gICAgICAgICAgICAgICAgY2xhenouY3JlYXRlUHJvcGVydHkoZWxlbWVudC5rZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZVByb3BlcnR5KCkgdGFrZXMgY2FyZSBvZiBkZWZpbmluZyB0aGUgcHJvcGVydHksIGJ1dCB3ZSBzdGlsbFxuICAgICAgICAvLyBtdXN0IHJldHVybiBzb21lIGtpbmQgb2YgZGVzY3JpcHRvciwgc28gcmV0dXJuIGEgZGVzY3JpcHRvciBmb3IgYW5cbiAgICAgICAgLy8gdW51c2VkIHByb3RvdHlwZSBmaWVsZC4gVGhlIGZpbmlzaGVyIGNhbGxzIGNyZWF0ZVByb3BlcnR5KCkuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBraW5kOiAnZmllbGQnLFxuICAgICAgICAgICAga2V5OiBTeW1ib2woKSxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgICAgICBkZXNjcmlwdG9yOiB7fSxcbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBvcmlnaW5hbCBrZXkgc28gc3Vic2VxdWVudCBkZWNvcmF0b3JzIGhhdmUgYWNjZXNzIHRvIGl0LlxuICAgICAgICAgICAgb3JpZ2luYWxLZXk6IGVsZW1lbnQua2V5LFxuICAgICAgICAgICAgLy8gV2hlbiBAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWRlY29yYXRvcnMgaW1wbGVtZW50cyBpbml0aWFsaXplcnMsXG4gICAgICAgICAgICAvLyBkbyB0aGlzIGluc3RlYWQgb2YgdGhlIGluaXRpYWxpemVyIGJlbG93LiBTZWU6XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzkyNjAgZXh0cmFzOiBbXG4gICAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAgIC8vICAgICBraW5kOiAnaW5pdGlhbGl6ZXInLFxuICAgICAgICAgICAgLy8gICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgICAgICAvLyAgICAgaW5pdGlhbGl6ZXI6IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIsXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIF0sXG4gICAgICAgICAgICBpbml0aWFsaXplcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQuaW5pdGlhbGl6ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tlbGVtZW50LmtleV0gPSBlbGVtZW50LmluaXRpYWxpemVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbmlzaGVyKGNsYXp6KSB7XG4gICAgICAgICAgICAgICAgY2xhenouY3JlYXRlUHJvcGVydHkoZWxlbWVudC5rZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuY29uc3QgbGVnYWN5UHJvcGVydHkgPSAob3B0aW9ucywgcHJvdG8sIG5hbWUpID0+IHtcbiAgICBwcm90by5jb25zdHJ1Y3Rvci5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbn07XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHdoaWNoIGNyZWF0ZXMgYSByZWFjdGl2ZSBwcm9wZXJ0eSB0aGF0IHJlZmxlY3RzIGFcbiAqIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIHZhbHVlLiBXaGVuIGEgZGVjb3JhdGVkIHByb3BlcnR5IGlzIHNldFxuICogdGhlIGVsZW1lbnQgd2lsbCB1cGRhdGUgYW5kIHJlbmRlci4gQSB7QGxpbmtjb2RlIFByb3BlcnR5RGVjbGFyYXRpb259IG1heVxuICogb3B0aW9uYWxseSBiZSBzdXBwbGllZCB0byBjb25maWd1cmUgcHJvcGVydHkgZmVhdHVyZXMuXG4gKlxuICogVGhpcyBkZWNvcmF0b3Igc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgcHVibGljIGZpZWxkcy4gQXMgcHVibGljIGZpZWxkcyxcbiAqIHByb3BlcnRpZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgcHJpbWFyaWx5IHNldHRhYmxlIGJ5IGVsZW1lbnQgdXNlcnMsXG4gKiBlaXRoZXIgdmlhIGF0dHJpYnV0ZSBvciB0aGUgcHJvcGVydHkgaXRzZWxmLlxuICpcbiAqIEdlbmVyYWxseSwgcHJvcGVydGllcyB0aGF0IGFyZSBjaGFuZ2VkIGJ5IHRoZSBlbGVtZW50IHNob3VsZCBiZSBwcml2YXRlIG9yXG4gKiBwcm90ZWN0ZWQgZmllbGRzIGFuZCBzaG91bGQgdXNlIHRoZSB7QGxpbmtjb2RlIHN0YXRlfSBkZWNvcmF0b3IuXG4gKlxuICogSG93ZXZlciwgc29tZXRpbWVzIGVsZW1lbnQgY29kZSBkb2VzIG5lZWQgdG8gc2V0IGEgcHVibGljIHByb3BlcnR5LiBUaGlzXG4gKiBzaG91bGQgdHlwaWNhbGx5IG9ubHkgYmUgZG9uZSBpbiByZXNwb25zZSB0byB1c2VyIGludGVyYWN0aW9uLCBhbmQgYW4gZXZlbnRcbiAqIHNob3VsZCBiZSBmaXJlZCBpbmZvcm1pbmcgdGhlIHVzZXI7IGZvciBleGFtcGxlLCBhIGNoZWNrYm94IHNldHMgaXRzXG4gKiBgY2hlY2tlZGAgcHJvcGVydHkgd2hlbiBjbGlja2VkIGFuZCBmaXJlcyBhIGBjaGFuZ2VkYCBldmVudC4gTXV0YXRpbmcgcHVibGljXG4gKiBwcm9wZXJ0aWVzIHNob3VsZCB0eXBpY2FsbHkgbm90IGJlIGRvbmUgZm9yIG5vbi1wcmltaXRpdmUgKG9iamVjdCBvciBhcnJheSlcbiAqIHByb3BlcnRpZXMuIEluIG90aGVyIGNhc2VzIHdoZW4gYW4gZWxlbWVudCBuZWVkcyB0byBtYW5hZ2Ugc3RhdGUsIGEgcHJpdmF0ZVxuICogcHJvcGVydHkgZGVjb3JhdGVkIHZpYSB0aGUge0BsaW5rY29kZSBzdGF0ZX0gZGVjb3JhdG9yIHNob3VsZCBiZSB1c2VkLiBXaGVuXG4gKiBuZWVkZWQsIHN0YXRlIHByb3BlcnRpZXMgY2FuIGJlIGluaXRpYWxpemVkIHZpYSBwdWJsaWMgcHJvcGVydGllcyB0b1xuICogZmFjaWxpdGF0ZSBjb21wbGV4IGludGVyYWN0aW9ucy5cbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICogICBjbGlja2VkID0gZmFsc2U7XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHkob3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvciwgbmFtZSkgPT4gbmFtZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gbGVnYWN5UHJvcGVydHkob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpXG4gICAgICAgIDogc3RhbmRhcmRQcm9wZXJ0eShvcHRpb25zLCBwcm90b09yRGVzY3JpcHRvcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9wZXJ0eS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlclxuICogdGhhdCBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3JBbGwgb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBBIERPTVN0cmluZyBjb250YWluaW5nIG9uZSBvciBtb3JlIHNlbGVjdG9ycyB0byBtYXRjaC5cbiAqXG4gKiBTZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvcXVlcnlTZWxlY3RvckFsbFxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAcXVlcnlBbGwoJ2RpdicpXG4gKiAgIGRpdnM6IE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBpZD1cImZpcnN0XCI+PC9kaXY+XG4gKiAgICAgICA8ZGl2IGlkPVwic2Vjb25kXCI+PC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFsbChzZWxlY3Rvcikge1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKF9uYW1lKSA9PiAoe1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBbXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciBfYTtcbi8qXG4gKiBJTVBPUlRBTlQ6IEZvciBjb21wYXRpYmlsaXR5IHdpdGggdHNpY2tsZSBhbmQgdGhlIENsb3N1cmUgSlMgY29tcGlsZXIsIGFsbFxuICogcHJvcGVydHkgZGVjb3JhdG9ycyAoYnV0IG5vdCBjbGFzcyBkZWNvcmF0b3JzKSBpbiB0aGlzIGZpbGUgdGhhdCBoYXZlXG4gKiBhbiBARXhwb3J0RGVjb3JhdGVkSXRlbXMgYW5ub3RhdGlvbiBtdXN0IGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGZ1bmN0aW9uLFxuICogbm90IGFuIGFycm93IGZ1bmN0aW9uLlxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbmNvbnN0IE5PREVfTU9ERSA9IGZhbHNlO1xuY29uc3QgZ2xvYmFsID0gTk9ERV9NT0RFID8gZ2xvYmFsVGhpcyA6IHdpbmRvdztcbi8qKlxuICogQSB0aW55IG1vZHVsZSBzY29wZWQgcG9seWZpbGwgZm9yIEhUTUxTbG90RWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzLlxuICovXG5jb25zdCBzbG90QXNzaWduZWRFbGVtZW50cyA9ICgoX2EgPSBnbG9iYWwuSFRNTFNsb3RFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJvdG90eXBlLmFzc2lnbmVkRWxlbWVudHMpICE9IG51bGxcbiAgICA/IChzbG90LCBvcHRzKSA9PiBzbG90LmFzc2lnbmVkRWxlbWVudHMob3B0cylcbiAgICA6IChzbG90LCBvcHRzKSA9PiBzbG90XG4gICAgICAgIC5hc3NpZ25lZE5vZGVzKG9wdHMpXG4gICAgICAgIC5maWx0ZXIoKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKTtcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXIgdGhhdFxuICogcmV0dXJucyB0aGUgYGFzc2lnbmVkRWxlbWVudHNgIG9mIHRoZSBnaXZlbiBgc2xvdGAuIFByb3ZpZGVzIGEgZGVjbGFyYXRpdmVcbiAqIHdheSB0byB1c2VcbiAqIFtgSFRNTFNsb3RFbGVtZW50LmFzc2lnbmVkRWxlbWVudHNgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTFNsb3RFbGVtZW50L2Fzc2lnbmVkRWxlbWVudHMpLlxuICpcbiAqIENhbiBiZSBwYXNzZWQgYW4gb3B0aW9uYWwge0BsaW5rY29kZSBRdWVyeUFzc2lnbmVkRWxlbWVudHNPcHRpb25zfSBvYmplY3QuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAcXVlcnlBc3NpZ25lZEVsZW1lbnRzKHsgc2xvdDogJ2xpc3QnIH0pXG4gKiAgIGxpc3RJdGVtcyE6IEFycmF5PEhUTUxFbGVtZW50PjtcbiAqICAgQHF1ZXJ5QXNzaWduZWRFbGVtZW50cygpXG4gKiAgIHVubmFtZWRTbG90RWxzITogQXJyYXk8SFRNTEVsZW1lbnQ+O1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPHNsb3QgbmFtZT1cImxpc3RcIj48L3Nsb3Q+XG4gKiAgICAgICA8c2xvdD48L3Nsb3Q+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogTm90ZSwgdGhlIHR5cGUgb2YgdGhpcyBwcm9wZXJ0eSBzaG91bGQgYmUgYW5ub3RhdGVkIGFzIGBBcnJheTxIVE1MRWxlbWVudD5gLlxuICpcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QXNzaWduZWRFbGVtZW50cyhvcHRpb25zKSB7XG4gICAgY29uc3QgeyBzbG90LCBzZWxlY3RvciB9ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge307XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBkZXNjcmlwdG9yOiAoX25hbWUpID0+ICh7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RTZWxlY3RvciA9IGBzbG90JHtzbG90ID8gYFtuYW1lPSR7c2xvdH1dYCA6ICc6bm90KFtuYW1lXSknfWA7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdEVsID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzbG90U2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gc2xvdEVsICE9IG51bGwgPyBzbG90QXNzaWduZWRFbGVtZW50cyhzbG90RWwsIG9wdGlvbnMpIDogW107XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50cy5maWx0ZXIoKG5vZGUpID0+IG5vZGUubWF0Y2hlcyhzZWxlY3RvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qXG4gKiBJTVBPUlRBTlQ6IEZvciBjb21wYXRpYmlsaXR5IHdpdGggdHNpY2tsZSBhbmQgdGhlIENsb3N1cmUgSlMgY29tcGlsZXIsIGFsbFxuICogcHJvcGVydHkgZGVjb3JhdG9ycyAoYnV0IG5vdCBjbGFzcyBkZWNvcmF0b3JzKSBpbiB0aGlzIGZpbGUgdGhhdCBoYXZlXG4gKiBhbiBARXhwb3J0RGVjb3JhdGVkSXRlbXMgYW5ub3RhdGlvbiBtdXN0IGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGZ1bmN0aW9uLFxuICogbm90IGFuIGFycm93IGZ1bmN0aW9uLlxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCB7IHF1ZXJ5QXNzaWduZWRFbGVtZW50cyB9IGZyb20gJy4vcXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QXNzaWduZWROb2RlcyhzbG90T3JPcHRpb25zLCBmbGF0dGVuLCBzZWxlY3Rvcikge1xuICAgIC8vIE5vcm1hbGl6ZSB0aGUgb3ZlcmxvYWRlZCBhcmd1bWVudHMuXG4gICAgbGV0IHNsb3QgPSBzbG90T3JPcHRpb25zO1xuICAgIGxldCBhc3NpZ25lZE5vZGVzT3B0aW9ucztcbiAgICBpZiAodHlwZW9mIHNsb3RPck9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHNsb3QgPSBzbG90T3JPcHRpb25zLnNsb3Q7XG4gICAgICAgIGFzc2lnbmVkTm9kZXNPcHRpb25zID0gc2xvdE9yT3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFzc2lnbmVkTm9kZXNPcHRpb25zID0geyBmbGF0dGVuIH07XG4gICAgfVxuICAgIC8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgcXVlcnlBc3NpZ25lZE5vZGVzIHdpdGggYSBzZWxlY3RvciBiZWhhdmVzXG4gICAgLy8gZXhhY3RseSBsaWtlIHF1ZXJ5QXNzaWduZWRFbGVtZW50cyB3aXRoIGEgc2VsZWN0b3IuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBxdWVyeUFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICAgICAgc2xvdDogc2xvdCxcbiAgICAgICAgICAgIGZsYXR0ZW4sXG4gICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKF9uYW1lKSA9PiAoe1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdFNlbGVjdG9yID0gYHNsb3Qke3Nsb3QgPyBgW25hbWU9JHtzbG90fV1gIDogJzpub3QoW25hbWVdKSd9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90RWwgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNsb3RTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfYiA9IHNsb3RFbCA9PT0gbnVsbCB8fCBzbG90RWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsb3RFbC5hc3NpZ25lZE5vZGVzKGFzc2lnbmVkTm9kZXNPcHRpb25zKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hc3NpZ25lZC1ub2Rlcy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuLy8gTm90ZSwgaW4gdGhlIGZ1dHVyZSwgd2UgbWF5IGV4dGVuZCB0aGlzIGRlY29yYXRvciB0byBzdXBwb3J0IHRoZSB1c2UgY2FzZVxuLy8gd2hlcmUgdGhlIHF1ZXJpZWQgZWxlbWVudCBtYXkgbmVlZCB0byBkbyB3b3JrIHRvIGJlY29tZSByZWFkeSB0byBpbnRlcmFjdFxuLy8gd2l0aCAoZS5nLiBsb2FkIHNvbWUgaW1wbGVtZW50YXRpb24gY29kZSkuIElmIHNvLCB3ZSBtaWdodCBlbGVjdCB0b1xuLy8gYWRkIGEgc2Vjb25kIGFyZ3VtZW50IGRlZmluaW5nIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcnVuIHRvIG1ha2UgdGhlXG4vLyBxdWVyaWVkIGVsZW1lbnQgbG9hZGVkL3VwZGF0ZWQvcmVhZHkuXG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyIHRoYXRcbiAqIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHJlc3VsdCBvZiBhIHF1ZXJ5U2VsZWN0b3Igb24gdGhlXG4gKiBlbGVtZW50J3MgcmVuZGVyUm9vdCBkb25lIGFmdGVyIHRoZSBlbGVtZW50J3MgYHVwZGF0ZUNvbXBsZXRlYCBwcm9taXNlXG4gKiByZXNvbHZlcy4gV2hlbiB0aGUgcXVlcmllZCBwcm9wZXJ0eSBtYXkgY2hhbmdlIHdpdGggZWxlbWVudCBzdGF0ZSwgdGhpc1xuICogZGVjb3JhdG9yIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgcmVxdWlyaW5nIHVzZXJzIHRvIGF3YWl0IHRoZVxuICogYHVwZGF0ZUNvbXBsZXRlYCBiZWZvcmUgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgQSBET01TdHJpbmcgY29udGFpbmluZyBvbmUgb3IgbW9yZSBzZWxlY3RvcnMgdG8gbWF0Y2guXG4gKlxuICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvcXVlcnlTZWxlY3RvclxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAcXVlcnlBc3luYygnI2ZpcnN0JylcbiAqICAgZmlyc3Q6IFByb21pc2U8SFRNTERpdkVsZW1lbnQ+O1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBpZD1cImZpcnN0XCI+PC9kaXY+XG4gKiAgICAgICA8ZGl2IGlkPVwic2Vjb25kXCI+PC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICpcbiAqIC8vIGV4dGVybmFsIHVzYWdlXG4gKiBhc3luYyBkb1NvbWV0aGluZ1dpdGhGaXJzdCgpIHtcbiAqICAoYXdhaXQgYU15RWxlbWVudC5maXJzdCkuZG9Tb21ldGhpbmcoKTtcbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBc3luYyhzZWxlY3Rvcikge1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKF9uYW1lKSA9PiAoe1xuICAgICAgICAgICAgYXN5bmMgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzeW5jLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyIHRoYXRcbiAqIGV4ZWN1dGVzIGEgcXVlcnlTZWxlY3RvciBvbiB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIEEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgc2VsZWN0b3JzIHRvIG1hdGNoLlxuICogQHBhcmFtIGNhY2hlIEFuIG9wdGlvbmFsIGJvb2xlYW4gd2hpY2ggd2hlbiB0cnVlIHBlcmZvcm1zIHRoZSBET00gcXVlcnkgb25seVxuICogICAgIG9uY2UgYW5kIGNhY2hlcyB0aGUgcmVzdWx0LlxuICpcbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3F1ZXJ5U2VsZWN0b3JcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5KCcjZmlyc3QnKVxuICogICBmaXJzdDogSFRNTERpdkVsZW1lbnQ7XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IGlkPVwiZmlyc3RcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgaWQ9XCJzZWNvbmRcIj48L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHNlbGVjdG9yLCBjYWNoZSkge1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSB0eXBlb2YgbmFtZSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2woKSA6IGBfXyR7bmFtZX1gO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IChfYiA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnkuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICcuL3Byb3BlcnR5LmpzJztcbi8qKlxuICogRGVjbGFyZXMgYSBwcml2YXRlIG9yIHByb3RlY3RlZCByZWFjdGl2ZSBwcm9wZXJ0eSB0aGF0IHN0aWxsIHRyaWdnZXJzXG4gKiB1cGRhdGVzIHRvIHRoZSBlbGVtZW50IHdoZW4gaXQgY2hhbmdlcy4gSXQgZG9lcyBub3QgcmVmbGVjdCBmcm9tIHRoZVxuICogY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUuXG4gKlxuICogUHJvcGVydGllcyBkZWNsYXJlZCB0aGlzIHdheSBtdXN0IG5vdCBiZSB1c2VkIGZyb20gSFRNTCBvciBIVE1MIHRlbXBsYXRpbmdcbiAqIHN5c3RlbXMsIHRoZXkncmUgc29sZWx5IGZvciBwcm9wZXJ0aWVzIGludGVybmFsIHRvIHRoZSBlbGVtZW50LiBUaGVzZVxuICogcHJvcGVydGllcyBtYXkgYmUgcmVuYW1lZCBieSBvcHRpbWl6YXRpb24gdG9vbHMgbGlrZSBjbG9zdXJlIGNvbXBpbGVyLlxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhdGUob3B0aW9ucykge1xuICAgIHJldHVybiBwcm9wZXJ0eSh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHN0YXRlOiB0cnVlLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2Q7XG52YXIgX2U7XG4vKipcbiAqIFVzZSB0aGlzIG1vZHVsZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgeW91ciBvd24gYmFzZSBjbGFzcyBleHRlbmRpbmdcbiAqIHtAbGluayBSZWFjdGl2ZUVsZW1lbnR9LlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IGdldENvbXBhdGlibGVTdHlsZSwgYWRvcHRTdHlsZXMsIH0gZnJvbSAnLi9jc3MtdGFnLmpzJztcbi8vIEluIHRoZSBOb2RlIGJ1aWxkLCB0aGlzIGltcG9ydCB3aWxsIGJlIGluamVjdGVkIGJ5IFJvbGx1cDpcbi8vIGltcG9ydCB7SFRNTEVsZW1lbnQsIGN1c3RvbUVsZW1lbnRzfSBmcm9tICdAbGl0LWxhYnMvc3NyLWRvbS1zaGltJztcbmV4cG9ydCAqIGZyb20gJy4vY3NzLXRhZy5qcyc7XG5jb25zdCBOT0RFX01PREUgPSBmYWxzZTtcbmNvbnN0IGdsb2JhbCA9IE5PREVfTU9ERSA/IGdsb2JhbFRoaXMgOiB3aW5kb3c7XG5pZiAoTk9ERV9NT0RFKSB7XG4gICAgKF9hID0gZ2xvYmFsLmN1c3RvbUVsZW1lbnRzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ2xvYmFsLmN1c3RvbUVsZW1lbnRzID0gY3VzdG9tRWxlbWVudHMpO1xufVxuY29uc3QgREVWX01PREUgPSB0cnVlO1xubGV0IHJlcXVlc3RVcGRhdGVUaGVuYWJsZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5jb25zdCB0cnVzdGVkVHlwZXMgPSBnbG9iYWxcbiAgICAudHJ1c3RlZFR5cGVzO1xuLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGh0dHBzOi8vY3JidWcuY29tLzk5MzI2OFxuLy8gQ3VycmVudGx5LCBhbnkgYXR0cmlidXRlIHN0YXJ0aW5nIHdpdGggXCJvblwiIGlzIGNvbnNpZGVyZWQgdG8gYmUgYVxuLy8gVHJ1c3RlZFNjcmlwdCBzb3VyY2UuIFN1Y2ggYm9vbGVhbiBhdHRyaWJ1dGVzIG11c3QgYmUgc2V0IHRvIHRoZSBlcXVpdmFsZW50XG4vLyB0cnVzdGVkIGVtcHR5U2NyaXB0IHZhbHVlLlxuY29uc3QgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICA6ICcnO1xuY29uc3QgcG9seWZpbGxTdXBwb3J0ID0gREVWX01PREVcbiAgICA/IGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiBnbG9iYWwucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0O1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRW5zdXJlIHdhcm5pbmdzIGFyZSBpc3N1ZWQgb25seSAxeCwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXRcbiAgICAvLyBhcmUgbG9hZGVkLlxuICAgIGNvbnN0IGlzc3VlZFdhcm5pbmdzID0gKChfYiA9IGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncyA9IG5ldyBTZXQoKSkpO1xuICAgIC8vIElzc3VlIGEgd2FybmluZywgaWYgd2UgaGF2ZW4ndCBhbHJlYWR5LlxuICAgIGlzc3VlV2FybmluZyA9IChjb2RlLCB3YXJuaW5nKSA9PiB7XG4gICAgICAgIHdhcm5pbmcgKz0gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgIGlmICghaXNzdWVkV2FybmluZ3MuaGFzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICBpc3N1ZWRXYXJuaW5ncy5hZGQod2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlzc3VlV2FybmluZygnZGV2LW1vZGUnLCBgTGl0IGlzIGluIGRldiBtb2RlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24hYCk7XG4gICAgLy8gSXNzdWUgcG9seWZpbGwgc3VwcG9ydCB3YXJuaW5nLlxuICAgIGlmICgoKF9jID0gZ2xvYmFsLlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5Vc2UpICYmIHBvbHlmaWxsU3VwcG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlzc3VlV2FybmluZygncG9seWZpbGwtc3VwcG9ydC1taXNzaW5nJywgYFNoYWRvdyBET00gaXMgYmVpbmcgcG9seWZpbGxlZCB2aWEgXFxgU2hhZHlET01cXGAgYnV0IGAgK1xuICAgICAgICAgICAgYHRoZSBcXGBwb2x5ZmlsbC1zdXBwb3J0XFxgIG1vZHVsZSBoYXMgbm90IGJlZW4gbG9hZGVkLmApO1xuICAgIH1cbiAgICByZXF1ZXN0VXBkYXRlVGhlbmFibGUgPSAobmFtZSkgPT4gKHtcbiAgICAgICAgdGhlbjogKG9uZnVsZmlsbGVkLCBfb25yZWplY3RlZCkgPT4ge1xuICAgICAgICAgICAgaXNzdWVXYXJuaW5nKCdyZXF1ZXN0LXVwZGF0ZS1wcm9taXNlJywgYFRoZSBcXGByZXF1ZXN0VXBkYXRlXFxgIG1ldGhvZCBzaG91bGQgbm8gbG9uZ2VyIHJldHVybiBhIFByb21pc2UgYnV0IGAgK1xuICAgICAgICAgICAgICAgIGBkb2VzIHNvIG9uIFxcYCR7bmFtZX1cXGAuIFVzZSBcXGB1cGRhdGVDb21wbGV0ZVxcYCBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgaWYgKG9uZnVsZmlsbGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvbmZ1bGZpbGxlZChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4vKipcbiAqIFVzZWZ1bCBmb3IgdmlzdWFsaXppbmcgYW5kIGxvZ2dpbmcgaW5zaWdodHMgaW50byB3aGF0IHRoZSBMaXQgdGVtcGxhdGUgc3lzdGVtIGlzIGRvaW5nLlxuICpcbiAqIENvbXBpbGVkIG91dCBvZiBwcm9kIG1vZGUgYnVpbGRzLlxuICovXG5jb25zdCBkZWJ1Z0xvZ0V2ZW50ID0gREVWX01PREVcbiAgICA/IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzaG91bGRFbWl0ID0gZ2xvYmFsXG4gICAgICAgICAgICAuZW1pdExpdERlYnVnTG9nRXZlbnRzO1xuICAgICAgICBpZiAoIXNob3VsZEVtaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2xpdC1kZWJ1ZycsIHtcbiAgICAgICAgICAgIGRldGFpbDogZXZlbnQsXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgOiB1bmRlZmluZWQ7XG4vKlxuICogV2hlbiB1c2luZyBDbG9zdXJlIENvbXBpbGVyLCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KHByb3BlcnR5LCBvYmplY3QpIGlzXG4gKiByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUgYnkgdGhlIG11bmdlZCBuYW1lIGZvciBvYmplY3RbcHJvcGVydHldLiBXZSBjYW5ub3RcbiAqIGFsaWFzIHRoaXMgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG8gdXNlIGEgc21hbGwgc2hpbSB0aGF0IGhhcyB0aGUgc2FtZVxuICogYmVoYXZpb3Igd2hlbiBub3QgY29tcGlsaW5nLlxuICovXG4vKkBfX0lOTElORV9fKi9cbmNvbnN0IEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSAocHJvcCwgX29iaikgPT4gcHJvcDtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29udmVydGVyID0ge1xuICAgIHRvQXR0cmlidXRlKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPyBlbXB0eVN0cmluZ0ZvckJvb2xlYW5BdHRyaWJ1dGUgOiBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcGFzcyB0aGlzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyB0byBhbGxvdyByZW1vdmluZy9ubyBjaGFuZ2UgYmVoYXZpb3IuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBsZXQgZnJvbVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gdmFsdWUgPT09IG51bGwgPyBudWxsIDogTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBEbyAqbm90KiBnZW5lcmF0ZSBleGNlcHRpb24gd2hlbiBpbnZhbGlkIEpTT04gaXMgc2V0IGFzIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3Qgbm9ybWFsbHkgY29tcGxhaW4gb24gYmVpbmcgbWlzLWNvbmZpZ3VyZWQuXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogRG8gZ2VuZXJhdGUgZXhjZXB0aW9uIGluICpkZXYgbW9kZSouXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzZXJ0IHRvIGFkaGVyZSB0byBCYXplbCdzIFwibXVzdCB0eXBlIGFzc2VydCBKU09OIHBhcnNlXCIgcnVsZS5cbiAgICAgICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tVmFsdWU7XG4gICAgfSxcbn07XG4vKipcbiAqIENoYW5nZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpZmZlcmVudCBmcm9tIGBvbGRWYWx1ZWAuXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IGZvciBhIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgbm90RXF1YWwgPSAodmFsdWUsIG9sZCkgPT4ge1xuICAgIC8vIFRoaXMgZW5zdXJlcyAob2xkPT1OYU4sIHZhbHVlPT1OYU4pIGFsd2F5cyByZXR1cm5zIGZhbHNlXG4gICAgcmV0dXJuIG9sZCAhPT0gdmFsdWUgJiYgKG9sZCA9PT0gb2xkIHx8IHZhbHVlID09PSB2YWx1ZSk7XG59O1xuY29uc3QgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24gPSB7XG4gICAgYXR0cmlidXRlOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICBjb252ZXJ0ZXI6IGRlZmF1bHRDb252ZXJ0ZXIsXG4gICAgcmVmbGVjdDogZmFsc2UsXG4gICAgaGFzQ2hhbmdlZDogbm90RXF1YWwsXG59O1xuLyoqXG4gKiBUaGUgQ2xvc3VyZSBKUyBDb21waWxlciBkb2Vzbid0IGN1cnJlbnRseSBoYXZlIGdvb2Qgc3VwcG9ydCBmb3Igc3RhdGljXG4gKiBwcm9wZXJ0eSBzZW1hbnRpY3Mgd2hlcmUgXCJ0aGlzXCIgaXMgZHluYW1pYyAoZS5nLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWNvbXBpbGVyL2lzc3Vlcy8zMTc3IGFuZCBvdGhlcnMpIHNvIHdlIHVzZVxuICogdGhpcyBoYWNrIHRvIGJ5cGFzcyBhbnkgcmV3cml0aW5nIGJ5IHRoZSBjb21waWxlci5cbiAqL1xuY29uc3QgZmluYWxpemVkID0gJ2ZpbmFsaXplZCc7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB3aGljaCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy4gV2hlblxuICogcHJvcGVydGllcyBjaGFuZ2UsIHRoZSBgdXBkYXRlYCBtZXRob2QgaXMgYXN5bmNocm9ub3VzbHkgY2FsbGVkLiBUaGlzIG1ldGhvZFxuICogc2hvdWxkIGJlIHN1cHBsaWVkIGJ5IHN1YmNsYXNzZXJzIHRvIHJlbmRlciB1cGRhdGVzIGFzIGRlc2lyZWQuXG4gKiBAbm9Jbmhlcml0RG9jXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUVsZW1lbnRcbi8vIEluIHRoZSBOb2RlIGJ1aWxkLCB0aGlzIGBleHRlbmRzYCBjbGF1c2Ugd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoXG4vLyBgKGdsb2JhbFRoaXMuSFRNTEVsZW1lbnQgPz8gSFRNTEVsZW1lbnQpYC5cbi8vXG4vLyBUaGlzIHdheSwgd2Ugd2lsbCBmaXJzdCBwcmVmZXIgYW55IGdsb2JhbCBgSFRNTEVsZW1lbnRgIHBvbHlmaWxsIHRoYXQgdGhlXG4vLyB1c2VyIGhhcyBhc3NpZ25lZCwgYW5kIHRoZW4gZmFsbCBiYWNrIHRvIHRoZSBgSFRNTEVsZW1lbnRgIHNoaW0gd2hpY2ggaGFzXG4vLyBiZWVuIGltcG9ydGVkIChzZWUgbm90ZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZSBhYm91dCBob3cgdGhpcyBpbXBvcnQgaXNcbi8vIGdlbmVyYXRlZCBieSBSb2xsdXApLiBOb3RlIHRoYXQgdGhlIGBIVE1MRWxlbWVudGAgdmFyaWFibGUgaGFzIGJlZW5cbi8vIHNoYWRvd2VkIGJ5IHRoaXMgaW1wb3J0LCBzbyBpdCBubyBsb25nZXIgcmVmZXJzIHRvIHRoZSBnbG9iYWwuXG4gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGlmIHRoZXJlIGlzIGEgcGVuZGluZyB1cGRhdGUgYXMgYSByZXN1bHQgb2YgY2FsbGluZyBgcmVxdWVzdFVwZGF0ZSgpYC5cbiAgICAgICAgICogU2hvdWxkIG9ubHkgYmUgcmVhZC5cbiAgICAgICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyBzZXQgdG8gYHRydWVgIGFmdGVyIHRoZSBmaXJzdCB1cGRhdGUuIFRoZSBlbGVtZW50IGNvZGUgY2Fubm90IGFzc3VtZVxuICAgICAgICAgKiB0aGF0IGByZW5kZXJSb290YCBleGlzdHMgYmVmb3JlIHRoZSBlbGVtZW50IGBoYXNVcGRhdGVkYC5cbiAgICAgICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFzVXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiBjdXJyZW50bHkgcmVmbGVjdGluZyBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaW5pdGlhbGl6ZXIgZnVuY3Rpb24gdG8gdGhlIGNsYXNzIHRoYXQgaXMgY2FsbGVkIGR1cmluZyBpbnN0YW5jZVxuICAgICAqIGNvbnN0cnVjdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGZvciBjb2RlIHRoYXQgcnVucyBhZ2FpbnN0IGEgYFJlYWN0aXZlRWxlbWVudGBcbiAgICAgKiBzdWJjbGFzcywgc3VjaCBhcyBhIGRlY29yYXRvciwgdGhhdCBuZWVkcyB0byBkbyB3b3JrIGZvciBlYWNoXG4gICAgICogaW5zdGFuY2UsIHN1Y2ggYXMgc2V0dGluZyB1cCBhIGBSZWFjdGl2ZUNvbnRyb2xsZXJgLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCBteURlY29yYXRvciA9ICh0YXJnZXQ6IHR5cGVvZiBSZWFjdGl2ZUVsZW1lbnQsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICogICB0YXJnZXQuYWRkSW5pdGlhbGl6ZXIoKGluc3RhbmNlOiBSZWFjdGl2ZUVsZW1lbnQpID0+IHtcbiAgICAgKiAgICAgLy8gVGhpcyBpcyBydW4gZHVyaW5nIGNvbnN0cnVjdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgICAqICAgICBuZXcgTXlDb250cm9sbGVyKGluc3RhbmNlKTtcbiAgICAgKiAgIH0pO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIERlY29yYXRpbmcgYSBmaWVsZCB3aWxsIHRoZW4gY2F1c2UgZWFjaCBpbnN0YW5jZSB0byBydW4gYW4gaW5pdGlhbGl6ZXJcbiAgICAgKiB0aGF0IGFkZHMgYSBjb250cm9sbGVyOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgIEBteURlY29yYXRvciBmb287XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogSW5pdGlhbGl6ZXJzIGFyZSBzdG9yZWQgcGVyLWNvbnN0cnVjdG9yLiBBZGRpbmcgYW4gaW5pdGlhbGl6ZXIgdG8gYVxuICAgICAqIHN1YmNsYXNzIGRvZXMgbm90IGFkZCBpdCB0byBhIHN1cGVyY2xhc3MuIFNpbmNlIGluaXRpYWxpemVycyBhcmUgcnVuIGluXG4gICAgICogY29uc3RydWN0b3JzLCBpbml0aWFsaXplcnMgd2lsbCBydW4gaW4gb3JkZXIgb2YgdGhlIGNsYXNzIGhpZXJhcmNoeSxcbiAgICAgKiBzdGFydGluZyB3aXRoIHN1cGVyY2xhc3NlcyBhbmQgcHJvZ3Jlc3NpbmcgdG8gdGhlIGluc3RhbmNlJ3MgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRJbml0aWFsaXplcihpbml0aWFsaXplcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgKChfYSA9IHRoaXMuX2luaXRpYWxpemVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX2luaXRpYWxpemVycyA9IFtdKSkucHVzaChpbml0aWFsaXplcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgLy8gbm90ZTogcGlnZ3kgYmFja2luZyBvbiB0aGlzIHRvIGVuc3VyZSB3ZSdyZSBmaW5hbGl6ZWQuXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHAsIHYpO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLnNldChhdHRyLCBwKTtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHByb3BlcnR5IGFjY2Vzc29yIG9uIHRoZSBlbGVtZW50IHByb3RvdHlwZSBpZiBvbmUgZG9lcyBub3QgZXhpc3RcbiAgICAgKiBhbmQgc3RvcmVzIGEge0BsaW5rY29kZSBQcm9wZXJ0eURlY2xhcmF0aW9ufSBmb3IgdGhlIHByb3BlcnR5IHdpdGggdGhlXG4gICAgICogZ2l2ZW4gb3B0aW9ucy4gVGhlIHByb3BlcnR5IHNldHRlciBjYWxscyB0aGUgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGBcbiAgICAgKiBwcm9wZXJ0eSBvcHRpb24gb3IgdXNlcyBhIHN0cmljdCBpZGVudGl0eSBjaGVjayB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3RcbiAgICAgKiB0byByZXF1ZXN0IGFuIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIG1heSBiZSBvdmVycmlkZGVuIHRvIGN1c3RvbWl6ZSBwcm9wZXJ0aWVzOyBob3dldmVyLFxuICAgICAqIHdoZW4gZG9pbmcgc28sIGl0J3MgaW1wb3J0YW50IHRvIGNhbGwgYHN1cGVyLmNyZWF0ZVByb3BlcnR5YCB0byBlbnN1cmVcbiAgICAgKiB0aGUgcHJvcGVydHkgaXMgc2V0dXAgY29ycmVjdGx5LiBUaGlzIG1ldGhvZCBjYWxsc1xuICAgICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgIGludGVybmFsbHkgdG8gZ2V0IGEgZGVzY3JpcHRvciB0byBpbnN0YWxsLlxuICAgICAqIFRvIGN1c3RvbWl6ZSB3aGF0IHByb3BlcnRpZXMgZG8gd2hlbiB0aGV5IGFyZSBnZXQgb3Igc2V0LCBvdmVycmlkZVxuICAgICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgLiBUbyBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgcHJvcGVydHksXG4gICAgICogaW1wbGVtZW50IGBjcmVhdGVQcm9wZXJ0eWAgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucykge1xuICAgICAqICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywge215T3B0aW9uOiB0cnVlfSk7XG4gICAgICogICBzdXBlci5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBzdGF0ZSBwcm9wZXJ0eSwgZm9yY2UgdGhlIGF0dHJpYnV0ZSB0byBmYWxzZS5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIENhc3QgYXMgYW55IHNpbmNlIHRoaXMgaXMgcmVhZG9ubHkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgb3B0aW9ucy5hdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIGNhbiBiZSBjYWxsZWQgYnkgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciB3aGljaFxuICAgICAgICAvLyBpcyBjYWxsZWQgYmVmb3JlIGBmaW5hbGl6ZWAsIHdlIGVuc3VyZSBmaW5hbGl6YXRpb24gaGFzIGJlZW4ga2lja2VkIG9mZi5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGFuIGFjY2Vzc29yIGlmIHRoZSBwcm90b3R5cGUgYWxyZWFkeSBoYXMgb25lLCBzaW5jZVxuICAgICAgICAvLyBpdCB3b3VsZCBiZSBsb3N0IG90aGVyd2lzZSBhbmQgdGhhdCB3b3VsZCBuZXZlciBiZSB0aGUgdXNlcidzIGludGVudGlvbjtcbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgZXhwZWN0IHVzZXJzIHRvIGNhbGwgYHJlcXVlc3RVcGRhdGVgIHRoZW1zZWx2ZXMgZnJvbVxuICAgICAgICAvLyB1c2VyLWRlZmluZWQgYWNjZXNzb3JzLiBOb3RlIHRoYXQgaWYgdGhlIHN1cGVyIGhhcyBhbiBhY2Nlc3NvciB3ZSB3aWxsXG4gICAgICAgIC8vIHN0aWxsIG92ZXJ3cml0ZSBpdFxuICAgICAgICBpZiAoIW9wdGlvbnMubm9BY2Nlc3NvciAmJiAhdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtuYW1lfWA7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGNsYXNzIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIHNldCwgY3JlYXRlIG9uZSBhbmQgaW5pdGlhbGl6ZVxuICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIHRoZSB2YWx1ZXMgaW4gdGhlIHNldCBmcm9tIHRoZSBuZWFyZXN0IGFuY2VzdG9yIGNsYXNzLCBpZiBhbnkuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eSgnX19yZWFjdGl2ZVByb3BlcnR5S2V5cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMgPSBuZXcgU2V0KChfYSA9IHRoaXMuX19yZWFjdGl2ZVByb3BlcnR5S2V5cykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWFjdGl2ZVByb3BlcnR5S2V5cy5hZGQobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIGJlIGRlZmluZWQgb24gdGhlIGdpdmVuIG5hbWVkIHByb3BlcnR5LlxuICAgICAqIElmIG5vIGRlc2NyaXB0b3IgaXMgcmV0dXJuZWQsIHRoZSBwcm9wZXJ0eSB3aWxsIG5vdCBiZWNvbWUgYW4gYWNjZXNzb3IuXG4gICAgICogRm9yIGV4YW1wbGUsXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpIHtcbiAgICAgKiAgICAgY29uc3QgZGVmYXVsdERlc2NyaXB0b3IgPVxuICAgICAqICAgICAgICAgc3VwZXIuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAgICogICAgIGNvbnN0IHNldHRlciA9IGRlZmF1bHREZXNjcmlwdG9yLnNldDtcbiAgICAgKiAgICAgcmV0dXJuIHtcbiAgICAgKiAgICAgICBnZXQ6IGRlZmF1bHREZXNjcmlwdG9yLmdldCxcbiAgICAgKiAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgKiAgICAgICAgIHNldHRlci5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgKiAgICAgICAgIC8vIGN1c3RvbSBhY3Rpb24uXG4gICAgICogICAgICAgfSxcbiAgICAgKiAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICogICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzW25hbWVdO1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIFRoZXNlIG9wdGlvbnMgYXJlIGRlZmluZWQgd2l0aCBhIGBQcm9wZXJ0eURlY2xhcmF0aW9uYCB2aWEgdGhlIGBwcm9wZXJ0aWVzYFxuICAgICAqIG9iamVjdCBvciB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIGFuZCBhcmUgcmVnaXN0ZXJlZCBpblxuICAgICAqIGBjcmVhdGVQcm9wZXJ0eSguLi4pYC5cbiAgICAgKlxuICAgICAqIE5vdGUsIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBjb25zaWRlcmVkIFwiZmluYWxcIiBhbmQgbm90IG92ZXJyaWRkZW4uIFRvXG4gICAgICogY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIGdpdmVuIHByb3BlcnR5LCBvdmVycmlkZVxuICAgICAqIHtAbGlua2NvZGUgY3JlYXRlUHJvcGVydHl9LlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAZmluYWxcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQobmFtZSkgfHwgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgcHJvcGVydHkgYWNjZXNzb3JzIGZvciByZWdpc3RlcmVkIHByb3BlcnRpZXMsIHNldHMgdXAgZWxlbWVudFxuICAgICAqIHN0eWxpbmcsIGFuZCBlbnN1cmVzIGFueSBzdXBlcmNsYXNzZXMgYXJlIGFsc28gZmluYWxpemVkLiBSZXR1cm5zIHRydWUgaWZcbiAgICAgKiB0aGUgZWxlbWVudCB3YXMgZmluYWxpemVkLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShmaW5hbGl6ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1tmaW5hbGl6ZWRdID0gdHJ1ZTtcbiAgICAgICAgLy8gZmluYWxpemUgYW55IHN1cGVyY2xhc3Nlc1xuICAgICAgICBjb25zdCBzdXBlckN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7XG4gICAgICAgIHN1cGVyQ3Rvci5maW5hbGl6ZSgpO1xuICAgICAgICAvLyBDcmVhdGUgb3duIHNldCBvZiBpbml0aWFsaXplcnMgZm9yIHRoaXMgY2xhc3MgaWYgYW55IGV4aXN0IG9uIHRoZVxuICAgICAgICAvLyBzdXBlcmNsYXNzIGFuZCBjb3B5IHRoZW0gZG93bi4gTm90ZSwgZm9yIGEgc21hbGwgcGVyZiBib29zdCwgYXZvaWRcbiAgICAgICAgLy8gY3JlYXRpbmcgaW5pdGlhbGl6ZXJzIHVubGVzcyBuZWVkZWQuXG4gICAgICAgIGlmIChzdXBlckN0b3IuX2luaXRpYWxpemVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplcnMgPSBbLi4uc3VwZXJDdG9yLl9pbml0aWFsaXplcnNdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMgPSBuZXcgTWFwKHN1cGVyQ3Rvci5lbGVtZW50UHJvcGVydGllcyk7XG4gICAgICAgIC8vIGluaXRpYWxpemUgTWFwIHBvcHVsYXRlZCBpbiBvYnNlcnZlZEF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIG1ha2UgYW55IHByb3BlcnRpZXNcbiAgICAgICAgLy8gTm90ZSwgb25seSBwcm9jZXNzIFwib3duXCIgcHJvcGVydGllcyBzaW5jZSB0aGlzIGVsZW1lbnQgd2lsbCBpbmhlcml0XG4gICAgICAgIC8vIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gdGhlIHN1cGVyQ2xhc3MsIGFuZCBmaW5hbGl6YXRpb24gZW5zdXJlc1xuICAgICAgICAvLyB0aGUgZW50aXJlIHByb3RvdHlwZSBjaGFpbiBpcyBmaW5hbGl6ZWQuXG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ3Byb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgLy8gc3VwcG9ydCBzeW1ib2xzIGluIHByb3BlcnRpZXMgKElFMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGlzKVxuICAgICAgICAgICAgY29uc3QgcHJvcEtleXMgPSBbXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcHMpLFxuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcHMpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIFRoaXMgZm9yL29mIGlzIG9rIGJlY2F1c2UgcHJvcEtleXMgaXMgYW4gYXJyYXlcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwcm9wS2V5cykge1xuICAgICAgICAgICAgICAgIC8vIG5vdGUsIHVzZSBvZiBgYW55YCBpcyBkdWUgdG8gVHlwZVNjcmlwdCBsYWNrIG9mIHN1cHBvcnQgZm9yIHN5bWJvbCBpblxuICAgICAgICAgICAgICAgIC8vIGluZGV4IHR5cGVzXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnR5KHAsIHByb3BzW3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRTdHlsZXMgPSB0aGlzLmZpbmFsaXplU3R5bGVzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgLy8gREVWIG1vZGUgd2FybmluZ3NcbiAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZE9yUmVuYW1lZCA9IChuYW1lLCByZW5hbWVkID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKHJlbmFtZWQgPyAncmVuYW1lZC1hcGknIDogJ3JlbW92ZWQtYXBpJywgYFxcYCR7bmFtZX1cXGAgaXMgaW1wbGVtZW50ZWQgb24gY2xhc3MgJHt0aGlzLm5hbWV9LiBJdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoYXMgYmVlbiAke3JlbmFtZWQgPyAncmVuYW1lZCcgOiAncmVtb3ZlZCd9IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGluIHRoaXMgdmVyc2lvbiBvZiBMaXRFbGVtZW50LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCgnaW5pdGlhbGl6ZScpO1xuICAgICAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQoJ3JlcXVlc3RVcGRhdGVJbnRlcm5hbCcpO1xuICAgICAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQoJ19nZXRVcGRhdGVDb21wbGV0ZScsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyB0aGUgc3R5bGVzIHRoZSB1c2VyIHN1cHBsaWVkIHZpYSB0aGUgYHN0YXRpYyBzdHlsZXNgIHByb3BlcnR5IGFuZFxuICAgICAqIHJldHVybnMgdGhlIGFycmF5IG9mIHN0eWxlcyB0byBhcHBseSB0byB0aGUgZWxlbWVudC5cbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBpbnRlZ3JhdGUgaW50byBhIHN0eWxlIG1hbmFnZW1lbnQgc3lzdGVtLlxuICAgICAqXG4gICAgICogU3R5bGVzIGFyZSBkZWR1cGxpY2F0ZWQgcHJlc2VydmluZyB0aGUgX2xhc3RfIGluc3RhbmNlIGluIHRoZSBsaXN0LiBUaGlzXG4gICAgICogaXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdG8gYXZvaWQgZHVwbGljYXRlZCBzdHlsZXMgdGhhdCBjYW4gb2NjdXJcbiAgICAgKiBlc3BlY2lhbGx5IHdoZW4gY29tcG9zaW5nIHZpYSBzdWJjbGFzc2luZy4gVGhlIGxhc3QgaXRlbSBpcyBrZXB0IHRvIHRyeVxuICAgICAqIHRvIHByZXNlcnZlIHRoZSBjYXNjYWRlIG9yZGVyIHdpdGggdGhlIGFzc3VtcHRpb24gdGhhdCBpdCdzIG1vc3QgaW1wb3J0YW50XG4gICAgICogdGhhdCBsYXN0IGFkZGVkIHN0eWxlcyBvdmVycmlkZSBwcmV2aW91cyBzdHlsZXMuXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBzdHlsZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluYWxpemVTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBbXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzKSkge1xuICAgICAgICAgICAgLy8gRGVkdXBlIHRoZSBmbGF0dGVuZWQgYXJyYXkgaW4gcmV2ZXJzZSBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgbGFzdCBpdGVtcy5cbiAgICAgICAgICAgIC8vIENhc3RpbmcgdG8gQXJyYXk8dW5rbm93bj4gd29ya3MgYXJvdW5kIFRTIGVycm9yIHRoYXRcbiAgICAgICAgICAgIC8vIGFwcGVhcnMgdG8gY29tZSBmcm9tIHRyeWluZyB0byBmbGF0dGVuIGEgdHlwZSBDU1NSZXN1bHRBcnJheS5cbiAgICAgICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoc3R5bGVzLmZsYXQoSW5maW5pdHkpLnJldmVyc2UoKSk7XG4gICAgICAgICAgICAvLyBUaGVuIHByZXNlcnZlIG9yaWdpbmFsIG9yZGVyIGJ5IGFkZGluZyB0aGUgc2V0IGl0ZW1zIGluIHJldmVyc2Ugb3JkZXIuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHMgb2Ygc2V0KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlcy51bnNoaWZ0KGdldENvbXBhdGlibGVTdHlsZShzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMucHVzaChnZXRDb21wYXRpYmxlU3R5bGUoc3R5bGVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRTdHlsZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYG5hbWVgLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIF9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gb3B0aW9ucy5hdHRyaWJ1dGU7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGUgPT09IGZhbHNlXG4gICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgOiB0eXBlb2YgYXR0cmlidXRlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgOiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgPyBuYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG9ubHkgb3ZlcnJpZGUgcG9pbnQgZm9yIGN1c3RvbWl6aW5nIHdvcmsgZG9uZSB3aGVuIGVsZW1lbnRzXG4gICAgICogYXJlIGNvbnN0cnVjdGVkLlxuICAgICAqL1xuICAgIF9faW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMpID0+ICh0aGlzLmVuYWJsZVVwZGF0aW5nID0gcmVzKSk7XG4gICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKTtcbiAgICAgICAgLy8gZW5zdXJlcyBmaXJzdCB1cGRhdGUgd2lsbCBiZSBjYXVnaHQgYnkgYW4gZWFybHkgYWNjZXNzIG9mXG4gICAgICAgIC8vIGB1cGRhdGVDb21wbGV0ZWBcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgIChfYSA9IHRoaXMuY29uc3RydWN0b3IuX2luaXRpYWxpemVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGkpID0+IGkodGhpcykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBgUmVhY3RpdmVDb250cm9sbGVyYCB0byBwYXJ0aWNpcGF0ZSBpbiB0aGUgZWxlbWVudCdzIHJlYWN0aXZlXG4gICAgICogdXBkYXRlIGN5Y2xlLiBUaGUgZWxlbWVudCBhdXRvbWF0aWNhbGx5IGNhbGxzIGludG8gYW55IHJlZ2lzdGVyZWRcbiAgICAgKiBjb250cm9sbGVycyBkdXJpbmcgaXRzIGxpZmVjeWNsZSBjYWxsYmFja3MuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgd2hlbiBgYWRkQ29udHJvbGxlcigpYCBpcyBjYWxsZWQsIHRoZVxuICAgICAqIGNvbnRyb2xsZXIncyBgaG9zdENvbm5lY3RlZCgpYCBjYWxsYmFjayB3aWxsIGJlIGltbWVkaWF0ZWx5IGNhbGxlZC5cbiAgICAgKiBAY2F0ZWdvcnkgY29udHJvbGxlcnNcbiAgICAgKi9cbiAgICBhZGRDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKChfYSA9IHRoaXMuX19jb250cm9sbGVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX19jb250cm9sbGVycyA9IFtdKSkucHVzaChjb250cm9sbGVyKTtcbiAgICAgICAgLy8gSWYgYSBjb250cm9sbGVyIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIGNvbm5lY3RlZCxcbiAgICAgICAgLy8gY2FsbCBob3N0Q29ubmVjdGVkLiBOb3RlLCByZS11c2luZyBleGlzdGVuY2Ugb2YgYHJlbmRlclJvb3RgIGhlcmVcbiAgICAgICAgLy8gKHdoaWNoIGlzIHNldCBpbiBjb25uZWN0ZWRDYWxsYmFjaykgdG8gYXZvaWQgdGhlIG5lZWQgdG8gdHJhY2sgYVxuICAgICAgICAvLyBmaXJzdCBjb25uZWN0ZWQgc3RhdGUuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlclJvb3QgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAoX2IgPSBjb250cm9sbGVyLmhvc3RDb25uZWN0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBgUmVhY3RpdmVDb250cm9sbGVyYCBmcm9tIHRoZSBlbGVtZW50LlxuICAgICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgICAqL1xuICAgIHJlbW92ZUNvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIE5vdGUsIGlmIHRoZSBpbmRleE9mIGlzIC0xLCB0aGUgPj4+IHdpbGwgZmxpcCB0aGUgc2lnbiB3aGljaCBtYWtlcyB0aGVcbiAgICAgICAgLy8gc3BsaWNlIGRvIG5vdGhpbmcuXG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGljZSh0aGlzLl9fY29udHJvbGxlcnMuaW5kZXhPZihjb250cm9sbGVyKSA+Pj4gMCwgMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpeGVzIGFueSBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgaW5zdGFuY2UgYmVmb3JlIHVwZ3JhZGUgdGltZS5cbiAgICAgKiBPdGhlcndpc2UgdGhlc2Ugd291bGQgc2hhZG93IHRoZSBhY2Nlc3NvciBhbmQgYnJlYWsgdGhlc2UgcHJvcGVydGllcy5cbiAgICAgKiBUaGUgcHJvcGVydGllcyBhcmUgc3RvcmVkIGluIGEgTWFwIHdoaWNoIGlzIHBsYXllZCBiYWNrIGFmdGVyIHRoZVxuICAgICAqIGNvbnN0cnVjdG9yIHJ1bnMuIE5vdGUsIG9uIHZlcnkgb2xkIHZlcnNpb25zIG9mIFNhZmFyaSAoPD05KSBvciBDaHJvbWVcbiAgICAgKiAoPD00MSksIHByb3BlcnRpZXMgY3JlYXRlZCBmb3IgbmF0aXZlIHBsYXRmb3JtIHByb3BlcnRpZXMgbGlrZSAoYGlkYCBvclxuICAgICAqIGBuYW1lYCkgbWF5IG5vdCBoYXZlIGRlZmF1bHQgdmFsdWVzIHNldCBpbiB0aGUgZWxlbWVudCBjb25zdHJ1Y3Rvci4gT25cbiAgICAgKiB0aGVzZSBicm93c2VycyBuYXRpdmUgcHJvcGVydGllcyBhcHBlYXIgb24gaW5zdGFuY2VzIGFuZCB0aGVyZWZvcmUgdGhlaXJcbiAgICAgKiBkZWZhdWx0IHZhbHVlIHdpbGwgb3ZlcndyaXRlIGFueSBlbGVtZW50IGRlZmF1bHQgKGUuZy4gaWYgdGhlIGVsZW1lbnQgc2V0c1xuICAgICAqIHRoaXMuaWQgPSAnaWQnIGluIHRoZSBjb25zdHJ1Y3RvciwgdGhlICdpZCcgd2lsbCBiZWNvbWUgJycgc2luY2UgdGhpcyBpc1xuICAgICAqIHRoZSBuYXRpdmUgcGxhdGZvcm0gZGVmYXVsdCkuXG4gICAgICovXG4gICAgX19zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKF92LCBwKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMuc2V0KHAsIHRoaXNbcF0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCByZW5kZXIgYW5kIGJ5IGRlZmF1bHRcbiAgICAgKiBjcmVhdGVzIGFuZCByZXR1cm5zIGFuIG9wZW4gc2hhZG93Um9vdC4gSW1wbGVtZW50IHRvIGN1c3RvbWl6ZSB3aGVyZSB0aGVcbiAgICAgKiBlbGVtZW50J3MgRE9NIGlzIHJlbmRlcmVkLiBGb3IgZXhhbXBsZSwgdG8gcmVuZGVyIGludG8gdGhlIGVsZW1lbnQnc1xuICAgICAqIGNoaWxkTm9kZXMsIHJldHVybiBgdGhpc2AuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgYSBub2RlIGludG8gd2hpY2ggdG8gcmVuZGVyLlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMuYXR0YWNoU2hhZG93KHRoaXMuY29uc3RydWN0b3Iuc2hhZG93Um9vdE9wdGlvbnMpO1xuICAgICAgICBhZG9wdFN0eWxlcyhyZW5kZXJSb290LCB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRTdHlsZXMpO1xuICAgICAgICByZXR1cm4gcmVuZGVyUm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT24gZmlyc3QgY29ubmVjdGlvbiwgY3JlYXRlcyB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QsIHNldHMgdXBcbiAgICAgKiBlbGVtZW50IHN0eWxpbmcsIGFuZCBlbmFibGVzIHVwZGF0aW5nLlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyUm9vdCBiZWZvcmUgZmlyc3QgdXBkYXRlLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJSb290ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdCA9IHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlVXBkYXRpbmcodHJ1ZSk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5vdGUsIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBjb25zaWRlcmVkIGZpbmFsIGFuZCBub3Qgb3ZlcnJpZGRlbi4gSXQgaXNcbiAgICAgKiBvdmVycmlkZGVuIG9uIHRoZSBlbGVtZW50IGluc3RhbmNlIHdpdGggYSBmdW5jdGlvbiB0aGF0IHRyaWdnZXJzIHRoZSBmaXJzdFxuICAgICAqIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGVuYWJsZVVwZGF0aW5nKF9yZXF1ZXN0ZWRVcGRhdGUpIHsgfVxuICAgIC8qKlxuICAgICAqIEFsbG93cyBmb3IgYHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIGluIGV4dGVuc2lvbnMgd2hpbGVcbiAgICAgKiByZXNlcnZpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1ha2luZyBub24tYnJlYWtpbmcgZmVhdHVyZSBhZGRpdGlvbnNcbiAgICAgKiB3aGVuIGRpc2Nvbm5lY3RpbmcgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdERpc2Nvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZXMgcHJvcGVydHkgdmFsdWVzIHdoZW4gYXR0cmlidXRlcyBjaGFuZ2UuXG4gICAgICpcbiAgICAgKiBTcGVjaWZpY2FsbHksIHdoZW4gYW4gYXR0cmlidXRlIGlzIHNldCwgdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydHkgaXMgc2V0LlxuICAgICAqIFlvdSBzaG91bGQgcmFyZWx5IG5lZWQgdG8gaW1wbGVtZW50IHRoaXMgY2FsbGJhY2suIElmIHRoaXMgbWV0aG9kIGlzXG4gICAgICogb3ZlcnJpZGRlbiwgYHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfb2xkLCB2YWx1ZSlgIG11c3QgYmVcbiAgICAgKiBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBTZWUgW3VzaW5nIHRoZSBsaWZlY3ljbGUgY2FsbGJhY2tzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9XZWJfQ29tcG9uZW50cy9Vc2luZ19jdXN0b21fZWxlbWVudHMjdXNpbmdfdGhlX2xpZmVjeWNsZV9jYWxsYmFja3MpXG4gICAgICogb24gTUROIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC5cbiAgICAgKiBAY2F0ZWdvcnkgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfb2xkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIF9fcHJvcGVydHlUb0F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuY29uc3RydWN0b3IuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSAoKF9hID0gb3B0aW9ucy5jb252ZXJ0ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0F0dHJpYnV0ZSkgIT09XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLmNvbnZlcnRlclxuICAgICAgICAgICAgICAgIDogZGVmYXVsdENvbnZlcnRlcjtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGNvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ21pZ3JhdGlvbicpID49IDAgJiZcbiAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZygndW5kZWZpbmVkLWF0dHJpYnV0ZS12YWx1ZScsIGBUaGUgYXR0cmlidXRlIHZhbHVlIGZvciB0aGUgJHtuYW1lfSBwcm9wZXJ0eSBpcyBgICtcbiAgICAgICAgICAgICAgICAgICAgYHVuZGVmaW5lZCBvbiBlbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9LiBUaGUgYXR0cmlidXRlIHdpbGwgYmUgYCArXG4gICAgICAgICAgICAgICAgICAgIGByZW1vdmVkLCBidXQgaW4gdGhlIHByZXZpb3VzIHZlcnNpb24gb2YgXFxgUmVhY3RpdmVFbGVtZW50XFxgLCBgICtcbiAgICAgICAgICAgICAgICAgICAgYHRoZSBhdHRyaWJ1dGUgd291bGQgbm90IGhhdmUgY2hhbmdlZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRyYWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBiZWluZyByZWZsZWN0ZWQgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHNldHRpbmcgdGhlIHByb3BlcnR5IGFnYWluIHZpYSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC4gTm90ZTpcbiAgICAgICAgICAgIC8vIDEuIHRoaXMgdGFrZXMgYWR2YW50YWdlIG9mIHRoZSBmYWN0IHRoYXQgdGhlIGNhbGxiYWNrIGlzIHN5bmNocm9ub3VzLlxuICAgICAgICAgICAgLy8gMi4gd2lsbCBiZWhhdmUgaW5jb3JyZWN0bHkgaWYgbXVsdGlwbGUgYXR0cmlidXRlcyBhcmUgaW4gdGhlIHJlYWN0aW9uXG4gICAgICAgICAgICAvLyBzdGFjayBhdCB0aW1lIG9mIGNhbGxpbmcuIEhvd2V2ZXIsIHNpbmNlIHdlIHByb2Nlc3MgYXR0cmlidXRlc1xuICAgICAgICAgICAgLy8gaW4gYHVwZGF0ZWAgdGhpcyBzaG91bGQgbm90IGJlIHBvc3NpYmxlIChvciBhbiBleHRyZW1lIGNvcm5lciBjYXNlXG4gICAgICAgICAgICAvLyB0aGF0IHdlJ2QgbGlrZSB0byBkaXNjb3ZlcikuXG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBuYW1lO1xuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAvLyBOb3RlLCBoaW50IHRoaXMgYXMgYW4gYEF0dHJpYnV0ZU1hcGAgc28gY2xvc3VyZSBjbGVhcmx5IHVuZGVyc3RhbmRzXG4gICAgICAgIC8vIHRoZSB0eXBlOyBpdCBoYXMgaXNzdWVzIHdpdGggdHJhY2tpbmcgdHlwZXMgdGhyb3VnaCBzdGF0aWNzXG4gICAgICAgIGNvbnN0IHByb3BOYW1lID0gY3Rvci5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuZ2V0KG5hbWUpO1xuICAgICAgICAvLyBVc2UgdHJhY2tpbmcgaW5mbyB0byBhdm9pZCByZWZsZWN0aW5nIGEgcHJvcGVydHkgdmFsdWUgdG8gYW4gYXR0cmlidXRlXG4gICAgICAgIC8vIGlmIGl0IHdhcyBqdXN0IHNldCBiZWNhdXNlIHRoZSBhdHRyaWJ1dGUgY2hhbmdlZC5cbiAgICAgICAgaWYgKHByb3BOYW1lICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gcHJvcE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhwcm9wTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5jb252ZXJ0ZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IHsgZnJvbUF0dHJpYnV0ZTogb3B0aW9ucy5jb252ZXJ0ZXIgfVxuICAgICAgICAgICAgICAgIDogKChfYSA9IG9wdGlvbnMuY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZnJvbUF0dHJpYnV0ZSkgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IG9wdGlvbnMuY29udmVydGVyXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdENvbnZlcnRlcjtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IHByb3BOYW1lO1xuICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSBjb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuICAgICAqIHdoZW4gYW4gZWxlbWVudCBzaG91bGQgdXBkYXRlIGJhc2VkIG9uIHNvbWUgc3RhdGUgbm90IHRyaWdnZXJlZCBieSBzZXR0aW5nXG4gICAgICogYSByZWFjdGl2ZSBwcm9wZXJ0eS4gSW4gdGhpcyBjYXNlLCBwYXNzIG5vIGFyZ3VtZW50cy4gSXQgc2hvdWxkIGFsc28gYmVcbiAgICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgbmFtZWAgYW5kIGBvbGRWYWx1ZWAgdG8gZW5zdXJlIHRoYXQgYW55IGNvbmZpZ3VyZWQgcHJvcGVydHlcbiAgICAgKiBvcHRpb25zIGFyZSBob25vcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgbmFtZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9sZFZhbHVlIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnMgcHJvcGVydHkgb3B0aW9ucyB0byB1c2UgaW5zdGVhZCBvZiB0aGUgcHJldmlvdXNseVxuICAgICAqICAgICBjb25maWd1cmVkIG9wdGlvbnNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHNob3VsZFJlcXVlc3RVcGRhdGUgPSB0cnVlO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgICAgICAgb3B0aW9ucyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoYW5nZWQgPSBvcHRpb25zLmhhc0NoYW5nZWQgfHwgbm90RXF1YWw7XG4gICAgICAgICAgICBpZiAoaGFzQ2hhbmdlZCh0aGlzW25hbWVdLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzLnNldChuYW1lLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byByZWZsZWN0aW5nIHByb3BlcnRpZXMgc2V0LlxuICAgICAgICAgICAgICAgIC8vIE5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgZXZlcnkgY2hhbmdlIGhhcyBhIGNoYW5jZSB0byBhZGQgdGhlXG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgdG8gYF9yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlICsgcHJvcGVydHkgcmVmbGVjdHMgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlZmxlY3QgPT09IHRydWUgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBzaG91bGRSZXF1ZXN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZyAmJiBzaG91bGRSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IHRoaXMuX19lbnF1ZXVlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZSwgc2luY2UgdGhpcyBubyBsb25nZXIgcmV0dXJucyBhIHByb21pc2UsIGluIGRldiBtb2RlIHdlIHJldHVybiBhXG4gICAgICAgIC8vIHRoZW5hYmxlIHdoaWNoIHdhcm5zIGlmIGl0J3MgY2FsbGVkLlxuICAgICAgICByZXR1cm4gREVWX01PREVcbiAgICAgICAgICAgID8gcmVxdWVzdFVwZGF0ZVRoZW5hYmxlKHRoaXMubG9jYWxOYW1lKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgdXBkYXRlLlxuICAgICAqL1xuICAgIGFzeW5jIF9fZW5xdWV1ZVVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGFueSBwcmV2aW91cyB1cGRhdGUgaGFzIHJlc29sdmVkIGJlZm9yZSB1cGRhdGluZy5cbiAgICAgICAgICAgIC8vIFRoaXMgYGF3YWl0YCBhbHNvIGVuc3VyZXMgdGhhdCBwcm9wZXJ0eSBjaGFuZ2VzIGFyZSBiYXRjaGVkLlxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFJlZmlyZSBhbnkgcHJldmlvdXMgZXJyb3JzIGFzeW5jIHNvIHRoZXkgZG8gbm90IGRpc3J1cHQgdGhlIHVwZGF0ZVxuICAgICAgICAgICAgLy8gY3ljbGUuIEVycm9ycyBhcmUgcmVmaXJlZCBzbyBkZXZlbG9wZXJzIGhhdmUgYSBjaGFuY2UgdG8gb2JzZXJ2ZVxuICAgICAgICAgICAgLy8gdGhlbSwgYW5kIHRoaXMgY2FuIGJlIGRvbmUgYnkgaW1wbGVtZW50aW5nXG4gICAgICAgICAgICAvLyBgd2luZG93Lm9udW5oYW5kbGVkcmVqZWN0aW9uYC5cbiAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgICAgLy8gSWYgYHNjaGVkdWxlVXBkYXRlYCByZXR1cm5zIGEgUHJvbWlzZSwgd2UgYXdhaXQgaXQuIFRoaXMgaXMgZG9uZSB0b1xuICAgICAgICAvLyBlbmFibGUgY29vcmRpbmF0aW5nIHVwZGF0ZXMgd2l0aCBhIHNjaGVkdWxlci4gTm90ZSwgdGhlIHJlc3VsdCBpc1xuICAgICAgICAvLyBjaGVja2VkIHRvIGF2b2lkIGRlbGF5aW5nIGFuIGFkZGl0aW9uYWwgbWljcm90YXNrIHVubGVzcyB3ZSBuZWVkIHRvLlxuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIXRoaXMuaXNVcGRhdGVQZW5kaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYW4gZWxlbWVudCB1cGRhdGUuIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZVxuICAgICAqIHRpbWluZyBvZiB1cGRhdGVzIGJ5IHJldHVybmluZyBhIFByb21pc2UuIFRoZSB1cGRhdGUgd2lsbCBhd2FpdCB0aGVcbiAgICAgKiByZXR1cm5lZCBQcm9taXNlLCBhbmQgeW91IHNob3VsZCByZXNvbHZlIHRoZSBQcm9taXNlIHRvIGFsbG93IHRoZSB1cGRhdGVcbiAgICAgKiB0byBwcm9jZWVkLiBJZiB0aGlzIG1ldGhvZCBpcyBvdmVycmlkZGVuLCBgc3VwZXIuc2NoZWR1bGVVcGRhdGUoKWBcbiAgICAgKiBtdXN0IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEZvciBpbnN0YW5jZSwgdG8gc2NoZWR1bGUgdXBkYXRlcyB0byBvY2N1ciBqdXN0IGJlZm9yZSB0aGUgbmV4dCBmcmFtZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogb3ZlcnJpZGUgcHJvdGVjdGVkIGFzeW5jIHNjaGVkdWxlVXBkYXRlKCk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgICAqICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbiAgICAgKiAgIHN1cGVyLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgc2NoZWR1bGVVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1VcGRhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gZWxlbWVudCB1cGRhdGUuIE5vdGUsIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZVxuICAgICAqIHVwZGF0ZSwgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCB3aWxsIG5vdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBDYWxsIGBwZXJmb3JtVXBkYXRlKClgIHRvIGltbWVkaWF0ZWx5IHByb2Nlc3MgYSBwZW5kaW5nIHVwZGF0ZS4gVGhpcyBzaG91bGRcbiAgICAgKiBnZW5lcmFsbHkgbm90IGJlIG5lZWRlZCwgYnV0IGl0IGNhbiBiZSBkb25lIGluIHJhcmUgY2FzZXMgd2hlbiB5b3UgbmVlZCB0b1xuICAgICAqIHVwZGF0ZSBzeW5jaHJvbm91c2x5LlxuICAgICAqXG4gICAgICogTm90ZTogVG8gZW5zdXJlIGBwZXJmb3JtVXBkYXRlKClgIHN5bmNocm9ub3VzbHkgY29tcGxldGVzIGEgcGVuZGluZyB1cGRhdGUsXG4gICAgICogaXQgc2hvdWxkIG5vdCBiZSBvdmVycmlkZGVuLiBJbiBMaXRFbGVtZW50IDIueCBpdCB3YXMgc3VnZ2VzdGVkIHRvIG92ZXJyaWRlXG4gICAgICogYHBlcmZvcm1VcGRhdGUoKWAgdG8gYWxzbyBjdXN0b21pemluZyB1cGRhdGUgc2NoZWR1bGluZy4gSW5zdGVhZCwgeW91IHNob3VsZCBub3dcbiAgICAgKiBvdmVycmlkZSBgc2NoZWR1bGVVcGRhdGUoKWAuIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIExpdEVsZW1lbnQgMi54LFxuICAgICAqIHNjaGVkdWxpbmcgdXBkYXRlcyB2aWEgYHBlcmZvcm1VcGRhdGUoKWAgY29udGludWVzIHRvIHdvcmssIGJ1dCB3aWxsIG1ha2VcbiAgICAgKiBhbHNvIGNhbGxpbmcgYHBlcmZvcm1VcGRhdGUoKWAgdG8gc3luY2hyb25vdXNseSBwcm9jZXNzIHVwZGF0ZXMgZGlmZmljdWx0LlxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBwZXJmb3JtVXBkYXRlKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBBYm9ydCBhbnkgdXBkYXRlIGlmIG9uZSBpcyBub3QgcGVuZGluZyB3aGVuIHRoaXMgaXMgY2FsbGVkLlxuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgYHBlcmZvcm1VcGRhdGVgIGlzIGNhbGxlZCBlYXJseSB0byBcImZsdXNoXCJcbiAgICAgICAgLy8gdGhlIHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7IGtpbmQ6ICd1cGRhdGUnIH0pO1xuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyUm9vdCBiZWZvcmUgZmlyc3QgdXBkYXRlLlxuICAgICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgICAgICAgLy8gUHJvZHVjZSB3YXJuaW5nIGlmIGFueSBjbGFzcyBwcm9wZXJ0aWVzIGFyZSBzaGFkb3dlZCBieSBjbGFzcyBmaWVsZHNcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd2VkUHJvcGVydGllcyA9IFtdO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29uc3RydWN0b3IuX19yZWFjdGl2ZVByb3BlcnR5S2V5cykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSAmJiAhKChfYSA9IHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oYXMocCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dlZFByb3BlcnRpZXMucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dlZFByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIG9uIGVsZW1lbnQgJHt0aGlzLmxvY2FsTmFtZX0gd2lsbCBub3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgdHJpZ2dlciB1cGRhdGVzIGFzIGV4cGVjdGVkIGJlY2F1c2UgdGhleSBhcmUgc2V0IHVzaW5nIGNsYXNzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGZpZWxkczogJHtzaGFkb3dlZFByb3BlcnRpZXMuam9pbignLCAnKX0uIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYE5hdGl2ZSBjbGFzcyBmaWVsZHMgYW5kIHNvbWUgY29tcGlsZWQgb3V0cHV0IHdpbGwgb3ZlcndyaXRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGFjY2Vzc29ycyB1c2VkIGZvciBkZXRlY3RpbmcgY2hhbmdlcy4gU2VlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vbGl0LmRldi9tc2cvY2xhc3MtZmllbGQtc2hhZG93aW5nIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGZvciBtb3JlIGluZm9ybWF0aW9uLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNaXhpbiBpbnN0YW5jZSBwcm9wZXJ0aWVzIG9uY2UsIGlmIHRoZXkgZXhpc3QuXG4gICAgICAgIGlmICh0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+ICh0aGlzW3BdID0gdikpO1xuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRQcm9wZXJ0aWVzID0gdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIGZyb20gcnVubmluZyB3aGVuIHRoZXJlJ3MgYW5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBleGNlcHRpb24uXG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBlbGVtZW50IGNhbiBhY2NlcHQgYWRkaXRpb25hbCB1cGRhdGVzIGFmdGVyIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdXBkYXRlIGlzIG5vIGxvbmdlciBjb25zaWRlcmVkIHBlbmRpbmcgYW5kIGZ1cnRoZXIgdXBkYXRlcyBhcmUgbm93IGFsbG93ZWQuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgYmVmb3JlIGB1cGRhdGUoKWAgdG8gY29tcHV0ZSB2YWx1ZXMgbmVlZGVkIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogSW1wbGVtZW50IGB3aWxsVXBkYXRlYCB0byBjb21wdXRlIHByb3BlcnR5IHZhbHVlcyB0aGF0IGRlcGVuZCBvbiBvdGhlclxuICAgICAqIHByb3BlcnRpZXMgYW5kIGFyZSB1c2VkIGluIHRoZSByZXN0IG9mIHRoZSB1cGRhdGUgcHJvY2Vzcy5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAqICAgLy8gb25seSBuZWVkIHRvIGNoZWNrIGNoYW5nZWQgcHJvcGVydGllcyBmb3IgYW4gZXhwZW5zaXZlIGNvbXB1dGF0aW9uLlxuICAgICAqICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZmlyc3ROYW1lJykgfHwgY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdsYXN0TmFtZScpKSB7XG4gICAgICogICAgIHRoaXMuc2hhID0gY29tcHV0ZVNIQShgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWApO1xuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKlxuICAgICAqIHJlbmRlcigpIHtcbiAgICAgKiAgIHJldHVybiBodG1sYFNIQTogJHt0aGlzLnNoYX1gO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8vIE5vdGUsIHRoaXMgaXMgYW4gb3ZlcnJpZGUgcG9pbnQgZm9yIHBvbHlmaWxsLXN1cHBvcnQuXG4gICAgLy8gQGludGVybmFsXG4gICAgXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdFVwZGF0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmXG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyAmJlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbmFibGVkV2FybmluZ3MuaW5kZXhPZignY2hhbmdlLWluLXVwZGF0ZScpID49IDApIHtcbiAgICAgICAgICAgIGlzc3VlV2FybmluZygnY2hhbmdlLWluLXVwZGF0ZScsIGBFbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9IHNjaGVkdWxlZCBhbiB1cGRhdGUgYCArXG4gICAgICAgICAgICAgICAgYChnZW5lcmFsbHkgYmVjYXVzZSBhIHByb3BlcnR5IHdhcyBzZXQpIGAgK1xuICAgICAgICAgICAgICAgIGBhZnRlciBhbiB1cGRhdGUgY29tcGxldGVkLCBjYXVzaW5nIGEgbmV3IHVwZGF0ZSB0byBiZSBzY2hlZHVsZWQuIGAgK1xuICAgICAgICAgICAgICAgIGBUaGlzIGlzIGluZWZmaWNpZW50IGFuZCBzaG91bGQgYmUgYXZvaWRlZCB1bmxlc3MgdGhlIG5leHQgdXBkYXRlIGAgK1xuICAgICAgICAgICAgICAgIGBjYW4gb25seSBiZSBzY2hlZHVsZWQgYXMgYSBzaWRlIGVmZmVjdCBvZiB0aGUgcHJldmlvdXMgdXBkYXRlLmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9fbWFya1VwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBlbGVtZW50IGhhcyBjb21wbGV0ZWQgdXBkYXRpbmcuXG4gICAgICogVGhlIFByb21pc2UgdmFsdWUgaXMgYSBib29sZWFuIHRoYXQgaXMgYHRydWVgIGlmIHRoZSBlbGVtZW50IGNvbXBsZXRlZCB0aGVcbiAgICAgKiB1cGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLiBUaGUgUHJvbWlzZSByZXN1bHQgaXMgYGZhbHNlYCBpZlxuICAgICAqIGEgcHJvcGVydHkgd2FzIHNldCBpbnNpZGUgYHVwZGF0ZWQoKWAuIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBhblxuICAgICAqIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogVG8gYXdhaXQgYWRkaXRpb25hbCBhc3luY2hyb25vdXMgd29yaywgb3ZlcnJpZGUgdGhlIGBnZXRVcGRhdGVDb21wbGV0ZWBcbiAgICAgKiBtZXRob2QuIEZvciBleGFtcGxlLCBpdCBpcyBzb21ldGltZXMgdXNlZnVsIHRvIGF3YWl0IGEgcmVuZGVyZWQgZWxlbWVudFxuICAgICAqIGJlZm9yZSBmdWxmaWxsaW5nIHRoaXMgUHJvbWlzZS4gVG8gZG8gdGhpcywgZmlyc3QgYXdhaXRcbiAgICAgKiBgc3VwZXIuZ2V0VXBkYXRlQ29tcGxldGUoKWAsIHRoZW4gYW55IHN1YnNlcXVlbnQgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSBvZiBhIGJvb2xlYW4gdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSB1cGRhdGUgY29tcGxldGVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgcG9pbnQgZm9yIHRoZSBgdXBkYXRlQ29tcGxldGVgIHByb21pc2UuXG4gICAgICpcbiAgICAgKiBJdCBpcyBub3Qgc2FmZSB0byBvdmVycmlkZSB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBnZXR0ZXIgZGlyZWN0bHkgZHVlIHRvIGFcbiAgICAgKiBsaW1pdGF0aW9uIGluIFR5cGVTY3JpcHQgd2hpY2ggbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGNhbGwgYVxuICAgICAqIHN1cGVyY2xhc3MgZ2V0dGVyIChlLmcuIGBzdXBlci51cGRhdGVDb21wbGV0ZS50aGVuKC4uLilgKSB3aGVuIHRoZSB0YXJnZXRcbiAgICAgKiBsYW5ndWFnZSBpcyBFUzUgKGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzM4KS5cbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGRlbiBpbnN0ZWFkLiBGb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICBvdmVycmlkZSBhc3luYyBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgKiAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwZXIuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICAgKiAgICAgYXdhaXQgdGhpcy5fbXlDaGlsZC51cGRhdGVDb21wbGV0ZTtcbiAgICAgKiAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSBvZiBhIGJvb2xlYW4gdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSB1cGRhdGUgY29tcGxldGVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGB1cGRhdGUoKWAgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IHJlcXVlc3RzXG4gICAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgICAqIGN1c3RvbWl6ZWQgdG8gY29udHJvbCB3aGVuIHRvIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNob3VsZFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzLlxuICAgICAqIEl0IGNhbiBiZSBvdmVycmlkZGVuIHRvIHJlbmRlciBhbmQga2VlcCB1cGRhdGVkIGVsZW1lbnQgRE9NLlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogYW5vdGhlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yXG4gICAgICAgICAgICAvLyBsb29wcyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5fX3Byb3BlcnR5VG9BdHRyaWJ1dGUoaywgdGhpc1trXSwgdikpO1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybSBvbmUgdGltZVxuICAgICAqIHdvcmsgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICogICB0aGlzLnJlbmRlclJvb3QuZ2V0RWxlbWVudEJ5SWQoJ215LXRleHQtYXJlYScpLmZvY3VzKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZmlyc3RVcGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG59XG5fZSA9IGZpbmFsaXplZDtcbi8qKlxuICogTWFya3MgY2xhc3MgYXMgaGF2aW5nIGZpbmlzaGVkIGNyZWF0aW5nIHByb3BlcnRpZXMuXG4gKi9cblJlYWN0aXZlRWxlbWVudFtfZV0gPSB0cnVlO1xuLyoqXG4gKiBNZW1vaXplZCBsaXN0IG9mIGFsbCBlbGVtZW50IHByb3BlcnRpZXMsIGluY2x1ZGluZyBhbnkgc3VwZXJjbGFzcyBwcm9wZXJ0aWVzLlxuICogQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGUgY2xhc3MuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAqL1xuUmVhY3RpdmVFbGVtZW50LmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuLyoqXG4gKiBNZW1vaXplZCBsaXN0IG9mIGFsbCBlbGVtZW50IHN0eWxlcy5cbiAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSBzdHlsZXNcbiAqL1xuUmVhY3RpdmVFbGVtZW50LmVsZW1lbnRTdHlsZXMgPSBbXTtcbi8qKlxuICogT3B0aW9ucyB1c2VkIHdoZW4gY2FsbGluZyBgYXR0YWNoU2hhZG93YC4gU2V0IHRoaXMgcHJvcGVydHkgdG8gY3VzdG9taXplXG4gKiB0aGUgb3B0aW9ucyBmb3IgdGhlIHNoYWRvd1Jvb3Q7IGZvciBleGFtcGxlLCB0byBjcmVhdGUgYSBjbG9zZWRcbiAqIHNoYWRvd1Jvb3Q6IGB7bW9kZTogJ2Nsb3NlZCd9YC5cbiAqXG4gKiBOb3RlLCB0aGVzZSBvcHRpb25zIGFyZSB1c2VkIGluIGBjcmVhdGVSZW5kZXJSb290YC4gSWYgdGhpcyBtZXRob2RcbiAqIGlzIGN1c3RvbWl6ZWQsIG9wdGlvbnMgc2hvdWxkIGJlIHJlc3BlY3RlZCBpZiBwb3NzaWJsZS5cbiAqIEBub2NvbGxhcHNlXG4gKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gKi9cblJlYWN0aXZlRWxlbWVudC5zaGFkb3dSb290T3B0aW9ucyA9IHsgbW9kZTogJ29wZW4nIH07XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5wb2x5ZmlsbFN1cHBvcnQgPT09IG51bGwgfHwgcG9seWZpbGxTdXBwb3J0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb2x5ZmlsbFN1cHBvcnQoeyBSZWFjdGl2ZUVsZW1lbnQgfSk7XG4vLyBEZXYgbW9kZSB3YXJuaW5ncy4uLlxuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRGVmYXVsdCB3YXJuaW5nIHNldC5cbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlZFdhcm5pbmdzID0gWydjaGFuZ2UtaW4tdXBkYXRlJ107XG4gICAgY29uc3QgZW5zdXJlT3duV2FybmluZ3MgPSBmdW5jdGlvbiAoY3Rvcikge1xuICAgICAgICBpZiAoIWN0b3IuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnZW5hYmxlZFdhcm5pbmdzJywgY3RvcikpKSB7XG4gICAgICAgICAgICBjdG9yLmVuYWJsZWRXYXJuaW5ncyA9IGN0b3IuZW5hYmxlZFdhcm5pbmdzLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aXZlRWxlbWVudC5lbmFibGVXYXJuaW5nID0gZnVuY3Rpb24gKHdhcm5pbmcpIHtcbiAgICAgICAgZW5zdXJlT3duV2FybmluZ3ModGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKHdhcm5pbmcpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3MucHVzaCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3RpdmVFbGVtZW50LmRpc2FibGVXYXJuaW5nID0gZnVuY3Rpb24gKHdhcm5pbmcpIHtcbiAgICAgICAgZW5zdXJlT3duV2FybmluZ3ModGhpcyk7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKHdhcm5pbmcpO1xuICAgICAgICBpZiAoaSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRXYXJuaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBSZWFjdGl2ZUVsZW1lbnQgdXNhZ2UuXG4oKF9kID0gZ2xvYmFsLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAoZ2xvYmFsLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zID0gW10pKS5wdXNoKCcxLjYuMycpO1xuaWYgKERFVl9NT0RFICYmIGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBMb2FkaW5nIG11bHRpcGxlIHZlcnNpb25zIGAgK1xuICAgICAgICBgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RpdmUtZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qXG4gKiBJTVBPUlRBTlQ6IEZvciBjb21wYXRpYmlsaXR5IHdpdGggdHNpY2tsZSBhbmQgdGhlIENsb3N1cmUgSlMgY29tcGlsZXIsIGFsbFxuICogcHJvcGVydHkgZGVjb3JhdG9ycyAoYnV0IG5vdCBjbGFzcyBkZWNvcmF0b3JzKSBpbiB0aGlzIGZpbGUgdGhhdCBoYXZlXG4gKiBhbiBARXhwb3J0RGVjb3JhdGVkSXRlbXMgYW5ub3RhdGlvbiBtdXN0IGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGZ1bmN0aW9uLFxuICogbm90IGFuIGFycm93IGZ1bmN0aW9uLlxuICovXG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9iYXNlLmpzJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2V2ZW50LW9wdGlvbnMuanMnO1xuZXhwb3J0ICogZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnkuanMnO1xuZXhwb3J0ICogZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYWxsLmpzJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzeW5jLmpzJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29yYXRvcnMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnLi9saXQtZWxlbWVudC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcnMuanMnO1xuY29uc29sZS53YXJuKFwiVGhlIG1haW4gJ2xpdC1lbGVtZW50JyBtb2R1bGUgZW50cnlwb2ludCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXBkYXRlIFwiICtcbiAgICBcInlvdXIgaW1wb3J0cyB0byB1c2UgdGhlICdsaXQnIHBhY2thZ2U6ICdsaXQnIGFuZCAnbGl0L2RlY29yYXRvcnMudHMnIFwiICtcbiAgICBcIm9yIGltcG9ydCBmcm9tICdsaXQtZWxlbWVudC9saXQtZWxlbWVudC50cycuIFNlZSBcIiArXG4gICAgJ2h0dHBzOi8vbGl0LmRldi9tc2cvZGVwcmVjYXRlZC1pbXBvcnQtcGF0aCBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2M7XG4vKipcbiAqIFRoZSBtYWluIExpdEVsZW1lbnQgbW9kdWxlLCB3aGljaCBkZWZpbmVzIHRoZSB7QGxpbmtjb2RlIExpdEVsZW1lbnR9IGJhc2VcbiAqIGNsYXNzIGFuZCByZWxhdGVkIEFQSXMuXG4gKlxuICogIExpdEVsZW1lbnQgY29tcG9uZW50cyBjYW4gZGVmaW5lIGEgdGVtcGxhdGUgYW5kIGEgc2V0IG9mIG9ic2VydmVkXG4gKiBwcm9wZXJ0aWVzLiBDaGFuZ2luZyBhbiBvYnNlcnZlZCBwcm9wZXJ0eSB0cmlnZ2VycyBhIHJlLXJlbmRlciBvZiB0aGVcbiAqIGVsZW1lbnQuXG4gKlxuICogIEltcG9ydCB7QGxpbmtjb2RlIExpdEVsZW1lbnR9IGFuZCB7QGxpbmtjb2RlIGh0bWx9IGZyb20gdGhpcyBtb2R1bGUgdG9cbiAqIGNyZWF0ZSBhIGNvbXBvbmVudDpcbiAqXG4gKiAgYGBganNcbiAqIGltcG9ydCB7TGl0RWxlbWVudCwgaHRtbH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuICpcbiAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICpcbiAqICAgLy8gRGVjbGFyZSBvYnNlcnZlZCBwcm9wZXJ0aWVzXG4gKiAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAqICAgICByZXR1cm4ge1xuICogICAgICAgYWRqZWN0aXZlOiB7fVxuICogICAgIH1cbiAqICAgfVxuICpcbiAqICAgY29uc3RydWN0b3IoKSB7XG4gKiAgICAgdGhpcy5hZGplY3RpdmUgPSAnYXdlc29tZSc7XG4gKiAgIH1cbiAqXG4gKiAgIC8vIERlZmluZSB0aGUgZWxlbWVudCdzIHRlbXBsYXRlXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGA8cD55b3VyICR7YWRqZWN0aXZlfSB0ZW1wbGF0ZSBoZXJlPC9wPmA7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICogYGBgXG4gKlxuICogYExpdEVsZW1lbnRgIGV4dGVuZHMge0BsaW5rY29kZSBSZWFjdGl2ZUVsZW1lbnR9IGFuZCBhZGRzIGxpdC1odG1sXG4gKiB0ZW1wbGF0aW5nLiBUaGUgYFJlYWN0aXZlRWxlbWVudGAgY2xhc3MgaXMgcHJvdmlkZWQgZm9yIHVzZXJzIHRoYXQgd2FudCB0b1xuICogYnVpbGQgdGhlaXIgb3duIGN1c3RvbSBlbGVtZW50IGJhc2UgY2xhc3NlcyB0aGF0IGRvbid0IHVzZSBsaXQtaHRtbC5cbiAqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuaW1wb3J0IHsgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50JztcbmltcG9ydCB7IHJlbmRlciwgbm9DaGFuZ2UgfSBmcm9tICdsaXQtaHRtbCc7XG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwnO1xuLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV4cG9ydCBSZWFjdGl2ZUVsZW1lbnQgYXMgVXBkYXRpbmdFbGVtZW50LiBOb3RlLFxuLy8gSUUgdHJhbnNwaWxhdGlvbiByZXF1aXJlcyBleHBvcnRpbmcgbGlrZSB0aGlzLlxuZXhwb3J0IGNvbnN0IFVwZGF0aW5nRWxlbWVudCA9IFJlYWN0aXZlRWxlbWVudDtcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBFbnN1cmUgd2FybmluZ3MgYXJlIGlzc3VlZCBvbmx5IDF4LCBldmVuIGlmIG11bHRpcGxlIHZlcnNpb25zIG9mIExpdFxuICAgIC8vIGFyZSBsb2FkZWQuXG4gICAgY29uc3QgaXNzdWVkV2FybmluZ3MgPSAoKF9hID0gZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKGdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MgPSBuZXcgU2V0KCkpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICBpZiAoIWlzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgaXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHRoYXQgbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMsIGFuZFxuICogcmVuZGVycyBhIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIFRvIGRlZmluZSBhIGNvbXBvbmVudCwgc3ViY2xhc3MgYExpdEVsZW1lbnRgIGFuZCBpbXBsZW1lbnQgYVxuICogYHJlbmRlcmAgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIGNvbXBvbmVudCdzIHRlbXBsYXRlLiBEZWZpbmUgcHJvcGVydGllc1xuICogdXNpbmcgdGhlIHtAbGlua2NvZGUgTGl0RWxlbWVudC5wcm9wZXJ0aWVzIHByb3BlcnRpZXN9IHByb3BlcnR5IG9yIHRoZVxuICoge0BsaW5rY29kZSBwcm9wZXJ0eX0gZGVjb3JhdG9yLlxuICovXG5leHBvcnQgY2xhc3MgTGl0RWxlbWVudCBleHRlbmRzIFJlYWN0aXZlRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbmRlck9wdGlvbnMgPSB7IGhvc3Q6IHRoaXMgfTtcbiAgICAgICAgdGhpcy5fX2NoaWxkUGFydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF9iO1xuICAgICAgICBjb25zdCByZW5kZXJSb290ID0gc3VwZXIuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgICAgICAvLyBXaGVuIGFkb3B0ZWRTdHlsZVNoZWV0cyBhcmUgc2hpbW1lZCwgdGhleSBhcmUgaW5zZXJ0ZWQgaW50byB0aGVcbiAgICAgICAgLy8gc2hhZG93Um9vdCBieSBjcmVhdGVSZW5kZXJSb290LiBBZGp1c3QgdGhlIHJlbmRlckJlZm9yZSBub2RlIHNvIHRoYXRcbiAgICAgICAgLy8gYW55IHN0eWxlcyBpbiBMaXQgY29udGVudCByZW5kZXIgYmVmb3JlIGFkb3B0ZWRTdHlsZVNoZWV0cy4gVGhpcyBpc1xuICAgICAgICAvLyBpbXBvcnRhbnQgc28gdGhhdCBhZG9wdGVkU3R5bGVTaGVldHMgaGF2ZSBwcmVjZWRlbmNlIG92ZXIgc3R5bGVzIGluXG4gICAgICAgIC8vIHRoZSBzaGFkb3dSb290LlxuICAgICAgICAoX2EgPSAoX2IgPSB0aGlzLnJlbmRlck9wdGlvbnMpLnJlbmRlckJlZm9yZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKF9iLnJlbmRlckJlZm9yZSA9IHJlbmRlclJvb3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiByZW5kZXJSb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlc1xuICAgICAqIGFuZCBjYWxscyBgcmVuZGVyYCB0byByZW5kZXIgRE9NIHZpYSBsaXQtaHRtbC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZVxuICAgICAqIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlciBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0gY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICAvLyBTZXR0aW5nIHByb3BlcnRpZXMgaW4gYHJlbmRlcmAgc2hvdWxkIG5vdCB0cmlnZ2VyIGFuIHVwZGF0ZS4gU2luY2VcbiAgICAgICAgLy8gdXBkYXRlcyBhcmUgYWxsb3dlZCBhZnRlciBzdXBlci51cGRhdGUsIGl0J3MgaW1wb3J0YW50IHRvIGNhbGwgYHJlbmRlcmBcbiAgICAgICAgLy8gYmVmb3JlIHRoYXQuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyT3B0aW9ucy5pc0Nvbm5lY3RlZCA9IHRoaXMuaXNDb25uZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgdGhpcy5fX2NoaWxkUGFydCA9IHJlbmRlcih2YWx1ZSwgdGhpcy5yZW5kZXJSb290LCB0aGlzLnJlbmRlck9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgZG9jdW1lbnQncyBET00uXG4gICAgICpcbiAgICAgKiBJbiBgY29ubmVjdGVkQ2FsbGJhY2soKWAgeW91IHNob3VsZCBzZXR1cCB0YXNrcyB0aGF0IHNob3VsZCBvbmx5IG9jY3VyIHdoZW5cbiAgICAgKiB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LiBUaGUgbW9zdCBjb21tb24gb2YgdGhlc2UgaXNcbiAgICAgKiBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIG5vZGVzIGV4dGVybmFsIHRvIHRoZSBlbGVtZW50LCBsaWtlIGEga2V5ZG93blxuICAgICAqIGV2ZW50IGhhbmRsZXIgYWRkZWQgdG8gdGhlIHdpbmRvdy5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICogICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAqICAgYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUtleWRvd24pO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFR5cGljYWxseSwgYW55dGhpbmcgZG9uZSBpbiBgY29ubmVjdGVkQ2FsbGJhY2soKWAgc2hvdWxkIGJlIHVuZG9uZSB3aGVuIHRoZVxuICAgICAqIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkLCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2soKWAuXG4gICAgICpcbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NoaWxkUGFydCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBkb2N1bWVudCdzIERPTS5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FsbGJhY2sgaXMgdGhlIG1haW4gc2lnbmFsIHRvIHRoZSBlbGVtZW50IHRoYXQgaXQgbWF5IG5vIGxvbmdlciBiZVxuICAgICAqIHVzZWQuIGBkaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBzaG91bGQgZW5zdXJlIHRoYXQgbm90aGluZyBpcyBob2xkaW5nIGFcbiAgICAgKiByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgKHN1Y2ggYXMgZXZlbnQgbGlzdGVuZXJzIGFkZGVkIHRvIG5vZGVzIGV4dGVybmFsXG4gICAgICogdG8gdGhlIGVsZW1lbnQpLCBzbyB0aGF0IGl0IGlzIGZyZWUgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAqICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgKiAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQW4gZWxlbWVudCBtYXkgYmUgcmUtY29ubmVjdGVkIGFmdGVyIGJlaW5nIGRpc2Nvbm5lY3RlZC5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY2hpbGRQYXJ0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Q29ubmVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBlYWNoIHVwZGF0ZSB0byBwZXJmb3JtIHJlbmRlcmluZyB0YXNrcy4gVGhpcyBtZXRob2QgbWF5IHJldHVyblxuICAgICAqIGFueSB2YWx1ZSByZW5kZXJhYmxlIGJ5IGxpdC1odG1sJ3MgYENoaWxkUGFydGAgLSB0eXBpY2FsbHkgYVxuICAgICAqIGBUZW1wbGF0ZVJlc3VsdGAuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogdGhlIGVsZW1lbnQgdG8gdXBkYXRlLlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBub0NoYW5nZTtcbiAgICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGlzIGNsYXNzIGlzIG1hcmtlZCBhcyBgZmluYWxpemVkYCBhcyBhbiBvcHRpbWl6YXRpb24gZW5zdXJpbmdcbiAqIGl0IHdpbGwgbm90IG5lZWRsZXNzbHkgdHJ5IHRvIGBmaW5hbGl6ZWAuXG4gKlxuICogTm90ZSB0aGlzIHByb3BlcnR5IG5hbWUgaXMgYSBzdHJpbmcgdG8gcHJldmVudCBicmVha2luZyBDbG9zdXJlIEpTIENvbXBpbGVyXG4gKiBvcHRpbWl6YXRpb25zLiBTZWUgQGxpdC9yZWFjdGl2ZS1lbGVtZW50IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5MaXRFbGVtZW50WydmaW5hbGl6ZWQnXSA9IHRydWU7XG4vLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuTGl0RWxlbWVudFsnXyRsaXRFbGVtZW50JCddID0gdHJ1ZTtcbi8vIEluc3RhbGwgaHlkcmF0aW9uIGlmIGF2YWlsYWJsZVxuKF9iID0gZ2xvYmFsVGhpcy5saXRFbGVtZW50SHlkcmF0ZVN1cHBvcnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGdsb2JhbFRoaXMsIHsgTGl0RWxlbWVudCB9KTtcbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gICAgPyBnbG9iYWxUaGlzLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiBnbG9iYWxUaGlzLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQ7XG5wb2x5ZmlsbFN1cHBvcnQgPT09IG51bGwgfHwgcG9seWZpbGxTdXBwb3J0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb2x5ZmlsbFN1cHBvcnQoeyBMaXRFbGVtZW50IH0pO1xuLy8gREVWIG1vZGUgd2FybmluZ3NcbmlmIChERVZfTU9ERSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbiAgICAvLyBOb3RlLCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIGNsb3N1cmUgY29tcGlsYXRpb24sIHRoaXMgYWNjZXNzXG4gICAgLy8gbmVlZHMgdG8gYmUgYXMgYSBzdHJpbmcgcHJvcGVydHkgaW5kZXguXG4gICAgTGl0RWxlbWVudFsnZmluYWxpemUnXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZmluYWxpemVkID0gUmVhY3RpdmVFbGVtZW50LmZpbmFsaXplLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICghZmluYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2FyblJlbW92ZWRPclJlbmFtZWQgPSAob2JqLCBuYW1lLCByZW5hbWVkID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdG9yTmFtZSA9ICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nID8gb2JqIDogb2JqLmNvbnN0cnVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAubmFtZTtcbiAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcocmVuYW1lZCA/ICdyZW5hbWVkLWFwaScgOiAncmVtb3ZlZC1hcGknLCBgXFxgJHtuYW1lfVxcYCBpcyBpbXBsZW1lbnRlZCBvbiBjbGFzcyAke2N0b3JOYW1lfS4gSXQgYCArXG4gICAgICAgICAgICAgICAgICAgIGBoYXMgYmVlbiAke3JlbmFtZWQgPyAncmVuYW1lZCcgOiAncmVtb3ZlZCd9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaW4gdGhpcyB2ZXJzaW9uIG9mIExpdEVsZW1lbnQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKHRoaXMsICdyZW5kZXInKTtcbiAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQodGhpcywgJ2dldFN0eWxlcycsIHRydWUpO1xuICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCh0aGlzLnByb3RvdHlwZSwgJ2Fkb3B0U3R5bGVzJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG59XG4vKipcbiAqIEVORCBVU0VSUyBTSE9VTEQgTk9UIFJFTFkgT04gVEhJUyBPQkpFQ1QuXG4gKlxuICogUHJpdmF0ZSBleHBvcnRzIGZvciB1c2UgYnkgb3RoZXIgTGl0IHBhY2thZ2VzLCBub3QgaW50ZW5kZWQgZm9yIHVzZSBieVxuICogZXh0ZXJuYWwgdXNlcnMuXG4gKlxuICogV2UgY3VycmVudGx5IGRvIG5vdCBtYWtlIGEgbWFuZ2xlZCByb2xsdXAgYnVpbGQgb2YgdGhlIGxpdC1zc3IgY29kZS4gSW4gb3JkZXJcbiAqIHRvIGtlZXAgYSBudW1iZXIgb2YgKG90aGVyd2lzZSBwcml2YXRlKSB0b3AtbGV2ZWwgZXhwb3J0cyAgbWFuZ2xlZCBpbiB0aGVcbiAqIGNsaWVudCBzaWRlIGNvZGUsIHdlIGV4cG9ydCBhIF8kTEUgb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtaHRtbCwgc2luY2UgdGhpcyBtb2R1bGUgcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF8kTEUgPSB7XG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5OiAoZWwsIG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBlbC5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgXyRjaGFuZ2VkUHJvcGVydGllczogKGVsKSA9PiBlbC5fJGNoYW5nZWRQcm9wZXJ0aWVzLFxufTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgTGl0RWxlbWVudCB1c2FnZS5cbigoX2MgPSBnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogKGdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zID0gW10pKS5wdXNoKCczLjMuMycpO1xuaWYgKERFVl9NT0RFICYmIGdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zLmxlbmd0aCA+IDEpIHtcbiAgICBpc3N1ZVdhcm5pbmcoJ211bHRpcGxlLXZlcnNpb25zJywgYE11bHRpcGxlIHZlcnNpb25zIG9mIExpdCBsb2FkZWQuIExvYWRpbmcgbXVsdGlwbGUgdmVyc2lvbnMgYCArXG4gICAgICAgIGBpcyBub3QgcmVjb21tZW5kZWQuYCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciBfYSwgX2IsIF9jLCBfZDtcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyA9IHRydWU7XG5jb25zdCBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCA9IHRydWU7XG5jb25zdCBOT0RFX01PREUgPSBmYWxzZTtcbi8vIFVzZSB3aW5kb3cgZm9yIGJyb3dzZXIgYnVpbGRzIGJlY2F1c2UgSUUxMSBkb2Vzbid0IGhhdmUgZ2xvYmFsVGhpcy5cbmNvbnN0IGdsb2JhbCA9IE5PREVfTU9ERSA/IGdsb2JhbFRoaXMgOiB3aW5kb3c7XG4vKipcbiAqIFVzZWZ1bCBmb3IgdmlzdWFsaXppbmcgYW5kIGxvZ2dpbmcgaW5zaWdodHMgaW50byB3aGF0IHRoZSBMaXQgdGVtcGxhdGUgc3lzdGVtIGlzIGRvaW5nLlxuICpcbiAqIENvbXBpbGVkIG91dCBvZiBwcm9kIG1vZGUgYnVpbGRzLlxuICovXG5jb25zdCBkZWJ1Z0xvZ0V2ZW50ID0gREVWX01PREVcbiAgICA/IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzaG91bGRFbWl0ID0gZ2xvYmFsXG4gICAgICAgICAgICAuZW1pdExpdERlYnVnTG9nRXZlbnRzO1xuICAgICAgICBpZiAoIXNob3VsZEVtaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2xpdC1kZWJ1ZycsIHtcbiAgICAgICAgICAgIGRldGFpbDogZXZlbnQsXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgOiB1bmRlZmluZWQ7XG4vLyBVc2VkIGZvciBjb25uZWN0aW5nIGJlZ2luUmVuZGVyIGFuZCBlbmRSZW5kZXIgZXZlbnRzIHdoZW4gdGhlcmUgYXJlIG5lc3RlZFxuLy8gcmVuZGVycyB3aGVuIGVycm9ycyBhcmUgdGhyb3duIHByZXZlbnRpbmcgYW4gZW5kUmVuZGVyIGV2ZW50IGZyb20gYmVpbmdcbi8vIGNhbGxlZC5cbmxldCBkZWJ1Z0xvZ1JlbmRlcklkID0gMDtcbmxldCBpc3N1ZVdhcm5pbmc7XG5pZiAoREVWX01PREUpIHtcbiAgICAoX2EgPSBnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MgPSBuZXcgU2V0KCkpO1xuICAgIC8vIElzc3VlIGEgd2FybmluZywgaWYgd2UgaGF2ZW4ndCBhbHJlYWR5LlxuICAgIGlzc3VlV2FybmluZyA9IChjb2RlLCB3YXJuaW5nKSA9PiB7XG4gICAgICAgIHdhcm5pbmcgKz0gY29kZVxuICAgICAgICAgICAgPyBgIFNlZSBodHRwczovL2xpdC5kZXYvbXNnLyR7Y29kZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgaWYgKCFnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MuaGFzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICBnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpc3N1ZVdhcm5pbmcoJ2Rldi1tb2RlJywgYExpdCBpcyBpbiBkZXYgbW9kZS4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIWApO1xufVxuY29uc3Qgd3JhcCA9IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIICYmXG4gICAgKChfYiA9IGdsb2JhbC5TaGFkeURPTSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluVXNlKSAmJlxuICAgICgoX2MgPSBnbG9iYWwuU2hhZHlET00pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5ub1BhdGNoKSA9PT0gdHJ1ZVxuICAgID8gZ2xvYmFsLlNoYWR5RE9NLndyYXBcbiAgICA6IChub2RlKSA9PiBub2RlO1xuY29uc3QgdHJ1c3RlZFR5cGVzID0gZ2xvYmFsLnRydXN0ZWRUeXBlcztcbi8qKlxuICogT3VyIFRydXN0ZWRUeXBlUG9saWN5IGZvciBIVE1MIHdoaWNoIGlzIGRlY2xhcmVkIHVzaW5nIHRoZSBodG1sIHRlbXBsYXRlXG4gKiB0YWcgZnVuY3Rpb24uXG4gKlxuICogVGhhdCBIVE1MIGlzIGEgZGV2ZWxvcGVyLWF1dGhvcmVkIGNvbnN0YW50LCBhbmQgaXMgcGFyc2VkIHdpdGggaW5uZXJIVE1MXG4gKiBiZWZvcmUgYW55IHVudHJ1c3RlZCBleHByZXNzaW9ucyBoYXZlIGJlZW4gbWl4ZWQgaW4uIFRoZXJlZm9yIGl0IGlzXG4gKiBjb25zaWRlcmVkIHNhZmUgYnkgY29uc3RydWN0aW9uLlxuICovXG5jb25zdCBwb2xpY3kgPSB0cnVzdGVkVHlwZXNcbiAgICA/IHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJ2xpdC1odG1sJywge1xuICAgICAgICBjcmVhdGVIVE1MOiAocykgPT4gcyxcbiAgICB9KVxuICAgIDogdW5kZWZpbmVkO1xuY29uc3QgaWRlbnRpdHlGdW5jdGlvbiA9ICh2YWx1ZSkgPT4gdmFsdWU7XG5jb25zdCBub29wU2FuaXRpemVyID0gKF9ub2RlLCBfbmFtZSwgX3R5cGUpID0+IGlkZW50aXR5RnVuY3Rpb247XG4vKiogU2V0cyB0aGUgZ2xvYmFsIHNhbml0aXplciBmYWN0b3J5LiAqL1xuY29uc3Qgc2V0U2FuaXRpemVyID0gKG5ld1Nhbml0aXplcikgPT4ge1xuICAgIGlmICghRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGVtcHRlZCB0byBvdmVyd3JpdGUgZXhpc3RpbmcgbGl0LWh0bWwgc2VjdXJpdHkgcG9saWN5LmAgK1xuICAgICAgICAgICAgYCBzZXRTYW5pdGl6ZURPTVZhbHVlRmFjdG9yeSBzaG91bGQgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZS5gKTtcbiAgICB9XG4gICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbmV3U2FuaXRpemVyO1xufTtcbi8qKlxuICogT25seSB1c2VkIGluIGludGVybmFsIHRlc3RzLCBub3QgYSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJLlxuICovXG5jb25zdCBfdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPSAoKSA9PiB7XG4gICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbm9vcFNhbml0aXplcjtcbn07XG5jb25zdCBjcmVhdGVTYW5pdGl6ZXIgPSAobm9kZSwgbmFtZSwgdHlwZSkgPT4ge1xuICAgIHJldHVybiBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwobm9kZSwgbmFtZSwgdHlwZSk7XG59O1xuLy8gQWRkZWQgdG8gYW4gYXR0cmlidXRlIG5hbWUgdG8gbWFyayB0aGUgYXR0cmlidXRlIGFzIGJvdW5kIHNvIHdlIGNhbiBmaW5kXG4vLyBpdCBlYXNpbHkuXG5jb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG4vLyBUaGlzIG1hcmtlciBpcyB1c2VkIGluIG1hbnkgc3ludGFjdGljIHBvc2l0aW9ucyBpbiBIVE1MLCBzbyBpdCBtdXN0IGJlXG4vLyBhIHZhbGlkIGVsZW1lbnQgbmFtZSBhbmQgYXR0cmlidXRlIG5hbWUuIFdlIGRvbid0IHN1cHBvcnQgZHluYW1pYyBuYW1lcyAoeWV0KVxuLy8gYnV0IHRoaXMgYXQgbGVhc3QgZW5zdXJlcyB0aGF0IHRoZSBwYXJzZSB0cmVlIGlzIGNsb3NlciB0byB0aGUgdGVtcGxhdGVcbi8vIGludGVudGlvbi5cbmNvbnN0IG1hcmtlciA9IGBsaXQkJHtTdHJpbmcoTWF0aC5yYW5kb20oKSkuc2xpY2UoOSl9JGA7XG4vLyBTdHJpbmcgdXNlZCB0byB0ZWxsIGlmIGEgY29tbWVudCBpcyBhIG1hcmtlciBjb21tZW50XG5jb25zdCBtYXJrZXJNYXRjaCA9ICc/JyArIG1hcmtlcjtcbi8vIFRleHQgdXNlZCB0byBpbnNlcnQgYSBjb21tZW50IG1hcmtlciBub2RlLiBXZSB1c2UgcHJvY2Vzc2luZyBpbnN0cnVjdGlvblxuLy8gc3ludGF4IGJlY2F1c2UgaXQncyBzbGlnaHRseSBzbWFsbGVyLCBidXQgcGFyc2VzIGFzIGEgY29tbWVudCBub2RlLlxuY29uc3Qgbm9kZU1hcmtlciA9IGA8JHttYXJrZXJNYXRjaH0+YDtcbmNvbnN0IGQgPSBOT0RFX01PREUgJiYgZ2xvYmFsLmRvY3VtZW50ID09PSB1bmRlZmluZWRcbiAgICA/IHtcbiAgICAgICAgY3JlYXRlVHJlZVdhbGtlcigpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICB9XG4gICAgOiBkb2N1bWVudDtcbi8vIENyZWF0ZXMgYSBkeW5hbWljIG1hcmtlci4gV2UgbmV2ZXIgaGF2ZSB0byBzZWFyY2ggZm9yIHRoZXNlIGluIHRoZSBET00uXG5jb25zdCBjcmVhdGVNYXJrZXIgPSAoKSA9PiBkLmNyZWF0ZUNvbW1lbnQoJycpO1xuY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlICE9ICdmdW5jdGlvbicpO1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5jb25zdCBpc0l0ZXJhYmxlID0gKHZhbHVlKSA9PiBpc0FycmF5KHZhbHVlKSB8fFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgdHlwZW9mICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSkgPT09ICdmdW5jdGlvbic7XG5jb25zdCBTUEFDRV9DSEFSID0gYFsgXFx0XFxuXFxmXFxyXWA7XG5jb25zdCBBVFRSX1ZBTFVFX0NIQVIgPSBgW14gXFx0XFxuXFxmXFxyXCInXFxgPD49XWA7XG5jb25zdCBOQU1FX0NIQVIgPSBgW15cXFxcc1wiJz49L11gO1xuLy8gVGhlc2UgcmVnZXhlcyByZXByZXNlbnQgdGhlIGZpdmUgcGFyc2luZyBzdGF0ZXMgdGhhdCB3ZSBjYXJlIGFib3V0IGluIHRoZVxuLy8gVGVtcGxhdGUncyBIVE1MIHNjYW5uZXIuIFRoZXkgbWF0Y2ggdGhlICplbmQqIG9mIHRoZSBzdGF0ZSB0aGV5J3JlIG5hbWVkXG4vLyBhZnRlci5cbi8vIERlcGVuZGluZyBvbiB0aGUgbWF0Y2gsIHdlIHRyYW5zaXRpb24gdG8gYSBuZXcgc3RhdGUuIElmIHRoZXJlJ3Mgbm8gbWF0Y2gsXG4vLyB3ZSBzdGF5IGluIHRoZSBzYW1lIHN0YXRlLlxuLy8gTm90ZSB0aGF0IHRoZSByZWdleGVzIGFyZSBzdGF0ZWZ1bC4gV2UgdXRpbGl6ZSBsYXN0SW5kZXggYW5kIHN5bmMgaXRcbi8vIGFjcm9zcyB0aGUgbXVsdGlwbGUgcmVnZXhlcyB1c2VkLiBJbiBhZGRpdGlvbiB0byB0aGUgZml2ZSByZWdleGVzIGJlbG93XG4vLyB3ZSBhbHNvIGR5bmFtaWNhbGx5IGNyZWF0ZSBhIHJlZ2V4IHRvIGZpbmQgdGhlIG1hdGNoaW5nIGVuZCB0YWdzIGZvciByYXdcbi8vIHRleHQgZWxlbWVudHMuXG4vKipcbiAqIEVuZCBvZiB0ZXh0IGlzOiBgPGAgZm9sbG93ZWQgYnk6XG4gKiAgIChjb21tZW50IHN0YXJ0KSBvciAodGFnKSBvciAoZHluYW1pYyB0YWcgYmluZGluZylcbiAqL1xuY29uc3QgdGV4dEVuZFJlZ2V4ID0gLzwoPzooIS0tfFxcL1teYS16QS1aXSl8KFxcLz9bYS16QS1aXVtePlxcc10qKXwoXFwvPyQpKS9nO1xuY29uc3QgQ09NTUVOVF9TVEFSVCA9IDE7XG5jb25zdCBUQUdfTkFNRSA9IDI7XG5jb25zdCBEWU5BTUlDX1RBR19OQU1FID0gMztcbmNvbnN0IGNvbW1lbnRFbmRSZWdleCA9IC8tLT4vZztcbi8qKlxuICogQ29tbWVudHMgbm90IHN0YXJ0ZWQgd2l0aCA8IS0tLCBsaWtlIDwveywgY2FuIGJlIGVuZGVkIGJ5IGEgc2luZ2xlIGA+YFxuICovXG5jb25zdCBjb21tZW50MkVuZFJlZ2V4ID0gLz4vZztcbi8qKlxuICogVGhlIHRhZ0VuZCByZWdleCBtYXRjaGVzIHRoZSBlbmQgb2YgdGhlIFwiaW5zaWRlIGFuIG9wZW5pbmdcIiB0YWcgc3ludGF4XG4gKiBwb3NpdGlvbi4gSXQgZWl0aGVyIG1hdGNoZXMgYSBgPmAsIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlLCBvciB0aGUgZW5kXG4gKiBvZiB0aGUgc3RyaW5nIGFmdGVyIGEgc3BhY2UgKGF0dHJpYnV0ZS1uYW1lIHBvc2l0aW9uIGVuZGluZykuXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50cy1hdHRyaWJ1dGVzXG4gKlxuICogXCIgXFx0XFxuXFxmXFxyXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS13aGl0ZXNwYWNlXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIsIChcIiksICgnKSwgXCI+XCIsXG4gKiAgICBcIj1cIiwgb3IgXCIvXCIuIE5vdGU6IHRoaXMgaXMgZGlmZmVyZW50IGZyb20gdGhlIEhUTUwgc3BlYyB3aGljaCBhbHNvIGV4Y2x1ZGVzIGNvbnRyb2wgY2hhcmFjdGVycy5cbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmNvbnN0IHRhZ0VuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPnwke1NQQUNFX0NIQVJ9KD86KCR7TkFNRV9DSEFSfSspKCR7U1BBQ0VfQ0hBUn0qPSR7U1BBQ0VfQ0hBUn0qKD86JHtBVFRSX1ZBTFVFX0NIQVJ9fChcInwnKXwpKXwkKWAsICdnJyk7XG5jb25zdCBFTlRJUkVfTUFUQ0ggPSAwO1xuY29uc3QgQVRUUklCVVRFX05BTUUgPSAxO1xuY29uc3QgU1BBQ0VTX0FORF9FUVVBTFMgPSAyO1xuY29uc3QgUVVPVEVfQ0hBUiA9IDM7XG5jb25zdCBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCA9IC8nL2c7XG5jb25zdCBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCA9IC9cIi9nO1xuLyoqXG4gKiBNYXRjaGVzIHRoZSByYXcgdGV4dCBlbGVtZW50cy5cbiAqXG4gKiBDb21tZW50cyBhcmUgbm90IHBhcnNlZCB3aXRoaW4gcmF3IHRleHQgZWxlbWVudHMsIHNvIHdlIG5lZWQgdG8gc2VhcmNoIHRoZWlyXG4gKiB0ZXh0IGNvbnRlbnQgZm9yIG1hcmtlciBzdHJpbmdzLlxuICovXG5jb25zdCByYXdUZXh0RWxlbWVudCA9IC9eKD86c2NyaXB0fHN0eWxlfHRleHRhcmVhfHRpdGxlKSQvaTtcbi8qKiBUZW1wbGF0ZVJlc3VsdCB0eXBlcyAqL1xuY29uc3QgSFRNTF9SRVNVTFQgPSAxO1xuY29uc3QgU1ZHX1JFU1VMVCA9IDI7XG4vLyBUZW1wbGF0ZVBhcnQgdHlwZXNcbi8vIElNUE9SVEFOVDogdGhlc2UgbXVzdCBtYXRjaCB0aGUgdmFsdWVzIGluIFBhcnRUeXBlXG5jb25zdCBBVFRSSUJVVEVfUEFSVCA9IDE7XG5jb25zdCBDSElMRF9QQVJUID0gMjtcbmNvbnN0IFBST1BFUlRZX1BBUlQgPSAzO1xuY29uc3QgQk9PTEVBTl9BVFRSSUJVVEVfUEFSVCA9IDQ7XG5jb25zdCBFVkVOVF9QQVJUID0gNTtcbmNvbnN0IEVMRU1FTlRfUEFSVCA9IDY7XG5jb25zdCBDT01NRU5UX1BBUlQgPSA3O1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBUZW1wbGF0ZVJlc3VsdCB3aXRoXG4gKiB0aGUgZ2l2ZW4gcmVzdWx0IHR5cGUuXG4gKi9cbmNvbnN0IHRhZyA9ICh0eXBlKSA9PiAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiB7XG4gICAgLy8gV2FybiBhZ2FpbnN0IHRlbXBsYXRlcyBvY3RhbCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIHJhdGhlciB0aGFuIGluIHJlbmRlciBzbyB0aGF0IHRoZSB3YXJuaW5nIGlzIGNsb3NlciB0byB0aGVcbiAgICAvLyB0ZW1wbGF0ZSBkZWZpbml0aW9uLlxuICAgIGlmIChERVZfTU9ERSAmJiBzdHJpbmdzLnNvbWUoKHMpID0+IHMgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTb21lIHRlbXBsYXRlIHN0cmluZ3MgYXJlIHVuZGVmaW5lZC5cXG4nICtcbiAgICAgICAgICAgICdUaGlzIGlzIHByb2JhYmx5IGNhdXNlZCBieSBpbGxlZ2FsIG9jdGFsIGVzY2FwZSBzZXF1ZW5jZXMuJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIFsnXyRsaXRUeXBlJCddOiB0eXBlLFxuICAgICAgICBzdHJpbmdzLFxuICAgICAgICB2YWx1ZXMsXG4gICAgfTtcbn07XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBoZWFkZXIgPSAodGl0bGU6IHN0cmluZykgPT4gaHRtbGA8aDE+JHt0aXRsZX08L2gxPmA7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYGh0bWxgIHRhZyByZXR1cm5zIGEgZGVzY3JpcHRpb24gb2YgdGhlIERPTSB0byByZW5kZXIgYXMgYSB2YWx1ZS4gSXQgaXNcbiAqIGxhenksIG1lYW5pbmcgbm8gd29yayBpcyBkb25lIHVudGlsIHRoZSB0ZW1wbGF0ZSBpcyByZW5kZXJlZC4gV2hlbiByZW5kZXJpbmcsXG4gKiBpZiBhIHRlbXBsYXRlIGNvbWVzIGZyb20gdGhlIHNhbWUgZXhwcmVzc2lvbiBhcyBhIHByZXZpb3VzbHkgcmVuZGVyZWQgcmVzdWx0LFxuICogaXQncyBlZmZpY2llbnRseSB1cGRhdGVkIGluc3RlYWQgb2YgcmVwbGFjZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gdGFnKEhUTUxfUkVTVUxUKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIGZyYWdtZW50IHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgcmVjdCA9IHN2Z2A8cmVjdCB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIj48L3JlY3Q+YDtcbiAqXG4gKiBjb25zdCBteUltYWdlID0gaHRtbGBcbiAqICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICogICAgICR7cmVjdH1cbiAqICAgPC9zdmc+YDtcbiAqIGBgYFxuICpcbiAqIFRoZSBgc3ZnYCAqdGFnIGZ1bmN0aW9uKiBzaG91bGQgb25seSBiZSB1c2VkIGZvciBTVkcgZnJhZ21lbnRzLCBvciBlbGVtZW50c1xuICogdGhhdCB3b3VsZCBiZSBjb250YWluZWQgKippbnNpZGUqKiBhbiBgPHN2Zz5gIEhUTUwgZWxlbWVudC4gQSBjb21tb24gZXJyb3IgaXNcbiAqIHBsYWNpbmcgYW4gYDxzdmc+YCAqZWxlbWVudCogaW4gYSB0ZW1wbGF0ZSB0YWdnZWQgd2l0aCB0aGUgYHN2Z2AgdGFnXG4gKiBmdW5jdGlvbi4gVGhlIGA8c3ZnPmAgZWxlbWVudCBpcyBhbiBIVE1MIGVsZW1lbnQgYW5kIHNob3VsZCBiZSB1c2VkIHdpdGhpbiBhXG4gKiB0ZW1wbGF0ZSB0YWdnZWQgd2l0aCB0aGUge0BsaW5rY29kZSBodG1sfSB0YWcgZnVuY3Rpb24uXG4gKlxuICogSW4gTGl0RWxlbWVudCB1c2FnZSwgaXQncyBpbnZhbGlkIHRvIHJldHVybiBhbiBTVkcgZnJhZ21lbnQgZnJvbSB0aGVcbiAqIGByZW5kZXIoKWAgbWV0aG9kLCBhcyB0aGUgU1ZHIGZyYWdtZW50IHdpbGwgYmUgY29udGFpbmVkIHdpdGhpbiB0aGUgZWxlbWVudCdzXG4gKiBzaGFkb3cgcm9vdCBhbmQgdGh1cyBjYW5ub3QgYmUgdXNlZCB3aXRoaW4gYW4gYDxzdmc+YCBIVE1MIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSB0YWcoU1ZHX1JFU1VMVCk7XG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIHRoYXQgYSB2YWx1ZSB3YXMgaGFuZGxlZCBieSBhIGRpcmVjdGl2ZSBhbmRcbiAqIHNob3VsZCBub3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuICovXG5leHBvcnQgY29uc3Qgbm9DaGFuZ2UgPSBTeW1ib2wuZm9yKCdsaXQtbm9DaGFuZ2UnKTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBDaGlsZFBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGJ1dHRvbiA9IGh0bWxgJHtcbiAqICB1c2VyLmlzQWRtaW5cbiAqICAgID8gaHRtbGA8YnV0dG9uPkRFTEVURTwvYnV0dG9uPmBcbiAqICAgIDogbm90aGluZ1xuICogfWA7XG4gKiBgYGBcbiAqXG4gKiBQcmVmZXIgdXNpbmcgYG5vdGhpbmdgIG92ZXIgb3RoZXIgZmFsc3kgdmFsdWVzIGFzIGl0IHByb3ZpZGVzIGEgY29uc2lzdGVudFxuICogYmVoYXZpb3IgYmV0d2VlbiB2YXJpb3VzIGV4cHJlc3Npb24gYmluZGluZyBjb250ZXh0cy5cbiAqXG4gKiBJbiBjaGlsZCBleHByZXNzaW9ucywgYHVuZGVmaW5lZGAsIGBudWxsYCwgYCcnYCwgYW5kIGBub3RoaW5nYCBhbGwgYmVoYXZlIHRoZVxuICogc2FtZSBhbmQgcmVuZGVyIG5vIG5vZGVzLiBJbiBhdHRyaWJ1dGUgZXhwcmVzc2lvbnMsIGBub3RoaW5nYCBfcmVtb3Zlc18gdGhlXG4gKiBhdHRyaWJ1dGUsIHdoaWxlIGB1bmRlZmluZWRgIGFuZCBgbnVsbGAgd2lsbCByZW5kZXIgYW4gZW1wdHkgc3RyaW5nLiBJblxuICogcHJvcGVydHkgZXhwcmVzc2lvbnMgYG5vdGhpbmdgIGJlY29tZXMgYHVuZGVmaW5lZGAuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0gU3ltYm9sLmZvcignbGl0LW5vdGhpbmcnKTtcbi8qKlxuICogVGhlIGNhY2hlIG9mIHByZXBhcmVkIHRlbXBsYXRlcywga2V5ZWQgYnkgdGhlIHRhZ2dlZCBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICogYW5kIF9ub3RfIGFjY291bnRpbmcgZm9yIHRoZSBzcGVjaWZpYyB0ZW1wbGF0ZSB0YWcgdXNlZC4gVGhpcyBtZWFucyB0aGF0XG4gKiB0ZW1wbGF0ZSB0YWdzIGNhbm5vdCBiZSBkeW5hbWljIC0gdGhlIG11c3Qgc3RhdGljYWxseSBiZSBvbmUgb2YgaHRtbCwgc3ZnLFxuICogb3IgYXR0ci4gVGhpcyByZXN0cmljdGlvbiBzaW1wbGlmaWVzIHRoZSBjYWNoZSBsb29rdXAsIHdoaWNoIGlzIG9uIHRoZSBob3RcbiAqIHBhdGggZm9yIHJlbmRlcmluZy5cbiAqL1xuY29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB3YWxrZXIgPSBkLmNyZWF0ZVRyZWVXYWxrZXIoZCwgMTI5IC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfSAqLywgbnVsbCwgZmFsc2UpO1xubGV0IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5vb3BTYW5pdGl6ZXI7XG5mdW5jdGlvbiB0cnVzdEZyb21UZW1wbGF0ZVN0cmluZyh0c2EsIHN0cmluZ0Zyb21UU0EpIHtcbiAgICAvLyBBIHNlY3VyaXR5IGNoZWNrIHRvIHByZXZlbnQgc3Bvb2Zpbmcgb2YgTGl0IHRlbXBsYXRlIHJlc3VsdHMuXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSwgd2UgbWF5IGJlIGFibGUgdG8gcmVwbGFjZSB0aGlzIHdpdGggQXJyYXkuaXNUZW1wbGF0ZU9iamVjdCxcbiAgICAvLyB0aG91Z2ggd2UgbWlnaHQgbmVlZCB0byBtYWtlIHRoYXQgY2hlY2sgaW5zaWRlIG9mIHRoZSBodG1sIGFuZCBzdmdcbiAgICAvLyBmdW5jdGlvbnMsIGJlY2F1c2UgcHJlY29tcGlsZWQgdGVtcGxhdGVzIGRvbid0IGNvbWUgaW4gYXNcbiAgICAvLyBUZW1wbGF0ZVN0cmluZ0FycmF5IG9iamVjdHMuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRzYSkgfHwgIXRzYS5oYXNPd25Qcm9wZXJ0eSgncmF3JykpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnaW52YWxpZCB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5JztcbiAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gYFxuICAgICAgICAgIEludGVybmFsIEVycm9yOiBleHBlY3RlZCB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGJlIGFuIGFycmF5XG4gICAgICAgICAgd2l0aCBhICdyYXcnIGZpZWxkLiBGYWtpbmcgYSB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5IGJ5XG4gICAgICAgICAgY2FsbGluZyBodG1sIG9yIHN2ZyBsaWtlIGFuIG9yZGluYXJ5IGZ1bmN0aW9uIGlzIGVmZmVjdGl2ZWx5XG4gICAgICAgICAgdGhlIHNhbWUgYXMgY2FsbGluZyB1bnNhZmVIdG1sIGFuZCBjYW4gbGVhZCB0byBtYWpvciBzZWN1cml0eVxuICAgICAgICAgIGlzc3VlcywgZS5nLiBvcGVuaW5nIHlvdXIgY29kZSB1cCB0byBYU1MgYXR0YWNrcy5cbiAgICAgICAgICBJZiB5b3UncmUgdXNpbmcgdGhlIGh0bWwgb3Igc3ZnIHRhZ2dlZCB0ZW1wbGF0ZSBmdW5jdGlvbnMgbm9ybWFsbHlcbiAgICAgICAgICBhbmQgc3RpbGwgc2VlaW5nIHRoaXMgZXJyb3IsIHBsZWFzZSBmaWxlIGEgYnVnIGF0XG4gICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzL25ldz90ZW1wbGF0ZT1idWdfcmVwb3J0Lm1kXG4gICAgICAgICAgYW5kIGluY2x1ZGUgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBidWlsZCB0b29saW5nLCBpZiBhbnkuXG4gICAgICAgIGBcbiAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcbiAqL2csICdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBwb2xpY3kgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHBvbGljeS5jcmVhdGVIVE1MKHN0cmluZ0Zyb21UU0EpXG4gICAgICAgIDogc3RyaW5nRnJvbVRTQTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBIVE1MIHN0cmluZyBmb3IgdGhlIGdpdmVuIFRlbXBsYXRlU3RyaW5nc0FycmF5IGFuZCByZXN1bHQgdHlwZVxuICogKEhUTUwgb3IgU1ZHKSwgYWxvbmcgd2l0aCB0aGUgY2FzZS1zZW5zaXRpdmUgYm91bmQgYXR0cmlidXRlIG5hbWVzIGluXG4gKiB0ZW1wbGF0ZSBvcmRlci4gVGhlIEhUTUwgY29udGFpbnMgY29tbWVudCBtYXJrZXJzIGRlbm90aW5nIHRoZSBgQ2hpbGRQYXJ0YHNcbiAqIGFuZCBzdWZmaXhlcyBvbiBib3VuZCBhdHRyaWJ1dGVzIGRlbm90aW5nIHRoZSBgQXR0cmlidXRlUGFydHNgLlxuICpcbiAqIEBwYXJhbSBzdHJpbmdzIHRlbXBsYXRlIHN0cmluZ3MgYXJyYXlcbiAqIEBwYXJhbSB0eXBlIEhUTUwgb3IgU1ZHXG4gKiBAcmV0dXJuIEFycmF5IGNvbnRhaW5pbmcgYFtodG1sLCBhdHRyTmFtZXNdYCAoYXJyYXkgcmV0dXJuZWQgZm9yIHRlcnNlbmVzcyxcbiAqICAgICB0byBhdm9pZCBvYmplY3QgZmllbGRzIHNpbmNlIHRoaXMgY29kZSBpcyBzaGFyZWQgd2l0aCBub24tbWluaWZpZWQgU1NSXG4gKiAgICAgY29kZSlcbiAqL1xuY29uc3QgZ2V0VGVtcGxhdGVIdG1sID0gKHN0cmluZ3MsIHR5cGUpID0+IHtcbiAgICAvLyBJbnNlcnQgbWFrZXJzIGludG8gdGhlIHRlbXBsYXRlIEhUTUwgdG8gcmVwcmVzZW50IHRoZSBwb3NpdGlvbiBvZlxuICAgIC8vIGJpbmRpbmdzLiBUaGUgZm9sbG93aW5nIGNvZGUgc2NhbnMgdGhlIHRlbXBsYXRlIHN0cmluZ3MgdG8gZGV0ZXJtaW5lIHRoZVxuICAgIC8vIHN5bnRhY3RpYyBwb3NpdGlvbiBvZiB0aGUgYmluZGluZ3MuIFRoZXkgY2FuIGJlIGluIHRleHQgcG9zaXRpb24sIHdoZXJlXG4gICAgLy8gd2UgaW5zZXJ0IGFuIEhUTUwgY29tbWVudCwgYXR0cmlidXRlIHZhbHVlIHBvc2l0aW9uLCB3aGVyZSB3ZSBpbnNlcnQgYVxuICAgIC8vIHNlbnRpbmVsIHN0cmluZyBhbmQgcmUtd3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLCBvciBpbnNpZGUgYSB0YWcgd2hlcmVcbiAgICAvLyB3ZSBpbnNlcnQgdGhlIHNlbnRpbmVsIHN0cmluZy5cbiAgICBjb25zdCBsID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgIC8vIFN0b3JlcyB0aGUgY2FzZS1zZW5zaXRpdmUgYm91bmQgYXR0cmlidXRlIG5hbWVzIGluIHRoZSBvcmRlciBvZiB0aGVpclxuICAgIC8vIHBhcnRzLiBFbGVtZW50UGFydHMgYXJlIGFsc28gcmVmbGVjdGVkIGluIHRoaXMgYXJyYXkgYXMgdW5kZWZpbmVkXG4gICAgLy8gcmF0aGVyIHRoYW4gYSBzdHJpbmcsIHRvIGRpc2FtYmlndWF0ZSBmcm9tIGF0dHJpYnV0ZSBiaW5kaW5ncy5cbiAgICBjb25zdCBhdHRyTmFtZXMgPSBbXTtcbiAgICBsZXQgaHRtbCA9IHR5cGUgPT09IFNWR19SRVNVTFQgPyAnPHN2Zz4nIDogJyc7XG4gICAgLy8gV2hlbiB3ZSdyZSBpbnNpZGUgYSByYXcgdGV4dCB0YWcgKG5vdCBpdCdzIHRleHQgY29udGVudCksIHRoZSByZWdleFxuICAgIC8vIHdpbGwgc3RpbGwgYmUgdGFnUmVnZXggc28gd2UgY2FuIGZpbmQgYXR0cmlidXRlcywgYnV0IHdpbGwgc3dpdGNoIHRvXG4gICAgLy8gdGhpcyByZWdleCB3aGVuIHRoZSB0YWcgZW5kcy5cbiAgICBsZXQgcmF3VGV4dEVuZFJlZ2V4O1xuICAgIC8vIFRoZSBjdXJyZW50IHBhcnNpbmcgc3RhdGUsIHJlcHJlc2VudGVkIGFzIGEgcmVmZXJlbmNlIHRvIG9uZSBvZiB0aGVcbiAgICAvLyByZWdleGVzXG4gICAgbGV0IHJlZ2V4ID0gdGV4dEVuZFJlZ2V4O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHMgPSBzdHJpbmdzW2ldO1xuICAgICAgICAvLyBUaGUgaW5kZXggb2YgdGhlIGVuZCBvZiB0aGUgbGFzdCBhdHRyaWJ1dGUgbmFtZS4gV2hlbiB0aGlzIGlzXG4gICAgICAgIC8vIHBvc2l0aXZlIGF0IGVuZCBvZiBhIHN0cmluZywgaXQgbWVhbnMgd2UncmUgaW4gYW4gYXR0cmlidXRlIHZhbHVlXG4gICAgICAgIC8vIHBvc2l0aW9uIGFuZCBuZWVkIHRvIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAgICAvLyBXZSBhbHNvIHVzZSBhIHNwZWNpYWwgdmFsdWUgb2YgLTIgdG8gaW5kaWNhdGUgdGhhdCB3ZSBlbmNvdW50ZXJlZFxuICAgICAgICAvLyB0aGUgZW5kIG9mIGEgc3RyaW5nIGluIGF0dHJpYnV0ZSBuYW1lIHBvc2l0aW9uLlxuICAgICAgICBsZXQgYXR0ck5hbWVFbmRJbmRleCA9IC0xO1xuICAgICAgICBsZXQgYXR0ck5hbWU7XG4gICAgICAgIGxldCBsYXN0SW5kZXggPSAwO1xuICAgICAgICBsZXQgbWF0Y2g7XG4gICAgICAgIC8vIFRoZSBjb25kaXRpb25zIGluIHRoaXMgbG9vcCBoYW5kbGUgdGhlIGN1cnJlbnQgcGFyc2Ugc3RhdGUsIGFuZCB0aGVcbiAgICAgICAgLy8gYXNzaWdubWVudHMgdG8gdGhlIGByZWdleGAgdmFyaWFibGUgYXJlIHRoZSBzdGF0ZSB0cmFuc2l0aW9ucy5cbiAgICAgICAgd2hpbGUgKGxhc3RJbmRleCA8IHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2Ugc3RhcnQgc2VhcmNoaW5nIGZyb20gd2hlcmUgd2UgcHJldmlvdXNseSBsZWZ0IG9mZlxuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgICAgbWF0Y2ggPSByZWdleC5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0SW5kZXggPSByZWdleC5sYXN0SW5kZXg7XG4gICAgICAgICAgICBpZiAocmVnZXggPT09IHRleHRFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtDT01NRU5UX1NUQVJUXSA9PT0gJyEtLScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSBjb21tZW50RW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW0NPTU1FTlRfU1RBUlRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Ugc3RhcnRlZCBhIHdlaXJkIGNvbW1lbnQsIGxpa2UgPC97XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gY29tbWVudDJFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbVEFHX05BTUVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhd1RleHRFbGVtZW50LnRlc3QobWF0Y2hbVEFHX05BTUVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVjb3JkIGlmIHdlIGVuY291bnRlciBhIHJhdy10ZXh0IGVsZW1lbnQuIFdlJ2xsIHN3aXRjaCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyByZWdleCBhdCB0aGUgZW5kIG9mIHRoZSB0YWcuXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdUZXh0RW5kUmVnZXggPSBuZXcgUmVnRXhwKGA8LyR7bWF0Y2hbVEFHX05BTUVdfWAsICdnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbRFlOQU1JQ19UQUdfTkFNRV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmluZGluZ3MgaW4gdGFnIG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIHN0YXRpYyB0ZW1wbGF0ZXMgaW5zdGVhZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlZSBodHRwczovL2xpdC5kZXYvZG9jcy90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMvI3N0YXRpYy1leHByZXNzaW9ucycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVnZXggPT09IHRhZ0VuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW0VOVElSRV9NQVRDSF0gPT09ICc+Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbmQgb2YgYSB0YWcuIElmIHdlIGhhZCBzdGFydGVkIGEgcmF3LXRleHQgZWxlbWVudCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVnZXhcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSByYXdUZXh0RW5kUmVnZXggIT09IG51bGwgJiYgcmF3VGV4dEVuZFJlZ2V4ICE9PSB2b2lkIDAgPyByYXdUZXh0RW5kUmVnZXggOiB0ZXh0RW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIG1heSBiZSBlbmRpbmcgYW4gdW5xdW90ZWQgYXR0cmlidXRlIHZhbHVlLCBzbyBtYWtlIHN1cmUgd2VcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgYW55IHBlbmRpbmcgYXR0ck5hbWVFbmRJbmRleFxuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW0FUVFJJQlVURV9OQU1FXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEF0dHJpYnV0ZSBuYW1lIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lRW5kSW5kZXggPSAtMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lRW5kSW5kZXggPSByZWdleC5sYXN0SW5kZXggLSBtYXRjaFtTUEFDRVNfQU5EX0VRVUFMU10ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZSA9IG1hdGNoW0FUVFJJQlVURV9OQU1FXTtcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbUVVPVEVfQ0hBUl0gPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGFnRW5kUmVnZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1hdGNoW1FVT1RFX0NIQVJdID09PSAnXCInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVnZXggPT09IGNvbW1lbnRFbmRSZWdleCB8fCByZWdleCA9PT0gY29tbWVudDJFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGV4dEVuZFJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTm90IG9uZSBvZiB0aGUgZml2ZSBzdGF0ZSByZWdleGVzLCBzbyBpdCBtdXN0IGJlIHRoZSBkeW5hbWljYWxseVxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZWQgcmF3IHRleHQgcmVnZXggYW5kIHdlJ3JlIGF0IHRoZSBjbG9zZSBvZiB0aGF0IGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgICAgICByYXdUZXh0RW5kUmVnZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgYXR0ck5hbWVFbmRJbmRleCwgd2hpY2ggaW5kaWNhdGVzIHRoYXQgd2Ugc2hvdWxkXG4gICAgICAgICAgICAvLyByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSwgYXNzZXJ0IHRoYXQgd2UncmUgaW4gYSB2YWxpZCBhdHRyaWJ1dGVcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uIC0gZWl0aGVyIGluIGEgdGFnLCBvciBhIHF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChhdHRyTmFtZUVuZEluZGV4ID09PSAtMSB8fFxuICAgICAgICAgICAgICAgIHJlZ2V4ID09PSB0YWdFbmRSZWdleCB8fFxuICAgICAgICAgICAgICAgIHJlZ2V4ID09PSBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCB8fFxuICAgICAgICAgICAgICAgIHJlZ2V4ID09PSBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCwgJ3VuZXhwZWN0ZWQgcGFyc2Ugc3RhdGUgQicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgZm91ciBjYXNlczpcbiAgICAgICAgLy8gIDEuIFdlJ3JlIGluIHRleHQgcG9zaXRpb24sIGFuZCBub3QgaW4gYSByYXcgdGV4dCBlbGVtZW50XG4gICAgICAgIC8vICAgICAocmVnZXggPT09IHRleHRFbmRSZWdleCk6IGluc2VydCBhIGNvbW1lbnQgbWFya2VyLlxuICAgICAgICAvLyAgMi4gV2UgaGF2ZSBhIG5vbi1uZWdhdGl2ZSBhdHRyTmFtZUVuZEluZGV4IHdoaWNoIG1lYW5zIHdlIG5lZWQgdG9cbiAgICAgICAgLy8gICAgIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lIHRvIGFkZCBhIGJvdW5kIGF0dHJpYnV0ZSBzdWZmaXguXG4gICAgICAgIC8vICAzLiBXZSdyZSBhdCB0aGUgbm9uLWZpcnN0IGJpbmRpbmcgaW4gYSBtdWx0aS1iaW5kaW5nIGF0dHJpYnV0ZSwgdXNlIGFcbiAgICAgICAgLy8gICAgIHBsYWluIG1hcmtlci5cbiAgICAgICAgLy8gIDQuIFdlJ3JlIHNvbWV3aGVyZSBlbHNlIGluc2lkZSB0aGUgdGFnLiBJZiB3ZSdyZSBpbiBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAvLyAgICAgcG9zaXRpb24gKGF0dHJOYW1lRW5kSW5kZXggPT09IC0yKSwgYWRkIGEgc2VxdWVudGlhbCBzdWZmaXggdG9cbiAgICAgICAgLy8gICAgIGdlbmVyYXRlIGEgdW5pcXVlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAgICAvLyBEZXRlY3QgYSBiaW5kaW5nIG5leHQgdG8gc2VsZi1jbG9zaW5nIHRhZyBlbmQgYW5kIGluc2VydCBhIHNwYWNlIHRvXG4gICAgICAgIC8vIHNlcGFyYXRlIHRoZSBtYXJrZXIgZnJvbSB0aGUgdGFnIGVuZDpcbiAgICAgICAgY29uc3QgZW5kID0gcmVnZXggPT09IHRhZ0VuZFJlZ2V4ICYmIHN0cmluZ3NbaSArIDFdLnN0YXJ0c1dpdGgoJy8+JykgPyAnICcgOiAnJztcbiAgICAgICAgaHRtbCArPVxuICAgICAgICAgICAgcmVnZXggPT09IHRleHRFbmRSZWdleFxuICAgICAgICAgICAgICAgID8gcyArIG5vZGVNYXJrZXJcbiAgICAgICAgICAgICAgICA6IGF0dHJOYW1lRW5kSW5kZXggPj0gMFxuICAgICAgICAgICAgICAgICAgICA/IChhdHRyTmFtZXMucHVzaChhdHRyTmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWNlKDAsIGF0dHJOYW1lRW5kSW5kZXgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3VuZEF0dHJpYnV0ZVN1ZmZpeCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGljZShhdHRyTmFtZUVuZEluZGV4KSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFxuICAgICAgICAgICAgICAgICAgICA6IHMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChhdHRyTmFtZUVuZEluZGV4ID09PSAtMiA/IChhdHRyTmFtZXMucHVzaCh1bmRlZmluZWQpLCBpKSA6IGVuZCk7XG4gICAgfVxuICAgIGNvbnN0IGh0bWxSZXN1bHQgPSBodG1sICsgKHN0cmluZ3NbbF0gfHwgJzw/PicpICsgKHR5cGUgPT09IFNWR19SRVNVTFQgPyAnPC9zdmc+JyA6ICcnKTtcbiAgICAvLyBSZXR1cm5lZCBhcyBhbiBhcnJheSBmb3IgdGVyc2VuZXNzXG4gICAgcmV0dXJuIFt0cnVzdEZyb21UZW1wbGF0ZVN0cmluZyhzdHJpbmdzLCBodG1sUmVzdWx0KSwgYXR0ck5hbWVzXTtcbn07XG5jbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICB7IHN0cmluZ3MsIFsnXyRsaXRUeXBlJCddOiB0eXBlIH0sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICBsZXQgbm9kZTtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBhdHRyTmFtZUluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgcGFydENvdW50ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMucGFydHM7XG4gICAgICAgIC8vIENyZWF0ZSB0ZW1wbGF0ZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IFtodG1sLCBhdHRyTmFtZXNdID0gZ2V0VGVtcGxhdGVIdG1sKHN0cmluZ3MsIHR5cGUpO1xuICAgICAgICB0aGlzLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudChodG1sLCBvcHRpb25zKTtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gdGhpcy5lbC5jb250ZW50O1xuICAgICAgICAvLyBSZXBhcmVudCBTVkcgbm9kZXMgaW50byB0ZW1wbGF0ZSByb290XG4gICAgICAgIGlmICh0eXBlID09PSBTVkdfUkVTVUxUKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5lbC5jb250ZW50O1xuICAgICAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHN2Z0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZCguLi5zdmdFbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdhbGsgdGhlIHRlbXBsYXRlIHRvIGZpbmQgYmluZGluZyBtYXJrZXJzIGFuZCBjcmVhdGUgVGVtcGxhdGVQYXJ0c1xuICAgICAgICB3aGlsZSAoKG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkgIT09IG51bGwgJiYgcGFydHMubGVuZ3RoIDwgcGFydENvdW50KSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSBub2RlLmxvY2FsTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FybiBpZiBgdGV4dGFyZWFgIGluY2x1ZGVzIGFuIGV4cHJlc3Npb24gYW5kIHRocm93IGlmIGB0ZW1wbGF0ZWBcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lcyBzaW5jZSB0aGVzZSBhcmUgbm90IHN1cHBvcnRlZC4gV2UgZG8gdGhpcyBieSBjaGVja2luZ1xuICAgICAgICAgICAgICAgICAgICAvLyBpbm5lckhUTUwgZm9yIGFueXRoaW5nIHRoYXQgbG9va3MgbGlrZSBhIG1hcmtlci4gVGhpcyBjYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2VzIGxpa2UgYmluZGluZ3MgaW4gdGV4dGFyZWEgdGhlcmUgbWFya2VycyB0dXJuIGludG8gdGV4dCBub2Rlcy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eKD86dGV4dGFyZWF8dGVtcGxhdGUpJC9pLnRlc3QodGFnKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwuaW5jbHVkZXMobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IGBFeHByZXNzaW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbnNpZGUgXFxgJHt0YWd9XFxgIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBlbGVtZW50cy4gU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvZXhwcmVzc2lvbi1pbi0ke3RhZ30gZm9yIG1vcmUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZygnJywgbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGZvciBhdHRlbXB0ZWQgZHluYW1pYyB0YWcgbmFtZXMsIHdlIGRvbid0XG4gICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBiaW5kaW5nSW5kZXgsIGFuZCBpdCdsbCBiZSBvZmYgYnkgMSBpbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGFuZCBvZmYgYnkgdHdvIGFmdGVyIGl0LlxuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkZWZlciByZW1vdmluZyBib3VuZCBhdHRyaWJ1dGVzIGJlY2F1c2Ugb24gSUUgd2UgbWlnaHQgbm90IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGluZyBhdHRyaWJ1dGVzIGluIHRoZWlyIHRlbXBsYXRlIG9yZGVyLCBhbmQgd291bGQgc29tZXRpbWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBhdHRyaWJ1dGUgdGhhdCB3ZSBzdGlsbCBuZWVkIHRvIGNyZWF0ZSBhIHBhcnQgZm9yLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyc1RvUmVtb3ZlID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBub2RlLmdldEF0dHJpYnV0ZU5hbWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBuYW1lYCBpcyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlJ3JlIGl0ZXJhdGluZyBvdmVyLCBidXQgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBfbmVjZXNzYXJpbHlfIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2Ugd2lsbCBjcmVhdGUgYSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IuIFRoZXkgY2FuIGJlIGRpZmZlcmVudCBpbiBicm93c2VycyB0aGF0IGRvbid0IGl0ZXJhdGUgb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gc291cmNlIG9yZGVyLiBJbiB0aGF0IGNhc2UgdGhlIGF0dHJOYW1lcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgdGhlIGF0dHJpYnV0ZSBuYW1lIHdlJ2xsIHByb2Nlc3MgbmV4dC4gV2Ugb25seSBuZWVkIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlIG5hbWUgaGVyZSB0byBrbm93IGlmIHdlIHNob3VsZCBwcm9jZXNzIGEgYm91bmQgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbiB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChib3VuZEF0dHJpYnV0ZVN1ZmZpeCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnN0YXJ0c1dpdGgobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxOYW1lID0gYXR0ck5hbWVzW2F0dHJOYW1lSW5kZXgrK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnNUb1JlbW92ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFsTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvd2VyY2FzZSBmb3IgY2FzZS1zZW5zaXRpdmUgU1ZHIGF0dHJpYnV0ZXMgbGlrZSB2aWV3Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUocmVhbE5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IHZhbHVlLnNwbGl0KG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG0gPSAvKFsuP0BdKT8oLiopLy5leGVjKHJlYWxOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBVFRSSUJVVEVfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogc3RhdGljcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0b3I6IG1bMV0gPT09ICcuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gUHJvcGVydHlQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnPydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCb29sZWFuQXR0cmlidXRlUGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1bMV0gPT09ICdAJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBFdmVudFBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQXR0cmlidXRlUGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEVMRU1FTlRfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYXR0cnNUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGJlbmNobWFyayB0aGUgcmVnZXggYWdhaW5zdCB0ZXN0aW5nIGZvciBlYWNoXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIDMgcmF3IHRleHQgZWxlbWVudCBuYW1lcy5cbiAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChub2RlLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciByYXcgdGV4dCBlbGVtZW50cyB3ZSBuZWVkIHRvIHNwbGl0IHRoZSB0ZXh0IGNvbnRlbnQgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gbWFya2VycywgY3JlYXRlIGEgVGV4dCBub2RlIGZvciBlYWNoIHNlZ21lbnQsIGFuZCBjcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBUZW1wbGF0ZVBhcnQgZm9yIGVhY2ggbWFya2VyLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gbm9kZS50ZXh0Q29udGVudC5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdHJ1c3RlZFR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIGVtcHR5IHRleHQgbm9kZXMgYXMgbWFya2VycyBiZWNhdXNlIHRoZXkncmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbGl6ZWQgd2hlbiBjbG9uaW5nIGluIElFIChjb3VsZCBzaW1wbGlmeSB3aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRSBpcyBubyBsb25nZXIgc3VwcG9ydGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kKHN0cmluZ3NbaV0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWxrIHBhc3QgdGhlIG1hcmtlciBub2RlIHdlIGp1c3QgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6ICsrbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSBiZWNhdXNlIHRoaXMgbWFya2VyIGlzIGFkZGVkIGFmdGVyIHRoZSB3YWxrZXIncyBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLCBpdCB3aWxsIGJlIHdhbGtlZCB0byBpbiB0aGUgb3V0ZXIgbG9vcCAoYW5kIGlnbm9yZWQpLCBzb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBhZGp1c3Qgbm9kZUluZGV4IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kKHN0cmluZ3NbbGFzdEluZGV4XSwgY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IG1hcmtlck1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0eXBlOiBDSElMRF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChpID0gbm9kZS5kYXRhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBub2RlIGhhcyBhIGJpbmRpbmcgbWFya2VyIGluc2lkZSwgbWFrZSBhbiBpbmFjdGl2ZSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ09NTUVOVF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSBtYXJrZXIubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGNvdWxkIHNldCB3YWxrZXIuY3VycmVudE5vZGUgdG8gYW5vdGhlciBub2RlIGhlcmUgdG8gcHJldmVudCBhIG1lbW9yeVxuICAgICAgICAvLyBsZWFrLCBidXQgZXZlcnkgdGltZSB3ZSBwcmVwYXJlIGEgdGVtcGxhdGUsIHdlIGltbWVkaWF0ZWx5IHJlbmRlciBpdFxuICAgICAgICAvLyBhbmQgcmUtdXNlIHRoZSB3YWxrZXIgaW4gbmV3IFRlbXBsYXRlSW5zdGFuY2UuX2Nsb25lKCkuXG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgcHJlcCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcyxcbiAgICAgICAgICAgIGNsb25hYmxlVGVtcGxhdGU6IHRoaXMuZWwsXG4gICAgICAgICAgICBwYXJ0czogdGhpcy5wYXJ0cyxcbiAgICAgICAgICAgIHN0cmluZ3MsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBvbHlmaWxsU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KGh0bWwsIF9vcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCB2YWx1ZSwgcGFyZW50ID0gcGFydCwgYXR0cmlidXRlSW5kZXgpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICB2YXIgX2Q7XG4gICAgLy8gQmFpbCBlYXJseSBpZiB0aGUgdmFsdWUgaXMgZXhwbGljaXRseSBub0NoYW5nZS4gTm90ZSwgdGhpcyBtZWFucyBhbnlcbiAgICAvLyBuZXN0ZWQgZGlyZWN0aXZlIGlzIHN0aWxsIGF0dGFjaGVkIGFuZCBpcyBub3QgcnVuLlxuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBsZXQgY3VycmVudERpcmVjdGl2ZSA9IGF0dHJpYnV0ZUluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyAoX2EgPSBwYXJlbnQuX19kaXJlY3RpdmVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbYXR0cmlidXRlSW5kZXhdXG4gICAgICAgIDogcGFyZW50Ll9fZGlyZWN0aXZlO1xuICAgIGNvbnN0IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9IGlzUHJpbWl0aXZlKHZhbHVlKVxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgICAgICB2YWx1ZVsnXyRsaXREaXJlY3RpdmUkJ107XG4gICAgaWYgKChjdXJyZW50RGlyZWN0aXZlID09PSBudWxsIHx8IGN1cnJlbnREaXJlY3RpdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnREaXJlY3RpdmUuY29uc3RydWN0b3IpICE9PSBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IpIHtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgKF9iID0gY3VycmVudERpcmVjdGl2ZSA9PT0gbnVsbCB8fCBjdXJyZW50RGlyZWN0aXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RGlyZWN0aXZlWydfJG5vdGlmeURpcmVjdGl2ZUNvbm5lY3Rpb25DaGFuZ2VkJ10pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGN1cnJlbnREaXJlY3RpdmUsIGZhbHNlKTtcbiAgICAgICAgaWYgKG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZSA9IG5ldyBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IocGFydCk7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlLl8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgKChfYyA9IChfZCA9IHBhcmVudCkuX19kaXJlY3RpdmVzKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAoX2QuX19kaXJlY3RpdmVzID0gW10pKVthdHRyaWJ1dGVJbmRleF0gPVxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuX19kaXJlY3RpdmUgPSBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50RGlyZWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIGN1cnJlbnREaXJlY3RpdmUuXyRyZXNvbHZlKHBhcnQsIHZhbHVlLnZhbHVlcyksIGN1cnJlbnREaXJlY3RpdmUsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIGluc3RhbmNlIG9mIGEgVGVtcGxhdGUuIEhvbGRzIHJlZmVyZW5jZXMgdG8gdGhlIFBhcnRzIHVzZWQgdG9cbiAqIHVwZGF0ZSB0aGUgdGVtcGxhdGUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fJHBhcnRzID0gW107XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyR0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICAvLyBDYWxsZWQgYnkgQ2hpbGRQYXJ0IHBhcmVudE5vZGUgZ2V0dGVyXG4gICAgZ2V0IHBhcmVudE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICAgIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQuXyRpc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgc2VwYXJhdGUgZnJvbSB0aGUgY29uc3RydWN0b3IgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVybiBhXG4gICAgLy8gRG9jdW1lbnRGcmFnbWVudCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBob2xkIG9udG8gaXQgd2l0aCBhbiBpbnN0YW5jZSBmaWVsZC5cbiAgICBfY2xvbmUob3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHsgZWw6IHsgY29udGVudCB9LCBwYXJ0czogcGFydHMsIH0gPSB0aGlzLl8kdGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gKChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jcmVhdGlvblNjb3BlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkKS5pbXBvcnROb2RlKGNvbnRlbnQsIHRydWUpO1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBmcmFnbWVudDtcbiAgICAgICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgdGVtcGxhdGVQYXJ0ID0gcGFydHNbMF07XG4gICAgICAgIHdoaWxlICh0ZW1wbGF0ZVBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG5vZGVJbmRleCA9PT0gdGVtcGxhdGVQYXJ0LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBDSElMRF9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KG5vZGUsIG5vZGUubmV4dFNpYmxpbmcsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gQVRUUklCVVRFX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyB0ZW1wbGF0ZVBhcnQuY3Rvcihub2RlLCB0ZW1wbGF0ZVBhcnQubmFtZSwgdGVtcGxhdGVQYXJ0LnN0cmluZ3MsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gRUxFTUVOVF9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgRWxlbWVudFBhcnQobm9kZSwgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuXyRwYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlUGFydCA9IHBhcnRzWysrcGFydEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlSW5kZXggIT09ICh0ZW1wbGF0ZVBhcnQgPT09IG51bGwgfHwgdGVtcGxhdGVQYXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZW1wbGF0ZVBhcnQuaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gc2V0IHRoZSBjdXJyZW50Tm9kZSBhd2F5IGZyb20gdGhlIGNsb25lZCB0cmVlIHNvIHRoYXQgd2VcbiAgICAgICAgLy8gZG9uJ3QgaG9sZCBvbnRvIHRoZSB0cmVlIGV2ZW4gaWYgdGhlIHRyZWUgaXMgZGV0YWNoZWQgYW5kIHNob3VsZCBiZVxuICAgICAgICAvLyBmcmVlZC5cbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gZDtcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbiAgICBfdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl8kcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnc2V0IHBhcnQnLFxuICAgICAgICAgICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzW2ldLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUluZGV4OiBpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnQuc3RyaW5ncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZXMsIHBhcnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIHZhbHVlcyB0aGUgcGFydCBjb25zdW1lcyBpcyBwYXJ0LnN0cmluZ3MubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB2YWx1ZXMgYXJlIGluIGJldHdlZW4gdGVtcGxhdGUgc3BhbnMuIFdlIGluY3JlbWVudCBpIGJ5IDFcbiAgICAgICAgICAgICAgICAgICAgLy8gbGF0ZXIgaW4gdGhlIGxvb3AsIHNvIGluY3JlbWVudCBpdCBieSBwYXJ0LnN0cmluZ3MubGVuZ3RoIC0gMiBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGkgKz0gcGFydC5zdHJpbmdzLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBDaGlsZFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0Tm9kZSwgZW5kTm9kZSwgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy50eXBlID0gQ0hJTERfUEFSVDtcbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBmaWVsZHMgd2lsbCBiZSBwYXRjaGVkIG9udG8gQ2hpbGRQYXJ0cyB3aGVuIHJlcXVpcmVkIGJ5XG4gICAgICAgIC8vIEFzeW5jRGlyZWN0aXZlXG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRzdGFydE5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgIHRoaXMuXyRlbmROb2RlID0gZW5kTm9kZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgLy8gTm90ZSBfX2lzQ29ubmVjdGVkIGlzIG9ubHkgZXZlciBhY2Nlc3NlZCBvbiBSb290UGFydHMgKGkuZS4gd2hlbiB0aGVyZSBpc1xuICAgICAgICAvLyBubyBfJHBhcmVudCk7IHRoZSB2YWx1ZSBvbiBhIG5vbi1yb290LXBhcnQgaXMgXCJkb24ndCBjYXJlXCIsIGJ1dCBjaGVja2luZ1xuICAgICAgICAvLyBmb3IgcGFyZW50IHdvdWxkIGJlIG1vcmUgY29kZVxuICAgICAgICB0aGlzLl9faXNDb25uZWN0ZWQgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXNDb25uZWN0ZWQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRydWU7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIC8vIEV4cGxpY2l0bHkgaW5pdGlhbGl6ZSBmb3IgY29uc2lzdGVudCBjbGFzcyBzaGFwZS5cbiAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBDaGlsZFBhcnRzIHRoYXQgYXJlIG5vdCBhdCB0aGUgcm9vdCBzaG91bGQgYWx3YXlzIGJlIGNyZWF0ZWQgd2l0aCBhXG4gICAgICAgIC8vIHBhcmVudDsgb25seSBSb290Q2hpbGROb2RlJ3Mgd29uJ3QsIHNvIHRoZXkgcmV0dXJuIHRoZSBsb2NhbCBpc0Nvbm5lY3RlZFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gdGhpcy5fJHBhcmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl8kaXNDb25uZWN0ZWQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMuX19pc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcmVudCBub2RlIGludG8gd2hpY2ggdGhlIHBhcnQgcmVuZGVycyBpdHMgY29udGVudC5cbiAgICAgKlxuICAgICAqIEEgQ2hpbGRQYXJ0J3MgY29udGVudCBjb25zaXN0cyBvZiBhIHJhbmdlIG9mIGFkamFjZW50IGNoaWxkIG5vZGVzIG9mXG4gICAgICogYC5wYXJlbnROb2RlYCwgcG9zc2libHkgYm9yZGVyZWQgYnkgJ21hcmtlciBub2RlcycgKGAuc3RhcnROb2RlYCBhbmRcbiAgICAgKiBgLmVuZE5vZGVgKS5cbiAgICAgKlxuICAgICAqIC0gSWYgYm90aCBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAgYXJlIG5vbi1udWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBzaWJsaW5ncyBiZXR3ZWVuIGAuc3RhcnROb2RlYCBhbmQgYC5lbmROb2RlYCwgZXhjbHVzaXZlbHkuXG4gICAgICpcbiAgICAgKiAtIElmIGAuc3RhcnROb2RlYCBpcyBub24tbnVsbCBidXQgYC5lbmROb2RlYCBpcyBudWxsLCB0aGVuIHRoZSBwYXJ0J3NcbiAgICAgKiBjb250ZW50IGNvbnNpc3RzIG9mIGFsbCBzaWJsaW5ncyBmb2xsb3dpbmcgYC5zdGFydE5vZGVgLCB1cCB0byBhbmRcbiAgICAgKiBpbmNsdWRpbmcgdGhlIGxhc3QgY2hpbGQgb2YgYC5wYXJlbnROb2RlYC4gSWYgYC5lbmROb2RlYCBpcyBub24tbnVsbCwgdGhlblxuICAgICAqIGAuc3RhcnROb2RlYCB3aWxsIGFsd2F5cyBiZSBub24tbnVsbC5cbiAgICAgKlxuICAgICAqIC0gSWYgYm90aCBgLmVuZE5vZGVgIGFuZCBgLnN0YXJ0Tm9kZWAgYXJlIG51bGwsIHRoZW4gdGhlIHBhcnQncyBjb250ZW50XG4gICAgICogY29uc2lzdHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIGAucGFyZW50Tm9kZWAuXG4gICAgICovXG4gICAgZ2V0IHBhcmVudE5vZGUoKSB7XG4gICAgICAgIGxldCBwYXJlbnROb2RlID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl8kcGFyZW50O1xuICAgICAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIChwYXJlbnROb2RlID09PSBudWxsIHx8IHBhcmVudE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudE5vZGUubm9kZVR5cGUpID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UICovKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcGFyZW50Tm9kZSBpcyBhIERvY3VtZW50RnJhZ21lbnQsIGl0IG1heSBiZSBiZWNhdXNlIHRoZSBET00gaXNcbiAgICAgICAgICAgIC8vIHN0aWxsIGluIHRoZSBjbG9uZWQgZnJhZ21lbnQgZHVyaW5nIGluaXRpYWwgcmVuZGVyOyBpZiBzbywgZ2V0IHRoZSByZWFsXG4gICAgICAgICAgICAvLyBwYXJlbnROb2RlIHRoZSBwYXJ0IHdpbGwgYmUgY29tbWl0dGVkIGludG8gYnkgYXNraW5nIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgbGVhZGluZyBtYXJrZXIgbm9kZSwgaWYgYW55LiBTZWUgYC5wYXJlbnROb2RlYCBmb3IgbW9yZVxuICAgICAqIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldCBzdGFydE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kc3RhcnROb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCdzIHRyYWlsaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IGVuZE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kZW5kTm9kZTtcbiAgICB9XG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJiB0aGlzLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhpcyBcXGBDaGlsZFBhcnRcXGAgaGFzIG5vIFxcYHBhcmVudE5vZGVcXGAgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYWNjZXB0IGEgdmFsdWUuIFRoaXMgbGlrZWx5IG1lYW5zIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIHBhcnQgd2FzIG1hbmlwdWxhdGVkIGluIGFuIHVuc3VwcG9ydGVkIHdheSBvdXRzaWRlIG9mIExpdCdzIGNvbnRyb2wgc3VjaCB0aGF0IHRoZSBwYXJ0J3MgbWFya2VyIG5vZGVzIHdlcmUgZWplY3RlZCBmcm9tIERPTS4gRm9yIGV4YW1wbGUsIHNldHRpbmcgdGhlIGVsZW1lbnQncyBcXGBpbm5lckhUTUxcXGAgb3IgXFxgdGV4dENvbnRlbnRcXGAgY2FuIGRvIHRoaXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQpO1xuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBOb24tcmVuZGVyaW5nIGNoaWxkIHZhbHVlcy4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGVzZSBkbyBub3QgcmVuZGVyXG4gICAgICAgICAgICAvLyBlbXB0eSB0ZXh0IG5vZGVzIHRvIGF2b2lkIGlzc3VlcyB3aXRoIHByZXZlbnRpbmcgZGVmYXVsdCA8c2xvdD5cbiAgICAgICAgICAgIC8vIGZhbGxiYWNrIGNvbnRlbnQuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG5vdGhpbmcgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IG5vdGhpbmcgdG8gY2hpbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuXyRzdGFydE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHRoaXMuXyRlbmROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLl8kcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZVsnXyRsaXRUeXBlJCddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoREVWX01PREUgJiYgKChfYSA9IHRoaXMub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvc3QpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQoYFtwcm9iYWJsZSBtaXN0YWtlOiByZW5kZXJlZCBhIHRlbXBsYXRlJ3MgaG9zdCBpbiBpdHNlbGYgYCArXG4gICAgICAgICAgICAgICAgICAgIGAoY29tbW9ubHkgY2F1c2VkIGJ5IHdyaXRpbmcgXFwke3RoaXN9IGluIGEgdGVtcGxhdGVdYCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBBdHRlbXB0ZWQgdG8gcmVuZGVyIHRoZSB0ZW1wbGF0ZSBob3N0YCwgdmFsdWUsIGBpbnNpZGUgaXRzZWxmLiBUaGlzIGlzIGFsbW9zdCBhbHdheXMgYSBtaXN0YWtlLCBhbmQgaW4gZGV2IG1vZGUgYCwgYHdlIHJlbmRlciBzb21lIHdhcm5pbmcgdGV4dC4gSW4gcHJvZHVjdGlvbiBob3dldmVyLCB3ZSdsbCBgLCBgcmVuZGVyIGl0LCB3aGljaCB3aWxsIHVzdWFsbHkgcmVzdWx0IGluIGFuIGVycm9yLCBhbmQgc29tZXRpbWVzIGAsIGBpbiB0aGUgZWxlbWVudCBkaXNhcHBlYXJpbmcgZnJvbSB0aGUgRE9NLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2luc2VydChub2RlKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZSkuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuXyRlbmROb2RlKTtcbiAgICB9XG4gICAgX2NvbW1pdE5vZGUodmFsdWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTICYmXG4gICAgICAgICAgICAgICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsICE9PSBub29wU2FuaXRpemVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZU5hbWUgPSAoX2EgPSB0aGlzLl8kc3RhcnROb2RlLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZU5hbWUgPT09ICdTVFlMRScgfHwgcGFyZW50Tm9kZU5hbWUgPT09ICdTQ1JJUFQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gJ0ZvcmJpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lID09PSAnU1RZTEUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBMaXQgZG9lcyBub3Qgc3VwcG9ydCBiaW5kaW5nIGluc2lkZSBzdHlsZSBub2Rlcy4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgVGhpcyBpcyBhIHNlY3VyaXR5IHJpc2ssIGFzIHN0eWxlIGluamVjdGlvbiBhdHRhY2tzIGNhbiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBleGZpbHRyYXRlIGRhdGEgYW5kIHNwb29mIFVJcy4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQ29uc2lkZXIgaW5zdGVhZCB1c2luZyBjc3NcXGAuLi5cXGAgbGl0ZXJhbHMgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdG8gY29tcG9zZSBzdHlsZXMsIGFuZCBtYWtlIGRvIGR5bmFtaWMgc3R5bGluZyB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGNzcyBjdXN0b20gcHJvcGVydGllcywgOjpwYXJ0cywgPHNsb3Q+cywgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYW5kIGJ5IG11dGF0aW5nIHRoZSBET00gcmF0aGVyIHRoYW4gc3R5bGVzaGVldHMuYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGl0IGRvZXMgbm90IHN1cHBvcnQgYmluZGluZyBpbnNpZGUgc2NyaXB0IG5vZGVzLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBUaGlzIGlzIGEgc2VjdXJpdHkgcmlzaywgYXMgaXQgY291bGQgYWxsb3cgYXJiaXRyYXJ5IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGNvZGUgZXhlY3V0aW9uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBub2RlJyxcbiAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5fJHN0YXJ0Tm9kZSxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMuXyRwYXJlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdGhpcy5faW5zZXJ0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfY29tbWl0VGV4dCh2YWx1ZSkge1xuICAgICAgICAvLyBJZiB0aGUgY29tbWl0dGVkIHZhbHVlIGlzIGEgcHJpbWl0aXZlIGl0IG1lYW5zIHdlIGNhbGxlZCBfY29tbWl0VGV4dCBvblxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgcmVuZGVyLCBhbmQgd2Uga25vdyB0aGF0IHRoaXMuXyRzdGFydE5vZGUubmV4dFNpYmxpbmcgaXMgYVxuICAgICAgICAvLyBUZXh0IG5vZGUuIFdlIGNhbiBub3cganVzdCByZXBsYWNlIHRoZSB0ZXh0IGNvbnRlbnQgKC5kYXRhKSBvZiB0aGUgbm9kZS5cbiAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gbm90aGluZyAmJlxuICAgICAgICAgICAgaXNQcmltaXRpdmUodGhpcy5fJGNvbW1pdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RleHRTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyKG5vZGUsICdkYXRhJywgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdGV4dFNhbml0aXplcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdGV4dCcsXG4gICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBzZXR0aW5nIHRleHQgY29udGVudCwgZm9yIHNlY3VyaXR5IHB1cnBvc2VzIGl0IG1hdHRlcnMgYSBsb3RcbiAgICAgICAgICAgICAgICAvLyB3aGF0IHRoZSBwYXJlbnQgaXMuIEZvciBleGFtcGxlLCA8c3R5bGU+IGFuZCA8c2NyaXB0PiBuZWVkIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlZCB3aXRoIGNhcmUsIHdoaWxlIDxzcGFuPiBkb2VzIG5vdC4gU28gZmlyc3Qgd2UgbmVlZCB0byBwdXQgYVxuICAgICAgICAgICAgICAgIC8vIHRleHQgbm9kZSBpbnRvIHRoZSBkb2N1bWVudCwgdGhlbiB3ZSBjYW4gc2FuaXRpemUgaXRzIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RleHRTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyKHRleHROb2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHRleHROb2RlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRleHROb2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9jb21taXRUZW1wbGF0ZVJlc3VsdChyZXN1bHQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICBjb25zdCB7IHZhbHVlcywgWydfJGxpdFR5cGUkJ106IHR5cGUgfSA9IHJlc3VsdDtcbiAgICAgICAgLy8gSWYgJGxpdFR5cGUkIGlzIGEgbnVtYmVyLCByZXN1bHQgaXMgYSBwbGFpbiBUZW1wbGF0ZVJlc3VsdCBhbmQgd2UgZ2V0XG4gICAgICAgIC8vIHRoZSB0ZW1wbGF0ZSBmcm9tIHRoZSB0ZW1wbGF0ZSBjYWNoZS4gSWYgbm90LCByZXN1bHQgaXMgYVxuICAgICAgICAvLyBDb21waWxlZFRlbXBsYXRlUmVzdWx0IGFuZCBfJGxpdFR5cGUkIGlzIGEgQ29tcGlsZWRUZW1wbGF0ZSBhbmQgd2UgbmVlZFxuICAgICAgICAvLyB0byBjcmVhdGUgdGhlIDx0ZW1wbGF0ZT4gZWxlbWVudCB0aGUgZmlyc3QgdGltZSB3ZSBzZWUgaXQuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdHlwZW9mIHR5cGUgPT09ICdudW1iZXInXG4gICAgICAgICAgICA/IHRoaXMuXyRnZXRUZW1wbGF0ZShyZXN1bHQpXG4gICAgICAgICAgICA6ICh0eXBlLmVsID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAodHlwZS5lbCA9IFRlbXBsYXRlLmNyZWF0ZUVsZW1lbnQodHJ1c3RGcm9tVGVtcGxhdGVTdHJpbmcodHlwZS5oLCB0eXBlLmhbMF0pLCB0aGlzLm9wdGlvbnMpKSxcbiAgICAgICAgICAgICAgICB0eXBlKTtcbiAgICAgICAgaWYgKCgoX2EgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJHRlbXBsYXRlKSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIHVwZGF0aW5nJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogdGhpcy5fJGNvbW1pdHRlZFZhbHVlLFxuICAgICAgICAgICAgICAgIHBhcnRzOiB0aGlzLl8kY29tbWl0dGVkVmFsdWUuXyRwYXJ0cyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuX3VwZGF0ZSh2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgdGhpcyk7XG4gICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgaW5zdGFudGlhdGVkJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgICBwYXJ0czogaW5zdGFuY2UuXyRwYXJ0cyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBpbnN0YW50aWF0ZWQgYW5kIHVwZGF0ZWQnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIHBhcnRzOiBpbnN0YW5jZS5fJHBhcnRzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gT3ZlcnJpZGRlbiB2aWEgYGxpdEh0bWxQb2x5ZmlsbFN1cHBvcnRgIHRvIHByb3ZpZGUgcGxhdGZvcm0gc3VwcG9ydC5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRnZXRUZW1wbGF0ZShyZXN1bHQpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgICAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGVtcGxhdGVDYWNoZS5zZXQocmVzdWx0LnN0cmluZ3MsICh0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBfY29tbWl0SXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAgICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgICAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAgICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cbiAgICAgICAgLy8gSWYgdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAgICAgLy8gaXRlcmFibGUgYW5kIHZhbHVlIHdpbGwgY29udGFpbiB0aGUgQ2hpbGRQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyByZW5kZXIuIElmIHZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgICAgIC8vIGFycmF5IGZvciBDaGlsZFBhcnRzLlxuICAgICAgICBpZiAoIWlzQXJyYXkodGhpcy5fJGNvbW1pdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gW107XG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAgICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgICAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWU7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgaXRlbVBhcnQ7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogdGVzdCBwZXJmIGltcGFjdCBvZiBhbHdheXMgY3JlYXRpbmcgdHdvIHBhcnRzXG4gICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBzaGFyaW5nIHBhcnRzIGJldHdlZW4gbm9kZXNcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMTI2NlxuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0cy5wdXNoKChpdGVtUGFydCA9IG5ldyBDaGlsZFBhcnQodGhpcy5faW5zZXJ0KGNyZWF0ZU1hcmtlcigpKSwgdGhpcy5faW5zZXJ0KGNyZWF0ZU1hcmtlcigpKSwgdGhpcywgdGhpcy5vcHRpb25zKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtUGFydC5fJHNldFZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGl0ZW1QYXJ0cyBhbHdheXMgaGF2ZSBlbmQgbm9kZXNcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcihpdGVtUGFydCAmJiB3cmFwKGl0ZW1QYXJ0Ll8kZW5kTm9kZSkubmV4dFNpYmxpbmcsIHBhcnRJbmRleCk7XG4gICAgICAgICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIG5vZGVzIGNvbnRhaW5lZCB3aXRoaW4gdGhpcyBQYXJ0IGZyb20gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGFydCBTdGFydCBub2RlIHRvIGNsZWFyIGZyb20sIGZvciBjbGVhcmluZyBhIHN1YnNldCBvZiB0aGUgcGFydCdzXG4gICAgICogICAgIERPTSAodXNlZCB3aGVuIHRydW5jYXRpbmcgaXRlcmFibGVzKVxuICAgICAqIEBwYXJhbSBmcm9tICBXaGVuIGBzdGFydGAgaXMgc3BlY2lmaWVkLCB0aGUgaW5kZXggd2l0aGluIHRoZSBpdGVyYWJsZSBmcm9tXG4gICAgICogICAgIHdoaWNoIENoaWxkUGFydHMgYXJlIGJlaW5nIHJlbW92ZWQsIHVzZWQgZm9yIGRpc2Nvbm5lY3RpbmcgZGlyZWN0aXZlcyBpblxuICAgICAqICAgICB0aG9zZSBQYXJ0cy5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF8kY2xlYXIoc3RhcnQgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nLCBmcm9tKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fJG5vdGlmeUNvbm5lY3Rpb25DaGFuZ2VkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzLCBmYWxzZSwgdHJ1ZSwgZnJvbSk7XG4gICAgICAgIHdoaWxlIChzdGFydCAmJiBzdGFydCAhPT0gdGhpcy5fJGVuZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSB3cmFwKHN0YXJ0KS5uZXh0U2libGluZztcbiAgICAgICAgICAgIHdyYXAoc3RhcnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIFJvb3RQYXJ0J3MgYGlzQ29ubmVjdGVkYC4gTm90ZSB0aGF0IHRoaXMgbWV0b2RcbiAgICAgKiBzaG91bGQgb25seSBiZSBjYWxsZWQgb24gYFJvb3RQYXJ0YHMgKHRoZSBgQ2hpbGRQYXJ0YCByZXR1cm5lZCBmcm9tIGFcbiAgICAgKiB0b3AtbGV2ZWwgYHJlbmRlcigpYCBjYWxsKS4gSXQgaGFzIG5vIGVmZmVjdCBvbiBub24tcm9vdCBDaGlsZFBhcnRzLlxuICAgICAqIEBwYXJhbSBpc0Nvbm5lY3RlZCBXaGV0aGVyIHRvIHNldFxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHNldENvbm5lY3RlZChpc0Nvbm5lY3RlZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLl8kcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX19pc0Nvbm5lY3RlZCA9IGlzQ29ubmVjdGVkO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5fJG5vdGlmeUNvbm5lY3Rpb25DaGFuZ2VkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzLCBpc0Nvbm5lY3RlZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncGFydC5zZXRDb25uZWN0ZWQoKSBtYXkgb25seSBiZSBjYWxsZWQgb24gYSAnICtcbiAgICAgICAgICAgICAgICAnUm9vdFBhcnQgcmV0dXJuZWQgZnJvbSByZW5kZXIoKS4nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnR5cGUgPSBBVFRSSUJVVEVfUEFSVDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAoc3RyaW5ncy5sZW5ndGggPiAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXcgQXJyYXkoc3RyaW5ncy5sZW5ndGggLSAxKS5maWxsKG5ldyBTdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHRhZ05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudGFnTmFtZTtcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcnQgYnkgcmVzb2x2aW5nIHRoZSB2YWx1ZSBmcm9tIHBvc3NpYmx5IG11bHRpcGxlXG4gICAgICogdmFsdWVzIGFuZCBzdGF0aWMgc3RyaW5ncyBhbmQgY29tbWl0dGluZyBpdCB0byB0aGUgRE9NLlxuICAgICAqIElmIHRoaXMgcGFydCBpcyBzaW5nbGUtdmFsdWVkLCBgdGhpcy5fc3RyaW5nc2Agd2lsbCBiZSB1bmRlZmluZWQsIGFuZCB0aGVcbiAgICAgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2l0aCBhIHNpbmdsZSB2YWx1ZSBhcmd1bWVudC4gSWYgdGhpcyBwYXJ0IGlzXG4gICAgICogbXVsdGktdmFsdWUsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIGRlZmluZWQsIGFuZCB0aGUgbWV0aG9kIGlzIGNhbGxlZFxuICAgICAqIHdpdGggdGhlIHZhbHVlIGFycmF5IG9mIHRoZSBwYXJ0J3Mgb3duaW5nIFRlbXBsYXRlSW5zdGFuY2UsIGFuZCBhbiBvZmZzZXRcbiAgICAgKiBpbnRvIHRoZSB2YWx1ZSBhcnJheSBmcm9tIHdoaWNoIHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHJlYWQuXG4gICAgICogVGhpcyBtZXRob2QgaXMgb3ZlcmxvYWRlZCB0aGlzIHdheSB0byBlbGltaW5hdGUgc2hvcnQtbGl2ZWQgYXJyYXkgc2xpY2VzXG4gICAgICogb2YgdGhlIHRlbXBsYXRlIGluc3RhbmNlIHZhbHVlcywgYW5kIGFsbG93IGEgZmFzdC1wYXRoIGZvciBzaW5nbGUtdmFsdWVkXG4gICAgICogcGFydHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHBhcnQgdmFsdWUsIG9yIGFuIGFycmF5IG9mIHZhbHVlcyBmb3IgbXVsdGktdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIHZhbHVlSW5kZXggdGhlIGluZGV4IHRvIHN0YXJ0IHJlYWRpbmcgdmFsdWVzIGZyb20uIGB1bmRlZmluZWRgIGZvclxuICAgICAqICAgc2luZ2xlLXZhbHVlZCBwYXJ0c1xuICAgICAqIEBwYXJhbSBub0NvbW1pdCBjYXVzZXMgdGhlIHBhcnQgdG8gbm90IGNvbW1pdCBpdHMgdmFsdWUgdG8gdGhlIERPTS4gVXNlZFxuICAgICAqICAgaW4gaHlkcmF0aW9uIHRvIHByaW1lIGF0dHJpYnV0ZSBwYXJ0cyB3aXRoIHRoZWlyIGZpcnN0LXJlbmRlcmVkIHZhbHVlLFxuICAgICAqICAgYnV0IG5vdCBzZXQgdGhlIGF0dHJpYnV0ZSwgYW5kIGluIFNTUiB0byBuby1vcCB0aGUgRE9NIG9wZXJhdGlvbiBhbmRcbiAgICAgKiAgIGNhcHR1cmUgdGhlIHZhbHVlIGZvciBzZXJpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcywgdmFsdWVJbmRleCwgbm9Db21taXQpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgLy8gV2hldGhlciBhbnkgb2YgdGhlIHZhbHVlcyBoYXMgY2hhbmdlZCwgZm9yIGRpcnR5LWNoZWNraW5nXG4gICAgICAgIGxldCBjaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0cmluZ3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gU2luZ2xlLXZhbHVlIGJpbmRpbmcgY2FzZVxuICAgICAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQsIDApO1xuICAgICAgICAgICAgY2hhbmdlID1cbiAgICAgICAgICAgICAgICAhaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSk7XG4gICAgICAgICAgICBpZiAoY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJbnRlcnBvbGF0aW9uIGNhc2VcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlO1xuICAgICAgICAgICAgdmFsdWUgPSBzdHJpbmdzWzBdO1xuICAgICAgICAgICAgbGV0IGksIHY7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZXNbdmFsdWVJbmRleCArIGldLCBkaXJlY3RpdmVQYXJlbnQsIGkpO1xuICAgICAgICAgICAgICAgIGlmICh2ID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdXNlci1wcm92aWRlZCB2YWx1ZSBpcyBgbm9DaGFuZ2VgLCB1c2UgdGhlIHByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoYW5nZSB8fCAoY2hhbmdlID0gIWlzUHJpbWl0aXZlKHYpIHx8IHYgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSAodiAhPT0gbnVsbCAmJiB2ICE9PSB2b2lkIDAgPyB2IDogJycpICsgc3RyaW5nc1tpICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlIGFsd2F5cyByZWNvcmQgZWFjaCB2YWx1ZSwgZXZlbiBpZiBvbmUgaXMgYG5vdGhpbmdgLCBmb3IgZnV0dXJlXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIGRldGVjdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV0gPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2UgJiYgIW5vQ29tbWl0KSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lLCAnYXR0cmlidXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBQcm9wZXJ0eVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gUFJPUEVSVFlfUEFSVDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwodGhpcy5lbGVtZW50LCB0aGlzLm5hbWUsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9zYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IHByb3BlcnR5JyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgdGhpcy5lbGVtZW50W3RoaXMubmFtZV0gPSB2YWx1ZSA9PT0gbm90aGluZyA/IHVuZGVmaW5lZCA6IHZhbHVlO1xuICAgIH1cbn1cbi8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBodHRwczovL2NyYnVnLmNvbS85OTMyNjhcbi8vIEN1cnJlbnRseSwgYW55IGF0dHJpYnV0ZSBzdGFydGluZyB3aXRoIFwib25cIiBpcyBjb25zaWRlcmVkIHRvIGJlIGFcbi8vIFRydXN0ZWRTY3JpcHQgc291cmNlLiBTdWNoIGJvb2xlYW4gYXR0cmlidXRlcyBtdXN0IGJlIHNldCB0byB0aGUgZXF1aXZhbGVudFxuLy8gdHJ1c3RlZCBlbXB0eVNjcmlwdCB2YWx1ZS5cbmNvbnN0IGVtcHR5U3RyaW5nRm9yQm9vbGVhbkF0dHJpYnV0ZSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgOiAnJztcbmNsYXNzIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgYm9vbGVhbiBhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6ICEhKHZhbHVlICYmIHZhbHVlICE9PSBub3RoaW5nKSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIGVtcHR5U3RyaW5nRm9yQm9vbGVhbkF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFdmVudFBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy50eXBlID0gRVZFTlRfUEFSVDtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmIHRoaXMuc3RyaW5ncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgXFxgPCR7ZWxlbWVudC5sb2NhbE5hbWV9PlxcYCBoYXMgYSBcXGBAJHtuYW1lfT0uLi5cXGAgbGlzdGVuZXIgd2l0aCBgICtcbiAgICAgICAgICAgICAgICAnaW52YWxpZCBjb250ZW50LiBFdmVudCBsaXN0ZW5lcnMgaW4gdGVtcGxhdGVzIG11c3QgaGF2ZSBleGFjdGx5ICcgK1xuICAgICAgICAgICAgICAgICdvbmUgZXhwcmVzc2lvbiBhbmQgbm8gc3Vycm91bmRpbmcgdGV4dC4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFdmVudFBhcnQgZG9lcyBub3QgdXNlIHRoZSBiYXNlIF8kc2V0VmFsdWUvX3Jlc29sdmVWYWx1ZSBpbXBsZW1lbnRhdGlvblxuICAgIC8vIHNpbmNlIHRoZSBkaXJ0eSBjaGVja2luZyBpcyBtb3JlIGNvbXBsZXhcbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRzZXRWYWx1ZShuZXdMaXN0ZW5lciwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIG5ld0xpc3RlbmVyID1cbiAgICAgICAgICAgIChfYSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgbmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCwgMCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5vdGhpbmc7XG4gICAgICAgIGlmIChuZXdMaXN0ZW5lciA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyB2YWx1ZSBpcyBub3RoaW5nIG9yIGFueSBvcHRpb25zIGNoYW5nZSB3ZSBoYXZlIHRvIHJlbW92ZSB0aGVcbiAgICAgICAgLy8gcGFydCBhcyBhIGxpc3RlbmVyLlxuICAgICAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IChuZXdMaXN0ZW5lciA9PT0gbm90aGluZyAmJiBvbGRMaXN0ZW5lciAhPT0gbm90aGluZykgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIub25jZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5wYXNzaXZlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLnBhc3NpdmU7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90IG5vdGhpbmcgYW5kIHdlIHJlbW92ZWQgdGhlIGxpc3RlbmVyLCB3ZSBoYXZlXG4gICAgICAgIC8vIHRvIGFkZCB0aGUgcGFydCBhcyBhIGxpc3RlbmVyLlxuICAgICAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9IG5ld0xpc3RlbmVyICE9PSBub3RoaW5nICYmXG4gICAgICAgICAgICAob2xkTGlzdGVuZXIgPT09IG5vdGhpbmcgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCBldmVudCBsaXN0ZW5lcicsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogbmV3TGlzdGVuZXIsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogc2hvdWxkUmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgICAgICBhZGRMaXN0ZW5lcjogc2hvdWxkQWRkTGlzdGVuZXIsXG4gICAgICAgICAgICBvbGRMaXN0ZW5lcixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLCBvbGRMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZEFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICAvLyBCZXdhcmU6IElFMTEgYW5kIENocm9tZSA0MSBkb24ndCBsaWtlIHVzaW5nIHRoZSBsaXN0ZW5lciBhcyB0aGVcbiAgICAgICAgICAgIC8vIG9wdGlvbnMgb2JqZWN0LiBGaWd1cmUgb3V0IGhvdyB0byBkZWFsIHcvIHRoaXMgaW4gSUUxMSAtIG1heWJlXG4gICAgICAgICAgICAvLyBwYXRjaCBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLCBuZXdMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbmV3TGlzdGVuZXI7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuY2FsbCgoX2IgPSAoX2EgPSB0aGlzLm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ob3N0KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFbGVtZW50UGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMudHlwZSA9IEVMRU1FTlRfUEFSVDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICBfJHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IHRvIGVsZW1lbnQgYmluZGluZycsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUpO1xuICAgIH1cbn1cbi8qKlxuICogRU5EIFVTRVJTIFNIT1VMRCBOT1QgUkVMWSBPTiBUSElTIE9CSkVDVC5cbiAqXG4gKiBQcml2YXRlIGV4cG9ydHMgZm9yIHVzZSBieSBvdGhlciBMaXQgcGFja2FnZXMsIG5vdCBpbnRlbmRlZCBmb3IgdXNlIGJ5XG4gKiBleHRlcm5hbCB1c2Vycy5cbiAqXG4gKiBXZSBjdXJyZW50bHkgZG8gbm90IG1ha2UgYSBtYW5nbGVkIHJvbGx1cCBidWlsZCBvZiB0aGUgbGl0LXNzciBjb2RlLiBJbiBvcmRlclxuICogdG8ga2VlcCBhIG51bWJlciBvZiAob3RoZXJ3aXNlIHByaXZhdGUpIHRvcC1sZXZlbCBleHBvcnRzICBtYW5nbGVkIGluIHRoZVxuICogY2xpZW50IHNpZGUgY29kZSwgd2UgZXhwb3J0IGEgXyRMSCBvYmplY3QgY29udGFpbmluZyB0aG9zZSBtZW1iZXJzIChvclxuICogaGVscGVyIG1ldGhvZHMgZm9yIGFjY2Vzc2luZyBwcml2YXRlIGZpZWxkcyBvZiB0aG9zZSBtZW1iZXJzKSwgYW5kIHRoZW5cbiAqIHJlLWV4cG9ydCB0aGVtIGZvciB1c2UgaW4gbGl0LXNzci4gVGhpcyBrZWVwcyBsaXQtc3NyIGFnbm9zdGljIHRvIHdoZXRoZXIgdGhlXG4gKiBjbGllbnQtc2lkZSBjb2RlIGlzIGJlaW5nIHVzZWQgaW4gYGRldmAgbW9kZSBvciBgcHJvZGAgbW9kZS5cbiAqXG4gKiBUaGlzIGhhcyBhIHVuaXF1ZSBuYW1lLCB0byBkaXNhbWJpZ3VhdGUgaXQgZnJvbSBwcml2YXRlIGV4cG9ydHMgaW5cbiAqIGxpdC1lbGVtZW50LCB3aGljaCByZS1leHBvcnRzIGFsbCBvZiBsaXQtaHRtbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgXyRMSCA9IHtcbiAgICAvLyBVc2VkIGluIGxpdC1zc3JcbiAgICBfYm91bmRBdHRyaWJ1dGVTdWZmaXg6IGJvdW5kQXR0cmlidXRlU3VmZml4LFxuICAgIF9tYXJrZXI6IG1hcmtlcixcbiAgICBfbWFya2VyTWF0Y2g6IG1hcmtlck1hdGNoLFxuICAgIF9IVE1MX1JFU1VMVDogSFRNTF9SRVNVTFQsXG4gICAgX2dldFRlbXBsYXRlSHRtbDogZ2V0VGVtcGxhdGVIdG1sLFxuICAgIC8vIFVzZWQgaW4gdGVzdHMgYW5kIHByaXZhdGUtc3NyLXN1cHBvcnRcbiAgICBfVGVtcGxhdGVJbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZSxcbiAgICBfaXNJdGVyYWJsZTogaXNJdGVyYWJsZSxcbiAgICBfcmVzb2x2ZURpcmVjdGl2ZTogcmVzb2x2ZURpcmVjdGl2ZSxcbiAgICBfQ2hpbGRQYXJ0OiBDaGlsZFBhcnQsXG4gICAgX0F0dHJpYnV0ZVBhcnQ6IEF0dHJpYnV0ZVBhcnQsXG4gICAgX0Jvb2xlYW5BdHRyaWJ1dGVQYXJ0OiBCb29sZWFuQXR0cmlidXRlUGFydCxcbiAgICBfRXZlbnRQYXJ0OiBFdmVudFBhcnQsXG4gICAgX1Byb3BlcnR5UGFydDogUHJvcGVydHlQYXJ0LFxuICAgIF9FbGVtZW50UGFydDogRWxlbWVudFBhcnQsXG59O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuY29uc3QgcG9seWZpbGxTdXBwb3J0ID0gREVWX01PREVcbiAgICA/IGdsb2JhbC5saXRIdG1sUG9seWZpbGxTdXBwb3J0RGV2TW9kZVxuICAgIDogZ2xvYmFsLmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnQ7XG5wb2x5ZmlsbFN1cHBvcnQgPT09IG51bGwgfHwgcG9seWZpbGxTdXBwb3J0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb2x5ZmlsbFN1cHBvcnQoVGVtcGxhdGUsIENoaWxkUGFydCk7XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIGxpdC1odG1sIHVzYWdlLlxuKChfZCA9IGdsb2JhbC5saXRIdG1sVmVyc2lvbnMpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IChnbG9iYWwubGl0SHRtbFZlcnNpb25zID0gW10pKS5wdXNoKCcyLjguMCcpO1xuaWYgKERFVl9NT0RFICYmIGdsb2JhbC5saXRIdG1sVmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICAgIGlzc3VlV2FybmluZygnbXVsdGlwbGUtdmVyc2lvbnMnLCBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gYCArXG4gICAgICAgIGBMb2FkaW5nIG11bHRpcGxlIHZlcnNpb25zIGlzIG5vdCByZWNvbW1lbmRlZC5gKTtcbn1cbi8qKlxuICogUmVuZGVycyBhIHZhbHVlLCB1c3VhbGx5IGEgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQsIHRvIHRoZSBjb250YWluZXIuXG4gKlxuICogVGhpcyBleGFtcGxlIHJlbmRlcnMgdGhlIHRleHQgXCJIZWxsbywgWm9lIVwiIGluc2lkZSBhIHBhcmFncmFwaCB0YWcsIGFwcGVuZGluZ1xuICogaXQgdG8gdGhlIGNvbnRhaW5lciBgZG9jdW1lbnQuYm9keWAuXG4gKlxuICogYGBganNcbiAqIGltcG9ydCB7aHRtbCwgcmVuZGVyfSBmcm9tICdsaXQnO1xuICpcbiAqIGNvbnN0IG5hbWUgPSBcIlpvZVwiO1xuICogcmVuZGVyKGh0bWxgPHA+SGVsbG8sICR7bmFtZX0hPC9wPmAsIGRvY3VtZW50LmJvZHkpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHZhbHVlIEFueSBbcmVuZGVyYWJsZVxuICogICB2YWx1ZV0oaHR0cHM6Ly9saXQuZGV2L2RvY3MvdGVtcGxhdGVzL2V4cHJlc3Npb25zLyNjaGlsZC1leHByZXNzaW9ucyksXG4gKiAgIHR5cGljYWxseSBhIHtAbGlua2NvZGUgVGVtcGxhdGVSZXN1bHR9IGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZ1xuICogICBsaWtlIHtAbGlua2NvZGUgaHRtbH0gb3Ige0BsaW5rY29kZSBzdmd9LlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBjb250YWluZXIgdG8gcmVuZGVyIHRvLiBUaGUgZmlyc3QgcmVuZGVyIHdpbGwgYXBwZW5kXG4gKiAgIHRoZSByZW5kZXJlZCB2YWx1ZSB0byB0aGUgY29udGFpbmVyLCBhbmQgc3Vic2VxdWVudCByZW5kZXJzIHdpbGxcbiAqICAgZWZmaWNpZW50bHkgdXBkYXRlIHRoZSByZW5kZXJlZCB2YWx1ZSBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXNcbiAqICAgcHJldmlvdXNseSByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFNlZSB7QGxpbmtjb2RlIFJlbmRlck9wdGlvbnN9IGZvciBvcHRpb25zIGRvY3VtZW50YXRpb24uXG4gKiBAc2VlXG4gKiB7QGxpbmsgaHR0cHM6Ly9saXQuZGV2L2RvY3MvbGlicmFyaWVzL3N0YW5kYWxvbmUtdGVtcGxhdGVzLyNyZW5kZXJpbmctbGl0LWh0bWwtdGVtcGxhdGVzfCBSZW5kZXJpbmcgTGl0IEhUTUwgVGVtcGxhdGVzfVxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKHZhbHVlLCBjb250YWluZXIsIG9wdGlvbnMpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmIChERVZfTU9ERSAmJiBjb250YWluZXIgPT0gbnVsbCkge1xuICAgICAgICAvLyBHaXZlIGEgY2xlYXJlciBlcnJvciBtZXNzYWdlIHRoYW5cbiAgICAgICAgLy8gICAgIFVuY2F1Z2h0IFR5cGVFcnJvcjogQ2Fubm90IHJlYWQgcHJvcGVydGllcyBvZiBudWxsIChyZWFkaW5nXG4gICAgICAgIC8vICAgICAnXyRsaXRQYXJ0JCcpXG4gICAgICAgIC8vIHdoaWNoIHJlYWRzIGxpa2UgYW4gaW50ZXJuYWwgTGl0IGVycm9yLlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgY29udGFpbmVyIHRvIHJlbmRlciBpbnRvIG1heSBub3QgYmUgJHtjb250YWluZXJ9YCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlcklkID0gREVWX01PREUgPyBkZWJ1Z0xvZ1JlbmRlcklkKysgOiAwO1xuICAgIGNvbnN0IHBhcnRPd25lck5vZGUgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjb250YWluZXI7XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGxldCBwYXJ0ID0gcGFydE93bmVyTm9kZVsnXyRsaXRQYXJ0JCddO1xuICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgIGtpbmQ6ICdiZWdpbiByZW5kZXInLFxuICAgICAgICBpZDogcmVuZGVySWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHBhcnQsXG4gICAgfSk7XG4gICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbmROb2RlID0gKF9iID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJlbmRlckJlZm9yZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgcGFydE93bmVyTm9kZVsnXyRsaXRQYXJ0JCddID0gcGFydCA9IG5ldyBDaGlsZFBhcnQoY29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgZW5kTm9kZSksIGVuZE5vZGUsIHVuZGVmaW5lZCwgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30pO1xuICAgIH1cbiAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWUpO1xuICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgIGtpbmQ6ICdlbmQgcmVuZGVyJyxcbiAgICAgICAgaWQ6IHJlbmRlcklkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBwYXJ0LFxuICAgIH0pO1xuICAgIHJldHVybiBwYXJ0O1xufTtcbmlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICByZW5kZXIuc2V0U2FuaXRpemVyID0gc2V0U2FuaXRpemVyO1xuICAgIHJlbmRlci5jcmVhdGVTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXI7XG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgIHJlbmRlci5fdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPVxuICAgICAgICAgICAgX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYW5kcm9pZC10di1jYXJkLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
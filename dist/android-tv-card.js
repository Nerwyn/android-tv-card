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
class AndroidTVCard extends lit_element_1.LitElement {
    constructor() {
        super();
        this.defaultKeys = {};
        this.defaultSources = {};
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
        this._config = {};
        this._hass = this.hass;
        this.trigger = Math.random();
        this.volume_slider = new HTMLElement();
        this.rows = [];
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
            // await this.loadCardHelpers();
            // await this.loadHassHelpers();
            if (this._config.volume_row == 'slider') {
                yield this.renderVolumeSlider();
            }
            this.triggerRender();
        });
    }
    // isButtonEnabled(row: string, button: string) {
    // 	if (!(this._config[row] instanceof Array)) return false;
    // 	return this._config[row].includes(button);
    // }
    set hass(hass) {
        this._hass = hass;
        if (this.volume_slider) {
            this.volume_slider.hass = hass;
        }
        // if (this._hassResolve) {
        // 	this._hassResolve();
        // }
    }
    get hass() {
        return this._hass;
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
    // async loadCardHelpers() {
    // 	this._helpers = await window.loadCardHelpers();
    // 	if (this._helpersResolve) this._helpersResolve();
    // }
    // async loadHassHelpers() {
    // 	if (this._helpers === undefined)
    // 		await new Promise((resolve) => (this._helpersResolve = resolve));
    // 	if (this._hass === undefined)
    // 		await new Promise((resolve) => (this._hassResolve = resolve));
    // 	this._helpersResolve = undefined;
    // 	this._hassResolve = undefined;
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5kcm9pZC10di1jYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUI7QUFDekIsaUNBQWlDO0FBQ2pDLGlEQUFpRCx3Q0FBd0M7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRWtELHdCQUF3QixzQkFBc0IsZUFBZSwyQ0FBMkMsMENBQTBDLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLDJDQUEyQywwQ0FBMEMsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsMkNBQTJDLDZDQUE2QyxFQUFFLGlCQUFpQixzQkFBc0IsZUFBZSwyQ0FBMkMsNEJBQTRCLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLDJDQUEyQyw0QkFBNEIsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsMkNBQTJDLGFBQWEsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsMkNBQTJDLGVBQWUsR0FBRyxhQUFhLGtKQUFrSixTQUFTLGVBQWUsd0VBQXdFLFNBQVMsR0FBRyxrQkFBa0IseURBQXlELGtGQUFrRiwwQ0FBMEMsK0JBQStCLGlCQUFpQixzQkFBc0IsZUFBZSwyQ0FBMkMscUdBQXFHLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLDJDQUEyQyxzSEFBc0gsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsMkNBQTJDLHlGQUF5RixFQUFFLGlCQUFpQixzQkFBc0IsZUFBZSwyQ0FBMkMsNENBQTRDLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLDJDQUEyQyw0RUFBNEUsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsMkNBQTJDLDRFQUE0RSxFQUFFLHFCQUFxQixtQkFBbUIsTUFBTSxnRUFBQyxNQUFNLHFCQUFxQiwrQ0FBK0MsZUFBZSxFQUFFLHlEQUF5RCw0Q0FBNEMsNkJBQTZCLGNBQWMsK0VBQStFLHVCQUF1QixnRUFBZ0UsMEJBQTBCLFNBQVMsYUFBYSxvQ0FBb0MsWUFBWSxtQkFBbUIsS0FBSyxtQkFBbUIsc0VBQXNFLFNBQVMsd0JBQXdCLHdCQUF3QiwyQ0FBMkMsRUFBRSxzQkFBc0IsdUNBQXVDLFVBQVUsWUFBWSxrQkFBa0Isa0JBQWtCLG1DQUFtQyxhQUFhLDBCQUEwQixFQUFFLDBGQUEwRix1REFBdUQsTUFBTSwrRkFBK0YsOERBQThELDhCQUE4QixlQUFlLDBEQUEwRCxjQUFjLGtDQUFrQyxjQUFjLGtDQUFrQyxjQUFjLDhEQUE4RCw4RkFBOEYsY0FBYyx3QkFBd0IsY0FBYyxzQkFBc0Isa0JBQWtCLHFFQUFxRSxlQUFlLHdCQUF3QiwwQ0FBMEMsNENBQTRDLDBDQUEwQyxxQkFBcUIsMkJBQTJCLGlCQUFpQixxRUFBcUUsbUJBQW1CLG9CQUFvQiw0Q0FBNEMsK0JBQStCLCtFQUErRSx5REFBeUQsU0FBUywrRUFBK0UsNElBQTRJLGlCQUFpQixTQUFTLHdCQUF3QixJQUFJLCtCQUErQiwyREFBMkQsaURBQWlELG9EQUFvRCxTQUFTLHFCQUFxQiwyQkFBMkIsaUVBQWlFLFNBQVMsOENBQThDLGNBQWMsMkRBQTJELEVBQUUsVUFBVSx5RkFBeUYsV0FBVyx5QkFBeUIsTUFBTSw0WEFBNFgsSUFBSSxtQkFBbUIsa0RBQWtELGlCQUFpQixvREFBb0Qsb0JBQW9CLGVBQWUsMkRBQTJELFNBQVMsU0FBUyxVQUFVLHFRQUFxUSxnckJBQWdyQixPQUFPLGFBQWEsR0FBRyxtQkFBbUIsZ0hBQWdILEVBQUUsdUNBQXVDLGdGQUFnRiwrWkFBK1osa0JBQWtCLG1CQUFtQixvQkFBb0IsMkJBQTJCLDhCQUE4QixFQUFFLGlCQUFpQix1Q0FBdUMsSUFBSSx1QkFBdUIsZUFBZSxTQUFTLHlDQUF5QyxVQUFVLHFFQUFxRSxhQUFhLDJEQUEyRCx5Q0FBeUMsS0FBSyxpREFBaUQsK0JBQStCLHVDQUF1Qyx3QkFBd0IsdUNBQXVDLHVEQUF1RCx1QkFBdUIsNEJBQTRCLG1CQUFtQixNQUFNLDBEQUEwRCxvQ0FBb0MsSUFBSSxJQUFJLG9CQUFvQixNQUFNLHFDQUFxQyxtREFBbUQsdUJBQXVCLFNBQVMsbURBQW1ELEtBQUssODlCQUE4OUIsaUJBQWlCLHdCQUF3QixVQUFVLG9DQUFvQyx1Q0FBdUMseUNBQXlDLHdDQUF3QyxzQ0FBc0MseUJBQXlCLDBGQUEwRixxRUFBcUUsK0RBQStELG1GQUFtRixzQkFBc0IscUNBQXFDLGlDQUFpQywwQ0FBMEMsMkJBQTJCLDRGQUE0RixxQkFBcUIsaUVBQWlFLHlCQUF5QixzQkFBc0IscUJBQXFCLG1CQUFtQixxQkFBcUIsbUJBQW1CLHNCQUFzQiw4QkFBOEIsa0JBQWtCLGdCQUFnQixzQkFBc0Isb0JBQW9CLGdIQUFnSCxVQUFVLEVBQUUsb0JBQW9CLG1CQUFtQiw2Q0FBNkMsVUFBVSwrQkFBK0IsTUFBTSwyQ0FBMkMsTUFBTSxpQ0FBaUMsMEJBQTBCLFlBQVksRUFBRSxrQkFBa0Isb0NBQW9DLGlCQUFpQixzQkFBc0IsVUFBVSxtQkFBbUIseUZBQXlGLDBCQUEwQiwyR0FBMkcsbUVBQW1FLDBDQUEwQyxFQUFFLE1BQU0sMERBQTBELE1BQU0sOENBQThDLE1BQU0sc0RBQXNELE1BQU0sMkRBQTJELDZCQUE2QiwrREFBK0QsTUFBTSwwQ0FBMEMsc0JBQXNCLE1BQU0sNEpBQTRKLHdCQUF3QixNQUFNLDJIQUEySCxtQkFBbUIseUZBQXlGLDBCQUEwQiwyRkFBMkYsOEVBQThFLDREQUE0RCwwQkFBMEIsTUFBTSxtRkFBbUYsTUFBTSxxRUFBcUUsTUFBTSwrREFBK0QsTUFBTSx3Q0FBd0MsaURBQWlELGlCQUFpQixvR0FBb0csTUFBTSxrRUFBa0UsZUFBZSxxQ0FBcUMsbUJBQW1CLCtCQUErQixvQkFBb0Isb0JBQW9CLHFFQUFxRSxTQUFTLGVBQWUscUNBQXFDLHVCQUF1QixtQkFBbUIsU0FBUyxzQkFBc0Isc0NBQXNDLDREQUE0RCxnQ0FBZ0MscUNBQXFDLE1BQU0sVUFBVSwrQkFBK0IsTUFBTSwyQ0FBMkMsTUFBTSxpQ0FBaUMsbUJBQW1CLGVBQWUsRUFBRSxFQUFFLGVBQWUsK0NBQStDLHVRQUF1USxpQkFBaUIscUNBQXFDLFlBQVksS0FBSyw0SkFBNEosS0FBSyw0QkFBNEIsZ0JBQWdCLGlEQUFpRCwyREFBMkQscUVBQXFFLHNEQUFzRCwwRUFBMEUsc0RBQXNELDBEQUEwRCwyREFBMkQsaUdBQWlHLG9EQUFvRCxpREFBaUQsMkRBQTJELCtDQUErQyxvREFBb0QsMkNBQTJDLHVEQUF1RCx5REFBeUQsMERBQTBELHNEQUFzRCw2Q0FBNkMsMkRBQTJELHFEQUFxRCwyREFBMkQsNERBQTRELG9FQUFvRSxtQkFBbUIseUJBQXlCLGtDQUFrQyxxREFBcUQsc0RBQXNELHNFQUFzRSxvREFBb0QsNERBQTRELG9DQUFvQyxvQkFBb0IsZ0NBQWdDLDJCQUEyQixrQkFBa0Isc0JBQXNCLHdDQUF3QywwQkFBMEIsdUVBQXVFLHVDQUF1Qyx3REFBd0QsNEJBQTRCLG9HQUFvRyxnQkFBZ0IsMkJBQTJCLDhDQUE4QyxxQkFBcUIsdUNBQWt3QztBQUMzemtCOzs7Ozs7Ozs7OztBQ0RhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyxvRUFBYTtBQUMzQyw4QkFBOEIsbUJBQU8sQ0FBQywrRUFBcUI7QUFDM0QsaUJBQWlCLG1CQUFPLENBQUMsdUNBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGtCQUFrQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsa0JBQWtCLGdCQUFnQjtBQUNsQyxlQUFlLGFBQWE7QUFDNUIsZUFBZSxhQUFhO0FBQzVCLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsY0FBYyxtQkFBbUI7QUFDakMsbUJBQW1CLDRCQUE0QjtBQUMvQyxpQkFBaUIsMEJBQTBCO0FBQzNDLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxRQUFRO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkMsMEJBQTBCLGtCQUFrQjtBQUM1Qyx5QkFBeUIsaUJBQWlCO0FBQzFDLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLHVCQUF1QixtQkFBbUIsSUFBSSxjQUFjO0FBQzVEO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pzQmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsYUFBYSxpQ0FBaUM7QUFDOUMsaUJBQWlCLDJDQUEyQztBQUM1RCxtQkFBbUIsOENBQThDO0FBQ2pFLG1CQUFtQixzQ0FBc0M7QUFDekQsWUFBWSw2Q0FBNkM7QUFDekQsWUFBWSwrQkFBK0I7QUFDM0MsVUFBVSx3Q0FBd0M7QUFDbEQsWUFBWSw0Q0FBNEM7QUFDeEQsY0FBYyx1REFBdUQ7QUFDckUsYUFBYSw4Q0FBOEM7QUFDM0QsWUFBWSw0Q0FBNEM7QUFDeEQsWUFBWSxxQ0FBcUM7QUFDakQsYUFBYSx1Q0FBdUM7QUFDcEQsa0JBQWtCLGlEQUFpRDtBQUNuRSxZQUFZLHFDQUFxQztBQUNqRCxjQUFjLHlDQUF5QztBQUN2RCxvQkFBb0IscURBQXFEO0FBQ3pFLGdCQUFnQixrREFBa0Q7QUFDbEUsY0FBYyx5Q0FBeUM7QUFDdkQsWUFBWSwwQ0FBMEM7QUFDdEQsWUFBWSwrQkFBK0I7QUFDM0MsU0FBUyw2Q0FBNkM7QUFDdEQsU0FBUyw2Q0FBNkM7QUFDdEQsU0FBUyw2Q0FBNkM7QUFDdEQsU0FBUyw2Q0FBNkM7QUFDdEQsVUFBVSxpQ0FBaUM7QUFDM0MsVUFBVSxpQ0FBaUM7QUFDM0MsVUFBVSxpQ0FBaUM7QUFDM0MsVUFBVSxpQ0FBaUM7QUFDM0MsVUFBVSxpQ0FBaUM7QUFDM0MsVUFBVSxpQ0FBaUM7QUFDM0MsVUFBVSxpQ0FBaUM7QUFDM0MsVUFBVSxpQ0FBaUM7QUFDM0MsVUFBVSxpQ0FBaUM7QUFDM0MsVUFBVSxpQ0FBaUM7QUFDM0Msa0JBQWtCLGdEQUFnRDtBQUNsRSxvQkFBb0Isb0RBQW9EO0FBQ3hFLFVBQVUsb0NBQW9DO0FBQzlDLFVBQVUsb0NBQW9DO0FBQzlDLFVBQVUsb0NBQW9DO0FBQzlDLFVBQVUsb0NBQW9DO0FBQzlDLFVBQVUsb0NBQW9DO0FBQzlDLFVBQVUsb0NBQW9DO0FBQzlDLFVBQVUsb0NBQW9DO0FBQzlDLFVBQVUsb0NBQW9DO0FBQzlDLFVBQVUsb0NBQW9DO0FBQzlDLFdBQVcsc0NBQXNDO0FBQ2pELFdBQVcsc0NBQXNDO0FBQ2pELFdBQVcsc0NBQXNDO0FBQ2pELFVBQVUsdUNBQXVDO0FBQ2pELFdBQVcsMENBQTBDO0FBQ3JELGFBQWEsNENBQTRDO0FBQ3pELGNBQWMsNkNBQTZDO0FBQzNELFlBQVksMkNBQTJDO0FBQ3ZELG1CQUFtQixtREFBbUQ7QUFDdEUsZ0JBQWdCLDhDQUE4QztBQUM5RCxZQUFZLHNDQUFzQztBQUNsRCxhQUFhLDRDQUE0QztBQUN6RCxnQkFBZ0IsMkNBQTJDO0FBQzNELGdCQUFnQiw2Q0FBNkM7QUFDN0QsV0FBVyxxQ0FBcUM7QUFDaEQsbUJBQW1CLGdEQUFnRDtBQUNuRSxnQkFBZ0Isa0NBQWtDO0FBQ2xELGNBQWMsbUNBQW1DO0FBQ2pELHNCQUFzQixrREFBa0Q7QUFDeEUsYUFBYSxtQ0FBbUM7QUFDaEQsZ0JBQWdCLHVDQUF1QztBQUN2RCxjQUFjLDZDQUE2QztBQUMzRCxlQUFlLHNDQUFzQztBQUNyRDs7Ozs7Ozs7Ozs7QUM5RWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCLFdBQVcsbUJBQU8sQ0FBQyxnQ0FBRztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWUsMkNBQTJDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWUsMkNBQTJDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSwrQ0FBK0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7OztBQ3pFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhLG1CQUFPLENBQUMsd0NBQU87Ozs7Ozs7Ozs7O0FDaEJmO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBVSxXQUFXLFdBQVc7Ozs7Ozs7Ozs7O0FDaEJwQjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhLG1CQUFPLENBQUMsNENBQVM7QUFDOUIsYUFBYSxtQkFBTyxDQUFDLHNEQUFjO0FBQ25DLGFBQWEsbUJBQU8sQ0FBQyxrREFBZTtBQUNwQyxhQUFhLG1CQUFPLENBQUMsd0RBQWtCOzs7Ozs7Ozs7OztBQ25CMUI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7O0FDRGhEO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDOzs7Ozs7Ozs7OztBQ0RoRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7QUNEaEQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7O0FDRGhEO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDOzs7Ozs7Ozs7OztBQ0RoRDtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhLG1CQUFPLENBQUMscURBQVc7QUFDaEMsYUFBYSxtQkFBTyxDQUFDLGlFQUFpQjtBQUN0QyxhQUFhLG1CQUFPLENBQUMsK0NBQVE7QUFDN0IsYUFBYSxtQkFBTyxDQUFDLCtEQUFnQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMscURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGVBQWU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUksNkJBQTZCO0FBQ2pDO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVSwwQkFBMEI7QUFDeEQ7QUFDQSxzQkFBc0IsVUFBVSw0QkFBNEI7QUFDNUQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNPLDRCQUE0Qix1QkFBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFdBQVcsMERBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0JBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlCQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsV0FBVywwREFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBd0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsY0FBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxZQUFZLGlCQUFpQjtBQUM3QixXQUFXLDBEQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCLEtBQUssb0JBQW9CO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkM7QUFDd0I7QUFDOUQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrRkFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsV0FBVywwREFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQixLQUFLLG9CQUFvQjtBQUNyRjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxXQUFXLDBEQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxXQUFXLDBEQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLEtBQUs7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsV0FBVyxzREFBUTtBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDZ0U7QUFDaEU7QUFDQSxXQUFXLDZCQUE2QjtBQUNYO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsTUFBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEtBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZUFBZTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxLQUFLO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsS0FBSyw2QkFBNkIsVUFBVTtBQUMzSCxvQ0FBb0MsaUNBQWlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsK0RBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrREFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLFFBQVEsZ0ZBQWdGO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLFFBQVEsbUZBQW1GO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLE1BQU07QUFDL0YsNENBQTRDLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLGdCQUFnQjtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLDJFQUEyRSxnQkFBZ0I7QUFDM0Y7QUFDQSxtQ0FBbUMsOEJBQThCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyxRQUFRLDZFQUE2RTtBQUN4TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQixFQUFFLGNBQWM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixRQUFRLDhFQUE4RTtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLG9GQUFvRixpQkFBaUI7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lEO0FBQ1U7QUFDTjtBQUNIO0FBQ1E7QUFDUjtBQUNJO0FBQ0U7QUFDWTtBQUNIO0FBQ3pFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDO0FBQ2I7QUFDUTtBQUNEO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNCQUFzQixLQUFLLGdCQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixXQUFXO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3RDtBQUNaO0FBQ047QUFDYjtBQUN6QjtBQUNBO0FBQ08sd0JBQXdCLGtFQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsTUFBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRDQUE0QztBQUMxRCxJQUFJLG9CQUFvQjtBQUN4QjtBQUNPLHlCQUF5QixrRUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzR0FBc0csWUFBWTtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixZQUFZO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrRUFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxLQUFLLDZCQUE2QixTQUFTO0FBQ3RILGdDQUFnQyxpQ0FBaUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxXQUFXLE1BQU0sVUFBVSxLQUFLLFdBQVcsSUFBSSxXQUFXLE1BQU0sZ0JBQWdCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE1BQU07QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsaUJBQWlCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGdCQUFnQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsSUFBSTtBQUNoRiwrRUFBK0UsS0FBSztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsc0NBQXNDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsb0NBQW9DO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzQ0FBc0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNLFNBQVMsa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQkFBK0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0JBQWtCLGVBQWUsS0FBSztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0EsMkJBQTJCLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDLFdBQVcsZ0JBQWdCLElBQUksY0FBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQSxJQUFJO0FBQ0o7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxVQUFVO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUxBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN4OENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9pbnRsLXV0aWxzL2xpYi9zcmMvZGlmZi5qcyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvY3VzdG9tLWNhcmQtaGVscGVycy9kaXN0L2luZGV4Lm0uanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL2FuZHJvaWQtdHYtY2FyZC50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2RlZmF1bHRLZXlzLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvZGVmYXVsdFNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9lbnVtcy9pbmRleC50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2VudW1zL3N2Zy50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9JQ29uZmlnLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9JQ3VzdG9tQWN0aW9uLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9JS2V5LnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9JU2VydmljZURhdGEudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9pbnRlcmZhY2VzL0lTb3VyY2UudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9pbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvY3NzLXRhZy5qcyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL2V2ZW50LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1ub2Rlcy5qcyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L3JlYWN0aXZlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2RldmVsb3BtZW50L2luZGV4LmpzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9kZXZlbG9wbWVudC9saXQtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGV2ZWxvcG1lbnQvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgTVNfUEVSX1NFQ09ORCA9IDFlMztcbnZhciBTRUNTX1BFUl9NSU4gPSA2MDtcbnZhciBTRUNTX1BFUl9IT1VSID0gU0VDU19QRVJfTUlOICogNjA7XG52YXIgU0VDU19QRVJfREFZID0gU0VDU19QRVJfSE9VUiAqIDI0O1xudmFyIFNFQ1NfUEVSX1dFRUsgPSBTRUNTX1BFUl9EQVkgKiA3O1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFVuaXQoZnJvbSwgdG8sIHRocmVzaG9sZHMpIHtcbiAgICBpZiAodG8gPT09IHZvaWQgMCkgeyB0byA9IERhdGUubm93KCk7IH1cbiAgICBpZiAodGhyZXNob2xkcyA9PT0gdm9pZCAwKSB7IHRocmVzaG9sZHMgPSB7fTsgfVxuICAgIHZhciByZXNvbHZlZFRocmVzaG9sZHMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9USFJFU0hPTERTKSwgKHRocmVzaG9sZHMgfHwge30pKTtcbiAgICB2YXIgc2VjcyA9ICgrZnJvbSAtICt0bykgLyBNU19QRVJfU0VDT05EO1xuICAgIGlmIChNYXRoLmFicyhzZWNzKSA8IHJlc29sdmVkVGhyZXNob2xkcy5zZWNvbmQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBNYXRoLnJvdW5kKHNlY3MpLFxuICAgICAgICAgICAgdW5pdDogJ3NlY29uZCcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBtaW5zID0gc2VjcyAvIFNFQ1NfUEVSX01JTjtcbiAgICBpZiAoTWF0aC5hYnMobWlucykgPCByZXNvbHZlZFRocmVzaG9sZHMubWludXRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogTWF0aC5yb3VuZChtaW5zKSxcbiAgICAgICAgICAgIHVuaXQ6ICdtaW51dGUnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgaG91cnMgPSBzZWNzIC8gU0VDU19QRVJfSE9VUjtcbiAgICBpZiAoTWF0aC5hYnMoaG91cnMpIDwgcmVzb2x2ZWRUaHJlc2hvbGRzLmhvdXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBNYXRoLnJvdW5kKGhvdXJzKSxcbiAgICAgICAgICAgIHVuaXQ6ICdob3VyJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGRheXMgPSBzZWNzIC8gU0VDU19QRVJfREFZO1xuICAgIGlmIChNYXRoLmFicyhkYXlzKSA8IHJlc29sdmVkVGhyZXNob2xkcy5kYXkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBNYXRoLnJvdW5kKGRheXMpLFxuICAgICAgICAgICAgdW5pdDogJ2RheScsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBmcm9tRGF0ZSA9IG5ldyBEYXRlKGZyb20pO1xuICAgIHZhciB0b0RhdGUgPSBuZXcgRGF0ZSh0byk7XG4gICAgdmFyIHllYXJzID0gZnJvbURhdGUuZ2V0RnVsbFllYXIoKSAtIHRvRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGlmIChNYXRoLnJvdW5kKE1hdGguYWJzKHllYXJzKSkgPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogTWF0aC5yb3VuZCh5ZWFycyksXG4gICAgICAgICAgICB1bml0OiAneWVhcicsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBtb250aHMgPSB5ZWFycyAqIDEyICsgZnJvbURhdGUuZ2V0TW9udGgoKSAtIHRvRGF0ZS5nZXRNb250aCgpO1xuICAgIGlmIChNYXRoLnJvdW5kKE1hdGguYWJzKG1vbnRocykpID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IE1hdGgucm91bmQobW9udGhzKSxcbiAgICAgICAgICAgIHVuaXQ6ICdtb250aCcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciB3ZWVrcyA9IHNlY3MgLyBTRUNTX1BFUl9XRUVLO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBNYXRoLnJvdW5kKHdlZWtzKSxcbiAgICAgICAgdW5pdDogJ3dlZWsnLFxuICAgIH07XG59XG5leHBvcnQgdmFyIERFRkFVTFRfVEhSRVNIT0xEUyA9IHtcbiAgICBzZWNvbmQ6IDQ1LFxuICAgIG1pbnV0ZTogNDUsXG4gICAgaG91cjogMjIsXG4gICAgZGF5OiA1LFxufTtcbiIsImltcG9ydHtzZWxlY3RVbml0IGFzIGV9ZnJvbVwiQGZvcm1hdGpzL2ludGwtdXRpbHNcIjt2YXIgdCxyLG49ZnVuY3Rpb24oZSx0KXtyZXR1cm4gaSh0KS5mb3JtYXQoZSl9LGk9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use3dlZWtkYXk6XCJsb25nXCIsbW9udGg6XCJsb25nXCIsZGF5OlwibnVtZXJpY1wifSl9LGE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbyh0KS5mb3JtYXQoZSl9LG89ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use3llYXI6XCJudW1lcmljXCIsbW9udGg6XCJsb25nXCIsZGF5OlwibnVtZXJpY1wifSl9LHU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYyh0KS5mb3JtYXQoZSl9LGM9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use3llYXI6XCJudW1lcmljXCIsbW9udGg6XCJudW1lcmljXCIsZGF5OlwibnVtZXJpY1wifSl9LG09ZnVuY3Rpb24oZSx0KXtyZXR1cm4gcyh0KS5mb3JtYXQoZSl9LHM9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use2RheTpcIm51bWVyaWNcIixtb250aDpcInNob3J0XCJ9KX0sbD1mdW5jdGlvbihlLHQpe3JldHVybiBkKHQpLmZvcm1hdChlKX0sZD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoZS5sYW5ndWFnZSx7bW9udGg6XCJsb25nXCIseWVhcjpcIm51bWVyaWNcIn0pfSxmPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGcodCkuZm9ybWF0KGUpfSxnPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChlLmxhbmd1YWdlLHttb250aDpcImxvbmdcIn0pfSxwPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGgodCkuZm9ybWF0KGUpfSxoPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChlLmxhbmd1YWdlLHt5ZWFyOlwibnVtZXJpY1wifSl9OyFmdW5jdGlvbihlKXtlLmxhbmd1YWdlPVwibGFuZ3VhZ2VcIixlLnN5c3RlbT1cInN5c3RlbVwiLGUuY29tbWFfZGVjaW1hbD1cImNvbW1hX2RlY2ltYWxcIixlLmRlY2ltYWxfY29tbWE9XCJkZWNpbWFsX2NvbW1hXCIsZS5zcGFjZV9jb21tYT1cInNwYWNlX2NvbW1hXCIsZS5ub25lPVwibm9uZVwifSh0fHwodD17fSkpLGZ1bmN0aW9uKGUpe2UubGFuZ3VhZ2U9XCJsYW5ndWFnZVwiLGUuc3lzdGVtPVwic3lzdGVtXCIsZS5hbV9wbT1cIjEyXCIsZS50d2VudHlfZm91cj1cIjI0XCJ9KHJ8fChyPXt9KSk7dmFyIGI9ZnVuY3Rpb24oZSl7aWYoZS50aW1lX2Zvcm1hdD09PXIubGFuZ3VhZ2V8fGUudGltZV9mb3JtYXQ9PT1yLnN5c3RlbSl7dmFyIHQ9ZS50aW1lX2Zvcm1hdD09PXIubGFuZ3VhZ2U/ZS5sYW5ndWFnZTp2b2lkIDAsbj0obmV3IERhdGUpLnRvTG9jYWxlU3RyaW5nKHQpO3JldHVybiBuLmluY2x1ZGVzKFwiQU1cIil8fG4uaW5jbHVkZXMoXCJQTVwiKX1yZXR1cm4gZS50aW1lX2Zvcm1hdD09PXIuYW1fcG19LHY9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gXyh0KS5mb3JtYXQoZSl9LF89ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGUubGFuZ3VhZ2Use3llYXI6XCJudW1lcmljXCIsbW9udGg6XCJsb25nXCIsZGF5OlwibnVtZXJpY1wiLGhvdXI6YihlKT9cIm51bWVyaWNcIjpcIjItZGlnaXRcIixtaW51dGU6XCIyLWRpZ2l0XCIsaG91cjEyOmIoZSl9KX0seT1mdW5jdGlvbihlLHQpe3JldHVybiB3KHQpLmZvcm1hdChlKX0sdz1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoZS5sYW5ndWFnZSx7eWVhcjpcIm51bWVyaWNcIixtb250aDpcImxvbmdcIixkYXk6XCJudW1lcmljXCIsaG91cjpiKGUpP1wibnVtZXJpY1wiOlwiMi1kaWdpdFwiLG1pbnV0ZTpcIjItZGlnaXRcIixzZWNvbmQ6XCIyLWRpZ2l0XCIsaG91cjEyOmIoZSl9KX0saz1mdW5jdGlvbihlLHQpe3JldHVybiB4KHQpLmZvcm1hdChlKX0seD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoZS5sYW5ndWFnZSx7eWVhcjpcIm51bWVyaWNcIixtb250aDpcIm51bWVyaWNcIixkYXk6XCJudW1lcmljXCIsaG91cjpcIm51bWVyaWNcIixtaW51dGU6XCIyLWRpZ2l0XCIsaG91cjEyOmIoZSl9KX0sRD1mdW5jdGlvbihlLHQpe3JldHVybiBTKHQpLmZvcm1hdChlKX0sUz1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoZS5sYW5ndWFnZSx7aG91cjpcIm51bWVyaWNcIixtaW51dGU6XCIyLWRpZ2l0XCIsaG91cjEyOmIoZSl9KX0sRj1mdW5jdGlvbihlLHQpe3JldHVybiBUKHQpLmZvcm1hdChlKX0sVD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoZS5sYW5ndWFnZSx7aG91cjpiKGUpP1wibnVtZXJpY1wiOlwiMi1kaWdpdFwiLG1pbnV0ZTpcIjItZGlnaXRcIixzZWNvbmQ6XCIyLWRpZ2l0XCIsaG91cjEyOmIoZSl9KX0sST1mdW5jdGlvbihlLHQpe3JldHVybiBOKHQpLmZvcm1hdChlKX0sTj1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoZS5sYW5ndWFnZSx7aG91cjpiKGUpP1wibnVtZXJpY1wiOlwiMi1kaWdpdFwiLG1pbnV0ZTpcIjItZGlnaXRcIixzZWNvbmQ6XCIyLWRpZ2l0XCIsaG91cjEyOmIoZSl9KX0sTT1mdW5jdGlvbih0LHIsbixpKXt2b2lkIDA9PT1pJiYoaT0hMCk7dmFyIGE9ZSh0LG4pO3JldHVybiBpP2Z1bmN0aW9uKGUpe3JldHVybiBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQoZS5sYW5ndWFnZSx7bnVtZXJpYzpcImF1dG9cIn0pfShyKS5mb3JtYXQoYS52YWx1ZSxhLnVuaXQpOkludGwuTnVtYmVyRm9ybWF0KHIubGFuZ3VhZ2Use3N0eWxlOlwidW5pdFwiLHVuaXQ6YS51bml0LHVuaXREaXNwbGF5OlwibG9uZ1wifSkuZm9ybWF0KE1hdGguYWJzKGEudmFsdWUpKX07ZnVuY3Rpb24gQyhlKXt2YXIgdCxyPTM2MDAqKHQ9ZS5hdHRyaWJ1dGVzLnJlbWFpbmluZy5zcGxpdChcIjpcIikubWFwKE51bWJlcikpWzBdKzYwKnRbMV0rdFsyXTtpZihcImFjdGl2ZVwiPT09ZS5zdGF0ZSl7dmFyIG49KG5ldyBEYXRlKS5nZXRUaW1lKCksaT1uZXcgRGF0ZShlLmxhc3RfY2hhbmdlZCkuZ2V0VGltZSgpO3I9TWF0aC5tYXgoci0obi1pKS8xZTMsMCl9cmV0dXJuIHJ9ZnVuY3Rpb24gTygpe3JldHVybihPPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPWFyZ3VtZW50c1t0XTtmb3IodmFyIG4gaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixuKSYmKGVbbl09cltuXSl9cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIHE9ZnVuY3Rpb24oZSx0LHIsbil7dm9pZCAwPT09biYmKG49ITEpLGUuX3RoZW1lc3x8KGUuX3RoZW1lcz17fSk7dmFyIGk9dC5kZWZhdWx0X3RoZW1lOyhcImRlZmF1bHRcIj09PXJ8fHImJnQudGhlbWVzW3JdKSYmKGk9cik7dmFyIGE9Tyh7fSxlLl90aGVtZXMpO2lmKFwiZGVmYXVsdFwiIT09aSl7dmFyIG89dC50aGVtZXNbaV07T2JqZWN0LmtleXMobykuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgcj1cIi0tXCIrdDtlLl90aGVtZXNbcl09XCJcIixhW3JdPW9bdF19KX1pZihlLnVwZGF0ZVN0eWxlcz9lLnVwZGF0ZVN0eWxlcyhhKTp3aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5zdHlsZVN1YnRyZWUoZSxhKSxuKXt2YXIgdT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPXRoZW1lLWNvbG9yXVwiKTtpZih1KXt1Lmhhc0F0dHJpYnV0ZShcImRlZmF1bHQtY29udGVudFwiKXx8dS5zZXRBdHRyaWJ1dGUoXCJkZWZhdWx0LWNvbnRlbnRcIix1LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIikpO3ZhciBjPWFbXCItLXByaW1hcnktY29sb3JcIl18fHUuZ2V0QXR0cmlidXRlKFwiZGVmYXVsdC1jb250ZW50XCIpO3Uuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLGMpfX19LEE9ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZS5nZXRDYXJkU2l6ZT9lLmdldENhcmRTaXplKCk6NH07ZnVuY3Rpb24gRShlKXtyZXR1cm4gZS5zdWJzdHIoMCxlLmluZGV4T2YoXCIuXCIpKX1mdW5jdGlvbiBqKGUpe3JldHVybiBlLnN1YnN0cihlLmluZGV4T2YoXCIuXCIpKzEpfWZ1bmN0aW9uIFIoZSl7dmFyIHQscj0obnVsbD09ZXx8bnVsbD09KHQ9ZS5sb2NhbGUpP3ZvaWQgMDp0Lmxhbmd1YWdlKXx8XCJlblwiO3JldHVybiBlLnRyYW5zbGF0aW9uTWV0YWRhdGEudHJhbnNsYXRpb25zW3JdJiZlLnRyYW5zbGF0aW9uTWV0YWRhdGEudHJhbnNsYXRpb25zW3JdLmlzUlRMfHwhMX1mdW5jdGlvbiB6KGUpe3JldHVybiBSKGUpP1wicnRsXCI6XCJsdHJcIn1mdW5jdGlvbiBMKGUpe3JldHVybiBFKGUuZW50aXR5X2lkKX12YXIgUD1mdW5jdGlvbihlKXtyZXR1cm4hIWUuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50fHwhIWUuYXR0cmlidXRlcy5zdGF0ZV9jbGFzc30sVT1mdW5jdGlvbihlKXtzd2l0Y2goZS5udW1iZXJfZm9ybWF0KXtjYXNlIHQuY29tbWFfZGVjaW1hbDpyZXR1cm5bXCJlbi1VU1wiLFwiZW5cIl07Y2FzZSB0LmRlY2ltYWxfY29tbWE6cmV0dXJuW1wiZGVcIixcImVzXCIsXCJpdFwiXTtjYXNlIHQuc3BhY2VfY29tbWE6cmV0dXJuW1wiZnJcIixcInN2XCIsXCJjc1wiXTtjYXNlIHQuc3lzdGVtOnJldHVybjtkZWZhdWx0OnJldHVybiBlLmxhbmd1YWdlfX0sQj1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0yKSxNYXRoLnJvdW5kKGUqTWF0aC5wb3coMTAsdCkpL01hdGgucG93KDEwLHQpfSxIPWZ1bmN0aW9uKGUscixuKXt2YXIgaT1yP1Uocik6dm9pZCAwO2lmKE51bWJlci5pc05hTj1OdW1iZXIuaXNOYU58fGZ1bmN0aW9uIGUodCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJmUodCl9LChudWxsPT1yP3ZvaWQgMDpyLm51bWJlcl9mb3JtYXQpIT09dC5ub25lJiYhTnVtYmVyLmlzTmFOKE51bWJlcihlKSkmJkludGwpdHJ5e3JldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoaSxWKGUsbikpLmZvcm1hdChOdW1iZXIoZSkpfWNhdGNoKHQpe3JldHVybiBjb25zb2xlLmVycm9yKHQpLG5ldyBJbnRsLk51bWJlckZvcm1hdCh2b2lkIDAsVihlLG4pKS5mb3JtYXQoTnVtYmVyKGUpKX1yZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9lOkIoZSxudWxsPT1uP3ZvaWQgMDpuLm1heGltdW1GcmFjdGlvbkRpZ2l0cykudG9TdHJpbmcoKSsoXCJjdXJyZW5jeVwiPT09KG51bGw9PW4/dm9pZCAwOm4uc3R5bGUpP1wiIFwiK24uY3VycmVuY3k6XCJcIil9LFY9ZnVuY3Rpb24oZSx0KXt2YXIgcj1PKHttYXhpbXVtRnJhY3Rpb25EaWdpdHM6Mn0sdCk7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIHI7aWYoIXR8fCF0Lm1pbmltdW1GcmFjdGlvbkRpZ2l0cyYmIXQubWF4aW11bUZyYWN0aW9uRGlnaXRzKXt2YXIgbj1lLmluZGV4T2YoXCIuXCIpPi0xP2Uuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDowO3IubWluaW11bUZyYWN0aW9uRGlnaXRzPW4sci5tYXhpbXVtRnJhY3Rpb25EaWdpdHM9bn1yZXR1cm4gcn0sVz1mdW5jdGlvbihlLHQscixuKXt2YXIgaT12b2lkIDAhPT1uP246dC5zdGF0ZTtpZihcInVua25vd25cIj09PWl8fFwidW5hdmFpbGFibGVcIj09PWkpcmV0dXJuIGUoXCJzdGF0ZS5kZWZhdWx0LlwiK2kpO2lmKFAodCkpe2lmKFwibW9uZXRhcnlcIj09PXQuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpdHJ5e3JldHVybiBIKGkscix7c3R5bGU6XCJjdXJyZW5jeVwiLGN1cnJlbmN5OnQuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50fSl9Y2F0Y2goZSl7fXJldHVybiBIKGkscikrKHQuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50P1wiIFwiK3QuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50OlwiXCIpfXZhciBvPUwodCk7aWYoXCJpbnB1dF9kYXRldGltZVwiPT09byl7dmFyIHU7aWYodm9pZCAwPT09bilyZXR1cm4gdC5hdHRyaWJ1dGVzLmhhc19kYXRlJiZ0LmF0dHJpYnV0ZXMuaGFzX3RpbWU/KHU9bmV3IERhdGUodC5hdHRyaWJ1dGVzLnllYXIsdC5hdHRyaWJ1dGVzLm1vbnRoLTEsdC5hdHRyaWJ1dGVzLmRheSx0LmF0dHJpYnV0ZXMuaG91cix0LmF0dHJpYnV0ZXMubWludXRlKSx2KHUscikpOnQuYXR0cmlidXRlcy5oYXNfZGF0ZT8odT1uZXcgRGF0ZSh0LmF0dHJpYnV0ZXMueWVhcix0LmF0dHJpYnV0ZXMubW9udGgtMSx0LmF0dHJpYnV0ZXMuZGF5KSxhKHUscikpOnQuYXR0cmlidXRlcy5oYXNfdGltZT8oKHU9bmV3IERhdGUpLnNldEhvdXJzKHQuYXR0cmlidXRlcy5ob3VyLHQuYXR0cmlidXRlcy5taW51dGUpLEQodSxyKSk6dC5zdGF0ZTt0cnl7dmFyIGM9bi5zcGxpdChcIiBcIik7aWYoMj09PWMubGVuZ3RoKXJldHVybiB2KG5ldyBEYXRlKGMuam9pbihcIlRcIikpLHIpO2lmKDE9PT1jLmxlbmd0aCl7aWYobi5pbmNsdWRlcyhcIi1cIikpcmV0dXJuIGEobmV3IERhdGUobitcIlQwMDowMFwiKSxyKTtpZihuLmluY2x1ZGVzKFwiOlwiKSl7dmFyIG09bmV3IERhdGU7cmV0dXJuIEQobmV3IERhdGUobS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXStcIlRcIituKSxyKX19cmV0dXJuIG59Y2F0Y2goZSl7cmV0dXJuIG59fXJldHVyblwiaHVtaWRpZmllclwiPT09byYmXCJvblwiPT09aSYmdC5hdHRyaWJ1dGVzLmh1bWlkaXR5P3QuYXR0cmlidXRlcy5odW1pZGl0eStcIiAlXCI6XCJjb3VudGVyXCI9PT1vfHxcIm51bWJlclwiPT09b3x8XCJpbnB1dF9udW1iZXJcIj09PW8/SChpLHIpOnQuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MmJmUoXCJjb21wb25lbnQuXCIrbytcIi5zdGF0ZS5cIit0LmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzK1wiLlwiK2kpfHxlKFwiY29tcG9uZW50LlwiK28rXCIuc3RhdGUuXy5cIitpKXx8aX0sRz1cIm1kaTpib29rbWFya1wiLEo9XCJsb3ZlbGFjZVwiLEs9W1wiY2xpbWF0ZVwiLFwiY292ZXJcIixcImNvbmZpZ3VyYXRvclwiLFwiaW5wdXRfc2VsZWN0XCIsXCJpbnB1dF9udW1iZXJcIixcImlucHV0X3RleHRcIixcImxvY2tcIixcIm1lZGlhX3BsYXllclwiLFwic2NlbmVcIixcInNjcmlwdFwiLFwidGltZXJcIixcInZhY3V1bVwiLFwid2F0ZXJfaGVhdGVyXCIsXCJ3ZWJsaW5rXCJdLFE9W1wiYWxhcm1fY29udHJvbF9wYW5lbFwiLFwiYXV0b21hdGlvblwiLFwiY2FtZXJhXCIsXCJjbGltYXRlXCIsXCJjb25maWd1cmF0b3JcIixcImNvdmVyXCIsXCJmYW5cIixcImdyb3VwXCIsXCJoaXN0b3J5X2dyYXBoXCIsXCJpbnB1dF9kYXRldGltZVwiLFwibGlnaHRcIixcImxvY2tcIixcIm1lZGlhX3BsYXllclwiLFwic2NyaXB0XCIsXCJzdW5cIixcInVwZGF0ZXJcIixcInZhY3V1bVwiLFwid2F0ZXJfaGVhdGVyXCIsXCJ3ZWF0aGVyXCJdLFg9W1wiaW5wdXRfbnVtYmVyXCIsXCJpbnB1dF9zZWxlY3RcIixcImlucHV0X3RleHRcIixcInNjZW5lXCIsXCJ3ZWJsaW5rXCJdLFk9W1wiY2FtZXJhXCIsXCJjb25maWd1cmF0b3JcIixcImhpc3RvcnlfZ3JhcGhcIixcInNjZW5lXCJdLFo9W1wiY2xvc2VkXCIsXCJsb2NrZWRcIixcIm9mZlwiXSwkPW5ldyBTZXQoW1wiZmFuXCIsXCJpbnB1dF9ib29sZWFuXCIsXCJsaWdodFwiLFwic3dpdGNoXCIsXCJncm91cFwiLFwiYXV0b21hdGlvblwiXSksZWU9XCLCsENcIix0ZT1cIsKwRlwiLHJlPVwiZ3JvdXAuZGVmYXVsdF92aWV3XCIsbmU9ZnVuY3Rpb24oZSx0LHIsbil7bj1ufHx7fSxyPW51bGw9PXI/e306cjt2YXIgaT1uZXcgRXZlbnQodCx7YnViYmxlczp2b2lkIDA9PT1uLmJ1YmJsZXN8fG4uYnViYmxlcyxjYW5jZWxhYmxlOkJvb2xlYW4obi5jYW5jZWxhYmxlKSxjb21wb3NlZDp2b2lkIDA9PT1uLmNvbXBvc2VkfHxuLmNvbXBvc2VkfSk7cmV0dXJuIGkuZGV0YWlsPXIsZS5kaXNwYXRjaEV2ZW50KGkpLGl9LGllPW5ldyBTZXQoW1wiY2FsbC1zZXJ2aWNlXCIsXCJkaXZpZGVyXCIsXCJzZWN0aW9uXCIsXCJ3ZWJsaW5rXCIsXCJjYXN0XCIsXCJzZWxlY3RcIl0pLGFlPXthbGVydDpcInRvZ2dsZVwiLGF1dG9tYXRpb246XCJ0b2dnbGVcIixjbGltYXRlOlwiY2xpbWF0ZVwiLGNvdmVyOlwiY292ZXJcIixmYW46XCJ0b2dnbGVcIixncm91cDpcImdyb3VwXCIsaW5wdXRfYm9vbGVhbjpcInRvZ2dsZVwiLGlucHV0X251bWJlcjpcImlucHV0LW51bWJlclwiLGlucHV0X3NlbGVjdDpcImlucHV0LXNlbGVjdFwiLGlucHV0X3RleHQ6XCJpbnB1dC10ZXh0XCIsbGlnaHQ6XCJ0b2dnbGVcIixsb2NrOlwibG9ja1wiLG1lZGlhX3BsYXllcjpcIm1lZGlhLXBsYXllclwiLHJlbW90ZTpcInRvZ2dsZVwiLHNjZW5lOlwic2NlbmVcIixzY3JpcHQ6XCJzY3JpcHRcIixzZW5zb3I6XCJzZW5zb3JcIix0aW1lcjpcInRpbWVyXCIsc3dpdGNoOlwidG9nZ2xlXCIsdmFjdXVtOlwidG9nZ2xlXCIsd2F0ZXJfaGVhdGVyOlwiY2xpbWF0ZVwiLGlucHV0X2RhdGV0aW1lOlwiaW5wdXQtZGF0ZXRpbWVcIn0sb2U9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD0hMSk7dmFyIHI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbihcImh1aS1lcnJvci1jYXJkXCIse3R5cGU6XCJlcnJvclwiLGVycm9yOmUsY29uZmlnOnR9KX0sbj1mdW5jdGlvbihlLHQpe3ZhciBuPXdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO3RyeXtpZighbi5zZXRDb25maWcpcmV0dXJuO24uc2V0Q29uZmlnKHQpfWNhdGNoKG4pe3JldHVybiBjb25zb2xlLmVycm9yKGUsbikscihuLm1lc3NhZ2UsdCl9cmV0dXJuIG59O2lmKCFlfHxcIm9iamVjdFwiIT10eXBlb2YgZXx8IXQmJiFlLnR5cGUpcmV0dXJuIHIoXCJObyB0eXBlIGRlZmluZWRcIixlKTt2YXIgaT1lLnR5cGU7aWYoaSYmaS5zdGFydHNXaXRoKFwiY3VzdG9tOlwiKSlpPWkuc3Vic3RyKFwiY3VzdG9tOlwiLmxlbmd0aCk7ZWxzZSBpZih0KWlmKGllLmhhcyhpKSlpPVwiaHVpLVwiK2krXCItcm93XCI7ZWxzZXtpZighZS5lbnRpdHkpcmV0dXJuIHIoXCJJbnZhbGlkIGNvbmZpZyBnaXZlbi5cIixlKTt2YXIgYT1lLmVudGl0eS5zcGxpdChcIi5cIiwxKVswXTtpPVwiaHVpLVwiKyhhZVthXXx8XCJ0ZXh0XCIpK1wiLWVudGl0eS1yb3dcIn1lbHNlIGk9XCJodWktXCIraStcIi1jYXJkXCI7aWYoY3VzdG9tRWxlbWVudHMuZ2V0KGkpKXJldHVybiBuKGksZSk7dmFyIG89cihcIkN1c3RvbSBlbGVtZW50IGRvZXNuJ3QgZXhpc3Q6IFwiK2UudHlwZStcIi5cIixlKTtvLnN0eWxlLmRpc3BsYXk9XCJOb25lXCI7dmFyIHU9c2V0VGltZW91dChmdW5jdGlvbigpe28uc3R5bGUuZGlzcGxheT1cIlwifSwyZTMpO3JldHVybiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChlLnR5cGUpLnRoZW4oZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSksbmUobyxcImxsLXJlYnVpbGRcIix7fSxvKX0pLG99LHVlPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbjtyZXR1cm4gdm9pZCAwPT09ciYmKHI9ITEpLGZ1bmN0aW9uKCl7dmFyIGk9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpLGE9dGhpcyxvPWZ1bmN0aW9uKCl7bj1udWxsLHJ8fGUuYXBwbHkoYSxpKX0sdT1yJiYhbjtjbGVhclRpbWVvdXQobiksbj1zZXRUaW1lb3V0KG8sdCksdSYmZS5hcHBseShhLGkpfX0sY2U9e2FsZXJ0OlwibWRpOmFsZXJ0XCIsYXV0b21hdGlvbjpcIm1kaTpwbGF5bGlzdC1wbGF5XCIsY2FsZW5kYXI6XCJtZGk6Y2FsZW5kYXJcIixjYW1lcmE6XCJtZGk6dmlkZW9cIixjbGltYXRlOlwibWRpOnRoZXJtb3N0YXRcIixjb25maWd1cmF0b3I6XCJtZGk6c2V0dGluZ3NcIixjb252ZXJzYXRpb246XCJtZGk6dGV4dC10by1zcGVlY2hcIixkZXZpY2VfdHJhY2tlcjpcIm1kaTphY2NvdW50XCIsZmFuOlwibWRpOmZhblwiLGdyb3VwOlwibWRpOmdvb2dsZS1jaXJjbGVzLWNvbW11bml0aWVzXCIsaGlzdG9yeV9ncmFwaDpcIm1kaTpjaGFydC1saW5lXCIsaG9tZWFzc2lzdGFudDpcIm1kaTpob21lLWFzc2lzdGFudFwiLGhvbWVraXQ6XCJtZGk6aG9tZS1hdXRvbWF0aW9uXCIsaW1hZ2VfcHJvY2Vzc2luZzpcIm1kaTppbWFnZS1maWx0ZXItZnJhbWVzXCIsaW5wdXRfYm9vbGVhbjpcIm1kaTpkcmF3aW5nXCIsaW5wdXRfZGF0ZXRpbWU6XCJtZGk6Y2FsZW5kYXItY2xvY2tcIixpbnB1dF9udW1iZXI6XCJtZGk6cmF5LXZlcnRleFwiLGlucHV0X3NlbGVjdDpcIm1kaTpmb3JtYXQtbGlzdC1idWxsZXRlZFwiLGlucHV0X3RleHQ6XCJtZGk6dGV4dGJveFwiLGxpZ2h0OlwibWRpOmxpZ2h0YnVsYlwiLG1haWxib3g6XCJtZGk6bWFpbGJveFwiLG5vdGlmeTpcIm1kaTpjb21tZW50LWFsZXJ0XCIscGVyc29uOlwibWRpOmFjY291bnRcIixwbGFudDpcIm1kaTpmbG93ZXJcIixwcm94aW1pdHk6XCJtZGk6YXBwbGUtc2FmYXJpXCIscmVtb3RlOlwibWRpOnJlbW90ZVwiLHNjZW5lOlwibWRpOmdvb2dsZS1wYWdlc1wiLHNjcmlwdDpcIm1kaTpmaWxlLWRvY3VtZW50XCIsc2Vuc29yOlwibWRpOmV5ZVwiLHNpbXBsZV9hbGFybTpcIm1kaTpiZWxsXCIsc3VuOlwibWRpOndoaXRlLWJhbGFuY2Utc3VubnlcIixzd2l0Y2g6XCJtZGk6Zmxhc2hcIix0aW1lcjpcIm1kaTp0aW1lclwiLHVwZGF0ZXI6XCJtZGk6Y2xvdWQtdXBsb2FkXCIsdmFjdXVtOlwibWRpOnJvYm90LXZhY3V1bVwiLHdhdGVyX2hlYXRlcjpcIm1kaTp0aGVybW9tZXRlclwiLHdlYmxpbms6XCJtZGk6b3Blbi1pbi1uZXdcIn07ZnVuY3Rpb24gbWUoZSx0KXtpZihlIGluIGNlKXJldHVybiBjZVtlXTtzd2l0Y2goZSl7Y2FzZVwiYWxhcm1fY29udHJvbF9wYW5lbFwiOnN3aXRjaCh0KXtjYXNlXCJhcm1lZF9ob21lXCI6cmV0dXJuXCJtZGk6YmVsbC1wbHVzXCI7Y2FzZVwiYXJtZWRfbmlnaHRcIjpyZXR1cm5cIm1kaTpiZWxsLXNsZWVwXCI7Y2FzZVwiZGlzYXJtZWRcIjpyZXR1cm5cIm1kaTpiZWxsLW91dGxpbmVcIjtjYXNlXCJ0cmlnZ2VyZWRcIjpyZXR1cm5cIm1kaTpiZWxsLXJpbmdcIjtkZWZhdWx0OnJldHVyblwibWRpOmJlbGxcIn1jYXNlXCJiaW5hcnlfc2Vuc29yXCI6cmV0dXJuIHQmJlwib2ZmXCI9PT10P1wibWRpOnJhZGlvYm94LWJsYW5rXCI6XCJtZGk6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO2Nhc2VcImNvdmVyXCI6cmV0dXJuXCJjbG9zZWRcIj09PXQ/XCJtZGk6d2luZG93LWNsb3NlZFwiOlwibWRpOndpbmRvdy1vcGVuXCI7Y2FzZVwibG9ja1wiOnJldHVybiB0JiZcInVubG9ja2VkXCI9PT10P1wibWRpOmxvY2stb3BlblwiOlwibWRpOmxvY2tcIjtjYXNlXCJtZWRpYV9wbGF5ZXJcIjpyZXR1cm4gdCYmXCJvZmZcIiE9PXQmJlwiaWRsZVwiIT09dD9cIm1kaTpjYXN0LWNvbm5lY3RlZFwiOlwibWRpOmNhc3RcIjtjYXNlXCJ6d2F2ZVwiOnN3aXRjaCh0KXtjYXNlXCJkZWFkXCI6cmV0dXJuXCJtZGk6ZW1vdGljb24tZGVhZFwiO2Nhc2VcInNsZWVwaW5nXCI6cmV0dXJuXCJtZGk6c2xlZXBcIjtjYXNlXCJpbml0aWFsaXppbmdcIjpyZXR1cm5cIm1kaTp0aW1lci1zYW5kXCI7ZGVmYXVsdDpyZXR1cm5cIm1kaTp6LXdhdmVcIn1kZWZhdWx0OnJldHVybiBjb25zb2xlLndhcm4oXCJVbmFibGUgdG8gZmluZCBpY29uIGZvciBkb21haW4gXCIrZStcIiAoXCIrdCtcIilcIiksXCJtZGk6Ym9va21hcmtcIn19dmFyIHNlPWZ1bmN0aW9uKGUsdCl7dmFyIHI9dC52YWx1ZXx8dCxuPXQuYXR0cmlidXRlP2UuYXR0cmlidXRlc1t0LmF0dHJpYnV0ZV06ZS5zdGF0ZTtzd2l0Y2godC5vcGVyYXRvcnx8XCI9PVwiKXtjYXNlXCI9PVwiOnJldHVybiBuPT09cjtjYXNlXCI8PVwiOnJldHVybiBuPD1yO2Nhc2VcIjxcIjpyZXR1cm4gbjxyO2Nhc2VcIj49XCI6cmV0dXJuIG4+PXI7Y2FzZVwiPlwiOnJldHVybiBuPnI7Y2FzZVwiIT1cIjpyZXR1cm4gbiE9PXI7Y2FzZVwicmVnZXhcIjpyZXR1cm4gbi5tYXRjaChyKTtkZWZhdWx0OnJldHVybiExfX0sbGU9ZnVuY3Rpb24oZSl7bmUod2luZG93LFwiaGFwdGljXCIsZSl9LGRlPWZ1bmN0aW9uKGUsdCxyKXt2b2lkIDA9PT1yJiYocj0hMSkscj9oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLFwiXCIsdCk6aGlzdG9yeS5wdXNoU3RhdGUobnVsbCxcIlwiLHQpLG5lKHdpbmRvdyxcImxvY2F0aW9uLWNoYW5nZWRcIix7cmVwbGFjZTpyfSl9LGZlPWZ1bmN0aW9uKGUsdCxyKXt2b2lkIDA9PT1yJiYocj0hMCk7dmFyIG4saT1FKHQpLGE9XCJncm91cFwiPT09aT9cImhvbWVhc3Npc3RhbnRcIjppO3N3aXRjaChpKXtjYXNlXCJsb2NrXCI6bj1yP1widW5sb2NrXCI6XCJsb2NrXCI7YnJlYWs7Y2FzZVwiY292ZXJcIjpuPXI/XCJvcGVuX2NvdmVyXCI6XCJjbG9zZV9jb3ZlclwiO2JyZWFrO2RlZmF1bHQ6bj1yP1widHVybl9vblwiOlwidHVybl9vZmZcIn1yZXR1cm4gZS5jYWxsU2VydmljZShhLG4se2VudGl0eV9pZDp0fSl9LGdlPWZ1bmN0aW9uKGUsdCl7dmFyIHI9Wi5pbmNsdWRlcyhlLnN0YXRlc1t0XS5zdGF0ZSk7cmV0dXJuIGZlKGUsdCxyKX0scGU9ZnVuY3Rpb24oZSx0LHIsbil7aWYobnx8KG49e2FjdGlvbjpcIm1vcmUtaW5mb1wifSksIW4uY29uZmlybWF0aW9ufHxuLmNvbmZpcm1hdGlvbi5leGVtcHRpb25zJiZuLmNvbmZpcm1hdGlvbi5leGVtcHRpb25zLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIGUudXNlcj09PXQudXNlci5pZH0pfHwobGUoXCJ3YXJuaW5nXCIpLGNvbmZpcm0obi5jb25maXJtYXRpb24udGV4dHx8XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gXCIrbi5hY3Rpb24rXCI/XCIpKSlzd2l0Y2gobi5hY3Rpb24pe2Nhc2VcIm1vcmUtaW5mb1wiOihyLmVudGl0eXx8ci5jYW1lcmFfaW1hZ2UpJiZuZShlLFwiaGFzcy1tb3JlLWluZm9cIix7ZW50aXR5SWQ6ci5lbnRpdHk/ci5lbnRpdHk6ci5jYW1lcmFfaW1hZ2V9KTticmVhaztjYXNlXCJuYXZpZ2F0ZVwiOm4ubmF2aWdhdGlvbl9wYXRoJiZkZSgwLG4ubmF2aWdhdGlvbl9wYXRoKTticmVhaztjYXNlXCJ1cmxcIjpuLnVybF9wYXRoJiZ3aW5kb3cub3BlbihuLnVybF9wYXRoKTticmVhaztjYXNlXCJ0b2dnbGVcIjpyLmVudGl0eSYmKGdlKHQsci5lbnRpdHkpLGxlKFwic3VjY2Vzc1wiKSk7YnJlYWs7Y2FzZVwiY2FsbC1zZXJ2aWNlXCI6aWYoIW4uc2VydmljZSlyZXR1cm4gdm9pZCBsZShcImZhaWx1cmVcIik7dmFyIGk9bi5zZXJ2aWNlLnNwbGl0KFwiLlwiLDIpO3QuY2FsbFNlcnZpY2UoaVswXSxpWzFdLG4uc2VydmljZV9kYXRhLG4udGFyZ2V0KSxsZShcInN1Y2Nlc3NcIik7YnJlYWs7Y2FzZVwiZmlyZS1kb20tZXZlbnRcIjpuZShlLFwibGwtY3VzdG9tXCIsbil9fSxoZT1mdW5jdGlvbihlLHQscixuKXt2YXIgaTtcImRvdWJsZV90YXBcIj09PW4mJnIuZG91YmxlX3RhcF9hY3Rpb24/aT1yLmRvdWJsZV90YXBfYWN0aW9uOlwiaG9sZFwiPT09biYmci5ob2xkX2FjdGlvbj9pPXIuaG9sZF9hY3Rpb246XCJ0YXBcIj09PW4mJnIudGFwX2FjdGlvbiYmKGk9ci50YXBfYWN0aW9uKSxwZShlLHQscixpKX0sYmU9ZnVuY3Rpb24oZSx0LHIsbixpKXt2YXIgYTtpZihpJiZyLmRvdWJsZV90YXBfYWN0aW9uP2E9ci5kb3VibGVfdGFwX2FjdGlvbjpuJiZyLmhvbGRfYWN0aW9uP2E9ci5ob2xkX2FjdGlvbjohbiYmci50YXBfYWN0aW9uJiYoYT1yLnRhcF9hY3Rpb24pLGF8fChhPXthY3Rpb246XCJtb3JlLWluZm9cIn0pLCFhLmNvbmZpcm1hdGlvbnx8YS5jb25maXJtYXRpb24uZXhlbXB0aW9ucyYmYS5jb25maXJtYXRpb24uZXhlbXB0aW9ucy5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBlLnVzZXI9PT10LnVzZXIuaWR9KXx8Y29uZmlybShhLmNvbmZpcm1hdGlvbi50ZXh0fHxcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBcIithLmFjdGlvbitcIj9cIikpc3dpdGNoKGEuYWN0aW9uKXtjYXNlXCJtb3JlLWluZm9cIjooYS5lbnRpdHl8fHIuZW50aXR5fHxyLmNhbWVyYV9pbWFnZSkmJihuZShlLFwiaGFzcy1tb3JlLWluZm9cIix7ZW50aXR5SWQ6YS5lbnRpdHk/YS5lbnRpdHk6ci5lbnRpdHk/ci5lbnRpdHk6ci5jYW1lcmFfaW1hZ2V9KSxhLmhhcHRpYyYmbGUoYS5oYXB0aWMpKTticmVhaztjYXNlXCJuYXZpZ2F0ZVwiOmEubmF2aWdhdGlvbl9wYXRoJiYoZGUoMCxhLm5hdmlnYXRpb25fcGF0aCksYS5oYXB0aWMmJmxlKGEuaGFwdGljKSk7YnJlYWs7Y2FzZVwidXJsXCI6YS51cmxfcGF0aCYmd2luZG93Lm9wZW4oYS51cmxfcGF0aCksYS5oYXB0aWMmJmxlKGEuaGFwdGljKTticmVhaztjYXNlXCJ0b2dnbGVcIjpyLmVudGl0eSYmKGdlKHQsci5lbnRpdHkpLGEuaGFwdGljJiZsZShhLmhhcHRpYykpO2JyZWFrO2Nhc2VcImNhbGwtc2VydmljZVwiOmlmKCFhLnNlcnZpY2UpcmV0dXJuO3ZhciBvPWEuc2VydmljZS5zcGxpdChcIi5cIiwyKSx1PW9bMF0sYz1vWzFdLG09Tyh7fSxhLnNlcnZpY2VfZGF0YSk7XCJlbnRpdHlcIj09PW0uZW50aXR5X2lkJiYobS5lbnRpdHlfaWQ9ci5lbnRpdHkpLHQuY2FsbFNlcnZpY2UodSxjLG0sYS50YXJnZXQpLGEuaGFwdGljJiZsZShhLmhhcHRpYyk7YnJlYWs7Y2FzZVwiZmlyZS1kb20tZXZlbnRcIjpuZShlLFwibGwtY3VzdG9tXCIsYSksYS5oYXB0aWMmJmxlKGEuaGFwdGljKX19O2Z1bmN0aW9uIHZlKGUpe3JldHVybiB2b2lkIDAhPT1lJiZcIm5vbmVcIiE9PWUuYWN0aW9ufWZ1bmN0aW9uIF9lKGUsdCxyKXtpZih0LmhhcyhcImNvbmZpZ1wiKXx8cilyZXR1cm4hMDtpZihlLmNvbmZpZy5lbnRpdHkpe3ZhciBuPXQuZ2V0KFwiaGFzc1wiKTtyZXR1cm4hbnx8bi5zdGF0ZXNbZS5jb25maWcuZW50aXR5XSE9PWUuaGFzcy5zdGF0ZXNbZS5jb25maWcuZW50aXR5XX1yZXR1cm4hMX1mdW5jdGlvbiB5ZShlKXtyZXR1cm4gdm9pZCAwIT09ZSYmXCJub25lXCIhPT1lLmFjdGlvbn12YXIgd2U9ZnVuY3Rpb24oZSx0LHIpe3ZvaWQgMD09PXImJihyPSEwKTt2YXIgbj17fTt0LmZvckVhY2goZnVuY3Rpb24odCl7aWYoWi5pbmNsdWRlcyhlLnN0YXRlc1t0XS5zdGF0ZSk9PT1yKXt2YXIgaT1FKHQpLGE9W1wiY292ZXJcIixcImxvY2tcIl0uaW5jbHVkZXMoaSk/aTpcImhvbWVhc3Npc3RhbnRcIjthIGluIG58fChuW2FdPVtdKSxuW2FdLnB1c2godCl9fSksT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgaTtzd2l0Y2godCl7Y2FzZVwibG9ja1wiOmk9cj9cInVubG9ja1wiOlwibG9ja1wiO2JyZWFrO2Nhc2VcImNvdmVyXCI6aT1yP1wib3Blbl9jb3ZlclwiOlwiY2xvc2VfY292ZXJcIjticmVhaztkZWZhdWx0Omk9cj9cInR1cm5fb25cIjpcInR1cm5fb2ZmXCJ9ZS5jYWxsU2VydmljZSh0LGkse2VudGl0eV9pZDpuW3RdfSl9KX0sa2U9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaG9tZS1hc3Npc3RhbnRcIik7aWYoZT0oZT0oZT0oZT0oZT0oZT0oZT0oZT1lJiZlLnNoYWRvd1Jvb3QpJiZlLnF1ZXJ5U2VsZWN0b3IoXCJob21lLWFzc2lzdGFudC1tYWluXCIpKSYmZS5zaGFkb3dSb290KSYmZS5xdWVyeVNlbGVjdG9yKFwiYXBwLWRyYXdlci1sYXlvdXQgcGFydGlhbC1wYW5lbC1yZXNvbHZlclwiKSkmJmUuc2hhZG93Um9vdHx8ZSkmJmUucXVlcnlTZWxlY3RvcihcImhhLXBhbmVsLWxvdmVsYWNlXCIpKSYmZS5zaGFkb3dSb290KSYmZS5xdWVyeVNlbGVjdG9yKFwiaHVpLXJvb3RcIikpe3ZhciB0PWUubG92ZWxhY2U7cmV0dXJuIHQuY3VycmVudF92aWV3PWUuX19fY3VyVmlldyx0fXJldHVybiBudWxsfSx4ZT17aHVtaWRpdHk6XCJtZGk6d2F0ZXItcGVyY2VudFwiLGlsbHVtaW5hbmNlOlwibWRpOmJyaWdodG5lc3MtNVwiLHRlbXBlcmF0dXJlOlwibWRpOnRoZXJtb21ldGVyXCIscHJlc3N1cmU6XCJtZGk6Z2F1Z2VcIixwb3dlcjpcIm1kaTpmbGFzaFwiLHNpZ25hbF9zdHJlbmd0aDpcIm1kaTp3aWZpXCJ9LERlPXtiaW5hcnlfc2Vuc29yOmZ1bmN0aW9uKGUsdCl7dmFyIHI9XCJvZmZcIj09PWU7c3dpdGNoKG51bGw9PXQ/dm9pZCAwOnQuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3Mpe2Nhc2VcImJhdHRlcnlcIjpyZXR1cm4gcj9cIm1kaTpiYXR0ZXJ5XCI6XCJtZGk6YmF0dGVyeS1vdXRsaW5lXCI7Y2FzZVwiYmF0dGVyeV9jaGFyZ2luZ1wiOnJldHVybiByP1wibWRpOmJhdHRlcnlcIjpcIm1kaTpiYXR0ZXJ5LWNoYXJnaW5nXCI7Y2FzZVwiY29sZFwiOnJldHVybiByP1wibWRpOnRoZXJtb21ldGVyXCI6XCJtZGk6c25vd2ZsYWtlXCI7Y2FzZVwiY29ubmVjdGl2aXR5XCI6cmV0dXJuIHI/XCJtZGk6c2VydmVyLW5ldHdvcmstb2ZmXCI6XCJtZGk6c2VydmVyLW5ldHdvcmtcIjtjYXNlXCJkb29yXCI6cmV0dXJuIHI/XCJtZGk6ZG9vci1jbG9zZWRcIjpcIm1kaTpkb29yLW9wZW5cIjtjYXNlXCJnYXJhZ2VfZG9vclwiOnJldHVybiByP1wibWRpOmdhcmFnZVwiOlwibWRpOmdhcmFnZS1vcGVuXCI7Y2FzZVwicG93ZXJcIjpyZXR1cm4gcj9cIm1kaTpwb3dlci1wbHVnLW9mZlwiOlwibWRpOnBvd2VyLXBsdWdcIjtjYXNlXCJnYXNcIjpjYXNlXCJwcm9ibGVtXCI6Y2FzZVwic2FmZXR5XCI6Y2FzZVwidGFtcGVyXCI6cmV0dXJuIHI/XCJtZGk6Y2hlY2stY2lyY2xlXCI6XCJtZGk6YWxlcnQtY2lyY2xlXCI7Y2FzZVwic21va2VcIjpyZXR1cm4gcj9cIm1kaTpjaGVjay1jaXJjbGVcIjpcIm1kaTpzbW9rZVwiO2Nhc2VcImhlYXRcIjpyZXR1cm4gcj9cIm1kaTp0aGVybW9tZXRlclwiOlwibWRpOmZpcmVcIjtjYXNlXCJsaWdodFwiOnJldHVybiByP1wibWRpOmJyaWdodG5lc3MtNVwiOlwibWRpOmJyaWdodG5lc3MtN1wiO2Nhc2VcImxvY2tcIjpyZXR1cm4gcj9cIm1kaTpsb2NrXCI6XCJtZGk6bG9jay1vcGVuXCI7Y2FzZVwibW9pc3R1cmVcIjpyZXR1cm4gcj9cIm1kaTp3YXRlci1vZmZcIjpcIm1kaTp3YXRlclwiO2Nhc2VcIm1vdGlvblwiOnJldHVybiByP1wibWRpOndhbGtcIjpcIm1kaTpydW5cIjtjYXNlXCJvY2N1cGFuY3lcIjpyZXR1cm4gcj9cIm1kaTpob21lLW91dGxpbmVcIjpcIm1kaTpob21lXCI7Y2FzZVwib3BlbmluZ1wiOnJldHVybiByP1wibWRpOnNxdWFyZVwiOlwibWRpOnNxdWFyZS1vdXRsaW5lXCI7Y2FzZVwicGx1Z1wiOnJldHVybiByP1wibWRpOnBvd2VyLXBsdWctb2ZmXCI6XCJtZGk6cG93ZXItcGx1Z1wiO2Nhc2VcInByZXNlbmNlXCI6cmV0dXJuIHI/XCJtZGk6aG9tZS1vdXRsaW5lXCI6XCJtZGk6aG9tZVwiO2Nhc2VcInJ1bm5pbmdcIjpyZXR1cm4gcj9cIm1kaTpzdG9wXCI6XCJtZGk6cGxheVwiO2Nhc2VcInNvdW5kXCI6cmV0dXJuIHI/XCJtZGk6bXVzaWMtbm90ZS1vZmZcIjpcIm1kaTptdXNpYy1ub3RlXCI7Y2FzZVwidXBkYXRlXCI6cmV0dXJuIHI/XCJtZGk6cGFja2FnZVwiOlwibWRpOnBhY2thZ2UtdXBcIjtjYXNlXCJ2aWJyYXRpb25cIjpyZXR1cm4gcj9cIm1kaTpjcm9wLXBvcnRyYWl0XCI6XCJtZGk6dmlicmF0ZVwiO2Nhc2VcIndpbmRvd1wiOnJldHVybiByP1wibWRpOndpbmRvdy1jbG9zZWRcIjpcIm1kaTp3aW5kb3ctb3BlblwiO2RlZmF1bHQ6cmV0dXJuIHI/XCJtZGk6cmFkaW9ib3gtYmxhbmtcIjpcIm1kaTpjaGVja2JveC1tYXJrZWQtY2lyY2xlXCJ9fSxjb3ZlcjpmdW5jdGlvbihlKXt2YXIgdD1cImNsb3NlZFwiIT09ZS5zdGF0ZTtzd2l0Y2goZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcyl7Y2FzZVwiZ2FyYWdlXCI6cmV0dXJuIHQ/XCJtZGk6Z2FyYWdlLW9wZW5cIjpcIm1kaTpnYXJhZ2VcIjtjYXNlXCJkb29yXCI6cmV0dXJuIHQ/XCJtZGk6ZG9vci1vcGVuXCI6XCJtZGk6ZG9vci1jbG9zZWRcIjtjYXNlXCJzaHV0dGVyXCI6cmV0dXJuIHQ/XCJtZGk6d2luZG93LXNodXR0ZXItb3BlblwiOlwibWRpOndpbmRvdy1zaHV0dGVyXCI7Y2FzZVwiYmxpbmRcIjpyZXR1cm4gdD9cIm1kaTpibGluZHMtb3BlblwiOlwibWRpOmJsaW5kc1wiO2Nhc2VcIndpbmRvd1wiOnJldHVybiB0P1wibWRpOndpbmRvdy1vcGVuXCI6XCJtZGk6d2luZG93LWNsb3NlZFwiO2RlZmF1bHQ6cmV0dXJuIG1lKFwiY292ZXJcIixlLnN0YXRlKX19LHNlbnNvcjpmdW5jdGlvbihlKXt2YXIgdD1lLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzO2lmKHQmJnQgaW4geGUpcmV0dXJuIHhlW3RdO2lmKFwiYmF0dGVyeVwiPT09dCl7dmFyIHI9TnVtYmVyKGUuc3RhdGUpO2lmKGlzTmFOKHIpKXJldHVyblwibWRpOmJhdHRlcnktdW5rbm93blwiO3ZhciBuPTEwKk1hdGgucm91bmQoci8xMCk7cmV0dXJuIG4+PTEwMD9cIm1kaTpiYXR0ZXJ5XCI6bjw9MD9cIm1kaTpiYXR0ZXJ5LWFsZXJ0XCI6XCJoYXNzOmJhdHRlcnktXCIrbn12YXIgaT1lLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtyZXR1cm5cIsKwQ1wiPT09aXx8XCLCsEZcIj09PWk/XCJtZGk6dGhlcm1vbWV0ZXJcIjptZShcInNlbnNvclwiKX0saW5wdXRfZGF0ZXRpbWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXR0cmlidXRlcy5oYXNfZGF0ZT9lLmF0dHJpYnV0ZXMuaGFzX3RpbWU/bWUoXCJpbnB1dF9kYXRldGltZVwiKTpcIm1kaTpjYWxlbmRhclwiOlwibWRpOmNsb2NrXCJ9fSxTZT1mdW5jdGlvbihlKXtpZighZSlyZXR1cm5cIm1kaTpib29rbWFya1wiO2lmKGUuYXR0cmlidXRlcy5pY29uKXJldHVybiBlLmF0dHJpYnV0ZXMuaWNvbjt2YXIgdD1FKGUuZW50aXR5X2lkKTtyZXR1cm4gdCBpbiBEZT9EZVt0XShlKTptZSh0LGUuc3RhdGUpfTtleHBvcnR7RyBhcyBERUZBVUxUX0RPTUFJTl9JQ09OLEogYXMgREVGQVVMVF9QQU5FTCxyZSBhcyBERUZBVUxUX1ZJRVdfRU5USVRZX0lELFggYXMgRE9NQUlOU19ISURFX01PUkVfSU5GTyxZIGFzIERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlksJCBhcyBET01BSU5TX1RPR0dMRSxLIGFzIERPTUFJTlNfV0lUSF9DQVJELFEgYXMgRE9NQUlOU19XSVRIX01PUkVfSU5GTyx0IGFzIE51bWJlckZvcm1hdCxaIGFzIFNUQVRFU19PRkYsciBhcyBUaW1lRm9ybWF0LGVlIGFzIFVOSVRfQyx0ZSBhcyBVTklUX0YscSBhcyBhcHBseVRoZW1lc09uRWxlbWVudCxBIGFzIGNvbXB1dGVDYXJkU2l6ZSxFIGFzIGNvbXB1dGVEb21haW4saiBhcyBjb21wdXRlRW50aXR5LFIgYXMgY29tcHV0ZVJUTCx6IGFzIGNvbXB1dGVSVExEaXJlY3Rpb24sVyBhcyBjb21wdXRlU3RhdGVEaXNwbGF5LEwgYXMgY29tcHV0ZVN0YXRlRG9tYWluLG9lIGFzIGNyZWF0ZVRoaW5nLHVlIGFzIGRlYm91bmNlLG1lIGFzIGRvbWFpbkljb24sc2UgYXMgZXZhbHVhdGVGaWx0ZXIsbmUgYXMgZmlyZUV2ZW50LGNlIGFzIGZpeGVkSWNvbnMsYSBhcyBmb3JtYXREYXRlLGYgYXMgZm9ybWF0RGF0ZU1vbnRoLGwgYXMgZm9ybWF0RGF0ZU1vbnRoWWVhcix1IGFzIGZvcm1hdERhdGVOdW1lcmljLG0gYXMgZm9ybWF0RGF0ZVNob3J0LHYgYXMgZm9ybWF0RGF0ZVRpbWUsayBhcyBmb3JtYXREYXRlVGltZU51bWVyaWMseSBhcyBmb3JtYXREYXRlVGltZVdpdGhTZWNvbmRzLG4gYXMgZm9ybWF0RGF0ZVdlZWtkYXkscCBhcyBmb3JtYXREYXRlWWVhcixIIGFzIGZvcm1hdE51bWJlcixEIGFzIGZvcm1hdFRpbWUsSSBhcyBmb3JtYXRUaW1lV2Vla2RheSxGIGFzIGZvcm1hdFRpbWVXaXRoU2Vjb25kcyxsZSBhcyBmb3J3YXJkSGFwdGljLGtlIGFzIGdldExvdmVsYWNlLGhlIGFzIGhhbmRsZUFjdGlvbixwZSBhcyBoYW5kbGVBY3Rpb25Db25maWcsYmUgYXMgaGFuZGxlQ2xpY2ssdmUgYXMgaGFzQWN0aW9uLF9lIGFzIGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCx5ZSBhcyBoYXNEb3VibGVDbGljayxQIGFzIGlzTnVtZXJpY1N0YXRlLGRlIGFzIG5hdmlnYXRlLFUgYXMgbnVtYmVyRm9ybWF0VG9Mb2NhbGUsTSBhcyByZWxhdGl2ZVRpbWUsQiBhcyByb3VuZCxTZSBhcyBzdGF0ZUljb24sQyBhcyB0aW1lclRpbWVSZW1haW5pbmcsZ2UgYXMgdG9nZ2xlRW50aXR5LHdlIGFzIHR1cm5Pbk9mZkVudGl0aWVzLGZlIGFzIHR1cm5Pbk9mZkVudGl0eX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGxpdF9lbGVtZW50XzEgPSByZXF1aXJlKFwibGl0LWVsZW1lbnRcIik7XG5jb25zdCBjdXN0b21fY2FyZF9oZWxwZXJzXzEgPSByZXF1aXJlKFwiY3VzdG9tLWNhcmQtaGVscGVyc1wiKTtcbmNvbnN0IG1vZGVsc18xID0gcmVxdWlyZShcIi4vbW9kZWxzXCIpO1xuY2xhc3MgQW5kcm9pZFRWQ2FyZCBleHRlbmRzIGxpdF9lbGVtZW50XzEuTGl0RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEtleXMgPSB7fTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U291cmNlcyA9IHt9O1xuICAgICAgICB0aGlzLmN1c3RvbUtleXMgPSB7fTtcbiAgICAgICAgdGhpcy5jdXN0b21Tb3VyY2VzID0ge307XG4gICAgICAgIHRoaXMuY3VzdG9tSWNvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy50b3VjaEFjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRvdWNoVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRvdWNoSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLnRvdWNoTG9uZ0NsaWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaG9sZEFjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmhvbGRUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuaG9sZEludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob2xkTG9uZ0NsaWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHt9O1xuICAgICAgICB0aGlzLl9oYXNzID0gdGhpcy5oYXNzO1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB0aGlzLnZvbHVtZV9zbGlkZXIgPSBuZXcgSFRNTEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIF9oYXNzOiB7fSxcbiAgICAgICAgICAgIF9jb25maWc6IHt9LFxuICAgICAgICAgICAgX2FwcHM6IHt9LFxuICAgICAgICAgICAgdHJpZ2dlcjoge30sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTdHViQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGdldENhcmRTaXplKCkge1xuICAgICAgICBsZXQgbnVtUm93cyA9IE9iamVjdC5rZXlzKHRoaXMuX2NvbmZpZykuZmlsdGVyKChrZXkpID0+IGtleS5pbmNsdWRlcygnX3JvdycpKS5sZW5ndGg7XG4gICAgICAgIGlmICgndGl0bGUnIGluIHRoaXMuX2NvbmZpZykge1xuICAgICAgICAgICAgbnVtUm93cyArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1Sb3dzO1xuICAgIH1cbiAgICBzZXRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHsgdGhlbWU6ICdkZWZhdWx0JyB9LCBjb25maWcpO1xuICAgICAgICAgICAgdGhpcy5jdXN0b21LZXlzID0gY29uZmlnLmN1c3RvbV9rZXlzIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5jdXN0b21Tb3VyY2VzID0gY29uZmlnLmN1c3RvbV9zb3VyY2VzIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5jdXN0b21JY29ucyA9IGNvbmZpZy5jdXN0b21faWNvbnMgfHwge307XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRLZXlzID0gbW9kZWxzXzEuZGVmYXVsdEtleXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRTb3VyY2VzID0gbW9kZWxzXzEuZGVmYXVsdFNvdXJjZXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmFsdF92b2x1bWVfaWNvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZUFsdFZvbHVtZUljb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhd2FpdCB0aGlzLmxvYWRDYXJkSGVscGVycygpO1xuICAgICAgICAgICAgLy8gYXdhaXQgdGhpcy5sb2FkSGFzc0hlbHBlcnMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWcudm9sdW1lX3JvdyA9PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVuZGVyVm9sdW1lU2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJSZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGlzQnV0dG9uRW5hYmxlZChyb3c6IHN0cmluZywgYnV0dG9uOiBzdHJpbmcpIHtcbiAgICAvLyBcdGlmICghKHRoaXMuX2NvbmZpZ1tyb3ddIGluc3RhbmNlb2YgQXJyYXkpKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gXHRyZXR1cm4gdGhpcy5fY29uZmlnW3Jvd10uaW5jbHVkZXMoYnV0dG9uKTtcbiAgICAvLyB9XG4gICAgc2V0IGhhc3MoaGFzcykge1xuICAgICAgICB0aGlzLl9oYXNzID0gaGFzcztcbiAgICAgICAgaWYgKHRoaXMudm9sdW1lX3NsaWRlcikge1xuICAgICAgICAgICAgdGhpcy52b2x1bWVfc2xpZGVyLmhhc3MgPSBoYXNzO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmICh0aGlzLl9oYXNzUmVzb2x2ZSkge1xuICAgICAgICAvLyBcdHRoaXMuX2hhc3NSZXNvbHZlKCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZ2V0IGhhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNzO1xuICAgIH1cbiAgICBmaXJlRXZlbnQod2luZG93LCB0eXBlLCBkZXRhaWwpIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBFdmVudCh0eXBlLCB7XG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGUuZGV0YWlsID0gZGV0YWlsO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGZpcmVIYXB0aWNFdmVudCh3aW5kb3csIGRldGFpbCkge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmVuYWJsZV9idXR0b25fZmVlZGJhY2sgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmVuYWJsZV9idXR0b25fZmVlZGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KHdpbmRvdywgJ2hhcHRpYycsIGRldGFpbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYXN5bmMgbG9hZENhcmRIZWxwZXJzKCkge1xuICAgIC8vIFx0dGhpcy5faGVscGVycyA9IGF3YWl0IHdpbmRvdy5sb2FkQ2FyZEhlbHBlcnMoKTtcbiAgICAvLyBcdGlmICh0aGlzLl9oZWxwZXJzUmVzb2x2ZSkgdGhpcy5faGVscGVyc1Jlc29sdmUoKTtcbiAgICAvLyB9XG4gICAgLy8gYXN5bmMgbG9hZEhhc3NIZWxwZXJzKCkge1xuICAgIC8vIFx0aWYgKHRoaXMuX2hlbHBlcnMgPT09IHVuZGVmaW5lZClcbiAgICAvLyBcdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+ICh0aGlzLl9oZWxwZXJzUmVzb2x2ZSA9IHJlc29sdmUpKTtcbiAgICAvLyBcdGlmICh0aGlzLl9oYXNzID09PSB1bmRlZmluZWQpXG4gICAgLy8gXHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiAodGhpcy5faGFzc1Jlc29sdmUgPSByZXNvbHZlKSk7XG4gICAgLy8gXHR0aGlzLl9oZWxwZXJzUmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAvLyBcdHRoaXMuX2hhc3NSZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgIC8vIH1cbiAgICByZW5kZXJWb2x1bWVTbGlkZXIoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgc2xpZGVyX2NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3VzdG9tOm15LXNsaWRlcicsXG4gICAgICAgICAgICAgICAgZW50aXR5OiB0aGlzLl9jb25maWcubWVkaWFfcGxheWVyX2lkLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxuICAgICAgICAgICAgICAgIG1haW5TbGlkZXJDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlTbGlkZXJDb2xvcjogJ3JnYig2MCwgNjAsIDYwKScsXG4gICAgICAgICAgICAgICAgbWFpblNsaWRlckNvbG9yT2ZmOiAncmdiKDYwLCA2MCwgNjApJyxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlTbGlkZXJDb2xvck9mZjogJ3JnYig2MCwgNjAsIDYwKScsXG4gICAgICAgICAgICAgICAgdGh1bWJXaWR0aDogJzBweCcsXG4gICAgICAgICAgICAgICAgdGh1bWJIb3Jpem9udGFsUGFkZGluZzogJzBweCcsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAnMjVweCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zbGlkZXJfY29uZmlnIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgc2xpZGVyX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc2xpZGVyX2NvbmZpZyksIHRoaXMuX2NvbmZpZy5zbGlkZXJfY29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMudm9sdW1lX3NsaWRlciA9IGF3YWl0IHRoaXMuX2hlbHBlcnMuY3JlYXRlQ2FyZEVsZW1lbnQoc2xpZGVyX2NvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLnZvbHVtZV9zbGlkZXIgPSB5aWVsZCAoMCwgY3VzdG9tX2NhcmRfaGVscGVyc18xLmNyZWF0ZVRoaW5nKShzbGlkZXJfY29uZmlnKTtcbiAgICAgICAgICAgIC8vIHRoaXMudm9sdW1lX3NsaWRlci5zdHlsZSA9ICdmbGV4OiAwLjk7JztcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZsZXg6IDAuOTsnKTtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5vbnRvdWNoc3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlSGFwdGljRXZlbnQod2luZG93LCAnbGlnaHQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnZvbHVtZV9zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoX2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVIYXB0aWNFdmVudCh3aW5kb3csICdsaWdodCcpO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnZvbHVtZV9zbGlkZXIuaGFzcyA9IHRoaXMuX2hhc3M7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1c2VBbHRWb2x1bWVJY29ucygpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0S2V5cy52b2x1bWVfdXAuaWNvbiA9ICdtZGk6dm9sdW1lLWhpZ2gnO1xuICAgICAgICB0aGlzLmRlZmF1bHRLZXlzLnZvbHVtZV9kb3duLmljb24gPSAnbWRpOnZvbHVtZS1tZWRpdW0nO1xuICAgICAgICB0aGlzLmRlZmF1bHRLZXlzLnZvbHVtZV9tdXRlLmljb24gPSAnbWRpOnZvbHVtZS12YXJpYW50LW9mZic7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmQgY29tbWFuZCB0byBhbiBBbmRyb2lkIFRWIHJlbW90ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKi9cbiAgICBzZW5kS2V5KGtleSwgbG9uZ1ByZXNzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLnJlbW90ZV9pZCxcbiAgICAgICAgICAgIGNvbW1hbmQ6IGtleSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGxvbmdQcmVzcykge1xuICAgICAgICAgICAgZGF0YS5ob2xkX3NlY3MgPSAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZSgncmVtb3RlJywgJ3NlbmRfY29tbWFuZCcsIGRhdGEpO1xuICAgIH1cbiAgICBnZXRJbmZvKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VzdG9tS2V5c1thY3Rpb25dIHx8XG4gICAgICAgICAgICB0aGlzLmN1c3RvbVNvdXJjZXNbYWN0aW9uXSB8fFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0S2V5c1thY3Rpb25dIHx8XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRTb3VyY2VzW2FjdGlvbl0gfHxcbiAgICAgICAgICAgIHt9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBlaXRoZXIgYSBjb21tYW5kIHRvIGFuIEFuZHJvaWQgVFYgcmVtb3RlIG9yIGEgY3VzdG9tIGtleSB0byBhbnkgc2VydmljZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgc2VuZEFjdGlvbihhY3Rpb24sIGxvbmdQcmVzcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmdldEluZm8oYWN0aW9uKTtcbiAgICAgICAgaWYgKCdrZXknIGluIGluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGluZm8ua2V5O1xuICAgICAgICAgICAgdGhpcy5zZW5kS2V5KGtleSwgbG9uZ1ByZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgnc291cmNlJyBpbiBpbmZvKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNvdXJjZShpbmZvLnNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJ3NlcnZpY2UnIGluIGluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VfZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW5mby5zZXJ2aWNlX2RhdGEgfHwge30pKTtcbiAgICAgICAgICAgIGlmIChsb25nUHJlc3MgJiYgaW5mby5zZXJ2aWNlID09ICdyZW1vdGUuc2VuZF9jb21tYW5kJykge1xuICAgICAgICAgICAgICAgIHNlcnZpY2VfZGF0YS5ob2xkX3NlY3MgPSAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBbZG9tYWluLCBzZXJ2aWNlXSA9IGluZm8uc2VydmljZS5zcGxpdCgnLicsIDIpO1xuICAgICAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZShkb21haW4sIHNlcnZpY2UsIHNlcnZpY2VfZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbiBhbiBBbmRyb2lkIFRWIGFwcCB1c2luZyBpdCdzIGRlZXAgbGlua1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgQW5kcm9pZCBUViBkZWVwIGxpbmsgZm9yIGFuIGFwcFxuICAgICAqL1xuICAgIGNoYW5nZVNvdXJjZShzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZSgncmVtb3RlJywgJ3R1cm5fb24nLCB7XG4gICAgICAgICAgICBhY3Rpdml0eTogc291cmNlLFxuICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcucmVtb3RlX2lkLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgdG91Y2hwYWQgY2xpY2sgd2l0aCBubyBtb3ZlbWVudFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvblRvdWNoQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBjbGlja19hY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGlja1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tUaW1lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZSwgJ2NlbnRlcicsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tDb3VudCA9IDA7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChlLmRldGFpbCAmJiBlLmRldGFpbCA+IHRoaXMuY2xpY2tDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5jbGlja0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5lbmFibGVfZG91YmxlX2NsaWNrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGlja0NvdW50ID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVG91Y2hEb3VibGVDbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tUaW1lciA9IHNldFRpbWVvdXQoY2xpY2tfYWN0aW9uLCAyMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xpY2tfYWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgdG91Y2hwYWQgZG91YmxlIGNsaWNrXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hEb3VibGVDbGljayhlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lcik7XG4gICAgICAgIHRoaXMuY2xpY2tUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xpY2tDb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IChfYSA9IHRoaXMuX2NvbmZpZy5kb3VibGVfY2xpY2tfa2V5Y29kZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ2JhY2snO1xuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZSwgYWN0aW9uLCBmYWxzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRvdWNocGFkIHN3aXBlIGFuZCBsb25nIGNsaWNrIHN0YXJ0XG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHRoaXMudG91Y2hUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdGhpcy50b3VjaExvbmdDbGljayA9IHRydWU7XG4gICAgICAgICAgICAvLyBPbmx5IHJlcGVhdCBob2xkIGFjdGlvbiBmb3IgZGlyZWN0aW9uYWwga2V5c1xuICAgICAgICAgICAgaWYgKFsndXAnLCAnZG93bicsICdsZWZ0JywgJ3JpZ2h0J10uaW5jbHVkZXModGhpcy50b3VjaEFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCB0aGlzLnRvdWNoQWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCAoX2EgPSB0aGlzLl9jb25maWcubG9uZ19jbGlja19rZXljb2RlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnY2VudGVyJywgdGhpcy5fY29uZmlnLmxvbmdfY2xpY2tfa2V5Y29kZSA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHdpbmRvdy5pbml0aWFsWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB3aW5kb3cuaW5pdGlhbFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgdG91Y2hwYWQgc3dpcGUgZW5kXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICBpZiAodGhpcy50b3VjaExvbmdDbGljaykge1xuICAgICAgICAgICAgdGhpcy50b3VjaExvbmdDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVyKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRvdWNoSW50ZXJ2YWwpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGlja1RpbWVyKTtcbiAgICAgICAgdGhpcy50b3VjaEFjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRvdWNoVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRvdWNoSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLmNsaWNrVGltZXIgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0b3VjaHBhZCBzd2lwZSBtb3ZlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuaW5pdGlhbFggfHwgIXdpbmRvdy5pbml0aWFsWSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFggfHwgMDtcbiAgICAgICAgY29uc3QgY3VycmVudFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WSB8fCAwO1xuICAgICAgICBjb25zdCBkaWZmWCA9IHdpbmRvdy5pbml0aWFsWCAtIGN1cnJlbnRYO1xuICAgICAgICBjb25zdCBkaWZmWSA9IHdpbmRvdy5pbml0aWFsWSAtIGN1cnJlbnRZO1xuICAgICAgICBsZXQgYWN0aW9uO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gTWF0aC5hYnMoZGlmZlkpKSB7XG4gICAgICAgICAgICAvLyBTbGlkaW5nIGhvcml6b250YWxseVxuICAgICAgICAgICAgYWN0aW9uID0gZGlmZlggPiAwID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNsaWRpbmcgdmVydGljYWxseVxuICAgICAgICAgICAgYWN0aW9uID0gZGlmZlkgPiAwID8gJ3VwJyA6ICdkb3duJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdWNoQWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZSwgYWN0aW9uLCBmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5pbml0aWFsWCA9IHVuZGVmaW5lZDtcbiAgICAgICAgd2luZG93LmluaXRpYWxZID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBidXR0b24gY2xpY2tcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFthY3Rpb25dXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbG9uZ1ByZXNzPWZhbHNlXVxuICAgICAqL1xuICAgIG9uQnV0dG9uQ2xpY2soZSwgYWN0aW9uLCBsb25nUHJlc3MgPSBmYWxzZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGFjdGlvbiA9IGFjdGlvbiB8fCAoKF9hID0gZS5jdXJyZW50VGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWN0aW9uKSB8fCAnJztcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuZ2V0SW5mbyhhY3Rpb24pO1xuICAgICAgICBsZXQgaGFwdGljID0gbG9uZ1ByZXNzID8gJ21lZGl1bScgOiAnbGlnaHQnO1xuICAgICAgICBpZiAoYWN0aW9uID09ICdjZW50ZXInICYmICFsb25nUHJlc3MpIHtcbiAgICAgICAgICAgIGhhcHRpYyA9ICdzZWxlY3Rpb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PSB0aGlzLl9jb25maWcuZG91YmxlX2NsaWNrX2tleWNvZGUpIHtcbiAgICAgICAgICAgIGhhcHRpYyA9ICdzdWNjZXNzJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcmVIYXB0aWNFdmVudCh3aW5kb3csIGhhcHRpYyk7XG4gICAgICAgIGNvbnN0IGtleSA9ICdrZXknIGluIGluZm8gPyBpbmZvLmtleSA6ICcnO1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnS0VZQk9BUkQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlib2FyZFByZXNzKGUsIGxvbmdQcmVzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdURVhUQk9YJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGV4dGJveFByZXNzKGUsIGxvbmdQcmVzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTRUFSQ0gnOlxuICAgICAgICAgICAgICAgIHRoaXMub25TZWFyY2hQcmVzcyhlLCBsb25nUHJlc3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRBY3Rpb24oYWN0aW9uLCBsb25nUHJlc3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGJ1dHRvbiBsb25nIGNsaWNrIHN0YXJ0XG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uQnV0dG9uTG9uZ0NsaWNrU3RhcnQoZSkge1xuICAgICAgICB0aGlzLmhvbGRBY3Rpb24gPSBlLmN1cnJlbnRUYXJnZXQuYWN0aW9uO1xuICAgICAgICB0aGlzLmhvbGRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob2xkTG9uZ0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIE9ubHkgcmVwZWF0IGhvbGQgYWN0aW9uIGZvciBkaXJlY3Rpb25hbCBrZXlzIGFuZCB2b2x1bWVcbiAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgaWYgKFsndXAnLCAnZG93bicsICdsZWZ0JywgJ3JpZ2h0JywgJ3ZvbHVtZV91cCcsICd2b2x1bWVfZG93bicsICdkZWxldGUnXS5pbmNsdWRlcyh0aGlzLmhvbGRBY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob2xkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCB0aGlzLmhvbGRBY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGUsIHRoaXMuaG9sZEFjdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGJ1dHRvbiBsb25nIGNsaWNrIGVuZFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbkJ1dHRvbkxvbmdDbGlja0VuZChlKSB7XG4gICAgICAgIGlmICh0aGlzLmhvbGRMb25nQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuaG9sZExvbmdDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5ob2xkVGltZXIpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaG9sZEludGVydmFsKTtcbiAgICAgICAgdGhpcy5ob2xkQWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuaG9sZFRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob2xkSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBrZXlib2FyZCBrZXlkb3duIGV2ZW50cywgdXNlZCBmb3Igbm9uLWFscGhhbnVtZXJpY2FsIGtleXNcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25LZXlEb3duKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBrZXlUb0tleSA9IHtcbiAgICAgICAgICAgIEJhY2tzcGFjZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICBEZWxldGU6ICdmb3J3YXJkX2RlbGV0ZScsXG4gICAgICAgICAgICBFbnRlcjogJ2VudGVyJyxcbiAgICAgICAgICAgIEFycm93TGVmdDogJ2xlZnQnLFxuICAgICAgICAgICAgQXJyb3dSaWdodDogJ3JpZ2h0JyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5VG9LZXlbKF9hID0gZS5rZXkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnXTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlbmRBY3Rpb24oa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBrZXlib2FyZCBpbnB1dCBldmVudHMsIHVzZWQgZm9yIGFscGhhbnVtZXJpY2FsIGtleXMgYW5kIHdvcmtzIG9uIGFsbCBwbGF0Zm9ybXNcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25JbnB1dChlKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcuYWRiX2lkLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdpbnB1dCB0ZXh0IFwiJyArIGUuZGF0YSArICdcIicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZSgnYW5kcm9pZHR2JywgJ2FkYl9jb21tYW5kJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgcGFzdGUgZXZlbnRzLCBhcyBvbklucHV0IHBhc3RlIGV2ZW50cyByZXR1cm4gbnVsbCBmb3IgZGF0YSBmaWVsZFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvblBhc3RlKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRleHQgPSAoX2EgPSBlLmNsaXBib2FyZERhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXREYXRhKCdUZXh0Jyk7XG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLmFkYl9pZCxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnaW5wdXQgdGV4dCBcIicgKyB0ZXh0ICsgJ1wiJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdhbmRyb2lkdHYnLCAnYWRiX2NvbW1hbmQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIG9uIGZvY3VzIGV2ZW50cywgY2xlYXJzIGlucHV0IGFuZCBjaGFuZ2VzIGljb24gY29sb3JcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Gb2N1cyhlKSB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgLmNoaWxkcmVuWzBdLnN0eWxlLmNvbG9yID0gJ3ZhcigtLXN0YXRlLWFjdGl2ZS1jb2xvciknO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuekluZGV4ID0gJzknO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIG9uIGZvY3VzIG91dCBldmVudHMsIGNsZWFycyBpbnB1dCBhbmQgcmVzZXRzIGljb24gY29sb3JcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Gb2N1c091dChlKSB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgLmNoaWxkcmVuWzBdLnN0eWxlLmNvbG9yID0gJyc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS56SW5kZXggPSAnJztcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuc3R5bGUuekluZGV4ID0gJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGNsaWNraW5nIHRoZSBrZXlib2FyZCBidXR0b25cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbG9uZ1ByZXNzPWZhbHNlXVxuICAgICAqL1xuICAgIG9uS2V5Ym9hcmRQcmVzcyhlLCBfbG9uZ3ByZXNzKSB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5mb2N1cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBzZW5kaW5nIGJ1bGsgdGV4dCB2aWEgbGVnYWN5IHByb21wdCBtZXRob2RcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbG9uZ1ByZXNzPWZhbHNlXVxuICAgICAqL1xuICAgIG9uVGV4dGJveFByZXNzKGUsIF9sb25ncHJlc3MpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IHByb21wdCgnVGV4dCBJbnB1dDogJyk7XG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLmFkYl9pZCxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnaW5wdXQgdGV4dCBcIicgKyB0ZXh0ICsgJ1wiJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdhbmRyb2lkdHYnLCAnYWRiX2NvbW1hbmQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBnbG9iYWwgR29vZ2xlIEFzc2lzdGFudCBzZWFyY2hcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbG9uZ1ByZXNzPWZhbHNlXVxuICAgICAqL1xuICAgIG9uU2VhcmNoUHJlc3MoZSwgX2xvbmdwcmVzcykge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gcHJvbXB0KCdHb29nbGUgQXNzaXN0YW50IFNlYXJjaDogJyk7XG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLmFkYl9pZCxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnYW0gc3RhcnQgLWEgXCJhbmRyb2lkLnNlYXJjaC5hY3Rpb24uR0xPQkFMX1NFQVJDSFwiIC0tZXMgcXVlcnkgXCInICtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArXG4gICAgICAgICAgICAgICAgICAgICdcIicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZSgnYW5kcm9pZHR2JywgJ2FkYl9jb21tYW5kJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnVpbGRJY29uQnV0dG9uKGFjdGlvbikge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9mO1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5nZXRJbmZvKGFjdGlvbik7XG4gICAgICAgIGxldCBpY29uID0gKF9hID0gaW5mbyA9PT0gbnVsbCB8fCBpbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbmZvLmljb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnO1xuICAgICAgICBsZXQgc3ZnX3BhdGggPSAoX2MgPSAoX2IgPSBpbmZvLnN2Z19wYXRoKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLmN1c3RvbUljb25zW2ljb25dKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAnJztcbiAgICAgICAgLy8gVXNlIG9yaWdpbmFsIGljb24gaWYgbm9uZSBwcm92aWRlZCBmb3IgY3VzdG9tIGtleSBvciBzb3VyY2VcbiAgICAgICAgaWYgKCEoaWNvbiB8fCBzdmdfcGF0aCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGljb25JbmZvID0gdGhpcy5kZWZhdWx0S2V5c1thY3Rpb25dIHx8IHRoaXMuZGVmYXVsdFNvdXJjZXNbYWN0aW9uXSB8fCB7fTtcbiAgICAgICAgICAgIGljb24gPSAoX2QgPSBpY29uSW5mbyA9PT0gbnVsbCB8fCBpY29uSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaWNvbkluZm8uaWNvbikgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgICAgICAgICBzdmdfcGF0aCA9IChfZiA9IGljb25JbmZvID09PSBudWxsIHx8IGljb25JbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpY29uSW5mby5zdmdfcGF0aCkgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogJyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtJbnB1dCA9ICgwLCBsaXRfZWxlbWVudF8xLmh0bWwpIGBgO1xuICAgICAgICBpZiAoJ2tleScgaW4gaW5mbyAmJiBpbmZvLmtleSA9PSAnS0VZQk9BUkQnKSB7XG4gICAgICAgICAgICBrSW5wdXQgPSAoMCwgbGl0X2VsZW1lbnRfMS5odG1sKSBgXHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRzcGVsbGNoZWNrPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0YXV0b2NvcnJlY3Q9XCJvZmZcIlxyXG5cdFx0XHRcdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuXHRcdFx0XHRcdGF1dG9jYXBpdGFsaXplPVwib2ZmXCJcclxuXHRcdFx0XHRcdG9uY2hhbmdlPVwidGhpcy52YWx1ZT0nJ1wiXHJcblx0XHRcdFx0XHRvbmtleXVwPVwidGhpcy52YWx1ZT0nJ1wiXHJcblx0XHRcdFx0XHRAZm9jdXM9XCIke3RoaXMub25Gb2N1c31cIlxyXG5cdFx0XHRcdFx0QGZvY3Vzb3V0PVwiJHt0aGlzLm9uRm9jdXNPdXR9XCJcclxuXHRcdFx0XHRcdEBpbnB1dD1cIiR7dGhpcy5vbklucHV0fVwiXHJcblx0XHRcdFx0XHRAcGFzdGU9XCIke3RoaXMub25QYXN0ZX1cIlxyXG5cdFx0XHRcdFx0QGtleWRvd249XCIke3RoaXMub25LZXlEb3dufVwiXHJcblx0XHRcdFx0PjwvaW5wdXQ+XHJcblx0XHRcdGA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgwLCBsaXRfZWxlbWVudF8xLmh0bWwpIGBcclxuXHRcdFx0PGhhLWljb24tYnV0dG9uXHJcblx0XHRcdFx0LmFjdGlvbj1cIiR7YWN0aW9ufVwiXHJcblx0XHRcdFx0QGNsaWNrPVwiJHt0aGlzLm9uQnV0dG9uQ2xpY2t9XCJcclxuXHRcdFx0XHRAdG91Y2hzdGFydD1cIiR7dGhpcy5vbkJ1dHRvbkxvbmdDbGlja1N0YXJ0fVwiXHJcblx0XHRcdFx0QHRvdWNoZW5kPVwiJHt0aGlzLm9uQnV0dG9uTG9uZ0NsaWNrRW5kfVwiXHJcblx0XHRcdFx0dGl0bGU9XCIke2FjdGlvbn1cIlxyXG5cdFx0XHRcdC5wYXRoPVwiJHtzdmdfcGF0aH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGhhLWljb24gLmljb249XCIkeyFzdmdfcGF0aCA/IGljb24gOiAnJ31cIj48L2hhLWljb24+XHJcblx0XHRcdFx0JHtrSW5wdXR9XHJcblx0XHRcdDwvaGEtaWNvbi1idXR0b24+XHJcblx0XHRgO1xuICAgIH1cbiAgICBidWlsZFJvdyhjb250ZW50KSB7XG4gICAgICAgIHJldHVybiAoMCwgbGl0X2VsZW1lbnRfMS5odG1sKSBgIDxkaXYgY2xhc3M9XCJyb3dcIj4ke2NvbnRlbnR9PC9kaXY+IGA7XG4gICAgfVxuICAgIGJ1aWxkQnV0dG9uc0Zyb21BY3Rpb25zKGFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnMubWFwKChhY3Rpb24pID0+IHRoaXMuYnVpbGRJY29uQnV0dG9uKGFjdGlvbikpO1xuICAgIH1cbiAgICB0cmlnZ2VyUmVuZGVyKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLl9oYXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIGxpdF9lbGVtZW50XzEuaHRtbCkgYGA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9jb25maWcpLmZvckVhY2goKHJvd19uYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAocm93X25hbWUuaW5jbHVkZXMoJ19yb3cnKSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocm93X25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndm9sdW1lX3Jvdyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWcudm9sdW1lX3JvdyA9PSAnYnV0dG9ucycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbigndm9sdW1lX2Rvd24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEljb25CdXR0b24oJ3ZvbHVtZV9tdXRlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCd2b2x1bWVfdXAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2NvbmZpZy52b2x1bWVfcm93ID09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52b2x1bWVfc2xpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbmF2aWdhdGlvbl9yb3cnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2NvbmZpZy5uYXZpZ2F0aW9uX3Jvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2J1dHRvbnMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChbdGhpcy5idWlsZEljb25CdXR0b24oJ3VwJyldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCdsZWZ0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbignY2VudGVyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbigncmlnaHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChbdGhpcy5idWlsZEljb25CdXR0b24oJ2Rvd24nKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG91Y2hwYWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG91Y2hwYWQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgbGl0X2VsZW1lbnRfMS5odG1sKSBgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRvdWNoYXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJ0b3VjaGFyZWFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwiJHt0aGlzLm9uVG91Y2hDbGlja31cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QHRvdWNoc3RhcnQ9XCIke3RoaXMub25Ub3VjaFN0YXJ0fVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAdG91Y2htb3ZlPVwiJHt0aGlzLm9uVG91Y2hNb3ZlfVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAdG91Y2hlbmQ9XCIke3RoaXMub25Ub3VjaEVuZH1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RvdWNoYXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKHRvdWNocGFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnB1c2godGhpcy5idWlsZEJ1dHRvbnNGcm9tQWN0aW9ucyh0aGlzLl9jb25maWdbcm93X25hbWVdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtYXBwZWRDb250ZW50ID0gY29udGVudC5tYXAodGhpcy5idWlsZFJvdyk7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9ICgwLCBsaXRfZWxlbWVudF8xLmh0bWwpIGBcclxuXHRcdFx0JHt0aGlzLnJlbmRlclN0eWxlKCl9XHJcblx0XHRcdDxoYS1jYXJkIC5oZWFkZXI9XCIke3RoaXMuX2NvbmZpZy50aXRsZX1cIj4ke21hcHBlZENvbnRlbnR9PC9oYS1jYXJkPlxyXG5cdFx0YDtcbiAgICAgICAgcmV0dXJuICgwLCBsaXRfZWxlbWVudF8xLmh0bWwpIGAke291dHB1dH1gO1xuICAgIH1cbiAgICByZW5kZXJTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuICgwLCBsaXRfZWxlbWVudF8xLmh0bWwpIGBcclxuXHRcdFx0PHN0eWxlPlxyXG5cdFx0XHRcdC5yZW1vdGUge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMTZweCAwcHggMTZweCAwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGltZyxcclxuXHRcdFx0XHRoYS1pY29uLWJ1dHRvbiB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDhweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNDhweDtcclxuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRcdC0tbWRjLWljb24tc2l6ZTogMTAwJTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW5wdXQge1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMDtcclxuXHRcdFx0XHRcdGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuXHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR3aWR0aDogLW1vei1hdmFpbGFibGU7XHJcblx0XHRcdFx0XHR3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuXHRcdFx0XHRcdHdpZHRoOiBmaWxsLWF2YWlsYWJsZTtcclxuXHRcdFx0XHRcdGhlaWdodDogLW1vei1hdmFpbGFibGU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IGZpbGwtYXZhaWxhYmxlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucm93IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA4cHggMzZweCA4cHggMzZweDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuZGlhZ29uYWwge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRvdWNoYXJlYSB7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdFx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAke3RoaXMuX2NvbmZpZ1sndG91Y2hwYWRfaGVpZ2h0J10gfHwgJzI1MHB4J307XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNmQ3NjdlO1xyXG5cdFx0XHRcdFx0dG91Y2gtYWN0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdGA7XG4gICAgfVxuICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KGVsZW1lbnQsIHRoZW1lcywgbG9jYWxUaGVtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGVsZW1lbnQuX3RoZW1lcyA9IChfYSA9IGVsZW1lbnQuX3RoZW1lcykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307XG4gICAgICAgIGxldCB0aGVtZU5hbWUgPSB0aGVtZXMuZGVmYXVsdF90aGVtZTtcbiAgICAgICAgaWYgKGxvY2FsVGhlbWUgPT09ICdkZWZhdWx0JyB8fFxuICAgICAgICAgICAgKGxvY2FsVGhlbWUgJiYgdGhlbWVzLnRoZW1lc1tsb2NhbFRoZW1lXSkpIHtcbiAgICAgICAgICAgIHRoZW1lTmFtZSA9IGxvY2FsVGhlbWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbWVudC5fdGhlbWVzKTtcbiAgICAgICAgaWYgKHRoZW1lTmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb25zdCB0aGVtZSA9IHRoZW1lcy50aGVtZXNbdGhlbWVOYW1lXTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoZW1lKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXhlZEtleSA9ICctLScgKyBrZXk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5fdGhlbWVzW3ByZWZpeGVkS2V5XSA9ICcnO1xuICAgICAgICAgICAgICAgIHN0eWxlc1twcmVmaXhlZEtleV0gPSB0aGVtZVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQudXBkYXRlU3R5bGVzKSB7XG4gICAgICAgICAgICBlbGVtZW50LnVwZGF0ZVN0eWxlcyhzdHlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5TaGFkeUNTUykge1xuICAgICAgICAgICAgLy8gaW1wbGVtZW50IHVwZGF0ZVN0eWxlcygpIG1ldGhvZCBvZiBQb2xlbWVyIGVsZW1lbnRzXG4gICAgICAgICAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVTdWJ0cmVlKFxuICAgICAgICAgICAgLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgICAgICBlbGVtZW50LCBzdHlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dGhlbWUtY29sb3JdJyk7XG4gICAgICAgIGlmIChtZXRhKSB7XG4gICAgICAgICAgICBpZiAoIW1ldGEuaGFzQXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKSkge1xuICAgICAgICAgICAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnLCBtZXRhLmdldEF0dHJpYnV0ZSgnY29udGVudCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRoZW1lQ29sb3IgPSBzdHlsZXNbJy0tcHJpbWFyeS1jb2xvciddIHx8XG4gICAgICAgICAgICAgICAgbWV0YS5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpO1xuICAgICAgICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB0aGVtZUNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYW5kcm9pZC10di1jYXJkJywgQW5kcm9pZFRWQ2FyZCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdEtleXMgPSB2b2lkIDA7XG4vKipcbiAqIFRoaXMgaXMgdGhlIGxpc3Qgb2YgbW9zdCBjb21tb24gY29tbWFuZHMgZnJvbSB0aGUgQW5kcm9pZCBUViBSZW1vdGUgaW50ZWdyYXRpb24gcGFnZS5cbiAqIE5vdCBhbGwgYXJlIGVuc3VyZWQgdG8gd29yaywgYW5kIGlmIHRoZXkgZG8gbm90IGl0IGlzIGxpa2VseSBhbiBpc3N1ZSB3aXRoIHRoZSB1bmRlcmx5aW5nIHBhY2thZ2UgdXNlZCBieSB0aGUgQW5kcm9pZCBUViBSZW1vdGUgaW50ZWdyYXRpb24gb3IgdGhlIEFuZHJvaWQgVFYgUmVtb3RlIFByb3RvY29sIFYyIGl0c2VsZi5cbiAqIGh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2ludGVncmF0aW9ucy9hbmRyb2lkdHZfcmVtb3RlLyNyZW1vdGVcbiAqL1xuZXhwb3J0cy5kZWZhdWx0S2V5cyA9IHtcbiAgICBwb3dlcjogeyBrZXk6ICdQT1dFUicsIGljb246ICdtZGk6cG93ZXInIH0sXG4gICAgdm9sdW1lX3VwOiB7IGtleTogJ1ZPTFVNRV9VUCcsIGljb246ICdtZGk6dm9sdW1lLXBsdXMnIH0sXG4gICAgdm9sdW1lX2Rvd246IHsga2V5OiAnVk9MVU1FX0RPV04nLCBpY29uOiAnbWRpOnZvbHVtZS1taW51cycgfSxcbiAgICB2b2x1bWVfbXV0ZTogeyBrZXk6ICdNVVRFJywgaWNvbjogJ21kaTp2b2x1bWUtbXV0ZScgfSxcbiAgICBiYWNrOiB7IGtleTogJ0JBQ0snLCBpY29uOiAnbWRpOmtleWJvYXJkLWJhY2tzcGFjZScgfSxcbiAgICBob21lOiB7IGtleTogJ0hPTUUnLCBpY29uOiAnbWRpOmhvbWUnIH0sXG4gICAgdXA6IHsga2V5OiAnRFBBRF9VUCcsIGljb246ICdtZGk6Y2hldnJvbi11cCcgfSxcbiAgICBsZWZ0OiB7IGtleTogJ0RQQURfTEVGVCcsIGljb246ICdtZGk6Y2hldnJvbi1sZWZ0JyB9LFxuICAgIGNlbnRlcjogeyBrZXk6ICdEUEFEX0NFTlRFUicsIGljb246ICdtZGk6Y2hlY2tib3gtYmxhbmstY2lyY2xlJyB9LFxuICAgIHJpZ2h0OiB7IGtleTogJ0RQQURfUklHSFQnLCBpY29uOiAnbWRpOmNoZXZyb24tcmlnaHQnIH0sXG4gICAgZG93bjogeyBrZXk6ICdEUEFEX0RPV04nLCBpY29uOiAnbWRpOmNoZXZyb24tZG93bicgfSxcbiAgICBwbGF5OiB7IGtleTogJ01FRElBX1BMQVknLCBpY29uOiAnbWRpOnBsYXknIH0sXG4gICAgcGF1c2U6IHsga2V5OiAnTUVESUFfUEFVU0UnLCBpY29uOiAnbWRpOnBhdXNlJyB9LFxuICAgIHBsYXlfcGF1c2U6IHsga2V5OiAnTUVESUFfUExBWV9QQVVTRScsIGljb246ICdtZGk6cGxheS1wYXVzZScgfSxcbiAgICBzdG9wOiB7IGtleTogJ01FRElBX1NUT1AnLCBpY29uOiAnbWRpOnN0b3AnIH0sXG4gICAgcmV3aW5kOiB7IGtleTogJ01FRElBX1JFV0lORCcsIGljb246ICdtZGk6cmV3aW5kJyB9LFxuICAgIGZhc3RfZm9yd2FyZDogeyBrZXk6ICdNRURJQV9GQVNUX0ZPUldBUkQnLCBpY29uOiAnbWRpOmZhc3QtZm9yd2FyZCcgfSxcbiAgICBwcmV2aW91czogeyBrZXk6ICdNRURJQV9QUkVWSU9VUycsIGljb246ICdtZGk6c2tpcC1wcmV2aW91cycgfSxcbiAgICByZWNvcmQ6IHsga2V5OiAnTUVESUFfUkVDT1JEJywgaWNvbjogJ21kaTpyZWNvcmQnIH0sXG4gICAgbmV4dDogeyBrZXk6ICdNRURJQV9ORVhUJywgaWNvbjogJ21kaTpza2lwLW5leHQnIH0sXG4gICAgbWVudTogeyBrZXk6ICdNRU5VJywgaWNvbjogJ21kaTptZW51JyB9LFxuICAgIGE6IHsga2V5OiAnQlVUVE9OX0EnLCBpY29uOiAnbWRpOmFscGhhLWEtY2lyY2xlJyB9LFxuICAgIGI6IHsga2V5OiAnQlVUVE9OX0InLCBpY29uOiAnbWRpOmFscGhhLUItY2lyY2xlJyB9LFxuICAgIHg6IHsga2V5OiAnQlVUVE9OX1gnLCBpY29uOiAnbWRpOmFscGhhLXgtY2lyY2xlJyB9LFxuICAgIHk6IHsga2V5OiAnQlVUVE9OX1knLCBpY29uOiAnbWRpOmFscGhhLXktY2lyY2xlJyB9LFxuICAgIG4wOiB7IGtleTogJzAnLCBpY29uOiAnbWRpOm51bWVyaWMtMCcgfSxcbiAgICBuMTogeyBrZXk6ICcxJywgaWNvbjogJ21kaTpudW1lcmljLTEnIH0sXG4gICAgbjI6IHsga2V5OiAnMicsIGljb246ICdtZGk6bnVtZXJpYy0yJyB9LFxuICAgIG4zOiB7IGtleTogJzMnLCBpY29uOiAnbWRpOm51bWVyaWMtMycgfSxcbiAgICBuNDogeyBrZXk6ICc0JywgaWNvbjogJ21kaTpudW1lcmljLTQnIH0sXG4gICAgbjU6IHsga2V5OiAnNScsIGljb246ICdtZGk6bnVtZXJpYy01JyB9LFxuICAgIG42OiB7IGtleTogJzYnLCBpY29uOiAnbWRpOm51bWVyaWMtNicgfSxcbiAgICBuNzogeyBrZXk6ICc3JywgaWNvbjogJ21kaTpudW1lcmljLTcnIH0sXG4gICAgbjg6IHsga2V5OiAnOCcsIGljb246ICdtZGk6bnVtZXJpYy04JyB9LFxuICAgIG45OiB7IGtleTogJzknLCBpY29uOiAnbWRpOm51bWVyaWMtOScgfSxcbiAgICBjaGFubmVsX3VwOiB7IGtleTogJ0NIQU5ORUxfVVAnLCBpY29uOiAnbWRpOmFycm93LXVwLWNpcmNsZScgfSxcbiAgICBjaGFubmVsX2Rvd246IHsga2V5OiAnQ0hBTk5FTF9ET1dOJywgaWNvbjogJ21kaTphcnJvdy1kb3duLWNpcmNsZScgfSxcbiAgICBmMTogeyBrZXk6ICdGMScsIGljb246ICdtZGk6a2V5Ym9hcmQtZjEnIH0sXG4gICAgZjI6IHsga2V5OiAnRjInLCBpY29uOiAnbWRpOmtleWJvYXJkLWYyJyB9LFxuICAgIGYzOiB7IGtleTogJ0YzJywgaWNvbjogJ21kaTprZXlib2FyZC1mMycgfSxcbiAgICBmNDogeyBrZXk6ICdGNCcsIGljb246ICdtZGk6a2V5Ym9hcmQtZjQnIH0sXG4gICAgZjU6IHsga2V5OiAnRjUnLCBpY29uOiAnbWRpOmtleWJvYXJkLWY1JyB9LFxuICAgIGY2OiB7IGtleTogJ0Y2JywgaWNvbjogJ21kaTprZXlib2FyZC1mNicgfSxcbiAgICBmNzogeyBrZXk6ICdGNycsIGljb246ICdtZGk6a2V5Ym9hcmQtZjcnIH0sXG4gICAgZjg6IHsga2V5OiAnRjgnLCBpY29uOiAnbWRpOmtleWJvYXJkLWY4JyB9LFxuICAgIGY5OiB7IGtleTogJ0Y5JywgaWNvbjogJ21kaTprZXlib2FyZC1mOScgfSxcbiAgICBmMTA6IHsga2V5OiAnRjEwJywgaWNvbjogJ21kaTprZXlib2FyZC1mMTAnIH0sXG4gICAgZjExOiB7IGtleTogJ0YxMScsIGljb246ICdtZGk6a2V5Ym9hcmQtZjExJyB9LFxuICAgIGYxMjogeyBrZXk6ICdGMTInLCBpY29uOiAnbWRpOmtleWJvYXJkLWYxMicgfSxcbiAgICB0djogeyBrZXk6ICdUVicsIGljb246ICdtZGk6dGVsZXZpc2lvbi1ib3gnIH0sXG4gICAgcmVkOiB7IGtleTogJ1BST0dfUkVEJywgaWNvbjogJ21kaTphbHBoYS1yLWJveCcgfSxcbiAgICBncmVlbjogeyBrZXk6ICdQUk9HX0dSRUVOJywgaWNvbjogJ21kaTphbHBoYS1nLWJveCcgfSxcbiAgICB5ZWxsb3c6IHsga2V5OiAnUFJPR19ZRUxMT1cnLCBpY29uOiAnbWRpOmFscGhhLXktYm94JyB9LFxuICAgIGJsdWU6IHsga2V5OiAnUFJPR19CTFVFJywgaWNvbjogJ21kaTphbHBoYS1iLWJveCcgfSxcbiAgICBidXR0b25fbW9kZTogeyBrZXk6ICdCVVRUT05fTU9ERScsIGljb246ICdtZGk6Z2VzdHVyZS10YXAtYnV0b24nIH0sXG4gICAgZXhwbG9yZXI6IHsga2V5OiAnRVhQTE9SRVInLCBpY29uOiAnbWRpOmZvbGRlci1tdWx0aXBsZScgfSxcbiAgICBpbmZvOiB7IGtleTogJ0lORk8nLCBpY29uOiAnbWRpOmluZm9ybWF0aW9uJyB9LFxuICAgIGd1aWRlOiB7IGtleTogJ0dVSURFJywgaWNvbjogJ21kaTp0ZWxldmlzaW9uLWd1aWRlJyB9LFxuICAgIHRlbGV0ZXh0OiB7IGtleTogJ1RWX1RFTEVURVhUJywgaWNvbjogJ21kaTpjYXJkLXRleHQnIH0sXG4gICAgY2FwdGlvbnM6IHsga2V5OiAnQ0FQVElPTlMnLCBpY29uOiAnbWRpOmNsb3NlZC1jYXB0aW9uJyB9LFxuICAgIGR2cjogeyBrZXk6ICdEVlInLCBpY29uOiAnbWRpOmF1ZGlvLXZpZGVvJyB9LFxuICAgIGF1ZGlvX3RyYWNrOiB7IGtleTogJ01FRElBX0FVRElPX1RSQUNLJywgaWNvbjogJ21kaTp3YXZlZm9ybScgfSxcbiAgICBzZXR0aW5nczogeyBrZXk6ICdTRVRUSU5HUycsIGljb246ICdtZGk6Y29nJyB9LFxuICAgIGRlbGV0ZTogeyBrZXk6ICdERUwnLCBpY29uOiAnbWRpOmJhY2tzcGFjZScgfSxcbiAgICBmb3J3YXJkX2RlbGV0ZTogeyBrZXk6ICdGT1dBUkRfREVMJywgaWNvbjogJ21kaTpiYWNrc3BhY2UtcmV2ZXJzZScgfSxcbiAgICBlbnRlcjogeyBrZXk6ICdFTlRFUicsIGljb246ICdtZGk6bWFnbmlmeScgfSxcbiAgICBrZXlib2FyZDogeyBrZXk6ICdLRVlCT0FSRCcsIGljb246ICdtZGk6a2V5Ym9hcmQnIH0sXG4gICAgc2VhcmNoOiB7IGtleTogJ1NFQVJDSCcsIGljb246ICdtZGk6Z29vZ2xlLWFzc2lzdGFudCcgfSxcbiAgICB0ZXh0Ym94OiB7IGtleTogJ1RFWFRCT1gnLCBpY29uOiAnbWRpOnRleHQtYm94JyB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0U291cmNlcyA9IHZvaWQgMDtcbmNvbnN0IF8xID0gcmVxdWlyZShcIi5cIik7XG4vKipcbiAqIFRoaXMgaXMgYSBsaXN0IG9mIGNvbW1vbiBzdHJlYW1pbmcgYXBwcywgdGhlaXIgaWNvbnMsIGFuZCB0aGUgZGVlcCBsaW5rcyB0byBvcGVuIHRoZW0gaW4gQW5kcm9pZCBUViwgbW9zdGx5IGNvbGxlY3RlZCBmcm9tIHRoZSBmb2xsb3dpbmcgSG9tZSBBc3Npc3RhbnQgQ29tbXVuaXR5IEZvcnVtIGd1aWRlLlxuICogTm90IGFsbCBoYXZlIGJlZW4gdGVzdGVkLCBpZiBhbnkgZG8gbm90IHdvcmsgcGxlYXNlIGxldCBtZSBrbm93IVxuICogaHR0cHM6Ly9jb21tdW5pdHkuaG9tZS1hc3Npc3RhbnQuaW8vdC9hbmRyb2lkLXR2LXJlbW90ZS1hcHAtbGlua3MtZGVlcC1saW5raW5nLWd1aWRlLzU2NzkyMVxuICovXG5leHBvcnRzLmRlZmF1bHRTb3VyY2VzID0ge1xuICAgIGFwcGxldHY6IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly90di5hcHBsZS5jb20nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLkFQUExFVFYsXG4gICAgfSxcbiAgICBjcnVuY2h5cm9sbDoge1xuICAgICAgICBzb3VyY2U6ICdjcnVuY2h5cm9sbDovLycsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuQ1JVTkNIWVJPTEwsXG4gICAgfSxcbiAgICBkaXNuZXk6IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly93d3cuZGlzbmV5cGx1cy5jb20nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLkRJU05FWSxcbiAgICB9LFxuICAgIGVtYnk6IHtcbiAgICAgICAgc291cmNlOiAnZW1ieWF0djovL3R2LmVtYnkuZW1ieWF0di9zdGFydGFwcCcsXG4gICAgICAgIGljb246ICdtZGk6ZW1ieScsXG4gICAgfSxcbiAgICBmb3hzcG9ydHM6IHtcbiAgICAgICAgc291cmNlOiAnZm94c3BvcnRzOi8vbGl2ZScsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuRk9YU1BPUlRTLFxuICAgIH0sXG4gICAgaHVsdToge1xuICAgICAgICBzb3VyY2U6ICdodWx1Oi8vJyxcbiAgICAgICAgaWNvbjogJ21kaTpodWx1JyxcbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgICBzb3VyY2U6ICdodHRwczovL3BsYXkubWF4LmNvbScsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuTUFYLFxuICAgIH0sXG4gICAgbWxidHY6IHtcbiAgICAgICAgc291cmNlOiAnbWxiYXRiYXQ6Ly8nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLk1MQlRWLFxuICAgIH0sXG4gICAgbmJhOiB7XG4gICAgICAgIHNvdXJjZTogJ2dhbWV0aW1lOi8vJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5OQkEsXG4gICAgfSxcbiAgICBuZXRmbGl4OiB7IHNvdXJjZTogJ25ldGZsaXg6Ly8nLCBpY29uOiAnbWRpOm5ldGZsaXgnIH0sXG4gICAgcGxleDoge1xuICAgICAgICBzb3VyY2U6ICdwbGV4Oi8vJyxcbiAgICAgICAgaWNvbjogJ21kaTpwbGV4JyxcbiAgICB9LFxuICAgIHByaW1ldmlkZW86IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly9hcHAucHJpbWV2aWRlby5jb20nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLlBSSU1FVklERU8sXG4gICAgfSxcbiAgICBwaWE6IHtcbiAgICAgICAgc291cmNlOiAncGlhdnBuOi8vJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5QSUEsXG4gICAgfSxcbiAgICBzcG90aWZ5OiB7IHNvdXJjZTogJ3Nwb3RpZnk6Ly8nLCBpY29uOiAnbWRpOnNwb3RpZnknIH0sXG4gICAgc3VyZnNoYXJrOiB7XG4gICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vc3VyZnNoYXJrLmNvbS9sb2NhdGlvbnMtdWwnLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLlNVUkZTSEFSSyxcbiAgICB9LFxuICAgIHZ1ZHU6IHtcbiAgICAgICAgc291cmNlOiAndnVkdWFwcDovLycsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuVlVEVSxcbiAgICB9LFxuICAgIHlvdXR1YmU6IHsgc291cmNlOiAndm5kLnlvdXR1YmU6Ly8nLCBpY29uOiAnbWRpOnlvdXR1YmUnIH0sXG4gICAgeW91dHViZXR2OiB7XG4gICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vdHYueW91dHViZS5jb20nLFxuICAgICAgICBpY29uOiAnbWRpOnlvdXR1YmUtdHYnLFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zdmdcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN2ZyA9IHZvaWQgMDtcbnZhciBzdmc7XG4oZnVuY3Rpb24gKHN2Zykge1xuICAgIHN2Z1tcIkFQUExFVFZcIl0gPSBcIk0gNi44MjAzMTIgOC4yNDYwOTQgQyA3LjE3OTY4OCA3LjgyNDIxOSA3LjM5ODQzOCA3LjI3MzQzOCA3LjM5ODQzOCA2LjY3NTc4MSBDIDcuMzk4NDM4IDYuNjEzMjgxIDcuMzk4NDM4IDYuNTUwNzgxIDcuMzk0NTMxIDYuNDkyMTg4IEwgNy4zOTQ1MzEgNi41IEMgNi43NDYwOTQgNi41NjY0MDYgNi4xODM1OTQgNi44NzEwOTQgNS43ODUxNTYgNy4zMjQyMTkgTCA1Ljc4MTI1IDcuMzI4MTI1IEMgNS40MTc5NjkgNy43MjY1NjIgNS4xOTUzMTIgOC4yNjE3MTkgNS4xOTUzMTIgOC44NTE1NjIgQyA1LjE5NTMxMiA4LjkxMDE1NiA1LjE5OTIxOSA4Ljk2ODc1IDUuMjAzMTI1IDkuMDIzNDM4IEwgNS4yMDMxMjUgOS4wMTU2MjUgQyA1LjIwNzAzMSA5LjAxNTYyNSA1LjIxNDg0NCA5LjAxNTYyNSA1LjIyMjY1NiA5LjAxNTYyNSBDIDUuODY3MTg4IDkuMDE1NjI1IDYuNDQ1MzEyIDguNzE4NzUgNi44MjAzMTIgOC4yNSBaIE0gOC4xOTUzMTIgMTIuMzA0Njg4IEMgOC4yMDMxMjUgMTMuMjkyOTY5IDguNzk2ODc1IDE0LjE0MDYyNSA5LjY0ODQzOCAxNC41MTE3MTkgTCA5LjY2NDA2MiAxNC41MTk1MzEgQyA5LjQ2ODc1IDE1LjEwOTM3NSA5LjIxNDg0NCAxNS42MjUgOC44OTQ1MzEgMTYuMDkzNzUgTCA4LjkwNjI1IDE2LjA3MDMxMiBDIDguNDQ5MjE5IDE2LjczNDM3NSA3Ljk4MDQ2OSAxNy4zOTg0MzggNy4yMzA0NjkgMTcuNDE0MDYyIEMgNi41IDE3LjQyOTY4OCA2LjI2OTUzMSAxNi45ODA0NjkgNS40MjU3ODEgMTYuOTgwNDY5IEMgNC41ODk4NDQgMTYuOTgwNDY5IDQuMzI4MTI1IDE3LjM5ODQzOCAzLjYzMjgxMiAxNy40Mjk2ODggQyAyLjkyNTc4MSAxNy40NTMxMjUgMi4zNzUgMTYuNzAzMTI1IDEuOTE0MDYyIDE2LjAzOTA2MiBDIDEuMjI2NTYyIDE1LjEwOTM3NSAwLjgxMjUgMTMuOTQxNDA2IDAuODEyNSAxMi42NzE4NzUgQyAwLjgxMjUgMTEuOTAyMzQ0IDAuOTY0ODQ0IDExLjE2Nzk2OSAxLjI0MjE4OCAxMC41IEwgMS4yMjY1NjIgMTAuNTM1MTU2IEMgMS42Nzk2ODggOS43MzQzNzUgMi41MTk1MzEgOS4xOTUzMTIgMy40ODQzNzUgOS4xNzE4NzUgTCAzLjQ4ODI4MSA5LjE3MTg3NSBDIDQuMTkxNDA2IDkuMTU2MjUgNC44NjMyODEgOS42NDg0MzggNS4yOTY4NzUgOS42NDg0MzggQyA1LjcyNjU2MiA5LjY0ODQzOCA2LjUzNTE1NiA5LjA2MjUgNy4zODY3MTkgOS4xNDg0MzggQyA4LjIxMDkzOCA5LjE3OTY4OCA4LjkzMzU5NCA5LjU5Mzc1IDkuMzc4OTA2IDEwLjIxODc1IEwgOS4zODY3MTkgMTAuMjI2NTYyIEMgOC42NzU3ODEgMTAuNjY0MDYyIDguMjEwOTM4IDExLjQyOTY4OCA4LjE5NTMxMiAxMi4zMDQ2ODggWiBNIDE1LjAxOTUzMSAxNy4zMDQ2ODggQyAxNC41ODk4NDQgMTcuNDI5Njg4IDE0LjA5NzY1NiAxNy41IDEzLjU4NTkzOCAxNy41IEMgMTMuNTgyMDMxIDE3LjUgMTMuNTc0MjE5IDE3LjUgMTMuNTY2NDA2IDE3LjUgQyAxMi40MTc5NjkgMTcuNSAxMS44NDc2NTYgMTYuODUxNTYyIDExLjg0NzY1NiAxNS41NDY4NzUgTCAxMS44NDc2NTYgOS43OTY4NzUgTCAxMC44NTE1NjIgOS43OTY4NzUgTCAxMC44NTE1NjIgOC43NTM5MDYgTCAxMS44OTg0MzggOC43NTM5MDYgTCAxMS44OTg0MzggNy4zOTg0MzggTCAxMy4yODEyNSA2LjgzMjAzMSBMIDEzLjI4MTI1IDguNzYxNzE5IEwgMTQuODc4OTA2IDguNzYxNzE5IEwgMTQuODc4OTA2IDkuODA0Njg4IEwgMTMuMjg5MDYyIDkuODA0Njg4IEwgMTMuMjg5MDYyIDE1LjIzODI4MSBDIDEzLjI4NTE1NiAxNS4yNzczNDQgMTMuMjg1MTU2IDE1LjMyMDMxMiAxMy4yODUxNTYgMTUuMzY3MTg4IEMgMTMuMjg1MTU2IDE1LjY0MDYyNSAxMy4zNTkzNzUgMTUuODk4NDM4IDEzLjQ5MjE4OCAxNi4xMTcxODggTCAxMy40OTIxODggMTYuMTA5Mzc1IEMgMTMuNjQ0NTMxIDE2LjI2NTYyNSAxMy44NTU0NjkgMTYuMzYzMjgxIDE0LjA4OTg0NCAxNi4zNjMyODEgQyAxNC4xMjg5MDYgMTYuMzYzMjgxIDE0LjE2MDE1NiAxNi4zNTkzNzUgMTQuMTk1MzEyIDE2LjM1NTQ2OSBMIDE0LjE5MTQwNiAxNi4zNTU0NjkgQyAxNC40OTIxODggMTYuMzQzNzUgMTQuNzc3MzQ0IDE2LjMwNDY4OCAxNS4wNTA3ODEgMTYuMjQyMTg4IEwgMTUuMDE5NTMxIDE2LjI1IFogTSAyMC4wMTk1MzEgMTcuMzY3MTg4IEwgMTguMzI0MjE5IDE3LjM2NzE4OCBMIDE1LjE5NTMxMiA4Ljc1MzkwNiBMIDE2LjcyNjU2MiA4Ljc1MzkwNiBMIDE4LjYxNzE4OCAxNC4zNTU0NjkgQyAxOC42ODc1IDE0LjU3NDIxOSAxOC44NzEwOTQgMTUuMTk5MjE5IDE5LjE2NDA2MiAxNi4yNDIxODggTCAxOS40NDE0MDYgMTUuMzA4NTk0IEwgMTkuNzUgMTQuMzY3MTg4IEwgMjEuNzEwOTM4IDguNzQ2MDk0IEwgMjMuMjMwNDY5IDguNzQ2MDk0IFogTSAyMC4wMTk1MzEgMTcuMzY3MTg4IFwiO1xuICAgIHN2Z1tcIkNSVU5DSFlST0xMXCJdID0gXCJNIDIuOTMzNTk0IDEzLjQ2ODc1IEMgMi43MDcwMzEgMTAuNjAxNTYyIDMuNjU2MjUgNy43Njk1MzEgNS41NjY0MDYgNS42MjEwOTQgQyA3LjQ3NjU2MiAzLjQ3NjU2MiAxMC4xNzk2ODggMi4xOTkyMTkgMTMuMDUwNzgxIDIuMDg5ODQ0IEMgMTUuOTIxODc1IDEuOTg0Mzc1IDE4LjcxMDkzOCAzLjA1MDc4MSAyMC43NzczNDQgNS4wNDY4NzUgQyAyMi44NDc2NTYgNy4wNDI5NjkgMjQuMDA3ODEyIDkuNzkyOTY5IDI0IDEyLjY2Nzk2OSBMIDI0IDEyIEMgMjQgNS4zNzEwOTQgMTguNjI4OTA2IDAgMTIgMCBDIDUuMzcxMDk0IDAgMCA1LjM3MTA5NCAwIDEyIEMgMCAxOC42Mjg5MDYgNS4zNzEwOTQgMjQgMTIgMjQgTCAxMi44MDA3ODEgMjQgQyA3LjI2MTcxOSAyMy42MDkzNzUgMi45NjQ4NDQgMTkuMDE1NjI1IDIuOTMzNTk0IDEzLjQ2ODc1IFogTSAxOS4xOTkyMTkgMTQgQyAxNC44ODY3MTkgMTQuMDE1NjI1IDEzLjgxMjUgOC4wMTE3MTkgMTcuODY3MTg4IDYuNTMxMjUgQyAxNi42Nzk2ODggNS44OTg0MzggMTUuMzQ3NjU2IDUuNTc0MjE5IDE0IDUuNjAxNTYyIEMgMTAuNjAxNTYyIDUuNjAxNTYyIDcuNTM5MDYyIDcuNjQ4NDM4IDYuMjM4MjgxIDEwLjc4NTE1NiBDIDQuOTM3NSAxMy45MjU3ODEgNS42NTYyNSAxNy41MzkwNjIgOC4wNTg1OTQgMTkuOTQxNDA2IEMgMTAuNDYwOTM4IDIyLjM0Mzc1IDE0LjA3NDIxOSAyMy4wNjI1IDE3LjIxNDg0NCAyMS43NjE3MTkgQyAyMC4zNTE1NjIgMjAuNDYwOTM4IDIyLjM5ODQzOCAxNy4zOTg0MzggMjIuMzk4NDM4IDE0IEMgMjIuNDIxODc1IDEzLjQ2NDg0NCAyMi4zNzg5MDYgMTIuOTI1NzgxIDIyLjI2NTYyNSAxMi4zOTg0MzggQyAyMS42MDkzNzUgMTMuNDQ5MjE5IDIwLjQzNzUgMTQuMDYyNSAxOS4xOTkyMTkgMTQgWiBNIDE5LjE5OTIxOSAxNCBcIjtcbiAgICBzdmdbXCJESVNORVlcIl0gPSBcIk0gMjIuMTUyMzQ0IDkuMDg1OTM4IEMgMTkuMzM1OTM4IDUuMTE3MTg4IDEzLjYwMTU2MiAyLjg5MDYyNSAxMC40Mzc1IDIuMzYzMjgxIEMgNi45NDE0MDYgMS43ODEyNSA0LjgxMjUgMi4wMDM5MDYgMy4wMzkwNjIgMi4zMjgxMjUgQyAyLjM4MjgxMiAyLjQ0OTIxOSAwLjM5MDYyNSAyLjgxNjQwNiAwLjA3ODEyNSA0LjMyNDIxOSBDIC0wLjE5OTIxOSA1LjY4MzU5NCAxLjEzNjcxOSA2LjY1MjM0NCAxLjQwNjI1IDYuODMyMDMxIEMgMS45NDE0MDYgNy4xODc1IDIuNjYwMTU2IDcuMDQyOTY5IDMuMDE5NTMxIDYuNTExNzE5IEMgMy4zNzg5MDYgNS45ODA0NjkgMy4yNDIxODggNS4yNTM5MDYgMi43MTA5MzggNC44OTA2MjUgQyAyLjY4NzUgNC44NzUgMi42NjQwNjIgNC44NTU0NjkgMi42NDA2MjUgNC44MzU5MzggQyAyLjgyNDIxOSA0Ljc3MzQzOCAzLjA4OTg0NCA0LjY5OTIxOSAzLjQ2MDkzOCA0LjYyODkwNiBDIDQuOTIxODc1IDQuMzU5Mzc1IDYuNzUzOTA2IDQuMTIxMDk0IDEwLjA1NDY4OCA0LjY3MTg3NSBDIDEyLjcyNjU2MiA1LjExNzE4OCAxNy44NTkzNzUgNy4wNzgxMjUgMjAuMjQ2MDk0IDEwLjQzNzUgQyAyMS4yNzM0MzggMTEuODgyODEyIDIxLjY1MjM0NCAxMy40MjU3ODEgMjEuMzc4OTA2IDE1LjAxOTUzMSBDIDIxLjExMzI4MSAxNi41NTg1OTQgMjAuNDM3NSAxNy42MDE1NjIgMTkuMzEyNSAxOC4yMTQ4NDQgQyAxNy4yODUxNTYgMTkuMzE2NDA2IDE0LjA3NDIxOSAxOC44NDM3NSAxMS43MDcwMzEgMTguMTk1MzEyIEwgMTEuNzA3MDMxIDEzLjE5NTMxMiBDIDEyLjQ3NjU2MiAxMy4xOTUzMTIgMTMuMTk5MjE5IDEzLjI2OTUzMSAxNC4xMjg5MDYgMTMuNDQxNDA2IEMgMTQuNzQyMTg4IDEzLjU1ODU5NCAxNS4xMDU0NjkgMTMuODgyODEyIDE1LjIyMjY1NiAxNC4wNzQyMTkgQyAxNS4xOTkyMTkgMTQuMDg1OTM4IDE1LjE3MTg3NSAxNC4wOTc2NTYgMTUuMTQwNjI1IDE0LjEwNTQ2OSBDIDE0LjUyNzM0NCAxNC4zMTI1IDE0LjE5NTMxMiAxNC45NzI2NTYgMTQuNDAyMzQ0IDE1LjU4NTkzOCBDIDE0LjYwNTQ2OSAxNi4xOTkyMTkgMTUuMjY1NjI1IDE2LjUzMTI1IDE1Ljg4MjgxMiAxNi4zMjgxMjUgQyAxNy4yMzQzNzUgMTUuODc1IDE3LjY1NjI1IDE0LjgzNTkzOCAxNy41OTc2NTYgMTQuMDA3ODEyIEMgMTcuNTA3ODEyIDEyLjY2MDE1NiAxNi4yMjY1NjIgMTEuNDUzMTI1IDE0LjU1NDY4OCAxMS4xNDA2MjUgQyAxMy40NzY1NjIgMTAuOTQxNDA2IDEyLjYyMTA5NCAxMC44NTU0NjkgMTEuNzA3MDMxIDEwLjg1NTQ2OSBMIDExLjcwNzAzMSA4Ljc4MTI1IEMgMTEuNzA3MDMxIDguMTM2NzE5IDExLjE4MzU5NCA3LjYxMzI4MSAxMC41MzkwNjIgNy42MTMyODEgQyA5Ljg5NDUzMSA3LjYxMzI4MSA5LjM2NzE4OCA4LjEzNjcxOSA5LjM2NzE4OCA4Ljc4MTI1IEwgOS4zNjcxODggMTAuOTU3MDMxIEMgNS4wODIwMzEgMTEuMjgxMjUgMy4wNjI1IDEyLjE3MTg3NSAyLjcyMjY1NiAxMy44NDc2NTYgQyAyLjIxNDg0NCAxNi4zNjMyODEgNi40NDUzMTIgMTguNjM2NzE5IDguMzI0MjE5IDE5LjUxMTcxOSBDIDguMzg2NzE5IDE5LjUzOTA2MiA4Ljc2OTUzMSAxOS42OTkyMTkgOS4zNjcxODggMTkuOTEwMTU2IEwgOS4zNjcxODggMjEuMDY2NDA2IEMgOS4zNjcxODggMjEuNzE0ODQ0IDkuODk0NTMxIDIyLjIzODI4MSAxMC41MzkwNjIgMjIuMjM4MjgxIEMgMTEuMTgzNTk0IDIyLjIzODI4MSAxMS43MDcwMzEgMjEuNzE0ODQ0IDExLjcwNzAzMSAyMS4wNjY0MDYgTCAxMS43MDcwMzEgMjAuNjEzMjgxIEMgMTMuMDI3MzQ0IDIwLjk0MTQwNiAxNC41OTM3NSAyMS4yMTQ4NDQgMTYuMTYwMTU2IDIxLjIxNDg0NCBDIDE3LjY1NjI1IDIxLjIxNDg0NCAxOS4xNTYyNSAyMC45NjQ4NDQgMjAuNDI5Njg4IDIwLjI3MzQzOCBDIDIyLjE5OTIxOSAxOS4zMDg1OTQgMjMuMjkyOTY5IDE3LjY3NTc4MSAyMy42ODM1OTQgMTUuNDE3OTY5IEMgMjQuMDY2NDA2IDEzLjE4NzUgMjMuNTU0Njg4IDExLjA1NDY4OCAyMi4xNTIzNDQgOS4wODU5MzggWiBNIDkuMjc3MzQ0IDE3LjM3NSBDIDcuMjI2NTYyIDE2LjQxNzk2OSA1LjIxNDg0NCAxNC45NjQ4NDQgNS4wMzEyNSAxNC4zMjQyMTkgQyA1LjE3OTY4OCAxNC4xNjc5NjkgNS45Njg3NSAxMy41ODIwMzEgOS4zNjcxODggMTMuMzA0Njg4IEwgOS4zNjcxODggMTcuNDEwMTU2IEMgOS4zMzk4NDQgMTcuMzk4NDM4IDkuMzA0Njg4IDE3LjM4NjcxOSA5LjI3NzM0NCAxNy4zNzUgWiBNIDkuMjc3MzQ0IDE3LjM3NSBcIjtcbiAgICBzdmdbXCJGT1hTUE9SVFNcIl0gPSBcIk0gMC4yMzA1IDE1LjEyNSBMIDAuMjMwNSA1IEwgNi4yMTQ4IDUgTCA2LjM5ODQgNy43Njk1IEwgMy4wNDY5IDcuNzY5NSBMIDMuMDQ2OSA5LjA4OTggTCA1Ljc3NzMgOS4wODk4IEwgNS43NzczIDExLjg1MTYgTCAzLjAyNzMgMTEuODUxNiBMIDMuMDI3MyAxNS4xMjUgTCAwLjIzMDUgMTUuMTI1IE0gMjMuMjgxMyAxNS4wOTM4IEwgMjAuMjg1MiA5LjgzOTggTCAyMy4wMDc4IDUgTCAyMC4wMTE3IDUgTCAxOC43Njk1IDcuMTc5NyBMIDE3LjU0NjkgNSBMIDE0LjQ0NTMgNSBMIDE3LjIxODggOS44NzUgTCAxNC4yODEzIDE1LjEwMTYgTCAxNy4yOTMgMTUuMDk3NyBMIDE4LjczMDUgMTIuNTM5MSBMIDIwLjE4MzYgMTUuMDkzOCBMIDIzLjI4MTMgMTUuMDkzOCBNIDExLjkxMDIgMTIuMDk3NyBMIDExLjkxMDIgOC4wNTA4IEMgMTEuOTEwMiA3LjU4OTggMTEuNTE1NiA3LjE3NTggMTEuMDcwMyA3LjE3NTggQyAxMC42Mjg5IDcuMTc1OCAxMC4yNjk1IDcuNTg5OCAxMC4yNjk1IDguMDUwOCBMIDEwLjI2OTUgMTIuMDgyIEMgMTAuMjY5NSAxMi41NDY5IDEwLjYyODkgMTIuOTE4IDExLjA3MDMgMTIuOTE4IEMgMTEuNTE1NiAxMi45MTggMTEuOTEwMiAxMi41NTg2IDExLjkxMDIgMTIuMDk3NyBaIE0gNi4zMjQyIDEwLjA3NDIgQyA2LjMyNDIgNy4zNTk0IDguNDQxNCA1LjE1MjMgMTEuMDU4NiA1LjE1MjMgQyAxMy42NzU4IDUuMTUyMyAxNS43OTY5IDcuMzU5NCAxNS43OTY5IDEwLjA3NDIgQyAxNS43OTY5IDEyLjc5MyAxMy42NzU4IDE0Ljk5NjEgMTEuMDU4NiAxNC45OTYxIEMgOC40NDE0IDE0Ljk5NjEgNi4zMjQyIDEyLjc5MyA2LjMyNDIgMTAuMDc0MiBaIE0gMCAxOS41MTk1IEwgMCAxOC45OTYxIEwgMC4yNjE3IDE4LjczNDQgTCAyLjM4NjcgMTguNzM0NCBMIDIuNDY0OCAxOC42NTYzIEwgMi40NjQ4IDE4LjEwMTYgTCAyLjQxMDIgMTguMDM5MSBMIDAuNDM3NSAxOC4wMzkxIEwgMCAxNy41OTM4IEwgMCAxNi4zMjAzIEwgMC41MDM5IDE1LjgwODYgTCAzLjM2MzMgMTUuODA4NiBMIDMuMzYzMyAxNi4zNzExIEwgMy4xNTYzIDE2LjU4NTkgTCAxLjA4MiAxNi41ODU5IEwgMS4wMDM5IDE2LjY2OCBMIDEuMDAzOSAxNy4yMDcgTCAxLjA2MjUgMTcuMjY1NiBMIDMuMDI3MyAxNy4yNjU2IEwgMy40NjQ4IDE3LjcxNDggTCAzLjQ2NDggMTkuMDAzOSBMIDIuOTYwOSAxOS41MTk1IEwgMCAxOS41MTk1IE0gNi40NjA5IDE3LjYwNTUgTCA2LjYwOTQgMTcuNDUzMSBMIDYuNjA5NCAxNi43NDIyIEwgNi40NjA5IDE2LjU5MzggTCA1LjA5MzggMTYuNTkzOCBMIDUuMDkzOCAxNy42MDU1IFogTSA0LjA4OTggMTUuODA4NiBMIDcuMDU0NyAxNS44MDg2IEwgNy42MTcyIDE2LjM3ODkgTCA3LjYxNzIgMTcuNzUzOSBMIDcuMDU0NyAxOC4zMjgxIEwgNS4wOTM4IDE4LjMyODEgTCA1LjA5MzggMTkuNTE5NSBMIDQuMDg5OCAxOS41MTk1IFogTSAxMC41MTU2IDE4LjY0ODQgTCAxMC43MjI3IDE4LjQ0MTQgTCAxMC43MjI3IDE2LjgyMDMgTCAxMC41MTU2IDE2LjYxMzMgTCA5LjM0NzcgMTYuNjEzMyBMIDkuMTQwNiAxNi44MjAzIEwgOS4xNDA2IDE4LjQ0MTQgTCA5LjM0NzcgMTguNjQ4NCBaIE0gOC4xNDQ1IDE4Ljk0OTIgTCA4LjE0NDUgMTYuMzc4OSBMIDguNjk5MiAxNS44MDg2IEwgMTEuMTYwMiAxNS44MDg2IEwgMTEuNzIyNyAxNi4zNzg5IEwgMTEuNzIyNyAxOC45NDkyIEwgMTEuMTYwMiAxOS41MTk1IEwgOC42OTkyIDE5LjUxOTUgWiBNIDE0LjczNDQgMTcuMzk4NCBMIDE0Ljg3NSAxNy4yNTM5IEwgMTQuODc1IDE2LjcxMDkgTCAxNC43MzQ0IDE2LjU2NjQgTCAxMy4zODI4IDE2LjU2NjQgTCAxMy4zODI4IDE3LjM5ODQgWiBNIDEyLjM3ODkgMTUuODA4NiBMIDE1LjM3NSAxNS44MDg2IEwgMTUuODc4OSAxNi4zMjAzIEwgMTUuODc4OSAxNy41MDM5IEwgMTUuMzk4NCAxNy45OTYxIEwgMTYuMDMxMyAxOS41MTk1IEwgMTQuOTE0MSAxOS41MTk1IEwgMTQuNDQ1MyAxOC4xNzE5IEwgMTMuMzgyOCAxOC4xNzE5IEwgMTMuMzgyOCAxOS41MTk1IEwgMTIuMzc4OSAxOS41MTk1IFogTSAxNy4zNzg5IDE2LjY2OCBMIDE2LjIxODggMTYuNjY4IEwgMTYuMjE4OCAxNS44MDg2IEwgMTkuNTM5MSAxNS44MDg2IEwgMTkuNTM5MSAxNi42NjggTCAxOC4zODI4IDE2LjY2OCBMIDE4LjM4MjggMTkuNTE5NSBMIDE3LjM3ODkgMTkuNTE5NSBMIDE3LjM3ODkgMTYuNjY4IE0gMjAuMDgyIDE5LjYyMTEgTCAyMC4wODIgMTkuMDk3NyBMIDIwLjM0MzggMTguODM1OSBMIDIyLjQ2ODggMTguODM1OSBMIDIyLjU0NjkgMTguNzU3OCBMIDIyLjU0NjkgMTguMjAzMSBMIDIyLjQ5MjIgMTguMTQwNiBMIDIwLjUxOTUgMTguMTQwNiBMIDIwLjA4MiAxNy42OTUzIEwgMjAuMDgyIDE2LjQyMTkgTCAyMC41ODU5IDE1LjkxMDIgTCAyMy40NDUzIDE1LjkxMDIgTCAyMy40NDUzIDE2LjQ3MjcgTCAyMy4yMzgzIDE2LjY4NzUgTCAyMS4xNjggMTYuNjg3NSBMIDIxLjA4NTkgMTYuNzY5NSBMIDIxLjA4NTkgMTcuMzA4NiBMIDIxLjE0NDUgMTcuMzY3MiBMIDIzLjExMzMgMTcuMzY3MiBMIDIzLjU0NjkgMTcuODE2NCBMIDIzLjU0NjkgMTkuMTA1NSBMIDIzLjA0MyAxOS42MjExIEwgMjAuMDgyIDE5LjYyMTFcIjtcbiAgICBzdmdbXCJNQVhcIl0gPSBcIk0gMy43NDQzIDggQyAzLjA5NDkgOCAyLjQzODEgOC4yOTMyIDEuNTk1NyA4Ljk1NzQgTCAxLjU5NTcgOC4xNjcgTCAwIDguMTY3IEwgMCAxNC40NzU2IEwgMS42OTU5IDE0LjQ3NTYgTCAxLjY5NTkgMTAuNTUzMSBDIDIuNDM4MSA5Ljk1NTcgMi43NzU4IDkuNzY2NCAzLjA1NDEgOS43NjY0IEMgMy4zODQ0IDkuNzY2NCAzLjU5OTYgOS45NzQyIDMuNTk5NiAxMC41MDEyIEwgMy41OTk2IDE0LjQ3NTYgTCA1LjI5NTUgMTQuNDc1NiBMIDUuMjk1NSAxMC41NDIgQyA2LjAzNzcgOS45NTU3IDYuMzY4IDkuNzY2NCA2LjY1MzcgOS43NjY0IEMgNi45ODQgOS43NjY0IDcuMTk5MiA5Ljk3NDIgNy4xOTkyIDEwLjUwMTIgTCA3LjE5OTIgMTQuNDc1NiBMIDguODk1MSAxNC40NzU2IEwgOC44OTUxIDkuODkyNiBDIDguODk1MSA4LjQ3MTMgOC4xMDQ3IDggNy4zNDM5IDggQyA2LjY5NDUgOCA2LjAzNzcgOC4yNzQ2IDUuMTczIDguOTQ2MyBDIDQuODk0NyA4LjI0MTIgNC4yODk4IDggMy43NDQzIDggWiBNIDEyLjM0MjYgOCBDIDEwLjY1NzggOCA5LjI1ODggOS40ODA3IDkuMjU4OCAxMS4zMjEzIEMgOS4yNTg4IDEzLjE2MTkgMTAuNjU3OCAxNC42NDI2IDEyLjM0MjYgMTQuNjQyNiBDIDEzLjE3NzUgMTQuNjQyNiAxMy44OTc1IDE0LjMyNzEgMTQuNDUwNCAxMy42NDQzIEwgMTQuNDUwNCAxNC40NzU2IEwgMTYuMDY4NCAxNC40NzU2IEwgMTYuMDY4NCA4LjE2NyBMIDE0LjQ1MDQgOC4xNjcgTCAxNC40NTA0IDguOTk4MiBDIDEzLjg5NzUgOC4zMTU0IDEzLjE3NzUgOCAxMi4zNDI2IDggWiBNIDE2LjM2NTIgOC4xNjcgQyAxNy4wNjI5IDkuMjg0IDE3Ljg1NyAxMC4yODIyIDE4Ljc4MTEgMTEuMjgwNSBDIDE3Ljg1NyAxMi4zMTk1IDE3LjA2MjkgMTMuNDAzMSAxNi4zNjUyIDE0LjQ3NTYgTCAxOC40MSAxNC40NzU2IEMgMTguODk2MSAxMy42NzQgMTkuNDQxNiAxMi45NTA0IDIwLjA2ODcgMTIuMjY3NiBDIDIwLjY4NDggMTIuOTUwNCAyMS4yMDA2IDEzLjY3NCAyMS42ODMgMTQuNDc1NiBMIDIzLjc1IDE0LjQ3NTYgQyAyMy4wNDEyIDEzLjM2OTcgMjIuMjY5MyAxMi4zMTk1IDIxLjM0MTYgMTEuMjgwNSBDIDIyLjI1ODIgMTAuMjgyMiAyMy4wNDEyIDkuMjUwNiAyMy43NSA4LjE2NyBMIDIxLjcyMzggOC4xNjcgQyAyMS4yMTkxIDguOTY4NiAyMC42NzM2IDkuNjQwMiAyMC4wNjg3IDEwLjMwMDggQyAxOS40NDkgOS42NDAyIDE4LjkwNzIgOC45Njg2IDE4LjQxIDguMTY3IFogTSAxMi41OTg2IDkuNDYyMSBDIDEzLjYwOCA5LjQ2MjEgMTQuNDIwNyAxMC4yODk2IDE0LjQyMDcgMTEuMzIxMyBDIDE0LjQyMDcgMTIuMzUyOSAxMy42MDggMTMuMTgwNSAxMi41OTg2IDEzLjE4MDUgQyAxMS41OTMgMTMuMTgwNSAxMC43ODAzIDEyLjM1MjkgMTAuNzgwMyAxMS4zMjEzIEMgMTAuNzgwMyAxMC4yODk2IDExLjU5MyA5LjQ2MjEgMTIuNTk4NiA5LjQ2MjEgWiBNIDEyLjU5ODYgOS44ODE0IEMgMTEuODI2OCA5Ljg4MTQgMTEuMTk5NiAxMC41MjM0IDExLjE5OTYgMTEuMzIxMyBDIDExLjE5OTYgMTIuMTE5MSAxMS44MjY4IDEyLjc2MTEgMTIuNTk4NiAxMi43NjExIEMgMTMuMzcwNSAxMi43NjExIDEzLjk5NzcgMTIuMTE5MSAxMy45OTc3IDExLjMyMTMgQyAxMy45OTc3IDEwLjUyMzQgMTMuMzcwNSA5Ljg4MTQgMTIuNTk4NiA5Ljg4MTQgWiBNIDEyLjU5ODYgOS44ODE0XCI7XG4gICAgc3ZnW1wiTUxCVFZcIl0gPSBcIk0gMjMuMjUzOSA3LjAwMzkgQyAyMy4yNjU2IDYuMjkzIDIyLjY5NTMgNS43MTA5IDIxLjk4ODMgNS43MDMxIEMgMjEuOTgwNSA1LjcwMzEgMjEuOTcyNyA1LjcwMzEgMjEuOTY0OCA1LjcwMzEgTCAxNi4zODI4IDUuNzAzMSBMIDE5LjU4NTkgMTEuMDYyNSBMIDE5Ljg3ODkgMTEuMTAxNiBMIDIwLjA2NjQgMTEuMzQzOCBMIDIwLjA2NjQgMTEuNTc0MiBMIDIwLjI2OTUgMTEuNjE3MiBMIDIwLjQ1NyAxMS44NzExIEwgMjAuNDU3IDEyLjA4OTggTCAyMC42NjQxIDEyLjEyODkgTCAyMC44NzUgMTIuMzU5NCBMIDIwLjg3NSAxMi44NjcyIEMgMjEuMTI4OSAxMy4wOTc3IDIxLjQxMDIgMTMuMjg1MiAyMS43MTg4IDEzLjQyOTcgQyAyMiAxMy41MzkxIDIyLjAzMTMgMTMuOTkyMiAyMi4yMDMxIDE0LjIzNDQgQyAyMi40MTQxIDE0LjU4NTkgMjIuNzA3IDE0LjcyNjYgMjIuNjQ0NSAxNC45MjU4IEMgMjIuNTAzOSAxNS40NDkyIDIxLjk2NDggMTYuMzM5OCAyMS40NjQ4IDE2LjM3ODkgTCAxOS40ODA1IDE2LjM3ODkgTCAxOS40ODA1IDE3LjIzMDUgTCAyMS45NjQ4IDE3LjIzMDUgQyAyMi42ODM2IDE3LjIyNjYgMjMuMjYxNyAxNi42NDQ1IDIzLjI1NzggMTUuOTI1OCBMIDIzLjI1NzggNy4wMDM5IE0gOS42MDE2IDE2LjM5NDUgTCA4LjY0NDUgMTYuMzk0NSBDIDguNjQ0NSAxMy45OTIyIDkuNDUzMSAxMi42NjQxIDEwLjQyNTggMTIuMzk4NCBDIDEwLjU1ODYgMTIuMzc1IDEwLjQ5MjIgMTEuNzE4OCAxMC4zMjQyIDExLjUxOTUgTCA5Ljc2NTYgMTEuNTE5NSBDIDkuNjc1OCAxMS41MTk1IDkuNzI2NiAxMS4zNDc3IDkuNzI2NiAxMS4zNDc3IEwgMTAuMTc5NyAxMC4zNzg5IEwgMTAuMTIxMSAxMC4xMDk0IEwgOC40NDE0IDEwLjEwOTQgTCA5LjgyMDMgOS4xNDQ1IEMgOS44ODI4IDYuNTkzOCAxMi40OTYxIDYuMzk0NSAxNC4wNjY0IDcuNDU3IEMgMTUuMDAzOSA4LjA3ODEgMTUuMDc0MiA5LjMwODYgMTUuMDAzOSAxMC4xNTYzIEMgMTQuOTkyMiAxMC4yMTA5IDE0Ljc1NzggMTAuMTc1OCAxNC43NTc4IDEwLjE3NTggQyAxNC43NTc4IDEwLjE3NTggMTQuNjAxNiAxMS4xMTMzIDE1LjAxNTYgMTEuMTEzMyBMIDE2Ljg1MTYgMTEuMTEzMyBDIDE3LjU5NzcgMTEuMDgyIDE4LjMyMDMgMTEuNTg5OCAxOC4zMjAzIDExLjU4OTggTCAxOC40OTYxIDEwLjk0NTMgTCAxNC40NzY2IDUuNzAzMSBMIDEuOTk2MSA1LjcwMzEgQyAxLjY1MjMgNS42OTkyIDEuMzIwMyA1LjgzNTkgMS4wNzQyIDYuMDc4MSBDIDAuODMyIDYuMzI0MiAwLjY5NTMgNi42NTYzIDAuNjk5MiA3LjAwMzkgTCAwLjY5OTIgMTUuOTI5NyBDIDAuNjk1MyAxNi4yNzM0IDAuODI4MSAxNi42MDk0IDEuMDc0MiAxNi44NTE2IEMgMS4zMjAzIDE3LjA5NzcgMS42NTIzIDE3LjIzNDQgMS45OTYxIDE3LjIzNDQgTCAxMC4wOTc3IDE3LjIzNDQgQyA5LjkwMjMgMTYuODk0NSA5LjY3NTggMTYuNTA3OCA5LjYwNTUgMTYuMzk0NSBNIDIuNSAxNC41IEMgMi41IDE0LjAwNzggMi44OTQ1IDEzLjYwOTQgMy4zODY3IDEzLjYwOTQgQyAzLjg3NSAxMy42MDk0IDQuMjczNCAxNC4wMDc4IDQuMjczNCAxNC41IEMgNC4yNzM0IDE0Ljk4ODMgMy44NzUgMTUuMzg2NyAzLjM4NjcgMTUuMzg2NyBMIDMuMzc4OSAxNS4zODY3IEMgMi44OTQ1IDE1LjM4NjcgMi41IDE0Ljk5NjEgMi41IDE0LjUxMTcgQyAyLjUgMTQuNTA3OCAyLjUgMTQuNTAzOSAyLjUgMTQuNVwiO1xuICAgIHN2Z1tcIk5CQVwiXSA9IFwiTSA3Ljg1NTUgMjEuMTYwMiBDIDcuNTU0NyAyMC44OTA2IDcuNzUzOSAyMC43NzM0IDcuNzM4MyAyMC42NTYzIEMgNy41MzkxIDE5LjgyMDMgNi44NjcyIDE5LjMyMDMgNy4yMTg4IDE5LjA1NDcgQyA3LjE0ODQgMTguODQzOCA3LjA2NjQgMTguNjM2NyA2Ljk2ODggMTguNDMzNiBDIDUuOTMzNiAxNy44NDc3IDUuMDYyNSAxNi44Nzg5IDQuOTE0MSAxNi43NDYxIEMgNC43NjE3IDE2LjYxMzMgNC40Mjk3IDE2LjM0MzggNC4zNjMzIDE2LjE5NTMgQyA0LjI5NjkgMTYuMDQzIDIuOTA2MyAxNC4yMzgzIDIuNjI1IDEzLjYyMTEgTCAyLjE0MDYgMTMuNTU0NyBDIDEuOTIxOSAxMi42MzY3IDEuMTcxOSAxMS44NjcyIDEuMTUyMyAxMC45NjQ4IEMgMS4xNzU4IDEwLjU0MyAxLjI1IDEwLjEyODkgMS4zNzExIDkuNzI2NiBDIDEuNDY4OCA5LjU3ODEgMS41ODU5IDkuNDQxNCAxLjcyMjcgOS4zMjQyIEwgMS43MjI3IDkuMDc0MiBDIDAuNjUyMyA5LjEwOTQgMC45NTMxIDguOTkyMiAwLjc2OTUgOC41NzQyIEMgMC41ODU5IDguMTU2MyAwLjczNDQgOC4yMjI3IDAuNzg1MiA4LjAyMzQgQyAwLjkzNzUgNy40Mzc1IDEuNDAyMyA2LjUxOTUgMS42MDU1IDYuMTAxNiBDIDEuODA0NyA1LjY4MzYgMS44NzExIDUuMzgyOCAxLjg3MTEgNS4zODI4IEMgMi42NzU4IDMuNzYxNyAyLjk3NjYgMy44Nzg5IDMuOTI1OCAzLjc3NzMgTCAzLjk3NjYgMy43MTA5IEMgNC45Mjk3IDMuNjc1OCA0Ljc4MTMgMy41OTM4IDQuOTE0MSAyLjY3NTggQyA0Ljc4MTMgMi43NDIyIDQuNzMwNSAyLjM5MDYgNC43MzA1IDIuMzkwNiBDIDQuNjQ0NSAxLjg3MTEgNC44Nzg5IDEuOTcyNyA0Ljk4MDUgMS45NTcgQyA0Ljk5NjEgMS4xMDE2IDUuMDk3NyAwLjgyMDMgNS43MTQ4IDAuNTg1OSBMIDIuNDkyMiAwLjU4NTkgQyAxLjQzNzUgMC41ODU5IDAuNTg1OSAxLjQzNzUgMC41ODU5IDIuNDg4MyBMIDAuNTg1OSAyMS41MDc4IEMgMC41ODU5IDIyLjU2MjUgMS40Mzc1IDIzLjQxNDEgMi40OTIyIDIzLjQxNDEgTCA4LjEwNTUgMjMuNDE0MSBDIDcuNDUzMSAyMy4wNjI1IDcuODM5OCAyMi40MTQxIDcuODU1NSAyMS4xNjAyIE0gMjEuNTA3OCAwLjU4NTkgTCA2LjI4NTIgMC41ODU5IEMgNi41MTU2IDAuNjQ4NCA2LjcxNDggMC43OTY5IDYuODM1OSAxLjAwMzkgQyA3LjA3MDMgMS4wMTk1IDcuMzU1NSAxLjU1NDcgNi45MTggMi4zMjQyIEMgNy4xMjExIDIuNDU3IDYuOTY4OCAyLjY0MDYgNi44MjAzIDIuODU5NCBDIDYuNjY4IDMuMDc0MiA2LjczNDQgMy4wNTg2IDYuNjE3MiAzLjA0MyBDIDYuNDUzMSAzLjM5NDUgNi4yNSAzLjcyNjYgNi4xMDE2IDMuNzQyMiBDIDYuMDM1MiAzLjgyMDMgNi4wMjczIDMuOTI5NyA2LjA4MiA0LjAxMTcgQyA2LjMwODYgNC4xMDE2IDYuNTE1NiA0LjIyNjYgNi43MDMxIDQuMzc4OSBMIDYuNzAzMSA0LjQ2MDkgQyA2Ljg2NzIgNC41NjI1IDYuOTUzMSA0LjY0NDUgNy4xMzY3IDQuNzQ2MSBDIDcuNTg1OSA1LjAzMTMgOC4xNTYzIDUuNTQ2OSA4LjA4OTggNy4zMjAzIEMgOC4yMjI3IDcuNzAzMSA4LjI3MzQgOC40NTcgOC4zOTA2IDguNzA3IEMgOC41MDc4IDguOTU3IDguNzkzIDkuNDkyMiA4Ljg1OTQgOS45MjU4IEMgOC44NTk0IDkuOTI1OCA4LjkyNTggMTAuNTc4MSA5LjAwNzggMTAuNjY0MSBMIDkuMDU4NiAxMC42NjQxIEMgOS40NDE0IDEwLjc0NjEgOS4zNzUgMTAuNzk2OSA5LjQxMDIgMTAuODYzMyBMIDkuNTA3OCAxMC45NDUzIEMgOS42MDk0IDEwLjk5NjEgOS43NzczIDExLjA0NjkgOS43NzczIDExLjIzMDUgTCA5Ljg1OTQgMTEuMzYzMyBDIDkuOTEwMiAxMS40NDUzIDkuOTU3IDExLjUyNzMgOS45OTYxIDExLjYxNzIgQyAxMC4xMjg5IDExLjk5MjIgMTAuMTI4OSAxMi40MDYzIDkuOTk2MSAxMi43ODUyIEwgOS45OTYxIDEyLjgzNTkgQyA5Ljg0NzcgMTMuMjAzMSA5LjU3NDIgMTMuNTAzOSA5LjIyNjYgMTMuNjg3NSBMIDkuMTkxNCAxMy42ODc1IEwgOS4xNDA2IDEzLjcyMjcgQyA4LjkxOCAxMy44MjgxIDguNjcxOSAxMy44ODY3IDguNDIxOSAxMy44ODY3IEMgNy40ODgzIDEzLjc2NTYgNi44MzIgMTIuOTA2MyA2Ljk1NyAxMS45NzI3IEMgNy4wMzkxIDExLjM1OTQgNy40NDUzIDEwLjgzOTggOC4wMjM0IDEwLjYxMzMgQyA3LjgyMDMgMTAuMTI4OSA3LjQyMTkgOS4zNDM4IDcuMzA0NyA5LjA5MzggQyA3LjE4NzUgOC44Mzk4IDYuOTAyMyA3LjIxODggNi44NTE2IDYuOTAyMyBDIDYuODAwOCA2LjU4NTkgNi4xMTcyIDcuMzIwMyA2LjExNzIgNy4zNTU1IEMgNi4xMTcyIDcuMzg2NyA1LjU4MiA4LjY5MTQgNS41NjY0IDguNzU3OCBDIDUuNTU0NyA4LjgyODEgNS41NDY5IDguOTAyMyA1LjU0NjkgOC45NzY2IEMgNS41NDY5IDguOTc2NiA1LjgwMDggOS4wMDc4IDUuOTMzNiA5LjQyNTggQyA2LjA2NjQgOS44NDM4IDYuNSAxMS4zOTg0IDYuNSAxMS4zOTg0IEwgNi4zODI4IDExLjUxNTYgQyA2LjkxOCAxMy4zMDQ3IDYuNzM0NCAxNC4wNzQyIDYuOTY4OCAxNC42MDU1IEMgNy4yMDMxIDE1LjE0MDYgNy4zNTU1IDE1LjI0MjIgNy42MDU1IDE1Ljg3ODkgQyA3Ljg1NTUgMTYuNTExNyA3Ljk4ODMgMTguMTE3MiA4LjA3NDIgMTguMTgzNiBDIDguMzU1NSAxOC41NTA4IDguNTIzNCAxOC44MzU5IDguNTIzNCAxOS4wMzUyIEMgOC41MjM0IDE5LjIzODMgOC4yNzM0IDE5Ljg1NTUgOC4zNzUgMjAuMjIyNyBDIDguNDcyNyAyMC41ODk4IDguNDU3IDIwLjkwNjMgOC41NTg2IDIwLjk5MjIgQyA4LjY1NjMgMjEuMDc0MiA4LjY0MDYgMjEuMTc1OCA4LjYwNTUgMjEuMjQyMiBDIDguNTg5OCAyMS4yNzM0IDguNTc4MSAyMS4zMDg2IDguNTc0MiAyMS4zNDM4IEMgOC43MjI3IDIxLjkxMDIgOS4yNDIyIDIyLjg2MzMgOC40MjE5IDIzLjM2MzMgTCA4LjM3NSAyMy4zOTg0IEwgMjEuNTQzIDIzLjM5ODQgQyAyMi41ODIgMjMuMzkwNiAyMy40MjE5IDIyLjU1MDggMjMuNDMzNiAyMS41MTE3IEwgMjMuNDMzNiAyLjQ5MjIgQyAyMy40MjE5IDEuNDMzNiAyMi41NjY0IDAuNTg1OSAyMS41MDc4IDAuNTg1OSBaIE0gMjEuNTA3OCAwLjU4NTkgTSAxNS43OTMgNS4xMTMzIEwgMTkuMjM4MyA1LjExMzMgTCAxOC41MzUyIDE2LjYyODkgTCAxNy43ODEzIDUuMTEzMyBMIDIxLjE0MDYgNS4xMTMzIEwgMTkuNjU2MyAxOC45MDIzIEwgMTcuMjQ2MSAxOC45MDIzIFogTSAxNS4zNDM4IDYuODM1OSBMIDEzLjg4NjcgNi44MzU5IEwgMTMuODg2NyAxOC44ODY3IEwgMTIuMDM1MiAxOC44ODY3IEwgMTIuMDM1MiA2LjgzNTkgTCAxMC42MTMzIDYuODM1OSBMIDEwLjYxMzMgNS4wOTc3IEwgMTUuMzQzOCA1LjA5NzcgWiBNIDMuNTQzIDIyLjIyNjYgTCAzLjU0MyAxOC43ODUyIEwgNC4yMTA5IDE4Ljc4NTIgQyA0LjU5NzcgMTguNzg1MiA0LjgyODEgMTguOTg0NCA0LjgyODEgMTkuNDcyNyBMIDQuODI4MSAxOS45ODgzIEMgNC44MjgxIDIwLjMwNDcgNC43MzA1IDIwLjQ1NyA0LjU5NzcgMjAuNTM5MSBDIDQuNzUzOSAyMC42NTYzIDQuODQzOCAyMC44NDM4IDQuODI4MSAyMS4wNDMgTCA0LjgyODEgMjEuNTQzIEMgNC44MjgxIDIyLjAxMTcgNC41NzgxIDIyLjIyNjYgNC4yMTA5IDIyLjIyNjYgWiBNIDQuMDExNyAyMC43MjI3IEwgNC4wMTE3IDIxLjc5MyBMIDQuMTk1MyAyMS43OTMgQyA0LjM0MzggMjEuNzkzIDQuMzk0NSAyMS43MTA5IDQuMzk0NSAyMS41NDMgTCA0LjM5NDUgMjAuOTU3IEMgNC4zOTQ1IDIwLjc5MyA0LjM0MzggMjAuNzIyNyA0LjE5NTMgMjAuNzIyNyBaIE0gNC4wMTE3IDE5LjIxODggTCA0LjAxMTcgMjAuMzU1NSBMIDQuMTc5NyAyMC4zNTU1IEMgNC4zNDM4IDIwLjM1NTUgNC4zNzg5IDIwLjMwNDcgNC4zNzg5IDIwLjEwNTUgTCA0LjM3ODkgMTkuNDM3NSBDIDQuMzc4OSAxOS4yNjk1IDQuMzI4MSAxOS4yMDMxIDQuMTc5NyAxOS4yMDMxIEwgNC4wMTE3IDE5LjIwMzEgWiBNIDUuOTMzNiAyMS41MjczIEwgNS41MTU2IDIxLjUyNzMgTCA1LjQ2NDggMjIuMjI2NiBMIDQuOTk2MSAyMi4yMjY2IEwgNS40MTQxIDE4Ljc4NTIgTCA2LjA2NjQgMTguNzg1MiBMIDYuNDY4OCAyMi4yMjY2IEwgNS45ODQ0IDIyLjIyNjYgWiBNIDUuNzE0OCAxOS4xNjggTCA1LjY5OTIgMTkuMTY4IEMgNS42NjQxIDE5LjU4NTkgNS42MTcyIDIwLjMwNDcgNS41OTc3IDIwLjUzOTEgTCA1LjU0NjkgMjEuMTQwNiBMIDUuODk4NCAyMS4xNDA2IEwgNS44NDc3IDIwLjUzOTEgQyA1LjgzMiAyMC4zMDQ3IDUuNzY1NiAxOS41ODU5IDUuNzE0OCAxOS4xNjggTSAyLjE4NzUgMjIuMjI2NiBMIDEuNzg5MSAyMi4yMjY2IEwgMS43ODkxIDE4Ljc4NTIgTCAyLjQyMTkgMTguNzg1MiBMIDIuOTQxNCAyMS42MDk0IEMgMi44OTA2IDIwLjk0MTQgMi44Mzk4IDIwLjEyMTEgMi44Mzk4IDE5LjQyMTkgTCAyLjgzOTggMTguNzg1MiBMIDMuMjQyMiAxOC43ODUyIEwgMy4yNDIyIDIyLjIyNjYgTCAyLjY1NjMgMjIuMjI2NiBMIDIuMTQwNiAxOS40NzI3IEMgMi4xNzE5IDIwLjEwNTUgMi4xODc1IDIwLjYyNSAyLjE4NzUgMjEuMTQwNiBaIE0gMi4xODc1IDIyLjIyNjZcIjtcbiAgICBzdmdbXCJQUklNRVZJREVPXCJdID0gXCJNIDEuMTYwMTU2IDIuNDUzMTI1IFogTSAxLjE2MDE1NiAyLjQ1MzEyNSBaIE0gMTAuMjQ2MDk0IDAuNDE0MDYyIEMgOS43OTI5NjkgMC40MTQwNjIgOS41MjM0MzggMC42MzY3MTkgOS40ODgyODEgMS4wNDI5NjkgQyA5LjQ2ODc1IDEuNDUzMTI1IDkuNzAzMTI1IDEuNjkxNDA2IDEwLjAyNzM0NCAxLjc1IEMgMTAuMTU2MjUgMS43NzczNDQgMTAuMjg1MTU2IDEuNzc3MzQ0IDEwLjQxNDA2MiAxLjc1IEMgMTAuNzEwOTM4IDEuNzEwOTM4IDEwLjkzMzU5NCAxLjQ2ODc1IDEwLjk1MzEyNSAxLjE3MTg3NSBDIDEwLjk4MDQ2OSAwLjgyNDIxOSAxMC44MjQyMTkgMC41NTQ2ODggMTAuNTE1NjI1IDAuNDUzMTI1IEMgMTAuNDI1NzgxIDAuNDI1NzgxIDEwLjMzOTg0NCAwLjQwNjI1IDEwLjI0NjA5NCAwLjQxNDA2MiBaIE0gMy40OTYwOTQgMi4zMjQyMTkgQyAzLjA0Njg3NSAyLjMxNjQwNiAyLjYzNjcxOSAyLjQ3MjY1NiAyLjI1MzkwNiAyLjc1NzgxMiBDIDIuMjE4NzUgMi43ODkwNjIgMi4xNzk2ODggMi44MTY0MDYgMi4xMjg5MDYgMi44NDM3NSBDIDIuMTE3MTg4IDIuODM1OTM4IDIuMTA5Mzc1IDIuODMyMDMxIDIuMTA5Mzc1IDIuODI0MjE5IEMgMi4wODk4NDQgMi43Njk1MzEgMi4wNzgxMjUgMi43MDcwMzEgMi4wNjI1IDIuNjU2MjUgQyAyLjAxNTYyNSAyLjUwNzgxMiAxLjk2MDkzOCAyLjQ2MDkzOCAxLjgwODU5NCAyLjQ2MDkzOCBDIDEuNjM2NzE5IDIuNDYwOTM4IDEuNDU3MDMxIDIuNDY0ODQ0IDEuMjg1MTU2IDIuNDYwOTM4IEMgMS4xNjAxNTYgMi40NTMxMjUgMS4wMzkwNjIgMi40NzI2NTYgMC45NDE0MDYgMi41NzQyMTkgQyAwLjk0MTQwNiA0LjU2NjQwNiAwLjk0OTIxOSA2LjU3MDMxMiAwLjk0OTIxOSA4LjU1NDY4OCBDIDEuMDIzNDM4IDguNjc1NzgxIDEuMTM2NzE5IDguNjk1MzEyIDEuMjczNDM4IDguNjk1MzEyIEMgMS40NzY1NjIgOC42OTE0MDYgMS42ODM1OTQgOC42OTUzMTIgMS44ODY3MTkgOC42OTUzMTIgQyAyLjI0NjA5NCA4LjY5NTMxMiAyLjI0NjA5NCA4LjY5NTMxMiAyLjI0NjA5NCA4LjMzOTg0NCBMIDIuMjQ2MDk0IDYuNzE4NzUgQyAyLjI0NjA5NCA2LjY3OTY4OCAyLjIyNjU2MiA2LjYyODkwNiAyLjI2NTYyNSA2LjU5NzY1NiBDIDIuNTU0Njg4IDYuODIwMzEyIDIuODk4NDM4IDYuOTUzMTI1IDMuMjU3ODEyIDYuOTg4MjgxIEMgMy43NjU2MjUgNy4wNDI5NjkgNC4yMTQ4NDQgNi45MTQwNjIgNC42MDE1NjIgNi41NzgxMjUgQyA0Ljg3ODkwNiA2LjMyMDMxMiA1LjA4NTkzOCA1Ljk4ODI4MSA1LjE5NTMxMiA1LjYyNSBDIDUuMzQzNzUgNS4xNjAxNTYgNS4zNTU0NjkgNC42Nzk2ODggNS4zMTY0MDYgNC4yMDcwMzEgQyA1LjI5Njg3NSAzLjkxMDE1NiA1LjIxNDg0NCAzLjYxMzI4MSA1LjA5Mzc1IDMuMzUxNTYyIEMgNC44NTkzNzUgMi44NTkzNzUgNC41IDIuNSAzLjk1MzEyNSAyLjM3MTA5NCBDIDMuNzk2ODc1IDIuMzM1OTM4IDMuNjQ0NTMxIDIuMzI0MjE5IDMuNDk2MDk0IDIuMzI0MjE5IFogTSAxNC42NjAxNTYgMi4zMjQyMTkgQyAxNC41MTU2MjUgMi4zMjQyMTkgMTQuMzc1IDIuMzM1OTM4IDE0LjIzNDM3NSAyLjM3MTA5NCBDIDEzLjg2MzI4MSAyLjQzNzUgMTMuNTMxMjUgMi42MDE1NjIgMTMuMjE0ODQ0IDIuNzk2ODc1IEMgMTMuMTc5Njg4IDIuODE2NDA2IDEzLjE0MDYyNSAyLjg1OTM3NSAxMy4wODU5MzggMi44NTkzNzUgQyAxMy4wNTg1OTQgMi43Njk1MzEgMTMuMDM5MDYyIDIuNjk1MzEyIDEzLjAxMTcxOSAyLjYyMTA5NCBDIDEyLjk3NjU2MiAyLjUxOTUzMSAxMi45MTc5NjkgMi40NjA5MzggMTIuODA4NTk0IDIuNDYwOTM4IEwgMTIuMTAxNTYyIDIuNDYwOTM4IEMgMTIuMDMxMjUgMi40NjA5MzggMTEuOTY0ODQ0IDIuNSAxMS45Mzc1IDIuNTY2NDA2IEMgMTEuOTMzNTk0IDIuNjEzMjgxIDExLjkyNTc4MSAyLjY2MDE1NiAxMS45MjU3ODEgMi43MDcwMzEgTCAxMS45MjU3ODEgNi42NTYyNSBDIDExLjkyNTc4MSA2Ljg1MTU2MiAxMS45NzI2NTYgNi45MTQwNjIgMTIuMTc1NzgxIDYuOTE0MDYyIEwgMTIuOTM3NSA2LjkxNDA2MiBDIDEzLjE0ODQzOCA2LjkxNDA2MiAxMy4xOTUzMTIgNi44NjcxODggMTMuMTk1MzEyIDYuNjU2MjUgTCAxMy4xOTUzMTIgMy42MTMyODEgQyAxMy4xNzk2ODggMy41NzQyMTkgMTMuMjE0ODQ0IDMuNTE5NTMxIDEzLjI1MzkwNiAzLjUwMzkwNiBDIDEzLjU2NjQwNiAzLjM1NTQ2OSAxMy45MTc5NjkgMy4yODkwNjIgMTQuMjUzOTA2IDMuMzE2NDA2IEMgMTQuNDQ5MjE5IDMuMzI0MjE5IDE0LjYxMzI4MSAzLjQ1NzAzMSAxNC42NTIzNDQgMy42NTIzNDQgQyAxNC42Nzk2ODggMy43NSAxNC42ODc1IDMuODU1NDY5IDE0LjY4NzUgMy45NDkyMTkgTCAxNC42ODc1IDYuNjQ0NTMxIEMgMTQuNjg3NSA2Ljg1OTM3NSAxNC43MjY1NjIgNi45MDYyNSAxNC45NDE0MDYgNi45MDYyNSBMIDE1LjU0Mjk2OSA2LjkwNjI1IEMgMTUuNjI4OTA2IDYuOTA2MjUgMTUuNzE4NzUgNi45MDYyNSAxNS44MDQ2ODggNi45MDIzNDQgQyAxNS44ODY3MTkgNi45MDIzNDQgMTUuOTQ5MjE5IDYuODQ3NjU2IDE1Ljk0OTIxOSA2Ljc2NTYyNSBDIDE1Ljk2MDkzOCA2LjcxMDkzOCAxNS45NjA5MzggNi42NTYyNSAxNS45NjA5MzggNi42MDU0NjkgTCAxNS45NjA5MzggMy42MDU0NjkgQyAxNS45NTMxMjUgMy41NTg1OTQgMTUuOTgwNDY5IDMuNTExNzE5IDE2LjAyNzM0NCAzLjUgQyAxNi4zMzIwMzEgMy4zNTU0NjkgMTYuNjcxODc1IDMuMjg5MDYyIDE3LjAwNzgxMiAzLjMxNjQwNiBDIDE3LjE5MTQwNiAzLjMyNDIxOSAxNy4zNTE1NjIgMy40NTMxMjUgMTcuMzkwNjI1IDMuNjI1IEMgMTcuNDI1NzgxIDMuNzI2NTYyIDE3LjQzMzU5NCAzLjgyODEyNSAxNy40MjU3ODEgMy45Mzc1IEwgMTcuNDI1NzgxIDYuNTc4MTI1IEMgMTcuNDI1NzgxIDYuNjQ0NTMxIDE3LjQyNTc4MSA2LjcwNzAzMSAxNy40NDE0MDYgNi43NjU2MjUgQyAxNy40NTMxMjUgNi44MzIwMzEgMTcuNTA3ODEyIDYuODk0NTMxIDE3LjU3NDIxOSA2LjkwMjM0NCBDIDE3LjYyMTA5NCA2LjkwNjI1IDE3LjY2Nzk2OSA2LjkwNjI1IDE3LjcxNDg0NCA2LjkwNjI1IEwgMTguNDEwMTU2IDYuOTA2MjUgQyAxOC42Njc5NjkgNi45MDYyNSAxOC43MDMxMjUgNi44NzUgMTguNzAzMTI1IDYuNjE3MTg4IEwgMTguNzAzMTI1IDMuNjYwMTU2IEMgMTguNzAzMTI1IDMuNTkzNzUgMTguNzAzMTI1IDMuNTMxMjUgMTguNjk1MzEyIDMuNDcyNjU2IEMgMTguNjY3OTY5IDMuMTc1NzgxIDE4LjU4NTkzOCAyLjg5ODQzOCAxOC4zNzEwOTQgMi42NzU3ODEgQyAxOC4xNDg0MzggMi40Mzc1IDE3Ljg1MTU2MiAyLjM0Mzc1IDE3LjUyNzM0NCAyLjMzMjAzMSBDIDE3LjA3NDIxOSAyLjMwNDY4OCAxNi42Mjg5MDYgMi40MDYyNSAxNi4yMzA0NjkgMi42MTMyODEgQyAxNi4wNzgxMjUgMi42OTUzMTIgMTUuOTI1NzgxIDIuNzgxMjUgMTUuNzg1MTU2IDIuODcxMDk0IEMgMTUuNzc3MzQ0IDIuODU5Mzc1IDE1Ljc3MzQzOCAyLjg1OTM3NSAxNS43NzczNDQgMi44NTE1NjIgQyAxNS43NzM0MzggMi44NDM3NSAxNS43NTc4MTIgMi44MzIwMzEgMTUuNzQ2MDk0IDIuODA4NTk0IEMgMTUuNTk3NjU2IDIuNTg1OTM4IDE1LjM1NTQ2OSAyLjQyNTc4MSAxNS4wODU5MzggMi4zNzEwOTQgQyAxNC45NDE0MDYgMi4zMzU5MzggMTQuODAwNzgxIDIuMzI0MjE5IDE0LjY2MDE1NiAyLjMyNDIxOSBaIE0gMjEuODk0NTMxIDIuMzYzMjgxIEMgMjEuNzA3MDMxIDIuMzQzNzUgMjEuNTExNzE5IDIuMzUxNTYyIDIxLjMyMDMxMiAyLjM3MTA5NCBDIDIwLjQyMTg3NSAyLjQ4MDQ2OSAxOS44MzU5MzggMi45NzI2NTYgMTkuNTY2NDA2IDMuODM1OTM4IEMgMTkuMzc1IDQuNDIxODc1IDE5LjQwMjM0NCA1LjAxNTYyNSAxOS41NTA3ODEgNS42MTMyODEgQyAxOS43NTM5MDYgNi4zNjcxODggMjAuMjUzOTA2IDYuODIwMzEyIDIxLjAxNTYyNSA2Ljk4MDQ2OSBDIDIxLjQ0OTIxOSA3LjA3ODEyNSAyMS44ODI4MTIgNy4wNTQ2ODggMjIuMzIwMzEyIDYuOTg4MjgxIEMgMjIuNTUwNzgxIDYuOTQ5MjE5IDIyLjc3NzM0NCA2Ljg5NDUzMSAyMi45OTYwOTQgNi44MDQ2ODggQyAyMy4xMjUgNi43NTc4MTIgMjMuMTkxNDA2IDYuNjc5Njg4IDIzLjE4MzU5NCA2LjUzMTI1IEMgMjMuMTgzNTk0IDYuMzk0NTMxIDIzLjE4MzU5NCA2LjI1MzkwNiAyMy4xODM1OTQgNi4xMDkzNzUgQyAyMy4xODM1OTQgNS45MzM1OTQgMjMuMTE3MTg4IDUuODgyODEyIDIyLjk1MzEyNSA1LjkyMTg3NSBDIDIyLjc4NTE1NiA1Ljk2MDkzOCAyMi42Mjg5MDYgNS45OTYwOTQgMjIuNDYwOTM4IDYuMDMxMjUgQyAyMi4xMDkzNzUgNi4xMDU0NjkgMjEuNzQ2MDk0IDYuMTA1NDY5IDIxLjM4NjcxOSA2LjA0Mjk2OSBDIDIwLjkwMjM0NCA1Ljk0OTIxOSAyMC41OTM3NSA1LjUzMTI1IDIwLjYxNzE4OCA1LjAxNTYyNSBDIDIwLjY3MTg3NSA1LjAyMzQzOCAyMC43MjY1NjIgNS4wMzEyNSAyMC43ODEyNSA1LjA0Mjk2OSBDIDIxLjIwNzAzMSA1LjExNzE4OCAyMS42NDQ1MzEgNS4xMjUgMjIuMDc4MTI1IDUuMDU4NTk0IEMgMjIuMzI4MTI1IDUuMDIzNDM4IDIyLjU2MjUgNC45NDkyMTkgMjIuNzg1MTU2IDQuODI4MTI1IEMgMjMuMDQyOTY5IDQuNjc5Njg4IDIzLjIzMDQ2OSA0LjQ3NjU2MiAyMy4zMTI1IDQuMTk1MzEyIEMgMjMuNTA3ODEyIDMuNDcyNjU2IDIzLjIwMzEyNSAyLjc1IDIyLjQ1MzEyNSAyLjQ4MDQ2OSBDIDIyLjI3MzQzOCAyLjQyNTc4MSAyMi4wODIwMzEgMi4zODY3MTkgMjEuODk0NTMxIDIuMzYzMjgxIFogTSA4LjgyMDMxMiAyLjQxMDE1NiBDIDguNDQ5MjE5IDIuMzg2NzE5IDguMDg1OTM4IDIuNSA3Ljc4OTA2MiAyLjczMDQ2OSBDIDcuNjcxODc1IDIuODE2NDA2IDcuNTY2NDA2IDIuOTE3OTY5IDcuNDU3MDMxIDMuMDE5NTMxIEMgNy40Mzc1IDMuMDU0Njg4IDcuNDAyMzQ0IDMuMDc0MjE5IDcuMzYzMjgxIDMuMDg1OTM4IEMgNy4zMjgxMjUgMi45MzM1OTQgNy4yOTI5NjkgMi43ODkwNjIgNy4yNTM5MDYgMi42NDg0MzggQyA3LjIxNDg0NCAyLjUwNzgxMiA3LjE0NDUzMSAyLjQ1MzEyNSA2Ljk5NjA5NCAyLjQ1MzEyNSBMIDYuNDQ5MjE5IDIuNDUzMTI1IEMgNi4xODc1IDIuNDUzMTI1IDYuMTYwMTU2IDIuNDg0Mzc1IDYuMTYwMTU2IDIuNzUgTCA2LjE2MDE1NiA2LjYyNSBDIDYuMTYwMTU2IDYuNjY0MDYyIDYuMTYwMTU2IDYuNzEwOTM4IDYuMTY3OTY5IDYuNzU3ODEyIEMgNi4xNzU3ODEgNi44MzIwMzEgNi4yMjY1NjIgNi44OTQ1MzEgNi4zMDA3ODEgNi45MDIzNDQgQyA2LjM0Mzc1IDYuOTA2MjUgNi4zOTA2MjUgNi45MDYyNSA2LjQyOTY4OCA2LjkwNjI1IEwgNy4xNzE4NzUgNi45MDYyNSBDIDcuMjA3MDMxIDYuOTA2MjUgNy4yNTM5MDYgNi45MDYyNSA3LjI5Mjk2OSA2LjkwMjM0NCBDIDcuMzY3MTg4IDYuOTAyMzQ0IDcuNDI5Njg4IDYuODQ3NjU2IDcuNDI5Njg4IDYuNzczNDM4IEMgNy40Mzc1IDYuNzE4NzUgNy40Mzc1IDYuNjcxODc1IDcuNDM3NSA2LjYyNSBMIDcuNDM3NSAzLjg4MjgxMiBDIDcuNDM3NSAzLjgyNDIxOSA3LjQzNzUgMy43Njk1MzEgNy41MTU2MjUgMy43MzQzNzUgQyA3Ljg3NSAzLjYyMTA5NCA4LjI0NjA5NCAzLjU0Njg3NSA4LjYzMjgxMiAzLjU3ODEyNSBDIDguNzA3MDMxIDMuNTg1OTM4IDguNzg1MTU2IDMuNTg1OTM4IDguODU5Mzc1IDMuNTg1OTM4IEMgOC45NjA5MzggMy41NzQyMTkgOS4wMDM5MDYgMy41MzEyNSA5LjAyNzM0NCAzLjQyOTY4OCBDIDkuMDQyOTY5IDMuMzUxNTYyIDkuMDQyOTY5IDMuMjc3MzQ0IDkuMDM1MTU2IDMuMTk1MzEyIEMgOS4wMzUxNTYgMyA5LjA0Mjk2OSAyLjgwNDY4OCA5LjAzNTE1NiAyLjYwOTM3NSBDIDkuMDIzNDM4IDIuNDY0ODQ0IDguOTY4NzUgMi40MTc5NjkgOC44MjAzMTIgMi40MTAxNTYgWiBNIDkuNzc3MzQ0IDIuNDUzMTI1IEMgOS42NDQ1MzEgMi40NjA5MzggOS41ODk4NDQgMi41MTE3MTkgOS41ODIwMzEgMi42NDg0MzggTCA5LjU4MjAzMSA0LjY3MTg3NSBDIDkuNTgyMDMxIDUuMzIwMzEyIDkuNTgyMDMxIDUuOTY4NzUgOS41ODIwMzEgNi42MDU0NjkgQyA5LjU4MjAzMSA2LjY0NDUzMSA5LjU4MjAzMSA2LjY5MTQwNiA5LjU4MjAzMSA2LjczODI4MSBDIDkuNTg5ODQ0IDYuODIwMzEyIDkuNjU2MjUgNi44Nzg5MDYgOS43MzgyODEgNi44ODY3MTkgQyA5Ljc2NTYyNSA2Ljg5NDUzMSA5Ljc5Mjk2OSA2Ljg5NDUzMSA5LjgyMDMxMiA2Ljg5NDUzMSBMIDEwLjYxNzE4OCA2Ljg5NDUzMSBDIDEwLjY0ODQzOCA2Ljg5NDUzMSAxMC42NzU3ODEgNi44OTQ1MzEgMTAuNzEwOTM4IDYuODg2NzE5IEMgMTAuNzg1MTU2IDYuODc4OTA2IDEwLjgzOTg0NCA2LjgzMjAzMSAxMC44NDM3NSA2Ljc1NzgxMiBDIDEwLjg1MTU2MiA2LjY5MTQwNiAxMC44NTkzNzUgNi42Mjg5MDYgMTAuODU5Mzc1IDYuNTcwMzEyIEwgMTAuODU5Mzc1IDIuNzc3MzQ0IEMgMTAuODU5Mzc1IDIuNzIyNjU2IDEwLjg1OTM3NSAyLjY3NTc4MSAxMC44NTE1NjIgMi42Mjg5MDYgQyAxMC44Mzk4NDQgMi40OTIxODggMTAuNzk2ODc1IDIuNDUzMTI1IDEwLjY2Nzk2OSAyLjQ1MzEyNSBDIDEwLjM3MTA5NCAyLjQ0NTMxMiAxMC4wNzQyMTkgMi40NDUzMTIgOS43NzczNDQgMi40NTMxMjUgWiBNIDIxLjYzNjcxOSAzLjI0MjE4OCBDIDIxLjc0NjA5NCAzLjI1IDIxLjg0NzY1NiAzLjI2OTUzMSAyMS45NDE0MDYgMy4zMDg1OTQgQyAyMi4wODk4NDQgMy4zNzEwOTQgMjIuMTgzNTk0IDMuNTAzOTA2IDIyLjIwNzAzMSAzLjY2Nzk2OSBDIDIyLjIyNjU2MiAzLjc2MTcxOSAyMi4yMTg3NSAzLjg3MTA5NCAyMi4xODM1OTQgMy45NjQ4NDQgQyAyMi4xMTcxODggNC4xNjc5NjkgMjEuOTU3MDMxIDQuMjUzOTA2IDIxLjc1MzkwNiA0LjI5Njg3NSBDIDIxLjYzNjcxOSA0LjMyNDIxOSAyMS41MTE3MTkgNC4zMzU5MzggMjEuMzgyODEyIDQuMzI0MjE5IEMgMjEuMTYwMTU2IDQuMzI0MjE5IDIwLjkzNzUgNC4zMDg1OTQgMjAuNzE0ODQ0IDQuMjczNDM4IEMgMjAuNjI1IDQuMjYxNzE5IDIwLjYyNSA0LjI2MTcxOSAyMC42NDA2MjUgNC4xNjc5NjkgQyAyMC42NTIzNDQgNC4wMzEyNSAyMC42OTE0MDYgMy45MDIzNDQgMjAuNzQ2MDk0IDMuNzc3MzQ0IEMgMjAuOTE0MDYyIDMuMzU1NDY5IDIxLjI3MzQzOCAzLjIxNDg0NCAyMS42MzY3MTkgMy4yNDIxODggWiBNIDMuMDgyMDMxIDMuMjg5MDYyIEMgMy4xNjQwNjIgMy4yODkwNjIgMy4yNSAzLjI5Njg3NSAzLjMzMjAzMSAzLjMxNjQwNiBDIDMuNTc0MjE5IDMuMzUxNTYyIDMuNzc3MzQ0IDMuNTAzOTA2IDMuODcxMDk0IDMuNzIyNjU2IEMgMy45NjA5MzggMy45MTAxNTYgNC4wMTU2MjUgNC4xMDU0NjkgNC4wMTk1MzEgNC4zMDg1OTQgQyA0LjA1NDY4OCA0LjY3MTg3NSA0LjA1NDY4OCA1LjAzOTA2MiAzLjk1MzEyNSA1LjM4MjgxMiBDIDMuOTE0MDYyIDUuNTU4NTk0IDMuODI0MjE5IDUuNzE4NzUgMy42OTE0MDYgNS44Mzk4NDQgQyAzLjU0Mjk2OSA1Ljk2MDkzOCAzLjM1OTM3NSA2LjAzNTE1NiAzLjE3MTg3NSA2LjAzNTE1NiBDIDIuODc4OTA2IDYuMDU4NTk0IDIuNTg5ODQ0IDUuOTk2MDk0IDIuMzMyMDMxIDUuODU1NDY5IEMgMi4yNzM0MzggNS44MjgxMjUgMi4yMzA0NjkgNS43NjU2MjUgMi4yMzgyODEgNS42OTkyMTkgTCAyLjIzODI4MSA0LjY2Nzk2OSBDIDIuMjM4MjgxIDQuMzI0MjE5IDIuMjQ2MDk0IDMuOTg0Mzc1IDIuMjM4MjgxIDMuNjQwNjI1IEMgMi4yMzA0NjkgMy41NTg1OTQgMi4yNzczNDQgMy40OTIxODggMi4zNTE1NjIgMy40NjQ4NDQgQyAyLjU4OTg0NCAzLjM1MTU2MiAyLjgyNDIxOSAzLjI4OTA2MiAzLjA4MjAzMSAzLjI4OTA2MiBaIE0gNi41OTM3NSA4LjgzMjAzMSBDIDYuNTUwNzgxIDguODI0MjE5IDYuNTExNzE5IDguODMyMDMxIDYuNDY0ODQ0IDguODM5ODQ0IEMgNi4xMDU0NjkgOC44NjMyODEgNS44NDM3NSA5LjExMzI4MSA1LjgwODU5NCA5LjQ1MzEyNSBDIDUuNzc3MzQ0IDkuODc4OTA2IDUuOTcyNjU2IDEwLjE2Nzk2OSA2LjM0NzY1NiAxMC4yNjE3MTkgQyA2LjQxNzk2OSAxMC4yNjk1MzEgNi40ODQzNzUgMTAuMjgxMjUgNi41NTA3ODEgMTAuMjgxMjUgQyA3LjA0Mjk2OSAxMC4yOTY4NzUgNy40MTQwNjIgMTAuMDE5NTMxIDcuMzY3MTg4IDkuNDU3MDMxIEMgNy4zNTU0NjkgOS4yMDMxMjUgNy4xOTE0MDYgOC45ODA0NjkgNi45NTcwMzEgOC44OTA2MjUgQyA2LjgzNTkzOCA4Ljg0Mzc1IDYuNzE0ODQ0IDguODE2NDA2IDYuNTkzNzUgOC44MzIwMzEgWiBNIDExLjcwNzAzMSA4Ljg3MTA5NCBDIDExLjQ3MjY1NiA4Ljg3MTA5NCAxMS40MzM1OTQgOC45MTQwNjIgMTEuNDMzNTk0IDkuMTQ4NDM4IEwgMTEuNDMzNTk0IDExLjEyNSBDIDExLjQzMzU5NCAxMS4xNzE4NzUgMTEuNDQ1MzEyIDExLjIxNDg0NCAxMS40MTc5NjkgMTEuMjUzOTA2IEMgMTEuMzYzMjgxIDExLjI1MzkwNiAxMS4zMzIwMzEgMTEuMjE0ODQ0IDExLjI4OTA2MiAxMS4xODc1IEMgMTAuNjU2MjUgMTAuODE2NDA2IDkuOTg4MjgxIDEwLjc1IDkuMzEyNSAxMS4wNTg1OTQgQyA4LjgzOTg0NCAxMS4yODEyNSA4LjU1MDc4MSAxMS42Nzk2ODggOC4zNTkzNzUgMTIuMTUyMzQ0IEMgOC4xNzk2ODggMTIuNjA1NDY5IDguMTMyODEyIDEzLjA3ODEyNSA4LjE0NDUzMSAxMy41NjI1IEMgOC4xNDQ1MzEgMTQuMDE1NjI1IDguMjQ2MDk0IDE0LjQ2MDkzOCA4LjQ0OTIxOSAxNC44NjcxODggQyA4LjY4MzU5NCAxNS4zMTI1IDkuMDIzNDM4IDE1LjY1NjI1IDkuNTA3ODEyIDE1Ljc5Njg3NSBDIDEwLjE3NTc4MSAxNi4wMDc4MTIgMTAuNzk2ODc1IDE1LjkwNjI1IDExLjM3MTA5NCAxNS40ODA0NjkgQyAxMS40MTAxNTYgMTUuNDYwOTM4IDExLjQzMzU5NCAxNS40MTQwNjIgMTEuNDkyMTg4IDE1LjQwNjI1IEMgMTEuNTE5NTMxIDE1LjQ3MjY1NiAxMS41NDY4NzUgMTUuNTQ2ODc1IDExLjU1ODU5NCAxNS42MTMyODEgQyAxMS41ODIwMzEgMTUuNzE0ODQ0IDExLjY2Nzk2OSAxNS43ODUxNTYgMTEuNzY5NTMxIDE1Ljc4NTE1NiBMIDExLjkxNzk2OSAxNS43ODUxNTYgQyAxMi4xNDA2MjUgMTUuNzg1MTU2IDEyLjM1MTU2MiAxNS43ODkwNjIgMTIuNTY2NDA2IDE1Ljc4NTE1NiBDIDEyLjc0MjE4OCAxNS43ODUxNTYgMTIuNzg5MDYyIDE1LjczMDQ2OSAxMi43OTY4NzUgMTUuNTQ2ODc1IEwgMTIuNzk2ODc1IDkuMTA5Mzc1IEMgMTIuNzg5MDYyIDguOTE0MDYyIDEyLjc0MjE4OCA4Ljg3MTA5NCAxMi41NTg1OTQgOC44NzEwOTQgWiBNIDIxLjA1MDc4MSAxMC44NzEwOTQgQyAyMC44NTU0NjkgMTAuODYzMjgxIDIwLjY2MDE1NiAxMC44NzEwOTQgMjAuNDY0ODQ0IDEwLjkwMjM0NCBDIDE5LjY0MDYyNSAxMS4wMjM0MzggMTkuMDQ2ODc1IDExLjQ2NDg0NCAxOC43NTc4MTIgMTIuMjQ2MDk0IEMgMTguNDgwNDY5IDEyLjk5NjA5NCAxOC40ODQzNzUgMTMuODEyNSAxOC43NjE3MTkgMTQuNTYyNSBDIDE5LjAwMzkwNiAxNS4yMzgyODEgMTkuNSAxNS42Njc5NjkgMjAuMTk5MjE5IDE1Ljg0Mzc1IEMgMjAuNTcwMzEyIDE1LjkzNzUgMjAuOTY0ODQ0IDE1Ljk2MDkzOCAyMS4zNDc2NTYgMTUuOTA2MjUgQyAyMi42Mjg5MDYgMTUuNzUgMjMuMTY0MDYyIDE0Ljc3NzM0NCAyMy4yNSAxMy45MzM1OTQgQyAyMy4yNSAxMy45MzM1OTQgMjMuMjg1MTU2IDEzLjY4MzU5NCAyMy4yODUxNTYgMTMuNTYyNSBMIDIzLjI3NzM0NCAxMy4wNTg1OTQgQyAyMy4yNzczNDQgMTIuOTg0Mzc1IDIzLjI1NzgxMiAxMi44Mzk4NDQgMjMuMjU3ODEyIDEyLjgzNTkzOCBDIDIzLjI0NjA5NCAxMi43MTg3NSAyMy4yMjI2NTYgMTIuNjA1NDY5IDIzLjE5MTQwNiAxMi40ODgyODEgQyAyMi45Njg3NSAxMS42ODc1IDIyLjQ1MzEyNSAxMS4xNTIzNDQgMjEuNjMyODEyIDEwLjk0NTMxMiBDIDIxLjQzNzUgMTAuODk4NDM4IDIxLjI0NjA5NCAxMC44NzUgMjEuMDUwNzgxIDEwLjg3MTA5NCBaIE0gMTUuOTc2NTYyIDEwLjkyMTg3NSBDIDE0Ljk0OTIxOSAxMC45NDUzMTIgMTQuMTY0MDYyIDExLjQ2NDg0NCAxMy44NDc2NTYgMTIuNDg4MjgxIEMgMTMuNjMyODEyIDEzLjE3MTg3NSAxMy42NjAxNTYgMTMuODU5Mzc1IDEzLjg2NzE4OCAxNC41NDI5NjkgQyAxNC4wODU5MzggMTUuMjM4MjgxIDE0LjU3ODEyNSAxNS42NjQwNjIgMTUuMjczNDM4IDE1Ljg1MTU2MiBDIDE1LjU3MDMxMiAxNS45MjU3ODEgMTUuODc4OTA2IDE1Ljk1MzEyNSAxNi4xOTE0MDYgMTUuOTQ1MzEyIEMgMTYuNjM2NzE5IDE1LjkzNzUgMTcuMDgyMDMxIDE1Ljg1MTU2MiAxNy41IDE1LjY4NzUgQyAxNy42ODM1OTQgMTUuNjIxMDk0IDE3LjcyMjY1NiAxNS41NjI1IDE3LjcyMjY1NiAxNS4zNzEwOTQgTCAxNy43MjI2NTYgMTQuOTMzNTk0IEMgMTcuNzE0ODQ0IDE0Ljc1NzgxMiAxNy42NDA2MjUgMTQuNjk1MzEyIDE3LjQ2ODc1IDE0LjczODI4MSBDIDE3LjMzMjAzMSAxNC43Njk1MzEgMTcuMjAzMTI1IDE0LjgwNDY4OCAxNy4wNzAzMTIgMTQuODM5ODQ0IEMgMTYuNjU2MjUgMTQuOTMzNTk0IDE2LjIzMDQ2OSAxNC45NTMxMjUgMTUuODEyNSAxNC44Nzg5MDYgQyAxNS40MDIzNDQgMTQuNzk2ODc1IDE1LjExNzE4OCAxNC41NjI1IDE1LjAwNzgxMiAxNC4xNDQ1MzEgQyAxNC45NzY1NjIgMTQuMDIzNDM4IDE0Ljk0OTIxOSAxMy45MDIzNDQgMTQuOTQxNDA2IDEzLjc3MzQzOCBDIDE0Ljk2ODc1IDEzLjc3MzQzOCAxNS4wMDM5MDYgMTMuNzczNDM4IDE1LjAyMzQzOCAxMy43ODUxNTYgQyAxNS40Mjk2ODggMTMuODUxNTYyIDE1LjgzOTg0NCAxMy44ODY3MTkgMTYuMjUgMTMuODUxNTYyIEMgMTYuNjAxNTYyIDEzLjgzMjAzMSAxNi45NjA5MzggMTMuNzY1NjI1IDE3LjI3NzM0NCAxMy41OTc2NTYgQyAxNy42MDE1NjIgMTMuNDMzNTk0IDE3LjgyNDIxOSAxMy4xMzI4MTIgMTcuODkwNjI1IDEyLjc4MTI1IEMgMTcuOTM3NSAxMi41NTg1OTQgMTcuOTM3NSAxMi4zMjgxMjUgMTcuODkwNjI1IDEyLjEwNTQ2OSBDIDE3Ljc2NTYyNSAxMS41NTg1OTQgMTcuNDE0MDYyIDExLjIxNDg0NCAxNi44ODY3MTkgMTEuMDM5MDYyIEMgMTYuNTk3NjU2IDEwLjk0NTMxMiAxNi4yNzczNDQgMTAuOTEwMTU2IDE1Ljk3NjU2MiAxMC45MjE4NzUgWiBNIDAuNjg3NSAxMS4wMTk1MzEgQyAwLjU2NjQwNiAxMS4wMTk1MzEgMC41MTU2MjUgMTEuMDc4MTI1IDAuNTM5MDYyIDExLjE5OTIxOSBDIDAuNTU4NTk0IDExLjI4MTI1IDAuNTg1OTM4IDExLjM3MTA5NCAwLjYxNzE4OCAxMS40NDUzMTIgQyAwLjk4NDM3NSAxMi40MTAxNTYgMS4zNTkzNzUgMTMuMzY3MTg4IDEuNzI2NTYyIDE0LjMyNDIxOSBDIDEuODc1IDE0LjczMDQ2OSAyLjAzNTE1NiAxNS4xNDA2MjUgMi4xOTE0MDYgMTUuNTQ2ODc1IEMgMi4yNTc4MTIgMTUuNzE0ODQ0IDIuMzY3MTg4IDE1Ljc5Njg3NSAyLjU1NDY4OCAxNS43ODkwNjIgQyAyLjgyNDIxOSAxNS43ODkwNjIgMy4wOTc2NTYgMTUuNzg5MDYyIDMuMzY3MTg4IDE1Ljc4OTA2MiBDIDMuNSAxNS44MDQ2ODggMy42MjEwOTQgMTUuNzIyNjU2IDMuNjY3OTY5IDE1LjU5Mzc1IEMgMy42ODM1OTQgMTUuNTU0Njg4IDMuNzAzMTI1IDE1LjUxOTUzMSAzLjcxMDkzOCAxNS40ODA0NjkgQyA0LjEyMTA5NCAxNC40MjE4NzUgNC41MzUxNTYgMTMuMzQ3NjU2IDQuOTQ1MzEyIDEyLjI4OTA2MiBMIDUuMzA4NTk0IDExLjMxNjQwNiBDIDUuMzkwNjI1IDExLjA5Mzc1IDUuMzM1OTM4IDExLjAyMzQzOCA1LjEwOTM3NSAxMS4wMjM0MzggTCA0LjE3NTc4MSAxMS4wMjM0MzggQyA0LjA2NjQwNiAxMS4wMjM0MzggMy45NjA5MzggMTEuMDkzNzUgMy45MzM1OTQgMTEuMTk5MjE5IEwgMy44OTA2MjUgMTEuMzE2NDA2IEMgMy42MTcxODggMTIuMjYxNzE5IDMuMzMyMDMxIDEzLjE5OTIxOSAzLjA0Njg3NSAxNC4xNDg0MzggQyAzLjAxNTYyNSAxNC4yNzM0MzggMi45ODA0NjkgMTQuMzg2NzE5IDIuOTQxNDA2IDE0LjUwNzgxMiBDIDIuOTI1NzgxIDE0LjUwNzgxMiAyLjkyMTg3NSAxNC41MDc4MTIgMi45MjU3ODEgMTQuNSBDIDIuNjc1NzgxIDEzLjY1MjM0NCAyLjQzMzU5NCAxMi44MDA3ODEgMi4xODM1OTQgMTEuOTQ5MjE5IEMgMi4xMDkzNzUgMTEuNzE0ODQ0IDIuMDQyOTY5IDExLjQ3NjU2MiAxLjk3NjU2MiAxMS4yNDYwOTQgQyAxLjkzMzU5NCAxMS4xMjEwOTQgMS44NzUgMTEuMDE5NTMxIDEuNzI2NTYyIDExLjAxOTUzMSBDIDEuMzgyODEyIDExLjAxOTUzMSAxLjAzMTI1IDExLjAxMTcxOSAwLjY4NzUgMTEuMDE5NTMxIFogTSA2LjE0ODQzOCAxMS4wMjM0MzggQyA1Ljk1NzAzMSAxMS4wMjM0MzggNS45MDIzNDQgMTEuMDc4MTI1IDUuOTAyMzQ0IDExLjI2OTUzMSBMIDUuOTAyMzQ0IDE1LjUgQyA1LjkwMjM0NCAxNS41MzUxNTYgNS45MDIzNDQgMTUuNTgyMDMxIDUuOTEwMTU2IDE1LjYxMzI4MSBDIDUuOTE3OTY5IDE1LjczODI4MSA1Ljk3NjU2MiAxNS43ODkwNjIgNi4xMDE1NjIgMTUuNzg5MDYyIEMgNi40Mjk2ODggMTUuNzk2ODc1IDYuNzUzOTA2IDE1Ljc5Njg3NSA3LjA4NTkzOCAxNS43ODkwNjIgQyA3LjIwNzAzMSAxNS43ODkwNjIgNy4yNjE3MTkgMTUuNzMwNDY5IDcuMjczNDM4IDE1LjYwOTM3NSBMIDcuMjczNDM4IDExLjI2OTUzMSBDIDcuMjczNDM4IDExLjA3ODEyNSA3LjIxODc1IDExLjAyMzQzOCA3LjAyMzQzOCAxMS4wMjM0MzggWiBNIDE1Ljg1MTU2MiAxMS44NjMyODEgQyAxNS45MzM1OTQgMTEuODQ3NjU2IDE2LjAyMzQzOCAxMS44NTU0NjkgMTYuMTA5Mzc1IDExLjg2MzI4MSBDIDE2LjEzNjcxOSAxMS44NjMyODEgMTYuMTY0MDYyIDExLjg3NSAxNi4xOTE0MDYgMTEuODc1IEMgMTYuNjI1IDExLjk0MTQwNiAxNi43MjI2NTYgMTIuMjgxMjUgMTYuNjQ4NDM4IDEyLjYwOTM3NSBDIDE2LjU4MjAzMSAxMi44NTkzNzUgMTYuMzg2NzE5IDEyLjk0OTIxOSAxNi4xNTYyNSAxMi45OTYwOTQgQyAxNi4wMzUxNTYgMTMuMDE1NjI1IDE1LjkwNjI1IDEzLjAzMTI1IDE1Ljc3NzM0NCAxMy4wMjM0MzggQyAxNS41MzEyNSAxMy4wMTU2MjUgMTUuMjgxMjUgMTIuOTk2MDk0IDE1LjAzNTE1NiAxMi45NjA5MzggQyAxNC45ODQzNzUgMTIuOTU3MDMxIDE0Ljk2MDkzOCAxMi45MzM1OTQgMTQuOTY4NzUgMTIuODc1IEMgMTUuMDE1NjI1IDEyLjYzNjcxOSAxNS4wNzAzMTIgMTIuNDEwMTU2IDE1LjIxODc1IDEyLjIxNDg0NCBDIDE1LjM4NjcxOSAxMS45ODQzNzUgMTUuNjA1NDY5IDExLjg4MjgxMiAxNS44NTE1NjIgMTEuODYzMjgxIFogTSAxMC4zOTQ1MzEgMTEuOTEwMTU2IEMgMTAuNzE4NzUgMTEuODgyODEyIDExLjAzOTA2MiAxMS45NDE0MDYgMTEuMzMyMDMxIDEyLjA3ODEyNSBDIDExLjQwNjI1IDEyLjA5NzY1NiAxMS40NDUzMTIgMTIuMTcxODc1IDExLjQzNzUgMTIuMjUzOTA2IEMgMTEuNDMzNTk0IDEyLjYzMjgxMiAxMS40Mzc1IDEzLjAwMzkwNiAxMS40Mzc1IDEzLjM3NSBMIDExLjQzNzUgMTQuNDg4MjgxIEMgMTEuNDUzMTI1IDE0LjU1NDY4OCAxMS40MDYyNSAxNC42Mjg5MDYgMTEuMzM1OTM4IDE0LjY1NjI1IEMgMTEuMDQ2ODc1IDE0LjgyMDMxMiAxMC43MTA5MzggMTQuODg2NzE5IDEwLjM3ODkwNiAxNC44Mzk4NDQgQyAxMC4wOTM3NSAxNC44MTI1IDkuODUxNTYyIDE0LjYzNjcxOSA5LjcyMjY1NiAxNC4zODY3MTkgQyA5LjYyODkwNiAxNC4xOTE0MDYgOS41NzAzMTIgMTMuOTgwNDY5IDkuNTU0Njg4IDEzLjc2NTYyNSBDIDkuNSAxMy4zNzg5MDYgOS41MzUxNTYgMTIuOTg4MjgxIDkuNjI1IDEyLjYxNzE4OCBDIDkuNjU2MjUgMTIuNTE1NjI1IDkuNjkxNDA2IDEyLjQxNDA2MiA5Ljc1IDEyLjMyMDMxMiBDIDkuODc4OTA2IDEyLjA4NTkzOCAxMC4xMjEwOTQgMTEuOTI5Njg4IDEwLjM5NDUzMSAxMS45MTAxNTYgWiBNIDIwLjgwODU5NCAxMS45NDE0MDYgQyAyMC45MjE4NzUgMTEuOTI5Njg4IDIxLjAzOTA2MiAxMS45Mjk2ODggMjEuMTUyMzQ0IDExLjk0OTIxOSBDIDIxLjQwMjM0NCAxMi4wMDM5MDYgMjEuNjA1NDY5IDEyLjE2MDE1NiAyMS43MTA5MzggMTIuMzg2NzE5IEMgMjEuODEyNSAxMi41OTc2NTYgMjEuODc1IDEyLjgzOTg0NCAyMS44ODY3MTkgMTMuMDc4MTI1IEMgMjEuODk0NTMxIDEzLjE5MTQwNiAyMS45MDIzNDQgMTMuMzAwNzgxIDIxLjg5NDUzMSAxMy40MDYyNSBDIDIxLjkxNDA2MiAxMy42NzU3ODEgMjEuODgyODEyIDEzLjk0MTQwNiAyMS44MDg1OTQgMTQuMTkxNDA2IEMgMjEuNzczNDM4IDE0LjMyMDMxMiAyMS43MTg3NSAxNC40MzM1OTQgMjEuNjM2NzE5IDE0LjU0Njg3NSBDIDIxLjUwMzkwNiAxNC43MzgyODEgMjEuMjg5MDYyIDE0Ljg1OTM3NSAyMS4wNTg1OTQgMTQuODc4OTA2IEMgMjAuOTQxNDA2IDE0Ljg4NjcxOSAyMC44MjgxMjUgMTQuODg2NzE5IDIwLjcwNzAzMSAxNC44NjcxODggQyAyMC40NDkyMTkgMTQuODEyNSAyMC4yNDIxODggMTQuNjQ0NTMxIDIwLjEzMjgxMiAxNC40MDYyNSBDIDIwLjA0Njg3NSAxNC4yMTg3NSAxOS45ODQzNzUgMTQuMDA3ODEyIDE5Ljk3MjY1NiAxMy44MDA3ODEgQyAxOS45Mzc1IDEzLjQ0MTQwNiAxOS45Mjk2ODggMTMuMDc4MTI1IDIwLjAxOTUzMSAxMi43MjY1NjIgQyAyMC4wNTA3ODEgMTIuNTg1OTM4IDIwLjExMzI4MSAxMi40NDE0MDYgMjAuMTc5Njg4IDEyLjMyMDMxMiBDIDIwLjMxNjQwNiAxMi4wOTc2NTYgMjAuNTUwNzgxIDExLjk1NzAzMSAyMC44MDg1OTQgMTEuOTQxNDA2IFogTSAyMC44MDg1OTQgMTcuNzI2NTYyIEMgMjAuNDU3MDMxIDE3Ljc0MjE4OCAyMC4xMjEwOTQgMTcuNzczNDM4IDE5Ljc4MTI1IDE3Ljg0Mzc1IEMgMTkuMzQzNzUgMTcuOTQ5MjE5IDE4LjkyOTY4OCAxOC4xMDU0NjkgMTguNTU4NTk0IDE4LjM2NzE4OCBDIDE4LjUwNzgxMiAxOC40MDIzNDQgMTguNDUzMTI1IDE4LjQ1NzAzMSAxOC40MTAxNTYgMTguNTExNzE5IEMgMTguMzc4OTA2IDE4LjU2NjQwNiAxOC4zNjMyODEgMTguNjI1IDE4LjM5ODQzOCAxOC42ODc1IEMgMTguNDMzNTk0IDE4Ljc0NjA5NCAxOC40OTIxODggMTguNzUzOTA2IDE4LjU1ODU5NCAxOC43NDYwOTQgTCAxOS4xNjAxNTYgMTguNjcxODc1IEMgMTkuNjA1NDY5IDE4LjYxMzI4MSAyMC4wNjY0MDYgMTguNTg5ODQ0IDIwLjUyMzQzOCAxOC42MTMyODEgQyAyMC42ODc1IDE4LjYyNSAyMC44NDc2NTYgMTguNjUyMzQ0IDIwLjk5NjA5NCAxOC42OTkyMTkgQyAyMS4xNjQwNjIgMTguNzUzOTA2IDIxLjI3MzQzOCAxOC44OTQ1MzEgMjEuMjgxMjUgMTkuMDYyNSBDIDIxLjI4OTA2MiAxOS4xNjQwNjIgMjEuMjgxMjUgMTkuMjYxNzE5IDIxLjI3MzQzOCAxOS4zNTkzNzUgQyAyMS4yMzgyODEgMTkuNjM2NzE5IDIxLjE4NzUgMTkuOTA2MjUgMjEuMTA1NDY5IDIwLjE2NDA2MiBDIDIwLjk2ODc1IDIwLjY1MjM0NCAyMC44MDA3ODEgMjEuMTA5Mzc1IDIwLjYyNSAyMS41NzQyMTkgQyAyMC42MDU0NjkgMjEuNjI4OTA2IDIwLjU5NzY1NiAyMS42NzU3ODEgMjAuNTkzNzUgMjEuNzIyNjU2IEMgMjAuNTk3NjU2IDIxLjgxNjQwNiAyMC42NjAxNTYgMjEuODcxMDk0IDIwLjc1MzkwNiAyMS44NDM3NSBDIDIwLjgxNjQwNiAyMS44MjQyMTkgMjAuODY3MTg4IDIxLjc5Mjk2OSAyMC45MTAxNTYgMjEuNzQyMTg4IEMgMjEuMTMyODEyIDIxLjU0Mjk2OSAyMS4zMjgxMjUgMjEuMjk2ODc1IDIxLjQ4NDM3NSAyMS4wMzUxNTYgQyAyMS45MjE4NzUgMjAuMzA0Njg4IDIyLjE4MzU5NCAxOS40ODgyODEgMjIuMjUzOTA2IDE4LjY0MDYyNSBDIDIyLjI1NzgxMiAxOC40OTYwOTQgMjIuMjUzOTA2IDE4LjM0NzY1NiAyMi4yMzgyODEgMTguMjE0ODQ0IEMgMjIuMjE4NzUgMTguMDkzNzUgMjIuMTQ0NTMxIDE3Ljk4NDM3NSAyMi4wMzUxNTYgMTcuOTM3NSBDIDIxLjk0OTIxOSAxNy44OTg0MzggMjEuODY3MTg4IDE3Ljg3MTA5NCAyMS43NzM0MzggMTcuODQzNzUgQyAyMS40NTcwMzEgMTcuNzYxNzE5IDIxLjEzMjgxMiAxNy43NDIxODggMjAuODA4NTk0IDE3LjcyNjU2MiBaIE0gMS43ODUxNTYgMTcuOTg0Mzc1IEMgMS43NTM5MDYgMTcuOTkyMTg4IDEuNzE4NzUgMTguMDExNzE5IDEuNjk5MjE5IDE4LjAzOTA2MiBDIDEuNjQ0NTMxIDE4LjA5Mzc1IDEuNjMyODEyIDE4LjE2Nzk2OSAxLjY2NDA2MiAxOC4yMzQzNzUgQyAxLjY3OTY4OCAxOC4yODkwNjIgMS43MTg3NSAxOC4zMzU5MzggMS43NTM5MDYgMTguMzY3MTg4IEMgMS45Mjk2ODggMTguNTMxMjUgMi4wODk4NDQgMTguNjg3NSAyLjI2NTYyNSAxOC44Mzk4NDQgQyA0LjEyODkwNiAyMC40OTYwOTQgNi4yNjk1MzEgMjEuNjI4OTA2IDguNzA3MDMxIDIyLjE5NTMxMiBDIDkuNDE0MDYyIDIyLjM1OTM3NSAxMC4xMjg5MDYgMjIuNDcyNjU2IDEwLjg1OTM3NSAyMi41MjczNDQgQyAxMS4xMjg5MDYgMjIuNTQ2ODc1IDExLjQwNjI1IDIyLjU1NDY4OCAxMS42NzU3ODEgMjIuNTY2NDA2IEMgMTEuODc4OTA2IDIyLjU2NjQwNiAxMi4wNzQyMTkgMjIuNTY2NDA2IDEyLjI3NzM0NCAyMi41NjY0MDYgQyAxMy4wNTg1OTQgMjIuNTM5MDYyIDEzLjg0NzY1NiAyMi40NTMxMjUgMTQuNjI1IDIyLjMxNjQwNiBDIDE1Ljk3NjU2MiAyMi4wNjI1IDE3LjI4NTE1NiAyMS42MjEwOTQgMTguNTExNzE5IDIxIEMgMTkuMTYwMTU2IDIwLjY3MTg3NSAxOS43NzM0MzggMjAuMjc3MzQ0IDIwLjM0NzY1NiAxOS44MzIwMzEgQyAyMC40MTc5NjkgMTkuNzg1MTU2IDIwLjQ2ODc1IDE5LjcxODc1IDIwLjUxMTcxOSAxOS42NDQ1MzEgQyAyMC41MjM0MzggMTkuNjI1IDIwLjUzMTI1IDE5LjYwNTQ2OSAyMC41MzkwNjIgMTkuNTg1OTM4IEMgMjAuNTc4MTI1IDE5LjQxNDA2MiAyMC40NzY1NjIgMTkuMjQ2MDk0IDIwLjMxNjQwNiAxOS4yMDcwMzEgQyAyMC4yMTQ4NDQgMTkuMTg3NSAyMC4xMDU0NjkgMTkuMTk5MjE5IDIwLjAxOTUzMSAxOS4yNDYwOTQgQyAxOS40MTc5NjkgMTkuNTIzNDM4IDE4LjgwNDY4OCAxOS43NjU2MjUgMTguMTY3OTY5IDE5Ljk3NjU2MiBDIDE2Ljk3MjY1NiAyMC4zNzUgMTUuNzM4MjgxIDIwLjY1MjM0NCAxNC40ODQzNzUgMjAuODEyNSBDIDEzLjk0OTIxOSAyMC44Nzg5MDYgMTMuNDEwMTU2IDIwLjkzMzU5NCAxMi44NzEwOTQgMjAuOTQ5MjE5IEMgMTEuODcxMDk0IDIwLjk4MDQ2OSAxMC44NTkzNzUgMjAuOTMzNTk0IDkuODY3MTg4IDIwLjgxMjUgQyA5LjE3MTg3NSAyMC43MjY1NjIgOC40NzY1NjIgMjAuNTk3NjU2IDcuNzkyOTY5IDIwLjQ0MTQwNiBDIDUuNzUzOTA2IDE5Ljk2MDkzOCAzLjgwNDY4OCAxOS4xNjAxNTYgMi4wMjM0MzggMTguMDU4NTk0IEMgMS45ODA0NjkgMTguMDMxMjUgMS45MzM1OTQgMTguMDExNzE5IDEuODk0NTMxIDE3Ljk5MjE4OCBDIDEuODU5Mzc1IDE3Ljk3NjU2MiAxLjgyMDMxMiAxNy45NzY1NjIgMS43ODUxNTYgMTcuOTg0Mzc1IFogTSAxLjc4NTE1NiAxNy45ODQzNzUgXCI7XG4gICAgc3ZnW1wiUElBXCJdID0gXCJNIDI0IDEyIEMgMjQgMTguNjI4OTA2IDE4LjYyODkwNiAyNCAxMiAyNCBDIDUuMzcxMDk0IDI0IDAgMTguNjI4OTA2IDAgMTIgQyAwIDUuMzcxMDk0IDUuMzcxMDk0IDAgMTIgMCBDIDE4LjYyODkwNiAwIDI0IDUuMzcxMDk0IDI0IDEyIFogTSAyNCAxMiBNIDExLjQwNjI1IDguNjk1MzEyIEMgMTEuNDA2MjUgOC4zMzIwMzEgMTAuOTY4NzUgOC4xNTIzNDQgMTAuNzEwOTM4IDguNDA2MjUgQyAxMC40NTcwMzEgOC42NjQwNjIgMTAuNjM2NzE5IDkuMTAxNTYyIDExIDkuMTAxNTYyIEMgMTEuMjIyNjU2IDkuMTAxNTYyIDExLjQwNjI1IDguOTE3OTY5IDExLjQwMjM0NCA4LjY5NTMxMiBNIDEzLjAwMzkwNiA4LjI4OTA2MiBDIDEyLjY0MDYyNSA4LjI4OTA2MiAxMi40NTcwMzEgOC43MjY1NjIgMTIuNzE0ODQ0IDguOTg0Mzc1IEMgMTIuOTcyNjU2IDkuMjM4MjgxIDEzLjQwNjI1IDkuMDU4NTk0IDEzLjQwNjI1IDguNjk1MzEyIEMgMTMuNDA2MjUgOC40NzI2NTYgMTMuMjI2NTYyIDguMjg5MDYyIDEzLjAwMzkwNiA4LjI4OTA2MiBNIDEyLjU2NjQwNiA5LjM2MzI4MSBDIDEyLjI0MjE4OCA5LjY1MjM0NCAxMS43NTc4MTIgOS42NTIzNDQgMTEuNDM3NSA5LjM2MzI4MSBDIDExLjMzMjAzMSA5LjI3NzM0NCAxMS4xOTkyMTkgOS40MjU3ODEgMTEuMjkyOTY5IDkuNTE5NTMxIEMgMTEuNjkxNDA2IDkuODk0NTMxIDEyLjMxMjUgOS44OTQ1MzEgMTIuNzA3MDMxIDkuNTE5NTMxIEMgMTIuNzUgOS40ODA0NjkgMTIuNzUgOS40MTQwNjIgMTIuNzEwOTM4IDkuMzc1IEMgMTIuNjcxODc1IDkuMzMyMDMxIDEyLjYwOTM3NSA5LjMyODEyNSAxMi41NjY0MDYgOS4zNjMyODEgTSAxNi4zMDQ2ODggMTAuOTMzNTk0IEwgMTYuMzA0Njg4IDEwLjkyOTY4OCBDIDE2LjMwNDY4OCAxMC41NTA3ODEgMTYuMDU0Njg4IDEwLjIxODc1IDE1LjY5MTQwNiAxMC4xMTcxODggTCAxNS42OTE0MDYgOS4zOTA2MjUgQyAxNS42OTE0MDYgNy40MTQwNjIgMTQuMDg5ODQ0IDUuODEyNSAxMi4xMTMyODEgNS44MTI1IEwgMTEuOTc2NTYyIDUuODEyNSBDIDEwIDUuODEyNSA4LjM5NDUzMSA3LjQxNDA2MiA4LjM5NDUzMSA5LjM5MDYyNSBMIDguMzk0NTMxIDEwLjA5NzY1NiBDIDcuOTk2MDk0IDEwLjE3MTg3NSA3LjcwNzAzMSAxMC41MTU2MjUgNy43MDMxMjUgMTAuOTIxODc1IEMgNy41OTM3NSAxMS4xMDU0NjkgNy41MzUxNTYgMTEuMzE2NDA2IDcuNTM1MTU2IDExLjUzMTI1IEwgNy41MzUxNTYgMTYuMTIxMDk0IEMgNy41MzUxNTYgMTYuNjY3OTY5IDcuOTAyMzQ0IDE3LjE0NDUzMSA4LjQyOTY4OCAxNy4yODkwNjIgQyA4LjU3MDMxMiAxNy42MDU0NjkgOC44ODY3MTkgMTcuODEyNSA5LjIzNDM3NSAxNy44MTI1IEwgMTAuMjM4MjgxIDE3LjgxMjUgQyAxMC41NzAzMTIgMTcuODEyNSAxMC44NzUgMTcuNjI1IDExLjAyNzM0NCAxNy4zMjgxMjUgTCAxMi44NzEwOTQgMTcuMzI4MTI1IEMgMTMuMDE5NTMxIDE3LjYyNSAxMy4zMjQyMTkgMTcuODEyNSAxMy42NTYyNSAxNy44MTI1IEwgMTQuNjYwMTU2IDE3LjgxMjUgQyAxNSAxNy44MTI1IDE1LjMwODU5NCAxNy42MTcxODggMTUuNDU3MDMxIDE3LjMxMjUgQyAxNi4wMzkwNjIgMTcuMjE0ODQ0IDE2LjQ2NDg0NCAxNi43MTA5MzggMTYuNDY0ODQ0IDE2LjEyMTA5NCBMIDE2LjQ2NDg0NCAxMS41MzEyNSBDIDE2LjQ2NDg0NCAxMS4zMjQyMTkgMTYuNDEwMTU2IDExLjExNzE4OCAxNi4zMDQ2ODggMTAuOTMzNTk0IFogTSAxMy4xMTMyODEgMTUuMzgyODEyIEMgMTMuMTM2NzE5IDE1LjUzOTA2MiAxMy4wODk4NDQgMTUuNjk1MzEyIDEyLjk4ODI4MSAxNS44MTY0MDYgQyAxMi44ODY3MTkgMTUuOTMzNTk0IDEyLjczODI4MSAxNi4wMDM5MDYgMTIuNTc4MTI1IDE2LjAwMzkwNiBMIDExLjQyMTg3NSAxNi4wMDM5MDYgQyAxMS4yNjU2MjUgMTYuMDAzOTA2IDExLjExMzI4MSAxNS45MzM1OTQgMTEuMDExNzE5IDE1LjgxNjQwNiBDIDEwLjkxMDE1NiAxNS42OTUzMTIgMTAuODYzMjgxIDE1LjUzOTA2MiAxMC44ODY3MTkgMTUuMzgyODEyIEwgMTEuMTA5Mzc1IDEzLjg3MTA5NCBDIDEwLjY5MTQwNiAxMy41MTU2MjUgMTAuNTI3MzQ0IDEyLjk0OTIxOSAxMC42ODc1IDEyLjQyMTg3NSBDIDEwLjg0NzY1NiAxMS44OTg0MzggMTEuMzAwNzgxIDExLjUxOTUzMSAxMS44NDM3NSAxMS40NjA5MzggQyAxMi40NDUzMTIgMTEuMzkwNjI1IDEzLjAxOTUzMSAxMS43MjI2NTYgMTMuMjYxNzE5IDEyLjI3NzM0NCBDIDEzLjUgMTIuODMyMDMxIDEzLjM1MTU2MiAxMy40ODA0NjkgMTIuODkwNjI1IDEzLjg3MTA5NCBaIE0gMTMuMjQ2MDk0IDEwLjMyNDIxOSBMIDEwLjc2MTcxOSAxMC4zMjQyMTkgQyAxMC42MDU0NjkgMTAuMTY3OTY5IDEwLjM5MDYyNSAxMC4wODIwMzEgMTAuMTcxODc1IDEwLjA4MjAzMSBMIDkuNzUgMTAuMDgyMDMxIEwgOS43NSA5LjMzMjAzMSBDIDkuNzUgOC4wOTM3NSAxMC43NTM5MDYgNy4wODk4NDQgMTEuOTkyMTg4IDcuMDg5ODQ0IEwgMTIuMTAxNTYyIDcuMDg5ODQ0IEMgMTMuMzM5ODQ0IDcuMDg5ODQ0IDE0LjMzOTg0NCA4LjA5Mzc1IDE0LjMzOTg0NCA5LjMzMjAzMSBMIDE0LjMzOTg0NCAxMC4wODIwMzEgTCAxMy44MzU5MzggMTAuMDgyMDMxIEMgMTMuNjEzMjgxIDEwLjA4MjAzMSAxMy40MDIzNDQgMTAuMTY3OTY5IDEzLjI0NjA5NCAxMC4zMjQyMTkgWiBNIDEyLjczMDQ2OSAxNS40NTcwMzEgQyAxMi43NDIxODggMTUuNDk2MDk0IDEyLjczNDM3NSAxNS41MzUxNTYgMTIuNzA3MDMxIDE1LjU3MDMxMiBDIDEyLjY4MzU5NCAxNS42MDE1NjIgMTIuNjQ0NTMxIDE1LjYxNzE4OCAxMi42MDU0NjkgMTUuNjE3MTg4IEwgMTEuNDAyMzQ0IDE1LjYxNzE4OCBDIDExLjM2MzI4MSAxNS42MTcxODggMTEuMzI0MjE5IDE1LjYwMTU2MiAxMS4zMDA3ODEgMTUuNTY2NDA2IEMgMTEuMjczNDM4IDE1LjUzNTE1NiAxMS4yNjU2MjUgMTUuNDk2MDk0IDExLjI3NzM0NCAxNS40NTcwMzEgTCAxMS41MDc4MTIgMTMuNzg1MTU2IEMgMTEuNTA3ODEyIDEzLjc2MTcxOSAxMS41MDM5MDYgMTMuNzM4MjgxIDExLjQ5NjA5NCAxMy43MTQ4NDQgQyAxMS40NzY1NjIgMTMuNjgzNTk0IDExLjQ1MzEyNSAxMy42NjAxNTYgMTEuNDIxODc1IDEzLjYzNjcxOSBDIDExLjQxNzk2OSAxMy42MzI4MTIgMTEuNDE3OTY5IDEzLjYzMjgxMiAxMS40MTQwNjIgMTMuNjI4OTA2IEMgMTEuMDcwMzEyIDEzLjM3NSAxMC45MjU3ODEgMTIuOTMzNTk0IDExLjA1ODU5NCAxMi41MjczNDQgQyAxMS4xOTE0MDYgMTIuMTIxMDk0IDExLjU2NjQwNiAxMS44NDM3NSAxMS45OTIxODggMTEuODM5ODQ0IEMgMTIuNDIxODc1IDExLjgzOTg0NCAxMi44MDA3ODEgMTIuMTA5Mzc1IDEyLjkzNzUgMTIuNTE1NjI1IEMgMTMuMDc0MjE5IDEyLjkxNzk2OSAxMi45Mzc1IDEzLjM2NzE4OCAxMi41OTM3NSAxMy42MjEwOTQgQyAxMi41OTM3NSAxMy42MjUgMTIuNTkzNzUgMTMuNjI4OTA2IDEyLjU4MjAzMSAxMy42MzY3MTkgQyAxMi41NTA3ODEgMTMuNjYwMTU2IDEyLjUyNzM0NCAxMy42ODM1OTQgMTIuNTA3ODEyIDEzLjcxNDg0NCBDIDEyLjUwMzkwNiAxMy43MjI2NTYgMTIuNSAxMy43MzQzNzUgMTIuNSAxMy43NDYwOTQgWiBNIDEyLjczMDQ2OSAxNS40NTcwMzEgXCI7XG4gICAgc3ZnW1wiU1VSRlNIQVJLXCJdID0gXCJNIDI0IDEyIEMgMjQgMTguNjI4OTA2IDE4LjYyODkwNiAyNCAxMiAyNCBDIDUuMzcxMDk0IDI0IDAgMTguNjI4OTA2IDAgMTIgQyAwIDUuMzcxMDk0IDUuMzcxMDk0IDAgMTIgMCBDIDE4LjYyODkwNiAwIDI0IDUuMzcxMDk0IDI0IDEyIFogTSAyNCAxMk0gMTYuNTQ2ODc1IDguMzUxNTYyIEwgMTYuNTQ2ODc1IDguMzQzNzUgQyAxNi41MzkwNjIgOC4yNDIxODggMTYuNTMxMjUgOC4xMjUgMTYuNTI3MzQ0IDggQyAxNi41MTE3MTkgNy43NjU2MjUgMTYuNDk2MDk0IDcuNTE1NjI1IDE2LjQ4MDQ2OSA3LjMyMDMxMiBDIDE2LjQ1NzAzMSA3LjE4NzUgMTYuNDI1NzgxIDcuMDcwMzEyIDE2LjM4NjcxOSA2Ljk2MDkzOCBDIDE2LjE0ODQzOCA2LjQyOTY4OCAxNS42ODM1OTQgNi4xNzU3ODEgMTUuMTkxNDA2IDYuMDU0Njg4IEMgMTQuOTY0ODQ0IDYuMDE1NjI1IDE0LjY5MTQwNiA2LjAwNzgxMiAxNC4zOTg0MzggNiBMIDExLjU3MDMxMiA2IEMgOS43NSA2LjA5NzY1NiA4Ljk4NDM3NSA3LjE1MjM0NCA4Ljc4MTI1IDcuNzE0ODQ0IEMgNy45ODQzNzUgMTAuMDk3NjU2IDcuNDg0Mzc1IDEzLjE4NzUgNy4xMjg5MDYgMTUuNDE0MDYyIEMgNy4xMjEwOTQgMTUuNDYwOTM4IDcuMTEzMjgxIDE1LjUgNy4xMDU0NjkgMTUuNTQyOTY5IEwgNi45ODgyODEgMTYuNjAxNTYyIEMgNi45ODA0NjkgMTYuNzY5NTMxIDcgMTYuOTUzMTI1IDcuMDQyOTY5IDE3LjEyODkwNiBDIDcuMjY1NjI1IDE3Ljc3MzQzOCA3Ljk0MTQwNiAxOC4zMjAzMTIgOS40MjU3ODEgMTcuNzc3MzQ0IEMgMTAuODMyMDMxIDE3LjE2Nzk2OSAxMi40ODgyODEgMTYuNDEwMTU2IDE0LjE5OTIxOSAxNS41NTg1OTQgQyAxNS4xNzU3ODEgMTQuOTk2MDk0IDE2LjYwNTQ2OSAxMy43MDMxMjUgMTYuNjc5Njg4IDEyLjA2NjQwNiBDIDE2LjY2Nzk2OSAxMC44NTkzNzUgMTYuNjI4OTA2IDkuNTg5ODQ0IDE2LjU0Njg3NSA4LjM1MTU2MiBaIE0gMTQuMjg5MDYyIDkuMjQ2MDk0IEMgMTQuMjg5MDYyIDkuMzg2NzE5IDE0LjE3NTc4MSA5LjUgMTQuMDM1MTU2IDkuNSBDIDEzLjE4MzU5NCA5LjUgMTIuNDk2MDk0IDEwLjE5MTQwNiAxMi40OTYwOTQgMTEuMDM5MDYyIEwgMTIuNDk2MDk0IDExLjk4MDQ2OSBDIDEyLjQ5NjA5NCAxMy41NjI1IDExLjIxNDg0NCAxNC44NDM3NSA5LjYzNjcxOSAxNC44NDM3NSBDIDkuNDk2MDk0IDE0Ljg0Mzc1IDkuMzg2NzE5IDE0LjczMDQ2OSA5LjM4NjcxOSAxNC41OTM3NSBMIDkuMzg2NzE5IDEzLjgxMjUgQyA5LjM4NjcxOSAxMy42NzE4NzUgOS41IDEzLjU1ODU5NCA5LjY0MDYyNSAxMy41NTg1OTQgQyAxMC40OTIxODggMTMuNTU4NTk0IDExLjE3OTY4OCAxMi44NzEwOTQgMTEuMTc5Njg4IDEyLjAxOTUzMSBMIDExLjE3OTY4OCAxMS4wNzgxMjUgQyAxMS4xNzk2ODggOS41IDEyLjQ2MDkzOCA4LjIxODc1IDE0LjA0Mjk2OSA4LjIxODc1IEMgMTQuMTc5Njg4IDguMjE4NzUgMTQuMjg5MDYyIDguMzI4MTI1IDE0LjI4OTA2MiA4LjQ2NDg0NCBaIE0gMTQuMjg5MDYyIDkuMjQ2MDk0IFwiO1xuICAgIHN2Z1tcIlZVRFVcIl0gPSBcIk0gNi4wOTcxIDYuOTkyNiBMIDUuMDQ2OSA2Ljk5MjYgQyA0Ljg3MjUgNi45OTYzIDQuNzEyOSA3LjEwMzkgNC42NTM1IDcuMjcwOSBDIDQuNjUzNSA3LjI4MiA0LjY1MzUgNy4yODk1IDQuNjUzNSA3LjMwMDYgQyA0LjI2MDIgOC40MzI0IDMuOTE1IDkuNDA0NyAzLjUxOCAxMC41MzY1IEMgMy40MTQxIDEwLjgzNzEgMy4zMTAyIDExLjEzNCAzLjE5MTQgMTEuNDM0NiBDIDMuMTg0IDExLjQ2MDUgMy4xNjU0IDExLjQ4MjggMy4xMzk1IDExLjQ5MzkgQyAzLjA5NDkgMTEuNDkzOSAzLjA5NDkgMTEuNDYwNSAzLjA4MzggMTEuNDMwOSBDIDIuODM4OSAxMC43MjIxIDIuNTkzOSAxMC4wMTcgMi4zNDE2IDkuMzExOSBMIDEuNjIxNyA3LjI1NjEgQyAxLjYyNTQgNy4yNDg2IDEuNjI1NCA3LjI0MTIgMS42MjE3IDcuMjMzOCBDIDEuNTQ3NSA3LjA4NTQgMS4zOTkgNi45OTI2IDEuMjM1NyA2Ljk5MjYgTCAwLjE3MDcgNi45OTI2IEMgMC4wODU0IDYuOTg1MiAwLjAxMTEgNy4wNDgyIDAgNy4xMzM2IEMgLTAuMDAzNyA3LjE2MzMgMC4wMDM3IDcuMTkzIDAuMDE0OCA3LjIxODkgQyAwLjYyNzEgOC45Mjk3IDEuMjM1NyAxMC42NDA0IDEuODQ0MyAxMi4zNDc1IEwgMS45NzA1IDEyLjcgQyAyLjE0ODYgMTMuMjE5NSAyLjYzNDggMTMuNTY0NiAzLjE4MDMgMTMuNTYwOSBMIDMuMzIxMyAxMy41NjA5IEMgMy41NTUxIDEzLjU0OTggMy43ODg5IDEzLjUyMDEgNC4wMjI3IDEzLjQ2ODIgTCA0LjQ1MzEgMTIuMjI4NyBMIDYuMjU2NiA3LjIzMDEgQyA2LjI2NDEgNy4yMDc4IDYuMjY3OCA3LjE4OTMgNi4yNzUyIDcuMTcwNyBDIDYuMjg2MyA3LjA4NTQgNi4yMjcgNy4wMDM3IDYuMTQxNiA2Ljk5MjYgQyA2LjEyNjggNi45OTI2IDYuMTE1NiA2Ljk5MjYgNi4xMDA4IDYuOTkyNiBNIDExLjk0MTggNy40NDE2IEMgMTEuOTQxOCA3LjIxNTIgMTEuNzY3NCA3LjAyOTcgMTEuNTQ0NyA3LjAxMTEgTCAxMC40NTc0IDcuMDExMSBMIDEwLjQ1NzQgNy42MTIzIEMgMTAuNDU3NCA4Ljc0NDEgMTAuNDU3NCA5Ljc0OTggMTAuNDU3NCAxMC44ODU0IEMgMTAuNDYxMSAxMS4wMDA0IDEwLjQ1IDExLjExNTQgMTAuNDI0IDExLjIyNjggQyAxMC4zNDI0IDExLjYzNSAxMC4wNDU1IDExLjk1NzggOS42NDg0IDEyLjA3MjkgQyA5LjA0MzYgMTIuMjY5NSA4LjM5MDQgMTEuOTM5MyA4LjE5MzcgMTEuMzMwNyBDIDguMTU2NiAxMS4yMTE5IDguMTM4MSAxMS4wODk1IDguMTM4MSAxMC45NjcgQyA4LjEzODEgMTAuMTg0IDguMTM4MSA4LjUxMDQgOC4xMzgxIDcuNjA0OSBMIDguMTM4MSA3IEMgOC4xMzgxIDcgNy4wNTQ1IDcgNy4wNDcxIDcgQyA2LjgyNDQgNy4wMTQ4IDYuNjUgNy4yMDQxIDYuNjUgNy40MjY4IEwgNi42NSA3LjY0NTcgQyA2LjY1IDguODIyMSA2LjY1IDkuODMxNCA2LjY1IDExLjAzMDEgQyA2LjY1NzQgMTIuNDc3MyA3LjgzMDEgMTMuNjQyNiA5LjI2OTkgMTMuNjMxNCBDIDkuNDQwNiAxMy42MzE0IDkuNjA3NiAxMy42MTI5IDkuNzc0NiAxMy41Nzk1IEMgMTAuNDIwMyAxMy40NzE5IDExLjAwMjkgMTMuMTE5MyAxMS40MDM3IDEyLjU5OTggQyAxMS43NDUxIDEyLjE2OTMgMTEuOTM0NCAxMS42Mzg3IDExLjk0MTggMTEuMDg1NyBDIDExLjk0MTggMTAuNDU4NiAxMS45NDE4IDkuODMxNCAxMS45NDE4IDkuMjAwNiBaIE0gMTEuOTQxOCA3LjQ0MTYgTSAyMy43NSA3LjQ0MTYgQyAyMy43NSA3LjIxODkgMjMuNTc5MyA3LjAyOTcgMjMuMzU2NiA3LjAxMTEgTCAyMi4yNjU2IDcuMDExMSBMIDIyLjI2NTYgNy42MTIzIEMgMjIuMjY1NiA4Ljc0NDEgMjIuMjY1NiA5Ljc0OTggMjIuMjY1NiAxMC44ODU0IEMgMjIuMjY1NiAxMS4wMDA0IDIyLjI1NDUgMTEuMTE1NCAyMi4yMjg1IDExLjIyNjggQyAyMi4xNTA2IDExLjYzMTIgMjEuODUgMTEuOTU3OCAyMS40NTI5IDEyLjA3MjkgQyAyMC44NTE4IDEyLjI3MzIgMjAuMjAyMyAxMS45NDMgMjAuMDAyIDExLjMzODEgQyAxOS45NjExIDExLjIxOTMgMTkuOTQyNiAxMS4wOTMyIDE5Ljk0MjYgMTAuOTY3IEMgMTkuOTQyNiAxMC4xODQgMTkuOTQyNiA4LjUxMDQgMTkuOTQyNiA3LjYwNDkgTCAxOS45NDI2IDcgQyAxOS45NDI2IDcgMTguODYyNyA3IDE4Ljg0NzkgNyBDIDE4LjYyODkgNy4wMTg2IDE4LjQ1ODIgNy4yMDQxIDE4LjQ1NDUgNy40MjY4IEwgMTguNDU0NSA3LjY0NTcgQyAxOC40NTQ1IDguODIyMSAxOC40NTQ1IDkuODMxNCAxOC40NTQ1IDExLjAzMDEgQyAxOC40NjU2IDEyLjQ3NzMgMTkuNjM4MyAxMy42NDI2IDIxLjA3NDQgMTMuNjMxNCBDIDIxLjI0NTEgMTMuNjMxNCAyMS40MTU4IDEzLjYxMjkgMjEuNTgyOCAxMy41Nzk1IEMgMjIuMjI4NSAxMy40NzE5IDIyLjgwNzQgMTMuMTE5MyAyMy4yMDgyIDEyLjU5OTggQyAyMy41NTMzIDEyLjE2OTMgMjMuNzQyNiAxMS42Mzg3IDIzLjc0NjMgMTEuMDg1NyBDIDIzLjc0NjMgMTAuNDU4NiAyMy43NDYzIDkuODMxNCAyMy43NDYzIDkuMjAwNiBMIDIzLjc0NjMgNy40NDE2IFogTSAyMy43NSA3LjQ0MTYgTSAxNi4xMzUyIDExLjUzODUgQyAxNS44NDU3IDExLjg4NzMgMTUuNDMzOCAxMi4xMDYyIDE0Ljk4ODUgMTIuMTQ3MSBDIDE0Ljg5OTQgMTIuMTUwOCAxNC44MTA0IDEyLjE1MDggMTQuNzIxMyAxMi4xNDcxIEwgMTMuOTUzMSAxMi4xNDcxIEMgMTMuODYwNCAxMi4xNDcxIDEzLjg1NjYgMTIuMTQ3MSAxMy44NTY2IDEyLjA1MDYgTCAxMy44NTY2IDguNDU4NCBDIDEzLjg1NjYgOC4zNzMgMTMuODU2NiA4LjM3MyAxMy45NDIgOC4zNzMgQyAxNC4yNjg2IDguMzczIDE0LjU2OTEgOC4zNzMgMTQuODgwOSA4LjM3MyBDIDE1LjQzNzUgOC4zOTE2IDE1Ljk0OTYgOC42ODExIDE2LjI1MzkgOS4xNDg2IEMgMTYuNDUwNiA5LjQzODEgMTYuNTY1NiA5Ljc3OTUgMTYuNTgwNSAxMC4xMzIgQyAxNi42MjEzIDEwLjY0MDQgMTYuNDYxNyAxMS4xNDUxIDE2LjEzNTIgMTEuNTM4NSBNIDE2LjU2OTMgNy40ODk4IEMgMTYuMTAxOCA3LjE4OTMgMTUuNTYgNy4wMjIzIDE1LjAwMzMgNy4wMDc0IEMgMTQuNzQzNiA3LjAwNzQgMTQuNDg3NSA3LjAwNzQgMTQuMjI0IDcuMDA3NCBMIDEyLjg0NzMgNy4wMDc0IEMgMTIuNjA5OCA3LjAwNzQgMTIuNDIwNSA3LjIwMDQgMTIuNDIwNSA3LjQzNzkgTCAxMi40MjA1IDEzLjExNTYgQyAxMi40MjA1IDEzLjM1MzEgMTIuNjA5OCAxMy41NDYxIDEyLjg0NzMgMTMuNTQ2MSBMIDE0LjkxNDMgMTMuNTQ2MSBDIDE1LjA3MDEgMTMuNTQ2MSAxNS4yMjYgMTMuNTMxMyAxNS4zODE4IDEzLjUwMTYgQyAxNi4wMDUzIDEzLjQwODggMTYuNTg0MiAxMy4xMzA1IDE3LjA0NDMgMTIuNzAzNyBDIDE3LjkwMTYgMTEuOTU0MSAxOC4yOTEyIDEwLjggMTguMDY4NiA5LjY3OTMgQyAxNy45MTI3IDguNzcwMSAxNy4zNjcyIDcuOTc2IDE2LjU4MDUgNy41MDQ3IE0gMTkuMDMzNCAxNC40MjkzIEMgMTguNDY1NiAxNC40NTUzIDE4LjAyNCAxNC45NDUxIDE4LjA0NjMgMTUuNTE2NiBDIDE4LjA2ODYgMTYuMDg4MSAxOC41NDczIDE2LjUyOTcgMTkuMTE1IDE2LjUwNzQgQyAxOS42NzE3IDE2LjQ4NTIgMjAuMTA5NiAxNi4wMjUgMjAuMTAyMSAxNS40NjQ2IEMgMjAuMTEzMyAxNC45MTE3IDE5LjY3OTEgMTQuNDQ3OSAxOS4xMjYyIDE0LjQyOTMgTCAxOS4wMzM0IDE0LjQyOTMgTSAxOS42MTYgMTUuNTA5MiBDIDE5LjYwNDkgMTUuNjM1NCAxOS41NDkyIDE1Ljc1NzggMTkuNDYzOSAxNS44NTA2IEwgMTkuNDM0MiAxNS44ODAzIEMgMTkuMTk2NyAxNi4xMDI5IDE4LjgyNTYgMTYuMDkxOCAxOC42MDI5IDE1Ljg1NDMgQyAxOC4zODAzIDE1LjYyMDUgMTguMzkxNCAxNS4yNDU3IDE4LjYyODkgMTUuMDIzIEMgMTguODYyNyAxNC44MDA0IDE5LjIzMzggMTQuODExNSAxOS40NTY0IDE1LjA0OSBDIDE5LjQ1NjQgMTUuMDQ5IDE5LjQ1NjQgMTUuMDQ5IDE5LjQ2MDIgMTUuMDQ5IEMgMTkuNTUyOSAxNS4xNDkyIDE5LjYwODYgMTUuMjc5MSAxOS42MTYgMTUuNDE2NCBaIE0gMTkuNjE2IDE1LjUwOTIgTSAxNi44MTggMTUuMzE5OSBMIDE2LjgxOCAxNS43NzI3IEwgMTcuMjYzMyAxNS43NzI3IEwgMTcuMjYzMyAxNS45Mjg1IEMgMTcuMTU1NyAxNi4wMTAyIDE3LjAyOTUgMTYuMDUxIDE2Ljg5NTkgMTYuMDUxIEMgMTYuNjAyNyAxNi4wNjIxIDE2LjM1NDEgMTUuODMyIDE2LjM0MyAxNS41MzUyIEMgMTYuMzM5MyAxNS41MTI5IDE2LjMzOTMgMTUuNDkwNiAxNi4zNDMgMTUuNDcyMSBDIDE2LjMyMDcgMTUuMTc1MiAxNi41Mzk2IDE0LjkxNTQgMTYuODM2NSAxNC44OTMyIEwgMTYuODk1OSAxNC44OTMyIEMgMTcuMDcwMyAxNC44OTY5IDE3LjIyOTkgMTQuOTkzNCAxNy4zMTUyIDE1LjE0NTUgTCAxNy43NDU3IDE0LjkyMjkgQyAxNy41NzUgMTQuNjExMSAxNy4yNDg0IDE0LjQyNTYgMTYuODk1OSAxNC40MzY3IEMgMTYuMzI4MSAxNC40MjE5IDE1Ljg1NjggMTQuODc0NiAxNS44NDIgMTUuNDQyNCBDIDE1LjgyNzEgMTUuOTk1MyAxNi4yNDI4IDE2LjQ2MjkgMTYuNzkyIDE2LjUwMzcgTCAxNi44OTU5IDE2LjUwMzcgQyAxNy4xOTY1IDE2LjUwMzcgMTcuNDg1OSAxNi4zODg3IDE3LjcwMTIgMTYuMTczNCBDIDE3LjczNDYgMTYuMTQgMTcuNzU2OCAxNi4wODgxIDE3Ljc2MDUgMTYuMDM2MSBMIDE3Ljc2MDUgMTUuMzE5OSBaIE0gMTYuODE4IDE1LjMxOTkgTSAxNS4zMTg3IDE0LjQ4NSBMIDE1LjI3NzkgMTQuNDg1IEMgMTUuMTY2NiAxNC40OTI0IDE1LjA4MTIgMTQuNTg1MiAxNS4wNzc1IDE0LjY5NjUgTCAxNS4wNzc1IDE1LjU3OTcgTCAxNC4yNzYgMTQuNDg1IEwgMTMuNzQxNiAxNC40ODUgTCAxMy43NDE2IDE2LjQ3NzcgTCAxNC4yNTM3IDE2LjQ3NzcgTCAxNC4yNTM3IDE1LjMzMTEgTCAxNS4wOTI0IDE2LjQ3NzcgTCAxNS41ODIyIDE2LjQ3NzcgTCAxNS41ODIyIDE0LjQ4NSBaIE0gMTUuMzE4NyAxNC40ODUgTSAxMi44MTM5IDE0LjQ4NSBMIDEyLjE2MDcgMTQuNDg1IEwgMTEuNDExMSAxNi40ODE0IEwgMTEuOTkzNyAxNi40ODE0IEwgMTIuMDkzOSAxNi4xOTIgTCAxMi44NzMyIDE2LjE5MiBMIDEyLjkyNTIgMTYuMzQwNCBDIDEyLjk1ODYgMTYuNDIyMSAxMy4wMzI4IDE2LjQ3NCAxMy4xMTgyIDE2LjQ3NzcgTCAxMy41NTYxIDE2LjQ3NzcgWiBNIDEyLjIzODcgMTUuNzQzIEwgMTIuNDkxIDE0Ljk4OTYgTCAxMi43Mzk2IDE1Ljc0MyBaIE0gMTIuMjM4NyAxNS43NDMgTSAxMC4zOTQzIDE0LjQ4NSBMIDkuNTU1NyAxNC40ODUgTCA5LjU1NTcgMTYuMjY5OSBDIDkuNTYzMSAxNi4zODUgOS42NTU5IDE2LjQ3NzcgOS43NzA5IDE2LjQ4MTQgTCAxMC4zOTQzIDE2LjQ4MTQgQyAxMC45Mzk4IDE2LjUxMTEgMTEuNDExMSAxNi4wOTE4IDExLjQ0MDggMTUuNTM4OSBDIDExLjQ3NDIgMTQuOTg5NiAxMS4wNTQ5IDE0LjUxODQgMTAuNTA1NyAxNC40ODUgQyAxMC40Njg2IDE0LjQ4NSAxMC40MzE0IDE0LjQ4NSAxMC4zOTQzIDE0LjQ4NSBNIDEwLjM5NDMgMTYuMDM2MSBMIDEwLjA2NzggMTYuMDM2MSBMIDEwLjA2NzggMTQuOTIyOSBMIDEwLjM5NDMgMTQuOTIyOSBDIDEwLjY3NjQgMTQuOTA4IDEwLjkxMzkgMTUuMTIzMiAxMC45MzI0IDE1LjQwNTMgTCAxMC45MzI0IDE1LjQ2NDYgQyAxMC45MzI0IDE1Ljc2MTUgMTAuNjkxMiAxNi4wMzYxIDEwLjM5OCAxNi4wMzYxIEMgMTAuMzk0MyAxNi4wMzYxIDEwLjM5OCAxNi4wMzI0IDEwLjM5OCAxNi4wMzI0IEwgMTAuNDAxOCAxNi4wMjg3IE0gOC45MDYzIDE0LjQ4NSBDIDguNzk0OSAxNC40ODg3IDguNzAyMSAxNC41Nzc3IDguNjk4NCAxNC42ODkxIEwgOC42OTg0IDE1LjU3OTcgTCA3Ljg3ODMgMTQuNDg1IEwgNy4zNDM5IDE0LjQ4NSBMIDcuMzQzOSAxNi40Nzc3IEwgNy44NTIzIDE2LjQ3NzcgTCA3Ljg1MjMgMTUuMzMxMSBMIDguNjk0NyAxNi40ODUyIEwgOS4xODgzIDE2LjQ4NTIgTCA5LjE4ODMgMTQuNDg1IFogTSA4LjkwNjMgMTQuNDg1IE0gNi40MzExIDE0LjQ4NSBMIDUuNzc3OSAxNC40ODUgTCA1LjAzMiAxNi40Nzc3IEwgNS42MjU4IDE2LjQ3NzcgTCA1LjcyNiAxNi4xODgzIEwgNi41MTI3IDE2LjE4ODMgTCA2LjU2NDYgMTYuMzQwNCBDIDYuNTk4IDE2LjQxODQgNi42NzIzIDE2LjQ3MDMgNi43NTc2IDE2LjQ3NzcgTCA3LjE5MTggMTYuNDc3NyBaIE0gNS44NTU5IDE1Ljc0MyBMIDYuMTExOSAxNC45ODk2IEwgNi4zNjA1IDE1Ljc0MyBaIE0gNS44NTU5IDE1Ljc0MyBNIDUuMjIxMyAxNC45MDggTCA1LjIyMTMgMTQuNDU5IEwgMy42OTYxIDE0LjQ1OSBMIDMuNjk2MSAxNi40NDggTCA0LjIzNDIgMTYuNDQ4IEwgNC4yMzQyIDE1Ljc1NzggTCA0Ljc2ODYgMTUuNzU3OCBDIDQuODY1IDE1Ljc0NjcgNC45MzU1IDE1LjY2ODcgNC45NDMgMTUuNTcyMyBMIDQuOTQzIDE1LjMwNTEgTCA0LjI0MTYgMTUuMzA1MSBMIDQuMjQxNiAxNC45MDggWiBNIDUuMjIxMyAxNC45MDggTSAwLjM5NzEgMTUuMzk0MSBMIDMuMjQ3MSAxNS4zOTQxIEwgMy4yNDcxIDE1LjU1IEwgMC4zOTcxIDE1LjU1IFogTSAwLjM5NzEgMTUuMzk0MSBNIDIwLjU1NDkgMTUuMzk0MSBMIDIzLjQwNDkgMTUuMzk0MSBMIDIzLjQwNDkgMTUuNTUgTCAyMC41NTQ5IDE1LjU1IFogTSAyMC41NTQ5IDE1LjM5NDFcIjtcbn0pKHN2ZyB8fCAoZXhwb3J0cy5zdmcgPSBzdmcgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lbnVtc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW50ZXJmYWNlc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZGVmYXVsdEtleXNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlZmF1bHRTb3VyY2VzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL0lDb25maWdcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL0lDdXN0b21BY3Rpb25cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL0lLZXlcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL0lTZXJ2aWNlRGF0YVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vSVNvdXJjZVwiKSwgZXhwb3J0cyk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IE5PREVfTU9ERSA9IGZhbHNlO1xuY29uc3QgZ2xvYmFsID0gTk9ERV9NT0RFID8gZ2xvYmFsVGhpcyA6IHdpbmRvdztcbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGBhZG9wdGVkU3R5bGVTaGVldHNgLlxuICovXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzID0gZ2xvYmFsLlNoYWRvd1Jvb3QgJiZcbiAgICAoZ2xvYmFsLlNoYWR5Q1NTID09PSB1bmRlZmluZWQgfHwgZ2xvYmFsLlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykgJiZcbiAgICAnYWRvcHRlZFN0eWxlU2hlZXRzJyBpbiBEb2N1bWVudC5wcm90b3R5cGUgJiZcbiAgICAncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGU7XG5jb25zdCBjb25zdHJ1Y3Rpb25Ub2tlbiA9IFN5bWJvbCgpO1xuY29uc3QgY3NzVGFnQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBBIGNvbnRhaW5lciBmb3IgYSBzdHJpbmcgb2YgQ1NTIHRleHQsIHRoYXQgbWF5IGJlIHVzZWQgdG8gY3JlYXRlIGEgQ1NTU3R5bGVTaGVldC5cbiAqXG4gKiBDU1NSZXN1bHQgaXMgdGhlIHJldHVybiB2YWx1ZSBvZiBgY3NzYC10YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbHMgYW5kXG4gKiBgdW5zYWZlQ1NTKClgLiBJbiBvcmRlciB0byBlbnN1cmUgdGhhdCBDU1NSZXN1bHRzIGFyZSBvbmx5IGNyZWF0ZWQgdmlhIHRoZVxuICogYGNzc2AgdGFnIGFuZCBgdW5zYWZlQ1NTKClgLCBDU1NSZXN1bHQgY2Fubm90IGJlIGNvbnN0cnVjdGVkIGRpcmVjdGx5LlxuICovXG5leHBvcnQgY2xhc3MgQ1NTUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihjc3NUZXh0LCBzdHJpbmdzLCBzYWZlVG9rZW4pIHtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgdGhpc1snXyRjc3NSZXN1bHQkJ10gPSB0cnVlO1xuICAgICAgICBpZiAoc2FmZVRva2VuICE9PSBjb25zdHJ1Y3Rpb25Ub2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgICAgIHRoaXMuX3N0cmluZ3MgPSBzdHJpbmdzO1xuICAgIH1cbiAgICAvLyBUaGlzIGlzIGEgZ2V0dGVyIHNvIHRoYXQgaXQncyBsYXp5LiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyBzdHlsZXNoZWV0c1xuICAgIC8vIGFyZSBub3QgY3JlYXRlZCB1bnRpbCB0aGUgZmlyc3QgZWxlbWVudCBpbnN0YW5jZSBpcyBtYWRlLlxuICAgIGdldCBzdHlsZVNoZWV0KCkge1xuICAgICAgICAvLyBJZiBgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzYCBpcyB0cnVlIHRoZW4gd2UgYXNzdW1lIENTU1N0eWxlU2hlZXQgaXNcbiAgICAgICAgLy8gY29uc3RydWN0YWJsZS5cbiAgICAgICAgbGV0IHN0eWxlU2hlZXQgPSB0aGlzLl9zdHlsZVNoZWV0O1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5fc3RyaW5ncztcbiAgICAgICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyAmJiBzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlYWJsZSA9IHN0cmluZ3MgIT09IHVuZGVmaW5lZCAmJiBzdHJpbmdzLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgICAgIGlmIChjYWNoZWFibGUpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0ID0gY3NzVGFnQ2FjaGUuZ2V0KHN0cmluZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0eWxlU2hlZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICh0aGlzLl9zdHlsZVNoZWV0ID0gc3R5bGVTaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCkpLnJlcGxhY2VTeW5jKHRoaXMuY3NzVGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBjc3NUYWdDYWNoZS5zZXQoc3RyaW5ncywgc3R5bGVTaGVldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVNoZWV0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3NzVGV4dDtcbiAgICB9XG59XG5jb25zdCB0ZXh0RnJvbUNTU1Jlc3VsdCA9ICh2YWx1ZSkgPT4ge1xuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgaWYgKHZhbHVlWydfJGNzc1Jlc3VsdCQnXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3NzVGV4dDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiBgICtcbiAgICAgICAgICAgIGAke3ZhbHVlfS4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXQgdGFrZSBjYXJlIGAgK1xuICAgICAgICAgICAgYHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LmApO1xuICAgIH1cbn07XG4vKipcbiAqIFdyYXAgYSB2YWx1ZSBmb3IgaW50ZXJwb2xhdGlvbiBpbiBhIHtAbGlua2NvZGUgY3NzfSB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbC5cbiAqXG4gKiBUaGlzIGlzIHVuc2FmZSBiZWNhdXNlIHVudHJ1c3RlZCBDU1MgdGV4dCBjYW4gYmUgdXNlZCB0byBwaG9uZSBob21lXG4gKiBvciBleGZpbHRyYXRlIGRhdGEgdG8gYW4gYXR0YWNrZXIgY29udHJvbGxlZCBzaXRlLiBUYWtlIGNhcmUgdG8gb25seSB1c2VcbiAqIHRoaXMgd2l0aCB0cnVzdGVkIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlQ1NTID0gKHZhbHVlKSA9PiBuZXcgQ1NTUmVzdWx0KHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSksIHVuZGVmaW5lZCwgY29uc3RydWN0aW9uVG9rZW4pO1xuLyoqXG4gKiBBIHRlbXBsYXRlIGxpdGVyYWwgdGFnIHdoaWNoIGNhbiBiZSB1c2VkIHdpdGggTGl0RWxlbWVudCdzXG4gKiB7QGxpbmtjb2RlIExpdEVsZW1lbnQuc3R5bGVzfSBwcm9wZXJ0eSB0byBzZXQgZWxlbWVudCBzdHlsZXMuXG4gKlxuICogRm9yIHNlY3VyaXR5IHJlYXNvbnMsIG9ubHkgbGl0ZXJhbCBzdHJpbmcgdmFsdWVzIGFuZCBudW1iZXIgbWF5IGJlIHVzZWQgaW5cbiAqIGVtYmVkZGVkIGV4cHJlc3Npb25zLiBUbyBpbmNvcnBvcmF0ZSBub24tbGl0ZXJhbCB2YWx1ZXMge0BsaW5rY29kZSB1bnNhZmVDU1N9XG4gKiBtYXkgYmUgdXNlZCBpbnNpZGUgYW4gZXhwcmVzc2lvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGNzcyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcbiAgICBjb25zdCBjc3NUZXh0ID0gc3RyaW5ncy5sZW5ndGggPT09IDFcbiAgICAgICAgPyBzdHJpbmdzWzBdXG4gICAgICAgIDogdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+IGFjYyArIHRleHRGcm9tQ1NTUmVzdWx0KHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gICAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoY3NzVGV4dCwgc3RyaW5ncywgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gc3R5bGVzIHRvIGEgYHNoYWRvd1Jvb3RgLiBXaGVuIFNoYWRvdyBET00gaXNcbiAqIGF2YWlsYWJsZSBidXQgYGFkb3B0ZWRTdHlsZVNoZWV0c2AgaXMgbm90LCBzdHlsZXMgYXJlIGFwcGVuZGVkIHRvIHRoZVxuICogYHNoYWRvd1Jvb3RgIHRvIFttaW1pYyBzcGVjIGJlaGF2aW9yXShodHRwczovL3dpY2cuZ2l0aHViLmlvL2NvbnN0cnVjdC1zdHlsZXNoZWV0cy8jdXNpbmctY29uc3RydWN0ZWQtc3R5bGVzaGVldHMpLlxuICogTm90ZSwgd2hlbiBzaGltbWluZyBpcyB1c2VkLCBhbnkgc3R5bGVzIHRoYXQgYXJlIHN1YnNlcXVlbnRseSBwbGFjZWQgaW50b1xuICogdGhlIHNoYWRvd1Jvb3Qgc2hvdWxkIGJlIHBsYWNlZCAqYmVmb3JlKiBhbnkgc2hpbW1lZCBhZG9wdGVkIHN0eWxlcy4gVGhpc1xuICogd2lsbCBtYXRjaCBzcGVjIGJlaGF2aW9yIHRoYXQgZ2l2ZXMgYWRvcHRlZCBzaGVldHMgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICogc2hhZG93Um9vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFkb3B0U3R5bGVzID0gKHJlbmRlclJvb3QsIHN0eWxlcykgPT4ge1xuICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICAgcmVuZGVyUm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgPSBzdHlsZXMubWFwKChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IHMgOiBzLnN0eWxlU2hlZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBjb25zdCBub25jZSA9IGdsb2JhbFsnbGl0Tm9uY2UnXTtcbiAgICAgICAgICAgIGlmIChub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gcy5jc3NUZXh0O1xuICAgICAgICAgICAgcmVuZGVyUm9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldCA9IChzaGVldCkgPT4ge1xuICAgIGxldCBjc3NUZXh0ID0gJyc7XG4gICAgZm9yIChjb25zdCBydWxlIG9mIHNoZWV0LmNzc1J1bGVzKSB7XG4gICAgICAgIGNzc1RleHQgKz0gcnVsZS5jc3NUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlQ1NTKGNzc1RleHQpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDb21wYXRpYmxlU3R5bGUgPSBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgfHxcbiAgICAoTk9ERV9NT0RFICYmIGdsb2JhbC5DU1NTdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpXG4gICAgPyAocykgPT4gc1xuICAgIDogKHMpID0+IHMgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0ID8gY3NzUmVzdWx0RnJvbVN0eWxlU2hlZXQocykgOiBzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXRhZy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmV4cG9ydCBjb25zdCBsZWdhY3lQcm90b3R5cGVNZXRob2QgPSAoZGVzY3JpcHRvciwgcHJvdG8sIG5hbWUpID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbmV4cG9ydCBjb25zdCBzdGFuZGFyZFByb3RvdHlwZU1ldGhvZCA9IChkZXNjcmlwdG9yLCBlbGVtZW50KSA9PiAoe1xuICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgIHBsYWNlbWVudDogJ3Byb3RvdHlwZScsXG4gICAga2V5OiBlbGVtZW50LmtleSxcbiAgICBkZXNjcmlwdG9yLFxufSk7XG4vKipcbiAqIEhlbHBlciBmb3IgZGVjb3JhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgY29tcGF0aWJsZSB3aXRoIGJvdGggVHlwZVNjcmlwdFxuICogYW5kIEJhYmVsIGRlY29yYXRvcnMuIFRoZSBvcHRpb25hbCBgZmluaXNoZXJgIGNhbiBiZSB1c2VkIHRvIHBlcmZvcm0gd29yayBvblxuICogdGhlIGNsYXNzLiBUaGUgb3B0aW9uYWwgYGRlc2NyaXB0b3JgIHNob3VsZCByZXR1cm4gYSBQcm9wZXJ0eURlc2NyaXB0b3JcbiAqIHRvIGluc3RhbGwgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0gZmluaXNoZXIge2Z1bmN0aW9ufSBPcHRpb25hbCBmaW5pc2hlciBtZXRob2Q7IHJlY2VpdmVzIHRoZSBlbGVtZW50XG4gKiBjb25zdHJ1Y3RvciBhbmQgcHJvcGVydHkga2V5IGFzIGFyZ3VtZW50cyBhbmQgaGFzIG5vIHJldHVybiB2YWx1ZS5cbiAqIEBwYXJhbSBkZXNjcmlwdG9yIHtmdW5jdGlvbn0gT3B0aW9uYWwgZGVzY3JpcHRvciBtZXRob2Q7IHJlY2VpdmVzIHRoZVxuICogcHJvcGVydHkga2V5IGFzIGFuIGFyZ3VtZW50IGFuZCByZXR1cm5zIGEgcHJvcGVydHkgZGVzY3JpcHRvciB0byBkZWZpbmUgZm9yXG4gKiB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gKiBAcmV0dXJucyB7Q2xhc3NFbGVtZW50fHZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBkZWNvcmF0ZVByb3BlcnR5ID0gKHsgZmluaXNoZXIsIGRlc2NyaXB0b3IsIH0pID0+IChwcm90b09yRGVzY3JpcHRvciwgbmFtZVxuLy8gTm90ZSBUeXBlU2NyaXB0IHJlcXVpcmVzIHRoZSByZXR1cm4gdHlwZSB0byBiZSBgdm9pZHxhbnlgXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIC8vIFR5cGVTY3JpcHQgLyBCYWJlbCBsZWdhY3kgbW9kZVxuICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY3RvciA9IHByb3RvT3JEZXNjcmlwdG9yXG4gICAgICAgICAgICAuY29uc3RydWN0b3I7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b09yRGVzY3JpcHRvciwgbmFtZSwgZGVzY3JpcHRvcihuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluaXNoZXIgPT09IG51bGwgfHwgZmluaXNoZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpbmlzaGVyKGN0b3IsIG5hbWUpO1xuICAgICAgICAvLyBCYWJlbCBzdGFuZGFyZCBtb2RlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBOb3RlLCB0aGUgQHByb3BlcnR5IGRlY29yYXRvciBzYXZlcyBga2V5YCBhcyBgb3JpZ2luYWxLZXlgXG4gICAgICAgIC8vIHNvIHRyeSB0byB1c2UgaXQgaGVyZS5cbiAgICAgICAgY29uc3Qga2V5ID0gXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIChfYSA9IHByb3RvT3JEZXNjcmlwdG9yLm9yaWdpbmFsS2V5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBwcm90b09yRGVzY3JpcHRvci5rZXk7XG4gICAgICAgIGNvbnN0IGluZm8gPSBkZXNjcmlwdG9yICE9IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAga2luZDogJ21ldGhvZCcsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvcihwcm90b09yRGVzY3JpcHRvci5rZXkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7IC4uLnByb3RvT3JEZXNjcmlwdG9yLCBrZXkgfTtcbiAgICAgICAgaWYgKGZpbmlzaGVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5mby5maW5pc2hlciA9IGZ1bmN0aW9uIChjdG9yKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoZXIoY3Rvciwga2V5KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBsZWdhY3lDdXN0b21FbGVtZW50ID0gKHRhZ05hbWUsIGNsYXp6KSA9PiB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAvLyBDYXN0IGFzIGFueSBiZWNhdXNlIFRTIGRvZXNuJ3QgcmVjb2duaXplIHRoZSByZXR1cm4gdHlwZSBhcyBiZWluZyBhXG4gICAgLy8gc3VidHlwZSBvZiB0aGUgZGVjb3JhdGVkIGNsYXNzIHdoZW4gY2xhenogaXMgdHlwZWQgYXNcbiAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBmb3Igc29tZSByZWFzb24uXG4gICAgLy8gYENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PmAgaXMgaGVscGZ1bCB0byBtYWtlIHN1cmUgdGhlIGRlY29yYXRvciBpc1xuICAgIC8vIGFwcGxpZWQgdG8gZWxlbWVudHMgaG93ZXZlci5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiBjbGF6ejtcbn07XG5jb25zdCBzdGFuZGFyZEN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSwgZGVzY3JpcHRvcikgPT4ge1xuICAgIGNvbnN0IHsga2luZCwgZWxlbWVudHMgfSA9IGRlc2NyaXB0b3I7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2luZCxcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgaXMgY2FsbGVkIG9uY2UgdGhlIGNsYXNzIGlzIG90aGVyd2lzZSBmdWxseSBkZWZpbmVkXG4gICAgICAgIGZpbmlzaGVyKGNsYXp6KSB7XG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhenopO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGRlZmluZXMgdGhlIGRlY29yYXRlZCBjbGFzcyBhcyBhIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIGBgYGpzXG4gKiBAY3VzdG9tRWxlbWVudCgnbXktZWxlbWVudCcpXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICogQHBhcmFtIHRhZ05hbWUgVGhlIHRhZyBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBjdXN0b21FbGVtZW50ID0gKHRhZ05hbWUpID0+IChjbGFzc09yRGVzY3JpcHRvcikgPT4gdHlwZW9mIGNsYXNzT3JEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nXG4gICAgPyBsZWdhY3lDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKVxuICAgIDogc3RhbmRhcmRDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyB0byBhIG1ldGhvZCB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGluIGFcbiAqIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIGFzIGFjY2VwdGVkIGJ5XG4gKiBgRXZlbnRUYXJnZXQjYWRkRXZlbnRMaXN0ZW5lcmAgYW5kIGBFdmVudFRhcmdldCNyZW1vdmVFdmVudExpc3RlbmVyYC5cbiAqXG4gKiBDdXJyZW50IGJyb3dzZXJzIHN1cHBvcnQgdGhlIGBjYXB0dXJlYCwgYHBhc3NpdmVgLCBhbmQgYG9uY2VgIG9wdGlvbnMuIFNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyI1BhcmFtZXRlcnNcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgY2xpY2tlZCA9IGZhbHNlO1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBAY2xpY2s9JHt0aGlzLl9vbkNsaWNrfT5cbiAqICAgICAgICAgPGJ1dHRvbj48L2J1dHRvbj5cbiAqICAgICAgIDwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqXG4gKiAgIEBldmVudE9wdGlvbnMoe2NhcHR1cmU6IHRydWV9KVxuICogICBfb25DbGljayhlKSB7XG4gKiAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucykge1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZmluaXNoZXI6IChjdG9yLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIGN0b3IucHJvdG90eXBlW25hbWVdLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50LW9wdGlvbnMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBzdGFuZGFyZFByb3BlcnR5ID0gKG9wdGlvbnMsIGVsZW1lbnQpID0+IHtcbiAgICAvLyBXaGVuIGRlY29yYXRpbmcgYW4gYWNjZXNzb3IsIHBhc3MgaXQgdGhyb3VnaCBhbmQgYWRkIHByb3BlcnR5IG1ldGFkYXRhLlxuICAgIC8vIE5vdGUsIHRoZSBgaGFzT3duUHJvcGVydHlgIGNoZWNrIGluIGBjcmVhdGVQcm9wZXJ0eWAgZW5zdXJlcyB3ZSBkb24ndFxuICAgIC8vIHN0b21wIG92ZXIgdGhlIHVzZXIncyBhY2Nlc3Nvci5cbiAgICBpZiAoZWxlbWVudC5raW5kID09PSAnbWV0aG9kJyAmJlxuICAgICAgICBlbGVtZW50LmRlc2NyaXB0b3IgJiZcbiAgICAgICAgISgndmFsdWUnIGluIGVsZW1lbnQuZGVzY3JpcHRvcikpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgICAgICBmaW5pc2hlcihjbGF6eikge1xuICAgICAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGVQcm9wZXJ0eSgpIHRha2VzIGNhcmUgb2YgZGVmaW5pbmcgdGhlIHByb3BlcnR5LCBidXQgd2Ugc3RpbGxcbiAgICAgICAgLy8gbXVzdCByZXR1cm4gc29tZSBraW5kIG9mIGRlc2NyaXB0b3IsIHNvIHJldHVybiBhIGRlc2NyaXB0b3IgZm9yIGFuXG4gICAgICAgIC8vIHVudXNlZCBwcm90b3R5cGUgZmllbGQuIFRoZSBmaW5pc2hlciBjYWxscyBjcmVhdGVQcm9wZXJ0eSgpLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2luZDogJ2ZpZWxkJyxcbiAgICAgICAgICAgIGtleTogU3ltYm9sKCksXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgICAgZGVzY3JpcHRvcjoge30sXG4gICAgICAgICAgICAvLyBzdG9yZSB0aGUgb3JpZ2luYWwga2V5IHNvIHN1YnNlcXVlbnQgZGVjb3JhdG9ycyBoYXZlIGFjY2VzcyB0byBpdC5cbiAgICAgICAgICAgIG9yaWdpbmFsS2V5OiBlbGVtZW50LmtleSxcbiAgICAgICAgICAgIC8vIFdoZW4gQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1kZWNvcmF0b3JzIGltcGxlbWVudHMgaW5pdGlhbGl6ZXJzLFxuICAgICAgICAgICAgLy8gZG8gdGhpcyBpbnN0ZWFkIG9mIHRoZSBpbml0aWFsaXplciBiZWxvdy4gU2VlOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy85MjYwIGV4dHJhczogW1xuICAgICAgICAgICAgLy8gICB7XG4gICAgICAgICAgICAvLyAgICAga2luZDogJ2luaXRpYWxpemVyJyxcbiAgICAgICAgICAgIC8vICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgICAgLy8gICAgIGluaXRpYWxpemVyOiBkZXNjcmlwdG9yLmluaXRpYWxpemVyLFxuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyBdLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmluaXRpYWxpemVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbZWxlbWVudC5rZXldID0gZWxlbWVudC5pbml0aWFsaXplci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaW5pc2hlcihjbGF6eikge1xuICAgICAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IGxlZ2FjeVByb3BlcnR5ID0gKG9wdGlvbnMsIHByb3RvLCBuYW1lKSA9PiB7XG4gICAgcHJvdG8uY29uc3RydWN0b3IuY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG59O1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB3aGljaCBjcmVhdGVzIGEgcmVhY3RpdmUgcHJvcGVydHkgdGhhdCByZWZsZWN0cyBhXG4gKiBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZSB2YWx1ZS4gV2hlbiBhIGRlY29yYXRlZCBwcm9wZXJ0eSBpcyBzZXRcbiAqIHRoZSBlbGVtZW50IHdpbGwgdXBkYXRlIGFuZCByZW5kZXIuIEEge0BsaW5rY29kZSBQcm9wZXJ0eURlY2xhcmF0aW9ufSBtYXlcbiAqIG9wdGlvbmFsbHkgYmUgc3VwcGxpZWQgdG8gY29uZmlndXJlIHByb3BlcnR5IGZlYXR1cmVzLlxuICpcbiAqIFRoaXMgZGVjb3JhdG9yIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIHB1YmxpYyBmaWVsZHMuIEFzIHB1YmxpYyBmaWVsZHMsXG4gKiBwcm9wZXJ0aWVzIHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHByaW1hcmlseSBzZXR0YWJsZSBieSBlbGVtZW50IHVzZXJzLFxuICogZWl0aGVyIHZpYSBhdHRyaWJ1dGUgb3IgdGhlIHByb3BlcnR5IGl0c2VsZi5cbiAqXG4gKiBHZW5lcmFsbHksIHByb3BlcnRpZXMgdGhhdCBhcmUgY2hhbmdlZCBieSB0aGUgZWxlbWVudCBzaG91bGQgYmUgcHJpdmF0ZSBvclxuICogcHJvdGVjdGVkIGZpZWxkcyBhbmQgc2hvdWxkIHVzZSB0aGUge0BsaW5rY29kZSBzdGF0ZX0gZGVjb3JhdG9yLlxuICpcbiAqIEhvd2V2ZXIsIHNvbWV0aW1lcyBlbGVtZW50IGNvZGUgZG9lcyBuZWVkIHRvIHNldCBhIHB1YmxpYyBwcm9wZXJ0eS4gVGhpc1xuICogc2hvdWxkIHR5cGljYWxseSBvbmx5IGJlIGRvbmUgaW4gcmVzcG9uc2UgdG8gdXNlciBpbnRlcmFjdGlvbiwgYW5kIGFuIGV2ZW50XG4gKiBzaG91bGQgYmUgZmlyZWQgaW5mb3JtaW5nIHRoZSB1c2VyOyBmb3IgZXhhbXBsZSwgYSBjaGVja2JveCBzZXRzIGl0c1xuICogYGNoZWNrZWRgIHByb3BlcnR5IHdoZW4gY2xpY2tlZCBhbmQgZmlyZXMgYSBgY2hhbmdlZGAgZXZlbnQuIE11dGF0aW5nIHB1YmxpY1xuICogcHJvcGVydGllcyBzaG91bGQgdHlwaWNhbGx5IG5vdCBiZSBkb25lIGZvciBub24tcHJpbWl0aXZlIChvYmplY3Qgb3IgYXJyYXkpXG4gKiBwcm9wZXJ0aWVzLiBJbiBvdGhlciBjYXNlcyB3aGVuIGFuIGVsZW1lbnQgbmVlZHMgdG8gbWFuYWdlIHN0YXRlLCBhIHByaXZhdGVcbiAqIHByb3BlcnR5IGRlY29yYXRlZCB2aWEgdGhlIHtAbGlua2NvZGUgc3RhdGV9IGRlY29yYXRvciBzaG91bGQgYmUgdXNlZC4gV2hlblxuICogbmVlZGVkLCBzdGF0ZSBwcm9wZXJ0aWVzIGNhbiBiZSBpbml0aWFsaXplZCB2aWEgcHVibGljIHByb3BlcnRpZXMgdG9cbiAqIGZhY2lsaXRhdGUgY29tcGxleCBpbnRlcmFjdGlvbnMuXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAqICAgY2xpY2tlZCA9IGZhbHNlO1xuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBARXhwb3J0RGVjb3JhdGVkSXRlbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5KG9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiAocHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpID0+IG5hbWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGxlZ2FjeVByb3BlcnR5KG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKVxuICAgICAgICA6IHN0YW5kYXJkUHJvcGVydHkob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcGVydHkuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXJcbiAqIHRoYXQgZXhlY3V0ZXMgYSBxdWVyeVNlbGVjdG9yQWxsIG9uIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdC5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgQSBET01TdHJpbmcgY29udGFpbmluZyBvbmUgb3IgbW9yZSBzZWxlY3RvcnMgdG8gbWF0Y2guXG4gKlxuICogU2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3F1ZXJ5U2VsZWN0b3JBbGxcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QWxsKCdkaXYnKVxuICogICBkaXZzOiBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgaWQ9XCJmaXJzdFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBpZD1cInNlY29uZFwiPjwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBbGwoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hbGwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2E7XG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG5jb25zdCBOT0RFX01PREUgPSBmYWxzZTtcbmNvbnN0IGdsb2JhbCA9IE5PREVfTU9ERSA/IGdsb2JhbFRoaXMgOiB3aW5kb3c7XG4vKipcbiAqIEEgdGlueSBtb2R1bGUgc2NvcGVkIHBvbHlmaWxsIGZvciBIVE1MU2xvdEVsZW1lbnQuYXNzaWduZWRFbGVtZW50cy5cbiAqL1xuY29uc3Qgc2xvdEFzc2lnbmVkRWxlbWVudHMgPSAoKF9hID0gZ2xvYmFsLkhUTUxTbG90RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb3RvdHlwZS5hc3NpZ25lZEVsZW1lbnRzKSAhPSBudWxsXG4gICAgPyAoc2xvdCwgb3B0cykgPT4gc2xvdC5hc3NpZ25lZEVsZW1lbnRzKG9wdHMpXG4gICAgOiAoc2xvdCwgb3B0cykgPT4gc2xvdFxuICAgICAgICAuYXNzaWduZWROb2RlcyhvcHRzKVxuICAgICAgICAuZmlsdGVyKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSk7XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyIHRoYXRcbiAqIHJldHVybnMgdGhlIGBhc3NpZ25lZEVsZW1lbnRzYCBvZiB0aGUgZ2l2ZW4gYHNsb3RgLiBQcm92aWRlcyBhIGRlY2xhcmF0aXZlXG4gKiB3YXkgdG8gdXNlXG4gKiBbYEhUTUxTbG90RWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxTbG90RWxlbWVudC9hc3NpZ25lZEVsZW1lbnRzKS5cbiAqXG4gKiBDYW4gYmUgcGFzc2VkIGFuIG9wdGlvbmFsIHtAbGlua2NvZGUgUXVlcnlBc3NpZ25lZEVsZW1lbnRzT3B0aW9uc30gb2JqZWN0LlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QXNzaWduZWRFbGVtZW50cyh7IHNsb3Q6ICdsaXN0JyB9KVxuICogICBsaXN0SXRlbXMhOiBBcnJheTxIVE1MRWxlbWVudD47XG4gKiAgIEBxdWVyeUFzc2lnbmVkRWxlbWVudHMoKVxuICogICB1bm5hbWVkU2xvdEVscyE6IEFycmF5PEhUTUxFbGVtZW50PjtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxzbG90IG5hbWU9XCJsaXN0XCI+PC9zbG90PlxuICogICAgICAgPHNsb3Q+PC9zbG90PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIE5vdGUsIHRoZSB0eXBlIG9mIHRoaXMgcHJvcGVydHkgc2hvdWxkIGJlIGFubm90YXRlZCBhcyBgQXJyYXk8SFRNTEVsZW1lbnQ+YC5cbiAqXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFzc2lnbmVkRWxlbWVudHMob3B0aW9ucykge1xuICAgIGNvbnN0IHsgc2xvdCwgc2VsZWN0b3IgfSA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9O1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKF9uYW1lKSA9PiAoe1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90U2VsZWN0b3IgPSBgc2xvdCR7c2xvdCA/IGBbbmFtZT0ke3Nsb3R9XWAgOiAnOm5vdChbbmFtZV0pJ31gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RFbCA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2xvdFNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHNsb3RFbCAhPSBudWxsID8gc2xvdEFzc2lnbmVkRWxlbWVudHMoc2xvdEVsLCBvcHRpb25zKSA6IFtdO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHMuZmlsdGVyKChub2RlKSA9PiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgeyBxdWVyeUFzc2lnbmVkRWxlbWVudHMgfSBmcm9tICcuL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFzc2lnbmVkTm9kZXMoc2xvdE9yT3B0aW9ucywgZmxhdHRlbiwgc2VsZWN0b3IpIHtcbiAgICAvLyBOb3JtYWxpemUgdGhlIG92ZXJsb2FkZWQgYXJndW1lbnRzLlxuICAgIGxldCBzbG90ID0gc2xvdE9yT3B0aW9ucztcbiAgICBsZXQgYXNzaWduZWROb2Rlc09wdGlvbnM7XG4gICAgaWYgKHR5cGVvZiBzbG90T3JPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzbG90ID0gc2xvdE9yT3B0aW9ucy5zbG90O1xuICAgICAgICBhc3NpZ25lZE5vZGVzT3B0aW9ucyA9IHNsb3RPck9wdGlvbnM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhc3NpZ25lZE5vZGVzT3B0aW9ucyA9IHsgZmxhdHRlbiB9O1xuICAgIH1cbiAgICAvLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHF1ZXJ5QXNzaWduZWROb2RlcyB3aXRoIGEgc2VsZWN0b3IgYmVoYXZlc1xuICAgIC8vIGV4YWN0bHkgbGlrZSBxdWVyeUFzc2lnbmVkRWxlbWVudHMgd2l0aCBhIHNlbGVjdG9yLlxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gcXVlcnlBc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgICAgIHNsb3Q6IHNsb3QsXG4gICAgICAgICAgICBmbGF0dGVuLFxuICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RTZWxlY3RvciA9IGBzbG90JHtzbG90ID8gYFtuYW1lPSR7c2xvdH1dYCA6ICc6bm90KFtuYW1lXSknfWA7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdEVsID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzbG90U2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2IgPSBzbG90RWwgPT09IG51bGwgfHwgc2xvdEVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbG90RWwuYXNzaWduZWROb2Rlcyhhc3NpZ25lZE5vZGVzT3B0aW9ucykpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtbm9kZXMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8vIE5vdGUsIGluIHRoZSBmdXR1cmUsIHdlIG1heSBleHRlbmQgdGhpcyBkZWNvcmF0b3IgdG8gc3VwcG9ydCB0aGUgdXNlIGNhc2Vcbi8vIHdoZXJlIHRoZSBxdWVyaWVkIGVsZW1lbnQgbWF5IG5lZWQgdG8gZG8gd29yayB0byBiZWNvbWUgcmVhZHkgdG8gaW50ZXJhY3Rcbi8vIHdpdGggKGUuZy4gbG9hZCBzb21lIGltcGxlbWVudGF0aW9uIGNvZGUpLiBJZiBzbywgd2UgbWlnaHQgZWxlY3QgdG9cbi8vIGFkZCBhIHNlY29uZCBhcmd1bWVudCBkZWZpbmluZyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHJ1biB0byBtYWtlIHRoZVxuLy8gcXVlcmllZCBlbGVtZW50IGxvYWRlZC91cGRhdGVkL3JlYWR5LlxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXN1bHQgb2YgYSBxdWVyeVNlbGVjdG9yIG9uIHRoZVxuICogZWxlbWVudCdzIHJlbmRlclJvb3QgZG9uZSBhZnRlciB0aGUgZWxlbWVudCdzIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZVxuICogcmVzb2x2ZXMuIFdoZW4gdGhlIHF1ZXJpZWQgcHJvcGVydHkgbWF5IGNoYW5nZSB3aXRoIGVsZW1lbnQgc3RhdGUsIHRoaXNcbiAqIGRlY29yYXRvciBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIHJlcXVpcmluZyB1c2VycyB0byBhd2FpdCB0aGVcbiAqIGB1cGRhdGVDb21wbGV0ZWAgYmVmb3JlIGFjY2Vzc2luZyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIEEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgc2VsZWN0b3JzIHRvIG1hdGNoLlxuICpcbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3F1ZXJ5U2VsZWN0b3JcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QXN5bmMoJyNmaXJzdCcpXG4gKiAgIGZpcnN0OiBQcm9taXNlPEhUTUxEaXZFbGVtZW50PjtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgaWQ9XCJmaXJzdFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBpZD1cInNlY29uZFwiPjwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiAvLyBleHRlcm5hbCB1c2FnZVxuICogYXN5bmMgZG9Tb21ldGhpbmdXaXRoRmlyc3QoKSB7XG4gKiAgKGF3YWl0IGFNeUVsZW1lbnQuZmlyc3QpLmRvU29tZXRoaW5nKCk7XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QXN5bmMoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGFzeW5jIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hc3luYy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3Igb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBBIERPTVN0cmluZyBjb250YWluaW5nIG9uZSBvciBtb3JlIHNlbGVjdG9ycyB0byBtYXRjaC5cbiAqIEBwYXJhbSBjYWNoZSBBbiBvcHRpb25hbCBib29sZWFuIHdoaWNoIHdoZW4gdHJ1ZSBwZXJmb3JtcyB0aGUgRE9NIHF1ZXJ5IG9ubHlcbiAqICAgICBvbmNlIGFuZCBjYWNoZXMgdGhlIHJlc3VsdC5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9xdWVyeVNlbGVjdG9yXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeSgnI2ZpcnN0JylcbiAqICAgZmlyc3Q6IEhUTUxEaXZFbGVtZW50O1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBpZD1cImZpcnN0XCI+PC9kaXY+XG4gKiAgICAgICA8ZGl2IGlkPVwic2Vjb25kXCI+PC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeShzZWxlY3RvciwgY2FjaGUpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gdHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnID8gU3ltYm9sKCkgOiBgX18ke25hbWV9YDtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSAoX2IgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLypcbiAqIElNUE9SVEFOVDogRm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0c2lja2xlIGFuZCB0aGUgQ2xvc3VyZSBKUyBjb21waWxlciwgYWxsXG4gKiBwcm9wZXJ0eSBkZWNvcmF0b3JzIChidXQgbm90IGNsYXNzIGRlY29yYXRvcnMpIGluIHRoaXMgZmlsZSB0aGF0IGhhdmVcbiAqIGFuIEBFeHBvcnREZWNvcmF0ZWRJdGVtcyBhbm5vdGF0aW9uIG11c3QgYmUgZGVmaW5lZCBhcyBhIHJlZ3VsYXIgZnVuY3Rpb24sXG4gKiBub3QgYW4gYXJyb3cgZnVuY3Rpb24uXG4gKi9cbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnLi9wcm9wZXJ0eS5qcyc7XG4vKipcbiAqIERlY2xhcmVzIGEgcHJpdmF0ZSBvciBwcm90ZWN0ZWQgcmVhY3RpdmUgcHJvcGVydHkgdGhhdCBzdGlsbCB0cmlnZ2Vyc1xuICogdXBkYXRlcyB0byB0aGUgZWxlbWVudCB3aGVuIGl0IGNoYW5nZXMuIEl0IGRvZXMgbm90IHJlZmxlY3QgZnJvbSB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlLlxuICpcbiAqIFByb3BlcnRpZXMgZGVjbGFyZWQgdGhpcyB3YXkgbXVzdCBub3QgYmUgdXNlZCBmcm9tIEhUTUwgb3IgSFRNTCB0ZW1wbGF0aW5nXG4gKiBzeXN0ZW1zLCB0aGV5J3JlIHNvbGVseSBmb3IgcHJvcGVydGllcyBpbnRlcm5hbCB0byB0aGUgZWxlbWVudC4gVGhlc2VcbiAqIHByb3BlcnRpZXMgbWF5IGJlIHJlbmFtZWQgYnkgb3B0aW1pemF0aW9uIHRvb2xzIGxpa2UgY2xvc3VyZSBjb21waWxlci5cbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcHJvcGVydHkoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzdGF0ZTogdHJ1ZSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kO1xudmFyIF9lO1xuLyoqXG4gKiBVc2UgdGhpcyBtb2R1bGUgaWYgeW91IHdhbnQgdG8gY3JlYXRlIHlvdXIgb3duIGJhc2UgY2xhc3MgZXh0ZW5kaW5nXG4gKiB7QGxpbmsgUmVhY3RpdmVFbGVtZW50fS5cbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBnZXRDb21wYXRpYmxlU3R5bGUsIGFkb3B0U3R5bGVzLCB9IGZyb20gJy4vY3NzLXRhZy5qcyc7XG4vLyBJbiB0aGUgTm9kZSBidWlsZCwgdGhpcyBpbXBvcnQgd2lsbCBiZSBpbmplY3RlZCBieSBSb2xsdXA6XG4vLyBpbXBvcnQge0hUTUxFbGVtZW50LCBjdXN0b21FbGVtZW50c30gZnJvbSAnQGxpdC1sYWJzL3Nzci1kb20tc2hpbSc7XG5leHBvcnQgKiBmcm9tICcuL2Nzcy10YWcuanMnO1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG5jb25zdCBnbG9iYWwgPSBOT0RFX01PREUgPyBnbG9iYWxUaGlzIDogd2luZG93O1xuaWYgKE5PREVfTU9ERSkge1xuICAgIChfYSA9IGdsb2JhbC5jdXN0b21FbGVtZW50cykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKGdsb2JhbC5jdXN0b21FbGVtZW50cyA9IGN1c3RvbUVsZW1lbnRzKTtcbn1cbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCByZXF1ZXN0VXBkYXRlVGhlbmFibGU7XG5sZXQgaXNzdWVXYXJuaW5nO1xuY29uc3QgdHJ1c3RlZFR5cGVzID0gZ2xvYmFsXG4gICAgLnRydXN0ZWRUeXBlcztcbi8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBodHRwczovL2NyYnVnLmNvbS85OTMyNjhcbi8vIEN1cnJlbnRseSwgYW55IGF0dHJpYnV0ZSBzdGFydGluZyB3aXRoIFwib25cIiBpcyBjb25zaWRlcmVkIHRvIGJlIGFcbi8vIFRydXN0ZWRTY3JpcHQgc291cmNlLiBTdWNoIGJvb2xlYW4gYXR0cmlidXRlcyBtdXN0IGJlIHNldCB0byB0aGUgZXF1aXZhbGVudFxuLy8gdHJ1c3RlZCBlbXB0eVNjcmlwdCB2YWx1ZS5cbmNvbnN0IGVtcHR5U3RyaW5nRm9yQm9vbGVhbkF0dHJpYnV0ZSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgOiAnJztcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gICAgPyBnbG9iYWwucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0RGV2TW9kZVxuICAgIDogZ2xvYmFsLnJlYWN0aXZlRWxlbWVudFBvbHlmaWxsU3VwcG9ydDtcbmlmIChERVZfTU9ERSkge1xuICAgIC8vIEVuc3VyZSB3YXJuaW5ncyBhcmUgaXNzdWVkIG9ubHkgMXgsIGV2ZW4gaWYgbXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0XG4gICAgLy8gYXJlIGxvYWRlZC5cbiAgICBjb25zdCBpc3N1ZWRXYXJuaW5ncyA9ICgoX2IgPSBnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IChnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MgPSBuZXcgU2V0KCkpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICBpZiAoIWlzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgaXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpc3N1ZVdhcm5pbmcoJ2Rldi1tb2RlJywgYExpdCBpcyBpbiBkZXYgbW9kZS4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIWApO1xuICAgIC8vIElzc3VlIHBvbHlmaWxsIHN1cHBvcnQgd2FybmluZy5cbiAgICBpZiAoKChfYyA9IGdsb2JhbC5TaGFkeURPTSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmluVXNlKSAmJiBwb2x5ZmlsbFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpc3N1ZVdhcm5pbmcoJ3BvbHlmaWxsLXN1cHBvcnQtbWlzc2luZycsIGBTaGFkb3cgRE9NIGlzIGJlaW5nIHBvbHlmaWxsZWQgdmlhIFxcYFNoYWR5RE9NXFxgIGJ1dCBgICtcbiAgICAgICAgICAgIGB0aGUgXFxgcG9seWZpbGwtc3VwcG9ydFxcYCBtb2R1bGUgaGFzIG5vdCBiZWVuIGxvYWRlZC5gKTtcbiAgICB9XG4gICAgcmVxdWVzdFVwZGF0ZVRoZW5hYmxlID0gKG5hbWUpID0+ICh7XG4gICAgICAgIHRoZW46IChvbmZ1bGZpbGxlZCwgX29ucmVqZWN0ZWQpID0+IHtcbiAgICAgICAgICAgIGlzc3VlV2FybmluZygncmVxdWVzdC11cGRhdGUtcHJvbWlzZScsIGBUaGUgXFxgcmVxdWVzdFVwZGF0ZVxcYCBtZXRob2Qgc2hvdWxkIG5vIGxvbmdlciByZXR1cm4gYSBQcm9taXNlIGJ1dCBgICtcbiAgICAgICAgICAgICAgICBgZG9lcyBzbyBvbiBcXGAke25hbWV9XFxgLiBVc2UgXFxgdXBkYXRlQ29tcGxldGVcXGAgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgIGlmIChvbmZ1bGZpbGxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb25mdWxmaWxsZWQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xufVxuLyoqXG4gKiBVc2VmdWwgZm9yIHZpc3VhbGl6aW5nIGFuZCBsb2dnaW5nIGluc2lnaHRzIGludG8gd2hhdCB0aGUgTGl0IHRlbXBsYXRlIHN5c3RlbSBpcyBkb2luZy5cbiAqXG4gKiBDb21waWxlZCBvdXQgb2YgcHJvZCBtb2RlIGJ1aWxkcy5cbiAqL1xuY29uc3QgZGVidWdMb2dFdmVudCA9IERFVl9NT0RFXG4gICAgPyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkRW1pdCA9IGdsb2JhbFxuICAgICAgICAgICAgLmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cztcbiAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXQtZGVidWcnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IGV2ZW50LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIDogdW5kZWZpbmVkO1xuLypcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xuLypAX19JTkxJTkVfXyovXG5jb25zdCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gKHByb3AsIF9vYmopID0+IHByb3A7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgICB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlIDogbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgIHBhc3MgdGhpcyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgLy8gdG8gYWxsb3cgcmVtb3Zpbmcvbm8gY2hhbmdlIGJlaGF2aW9yLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgbGV0IGZyb21WYWx1ZSA9IHZhbHVlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSB2YWx1ZSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlID09PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgLy8gRG8gKm5vdCogZ2VuZXJhdGUgZXhjZXB0aW9uIHdoZW4gaW52YWxpZCBKU09OIGlzIHNldCBhcyBlbGVtZW50c1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IG5vcm1hbGx5IGNvbXBsYWluIG9uIGJlaW5nIG1pcy1jb25maWd1cmVkLlxuICAgICAgICAgICAgICAgIC8vIFRPRE8oc29ydmVsbCk6IERvIGdlbmVyYXRlIGV4Y2VwdGlvbiBpbiAqZGV2IG1vZGUqLlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc2VydCB0byBhZGhlcmUgdG8gQmF6ZWwncyBcIm11c3QgdHlwZSBhc3NlcnQgSlNPTiBwYXJzZVwiIHJ1bGUuXG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvbVZhbHVlO1xuICAgIH0sXG59O1xuLyoqXG4gKiBDaGFuZ2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBkaWZmZXJlbnQgZnJvbSBgb2xkVmFsdWVgLlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgYSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVxdWFsID0gKHZhbHVlLCBvbGQpID0+IHtcbiAgICAvLyBUaGlzIGVuc3VyZXMgKG9sZD09TmFOLCB2YWx1ZT09TmFOKSBhbHdheXMgcmV0dXJucyBmYWxzZVxuICAgIHJldHVybiBvbGQgIT09IHZhbHVlICYmIChvbGQgPT09IG9sZCB8fCB2YWx1ZSA9PT0gdmFsdWUpO1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uID0ge1xuICAgIGF0dHJpYnV0ZTogdHJ1ZSxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgY29udmVydGVyOiBkZWZhdWx0Q29udmVydGVyLFxuICAgIHJlZmxlY3Q6IGZhbHNlLFxuICAgIGhhc0NoYW5nZWQ6IG5vdEVxdWFsLFxufTtcbi8qKlxuICogVGhlIENsb3N1cmUgSlMgQ29tcGlsZXIgZG9lc24ndCBjdXJyZW50bHkgaGF2ZSBnb29kIHN1cHBvcnQgZm9yIHN0YXRpY1xuICogcHJvcGVydHkgc2VtYW50aWNzIHdoZXJlIFwidGhpc1wiIGlzIGR5bmFtaWMgKGUuZy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9pc3N1ZXMvMzE3NyBhbmQgb3RoZXJzKSBzbyB3ZSB1c2VcbiAqIHRoaXMgaGFjayB0byBieXBhc3MgYW55IHJld3JpdGluZyBieSB0aGUgY29tcGlsZXIuXG4gKi9cbmNvbnN0IGZpbmFsaXplZCA9ICdmaW5hbGl6ZWQnO1xuLyoqXG4gKiBCYXNlIGVsZW1lbnQgY2xhc3Mgd2hpY2ggbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMuIFdoZW5cbiAqIHByb3BlcnRpZXMgY2hhbmdlLCB0aGUgYHVwZGF0ZWAgbWV0aG9kIGlzIGFzeW5jaHJvbm91c2x5IGNhbGxlZC4gVGhpcyBtZXRob2RcbiAqIHNob3VsZCBiZSBzdXBwbGllZCBieSBzdWJjbGFzc2VycyB0byByZW5kZXIgdXBkYXRlcyBhcyBkZXNpcmVkLlxuICogQG5vSW5oZXJpdERvY1xuICovXG5leHBvcnQgY2xhc3MgUmVhY3RpdmVFbGVtZW50XG4vLyBJbiB0aGUgTm9kZSBidWlsZCwgdGhpcyBgZXh0ZW5kc2AgY2xhdXNlIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aFxuLy8gYChnbG9iYWxUaGlzLkhUTUxFbGVtZW50ID8/IEhUTUxFbGVtZW50KWAuXG4vL1xuLy8gVGhpcyB3YXksIHdlIHdpbGwgZmlyc3QgcHJlZmVyIGFueSBnbG9iYWwgYEhUTUxFbGVtZW50YCBwb2x5ZmlsbCB0aGF0IHRoZVxuLy8gdXNlciBoYXMgYXNzaWduZWQsIGFuZCB0aGVuIGZhbGwgYmFjayB0byB0aGUgYEhUTUxFbGVtZW50YCBzaGltIHdoaWNoIGhhc1xuLy8gYmVlbiBpbXBvcnRlZCAoc2VlIG5vdGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUgYWJvdXQgaG93IHRoaXMgaW1wb3J0IGlzXG4vLyBnZW5lcmF0ZWQgYnkgUm9sbHVwKS4gTm90ZSB0aGF0IHRoZSBgSFRNTEVsZW1lbnRgIHZhcmlhYmxlIGhhcyBiZWVuXG4vLyBzaGFkb3dlZCBieSB0aGlzIGltcG9ydCwgc28gaXQgbm8gbG9uZ2VyIHJlZmVycyB0byB0aGUgZ2xvYmFsLlxuIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpZiB0aGVyZSBpcyBhIHBlbmRpbmcgdXBkYXRlIGFzIGEgcmVzdWx0IG9mIGNhbGxpbmcgYHJlcXVlc3RVcGRhdGUoKWAuXG4gICAgICAgICAqIFNob3VsZCBvbmx5IGJlIHJlYWQuXG4gICAgICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSXMgc2V0IHRvIGB0cnVlYCBhZnRlciB0aGUgZmlyc3QgdXBkYXRlLiBUaGUgZWxlbWVudCBjb2RlIGNhbm5vdCBhc3N1bWVcbiAgICAgICAgICogdGhhdCBgcmVuZGVyUm9vdGAgZXhpc3RzIGJlZm9yZSB0aGUgZWxlbWVudCBgaGFzVXBkYXRlZGAuXG4gICAgICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgY3VycmVudGx5IHJlZmxlY3RpbmcgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGluaXRpYWxpemVyIGZ1bmN0aW9uIHRvIHRoZSBjbGFzcyB0aGF0IGlzIGNhbGxlZCBkdXJpbmcgaW5zdGFuY2VcbiAgICAgKiBjb25zdHJ1Y3Rpb24uXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgY29kZSB0aGF0IHJ1bnMgYWdhaW5zdCBhIGBSZWFjdGl2ZUVsZW1lbnRgXG4gICAgICogc3ViY2xhc3MsIHN1Y2ggYXMgYSBkZWNvcmF0b3IsIHRoYXQgbmVlZHMgdG8gZG8gd29yayBmb3IgZWFjaFxuICAgICAqIGluc3RhbmNlLCBzdWNoIGFzIHNldHRpbmcgdXAgYSBgUmVhY3RpdmVDb250cm9sbGVyYC5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3QgbXlEZWNvcmF0b3IgPSAodGFyZ2V0OiB0eXBlb2YgUmVhY3RpdmVFbGVtZW50LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAqICAgdGFyZ2V0LmFkZEluaXRpYWxpemVyKChpbnN0YW5jZTogUmVhY3RpdmVFbGVtZW50KSA9PiB7XG4gICAgICogICAgIC8vIFRoaXMgaXMgcnVuIGR1cmluZyBjb25zdHJ1Y3Rpb24gb2YgdGhlIGVsZW1lbnRcbiAgICAgKiAgICAgbmV3IE15Q29udHJvbGxlcihpbnN0YW5jZSk7XG4gICAgICogICB9KTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBEZWNvcmF0aW5nIGEgZmllbGQgd2lsbCB0aGVuIGNhdXNlIGVhY2ggaW5zdGFuY2UgdG8gcnVuIGFuIGluaXRpYWxpemVyXG4gICAgICogdGhhdCBhZGRzIGEgY29udHJvbGxlcjpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICBAbXlEZWNvcmF0b3IgZm9vO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEluaXRpYWxpemVycyBhcmUgc3RvcmVkIHBlci1jb25zdHJ1Y3Rvci4gQWRkaW5nIGFuIGluaXRpYWxpemVyIHRvIGFcbiAgICAgKiBzdWJjbGFzcyBkb2VzIG5vdCBhZGQgaXQgdG8gYSBzdXBlcmNsYXNzLiBTaW5jZSBpbml0aWFsaXplcnMgYXJlIHJ1biBpblxuICAgICAqIGNvbnN0cnVjdG9ycywgaW5pdGlhbGl6ZXJzIHdpbGwgcnVuIGluIG9yZGVyIG9mIHRoZSBjbGFzcyBoaWVyYXJjaHksXG4gICAgICogc3RhcnRpbmcgd2l0aCBzdXBlcmNsYXNzZXMgYW5kIHByb2dyZXNzaW5nIHRvIHRoZSBpbnN0YW5jZSdzIGNsYXNzLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkSW5pdGlhbGl6ZXIoaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgICgoX2EgPSB0aGlzLl9pbml0aWFsaXplcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9pbml0aWFsaXplcnMgPSBbXSkpLnB1c2goaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBhdHRyaWJ1dGVzXG4gICAgICovXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIC8vIG5vdGU6IHBpZ2d5IGJhY2tpbmcgb24gdGhpcyB0byBlbnN1cmUgd2UncmUgZmluYWxpemVkLlxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5fX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwLCB2KTtcbiAgICAgICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5zZXQoYXR0ciwgcCk7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0XG4gICAgICogYW5kIHN0b3JlcyBhIHtAbGlua2NvZGUgUHJvcGVydHlEZWNsYXJhdGlvbn0gZm9yIHRoZSBwcm9wZXJ0eSB3aXRoIHRoZVxuICAgICAqIGdpdmVuIG9wdGlvbnMuIFRoZSBwcm9wZXJ0eSBzZXR0ZXIgY2FsbHMgdGhlIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgXG4gICAgICogcHJvcGVydHkgb3B0aW9uIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90XG4gICAgICogdG8gcmVxdWVzdCBhbiB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBtYXkgYmUgb3ZlcnJpZGRlbiB0byBjdXN0b21pemUgcHJvcGVydGllczsgaG93ZXZlcixcbiAgICAgKiB3aGVuIGRvaW5nIHNvLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGBzdXBlci5jcmVhdGVQcm9wZXJ0eWAgdG8gZW5zdXJlXG4gICAgICogdGhlIHByb3BlcnR5IGlzIHNldHVwIGNvcnJlY3RseS4gVGhpcyBtZXRob2QgY2FsbHNcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYCBpbnRlcm5hbGx5IHRvIGdldCBhIGRlc2NyaXB0b3IgdG8gaW5zdGFsbC5cbiAgICAgKiBUbyBjdXN0b21pemUgd2hhdCBwcm9wZXJ0aWVzIGRvIHdoZW4gdGhleSBhcmUgZ2V0IG9yIHNldCwgb3ZlcnJpZGVcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYC4gVG8gY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIHByb3BlcnR5LFxuICAgICAqIGltcGxlbWVudCBgY3JlYXRlUHJvcGVydHlgIGxpa2UgdGhpczpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgKiAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtteU9wdGlvbjogdHJ1ZX0pO1xuICAgICAqICAgc3VwZXIuY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgc3RhdGUgcHJvcGVydHksIGZvcmNlIHRoZSBhdHRyaWJ1dGUgdG8gZmFsc2UuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXRlKSB7XG4gICAgICAgICAgICAvLyBDYXN0IGFzIGFueSBzaW5jZSB0aGlzIGlzIHJlYWRvbmx5LlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIG9wdGlvbnMuYXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZSwgc2luY2UgdGhpcyBjYW4gYmUgY2FsbGVkIGJ5IHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3Igd2hpY2hcbiAgICAgICAgLy8gaXMgY2FsbGVkIGJlZm9yZSBgZmluYWxpemVgLCB3ZSBlbnN1cmUgZmluYWxpemF0aW9uIGhhcyBiZWVuIGtpY2tlZCBvZmYuXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhbiBhY2Nlc3NvciBpZiB0aGUgcHJvdG90eXBlIGFscmVhZHkgaGFzIG9uZSwgc2luY2VcbiAgICAgICAgLy8gaXQgd291bGQgYmUgbG9zdCBvdGhlcndpc2UgYW5kIHRoYXQgd291bGQgbmV2ZXIgYmUgdGhlIHVzZXIncyBpbnRlbnRpb247XG4gICAgICAgIC8vIEluc3RlYWQsIHdlIGV4cGVjdCB1c2VycyB0byBjYWxsIGByZXF1ZXN0VXBkYXRlYCB0aGVtc2VsdmVzIGZyb21cbiAgICAgICAgLy8gdXNlci1kZWZpbmVkIGFjY2Vzc29ycy4gTm90ZSB0aGF0IGlmIHRoZSBzdXBlciBoYXMgYW4gYWNjZXNzb3Igd2Ugd2lsbFxuICAgICAgICAvLyBzdGlsbCBvdmVyd3JpdGUgaXRcbiAgICAgICAgaWYgKCFvcHRpb25zLm5vQWNjZXNzb3IgJiYgIXRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0eXBlb2YgbmFtZSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2woKSA6IGBfXyR7bmFtZX1gO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBjbGFzcyBkb2Vzbid0IGhhdmUgaXRzIG93biBzZXQsIGNyZWF0ZSBvbmUgYW5kIGluaXRpYWxpemVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCB0aGUgdmFsdWVzIGluIHRoZSBzZXQgZnJvbSB0aGUgbmVhcmVzdCBhbmNlc3RvciBjbGFzcywgaWYgYW55LlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoJ19fcmVhY3RpdmVQcm9wZXJ0eUtleXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlYWN0aXZlUHJvcGVydHlLZXlzID0gbmV3IFNldCgoX2EgPSB0aGlzLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMuYWRkKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvcGVydHkgZGVzY3JpcHRvciB0byBiZSBkZWZpbmVkIG9uIHRoZSBnaXZlbiBuYW1lZCBwcm9wZXJ0eS5cbiAgICAgKiBJZiBubyBkZXNjcmlwdG9yIGlzIHJldHVybmVkLCB0aGUgcHJvcGVydHkgd2lsbCBub3QgYmVjb21lIGFuIGFjY2Vzc29yLlxuICAgICAqIEZvciBleGFtcGxlLFxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICogICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdG9yID1cbiAgICAgKiAgICAgICAgIHN1cGVyLmdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpO1xuICAgICAqICAgICBjb25zdCBzZXR0ZXIgPSBkZWZhdWx0RGVzY3JpcHRvci5zZXQ7XG4gICAgICogICAgIHJldHVybiB7XG4gICAgICogICAgICAgZ2V0OiBkZWZhdWx0RGVzY3JpcHRvci5nZXQsXG4gICAgICogICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICogICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICogICAgICAgICAvLyBjdXN0b20gYWN0aW9uLlxuICAgICAqICAgICAgIH0sXG4gICAgICogICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAqICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG9wdGlvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAgICAgKiBUaGVzZSBvcHRpb25zIGFyZSBkZWZpbmVkIHdpdGggYSBgUHJvcGVydHlEZWNsYXJhdGlvbmAgdmlhIHRoZSBgcHJvcGVydGllc2BcbiAgICAgKiBvYmplY3Qgb3IgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciBhbmQgYXJlIHJlZ2lzdGVyZWQgaW5cbiAgICAgKiBgY3JlYXRlUHJvcGVydHkoLi4uKWAuXG4gICAgICpcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBcImZpbmFsXCIgYW5kIG5vdCBvdmVycmlkZGVuLiBUb1xuICAgICAqIGN1c3RvbWl6ZSB0aGUgb3B0aW9ucyBmb3IgYSBnaXZlbiBwcm9wZXJ0eSwgb3ZlcnJpZGVcbiAgICAgKiB7QGxpbmtjb2RlIGNyZWF0ZVByb3BlcnR5fS5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGZpbmFsXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlPcHRpb25zKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZ2V0KG5hbWUpIHx8IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLCBzZXRzIHVwIGVsZW1lbnRcbiAgICAgKiBzdHlsaW5nLCBhbmQgZW5zdXJlcyBhbnkgc3VwZXJjbGFzc2VzIGFyZSBhbHNvIGZpbmFsaXplZC4gUmV0dXJucyB0cnVlIGlmXG4gICAgICogdGhlIGVsZW1lbnQgd2FzIGZpbmFsaXplZC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoZmluYWxpemVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbZmluYWxpemVkXSA9IHRydWU7XG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICAgICAgY29uc3Qgc3VwZXJDdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO1xuICAgICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICAgICAgLy8gQ3JlYXRlIG93biBzZXQgb2YgaW5pdGlhbGl6ZXJzIGZvciB0aGlzIGNsYXNzIGlmIGFueSBleGlzdCBvbiB0aGVcbiAgICAgICAgLy8gc3VwZXJjbGFzcyBhbmQgY29weSB0aGVtIGRvd24uIE5vdGUsIGZvciBhIHNtYWxsIHBlcmYgYm9vc3QsIGF2b2lkXG4gICAgICAgIC8vIGNyZWF0aW5nIGluaXRpYWxpemVycyB1bmxlc3MgbmVlZGVkLlxuICAgICAgICBpZiAoc3VwZXJDdG9yLl9pbml0aWFsaXplcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZXJzID0gWy4uLnN1cGVyQ3Rvci5faW5pdGlhbGl6ZXJzXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcChzdXBlckN0b3IuZWxlbWVudFByb3BlcnRpZXMpO1xuICAgICAgICAvLyBpbml0aWFsaXplIE1hcCBwb3B1bGF0ZWQgaW4gb2JzZXJ2ZWRBdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBtYWtlIGFueSBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIE5vdGUsIG9ubHkgcHJvY2VzcyBcIm93blwiIHByb3BlcnRpZXMgc2luY2UgdGhpcyBlbGVtZW50IHdpbGwgaW5oZXJpdFxuICAgICAgICAvLyBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIHRoZSBzdXBlckNsYXNzLCBhbmQgZmluYWxpemF0aW9uIGVuc3VyZXNcbiAgICAgICAgLy8gdGhlIGVudGlyZSBwcm90b3R5cGUgY2hhaW4gaXMgZmluYWxpemVkLlxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdwcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcGVydGllcztcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgc3ltYm9scyBpbiBwcm9wZXJ0aWVzIChJRTExIGRvZXMgbm90IHN1cHBvcnQgdGhpcylcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gW1xuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKSxcbiAgICAgICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BzKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBUaGlzIGZvci9vZiBpcyBvayBiZWNhdXNlIHByb3BLZXlzIGlzIGFuIGFycmF5XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvcEtleXMpIHtcbiAgICAgICAgICAgICAgICAvLyBub3RlLCB1c2Ugb2YgYGFueWAgaXMgZHVlIHRvIFR5cGVTY3JpcHQgbGFjayBvZiBzdXBwb3J0IGZvciBzeW1ib2wgaW5cbiAgICAgICAgICAgICAgICAvLyBpbmRleCB0eXBlc1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9wZXJ0eShwLCBwcm9wc1twXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50U3R5bGVzID0gdGhpcy5maW5hbGl6ZVN0eWxlcyh0aGlzLnN0eWxlcyk7XG4gICAgICAgIC8vIERFViBtb2RlIHdhcm5pbmdzXG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgY29uc3Qgd2FyblJlbW92ZWRPclJlbmFtZWQgPSAobmFtZSwgcmVuYW1lZCA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZyhyZW5hbWVkID8gJ3JlbmFtZWQtYXBpJyA6ICdyZW1vdmVkLWFwaScsIGBcXGAke25hbWV9XFxgIGlzIGltcGxlbWVudGVkIG9uIGNsYXNzICR7dGhpcy5uYW1lfS4gSXQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaGFzIGJlZW4gJHtyZW5hbWVkID8gJ3JlbmFtZWQnIDogJ3JlbW92ZWQnfSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBpbiB0aGlzIHZlcnNpb24gb2YgTGl0RWxlbWVudC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQoJ2luaXRpYWxpemUnKTtcbiAgICAgICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKCdyZXF1ZXN0VXBkYXRlSW50ZXJuYWwnKTtcbiAgICAgICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKCdfZ2V0VXBkYXRlQ29tcGxldGUnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIHN0eWxlcyB0aGUgdXNlciBzdXBwbGllZCB2aWEgdGhlIGBzdGF0aWMgc3R5bGVzYCBwcm9wZXJ0eSBhbmRcbiAgICAgKiByZXR1cm5zIHRoZSBhcnJheSBvZiBzdHlsZXMgdG8gYXBwbHkgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW50ZWdyYXRlIGludG8gYSBzdHlsZSBtYW5hZ2VtZW50IHN5c3RlbS5cbiAgICAgKlxuICAgICAqIFN0eWxlcyBhcmUgZGVkdXBsaWNhdGVkIHByZXNlcnZpbmcgdGhlIF9sYXN0XyBpbnN0YW5jZSBpbiB0aGUgbGlzdC4gVGhpc1xuICAgICAqIGlzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRvIGF2b2lkIGR1cGxpY2F0ZWQgc3R5bGVzIHRoYXQgY2FuIG9jY3VyXG4gICAgICogZXNwZWNpYWxseSB3aGVuIGNvbXBvc2luZyB2aWEgc3ViY2xhc3NpbmcuIFRoZSBsYXN0IGl0ZW0gaXMga2VwdCB0byB0cnlcbiAgICAgKiB0byBwcmVzZXJ2ZSB0aGUgY2FzY2FkZSBvcmRlciB3aXRoIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQncyBtb3N0IGltcG9ydGFudFxuICAgICAqIHRoYXQgbGFzdCBhZGRlZCBzdHlsZXMgb3ZlcnJpZGUgcHJldmlvdXMgc3R5bGVzLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgc3R5bGVzXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50U3R5bGVzID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICAgICAgICAgIC8vIERlZHVwZSB0aGUgZmxhdHRlbmVkIGFycmF5IGluIHJldmVyc2Ugb3JkZXIgdG8gcHJlc2VydmUgdGhlIGxhc3QgaXRlbXMuXG4gICAgICAgICAgICAvLyBDYXN0aW5nIHRvIEFycmF5PHVua25vd24+IHdvcmtzIGFyb3VuZCBUUyBlcnJvciB0aGF0XG4gICAgICAgICAgICAvLyBhcHBlYXJzIHRvIGNvbWUgZnJvbSB0cnlpbmcgdG8gZmxhdHRlbiBhIHR5cGUgQ1NTUmVzdWx0QXJyYXkuXG4gICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHN0eWxlcy5mbGF0KEluZmluaXR5KS5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgLy8gVGhlbiBwcmVzZXJ2ZSBvcmlnaW5hbCBvcmRlciBieSBhZGRpbmcgdGhlIHNldCBpdGVtcyBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHNldCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMudW5zaGlmdChnZXRDb21wYXRpYmxlU3R5bGUocykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50U3R5bGVzLnB1c2goZ2V0Q29tcGF0aWJsZVN0eWxlKHN0eWxlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50U3R5bGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIGBuYW1lYC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlID09PSBmYWxzZVxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogdHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgID8gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBvbmx5IG92ZXJyaWRlIHBvaW50IGZvciBjdXN0b21pemluZyB3b3JrIGRvbmUgd2hlbiBlbGVtZW50c1xuICAgICAqIGFyZSBjb25zdHJ1Y3RlZC5cbiAgICAgKi9cbiAgICBfX2luaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzKSA9PiAodGhpcy5lbmFibGVVcGRhdGluZyA9IHJlcykpO1xuICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCk7XG4gICAgICAgIC8vIGVuc3VyZXMgZmlyc3QgdXBkYXRlIHdpbGwgYmUgY2F1Z2h0IGJ5IGFuIGVhcmx5IGFjY2VzcyBvZlxuICAgICAgICAvLyBgdXBkYXRlQ29tcGxldGVgXG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgICAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yLl9pbml0aWFsaXplcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChpKSA9PiBpKHRoaXMpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAgdG8gcGFydGljaXBhdGUgaW4gdGhlIGVsZW1lbnQncyByZWFjdGl2ZVxuICAgICAqIHVwZGF0ZSBjeWNsZS4gVGhlIGVsZW1lbnQgYXV0b21hdGljYWxseSBjYWxscyBpbnRvIGFueSByZWdpc3RlcmVkXG4gICAgICogY29udHJvbGxlcnMgZHVyaW5nIGl0cyBsaWZlY3ljbGUgY2FsbGJhY2tzLlxuICAgICAqXG4gICAgICogSWYgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHdoZW4gYGFkZENvbnRyb2xsZXIoKWAgaXMgY2FsbGVkLCB0aGVcbiAgICAgKiBjb250cm9sbGVyJ3MgYGhvc3RDb25uZWN0ZWQoKWAgY2FsbGJhY2sgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXG4gICAgICogQGNhdGVnb3J5IGNvbnRyb2xsZXJzXG4gICAgICovXG4gICAgYWRkQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICgoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9fY29udHJvbGxlcnMgPSBbXSkpLnB1c2goY29udHJvbGxlcik7XG4gICAgICAgIC8vIElmIGEgY29udHJvbGxlciBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiBjb25uZWN0ZWQsXG4gICAgICAgIC8vIGNhbGwgaG9zdENvbm5lY3RlZC4gTm90ZSwgcmUtdXNpbmcgZXhpc3RlbmNlIG9mIGByZW5kZXJSb290YCBoZXJlXG4gICAgICAgIC8vICh3aGljaCBpcyBzZXQgaW4gY29ubmVjdGVkQ2FsbGJhY2spIHRvIGF2b2lkIHRoZSBuZWVkIHRvIHRyYWNrIGFcbiAgICAgICAgLy8gZmlyc3QgY29ubmVjdGVkIHN0YXRlLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJSb290ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgKF9iID0gY29udHJvbGxlci5ob3N0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAgZnJvbSB0aGUgZWxlbWVudC5cbiAgICAgKiBAY2F0ZWdvcnkgY29udHJvbGxlcnNcbiAgICAgKi9cbiAgICByZW1vdmVDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBOb3RlLCBpZiB0aGUgaW5kZXhPZiBpcyAtMSwgdGhlID4+PiB3aWxsIGZsaXAgdGhlIHNpZ24gd2hpY2ggbWFrZXMgdGhlXG4gICAgICAgIC8vIHNwbGljZSBkbyBub3RoaW5nLlxuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcGxpY2UodGhpcy5fX2NvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlcikgPj4+IDAsIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaXhlcyBhbnkgcHJvcGVydGllcyBzZXQgb24gdGhlIGluc3RhbmNlIGJlZm9yZSB1cGdyYWRlIHRpbWUuXG4gICAgICogT3RoZXJ3aXNlIHRoZXNlIHdvdWxkIHNoYWRvdyB0aGUgYWNjZXNzb3IgYW5kIGJyZWFrIHRoZXNlIHByb3BlcnRpZXMuXG4gICAgICogVGhlIHByb3BlcnRpZXMgYXJlIHN0b3JlZCBpbiBhIE1hcCB3aGljaCBpcyBwbGF5ZWQgYmFjayBhZnRlciB0aGVcbiAgICAgKiBjb25zdHJ1Y3RvciBydW5zLiBOb3RlLCBvbiB2ZXJ5IG9sZCB2ZXJzaW9ucyBvZiBTYWZhcmkgKDw9OSkgb3IgQ2hyb21lXG4gICAgICogKDw9NDEpLCBwcm9wZXJ0aWVzIGNyZWF0ZWQgZm9yIG5hdGl2ZSBwbGF0Zm9ybSBwcm9wZXJ0aWVzIGxpa2UgKGBpZGAgb3JcbiAgICAgKiBgbmFtZWApIG1heSBub3QgaGF2ZSBkZWZhdWx0IHZhbHVlcyBzZXQgaW4gdGhlIGVsZW1lbnQgY29uc3RydWN0b3IuIE9uXG4gICAgICogdGhlc2UgYnJvd3NlcnMgbmF0aXZlIHByb3BlcnRpZXMgYXBwZWFyIG9uIGluc3RhbmNlcyBhbmQgdGhlcmVmb3JlIHRoZWlyXG4gICAgICogZGVmYXVsdCB2YWx1ZSB3aWxsIG92ZXJ3cml0ZSBhbnkgZWxlbWVudCBkZWZhdWx0IChlLmcuIGlmIHRoZSBlbGVtZW50IHNldHNcbiAgICAgKiB0aGlzLmlkID0gJ2lkJyBpbiB0aGUgY29uc3RydWN0b3IsIHRoZSAnaWQnIHdpbGwgYmVjb21lICcnIHNpbmNlIHRoaXMgaXNcbiAgICAgKiB0aGUgbmF0aXZlIHBsYXRmb3JtIGRlZmF1bHQpLlxuICAgICAqL1xuICAgIF9fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpIHtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKChfdiwgcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB0aGlzW3BdKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5vZGUgaW50byB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgcmVuZGVyIGFuZCBieSBkZWZhdWx0XG4gICAgICogY3JlYXRlcyBhbmQgcmV0dXJucyBhbiBvcGVuIHNoYWRvd1Jvb3QuIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlXG4gICAgICogZWxlbWVudCdzIERPTSBpcyByZW5kZXJlZC4gRm9yIGV4YW1wbGUsIHRvIHJlbmRlciBpbnRvIHRoZSBlbGVtZW50J3NcbiAgICAgKiBjaGlsZE5vZGVzLCByZXR1cm4gYHRoaXNgLlxuICAgICAqXG4gICAgICogQHJldHVybiBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCByZW5kZXJSb290ID0gKF9hID0gdGhpcy5zaGFkb3dSb290KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLmF0dGFjaFNoYWRvdyh0aGlzLmNvbnN0cnVjdG9yLnNoYWRvd1Jvb3RPcHRpb25zKTtcbiAgICAgICAgYWRvcHRTdHlsZXMocmVuZGVyUm9vdCwgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50U3R5bGVzKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9uIGZpcnN0IGNvbm5lY3Rpb24sIGNyZWF0ZXMgdGhlIGVsZW1lbnQncyByZW5kZXJSb290LCBzZXRzIHVwXG4gICAgICogZWxlbWVudCBzdHlsaW5nLCBhbmQgZW5hYmxlcyB1cGRhdGluZy5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gY3JlYXRlIHJlbmRlclJvb3QgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUm9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QgPSB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZVVwZGF0aW5nKHRydWUpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBmaW5hbCBhbmQgbm90IG92ZXJyaWRkZW4uIEl0IGlzXG4gICAgICogb3ZlcnJpZGRlbiBvbiB0aGUgZWxlbWVudCBpbnN0YW5jZSB3aXRoIGEgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyB0aGUgZmlyc3RcbiAgICAgKiB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBlbmFibGVVcGRhdGluZyhfcmVxdWVzdGVkVXBkYXRlKSB7IH1cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAgICogcmVzZXJ2aW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBtYWtpbmcgbm9uLWJyZWFraW5nIGZlYXR1cmUgYWRkaXRpb25zXG4gICAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3REaXNjb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemVzIHByb3BlcnR5IHZhbHVlcyB3aGVuIGF0dHJpYnV0ZXMgY2hhbmdlLlxuICAgICAqXG4gICAgICogU3BlY2lmaWNhbGx5LCB3aGVuIGFuIGF0dHJpYnV0ZSBpcyBzZXQsIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnR5IGlzIHNldC5cbiAgICAgKiBZb3Ugc2hvdWxkIHJhcmVseSBuZWVkIHRvIGltcGxlbWVudCB0aGlzIGNhbGxiYWNrLiBJZiB0aGlzIG1ldGhvZCBpc1xuICAgICAqIG92ZXJyaWRkZW4sIGBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgX29sZCwgdmFsdWUpYCBtdXN0IGJlXG4gICAgICogY2FsbGVkLlxuICAgICAqXG4gICAgICogU2VlIFt1c2luZyB0aGUgbGlmZWN5Y2xlIGNhbGxiYWNrc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvV2ViX0NvbXBvbmVudHMvVXNpbmdfY3VzdG9tX2VsZW1lbnRzI3VzaW5nX3RoZV9saWZlY3ljbGVfY2FsbGJhY2tzKVxuICAgICAqIG9uIE1ETiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuXG4gICAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgX29sZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBfX3Byb3BlcnR5VG9BdHRyaWJ1dGUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmNvbnN0cnVjdG9yLl9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gKChfYSA9IG9wdGlvbnMuY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9BdHRyaWJ1dGUpICE9PVxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5jb252ZXJ0ZXJcbiAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb252ZXJ0ZXI7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBjb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMudHlwZSk7XG4gICAgICAgICAgICBpZiAoREVWX01PREUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKCdtaWdyYXRpb24nKSA+PSAwICYmXG4gICAgICAgICAgICAgICAgYXR0clZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJ3VuZGVmaW5lZC1hdHRyaWJ1dGUtdmFsdWUnLCBgVGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlICR7bmFtZX0gcHJvcGVydHkgaXMgYCArXG4gICAgICAgICAgICAgICAgICAgIGB1bmRlZmluZWQgb24gZWxlbWVudCAke3RoaXMubG9jYWxOYW1lfS4gVGhlIGF0dHJpYnV0ZSB3aWxsIGJlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgcmVtb3ZlZCwgYnV0IGluIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIFxcYFJlYWN0aXZlRWxlbWVudFxcYCwgYCArXG4gICAgICAgICAgICAgICAgICAgIGB0aGUgYXR0cmlidXRlIHdvdWxkIG5vdCBoYXZlIGNoYW5nZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcmFjayBpZiB0aGUgcHJvcGVydHkgaXMgYmVpbmcgcmVmbGVjdGVkIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBwcm9wZXJ0eSBhZ2FpbiB2aWEgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuIE5vdGU6XG4gICAgICAgICAgICAvLyAxLiB0aGlzIHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IHRoZSBjYWxsYmFjayBpcyBzeW5jaHJvbm91cy5cbiAgICAgICAgICAgIC8vIDIuIHdpbGwgYmVoYXZlIGluY29ycmVjdGx5IGlmIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGluIHRoZSByZWFjdGlvblxuICAgICAgICAgICAgLy8gc3RhY2sgYXQgdGltZSBvZiBjYWxsaW5nLiBIb3dldmVyLCBzaW5jZSB3ZSBwcm9jZXNzIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIC8vIGluIGB1cGRhdGVgIHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSAob3IgYW4gZXh0cmVtZSBjb3JuZXIgY2FzZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSdkIGxpa2UgdG8gZGlzY292ZXIpLlxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChhdHRyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgLy8gTm90ZSwgaGludCB0aGlzIGFzIGFuIGBBdHRyaWJ1dGVNYXBgIHNvIGNsb3N1cmUgY2xlYXJseSB1bmRlcnN0YW5kc1xuICAgICAgICAvLyB0aGUgdHlwZTsgaXQgaGFzIGlzc3VlcyB3aXRoIHRyYWNraW5nIHR5cGVzIHRocm91Z2ggc3RhdGljc1xuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGN0b3IuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLmdldChuYW1lKTtcbiAgICAgICAgLy8gVXNlIHRyYWNraW5nIGluZm8gdG8gYXZvaWQgcmVmbGVjdGluZyBhIHByb3BlcnR5IHZhbHVlIHRvIGFuIGF0dHJpYnV0ZVxuICAgICAgICAvLyBpZiBpdCB3YXMganVzdCBzZXQgYmVjYXVzZSB0aGUgYXR0cmlidXRlIGNoYW5nZWQuXG4gICAgICAgIGlmIChwcm9wTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IHByb3BOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMocHJvcE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gdHlwZW9mIG9wdGlvbnMuY29udmVydGVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyB7IGZyb21BdHRyaWJ1dGU6IG9wdGlvbnMuY29udmVydGVyIH1cbiAgICAgICAgICAgICAgICA6ICgoX2EgPSBvcHRpb25zLmNvbnZlcnRlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZyb21BdHRyaWJ1dGUpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmNvbnZlcnRlclxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb252ZXJ0ZXI7XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBwcm9wTmFtZTtcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gY29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMudHlwZVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhbiB1cGRhdGUgd2hpY2ggaXMgcHJvY2Vzc2VkIGFzeW5jaHJvbm91c2x5LiBUaGlzIHNob3VsZCBiZSBjYWxsZWRcbiAgICAgKiB3aGVuIGFuIGVsZW1lbnQgc2hvdWxkIHVwZGF0ZSBiYXNlZCBvbiBzb21lIHN0YXRlIG5vdCB0cmlnZ2VyZWQgYnkgc2V0dGluZ1xuICAgICAqIGEgcmVhY3RpdmUgcHJvcGVydHkuIEluIHRoaXMgY2FzZSwgcGFzcyBubyBhcmd1bWVudHMuIEl0IHNob3VsZCBhbHNvIGJlXG4gICAgICogY2FsbGVkIHdoZW4gbWFudWFsbHkgaW1wbGVtZW50aW5nIGEgcHJvcGVydHkgc2V0dGVyLiBJbiB0aGlzIGNhc2UsIHBhc3MgdGhlXG4gICAgICogcHJvcGVydHkgYG5hbWVgIGFuZCBgb2xkVmFsdWVgIHRvIGVuc3VyZSB0aGF0IGFueSBjb25maWd1cmVkIHByb3BlcnR5XG4gICAgICogb3B0aW9ucyBhcmUgaG9ub3JlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZSBvbGQgdmFsdWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvcHRpb25zIHByb3BlcnR5IG9wdGlvbnMgdG8gdXNlIGluc3RlYWQgb2YgdGhlIHByZXZpb3VzbHlcbiAgICAgKiAgICAgY29uZmlndXJlZCBvcHRpb25zXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICByZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBzaG91bGRSZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHByb3BlcnR5IGtleSwgcGVyZm9ybSBwcm9wZXJ0eSB1cGRhdGUgc3RlcHMuXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPVxuICAgICAgICAgICAgICAgIG9wdGlvbnMgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBoYXNDaGFuZ2VkID0gb3B0aW9ucy5oYXNDaGFuZ2VkIHx8IG5vdEVxdWFsO1xuICAgICAgICAgICAgaWYgKGhhc0NoYW5nZWQodGhpc1tuYW1lXSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5zZXQobmFtZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gcmVmbGVjdGluZyBwcm9wZXJ0aWVzIHNldC5cbiAgICAgICAgICAgICAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IGV2ZXJ5IGNoYW5nZSBoYXMgYSBjaGFuY2UgdG8gYWRkIHRoZVxuICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvIGBfcmVmbGVjdGluZ1Byb3BlcnRpZXNgLiBUaGlzIGVuc3VyZXMgc2V0dGluZ1xuICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBYm9ydCB0aGUgcmVxdWVzdCBpZiB0aGUgcHJvcGVydHkgc2hvdWxkIG5vdCBiZSBjb25zaWRlcmVkIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiYgc2hvdWxkUmVxdWVzdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSB0aGlzLl9fZW5xdWV1ZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgbm8gbG9uZ2VyIHJldHVybnMgYSBwcm9taXNlLCBpbiBkZXYgbW9kZSB3ZSByZXR1cm4gYVxuICAgICAgICAvLyB0aGVuYWJsZSB3aGljaCB3YXJucyBpZiBpdCdzIGNhbGxlZC5cbiAgICAgICAgcmV0dXJuIERFVl9NT0RFXG4gICAgICAgICAgICA/IHJlcXVlc3RVcGRhdGVUaGVuYWJsZSh0aGlzLmxvY2FsTmFtZSlcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBlbGVtZW50IHRvIGFzeW5jaHJvbm91c2x5IHVwZGF0ZS5cbiAgICAgKi9cbiAgICBhc3luYyBfX2VucXVldWVVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBhbnkgcHJldmlvdXMgdXBkYXRlIGhhcyByZXNvbHZlZCBiZWZvcmUgdXBkYXRpbmcuXG4gICAgICAgICAgICAvLyBUaGlzIGBhd2FpdGAgYWxzbyBlbnN1cmVzIHRoYXQgcHJvcGVydHkgY2hhbmdlcyBhcmUgYmF0Y2hlZC5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBSZWZpcmUgYW55IHByZXZpb3VzIGVycm9ycyBhc3luYyBzbyB0aGV5IGRvIG5vdCBkaXNydXB0IHRoZSB1cGRhdGVcbiAgICAgICAgICAgIC8vIGN5Y2xlLiBFcnJvcnMgYXJlIHJlZmlyZWQgc28gZGV2ZWxvcGVycyBoYXZlIGEgY2hhbmNlIHRvIG9ic2VydmVcbiAgICAgICAgICAgIC8vIHRoZW0sIGFuZCB0aGlzIGNhbiBiZSBkb25lIGJ5IGltcGxlbWVudGluZ1xuICAgICAgICAgICAgLy8gYHdpbmRvdy5vbnVuaGFuZGxlZHJlamVjdGlvbmAuXG4gICAgICAgICAgICBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICAgIC8vIElmIGBzY2hlZHVsZVVwZGF0ZWAgcmV0dXJucyBhIFByb21pc2UsIHdlIGF3YWl0IGl0LiBUaGlzIGlzIGRvbmUgdG9cbiAgICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0aGlzLmlzVXBkYXRlUGVuZGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGFuIGVsZW1lbnQgdXBkYXRlLiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGVcbiAgICAgKiB0aW1pbmcgb2YgdXBkYXRlcyBieSByZXR1cm5pbmcgYSBQcm9taXNlLiBUaGUgdXBkYXRlIHdpbGwgYXdhaXQgdGhlXG4gICAgICogcmV0dXJuZWQgUHJvbWlzZSwgYW5kIHlvdSBzaG91bGQgcmVzb2x2ZSB0aGUgUHJvbWlzZSB0byBhbGxvdyB0aGUgdXBkYXRlXG4gICAgICogdG8gcHJvY2VlZC4gSWYgdGhpcyBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnNjaGVkdWxlVXBkYXRlKClgXG4gICAgICogbXVzdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBGb3IgaW5zdGFuY2UsIHRvIHNjaGVkdWxlIHVwZGF0ZXMgdG8gb2NjdXIganVzdCBiZWZvcmUgdGhlIG5leHQgZnJhbWU6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIG92ZXJyaWRlIHByb3RlY3RlZCBhc3luYyBzY2hlZHVsZVVwZGF0ZSgpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAgICogICBzdXBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtVXBkYXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIGVsZW1lbnQgdXBkYXRlLiBOb3RlLCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGVcbiAgICAgKiB1cGRhdGUsIGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgd2lsbCBub3QgYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogQ2FsbCBgcGVyZm9ybVVwZGF0ZSgpYCB0byBpbW1lZGlhdGVseSBwcm9jZXNzIGEgcGVuZGluZyB1cGRhdGUuIFRoaXMgc2hvdWxkXG4gICAgICogZ2VuZXJhbGx5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpdCBjYW4gYmUgZG9uZSBpbiByYXJlIGNhc2VzIHdoZW4geW91IG5lZWQgdG9cbiAgICAgKiB1cGRhdGUgc3luY2hyb25vdXNseS5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRvIGVuc3VyZSBgcGVyZm9ybVVwZGF0ZSgpYCBzeW5jaHJvbm91c2x5IGNvbXBsZXRlcyBhIHBlbmRpbmcgdXBkYXRlLFxuICAgICAqIGl0IHNob3VsZCBub3QgYmUgb3ZlcnJpZGRlbi4gSW4gTGl0RWxlbWVudCAyLnggaXQgd2FzIHN1Z2dlc3RlZCB0byBvdmVycmlkZVxuICAgICAqIGBwZXJmb3JtVXBkYXRlKClgIHRvIGFsc28gY3VzdG9taXppbmcgdXBkYXRlIHNjaGVkdWxpbmcuIEluc3RlYWQsIHlvdSBzaG91bGQgbm93XG4gICAgICogb3ZlcnJpZGUgYHNjaGVkdWxlVXBkYXRlKClgLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBMaXRFbGVtZW50IDIueCxcbiAgICAgKiBzY2hlZHVsaW5nIHVwZGF0ZXMgdmlhIGBwZXJmb3JtVXBkYXRlKClgIGNvbnRpbnVlcyB0byB3b3JrLCBidXQgd2lsbCBtYWtlXG4gICAgICogYWxzbyBjYWxsaW5nIGBwZXJmb3JtVXBkYXRlKClgIHRvIHN5bmNocm9ub3VzbHkgcHJvY2VzcyB1cGRhdGVzIGRpZmZpY3VsdC5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgcGVyZm9ybVVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gQWJvcnQgYW55IHVwZGF0ZSBpZiBvbmUgaXMgbm90IHBlbmRpbmcgd2hlbiB0aGlzIGlzIGNhbGxlZC5cbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIGBwZXJmb3JtVXBkYXRlYCBpcyBjYWxsZWQgZWFybHkgdG8gXCJmbHVzaFwiXG4gICAgICAgIC8vIHRoZSB1cGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoeyBraW5kOiAndXBkYXRlJyB9KTtcbiAgICAgICAgLy8gY3JlYXRlIHJlbmRlclJvb3QgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIC8vIFByb2R1Y2Ugd2FybmluZyBpZiBhbnkgY2xhc3MgcHJvcGVydGllcyBhcmUgc2hhZG93ZWQgYnkgY2xhc3MgZmllbGRzXG4gICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dlZFByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkgJiYgISgoX2EgPSB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaGFzKHApKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93ZWRQcm9wZXJ0aWVzLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2hhZG93ZWRQcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBvbiBlbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9IHdpbGwgbm90IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYHRyaWdnZXIgdXBkYXRlcyBhcyBleHBlY3RlZCBiZWNhdXNlIHRoZXkgYXJlIHNldCB1c2luZyBjbGFzcyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBmaWVsZHM6ICR7c2hhZG93ZWRQcm9wZXJ0aWVzLmpvaW4oJywgJyl9LiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBOYXRpdmUgY2xhc3MgZmllbGRzIGFuZCBzb21lIGNvbXBpbGVkIG91dHB1dCB3aWxsIG92ZXJ3cml0ZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhY2Nlc3NvcnMgdXNlZCBmb3IgZGV0ZWN0aW5nIGNoYW5nZXMuIFNlZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwczovL2xpdC5kZXYvbXNnL2NsYXNzLWZpZWxkLXNoYWRvd2luZyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWl4aW4gaW5zdGFuY2UgcHJvcGVydGllcyBvbmNlLCBpZiB0aGV5IGV4aXN0LlxuICAgICAgICBpZiAodGhpcy5fX2luc3RhbmNlUHJvcGVydGllcykge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiAodGhpc1twXSA9IHYpKTtcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjaGFuZ2VkUHJvcGVydGllcyA9IHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0VXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX21hcmtVcGRhdGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCBmcm9tIHJ1bm5pbmcgd2hlbiB0aGVyZSdzIGFuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBFbnN1cmUgZWxlbWVudCBjYW4gYWNjZXB0IGFkZGl0aW9uYWwgdXBkYXRlcyBhZnRlciBhbiBleGNlcHRpb24uXG4gICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHVwZGF0ZSBpcyBubyBsb25nZXIgY29uc2lkZXJlZCBwZW5kaW5nIGFuZCBmdXJ0aGVyIHVwZGF0ZXMgYXJlIG5vdyBhbGxvd2VkLlxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl8kZGlkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIGJlZm9yZSBgdXBkYXRlKClgIHRvIGNvbXB1dGUgdmFsdWVzIG5lZWRlZCBkdXJpbmcgdGhlIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEltcGxlbWVudCBgd2lsbFVwZGF0ZWAgdG8gY29tcHV0ZSBwcm9wZXJ0eSB2YWx1ZXMgdGhhdCBkZXBlbmQgb24gb3RoZXJcbiAgICAgKiBwcm9wZXJ0aWVzIGFuZCBhcmUgdXNlZCBpbiB0aGUgcmVzdCBvZiB0aGUgdXBkYXRlIHByb2Nlc3MuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgKiAgIC8vIG9ubHkgbmVlZCB0byBjaGVjayBjaGFuZ2VkIHByb3BlcnRpZXMgZm9yIGFuIGV4cGVuc2l2ZSBjb21wdXRhdGlvbi5cbiAgICAgKiAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2ZpcnN0TmFtZScpIHx8IGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnbGFzdE5hbWUnKSkge1xuICAgICAqICAgICB0aGlzLnNoYSA9IGNvbXB1dGVTSEEoYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gKTtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiByZW5kZXIoKSB7XG4gICAgICogICByZXR1cm4gaHRtbGBTSEE6ICR7dGhpcy5zaGF9YDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHdpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbiAgICAvLyBOb3RlLCB0aGlzIGlzIGFuIG92ZXJyaWRlIHBvaW50IGZvciBwb2x5ZmlsbC1zdXBwb3J0LlxuICAgIC8vIEBpbnRlcm5hbFxuICAgIF8kZGlkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ2NoYW5nZS1pbi11cGRhdGUnKSA+PSAwKSB7XG4gICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJ2NoYW5nZS1pbi11cGRhdGUnLCBgRWxlbWVudCAke3RoaXMubG9jYWxOYW1lfSBzY2hlZHVsZWQgYW4gdXBkYXRlIGAgK1xuICAgICAgICAgICAgICAgIGAoZ2VuZXJhbGx5IGJlY2F1c2UgYSBwcm9wZXJ0eSB3YXMgc2V0KSBgICtcbiAgICAgICAgICAgICAgICBgYWZ0ZXIgYW4gdXBkYXRlIGNvbXBsZXRlZCwgY2F1c2luZyBhIG5ldyB1cGRhdGUgdG8gYmUgc2NoZWR1bGVkLiBgICtcbiAgICAgICAgICAgICAgICBgVGhpcyBpcyBpbmVmZmljaWVudCBhbmQgc2hvdWxkIGJlIGF2b2lkZWQgdW5sZXNzIHRoZSBuZXh0IHVwZGF0ZSBgICtcbiAgICAgICAgICAgICAgICBgY2FuIG9ubHkgYmUgc2NoZWR1bGVkIGFzIGEgc2lkZSBlZmZlY3Qgb2YgdGhlIHByZXZpb3VzIHVwZGF0ZS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfX21hcmtVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZWxlbWVudCBoYXMgY29tcGxldGVkIHVwZGF0aW5nLlxuICAgICAqIFRoZSBQcm9taXNlIHZhbHVlIGlzIGEgYm9vbGVhbiB0aGF0IGlzIGB0cnVlYCBpZiB0aGUgZWxlbWVudCBjb21wbGV0ZWQgdGhlXG4gICAgICogdXBkYXRlIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS4gVGhlIFByb21pc2UgcmVzdWx0IGlzIGBmYWxzZWAgaWZcbiAgICAgKiBhIHByb3BlcnR5IHdhcyBzZXQgaW5zaWRlIGB1cGRhdGVkKClgLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgYW5cbiAgICAgKiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgdGhlIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRvIGF3YWl0IGFkZGl0aW9uYWwgYXN5bmNocm9ub3VzIHdvcmssIG92ZXJyaWRlIHRoZSBgZ2V0VXBkYXRlQ29tcGxldGVgXG4gICAgICogbWV0aG9kLiBGb3IgZXhhbXBsZSwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCB0byBhd2FpdCBhIHJlbmRlcmVkIGVsZW1lbnRcbiAgICAgKiBiZWZvcmUgZnVsZmlsbGluZyB0aGlzIFByb21pc2UuIFRvIGRvIHRoaXMsIGZpcnN0IGF3YWl0XG4gICAgICogYHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKClgLCB0aGVuIGFueSBzdWJzZXF1ZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiBBIHByb21pc2Ugb2YgYSBib29sZWFuIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgdXBkYXRlIGNvbXBsZXRlZFxuICAgICAqICAgICB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBnZXQgdXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHBvaW50IGZvciB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBwcm9taXNlLlxuICAgICAqXG4gICAgICogSXQgaXMgbm90IHNhZmUgdG8gb3ZlcnJpZGUgdGhlIGB1cGRhdGVDb21wbGV0ZWAgZ2V0dGVyIGRpcmVjdGx5IGR1ZSB0byBhXG4gICAgICogbGltaXRhdGlvbiBpbiBUeXBlU2NyaXB0IHdoaWNoIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBjYWxsIGFcbiAgICAgKiBzdXBlcmNsYXNzIGdldHRlciAoZS5nLiBgc3VwZXIudXBkYXRlQ29tcGxldGUudGhlbiguLi4pYCkgd2hlbiB0aGUgdGFyZ2V0XG4gICAgICogbGFuZ3VhZ2UgaXMgRVM1IChodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMzOCkuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIG92ZXJyaWRkZW4gaW5zdGVhZC4gRm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgb3ZlcnJpZGUgYXN5bmMgZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICogICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgICogICAgIGF3YWl0IHRoaXMuX215Q2hpbGQudXBkYXRlQ29tcGxldGU7XG4gICAgICogICAgIHJldHVybiByZXN1bHQ7XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHJldHVybiBBIHByb21pc2Ugb2YgYSBib29sZWFuIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgdXBkYXRlIGNvbXBsZXRlZFxuICAgICAqICAgICB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCBgdXBkYXRlKClgIHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCByZXF1ZXN0c1xuICAgICAqIGFuIHVwZGF0ZS4gQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgYWx3YXlzIHJldHVybnMgYHRydWVgLCBidXQgdGhpcyBjYW4gYmVcbiAgICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBzaG91bGRVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlcy5cbiAgICAgKiBJdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byByZW5kZXIgYW5kIGtlZXAgdXBkYXRlZCBlbGVtZW50IERPTS5cbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgICAqIGFub3RoZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvclxuICAgICAgICAgICAgLy8gbG9vcHMgZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHRoaXMuX19wcm9wZXJ0eVRvQXR0cmlidXRlKGssIHRoaXNba10sIHYpKTtcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuZXZlciB0aGUgZWxlbWVudCBpcyB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybVxuICAgICAqIHBvc3QtdXBkYXRpbmcgdGFza3MgdmlhIERPTSBBUElzLCBmb3IgZXhhbXBsZSwgZm9jdXNpbmcgYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZmlyc3QgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm0gb25lIHRpbWVcbiAgICAgKiB3b3JrIG9uIHRoZSBlbGVtZW50IGFmdGVyIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogZmlyc3RVcGRhdGVkKCkge1xuICAgICAqICAgdGhpcy5yZW5kZXJSb290LmdldEVsZW1lbnRCeUlkKCdteS10ZXh0LWFyZWEnKS5mb2N1cygpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGZpcnN0VXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxufVxuX2UgPSBmaW5hbGl6ZWQ7XG4vKipcbiAqIE1hcmtzIGNsYXNzIGFzIGhhdmluZyBmaW5pc2hlZCBjcmVhdGluZyBwcm9wZXJ0aWVzLlxuICovXG5SZWFjdGl2ZUVsZW1lbnRbX2VdID0gdHJ1ZTtcbi8qKlxuICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgYW55IHN1cGVyY2xhc3MgcHJvcGVydGllcy5cbiAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gKi9cblJlYWN0aXZlRWxlbWVudC5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbi8qKlxuICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBzdHlsZXMuXG4gKiBDcmVhdGVkIGxhemlseSBvbiB1c2VyIHN1YmNsYXNzZXMgd2hlbiBmaW5hbGl6aW5nIHRoZSBjbGFzcy5cbiAqIEBub2NvbGxhcHNlXG4gKiBAY2F0ZWdvcnkgc3R5bGVzXG4gKi9cblJlYWN0aXZlRWxlbWVudC5lbGVtZW50U3R5bGVzID0gW107XG4vKipcbiAqIE9wdGlvbnMgdXNlZCB3aGVuIGNhbGxpbmcgYGF0dGFjaFNoYWRvd2AuIFNldCB0aGlzIHByb3BlcnR5IHRvIGN1c3RvbWl6ZVxuICogdGhlIG9wdGlvbnMgZm9yIHRoZSBzaGFkb3dSb290OyBmb3IgZXhhbXBsZSwgdG8gY3JlYXRlIGEgY2xvc2VkXG4gKiBzaGFkb3dSb290OiBge21vZGU6ICdjbG9zZWQnfWAuXG4gKlxuICogTm90ZSwgdGhlc2Ugb3B0aW9ucyBhcmUgdXNlZCBpbiBgY3JlYXRlUmVuZGVyUm9vdGAuIElmIHRoaXMgbWV0aG9kXG4gKiBpcyBjdXN0b21pemVkLCBvcHRpb25zIHNob3VsZCBiZSByZXNwZWN0ZWQgaWYgcG9zc2libGUuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICovXG5SZWFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdE9wdGlvbnMgPSB7IG1vZGU6ICdvcGVuJyB9O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxucG9seWZpbGxTdXBwb3J0ID09PSBudWxsIHx8IHBvbHlmaWxsU3VwcG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9seWZpbGxTdXBwb3J0KHsgUmVhY3RpdmVFbGVtZW50IH0pO1xuLy8gRGV2IG1vZGUgd2FybmluZ3MuLi5cbmlmIChERVZfTU9ERSkge1xuICAgIC8vIERlZmF1bHQgd2FybmluZyBzZXQuXG4gICAgUmVhY3RpdmVFbGVtZW50LmVuYWJsZWRXYXJuaW5ncyA9IFsnY2hhbmdlLWluLXVwZGF0ZSddO1xuICAgIGNvbnN0IGVuc3VyZU93bldhcm5pbmdzID0gZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgICAgaWYgKCFjdG9yLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2VuYWJsZWRXYXJuaW5ncycsIGN0b3IpKSkge1xuICAgICAgICAgICAgY3Rvci5lbmFibGVkV2FybmluZ3MgPSBjdG9yLmVuYWJsZWRXYXJuaW5ncy5zbGljZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFdhcm5pbmdzLnB1c2god2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aXZlRWxlbWVudC5kaXNhYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBjb25zdCBpID0gdGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKTtcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgUmVhY3RpdmVFbGVtZW50IHVzYWdlLlxuKChfZCA9IGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogKGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucyA9IFtdKSkucHVzaCgnMS42LjMnKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWwucmVhY3RpdmVFbGVtZW50VmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICAgIGlzc3VlV2FybmluZygnbXVsdGlwbGUtdmVyc2lvbnMnLCBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBgICtcbiAgICAgICAgYGlzIG5vdCByZWNvbW1lbmRlZC5gKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aXZlLWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0ICogZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvYmFzZS5qcyc7XG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9jdXN0b20tZWxlbWVudC5qcyc7XG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qcyc7XG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9zdGF0ZS5qcyc7XG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9ldmVudC1vcHRpb25zLmpzJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LmpzJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFsbC5qcyc7XG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3luYy5qcyc7XG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcyc7XG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1ub2Rlcy5qcyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvcmF0b3JzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuZXhwb3J0ICogZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJ2xpdC1odG1sJztcbmV4cG9ydCAqIGZyb20gJy4vbGl0LWVsZW1lbnQuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3JzLmpzJztcbmNvbnNvbGUud2FybihcIlRoZSBtYWluICdsaXQtZWxlbWVudCcgbW9kdWxlIGVudHJ5cG9pbnQgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVwZGF0ZSBcIiArXG4gICAgXCJ5b3VyIGltcG9ydHMgdG8gdXNlIHRoZSAnbGl0JyBwYWNrYWdlOiAnbGl0JyBhbmQgJ2xpdC9kZWNvcmF0b3JzLnRzJyBcIiArXG4gICAgXCJvciBpbXBvcnQgZnJvbSAnbGl0LWVsZW1lbnQvbGl0LWVsZW1lbnQudHMnLiBTZWUgXCIgK1xuICAgICdodHRwczovL2xpdC5kZXYvbXNnL2RlcHJlY2F0ZWQtaW1wb3J0LXBhdGggZm9yIG1vcmUgaW5mb3JtYXRpb24uJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciBfYSwgX2IsIF9jO1xuLyoqXG4gKiBUaGUgbWFpbiBMaXRFbGVtZW50IG1vZHVsZSwgd2hpY2ggZGVmaW5lcyB0aGUge0BsaW5rY29kZSBMaXRFbGVtZW50fSBiYXNlXG4gKiBjbGFzcyBhbmQgcmVsYXRlZCBBUElzLlxuICpcbiAqICBMaXRFbGVtZW50IGNvbXBvbmVudHMgY2FuIGRlZmluZSBhIHRlbXBsYXRlIGFuZCBhIHNldCBvZiBvYnNlcnZlZFxuICogcHJvcGVydGllcy4gQ2hhbmdpbmcgYW4gb2JzZXJ2ZWQgcHJvcGVydHkgdHJpZ2dlcnMgYSByZS1yZW5kZXIgb2YgdGhlXG4gKiBlbGVtZW50LlxuICpcbiAqICBJbXBvcnQge0BsaW5rY29kZSBMaXRFbGVtZW50fSBhbmQge0BsaW5rY29kZSBodG1sfSBmcm9tIHRoaXMgbW9kdWxlIHRvXG4gKiBjcmVhdGUgYSBjb21wb25lbnQ6XG4gKlxuICogIGBgYGpzXG4gKiBpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWx9IGZyb20gJ2xpdC1lbGVtZW50JztcbiAqXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqXG4gKiAgIC8vIERlY2xhcmUgb2JzZXJ2ZWQgcHJvcGVydGllc1xuICogICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gKiAgICAgcmV0dXJuIHtcbiAqICAgICAgIGFkamVjdGl2ZToge31cbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIHRoaXMuYWRqZWN0aXZlID0gJ2F3ZXNvbWUnO1xuICogICB9XG4gKlxuICogICAvLyBEZWZpbmUgdGhlIGVsZW1lbnQncyB0ZW1wbGF0ZVxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgPHA+eW91ciAke2FkamVjdGl2ZX0gdGVtcGxhdGUgaGVyZTwvcD5gO1xuICogICB9XG4gKiB9XG4gKlxuICogY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAqIGBgYFxuICpcbiAqIGBMaXRFbGVtZW50YCBleHRlbmRzIHtAbGlua2NvZGUgUmVhY3RpdmVFbGVtZW50fSBhbmQgYWRkcyBsaXQtaHRtbFxuICogdGVtcGxhdGluZy4gVGhlIGBSZWFjdGl2ZUVsZW1lbnRgIGNsYXNzIGlzIHByb3ZpZGVkIGZvciB1c2VycyB0aGF0IHdhbnQgdG9cbiAqIGJ1aWxkIHRoZWlyIG93biBjdXN0b20gZWxlbWVudCBiYXNlIGNsYXNzZXMgdGhhdCBkb24ndCB1c2UgbGl0LWh0bWwuXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5pbXBvcnQgeyByZW5kZXIsIG5vQ2hhbmdlIH0gZnJvbSAnbGl0LWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJ2xpdC1odG1sJztcbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBleHBvcnQgUmVhY3RpdmVFbGVtZW50IGFzIFVwZGF0aW5nRWxlbWVudC4gTm90ZSxcbi8vIElFIHRyYW5zcGlsYXRpb24gcmVxdWlyZXMgZXhwb3J0aW5nIGxpa2UgdGhpcy5cbmV4cG9ydCBjb25zdCBVcGRhdGluZ0VsZW1lbnQgPSBSZWFjdGl2ZUVsZW1lbnQ7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5sZXQgaXNzdWVXYXJuaW5nO1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRW5zdXJlIHdhcm5pbmdzIGFyZSBpc3N1ZWQgb25seSAxeCwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXRcbiAgICAvLyBhcmUgbG9hZGVkLlxuICAgIGNvbnN0IGlzc3VlZFdhcm5pbmdzID0gKChfYSA9IGdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzID0gbmV3IFNldCgpKSk7XG4gICAgLy8gSXNzdWUgYSB3YXJuaW5nLCBpZiB3ZSBoYXZlbid0IGFscmVhZHkuXG4gICAgaXNzdWVXYXJuaW5nID0gKGNvZGUsIHdhcm5pbmcpID0+IHtcbiAgICAgICAgd2FybmluZyArPSBgIFNlZSBodHRwczovL2xpdC5kZXYvbXNnLyR7Y29kZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgaWYgKCFpc3N1ZWRXYXJuaW5ncy5oYXMod2FybmluZykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICAgICAgICAgIGlzc3VlZFdhcm5pbmdzLmFkZCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB0aGF0IG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLCBhbmRcbiAqIHJlbmRlcnMgYSBsaXQtaHRtbCB0ZW1wbGF0ZS5cbiAqXG4gKiBUbyBkZWZpbmUgYSBjb21wb25lbnQsIHN1YmNsYXNzIGBMaXRFbGVtZW50YCBhbmQgaW1wbGVtZW50IGFcbiAqIGByZW5kZXJgIG1ldGhvZCB0byBwcm92aWRlIHRoZSBjb21wb25lbnQncyB0ZW1wbGF0ZS4gRGVmaW5lIHByb3BlcnRpZXNcbiAqIHVzaW5nIHRoZSB7QGxpbmtjb2RlIExpdEVsZW1lbnQucHJvcGVydGllcyBwcm9wZXJ0aWVzfSBwcm9wZXJ0eSBvciB0aGVcbiAqIHtAbGlua2NvZGUgcHJvcGVydHl9IGRlY29yYXRvci5cbiAqL1xuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnQgZXh0ZW5kcyBSZWFjdGl2ZUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJPcHRpb25zID0geyBob3N0OiB0aGlzIH07XG4gICAgICAgIHRoaXMuX19jaGlsZFBhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYjtcbiAgICAgICAgY29uc3QgcmVuZGVyUm9vdCA9IHN1cGVyLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgLy8gV2hlbiBhZG9wdGVkU3R5bGVTaGVldHMgYXJlIHNoaW1tZWQsIHRoZXkgYXJlIGluc2VydGVkIGludG8gdGhlXG4gICAgICAgIC8vIHNoYWRvd1Jvb3QgYnkgY3JlYXRlUmVuZGVyUm9vdC4gQWRqdXN0IHRoZSByZW5kZXJCZWZvcmUgbm9kZSBzbyB0aGF0XG4gICAgICAgIC8vIGFueSBzdHlsZXMgaW4gTGl0IGNvbnRlbnQgcmVuZGVyIGJlZm9yZSBhZG9wdGVkU3R5bGVTaGVldHMuIFRoaXMgaXNcbiAgICAgICAgLy8gaW1wb3J0YW50IHNvIHRoYXQgYWRvcHRlZFN0eWxlU2hlZXRzIGhhdmUgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICAgICAgICAvLyB0aGUgc2hhZG93Um9vdC5cbiAgICAgICAgKF9hID0gKF9iID0gdGhpcy5yZW5kZXJPcHRpb25zKS5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChfYi5yZW5kZXJCZWZvcmUgPSByZW5kZXJSb290LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gcmVuZGVyUm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXNcbiAgICAgKiBhbmQgY2FsbHMgYHJlbmRlcmAgdG8gcmVuZGVyIERPTSB2aWEgbGl0LWh0bWwuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGVcbiAgICAgKiB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXIgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQHBhcmFtIGNoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgLy8gU2V0dGluZyBwcm9wZXJ0aWVzIGluIGByZW5kZXJgIHNob3VsZCBub3QgdHJpZ2dlciBhbiB1cGRhdGUuIFNpbmNlXG4gICAgICAgIC8vIHVwZGF0ZXMgYXJlIGFsbG93ZWQgYWZ0ZXIgc3VwZXIudXBkYXRlLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGByZW5kZXJgXG4gICAgICAgIC8vIGJlZm9yZSB0aGF0LlxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlck9wdGlvbnMuaXNDb25uZWN0ZWQgPSB0aGlzLmlzQ29ubmVjdGVkO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIHRoaXMuX19jaGlsZFBhcnQgPSByZW5kZXIodmFsdWUsIHRoaXMucmVuZGVyUm9vdCwgdGhpcy5yZW5kZXJPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgICAqXG4gICAgICogSW4gYGNvbm5lY3RlZENhbGxiYWNrKClgIHlvdSBzaG91bGQgc2V0dXAgdGFza3MgdGhhdCBzaG91bGQgb25seSBvY2N1ciB3aGVuXG4gICAgICogdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC4gVGhlIG1vc3QgY29tbW9uIG9mIHRoZXNlIGlzXG4gICAgICogYWRkaW5nIGV2ZW50IGxpc3RlbmVycyB0byBub2RlcyBleHRlcm5hbCB0byB0aGUgZWxlbWVudCwgbGlrZSBhIGtleWRvd25cbiAgICAgKiBldmVudCBoYW5kbGVyIGFkZGVkIHRvIHRoZSB3aW5kb3cuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAqICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgKiAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlkb3duKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBUeXBpY2FsbHksIGFueXRoaW5nIGRvbmUgaW4gYGNvbm5lY3RlZENhbGxiYWNrKClgIHNob3VsZCBiZSB1bmRvbmUgd2hlbiB0aGVcbiAgICAgKiBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCwgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrKClgLlxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgZG9jdW1lbnQncyBET00uXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbGxiYWNrIGlzIHRoZSBtYWluIHNpZ25hbCB0byB0aGUgZWxlbWVudCB0aGF0IGl0IG1heSBubyBsb25nZXIgYmVcbiAgICAgKiB1c2VkLiBgZGlzY29ubmVjdGVkQ2FsbGJhY2soKWAgc2hvdWxkIGVuc3VyZSB0aGF0IG5vdGhpbmcgaXMgaG9sZGluZyBhXG4gICAgICogcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IChzdWNoIGFzIGV2ZW50IGxpc3RlbmVycyBhZGRlZCB0byBub2RlcyBleHRlcm5hbFxuICAgICAqIHRvIHRoZSBlbGVtZW50KSwgc28gdGhhdCBpdCBpcyBmcmVlIHRvIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgKiAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICogICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUtleWRvd24pO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEFuIGVsZW1lbnQgbWF5IGJlIHJlLWNvbm5lY3RlZCBhZnRlciBiZWluZyBkaXNjb25uZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NoaWxkUGFydCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldENvbm5lY3RlZChmYWxzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gZWFjaCB1cGRhdGUgdG8gcGVyZm9ybSByZW5kZXJpbmcgdGFza3MuIFRoaXMgbWV0aG9kIG1heSByZXR1cm5cbiAgICAgKiBhbnkgdmFsdWUgcmVuZGVyYWJsZSBieSBsaXQtaHRtbCdzIGBDaGlsZFBhcnRgIC0gdHlwaWNhbGx5IGFcbiAgICAgKiBgVGVtcGxhdGVSZXN1bHRgLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgICAqIHRoZSBlbGVtZW50IHRvIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhpcyBjbGFzcyBpcyBtYXJrZWQgYXMgYGZpbmFsaXplZGAgYXMgYW4gb3B0aW1pemF0aW9uIGVuc3VyaW5nXG4gKiBpdCB3aWxsIG5vdCBuZWVkbGVzc2x5IHRyeSB0byBgZmluYWxpemVgLlxuICpcbiAqIE5vdGUgdGhpcyBwcm9wZXJ0eSBuYW1lIGlzIGEgc3RyaW5nIHRvIHByZXZlbnQgYnJlYWtpbmcgQ2xvc3VyZSBKUyBDb21waWxlclxuICogb3B0aW1pemF0aW9ucy4gU2VlIEBsaXQvcmVhY3RpdmUtZWxlbWVudCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xuTGl0RWxlbWVudFsnZmluYWxpemVkJ10gPSB0cnVlO1xuLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbkxpdEVsZW1lbnRbJ18kbGl0RWxlbWVudCQnXSA9IHRydWU7XG4vLyBJbnN0YWxsIGh5ZHJhdGlvbiBpZiBhdmFpbGFibGVcbihfYiA9IGdsb2JhbFRoaXMubGl0RWxlbWVudEh5ZHJhdGVTdXBwb3J0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChnbG9iYWxUaGlzLCB7IExpdEVsZW1lbnQgfSk7XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5jb25zdCBwb2x5ZmlsbFN1cHBvcnQgPSBERVZfTU9ERVxuICAgID8gZ2xvYmFsVGhpcy5saXRFbGVtZW50UG9seWZpbGxTdXBwb3J0RGV2TW9kZVxuICAgIDogZ2xvYmFsVGhpcy5saXRFbGVtZW50UG9seWZpbGxTdXBwb3J0O1xucG9seWZpbGxTdXBwb3J0ID09PSBudWxsIHx8IHBvbHlmaWxsU3VwcG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9seWZpbGxTdXBwb3J0KHsgTGl0RWxlbWVudCB9KTtcbi8vIERFViBtb2RlIHdhcm5pbmdzXG5pZiAoREVWX01PREUpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4gICAgLy8gTm90ZSwgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBjbG9zdXJlIGNvbXBpbGF0aW9uLCB0aGlzIGFjY2Vzc1xuICAgIC8vIG5lZWRzIHRvIGJlIGFzIGEgc3RyaW5nIHByb3BlcnR5IGluZGV4LlxuICAgIExpdEVsZW1lbnRbJ2ZpbmFsaXplJ10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsaXplZCA9IFJlYWN0aXZlRWxlbWVudC5maW5hbGl6ZS5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAoIWZpbmFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdhcm5SZW1vdmVkT3JSZW5hbWVkID0gKG9iaiwgbmFtZSwgcmVuYW1lZCA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3Rvck5hbWUgPSAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJyA/IG9iaiA6IG9iai5jb25zdHJ1Y3RvcilcbiAgICAgICAgICAgICAgICAgICAgLm5hbWU7XG4gICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKHJlbmFtZWQgPyAncmVuYW1lZC1hcGknIDogJ3JlbW92ZWQtYXBpJywgYFxcYCR7bmFtZX1cXGAgaXMgaW1wbGVtZW50ZWQgb24gY2xhc3MgJHtjdG9yTmFtZX0uIEl0IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaGFzIGJlZW4gJHtyZW5hbWVkID8gJ3JlbmFtZWQnIDogJ3JlbW92ZWQnfSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGluIHRoaXMgdmVyc2lvbiBvZiBMaXRFbGVtZW50LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCh0aGlzLCAncmVuZGVyJyk7XG4gICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKHRoaXMsICdnZXRTdHlsZXMnLCB0cnVlKTtcbiAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQodGhpcy5wcm90b3R5cGUsICdhZG9wdFN0eWxlcycpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfJExFIG9iamVjdCBjb250YWluaW5nIHRob3NlIG1lbWJlcnMgKG9yXG4gKiBoZWxwZXIgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHByaXZhdGUgZmllbGRzIG9mIHRob3NlIG1lbWJlcnMpLCBhbmQgdGhlblxuICogcmUtZXhwb3J0IHRoZW0gZm9yIHVzZSBpbiBsaXQtc3NyLiBUaGlzIGtlZXBzIGxpdC1zc3IgYWdub3N0aWMgdG8gd2hldGhlciB0aGVcbiAqIGNsaWVudC1zaWRlIGNvZGUgaXMgYmVpbmcgdXNlZCBpbiBgZGV2YCBtb2RlIG9yIGBwcm9kYCBtb2RlLlxuICpcbiAqIFRoaXMgaGFzIGEgdW5pcXVlIG5hbWUsIHRvIGRpc2FtYmlndWF0ZSBpdCBmcm9tIHByaXZhdGUgZXhwb3J0cyBpblxuICogbGl0LWh0bWwsIHNpbmNlIHRoaXMgbW9kdWxlIHJlLWV4cG9ydHMgYWxsIG9mIGxpdC1odG1sLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBfJExFID0ge1xuICAgIF8kYXR0cmlidXRlVG9Qcm9wZXJ0eTogKGVsLCBuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgZWwuXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIF8kY2hhbmdlZFByb3BlcnRpZXM6IChlbCkgPT4gZWwuXyRjaGFuZ2VkUHJvcGVydGllcyxcbn07XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIExpdEVsZW1lbnQgdXNhZ2UuXG4oKF9jID0gZ2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IChnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucyA9IFtdKSkucHVzaCgnMy4zLjMnKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBMb2FkaW5nIG11bHRpcGxlIHZlcnNpb25zIGAgK1xuICAgICAgICBgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2Q7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5jb25zdCBFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MgPSB0cnVlO1xuY29uc3QgRU5BQkxFX1NIQURZRE9NX05PUEFUQ0ggPSB0cnVlO1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG4vLyBVc2Ugd2luZG93IGZvciBicm93c2VyIGJ1aWxkcyBiZWNhdXNlIElFMTEgZG9lc24ndCBoYXZlIGdsb2JhbFRoaXMuXG5jb25zdCBnbG9iYWwgPSBOT0RFX01PREUgPyBnbG9iYWxUaGlzIDogd2luZG93O1xuLyoqXG4gKiBVc2VmdWwgZm9yIHZpc3VhbGl6aW5nIGFuZCBsb2dnaW5nIGluc2lnaHRzIGludG8gd2hhdCB0aGUgTGl0IHRlbXBsYXRlIHN5c3RlbSBpcyBkb2luZy5cbiAqXG4gKiBDb21waWxlZCBvdXQgb2YgcHJvZCBtb2RlIGJ1aWxkcy5cbiAqL1xuY29uc3QgZGVidWdMb2dFdmVudCA9IERFVl9NT0RFXG4gICAgPyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkRW1pdCA9IGdsb2JhbFxuICAgICAgICAgICAgLmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cztcbiAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXQtZGVidWcnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IGV2ZW50LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIDogdW5kZWZpbmVkO1xuLy8gVXNlZCBmb3IgY29ubmVjdGluZyBiZWdpblJlbmRlciBhbmQgZW5kUmVuZGVyIGV2ZW50cyB3aGVuIHRoZXJlIGFyZSBuZXN0ZWRcbi8vIHJlbmRlcnMgd2hlbiBlcnJvcnMgYXJlIHRocm93biBwcmV2ZW50aW5nIGFuIGVuZFJlbmRlciBldmVudCBmcm9tIGJlaW5nXG4vLyBjYWxsZWQuXG5sZXQgZGVidWdMb2dSZW5kZXJJZCA9IDA7XG5sZXQgaXNzdWVXYXJuaW5nO1xuaWYgKERFVl9NT0RFKSB7XG4gICAgKF9hID0gZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzID0gbmV3IFNldCgpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGNvZGVcbiAgICAgICAgICAgID8gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIGlmICghZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzLmFkZCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaXNzdWVXYXJuaW5nKCdkZXYtbW9kZScsIGBMaXQgaXMgaW4gZGV2IG1vZGUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiFgKTtcbn1cbmNvbnN0IHdyYXAgPSBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCAmJlxuICAgICgoX2IgPSBnbG9iYWwuU2hhZHlET00pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pblVzZSkgJiZcbiAgICAoKF9jID0gZ2xvYmFsLlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Mubm9QYXRjaCkgPT09IHRydWVcbiAgICA/IGdsb2JhbC5TaGFkeURPTS53cmFwXG4gICAgOiAobm9kZSkgPT4gbm9kZTtcbmNvbnN0IHRydXN0ZWRUeXBlcyA9IGdsb2JhbC50cnVzdGVkVHlwZXM7XG4vKipcbiAqIE91ciBUcnVzdGVkVHlwZVBvbGljeSBmb3IgSFRNTCB3aGljaCBpcyBkZWNsYXJlZCB1c2luZyB0aGUgaHRtbCB0ZW1wbGF0ZVxuICogdGFnIGZ1bmN0aW9uLlxuICpcbiAqIFRoYXQgSFRNTCBpcyBhIGRldmVsb3Blci1hdXRob3JlZCBjb25zdGFudCwgYW5kIGlzIHBhcnNlZCB3aXRoIGlubmVySFRNTFxuICogYmVmb3JlIGFueSB1bnRydXN0ZWQgZXhwcmVzc2lvbnMgaGF2ZSBiZWVuIG1peGVkIGluLiBUaGVyZWZvciBpdCBpc1xuICogY29uc2lkZXJlZCBzYWZlIGJ5IGNvbnN0cnVjdGlvbi5cbiAqL1xuY29uc3QgcG9saWN5ID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdsaXQtaHRtbCcsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogKHMpID0+IHMsXG4gICAgfSlcbiAgICA6IHVuZGVmaW5lZDtcbmNvbnN0IGlkZW50aXR5RnVuY3Rpb24gPSAodmFsdWUpID0+IHZhbHVlO1xuY29uc3Qgbm9vcFNhbml0aXplciA9IChfbm9kZSwgX25hbWUsIF90eXBlKSA9PiBpZGVudGl0eUZ1bmN0aW9uO1xuLyoqIFNldHMgdGhlIGdsb2JhbCBzYW5pdGl6ZXIgZmFjdG9yeS4gKi9cbmNvbnN0IHNldFNhbml0aXplciA9IChuZXdTYW5pdGl6ZXIpID0+IHtcbiAgICBpZiAoIUVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0ZWQgdG8gb3ZlcndyaXRlIGV4aXN0aW5nIGxpdC1odG1sIHNlY3VyaXR5IHBvbGljeS5gICtcbiAgICAgICAgICAgIGAgc2V0U2FuaXRpemVET01WYWx1ZUZhY3Rvcnkgc2hvdWxkIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UuYCk7XG4gICAgfVxuICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5ld1Nhbml0aXplcjtcbn07XG4vKipcbiAqIE9ubHkgdXNlZCBpbiBpbnRlcm5hbCB0ZXN0cywgbm90IGEgcGFydCBvZiB0aGUgcHVibGljIEFQSS5cbiAqL1xuY29uc3QgX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlID0gKCkgPT4ge1xuICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5vb3BTYW5pdGl6ZXI7XG59O1xuY29uc3QgY3JlYXRlU2FuaXRpemVyID0gKG5vZGUsIG5hbWUsIHR5cGUpID0+IHtcbiAgICByZXR1cm4gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKG5vZGUsIG5hbWUsIHR5cGUpO1xufTtcbi8vIEFkZGVkIHRvIGFuIGF0dHJpYnV0ZSBuYW1lIHRvIG1hcmsgdGhlIGF0dHJpYnV0ZSBhcyBib3VuZCBzbyB3ZSBjYW4gZmluZFxuLy8gaXQgZWFzaWx5LlxuY29uc3QgYm91bmRBdHRyaWJ1dGVTdWZmaXggPSAnJGxpdCQnO1xuLy8gVGhpcyBtYXJrZXIgaXMgdXNlZCBpbiBtYW55IHN5bnRhY3RpYyBwb3NpdGlvbnMgaW4gSFRNTCwgc28gaXQgbXVzdCBiZVxuLy8gYSB2YWxpZCBlbGVtZW50IG5hbWUgYW5kIGF0dHJpYnV0ZSBuYW1lLiBXZSBkb24ndCBzdXBwb3J0IGR5bmFtaWMgbmFtZXMgKHlldClcbi8vIGJ1dCB0aGlzIGF0IGxlYXN0IGVuc3VyZXMgdGhhdCB0aGUgcGFyc2UgdHJlZSBpcyBjbG9zZXIgdG8gdGhlIHRlbXBsYXRlXG4vLyBpbnRlbnRpb24uXG5jb25zdCBtYXJrZXIgPSBgbGl0JCR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDkpfSRgO1xuLy8gU3RyaW5nIHVzZWQgdG8gdGVsbCBpZiBhIGNvbW1lbnQgaXMgYSBtYXJrZXIgY29tbWVudFxuY29uc3QgbWFya2VyTWF0Y2ggPSAnPycgKyBtYXJrZXI7XG4vLyBUZXh0IHVzZWQgdG8gaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIgbm9kZS4gV2UgdXNlIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25cbi8vIHN5bnRheCBiZWNhdXNlIGl0J3Mgc2xpZ2h0bHkgc21hbGxlciwgYnV0IHBhcnNlcyBhcyBhIGNvbW1lbnQgbm9kZS5cbmNvbnN0IG5vZGVNYXJrZXIgPSBgPCR7bWFya2VyTWF0Y2h9PmA7XG5jb25zdCBkID0gTk9ERV9NT0RFICYmIGdsb2JhbC5kb2N1bWVudCA9PT0gdW5kZWZpbmVkXG4gICAgPyB7XG4gICAgICAgIGNyZWF0ZVRyZWVXYWxrZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgfVxuICAgIDogZG9jdW1lbnQ7XG4vLyBDcmVhdGVzIGEgZHluYW1pYyBtYXJrZXIuIFdlIG5ldmVyIGhhdmUgdG8gc2VhcmNoIGZvciB0aGVzZSBpbiB0aGUgRE9NLlxuY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4gZC5jcmVhdGVDb21tZW50KCcnKTtcbmNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZSAhPSAnZnVuY3Rpb24nKTtcbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuY29uc3QgaXNJdGVyYWJsZSA9ICh2YWx1ZSkgPT4gaXNBcnJheSh2YWx1ZSkgfHxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHR5cGVvZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pID09PSAnZnVuY3Rpb24nO1xuY29uc3QgU1BBQ0VfQ0hBUiA9IGBbIFxcdFxcblxcZlxccl1gO1xuY29uc3QgQVRUUl9WQUxVRV9DSEFSID0gYFteIFxcdFxcblxcZlxcclwiJ1xcYDw+PV1gO1xuY29uc3QgTkFNRV9DSEFSID0gYFteXFxcXHNcIic+PS9dYDtcbi8vIFRoZXNlIHJlZ2V4ZXMgcmVwcmVzZW50IHRoZSBmaXZlIHBhcnNpbmcgc3RhdGVzIHRoYXQgd2UgY2FyZSBhYm91dCBpbiB0aGVcbi8vIFRlbXBsYXRlJ3MgSFRNTCBzY2FubmVyLiBUaGV5IG1hdGNoIHRoZSAqZW5kKiBvZiB0aGUgc3RhdGUgdGhleSdyZSBuYW1lZFxuLy8gYWZ0ZXIuXG4vLyBEZXBlbmRpbmcgb24gdGhlIG1hdGNoLCB3ZSB0cmFuc2l0aW9uIHRvIGEgbmV3IHN0YXRlLiBJZiB0aGVyZSdzIG5vIG1hdGNoLFxuLy8gd2Ugc3RheSBpbiB0aGUgc2FtZSBzdGF0ZS5cbi8vIE5vdGUgdGhhdCB0aGUgcmVnZXhlcyBhcmUgc3RhdGVmdWwuIFdlIHV0aWxpemUgbGFzdEluZGV4IGFuZCBzeW5jIGl0XG4vLyBhY3Jvc3MgdGhlIG11bHRpcGxlIHJlZ2V4ZXMgdXNlZC4gSW4gYWRkaXRpb24gdG8gdGhlIGZpdmUgcmVnZXhlcyBiZWxvd1xuLy8gd2UgYWxzbyBkeW5hbWljYWxseSBjcmVhdGUgYSByZWdleCB0byBmaW5kIHRoZSBtYXRjaGluZyBlbmQgdGFncyBmb3IgcmF3XG4vLyB0ZXh0IGVsZW1lbnRzLlxuLyoqXG4gKiBFbmQgb2YgdGV4dCBpczogYDxgIGZvbGxvd2VkIGJ5OlxuICogICAoY29tbWVudCBzdGFydCkgb3IgKHRhZykgb3IgKGR5bmFtaWMgdGFnIGJpbmRpbmcpXG4gKi9cbmNvbnN0IHRleHRFbmRSZWdleCA9IC88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZztcbmNvbnN0IENPTU1FTlRfU1RBUlQgPSAxO1xuY29uc3QgVEFHX05BTUUgPSAyO1xuY29uc3QgRFlOQU1JQ19UQUdfTkFNRSA9IDM7XG5jb25zdCBjb21tZW50RW5kUmVnZXggPSAvLS0+L2c7XG4vKipcbiAqIENvbW1lbnRzIG5vdCBzdGFydGVkIHdpdGggPCEtLSwgbGlrZSA8L3ssIGNhbiBiZSBlbmRlZCBieSBhIHNpbmdsZSBgPmBcbiAqL1xuY29uc3QgY29tbWVudDJFbmRSZWdleCA9IC8+L2c7XG4vKipcbiAqIFRoZSB0YWdFbmQgcmVnZXggbWF0Y2hlcyB0aGUgZW5kIG9mIHRoZSBcImluc2lkZSBhbiBvcGVuaW5nXCIgdGFnIHN5bnRheFxuICogcG9zaXRpb24uIEl0IGVpdGhlciBtYXRjaGVzIGEgYD5gLCBhbiBhdHRyaWJ1dGUtbGlrZSBzZXF1ZW5jZSwgb3IgdGhlIGVuZFxuICogb2YgdGhlIHN0cmluZyBhZnRlciBhIHNwYWNlIChhdHRyaWJ1dGUtbmFtZSBwb3NpdGlvbiBlbmRpbmcpLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudHMtYXR0cmlidXRlc1xuICpcbiAqIFwiIFxcdFxcblxcZlxcclwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLCAoXCIpLCAoJyksIFwiPlwiLFxuICogICAgXCI9XCIsIG9yIFwiL1wiLiBOb3RlOiB0aGlzIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBIVE1MIHNwZWMgd2hpY2ggYWxzbyBleGNsdWRlcyBjb250cm9sIGNoYXJhY3RlcnMuXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5jb25zdCB0YWdFbmRSZWdleCA9IG5ldyBSZWdFeHAoYD58JHtTUEFDRV9DSEFSfSg/Oigke05BTUVfQ0hBUn0rKSgke1NQQUNFX0NIQVJ9Kj0ke1NQQUNFX0NIQVJ9Kig/OiR7QVRUUl9WQUxVRV9DSEFSfXwoXCJ8Jyl8KSl8JClgLCAnZycpO1xuY29uc3QgRU5USVJFX01BVENIID0gMDtcbmNvbnN0IEFUVFJJQlVURV9OQU1FID0gMTtcbmNvbnN0IFNQQUNFU19BTkRfRVFVQUxTID0gMjtcbmNvbnN0IFFVT1RFX0NIQVIgPSAzO1xuY29uc3Qgc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggPSAvJy9nO1xuY29uc3QgZG91YmxlUXVvdGVBdHRyRW5kUmVnZXggPSAvXCIvZztcbi8qKlxuICogTWF0Y2hlcyB0aGUgcmF3IHRleHQgZWxlbWVudHMuXG4gKlxuICogQ29tbWVudHMgYXJlIG5vdCBwYXJzZWQgd2l0aGluIHJhdyB0ZXh0IGVsZW1lbnRzLCBzbyB3ZSBuZWVkIHRvIHNlYXJjaCB0aGVpclxuICogdGV4dCBjb250ZW50IGZvciBtYXJrZXIgc3RyaW5ncy5cbiAqL1xuY29uc3QgcmF3VGV4dEVsZW1lbnQgPSAvXig/OnNjcmlwdHxzdHlsZXx0ZXh0YXJlYXx0aXRsZSkkL2k7XG4vKiogVGVtcGxhdGVSZXN1bHQgdHlwZXMgKi9cbmNvbnN0IEhUTUxfUkVTVUxUID0gMTtcbmNvbnN0IFNWR19SRVNVTFQgPSAyO1xuLy8gVGVtcGxhdGVQYXJ0IHR5cGVzXG4vLyBJTVBPUlRBTlQ6IHRoZXNlIG11c3QgbWF0Y2ggdGhlIHZhbHVlcyBpbiBQYXJ0VHlwZVxuY29uc3QgQVRUUklCVVRFX1BBUlQgPSAxO1xuY29uc3QgQ0hJTERfUEFSVCA9IDI7XG5jb25zdCBQUk9QRVJUWV9QQVJUID0gMztcbmNvbnN0IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQgPSA0O1xuY29uc3QgRVZFTlRfUEFSVCA9IDU7XG5jb25zdCBFTEVNRU5UX1BBUlQgPSA2O1xuY29uc3QgQ09NTUVOVF9QQVJUID0gNztcbi8qKlxuICogR2VuZXJhdGVzIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgVGVtcGxhdGVSZXN1bHQgd2l0aFxuICogdGhlIGdpdmVuIHJlc3VsdCB0eXBlLlxuICovXG5jb25zdCB0YWcgPSAodHlwZSkgPT4gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIC8vIFdhcm4gYWdhaW5zdCB0ZW1wbGF0ZXMgb2N0YWwgZXNjYXBlIHNlcXVlbmNlc1xuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSByYXRoZXIgdGhhbiBpbiByZW5kZXIgc28gdGhhdCB0aGUgd2FybmluZyBpcyBjbG9zZXIgdG8gdGhlXG4gICAgLy8gdGVtcGxhdGUgZGVmaW5pdGlvbi5cbiAgICBpZiAoREVWX01PREUgJiYgc3RyaW5ncy5zb21lKChzKSA9PiBzID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU29tZSB0ZW1wbGF0ZSBzdHJpbmdzIGFyZSB1bmRlZmluZWQuXFxuJyArXG4gICAgICAgICAgICAnVGhpcyBpcyBwcm9iYWJseSBjYXVzZWQgYnkgaWxsZWdhbCBvY3RhbCBlc2NhcGUgc2VxdWVuY2VzLicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICBbJ18kbGl0VHlwZSQnXTogdHlwZSxcbiAgICAgICAgc3RyaW5ncyxcbiAgICAgICAgdmFsdWVzLFxuICAgIH07XG59O1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgaGVhZGVyID0gKHRpdGxlOiBzdHJpbmcpID0+IGh0bWxgPGgxPiR7dGl0bGV9PC9oMT5gO1xuICogYGBgXG4gKlxuICogVGhlIGBodG1sYCB0YWcgcmV0dXJucyBhIGRlc2NyaXB0aW9uIG9mIHRoZSBET00gdG8gcmVuZGVyIGFzIGEgdmFsdWUuIEl0IGlzXG4gKiBsYXp5LCBtZWFuaW5nIG5vIHdvcmsgaXMgZG9uZSB1bnRpbCB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQuIFdoZW4gcmVuZGVyaW5nLFxuICogaWYgYSB0ZW1wbGF0ZSBjb21lcyBmcm9tIHRoZSBzYW1lIGV4cHJlc3Npb24gYXMgYSBwcmV2aW91c2x5IHJlbmRlcmVkIHJlc3VsdCxcbiAqIGl0J3MgZWZmaWNpZW50bHkgdXBkYXRlZCBpbnN0ZWFkIG9mIHJlcGxhY2VkLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IHRhZyhIVE1MX1JFU1VMVCk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyBmcmFnbWVudCB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IHJlY3QgPSBzdmdgPHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCI+PC9yZWN0PmA7XG4gKlxuICogY29uc3QgbXlJbWFnZSA9IGh0bWxgXG4gKiAgIDxzdmcgdmlld0JveD1cIjAgMCAxMCAxMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAqICAgICAke3JlY3R9XG4gKiAgIDwvc3ZnPmA7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYHN2Z2AgKnRhZyBmdW5jdGlvbiogc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgU1ZHIGZyYWdtZW50cywgb3IgZWxlbWVudHNcbiAqIHRoYXQgd291bGQgYmUgY29udGFpbmVkICoqaW5zaWRlKiogYW4gYDxzdmc+YCBIVE1MIGVsZW1lbnQuIEEgY29tbW9uIGVycm9yIGlzXG4gKiBwbGFjaW5nIGFuIGA8c3ZnPmAgKmVsZW1lbnQqIGluIGEgdGVtcGxhdGUgdGFnZ2VkIHdpdGggdGhlIGBzdmdgIHRhZ1xuICogZnVuY3Rpb24uIFRoZSBgPHN2Zz5gIGVsZW1lbnQgaXMgYW4gSFRNTCBlbGVtZW50IGFuZCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYVxuICogdGVtcGxhdGUgdGFnZ2VkIHdpdGggdGhlIHtAbGlua2NvZGUgaHRtbH0gdGFnIGZ1bmN0aW9uLlxuICpcbiAqIEluIExpdEVsZW1lbnQgdXNhZ2UsIGl0J3MgaW52YWxpZCB0byByZXR1cm4gYW4gU1ZHIGZyYWdtZW50IGZyb20gdGhlXG4gKiBgcmVuZGVyKClgIG1ldGhvZCwgYXMgdGhlIFNWRyBmcmFnbWVudCB3aWxsIGJlIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGVsZW1lbnQnc1xuICogc2hhZG93IHJvb3QgYW5kIHRodXMgY2Fubm90IGJlIHVzZWQgd2l0aGluIGFuIGA8c3ZnPmAgSFRNTCBlbGVtZW50LlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gdGFnKFNWR19SRVNVTFQpO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0gU3ltYm9sLmZvcignbGl0LW5vQ2hhbmdlJyk7XG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIGEgQ2hpbGRQYXJ0IHRvIGZ1bGx5IGNsZWFyIGl0cyBjb250ZW50LlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBidXR0b24gPSBodG1sYCR7XG4gKiAgdXNlci5pc0FkbWluXG4gKiAgICA/IGh0bWxgPGJ1dHRvbj5ERUxFVEU8L2J1dHRvbj5gXG4gKiAgICA6IG5vdGhpbmdcbiAqIH1gO1xuICogYGBgXG4gKlxuICogUHJlZmVyIHVzaW5nIGBub3RoaW5nYCBvdmVyIG90aGVyIGZhbHN5IHZhbHVlcyBhcyBpdCBwcm92aWRlcyBhIGNvbnNpc3RlbnRcbiAqIGJlaGF2aW9yIGJldHdlZW4gdmFyaW91cyBleHByZXNzaW9uIGJpbmRpbmcgY29udGV4dHMuXG4gKlxuICogSW4gY2hpbGQgZXhwcmVzc2lvbnMsIGB1bmRlZmluZWRgLCBgbnVsbGAsIGAnJ2AsIGFuZCBgbm90aGluZ2AgYWxsIGJlaGF2ZSB0aGVcbiAqIHNhbWUgYW5kIHJlbmRlciBubyBub2Rlcy4gSW4gYXR0cmlidXRlIGV4cHJlc3Npb25zLCBgbm90aGluZ2AgX3JlbW92ZXNfIHRoZVxuICogYXR0cmlidXRlLCB3aGlsZSBgdW5kZWZpbmVkYCBhbmQgYG51bGxgIHdpbGwgcmVuZGVyIGFuIGVtcHR5IHN0cmluZy4gSW5cbiAqIHByb3BlcnR5IGV4cHJlc3Npb25zIGBub3RoaW5nYCBiZWNvbWVzIGB1bmRlZmluZWRgLlxuICovXG5leHBvcnQgY29uc3Qgbm90aGluZyA9IFN5bWJvbC5mb3IoJ2xpdC1ub3RoaW5nJyk7XG4vKipcbiAqIFRoZSBjYWNoZSBvZiBwcmVwYXJlZCB0ZW1wbGF0ZXMsIGtleWVkIGJ5IHRoZSB0YWdnZWQgVGVtcGxhdGVTdHJpbmdzQXJyYXlcbiAqIGFuZCBfbm90XyBhY2NvdW50aW5nIGZvciB0aGUgc3BlY2lmaWMgdGVtcGxhdGUgdGFnIHVzZWQuIFRoaXMgbWVhbnMgdGhhdFxuICogdGVtcGxhdGUgdGFncyBjYW5ub3QgYmUgZHluYW1pYyAtIHRoZSBtdXN0IHN0YXRpY2FsbHkgYmUgb25lIG9mIGh0bWwsIHN2ZyxcbiAqIG9yIGF0dHIuIFRoaXMgcmVzdHJpY3Rpb24gc2ltcGxpZmllcyB0aGUgY2FjaGUgbG9va3VwLCB3aGljaCBpcyBvbiB0aGUgaG90XG4gKiBwYXRoIGZvciByZW5kZXJpbmcuXG4gKi9cbmNvbnN0IHRlbXBsYXRlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgd2Fsa2VyID0gZC5jcmVhdGVUcmVlV2Fsa2VyKGQsIDEyOSAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVH0gKi8sIG51bGwsIGZhbHNlKTtcbmxldCBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xuZnVuY3Rpb24gdHJ1c3RGcm9tVGVtcGxhdGVTdHJpbmcodHNhLCBzdHJpbmdGcm9tVFNBKSB7XG4gICAgLy8gQSBzZWN1cml0eSBjaGVjayB0byBwcmV2ZW50IHNwb29maW5nIG9mIExpdCB0ZW1wbGF0ZSByZXN1bHRzLlxuICAgIC8vIEluIHRoZSBmdXR1cmUsIHdlIG1heSBiZSBhYmxlIHRvIHJlcGxhY2UgdGhpcyB3aXRoIEFycmF5LmlzVGVtcGxhdGVPYmplY3QsXG4gICAgLy8gdGhvdWdoIHdlIG1pZ2h0IG5lZWQgdG8gbWFrZSB0aGF0IGNoZWNrIGluc2lkZSBvZiB0aGUgaHRtbCBhbmQgc3ZnXG4gICAgLy8gZnVuY3Rpb25zLCBiZWNhdXNlIHByZWNvbXBpbGVkIHRlbXBsYXRlcyBkb24ndCBjb21lIGluIGFzXG4gICAgLy8gVGVtcGxhdGVTdHJpbmdBcnJheSBvYmplY3RzLlxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0c2EpIHx8ICF0c2EuaGFzT3duUHJvcGVydHkoJ3JhdycpKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gJ2ludmFsaWQgdGVtcGxhdGUgc3RyaW5ncyBhcnJheSc7XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IGBcbiAgICAgICAgICBJbnRlcm5hbCBFcnJvcjogZXhwZWN0ZWQgdGVtcGxhdGUgc3RyaW5ncyB0byBiZSBhbiBhcnJheVxuICAgICAgICAgIHdpdGggYSAncmF3JyBmaWVsZC4gRmFraW5nIGEgdGVtcGxhdGUgc3RyaW5ncyBhcnJheSBieVxuICAgICAgICAgIGNhbGxpbmcgaHRtbCBvciBzdmcgbGlrZSBhbiBvcmRpbmFyeSBmdW5jdGlvbiBpcyBlZmZlY3RpdmVseVxuICAgICAgICAgIHRoZSBzYW1lIGFzIGNhbGxpbmcgdW5zYWZlSHRtbCBhbmQgY2FuIGxlYWQgdG8gbWFqb3Igc2VjdXJpdHlcbiAgICAgICAgICBpc3N1ZXMsIGUuZy4gb3BlbmluZyB5b3VyIGNvZGUgdXAgdG8gWFNTIGF0dGFja3MuXG4gICAgICAgICAgSWYgeW91J3JlIHVzaW5nIHRoZSBodG1sIG9yIHN2ZyB0YWdnZWQgdGVtcGxhdGUgZnVuY3Rpb25zIG5vcm1hbGx5XG4gICAgICAgICAgYW5kIHN0aWxsIHNlZWluZyB0aGlzIGVycm9yLCBwbGVhc2UgZmlsZSBhIGJ1ZyBhdFxuICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy9uZXc/dGVtcGxhdGU9YnVnX3JlcG9ydC5tZFxuICAgICAgICAgIGFuZCBpbmNsdWRlIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgYnVpbGQgdG9vbGluZywgaWYgYW55LlxuICAgICAgICBgXG4gICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4gKi9nLCAnXFxuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcG9saWN5ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBwb2xpY3kuY3JlYXRlSFRNTChzdHJpbmdGcm9tVFNBKVxuICAgICAgICA6IHN0cmluZ0Zyb21UU0E7XG59XG4vKipcbiAqIFJldHVybnMgYW4gSFRNTCBzdHJpbmcgZm9yIHRoZSBnaXZlbiBUZW1wbGF0ZVN0cmluZ3NBcnJheSBhbmQgcmVzdWx0IHR5cGVcbiAqIChIVE1MIG9yIFNWRyksIGFsb25nIHdpdGggdGhlIGNhc2Utc2Vuc2l0aXZlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcyBpblxuICogdGVtcGxhdGUgb3JkZXIuIFRoZSBIVE1MIGNvbnRhaW5zIGNvbW1lbnQgbWFya2VycyBkZW5vdGluZyB0aGUgYENoaWxkUGFydGBzXG4gKiBhbmQgc3VmZml4ZXMgb24gYm91bmQgYXR0cmlidXRlcyBkZW5vdGluZyB0aGUgYEF0dHJpYnV0ZVBhcnRzYC5cbiAqXG4gKiBAcGFyYW0gc3RyaW5ncyB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XG4gKiBAcGFyYW0gdHlwZSBIVE1MIG9yIFNWR1xuICogQHJldHVybiBBcnJheSBjb250YWluaW5nIGBbaHRtbCwgYXR0ck5hbWVzXWAgKGFycmF5IHJldHVybmVkIGZvciB0ZXJzZW5lc3MsXG4gKiAgICAgdG8gYXZvaWQgb2JqZWN0IGZpZWxkcyBzaW5jZSB0aGlzIGNvZGUgaXMgc2hhcmVkIHdpdGggbm9uLW1pbmlmaWVkIFNTUlxuICogICAgIGNvZGUpXG4gKi9cbmNvbnN0IGdldFRlbXBsYXRlSHRtbCA9IChzdHJpbmdzLCB0eXBlKSA9PiB7XG4gICAgLy8gSW5zZXJ0IG1ha2VycyBpbnRvIHRoZSB0ZW1wbGF0ZSBIVE1MIHRvIHJlcHJlc2VudCB0aGUgcG9zaXRpb24gb2ZcbiAgICAvLyBiaW5kaW5ncy4gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGRldGVybWluZSB0aGVcbiAgICAvLyBzeW50YWN0aWMgcG9zaXRpb24gb2YgdGhlIGJpbmRpbmdzLiBUaGV5IGNhbiBiZSBpbiB0ZXh0IHBvc2l0aW9uLCB3aGVyZVxuICAgIC8vIHdlIGluc2VydCBhbiBIVE1MIGNvbW1lbnQsIGF0dHJpYnV0ZSB2YWx1ZSBwb3NpdGlvbiwgd2hlcmUgd2UgaW5zZXJ0IGFcbiAgICAvLyBzZW50aW5lbCBzdHJpbmcgYW5kIHJlLXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSwgb3IgaW5zaWRlIGEgdGFnIHdoZXJlXG4gICAgLy8gd2UgaW5zZXJ0IHRoZSBzZW50aW5lbCBzdHJpbmcuXG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAvLyBTdG9yZXMgdGhlIGNhc2Utc2Vuc2l0aXZlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcyBpbiB0aGUgb3JkZXIgb2YgdGhlaXJcbiAgICAvLyBwYXJ0cy4gRWxlbWVudFBhcnRzIGFyZSBhbHNvIHJlZmxlY3RlZCBpbiB0aGlzIGFycmF5IGFzIHVuZGVmaW5lZFxuICAgIC8vIHJhdGhlciB0aGFuIGEgc3RyaW5nLCB0byBkaXNhbWJpZ3VhdGUgZnJvbSBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgY29uc3QgYXR0ck5hbWVzID0gW107XG4gICAgbGV0IGh0bWwgPSB0eXBlID09PSBTVkdfUkVTVUxUID8gJzxzdmc+JyA6ICcnO1xuICAgIC8vIFdoZW4gd2UncmUgaW5zaWRlIGEgcmF3IHRleHQgdGFnIChub3QgaXQncyB0ZXh0IGNvbnRlbnQpLCB0aGUgcmVnZXhcbiAgICAvLyB3aWxsIHN0aWxsIGJlIHRhZ1JlZ2V4IHNvIHdlIGNhbiBmaW5kIGF0dHJpYnV0ZXMsIGJ1dCB3aWxsIHN3aXRjaCB0b1xuICAgIC8vIHRoaXMgcmVnZXggd2hlbiB0aGUgdGFnIGVuZHMuXG4gICAgbGV0IHJhd1RleHRFbmRSZWdleDtcbiAgICAvLyBUaGUgY3VycmVudCBwYXJzaW5nIHN0YXRlLCByZXByZXNlbnRlZCBhcyBhIHJlZmVyZW5jZSB0byBvbmUgb2YgdGhlXG4gICAgLy8gcmVnZXhlc1xuICAgIGxldCByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBlbmQgb2YgdGhlIGxhc3QgYXR0cmlidXRlIG5hbWUuIFdoZW4gdGhpcyBpc1xuICAgICAgICAvLyBwb3NpdGl2ZSBhdCBlbmQgb2YgYSBzdHJpbmcsIGl0IG1lYW5zIHdlJ3JlIGluIGFuIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgICAvLyBwb3NpdGlvbiBhbmQgbmVlZCB0byByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gV2UgYWxzbyB1c2UgYSBzcGVjaWFsIHZhbHVlIG9mIC0yIHRvIGluZGljYXRlIHRoYXQgd2UgZW5jb3VudGVyZWRcbiAgICAgICAgLy8gdGhlIGVuZCBvZiBhIHN0cmluZyBpbiBhdHRyaWJ1dGUgbmFtZSBwb3NpdGlvbi5cbiAgICAgICAgbGV0IGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgbGV0IGF0dHJOYW1lO1xuICAgICAgICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICAvLyBUaGUgY29uZGl0aW9ucyBpbiB0aGlzIGxvb3AgaGFuZGxlIHRoZSBjdXJyZW50IHBhcnNlIHN0YXRlLCBhbmQgdGhlXG4gICAgICAgIC8vIGFzc2lnbm1lbnRzIHRvIHRoZSBgcmVnZXhgIHZhcmlhYmxlIGFyZSB0aGUgc3RhdGUgdHJhbnNpdGlvbnMuXG4gICAgICAgIHdoaWxlIChsYXN0SW5kZXggPCBzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHN0YXJ0IHNlYXJjaGluZyBmcm9tIHdoZXJlIHdlIHByZXZpb3VzbHkgbGVmdCBvZmZcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgIG1hdGNoID0gcmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdEluZGV4ID0gcmVnZXgubGFzdEluZGV4O1xuICAgICAgICAgICAgaWYgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gPT09ICchLS0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gY29tbWVudEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtDT01NRU5UX1NUQVJUXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHN0YXJ0ZWQgYSB3ZWlyZCBjb21tZW50LCBsaWtlIDwve1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnQyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdUZXh0RWxlbWVudC50ZXN0KG1hdGNoW1RBR19OQU1FXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY29yZCBpZiB3ZSBlbmNvdW50ZXIgYSByYXctdGV4dCBlbGVtZW50LiBXZSdsbCBzd2l0Y2ggdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcmVnZXggYXQgdGhlIGVuZCBvZiB0aGUgdGFnLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPC8ke21hdGNoW1RBR19OQU1FXX1gLCAnZycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW0RZTkFNSUNfVEFHX05BTUVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JpbmRpbmdzIGluIHRhZyBuYW1lcyBhcmUgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBzdGF0aWMgdGVtcGxhdGVzIGluc3RlYWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTZWUgaHR0cHM6Ly9saXQuZGV2L2RvY3MvdGVtcGxhdGVzL2V4cHJlc3Npb25zLyNzdGF0aWMtZXhwcmVzc2lvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSB0YWdFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtFTlRJUkVfTUFUQ0hdID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5kIG9mIGEgdGFnLiBJZiB3ZSBoYWQgc3RhcnRlZCBhIHJhdy10ZXh0IGVsZW1lbnQsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZ2V4XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gcmF3VGV4dEVuZFJlZ2V4ICE9PSBudWxsICYmIHJhd1RleHRFbmRSZWdleCAhPT0gdm9pZCAwID8gcmF3VGV4dEVuZFJlZ2V4IDogdGV4dEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXkgYmUgZW5kaW5nIGFuIHVucXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZSwgc28gbWFrZSBzdXJlIHdlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGFueSBwZW5kaW5nIGF0dHJOYW1lRW5kSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtBVFRSSUJVVEVfTkFNRV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRyaWJ1dGUgbmFtZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gcmVnZXgubGFzdEluZGV4IC0gbWF0Y2hbU1BBQ0VTX0FORF9FUVVBTFNdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWUgPSBtYXRjaFtBVFRSSUJVVEVfTkFNRV07XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoW1FVT1RFX0NIQVJdID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhZ0VuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXRjaFtRVU9URV9DSEFSXSA9PT0gJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBjb21tZW50RW5kUmVnZXggfHwgcmVnZXggPT09IGNvbW1lbnQyRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdCBvbmUgb2YgdGhlIGZpdmUgc3RhdGUgcmVnZXhlcywgc28gaXQgbXVzdCBiZSB0aGUgZHluYW1pY2FsbHlcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGVkIHJhdyB0ZXh0IHJlZ2V4IGFuZCB3ZSdyZSBhdCB0aGUgY2xvc2Ugb2YgdGhhdCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGF0dHJOYW1lRW5kSW5kZXgsIHdoaWNoIGluZGljYXRlcyB0aGF0IHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIGFzc2VydCB0aGF0IHdlJ3JlIGluIGEgdmFsaWQgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBwb3NpdGlvbiAtIGVpdGhlciBpbiBhIHRhZywgb3IgYSBxdW90ZWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTEgfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gdGFnRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXgsICd1bmV4cGVjdGVkIHBhcnNlIHN0YXRlIEInKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGZvdXIgY2FzZXM6XG4gICAgICAgIC8vICAxLiBXZSdyZSBpbiB0ZXh0IHBvc2l0aW9uLCBhbmQgbm90IGluIGEgcmF3IHRleHQgZWxlbWVudFxuICAgICAgICAvLyAgICAgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpOiBpbnNlcnQgYSBjb21tZW50IG1hcmtlci5cbiAgICAgICAgLy8gIDIuIFdlIGhhdmUgYSBub24tbmVnYXRpdmUgYXR0ck5hbWVFbmRJbmRleCB3aGljaCBtZWFucyB3ZSBuZWVkIHRvXG4gICAgICAgIC8vICAgICByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSB0byBhZGQgYSBib3VuZCBhdHRyaWJ1dGUgc3VmZml4LlxuICAgICAgICAvLyAgMy4gV2UncmUgYXQgdGhlIG5vbi1maXJzdCBiaW5kaW5nIGluIGEgbXVsdGktYmluZGluZyBhdHRyaWJ1dGUsIHVzZSBhXG4gICAgICAgIC8vICAgICBwbGFpbiBtYXJrZXIuXG4gICAgICAgIC8vICA0LiBXZSdyZSBzb21ld2hlcmUgZWxzZSBpbnNpZGUgdGhlIHRhZy4gSWYgd2UncmUgaW4gYXR0cmlidXRlIG5hbWVcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uIChhdHRyTmFtZUVuZEluZGV4ID09PSAtMiksIGFkZCBhIHNlcXVlbnRpYWwgc3VmZml4IHRvXG4gICAgICAgIC8vICAgICBnZW5lcmF0ZSBhIHVuaXF1ZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gRGV0ZWN0IGEgYmluZGluZyBuZXh0IHRvIHNlbGYtY2xvc2luZyB0YWcgZW5kIGFuZCBpbnNlcnQgYSBzcGFjZSB0b1xuICAgICAgICAvLyBzZXBhcmF0ZSB0aGUgbWFya2VyIGZyb20gdGhlIHRhZyBlbmQ6XG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZ2V4ID09PSB0YWdFbmRSZWdleCAmJiBzdHJpbmdzW2kgKyAxXS5zdGFydHNXaXRoKCcvPicpID8gJyAnIDogJyc7XG4gICAgICAgIGh0bWwgKz1cbiAgICAgICAgICAgIHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXhcbiAgICAgICAgICAgICAgICA/IHMgKyBub2RlTWFya2VyXG4gICAgICAgICAgICAgICAgOiBhdHRyTmFtZUVuZEluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoYXR0ck5hbWVzLnB1c2goYXR0ck5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGljZSgwLCBhdHRyTmFtZUVuZEluZGV4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRBdHRyaWJ1dGVTdWZmaXggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoYXR0ck5hbWVFbmRJbmRleCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRcbiAgICAgICAgICAgICAgICAgICAgOiBzICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIgPyAoYXR0ck5hbWVzLnB1c2godW5kZWZpbmVkKSwgaSkgOiBlbmQpO1xuICAgIH1cbiAgICBjb25zdCBodG1sUmVzdWx0ID0gaHRtbCArIChzdHJpbmdzW2xdIHx8ICc8Pz4nKSArICh0eXBlID09PSBTVkdfUkVTVUxUID8gJzwvc3ZnPicgOiAnJyk7XG4gICAgLy8gUmV0dXJuZWQgYXMgYW4gYXJyYXkgZm9yIHRlcnNlbmVzc1xuICAgIHJldHVybiBbdHJ1c3RGcm9tVGVtcGxhdGVTdHJpbmcoc3RyaW5ncywgaHRtbFJlc3VsdCksIGF0dHJOYW1lc107XG59O1xuY2xhc3MgVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgeyBzdHJpbmdzLCBbJ18kbGl0VHlwZSQnXTogdHlwZSB9LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgbGV0IG5vZGU7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgYXR0ck5hbWVJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IHBhcnRDb3VudCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnBhcnRzO1xuICAgICAgICAvLyBDcmVhdGUgdGVtcGxhdGUgZWxlbWVudFxuICAgICAgICBjb25zdCBbaHRtbCwgYXR0ck5hbWVzXSA9IGdldFRlbXBsYXRlSHRtbChzdHJpbmdzLCB0eXBlKTtcbiAgICAgICAgdGhpcy5lbCA9IFRlbXBsYXRlLmNyZWF0ZUVsZW1lbnQoaHRtbCwgb3B0aW9ucyk7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHRoaXMuZWwuY29udGVudDtcbiAgICAgICAgLy8gUmVwYXJlbnQgU1ZHIG5vZGVzIGludG8gdGVtcGxhdGUgcm9vdFxuICAgICAgICBpZiAodHlwZSA9PT0gU1ZHX1JFU1VMVCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZWwuY29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBzdmdFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmQoLi4uc3ZnRWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXYWxrIHRoZSB0ZW1wbGF0ZSB0byBmaW5kIGJpbmRpbmcgbWFya2VycyBhbmQgY3JlYXRlIFRlbXBsYXRlUGFydHNcbiAgICAgICAgd2hpbGUgKChub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpICE9PSBudWxsICYmIHBhcnRzLmxlbmd0aCA8IHBhcnRDb3VudCkge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFnID0gbm9kZS5sb2NhbE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdhcm4gaWYgYHRleHRhcmVhYCBpbmNsdWRlcyBhbiBleHByZXNzaW9uIGFuZCB0aHJvdyBpZiBgdGVtcGxhdGVgXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvZXMgc2luY2UgdGhlc2UgYXJlIG5vdCBzdXBwb3J0ZWQuIFdlIGRvIHRoaXMgYnkgY2hlY2tpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5uZXJIVE1MIGZvciBhbnl0aGluZyB0aGF0IGxvb2tzIGxpa2UgYSBtYXJrZXIuIFRoaXMgY2F0Y2hlc1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlcyBsaWtlIGJpbmRpbmdzIGluIHRleHRhcmVhIHRoZXJlIG1hcmtlcnMgdHVybiBpbnRvIHRleHQgbm9kZXMuXG4gICAgICAgICAgICAgICAgICAgIGlmICgvXig/OnRleHRhcmVhfHRlbXBsYXRlKSQvaS50ZXN0KHRhZykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MLmluY2x1ZGVzKG1hcmtlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBgRXhwcmVzc2lvbnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW5zaWRlIFxcYCR7dGFnfVxcYCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZWxlbWVudHMuIFNlZSBodHRwczovL2xpdC5kZXYvbXNnL2V4cHJlc3Npb24taW4tJHt0YWd9IGZvciBtb3JlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJycsIG0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBmb3IgYXR0ZW1wdGVkIGR5bmFtaWMgdGFnIG5hbWVzLCB3ZSBkb24ndFxuICAgICAgICAgICAgICAgIC8vIGluY3JlbWVudCB0aGUgYmluZGluZ0luZGV4LCBhbmQgaXQnbGwgYmUgb2ZmIGJ5IDEgaW4gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBhbmQgb2ZmIGJ5IHR3byBhZnRlciBpdC5cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZGVmZXIgcmVtb3ZpbmcgYm91bmQgYXR0cmlidXRlcyBiZWNhdXNlIG9uIElFIHdlIG1pZ2h0IG5vdCBiZVxuICAgICAgICAgICAgICAgICAgICAvLyBpdGVyYXRpbmcgYXR0cmlidXRlcyBpbiB0aGVpciB0ZW1wbGF0ZSBvcmRlciwgYW5kIHdvdWxkIHNvbWV0aW1lc1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgYW4gYXR0cmlidXRlIHRoYXQgd2Ugc3RpbGwgbmVlZCB0byBjcmVhdGUgYSBwYXJ0IGZvci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cnNUb1JlbW92ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2Ygbm9kZS5nZXRBdHRyaWJ1dGVOYW1lcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgbmFtZWAgaXMgdGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB3ZSdyZSBpdGVyYXRpbmcgb3ZlciwgYnV0IG5vdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gX25lY2Vzc2FyaWx5XyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlIHdpbGwgY3JlYXRlIGEgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yLiBUaGV5IGNhbiBiZSBkaWZmZXJlbnQgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBpdGVyYXRlIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIHNvdXJjZSBvcmRlci4gSW4gdGhhdCBjYXNlIHRoZSBhdHRyTmFtZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIHRoZSBhdHRyaWJ1dGUgbmFtZSB3ZSdsbCBwcm9jZXNzIG5leHQuIFdlIG9ubHkgbmVlZCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSBuYW1lIGhlcmUgdG8ga25vdyBpZiB3ZSBzaG91bGQgcHJvY2VzcyBhIGJvdW5kIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gdGhpcyBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoYm91bmRBdHRyaWJ1dGVTdWZmaXgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zdGFydHNXaXRoKG1hcmtlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFsTmFtZSA9IGF0dHJOYW1lc1thdHRyTmFtZUluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzVG9SZW1vdmUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhbE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb3dlcmNhc2UgZm9yIGNhc2Utc2Vuc2l0aXZlIFNWRyBhdHRyaWJ1dGVzIGxpa2Ugdmlld0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKHJlYWxOYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSB2YWx1ZS5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gLyhbLj9AXSk/KC4qKS8uZXhlYyhyZWFsTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQVRUUklCVVRFX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IHN0YXRpY3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdG9yOiBtWzFdID09PSAnLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFByb3BlcnR5UGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbVsxXSA9PT0gJz8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQm9vbGVhbkF0dHJpYnV0ZVBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnQCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gRXZlbnRQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IEF0dHJpYnV0ZVBhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFTEVNRU5UX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGF0dHJzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBiZW5jaG1hcmsgdGhlIHJlZ2V4IGFnYWluc3QgdGVzdGluZyBmb3IgZWFjaFxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSAzIHJhdyB0ZXh0IGVsZW1lbnQgbmFtZXMuXG4gICAgICAgICAgICAgICAgaWYgKHJhd1RleHRFbGVtZW50LnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgcmF3IHRleHQgZWxlbWVudHMgd2UgbmVlZCB0byBzcGxpdCB0aGUgdGV4dCBjb250ZW50IG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmtlcnMsIGNyZWF0ZSBhIFRleHQgbm9kZSBmb3IgZWFjaCBzZWdtZW50LCBhbmQgY3JlYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgVGVtcGxhdGVQYXJ0IGZvciBlYWNoIG1hcmtlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRydXN0ZWRUeXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbid0IHVzZSBlbXB0eSB0ZXh0IG5vZGVzIGFzIG1hcmtlcnMgYmVjYXVzZSB0aGV5J3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemVkIHdoZW4gY2xvbmluZyBpbiBJRSAoY291bGQgc2ltcGxpZnkgd2hlblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUUgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZChzdHJpbmdzW2ldLCBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FsayBwYXN0IHRoZSBtYXJrZXIgbm9kZSB3ZSBqdXN0IGFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENISUxEX1BBUlQsIGluZGV4OiArK25vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGUgYmVjYXVzZSB0aGlzIG1hcmtlciBpcyBhZGRlZCBhZnRlciB0aGUgd2Fsa2VyJ3MgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9kZSwgaXQgd2lsbCBiZSB3YWxrZWQgdG8gaW4gdGhlIG91dGVyIGxvb3AgKGFuZCBpZ25vcmVkKSwgc29cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gYWRqdXN0IG5vZGVJbmRleCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZChzdHJpbmdzW2xhc3RJbmRleF0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBtYXJrZXJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoaSA9IG5vZGUuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENPTU1FTlRfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gdGhlIGVuZCBvZiB0aGUgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gbWFya2VyLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBjb3VsZCBzZXQgd2Fsa2VyLmN1cnJlbnROb2RlIHRvIGFub3RoZXIgbm9kZSBoZXJlIHRvIHByZXZlbnQgYSBtZW1vcnlcbiAgICAgICAgLy8gbGVhaywgYnV0IGV2ZXJ5IHRpbWUgd2UgcHJlcGFyZSBhIHRlbXBsYXRlLCB3ZSBpbW1lZGlhdGVseSByZW5kZXIgaXRcbiAgICAgICAgLy8gYW5kIHJlLXVzZSB0aGUgd2Fsa2VyIGluIG5ldyBUZW1wbGF0ZUluc3RhbmNlLl9jbG9uZSgpLlxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIHByZXAnLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMsXG4gICAgICAgICAgICBjbG9uYWJsZVRlbXBsYXRlOiB0aGlzLmVsLFxuICAgICAgICAgICAgcGFydHM6IHRoaXMucGFydHMsXG4gICAgICAgICAgICBzdHJpbmdzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3ZlcnJpZGRlbiB2aWEgYGxpdEh0bWxQb2x5ZmlsbFN1cHBvcnRgIHRvIHByb3ZpZGUgcGxhdGZvcm0gc3VwcG9ydC5cbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBzdGF0aWMgY3JlYXRlRWxlbWVudChodG1sLCBfb3B0aW9ucykge1xuICAgICAgICBjb25zdCBlbCA9IGQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVEaXJlY3RpdmUocGFydCwgdmFsdWUsIHBhcmVudCA9IHBhcnQsIGF0dHJpYnV0ZUluZGV4KSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgdmFyIF9kO1xuICAgIC8vIEJhaWwgZWFybHkgaWYgdGhlIHZhbHVlIGlzIGV4cGxpY2l0bHkgbm9DaGFuZ2UuIE5vdGUsIHRoaXMgbWVhbnMgYW55XG4gICAgLy8gbmVzdGVkIGRpcmVjdGl2ZSBpcyBzdGlsbCBhdHRhY2hlZCBhbmQgaXMgbm90IHJ1bi5cbiAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnREaXJlY3RpdmUgPSBhdHRyaWJ1dGVJbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKF9hID0gcGFyZW50Ll9fZGlyZWN0aXZlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2F0dHJpYnV0ZUluZGV4XVxuICAgICAgICA6IHBhcmVudC5fX2RpcmVjdGl2ZTtcbiAgICBjb25zdCBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IgPSBpc1ByaW1pdGl2ZSh2YWx1ZSlcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAgICAgdmFsdWVbJ18kbGl0RGlyZWN0aXZlJCddO1xuICAgIGlmICgoY3VycmVudERpcmVjdGl2ZSA9PT0gbnVsbCB8fCBjdXJyZW50RGlyZWN0aXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RGlyZWN0aXZlLmNvbnN0cnVjdG9yKSAhPT0gbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKSB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIChfYiA9IGN1cnJlbnREaXJlY3RpdmUgPT09IG51bGwgfHwgY3VycmVudERpcmVjdGl2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudERpcmVjdGl2ZVsnXyRub3RpZnlEaXJlY3RpdmVDb25uZWN0aW9uQ2hhbmdlZCddKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChjdXJyZW50RGlyZWN0aXZlLCBmYWxzZSk7XG4gICAgICAgIGlmIChuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUgPSBuZXcgbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKHBhcnQpO1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZS5fJGluaXRpYWxpemUocGFydCwgcGFyZW50LCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnV0ZUluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICgoX2MgPSAoX2QgPSBwYXJlbnQpLl9fZGlyZWN0aXZlcykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogKF9kLl9fZGlyZWN0aXZlcyA9IFtdKSlbYXR0cmlidXRlSW5kZXhdID1cbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Ll9fZGlyZWN0aXZlID0gY3VycmVudERpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudERpcmVjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCBjdXJyZW50RGlyZWN0aXZlLl8kcmVzb2x2ZShwYXJ0LCB2YWx1ZS52YWx1ZXMpLCBjdXJyZW50RGlyZWN0aXZlLCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQW4gdXBkYXRlYWJsZSBpbnN0YW5jZSBvZiBhIFRlbXBsYXRlLiBIb2xkcyByZWZlcmVuY2VzIHRvIHRoZSBQYXJ0cyB1c2VkIHRvXG4gKiB1cGRhdGUgdGhlIHRlbXBsYXRlIGluc3RhbmNlLlxuICovXG5jbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcGFyZW50KSB7XG4gICAgICAgIHRoaXMuXyRwYXJ0cyA9IFtdO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gQ2FsbGVkIGJ5IENoaWxkUGFydCBwYXJlbnROb2RlIGdldHRlclxuICAgIGdldCBwYXJlbnROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIHNlcGFyYXRlIGZyb20gdGhlIGNvbnN0cnVjdG9yIGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm4gYVxuICAgIC8vIERvY3VtZW50RnJhZ21lbnQgYW5kIHdlIGRvbid0IHdhbnQgdG8gaG9sZCBvbnRvIGl0IHdpdGggYW4gaW5zdGFuY2UgZmllbGQuXG4gICAgX2Nsb25lKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCB7IGVsOiB7IGNvbnRlbnQgfSwgcGFydHM6IHBhcnRzLCB9ID0gdGhpcy5fJHRlbXBsYXRlO1xuICAgICAgICBjb25zdCBmcmFnbWVudCA9ICgoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY3JlYXRpb25TY29wZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZCkuaW1wb3J0Tm9kZShjb250ZW50LCB0cnVlKTtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gZnJhZ21lbnQ7XG4gICAgICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRlbXBsYXRlUGFydCA9IHBhcnRzWzBdO1xuICAgICAgICB3aGlsZSAodGVtcGxhdGVQYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChub2RlSW5kZXggPT09IHRlbXBsYXRlUGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJ0O1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gQ0hJTERfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IENoaWxkUGFydChub2RlLCBub2RlLm5leHRTaWJsaW5nLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IEFUVFJJQlVURV9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgdGVtcGxhdGVQYXJ0LmN0b3Iobm9kZSwgdGVtcGxhdGVQYXJ0Lm5hbWUsIHRlbXBsYXRlUGFydC5zdHJpbmdzLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IEVMRU1FTlRfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IEVsZW1lbnRQYXJ0KG5vZGUsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl8kcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1srK3BhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ICE9PSAodGVtcGxhdGVQYXJ0ID09PSBudWxsIHx8IHRlbXBsYXRlUGFydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVtcGxhdGVQYXJ0LmluZGV4KSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBuZWVkIHRvIHNldCB0aGUgY3VycmVudE5vZGUgYXdheSBmcm9tIHRoZSBjbG9uZWQgdHJlZSBzbyB0aGF0IHdlXG4gICAgICAgIC8vIGRvbid0IGhvbGQgb250byB0aGUgdHJlZSBldmVuIGlmIHRoZSB0cmVlIGlzIGRldGFjaGVkIGFuZCBzaG91bGQgYmVcbiAgICAgICAgLy8gZnJlZWQuXG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IGQ7XG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG4gICAgX3VwZGF0ZSh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fJHBhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ3NldCBwYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVJbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzLCBwYXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiB2YWx1ZXMgdGhlIHBhcnQgY29uc3VtZXMgaXMgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdmFsdWVzIGFyZSBpbiBiZXR3ZWVuIHRlbXBsYXRlIHNwYW5zLiBXZSBpbmNyZW1lbnQgaSBieSAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhdGVyIGluIHRoZSBsb29wLCBzbyBpbmNyZW1lbnQgaXQgYnkgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDIgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpICs9IHBhcnQuc3RyaW5ncy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5fJHNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ2hpbGRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydE5vZGUsIGVuZE5vZGUsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMudHlwZSA9IENISUxEX1BBUlQ7XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgZmllbGRzIHdpbGwgYmUgcGF0Y2hlZCBvbnRvIENoaWxkUGFydHMgd2hlbiByZXF1aXJlZCBieVxuICAgICAgICAvLyBBc3luY0RpcmVjdGl2ZVxuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kc3RhcnROb2RlID0gc3RhcnROb2RlO1xuICAgICAgICB0aGlzLl8kZW5kTm9kZSA9IGVuZE5vZGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIC8vIE5vdGUgX19pc0Nvbm5lY3RlZCBpcyBvbmx5IGV2ZXIgYWNjZXNzZWQgb24gUm9vdFBhcnRzIChpLmUuIHdoZW4gdGhlcmUgaXNcbiAgICAgICAgLy8gbm8gXyRwYXJlbnQpOyB0aGUgdmFsdWUgb24gYSBub24tcm9vdC1wYXJ0IGlzIFwiZG9uJ3QgY2FyZVwiLCBidXQgY2hlY2tpbmdcbiAgICAgICAgLy8gZm9yIHBhcmVudCB3b3VsZCBiZSBtb3JlIGNvZGVcbiAgICAgICAgdGhpcy5fX2lzQ29ubmVjdGVkID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmlzQ29ubmVjdGVkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0cnVlO1xuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAvLyBFeHBsaWNpdGx5IGluaXRpYWxpemUgZm9yIGNvbnNpc3RlbnQgY2xhc3Mgc2hhcGUuXG4gICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gQ2hpbGRQYXJ0cyB0aGF0IGFyZSBub3QgYXQgdGhlIHJvb3Qgc2hvdWxkIGFsd2F5cyBiZSBjcmVhdGVkIHdpdGggYVxuICAgICAgICAvLyBwYXJlbnQ7IG9ubHkgUm9vdENoaWxkTm9kZSdzIHdvbid0LCBzbyB0aGV5IHJldHVybiB0aGUgbG9jYWwgaXNDb25uZWN0ZWRcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuXyRwYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJGlzQ29ubmVjdGVkKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLl9faXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJlbnQgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJ0IHJlbmRlcnMgaXRzIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBBIENoaWxkUGFydCdzIGNvbnRlbnQgY29uc2lzdHMgb2YgYSByYW5nZSBvZiBhZGphY2VudCBjaGlsZCBub2RlcyBvZlxuICAgICAqIGAucGFyZW50Tm9kZWAsIHBvc3NpYmx5IGJvcmRlcmVkIGJ5ICdtYXJrZXIgbm9kZXMnIChgLnN0YXJ0Tm9kZWAgYW5kXG4gICAgICogYC5lbmROb2RlYCkuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgIGFyZSBub24tbnVsbCwgdGhlbiB0aGUgcGFydCdzIGNvbnRlbnRcbiAgICAgKiBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgYmV0d2VlbiBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAsIGV4Y2x1c2l2ZWx5LlxuICAgICAqXG4gICAgICogLSBJZiBgLnN0YXJ0Tm9kZWAgaXMgbm9uLW51bGwgYnV0IGAuZW5kTm9kZWAgaXMgbnVsbCwgdGhlbiB0aGUgcGFydCdzXG4gICAgICogY29udGVudCBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgZm9sbG93aW5nIGAuc3RhcnROb2RlYCwgdXAgdG8gYW5kXG4gICAgICogaW5jbHVkaW5nIHRoZSBsYXN0IGNoaWxkIG9mIGAucGFyZW50Tm9kZWAuIElmIGAuZW5kTm9kZWAgaXMgbm9uLW51bGwsIHRoZW5cbiAgICAgKiBgLnN0YXJ0Tm9kZWAgd2lsbCBhbHdheXMgYmUgbm9uLW51bGwuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5lbmROb2RlYCBhbmQgYC5zdGFydE5vZGVgIGFyZSBudWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiBgLnBhcmVudE5vZGVgLlxuICAgICAqL1xuICAgIGdldCBwYXJlbnROb2RlKCkge1xuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fJHBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAocGFyZW50Tm9kZSA9PT0gbnVsbCB8fCBwYXJlbnROb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnROb2RlLm5vZGVUeXBlKSA9PT0gMTEgLyogTm9kZS5ET0NVTUVOVF9GUkFHTUVOVCAqLykge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHBhcmVudE5vZGUgaXMgYSBEb2N1bWVudEZyYWdtZW50LCBpdCBtYXkgYmUgYmVjYXVzZSB0aGUgRE9NIGlzXG4gICAgICAgICAgICAvLyBzdGlsbCBpbiB0aGUgY2xvbmVkIGZyYWdtZW50IGR1cmluZyBpbml0aWFsIHJlbmRlcjsgaWYgc28sIGdldCB0aGUgcmVhbFxuICAgICAgICAgICAgLy8gcGFyZW50Tm9kZSB0aGUgcGFydCB3aWxsIGJlIGNvbW1pdHRlZCBpbnRvIGJ5IGFza2luZyB0aGUgcGFyZW50LlxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJlbnROb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCdzIGxlYWRpbmcgbWFya2VyIG5vZGUsIGlmIGFueS4gU2VlIGAucGFyZW50Tm9kZWAgZm9yIG1vcmVcbiAgICAgKiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgc3RhcnROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHN0YXJ0Tm9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnQncyB0cmFpbGluZyBtYXJrZXIgbm9kZSwgaWYgYW55LiBTZWUgYC5wYXJlbnROb2RlYCBmb3IgbW9yZVxuICAgICAqIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldCBlbmROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJGVuZE5vZGU7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoREVWX01PREUgJiYgdGhpcy5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoaXMgXFxgQ2hpbGRQYXJ0XFxgIGhhcyBubyBcXGBwYXJlbnROb2RlXFxgIGFuZCB0aGVyZWZvcmUgY2Fubm90IGFjY2VwdCBhIHZhbHVlLiBUaGlzIGxpa2VseSBtZWFucyB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBwYXJ0IHdhcyBtYW5pcHVsYXRlZCBpbiBhbiB1bnN1cHBvcnRlZCB3YXkgb3V0c2lkZSBvZiBMaXQncyBjb250cm9sIHN1Y2ggdGhhdCB0aGUgcGFydCdzIG1hcmtlciBub2RlcyB3ZXJlIGVqZWN0ZWQgZnJvbSBET00uIEZvciBleGFtcGxlLCBzZXR0aW5nIHRoZSBlbGVtZW50J3MgXFxgaW5uZXJIVE1MXFxgIG9yIFxcYHRleHRDb250ZW50XFxgIGNhbiBkbyB0aGlzLmApO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSwgZGlyZWN0aXZlUGFyZW50KTtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gTm9uLXJlbmRlcmluZyBjaGlsZCB2YWx1ZXMuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlc2UgZG8gbm90IHJlbmRlclxuICAgICAgICAgICAgLy8gZW1wdHkgdGV4dCBub2RlcyB0byBhdm9pZCBpc3N1ZXMgd2l0aCBwcmV2ZW50aW5nIGRlZmF1bHQgPHNsb3Q+XG4gICAgICAgICAgICAvLyBmYWxsYmFjayBjb250ZW50LlxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBub3RoaW5nIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBub3RoaW5nIHRvIGNoaWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLl8kc3RhcnROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiB0aGlzLl8kZW5kTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5fJHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAmJiB2YWx1ZSAhPT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWVbJ18kbGl0VHlwZSQnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUubm9kZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKERFVl9NT0RFICYmICgoX2EgPSB0aGlzLm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ob3N0KSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KGBbcHJvYmFibGUgbWlzdGFrZTogcmVuZGVyZWQgYSB0ZW1wbGF0ZSdzIGhvc3QgaW4gaXRzZWxmIGAgK1xuICAgICAgICAgICAgICAgICAgICBgKGNvbW1vbmx5IGNhdXNlZCBieSB3cml0aW5nIFxcJHt0aGlzfSBpbiBhIHRlbXBsYXRlXWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgQXR0ZW1wdGVkIHRvIHJlbmRlciB0aGUgdGVtcGxhdGUgaG9zdGAsIHZhbHVlLCBgaW5zaWRlIGl0c2VsZi4gVGhpcyBpcyBhbG1vc3QgYWx3YXlzIGEgbWlzdGFrZSwgYW5kIGluIGRldiBtb2RlIGAsIGB3ZSByZW5kZXIgc29tZSB3YXJuaW5nIHRleHQuIEluIHByb2R1Y3Rpb24gaG93ZXZlciwgd2UnbGwgYCwgYHJlbmRlciBpdCwgd2hpY2ggd2lsbCB1c3VhbGx5IHJlc3VsdCBpbiBhbiBlcnJvciwgYW5kIHNvbWV0aW1lcyBgLCBgaW4gdGhlIGVsZW1lbnQgZGlzYXBwZWFyaW5nIGZyb20gdGhlIERPTS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0l0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pbnNlcnQobm9kZSkge1xuICAgICAgICByZXR1cm4gd3JhcCh3cmFwKHRoaXMuXyRzdGFydE5vZGUpLnBhcmVudE5vZGUpLmluc2VydEJlZm9yZShub2RlLCB0aGlzLl8kZW5kTm9kZSk7XG4gICAgfVxuICAgIF9jb21taXROb2RlKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyAmJlxuICAgICAgICAgICAgICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVOYW1lID0gKF9hID0gdGhpcy5fJHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lID09PSAnU1RZTEUnIHx8IHBhcmVudE5vZGVOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICdGb3JiaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSA9PT0gJ1NUWUxFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGl0IGRvZXMgbm90IHN1cHBvcnQgYmluZGluZyBpbnNpZGUgc3R5bGUgbm9kZXMuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFRoaXMgaXMgYSBzZWN1cml0eSByaXNrLCBhcyBzdHlsZSBpbmplY3Rpb24gYXR0YWNrcyBjYW4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZXhmaWx0cmF0ZSBkYXRhIGFuZCBzcG9vZiBVSXMuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYENvbnNpZGVyIGluc3RlYWQgdXNpbmcgY3NzXFxgLi4uXFxgIGxpdGVyYWxzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRvIGNvbXBvc2Ugc3R5bGVzLCBhbmQgbWFrZSBkbyBkeW5hbWljIHN0eWxpbmcgd2l0aCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjc3MgY3VzdG9tIHByb3BlcnRpZXMsIDo6cGFydHMsIDxzbG90PnMsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGFuZCBieSBtdXRhdGluZyB0aGUgRE9NIHJhdGhlciB0aGFuIHN0eWxlc2hlZXRzLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYExpdCBkb2VzIG5vdCBzdXBwb3J0IGJpbmRpbmcgaW5zaWRlIHNjcmlwdCBub2Rlcy4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgVGhpcyBpcyBhIHNlY3VyaXR5IHJpc2ssIGFzIGl0IGNvdWxkIGFsbG93IGFyYml0cmFyeSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjb2RlIGV4ZWN1dGlvbi5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgbm9kZScsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuXyRzdGFydE5vZGUsXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLl8kcGFyZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHRoaXMuX2luc2VydCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NvbW1pdFRleHQodmFsdWUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNvbW1pdHRlZCB2YWx1ZSBpcyBhIHByaW1pdGl2ZSBpdCBtZWFucyB3ZSBjYWxsZWQgX2NvbW1pdFRleHQgb25cbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHJlbmRlciwgYW5kIHdlIGtub3cgdGhhdCB0aGlzLl8kc3RhcnROb2RlLm5leHRTaWJsaW5nIGlzIGFcbiAgICAgICAgLy8gVGV4dCBub2RlLiBXZSBjYW4gbm93IGp1c3QgcmVwbGFjZSB0aGUgdGV4dCBjb250ZW50ICguZGF0YSkgb2YgdGhlIG5vZGUuXG4gICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IG5vdGhpbmcgJiZcbiAgICAgICAgICAgIGlzUHJpbWl0aXZlKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0U2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcihub2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUodGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gc2V0dGluZyB0ZXh0IGNvbnRlbnQsIGZvciBzZWN1cml0eSBwdXJwb3NlcyBpdCBtYXR0ZXJzIGEgbG90XG4gICAgICAgICAgICAgICAgLy8gd2hhdCB0aGUgcGFyZW50IGlzLiBGb3IgZXhhbXBsZSwgPHN0eWxlPiBhbmQgPHNjcmlwdD4gbmVlZCB0byBiZVxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZWQgd2l0aCBjYXJlLCB3aGlsZSA8c3Bhbj4gZG9lcyBub3QuIFNvIGZpcnN0IHdlIG5lZWQgdG8gcHV0IGFcbiAgICAgICAgICAgICAgICAvLyB0ZXh0IG5vZGUgaW50byB0aGUgZG9jdW1lbnQsIHRoZW4gd2UgY2FuIHNhbml0aXplIGl0cyBjb250ZW50LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0U2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcih0ZXh0Tm9kZSwgJ2RhdGEnLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl90ZXh0U2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgICAgICAgICAgICBub2RlOiB0ZXh0Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5kYXRhID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKGQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgICAgICAgICAgICBub2RlOiB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfY29tbWl0VGVtcGxhdGVSZXN1bHQocmVzdWx0KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIFsnXyRsaXRUeXBlJCddOiB0eXBlIH0gPSByZXN1bHQ7XG4gICAgICAgIC8vIElmICRsaXRUeXBlJCBpcyBhIG51bWJlciwgcmVzdWx0IGlzIGEgcGxhaW4gVGVtcGxhdGVSZXN1bHQgYW5kIHdlIGdldFxuICAgICAgICAvLyB0aGUgdGVtcGxhdGUgZnJvbSB0aGUgdGVtcGxhdGUgY2FjaGUuIElmIG5vdCwgcmVzdWx0IGlzIGFcbiAgICAgICAgLy8gQ29tcGlsZWRUZW1wbGF0ZVJlc3VsdCBhbmQgXyRsaXRUeXBlJCBpcyBhIENvbXBpbGVkVGVtcGxhdGUgYW5kIHdlIG5lZWRcbiAgICAgICAgLy8gdG8gY3JlYXRlIHRoZSA8dGVtcGxhdGU+IGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIGl0LlxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHR5cGVvZiB0eXBlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgPyB0aGlzLl8kZ2V0VGVtcGxhdGUocmVzdWx0KVxuICAgICAgICAgICAgOiAodHlwZS5lbCA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgKHR5cGUuZWwgPSBUZW1wbGF0ZS5jcmVhdGVFbGVtZW50KHRydXN0RnJvbVRlbXBsYXRlU3RyaW5nKHR5cGUuaCwgdHlwZS5oWzBdKSwgdGhpcy5vcHRpb25zKSksXG4gICAgICAgICAgICAgICAgdHlwZSk7XG4gICAgICAgIGlmICgoKF9hID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuXyR0ZW1wbGF0ZSkgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSB1cGRhdGluZycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICBwYXJ0czogdGhpcy5fJGNvbW1pdHRlZFZhbHVlLl8kcGFydHMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLl91cGRhdGUodmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIGluc3RhbnRpYXRlZCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgcGFydHM6IGluc3RhbmNlLl8kcGFydHMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW5zdGFuY2UuX3VwZGF0ZSh2YWx1ZXMpO1xuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgaW5zdGFudGlhdGVkIGFuZCB1cGRhdGVkJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgICBwYXJ0czogaW5zdGFuY2UuXyRwYXJ0cyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUG9seWZpbGxTdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kZ2V0VGVtcGxhdGUocmVzdWx0KSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlQ2FjaGUuc2V0KHJlc3VsdC5zdHJpbmdzLCAodGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0KSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgICAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAgICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG4gICAgICAgIC8vIElmIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgICAgIC8vIGl0ZXJhYmxlIGFuZCB2YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIENoaWxkUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gcmVuZGVyLiBJZiB2YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgQ2hpbGRQYXJ0cy5cbiAgICAgICAgaWYgKCFpc0FycmF5KHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICAgICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0SW5kZXggPT09IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IHRlc3QgcGVyZiBpbXBhY3Qgb2YgYWx3YXlzIGNyZWF0aW5nIHR3byBwYXJ0c1xuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2Ygc2hhcmluZyBwYXJ0cyBiZXR3ZWVuIG5vZGVzXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzEyNjZcbiAgICAgICAgICAgICAgICBpdGVtUGFydHMucHVzaCgoaXRlbVBhcnQgPSBuZXcgQ2hpbGRQYXJ0KHRoaXMuX2luc2VydChjcmVhdGVNYXJrZXIoKSksIHRoaXMuX2luc2VydChjcmVhdGVNYXJrZXIoKSksIHRoaXMsIHRoaXMub3B0aW9ucykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuXyRzZXRWYWx1ZShpdGVtKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBpdGVtUGFydHMgYWx3YXlzIGhhdmUgZW5kIG5vZGVzXG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoaXRlbVBhcnQgJiYgd3JhcChpdGVtUGFydC5fJGVuZE5vZGUpLm5leHRTaWJsaW5nLCBwYXJ0SW5kZXgpO1xuICAgICAgICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBub2RlcyBjb250YWluZWQgd2l0aGluIHRoaXMgUGFydCBmcm9tIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RhcnQgU3RhcnQgbm9kZSB0byBjbGVhciBmcm9tLCBmb3IgY2xlYXJpbmcgYSBzdWJzZXQgb2YgdGhlIHBhcnQnc1xuICAgICAqICAgICBET00gKHVzZWQgd2hlbiB0cnVuY2F0aW5nIGl0ZXJhYmxlcylcbiAgICAgKiBAcGFyYW0gZnJvbSAgV2hlbiBgc3RhcnRgIGlzIHNwZWNpZmllZCwgdGhlIGluZGV4IHdpdGhpbiB0aGUgaXRlcmFibGUgZnJvbVxuICAgICAqICAgICB3aGljaCBDaGlsZFBhcnRzIGFyZSBiZWluZyByZW1vdmVkLCB1c2VkIGZvciBkaXNjb25uZWN0aW5nIGRpcmVjdGl2ZXMgaW5cbiAgICAgKiAgICAgdGhvc2UgUGFydHMuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJGNsZWFyKHN0YXJ0ID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZywgZnJvbSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuXyRub3RpZnlDb25uZWN0aW9uQ2hhbmdlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcywgZmFsc2UsIHRydWUsIGZyb20pO1xuICAgICAgICB3aGlsZSAoc3RhcnQgJiYgc3RhcnQgIT09IHRoaXMuXyRlbmROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gd3JhcChzdGFydCkubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB3cmFwKHN0YXJ0KS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHN0YXJ0ID0gbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBSb290UGFydCdzIGBpc0Nvbm5lY3RlZGAuIE5vdGUgdGhhdCB0aGlzIG1ldG9kXG4gICAgICogc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uIGBSb290UGFydGBzICh0aGUgYENoaWxkUGFydGAgcmV0dXJuZWQgZnJvbSBhXG4gICAgICogdG9wLWxldmVsIGByZW5kZXIoKWAgY2FsbCkuIEl0IGhhcyBubyBlZmZlY3Qgb24gbm9uLXJvb3QgQ2hpbGRQYXJ0cy5cbiAgICAgKiBAcGFyYW0gaXNDb25uZWN0ZWQgV2hldGhlciB0byBzZXRcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBzZXRDb25uZWN0ZWQoaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhpcy5fJHBhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9faXNDb25uZWN0ZWQgPSBpc0Nvbm5lY3RlZDtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuXyRub3RpZnlDb25uZWN0aW9uQ2hhbmdlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcywgaXNDb25uZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BhcnQuc2V0Q29ubmVjdGVkKCkgbWF5IG9ubHkgYmUgY2FsbGVkIG9uIGEgJyArXG4gICAgICAgICAgICAgICAgJ1Jvb3RQYXJ0IHJldHVybmVkIGZyb20gcmVuZGVyKCkuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50eXBlID0gQVRUUklCVVRFX1BBUlQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHN0cmluZ3MubGVuZ3RoID4gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbmV3IEFycmF5KHN0cmluZ3MubGVuZ3RoIC0gMSkuZmlsbChuZXcgU3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB0YWdOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnRhZ05hbWU7XG4gICAgfVxuICAgIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQuXyRpc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJ0IGJ5IHJlc29sdmluZyB0aGUgdmFsdWUgZnJvbSBwb3NzaWJseSBtdWx0aXBsZVxuICAgICAqIHZhbHVlcyBhbmQgc3RhdGljIHN0cmluZ3MgYW5kIGNvbW1pdHRpbmcgaXQgdG8gdGhlIERPTS5cbiAgICAgKiBJZiB0aGlzIHBhcnQgaXMgc2luZ2xlLXZhbHVlZCwgYHRoaXMuX3N0cmluZ3NgIHdpbGwgYmUgdW5kZWZpbmVkLCBhbmQgdGhlXG4gICAgICogbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdpdGggYSBzaW5nbGUgdmFsdWUgYXJndW1lbnQuIElmIHRoaXMgcGFydCBpc1xuICAgICAqIG11bHRpLXZhbHVlLCBgdGhpcy5fc3RyaW5nc2Agd2lsbCBiZSBkZWZpbmVkLCBhbmQgdGhlIG1ldGhvZCBpcyBjYWxsZWRcbiAgICAgKiB3aXRoIHRoZSB2YWx1ZSBhcnJheSBvZiB0aGUgcGFydCdzIG93bmluZyBUZW1wbGF0ZUluc3RhbmNlLCBhbmQgYW4gb2Zmc2V0XG4gICAgICogaW50byB0aGUgdmFsdWUgYXJyYXkgZnJvbSB3aGljaCB0aGUgdmFsdWVzIHNob3VsZCBiZSByZWFkLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG92ZXJsb2FkZWQgdGhpcyB3YXkgdG8gZWxpbWluYXRlIHNob3J0LWxpdmVkIGFycmF5IHNsaWNlc1xuICAgICAqIG9mIHRoZSB0ZW1wbGF0ZSBpbnN0YW5jZSB2YWx1ZXMsIGFuZCBhbGxvdyBhIGZhc3QtcGF0aCBmb3Igc2luZ2xlLXZhbHVlZFxuICAgICAqIHBhcnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBwYXJ0IHZhbHVlLCBvciBhbiBhcnJheSBvZiB2YWx1ZXMgZm9yIG11bHRpLXZhbHVlZCBwYXJ0c1xuICAgICAqIEBwYXJhbSB2YWx1ZUluZGV4IHRoZSBpbmRleCB0byBzdGFydCByZWFkaW5nIHZhbHVlcyBmcm9tLiBgdW5kZWZpbmVkYCBmb3JcbiAgICAgKiAgIHNpbmdsZS12YWx1ZWQgcGFydHNcbiAgICAgKiBAcGFyYW0gbm9Db21taXQgY2F1c2VzIHRoZSBwYXJ0IHRvIG5vdCBjb21taXQgaXRzIHZhbHVlIHRvIHRoZSBET00uIFVzZWRcbiAgICAgKiAgIGluIGh5ZHJhdGlvbiB0byBwcmltZSBhdHRyaWJ1dGUgcGFydHMgd2l0aCB0aGVpciBmaXJzdC1yZW5kZXJlZCB2YWx1ZSxcbiAgICAgKiAgIGJ1dCBub3Qgc2V0IHRoZSBhdHRyaWJ1dGUsIGFuZCBpbiBTU1IgdG8gbm8tb3AgdGhlIERPTSBvcGVyYXRpb24gYW5kXG4gICAgICogICBjYXB0dXJlIHRoZSB2YWx1ZSBmb3Igc2VyaWFsaXphdGlvbi5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF8kc2V0VmFsdWUodmFsdWUsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMsIHZhbHVlSW5kZXgsIG5vQ29tbWl0KSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgICAgIC8vIFdoZXRoZXIgYW55IG9mIHRoZSB2YWx1ZXMgaGFzIGNoYW5nZWQsIGZvciBkaXJ0eS1jaGVja2luZ1xuICAgICAgICBsZXQgY2hhbmdlID0gZmFsc2U7XG4gICAgICAgIGlmIChzdHJpbmdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFNpbmdsZS12YWx1ZSBiaW5kaW5nIGNhc2VcbiAgICAgICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSwgZGlyZWN0aXZlUGFyZW50LCAwKTtcbiAgICAgICAgICAgIGNoYW5nZSA9XG4gICAgICAgICAgICAgICAgIWlzUHJpbWl0aXZlKHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICAodmFsdWUgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAmJiB2YWx1ZSAhPT0gbm9DaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKGNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSW50ZXJwb2xhdGlvbiBjYXNlXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gc3RyaW5nc1swXTtcbiAgICAgICAgICAgIGxldCBpLCB2O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdiA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWVzW3ZhbHVlSW5kZXggKyBpXSwgZGlyZWN0aXZlUGFyZW50LCBpKTtcbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXItcHJvdmlkZWQgdmFsdWUgaXMgYG5vQ2hhbmdlYCwgdXNlIHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGFuZ2UgfHwgKGNoYW5nZSA9ICFpc1ByaW1pdGl2ZSh2KSB8fCB2ICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIGlmICh2ID09PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbm90aGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gKHYgIT09IG51bGwgJiYgdiAhPT0gdm9pZCAwID8gdiA6ICcnKSArIHN0cmluZ3NbaSArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBXZSBhbHdheXMgcmVjb3JkIGVhY2ggdmFsdWUsIGV2ZW4gaWYgb25lIGlzIGBub3RoaW5nYCwgZm9yIGZ1dHVyZVxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAgICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlICYmICFub0NvbW1pdCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBub3RoaW5nKSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Nhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZSwgJ2F0dHJpYnV0ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3Nhbml0aXplcih2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgYXR0cmlidXRlJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiAnJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFBST1BFUlRZX1BBUlQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Nhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCBwcm9wZXJ0eScsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHRoaXMuZWxlbWVudFt0aGlzLm5hbWVdID0gdmFsdWUgPT09IG5vdGhpbmcgPyB1bmRlZmluZWQgOiB2YWx1ZTtcbiAgICB9XG59XG4vLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9jcmJ1Zy5jb20vOTkzMjY4XG4vLyBDdXJyZW50bHksIGFueSBhdHRyaWJ1dGUgc3RhcnRpbmcgd2l0aCBcIm9uXCIgaXMgY29uc2lkZXJlZCB0byBiZSBhXG4vLyBUcnVzdGVkU2NyaXB0IHNvdXJjZS4gU3VjaCBib29sZWFuIGF0dHJpYnV0ZXMgbXVzdCBiZSBzZXQgdG8gdGhlIGVxdWl2YWxlbnRcbi8vIHRydXN0ZWQgZW1wdHlTY3JpcHQgdmFsdWUuXG5jb25zdCBlbXB0eVN0cmluZ0ZvckJvb2xlYW5BdHRyaWJ1dGUgPSB0cnVzdGVkVHlwZXNcbiAgICA/IHRydXN0ZWRUeXBlcy5lbXB0eVNjcmlwdFxuICAgIDogJyc7XG5jbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBCT09MRUFOX0FUVFJJQlVURV9QQVJUO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IGJvb2xlYW4gYXR0cmlidXRlJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiAhISh2YWx1ZSAmJiB2YWx1ZSAhPT0gbm90aGluZyksXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCBlbXB0eVN0cmluZ0ZvckJvb2xlYW5BdHRyaWJ1dGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgRXZlbnRQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIHBhcmVudCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHlwZSA9IEVWRU5UX1BBUlQ7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJiB0aGlzLnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIFxcYDwke2VsZW1lbnQubG9jYWxOYW1lfT5cXGAgaGFzIGEgXFxgQCR7bmFtZX09Li4uXFxgIGxpc3RlbmVyIHdpdGggYCArXG4gICAgICAgICAgICAgICAgJ2ludmFsaWQgY29udGVudC4gRXZlbnQgbGlzdGVuZXJzIGluIHRlbXBsYXRlcyBtdXN0IGhhdmUgZXhhY3RseSAnICtcbiAgICAgICAgICAgICAgICAnb25lIGV4cHJlc3Npb24gYW5kIG5vIHN1cnJvdW5kaW5nIHRleHQuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRXZlbnRQYXJ0IGRvZXMgbm90IHVzZSB0aGUgYmFzZSBfJHNldFZhbHVlL19yZXNvbHZlVmFsdWUgaW1wbGVtZW50YXRpb25cbiAgICAvLyBzaW5jZSB0aGUgZGlydHkgY2hlY2tpbmcgaXMgbW9yZSBjb21wbGV4XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kc2V0VmFsdWUobmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBuZXdMaXN0ZW5lciA9XG4gICAgICAgICAgICAoX2EgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIG5ld0xpc3RlbmVyLCBkaXJlY3RpdmVQYXJlbnQsIDApKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBub3RoaW5nO1xuICAgICAgICBpZiAobmV3TGlzdGVuZXIgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWU7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90aGluZyBvciBhbnkgb3B0aW9ucyBjaGFuZ2Ugd2UgaGF2ZSB0byByZW1vdmUgdGhlXG4gICAgICAgIC8vIHBhcnQgYXMgYSBsaXN0ZW5lci5cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPSAobmV3TGlzdGVuZXIgPT09IG5vdGhpbmcgJiYgb2xkTGlzdGVuZXIgIT09IG5vdGhpbmcpIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5jYXB0dXJlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIub25jZSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5wYXNzaXZlO1xuICAgICAgICAvLyBJZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBub3RoaW5nIGFuZCB3ZSByZW1vdmVkIHRoZSBsaXN0ZW5lciwgd2UgaGF2ZVxuICAgICAgICAvLyB0byBhZGQgdGhlIHBhcnQgYXMgYSBsaXN0ZW5lci5cbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciAhPT0gbm90aGluZyAmJlxuICAgICAgICAgICAgKG9sZExpc3RlbmVyID09PSBub3RoaW5nIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgZXZlbnQgbGlzdGVuZXInLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IG5ld0xpc3RlbmVyLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IHNob3VsZFJlbW92ZUxpc3RlbmVyLFxuICAgICAgICAgICAgYWRkTGlzdGVuZXI6IHNob3VsZEFkZExpc3RlbmVyLFxuICAgICAgICAgICAgb2xkTGlzdGVuZXIsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgb2xkTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgLy8gQmV3YXJlOiBJRTExIGFuZCBDaHJvbWUgNDEgZG9uJ3QgbGlrZSB1c2luZyB0aGUgbGlzdGVuZXIgYXMgdGhlXG4gICAgICAgICAgICAvLyBvcHRpb25zIG9iamVjdC4gRmlndXJlIG91dCBob3cgdG8gZGVhbCB3LyB0aGlzIGluIElFMTEgLSBtYXliZVxuICAgICAgICAgICAgLy8gcGF0Y2ggYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgbmV3TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLmNhbGwoKF9iID0gKF9hID0gdGhpcy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaG9zdCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgRWxlbWVudFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnR5cGUgPSBFTEVNRU5UX1BBUlQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQuXyRpc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0byBlbGVtZW50IGJpbmRpbmcnLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlKTtcbiAgICB9XG59XG4vKipcbiAqIEVORCBVU0VSUyBTSE9VTEQgTk9UIFJFTFkgT04gVEhJUyBPQkpFQ1QuXG4gKlxuICogUHJpdmF0ZSBleHBvcnRzIGZvciB1c2UgYnkgb3RoZXIgTGl0IHBhY2thZ2VzLCBub3QgaW50ZW5kZWQgZm9yIHVzZSBieVxuICogZXh0ZXJuYWwgdXNlcnMuXG4gKlxuICogV2UgY3VycmVudGx5IGRvIG5vdCBtYWtlIGEgbWFuZ2xlZCByb2xsdXAgYnVpbGQgb2YgdGhlIGxpdC1zc3IgY29kZS4gSW4gb3JkZXJcbiAqIHRvIGtlZXAgYSBudW1iZXIgb2YgKG90aGVyd2lzZSBwcml2YXRlKSB0b3AtbGV2ZWwgZXhwb3J0cyAgbWFuZ2xlZCBpbiB0aGVcbiAqIGNsaWVudCBzaWRlIGNvZGUsIHdlIGV4cG9ydCBhIF8kTEggb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtZWxlbWVudCwgd2hpY2ggcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF8kTEggPSB7XG4gICAgLy8gVXNlZCBpbiBsaXQtc3NyXG4gICAgX2JvdW5kQXR0cmlidXRlU3VmZml4OiBib3VuZEF0dHJpYnV0ZVN1ZmZpeCxcbiAgICBfbWFya2VyOiBtYXJrZXIsXG4gICAgX21hcmtlck1hdGNoOiBtYXJrZXJNYXRjaCxcbiAgICBfSFRNTF9SRVNVTFQ6IEhUTUxfUkVTVUxULFxuICAgIF9nZXRUZW1wbGF0ZUh0bWw6IGdldFRlbXBsYXRlSHRtbCxcbiAgICAvLyBVc2VkIGluIHRlc3RzIGFuZCBwcml2YXRlLXNzci1zdXBwb3J0XG4gICAgX1RlbXBsYXRlSW5zdGFuY2U6IFRlbXBsYXRlSW5zdGFuY2UsXG4gICAgX2lzSXRlcmFibGU6IGlzSXRlcmFibGUsXG4gICAgX3Jlc29sdmVEaXJlY3RpdmU6IHJlc29sdmVEaXJlY3RpdmUsXG4gICAgX0NoaWxkUGFydDogQ2hpbGRQYXJ0LFxuICAgIF9BdHRyaWJ1dGVQYXJ0OiBBdHRyaWJ1dGVQYXJ0LFxuICAgIF9Cb29sZWFuQXR0cmlidXRlUGFydDogQm9vbGVhbkF0dHJpYnV0ZVBhcnQsXG4gICAgX0V2ZW50UGFydDogRXZlbnRQYXJ0LFxuICAgIF9Qcm9wZXJ0eVBhcnQ6IFByb3BlcnR5UGFydCxcbiAgICBfRWxlbWVudFBhcnQ6IEVsZW1lbnRQYXJ0LFxufTtcbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gICAgPyBnbG9iYWwubGl0SHRtbFBvbHlmaWxsU3VwcG9ydERldk1vZGVcbiAgICA6IGdsb2JhbC5saXRIdG1sUG9seWZpbGxTdXBwb3J0O1xucG9seWZpbGxTdXBwb3J0ID09PSBudWxsIHx8IHBvbHlmaWxsU3VwcG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9seWZpbGxTdXBwb3J0KFRlbXBsYXRlLCBDaGlsZFBhcnQpO1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBsaXQtaHRtbCB1c2FnZS5cbigoX2QgPSBnbG9iYWwubGl0SHRtbFZlcnNpb25zKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAoZ2xvYmFsLmxpdEh0bWxWZXJzaW9ucyA9IFtdKSkucHVzaCgnMi44LjAnKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWwubGl0SHRtbFZlcnNpb25zLmxlbmd0aCA+IDEpIHtcbiAgICBpc3N1ZVdhcm5pbmcoJ211bHRpcGxlLXZlcnNpb25zJywgYE11bHRpcGxlIHZlcnNpb25zIG9mIExpdCBsb2FkZWQuIGAgK1xuICAgICAgICBgTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBpcyBub3QgcmVjb21tZW5kZWQuYCk7XG59XG4vKipcbiAqIFJlbmRlcnMgYSB2YWx1ZSwgdXN1YWxseSBhIGxpdC1odG1sIFRlbXBsYXRlUmVzdWx0LCB0byB0aGUgY29udGFpbmVyLlxuICpcbiAqIFRoaXMgZXhhbXBsZSByZW5kZXJzIHRoZSB0ZXh0IFwiSGVsbG8sIFpvZSFcIiBpbnNpZGUgYSBwYXJhZ3JhcGggdGFnLCBhcHBlbmRpbmdcbiAqIGl0IHRvIHRoZSBjb250YWluZXIgYGRvY3VtZW50LmJvZHlgLlxuICpcbiAqIGBgYGpzXG4gKiBpbXBvcnQge2h0bWwsIHJlbmRlcn0gZnJvbSAnbGl0JztcbiAqXG4gKiBjb25zdCBuYW1lID0gXCJab2VcIjtcbiAqIHJlbmRlcihodG1sYDxwPkhlbGxvLCAke25hbWV9ITwvcD5gLCBkb2N1bWVudC5ib2R5KTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB2YWx1ZSBBbnkgW3JlbmRlcmFibGVcbiAqICAgdmFsdWVdKGh0dHBzOi8vbGl0LmRldi9kb2NzL3RlbXBsYXRlcy9leHByZXNzaW9ucy8jY2hpbGQtZXhwcmVzc2lvbnMpLFxuICogICB0eXBpY2FsbHkgYSB7QGxpbmtjb2RlIFRlbXBsYXRlUmVzdWx0fSBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWdcbiAqICAgbGlrZSB7QGxpbmtjb2RlIGh0bWx9IG9yIHtAbGlua2NvZGUgc3ZnfS5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gY29udGFpbmVyIHRvIHJlbmRlciB0by4gVGhlIGZpcnN0IHJlbmRlciB3aWxsIGFwcGVuZFxuICogICB0aGUgcmVuZGVyZWQgdmFsdWUgdG8gdGhlIGNvbnRhaW5lciwgYW5kIHN1YnNlcXVlbnQgcmVuZGVycyB3aWxsXG4gKiAgIGVmZmljaWVudGx5IHVwZGF0ZSB0aGUgcmVuZGVyZWQgdmFsdWUgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzXG4gKiAgIHByZXZpb3VzbHkgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBTZWUge0BsaW5rY29kZSBSZW5kZXJPcHRpb25zfSBmb3Igb3B0aW9ucyBkb2N1bWVudGF0aW9uLlxuICogQHNlZVxuICoge0BsaW5rIGh0dHBzOi8vbGl0LmRldi9kb2NzL2xpYnJhcmllcy9zdGFuZGFsb25lLXRlbXBsYXRlcy8jcmVuZGVyaW5nLWxpdC1odG1sLXRlbXBsYXRlc3wgUmVuZGVyaW5nIExpdCBIVE1MIFRlbXBsYXRlc31cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9ICh2YWx1ZSwgY29udGFpbmVyLCBvcHRpb25zKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBpZiAoREVWX01PREUgJiYgY29udGFpbmVyID09IG51bGwpIHtcbiAgICAgICAgLy8gR2l2ZSBhIGNsZWFyZXIgZXJyb3IgbWVzc2FnZSB0aGFuXG4gICAgICAgIC8vICAgICBVbmNhdWdodCBUeXBlRXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnRpZXMgb2YgbnVsbCAocmVhZGluZ1xuICAgICAgICAvLyAgICAgJ18kbGl0UGFydCQnKVxuICAgICAgICAvLyB3aGljaCByZWFkcyBsaWtlIGFuIGludGVybmFsIExpdCBlcnJvci5cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGNvbnRhaW5lciB0byByZW5kZXIgaW50byBtYXkgbm90IGJlICR7Y29udGFpbmVyfWApO1xuICAgIH1cbiAgICBjb25zdCByZW5kZXJJZCA9IERFVl9NT0RFID8gZGVidWdMb2dSZW5kZXJJZCsrIDogMDtcbiAgICBjb25zdCBwYXJ0T3duZXJOb2RlID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJlbmRlckJlZm9yZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogY29udGFpbmVyO1xuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBsZXQgcGFydCA9IHBhcnRPd25lck5vZGVbJ18kbGl0UGFydCQnXTtcbiAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICBraW5kOiAnYmVnaW4gcmVuZGVyJyxcbiAgICAgICAgaWQ6IHJlbmRlcklkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBwYXJ0LFxuICAgIH0pO1xuICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZW5kTm9kZSA9IChfYiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHBhcnRPd25lck5vZGVbJ18kbGl0UGFydCQnXSA9IHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIGVuZE5vZGUpLCBlbmROb2RlLCB1bmRlZmluZWQsIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9KTtcbiAgICB9XG4gICAgcGFydC5fJHNldFZhbHVlKHZhbHVlKTtcbiAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICBraW5kOiAnZW5kIHJlbmRlcicsXG4gICAgICAgIGlkOiByZW5kZXJJZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgcGFydCxcbiAgICB9KTtcbiAgICByZXR1cm4gcGFydDtcbn07XG5pZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgcmVuZGVyLnNldFNhbml0aXplciA9IHNldFNhbml0aXplcjtcbiAgICByZW5kZXIuY3JlYXRlU2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyO1xuICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICByZW5kZXIuX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlID1cbiAgICAgICAgICAgIF90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FuZHJvaWQtdHYtY2FyZC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
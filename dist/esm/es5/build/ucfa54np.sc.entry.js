import{h}from"../wcs.core.js";var Tab=function(){function e(){this.slot="wcs-tab"}return e.prototype.componentDidLoad=function(){this.wcsTabDidLoad.emit()},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"wcs-tab"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{header:{type:String,attr:"header",reflectToAttr:!0,mutable:!0},slot:{type:String,attr:"slot",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"wcsTabDidLoad",method:"wcsTabDidLoad",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}();export{Tab as WcsTab};
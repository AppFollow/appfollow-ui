(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{261:function(module,exports,__webpack_require__){__webpack_require__(262),__webpack_require__(374),module.exports=__webpack_require__(375)},283:function(module,exports){},375:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(376).configure)(__webpack_require__(558),module)}).call(this,__webpack_require__(48)(module))},558:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.js":559,"./1-Button.stories.js":566};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=558},559:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(255);Object.defineProperty(exports,"__esModule",{value:!0}),exports.toStorybook=exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(44)),_addonLinks=__webpack_require__(560),_demo=__webpack_require__(256);exports.default={title:"Welcome"};var toStorybook=function(){return _react.default.createElement(_demo.Welcome,{showApp:(0,_addonLinks.linkTo)("Button")})};exports.toStorybook=toStorybook,toStorybook.displayName="toStorybook",toStorybook.story={name:"to Storybook"},toStorybook.__docgenInfo={description:"",methods:[],displayName:"toStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Welcome.stories.js"]={name:"toStorybook",docgenInfo:toStorybook.__docgenInfo,path:"stories/0-Welcome.stories.js"})},566:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(255);Object.defineProperty(exports,"__esModule",{value:!0}),exports.emoji=exports.text=exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(44)),_addonActions=__webpack_require__(567),_demo=__webpack_require__(256);exports.default={title:"Button"};var text=function(){return _react.default.createElement(_demo.Button,{onClick:(0,_addonActions.action)("clicked")},"Hello Button")};exports.text=text,text.displayName="text";var _ref=_react.default.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"),emoji=function(){return _react.default.createElement(_demo.Button,{onClick:(0,_addonActions.action)("clicked")},_ref)};exports.emoji=emoji,emoji.displayName="emoji",text.__docgenInfo={description:"",methods:[],displayName:"text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Button.stories.js"]={name:"text",docgenInfo:text.__docgenInfo,path:"stories/1-Button.stories.js"}),emoji.__docgenInfo={description:"",methods:[],displayName:"emoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Button.stories.js"]={name:"emoji",docgenInfo:emoji.__docgenInfo,path:"stories/1-Button.stories.js"})}},[[261,1,2]]]);
//# sourceMappingURL=main.39528b9bcc62cb64702e.bundle.js.map
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/newsLetterSignup.tsx":
/*!*****************************************!*\
  !*** ./components/newsLetterSignup.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewsletterSignup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction NewsletterSignup() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNameChange = (e)=>{\n        setName(e.target.value);\n    };\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // You can implement your subscription logic here\n        // For example, make an API request to subscribe the user\n        // After successful subscription, you can clear the form fields\n        setName(\"\");\n        setEmail(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto flex\",\n        style: {\n            border: \"\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"flex-grow shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                type: \"text\",\n                placeholder: \"Your Name\",\n                value: name,\n                onChange: handleNameChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aman\\\\Desktop\\\\Assert IT\\\\assertit-careerkarts-blog\\\\components\\\\newsLetterSignup.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"flex-grow shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                type: \"email\",\n                placeholder: \"youremail@example.com\",\n                value: email,\n                onChange: handleEmailChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aman\\\\Desktop\\\\Assert IT\\\\assertit-careerkarts-blog\\\\components\\\\newsLetterSignup.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline\",\n                type: \"submit\",\n                onClick: handleSubmit,\n                children: \"Subscribe\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aman\\\\Desktop\\\\Assert IT\\\\assertit-careerkarts-blog\\\\components\\\\newsLetterSignup.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Aman\\\\Desktop\\\\Assert IT\\\\assertit-careerkarts-blog\\\\components\\\\newsLetterSignup.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterSignup, \"+yYzMrF0jCuADaceubK5n/EGEjo=\");\n_c = NewsletterSignup;\nvar _c;\n$RefreshReg$(_c, \"NewsletterSignup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25ld3NMZXR0ZXJTaWdudXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFFbkMsTUFBTU0sbUJBQW1CLENBQUNDO1FBQ3hCSixRQUFRSSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDeEI7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0g7UUFDekJGLFNBQVNFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUVBLE1BQU1FLGVBQWUsQ0FBQ0o7UUFDcEJBLEVBQUVLLGNBQWM7UUFFaEIsaURBQWlEO1FBQ2pELHlEQUF5RDtRQUV6RCwrREFBK0Q7UUFDL0RULFFBQVE7UUFDUkUsU0FBUztJQUNYO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7UUFBeUJDLE9BQU87WUFBQ0MsUUFBUTtRQUFFOzswQkFDeEQsOERBQUNDO2dCQUNDSCxXQUFVO2dCQUNWSSxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaVixPQUFPUDtnQkFDUGtCLFVBQVVkO2dCQUNWZSxRQUFROzs7Ozs7MEJBRVYsOERBQUNKO2dCQUNDSCxXQUFVO2dCQUNWSSxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaVixPQUFPTDtnQkFDUGdCLFVBQVVWO2dCQUNWVyxRQUFROzs7Ozs7MEJBRVYsOERBQUNDO2dCQUNDUixXQUFVO2dCQUNWSSxNQUFLO2dCQUNMSyxTQUFTWjswQkFDVjs7Ozs7Ozs7Ozs7O0FBS1A7R0FsRHdCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25ld3NMZXR0ZXJTaWdudXAudHN4PzEzN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzbGV0dGVyU2lnbnVwKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBZb3UgY2FuIGltcGxlbWVudCB5b3VyIHN1YnNjcmlwdGlvbiBsb2dpYyBoZXJlXHJcbiAgICAvLyBGb3IgZXhhbXBsZSwgbWFrZSBhbiBBUEkgcmVxdWVzdCB0byBzdWJzY3JpYmUgdGhlIHVzZXJcclxuXHJcbiAgICAvLyBBZnRlciBzdWNjZXNzZnVsIHN1YnNjcmlwdGlvbiwgeW91IGNhbiBjbGVhciB0aGUgZm9ybSBmaWVsZHNcclxuICAgIHNldE5hbWUoJycpO1xyXG4gICAgc2V0RW1haWwoJycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXhcIiBzdHlsZT17e2JvcmRlcjogXCJcIn19PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZC1sIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCJcclxuICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwieW91cmVtYWlsQGV4YW1wbGUuY29tXCJcclxuICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfVxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICA+XHJcbiAgICAgICAgU3Vic2NyaWJlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJOZXdzbGV0dGVyU2lnbnVwIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwiaGFuZGxlTmFtZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/newsLetterSignup.tsx\n"));

/***/ })

});
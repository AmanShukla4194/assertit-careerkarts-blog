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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewsletterSignup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction NewsletterSignup() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNameChange = (e)=>{\n        setName(e.target.value);\n    };\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // You can implement your subscription logic here\n        // For example, make an API request to subscribe the user\n        // After successful subscription, you can clear the form fields\n        setName(\"\");\n        setEmail(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto flex\",\n        style: {\n            border: \"2px solid\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    border: \"2px solid\"\n                },\n                className: \"flex-grow mx-2 shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                type: \"text\",\n                placeholder: \"Your Name\",\n                value: name,\n                onChange: handleNameChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aman\\\\Desktop\\\\Assert IT\\\\assertit-careerkarts-blog\\\\components\\\\newsLetterSignup.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    border: \"2px solid\"\n                },\n                className: \"flex-grow shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                type: \"email\",\n                placeholder: \"youremail@example.com\",\n                value: email,\n                onChange: handleEmailChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aman\\\\Desktop\\\\Assert IT\\\\assertit-careerkarts-blog\\\\components\\\\newsLetterSignup.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline\",\n                type: \"submit\",\n                onClick: handleSubmit,\n                children: \"Subscribe\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aman\\\\Desktop\\\\Assert IT\\\\assertit-careerkarts-blog\\\\components\\\\newsLetterSignup.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Aman\\\\Desktop\\\\Assert IT\\\\assertit-careerkarts-blog\\\\components\\\\newsLetterSignup.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterSignup, \"+yYzMrF0jCuADaceubK5n/EGEjo=\");\n_c = NewsletterSignup;\nvar _c;\n$RefreshReg$(_c, \"NewsletterSignup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25ld3NMZXR0ZXJTaWdudXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFFbkMsTUFBTU0sbUJBQW1CLENBQUNDO1FBQ3hCSixRQUFRSSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDeEI7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0g7UUFDekJGLFNBQVNFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUVBLE1BQU1FLGVBQWUsQ0FBQ0o7UUFDcEJBLEVBQUVLLGNBQWM7UUFFaEIsaURBQWlEO1FBQ2pELHlEQUF5RDtRQUV6RCwrREFBK0Q7UUFDL0RULFFBQVE7UUFDUkUsU0FBUztJQUNYO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7UUFBeUJDLE9BQU87WUFBQ0MsUUFBUTtRQUFXOzswQkFDakUsOERBQUNDO2dCQUFNRixPQUFPO29CQUFDQyxRQUFRO2dCQUFXO2dCQUNoQ0YsV0FBVTtnQkFDVkksTUFBSztnQkFDTEMsYUFBWTtnQkFDWlYsT0FBT1A7Z0JBQ1BrQixVQUFVZDtnQkFDVmUsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDSjtnQkFBTUYsT0FBTztvQkFBQ0MsUUFBUTtnQkFBVztnQkFDaENGLFdBQVU7Z0JBQ1ZJLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pWLE9BQU9MO2dCQUNQZ0IsVUFBVVY7Z0JBQ1ZXLFFBQVE7Ozs7OzswQkFFViw4REFBQ0M7Z0JBQ0NSLFdBQVU7Z0JBQ1ZJLE1BQUs7Z0JBQ0xLLFNBQVNaOzBCQUNWOzs7Ozs7Ozs7Ozs7QUFLUDtHQWxEd0JWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmV3c0xldHRlclNpZ251cC50c3g/MTM3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NsZXR0ZXJTaWdudXAoKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIFlvdSBjYW4gaW1wbGVtZW50IHlvdXIgc3Vic2NyaXB0aW9uIGxvZ2ljIGhlcmVcclxuICAgIC8vIEZvciBleGFtcGxlLCBtYWtlIGFuIEFQSSByZXF1ZXN0IHRvIHN1YnNjcmliZSB0aGUgdXNlclxyXG5cclxuICAgIC8vIEFmdGVyIHN1Y2Nlc3NmdWwgc3Vic2NyaXB0aW9uLCB5b3UgY2FuIGNsZWFyIHRoZSBmb3JtIGZpZWxkc1xyXG4gICAgc2V0TmFtZSgnJyk7XHJcbiAgICBzZXRFbWFpbCgnJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleFwiIHN0eWxlPXt7Ym9yZGVyOiBcIjJweCBzb2xpZFwifX0+XHJcbiAgICAgIDxpbnB1dCBzdHlsZT17e2JvcmRlcjogXCIycHggc29saWRcIn19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IG14LTIgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZC1sIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCJcclxuICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXQgc3R5bGU9e3tib3JkZXI6IFwiMnB4IHNvbGlkXCJ9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyZW1haWxAZXhhbXBsZS5jb21cIlxyXG4gICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9XHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgID5cclxuICAgICAgICBTdWJzY3JpYmVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk5ld3NsZXR0ZXJTaWdudXAiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYm9yZGVyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/newsLetterSignup.tsx\n"));

/***/ })

});
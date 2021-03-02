webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");


var _jsxFileName = "C:\\ProjetosGit\\moveit-next\\src\\contexts\\CountdownContext.tsx",
    _s = $RefreshSig$();

//Contexto

 //formato dos dados retornados

var CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({}); //variaveis

var countdownTimeout;
function CountdownProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      startNewChallenge = _useContext.startNewChallenge; //funcionalidade minutos segundos


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.2 * 60),
      time = _useState[0],
      setTime = _useState[1]; //25 mn em sg
  //armazena se contdown ativo ou não


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1]; //inicia como false | time 00


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1];

  var minutes = Math.floor(time / 60); //pegar minutos arredondado

  var seconds = time % 60; //resto da divisão
  //Funções
  //Deccrescente

  function startCountdown() {
    setIsActive(true); //ativa
  } //reset


  function resetCountdown() {
    clearTimeout(countdownTimeout); //cancela a execução do timeout

    setIsActive(false); //desativa

    setTime(0.1 * 60); //valor inicial

    setHasFinished(false);
  } //efeito colateral de decrecimo


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        //retorna para countdownTimeout
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true); //00 verdadeiro

      setIsActive(false); //count finalizado

      startNewChallenge();
    }
  }, [isActive, time]); //executa quando valor de active mudar | e Time

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes: minutes,
      seconds: seconds,
      hasFinished: hasFinished,
      isActive: isActive,
      startCountdown: startCountdown,
      resetCountdown: resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, this);
}

_s(CountdownProvider, "k8nIWpFDjoUAViuJM+FcSOd0MCI=");

_c = CountdownProvider;

var _c;

$RefreshReg$(_c, "CountdownProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNvdW50ZG93bkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY291bnRkb3duVGltZW91dCIsIkNvdW50ZG93blByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzZXRIYXNGaW5pc2hlZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtDQUtBOztBQWNPLElBQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXRDLEMsQ0FFUDs7QUFDQSxJQUFJQyxnQkFBSjtBQUVPLFNBQVNDLGlCQUFULE9BQWlFO0FBQUE7O0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQzs7QUFBQSxvQkFDdENDLHdEQUFVLENBQUNDLG9FQUFELENBRDRCO0FBQUEsTUFDNURDLGlCQUQ0RCxlQUM1REEsaUJBRDRELEVBSXBFOzs7QUFKb0Usa0JBSzVDQyxzREFBUSxDQUFDLE1BQU0sRUFBUCxDQUxvQztBQUFBLE1BSzdEQyxJQUw2RDtBQUFBLE1BS3ZEQyxPQUx1RCxpQkFLMUI7QUFFMUM7OztBQVBvRSxtQkFRcENGLHNEQUFRLENBQUMsS0FBRCxDQVI0QjtBQUFBLE1BUTdERyxRQVI2RDtBQUFBLE1BUW5EQyxXQVJtRCxrQkFTcEU7OztBQVRvRSxtQkFVOUJKLHNEQUFRLENBQUMsS0FBRCxDQVZzQjtBQUFBLE1BVTdESyxXQVY2RDtBQUFBLE1BVWhEQyxjQVZnRDs7QUFhcEUsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCLENBYm9FLENBYTlCOztBQUN0QyxNQUFNUyxPQUFPLEdBQUdULElBQUksR0FBRyxFQUF2QixDQWRvRSxDQWN6QztBQUczQjtBQUNBOztBQUNBLFdBQVNVLGNBQVQsR0FBMEI7QUFDdEJQLGVBQVcsQ0FBQyxJQUFELENBQVgsQ0FEc0IsQ0FDSjtBQUNyQixHQXJCbUUsQ0F1QnBFOzs7QUFDQSxXQUFTUSxjQUFULEdBQTBCO0FBQ3RCQyxnQkFBWSxDQUFDbkIsZ0JBQUQsQ0FBWixDQURzQixDQUNTOztBQUMvQlUsZUFBVyxDQUFDLEtBQUQsQ0FBWCxDQUZzQixDQUVIOztBQUNuQkYsV0FBTyxDQUFDLE1BQU0sRUFBUCxDQUFQLENBSHNCLENBR0o7O0FBQ2xCSSxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUVILEdBOUJtRSxDQWdDcEU7OztBQUNBUSx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJWCxRQUFRLElBQUlGLElBQUksR0FBRyxDQUF2QixFQUEwQjtBQUN0QlAsc0JBQWdCLEdBQUdxQixVQUFVLENBQUMsWUFBTTtBQUFDO0FBQ2pDYixlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDSCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdILEtBSkQsTUFJTyxJQUFJRSxRQUFRLElBQUlGLElBQUksS0FBSyxDQUF6QixFQUE0QjtBQUMvQkssb0JBQWMsQ0FBQyxJQUFELENBQWQsQ0FEK0IsQ0FDVjs7QUFDckJGLGlCQUFXLENBQUMsS0FBRCxDQUFYLENBRitCLENBRVo7O0FBQ25CTCx1QkFBaUI7QUFFcEI7QUFDSixHQVhRLEVBV04sQ0FBQ0ksUUFBRCxFQUFXRixJQUFYLENBWE0sQ0FBVCxDQWpDb0UsQ0E0Q2hEOztBQUVwQixzQkFDSSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUU7QUFDOUJNLGFBQU8sRUFBUEEsT0FEOEI7QUFFOUJHLGFBQU8sRUFBUEEsT0FGOEI7QUFHOUJMLGlCQUFXLEVBQVhBLFdBSDhCO0FBSTlCRixjQUFRLEVBQVJBLFFBSjhCO0FBSzlCUSxvQkFBYyxFQUFkQSxjQUw4QjtBQU05QkMsb0JBQWMsRUFBZEE7QUFOOEIsS0FBbEM7QUFBQSxjQVNLaEI7QUFUTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDs7R0EzRGVELGlCOztLQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40OTQ1MTZkZjliNTRjYjQ3YTEzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db250ZXh0b1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvdW50ZG93biB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZG93blwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuL0NoYWxsZW5nZXNDb250ZXh0XCI7XHJcblxyXG5cclxuLy9mb3JtYXRvIGRvcyBkYWRvcyByZXRvcm5hZG9zXHJcbmludGVyZmFjZSBDb3VudGRvd25Db250ZXh0RGF0ZSB7XHJcbiAgICBtaW51dGVzOiBudW1iZXI7XHJcbiAgICBzZWNvbmRzOiBudW1iZXJcclxuICAgIGhhc0ZpbmlzaGVkOiBib29sZWFuO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBzdGFydENvdW50ZG93bjogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duUHJvdmlkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRkb3duQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ291bnRkb3duQ29udGV4dERhdGUpXHJcblxyXG4vL3ZhcmlhdmVpc1xyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDb3VudGRvd25Qcm92aWRlclByb3BzKSB7XHJcbiAgICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuXHJcblxyXG4gICAgLy9mdW5jaW9uYWxpZGFkZSBtaW51dG9zIHNlZ3VuZG9zXHJcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwLjIgKiA2MCkvLzI1IG1uIGVtIHNnXHJcblxyXG4gICAgLy9hcm1hemVuYSBzZSBjb250ZG93biBhdGl2byBvdSBuw6NvXHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vaW5pY2lhIGNvbW8gZmFsc2UgfCB0aW1lIDAwXHJcbiAgICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTsvL3BlZ2FyIG1pbnV0b3MgYXJyZWRvbmRhZG9cclxuICAgIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7IC8vcmVzdG8gZGEgZGl2aXPDo29cclxuXHJcblxyXG4gICAgLy9GdW7Dp8O1ZXNcclxuICAgIC8vRGVjY3Jlc2NlbnRlXHJcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcclxuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTsvL2F0aXZhXHJcbiAgICB9XHJcblxyXG4gICAgLy9yZXNldFxyXG4gICAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpOy8vY2FuY2VsYSBhIGV4ZWN1w6fDo28gZG8gdGltZW91dFxyXG4gICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTsvL2Rlc2F0aXZhXHJcbiAgICAgICAgc2V0VGltZSgwLjEgKiA2MCk7Ly92YWxvciBpbmljaWFsXHJcbiAgICAgICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2VmZWl0byBjb2xhdGVyYWwgZGUgZGVjcmVjaW1vXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCkge1xyXG4gICAgICAgICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7Ly9yZXRvcm5hIHBhcmEgY291bnRkb3duVGltZW91dFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZSh0aW1lIC0gMSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpOy8vMDAgdmVyZGFkZWlyb1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7Ly9jb3VudCBmaW5hbGl6YWRvXHJcbiAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0FjdGl2ZSwgdGltZV0pLy9leGVjdXRhIHF1YW5kbyB2YWxvciBkZSBhY3RpdmUgbXVkYXIgfCBlIFRpbWVcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgICAgIGhhc0ZpbmlzaGVkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZSxcclxuICAgICAgICAgICAgc3RhcnRDb3VudGRvd24sXHJcbiAgICAgICAgICAgIHJlc2V0Q291bnRkb3duXHJcblxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var cds;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Forms/navvis_deliveryproductForm.ts":
/*!*************************************************!*\
  !*** ./src/Forms/navvis_deliveryproductForm.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navvis_deliveryproductForm\": () => (/* binding */ navvis_deliveryproductForm)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass navvis_deliveryproductForm {\n    static onload(context) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const optionSetValue = this.getOptionSetValue(context, \"statuscode\");\n            context.getFormContext().getAttribute(\"statuscode\").addOnChange(navvis_deliveryproductForm.onStatusChanged);\n            yield this.hidedisplayOptionSetValue(context, optionSetValue);\n        });\n    }\n    static hidedisplayOptionSetValue(executionContext, optionSetValue) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                // Get the form context from executionContext\n                const formContext = executionContext.getFormContext();\n                // Get the option set control using the schema name\n                const optionSetControl = formContext.getControl(\"header_statuscode\");\n                if (optionSetControl) {\n                    switch (optionSetValue) {\n                        case 1:\n                            // Remove the option set value with the target value to remove\n                            optionSetControl.removeOption(576350002);\n                            break;\n                        case 2:\n                            // Remove the option set value with the target value to remove\n                            optionSetControl.removeOption(576350002);\n                            break;\n                        default:\n                            break;\n                    }\n                    formContext.data.refresh(false);\n                }\n            }\n            catch (error) {\n                console.log(error);\n            }\n        });\n    }\n    static getOptionSetValue(executionContext, attributeName) {\n        let optionSetValue = 0;\n        try {\n            // Get the form context from executionContext\n            const formContext = executionContext.getFormContext();\n            // Get the option set attribute using the schema name\n            const optionSetAttribute = formContext.getAttribute(attributeName);\n            if (optionSetAttribute) {\n                // Get the selected option\n                const selectedOption = optionSetAttribute.getSelectedOption();\n                // Get the option set value\n                optionSetValue = selectedOption.value;\n            }\n        }\n        catch (error) {\n            console.log(error);\n        }\n        return optionSetValue;\n    }\n    static onStatusChanged(executionContext) {\n        const formContext = executionContext.getFormContext();\n        formContext.data.refresh(true);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRm9ybXMvbmF2dmlzX2RlbGl2ZXJ5cHJvZHVjdEZvcm0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUlPLE1BQU0sMEJBQTBCO0lBQ25DLE1BQU0sQ0FBTyxNQUFNLENBQUMsT0FBZ0M7O1lBQ2hELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDckUsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLENBQUMsMEJBQTBCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUcsTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRWxFLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyx5QkFBeUIsQ0FBQyxnQkFBeUMsRUFBRSxjQUFzQjs7WUFDeEcsSUFBSTtnQkFDQyw2Q0FBNkM7Z0JBQzdDLE1BQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV0RCxtREFBbUQ7Z0JBQ25ELE1BQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBZ0MsbUJBQW1CLENBQUMsQ0FBQztnQkFFaEcsSUFBSSxnQkFBZ0IsRUFBRTtvQkFFdEIsUUFBUyxjQUFjLEVBQUc7d0JBQ3RCLEtBQUssQ0FBQzs0QkFDRiw4REFBOEQ7NEJBQzlELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFDekMsTUFBTTt3QkFDVixLQUFLLENBQUM7NEJBQ0YsOERBQThEOzRCQUM5RCxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7NEJBQ3pDLE1BQU07d0JBQ1Y7NEJBQ0ksTUFBTTtxQkFDWjtvQkFDRCxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFHcEM7YUFFTDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFJRCxDQUFDO0tBQUE7SUFDRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsZ0JBQXlDLEVBQUUsYUFBcUI7UUFFckYsSUFBSSxjQUFjLEdBQVcsQ0FBQztRQUM5QixJQUFJO1lBQ0EsNkNBQTZDO1lBQzdDLE1BQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXRELHFEQUFxRDtZQUNyRCxNQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQW9DLGFBQWEsQ0FBQyxDQUFDO1lBRXRHLElBQUksa0JBQWtCLEVBQUU7Z0JBQ3BCLDBCQUEwQjtnQkFDMUIsTUFBTSxjQUFjLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFFOUQsMkJBQTJCO2dCQUMzQixjQUFjLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQzthQUNqQztTQUVoQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZSxDQUFDLGdCQUF5QztRQUU1RCxNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0RCxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZHMuQ2xpZW50SG9va3MvLi9zcmMvRm9ybXMvbmF2dmlzX2RlbGl2ZXJ5cHJvZHVjdEZvcm0udHM/OTI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuYXZ2aXNfZGVsaXZlcnlwcm9kdWN0QXR0cmlidXRlcyB9ICBmcm9tIFwiLi4vZGF0YXZlcnNlLWdlbi9lbnRpdGllcy9uYXZ2aXNfZGVsaXZlcnlwcm9kdWN0XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBuYXZ2aXNfZGVsaXZlcnlwcm9kdWN0Rm9ybSB7XHJcbiAgICBzdGF0aWMgYXN5bmMgb25sb2FkKGNvbnRleHQ6IFhybS5FdmVudHMuRXZlbnRDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uU2V0VmFsdWUgPSB0aGlzLmdldE9wdGlvblNldFZhbHVlKGNvbnRleHQsIFwic3RhdHVzY29kZVwiKTtcclxuICAgICAgICBjb250ZXh0LmdldEZvcm1Db250ZXh0KCkuZ2V0QXR0cmlidXRlKFwic3RhdHVzY29kZVwiKS5hZGRPbkNoYW5nZShuYXZ2aXNfZGVsaXZlcnlwcm9kdWN0Rm9ybS5vblN0YXR1c0NoYW5nZWQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaGlkZWRpc3BsYXlPcHRpb25TZXRWYWx1ZShjb250ZXh0LCBvcHRpb25TZXRWYWx1ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGhpZGVkaXNwbGF5T3B0aW9uU2V0VmFsdWUoZXhlY3V0aW9uQ29udGV4dDogWHJtLkV2ZW50cy5FdmVudENvbnRleHQsIG9wdGlvblNldFZhbHVlOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgIC8vIEdldCB0aGUgZm9ybSBjb250ZXh0IGZyb20gZXhlY3V0aW9uQ29udGV4dFxyXG4gICAgICAgICBjb25zdCBmb3JtQ29udGV4dCA9IGV4ZWN1dGlvbkNvbnRleHQuZ2V0Rm9ybUNvbnRleHQoKTtcclxuXHJcbiAgICAgICAgIC8vIEdldCB0aGUgb3B0aW9uIHNldCBjb250cm9sIHVzaW5nIHRoZSBzY2hlbWEgbmFtZVxyXG4gICAgICAgICBjb25zdCBvcHRpb25TZXRDb250cm9sID0gZm9ybUNvbnRleHQuZ2V0Q29udHJvbDxYcm0uQ29udHJvbHMuT3B0aW9uU2V0Q29udHJvbD4oXCJoZWFkZXJfc3RhdHVzY29kZVwiKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICBpZiAob3B0aW9uU2V0Q29udHJvbCkge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBzd2l0Y2ggKCBvcHRpb25TZXRWYWx1ZSApIHtcclxuICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgb3B0aW9uIHNldCB2YWx1ZSB3aXRoIHRoZSB0YXJnZXQgdmFsdWUgdG8gcmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgIG9wdGlvblNldENvbnRyb2wucmVtb3ZlT3B0aW9uKDU3NjM1MDAwMik7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvcHRpb24gc2V0IHZhbHVlIHdpdGggdGhlIHRhcmdldCB2YWx1ZSB0byByZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgb3B0aW9uU2V0Q29udHJvbC5yZW1vdmVPcHRpb24oNTc2MzUwMDAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBmb3JtQ29udGV4dC5kYXRhLnJlZnJlc2goZmFsc2UpOyBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRPcHRpb25TZXRWYWx1ZShleGVjdXRpb25Db250ZXh0OiBYcm0uRXZlbnRzLkV2ZW50Q29udGV4dCwgYXR0cmlidXRlTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgb3B0aW9uU2V0VmFsdWU6IG51bWJlciA9IDBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZvcm0gY29udGV4dCBmcm9tIGV4ZWN1dGlvbkNvbnRleHRcclxuICAgICAgICAgICAgY29uc3QgZm9ybUNvbnRleHQgPSBleGVjdXRpb25Db250ZXh0LmdldEZvcm1Db250ZXh0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgb3B0aW9uIHNldCBhdHRyaWJ1dGUgdXNpbmcgdGhlIHNjaGVtYSBuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblNldEF0dHJpYnV0ZSA9IGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZTxYcm0uQXR0cmlidXRlcy5PcHRpb25TZXRBdHRyaWJ1dGU+KGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAob3B0aW9uU2V0QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHNlbGVjdGVkIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25TZXRBdHRyaWJ1dGUuZ2V0U2VsZWN0ZWRPcHRpb24oKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgb3B0aW9uIHNldCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uU2V0VmFsdWUgPSBzZWxlY3RlZE9wdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25TZXRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb25TdGF0dXNDaGFuZ2VkKGV4ZWN1dGlvbkNvbnRleHQ6IFhybS5FdmVudHMuRXZlbnRDb250ZXh0KTogdm9pZCBcclxuICAgIHtcclxuICAgICAgICBjb25zdCBmb3JtQ29udGV4dCA9IGV4ZWN1dGlvbkNvbnRleHQuZ2V0Rm9ybUNvbnRleHQoKTtcclxuICAgICAgICBmb3JtQ29udGV4dC5kYXRhLnJlZnJlc2godHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Forms/navvis_deliveryproductForm.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navvis_deliveryproductForm\": () => (/* reexport safe */ _Forms_navvis_deliveryproductForm__WEBPACK_IMPORTED_MODULE_0__.navvis_deliveryproductForm)\n/* harmony export */ });\n/* harmony import */ var _Forms_navvis_deliveryproductForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms/navvis_deliveryproductForm */ \"./src/Forms/navvis_deliveryproductForm.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZHMuQ2xpZW50SG9va3MvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9Gb3Jtcy9uYXZ2aXNfZGVsaXZlcnlwcm9kdWN0Rm9ybVwiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	(cds = typeof cds === "undefined" ? {} : cds).ClientHooks = __webpack_exports__;
/******/ 	
/******/ })()
;
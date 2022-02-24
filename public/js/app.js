/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@alpinejs/focus/dist/module.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@alpinejs/focus/dist/module.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ module_default)
/* harmony export */ });
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};

// node_modules/tabbable/dist/index.js
var require_dist = __commonJS((exports) => {
  /*!
  * tabbable 5.2.1
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  */
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
  var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
  var matches = typeof Element === "undefined" ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  var getCandidates = function getCandidates2(el, includeContainer, filter) {
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
    if (includeContainer && matches.call(el, candidateSelector)) {
      candidates.unshift(el);
    }
    candidates = candidates.filter(filter);
    return candidates;
  };
  var isContentEditable = function isContentEditable2(node) {
    return node.contentEditable === "true";
  };
  var getTabindex = function getTabindex2(node) {
    var tabindexAttr = parseInt(node.getAttribute("tabindex"), 10);
    if (!isNaN(tabindexAttr)) {
      return tabindexAttr;
    }
    if (isContentEditable(node)) {
      return 0;
    }
    if ((node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
      return 0;
    }
    return node.tabIndex;
  };
  var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
  };
  var isInput = function isInput2(node) {
    return node.tagName === "INPUT";
  };
  var isHiddenInput = function isHiddenInput2(node) {
    return isInput(node) && node.type === "hidden";
  };
  var isDetailsWithSummary = function isDetailsWithSummary2(node) {
    var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
      return child.tagName === "SUMMARY";
    });
    return r;
  };
  var getCheckedRadio = function getCheckedRadio2(nodes, form) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].checked && nodes[i].form === form) {
        return nodes[i];
      }
    }
  };
  var isTabbableRadio = function isTabbableRadio2(node) {
    if (!node.name) {
      return true;
    }
    var radioScope = node.form || node.ownerDocument;
    var queryRadios = function queryRadios2(name) {
      return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
      radioSet = queryRadios(window.CSS.escape(node.name));
    } else {
      try {
        radioSet = queryRadios(node.name);
      } catch (err) {
        console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
        return false;
      }
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
  };
  var isRadio = function isRadio2(node) {
    return isInput(node) && node.type === "radio";
  };
  var isNonTabbableRadio = function isNonTabbableRadio2(node) {
    return isRadio(node) && !isTabbableRadio(node);
  };
  var isHidden = function isHidden2(node, displayCheck) {
    if (getComputedStyle(node).visibility === "hidden") {
      return true;
    }
    var isDirectSummary = matches.call(node, "details>summary:first-of-type");
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
      return true;
    }
    if (!displayCheck || displayCheck === "full") {
      while (node) {
        if (getComputedStyle(node).display === "none") {
          return true;
        }
        node = node.parentElement;
      }
    } else if (displayCheck === "non-zero-area") {
      var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
      return width === 0 && height === 0;
    }
    return false;
  };
  var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
    if (isInput(node) || node.tagName === "SELECT" || node.tagName === "TEXTAREA" || node.tagName === "BUTTON") {
      var parentNode = node.parentElement;
      while (parentNode) {
        if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
          for (var i = 0; i < parentNode.children.length; i++) {
            var child = parentNode.children.item(i);
            if (child.tagName === "LEGEND") {
              if (child.contains(node)) {
                return false;
              }
              return true;
            }
          }
          return true;
        }
        parentNode = parentNode.parentElement;
      }
    }
    return false;
  };
  var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
      return false;
    }
    return true;
  };
  var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
    if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
      return false;
    }
    return true;
  };
  var tabbable2 = function tabbable3(el, options) {
    options = options || {};
    var regularTabbables = [];
    var orderedTabbables = [];
    var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
    candidates.forEach(function(candidate, i) {
      var candidateTabindex = getTabindex(candidate);
      if (candidateTabindex === 0) {
        regularTabbables.push(candidate);
      } else {
        orderedTabbables.push({
          documentOrder: i,
          tabIndex: candidateTabindex,
          node: candidate
        });
      }
    });
    var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function(a) {
      return a.node;
    }).concat(regularTabbables);
    return tabbableNodes;
  };
  var focusable2 = function focusable3(el, options) {
    options = options || {};
    var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
    return candidates;
  };
  var isTabbable = function isTabbable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, candidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorTabbable(options, node);
  };
  var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
  var isFocusable2 = function isFocusable3(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, focusableCandidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorFocusable(options, node);
  };
  exports.focusable = focusable2;
  exports.isFocusable = isFocusable2;
  exports.isTabbable = isTabbable;
  exports.tabbable = tabbable2;
});

// node_modules/focus-trap/dist/focus-trap.js
var require_focus_trap = __commonJS((exports) => {
  /*!
  * focus-trap 6.6.1
  * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
  */
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  var tabbable2 = require_dist();
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var activeFocusTraps = function() {
    var trapQueue = [];
    return {
      activateTrap: function activateTrap(trap) {
        if (trapQueue.length > 0) {
          var activeTrap = trapQueue[trapQueue.length - 1];
          if (activeTrap !== trap) {
            activeTrap.pause();
          }
        }
        var trapIndex = trapQueue.indexOf(trap);
        if (trapIndex === -1) {
          trapQueue.push(trap);
        } else {
          trapQueue.splice(trapIndex, 1);
          trapQueue.push(trap);
        }
      },
      deactivateTrap: function deactivateTrap(trap) {
        var trapIndex = trapQueue.indexOf(trap);
        if (trapIndex !== -1) {
          trapQueue.splice(trapIndex, 1);
        }
        if (trapQueue.length > 0) {
          trapQueue[trapQueue.length - 1].unpause();
        }
      }
    };
  }();
  var isSelectableInput = function isSelectableInput2(node) {
    return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
  };
  var isEscapeEvent = function isEscapeEvent2(e) {
    return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
  };
  var isTabEvent = function isTabEvent2(e) {
    return e.key === "Tab" || e.keyCode === 9;
  };
  var delay = function delay2(fn) {
    return setTimeout(fn, 0);
  };
  var findIndex = function findIndex2(arr, fn) {
    var idx = -1;
    arr.every(function(value, i) {
      if (fn(value)) {
        idx = i;
        return false;
      }
      return true;
    });
    return idx;
  };
  var valueOrHandler = function valueOrHandler2(value) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    return typeof value === "function" ? value.apply(void 0, params) : value;
  };
  var createFocusTrap2 = function createFocusTrap3(elements, userOptions) {
    var doc = document;
    var config = _objectSpread2({
      returnFocusOnDeactivate: true,
      escapeDeactivates: true,
      delayInitialFocus: true
    }, userOptions);
    var state = {
      containers: [],
      tabbableGroups: [],
      nodeFocusedBeforeActivation: null,
      mostRecentlyFocusedNode: null,
      active: false,
      paused: false,
      delayInitialFocusTimer: void 0
    };
    var trap;
    var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
      return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
    };
    var containersContain = function containersContain2(element) {
      return state.containers.some(function(container) {
        return container.contains(element);
      });
    };
    var getNodeForOption = function getNodeForOption2(optionName) {
      var optionValue = config[optionName];
      if (!optionValue) {
        return null;
      }
      var node = optionValue;
      if (typeof optionValue === "string") {
        node = doc.querySelector(optionValue);
        if (!node) {
          throw new Error("`".concat(optionName, "` refers to no known node"));
        }
      }
      if (typeof optionValue === "function") {
        node = optionValue();
        if (!node) {
          throw new Error("`".concat(optionName, "` did not return a node"));
        }
      }
      return node;
    };
    var getInitialFocusNode = function getInitialFocusNode2() {
      var node;
      if (getOption({}, "initialFocus") === false) {
        return false;
      }
      if (getNodeForOption("initialFocus") !== null) {
        node = getNodeForOption("initialFocus");
      } else if (containersContain(doc.activeElement)) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
      if (!node) {
        throw new Error("Your focus-trap needs to have at least one focusable element");
      }
      return node;
    };
    var updateTabbableNodes = function updateTabbableNodes2() {
      state.tabbableGroups = state.containers.map(function(container) {
        var tabbableNodes = tabbable2.tabbable(container);
        if (tabbableNodes.length > 0) {
          return {
            container,
            firstTabbableNode: tabbableNodes[0],
            lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
          };
        }
        return void 0;
      }).filter(function(group) {
        return !!group;
      });
      if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
        throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
      }
    };
    var tryFocus = function tryFocus2(node) {
      if (node === false) {
        return;
      }
      if (node === doc.activeElement) {
        return;
      }
      if (!node || !node.focus) {
        tryFocus2(getInitialFocusNode());
        return;
      }
      node.focus({
        preventScroll: !!config.preventScroll
      });
      state.mostRecentlyFocusedNode = node;
      if (isSelectableInput(node)) {
        node.select();
      }
    };
    var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
      var node = getNodeForOption("setReturnFocus");
      return node ? node : previousActiveElement;
    };
    var checkPointerDown = function checkPointerDown2(e) {
      if (containersContain(e.target)) {
        return;
      }
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        trap.deactivate({
          returnFocus: config.returnFocusOnDeactivate && !tabbable2.isFocusable(e.target)
        });
        return;
      }
      if (valueOrHandler(config.allowOutsideClick, e)) {
        return;
      }
      e.preventDefault();
    };
    var checkFocusIn = function checkFocusIn2(e) {
      var targetContained = containersContain(e.target);
      if (targetContained || e.target instanceof Document) {
        if (targetContained) {
          state.mostRecentlyFocusedNode = e.target;
        }
      } else {
        e.stopImmediatePropagation();
        tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    };
    var checkTab = function checkTab2(e) {
      updateTabbableNodes();
      var destinationNode = null;
      if (state.tabbableGroups.length > 0) {
        var containerIndex = findIndex(state.tabbableGroups, function(_ref) {
          var container = _ref.container;
          return container.contains(e.target);
        });
        if (containerIndex < 0) {
          if (e.shiftKey) {
            destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
          } else {
            destinationNode = state.tabbableGroups[0].firstTabbableNode;
          }
        } else if (e.shiftKey) {
          var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
            var firstTabbableNode = _ref2.firstTabbableNode;
            return e.target === firstTabbableNode;
          });
          if (startOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === e.target) {
            startOfGroupIndex = containerIndex;
          }
          if (startOfGroupIndex >= 0) {
            var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
            var destinationGroup = state.tabbableGroups[destinationGroupIndex];
            destinationNode = destinationGroup.lastTabbableNode;
          }
        } else {
          var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
            var lastTabbableNode = _ref3.lastTabbableNode;
            return e.target === lastTabbableNode;
          });
          if (lastOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === e.target) {
            lastOfGroupIndex = containerIndex;
          }
          if (lastOfGroupIndex >= 0) {
            var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
            var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
            destinationNode = _destinationGroup.firstTabbableNode;
          }
        }
      } else {
        destinationNode = getNodeForOption("fallbackFocus");
      }
      if (destinationNode) {
        e.preventDefault();
        tryFocus(destinationNode);
      }
    };
    var checkKey = function checkKey2(e) {
      if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates) !== false) {
        e.preventDefault();
        trap.deactivate();
        return;
      }
      if (isTabEvent(e)) {
        checkTab(e);
        return;
      }
    };
    var checkClick = function checkClick2(e) {
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        return;
      }
      if (containersContain(e.target)) {
        return;
      }
      if (valueOrHandler(config.allowOutsideClick, e)) {
        return;
      }
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    var addListeners = function addListeners2() {
      if (!state.active) {
        return;
      }
      activeFocusTraps.activateTrap(trap);
      state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
        tryFocus(getInitialFocusNode());
      }) : tryFocus(getInitialFocusNode());
      doc.addEventListener("focusin", checkFocusIn, true);
      doc.addEventListener("mousedown", checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener("touchstart", checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener("click", checkClick, {
        capture: true,
        passive: false
      });
      doc.addEventListener("keydown", checkKey, {
        capture: true,
        passive: false
      });
      return trap;
    };
    var removeListeners = function removeListeners2() {
      if (!state.active) {
        return;
      }
      doc.removeEventListener("focusin", checkFocusIn, true);
      doc.removeEventListener("mousedown", checkPointerDown, true);
      doc.removeEventListener("touchstart", checkPointerDown, true);
      doc.removeEventListener("click", checkClick, true);
      doc.removeEventListener("keydown", checkKey, true);
      return trap;
    };
    trap = {
      activate: function activate(activateOptions) {
        if (state.active) {
          return this;
        }
        var onActivate = getOption(activateOptions, "onActivate");
        var onPostActivate = getOption(activateOptions, "onPostActivate");
        var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
        if (!checkCanFocusTrap) {
          updateTabbableNodes();
        }
        state.active = true;
        state.paused = false;
        state.nodeFocusedBeforeActivation = doc.activeElement;
        if (onActivate) {
          onActivate();
        }
        var finishActivation = function finishActivation2() {
          if (checkCanFocusTrap) {
            updateTabbableNodes();
          }
          addListeners();
          if (onPostActivate) {
            onPostActivate();
          }
        };
        if (checkCanFocusTrap) {
          checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
          return this;
        }
        finishActivation();
        return this;
      },
      deactivate: function deactivate(deactivateOptions) {
        if (!state.active) {
          return this;
        }
        clearTimeout(state.delayInitialFocusTimer);
        state.delayInitialFocusTimer = void 0;
        removeListeners();
        state.active = false;
        state.paused = false;
        activeFocusTraps.deactivateTrap(trap);
        var onDeactivate = getOption(deactivateOptions, "onDeactivate");
        var onPostDeactivate = getOption(deactivateOptions, "onPostDeactivate");
        var checkCanReturnFocus = getOption(deactivateOptions, "checkCanReturnFocus");
        if (onDeactivate) {
          onDeactivate();
        }
        var returnFocus = getOption(deactivateOptions, "returnFocus", "returnFocusOnDeactivate");
        var finishDeactivation = function finishDeactivation2() {
          delay(function() {
            if (returnFocus) {
              tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
            }
            if (onPostDeactivate) {
              onPostDeactivate();
            }
          });
        };
        if (returnFocus && checkCanReturnFocus) {
          checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
          return this;
        }
        finishDeactivation();
        return this;
      },
      pause: function pause() {
        if (state.paused || !state.active) {
          return this;
        }
        state.paused = true;
        removeListeners();
        return this;
      },
      unpause: function unpause() {
        if (!state.paused || !state.active) {
          return this;
        }
        state.paused = false;
        updateTabbableNodes();
        addListeners();
        return this;
      },
      updateContainerElements: function updateContainerElements(containerElements) {
        var elementsAsArray = [].concat(containerElements).filter(Boolean);
        state.containers = elementsAsArray.map(function(element) {
          return typeof element === "string" ? doc.querySelector(element) : element;
        });
        if (state.active) {
          updateTabbableNodes();
        }
        return this;
      }
    };
    trap.updateContainerElements(elements);
    return trap;
  };
  exports.createFocusTrap = createFocusTrap2;
});

// packages/focus/src/index.js
var import_focus_trap = __toModule(require_focus_trap());
var import_tabbable = __toModule(require_dist());
function src_default(Alpine) {
  let lastFocused;
  let currentFocused;
  window.addEventListener("focusin", () => {
    lastFocused = currentFocused;
    currentFocused = document.activeElement;
  });
  Alpine.magic("focus", (el) => {
    let within = el;
    return {
      __noscroll: false,
      __wrapAround: false,
      within(el2) {
        within = el2;
        return this;
      },
      withoutScrolling() {
        this.__noscroll = true;
        return this;
      },
      noscroll() {
        this.__noscroll = true;
        return this;
      },
      withWrapAround() {
        this.__wrapAround = true;
        return this;
      },
      wrap() {
        return this.withWrapAround();
      },
      focusable(el2) {
        return (0, import_tabbable.isFocusable)(el2);
      },
      previouslyFocused() {
        return lastFocused;
      },
      lastFocused() {
        return lastFocused;
      },
      focused() {
        return currentFocused;
      },
      focusables() {
        if (Array.isArray(within))
          return within;
        return (0, import_tabbable.focusable)(within, {displayCheck: "none"});
      },
      all() {
        return this.focusables();
      },
      isFirst(el2) {
        let els = this.all();
        return els[0] && els[0].isSameNode(el2);
      },
      isLast(el2) {
        let els = this.all();
        return els.length && els.slice(-1)[0].isSameNode(el2);
      },
      getFirst() {
        return this.all()[0];
      },
      getLast() {
        return this.all().slice(-1)[0];
      },
      getNext() {
        let list = this.all();
        let current = document.activeElement;
        if (list.indexOf(current) === -1)
          return;
        if (this.__wrapAround && list.indexOf(current) === list.length - 1) {
          return list[0];
        }
        return list[list.indexOf(current) + 1];
      },
      getPrevious() {
        let list = this.all();
        let current = document.activeElement;
        if (list.indexOf(current) === -1)
          return;
        if (this.__wrapAround && list.indexOf(current) === 0) {
          return list.slice(-1)[0];
        }
        return list[list.indexOf(current) - 1];
      },
      first() {
        this.focus(this.getFirst());
      },
      last() {
        this.focus(this.getLast());
      },
      next() {
        this.focus(this.getNext());
      },
      previous() {
        this.focus(this.getPrevious());
      },
      prev() {
        return this.previous();
      },
      focus(el2) {
        if (!el2)
          return;
        setTimeout(() => {
          if (!el2.hasAttribute("tabindex"))
            el2.setAttribute("tabindex", "0");
          el2.focus({preventScroll: this._noscroll});
        });
      }
    };
  });
  Alpine.directive("trap", Alpine.skipDuringClone((el, {expression, modifiers}, {effect, evaluateLater}) => {
    let evaluator = evaluateLater(expression);
    let oldValue = false;
    let trap = (0, import_focus_trap.createFocusTrap)(el, {
      escapeDeactivates: false,
      allowOutsideClick: true,
      fallbackFocus: () => el
    });
    let undoInert = () => {
    };
    let undoDisableScrolling = () => {
    };
    effect(() => evaluator((value) => {
      if (oldValue === value)
        return;
      if (value && !oldValue) {
        setTimeout(() => {
          if (modifiers.includes("inert"))
            undoInert = setInert(el);
          if (modifiers.includes("noscroll"))
            undoDisableScrolling = disableScrolling();
          trap.activate();
        });
      }
      if (!value && oldValue) {
        undoInert();
        undoInert = () => {
        };
        undoDisableScrolling();
        undoDisableScrolling = () => {
        };
        trap.deactivate({
          returnFocus: !modifiers.includes("noreturn")
        });
      }
      oldValue = !!value;
    }));
  }, (el, {expression, modifiers}, {evaluate}) => {
    if (modifiers.includes("inert") && evaluate(expression))
      setInert(el);
  }));
}
function setInert(el) {
  let undos = [];
  crawlSiblingsUp(el, (sibling) => {
    let cache = sibling.hasAttribute("aria-hidden");
    sibling.setAttribute("aria-hidden", "true");
    undos.push(() => cache || sibling.removeAttribute("aria-hidden"));
  });
  return () => {
    while (undos.length)
      undos.pop()();
  };
}
function crawlSiblingsUp(el, callback) {
  if (el.isSameNode(document.body) || !el.parentNode)
    return;
  Array.from(el.parentNode.children).forEach((sibling) => {
    if (!sibling.isSameNode(el))
      callback(sibling);
    crawlSiblingsUp(el.parentNode, callback);
  });
}
function disableScrolling() {
  let overflow = document.documentElement.style.overflow;
  let paddingRight = document.documentElement.style.paddingRight;
  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.overflow = "hidden";
  document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
  return () => {
    document.documentElement.style.overflow = overflow;
    document.documentElement.style.paddingRight = paddingRight;
  };
}

// packages/focus/builds/module.js
var module_default = src_default;



/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/alpinejs/dist/module.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/alpinejs/dist/module.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ module_default)
/* harmony export */ });
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};

// node_modules/@vue/shared/dist/shared.cjs.js
var require_shared_cjs = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
  var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
  var range = 2;
  function generateCodeFrame(source, start2 = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start2) {
        for (let j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start2 - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start2);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
  var attrValidationCache = {};
  function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
      return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
      console.error(`unsafe attribute name: ${name}`);
    }
    return attrValidationCache[name] = !isUnsafe;
  }
  var propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
  };
  var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
  var isKnownAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isObject(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:(.+)/;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function stringifyStyle(styles) {
    let ret = "";
    if (!styles) {
      return ret;
    }
    for (const key in styles) {
      const value = styles[key];
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
        ret += `${normalizedKey}:${value};`;
      }
    }
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
  var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
  var escapeRE = /["'&<>]/;
  function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) {
      return str;
    }
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          escaped = "&quot;";
          break;
        case 38:
          escaped = "&amp;";
          break;
        case 39:
          escaped = "&#39;";
          break;
        case 60:
          escaped = "&lt;";
          break;
        case 62:
          escaped = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }
      lastIndex = index + 1;
      html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }
  var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
  function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b)
      return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  var toDisplayString = (val) => {
    return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
  };
  var replacer = (_key, val) => {
    if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        }, {})
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()]
      };
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  var babelParserDefaultPlugins = [
    "bigInt",
    "optionalChaining",
    "nullishCoalescingOperator"
  ];
  var EMPTY_OBJ = Object.freeze({});
  var EMPTY_ARR = Object.freeze([]);
  var NOOP = () => {
  };
  var NO = () => false;
  var onRE = /^on[^a-z]/;
  var isOn = (key) => onRE.test(key);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isDate = (val) => val instanceof Date;
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  var def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };
  var toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : {});
  };
  exports.EMPTY_ARR = EMPTY_ARR;
  exports.EMPTY_OBJ = EMPTY_OBJ;
  exports.NO = NO;
  exports.NOOP = NOOP;
  exports.PatchFlagNames = PatchFlagNames;
  exports.babelParserDefaultPlugins = babelParserDefaultPlugins;
  exports.camelize = camelize;
  exports.capitalize = capitalize;
  exports.def = def;
  exports.escapeHtml = escapeHtml;
  exports.escapeHtmlComment = escapeHtmlComment;
  exports.extend = extend;
  exports.generateCodeFrame = generateCodeFrame;
  exports.getGlobalThis = getGlobalThis;
  exports.hasChanged = hasChanged;
  exports.hasOwn = hasOwn;
  exports.hyphenate = hyphenate;
  exports.invokeArrayFns = invokeArrayFns;
  exports.isArray = isArray;
  exports.isBooleanAttr = isBooleanAttr2;
  exports.isDate = isDate;
  exports.isFunction = isFunction;
  exports.isGloballyWhitelisted = isGloballyWhitelisted;
  exports.isHTMLTag = isHTMLTag;
  exports.isIntegerKey = isIntegerKey;
  exports.isKnownAttr = isKnownAttr;
  exports.isMap = isMap;
  exports.isModelListener = isModelListener;
  exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
  exports.isObject = isObject;
  exports.isOn = isOn;
  exports.isPlainObject = isPlainObject;
  exports.isPromise = isPromise;
  exports.isReservedProp = isReservedProp;
  exports.isSSRSafeAttrName = isSSRSafeAttrName;
  exports.isSVGTag = isSVGTag;
  exports.isSet = isSet;
  exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
  exports.isString = isString;
  exports.isSymbol = isSymbol;
  exports.isVoidTag = isVoidTag;
  exports.looseEqual = looseEqual;
  exports.looseIndexOf = looseIndexOf;
  exports.makeMap = makeMap;
  exports.normalizeClass = normalizeClass;
  exports.normalizeStyle = normalizeStyle;
  exports.objectToString = objectToString;
  exports.parseStringStyle = parseStringStyle;
  exports.propsToAttrMap = propsToAttrMap;
  exports.remove = remove;
  exports.slotFlagsText = slotFlagsText;
  exports.stringifyStyle = stringifyStyle;
  exports.toDisplayString = toDisplayString;
  exports.toHandlerKey = toHandlerKey;
  exports.toNumber = toNumber;
  exports.toRawType = toRawType;
  exports.toTypeString = toTypeString;
});

// node_modules/@vue/shared/index.js
var require_shared = __commonJS((exports, module) => {
  "use strict";
  if (false) {} else {
    module.exports = require_shared_cjs();
  }
});

// node_modules/@vue/reactivity/dist/reactivity.cjs.js
var require_reactivity_cjs = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  var shared = require_shared();
  var targetMap = new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol("iterate");
  var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect3(fn, options = shared.EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect4 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect4();
    }
    return effect4;
  }
  function stop2(effect4) {
    if (effect4.active) {
      cleanup(effect4);
      if (effect4.options.onStop) {
        effect4.options.onStop();
      }
      effect4.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect4 = function reactiveEffect() {
      if (!effect4.active) {
        return fn();
      }
      if (!effectStack.includes(effect4)) {
        cleanup(effect4);
        try {
          enableTracking();
          effectStack.push(effect4);
          activeEffect = effect4;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect4.id = uid++;
    effect4.allowRecurse = !!options.allowRecurse;
    effect4._isEffect = true;
    effect4.active = true;
    effect4.raw = fn;
    effect4.deps = [];
    effect4.options = options;
    return effect4;
  }
  function cleanup(effect4) {
    const {deps} = effect4;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect4);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect4) => {
          if (effect4 !== activeEffect || effect4.allowRecurse) {
            effects.add(effect4);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && shared.isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!shared.isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (shared.isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (shared.isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!shared.isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (shared.isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (shared.isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect4) => {
      if (effect4.options.onTrigger) {
        effect4.options.onTrigger({
          effect: effect4,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect4.options.scheduler) {
        effect4.options.scheduler(effect4);
      } else {
        effect4();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(shared.isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var shallowGet = /* @__PURE__ */ createGetter(false, true);
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
  var arrayInstrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      const arr = toRaw2(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = method.apply(arr, args);
      if (res === -1 || res === false) {
        return method.apply(arr, args.map(toRaw2));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      pauseTracking();
      const res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });
  function createGetter(isReadonly2 = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = shared.isArray(target);
      if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (shared.isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive3(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  var shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw2(value);
        oldValue = toRaw2(oldValue);
        if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw2(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (shared.hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = shared.hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var shallowReactiveHandlers = shared.extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var shallowReadonlyHandlers = shared.extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
  });
  var toReactive = (value) => shared.isObject(value) ? reactive3(value) : value;
  var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly2 = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw2(target);
    const rawKey = toRaw2(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "get", key);
    }
    !isReadonly2 && track(rawTarget, "get", rawKey);
    const {has: has2} = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly2 = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw2(target);
    const rawKey = toRaw2(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "has", key);
    }
    !isReadonly2 && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw2(value);
    const target = toRaw2(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw2(value);
    const target = toRaw2(this);
    const {has: has2, get: get3} = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw2(key);
      hadKey = has2.call(target, key);
    } else {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (shared.hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw2(this);
    const {has: has2, get: get3} = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw2(key);
      hadKey = has2.call(target, key);
    } else {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw2(this);
    const hadItems = target.size !== 0;
    const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw2(target);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw2(target);
      const targetIsMap = shared.isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const {value, done} = innerIterator.next();
          return done ? {value, done} : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this));
      }
      return type === "delete" ? false : this;
    };
  }
  var mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw2(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = shared.toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = new WeakMap();
  var shallowReactiveMap = new WeakMap();
  var readonlyMap = new WeakMap();
  var shallowReadonlyMap = new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
  }
  function reactive3(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!shared.isObject(target)) {
      {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive2(value) {
    if (isReadonly(value)) {
      return isReactive2(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isProxy(value) {
    return isReactive2(value) || isReadonly(value);
  }
  function toRaw2(observed) {
    return observed && toRaw2(observed["__v_raw"]) || observed;
  }
  function markRaw(value) {
    shared.def(value, "__v_skip", true);
    return value;
  }
  var convert = (val) => shared.isObject(val) ? reactive3(val) : val;
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  var RefImpl = class {
    constructor(_rawValue, _shallow = false) {
      this._rawValue = _rawValue;
      this._shallow = _shallow;
      this.__v_isRef = true;
      this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
      track(toRaw2(this), "get", "value");
      return this._value;
    }
    set value(newVal) {
      if (shared.hasChanged(toRaw2(newVal), this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        trigger(toRaw2(this), "set", "value", newVal);
      }
    }
  };
  function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  function triggerRef(ref2) {
    trigger(toRaw2(ref2), "set", "value", ref2.value);
  }
  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  var shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  var CustomRefImpl = class {
    constructor(factory) {
      this.__v_isRef = true;
      const {get: get3, set: set3} = factory(() => track(this, "get", "value"), () => trigger(this, "set", "value"));
      this._get = get3;
      this._set = set3;
    }
    get value() {
      return this._get();
    }
    set value(newVal) {
      this._set(newVal);
    }
  };
  function customRef(factory) {
    return new CustomRefImpl(factory);
  }
  function toRefs(object) {
    if (!isProxy(object)) {
      console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = shared.isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
      ret[key] = toRef(object, key);
    }
    return ret;
  }
  var ObjectRefImpl = class {
    constructor(_object, _key) {
      this._object = _object;
      this._key = _key;
      this.__v_isRef = true;
    }
    get value() {
      return this._object[this._key];
    }
    set value(newVal) {
      this._object[this._key] = newVal;
    }
  };
  function toRef(object, key) {
    return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
  }
  var ComputedRefImpl = class {
    constructor(getter, _setter, isReadonly2) {
      this._setter = _setter;
      this._dirty = true;
      this.__v_isRef = true;
      this.effect = effect3(getter, {
        lazy: true,
        scheduler: () => {
          if (!this._dirty) {
            this._dirty = true;
            trigger(toRaw2(this), "set", "value");
          }
        }
      });
      this["__v_isReadonly"] = isReadonly2;
    }
    get value() {
      const self2 = toRaw2(this);
      if (self2._dirty) {
        self2._value = this.effect();
        self2._dirty = false;
      }
      track(self2, "get", "value");
      return self2._value;
    }
    set value(newValue) {
      this._setter(newValue);
    }
  };
  function computed(getterOrOptions) {
    let getter;
    let setter;
    if (shared.isFunction(getterOrOptions)) {
      getter = getterOrOptions;
      setter = () => {
        console.warn("Write operation failed: computed value is readonly");
      };
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
  }
  exports.ITERATE_KEY = ITERATE_KEY;
  exports.computed = computed;
  exports.customRef = customRef;
  exports.effect = effect3;
  exports.enableTracking = enableTracking;
  exports.isProxy = isProxy;
  exports.isReactive = isReactive2;
  exports.isReadonly = isReadonly;
  exports.isRef = isRef;
  exports.markRaw = markRaw;
  exports.pauseTracking = pauseTracking;
  exports.proxyRefs = proxyRefs;
  exports.reactive = reactive3;
  exports.readonly = readonly;
  exports.ref = ref;
  exports.resetTracking = resetTracking;
  exports.shallowReactive = shallowReactive;
  exports.shallowReadonly = shallowReadonly;
  exports.shallowRef = shallowRef;
  exports.stop = stop2;
  exports.toRaw = toRaw2;
  exports.toRef = toRef;
  exports.toRefs = toRefs;
  exports.track = track;
  exports.trigger = trigger;
  exports.triggerRef = triggerRef;
  exports.unref = unref;
});

// node_modules/@vue/reactivity/index.js
var require_reactivity = __commonJS((exports, module) => {
  "use strict";
  if (false) {} else {
    module.exports = require_reactivity_cjs();
  }
});

// packages/alpinejs/src/scheduler.js
var flushPending = false;
var flushing = false;
var queue = [];
function scheduler(callback) {
  queueJob(callback);
}
function queueJob(job) {
  if (!queue.includes(job))
    queue.push(job);
  queueFlush();
}
function dequeueJob(job) {
  const index = queue.indexOf(job);
  if (index !== -1) {
    queue.splice(index, 1);
  }
}
function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}
function flushJobs() {
  flushPending = false;
  flushing = true;
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
  }
  queue.length = 0;
  flushing = false;
}

// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}
function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;
  effect = (callback) => engine.effect(callback, {scheduler: (task) => {
    if (shouldSchedule) {
      scheduler(task);
    } else {
      task();
    }
  }});
  raw = engine.raw;
}
function overrideEffect(override) {
  effect = override;
}
function elementBoundEffect(el) {
  let cleanup = () => {
  };
  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);
    if (!el._x_effects) {
      el._x_effects = new Set();
      el._x_runEffects = () => {
        el._x_effects.forEach((i) => i());
      };
    }
    el._x_effects.add(effectReference);
    cleanup = () => {
      if (effectReference === void 0)
        return;
      el._x_effects.delete(effectReference);
      release(effectReference);
    };
  };
  return [wrappedEffect, () => {
    cleanup();
  }];
}

// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
  onElAddeds.push(callback);
}
function onElRemoved(callback) {
  onElRemoveds.push(callback);
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups)
    el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name])
    el._x_attributeCleanups[name] = [];
  el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i) => i());
      delete el._x_attributeCleanups[name];
    }
  });
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
  observer.observe(document, {subtree: true, childList: true, attributes: true, attributeOldValue: true});
  currentlyObserving = true;
}
function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}
var recordQueue = [];
var willProcessRecordQueue = false;
function flushObserver() {
  recordQueue = recordQueue.concat(observer.takeRecords());
  if (recordQueue.length && !willProcessRecordQueue) {
    willProcessRecordQueue = true;
    queueMicrotask(() => {
      processRecordQueue();
      willProcessRecordQueue = false;
    });
  }
}
function processRecordQueue() {
  onMutate(recordQueue);
  recordQueue.length = 0;
}
function mutateDom(callback) {
  if (!currentlyObserving)
    return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
  isCollecting = true;
}
function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }
  let addedNodes = [];
  let removedNodes = [];
  let addedAttributes = new Map();
  let removedAttributes = new Map();
  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i].type === "childList") {
      mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
      mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
    }
    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;
      let add = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({name, value: el.getAttribute(name)});
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add();
      } else if (el.hasAttribute(name)) {
        remove();
        add();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => i(el, attrs));
  });
  for (let node of removedNodes) {
    if (addedNodes.includes(node))
      continue;
    onElRemoveds.forEach((i) => i(node));
  }
  addedNodes.forEach((node) => {
    node._x_ignoreSelf = true;
    node._x_ignore = true;
  });
  for (let node of addedNodes) {
    if (removedNodes.includes(node))
      continue;
    if (!node.isConnected)
      continue;
    delete node._x_ignoreSelf;
    delete node._x_ignore;
    onElAddeds.forEach((i) => i(node));
    node._x_ignore = true;
    node._x_ignoreSelf = true;
  }
  addedNodes.forEach((node) => {
    delete node._x_ignoreSelf;
    delete node._x_ignore;
  });
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}

// packages/alpinejs/src/scope.js
function scope(node) {
  return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
  };
}
function refreshScope(element, scope2) {
  let existingScope = element._x_dataStack[0];
  Object.entries(scope2).forEach(([key, value]) => {
    existingScope[key] = value;
  });
}
function closestDataStack(node) {
  if (node._x_dataStack)
    return node._x_dataStack;
  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }
  if (!node.parentNode) {
    return [];
  }
  return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
  let thisProxy = new Proxy({}, {
    ownKeys: () => {
      return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
    },
    has: (target, name) => {
      return objects.some((obj) => obj.hasOwnProperty(name));
    },
    get: (target, name) => {
      return (objects.find((obj) => {
        if (obj.hasOwnProperty(name)) {
          let descriptor = Object.getOwnPropertyDescriptor(obj, name);
          if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
            return true;
          }
          if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
            let getter = descriptor.get;
            let setter = descriptor.set;
            let property = descriptor;
            getter = getter && getter.bind(thisProxy);
            setter = setter && setter.bind(thisProxy);
            if (getter)
              getter._x_alreadyBound = true;
            if (setter)
              setter._x_alreadyBound = true;
            Object.defineProperty(obj, name, {
              ...property,
              get: getter,
              set: setter
            });
          }
          return true;
        }
        return false;
      }) || {})[name];
    },
    set: (target, name, value) => {
      let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
      if (closestObjectWithKey) {
        closestObjectWithKey[name] = value;
      } else {
        objects[objects.length - 1][name] = value;
      }
      return true;
    }
  });
  return thisProxy;
}

// packages/alpinejs/src/interceptor.js
function initInterceptors(data2) {
  let isObject = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, {value, enumerable}]) => {
      if (enumerable === false || value === void 0)
        return;
      let path = basePath === "" ? key : `${basePath}.${key}`;
      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };
  return recurse(data2);
}
function interceptor(callback, mutateObj = () => {
}) {
  let obj = {
    initialValue: void 0,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
    }
  };
  mutateObj(obj);
  return (initialValue) => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);
      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }
    return obj;
  };
}
function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}
function set(obj, path, value) {
  if (typeof path === "string")
    path = path.split(".");
  if (path.length === 1)
    obj[path[0]] = value;
  else if (path.length === 0)
    throw error;
  else {
    if (obj[path[0]])
      return set(obj[path[0]], path.slice(1), value);
    else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
}

// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
  magics[name] = callback;
}
function injectMagics(obj, el) {
  Object.entries(magics).forEach(([name, callback]) => {
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, {Alpine: alpine_default, interceptor});
      },
      enumerable: false
    });
  });
  return obj;
}

// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e) {
    handleError(e, el, expression);
  }
}
function handleError(error2, el, expression = void 0) {
  Object.assign(error2, {el, expression});
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
}

// packages/alpinejs/src/evaluator.js
function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)((value) => result = value, extras);
  return result;
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  if (typeof expression === "function") {
    return generateEvaluatorFromFunction(dataStack, expression);
  }
  let evaluator = generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {
  }, {scope: scope2 = {}, params = []} = {}) => {
    let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }
  let AsyncFunction = Object.getPrototypeOf(async function() {
  }).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
  const safeAsyncFunction = () => {
    try {
      return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };
  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {
  }, {scope: scope2 = {}, params = []} = {}) => {
    func.result = void 0;
    func.finished = false;
    let completeScope = mergeProxies([scope2, ...dataStack]);
    if (typeof func === "function") {
      let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
        func.result = void 0;
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
      }
    }
  };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
  if (typeof value === "function") {
    let result = value.apply(scope2, params);
    if (result instanceof Promise) {
      result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else {
    receiver(value);
  }
}

// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
  directiveHandlers[name] = callback;
}
function directives(el, attributes, originalAttributeOverride) {
  let transformedAttributeMap = {};
  let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2);
  });
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);
  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length)
      directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };
  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };
  callback(flushHandlers);
  stopDeferring();
}
function getDirectiveHandler(el, directive2) {
  let noop = () => {
  };
  let handler3 = directiveHandlers[directive2.type] || noop;
  let cleanups = [];
  let cleanup = (callback) => cleanups.push(callback);
  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };
  let doCleanup = () => cleanups.forEach((i) => i());
  onAttributeRemoved(el, directive2.original, doCleanup);
  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf)
      return;
    handler3.inline && handler3.inline(el, directive2, utilities);
    handler3 = handler3.bind(handler3, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
  };
  fullHandler.runCleanups = doCleanup;
  return fullHandler;
}
var startingWith = (subject, replacement) => ({name, value}) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return {name, value};
};
var into = (i) => i;
function toTransformedAttributes(callback = () => {
}) {
  return ({name, value}) => {
    let {name: newName, value: newValue} = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, {name, value});
    if (newName !== name)
      callback(newName, name);
    return {name: newName, value: newValue};
  };
}
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}
function outNonAlpineAttributes({name}) {
  return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({name, value}) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => i.replace(".", "")),
      expression: value,
      original
    };
  };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
  "ignore",
  "ref",
  "data",
  "id",
  "bind",
  "init",
  "for",
  "model",
  "modelable",
  "transition",
  "show",
  "if",
  DEFAULT,
  "teleport",
  "element"
];
function byPriority(a, b) {
  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
  let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}

// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(new CustomEvent(name, {
    detail,
    bubbles: true,
    composed: true,
    cancelable: true
  }));
}

// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback) {
  tickStack.push(callback);
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
}
function releaseNextTicks() {
  isHolding = false;
  while (tickStack.length)
    tickStack.shift()();
}
function holdNextTicks() {
  isHolding = true;
}

// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => walk(el2, callback));
    return;
  }
  let skip = false;
  callback(el, () => skip = true);
  if (skip)
    return;
  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}

// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
}

// packages/alpinejs/src/lifecycle.js
function start() {
  if (!document.body)
    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded((el) => initTree(el, walk));
  onElRemoved((el) => destroyTree(el));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => handle());
  });
  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
  Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => fn());
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, (element) => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some((selector) => element.matches(selector)))
      return true;
  });
}
function findClosest(el, callback) {
  if (!el)
    return;
  if (callback(el))
    return el;
  if (el._x_teleportBack)
    el = el._x_teleportBack;
  if (!el.parentElement)
    return;
  return findClosest(el.parentElement, callback);
}
function isRoot(el) {
  return rootSelectors().some((selector) => el.matches(selector));
}
function initTree(el, walker = walk) {
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      directives(el2, el2.attributes).forEach((handle) => handle());
      el2._x_ignore && skip();
    });
  });
}
function destroyTree(root) {
  walk(root, (el) => cleanupAttributes(el));
}

// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }
  return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
  let split = (classString2) => classString2.split(" ").filter(Boolean);
  let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
  let addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };
  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);
  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });
  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });
  return () => {
    removed.forEach((i) => el.classList.add(i));
    added.forEach((i) => el.classList.remove(i));
  };
}

// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }
  return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    if (!key.startsWith("--")) {
      key = kebabCase(key);
    }
    el.style.setProperty(key, value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}
function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache || "");
  };
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

// packages/alpinejs/src/utils/once.js
function once(callback, fallback = () => {
}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}

// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, {value, modifiers, expression}, {evaluate: evaluate2}) => {
  if (typeof expression === "function")
    expression = evaluate2(expression);
  if (!expression) {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    enter: (classes) => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": (classes) => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": (classes) => {
      el._x_transition.enter.end = classes;
    },
    leave: (classes) => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": (classes) => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": (classes) => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
  }
  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
  }
  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay = modifierValue(modifiers, "delay", 0);
  let origin = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: delay,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: delay,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition)
    el._x_transition = {
      enter: {during: defaultValue, start: defaultValue, end: defaultValue},
      leave: {during: defaultValue, start: defaultValue, end: defaultValue},
      in(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, before, after);
      },
      out(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, before, after);
      }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
  let clickAwayCompatibleShow = () => {
    document.visibilityState === "visible" ? requestAnimationFrame(show) : setTimeout(show);
  };
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }
    return;
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {
    }, () => resolve(hide));
    el._x_transitioning.beforeCancel(() => reject({isFromCancelledTransition: true}));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);
    if (closest) {
      if (!closest._x_hideChildren)
        closest._x_hideChildren = [];
      closest._x_hideChildren.push(el);
    } else {
      queueMicrotask(() => {
        let hideAfterChildren = (el2) => {
          let carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren)
          ]).then(([i]) => i());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };
        hideAfterChildren(el).catch((e) => {
          if (!e.isFromCancelledTransition)
            throw e;
        });
      });
    }
  });
};
function closestHide(el) {
  let parent = el.parentNode;
  if (!parent)
    return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, {during, start: start2, end} = {}, before = () => {
}, after = () => {
}) {
  if (el._x_transitioning)
    el._x_transitioning.cancel();
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }
  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },
    during() {
      undoDuring = setFunction(el, during);
    },
    before,
    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },
    after,
    cleanup() {
      undoDuring();
      undoEnd();
    }
  });
}
function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore)
        stages.before();
      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }
      stages.after();
      if (el.isConnected)
        stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },
    cancel: once(function() {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }
      ;
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted)
      return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
    let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    if (duration === 0)
      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay);
      reachedEnd = true;
    });
  });
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "scale") {
    if (isNaN(rawValue))
      return fallback;
  }
  if (key === "duration") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }
  return rawValue;
}

// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = () => {
}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}
function clone(oldEl, newEl) {
  if (!newEl._x_dataStack)
    newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false;
  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3))
        return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };
  initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {
    };
  });
  callback();
  overrideEffect(cache);
}

// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings)
    el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;
  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;
    case "style":
      bindStyles(el, value);
      break;
    case "class":
      bindClasses(el, value);
      break;
    default:
      bindAttribute(el, name, value);
      break;
  }
}
function bindInputValue(el, value) {
  if (el.type === "radio") {
    if (el.attributes.value === void 0) {
      el.value = value;
    }
    if (window.fromModel) {
      el.checked = checkedAttrLooseCompare(el.value, value);
    }
  } else if (el.type === "checkbox") {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value)
      return;
    el.value = value;
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses)
    el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles)
    el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name))
      value = name;
    setIfChanged(el, name, value);
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return value2 + "";
  });
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}
function isBooleanAttr(attrName) {
  const booleanAttributes = [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule"
  ];
  return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
}
function getBinding(el, name, fallback) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  let attr = el.getAttribute(name);
  if (attr === null)
    return typeof fallback === "function" ? fallback() : fallback;
  if (isBooleanAttr(name)) {
    return !![name, "true"].includes(attr);
  }
  if (attr === "")
    return true;
  return attr;
}

// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
  let inThrottle;
  return function() {
    let context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// packages/alpinejs/src/plugin.js
function plugin(callback) {
  callback(alpine_default);
}

// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }
  if (value === void 0) {
    return stores[name];
  }
  stores[name] = value;
  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }
  initInterceptors(stores[name]);
}
function getStores() {
  return stores;
}

// packages/alpinejs/src/binds.js
var binds = {};
function bind2(name, object) {
  binds[name] = typeof object !== "function" ? () => object : object;
}
function injectBindingProviders(obj) {
  Object.entries(binds).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback(...args);
        };
      }
    });
  });
  return obj;
}

// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
  datas[name] = callback;
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },
      enumerable: false
    });
  });
  return obj;
}

// packages/alpinejs/src/alpine.js
var Alpine = {
  get reactive() {
    return reactive;
  },
  get release() {
    return release;
  },
  get effect() {
    return effect;
  },
  get raw() {
    return raw;
  },
  version: "3.9.0",
  flushAndStopDeferringMutations,
  disableEffectScheduling,
  setReactivityEngine,
  closestDataStack,
  skipDuringClone,
  addRootSelector,
  addInitSelector,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  setEvaluator,
  mergeProxies,
  findClosest,
  closestRoot,
  interceptor,
  transition,
  setStyles,
  mutateDom,
  directive,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  bound: getBinding,
  $data: scope,
  data,
  bind: bind2
};
var alpine_default = Alpine;

// packages/alpinejs/src/index.js
var import_reactivity9 = __toModule(require_reactivity());

// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", () => nextTick);

// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el) => dispatch.bind(dispatch, el));

// packages/alpinejs/src/magics/$watch.js
magic("watch", (el) => (key, callback) => {
  let evaluate2 = evaluateLater(el, key);
  let firstTime = true;
  let oldValue;
  effect(() => evaluate2((value) => {
    JSON.stringify(value);
    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue);
        oldValue = value;
      });
    } else {
      oldValue = value;
    }
    firstTime = false;
  }));
});

// packages/alpinejs/src/magics/$store.js
magic("store", getStores);

// packages/alpinejs/src/magics/$data.js
magic("data", (el) => scope(el));

// packages/alpinejs/src/magics/$root.js
magic("root", (el) => closestRoot(el));

// packages/alpinejs/src/magics/$refs.js
magic("refs", (el) => {
  if (el._x_refs_proxy)
    return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
  let refObjects = [];
  let currentEl = el;
  while (currentEl) {
    if (currentEl._x_refs)
      refObjects.push(currentEl._x_refs);
    currentEl = currentEl.parentNode;
  }
  return refObjects;
}

// packages/alpinejs/src/ids.js
var globalIdMemo = {};
function findAndIncrementId(name) {
  if (!globalIdMemo[name])
    globalIdMemo[name] = 0;
  return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
  return findClosest(el, (element) => {
    if (element._x_ids && element._x_ids[name])
      return true;
  });
}
function setIdRoot(el, name) {
  if (!el._x_ids)
    el._x_ids = {};
  if (!el._x_ids[name])
    el._x_ids[name] = findAndIncrementId(name);
}

// packages/alpinejs/src/magics/$id.js
magic("id", (el) => (name, key = null) => {
  let root = closestIdRoot(el, name);
  let id = root ? root._x_ids[name] : findAndIncrementId(name);
  return key ? `${name}-${id}-${key}` : `${name}-${id}`;
});

// packages/alpinejs/src/magics/$el.js
magic("el", (el) => el);

// packages/alpinejs/src/directives/x-modelable.js
directive("modelable", (el, {expression}, {effect: effect3, evaluate: evaluate2, evaluateLater: evaluateLater2}) => {
  let func = evaluateLater2(expression);
  let innerGet = () => {
    let result;
    func((i) => result = i);
    return result;
  };
  let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
  let innerSet = (val) => evaluateInnerSet(() => {
  }, {scope: {__placeholder: val}});
  let initialValue = innerGet();
  if (el._x_modelable_hook)
    initialValue = el._x_modelable_hook(initialValue);
  innerSet(initialValue);
  queueMicrotask(() => {
    if (!el._x_model)
      return;
    let outerGet = el._x_model.get;
    let outerSet = el._x_model.set;
    effect3(() => innerSet(outerGet()));
    effect3(() => outerSet(innerGet()));
  });
});

// packages/alpinejs/src/directives/x-teleport.js
directive("teleport", (el, {expression}, {cleanup}) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-teleport can only be used on a <template> tag", el);
  let target = document.querySelector(expression);
  if (!target)
    warn(`Cannot find x-teleport element for selector: "${expression}"`);
  let clone2 = el.content.cloneNode(true).firstElementChild;
  el._x_teleport = clone2;
  clone2._x_teleportBack = el;
  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach((eventName) => {
      clone2.addEventListener(eventName, (e) => {
        e.stopPropagation();
        el.dispatchEvent(new e.constructor(e.type, e));
      });
    });
  }
  addScopeToNode(clone2, {}, el);
  mutateDom(() => {
    target.appendChild(clone2);
    initTree(clone2);
    clone2._x_ignore = true;
  });
  cleanup(() => clone2.remove());
});

// packages/alpinejs/src/directives/x-ignore.js
var handler = () => {
};
handler.inline = (el, {modifiers}, {cleanup}) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};
directive("ignore", handler);

// packages/alpinejs/src/directives/x-effect.js
directive("effect", (el, {expression}, {effect: effect3}) => effect3(evaluateLater(el, expression)));

// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
  let listenerTarget = el;
  let handler3 = (e) => callback(e);
  let options = {};
  let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
  if (modifiers.includes("dot"))
    event = dotSyntax(event);
  if (modifiers.includes("camel"))
    event = camelCase2(event);
  if (modifiers.includes("passive"))
    options.passive = true;
  if (modifiers.includes("capture"))
    options.capture = true;
  if (modifiers.includes("window"))
    listenerTarget = window;
  if (modifiers.includes("document"))
    listenerTarget = document;
  if (modifiers.includes("prevent"))
    handler3 = wrapHandler(handler3, (next, e) => {
      e.preventDefault();
      next(e);
    });
  if (modifiers.includes("stop"))
    handler3 = wrapHandler(handler3, (next, e) => {
      e.stopPropagation();
      next(e);
    });
  if (modifiers.includes("self"))
    handler3 = wrapHandler(handler3, (next, e) => {
      e.target === el && next(e);
    });
  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler3 = wrapHandler(handler3, (next, e) => {
      if (el.contains(e.target))
        return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1)
        return;
      if (el._x_isShown === false)
        return;
      next(e);
    });
  }
  handler3 = wrapHandler(handler3, (next, e) => {
    if (isKeyEvent(event)) {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return;
      }
    }
    next(e);
  });
  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler3 = debounce(handler3, wait);
  }
  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler3 = throttle(handler3, wait);
  }
  if (modifiers.includes("once")) {
    handler3 = wrapHandler(handler3, (next, e) => {
      next(e);
      listenerTarget.removeEventListener(event, handler3, options);
    });
  }
  listenerTarget.addEventListener(event, handler3, options);
  return () => {
    listenerTarget.removeEventListener(event, handler3, options);
  };
}
function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter((i) => {
    return !["window", "document", "prevent", "stop", "once"].includes(i);
  });
  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.length === 0)
    return false;
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
    return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === "cmd" || modifier === "super")
        modifier = "meta";
      return e[`${modifier}Key`];
    });
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (keyToModifiers(e.key).includes(keyModifiers[0]))
        return false;
    }
  }
  return true;
}
function keyToModifiers(key) {
  if (!key)
    return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    ctrl: "control",
    slash: "/",
    space: "-",
    spacebar: "-",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    equal: "="
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key)
      return modifier;
  }).filter((modifier) => modifier);
}

// packages/alpinejs/src/directives/x-model.js
directive("model", (el, {modifiers, expression}, {effect: effect3, cleanup}) => {
  let evaluate2 = evaluateLater(el, expression);
  let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
  let evaluateAssignment = evaluateLater(el, assignmentExpression);
  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
  let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
  let removeListener = on(el, event, modifiers, (e) => {
    evaluateAssignment(() => {
    }, {scope: {
      $event: e,
      rightSideOfExpression: assigmentFunction
    }});
  });
  cleanup(() => removeListener());
  let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
  el._x_model = {
    get() {
      let result;
      evaluate2((value) => result = value);
      return result;
    },
    set(value) {
      evaluateSetModel(() => {
      }, {scope: {__placeholder: value}});
    }
  };
  el._x_forceModelUpdate = () => {
    evaluate2((value) => {
      if (value === void 0 && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    });
  };
  effect3(() => {
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
      return;
    el._x_forceModelUpdate();
  });
});
function generateAssignmentFunction(el, modifiers, expression) {
  if (el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name"))
        el.setAttribute("name", expression);
    });
  }
  return (event, currentValue) => {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0) {
        return event.detail || event.target.value;
      } else if (el.type === "checkbox") {
        if (Array.isArray(currentValue)) {
          let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        let rawValue = event.target.value;
        return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
      }
    });
  };
}
function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}

// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));

// packages/alpinejs/src/directives/x-init.js
addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, {expression}) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate(el, expression, {}, false);
  }
  return evaluate(el, expression, {}, false);
}));

// packages/alpinejs/src/directives/x-text.js
directive("text", (el, {expression}, {effect: effect3, evaluateLater: evaluateLater2}) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
});

// packages/alpinejs/src/directives/x-html.js
directive("html", (el, {expression}, {effect: effect3, evaluateLater: evaluateLater2}) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      el.innerHTML = value;
    });
  });
});

// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
directive("bind", (el, {value, modifiers, expression, original}, {effect: effect3}) => {
  if (!value) {
    return applyBindingsObject(el, expression, original, effect3);
  }
  if (value === "key")
    return storeKeyForXFor(el, expression);
  let evaluate2 = evaluateLater(el, expression);
  effect3(() => evaluate2((result) => {
    if (result === void 0 && expression.match(/\./))
      result = "";
    mutateDom(() => bind(el, value, result, modifiers));
  }));
});
function applyBindingsObject(el, expression, original, effect3) {
  let bindingProviders = {};
  injectBindingProviders(bindingProviders);
  let getBindings = evaluateLater(el, expression);
  let cleanupRunners = [];
  while (cleanupRunners.length)
    cleanupRunners.pop()();
  getBindings((bindings) => {
    let attributes = Object.entries(bindings).map(([name, value]) => ({name, value}));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
  }, {scope: bindingProviders});
}
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
}

// packages/alpinejs/src/directives/x-data.js
addRootSelector(() => `[${prefix("data")}]`);
directive("data", skipDuringClone((el, {expression}, {cleanup}) => {
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, {scope: dataProviderContext});
  if (data2 === void 0)
    data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup(() => {
    undo();
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
  });
}));

// packages/alpinejs/src/directives/x-show.js
directive("show", (el, {modifiers, expression}, {effect: effect3}) => {
  let evaluate2 = evaluateLater(el, expression);
  let hide = () => mutateDom(() => {
    el.style.display = "none";
    el._x_isShown = false;
  });
  let show = () => mutateDom(() => {
    if (el.style.length === 1 && el.style.display === "none") {
      el.removeAttribute("style");
    } else {
      el.style.removeProperty("display");
    }
    el._x_isShown = true;
  });
  let clickAwayCompatibleShow = () => setTimeout(show);
  let toggle = once((value) => value ? show() : hide(), (value) => {
    if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
      el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
    } else {
      value ? clickAwayCompatibleShow() : hide();
    }
  });
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate2((value) => {
    if (!firstTime && value === oldValue)
      return;
    if (modifiers.includes("immediate"))
      value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
});

// packages/alpinejs/src/directives/x-for.js
directive("for", (el, {expression}, {effect: effect3, cleanup}) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup(() => {
    Object.values(el._x_lookup).forEach((el2) => el2.remove());
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject = (i) => typeof i === "object" && !Array.isArray(i);
  let templateEl = el;
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i) => i + 1);
    }
    if (items === void 0)
      items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];
    if (isObject(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey((value2) => keys.push(value2), {scope: {index: key, ...scope2}});
        scopes.push(scope2);
      });
    } else {
      for (let i = 0; i < items.length; i++) {
        let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
        evaluateKey((value) => keys.push(value), {scope: {index: i, ...scope2}});
        scopes.push(scope2);
      }
    }
    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];
    for (let i = 0; i < prevKeys.length; i++) {
      let key = prevKeys[i];
      if (keys.indexOf(key) === -1)
        removes.push(key);
    }
    prevKeys = prevKeys.filter((key) => !removes.includes(key));
    let lastKey = "template";
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let prevIndex = prevKeys.indexOf(key);
      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key);
        adds.push([lastKey, i]);
      } else if (prevIndex !== i) {
        let keyInSpot = prevKeys.splice(i, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }
      lastKey = key;
    }
    for (let i = 0; i < removes.length; i++) {
      let key = removes[i];
      if (!!lookup[key]._x_effects) {
        lookup[key]._x_effects.forEach(dequeueJob);
      }
      lookup[key].remove();
      lookup[key] = null;
      delete lookup[key];
    }
    for (let i = 0; i < moves.length; i++) {
      let [keyInSpot, keyForSpot] = moves[i];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
        marker.before(elInSpot);
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
        marker.remove();
      });
      refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
    }
    for (let i = 0; i < adds.length; i++) {
      let [lastKey2, index] = adds[i];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      if (lastEl._x_currentIfEl)
        lastEl = lastEl._x_currentIfEl;
      let scope2 = scopes[index];
      let key = keys[index];
      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
      addScopeToNode(clone2, reactive(scope2), templateEl);
      mutateDom(() => {
        lastEl.after(clone2);
        initTree(clone2);
      });
      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }
      lookup[key] = clone2;
    }
    for (let i = 0; i < sames.length; i++) {
      refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
    }
    templateEl._x_prevKeys = keys;
  });
}
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch)
    return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }
  return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
    names.forEach((name, i) => {
      scopeVariables[name] = item[i];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
    names.forEach((name) => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }
  if (iteratorNames.index)
    scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection)
    scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}

// packages/alpinejs/src/directives/x-ref.js
function handler2() {
}
handler2.inline = (el, {expression}, {cleanup}) => {
  let root = closestRoot(el);
  if (!root._x_refs)
    root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup(() => delete root._x_refs[expression]);
};
directive("ref", handler2);

// packages/alpinejs/src/directives/x-if.js
directive("if", (el, {expression}, {effect: effect3, cleanup}) => {
  let evaluate2 = evaluateLater(el, expression);
  let show = () => {
    if (el._x_currentIfEl)
      return el._x_currentIfEl;
    let clone2 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      el.after(clone2);
      initTree(clone2);
    });
    el._x_currentIfEl = clone2;
    el._x_undoIf = () => {
      walk(clone2, (node) => {
        if (!!node._x_effects) {
          node._x_effects.forEach(dequeueJob);
        }
      });
      clone2.remove();
      delete el._x_currentIfEl;
    };
    return clone2;
  };
  let hide = () => {
    if (!el._x_undoIf)
      return;
    el._x_undoIf();
    delete el._x_undoIf;
  };
  effect3(() => evaluate2((value) => {
    value ? show() : hide();
  }));
  cleanup(() => el._x_undoIf && el._x_undoIf());
});

// packages/alpinejs/src/directives/x-id.js
directive("id", (el, {expression}, {evaluate: evaluate2}) => {
  let names = evaluate2(expression);
  names.forEach((name) => setIdRoot(el, name));
});

// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, {value, modifiers, expression}, {cleanup}) => {
  let evaluate2 = expression ? evaluateLater(el, expression) : () => {
  };
  if (el.tagName.toLowerCase() === "template") {
    if (!el._x_forwardEvents)
      el._x_forwardEvents = [];
    if (!el._x_forwardEvents.includes(value))
      el._x_forwardEvents.push(value);
  }
  let removeListener = on(el, value, modifiers, (e) => {
    evaluate2(() => {
    }, {scope: {$event: e}, params: [e]});
  });
  cleanup(() => removeListener());
}));

// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({reactive: import_reactivity9.reactive, effect: import_reactivity9.effect, release: import_reactivity9.stop, raw: import_reactivity9.toRaw});
var src_default = alpine_default;

// packages/alpinejs/builds/module.js
var module_default = src_default;



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var _vendor_filament_forms_dist_module_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendor/filament/forms/dist/module.esm */ "./vendor/filament/forms/dist/module.esm.js");
/* harmony import */ var _alpinejs_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alpinejs/focus */ "./node_modules/@alpinejs/focus/dist/module.esm.js");



alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"].plugin(_vendor_filament_forms_dist_module_esm__WEBPACK_IMPORTED_MODULE_1__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"].plugin(_alpinejs_focus__WEBPACK_IMPORTED_MODULE_2__["default"]);
window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"].start();

/***/ }),

/***/ "./vendor/filament/forms/dist/module.esm.js":
/*!**************************************************!*\
  !*** ./vendor/filament/forms/dist/module.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimePickerFormComponentAlpinePlugin": () => (/* binding */ date_time_picker_default),
/* harmony export */   "FileUploadFormComponentAlpinePlugin": () => (/* binding */ file_upload_default),
/* harmony export */   "KeyValueFormComponentAlpinePlugin": () => (/* binding */ key_value_default),
/* harmony export */   "MarkdownEditorFormComponentAlpinePlugin": () => (/* binding */ markdown_editor_default),
/* harmony export */   "MultiSelectFormComponentAlpinePlugin": () => (/* binding */ multi_select_default),
/* harmony export */   "RichEditorFormComponentAlpinePlugin": () => (/* binding */ rich_editor_default),
/* harmony export */   "SelectFormComponentAlpinePlugin": () => (/* binding */ select_default),
/* harmony export */   "TagsInputFormComponentAlpinePlugin": () => (/* binding */ tags_input_default),
/* harmony export */   "TextInputFormComponentAlpinePlugin": () => (/* binding */ text_input_default),
/* harmony export */   "TextareaFormComponentAlpinePlugin": () => (/* binding */ textarea_default),
/* harmony export */   "default": () => (/* binding */ js_default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
var _excluded6=["query","success","failure"];function _get5(){if(typeof Reflect!=="undefined"&&Reflect.get){_get5=Reflect.get;}else{_get5=function _get(target,property,receiver){var base=_superPropBase2(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(arguments.length<3?target:receiver);}return desc.value;};}return _get5.apply(this,arguments);}function _superPropBase2(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf3(object);if(object===null)break;}return object;}function _inherits2(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});Object.defineProperty(subClass,"prototype",{writable:false});if(superClass)_setPrototypeOf3(subClass,superClass);}function _createSuper2(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct2();return function _createSuperInternal(){var Super=_getPrototypeOf3(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf3(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn2(this,result);};}function _possibleConstructorReturn2(self,call){if(call&&(_typeof2(call)==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized2(self);}function _assertThisInitialized2(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf3(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf3(Wrapper,Class);};return _wrapNativeSuper(Class);}function _construct(Parent,args,Class){if(_isNativeReflectConstruct2()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf3(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeReflectConstruct2(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _setPrototypeOf3(o,p){_setPrototypeOf3=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf3(o,p);}function _getPrototypeOf3(o){_getPrototypeOf3=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf3(o);}function _classCallCheck2(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function __defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass2(Constructor,protoProps,staticProps){if(protoProps)__defineProperties(Constructor.prototype,protoProps);if(staticProps)__defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _slicedToArray2(arr,i){return _arrayWithHoles2(arr)||_iterableToArrayLimit2(arr,i)||_unsupportedIterableToArray2(arr,i)||_nonIterableRest2();}function _nonIterableRest2(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit2(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles2(arr){if(Array.isArray(arr))return arr;}function _objectWithoutProperties2(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose2(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose2(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty2(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty2(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray2(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray2(arr);}function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray2(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e2){throw _e2;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e3){didErr=true;err=_e3;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _unsupportedIterableToArray2(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray2(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray2(o,minLen);}function _arrayLikeToArray2(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _typeof2(obj){"@babel/helpers - typeof";return _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof2(obj);}var __create=Object.create;var __defProp=Object.defineProperty;var __getProtoOf=Object.getPrototypeOf;var __hasOwnProp=Object.prototype.hasOwnProperty;var __getOwnPropNames=Object.getOwnPropertyNames;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __markAsModule=function __markAsModule(target){return __defProp(target,"__esModule",{value:true});};var __commonJS=function __commonJS(callback,module){return function(){if(!module){module={exports:{}};callback(module.exports,module);}return module.exports;};};var __exportStar=function __exportStar(target,module,desc){if(module&&_typeof2(module)==="object"||typeof module==="function"){var _iterator=_createForOfIteratorHelper(__getOwnPropNames(module)),_step;try{var _loop=function _loop(){var key=_step.value;if(!__hasOwnProp.call(target,key)&&key!=="default")__defProp(target,key,{get:function get(){return module[key];},enumerable:!(desc=__getOwnPropDesc(module,key))||desc.enumerable});};for(_iterator.s();!(_step=_iterator.n()).done;){_loop();}}catch(err){_iterator.e(err);}finally{_iterator.f();}}return target;};var __toModule=function __toModule(module){return __exportStar(__markAsModule(__defProp(module!=null?__create(__getProtoOf(module)):{},"default",module&&module.__esModule&&"default"in module?{get:function get(){return module["default"];},enumerable:true}:{value:module,enumerable:true})),module);};// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat=__commonJS(function(exports,module){!function(t2,e2){_typeof2(exports)=="object"&&typeof module!="undefined"?module.exports=e2():typeof define=="function"&&__webpack_require__.amdO?define(e2):(t2=typeof globalThis!="undefined"?globalThis:t2||self).dayjs_plugin_customParseFormat=e2();}(exports,function(){"use strict";var t2={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e2=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n2=/\d\d/,r2=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,o2={},s2=function s2(t3){return(t3=+t3)+(t3>68?1900:2e3);};var a2=function a2(t3){return function(e3){this[t3]=+e3;};},f=[/[+-]\d\d:?(\d\d)?|Z/,function(t3){(this.zone||(this.zone={})).offset=function(t4){if(!t4)return 0;if(t4==="Z")return 0;var e3=t4.match(/([+-]|\d\d)/g),n3=60*e3[1]+(+e3[2]||0);return n3===0?0:e3[0]==="+"?-n3:n3;}(t3);}],u=function u(t3){var e3=o2[t3];return e3&&(e3.indexOf?e3:e3.s.concat(e3.f));},h=function h(t3,e3){var n3,r3=o2.meridiem;if(r3){for(var i2=1;i2<=24;i2+=1){if(t3.indexOf(r3(i2,0,e3))>-1){n3=i2>12;break;}}}else n3=t3===(e3?"pm":"PM");return n3;},d={A:[i,function(t3){this.afternoon=h(t3,false);}],a:[i,function(t3){this.afternoon=h(t3,true);}],S:[/\d/,function(t3){this.milliseconds=100*+t3;}],SS:[n2,function(t3){this.milliseconds=10*+t3;}],SSS:[/\d{3}/,function(t3){this.milliseconds=+t3;}],s:[r2,a2("seconds")],ss:[r2,a2("seconds")],m:[r2,a2("minutes")],mm:[r2,a2("minutes")],H:[r2,a2("hours")],h:[r2,a2("hours")],HH:[r2,a2("hours")],hh:[r2,a2("hours")],D:[r2,a2("day")],DD:[n2,a2("day")],Do:[i,function(t3){var e3=o2.ordinal,n3=t3.match(/\d+/);if(this.day=n3[0],e3)for(var r3=1;r3<=31;r3+=1){e3(r3).replace(/\[|\]/g,"")===t3&&(this.day=r3);}}],M:[r2,a2("month")],MM:[n2,a2("month")],MMM:[i,function(t3){var e3=u("months"),n3=(u("monthsShort")||e3.map(function(t4){return t4.substr(0,3);})).indexOf(t3)+1;if(n3<1)throw new Error();this.month=n3%12||n3;}],MMMM:[i,function(t3){var e3=u("months").indexOf(t3)+1;if(e3<1)throw new Error();this.month=e3%12||e3;}],Y:[/[+-]?\d+/,a2("year")],YY:[n2,function(t3){this.year=s2(t3);}],YYYY:[/\d{4}/,a2("year")],Z:f,ZZ:f};function c2(n3){var r3,i2;r3=n3,i2=o2&&o2.formats;for(var s3=(n3=r3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(e3,n4,r4){var o3=r4&&r4.toUpperCase();return n4||i2[r4]||t2[r4]||i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t3,e4,n5){return e4||n5.slice(1);});})).match(e2),a3=s3.length,f2=0;f2<a3;f2+=1){var u2=s3[f2],h2=d[u2],c3=h2&&h2[0],l=h2&&h2[1];s3[f2]=l?{regex:c3,parser:l}:u2.replace(/^\[|\]$/g,"");}return function(t3){for(var e3={},n4=0,r4=0;n4<a3;n4+=1){var i3=s3[n4];if(typeof i3=="string")r4+=i3.length;else{var o3=i3.regex,f3=i3.parser,u3=t3.substr(r4),h3=o3.exec(u3)[0];f3.call(e3,h3),t3=t3.replace(h3,"");}}return function(t4){var e4=t4.afternoon;if(e4!==void 0){var n5=t4.hours;e4?n5<12&&(t4.hours+=12):n5===12&&(t4.hours=0),delete t4.afternoon;}}(e3),e3;};}return function(t3,e3,n3){n3.p.customParseFormat=true,t3&&t3.parseTwoDigitYear&&(s2=t3.parseTwoDigitYear);var r3=e3.prototype,i2=r3.parse;r3.parse=function(t4){var e4=t4.date,r4=t4.utc,s3=t4.args;this.$u=r4;var a3=s3[1];if(typeof a3=="string"){var f2=s3[2]===true,u2=s3[3]===true,h2=f2||u2,d2=s3[2];u2&&(d2=s3[2]),o2=this.$locale(),!f2&&d2&&(o2=n3.Ls[d2]),this.$d=function(t5,e5,n4){try{if(["x","X"].indexOf(e5)>-1)return new Date((e5==="X"?1e3:1)*t5);var r5=c2(e5)(t5),i3=r5.year,o3=r5.month,s4=r5.day,a4=r5.hours,f3=r5.minutes,u3=r5.seconds,h3=r5.milliseconds,d3=r5.zone,l2=new Date(),m2=s4||(i3||o3?1:l2.getDate()),M3=i3||l2.getFullYear(),Y2=0;i3&&!o3||(Y2=o3>0?o3-1:l2.getMonth());var p2=a4||0,v=f3||0,D2=u3||0,g=h3||0;return d3?new Date(Date.UTC(M3,Y2,m2,p2,v,D2,g+60*d3.offset*1e3)):n4?new Date(Date.UTC(M3,Y2,m2,p2,v,D2,g)):new Date(M3,Y2,m2,p2,v,D2,g);}catch(t6){return new Date("");}}(e4,a3,r4),this.init(),d2&&d2!==true&&(this.$L=this.locale(d2).$L),h2&&e4!=this.format(a3)&&(this.$d=new Date("")),o2={};}else if(a3 instanceof Array)for(var l=a3.length,m=1;m<=l;m+=1){s3[1]=a3[m-1];var M2=n3.apply(this,s3);if(M2.isValid()){this.$d=M2.$d,this.$L=M2.$L,this.init();break;}m===l&&(this.$d=new Date(""));}else i2.call(this,t4);};};});});// node_modules/dayjs/plugin/localeData.js
var require_localeData=__commonJS(function(exports,module){!function(n2,e2){_typeof2(exports)=="object"&&typeof module!="undefined"?module.exports=e2():typeof define=="function"&&__webpack_require__.amdO?define(e2):(n2=typeof globalThis!="undefined"?globalThis:n2||self).dayjs_plugin_localeData=e2();}(exports,function(){"use strict";return function(n2,e2,t2){var r2=e2.prototype,o2=function o2(n3){return n3&&(n3.indexOf?n3:n3.s);},u=function u(n3,e3,t3,r3,u2){var i2=n3.name?n3:n3.$locale(),a3=o2(i2[e3]),s3=o2(i2[t3]),f=a3||s3.map(function(n4){return n4.substr(0,r3);});if(!u2)return f;var d=i2.weekStart;return f.map(function(n4,e4){return f[(e4+(d||0))%7];});},i=function i(){return t2.Ls[t2.locale()];},a2=function a2(n3,e3){return n3.formats[e3]||function(n4){return n4.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(n5,e4,t3){return e4||t3.slice(1);});}(n3.formats[e3.toUpperCase()]);},s2=function s2(){var n3=this;return{months:function months(e3){return e3?e3.format("MMMM"):u(n3,"months");},monthsShort:function monthsShort(e3){return e3?e3.format("MMM"):u(n3,"monthsShort","months",3);},firstDayOfWeek:function firstDayOfWeek(){return n3.$locale().weekStart||0;},weekdays:function weekdays(e3){return e3?e3.format("dddd"):u(n3,"weekdays");},weekdaysMin:function weekdaysMin(e3){return e3?e3.format("dd"):u(n3,"weekdaysMin","weekdays",2);},weekdaysShort:function weekdaysShort(e3){return e3?e3.format("ddd"):u(n3,"weekdaysShort","weekdays",3);},longDateFormat:function longDateFormat(e3){return a2(n3.$locale(),e3);},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal};};r2.localeData=function(){return s2.bind(this)();},t2.localeData=function(){var n3=i();return{firstDayOfWeek:function firstDayOfWeek(){return n3.weekStart||0;},weekdays:function weekdays(){return t2.weekdays();},weekdaysShort:function weekdaysShort(){return t2.weekdaysShort();},weekdaysMin:function weekdaysMin(){return t2.weekdaysMin();},months:function months(){return t2.months();},monthsShort:function monthsShort(){return t2.monthsShort();},longDateFormat:function longDateFormat(e3){return a2(n3,e3);},meridiem:n3.meridiem,ordinal:n3.ordinal};},t2.months=function(){return u(i(),"months");},t2.monthsShort=function(){return u(i(),"monthsShort","months",3);},t2.weekdays=function(n3){return u(i(),"weekdays",null,null,n3);},t2.weekdaysShort=function(n3){return u(i(),"weekdaysShort","weekdays",3,n3);},t2.weekdaysMin=function(n3){return u(i(),"weekdaysMin","weekdays",2,n3);};};});});// node_modules/dayjs/plugin/timezone.js
var require_timezone=__commonJS(function(exports,module){!function(t2,e2){_typeof2(exports)=="object"&&typeof module!="undefined"?module.exports=e2():typeof define=="function"&&__webpack_require__.amdO?define(e2):(t2=typeof globalThis!="undefined"?globalThis:t2||self).dayjs_plugin_timezone=e2();}(exports,function(){"use strict";var t2={year:0,month:1,day:2,hour:3,minute:4,second:5},e2={};return function(n2,i,o2){var r2,a2=function a2(t3,n3,i2){i2===void 0&&(i2={});var o3=new Date(t3);return function(t4,n4){n4===void 0&&(n4={});var i3=n4.timeZoneName||"short",o4=t4+"|"+i3,r3=e2[o4];return r3||(r3=new Intl.DateTimeFormat("en-US",{hour12:false,timeZone:t4,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i3}),e2[o4]=r3),r3;}(n3,i2).formatToParts(o3);},u=function u(e3,n3){for(var i2=a2(e3,n3),r3=[],u2=0;u2<i2.length;u2+=1){var f2=i2[u2],s3=f2.type,m=f2.value,c2=t2[s3];c2>=0&&(r3[c2]=parseInt(m,10));}var d=r3[3],l=d===24?0:d,v=r3[0]+"-"+r3[1]+"-"+r3[2]+" "+l+":"+r3[4]+":"+r3[5]+":000",h=+e3;return(o2.utc(v).valueOf()-(h-=h%1e3))/6e4;},f=i.prototype;f.tz=function(t3,e3){t3===void 0&&(t3=r2);var n3=this.utcOffset(),i2=this.toDate(),a3=i2.toLocaleString("en-US",{timeZone:t3}),u2=Math.round((i2-new Date(a3))/1e3/60),f2=o2(a3).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i2.getTimezoneOffset()/15)-u2,true);if(e3){var s3=f2.utcOffset();f2=f2.add(n3-s3,"minute");}return f2.$x.$timezone=t3,f2;},f.offsetName=function(t3){var e3=this.$x.$timezone||o2.tz.guess(),n3=a2(this.valueOf(),e3,{timeZoneName:t3}).find(function(t4){return t4.type.toLowerCase()==="timezonename";});return n3&&n3.value;};var s2=f.startOf;f.startOf=function(t3,e3){if(!this.$x||!this.$x.$timezone)return s2.call(this,t3,e3);var n3=o2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s2.call(n3,t3,e3).tz(this.$x.$timezone,true);},o2.tz=function(t3,e3,n3){var i2=n3&&e3,a3=n3||e3||r2,f2=u(+o2(),a3);if(typeof t3!="string")return o2(t3).tz(a3);var s3=function(t4,e4,n4){var i3=t4-60*e4*1e3,o3=u(i3,n4);if(e4===o3)return[i3,e4];var r3=u(i3-=60*(o3-e4)*1e3,n4);return o3===r3?[i3,o3]:[t4-60*Math.min(o3,r3)*1e3,Math.max(o3,r3)];}(o2.utc(t3,i2).valueOf(),f2,a3),m=s3[0],c2=s3[1],d=o2(m).utcOffset(c2);return d.$x.$timezone=a3,d;},o2.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone;},o2.tz.setDefault=function(t3){r2=t3;};};});});// node_modules/dayjs/plugin/utc.js
var require_utc=__commonJS(function(exports,module){!function(t2,i){_typeof2(exports)=="object"&&typeof module!="undefined"?module.exports=i():typeof define=="function"&&__webpack_require__.amdO?define(i):(t2=typeof globalThis!="undefined"?globalThis:t2||self).dayjs_plugin_utc=i();}(exports,function(){"use strict";var t2="minute",i=/[+-]\d\d(?::?\d\d)?/g,e2=/([+-]|\d\d)/g;return function(s2,f,n2){var u=f.prototype;n2.utc=function(t3){var i2={date:t3,utc:true,args:arguments};return new f(i2);},u.utc=function(i2){var e3=n2(this.toDate(),{locale:this.$L,utc:true});return i2?e3.add(this.utcOffset(),t2):e3;},u.local=function(){return n2(this.toDate(),{locale:this.$L,utc:false});};var o2=u.parse;u.parse=function(t3){t3.utc&&(this.$u=true),this.$utils().u(t3.$offset)||(this.$offset=t3.$offset),o2.call(this,t3);};var r2=u.init;u.init=function(){if(this.$u){var t3=this.$d;this.$y=t3.getUTCFullYear(),this.$M=t3.getUTCMonth(),this.$D=t3.getUTCDate(),this.$W=t3.getUTCDay(),this.$H=t3.getUTCHours(),this.$m=t3.getUTCMinutes(),this.$s=t3.getUTCSeconds(),this.$ms=t3.getUTCMilliseconds();}else r2.call(this);};var a2=u.utcOffset;u.utcOffset=function(s3,f2){var n3=this.$utils().u;if(n3(s3))return this.$u?0:n3(this.$offset)?a2.call(this):this.$offset;if(typeof s3=="string"&&(s3=function(t3){t3===void 0&&(t3="");var s4=t3.match(i);if(!s4)return null;var f3=(""+s4[0]).match(e2)||["-",0,0],n4=f3[0],u3=60*+f3[1]+ +f3[2];return u3===0?0:n4==="+"?u3:-u3;}(s3))===null)return this;var u2=Math.abs(s3)<=16?60*s3:s3,o3=this;if(f2)return o3.$offset=u2,o3.$u=s3===0,o3;if(s3!==0){var r3=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o3=this.local().add(u2+r3,t2)).$offset=u2,o3.$x.$localOffset=r3;}else o3=this.utc();return o3;};var h=u.format;u.format=function(t3){var i2=t3||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,i2);},u.valueOf=function(){var t3=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||new Date().getTimezoneOffset());return this.$d.valueOf()-6e4*t3;},u.isUTC=function(){return!!this.$u;},u.toISOString=function(){return this.toDate().toISOString();},u.toString=function(){return this.toDate().toUTCString();};var l=u.toDate;u.toDate=function(t3){return t3==="s"&&this.$offset?n2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this);};var c2=u.diff;u.diff=function(t3,i2,e3){if(t3&&this.$u===t3.$u)return c2.call(this,t3,i2,e3);var s3=this.local(),f2=n2(t3).local();return c2.call(s3,f2,i2,e3);};};});});// node_modules/trix/dist/trix.js
var require_trix=__commonJS(function(exports,module){(function(){}).call(exports),function(){var t2;window.Set==null&&(window.Set=t2=function(){function t3(){this.clear();}return t3.prototype.clear=function(){return this.values=[];},t3.prototype.has=function(t4){return this.values.indexOf(t4)!==-1;},t3.prototype.add=function(t4){return this.has(t4)||this.values.push(t4),this;},t3.prototype["delete"]=function(t4){var e2;return(e2=this.values.indexOf(t4))===-1?false:(this.values.splice(e2,1),true);},t3.prototype.forEach=function(){var t4;return(t4=this.values).forEach.apply(t4,arguments);},t3;}());}.call(exports),function(t2){function e2(){}function n2(t3,e3){return function(){t3.apply(e3,arguments);};}function i(t3){if(_typeof2(this)!="object")throw new TypeError("Promises must be constructed via new");if(typeof t3!="function")throw new TypeError("not a function");this._state=0,this._handled=false,this._value=void 0,this._deferreds=[],c2(t3,this);}function o2(t3,e3){for(;t3._state===3;){t3=t3._value;}return t3._state===0?void t3._deferreds.push(e3):(t3._handled=true,void h(function(){var n3=t3._state===1?e3.onFulfilled:e3.onRejected;if(n3===null)return void(t3._state===1?r2:s2)(e3.promise,t3._value);var i2;try{i2=n3(t3._value);}catch(o3){return void s2(e3.promise,o3);}r2(e3.promise,i2);}));}function r2(t3,e3){try{if(e3===t3)throw new TypeError("A promise cannot be resolved with itself.");if(e3&&(_typeof2(e3)=="object"||typeof e3=="function")){var o3=e3.then;if(e3 instanceof i)return t3._state=3,t3._value=e3,void a2(t3);if(typeof o3=="function")return void c2(n2(o3,e3),t3);}t3._state=1,t3._value=e3,a2(t3);}catch(r3){s2(t3,r3);}}function s2(t3,e3){t3._state=2,t3._value=e3,a2(t3);}function a2(t3){t3._state===2&&t3._deferreds.length===0&&setTimeout(function(){t3._handled||p2(t3._value);},1);for(var e3=0,n3=t3._deferreds.length;n3>e3;e3++){o2(t3,t3._deferreds[e3]);}t3._deferreds=null;}function u(t3,e3,n3){this.onFulfilled=typeof t3=="function"?t3:null,this.onRejected=typeof e3=="function"?e3:null,this.promise=n3;}function c2(t3,e3){var n3=false;try{t3(function(t4){n3||(n3=true,r2(e3,t4));},function(t4){n3||(n3=true,s2(e3,t4));});}catch(i2){if(n3)return;n3=true,s2(e3,i2);}}var l=setTimeout,h=typeof setImmediate=="function"&&setImmediate||function(t3){l(t3,1);},p2=function p2(t3){typeof console!="undefined"&&console&&console.warn("Possible Unhandled Promise Rejection:",t3);};i.prototype["catch"]=function(t3){return this.then(null,t3);},i.prototype.then=function(t3,n3){var r3=new i(e2);return o2(this,new u(t3,n3,r3)),r3;},i.all=function(t3){var e3=Array.prototype.slice.call(t3);return new i(function(t4,n3){function i2(r4,s3){try{if(s3&&(_typeof2(s3)=="object"||typeof s3=="function")){var a3=s3.then;if(typeof a3=="function")return void a3.call(s3,function(t5){i2(r4,t5);},n3);}e3[r4]=s3,--o3===0&&t4(e3);}catch(u2){n3(u2);}}if(e3.length===0)return t4([]);for(var o3=e3.length,r3=0;r3<e3.length;r3++){i2(r3,e3[r3]);}});},i.resolve=function(t3){return t3&&_typeof2(t3)=="object"&&t3.constructor===i?t3:new i(function(e3){e3(t3);});},i.reject=function(t3){return new i(function(e3,n3){n3(t3);});},i.race=function(t3){return new i(function(e3,n3){for(var i2=0,o3=t3.length;o3>i2;i2++){t3[i2].then(e3,n3);}});},i._setImmediateFn=function(t3){h=t3;},i._setUnhandledRejectionFn=function(t3){p2=t3;},typeof module!="undefined"&&module.exports?module.exports=i:t2.Promise||(t2.Promise=i);}(exports),function(){var t2=_typeof2(window.customElements)=="object",e2=typeof document.registerElement=="function",n2=t2||e2;n2||(typeof WeakMap=="undefined"&&!function(){var t3=Object.defineProperty,e3=Date.now()%1e9,n3=function n3(){this.name="__st"+(1e9*Math.random()>>>0)+(e3++ +"__");};n3.prototype={set:function set(e4,n4){var i=e4[this.name];return i&&i[0]===e4?i[1]=n4:t3(e4,this.name,{value:[e4,n4],writable:true}),this;},get:function get(t4){var e4;return(e4=t4[this.name])&&e4[0]===t4?e4[1]:void 0;},"delete":function _delete(t4){var e4=t4[this.name];return e4&&e4[0]===t4?(e4[0]=e4[1]=void 0,true):false;},has:function has(t4){var e4=t4[this.name];return e4?e4[0]===t4:false;}},window.WeakMap=n3;}(),function(t3){function e3(t4){A.push(t4),b||(b=true,g(i));}function n3(t4){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(t4)||t4;}function i(){b=false;var t4=A;A=[],t4.sort(function(t5,e5){return t5.uid_-e5.uid_;});var e4=false;t4.forEach(function(t5){var n4=t5.takeRecords();o2(t5),n4.length&&(t5.callback_(n4,t5),e4=true);}),e4&&i();}function o2(t4){t4.nodes_.forEach(function(e4){var n4=m.get(e4);n4&&n4.forEach(function(e5){e5.observer===t4&&e5.removeTransientObservers();});});}function r2(t4,e4){for(var n4=t4;n4;n4=n4.parentNode){var i2=m.get(n4);if(i2)for(var o3=0;o3<i2.length;o3++){var r3=i2[o3],s3=r3.options;if(n4===t4||s3.subtree){var a3=e4(s3);a3&&r3.enqueue(a3);}}}}function s2(t4){this.callback_=t4,this.nodes_=[],this.records_=[],this.uid_=++C3;}function a2(t4,e4){this.type=t4,this.target=e4,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null;}function u(t4){var e4=new a2(t4.type,t4.target);return e4.addedNodes=t4.addedNodes.slice(),e4.removedNodes=t4.removedNodes.slice(),e4.previousSibling=t4.previousSibling,e4.nextSibling=t4.nextSibling,e4.attributeName=t4.attributeName,e4.attributeNamespace=t4.attributeNamespace,e4.oldValue=t4.oldValue,e4;}function c2(t4,e4){return x=new a2(t4,e4);}function l(t4){return w?w:(w=u(x),w.oldValue=t4,w);}function h(){x=w=void 0;}function p2(t4){return t4===w||t4===x;}function d(t4,e4){return t4===e4?t4:w&&p2(t4)?w:null;}function f(t4,e4,n4){this.observer=t4,this.target=e4,this.options=n4,this.transientObservedNodes=[];}if(!t3.JsMutationObserver){var g,m=new WeakMap();if(/Trident|Edge/.test(navigator.userAgent))g=setTimeout;else if(window.setImmediate)g=window.setImmediate;else{var v=[],y=String(Math.random());window.addEventListener("message",function(t4){if(t4.data===y){var e4=v;v=[],e4.forEach(function(t5){t5();});}}),g=function g(t4){v.push(t4),window.postMessage(y,"*");};}var b=false,A=[],C3=0;s2.prototype={observe:function observe(t4,e4){if(t4=n3(t4),!e4.childList&&!e4.attributes&&!e4.characterData||e4.attributeOldValue&&!e4.attributes||e4.attributeFilter&&e4.attributeFilter.length&&!e4.attributes||e4.characterDataOldValue&&!e4.characterData)throw new SyntaxError();var i2=m.get(t4);i2||m.set(t4,i2=[]);for(var o3,r3=0;r3<i2.length;r3++){if(i2[r3].observer===this){o3=i2[r3],o3.removeListeners(),o3.options=e4;break;}}o3||(o3=new f(this,t4,e4),i2.push(o3),this.nodes_.push(t4)),o3.addListeners();},disconnect:function disconnect(){this.nodes_.forEach(function(t4){for(var e4=m.get(t4),n4=0;n4<e4.length;n4++){var i2=e4[n4];if(i2.observer===this){i2.removeListeners(),e4.splice(n4,1);break;}}},this),this.records_=[];},takeRecords:function takeRecords(){var t4=this.records_;return this.records_=[],t4;}};var x,w;f.prototype={enqueue:function enqueue(t4){var n4=this.observer.records_,i2=n4.length;if(n4.length>0){var o3=n4[i2-1],r3=d(o3,t4);if(r3)return void(n4[i2-1]=r3);}else e3(this.observer);n4[i2]=t4;},addListeners:function addListeners(){this.addListeners_(this.target);},addListeners_:function addListeners_(t4){var e4=this.options;e4.attributes&&t4.addEventListener("DOMAttrModified",this,true),e4.characterData&&t4.addEventListener("DOMCharacterDataModified",this,true),e4.childList&&t4.addEventListener("DOMNodeInserted",this,true),(e4.childList||e4.subtree)&&t4.addEventListener("DOMNodeRemoved",this,true);},removeListeners:function removeListeners(){this.removeListeners_(this.target);},removeListeners_:function removeListeners_(t4){var e4=this.options;e4.attributes&&t4.removeEventListener("DOMAttrModified",this,true),e4.characterData&&t4.removeEventListener("DOMCharacterDataModified",this,true),e4.childList&&t4.removeEventListener("DOMNodeInserted",this,true),(e4.childList||e4.subtree)&&t4.removeEventListener("DOMNodeRemoved",this,true);},addTransientObserver:function addTransientObserver(t4){if(t4!==this.target){this.addListeners_(t4),this.transientObservedNodes.push(t4);var e4=m.get(t4);e4||m.set(t4,e4=[]),e4.push(this);}},removeTransientObservers:function removeTransientObservers(){var t4=this.transientObservedNodes;this.transientObservedNodes=[],t4.forEach(function(t5){this.removeListeners_(t5);for(var e4=m.get(t5),n4=0;n4<e4.length;n4++){if(e4[n4]===this){e4.splice(n4,1);break;}}},this);},handleEvent:function handleEvent(t4){switch(t4.stopImmediatePropagation(),t4.type){case"DOMAttrModified":var e4=t4.attrName,n4=t4.relatedNode.namespaceURI,i2=t4.target,o3=new c2("attributes",i2);o3.attributeName=e4,o3.attributeNamespace=n4;var s3=t4.attrChange===MutationEvent.ADDITION?null:t4.prevValue;r2(i2,function(t5){return!t5.attributes||t5.attributeFilter&&t5.attributeFilter.length&&t5.attributeFilter.indexOf(e4)===-1&&t5.attributeFilter.indexOf(n4)===-1?void 0:t5.attributeOldValue?l(s3):o3;});break;case"DOMCharacterDataModified":var i2=t4.target,o3=c2("characterData",i2),s3=t4.prevValue;r2(i2,function(t5){return t5.characterData?t5.characterDataOldValue?l(s3):o3:void 0;});break;case"DOMNodeRemoved":this.addTransientObserver(t4.target);case"DOMNodeInserted":var a3,u2,p3=t4.target;t4.type==="DOMNodeInserted"?(a3=[p3],u2=[]):(a3=[],u2=[p3]);var d2=p3.previousSibling,f2=p3.nextSibling,o3=c2("childList",t4.target.parentNode);o3.addedNodes=a3,o3.removedNodes=u2,o3.previousSibling=d2,o3.nextSibling=f2,r2(t4.relatedNode,function(t5){return t5.childList?o3:void 0;});}h();}},t3.JsMutationObserver=s2,t3.MutationObserver||(t3.MutationObserver=s2,s2._isPolyfilled=true);}}(self),function(){"use strict";if(!window.performance||!window.performance.now){var t3=Date.now();window.performance={now:function now(){return Date.now()-t3;}};}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var t4=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t4?function(e4){return t4(function(){e4(performance.now());});}:function(t5){return window.setTimeout(t5,1e3/60);};}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t4){clearTimeout(t4);};}());var e3=function(){var t4=document.createEvent("Event");return t4.initEvent("foo",true,true),t4.preventDefault(),t4.defaultPrevented;}();if(!e3){var n3=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(n3.call(this),Object.defineProperty(this,"defaultPrevented",{get:function get(){return true;},configurable:true}));};}var i=/Trident/.test(navigator.userAgent);if((!window.CustomEvent||i&&typeof window.CustomEvent!="function")&&(window.CustomEvent=function(t4,e4){e4=e4||{};var n4=document.createEvent("CustomEvent");return n4.initCustomEvent(t4,Boolean(e4.bubbles),Boolean(e4.cancelable),e4.detail),n4;},window.CustomEvent.prototype=window.Event.prototype),!window.Event||i&&typeof window.Event!="function"){var o2=window.Event;window.Event=function(t4,e4){e4=e4||{};var n4=document.createEvent("Event");return n4.initEvent(t4,Boolean(e4.bubbles),Boolean(e4.cancelable)),n4;},window.Event.prototype=o2.prototype;}}(window.WebComponents),window.CustomElements=window.CustomElements||{flags:{}},function(t3){var e3=t3.flags,n3=[],i=function i(t4){n3.push(t4);},o2=function o2(){n3.forEach(function(e4){e4(t3);});};t3.addModule=i,t3.initializeModules=o2,t3.hasNative=Boolean(document.registerElement),t3.isIE=/Trident/.test(navigator.userAgent),t3.useNative=!e3.register&&t3.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative);}(window.CustomElements),window.CustomElements.addModule(function(t3){function e3(t4,e4){n3(t4,function(t5){return e4(t5)?true:void i(t5,e4);}),i(t4,e4);}function n3(t4,e4,i2){var o3=t4.firstElementChild;if(!o3)for(o3=t4.firstChild;o3&&o3.nodeType!==Node.ELEMENT_NODE;){o3=o3.nextSibling;}for(;o3;){e4(o3,i2)!==true&&n3(o3,e4,i2),o3=o3.nextElementSibling;}return null;}function i(t4,n4){for(var i2=t4.shadowRoot;i2;){e3(i2,n4),i2=i2.olderShadowRoot;}}function o2(t4,e4){r2(t4,e4,[]);}function r2(t4,e4,n4){if(t4=window.wrap(t4),!(n4.indexOf(t4)>=0)){n4.push(t4);for(var i2,o3=t4.querySelectorAll("link[rel="+s2+"]"),a2=0,u=o3.length;u>a2&&(i2=o3[a2]);a2++){i2["import"]&&r2(i2["import"],e4,n4);}e4(t4);}}var s2=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";t3.forDocumentTree=o2,t3.forSubtree=e3;}),window.CustomElements.addModule(function(t3){function e3(t4,e4){return n3(t4,e4)||i(t4,e4);}function n3(e4,n4){return t3.upgrade(e4,n4)?true:void(n4&&s2(e4));}function i(t4,e4){b(t4,function(t5){return n3(t5,e4)?true:void 0;});}function o2(t4){w.push(t4),x||(x=true,setTimeout(r2));}function r2(){x=false;for(var t4,e4=w,n4=0,i2=e4.length;i2>n4&&(t4=e4[n4]);n4++){t4();}w=[];}function s2(t4){C3?o2(function(){a2(t4);}):a2(t4);}function a2(t4){t4.__upgraded__&&!t4.__attached&&(t4.__attached=true,t4.attachedCallback&&t4.attachedCallback());}function u(t4){c2(t4),b(t4,function(t5){c2(t5);});}function c2(t4){C3?o2(function(){l(t4);}):l(t4);}function l(t4){t4.__upgraded__&&t4.__attached&&(t4.__attached=false,t4.detachedCallback&&t4.detachedCallback());}function h(t4){for(var e4=t4,n4=window.wrap(document);e4;){if(e4==n4)return true;e4=e4.parentNode||e4.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e4.host;}}function p2(t4){if(t4.shadowRoot&&!t4.shadowRoot.__watched){y.dom&&console.log("watching shadow-root for: ",t4.localName);for(var e4=t4.shadowRoot;e4;){g(e4),e4=e4.olderShadowRoot;}}}function d(t4,n4){if(y.dom){var i2=n4[0];if(i2&&i2.type==="childList"&&i2.addedNodes&&i2.addedNodes){for(var o3=i2.addedNodes[0];o3&&o3!==document&&!o3.host;){o3=o3.parentNode;}var r3=o3&&(o3.URL||o3._URL||o3.host&&o3.host.localName)||"";r3=r3.split("/?").shift().split("/").pop();}console.group("mutations (%d) [%s]",n4.length,r3||"");}var s3=h(t4);n4.forEach(function(t5){t5.type==="childList"&&(E(t5.addedNodes,function(t6){t6.localName&&e3(t6,s3);}),E(t5.removedNodes,function(t6){t6.localName&&u(t6);}));}),y.dom&&console.groupEnd();}function f(t4){for(t4=window.wrap(t4),t4||(t4=window.wrap(document));t4.parentNode;){t4=t4.parentNode;}var e4=t4.__observer;e4&&(d(t4,e4.takeRecords()),r2());}function g(t4){if(!t4.__observer){var e4=new MutationObserver(d.bind(this,t4));e4.observe(t4,{childList:true,subtree:true}),t4.__observer=e4;}}function m(t4){t4=window.wrap(t4),y.dom&&console.group("upgradeDocument: ",t4.baseURI.split("/").pop());var n4=t4===window.wrap(document);e3(t4,n4),g(t4),y.dom&&console.groupEnd();}function v(t4){A(t4,m);}var y=t3.flags,b=t3.forSubtree,A=t3.forDocumentTree,C3=window.MutationObserver._isPolyfilled&&y["throttle-attached"];t3.hasPolyfillMutations=C3,t3.hasThrottledAttached=C3;var x=false,w=[],E=Array.prototype.forEach.call.bind(Array.prototype.forEach),S2=Element.prototype.createShadowRoot;S2&&(Element.prototype.createShadowRoot=function(){var t4=S2.call(this);return window.CustomElements.watchShadow(this),t4;}),t3.watchShadow=p2,t3.upgradeDocumentTree=v,t3.upgradeDocument=m,t3.upgradeSubtree=i,t3.upgradeAll=e3,t3.attached=s2,t3.takeRecords=f;}),window.CustomElements.addModule(function(t3){function e3(e4,i2){if(e4.localName==="template"&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e4),!e4.__upgraded__&&e4.nodeType===Node.ELEMENT_NODE){var o3=e4.getAttribute("is"),r3=t3.getRegisteredDefinition(e4.localName)||t3.getRegisteredDefinition(o3);if(r3&&(o3&&r3.tag==e4.localName||!o3&&!r3["extends"]))return n3(e4,r3,i2);}}function n3(e4,n4,o3){return s2.upgrade&&console.group("upgrade:",e4.localName),n4.is&&e4.setAttribute("is",n4.is),i(e4,n4),e4.__upgraded__=true,r2(e4),o3&&t3.attached(e4),t3.upgradeSubtree(e4,o3),s2.upgrade&&console.groupEnd(),e4;}function i(t4,e4){Object.__proto__?t4.__proto__=e4.prototype:(o2(t4,e4.prototype,e4["native"]),t4.__proto__=e4.prototype);}function o2(t4,e4,n4){for(var i2={},o3=e4;o3!==n4&&o3!==HTMLElement.prototype;){for(var r3,s3=Object.getOwnPropertyNames(o3),a2=0;r3=s3[a2];a2++){i2[r3]||(Object.defineProperty(t4,r3,Object.getOwnPropertyDescriptor(o3,r3)),i2[r3]=1);}o3=Object.getPrototypeOf(o3);}}function r2(t4){t4.createdCallback&&t4.createdCallback();}var s2=t3.flags;t3.upgrade=e3,t3.upgradeWithDefinition=n3,t3.implementPrototype=i;}),window.CustomElements.addModule(function(t3){function e3(e4,i2){var u2=i2||{};if(!e4)throw new Error("document.registerElement: first argument `name` must not be empty");if(e4.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(e4)+"'.");if(o2(e4))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(e4)+"'. The type name is invalid.");if(c2(e4))throw new Error("DuplicateDefinitionError: a type with name '"+String(e4)+"' is already registered");return u2.prototype||(u2.prototype=Object.create(HTMLElement.prototype)),u2.__name=e4.toLowerCase(),u2["extends"]&&(u2["extends"]=u2["extends"].toLowerCase()),u2.lifecycle=u2.lifecycle||{},u2.ancestry=r2(u2["extends"]),s2(u2),a2(u2),n3(u2.prototype),l(u2.__name,u2),u2.ctor=h(u2),u2.ctor.prototype=u2.prototype,u2.prototype.constructor=u2.ctor,t3.ready&&m(document),u2.ctor;}function n3(t4){if(!t4.setAttribute._polyfilled){var e4=t4.setAttribute;t4.setAttribute=function(t5,n5){i.call(this,t5,n5,e4);};var n4=t4.removeAttribute;t4.removeAttribute=function(t5){i.call(this,t5,null,n4);},t4.setAttribute._polyfilled=true;}}function i(t4,e4,n4){t4=t4.toLowerCase();var i2=this.getAttribute(t4);n4.apply(this,arguments);var o3=this.getAttribute(t4);this.attributeChangedCallback&&o3!==i2&&this.attributeChangedCallback(t4,i2,o3);}function o2(t4){for(var e4=0;e4<C3.length;e4++){if(t4===C3[e4])return true;}}function r2(t4){var e4=c2(t4);return e4?r2(e4["extends"]).concat([e4]):[];}function s2(t4){for(var e4,n4=t4["extends"],i2=0;e4=t4.ancestry[i2];i2++){n4=e4.is&&e4.tag;}t4.tag=n4||t4.__name,n4&&(t4.is=t4.__name);}function a2(t4){if(!Object.__proto__){var e4=HTMLElement.prototype;if(t4.is){var n4=document.createElement(t4.tag);e4=Object.getPrototypeOf(n4);}for(var i2,o3=t4.prototype,r3=false;o3;){o3==e4&&(r3=true),i2=Object.getPrototypeOf(o3),i2&&(o3.__proto__=i2),o3=i2;}r3||console.warn(t4.tag+" prototype not found in prototype chain for "+t4.is),t4["native"]=e4;}}function u(t4){return y(E(t4.tag),t4);}function c2(t4){return t4?x[t4.toLowerCase()]:void 0;}function l(t4,e4){x[t4]=e4;}function h(t4){return function(){return u(t4);};}function p2(t4,e4,n4){return t4===w?d(e4,n4):S2(t4,e4);}function d(t4,e4){t4&&(t4=t4.toLowerCase()),e4&&(e4=e4.toLowerCase());var n4=c2(e4||t4);if(n4){if(t4==n4.tag&&e4==n4.is)return new n4.ctor();if(!e4&&!n4.is)return new n4.ctor();}var i2;return e4?(i2=d(t4),i2.setAttribute("is",e4),i2):(i2=E(t4),t4.indexOf("-")>=0&&b(i2,HTMLElement),i2);}function f(t4,e4){var n4=t4[e4];t4[e4]=function(){var t5=n4.apply(this,arguments);return v(t5),t5;};}var g,m=(t3.isIE,t3.upgradeDocumentTree),v=t3.upgradeAll,y=t3.upgradeWithDefinition,b=t3.implementPrototype,A=t3.useNative,C3=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],x={},w="http://www.w3.org/1999/xhtml",E=document.createElement.bind(document),S2=document.createElementNS.bind(document);g=Object.__proto__||A?function(t4,e4){return t4 instanceof e4;}:function(t4,e4){if(t4 instanceof e4)return true;for(var n4=t4;n4;){if(n4===e4.prototype)return true;n4=n4.__proto__;}return false;},f(Node.prototype,"cloneNode"),f(document,"importNode"),document.registerElement=e3,document.createElement=d,document.createElementNS=p2,t3.registry=x,t3["instanceof"]=g,t3.reservedTagList=C3,t3.getRegisteredDefinition=c2,document.register=document.registerElement;}),function(t3){function e3(){r2(window.wrap(document)),window.CustomElements.ready=true;var t4=window.requestAnimationFrame||function(t5){setTimeout(t5,16);};t4(function(){setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:true}));});});}var n3=t3.useNative,i=t3.initializeModules;if(t3.isIE,n3){var o2=function o2(){};t3.watchShadow=o2,t3.upgrade=o2,t3.upgradeAll=o2,t3.upgradeDocumentTree=o2,t3.upgradeSubtree=o2,t3.takeRecords=o2,t3["instanceof"]=function(t4,e4){return t4 instanceof e4;};}else i();var r2=t3.upgradeDocumentTree,s2=t3.upgradeDocument;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(t4){return t4;}),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(t4){t4["import"]&&s2(wrap(t4["import"]));}),document.readyState==="complete"||t3.flags.eager)e3();else if(document.readyState!=="interactive"||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var a2=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(a2,e3);}else e3();}(window.CustomElements));}.call(exports),function(){}.call(exports),function(){var t2=this;(function(){(function(){this.Trix={VERSION:"1.3.1",ZERO_WIDTH_SPACE:"\uFEFF",NON_BREAKING_SPACE:"\xA0",OBJECT_REPLACEMENT_CHARACTER:"\uFFFC",browser:{composesExistingText:/Android.*Chrome/.test(navigator.userAgent),forcesObjectResizing:/Trident.*rv:11/.test(navigator.userAgent),supportsInputEvents:function(){var t3,e3,n2,i;if(typeof InputEvent=="undefined")return false;for(i=["data","getTargetRanges","inputType"],t3=0,e3=i.length;e3>t3;t3++){if(n2=i[t3],!(n2 in InputEvent.prototype))return false;}return true;}()},config:{}};}).call(this);}).call(t2);var e2=t2.Trix;(function(){(function(){e2.BasicObject=function(){function t3(){}var e3,n2,i;return t3.proxyMethod=function(t4){var i2,o2,r2,s2,a2;return r2=n2(t4),i2=r2.name,s2=r2.toMethod,a2=r2.toProperty,o2=r2.optional,this.prototype[i2]=function(){var t5,n3;return t5=s2!=null?o2?typeof this[s2]=="function"?this[s2]():void 0:this[s2]():a2!=null?this[a2]:void 0,o2?(n3=t5!=null?t5[i2]:void 0,n3!=null?e3.call(n3,t5,arguments):void 0):(n3=t5[i2],e3.call(n3,t5,arguments));};},n2=function n2(t4){var e4,n3;if(!(n3=t4.match(i)))throw new Error("can't parse @proxyMethod expression: "+t4);return e4={name:n3[4]},n3[2]!=null?e4.toMethod=n3[1]:e4.toProperty=n3[1],n3[3]!=null&&(e4.optional=true),e4;},e3=Function.prototype.apply,i=/^(.+?)(\(\))?(\?)?\.(.+?)$/,t3;}();}).call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.Object=function(n3){function i(){this.id=++o2;}var o2;return t3(i,n3),o2=0,i.fromJSONString=function(t4){return this.fromJSON(JSON.parse(t4));},i.prototype.hasSameConstructorAs=function(t4){return this.constructor===(t4!=null?t4.constructor:void 0);},i.prototype.isEqualTo=function(t4){return this===t4;},i.prototype.inspect=function(){var t4,e3,n4;return t4=function(){var t5,i2,o3;i2=(t5=this.contentsForInspection())!=null?t5:{},o3=[];for(e3 in i2){n4=i2[e3],o3.push(e3+"="+n4);}return o3;}.call(this),"#<"+this.constructor.name+":"+this.id+(t4.length?" "+t4.join(", "):"")+">";},i.prototype.contentsForInspection=function(){},i.prototype.toJSONString=function(){return JSON.stringify(this);},i.prototype.toUTF16String=function(){return e2.UTF16String.box(this);},i.prototype.getCacheKey=function(){return this.id.toString();},i;}(e2.BasicObject);}.call(this),function(){e2.extend=function(t3){var e3,n2;for(e3 in t3){n2=t3[e3],this[e3]=n2;}return this;};}.call(this),function(){e2.extend({defer:function defer(t3){return setTimeout(t3,1);}});}.call(this),function(){var t3,n2;e2.extend({normalizeSpaces:function normalizeSpaces(t4){return t4.replace(RegExp(""+e2.ZERO_WIDTH_SPACE,"g"),"").replace(RegExp(""+e2.NON_BREAKING_SPACE,"g")," ");},normalizeNewlines:function normalizeNewlines(t4){return t4.replace(/\r\n/g,"\n");},breakableWhitespacePattern:RegExp("[^\\S"+e2.NON_BREAKING_SPACE+"]"),squishBreakableWhitespace:function squishBreakableWhitespace(t4){return t4.replace(RegExp(""+e2.breakableWhitespacePattern.source,"g")," ").replace(/\ {2,}/g," ");},summarizeStringChange:function summarizeStringChange(t4,i){var o2,r2,s2,a2;return t4=e2.UTF16String.box(t4),i=e2.UTF16String.box(i),i.length<t4.length?(r2=n2(t4,i),a2=r2[0],o2=r2[1]):(s2=n2(i,t4),o2=s2[0],a2=s2[1]),{added:o2,removed:a2};}}),n2=function n2(n3,i){var o2,r2,s2,a2,u;return n3.isEqualTo(i)?["",""]:(r2=t3(n3,i),a2=r2.utf16String.length,s2=a2?(u=r2.offset,r2,o2=n3.codepoints.slice(0,u).concat(n3.codepoints.slice(u+a2)),t3(i,e2.UTF16String.fromCodepoints(o2))):t3(i,n3),[r2.utf16String.toString(),s2.utf16String.toString()]);},t3=function t3(t4,e3){var n3,i,o2;for(n3=0,i=t4.length,o2=e3.length;i>n3&&t4.charAt(n3).isEqualTo(e3.charAt(n3));){n3++;}for(;i>n3+1&&t4.charAt(i-1).isEqualTo(e3.charAt(o2-1));){i--,o2--;}return{utf16String:t4.slice(n3,i),offset:n3};};}.call(this),function(){e2.extend({copyObject:function copyObject(t3){var e3,n2,i;t3==null&&(t3={}),n2={};for(e3 in t3){i=t3[e3],n2[e3]=i;}return n2;},objectsAreEqual:function objectsAreEqual(t3,e3){var n2,i;if(t3==null&&(t3={}),e3==null&&(e3={}),Object.keys(t3).length!==Object.keys(e3).length)return false;for(n2 in t3){if(i=t3[n2],i!==e3[n2])return false;}return true;}});}.call(this),function(){var t3=[].slice;e2.extend({arraysAreEqual:function arraysAreEqual(t4,e3){var n2,i,o2,r2;if(t4==null&&(t4=[]),e3==null&&(e3=[]),t4.length!==e3.length)return false;for(i=n2=0,o2=t4.length;o2>n2;i=++n2){if(r2=t4[i],r2!==e3[i])return false;}return true;},arrayStartsWith:function arrayStartsWith(t4,n2){return t4==null&&(t4=[]),n2==null&&(n2=[]),e2.arraysAreEqual(t4.slice(0,n2.length),n2);},spliceArray:function spliceArray(){var e3,n2,i;return n2=arguments[0],e3=2<=arguments.length?t3.call(arguments,1):[],i=n2.slice(0),i.splice.apply(i,e3),i;},summarizeArrayChange:function summarizeArrayChange(t4,e3){var n2,i,o2,r2,s2,a2,u,c2,l,h,p2;for(t4==null&&(t4=[]),e3==null&&(e3=[]),n2=[],h=[],o2=new Set(),r2=0,u=t4.length;u>r2;r2++){p2=t4[r2],o2.add(p2);}for(i=new Set(),s2=0,c2=e3.length;c2>s2;s2++){p2=e3[s2],i.add(p2),o2.has(p2)||n2.push(p2);}for(a2=0,l=t4.length;l>a2;a2++){p2=t4[a2],i.has(p2)||h.push(p2);}return{added:n2,removed:h};}});}.call(this),function(){var t3,n2,i,o2;t3=null,n2=null,o2=null,i=null,e2.extend({getAllAttributeNames:function getAllAttributeNames(){return t3!=null?t3:t3=e2.getTextAttributeNames().concat(e2.getBlockAttributeNames());},getBlockConfig:function getBlockConfig(t4){return e2.config.blockAttributes[t4];},getBlockAttributeNames:function getBlockAttributeNames(){return n2!=null?n2:n2=Object.keys(e2.config.blockAttributes);},getTextConfig:function getTextConfig(t4){return e2.config.textAttributes[t4];},getTextAttributeNames:function getTextAttributeNames(){return o2!=null?o2:o2=Object.keys(e2.config.textAttributes);},getListAttributeNames:function getListAttributeNames(){var t4,n3;return i!=null?i:i=function(){var i2,o3;i2=e2.config.blockAttributes,o3=[];for(t4 in i2){n3=i2[t4].listAttribute,n3!=null&&o3.push(n3);}return o3;}();}});}.call(this),function(){var t3,n2,i,o2,r2,s2=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;};t3=document.documentElement,n2=(i=(o2=(r2=t3.matchesSelector)!=null?r2:t3.webkitMatchesSelector)!=null?o2:t3.msMatchesSelector)!=null?i:t3.mozMatchesSelector,e2.extend({handleEvent:function handleEvent(n3,i2){var o3,r3,_s2,a2,u,c2,l,h,p2,d,f,g;return h=i2!=null?i2:{},c2=h.onElement,u=h.matchingSelector,g=h.withCallback,a2=h.inPhase,l=h.preventDefault,d=h.times,r3=c2!=null?c2:t3,p2=u,o3=g,f=a2==="capturing",_s2=function s3(t4){var n4;return d!=null&&--d===0&&_s2.destroy(),n4=e2.findClosestElementFromNode(t4.target,{matchingSelector:p2}),n4!=null&&(g!=null&&g.call(n4,t4,n4),l)?t4.preventDefault():void 0;},_s2.destroy=function(){return r3.removeEventListener(n3,_s2,f);},r3.addEventListener(n3,_s2,f),_s2;},handleEventOnce:function handleEventOnce(t4,n3){return n3==null&&(n3={}),n3.times=1,e2.handleEvent(t4,n3);},triggerEvent:function triggerEvent(n3,i2){var o3,r3,s3,a2,u,c2,l;return l=i2!=null?i2:{},c2=l.onElement,r3=l.bubbles,s3=l.cancelable,o3=l.attributes,a2=c2!=null?c2:t3,r3=r3!==false,s3=s3!==false,u=document.createEvent("Events"),u.initEvent(n3,r3,s3),o3!=null&&e2.extend.call(u,o3),a2.dispatchEvent(u);},elementMatchesSelector:function elementMatchesSelector(t4,e3){return(t4!=null?t4.nodeType:void 0)===1?n2.call(t4,e3):void 0;},findClosestElementFromNode:function findClosestElementFromNode(t4,n3){var i2,o3,r3;for(o3=n3!=null?n3:{},i2=o3.matchingSelector,r3=o3.untilNode;t4!=null&&t4.nodeType!==Node.ELEMENT_NODE;){t4=t4.parentNode;}if(t4!=null){if(i2==null)return t4;if(t4.closest&&r3==null)return t4.closest(i2);for(;t4&&t4!==r3;){if(e2.elementMatchesSelector(t4,i2))return t4;t4=t4.parentNode;}}},findInnerElement:function findInnerElement(t4){for(;t4!=null?t4.firstElementChild:void 0;){t4=t4.firstElementChild;}return t4;},innerElementIsActive:function innerElementIsActive(t4){return document.activeElement!==t4&&e2.elementContainsNode(t4,document.activeElement);},elementContainsNode:function elementContainsNode(t4,e3){if(t4&&e3)for(;e3;){if(e3===t4)return true;e3=e3.parentNode;}},findNodeFromContainerAndOffset:function findNodeFromContainerAndOffset(t4,e3){var n3;if(t4)return t4.nodeType===Node.TEXT_NODE?t4:e3===0?(n3=t4.firstChild)!=null?n3:t4:t4.childNodes.item(e3-1);},findElementFromContainerAndOffset:function findElementFromContainerAndOffset(t4,n3){var i2;return i2=e2.findNodeFromContainerAndOffset(t4,n3),e2.findClosestElementFromNode(i2);},findChildIndexOfNode:function findChildIndexOfNode(t4){var e3;if(t4!=null?t4.parentNode:void 0){for(e3=0;t4=t4.previousSibling;){e3++;}return e3;}},removeNode:function removeNode(t4){var e3;return t4!=null&&(e3=t4.parentNode)!=null?e3.removeChild(t4):void 0;},walkTree:function walkTree(t4,e3){var n3,i2,o3,r3,s3;return o3=e3!=null?e3:{},i2=o3.onlyNodesOfType,r3=o3.usingFilter,n3=o3.expandEntityReferences,s3=function(){switch(i2){case"element":return NodeFilter.SHOW_ELEMENT;case"text":return NodeFilter.SHOW_TEXT;case"comment":return NodeFilter.SHOW_COMMENT;default:return NodeFilter.SHOW_ALL;}}(),document.createTreeWalker(t4,s3,r3!=null?r3:null,n3===true);},tagName:function tagName(t4){var e3;return t4!=null&&(e3=t4.tagName)!=null?e3.toLowerCase():void 0;},makeElement:function makeElement(t4,e3){var n3,i2,o3,r3,s3,a2,u,c2,l,h,p2,d,f,g;if(e3==null&&(e3={}),_typeof2(t4)=="object"?(e3=t4,t4=e3.tagName):e3={attributes:e3},o3=document.createElement(t4),e3.editable!=null&&(e3.attributes==null&&(e3.attributes={}),e3.attributes.contenteditable=e3.editable),e3.attributes){l=e3.attributes;for(a2 in l){g=l[a2],o3.setAttribute(a2,g);}}if(e3.style){h=e3.style;for(a2 in h){g=h[a2],o3.style[a2]=g;}}if(e3.data){p2=e3.data;for(a2 in p2){g=p2[a2],o3.dataset[a2]=g;}}if(e3.className)for(d=e3.className.split(" "),r3=0,u=d.length;u>r3;r3++){i2=d[r3],o3.classList.add(i2);}if(e3.textContent&&(o3.textContent=e3.textContent),e3.childNodes)for(f=[].concat(e3.childNodes),s3=0,c2=f.length;c2>s3;s3++){n3=f[s3],o3.appendChild(n3);}return o3;},getBlockTagNames:function getBlockTagNames(){var t4,n3;return e2.blockTagNames!=null?e2.blockTagNames:e2.blockTagNames=function(){var i2,o3;i2=e2.config.blockAttributes,o3=[];for(t4 in i2){n3=i2[t4].tagName,n3&&o3.push(n3);}return o3;}();},nodeIsBlockContainer:function nodeIsBlockContainer(t4){return e2.nodeIsBlockStartComment(t4!=null?t4.firstChild:void 0);},nodeProbablyIsBlockContainer:function nodeProbablyIsBlockContainer(t4){var n3,i2;return n3=e2.tagName(t4),s2.call(e2.getBlockTagNames(),n3)>=0&&(i2=e2.tagName(t4.firstChild),s2.call(e2.getBlockTagNames(),i2)<0);},nodeIsBlockStart:function nodeIsBlockStart(t4,n3){var i2;return i2=(n3!=null?n3:{strict:true}).strict,i2?e2.nodeIsBlockStartComment(t4):e2.nodeIsBlockStartComment(t4)||!e2.nodeIsBlockStartComment(t4.firstChild)&&e2.nodeProbablyIsBlockContainer(t4);},nodeIsBlockStartComment:function nodeIsBlockStartComment(t4){return e2.nodeIsCommentNode(t4)&&(t4!=null?t4.data:void 0)==="block";},nodeIsCommentNode:function nodeIsCommentNode(t4){return(t4!=null?t4.nodeType:void 0)===Node.COMMENT_NODE;},nodeIsCursorTarget:function nodeIsCursorTarget(t4,n3){var i2;return i2=(n3!=null?n3:{}).name,t4?e2.nodeIsTextNode(t4)?t4.data===e2.ZERO_WIDTH_SPACE?i2?t4.parentNode.dataset.trixCursorTarget===i2:true:void 0:e2.nodeIsCursorTarget(t4.firstChild):void 0;},nodeIsAttachmentElement:function nodeIsAttachmentElement(t4){return e2.elementMatchesSelector(t4,e2.AttachmentView.attachmentSelector);},nodeIsEmptyTextNode:function nodeIsEmptyTextNode(t4){return e2.nodeIsTextNode(t4)&&(t4!=null?t4.data:void 0)==="";},nodeIsTextNode:function nodeIsTextNode(t4){return(t4!=null?t4.nodeType:void 0)===Node.TEXT_NODE;}});}.call(this),function(){var t3,n2,i,o2,r2;t3=e2.copyObject,o2=e2.objectsAreEqual,e2.extend({normalizeRange:i=function i(t4){var e3;if(t4!=null)return Array.isArray(t4)||(t4=[t4,t4]),[n2(t4[0]),n2((e3=t4[1])!=null?e3:t4[0])];},rangeIsCollapsed:function rangeIsCollapsed(t4){var e3,n3,o3;if(t4!=null)return n3=i(t4),o3=n3[0],e3=n3[1],r2(o3,e3);},rangesAreEqual:function rangesAreEqual(t4,e3){var n3,o3,s2,a2,u,c2;if(t4!=null&&e3!=null)return s2=i(t4),o3=s2[0],n3=s2[1],a2=i(e3),c2=a2[0],u=a2[1],r2(o3,c2)&&r2(n3,u);}}),n2=function n2(e3){return typeof e3=="number"?e3:t3(e3);},r2=function r2(t4,e3){return typeof t4=="number"?t4===e3:o2(t4,e3);};}.call(this),function(){var t3,n2,i,o2,r2,s2,a2;e2.registerElement=function(t4,e3){var n3,i2;return e3==null&&(e3={}),t4=t4.toLowerCase(),e3=a2(e3),i2=s2(e3),(n3=i2.defaultCSS)&&(delete i2.defaultCSS,o2(n3,t4)),r2(t4,i2);},o2=function o2(t4,e3){var n3;return n3=i(e3),n3.textContent=t4.replace(/%t/g,e3);},i=function i(e3){var n3,i2;return n3=document.createElement("style"),n3.setAttribute("type","text/css"),n3.setAttribute("data-tag-name",e3.toLowerCase()),(i2=t3())&&n3.setAttribute("nonce",i2),document.head.insertBefore(n3,document.head.firstChild),n3;},t3=function t3(){var t4;return(t4=n2("trix-csp-nonce")||n2("csp-nonce"))?t4.getAttribute("content"):void 0;},n2=function n2(t4){return document.head.querySelector("meta[name="+t4+"]");},s2=function s2(t4){var e3,n3,i2;n3={};for(e3 in t4){i2=t4[e3],n3[e3]=typeof i2=="function"?{value:i2}:i2;}return n3;},a2=function(){var t4;return t4=function t4(t5){var e3,n3,i2,o3,r3;for(e3={},r3=["initialize","connect","disconnect"],n3=0,o3=r3.length;o3>n3;n3++){i2=r3[n3],e3[i2]=t5[i2],delete t5[i2];}return e3;},window.customElements?function(e3){var n3,i2,o3,r3,s3;return s3=t4(e3),o3=s3.initialize,n3=s3.connect,i2=s3.disconnect,o3&&(r3=n3,n3=function n3(){return this.initialized||(this.initialized=true,o3.call(this)),r3!=null?r3.call(this):void 0;}),n3&&(e3.connectedCallback=n3),i2&&(e3.disconnectedCallback=i2),e3;}:function(e3){var n3,i2,o3,r3;return r3=t4(e3),o3=r3.initialize,n3=r3.connect,i2=r3.disconnect,o3&&(e3.createdCallback=o3),n3&&(e3.attachedCallback=n3),i2&&(e3.detachedCallback=i2),e3;};}(),r2=function(){return window.customElements?function(t4,e3){var _n2;return _n2=function n3(){return(typeof Reflect==="undefined"?"undefined":_typeof2(Reflect))=="object"?Reflect.construct(HTMLElement,[],_n2):HTMLElement.apply(this);},Object.setPrototypeOf(_n2.prototype,HTMLElement.prototype),Object.setPrototypeOf(_n2,HTMLElement),Object.defineProperties(_n2.prototype,e3),window.customElements.define(t4,_n2),_n2;}:function(t4,e3){var n3,i2;return i2=Object.create(HTMLElement.prototype,e3),n3=document.registerElement(t4,{prototype:i2}),Object.defineProperty(i2,"constructor",{value:n3}),n3;};}();}.call(this),function(){var t3,n2;e2.extend({getDOMSelection:function getDOMSelection(){var t4;return t4=window.getSelection(),t4.rangeCount>0?t4:void 0;},getDOMRange:function getDOMRange(){var n3,i;return(n3=(i=e2.getDOMSelection())!=null?i.getRangeAt(0):void 0)&&!t3(n3)?n3:void 0;},setDOMRange:function setDOMRange(t4){var n3;return n3=window.getSelection(),n3.removeAllRanges(),n3.addRange(t4),e2.selectionChangeObserver.update();}}),t3=function t3(t4){return n2(t4.startContainer)||n2(t4.endContainer);},n2=function n2(t4){return!Object.getPrototypeOf(t4);};}.call(this),function(){var t3;t3={"application/x-trix-feature-detection":"test"},e2.extend({dataTransferIsPlainText:function dataTransferIsPlainText(t4){var e3,n2,i;return i=t4.getData("text/plain"),n2=t4.getData("text/html"),i&&n2?(e3=new DOMParser().parseFromString(n2,"text/html").body,e3.textContent===i?!e3.querySelector("*"):void 0):i!=null?i.length:void 0;},dataTransferIsWritable:function dataTransferIsWritable(e3){var n2,i;if((e3!=null?e3.setData:void 0)!=null){for(n2 in t3){if(i=t3[n2],!function(){try{return e3.setData(n2,i),e3.getData(n2)===i;}catch(t4){}}())return;}return true;}},keyEventIsKeyboardCommand:function(){return /Mac|^iP/.test(navigator.platform)?function(t4){return t4.metaKey;}:function(t4){return t4.ctrlKey;};}()});}.call(this),function(){e2.extend({RTL_PATTERN:/[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,getDirection:function(){var t3,n2,i,o2;return n2=e2.makeElement("input",{dir:"auto",name:"x",dirName:"x.dir"}),t3=e2.makeElement("form"),t3.appendChild(n2),i=function(){try{return new FormData(t3).has(n2.dirName);}catch(e3){}}(),o2=function(){try{return n2.matches(":dir(ltr),:dir(rtl)");}catch(t4){}}(),i?function(e3){return n2.value=e3,new FormData(t3).get(n2.dirName);}:o2?function(t4){return n2.value=t4,n2.matches(":dir(rtl)")?"rtl":"ltr";}:function(t4){var n3;return n3=t4.trim().charAt(0),e2.RTL_PATTERN.test(n3)?"rtl":"ltr";};}()});}.call(this),function(){}.call(this),function(){var t3,n2=function n2(t4,e3){function n3(){this.constructor=t4;}for(var o2 in e3){i.call(e3,o2)&&(t4[o2]=e3[o2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},i={}.hasOwnProperty;t3=e2.arraysAreEqual,e2.Hash=function(i2){function o2(t4){t4==null&&(t4={}),this.values=s2(t4),o2.__super__.constructor.apply(this,arguments);}var r2,s2,a2,u,c2;return n2(o2,i2),o2.fromCommonAttributesOfObjects=function(t4){var e3,n3,i3,o3,s3,a3;if(t4==null&&(t4=[]),!t4.length)return new this();for(e3=r2(t4[0]),i3=e3.getKeys(),a3=t4.slice(1),n3=0,o3=a3.length;o3>n3;n3++){s3=a3[n3],i3=e3.getKeysCommonToHash(r2(s3)),e3=e3.slice(i3);}return e3;},o2.box=function(t4){return r2(t4);},o2.prototype.add=function(t4,e3){return this.merge(u(t4,e3));},o2.prototype.remove=function(t4){return new e2.Hash(s2(this.values,t4));},o2.prototype.get=function(t4){return this.values[t4];},o2.prototype.has=function(t4){return t4 in this.values;},o2.prototype.merge=function(t4){return new e2.Hash(a2(this.values,c2(t4)));},o2.prototype.slice=function(t4){var n3,i3,o3,r3;for(r3={},n3=0,o3=t4.length;o3>n3;n3++){i3=t4[n3],this.has(i3)&&(r3[i3]=this.values[i3]);}return new e2.Hash(r3);},o2.prototype.getKeys=function(){return Object.keys(this.values);},o2.prototype.getKeysCommonToHash=function(t4){var e3,n3,i3,o3,s3;for(t4=r2(t4),o3=this.getKeys(),s3=[],e3=0,i3=o3.length;i3>e3;e3++){n3=o3[e3],this.values[n3]===t4.values[n3]&&s3.push(n3);}return s3;},o2.prototype.isEqualTo=function(e3){return t3(this.toArray(),r2(e3).toArray());},o2.prototype.isEmpty=function(){return this.getKeys().length===0;},o2.prototype.toArray=function(){var t4,e3,n3;return(this.array!=null?this.array:this.array=function(){var i3;e3=[],i3=this.values;for(t4 in i3){n3=i3[t4],e3.push(t4,n3);}return e3;}.call(this)).slice(0);},o2.prototype.toObject=function(){return s2(this.values);},o2.prototype.toJSON=function(){return this.toObject();},o2.prototype.contentsForInspection=function(){return{values:JSON.stringify(this.values)};},u=function u(t4,e3){var n3;return n3={},n3[t4]=e3,n3;},a2=function a2(t4,e3){var n3,i3,o3;i3=s2(t4);for(n3 in e3){o3=e3[n3],i3[n3]=o3;}return i3;},s2=function s2(t4,e3){var n3,i3,o3,r3,s3;for(r3={},s3=Object.keys(t4).sort(),n3=0,o3=s3.length;o3>n3;n3++){i3=s3[n3],i3!==e3&&(r3[i3]=t4[i3]);}return r3;},r2=function r2(t4){return t4 instanceof e2.Hash?t4:new e2.Hash(t4);},c2=function c2(t4){return t4 instanceof e2.Hash?t4.values:t4;},o2;}(e2.Object);}.call(this),function(){e2.ObjectGroup=function(){function t3(t4,e3){var n2,i;this.objects=t4!=null?t4:[],i=e3.depth,n2=e3.asTree,n2&&(this.depth=i,this.objects=this.constructor.groupObjects(this.objects,{asTree:n2,depth:this.depth+1}));}return t3.groupObjects=function(t4,e3){var n2,i,o2,r2,s2,a2,u,c2,l;for(t4==null&&(t4=[]),l=e3!=null?e3:{},o2=l.depth,n2=l.asTree,n2&&o2==null&&(o2=0),c2=[],s2=0,a2=t4.length;a2>s2;s2++){if(u=t4[s2],r2){if((typeof u.canBeGrouped=="function"?u.canBeGrouped(o2):void 0)&&(typeof(i=r2[r2.length-1]).canBeGroupedWith=="function"?i.canBeGroupedWith(u,o2):void 0)){r2.push(u);continue;}c2.push(new this(r2,{depth:o2,asTree:n2})),r2=null;}(typeof u.canBeGrouped=="function"?u.canBeGrouped(o2):void 0)?r2=[u]:c2.push(u);}return r2&&c2.push(new this(r2,{depth:o2,asTree:n2})),c2;},t3.prototype.getObjects=function(){return this.objects;},t3.prototype.getDepth=function(){return this.depth;},t3.prototype.getCacheKey=function(){var t4,e3,n2,i,o2;for(e3=["objectGroup"],o2=this.getObjects(),t4=0,n2=o2.length;n2>t4;t4++){i=o2[t4],e3.push(i.getCacheKey());}return e3.join("/");},t3;}();}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.ObjectMap=function(e3){function n3(t4){var e4,n4,i,o2,r2;for(t4==null&&(t4=[]),this.objects={},i=0,o2=t4.length;o2>i;i++){r2=t4[i],n4=JSON.stringify(r2),(e4=this.objects)[n4]==null&&(e4[n4]=r2);}}return t3(n3,e3),n3.prototype.find=function(t4){var e4;return e4=JSON.stringify(t4),this.objects[e4];},n3;}(e2.BasicObject);}.call(this),function(){e2.ElementStore=function(){function t3(t4){this.reset(t4);}var e3;return t3.prototype.add=function(t4){var n2;return n2=e3(t4),this.elements[n2]=t4;},t3.prototype.remove=function(t4){var n2,i;return n2=e3(t4),(i=this.elements[n2])?(delete this.elements[n2],i):void 0;},t3.prototype.reset=function(t4){var e4,n2,i;for(t4==null&&(t4=[]),this.elements={},n2=0,i=t4.length;i>n2;n2++){e4=t4[n2],this.add(e4);}return t4;},e3=function e3(t4){return t4.dataset.trixStoreKey;},t3;}();}.call(this),function(){}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.Operation=function(e3){function n3(){return n3.__super__.constructor.apply(this,arguments);}return t3(n3,e3),n3.prototype.isPerforming=function(){return this.performing===true;},n3.prototype.hasPerformed=function(){return this.performed===true;},n3.prototype.hasSucceeded=function(){return this.performed&&this.succeeded;},n3.prototype.hasFailed=function(){return this.performed&&!this.succeeded;},n3.prototype.getPromise=function(){return this.promise!=null?this.promise:this.promise=new Promise(function(t4){return function(e4,n4){return t4.performing=true,t4.perform(function(i,o2){return t4.succeeded=i,t4.performing=false,t4.performed=true,t4.succeeded?e4(o2):n4(o2);});};}(this));},n3.prototype.perform=function(t4){return t4(false);},n3.prototype.release=function(){var t4;return(t4=this.promise)!=null&&typeof t4.cancel=="function"&&t4.cancel(),this.promise=null,this.performing=null,this.performed=null,this.succeeded=null;},n3.proxyMethod("getPromise().then"),n3.proxyMethod("getPromise().catch"),n3;}(e2.BasicObject);}.call(this),function(){var t3,n2,i,o2,r2,s2=function s2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){a2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},a2={}.hasOwnProperty;e2.UTF16String=function(t4){function e3(t5,e4){this.ucs2String=t5,this.codepoints=e4,this.length=this.codepoints.length,this.ucs2Length=this.ucs2String.length;}return s2(e3,t4),e3.box=function(t5){return t5==null&&(t5=""),t5 instanceof this?t5:this.fromUCS2String(t5!=null?t5.toString():void 0);},e3.fromUCS2String=function(t5){return new this(t5,o2(t5));},e3.fromCodepoints=function(t5){return new this(r2(t5),t5);},e3.prototype.offsetToUCS2Offset=function(t5){return r2(this.codepoints.slice(0,Math.max(0,t5))).length;},e3.prototype.offsetFromUCS2Offset=function(t5){return o2(this.ucs2String.slice(0,Math.max(0,t5))).length;},e3.prototype.slice=function(){var t5;return this.constructor.fromCodepoints((t5=this.codepoints).slice.apply(t5,arguments));},e3.prototype.charAt=function(t5){return this.slice(t5,t5+1);},e3.prototype.isEqualTo=function(t5){return this.constructor.box(t5).ucs2String===this.ucs2String;},e3.prototype.toJSON=function(){return this.ucs2String;},e3.prototype.getCacheKey=function(){return this.ucs2String;},e3.prototype.toString=function(){return this.ucs2String;},e3;}(e2.BasicObject),t3=(typeof Array.from=="function"?Array.from("\uD83D\uDC7C").length:void 0)===1,n2=(typeof" ".codePointAt=="function"?" ".codePointAt(0):void 0)!=null,i=(typeof String.fromCodePoint=="function"?String.fromCodePoint(32,128124):void 0)===" \uD83D\uDC7C",o2=t3&&n2?function(t4){return Array.from(t4).map(function(t5){return t5.codePointAt(0);});}:function(t4){var e3,n3,i2,o3,r3;for(o3=[],e3=0,i2=t4.length;i2>e3;){r3=t4.charCodeAt(e3++),r3>=55296&&56319>=r3&&i2>e3&&(n3=t4.charCodeAt(e3++),(64512&n3)===56320?r3=((1023&r3)<<10)+(1023&n3)+65536:e3--),o3.push(r3);}return o3;},r2=i?function(t4){return String.fromCodePoint.apply(String,t4);}:function(t4){var e3,n3,i2;return e3=function(){var e4,o3,r3;for(r3=[],e4=0,o3=t4.length;o3>e4;e4++){i2=t4[e4],n3="",i2>65535&&(i2-=65536,n3+=String.fromCharCode(i2>>>10&1023|55296),i2=56320|1023&i2),r3.push(n3+String.fromCharCode(i2));}return r3;}(),e3.join("");};}.call(this),function(){}.call(this),function(){}.call(this),function(){e2.config.lang={attachFiles:"Attach Files",bold:"Bold",bullets:"Bullets","byte":"Byte",bytes:"Bytes",captionPlaceholder:"Add a caption\u2026",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",url:"URL",urlPlaceholder:"Enter a URL\u2026",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"};}.call(this),function(){e2.config.css={attachment:"attachment",attachmentCaption:"attachment__caption",attachmentCaptionEditor:"attachment__caption-editor",attachmentMetadata:"attachment__metadata",attachmentMetadataContainer:"attachment__metadata-container",attachmentName:"attachment__name",attachmentProgress:"attachment__progress",attachmentSize:"attachment__size",attachmentToolbar:"attachment__toolbar",attachmentGallery:"attachment-gallery"};}.call(this),function(){var t3;e2.config.blockAttributes=t3={"default":{tagName:"div",parse:false},quote:{tagName:"blockquote",nestable:true},heading1:{tagName:"h1",terminal:true,breakOnReturn:true,group:false},code:{tagName:"pre",terminal:true,text:{plaintext:true}},bulletList:{tagName:"ul",parse:false},bullet:{tagName:"li",listAttribute:"bulletList",group:false,nestable:true,test:function test(n2){return e2.tagName(n2.parentNode)===t3[this.listAttribute].tagName;}},numberList:{tagName:"ol",parse:false},number:{tagName:"li",listAttribute:"numberList",group:false,nestable:true,test:function test(n2){return e2.tagName(n2.parentNode)===t3[this.listAttribute].tagName;}},attachmentGallery:{tagName:"div",exclusive:true,terminal:true,parse:false,group:false}};}.call(this),function(){var t3,n2;t3=e2.config.lang,n2=[t3.bytes,t3.KB,t3.MB,t3.GB,t3.TB,t3.PB],e2.config.fileSize={prefix:"IEC",precision:2,formatter:function formatter(e3){var i,o2,r2,s2,a2;switch(e3){case 0:return"0 "+t3.bytes;case 1:return"1 "+t3["byte"];default:return i=function(){switch(this.prefix){case"SI":return 1e3;case"IEC":return 1024;}}.call(this),o2=Math.floor(Math.log(e3)/Math.log(i)),r2=e3/Math.pow(i,o2),s2=r2.toFixed(this.precision),a2=s2.replace(/0*$/,"").replace(/\.$/,""),a2+" "+n2[o2];}}};}.call(this),function(){e2.config.textAttributes={bold:{tagName:"strong",inheritable:true,parser:function parser(t3){var e3;return e3=window.getComputedStyle(t3),e3.fontWeight==="bold"||e3.fontWeight>=600;}},italic:{tagName:"em",inheritable:true,parser:function parser(t3){var e3;return e3=window.getComputedStyle(t3),e3.fontStyle==="italic";}},href:{groupTagName:"a",parser:function parser(t3){var n2,i,o2;return n2=e2.AttachmentView.attachmentSelector,o2="a:not("+n2+")",(i=e2.findClosestElementFromNode(t3,{matchingSelector:o2}))?i.getAttribute("href"):void 0;}},strike:{tagName:"del",inheritable:true},frozen:{style:{backgroundColor:"highlight"}}};}.call(this),function(){var t3,n2,i,o2,r2;r2="[data-trix-serialize=false]",o2=["contenteditable","data-trix-id","data-trix-store-key","data-trix-mutable","data-trix-placeholder","tabindex"],n2="data-trix-serialized-attributes",i="["+n2+"]",t3=new RegExp("<!--block-->","g"),e2.extend({serializers:{"application/json":function applicationJson(t4){var n3;if(t4 instanceof e2.Document)n3=t4;else{if(!(t4 instanceof HTMLElement))throw new Error("unserializable object");n3=e2.Document.fromHTML(t4.innerHTML);}return n3.toSerializableDocument().toJSONString();},"text/html":function textHtml(s2){var a2,u,c2,l,h,p2,d,f,g,m,v,y,b,A,C3,x,w;if(s2 instanceof e2.Document)l=e2.DocumentView.render(s2);else{if(!(s2 instanceof HTMLElement))throw new Error("unserializable object");l=s2.cloneNode(true);}for(A=l.querySelectorAll(r2),h=0,g=A.length;g>h;h++){c2=A[h],e2.removeNode(c2);}for(p2=0,m=o2.length;m>p2;p2++){for(a2=o2[p2],C3=l.querySelectorAll("["+a2+"]"),d=0,v=C3.length;v>d;d++){c2=C3[d],c2.removeAttribute(a2);}}for(x=l.querySelectorAll(i),f=0,y=x.length;y>f;f++){c2=x[f];try{u=JSON.parse(c2.getAttribute(n2)),c2.removeAttribute(n2);for(b in u){w=u[b],c2.setAttribute(b,w);}}catch(E){}}return l.innerHTML.replace(t3,"");}},deserializers:{"application/json":function applicationJson(t4){return e2.Document.fromJSONString(t4);},"text/html":function textHtml(t4){return e2.Document.fromHTML(t4);}},serializeToContentType:function serializeToContentType(t4,n3){var i2;if(i2=e2.serializers[n3])return i2(t4);throw new Error("unknown content type: "+n3);},deserializeFromContentType:function deserializeFromContentType(t4,n3){var i2;if(i2=e2.deserializers[n3])return i2(t4);throw new Error("unknown content type: "+n3);}});}.call(this),function(){var t3;t3=e2.config.lang,e2.config.toolbar={getDefaultHTML:function getDefaultHTML(){return'<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'+t3.bold+'" tabindex="-1">'+t3.bold+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="'+t3.italic+'" tabindex="-1">'+t3.italic+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="'+t3.strike+'" tabindex="-1">'+t3.strike+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="'+t3.link+'" tabindex="-1">'+t3.link+'</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="'+t3.heading1+'" tabindex="-1">'+t3.heading1+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="'+t3.quote+'" tabindex="-1">'+t3.quote+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="'+t3.code+'" tabindex="-1">'+t3.code+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="'+t3.bullets+'" tabindex="-1">'+t3.bullets+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="'+t3.numbers+'" tabindex="-1">'+t3.numbers+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="'+t3.outdent+'" tabindex="-1">'+t3.outdent+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="'+t3.indent+'" tabindex="-1">'+t3.indent+'</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="'+t3.attachFiles+'" tabindex="-1">'+t3.attachFiles+'</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="'+t3.undo+'" tabindex="-1">'+t3.undo+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="'+t3.redo+'" tabindex="-1">'+t3.redo+'</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="'+t3.urlPlaceholder+'" aria-label="'+t3.url+'" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="'+t3.link+'" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="'+t3.unlink+'" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>';}};}.call(this),function(){e2.config.undoInterval=5e3;}.call(this),function(){e2.config.attachments={preview:{presentation:"gallery",caption:{name:true,size:true}},file:{caption:{size:true}}};}.call(this),function(){e2.config.keyNames={8:"backspace",9:"tab",13:"return",27:"escape",37:"left",39:"right",46:"delete",68:"d",72:"h",79:"o"};}.call(this),function(){e2.config.input={level2Enabled:true,getLevel:function getLevel(){return this.level2Enabled&&e2.browser.supportsInputEvents?2:0;},pickFiles:function pickFiles(t3){var n2;return n2=e2.makeElement("input",{type:"file",multiple:true,hidden:true,id:this.fileInputId}),n2.addEventListener("change",function(){return t3(n2.files),e2.removeNode(n2);}),e2.removeNode(document.getElementById(this.fileInputId)),document.body.appendChild(n2),n2.click();},fileInputId:"trix-file-input-"+Date.now().toString(16)};}.call(this),function(){}.call(this),function(){e2.registerElement("trix-toolbar",{defaultCSS:"%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",initialize:function initialize(){return this.innerHTML===""?this.innerHTML=e2.config.toolbar.getDefaultHTML():void 0;}});}.call(this),function(){var t3=function t3(t4,e3){function i2(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i2.prototype=e3.prototype,t4.prototype=new i2(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty,i=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;};e2.ObjectView=function(n3){function o2(t4,e3){this.object=t4,this.options=e3!=null?e3:{},this.childViews=[],this.rootView=this;}return t3(o2,n3),o2.prototype.getNodes=function(){var t4,e3,n4,i2,o3;for(this.nodes==null&&(this.nodes=this.createNodes()),i2=this.nodes,o3=[],t4=0,e3=i2.length;e3>t4;t4++){n4=i2[t4],o3.push(n4.cloneNode(true));}return o3;},o2.prototype.invalidate=function(){var t4;return this.nodes=null,this.childViews=[],(t4=this.parentView)!=null?t4.invalidate():void 0;},o2.prototype.invalidateViewForObject=function(t4){var e3;return(e3=this.findViewForObject(t4))!=null?e3.invalidate():void 0;},o2.prototype.findOrCreateCachedChildView=function(t4,e3){var n4;return(n4=this.getCachedViewForObject(e3))?this.recordChildView(n4):(n4=this.createChildView.apply(this,arguments),this.cacheViewForObject(n4,e3)),n4;},o2.prototype.createChildView=function(t4,n4,i2){var o3;return i2==null&&(i2={}),n4 instanceof e2.ObjectGroup&&(i2.viewClass=t4,t4=e2.ObjectGroupView),o3=new t4(n4,i2),this.recordChildView(o3);},o2.prototype.recordChildView=function(t4){return t4.parentView=this,t4.rootView=this.rootView,this.childViews.push(t4),t4;},o2.prototype.getAllChildViews=function(){var t4,e3,n4,i2,o3;for(o3=[],i2=this.childViews,e3=0,n4=i2.length;n4>e3;e3++){t4=i2[e3],o3.push(t4),o3=o3.concat(t4.getAllChildViews());}return o3;},o2.prototype.findElement=function(){return this.findElementForObject(this.object);},o2.prototype.findElementForObject=function(t4){var e3;return(e3=t4!=null?t4.id:void 0)?this.rootView.element.querySelector("[data-trix-id='"+e3+"']"):void 0;},o2.prototype.findViewForObject=function(t4){var e3,n4,i2,o3;for(i2=this.getAllChildViews(),e3=0,n4=i2.length;n4>e3;e3++){if(o3=i2[e3],o3.object===t4)return o3;}},o2.prototype.getViewCache=function(){return this.rootView!==this?this.rootView.getViewCache():this.isViewCachingEnabled()?this.viewCache!=null?this.viewCache:this.viewCache={}:void 0;},o2.prototype.isViewCachingEnabled=function(){return this.shouldCacheViews!==false;},o2.prototype.enableViewCaching=function(){return this.shouldCacheViews=true;},o2.prototype.disableViewCaching=function(){return this.shouldCacheViews=false;},o2.prototype.getCachedViewForObject=function(t4){var e3;return(e3=this.getViewCache())!=null?e3[t4.getCacheKey()]:void 0;},o2.prototype.cacheViewForObject=function(t4,e3){var n4;return(n4=this.getViewCache())!=null?n4[e3.getCacheKey()]=t4:void 0;},o2.prototype.garbageCollectCachedViews=function(){var t4,e3,n4,o3,r2,s2;if(t4=this.getViewCache()){s2=this.getAllChildViews().concat(this),n4=function(){var t5,e4,n5;for(n5=[],t5=0,e4=s2.length;e4>t5;t5++){r2=s2[t5],n5.push(r2.object.getCacheKey());}return n5;}(),o3=[];for(e3 in t4){i.call(n4,e3)<0&&o3.push(delete t4[e3]);}return o3;}},o2;}(e2.BasicObject);}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.ObjectGroupView=function(e3){function n3(){n3.__super__.constructor.apply(this,arguments),this.objectGroup=this.object,this.viewClass=this.options.viewClass,delete this.options.viewClass;}return t3(n3,e3),n3.prototype.getChildViews=function(){var t4,e4,n4,i;if(!this.childViews.length)for(i=this.objectGroup.getObjects(),t4=0,e4=i.length;e4>t4;t4++){n4=i[t4],this.findOrCreateCachedChildView(this.viewClass,n4,this.options);}return this.childViews;},n3.prototype.createNodes=function(){var t4,e4,n4,i,o2,r2,s2,a2,u;for(t4=this.createContainerElement(),s2=this.getChildViews(),e4=0,i=s2.length;i>e4;e4++){for(u=s2[e4],a2=u.getNodes(),n4=0,o2=a2.length;o2>n4;n4++){r2=a2[n4],t4.appendChild(r2);}}return[t4];},n3.prototype.createContainerElement=function(t4){return t4==null&&(t4=this.objectGroup.getDepth()),this.getChildViews()[0].createContainerElement(t4);},n3;}(e2.ObjectView);}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.Controller=function(e3){function n3(){return n3.__super__.constructor.apply(this,arguments);}return t3(n3,e3),n3;}(e2.BasicObject);}.call(this),function(){var t3,n2,i,o2,r2,s2,a2=function a2(t4,e3){return function(){return t4.apply(e3,arguments);};},u=function u(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){c2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},c2={}.hasOwnProperty,l=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;};t3=e2.findClosestElementFromNode,i=e2.nodeIsEmptyTextNode,n2=e2.nodeIsBlockStartComment,o2=e2.normalizeSpaces,r2=e2.summarizeStringChange,s2=e2.tagName,e2.MutationObserver=function(e3){function c3(t4){this.element=t4,this.didMutate=a2(this.didMutate,this),this.observer=new window.MutationObserver(this.didMutate),this.start();}var _h,p2,d,f;return u(c3,e3),p2="data-trix-mutable",d="["+p2+"]",f={attributes:true,childList:true,characterData:true,characterDataOldValue:true,subtree:true},c3.prototype.start=function(){return this.reset(),this.observer.observe(this.element,f);},c3.prototype.stop=function(){return this.observer.disconnect();},c3.prototype.didMutate=function(t4){var e4,n3;return(e4=this.mutations).push.apply(e4,this.findSignificantMutations(t4)),this.mutations.length?((n3=this.delegate)!=null&&typeof n3.elementDidMutate=="function"&&n3.elementDidMutate(this.getMutationSummary()),this.reset()):void 0;},c3.prototype.reset=function(){return this.mutations=[];},c3.prototype.findSignificantMutations=function(t4){var e4,n3,i2,o3;for(o3=[],e4=0,n3=t4.length;n3>e4;e4++){i2=t4[e4],this.mutationIsSignificant(i2)&&o3.push(i2);}return o3;},c3.prototype.mutationIsSignificant=function(t4){var e4,n3,i2,o3;if(this.nodeIsMutable(t4.target))return false;for(o3=this.nodesModifiedByMutation(t4),e4=0,n3=o3.length;n3>e4;e4++){if(i2=o3[e4],this.nodeIsSignificant(i2))return true;}return false;},c3.prototype.nodeIsSignificant=function(t4){return t4!==this.element&&!this.nodeIsMutable(t4)&&!i(t4);},c3.prototype.nodeIsMutable=function(e4){return t3(e4,{matchingSelector:d});},c3.prototype.nodesModifiedByMutation=function(t4){var e4;switch(e4=[],t4.type){case"attributes":t4.attributeName!==p2&&e4.push(t4.target);break;case"characterData":e4.push(t4.target.parentNode),e4.push(t4.target);break;case"childList":e4.push.apply(e4,t4.addedNodes),e4.push.apply(e4,t4.removedNodes);}return e4;},c3.prototype.getMutationSummary=function(){return this.getTextMutationSummary();},c3.prototype.getTextMutationSummary=function(){var t4,e4,n3,i2,o3,r3,s3,a3,u2,c4,h2;for(a3=this.getTextChangesFromCharacterData(),n3=a3.additions,o3=a3.deletions,h2=this.getTextChangesFromChildList(),u2=h2.additions,r3=0,s3=u2.length;s3>r3;r3++){e4=u2[r3],l.call(n3,e4)<0&&n3.push(e4);}return o3.push.apply(o3,h2.deletions),c4={},(t4=n3.join(""))&&(c4.textAdded=t4),(i2=o3.join(""))&&(c4.textDeleted=i2),c4;},c3.prototype.getMutationsByType=function(t4){var e4,n3,i2,o3,r3;for(o3=this.mutations,r3=[],e4=0,n3=o3.length;n3>e4;e4++){i2=o3[e4],i2.type===t4&&r3.push(i2);}return r3;},c3.prototype.getTextChangesFromChildList=function(){var t4,e4,i2,r3,s3,a3,u2,c4,l2,p3,d2;for(t4=[],u2=[],a3=this.getMutationsByType("childList"),e4=0,r3=a3.length;r3>e4;e4++){s3=a3[e4],t4.push.apply(t4,s3.addedNodes),u2.push.apply(u2,s3.removedNodes);}return c4=t4.length===0&&u2.length===1&&n2(u2[0]),c4?(p3=[],d2=["\n"]):(p3=_h(t4),d2=_h(u2)),{additions:function(){var t5,e5,n3;for(n3=[],i2=t5=0,e5=p3.length;e5>t5;i2=++t5){l2=p3[i2],l2!==d2[i2]&&n3.push(o2(l2));}return n3;}(),deletions:function(){var t5,e5,n3;for(n3=[],i2=t5=0,e5=d2.length;e5>t5;i2=++t5){l2=d2[i2],l2!==p3[i2]&&n3.push(o2(l2));}return n3;}()};},c3.prototype.getTextChangesFromCharacterData=function(){var t4,e4,n3,i2,s3,a3,u2,c4;return e4=this.getMutationsByType("characterData"),e4.length&&(c4=e4[0],n3=e4[e4.length-1],s3=o2(c4.oldValue),i2=o2(n3.target.data),a3=r2(s3,i2),t4=a3.added,u2=a3.removed),{additions:t4?[t4]:[],deletions:u2?[u2]:[]};},_h=function h(t4){var e4,n3,i2,o3;for(t4==null&&(t4=[]),o3=[],e4=0,n3=t4.length;n3>e4;e4++){switch(i2=t4[e4],i2.nodeType){case Node.TEXT_NODE:o3.push(i2.data);break;case Node.ELEMENT_NODE:s2(i2)==="br"?o3.push("\n"):o3.push.apply(o3,_h(i2.childNodes));}}return o3;},c3;}(e2.BasicObject);}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.FileVerificationOperation=function(e3){function n3(t4){this.file=t4;}return t3(n3,e3),n3.prototype.perform=function(t4){var e4;return e4=new FileReader(),e4.onerror=function(){return t4(false);},e4.onload=function(n4){return function(){e4.onerror=null;try{e4.abort();}catch(i){}return t4(true,n4.file);};}(this),e4.readAsArrayBuffer(this.file);},n3;}(e2.Operation);}.call(this),function(){var t3,n2,i=function i(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){o2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},o2={}.hasOwnProperty;t3=e2.handleEvent,n2=e2.innerElementIsActive,e2.InputController=function(o3){function r2(n3){var i2;this.element=n3,this.mutationObserver=new e2.MutationObserver(this.element),this.mutationObserver.delegate=this;for(i2 in this.events){t3(i2,{onElement:this.element,withCallback:this.handlerFor(i2)});}}return i(r2,o3),r2.prototype.events={},r2.prototype.elementDidMutate=function(){},r2.prototype.editorWillSyncDocumentView=function(){return this.mutationObserver.stop();},r2.prototype.editorDidSyncDocumentView=function(){return this.mutationObserver.start();},r2.prototype.requestRender=function(){var t4;return(t4=this.delegate)!=null&&typeof t4.inputControllerDidRequestRender=="function"?t4.inputControllerDidRequestRender():void 0;},r2.prototype.requestReparse=function(){var t4;return(t4=this.delegate)!=null&&typeof t4.inputControllerDidRequestReparse=="function"&&t4.inputControllerDidRequestReparse(),this.requestRender();},r2.prototype.attachFiles=function(t4){var n3,i2;return i2=function(){var i3,o4,r3;for(r3=[],i3=0,o4=t4.length;o4>i3;i3++){n3=t4[i3],r3.push(new e2.FileVerificationOperation(n3));}return r3;}(),Promise.all(i2).then(function(t5){return function(e3){return t5.handleInput(function(){var t6,n4;return(t6=this.delegate)!=null&&t6.inputControllerWillAttachFiles(),(n4=this.responder)!=null&&n4.insertFiles(e3),this.requestRender();});};}(this));},r2.prototype.handlerFor=function(t4){return function(e3){return function(i2){return i2.defaultPrevented?void 0:e3.handleInput(function(){return n2(this.element)?void 0:(this.eventName=t4,this.events[t4].call(this,i2));});};}(this);},r2.prototype.handleInput=function(t4){var e3,n3;try{return(e3=this.delegate)!=null&&e3.inputControllerWillHandleInput(),t4.call(this);}finally{(n3=this.delegate)!=null&&n3.inputControllerDidHandleInput();}},r2.prototype.createLinkHTML=function(t4,e3){var n3;return n3=document.createElement("a"),n3.href=t4,n3.textContent=e3!=null?e3:t4,n3.outerHTML;},r2;}(e2.BasicObject);}.call(this),function(){var t3,n2,i,o2,r2,s2,a2,u,c2,l,h,p2,d,f=function f(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){g.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},g={}.hasOwnProperty,m=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;};c2=e2.makeElement,l=e2.objectsAreEqual,d=e2.tagName,n2=e2.browser,a2=e2.keyEventIsKeyboardCommand,o2=e2.dataTransferIsWritable,i=e2.dataTransferIsPlainText,u=e2.config.keyNames,e2.Level0InputController=function(n3){function s3(){s3.__super__.constructor.apply(this,arguments),this.resetInputSummary();}var d2;return f(s3,n3),d2=0,s3.prototype.setInputSummary=function(t4){var e3,n4;t4==null&&(t4={}),this.inputSummary.eventName=this.eventName;for(e3 in t4){n4=t4[e3],this.inputSummary[e3]=n4;}return this.inputSummary;},s3.prototype.resetInputSummary=function(){return this.inputSummary={};},s3.prototype.reset=function(){return this.resetInputSummary(),e2.selectionChangeObserver.reset();},s3.prototype.elementDidMutate=function(t4){var e3;return this.isComposing()?(e3=this.delegate)!=null&&typeof e3.inputControllerDidAllowUnhandledInput=="function"?e3.inputControllerDidAllowUnhandledInput():void 0:this.handleInput(function(){return this.mutationIsSignificant(t4)&&(this.mutationIsExpected(t4)?this.requestRender():this.requestReparse()),this.reset();});},s3.prototype.mutationIsExpected=function(t4){var e3,n4,i2,o3,r3,s4,a3,u2,c3,l2;return a3=t4.textAdded,u2=t4.textDeleted,this.inputSummary.preferDocument?true:(e3=a3!=null?a3===this.inputSummary.textAdded:!this.inputSummary.textAdded,n4=u2!=null?this.inputSummary.didDelete:!this.inputSummary.didDelete,c3=(a3==="\n"||a3===" \n")&&!e3,l2=u2==="\n"&&!n4,s4=c3&&!l2||l2&&!c3,s4&&(o3=this.getSelectedRange())&&(i2=c3?a3.replace(/\n$/,"").length||-1:(a3!=null?a3.length:void 0)||1,(r3=this.responder)!=null?r3.positionIsBlockBreak(o3[1]+i2):void 0)?true:e3&&n4);},s3.prototype.mutationIsSignificant=function(t4){var e3,n4,i2;return i2=Object.keys(t4).length>0,e3=((n4=this.compositionInput)!=null?n4.getEndData():void 0)==="",i2||!e3;},s3.prototype.events={keydown:function keydown(t4){var n4,i2,o3,r3,s4,c3,l2,h2,p3;if(this.isComposing()||this.resetInputSummary(),this.inputSummary.didInput=true,r3=u[t4.keyCode]){for(i2=this.keys,h2=["ctrl","alt","shift","meta"],o3=0,c3=h2.length;c3>o3;o3++){l2=h2[o3],t4[l2+"Key"]&&(l2==="ctrl"&&(l2="control"),i2=i2!=null?i2[l2]:void 0);}(i2!=null?i2[r3]:void 0)!=null&&(this.setInputSummary({keyName:r3}),e2.selectionChangeObserver.reset(),i2[r3].call(this,t4));}return a2(t4)&&(n4=String.fromCharCode(t4.keyCode).toLowerCase())&&(s4=function(){var e3,n5,i3,o4;for(i3=["alt","shift"],o4=[],e3=0,n5=i3.length;n5>e3;e3++){l2=i3[e3],t4[l2+"Key"]&&o4.push(l2);}return o4;}(),s4.push(n4),(p3=this.delegate)!=null?p3.inputControllerDidReceiveKeyboardCommand(s4):void 0)?t4.preventDefault():void 0;},keypress:function keypress(t4){var e3,n4,i2;if(this.inputSummary.eventName==null&&!t4.metaKey&&(!t4.ctrlKey||t4.altKey))return(i2=p2(t4))?((e3=this.delegate)!=null&&e3.inputControllerWillPerformTyping(),(n4=this.responder)!=null&&n4.insertString(i2),this.setInputSummary({textAdded:i2,didDelete:this.selectionIsExpanded()})):void 0;},textInput:function textInput(t4){var e3,n4,i2,o3;return e3=t4.data,o3=this.inputSummary.textAdded,o3&&o3!==e3&&o3.toUpperCase()===e3?(n4=this.getSelectedRange(),this.setSelectedRange([n4[0],n4[1]+o3.length]),(i2=this.responder)!=null&&i2.insertString(e3),this.setInputSummary({textAdded:e3}),this.setSelectedRange(n4)):void 0;},dragenter:function dragenter(t4){return t4.preventDefault();},dragstart:function dragstart(t4){var e3,n4;return n4=t4.target,this.serializeSelectionToDataTransfer(t4.dataTransfer),this.draggedRange=this.getSelectedRange(),(e3=this.delegate)!=null&&typeof e3.inputControllerDidStartDrag=="function"?e3.inputControllerDidStartDrag():void 0;},dragover:function dragover(t4){var e3,n4;return!this.draggedRange&&!this.canAcceptDataTransfer(t4.dataTransfer)||(t4.preventDefault(),e3={x:t4.clientX,y:t4.clientY},l(e3,this.draggingPoint))?void 0:(this.draggingPoint=e3,(n4=this.delegate)!=null&&typeof n4.inputControllerDidReceiveDragOverPoint=="function"?n4.inputControllerDidReceiveDragOverPoint(this.draggingPoint):void 0);},dragend:function dragend(){var t4;return(t4=this.delegate)!=null&&typeof t4.inputControllerDidCancelDrag=="function"&&t4.inputControllerDidCancelDrag(),this.draggedRange=null,this.draggingPoint=null;},drop:function drop(t4){var n4,i2,o3,r3,s4,a3,u2,c3,l2;return t4.preventDefault(),o3=(s4=t4.dataTransfer)!=null?s4.files:void 0,r3={x:t4.clientX,y:t4.clientY},(a3=this.responder)!=null&&a3.setLocationRangeFromPointRange(r3),(o3!=null?o3.length:void 0)?this.attachFiles(o3):this.draggedRange?((u2=this.delegate)!=null&&u2.inputControllerWillMoveText(),(c3=this.responder)!=null&&c3.moveTextFromRange(this.draggedRange),this.draggedRange=null,this.requestRender()):(i2=t4.dataTransfer.getData("application/x-trix-document"))&&(n4=e2.Document.fromJSONString(i2),(l2=this.responder)!=null&&l2.insertDocument(n4),this.requestRender()),this.draggedRange=null,this.draggingPoint=null;},cut:function cut(t4){var e3,n4;return((e3=this.responder)!=null?e3.selectionIsExpanded():void 0)&&(this.serializeSelectionToDataTransfer(t4.clipboardData)&&t4.preventDefault(),(n4=this.delegate)!=null&&n4.inputControllerWillCutText(),this.deleteInDirection("backward"),t4.defaultPrevented)?this.requestRender():void 0;},copy:function copy(t4){var e3;return((e3=this.responder)!=null?e3.selectionIsExpanded():void 0)&&this.serializeSelectionToDataTransfer(t4.clipboardData)?t4.preventDefault():void 0;},paste:function paste(t4){var n4,o3,s4,a3,u2,c3,l2,p3,f2,g2,v,y,b,A,C3,x,w,E,S2,R,k,D2,L2;return n4=(p3=t4.clipboardData)!=null?p3:t4.testClipboardData,l2={clipboard:n4},n4==null||h(t4)?void this.getPastedHTMLUsingHiddenElement(function(t5){return function(e3){var n5,i2,o4;return l2.type="text/html",l2.html=e3,(n5=t5.delegate)!=null&&n5.inputControllerWillPaste(l2),(i2=t5.responder)!=null&&i2.insertHTML(l2.html),t5.requestRender(),(o4=t5.delegate)!=null?o4.inputControllerDidPaste(l2):void 0;};}(this)):((a3=n4.getData("URL"))?(l2.type="text/html",L2=(c3=n4.getData("public.url-name"))?e2.squishBreakableWhitespace(c3).trim():a3,l2.html=this.createLinkHTML(a3,L2),(f2=this.delegate)!=null&&f2.inputControllerWillPaste(l2),this.setInputSummary({textAdded:L2,didDelete:this.selectionIsExpanded()}),(C3=this.responder)!=null&&C3.insertHTML(l2.html),this.requestRender(),(x=this.delegate)!=null&&x.inputControllerDidPaste(l2)):i(n4)?(l2.type="text/plain",l2.string=n4.getData("text/plain"),(w=this.delegate)!=null&&w.inputControllerWillPaste(l2),this.setInputSummary({textAdded:l2.string,didDelete:this.selectionIsExpanded()}),(E=this.responder)!=null&&E.insertString(l2.string),this.requestRender(),(S2=this.delegate)!=null&&S2.inputControllerDidPaste(l2)):(u2=n4.getData("text/html"))?(l2.type="text/html",l2.html=u2,(R=this.delegate)!=null&&R.inputControllerWillPaste(l2),(k=this.responder)!=null&&k.insertHTML(l2.html),this.requestRender(),(D2=this.delegate)!=null&&D2.inputControllerDidPaste(l2)):m.call(n4.types,"Files")>=0&&(s4=(g2=n4.items)!=null&&(v=g2[0])!=null&&typeof v.getAsFile=="function"?v.getAsFile():void 0)&&(!s4.name&&(o3=r2(s4))&&(s4.name="pasted-file-"+ ++d2+"."+o3),l2.type="File",l2.file=s4,(y=this.delegate)!=null&&y.inputControllerWillAttachFiles(),(b=this.responder)!=null&&b.insertFile(l2.file),this.requestRender(),(A=this.delegate)!=null&&A.inputControllerDidPaste(l2)),t4.preventDefault());},compositionstart:function compositionstart(t4){return this.getCompositionInput().start(t4.data);},compositionupdate:function compositionupdate(t4){return this.getCompositionInput().update(t4.data);},compositionend:function compositionend(t4){return this.getCompositionInput().end(t4.data);},beforeinput:function beforeinput(){return this.inputSummary.didInput=true;},input:function input(t4){return this.inputSummary.didInput=true,t4.stopPropagation();}},s3.prototype.keys={backspace:function backspace(t4){var e3;return(e3=this.delegate)!=null&&e3.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t4);},"delete":function _delete(t4){var e3;return(e3=this.delegate)!=null&&e3.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t4);},"return":function _return(){var t4,e3;return this.setInputSummary({preferDocument:true}),(t4=this.delegate)!=null&&t4.inputControllerWillPerformTyping(),(e3=this.responder)!=null?e3.insertLineBreak():void 0;},tab:function tab(t4){var e3,n4;return((e3=this.responder)!=null?e3.canIncreaseNestingLevel():void 0)?((n4=this.responder)!=null&&n4.increaseNestingLevel(),this.requestRender(),t4.preventDefault()):void 0;},left:function left(t4){var e3;return this.selectionIsInCursorTarget()?(t4.preventDefault(),(e3=this.responder)!=null?e3.moveCursorInDirection("backward"):void 0):void 0;},right:function right(t4){var e3;return this.selectionIsInCursorTarget()?(t4.preventDefault(),(e3=this.responder)!=null?e3.moveCursorInDirection("forward"):void 0):void 0;},control:{d:function d(t4){var e3;return(e3=this.delegate)!=null&&e3.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t4);},h:function h(t4){var e3;return(e3=this.delegate)!=null&&e3.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t4);},o:function o(t4){var e3,n4;return t4.preventDefault(),(e3=this.delegate)!=null&&e3.inputControllerWillPerformTyping(),(n4=this.responder)!=null&&n4.insertString("\n",{updatePosition:false}),this.requestRender();}},shift:{"return":function _return(t4){var e3,n4;return(e3=this.delegate)!=null&&e3.inputControllerWillPerformTyping(),(n4=this.responder)!=null&&n4.insertString("\n"),this.requestRender(),t4.preventDefault();},tab:function tab(t4){var e3,n4;return((e3=this.responder)!=null?e3.canDecreaseNestingLevel():void 0)?((n4=this.responder)!=null&&n4.decreaseNestingLevel(),this.requestRender(),t4.preventDefault()):void 0;},left:function left(t4){return this.selectionIsInCursorTarget()?(t4.preventDefault(),this.expandSelectionInDirection("backward")):void 0;},right:function right(t4){return this.selectionIsInCursorTarget()?(t4.preventDefault(),this.expandSelectionInDirection("forward")):void 0;}},alt:{backspace:function backspace(){var t4;return this.setInputSummary({preferDocument:false}),(t4=this.delegate)!=null?t4.inputControllerWillPerformTyping():void 0;}},meta:{backspace:function backspace(){var t4;return this.setInputSummary({preferDocument:false}),(t4=this.delegate)!=null?t4.inputControllerWillPerformTyping():void 0;}}},s3.prototype.getCompositionInput=function(){return this.isComposing()?this.compositionInput:this.compositionInput=new t3(this);},s3.prototype.isComposing=function(){return this.compositionInput!=null&&!this.compositionInput.isEnded();},s3.prototype.deleteInDirection=function(t4,e3){var n4;return((n4=this.responder)!=null?n4.deleteInDirection(t4):void 0)!==false?this.setInputSummary({didDelete:true}):e3?(e3.preventDefault(),this.requestRender()):void 0;},s3.prototype.serializeSelectionToDataTransfer=function(t4){var n4,i2;if(o2(t4))return n4=(i2=this.responder)!=null?i2.getSelectedDocument().toSerializableDocument():void 0,t4.setData("application/x-trix-document",JSON.stringify(n4)),t4.setData("text/html",e2.DocumentView.render(n4).innerHTML),t4.setData("text/plain",n4.toString().replace(/\n$/,"")),true;},s3.prototype.canAcceptDataTransfer=function(t4){var e3,n4,i2,o3,r3,s4;for(s4={},o3=(i2=t4!=null?t4.types:void 0)!=null?i2:[],e3=0,n4=o3.length;n4>e3;e3++){r3=o3[e3],s4[r3]=true;}return s4.Files||s4["application/x-trix-document"]||s4["text/html"]||s4["text/plain"];},s3.prototype.getPastedHTMLUsingHiddenElement=function(t4){var n4,i2,o3;return i2=this.getSelectedRange(),o3={position:"absolute",left:window.pageXOffset+"px",top:window.pageYOffset+"px",opacity:0},n4=c2({style:o3,tagName:"div",editable:true}),document.body.appendChild(n4),n4.focus(),requestAnimationFrame(function(o4){return function(){var r3;return r3=n4.innerHTML,e2.removeNode(n4),o4.setSelectedRange(i2),t4(r3);};}(this));},s3.proxyMethod("responder?.getSelectedRange"),s3.proxyMethod("responder?.setSelectedRange"),s3.proxyMethod("responder?.expandSelectionInDirection"),s3.proxyMethod("responder?.selectionIsInCursorTarget"),s3.proxyMethod("responder?.selectionIsExpanded"),s3;}(e2.InputController),r2=function r2(t4){var e3,n3;return(e3=t4.type)!=null&&(n3=e3.match(/\/(\w+)$/))!=null?n3[1]:void 0;},s2=(typeof" ".codePointAt=="function"?" ".codePointAt(0):void 0)!=null,p2=function p2(t4){var n3;return t4.key&&s2&&t4.key.codePointAt(0)===t4.keyCode?t4.key:(t4.which===null?n3=t4.keyCode:t4.which!==0&&t4.charCode!==0&&(n3=t4.charCode),n3!=null&&u[n3]!=="escape"?e2.UTF16String.fromCodepoints([n3]).toString():void 0);},h=function h(t4){var e3,n3,i2,o3,r3,s3,a3,u2,c3,l2;if(u2=t4.clipboardData){if(m.call(u2.types,"text/html")>=0){for(c3=u2.types,i2=0,s3=c3.length;s3>i2;i2++){if(l2=c3[i2],e3=/^CorePasteboardFlavorType/.test(l2),n3=/^dyn\./.test(l2)&&u2.getData(l2),a3=e3||n3)return true;}return false;}return o3=m.call(u2.types,"com.apple.webarchive")>=0,r3=m.call(u2.types,"com.apple.flat-rtfd")>=0,o3||r3;}},t3=function(t4){function e3(t5){var e4;this.inputController=t5,e4=this.inputController,this.responder=e4.responder,this.delegate=e4.delegate,this.inputSummary=e4.inputSummary,this.data={};}return f(e3,t4),e3.prototype.start=function(t5){var e4,n3;return this.data.start=t5,this.isSignificant()?(this.inputSummary.eventName==="keypress"&&this.inputSummary.textAdded&&(e4=this.responder)!=null&&e4.deleteInDirection("left"),this.selectionIsExpanded()||(this.insertPlaceholder(),this.requestRender()),this.range=(n3=this.responder)!=null?n3.getSelectedRange():void 0):void 0;},e3.prototype.update=function(t5){var e4;return this.data.update=t5,this.isSignificant()&&(e4=this.selectPlaceholder())?(this.forgetPlaceholder(),this.range=e4):void 0;},e3.prototype.end=function(t5){var e4,n3,i2,o3;return this.data.end=t5,this.isSignificant()?(this.forgetPlaceholder(),this.canApplyToDocument()?(this.setInputSummary({preferDocument:true,didInput:false}),(e4=this.delegate)!=null&&e4.inputControllerWillPerformTyping(),(n3=this.responder)!=null&&n3.setSelectedRange(this.range),(i2=this.responder)!=null&&i2.insertString(this.data.end),(o3=this.responder)!=null?o3.setSelectedRange(this.range[0]+this.data.end.length):void 0):this.data.start!=null||this.data.update!=null?(this.requestReparse(),this.inputController.reset()):void 0):this.inputController.reset();},e3.prototype.getEndData=function(){return this.data.end;},e3.prototype.isEnded=function(){return this.getEndData()!=null;},e3.prototype.isSignificant=function(){return n2.composesExistingText?this.inputSummary.didInput:true;},e3.prototype.canApplyToDocument=function(){var t5,e4;return((t5=this.data.start)!=null?t5.length:void 0)===0&&((e4=this.data.end)!=null?e4.length:void 0)>0&&this.range!=null;},e3.proxyMethod("inputController.setInputSummary"),e3.proxyMethod("inputController.requestRender"),e3.proxyMethod("inputController.requestReparse"),e3.proxyMethod("responder?.selectionIsExpanded"),e3.proxyMethod("responder?.insertPlaceholder"),e3.proxyMethod("responder?.selectPlaceholder"),e3.proxyMethod("responder?.forgetPlaceholder"),e3;}(e2.BasicObject);}.call(this),function(){var t3,n2,i,o2=function o2(t4,e3){return function(){return t4.apply(e3,arguments);};},r2=function r2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){s2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},s2={}.hasOwnProperty,a2=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;};t3=e2.dataTransferIsPlainText,n2=e2.keyEventIsKeyboardCommand,i=e2.objectsAreEqual,e2.Level2InputController=function(s3){function u(){return this.render=o2(this.render,this),u.__super__.constructor.apply(this,arguments);}var c2,l,h,p2,d,f;return r2(u,s3),u.prototype.elementDidMutate=function(){var t4;return this.scheduledRender?this.composing&&(t4=this.delegate)!=null&&typeof t4.inputControllerDidAllowUnhandledInput=="function"?t4.inputControllerDidAllowUnhandledInput():void 0:this.reparse();},u.prototype.scheduleRender=function(){return this.scheduledRender!=null?this.scheduledRender:this.scheduledRender=requestAnimationFrame(this.render);},u.prototype.render=function(){var t4;return cancelAnimationFrame(this.scheduledRender),this.scheduledRender=null,this.composing||(t4=this.delegate)!=null&&t4.render(),typeof this.afterRender=="function"&&this.afterRender(),this.afterRender=null;},u.prototype.reparse=function(){var t4;return(t4=this.delegate)!=null?t4.reparse():void 0;},u.prototype.events={keydown:function keydown(t4){var e3,i2,o3,r3;if(n2(t4)){if(e3=l(t4),(r3=this.delegate)!=null?r3.inputControllerDidReceiveKeyboardCommand(e3):void 0)return t4.preventDefault();}else if(o3=t4.key,t4.altKey&&(o3+="+Alt"),t4.shiftKey&&(o3+="+Shift"),i2=this.keys[o3])return this.withEvent(t4,i2);},paste:function paste(t4){var e3,n3,i2,o3,r3,s4,a3,u2,c3;return h(t4)?(t4.preventDefault(),this.attachFiles(t4.clipboardData.files)):p2(t4)?(t4.preventDefault(),n3={type:"text/plain",string:t4.clipboardData.getData("text/plain")},(i2=this.delegate)!=null&&i2.inputControllerWillPaste(n3),(o3=this.responder)!=null&&o3.insertString(n3.string),this.render(),(r3=this.delegate)!=null?r3.inputControllerDidPaste(n3):void 0):(e3=(s4=t4.clipboardData)!=null?s4.getData("URL"):void 0)?(t4.preventDefault(),n3={type:"text/html",html:this.createLinkHTML(e3)},(a3=this.delegate)!=null&&a3.inputControllerWillPaste(n3),(u2=this.responder)!=null&&u2.insertHTML(n3.html),this.render(),(c3=this.delegate)!=null?c3.inputControllerDidPaste(n3):void 0):void 0;},beforeinput:function beforeinput(t4){var e3;return(e3=this.inputTypes[t4.inputType])?(this.withEvent(t4,e3),this.scheduleRender()):void 0;},input:function input(){return e2.selectionChangeObserver.reset();},dragstart:function dragstart(t4){var e3,n3;return((e3=this.responder)!=null?e3.selectionContainsAttachments():void 0)?(t4.dataTransfer.setData("application/x-trix-dragging",true),this.dragging={range:(n3=this.responder)!=null?n3.getSelectedRange():void 0,point:d(t4)}):void 0;},dragenter:function dragenter(t4){return c2(t4)?t4.preventDefault():void 0;},dragover:function dragover(t4){var e3,n3;if(this.dragging){if(t4.preventDefault(),e3=d(t4),!i(e3,this.dragging.point))return this.dragging.point=e3,(n3=this.responder)!=null?n3.setLocationRangeFromPointRange(e3):void 0;}else if(c2(t4))return t4.preventDefault();},drop:function drop(t4){var e3,n3,i2,o3;return this.dragging?(t4.preventDefault(),(n3=this.delegate)!=null&&n3.inputControllerWillMoveText(),(i2=this.responder)!=null&&i2.moveTextFromRange(this.dragging.range),this.dragging=null,this.scheduleRender()):c2(t4)?(t4.preventDefault(),e3=d(t4),(o3=this.responder)!=null&&o3.setLocationRangeFromPointRange(e3),this.attachFiles(t4.dataTransfer.files)):void 0;},dragend:function dragend(){var t4;return this.dragging?((t4=this.responder)!=null&&t4.setSelectedRange(this.dragging.range),this.dragging=null):void 0;},compositionend:function compositionend(){return this.composing?(this.composing=false,this.scheduleRender()):void 0;}},u.prototype.keys={ArrowLeft:function ArrowLeft(){var t4,e3;return((t4=this.responder)!=null?t4.shouldManageMovingCursorInDirection("backward"):void 0)?(this.event.preventDefault(),(e3=this.responder)!=null?e3.moveCursorInDirection("backward"):void 0):void 0;},ArrowRight:function ArrowRight(){var t4,e3;return((t4=this.responder)!=null?t4.shouldManageMovingCursorInDirection("forward"):void 0)?(this.event.preventDefault(),(e3=this.responder)!=null?e3.moveCursorInDirection("forward"):void 0):void 0;},Backspace:function Backspace(){var t4,e3,n3;return((t4=this.responder)!=null?t4.shouldManageDeletingInDirection("backward"):void 0)?(this.event.preventDefault(),(e3=this.delegate)!=null&&e3.inputControllerWillPerformTyping(),(n3=this.responder)!=null&&n3.deleteInDirection("backward"),this.render()):void 0;},Tab:function Tab(){var t4,e3;return((t4=this.responder)!=null?t4.canIncreaseNestingLevel():void 0)?(this.event.preventDefault(),(e3=this.responder)!=null&&e3.increaseNestingLevel(),this.render()):void 0;},"Tab+Shift":function TabShift(){var t4,e3;return((t4=this.responder)!=null?t4.canDecreaseNestingLevel():void 0)?(this.event.preventDefault(),(e3=this.responder)!=null&&e3.decreaseNestingLevel(),this.render()):void 0;}},u.prototype.inputTypes={deleteByComposition:function deleteByComposition(){return this.deleteInDirection("backward",{recordUndoEntry:false});},deleteByCut:function deleteByCut(){return this.deleteInDirection("backward");},deleteByDrag:function deleteByDrag(){return this.event.preventDefault(),this.withTargetDOMRange(function(){var t4;return this.deleteByDragRange=(t4=this.responder)!=null?t4.getSelectedRange():void 0;});},deleteCompositionText:function deleteCompositionText(){return this.deleteInDirection("backward",{recordUndoEntry:false});},deleteContent:function deleteContent(){return this.deleteInDirection("backward");},deleteContentBackward:function deleteContentBackward(){return this.deleteInDirection("backward");},deleteContentForward:function deleteContentForward(){return this.deleteInDirection("forward");},deleteEntireSoftLine:function deleteEntireSoftLine(){return this.deleteInDirection("forward");},deleteHardLineBackward:function deleteHardLineBackward(){return this.deleteInDirection("backward");},deleteHardLineForward:function deleteHardLineForward(){return this.deleteInDirection("forward");},deleteSoftLineBackward:function deleteSoftLineBackward(){return this.deleteInDirection("backward");},deleteSoftLineForward:function deleteSoftLineForward(){return this.deleteInDirection("forward");},deleteWordBackward:function deleteWordBackward(){return this.deleteInDirection("backward");},deleteWordForward:function deleteWordForward(){return this.deleteInDirection("forward");},formatBackColor:function formatBackColor(){return this.activateAttributeIfSupported("backgroundColor",this.event.data);},formatBold:function formatBold(){return this.toggleAttributeIfSupported("bold");},formatFontColor:function formatFontColor(){return this.activateAttributeIfSupported("color",this.event.data);},formatFontName:function formatFontName(){return this.activateAttributeIfSupported("font",this.event.data);},formatIndent:function formatIndent(){var t4;return((t4=this.responder)!=null?t4.canIncreaseNestingLevel():void 0)?this.withTargetDOMRange(function(){var t5;return(t5=this.responder)!=null?t5.increaseNestingLevel():void 0;}):void 0;},formatItalic:function formatItalic(){return this.toggleAttributeIfSupported("italic");},formatJustifyCenter:function formatJustifyCenter(){return this.toggleAttributeIfSupported("justifyCenter");},formatJustifyFull:function formatJustifyFull(){return this.toggleAttributeIfSupported("justifyFull");},formatJustifyLeft:function formatJustifyLeft(){return this.toggleAttributeIfSupported("justifyLeft");},formatJustifyRight:function formatJustifyRight(){return this.toggleAttributeIfSupported("justifyRight");},formatOutdent:function formatOutdent(){var t4;return((t4=this.responder)!=null?t4.canDecreaseNestingLevel():void 0)?this.withTargetDOMRange(function(){var t5;return(t5=this.responder)!=null?t5.decreaseNestingLevel():void 0;}):void 0;},formatRemove:function formatRemove(){return this.withTargetDOMRange(function(){var t4,e3,n3,i2;i2=[];for(t4 in(e3=this.responder)!=null?e3.getCurrentAttributes():void 0){i2.push((n3=this.responder)!=null?n3.removeCurrentAttribute(t4):void 0);}return i2;});},formatSetBlockTextDirection:function formatSetBlockTextDirection(){return this.activateAttributeIfSupported("blockDir",this.event.data);},formatSetInlineTextDirection:function formatSetInlineTextDirection(){return this.activateAttributeIfSupported("textDir",this.event.data);},formatStrikeThrough:function formatStrikeThrough(){return this.toggleAttributeIfSupported("strike");},formatSubscript:function formatSubscript(){return this.toggleAttributeIfSupported("sub");},formatSuperscript:function formatSuperscript(){return this.toggleAttributeIfSupported("sup");},formatUnderline:function formatUnderline(){return this.toggleAttributeIfSupported("underline");},historyRedo:function historyRedo(){var t4;return(t4=this.delegate)!=null?t4.inputControllerWillPerformRedo():void 0;},historyUndo:function historyUndo(){var t4;return(t4=this.delegate)!=null?t4.inputControllerWillPerformUndo():void 0;},insertCompositionText:function insertCompositionText(){return this.composing=true,this.insertString(this.event.data);},insertFromComposition:function insertFromComposition(){return this.composing=false,this.insertString(this.event.data);},insertFromDrop:function insertFromDrop(){var t4,e3;return(t4=this.deleteByDragRange)?(this.deleteByDragRange=null,(e3=this.delegate)!=null&&e3.inputControllerWillMoveText(),this.withTargetDOMRange(function(){var e4;return(e4=this.responder)!=null?e4.moveTextFromRange(t4):void 0;})):void 0;},insertFromPaste:function insertFromPaste(){var n3,i2,o3,r3,s4,a3,u2,c3,l2,h2,p3;return n3=this.event.dataTransfer,s4={dataTransfer:n3},(i2=n3.getData("URL"))?(this.event.preventDefault(),s4.type="text/html",p3=(r3=n3.getData("public.url-name"))?e2.squishBreakableWhitespace(r3).trim():i2,s4.html=this.createLinkHTML(i2,p3),(a3=this.delegate)!=null&&a3.inputControllerWillPaste(s4),this.withTargetDOMRange(function(){var t4;return(t4=this.responder)!=null?t4.insertHTML(s4.html):void 0;}),this.afterRender=function(t4){return function(){var e3;return(e3=t4.delegate)!=null?e3.inputControllerDidPaste(s4):void 0;};}(this)):t3(n3)?(s4.type="text/plain",s4.string=n3.getData("text/plain"),(u2=this.delegate)!=null&&u2.inputControllerWillPaste(s4),this.withTargetDOMRange(function(){var t4;return(t4=this.responder)!=null?t4.insertString(s4.string):void 0;}),this.afterRender=function(t4){return function(){var e3;return(e3=t4.delegate)!=null?e3.inputControllerDidPaste(s4):void 0;};}(this)):(o3=n3.getData("text/html"))?(this.event.preventDefault(),s4.type="text/html",s4.html=o3,(c3=this.delegate)!=null&&c3.inputControllerWillPaste(s4),this.withTargetDOMRange(function(){var t4;return(t4=this.responder)!=null?t4.insertHTML(s4.html):void 0;}),this.afterRender=function(t4){return function(){var e3;return(e3=t4.delegate)!=null?e3.inputControllerDidPaste(s4):void 0;};}(this)):((l2=n3.files)!=null?l2.length:void 0)?(s4.type="File",s4.file=n3.files[0],(h2=this.delegate)!=null&&h2.inputControllerWillPaste(s4),this.withTargetDOMRange(function(){var t4;return(t4=this.responder)!=null?t4.insertFile(s4.file):void 0;}),this.afterRender=function(t4){return function(){var e3;return(e3=t4.delegate)!=null?e3.inputControllerDidPaste(s4):void 0;};}(this)):void 0;},insertFromYank:function insertFromYank(){return this.insertString(this.event.data);},insertLineBreak:function insertLineBreak(){return this.insertString("\n");},insertLink:function insertLink(){return this.activateAttributeIfSupported("href",this.event.data);},insertOrderedList:function insertOrderedList(){return this.toggleAttributeIfSupported("number");},insertParagraph:function insertParagraph(){var t4;return(t4=this.delegate)!=null&&t4.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var t5;return(t5=this.responder)!=null?t5.insertLineBreak():void 0;});},insertReplacementText:function insertReplacementText(){return this.insertString(this.event.dataTransfer.getData("text/plain"),{updatePosition:false});},insertText:function insertText(){var t4,e3;return this.insertString((t4=this.event.data)!=null?t4:(e3=this.event.dataTransfer)!=null?e3.getData("text/plain"):void 0);},insertTranspose:function insertTranspose(){return this.insertString(this.event.data);},insertUnorderedList:function insertUnorderedList(){return this.toggleAttributeIfSupported("bullet");}},u.prototype.insertString=function(t4,e3){var n3;return t4==null&&(t4=""),(n3=this.delegate)!=null&&n3.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var n4;return(n4=this.responder)!=null?n4.insertString(t4,e3):void 0;});},u.prototype.toggleAttributeIfSupported=function(t4){var n3;return a2.call(e2.getAllAttributeNames(),t4)>=0?((n3=this.delegate)!=null&&n3.inputControllerWillPerformFormatting(t4),this.withTargetDOMRange(function(){var e3;return(e3=this.responder)!=null?e3.toggleCurrentAttribute(t4):void 0;})):void 0;},u.prototype.activateAttributeIfSupported=function(t4,n3){var i2;return a2.call(e2.getAllAttributeNames(),t4)>=0?((i2=this.delegate)!=null&&i2.inputControllerWillPerformFormatting(t4),this.withTargetDOMRange(function(){var e3;return(e3=this.responder)!=null?e3.setCurrentAttribute(t4,n3):void 0;})):void 0;},u.prototype.deleteInDirection=function(t4,e3){var n3,i2,o3,r3;return o3=(e3!=null?e3:{recordUndoEntry:true}).recordUndoEntry,o3&&(r3=this.delegate)!=null&&r3.inputControllerWillPerformTyping(),i2=function(e4){return function(){var n4;return(n4=e4.responder)!=null?n4.deleteInDirection(t4):void 0;};}(this),(n3=this.getTargetDOMRange({minLength:2}))?this.withTargetDOMRange(n3,i2):i2();},u.prototype.withTargetDOMRange=function(t4,n3){var i2;return typeof t4=="function"&&(n3=t4,t4=this.getTargetDOMRange()),t4?(i2=this.responder)!=null?i2.withTargetDOMRange(t4,n3.bind(this)):void 0:(e2.selectionChangeObserver.reset(),n3.call(this));},u.prototype.getTargetDOMRange=function(t4){var e3,n3,i2,o3;return i2=(t4!=null?t4:{minLength:0}).minLength,(o3=typeof(e3=this.event).getTargetRanges=="function"?e3.getTargetRanges():void 0)&&o3.length&&(n3=f(o3[0]),i2===0||n3.toString().length>=i2)?n3:void 0;},f=function f(t4){var e3;return e3=document.createRange(),e3.setStart(t4.startContainer,t4.startOffset),e3.setEnd(t4.endContainer,t4.endOffset),e3;},u.prototype.withEvent=function(t4,e3){var n3;this.event=t4;try{n3=e3.call(this);}finally{this.event=null;}return n3;},c2=function c2(t4){var e3,n3;return a2.call((e3=(n3=t4.dataTransfer)!=null?n3.types:void 0)!=null?e3:[],"Files")>=0;},h=function h(t4){var e3;return(e3=t4.clipboardData)?a2.call(e3.types,"Files")>=0&&e3.types.length===1&&e3.files.length>=1:void 0;},p2=function p2(t4){var e3;return(e3=t4.clipboardData)?a2.call(e3.types,"text/plain")>=0&&e3.types.length===1:void 0;},l=function l(t4){var e3;return e3=[],t4.altKey&&e3.push("alt"),t4.shiftKey&&e3.push("shift"),e3.push(t4.key),e3;},d=function d(t4){return{x:t4.clientX,y:t4.clientY};},u;}(e2.InputController);}.call(this),function(){var t3,n2,i,o2,r2,s2,a2,u,c2=function c2(t4,e3){return function(){return t4.apply(e3,arguments);};},l=function l(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){h.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},h={}.hasOwnProperty;n2=e2.defer,i=e2.handleEvent,s2=e2.makeElement,u=e2.tagName,a2=e2.config,r2=a2.lang,t3=a2.css,o2=a2.keyNames,e2.AttachmentEditorController=function(a3){function h2(t4,e3,n3,i2){this.attachmentPiece=t4,this.element=e3,this.container=n3,this.options=i2!=null?i2:{},this.didBlurCaption=c2(this.didBlurCaption,this),this.didChangeCaption=c2(this.didChangeCaption,this),this.didInputCaption=c2(this.didInputCaption,this),this.didKeyDownCaption=c2(this.didKeyDownCaption,this),this.didClickActionButton=c2(this.didClickActionButton,this),this.didClickToolbar=c2(this.didClickToolbar,this),this.attachment=this.attachmentPiece.attachment,u(this.element)==="a"&&(this.element=this.element.firstChild),this.install();}var p2;return l(h2,a3),p2=function p2(t4){return function(){var e3;return e3=t4.apply(this,arguments),e3["do"](),this.undos==null&&(this.undos=[]),this.undos.push(e3.undo);};},h2.prototype.install=function(){return this.makeElementMutable(),this.addToolbar(),this.attachment.isPreviewable()?this.installCaptionEditor():void 0;},h2.prototype.uninstall=function(){var t4,e3;for(this.savePendingCaption();e3=this.undos.pop();){e3();}return(t4=this.delegate)!=null?t4.didUninstallAttachmentEditor(this):void 0;},h2.prototype.savePendingCaption=function(){var t4,e3,n3;return this.pendingCaption!=null?(t4=this.pendingCaption,this.pendingCaption=null,t4?(e3=this.delegate)!=null&&typeof e3.attachmentEditorDidRequestUpdatingAttributesForAttachment=="function"?e3.attachmentEditorDidRequestUpdatingAttributesForAttachment({caption:t4},this.attachment):void 0:(n3=this.delegate)!=null&&typeof n3.attachmentEditorDidRequestRemovingAttributeForAttachment=="function"?n3.attachmentEditorDidRequestRemovingAttributeForAttachment("caption",this.attachment):void 0):void 0;},h2.prototype.makeElementMutable=p2(function(){return{"do":function(t4){return function(){return t4.element.dataset.trixMutable=true;};}(this),undo:function(t4){return function(){return delete t4.element.dataset.trixMutable;};}(this)};}),h2.prototype.addToolbar=p2(function(){var n3;return n3=s2({tagName:"div",className:t3.attachmentToolbar,data:{trixMutable:true},childNodes:s2({tagName:"div",className:"trix-button-row",childNodes:s2({tagName:"span",className:"trix-button-group trix-button-group--actions",childNodes:s2({tagName:"button",className:"trix-button trix-button--remove",textContent:r2.remove,attributes:{title:r2.remove},data:{trixAction:"remove"}})})})}),this.attachment.isPreviewable()&&n3.appendChild(s2({tagName:"div",className:t3.attachmentMetadataContainer,childNodes:s2({tagName:"span",className:t3.attachmentMetadata,childNodes:[s2({tagName:"span",className:t3.attachmentName,textContent:this.attachment.getFilename(),attributes:{title:this.attachment.getFilename()}}),s2({tagName:"span",className:t3.attachmentSize,textContent:this.attachment.getFormattedFilesize()})]})})),i("click",{onElement:n3,withCallback:this.didClickToolbar}),i("click",{onElement:n3,matchingSelector:"[data-trix-action]",withCallback:this.didClickActionButton}),{"do":function(t4){return function(){return t4.element.appendChild(n3);};}(this),undo:function(){return function(){return e2.removeNode(n3);};}(this)};}),h2.prototype.installCaptionEditor=p2(function(){var o3,a4,u2,c3,l2;return c3=s2({tagName:"textarea",className:t3.attachmentCaptionEditor,attributes:{placeholder:r2.captionPlaceholder},data:{trixMutable:true}}),c3.value=this.attachmentPiece.getCaption(),l2=c3.cloneNode(),l2.classList.add("trix-autoresize-clone"),l2.tabIndex=-1,o3=function o3(){return l2.value=c3.value,c3.style.height=l2.scrollHeight+"px";},i("input",{onElement:c3,withCallback:o3}),i("input",{onElement:c3,withCallback:this.didInputCaption}),i("keydown",{onElement:c3,withCallback:this.didKeyDownCaption}),i("change",{onElement:c3,withCallback:this.didChangeCaption}),i("blur",{onElement:c3,withCallback:this.didBlurCaption}),u2=this.element.querySelector("figcaption"),a4=u2.cloneNode(),{"do":function(e3){return function(){return u2.style.display="none",a4.appendChild(c3),a4.appendChild(l2),a4.classList.add(t3.attachmentCaption+"--editing"),u2.parentElement.insertBefore(a4,u2),o3(),e3.options.editCaption?n2(function(){return c3.focus();}):void 0;};}(this),undo:function undo(){return e2.removeNode(a4),u2.style.display=null;}};}),h2.prototype.didClickToolbar=function(t4){return t4.preventDefault(),t4.stopPropagation();},h2.prototype.didClickActionButton=function(t4){var e3,n3;switch(e3=t4.target.getAttribute("data-trix-action")){case"remove":return(n3=this.delegate)!=null?n3.attachmentEditorDidRequestRemovalOfAttachment(this.attachment):void 0;}},h2.prototype.didKeyDownCaption=function(t4){var e3;return o2[t4.keyCode]==="return"?(t4.preventDefault(),this.savePendingCaption(),(e3=this.delegate)!=null&&typeof e3.attachmentEditorDidRequestDeselectingAttachment=="function"?e3.attachmentEditorDidRequestDeselectingAttachment(this.attachment):void 0):void 0;},h2.prototype.didInputCaption=function(t4){return this.pendingCaption=t4.target.value.replace(/\s/g," ").trim();},h2.prototype.didChangeCaption=function(){return this.savePendingCaption();},h2.prototype.didBlurCaption=function(){return this.savePendingCaption();},h2;}(e2.BasicObject);}.call(this),function(){var t3,n2,i,o2=function o2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){r2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},r2={}.hasOwnProperty;i=e2.makeElement,t3=e2.config.css,e2.AttachmentView=function(r3){function s2(){s2.__super__.constructor.apply(this,arguments),this.attachment=this.object,this.attachment.uploadProgressDelegate=this,this.attachmentPiece=this.options.piece;}var a2;return o2(s2,r3),s2.attachmentSelector="[data-trix-attachment]",s2.prototype.createContentNodes=function(){return[];},s2.prototype.createNodes=function(){var e3,n3,o3,r4,s3,u,c2;if(e3=r4=i({tagName:"figure",className:this.getClassName(),data:this.getData(),editable:false}),(n3=this.getHref())&&(r4=i({tagName:"a",editable:false,attributes:{href:n3,tabindex:-1}}),e3.appendChild(r4)),this.attachment.hasContent())r4.innerHTML=this.attachment.getContent();else for(c2=this.createContentNodes(),o3=0,s3=c2.length;s3>o3;o3++){u=c2[o3],r4.appendChild(u);}return r4.appendChild(this.createCaptionElement()),this.attachment.isPending()&&(this.progressElement=i({tagName:"progress",attributes:{"class":t3.attachmentProgress,value:this.attachment.getUploadProgress(),max:100},data:{trixMutable:true,trixStoreKey:["progressElement",this.attachment.id].join("/")}}),e3.appendChild(this.progressElement)),[a2("left"),e3,a2("right")];},s2.prototype.createCaptionElement=function(){var e3,n3,o3,r4,s3,a3,u;return o3=i({tagName:"figcaption",className:t3.attachmentCaption}),(e3=this.attachmentPiece.getCaption())?(o3.classList.add(t3.attachmentCaption+"--edited"),o3.textContent=e3):(n3=this.getCaptionConfig(),n3.name&&(r4=this.attachment.getFilename()),n3.size&&(a3=this.attachment.getFormattedFilesize()),r4&&(s3=i({tagName:"span",className:t3.attachmentName,textContent:r4}),o3.appendChild(s3)),a3&&(r4&&o3.appendChild(document.createTextNode(" ")),u=i({tagName:"span",className:t3.attachmentSize,textContent:a3}),o3.appendChild(u))),o3;},s2.prototype.getClassName=function(){var e3,n3;return n3=[t3.attachment,t3.attachment+"--"+this.attachment.getType()],(e3=this.attachment.getExtension())&&n3.push(t3.attachment+"--"+e3),n3.join(" ");},s2.prototype.getData=function(){var t4,e3;return e3={trixAttachment:JSON.stringify(this.attachment),trixContentType:this.attachment.getContentType(),trixId:this.attachment.id},t4=this.attachmentPiece.attributes,t4.isEmpty()||(e3.trixAttributes=JSON.stringify(t4)),this.attachment.isPending()&&(e3.trixSerialize=false),e3;},s2.prototype.getHref=function(){return n2(this.attachment.getContent(),"a")?void 0:this.attachment.getHref();},s2.prototype.getCaptionConfig=function(){var t4,n3,i2;return i2=this.attachment.getType(),t4=e2.copyObject((n3=e2.config.attachments[i2])!=null?n3.caption:void 0),i2==="file"&&(t4.name=true),t4;},s2.prototype.findProgressElement=function(){var t4;return(t4=this.findElement())!=null?t4.querySelector("progress"):void 0;},a2=function a2(t4){return i({tagName:"span",textContent:e2.ZERO_WIDTH_SPACE,data:{trixCursorTarget:t4,trixSerialize:false}});},s2.prototype.attachmentDidChangeUploadProgress=function(){var t4,e3;return e3=this.attachment.getUploadProgress(),(t4=this.findProgressElement())!=null?t4.value=e3:void 0;},s2;}(e2.ObjectView),n2=function n2(t4,e3){var n3;return n3=i("div"),n3.innerHTML=t4!=null?t4:"",n3.querySelector(e3);};}.call(this),function(){var t3,n2=function n2(t4,e3){function n3(){this.constructor=t4;}for(var o2 in e3){i.call(e3,o2)&&(t4[o2]=e3[o2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},i={}.hasOwnProperty;t3=e2.makeElement,e2.PreviewableAttachmentView=function(i2){function o2(){o2.__super__.constructor.apply(this,arguments),this.attachment.previewDelegate=this;}return n2(o2,i2),o2.prototype.createContentNodes=function(){return this.image=t3({tagName:"img",attributes:{src:""},data:{trixMutable:true}}),this.refresh(this.image),[this.image];},o2.prototype.createCaptionElement=function(){var t4;return t4=o2.__super__.createCaptionElement.apply(this,arguments),t4.textContent||t4.setAttribute("data-trix-placeholder",e2.config.lang.captionPlaceholder),t4;},o2.prototype.refresh=function(t4){var e3;return t4==null&&(t4=(e3=this.findElement())!=null?e3.querySelector("img"):void 0),t4?this.updateAttributesForImage(t4):void 0;},o2.prototype.updateAttributesForImage=function(t4){var e3,n3,i3,o3,r2,s2;return r2=this.attachment.getURL(),n3=this.attachment.getPreviewURL(),t4.src=n3||r2,n3===r2?t4.removeAttribute("data-trix-serialized-attributes"):(i3=JSON.stringify({src:r2}),t4.setAttribute("data-trix-serialized-attributes",i3)),s2=this.attachment.getWidth(),e3=this.attachment.getHeight(),s2!=null&&(t4.width=s2),e3!=null&&(t4.height=e3),o3=["imageElement",this.attachment.id,t4.src,t4.width,t4.height].join("/"),t4.dataset.trixStoreKey=o3;},o2.prototype.attachmentDidChangeAttributes=function(){return this.refresh(this.image),this.refresh();},o2;}(e2.AttachmentView);}.call(this),function(){var t3,n2,i,o2=function o2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){r2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},r2={}.hasOwnProperty;i=e2.makeElement,t3=e2.findInnerElement,n2=e2.getTextConfig,e2.PieceView=function(r3){function s2(){var t4;s2.__super__.constructor.apply(this,arguments),this.piece=this.object,this.attributes=this.piece.getAttributes(),t4=this.options,this.textConfig=t4.textConfig,this.context=t4.context,this.piece.attachment?this.attachment=this.piece.attachment:this.string=this.piece.toString();}var a2;return o2(s2,r3),s2.prototype.createNodes=function(){var e3,n3,i2,o3,r4,s3;if(s3=this.attachment?this.createAttachmentNodes():this.createStringNodes(),e3=this.createElement()){for(i2=t3(e3),n3=0,o3=s3.length;o3>n3;n3++){r4=s3[n3],i2.appendChild(r4);}s3=[e3];}return s3;},s2.prototype.createAttachmentNodes=function(){var t4,n3;return t4=this.attachment.isPreviewable()?e2.PreviewableAttachmentView:e2.AttachmentView,n3=this.createChildView(t4,this.piece.attachment,{piece:this.piece}),n3.getNodes();},s2.prototype.createStringNodes=function(){var t4,e3,n3,o3,r4,s3,a3,u,c2,l;if((u=this.textConfig)!=null?u.plaintext:void 0)return[document.createTextNode(this.string)];for(a3=[],c2=this.string.split("\n"),n3=e3=0,o3=c2.length;o3>e3;n3=++e3){l=c2[n3],n3>0&&(t4=i("br"),a3.push(t4)),(r4=l.length)&&(s3=document.createTextNode(this.preserveSpaces(l)),a3.push(s3));}return a3;},s2.prototype.createElement=function(){var t4,e3,o3,r4,s3,a3,u,c2,l;c2={},a3=this.attributes;for(r4 in a3){if(l=a3[r4],(t4=n2(r4))&&(t4.tagName&&(s3=i(t4.tagName),o3?(o3.appendChild(s3),o3=s3):e3=o3=s3),t4.styleProperty&&(c2[t4.styleProperty]=l),t4.style)){u=t4.style;for(r4 in u){l=u[r4],c2[r4]=l;}}}if(Object.keys(c2).length){e3==null&&(e3=i("span"));for(r4 in c2){l=c2[r4],e3.style[r4]=l;}}return e3;},s2.prototype.createContainerElement=function(){var t4,e3,o3,r4,s3;r4=this.attributes;for(o3 in r4){if(s3=r4[o3],(e3=n2(o3))&&e3.groupTagName)return t4={},t4[o3]=s3,i(e3.groupTagName,t4);}},a2=e2.NON_BREAKING_SPACE,s2.prototype.preserveSpaces=function(t4){return this.context.isLast&&(t4=t4.replace(/\ $/,a2)),t4=t4.replace(/(\S)\ {3}(\S)/g,"$1 "+a2+" $2").replace(/\ {2}/g,a2+" ").replace(/\ {2}/g," "+a2),(this.context.isFirst||this.context.followsWhitespace)&&(t4=t4.replace(/^\ /,a2)),t4;},s2;}(e2.ObjectView);}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.TextView=function(n3){function i(){i.__super__.constructor.apply(this,arguments),this.text=this.object,this.textConfig=this.options.textConfig;}var o2;return t3(i,n3),i.prototype.createNodes=function(){var t4,n4,i2,r2,s2,a2,u,c2,l,h;for(a2=[],c2=e2.ObjectGroup.groupObjects(this.getPieces()),r2=c2.length-1,i2=n4=0,s2=c2.length;s2>n4;i2=++n4){u=c2[i2],t4={},i2===0&&(t4.isFirst=true),i2===r2&&(t4.isLast=true),o2(l)&&(t4.followsWhitespace=true),h=this.findOrCreateCachedChildView(e2.PieceView,u,{textConfig:this.textConfig,context:t4}),a2.push.apply(a2,h.getNodes()),l=u;}return a2;},i.prototype.getPieces=function(){var t4,e3,n4,i2,o3;for(i2=this.text.getPieces(),o3=[],t4=0,e3=i2.length;e3>t4;t4++){n4=i2[t4],n4.hasAttribute("blockBreak")||o3.push(n4);}return o3;},o2=function o2(t4){return /\s$/.test(t4!=null?t4.toString():void 0);},i;}(e2.ObjectView);}.call(this),function(){var t3,n2,i,o2=function o2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){r2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},r2={}.hasOwnProperty;i=e2.makeElement,n2=e2.getBlockConfig,t3=e2.config.css,e2.BlockView=function(r3){function s2(){s2.__super__.constructor.apply(this,arguments),this.block=this.object,this.attributes=this.block.getAttributes();}return o2(s2,r3),s2.prototype.createNodes=function(){var t4,o3,r4,s3,a2,u,c2,l,h,p2,d;if(o3=document.createComment("block"),c2=[o3],this.block.isEmpty()?c2.push(i("br")):(p2=(l=n2(this.block.getLastAttribute()))!=null?l.text:void 0,d=this.findOrCreateCachedChildView(e2.TextView,this.block.text,{textConfig:p2}),c2.push.apply(c2,d.getNodes()),this.shouldAddExtraNewlineElement()&&c2.push(i("br"))),this.attributes.length)return c2;for(h=e2.config.blockAttributes["default"].tagName,this.block.isRTL()&&(t4={dir:"rtl"}),r4=i({tagName:h,attributes:t4}),s3=0,a2=c2.length;a2>s3;s3++){u=c2[s3],r4.appendChild(u);}return[r4];},s2.prototype.createContainerElement=function(e3){var o3,r4,s3,a2,u;return o3=this.attributes[e3],u=n2(o3).tagName,e3===0&&this.block.isRTL()&&(r4={dir:"rtl"}),o3==="attachmentGallery"&&(a2=this.block.getBlockBreakPosition(),s3=t3.attachmentGallery+" "+t3.attachmentGallery+"--"+a2),i({tagName:u,className:s3,attributes:r4});},s2.prototype.shouldAddExtraNewlineElement=function(){return /\n\n$/.test(this.block.toString());},s2;}(e2.ObjectView);}.call(this),function(){var t3,n2,i=function i(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){o2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},o2={}.hasOwnProperty;t3=e2.defer,n2=e2.makeElement,e2.DocumentView=function(o3){function r2(){r2.__super__.constructor.apply(this,arguments),this.element=this.options.element,this.elementStore=new e2.ElementStore(),this.setDocument(this.object);}var s2,a2,u;return i(r2,o3),r2.render=function(t4){var e3,i2;return e3=n2("div"),i2=new this(t4,{element:e3}),i2.render(),i2.sync(),e3;},r2.prototype.setDocument=function(t4){return t4.isEqualTo(this.document)?void 0:this.document=this.object=t4;},r2.prototype.render=function(){var t4,i2,o4,r3,s3,a3,u2;if(this.childViews=[],this.shadowElement=n2("div"),!this.document.isEmpty()){for(s3=e2.ObjectGroup.groupObjects(this.document.getBlocks(),{asTree:true}),a3=[],t4=0,i2=s3.length;i2>t4;t4++){r3=s3[t4],u2=this.findOrCreateCachedChildView(e2.BlockView,r3),a3.push(function(){var t5,e3,n3,i3;for(n3=u2.getNodes(),i3=[],t5=0,e3=n3.length;e3>t5;t5++){o4=n3[t5],i3.push(this.shadowElement.appendChild(o4));}return i3;}.call(this));}return a3;}},r2.prototype.isSynced=function(){return s2(this.shadowElement,this.element);},r2.prototype.sync=function(){var t4;for(t4=this.createDocumentFragmentForSync();this.element.lastChild;){this.element.removeChild(this.element.lastChild);}return this.element.appendChild(t4),this.didSync();},r2.prototype.didSync=function(){return this.elementStore.reset(a2(this.element)),t3(function(t4){return function(){return t4.garbageCollectCachedViews();};}(this));},r2.prototype.createDocumentFragmentForSync=function(){var t4,e3,n3,i2,o4,r3,s3,u2,c2,l;for(e3=document.createDocumentFragment(),u2=this.shadowElement.childNodes,n3=0,o4=u2.length;o4>n3;n3++){s3=u2[n3],e3.appendChild(s3.cloneNode(true));}for(c2=a2(e3),i2=0,r3=c2.length;r3>i2;i2++){t4=c2[i2],(l=this.elementStore.remove(t4))&&t4.parentNode.replaceChild(l,t4);}return e3;},a2=function a2(t4){return t4.querySelectorAll("[data-trix-store-key]");},s2=function s2(t4,e3){return u(t4.innerHTML)===u(e3.innerHTML);},u=function u(t4){return t4.replace(/&nbsp;/g," ");},r2;}(e2.ObjectView);}.call(this),function(){var t3,n2,i,o2,r2,s2=function s2(t4,e3){return function(){return t4.apply(e3,arguments);};},a2=function a2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){u.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},u={}.hasOwnProperty;i=e2.findClosestElementFromNode,o2=e2.handleEvent,r2=e2.innerElementIsActive,n2=e2.defer,t3=e2.AttachmentView.attachmentSelector,e2.CompositionController=function(u2){function c2(n3,i2){this.element=n3,this.composition=i2,this.didClickAttachment=s2(this.didClickAttachment,this),this.didBlur=s2(this.didBlur,this),this.didFocus=s2(this.didFocus,this),this.documentView=new e2.DocumentView(this.composition.document,{element:this.element}),o2("focus",{onElement:this.element,withCallback:this.didFocus}),o2("blur",{onElement:this.element,withCallback:this.didBlur}),o2("click",{onElement:this.element,matchingSelector:"a[contenteditable=false]",preventDefault:true}),o2("mousedown",{onElement:this.element,matchingSelector:t3,withCallback:this.didClickAttachment}),o2("click",{onElement:this.element,matchingSelector:"a"+t3,preventDefault:true});}return a2(c2,u2),c2.prototype.didFocus=function(){var t4,e3,n3;return t4=function(t5){return function(){var e4;return t5.focused?void 0:(t5.focused=true,(e4=t5.delegate)!=null&&typeof e4.compositionControllerDidFocus=="function"?e4.compositionControllerDidFocus():void 0);};}(this),(e3=(n3=this.blurPromise)!=null?n3.then(t4):void 0)!=null?e3:t4();},c2.prototype.didBlur=function(){return this.blurPromise=new Promise(function(t4){return function(e3){return n2(function(){var n3;return r2(t4.element)||(t4.focused=null,(n3=t4.delegate)!=null&&typeof n3.compositionControllerDidBlur=="function"&&n3.compositionControllerDidBlur()),t4.blurPromise=null,e3();});};}(this));},c2.prototype.didClickAttachment=function(t4,e3){var n3,o3,r3;return n3=this.findAttachmentForElement(e3),o3=i(t4.target,{matchingSelector:"figcaption"})!=null,(r3=this.delegate)!=null&&typeof r3.compositionControllerDidSelectAttachment=="function"?r3.compositionControllerDidSelectAttachment(n3,{editCaption:o3}):void 0;},c2.prototype.getSerializableElement=function(){return this.isEditingAttachment()?this.documentView.shadowElement:this.element;},c2.prototype.render=function(){var t4,e3,n3;return this.revision!==this.composition.revision&&(this.documentView.setDocument(this.composition.document),this.documentView.render(),this.revision=this.composition.revision),this.canSyncDocumentView()&&!this.documentView.isSynced()&&((t4=this.delegate)!=null&&typeof t4.compositionControllerWillSyncDocumentView=="function"&&t4.compositionControllerWillSyncDocumentView(),this.documentView.sync(),(e3=this.delegate)!=null&&typeof e3.compositionControllerDidSyncDocumentView=="function"&&e3.compositionControllerDidSyncDocumentView()),(n3=this.delegate)!=null&&typeof n3.compositionControllerDidRender=="function"?n3.compositionControllerDidRender():void 0;},c2.prototype.rerenderViewForObject=function(t4){return this.invalidateViewForObject(t4),this.render();},c2.prototype.invalidateViewForObject=function(t4){return this.documentView.invalidateViewForObject(t4);},c2.prototype.isViewCachingEnabled=function(){return this.documentView.isViewCachingEnabled();},c2.prototype.enableViewCaching=function(){return this.documentView.enableViewCaching();},c2.prototype.disableViewCaching=function(){return this.documentView.disableViewCaching();},c2.prototype.refreshViewCache=function(){return this.documentView.garbageCollectCachedViews();},c2.prototype.isEditingAttachment=function(){return this.attachmentEditor!=null;},c2.prototype.installAttachmentEditorForAttachment=function(t4,n3){var i2,o3,r3;if(((r3=this.attachmentEditor)!=null?r3.attachment:void 0)!==t4&&(o3=this.documentView.findElementForObject(t4)))return this.uninstallAttachmentEditor(),i2=this.composition.document.getAttachmentPieceForAttachment(t4),this.attachmentEditor=new e2.AttachmentEditorController(i2,o3,this.element,n3),this.attachmentEditor.delegate=this;},c2.prototype.uninstallAttachmentEditor=function(){var t4;return(t4=this.attachmentEditor)!=null?t4.uninstall():void 0;},c2.prototype.didUninstallAttachmentEditor=function(){return this.attachmentEditor=null,this.render();},c2.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment=function(t4,e3){var n3;return(n3=this.delegate)!=null&&typeof n3.compositionControllerWillUpdateAttachment=="function"&&n3.compositionControllerWillUpdateAttachment(e3),this.composition.updateAttributesForAttachment(t4,e3);},c2.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment=function(t4,e3){var n3;return(n3=this.delegate)!=null&&typeof n3.compositionControllerWillUpdateAttachment=="function"&&n3.compositionControllerWillUpdateAttachment(e3),this.composition.removeAttributeForAttachment(t4,e3);},c2.prototype.attachmentEditorDidRequestRemovalOfAttachment=function(t4){var e3;return(e3=this.delegate)!=null&&typeof e3.compositionControllerDidRequestRemovalOfAttachment=="function"?e3.compositionControllerDidRequestRemovalOfAttachment(t4):void 0;},c2.prototype.attachmentEditorDidRequestDeselectingAttachment=function(t4){var e3;return(e3=this.delegate)!=null&&typeof e3.compositionControllerDidRequestDeselectingAttachment=="function"?e3.compositionControllerDidRequestDeselectingAttachment(t4):void 0;},c2.prototype.canSyncDocumentView=function(){return!this.isEditingAttachment();},c2.prototype.findAttachmentForElement=function(t4){return this.composition.document.getAttachmentById(parseInt(t4.dataset.trixId,10));},c2;}(e2.BasicObject);}.call(this),function(){var t3,n2,i,o2=function o2(t4,e3){return function(){return t4.apply(e3,arguments);};},r2=function r2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){s2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},s2={}.hasOwnProperty;n2=e2.handleEvent,i=e2.triggerEvent,t3=e2.findClosestElementFromNode,e2.ToolbarController=function(e3){function s3(t4){this.element=t4,this.didKeyDownDialogInput=o2(this.didKeyDownDialogInput,this),this.didClickDialogButton=o2(this.didClickDialogButton,this),this.didClickAttributeButton=o2(this.didClickAttributeButton,this),this.didClickActionButton=o2(this.didClickActionButton,this),this.attributes={},this.actions={},this.resetDialogInputs(),n2("mousedown",{onElement:this.element,matchingSelector:a2,withCallback:this.didClickActionButton}),n2("mousedown",{onElement:this.element,matchingSelector:c2,withCallback:this.didClickAttributeButton}),n2("click",{onElement:this.element,matchingSelector:v,preventDefault:true}),n2("click",{onElement:this.element,matchingSelector:l,withCallback:this.didClickDialogButton}),n2("keydown",{onElement:this.element,matchingSelector:h,withCallback:this.didKeyDownDialogInput});}var a2,u,c2,l,h,p2,d,f,g,m,v;return r2(s3,e3),c2="[data-trix-attribute]",a2="[data-trix-action]",v=c2+", "+a2,p2="[data-trix-dialog]",u=p2+"[data-trix-active]",l=p2+" [data-trix-method]",h=p2+" [data-trix-input]",s3.prototype.didClickActionButton=function(t4,e4){var n3,i2,o3;return(i2=this.delegate)!=null&&i2.toolbarDidClickButton(),t4.preventDefault(),n3=d(e4),this.getDialog(n3)?this.toggleDialog(n3):(o3=this.delegate)!=null?o3.toolbarDidInvokeAction(n3):void 0;},s3.prototype.didClickAttributeButton=function(t4,e4){var n3,i2,o3;return(i2=this.delegate)!=null&&i2.toolbarDidClickButton(),t4.preventDefault(),n3=f(e4),this.getDialog(n3)?this.toggleDialog(n3):(o3=this.delegate)!=null&&o3.toolbarDidToggleAttribute(n3),this.refreshAttributeButtons();},s3.prototype.didClickDialogButton=function(e4,n3){var i2,o3;return i2=t3(n3,{matchingSelector:p2}),o3=n3.getAttribute("data-trix-method"),this[o3].call(this,i2);},s3.prototype.didKeyDownDialogInput=function(t4,e4){var n3,i2;return t4.keyCode===13&&(t4.preventDefault(),n3=e4.getAttribute("name"),i2=this.getDialog(n3),this.setAttribute(i2)),t4.keyCode===27?(t4.preventDefault(),this.hideDialog()):void 0;},s3.prototype.updateActions=function(t4){return this.actions=t4,this.refreshActionButtons();},s3.prototype.refreshActionButtons=function(){return this.eachActionButton(function(t4){return function(e4,n3){return e4.disabled=t4.actions[n3]===false;};}(this));},s3.prototype.eachActionButton=function(t4){var e4,n3,i2,o3,r3;for(o3=this.element.querySelectorAll(a2),r3=[],n3=0,i2=o3.length;i2>n3;n3++){e4=o3[n3],r3.push(t4(e4,d(e4)));}return r3;},s3.prototype.updateAttributes=function(t4){return this.attributes=t4,this.refreshAttributeButtons();},s3.prototype.refreshAttributeButtons=function(){return this.eachAttributeButton(function(t4){return function(e4,n3){return e4.disabled=t4.attributes[n3]===false,t4.attributes[n3]||t4.dialogIsVisible(n3)?(e4.setAttribute("data-trix-active",""),e4.classList.add("trix-active")):(e4.removeAttribute("data-trix-active"),e4.classList.remove("trix-active"));};}(this));},s3.prototype.eachAttributeButton=function(t4){var e4,n3,i2,o3,r3;for(o3=this.element.querySelectorAll(c2),r3=[],n3=0,i2=o3.length;i2>n3;n3++){e4=o3[n3],r3.push(t4(e4,f(e4)));}return r3;},s3.prototype.applyKeyboardCommand=function(t4){var e4,n3,o3,r3,s4,a3,u2;for(s4=JSON.stringify(t4.sort()),u2=this.element.querySelectorAll("[data-trix-key]"),r3=0,a3=u2.length;a3>r3;r3++){if(e4=u2[r3],o3=e4.getAttribute("data-trix-key").split("+"),n3=JSON.stringify(o3.sort()),n3===s4)return i("mousedown",{onElement:e4}),true;}return false;},s3.prototype.dialogIsVisible=function(t4){var e4;return(e4=this.getDialog(t4))?e4.hasAttribute("data-trix-active"):void 0;},s3.prototype.toggleDialog=function(t4){return this.dialogIsVisible(t4)?this.hideDialog():this.showDialog(t4);},s3.prototype.showDialog=function(t4){var e4,n3,i2,o3,r3,s4,a3,u2,c3,l2;for(this.hideDialog(),(a3=this.delegate)!=null&&a3.toolbarWillShowDialog(),i2=this.getDialog(t4),i2.setAttribute("data-trix-active",""),i2.classList.add("trix-active"),u2=i2.querySelectorAll("input[disabled]"),o3=0,s4=u2.length;s4>o3;o3++){n3=u2[o3],n3.removeAttribute("disabled");}return(e4=f(i2))&&(r3=m(i2,t4))&&(r3.value=(c3=this.attributes[e4])!=null?c3:"",r3.select()),(l2=this.delegate)!=null?l2.toolbarDidShowDialog(t4):void 0;},s3.prototype.setAttribute=function(t4){var e4,n3,i2;return e4=f(t4),n3=m(t4,e4),n3.willValidate&&!n3.checkValidity()?(n3.setAttribute("data-trix-validate",""),n3.classList.add("trix-validate"),n3.focus()):((i2=this.delegate)!=null&&i2.toolbarDidUpdateAttribute(e4,n3.value),this.hideDialog());},s3.prototype.removeAttribute=function(t4){var e4,n3;return e4=f(t4),(n3=this.delegate)!=null&&n3.toolbarDidRemoveAttribute(e4),this.hideDialog();},s3.prototype.hideDialog=function(){var t4,e4;return(t4=this.element.querySelector(u))?(t4.removeAttribute("data-trix-active"),t4.classList.remove("trix-active"),this.resetDialogInputs(),(e4=this.delegate)!=null?e4.toolbarDidHideDialog(g(t4)):void 0):void 0;},s3.prototype.resetDialogInputs=function(){var t4,e4,n3,i2,o3;for(i2=this.element.querySelectorAll(h),o3=[],t4=0,n3=i2.length;n3>t4;t4++){e4=i2[t4],e4.setAttribute("disabled","disabled"),e4.removeAttribute("data-trix-validate"),o3.push(e4.classList.remove("trix-validate"));}return o3;},s3.prototype.getDialog=function(t4){return this.element.querySelector("[data-trix-dialog="+t4+"]");},m=function m(t4,e4){return e4==null&&(e4=f(t4)),t4.querySelector("[data-trix-input][name='"+e4+"']");},d=function d(t4){return t4.getAttribute("data-trix-action");},f=function f(t4){var e4;return(e4=t4.getAttribute("data-trix-attribute"))!=null?e4:t4.getAttribute("data-trix-dialog-attribute");},g=function g(t4){return t4.getAttribute("data-trix-dialog");},s3;}(e2.BasicObject);}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.ImagePreloadOperation=function(e3){function n3(t4){this.url=t4;}return t3(n3,e3),n3.prototype.perform=function(t4){var e4;return e4=new Image(),e4.onload=function(n4){return function(){return e4.width=n4.width=e4.naturalWidth,e4.height=n4.height=e4.naturalHeight,t4(true,e4);};}(this),e4.onerror=function(){return t4(false);},e4.src=this.url;},n3;}(e2.Operation);}.call(this),function(){var t3=function t3(t4,e3){return function(){return t4.apply(e3,arguments);};},n2=function n2(t4,e3){function n3(){this.constructor=t4;}for(var o2 in e3){i.call(e3,o2)&&(t4[o2]=e3[o2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},i={}.hasOwnProperty;e2.Attachment=function(i2){function o2(n3){n3==null&&(n3={}),this.releaseFile=t3(this.releaseFile,this),o2.__super__.constructor.apply(this,arguments),this.attributes=e2.Hash.box(n3),this.didChangeAttributes();}return n2(o2,i2),o2.previewablePattern=/^image(\/(gif|png|jpe?g)|$)/,o2.attachmentForFile=function(t4){var e3,n3;return n3=this.attributesForFile(t4),e3=new this(n3),e3.setFile(t4),e3;},o2.attributesForFile=function(t4){return new e2.Hash({filename:t4.name,filesize:t4.size,contentType:t4.type});},o2.fromJSON=function(t4){return new this(t4);},o2.prototype.getAttribute=function(t4){return this.attributes.get(t4);},o2.prototype.hasAttribute=function(t4){return this.attributes.has(t4);},o2.prototype.getAttributes=function(){return this.attributes.toObject();},o2.prototype.setAttributes=function(t4){var e3,n3,i3;return t4==null&&(t4={}),e3=this.attributes.merge(t4),this.attributes.isEqualTo(e3)?void 0:(this.attributes=e3,this.didChangeAttributes(),(n3=this.previewDelegate)!=null&&typeof n3.attachmentDidChangeAttributes=="function"&&n3.attachmentDidChangeAttributes(this),(i3=this.delegate)!=null&&typeof i3.attachmentDidChangeAttributes=="function"?i3.attachmentDidChangeAttributes(this):void 0);},o2.prototype.didChangeAttributes=function(){return this.isPreviewable()?this.preloadURL():void 0;},o2.prototype.isPending=function(){return this.file!=null&&!(this.getURL()||this.getHref());},o2.prototype.isPreviewable=function(){return this.attributes.has("previewable")?this.attributes.get("previewable"):this.constructor.previewablePattern.test(this.getContentType());},o2.prototype.getType=function(){return this.hasContent()?"content":this.isPreviewable()?"preview":"file";},o2.prototype.getURL=function(){return this.attributes.get("url");},o2.prototype.getHref=function(){return this.attributes.get("href");},o2.prototype.getFilename=function(){var t4;return(t4=this.attributes.get("filename"))!=null?t4:"";},o2.prototype.getFilesize=function(){return this.attributes.get("filesize");},o2.prototype.getFormattedFilesize=function(){var t4;return t4=this.attributes.get("filesize"),typeof t4=="number"?e2.config.fileSize.formatter(t4):"";},o2.prototype.getExtension=function(){var t4;return(t4=this.getFilename().match(/\.(\w+)$/))!=null?t4[1].toLowerCase():void 0;},o2.prototype.getContentType=function(){return this.attributes.get("contentType");},o2.prototype.hasContent=function(){return this.attributes.has("content");},o2.prototype.getContent=function(){return this.attributes.get("content");},o2.prototype.getWidth=function(){return this.attributes.get("width");},o2.prototype.getHeight=function(){return this.attributes.get("height");},o2.prototype.getFile=function(){return this.file;},o2.prototype.setFile=function(t4){return this.file=t4,this.isPreviewable()?this.preloadFile():void 0;},o2.prototype.releaseFile=function(){return this.releasePreloadedFile(),this.file=null;},o2.prototype.getUploadProgress=function(){var t4;return(t4=this.uploadProgress)!=null?t4:0;},o2.prototype.setUploadProgress=function(t4){var e3;return this.uploadProgress!==t4?(this.uploadProgress=t4,(e3=this.uploadProgressDelegate)!=null&&typeof e3.attachmentDidChangeUploadProgress=="function"?e3.attachmentDidChangeUploadProgress(this):void 0):void 0;},o2.prototype.toJSON=function(){return this.getAttributes();},o2.prototype.getCacheKey=function(){return[o2.__super__.getCacheKey.apply(this,arguments),this.attributes.getCacheKey(),this.getPreviewURL()].join("/");},o2.prototype.getPreviewURL=function(){return this.previewURL||this.preloadingURL;},o2.prototype.setPreviewURL=function(t4){var e3,n3;return t4!==this.getPreviewURL()?(this.previewURL=t4,(e3=this.previewDelegate)!=null&&typeof e3.attachmentDidChangeAttributes=="function"&&e3.attachmentDidChangeAttributes(this),(n3=this.delegate)!=null&&typeof n3.attachmentDidChangePreviewURL=="function"?n3.attachmentDidChangePreviewURL(this):void 0):void 0;},o2.prototype.preloadURL=function(){return this.preload(this.getURL(),this.releaseFile);},o2.prototype.preloadFile=function(){return this.file?(this.fileObjectURL=URL.createObjectURL(this.file),this.preload(this.fileObjectURL)):void 0;},o2.prototype.releasePreloadedFile=function(){return this.fileObjectURL?(URL.revokeObjectURL(this.fileObjectURL),this.fileObjectURL=null):void 0;},o2.prototype.preload=function(t4,n3){var i3;return t4&&t4!==this.getPreviewURL()?(this.preloadingURL=t4,i3=new e2.ImagePreloadOperation(t4),i3.then(function(e3){return function(i4){var o3,r2;return r2=i4.width,o3=i4.height,e3.getWidth()&&e3.getHeight()||e3.setAttributes({width:r2,height:o3}),e3.preloadingURL=null,e3.setPreviewURL(t4),typeof n3=="function"?n3():void 0;};}(this))["catch"](function(t5){return function(){return t5.preloadingURL=null,typeof n3=="function"?n3():void 0;};}(this))):void 0;},o2;}(e2.Object);}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.Piece=function(n3){function i(t4,n4){n4==null&&(n4={}),i.__super__.constructor.apply(this,arguments),this.attributes=e2.Hash.box(n4);}return t3(i,n3),i.types={},i.registerType=function(t4,e3){return e3.type=t4,this.types[t4]=e3;},i.fromJSON=function(t4){var e3;return(e3=this.types[t4.type])?e3.fromJSON(t4):void 0;},i.prototype.copyWithAttributes=function(t4){return new this.constructor(this.getValue(),t4);},i.prototype.copyWithAdditionalAttributes=function(t4){return this.copyWithAttributes(this.attributes.merge(t4));},i.prototype.copyWithoutAttribute=function(t4){return this.copyWithAttributes(this.attributes.remove(t4));},i.prototype.copy=function(){return this.copyWithAttributes(this.attributes);},i.prototype.getAttribute=function(t4){return this.attributes.get(t4);},i.prototype.getAttributesHash=function(){return this.attributes;},i.prototype.getAttributes=function(){return this.attributes.toObject();},i.prototype.getCommonAttributes=function(){var t4,e3,n4;return(n4=pieceList.getPieceAtIndex(0))?(t4=n4.attributes,e3=t4.getKeys(),pieceList.eachPiece(function(n5){return e3=t4.getKeysCommonToHash(n5.attributes),t4=t4.slice(e3);}),t4.toObject()):{};},i.prototype.hasAttribute=function(t4){return this.attributes.has(t4);},i.prototype.hasSameStringValueAsPiece=function(t4){return t4!=null&&this.toString()===t4.toString();},i.prototype.hasSameAttributesAsPiece=function(t4){return t4!=null&&(this.attributes===t4.attributes||this.attributes.isEqualTo(t4.attributes));},i.prototype.isBlockBreak=function(){return false;},i.prototype.isEqualTo=function(t4){return i.__super__.isEqualTo.apply(this,arguments)||this.hasSameConstructorAs(t4)&&this.hasSameStringValueAsPiece(t4)&&this.hasSameAttributesAsPiece(t4);},i.prototype.isEmpty=function(){return this.length===0;},i.prototype.isSerializable=function(){return true;},i.prototype.toJSON=function(){return{type:this.constructor.type,attributes:this.getAttributes()};},i.prototype.contentsForInspection=function(){return{type:this.constructor.type,attributes:this.attributes.inspect()};},i.prototype.canBeGrouped=function(){return this.hasAttribute("href");},i.prototype.canBeGroupedWith=function(t4){return this.getAttribute("href")===t4.getAttribute("href");},i.prototype.getLength=function(){return this.length;},i.prototype.canBeConsolidatedWith=function(){return false;},i;}(e2.Object);}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.Piece.registerType("attachment",e2.AttachmentPiece=function(n3){function i(t4){this.attachment=t4,i.__super__.constructor.apply(this,arguments),this.length=1,this.ensureAttachmentExclusivelyHasAttribute("href"),this.attachment.hasContent()||this.removeProhibitedAttributes();}return t3(i,n3),i.fromJSON=function(t4){return new this(e2.Attachment.fromJSON(t4.attachment),t4.attributes);},i.permittedAttributes=["caption","presentation"],i.prototype.ensureAttachmentExclusivelyHasAttribute=function(t4){return this.hasAttribute(t4)?(this.attachment.hasAttribute(t4)||this.attachment.setAttributes(this.attributes.slice(t4)),this.attributes=this.attributes.remove(t4)):void 0;},i.prototype.removeProhibitedAttributes=function(){var t4;return t4=this.attributes.slice(this.constructor.permittedAttributes),t4.isEqualTo(this.attributes)?void 0:this.attributes=t4;},i.prototype.getValue=function(){return this.attachment;},i.prototype.isSerializable=function(){return!this.attachment.isPending();},i.prototype.getCaption=function(){var t4;return(t4=this.attributes.get("caption"))!=null?t4:"";},i.prototype.isEqualTo=function(t4){var e3;return i.__super__.isEqualTo.apply(this,arguments)&&this.attachment.id===(t4!=null&&(e3=t4.attachment)!=null?e3.id:void 0);},i.prototype.toString=function(){return e2.OBJECT_REPLACEMENT_CHARACTER;},i.prototype.toJSON=function(){var t4;return t4=i.__super__.toJSON.apply(this,arguments),t4.attachment=this.attachment,t4;},i.prototype.getCacheKey=function(){return[i.__super__.getCacheKey.apply(this,arguments),this.attachment.getCacheKey()].join("/");},i.prototype.toConsole=function(){return JSON.stringify(this.toString());},i;}(e2.Piece));}.call(this),function(){var t3,n2=function n2(t4,e3){function n3(){this.constructor=t4;}for(var o2 in e3){i.call(e3,o2)&&(t4[o2]=e3[o2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},i={}.hasOwnProperty;t3=e2.normalizeNewlines,e2.Piece.registerType("string",e2.StringPiece=function(e3){function i2(e4){i2.__super__.constructor.apply(this,arguments),this.string=t3(e4),this.length=this.string.length;}return n2(i2,e3),i2.fromJSON=function(t4){return new this(t4.string,t4.attributes);},i2.prototype.getValue=function(){return this.string;},i2.prototype.toString=function(){return this.string.toString();},i2.prototype.isBlockBreak=function(){return this.toString()==="\n"&&this.getAttribute("blockBreak")===true;},i2.prototype.toJSON=function(){var t4;return t4=i2.__super__.toJSON.apply(this,arguments),t4.string=this.string,t4;},i2.prototype.canBeConsolidatedWith=function(t4){return t4!=null&&this.hasSameConstructorAs(t4)&&this.hasSameAttributesAsPiece(t4);},i2.prototype.consolidateWith=function(t4){return new this.constructor(this.toString()+t4.toString(),this.attributes);},i2.prototype.splitAtOffset=function(t4){var e4,n3;return t4===0?(e4=null,n3=this):t4===this.length?(e4=this,n3=null):(e4=new this.constructor(this.string.slice(0,t4),this.attributes),n3=new this.constructor(this.string.slice(t4),this.attributes)),[e4,n3];},i2.prototype.toConsole=function(){var t4;return t4=this.string,t4.length>15&&(t4=t4.slice(0,14)+"\u2026"),JSON.stringify(t4.toString());},i2;}(e2.Piece));}.call(this),function(){var t3,n2=function n2(t4,e3){function n3(){this.constructor=t4;}for(var o3 in e3){i.call(e3,o3)&&(t4[o3]=e3[o3]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},i={}.hasOwnProperty,o2=[].slice;t3=e2.spliceArray,e2.SplittableList=function(e3){function i2(t4){t4==null&&(t4=[]),i2.__super__.constructor.apply(this,arguments),this.objects=t4.slice(0),this.length=this.objects.length;}var r2,s2,a2;return n2(i2,e3),i2.box=function(t4){return t4 instanceof this?t4:new this(t4);},i2.prototype.indexOf=function(t4){return this.objects.indexOf(t4);},i2.prototype.splice=function(){var e4;return e4=1<=arguments.length?o2.call(arguments,0):[],new this.constructor(t3.apply(null,[this.objects].concat(o2.call(e4))));},i2.prototype.eachObject=function(t4){var e4,n3,i3,o3,r3,s3;for(r3=this.objects,s3=[],n3=e4=0,i3=r3.length;i3>e4;n3=++e4){o3=r3[n3],s3.push(t4(o3,n3));}return s3;},i2.prototype.insertObjectAtIndex=function(t4,e4){return this.splice(e4,0,t4);},i2.prototype.insertSplittableListAtIndex=function(t4,e4){return this.splice.apply(this,[e4,0].concat(o2.call(t4.objects)));},i2.prototype.insertSplittableListAtPosition=function(t4,e4){var n3,i3,o3;return o3=this.splitObjectAtPosition(e4),i3=o3[0],n3=o3[1],new this.constructor(i3).insertSplittableListAtIndex(t4,n3);},i2.prototype.editObjectAtIndex=function(t4,e4){return this.replaceObjectAtIndex(e4(this.objects[t4]),t4);},i2.prototype.replaceObjectAtIndex=function(t4,e4){return this.splice(e4,1,t4);},i2.prototype.removeObjectAtIndex=function(t4){return this.splice(t4,1);},i2.prototype.getObjectAtIndex=function(t4){return this.objects[t4];},i2.prototype.getSplittableListInRange=function(t4){var e4,n3,i3,o3;return i3=this.splitObjectsAtRange(t4),n3=i3[0],e4=i3[1],o3=i3[2],new this.constructor(n3.slice(e4,o3+1));},i2.prototype.selectSplittableList=function(t4){var e4,n3;return n3=function(){var n4,i3,o3,r3;for(o3=this.objects,r3=[],n4=0,i3=o3.length;i3>n4;n4++){e4=o3[n4],t4(e4)&&r3.push(e4);}return r3;}.call(this),new this.constructor(n3);},i2.prototype.removeObjectsInRange=function(t4){var e4,n3,i3,o3;return i3=this.splitObjectsAtRange(t4),n3=i3[0],e4=i3[1],o3=i3[2],new this.constructor(n3).splice(e4,o3-e4+1);},i2.prototype.transformObjectsInRange=function(t4,e4){var n3,i3,o3,r3,s3,a3,u;return s3=this.splitObjectsAtRange(t4),r3=s3[0],i3=s3[1],a3=s3[2],u=function(){var t5,s4,u2;for(u2=[],n3=t5=0,s4=r3.length;s4>t5;n3=++t5){o3=r3[n3],u2.push(n3>=i3&&a3>=n3?e4(o3):o3);}return u2;}(),new this.constructor(u);},i2.prototype.splitObjectsAtRange=function(t4){var e4,n3,i3,o3,s3,u;return o3=this.splitObjectAtPosition(a2(t4)),n3=o3[0],e4=o3[1],i3=o3[2],s3=new this.constructor(n3).splitObjectAtPosition(r2(t4)+i3),n3=s3[0],u=s3[1],[n3,e4,u-1];},i2.prototype.getObjectAtPosition=function(t4){var e4,n3,i3;return i3=this.findIndexAndOffsetAtPosition(t4),e4=i3.index,n3=i3.offset,this.objects[e4];},i2.prototype.splitObjectAtPosition=function(t4){var e4,n3,i3,o3,r3,s3,a3,u,c2,l;return s3=this.findIndexAndOffsetAtPosition(t4),e4=s3.index,r3=s3.offset,o3=this.objects.slice(0),e4!=null?r3===0?(c2=e4,l=0):(i3=this.getObjectAtIndex(e4),a3=i3.splitAtOffset(r3),n3=a3[0],u=a3[1],o3.splice(e4,1,n3,u),c2=e4+1,l=n3.getLength()-r3):(c2=o3.length,l=0),[o3,c2,l];},i2.prototype.consolidate=function(){var t4,e4,n3,i3,o3,r3;for(i3=[],o3=this.objects[0],r3=this.objects.slice(1),t4=0,e4=r3.length;e4>t4;t4++){n3=r3[t4],(typeof o3.canBeConsolidatedWith=="function"?o3.canBeConsolidatedWith(n3):void 0)?o3=o3.consolidateWith(n3):(i3.push(o3),o3=n3);}return o3!=null&&i3.push(o3),new this.constructor(i3);},i2.prototype.consolidateFromIndexToIndex=function(t4,e4){var n3,i3,r3;return i3=this.objects.slice(0),r3=i3.slice(t4,e4+1),n3=new this.constructor(r3).consolidate().toArray(),this.splice.apply(this,[t4,r3.length].concat(o2.call(n3)));},i2.prototype.findIndexAndOffsetAtPosition=function(t4){var e4,n3,i3,o3,r3,s3,a3;for(e4=0,a3=this.objects,i3=n3=0,o3=a3.length;o3>n3;i3=++n3){if(s3=a3[i3],r3=e4+s3.getLength(),t4>=e4&&r3>t4)return{index:i3,offset:t4-e4};e4=r3;}return{index:null,offset:null};},i2.prototype.findPositionAtIndexAndOffset=function(t4,e4){var n3,i3,o3,r3,s3,a3;for(s3=0,a3=this.objects,n3=i3=0,o3=a3.length;o3>i3;n3=++i3){if(r3=a3[n3],t4>n3)s3+=r3.getLength();else if(n3===t4){s3+=e4;break;}}return s3;},i2.prototype.getEndPosition=function(){var t4,e4;return this.endPosition!=null?this.endPosition:this.endPosition=function(){var n3,i3,o3;for(e4=0,o3=this.objects,n3=0,i3=o3.length;i3>n3;n3++){t4=o3[n3],e4+=t4.getLength();}return e4;}.call(this);},i2.prototype.toString=function(){return this.objects.join("");},i2.prototype.toArray=function(){return this.objects.slice(0);},i2.prototype.toJSON=function(){return this.toArray();},i2.prototype.isEqualTo=function(t4){return i2.__super__.isEqualTo.apply(this,arguments)||s2(this.objects,t4!=null?t4.objects:void 0);},s2=function s2(t4,e4){var n3,i3,o3,r3,s3;if(e4==null&&(e4=[]),t4.length!==e4.length)return false;for(s3=true,i3=n3=0,o3=t4.length;o3>n3;i3=++n3){r3=t4[i3],s3&&!r3.isEqualTo(e4[i3])&&(s3=false);}return s3;},i2.prototype.contentsForInspection=function(){var t4;return{objects:"["+function(){var e4,n3,i3,o3;for(i3=this.objects,o3=[],e4=0,n3=i3.length;n3>e4;e4++){t4=i3[e4],o3.push(t4.inspect());}return o3;}.call(this).join(", ")+"]"};},a2=function a2(t4){return t4[0];},r2=function r2(t4){return t4[1];},i2;}(e2.Object);}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.Text=function(n3){function i(t4){var n4;t4==null&&(t4=[]),i.__super__.constructor.apply(this,arguments),this.pieceList=new e2.SplittableList(function(){var e3,i2,o2;for(o2=[],e3=0,i2=t4.length;i2>e3;e3++){n4=t4[e3],n4.isEmpty()||o2.push(n4);}return o2;}());}return t3(i,n3),i.textForAttachmentWithAttributes=function(t4,n4){var i2;return i2=new e2.AttachmentPiece(t4,n4),new this([i2]);},i.textForStringWithAttributes=function(t4,n4){var i2;return i2=new e2.StringPiece(t4,n4),new this([i2]);},i.fromJSON=function(t4){var n4,i2;return i2=function(){var i3,o2,r2;for(r2=[],i3=0,o2=t4.length;o2>i3;i3++){n4=t4[i3],r2.push(e2.Piece.fromJSON(n4));}return r2;}(),new this(i2);},i.prototype.copy=function(){return this.copyWithPieceList(this.pieceList);},i.prototype.copyWithPieceList=function(t4){return new this.constructor(t4.consolidate().toArray());},i.prototype.copyUsingObjectMap=function(t4){var e3,n4;return n4=function(){var n5,i2,o2,r2,s2;for(o2=this.getPieces(),s2=[],n5=0,i2=o2.length;i2>n5;n5++){e3=o2[n5],s2.push((r2=t4.find(e3))!=null?r2:e3);}return s2;}.call(this),new this.constructor(n4);},i.prototype.appendText=function(t4){return this.insertTextAtPosition(t4,this.getLength());},i.prototype.insertTextAtPosition=function(t4,e3){return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t4.pieceList,e3));},i.prototype.removeTextAtRange=function(t4){return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t4));},i.prototype.replaceTextAtRange=function(t4,e3){return this.removeTextAtRange(e3).insertTextAtPosition(t4,e3[0]);},i.prototype.moveTextFromRangeToPosition=function(t4,e3){var n4,i2;if(!(t4[0]<=e3&&e3<=t4[1]))return i2=this.getTextAtRange(t4),n4=i2.getLength(),t4[0]<e3&&(e3-=n4),this.removeTextAtRange(t4).insertTextAtPosition(i2,e3);},i.prototype.addAttributeAtRange=function(t4,e3,n4){var i2;return i2={},i2[t4]=e3,this.addAttributesAtRange(i2,n4);},i.prototype.addAttributesAtRange=function(t4,e3){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e3,function(e4){return e4.copyWithAdditionalAttributes(t4);}));},i.prototype.removeAttributeAtRange=function(t4,e3){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e3,function(e4){return e4.copyWithoutAttribute(t4);}));},i.prototype.setAttributesAtRange=function(t4,e3){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e3,function(e4){return e4.copyWithAttributes(t4);}));},i.prototype.getAttributesAtPosition=function(t4){var e3,n4;return(e3=(n4=this.pieceList.getObjectAtPosition(t4))!=null?n4.getAttributes():void 0)!=null?e3:{};},i.prototype.getCommonAttributes=function(){var t4,n4;return t4=function(){var t5,e3,i2,o2;for(i2=this.pieceList.toArray(),o2=[],t5=0,e3=i2.length;e3>t5;t5++){n4=i2[t5],o2.push(n4.getAttributes());}return o2;}.call(this),e2.Hash.fromCommonAttributesOfObjects(t4).toObject();},i.prototype.getCommonAttributesAtRange=function(t4){var e3;return(e3=this.getTextAtRange(t4).getCommonAttributes())!=null?e3:{};},i.prototype.getExpandedRangeForAttributeAtOffset=function(t4,e3){var n4,i2,o2;for(n4=o2=e3,i2=this.getLength();n4>0&&this.getCommonAttributesAtRange([n4-1,o2])[t4];){n4--;}for(;i2>o2&&this.getCommonAttributesAtRange([e3,o2+1])[t4];){o2++;}return[n4,o2];},i.prototype.getTextAtRange=function(t4){return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t4));},i.prototype.getStringAtRange=function(t4){return this.pieceList.getSplittableListInRange(t4).toString();},i.prototype.getStringAtPosition=function(t4){return this.getStringAtRange([t4,t4+1]);},i.prototype.startsWithString=function(t4){return this.getStringAtRange([0,t4.length])===t4;},i.prototype.endsWithString=function(t4){var e3;return e3=this.getLength(),this.getStringAtRange([e3-t4.length,e3])===t4;},i.prototype.getAttachmentPieces=function(){var t4,e3,n4,i2,o2;for(i2=this.pieceList.toArray(),o2=[],t4=0,e3=i2.length;e3>t4;t4++){n4=i2[t4],n4.attachment!=null&&o2.push(n4);}return o2;},i.prototype.getAttachments=function(){var t4,e3,n4,i2,o2;for(i2=this.getAttachmentPieces(),o2=[],t4=0,e3=i2.length;e3>t4;t4++){n4=i2[t4],o2.push(n4.attachment);}return o2;},i.prototype.getAttachmentAndPositionById=function(t4){var e3,n4,i2,o2,r2,s2;for(o2=0,r2=this.pieceList.toArray(),e3=0,n4=r2.length;n4>e3;e3++){if(i2=r2[e3],((s2=i2.attachment)!=null?s2.id:void 0)===t4)return{attachment:i2.attachment,position:o2};o2+=i2.length;}return{attachment:null,position:null};},i.prototype.getAttachmentById=function(t4){var e3,n4,i2;return i2=this.getAttachmentAndPositionById(t4),e3=i2.attachment,n4=i2.position,e3;},i.prototype.getRangeOfAttachment=function(t4){var e3,n4;return n4=this.getAttachmentAndPositionById(t4.id),t4=n4.attachment,e3=n4.position,t4!=null?[e3,e3+1]:void 0;},i.prototype.updateAttributesForAttachment=function(t4,e3){var n4;return(n4=this.getRangeOfAttachment(e3))?this.addAttributesAtRange(t4,n4):this;},i.prototype.getLength=function(){return this.pieceList.getEndPosition();},i.prototype.isEmpty=function(){return this.getLength()===0;},i.prototype.isEqualTo=function(t4){var e3;return i.__super__.isEqualTo.apply(this,arguments)||(t4!=null&&(e3=t4.pieceList)!=null?e3.isEqualTo(this.pieceList):void 0);},i.prototype.isBlockBreak=function(){return this.getLength()===1&&this.pieceList.getObjectAtIndex(0).isBlockBreak();},i.prototype.eachPiece=function(t4){return this.pieceList.eachObject(t4);},i.prototype.getPieces=function(){return this.pieceList.toArray();},i.prototype.getPieceAtPosition=function(t4){return this.pieceList.getObjectAtPosition(t4);},i.prototype.contentsForInspection=function(){return{pieceList:this.pieceList.inspect()};},i.prototype.toSerializableText=function(){var t4;return t4=this.pieceList.selectSplittableList(function(t5){return t5.isSerializable();}),this.copyWithPieceList(t4);},i.prototype.toString=function(){return this.pieceList.toString();},i.prototype.toJSON=function(){return this.pieceList.toJSON();},i.prototype.toConsole=function(){var t4;return JSON.stringify(function(){var e3,n4,i2,o2;for(i2=this.pieceList.toArray(),o2=[],e3=0,n4=i2.length;n4>e3;e3++){t4=i2[e3],o2.push(JSON.parse(t4.toConsole()));}return o2;}.call(this));},i.prototype.getDirection=function(){return e2.getDirection(this.toString());},i.prototype.isRTL=function(){return this.getDirection()==="rtl";},i;}(e2.Object);}.call(this),function(){var t3,n2,i,o2,r2,s2=function s2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){a2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},a2={}.hasOwnProperty,u=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;},c2=[].slice;t3=e2.arraysAreEqual,r2=e2.spliceArray,i=e2.getBlockConfig,n2=e2.getBlockAttributeNames,o2=e2.getListAttributeNames,e2.Block=function(n3){function a3(t4,n4){t4==null&&(t4=new e2.Text()),n4==null&&(n4=[]),a3.__super__.constructor.apply(this,arguments),this.text=h(t4),this.attributes=n4;}var l,h,p2,d,f,g,m,v,y;return s2(a3,n3),a3.fromJSON=function(t4){var n4;return n4=e2.Text.fromJSON(t4.text),new this(n4,t4.attributes);},a3.prototype.isEmpty=function(){return this.text.isBlockBreak();},a3.prototype.isEqualTo=function(e3){return a3.__super__.isEqualTo.apply(this,arguments)||this.text.isEqualTo(e3!=null?e3.text:void 0)&&t3(this.attributes,e3!=null?e3.attributes:void 0);},a3.prototype.copyWithText=function(t4){return new this.constructor(t4,this.attributes);},a3.prototype.copyWithoutText=function(){return this.copyWithText(null);},a3.prototype.copyWithAttributes=function(t4){return new this.constructor(this.text,t4);},a3.prototype.copyWithoutAttributes=function(){return this.copyWithAttributes(null);},a3.prototype.copyUsingObjectMap=function(t4){var e3;return this.copyWithText((e3=t4.find(this.text))?e3:this.text.copyUsingObjectMap(t4));},a3.prototype.addAttribute=function(t4){var e3;return e3=this.attributes.concat(d(t4)),this.copyWithAttributes(e3);},a3.prototype.removeAttribute=function(t4){var e3,n4;return n4=i(t4).listAttribute,e3=g(g(this.attributes,t4),n4),this.copyWithAttributes(e3);},a3.prototype.removeLastAttribute=function(){return this.removeAttribute(this.getLastAttribute());},a3.prototype.getLastAttribute=function(){return f(this.attributes);},a3.prototype.getAttributes=function(){return this.attributes.slice(0);},a3.prototype.getAttributeLevel=function(){return this.attributes.length;},a3.prototype.getAttributeAtLevel=function(t4){return this.attributes[t4-1];},a3.prototype.hasAttribute=function(t4){return u.call(this.attributes,t4)>=0;},a3.prototype.hasAttributes=function(){return this.getAttributeLevel()>0;},a3.prototype.getLastNestableAttribute=function(){return f(this.getNestableAttributes());},a3.prototype.getNestableAttributes=function(){var t4,e3,n4,o3,r3;for(o3=this.attributes,r3=[],e3=0,n4=o3.length;n4>e3;e3++){t4=o3[e3],i(t4).nestable&&r3.push(t4);}return r3;},a3.prototype.getNestingLevel=function(){return this.getNestableAttributes().length;},a3.prototype.decreaseNestingLevel=function(){var t4;return(t4=this.getLastNestableAttribute())?this.removeAttribute(t4):this;},a3.prototype.increaseNestingLevel=function(){var t4,e3,n4;return(t4=this.getLastNestableAttribute())?(n4=this.attributes.lastIndexOf(t4),e3=r2.apply(null,[this.attributes,n4+1,0].concat(c2.call(d(t4)))),this.copyWithAttributes(e3)):this;},a3.prototype.getListItemAttributes=function(){var t4,e3,n4,o3,r3;for(o3=this.attributes,r3=[],e3=0,n4=o3.length;n4>e3;e3++){t4=o3[e3],i(t4).listAttribute&&r3.push(t4);}return r3;},a3.prototype.isListItem=function(){var t4;return(t4=i(this.getLastAttribute()))!=null?t4.listAttribute:void 0;},a3.prototype.isTerminalBlock=function(){var t4;return(t4=i(this.getLastAttribute()))!=null?t4.terminal:void 0;},a3.prototype.breaksOnReturn=function(){var t4;return(t4=i(this.getLastAttribute()))!=null?t4.breakOnReturn:void 0;},a3.prototype.findLineBreakInDirectionFromPosition=function(t4,e3){var n4,i2;return i2=this.toString(),n4=function(){switch(t4){case"forward":return i2.indexOf("\n",e3);case"backward":return i2.slice(0,e3).lastIndexOf("\n");}}(),n4!==-1?n4:void 0;},a3.prototype.contentsForInspection=function(){return{text:this.text.inspect(),attributes:this.attributes};},a3.prototype.toString=function(){return this.text.toString();},a3.prototype.toJSON=function(){return{text:this.text,attributes:this.attributes};},a3.prototype.getDirection=function(){return this.text.getDirection();},a3.prototype.isRTL=function(){return this.text.isRTL();},a3.prototype.getLength=function(){return this.text.getLength();},a3.prototype.canBeConsolidatedWith=function(t4){return!this.hasAttributes()&&!t4.hasAttributes()&&this.getDirection()===t4.getDirection();},a3.prototype.consolidateWith=function(t4){var n4,i2;return n4=e2.Text.textForStringWithAttributes("\n"),i2=this.getTextWithoutBlockBreak().appendText(n4),this.copyWithText(i2.appendText(t4.text));},a3.prototype.splitAtOffset=function(t4){var e3,n4;return t4===0?(e3=null,n4=this):t4===this.getLength()?(e3=this,n4=null):(e3=this.copyWithText(this.text.getTextAtRange([0,t4])),n4=this.copyWithText(this.text.getTextAtRange([t4,this.getLength()]))),[e3,n4];},a3.prototype.getBlockBreakPosition=function(){return this.text.getLength()-1;},a3.prototype.getTextWithoutBlockBreak=function(){return m(this.text)?this.text.getTextAtRange([0,this.getBlockBreakPosition()]):this.text.copy();},a3.prototype.canBeGrouped=function(t4){return this.attributes[t4];},a3.prototype.canBeGroupedWith=function(t4,e3){var n4,r3,s3,a4;return s3=t4.getAttributes(),r3=s3[e3],n4=this.attributes[e3],!(n4!==r3||i(n4).group===false&&(a4=s3[e3+1],u.call(o2(),a4)<0)||this.getDirection()!==t4.getDirection()&&!t4.isEmpty());},h=function h(t4){return t4=y(t4),t4=l(t4);},y=function y(t4){var n4,i2,o3,r3,s3,a4;return r3=false,a4=t4.getPieces(),i2=2<=a4.length?c2.call(a4,0,n4=a4.length-1):(n4=0,[]),o3=a4[n4++],o3==null?t4:(i2=function(){var t5,e3,n5;for(n5=[],t5=0,e3=i2.length;e3>t5;t5++){s3=i2[t5],s3.isBlockBreak()?(r3=true,n5.push(v(s3))):n5.push(s3);}return n5;}(),r3?new e2.Text(c2.call(i2).concat([o3])):t4);},p2=e2.Text.textForStringWithAttributes("\n",{blockBreak:true}),l=function l(t4){return m(t4)?t4:t4.appendText(p2);},m=function m(t4){var e3,n4;return n4=t4.getLength(),n4===0?false:(e3=t4.getTextAtRange([n4-1,n4]),e3.isBlockBreak());},v=function v(t4){return t4.copyWithoutAttribute("blockBreak");},d=function d(t4){var e3;return e3=i(t4).listAttribute,e3!=null?[e3,t4]:[t4];},f=function f(t4){return t4.slice(-1)[0];},g=function g(t4,e3){var n4;return n4=t4.lastIndexOf(e3),n4===-1?t4:r2(t4,n4,1);},a3;}(e2.Object);}.call(this),function(){var t3,n2,i,o2=function o2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){r2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},r2={}.hasOwnProperty,s2=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;},a2=[].slice;n2=e2.tagName,i=e2.walkTree,t3=e2.nodeIsAttachmentElement,e2.HTMLSanitizer=function(r3){function u(t4,e3){var n3;n3=e3!=null?e3:{},this.allowedAttributes=n3.allowedAttributes,this.forbiddenProtocols=n3.forbiddenProtocols,this.forbiddenElements=n3.forbiddenElements,this.allowedAttributes==null&&(this.allowedAttributes=c2),this.forbiddenProtocols==null&&(this.forbiddenProtocols=h),this.forbiddenElements==null&&(this.forbiddenElements=l),this.body=p2(t4);}var c2,l,h,p2;return o2(u,r3),c2="style href src width height class".split(" "),h="javascript:".split(" "),l="script iframe".split(" "),u.sanitize=function(t4,e3){var n3;return n3=new this(t4,e3),n3.sanitize(),n3;},u.prototype.sanitize=function(){return this.sanitizeElements(),this.normalizeListElementNesting();},u.prototype.getHTML=function(){return this.body.innerHTML;},u.prototype.getBody=function(){return this.body;},u.prototype.sanitizeElements=function(){var t4,n3,o3,r4,s3;for(s3=i(this.body),r4=[];s3.nextNode();){switch(o3=s3.currentNode,o3.nodeType){case Node.ELEMENT_NODE:this.elementIsRemovable(o3)?r4.push(o3):this.sanitizeElement(o3);break;case Node.COMMENT_NODE:r4.push(o3);}}for(t4=0,n3=r4.length;n3>t4;t4++){o3=r4[t4],e2.removeNode(o3);}return this.body;},u.prototype.sanitizeElement=function(t4){var e3,n3,i2,o3,r4;for(t4.hasAttribute("href")&&(o3=t4.protocol,s2.call(this.forbiddenProtocols,o3)>=0&&t4.removeAttribute("href")),r4=a2.call(t4.attributes),e3=0,n3=r4.length;n3>e3;e3++){i2=r4[e3].name,s2.call(this.allowedAttributes,i2)>=0||i2.indexOf("data-trix")===0||t4.removeAttribute(i2);}return t4;},u.prototype.normalizeListElementNesting=function(){var t4,e3,i2,o3,r4;for(r4=a2.call(this.body.querySelectorAll("ul,ol")),t4=0,e3=r4.length;e3>t4;t4++){i2=r4[t4],(o3=i2.previousElementSibling)&&n2(o3)==="li"&&o3.appendChild(i2);}return this.body;},u.prototype.elementIsRemovable=function(t4){return(t4!=null?t4.nodeType:void 0)===Node.ELEMENT_NODE?this.elementIsForbidden(t4)||this.elementIsntSerializable(t4):void 0;},u.prototype.elementIsForbidden=function(t4){var e3;return e3=n2(t4),s2.call(this.forbiddenElements,e3)>=0;},u.prototype.elementIsntSerializable=function(e3){return e3.getAttribute("data-trix-serialize")==="false"&&!t3(e3);},p2=function p2(t4){var e3,n3,i2,o3,r4;for(t4==null&&(t4=""),t4=t4.replace(/<\/html[^>]*>[^]*$/i,"</html>"),e3=document.implementation.createHTMLDocument(""),e3.documentElement.innerHTML=t4,r4=e3.head.querySelectorAll("style"),i2=0,o3=r4.length;o3>i2;i2++){n3=r4[i2],e3.body.appendChild(n3);}return e3.body;},u;}(e2.BasicObject);}.call(this),function(){var t3,n2,i,o2,r2,s2,a2,u,c2,l,h,p2=function p2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){d.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},d={}.hasOwnProperty,f=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;};t3=e2.arraysAreEqual,s2=e2.makeElement,l=e2.tagName,r2=e2.getBlockTagNames,h=e2.walkTree,o2=e2.findClosestElementFromNode,i=e2.elementContainsNode,a2=e2.nodeIsAttachmentElement,u=e2.normalizeSpaces,n2=e2.breakableWhitespacePattern,c2=e2.squishBreakableWhitespace,e2.HTMLParser=function(d2){function g(t4,e3){this.html=t4,this.referenceElement=(e3!=null?e3:{}).referenceElement,this.blocks=[],this.blockElements=[],this.processedElements=[];}var m,v,y,b,A,C3,x,w,E,S2,R,k;return p2(g,d2),g.parse=function(t4,e3){var n3;return n3=new this(t4,e3),n3.parse(),n3;},g.prototype.getDocument=function(){return e2.Document.fromJSON(this.blocks);},g.prototype.parse=function(){var t4,n3;try{for(this.createHiddenContainer(),t4=e2.HTMLSanitizer.sanitize(this.html).getHTML(),this.containerElement.innerHTML=t4,n3=h(this.containerElement,{usingFilter:x});n3.nextNode();){this.processNode(n3.currentNode);}return this.translateBlockElementMarginsToNewlines();}finally{this.removeHiddenContainer();}},g.prototype.createHiddenContainer=function(){return this.referenceElement?(this.containerElement=this.referenceElement.cloneNode(false),this.containerElement.removeAttribute("id"),this.containerElement.setAttribute("data-trix-internal",""),this.containerElement.style.display="none",this.referenceElement.parentNode.insertBefore(this.containerElement,this.referenceElement.nextSibling)):(this.containerElement=s2({tagName:"div",style:{display:"none"}}),document.body.appendChild(this.containerElement));},g.prototype.removeHiddenContainer=function(){return e2.removeNode(this.containerElement);},x=function x(t4){return l(t4)==="style"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;},g.prototype.processNode=function(t4){switch(t4.nodeType){case Node.TEXT_NODE:if(!this.isInsignificantTextNode(t4))return this.appendBlockForTextNode(t4),this.processTextNode(t4);break;case Node.ELEMENT_NODE:return this.appendBlockForElement(t4),this.processElement(t4);}},g.prototype.appendBlockForTextNode=function(e3){var n3,i2,o3;return i2=e3.parentNode,i2===this.currentBlockElement&&this.isBlockElement(e3.previousSibling)?this.appendStringWithAttributes("\n"):i2!==this.containerElement&&!this.isBlockElement(i2)||(n3=this.getBlockAttributes(i2),t3(n3,(o3=this.currentBlock)!=null?o3.attributes:void 0))?void 0:(this.currentBlock=this.appendBlockForAttributesWithElement(n3,i2),this.currentBlockElement=i2);},g.prototype.appendBlockForElement=function(e3){var n3,o3,r3,s3;if(r3=this.isBlockElement(e3),o3=i(this.currentBlockElement,e3),r3&&!this.isBlockElement(e3.firstChild)){if((!this.isInsignificantTextNode(e3.firstChild)||!this.isBlockElement(e3.firstElementChild))&&(n3=this.getBlockAttributes(e3),e3.firstChild))return o3&&t3(n3,this.currentBlock.attributes)?this.appendStringWithAttributes("\n"):(this.currentBlock=this.appendBlockForAttributesWithElement(n3,e3),this.currentBlockElement=e3);}else if(this.currentBlockElement&&!o3&&!r3)return(s3=this.findParentBlockElement(e3))?this.appendBlockForElement(s3):(this.currentBlock=this.appendEmptyBlock(),this.currentBlockElement=null);},g.prototype.findParentBlockElement=function(t4){var e3;for(e3=t4.parentElement;e3&&e3!==this.containerElement;){if(this.isBlockElement(e3)&&f.call(this.blockElements,e3)>=0)return e3;e3=e3.parentElement;}return null;},g.prototype.processTextNode=function(t4){var e3,n3;return n3=t4.data,v(t4.parentNode)||(n3=c2(n3),R((e3=t4.previousSibling)!=null?e3.textContent:void 0)&&(n3=A(n3))),this.appendStringWithAttributes(n3,this.getTextAttributes(t4.parentNode));},g.prototype.processElement=function(t4){var e3,n3,i2,o3,r3;if(a2(t4))return e3=w(t4,"attachment"),Object.keys(e3).length&&(o3=this.getTextAttributes(t4),this.appendAttachmentWithAttributes(e3,o3),t4.innerHTML=""),this.processedElements.push(t4);switch(l(t4)){case"br":return this.isExtraBR(t4)||this.isBlockElement(t4.nextSibling)||this.appendStringWithAttributes("\n",this.getTextAttributes(t4)),this.processedElements.push(t4);case"img":e3={url:t4.getAttribute("src"),contentType:"image"},i2=b(t4);for(n3 in i2){r3=i2[n3],e3[n3]=r3;}return this.appendAttachmentWithAttributes(e3,this.getTextAttributes(t4)),this.processedElements.push(t4);case"tr":if(t4.parentNode.firstChild!==t4)return this.appendStringWithAttributes("\n");break;case"td":if(t4.parentNode.firstChild!==t4)return this.appendStringWithAttributes(" | ");}},g.prototype.appendBlockForAttributesWithElement=function(t4,e3){var n3;return this.blockElements.push(e3),n3=m(t4),this.blocks.push(n3),n3;},g.prototype.appendEmptyBlock=function(){return this.appendBlockForAttributesWithElement([],null);},g.prototype.appendStringWithAttributes=function(t4,e3){return this.appendPiece(S2(t4,e3));},g.prototype.appendAttachmentWithAttributes=function(t4,e3){return this.appendPiece(E(t4,e3));},g.prototype.appendPiece=function(t4){return this.blocks.length===0&&this.appendEmptyBlock(),this.blocks[this.blocks.length-1].text.push(t4);},g.prototype.appendStringToTextAtIndex=function(t4,e3){var n3,i2;return i2=this.blocks[e3].text,n3=i2[i2.length-1],(n3!=null?n3.type:void 0)==="string"?n3.string+=t4:i2.push(S2(t4));},g.prototype.prependStringToTextAtIndex=function(t4,e3){var n3,i2;return i2=this.blocks[e3].text,n3=i2[0],(n3!=null?n3.type:void 0)==="string"?n3.string=t4+n3.string:i2.unshift(S2(t4));},S2=function S2(t4,e3){var n3;return e3==null&&(e3={}),n3="string",t4=u(t4),{string:t4,attributes:e3,type:n3};},E=function E(t4,e3){var n3;return e3==null&&(e3={}),n3="attachment",{attachment:t4,attributes:e3,type:n3};},m=function m(t4){var e3;return t4==null&&(t4={}),e3=[],{text:e3,attributes:t4};},g.prototype.getTextAttributes=function(t4){var n3,i2,r3,s3,u2,c3,l2,h2,p3,d3,f2,g2;r3={},p3=e2.config.textAttributes;for(n3 in p3){if(u2=p3[n3],u2.tagName&&o2(t4,{matchingSelector:u2.tagName,untilNode:this.containerElement}))r3[n3]=true;else if(u2.parser){if(g2=u2.parser(t4)){for(i2=false,d3=this.findBlockElementAncestors(t4),c3=0,h2=d3.length;h2>c3;c3++){if(s3=d3[c3],u2.parser(s3)===g2){i2=true;break;}}i2||(r3[n3]=g2);}}else u2.styleProperty&&(g2=t4.style[u2.styleProperty])&&(r3[n3]=g2);}if(a2(t4)){f2=w(t4,"attributes");for(l2 in f2){g2=f2[l2],r3[l2]=g2;}}return r3;},g.prototype.getBlockAttributes=function(t4){var n3,i2,o3,r3;for(i2=[];t4&&t4!==this.containerElement;){r3=e2.config.blockAttributes;for(n3 in r3){o3=r3[n3],o3.parse!==false&&l(t4)===o3.tagName&&((typeof o3.test=="function"?o3.test(t4):void 0)||!o3.test)&&(i2.push(n3),o3.listAttribute&&i2.push(o3.listAttribute));}t4=t4.parentNode;}return i2.reverse();},g.prototype.findBlockElementAncestors=function(t4){var e3,n3;for(e3=[];t4&&t4!==this.containerElement;){n3=l(t4),f.call(r2(),n3)>=0&&e3.push(t4),t4=t4.parentNode;}return e3;},w=function w(t4,e3){try{return JSON.parse(t4.getAttribute("data-trix-"+e3));}catch(n3){return{};}},b=function b(t4){var e3,n3,i2;return i2=t4.getAttribute("width"),n3=t4.getAttribute("height"),e3={},i2&&(e3.width=parseInt(i2,10)),n3&&(e3.height=parseInt(n3,10)),e3;},g.prototype.isBlockElement=function(t4){var e3;if((t4!=null?t4.nodeType:void 0)===Node.ELEMENT_NODE&&!a2(t4)&&!o2(t4,{matchingSelector:"td",untilNode:this.containerElement}))return e3=l(t4),f.call(r2(),e3)>=0||window.getComputedStyle(t4).display==="block";},g.prototype.isInsignificantTextNode=function(t4){var e3,n3,i2;if((t4!=null?t4.nodeType:void 0)===Node.TEXT_NODE&&k(t4.data)&&(n3=t4.parentNode,i2=t4.previousSibling,e3=t4.nextSibling,(!C3(n3.previousSibling)||this.isBlockElement(n3.previousSibling))&&!v(n3)))return!i2||this.isBlockElement(i2)||!e3||this.isBlockElement(e3);},g.prototype.isExtraBR=function(t4){return l(t4)==="br"&&this.isBlockElement(t4.parentNode)&&t4.parentNode.lastChild===t4;},v=function v(t4){var e3;return e3=window.getComputedStyle(t4).whiteSpace,e3==="pre"||e3==="pre-wrap"||e3==="pre-line";},C3=function C3(t4){return t4&&!R(t4.textContent);},g.prototype.translateBlockElementMarginsToNewlines=function(){var t4,e3,n3,i2,o3,r3,s3,a3;for(e3=this.getMarginOfDefaultBlockElement(),s3=this.blocks,a3=[],i2=n3=0,o3=s3.length;o3>n3;i2=++n3){t4=s3[i2],(r3=this.getMarginOfBlockElementAtIndex(i2))&&(r3.top>2*e3.top&&this.prependStringToTextAtIndex("\n",i2),a3.push(r3.bottom>2*e3.bottom?this.appendStringToTextAtIndex("\n",i2):void 0));}return a3;},g.prototype.getMarginOfBlockElementAtIndex=function(t4){var e3,n3;return!(e3=this.blockElements[t4])||!e3.textContent||(n3=l(e3),f.call(r2(),n3)>=0||f.call(this.processedElements,e3)>=0)?void 0:y(e3);},g.prototype.getMarginOfDefaultBlockElement=function(){var t4;return t4=s2(e2.config.blockAttributes["default"].tagName),this.containerElement.appendChild(t4),y(t4);},y=function y(t4){var e3;return e3=window.getComputedStyle(t4),e3.display==="block"?{top:parseInt(e3.marginTop),bottom:parseInt(e3.marginBottom)}:void 0;},A=function A(t4){return t4.replace(RegExp("^"+n2.source+"+"),"");},k=function k(t4){return RegExp("^"+n2.source+"*$").test(t4);},R=function R(t4){return /\s$/.test(t4);},g;}(e2.BasicObject);}.call(this),function(){var t3,n2,i,o2,r2=function r2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){s2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},s2={}.hasOwnProperty,a2=[].slice,u=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;};t3=e2.arraysAreEqual,i=e2.normalizeRange,o2=e2.rangeIsCollapsed,n2=e2.getBlockConfig,e2.Document=function(s3){function c2(t4){t4==null&&(t4=[]),c2.__super__.constructor.apply(this,arguments),t4.length===0&&(t4=[new e2.Block()]),this.blockList=e2.SplittableList.box(t4);}var l;return r2(c2,s3),c2.fromJSON=function(t4){var n3,i2;return i2=function(){var i3,o3,r3;for(r3=[],i3=0,o3=t4.length;o3>i3;i3++){n3=t4[i3],r3.push(e2.Block.fromJSON(n3));}return r3;}(),new this(i2);},c2.fromHTML=function(t4,n3){return e2.HTMLParser.parse(t4,n3).getDocument();},c2.fromString=function(t4,n3){var i2;return i2=e2.Text.textForStringWithAttributes(t4,n3),new this([new e2.Block(i2)]);},c2.prototype.isEmpty=function(){var t4;return this.blockList.length===1&&(t4=this.getBlockAtIndex(0),t4.isEmpty()&&!t4.hasAttributes());},c2.prototype.copy=function(t4){var e3;return t4==null&&(t4={}),e3=t4.consolidateBlocks?this.blockList.consolidate().toArray():this.blockList.toArray(),new this.constructor(e3);},c2.prototype.copyUsingObjectsFromDocument=function(t4){var n3;return n3=new e2.ObjectMap(t4.getObjects()),this.copyUsingObjectMap(n3);},c2.prototype.copyUsingObjectMap=function(t4){var e3,n3,i2;return n3=function(){var n4,o3,r3,s4;for(r3=this.getBlocks(),s4=[],n4=0,o3=r3.length;o3>n4;n4++){e3=r3[n4],s4.push((i2=t4.find(e3))?i2:e3.copyUsingObjectMap(t4));}return s4;}.call(this),new this.constructor(n3);},c2.prototype.copyWithBaseBlockAttributes=function(t4){var e3,n3,i2;return t4==null&&(t4=[]),i2=function(){var i3,o3,r3,s4;for(r3=this.getBlocks(),s4=[],i3=0,o3=r3.length;o3>i3;i3++){n3=r3[i3],e3=t4.concat(n3.getAttributes()),s4.push(n3.copyWithAttributes(e3));}return s4;}.call(this),new this.constructor(i2);},c2.prototype.replaceBlock=function(t4,e3){var n3;return n3=this.blockList.indexOf(t4),n3===-1?this:new this.constructor(this.blockList.replaceObjectAtIndex(e3,n3));},c2.prototype.insertDocumentAtRange=function(t4,e3){var n3,r3,s4,a3,u2,c3,l2;return r3=t4.blockList,u2=(e3=i(e3))[0],c3=this.locationFromPosition(u2),s4=c3.index,a3=c3.offset,l2=this,n3=this.getBlockAtPosition(u2),o2(e3)&&n3.isEmpty()&&!n3.hasAttributes()?l2=new this.constructor(l2.blockList.removeObjectAtIndex(s4)):n3.getBlockBreakPosition()===a3&&u2++,l2=l2.removeTextAtRange(e3),new this.constructor(l2.blockList.insertSplittableListAtPosition(r3,u2));},c2.prototype.mergeDocumentAtRange=function(e3,n3){var o3,r3,s4,a3,u2,c3,l2,h,p2,d,f,g;return f=(n3=i(n3))[0],d=this.locationFromPosition(f),r3=this.getBlockAtIndex(d.index).getAttributes(),o3=e3.getBaseBlockAttributes(),g=r3.slice(-o3.length),t3(o3,g)?(l2=r3.slice(0,-o3.length),c3=e3.copyWithBaseBlockAttributes(l2)):c3=e3.copy({consolidateBlocks:true}).copyWithBaseBlockAttributes(r3),s4=c3.getBlockCount(),a3=c3.getBlockAtIndex(0),t3(r3,a3.getAttributes())?(u2=a3.getTextWithoutBlockBreak(),p2=this.insertTextAtRange(u2,n3),s4>1&&(c3=new this.constructor(c3.getBlocks().slice(1)),h=f+u2.getLength(),p2=p2.insertDocumentAtRange(c3,h))):p2=this.insertDocumentAtRange(c3,n3),p2;},c2.prototype.insertTextAtRange=function(t4,e3){var n3,o3,r3,s4,a3;return a3=(e3=i(e3))[0],s4=this.locationFromPosition(a3),o3=s4.index,r3=s4.offset,n3=this.removeTextAtRange(e3),new this.constructor(n3.blockList.editObjectAtIndex(o3,function(e4){return e4.copyWithText(e4.text.insertTextAtPosition(t4,r3));}));},c2.prototype.removeTextAtRange=function(t4){var e3,n3,r3,s4,a3,u2,c3,l2,h,p2,d,f,g,m,v,y,b,A,C3,x,w;return p2=t4=i(t4),l2=p2[0],A=p2[1],o2(t4)?this:(d=this.locationRangeFromRange(t4),u2=d[0],y=d[1],a3=u2.index,c3=u2.offset,s4=this.getBlockAtIndex(a3),v=y.index,b=y.offset,m=this.getBlockAtIndex(v),f=A-l2===1&&s4.getBlockBreakPosition()===c3&&m.getBlockBreakPosition()!==b&&m.text.getStringAtPosition(b)==="\n",f?r3=this.blockList.editObjectAtIndex(v,function(t5){return t5.copyWithText(t5.text.removeTextAtRange([b,b+1]));}):(h=s4.text.getTextAtRange([0,c3]),C3=m.text.getTextAtRange([b,m.getLength()]),x=h.appendText(C3),g=a3!==v&&c3===0,w=g&&s4.getAttributeLevel()>=m.getAttributeLevel(),n3=w?m.copyWithText(x):s4.copyWithText(x),e3=v+1-a3,r3=this.blockList.splice(a3,e3,n3)),new this.constructor(r3));},c2.prototype.moveTextFromRangeToPosition=function(t4,e3){var n3,o3,r3,s4,u2,c3,l2,h,p2,d;return c3=t4=i(t4),p2=c3[0],r3=c3[1],e3>=p2&&r3>=e3?this:(o3=this.getDocumentAtRange(t4),h=this.removeTextAtRange(t4),u2=e3>p2,u2&&(e3-=o3.getLength()),l2=o3.getBlocks(),s4=l2[0],n3=2<=l2.length?a2.call(l2,1):[],n3.length===0?(d=s4.getTextWithoutBlockBreak(),u2&&(e3+=1)):d=s4.text,h=h.insertTextAtRange(d,e3),n3.length===0?h:(o3=new this.constructor(n3),e3+=d.getLength(),h.insertDocumentAtRange(o3,e3)));},c2.prototype.addAttributeAtRange=function(t4,e3,i2){var o3;return o3=this.blockList,this.eachBlockAtRange(i2,function(i3,r3,s4){return o3=o3.editObjectAtIndex(s4,function(){return n2(t4)?i3.addAttribute(t4,e3):r3[0]===r3[1]?i3:i3.copyWithText(i3.text.addAttributeAtRange(t4,e3,r3));});}),new this.constructor(o3);},c2.prototype.addAttribute=function(t4,e3){var n3;return n3=this.blockList,this.eachBlock(function(i2,o3){return n3=n3.editObjectAtIndex(o3,function(){return i2.addAttribute(t4,e3);});}),new this.constructor(n3);},c2.prototype.removeAttributeAtRange=function(t4,e3){var i2;return i2=this.blockList,this.eachBlockAtRange(e3,function(e4,o3,r3){return n2(t4)?i2=i2.editObjectAtIndex(r3,function(){return e4.removeAttribute(t4);}):o3[0]!==o3[1]?i2=i2.editObjectAtIndex(r3,function(){return e4.copyWithText(e4.text.removeAttributeAtRange(t4,o3));}):void 0;}),new this.constructor(i2);},c2.prototype.updateAttributesForAttachment=function(t4,e3){var n3,i2,o3,r3;return o3=(i2=this.getRangeOfAttachment(e3))[0],n3=this.locationFromPosition(o3).index,r3=this.getTextAtIndex(n3),new this.constructor(this.blockList.editObjectAtIndex(n3,function(n4){return n4.copyWithText(r3.updateAttributesForAttachment(t4,e3));}));},c2.prototype.removeAttributeForAttachment=function(t4,e3){var n3;return n3=this.getRangeOfAttachment(e3),this.removeAttributeAtRange(t4,n3);},c2.prototype.insertBlockBreakAtRange=function(t4){var n3,o3,r3,s4;return s4=(t4=i(t4))[0],r3=this.locationFromPosition(s4).offset,o3=this.removeTextAtRange(t4),r3===0&&(n3=[new e2.Block()]),new this.constructor(o3.blockList.insertSplittableListAtPosition(new e2.SplittableList(n3),s4));},c2.prototype.applyBlockAttributeAtRange=function(t4,e3,i2){var o3,r3,s4,a3;return s4=this.expandRangeToLineBreaksAndSplitBlocks(i2),r3=s4.document,i2=s4.range,o3=n2(t4),o3.listAttribute?(r3=r3.removeLastListAttributeAtRange(i2,{exceptAttributeName:t4}),a3=r3.convertLineBreaksToBlockBreaksInRange(i2),r3=a3.document,i2=a3.range):r3=o3.exclusive?r3.removeBlockAttributesAtRange(i2):o3.terminal?r3.removeLastTerminalAttributeAtRange(i2):r3.consolidateBlocksAtRange(i2),r3.addAttributeAtRange(t4,e3,i2);},c2.prototype.removeLastListAttributeAtRange=function(t4,e3){var i2;return e3==null&&(e3={}),i2=this.blockList,this.eachBlockAtRange(t4,function(t5,o3,r3){var s4;if((s4=t5.getLastAttribute())&&n2(s4).listAttribute&&s4!==e3.exceptAttributeName)return i2=i2.editObjectAtIndex(r3,function(){return t5.removeAttribute(s4);});}),new this.constructor(i2);},c2.prototype.removeLastTerminalAttributeAtRange=function(t4){var e3;return e3=this.blockList,this.eachBlockAtRange(t4,function(t5,i2,o3){var r3;if((r3=t5.getLastAttribute())&&n2(r3).terminal)return e3=e3.editObjectAtIndex(o3,function(){return t5.removeAttribute(r3);});}),new this.constructor(e3);},c2.prototype.removeBlockAttributesAtRange=function(t4){var e3;return e3=this.blockList,this.eachBlockAtRange(t4,function(t5,n3,i2){return t5.hasAttributes()?e3=e3.editObjectAtIndex(i2,function(){return t5.copyWithoutAttributes();}):void 0;}),new this.constructor(e3);},c2.prototype.expandRangeToLineBreaksAndSplitBlocks=function(t4){var e3,n3,o3,r3,s4,a3,u2,c3,l2;return a3=t4=i(t4),l2=a3[0],r3=a3[1],c3=this.locationFromPosition(l2),o3=this.locationFromPosition(r3),e3=this,u2=e3.getBlockAtIndex(c3.index),(c3.offset=u2.findLineBreakInDirectionFromPosition("backward",c3.offset))!=null&&(s4=e3.positionFromLocation(c3),e3=e3.insertBlockBreakAtRange([s4,s4+1]),o3.index+=1,o3.offset-=e3.getBlockAtIndex(c3.index).getLength(),c3.index+=1),c3.offset=0,o3.offset===0&&o3.index>c3.index?(o3.index-=1,o3.offset=e3.getBlockAtIndex(o3.index).getBlockBreakPosition()):(n3=e3.getBlockAtIndex(o3.index),n3.text.getStringAtRange([o3.offset-1,o3.offset])==="\n"?o3.offset-=1:o3.offset=n3.findLineBreakInDirectionFromPosition("forward",o3.offset),o3.offset!==n3.getBlockBreakPosition()&&(s4=e3.positionFromLocation(o3),e3=e3.insertBlockBreakAtRange([s4,s4+1]))),l2=e3.positionFromLocation(c3),r3=e3.positionFromLocation(o3),t4=i([l2,r3]),{document:e3,range:t4};},c2.prototype.convertLineBreaksToBlockBreaksInRange=function(t4){var e3,n3,o3;return n3=(t4=i(t4))[0],o3=this.getStringAtRange(t4).slice(0,-1),e3=this,o3.replace(/.*?\n/g,function(t5){return n3+=t5.length,e3=e3.insertBlockBreakAtRange([n3-1,n3]);}),{document:e3,range:t4};},c2.prototype.consolidateBlocksAtRange=function(t4){var e3,n3,o3,r3,s4;return o3=t4=i(t4),s4=o3[0],n3=o3[1],r3=this.locationFromPosition(s4).index,e3=this.locationFromPosition(n3).index,new this.constructor(this.blockList.consolidateFromIndexToIndex(r3,e3));},c2.prototype.getDocumentAtRange=function(t4){var e3;return t4=i(t4),e3=this.blockList.getSplittableListInRange(t4).toArray(),new this.constructor(e3);},c2.prototype.getStringAtRange=function(t4){var e3,n3,o3;return o3=t4=i(t4),n3=o3[o3.length-1],n3!==this.getLength()&&(e3=-1),this.getDocumentAtRange(t4).toString().slice(0,e3);},c2.prototype.getBlockAtIndex=function(t4){return this.blockList.getObjectAtIndex(t4);},c2.prototype.getBlockAtPosition=function(t4){var e3;return e3=this.locationFromPosition(t4).index,this.getBlockAtIndex(e3);},c2.prototype.getTextAtIndex=function(t4){var e3;return(e3=this.getBlockAtIndex(t4))!=null?e3.text:void 0;},c2.prototype.getTextAtPosition=function(t4){var e3;return e3=this.locationFromPosition(t4).index,this.getTextAtIndex(e3);},c2.prototype.getPieceAtPosition=function(t4){var e3,n3,i2;return i2=this.locationFromPosition(t4),e3=i2.index,n3=i2.offset,this.getTextAtIndex(e3).getPieceAtPosition(n3);},c2.prototype.getCharacterAtPosition=function(t4){var e3,n3,i2;return i2=this.locationFromPosition(t4),e3=i2.index,n3=i2.offset,this.getTextAtIndex(e3).getStringAtRange([n3,n3+1]);},c2.prototype.getLength=function(){return this.blockList.getEndPosition();},c2.prototype.getBlocks=function(){return this.blockList.toArray();},c2.prototype.getBlockCount=function(){return this.blockList.length;},c2.prototype.getEditCount=function(){return this.editCount;},c2.prototype.eachBlock=function(t4){return this.blockList.eachObject(t4);},c2.prototype.eachBlockAtRange=function(t4,e3){var n3,o3,r3,s4,a3,u2,c3,l2,h,p2,d,f;if(u2=t4=i(t4),d=u2[0],r3=u2[1],p2=this.locationFromPosition(d),o3=this.locationFromPosition(r3),p2.index===o3.index)return n3=this.getBlockAtIndex(p2.index),f=[p2.offset,o3.offset],e3(n3,f,p2.index);for(h=[],a3=s4=c3=p2.index,l2=o3.index;l2>=c3?l2>=s4:s4>=l2;a3=l2>=c3?++s4:--s4){(n3=this.getBlockAtIndex(a3))?(f=function(){switch(a3){case p2.index:return[p2.offset,n3.text.getLength()];case o3.index:return[0,o3.offset];default:return[0,n3.text.getLength()];}}(),h.push(e3(n3,f,a3))):h.push(void 0);}return h;},c2.prototype.getCommonAttributesAtRange=function(t4){var n3,r3,s4;return r3=(t4=i(t4))[0],o2(t4)?this.getCommonAttributesAtPosition(r3):(s4=[],n3=[],this.eachBlockAtRange(t4,function(t5,e3){return e3[0]!==e3[1]?(s4.push(t5.text.getCommonAttributesAtRange(e3)),n3.push(l(t5))):void 0;}),e2.Hash.fromCommonAttributesOfObjects(s4).merge(e2.Hash.fromCommonAttributesOfObjects(n3)).toObject());},c2.prototype.getCommonAttributesAtPosition=function(t4){var n3,i2,o3,r3,s4,a3,c3,h,p2,d;if(p2=this.locationFromPosition(t4),s4=p2.index,h=p2.offset,o3=this.getBlockAtIndex(s4),!o3)return{};r3=l(o3),n3=o3.text.getAttributesAtPosition(h),i2=o3.text.getAttributesAtPosition(h-1),a3=function(){var t5,n4;t5=e2.config.textAttributes,n4=[];for(c3 in t5){d=t5[c3],d.inheritable&&n4.push(c3);}return n4;}();for(c3 in i2){d=i2[c3],(d===n3[c3]||u.call(a3,c3)>=0)&&(r3[c3]=d);}return r3;},c2.prototype.getRangeOfCommonAttributeAtPosition=function(t4,e3){var n3,o3,r3,s4,a3,u2,c3,l2,h;return a3=this.locationFromPosition(e3),r3=a3.index,s4=a3.offset,h=this.getTextAtIndex(r3),u2=h.getExpandedRangeForAttributeAtOffset(t4,s4),l2=u2[0],o3=u2[1],c3=this.positionFromLocation({index:r3,offset:l2}),n3=this.positionFromLocation({index:r3,offset:o3}),i([c3,n3]);},c2.prototype.getBaseBlockAttributes=function(){var t4,e3,n3,i2,o3,r3,s4;for(t4=this.getBlockAtIndex(0).getAttributes(),n3=i2=1,s4=this.getBlockCount();s4>=1?s4>i2:i2>s4;n3=s4>=1?++i2:--i2){e3=this.getBlockAtIndex(n3).getAttributes(),r3=Math.min(t4.length,e3.length),t4=function(){var n4,i3,s5;for(s5=[],o3=n4=0,i3=r3;(i3>=0?i3>n4:n4>i3)&&e3[o3]===t4[o3];o3=i3>=0?++n4:--n4){s5.push(e3[o3]);}return s5;}();}return t4;},l=function l(t4){var e3,n3;return n3={},(e3=t4.getLastAttribute())&&(n3[e3]=true),n3;},c2.prototype.getAttachmentById=function(t4){var e3,n3,i2,o3;for(o3=this.getAttachments(),n3=0,i2=o3.length;i2>n3;n3++){if(e3=o3[n3],e3.id===t4)return e3;}},c2.prototype.getAttachmentPieces=function(){var t4;return t4=[],this.blockList.eachObject(function(e3){var n3;return n3=e3.text,t4=t4.concat(n3.getAttachmentPieces());}),t4;},c2.prototype.getAttachments=function(){var t4,e3,n3,i2,o3;for(i2=this.getAttachmentPieces(),o3=[],t4=0,e3=i2.length;e3>t4;t4++){n3=i2[t4],o3.push(n3.attachment);}return o3;},c2.prototype.getRangeOfAttachment=function(t4){var e3,n3,o3,r3,s4,a3,u2;for(r3=0,s4=this.blockList.toArray(),n3=e3=0,o3=s4.length;o3>e3;n3=++e3){if(a3=s4[n3].text,u2=a3.getRangeOfAttachment(t4))return i([r3+u2[0],r3+u2[1]]);r3+=a3.getLength();}},c2.prototype.getLocationRangeOfAttachment=function(t4){var e3;return e3=this.getRangeOfAttachment(t4),this.locationRangeFromRange(e3);},c2.prototype.getAttachmentPieceForAttachment=function(t4){var e3,n3,i2,o3;for(o3=this.getAttachmentPieces(),e3=0,n3=o3.length;n3>e3;e3++){if(i2=o3[e3],i2.attachment===t4)return i2;}},c2.prototype.findRangesForBlockAttribute=function(t4){var e3,n3,i2,o3,r3,s4,a3;for(r3=0,s4=[],a3=this.getBlocks(),n3=0,i2=a3.length;i2>n3;n3++){e3=a3[n3],o3=e3.getLength(),e3.hasAttribute(t4)&&s4.push([r3,r3+o3]),r3+=o3;}return s4;},c2.prototype.findRangesForTextAttribute=function(t4,e3){var n3,i2,o3,r3,s4,a3,u2,c3,l2,h;for(h=(e3!=null?e3:{}).withValue,a3=0,u2=[],c3=[],r3=function r3(e4){return h!=null?e4.getAttribute(t4)===h:e4.hasAttribute(t4);},l2=this.getPieces(),n3=0,i2=l2.length;i2>n3;n3++){s4=l2[n3],o3=s4.getLength(),r3(s4)&&(u2[1]===a3?u2[1]=a3+o3:c3.push(u2=[a3,a3+o3])),a3+=o3;}return c3;},c2.prototype.locationFromPosition=function(t4){var e3,n3;return n3=this.blockList.findIndexAndOffsetAtPosition(Math.max(0,t4)),n3.index!=null?n3:(e3=this.getBlocks(),{index:e3.length-1,offset:e3[e3.length-1].getLength()});},c2.prototype.positionFromLocation=function(t4){return this.blockList.findPositionAtIndexAndOffset(t4.index,t4.offset);},c2.prototype.locationRangeFromPosition=function(t4){return i(this.locationFromPosition(t4));},c2.prototype.locationRangeFromRange=function(t4){var e3,n3,o3,r3;if(t4=i(t4))return r3=t4[0],n3=t4[1],o3=this.locationFromPosition(r3),e3=this.locationFromPosition(n3),i([o3,e3]);},c2.prototype.rangeFromLocationRange=function(t4){var e3,n3;return t4=i(t4),e3=this.positionFromLocation(t4[0]),o2(t4)||(n3=this.positionFromLocation(t4[1])),i([e3,n3]);},c2.prototype.isEqualTo=function(t4){return this.blockList.isEqualTo(t4!=null?t4.blockList:void 0);},c2.prototype.getTexts=function(){var t4,e3,n3,i2,o3;for(i2=this.getBlocks(),o3=[],e3=0,n3=i2.length;n3>e3;e3++){t4=i2[e3],o3.push(t4.text);}return o3;},c2.prototype.getPieces=function(){var t4,e3,n3,i2,o3;for(n3=[],i2=this.getTexts(),t4=0,e3=i2.length;e3>t4;t4++){o3=i2[t4],n3.push.apply(n3,o3.getPieces());}return n3;},c2.prototype.getObjects=function(){return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());},c2.prototype.toSerializableDocument=function(){var t4;return t4=[],this.blockList.eachObject(function(e3){return t4.push(e3.copyWithText(e3.text.toSerializableText()));}),new this.constructor(t4);},c2.prototype.toString=function(){return this.blockList.toString();},c2.prototype.toJSON=function(){return this.blockList.toJSON();},c2.prototype.toConsole=function(){var t4;return JSON.stringify(function(){var e3,n3,i2,o3;for(i2=this.blockList.toArray(),o3=[],e3=0,n3=i2.length;n3>e3;e3++){t4=i2[e3],o3.push(JSON.parse(t4.text.toConsole()));}return o3;}.call(this));},c2;}(e2.Object);}.call(this),function(){e2.LineBreakInsertion=function(){function t3(t4){var e3;this.composition=t4,this.document=this.composition.document,e3=this.composition.getSelectedRange(),this.startPosition=e3[0],this.endPosition=e3[1],this.startLocation=this.document.locationFromPosition(this.startPosition),this.endLocation=this.document.locationFromPosition(this.endPosition),this.block=this.document.getBlockAtIndex(this.endLocation.index),this.breaksOnReturn=this.block.breaksOnReturn(),this.previousCharacter=this.block.text.getStringAtPosition(this.endLocation.offset-1),this.nextCharacter=this.block.text.getStringAtPosition(this.endLocation.offset);}return t3.prototype.shouldInsertBlockBreak=function(){return this.block.hasAttributes()&&this.block.isListItem()&&!this.block.isEmpty()?this.startLocation.offset!==0:this.breaksOnReturn&&this.nextCharacter!=="\n";},t3.prototype.shouldBreakFormattedBlock=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&(this.breaksOnReturn&&this.nextCharacter==="\n"||this.previousCharacter==="\n");},t3.prototype.shouldDecreaseListLevel=function(){return this.block.hasAttributes()&&this.block.isListItem()&&this.block.isEmpty();},t3.prototype.shouldPrependListItem=function(){return this.block.isListItem()&&this.startLocation.offset===0&&!this.block.isEmpty();},t3.prototype.shouldRemoveLastBlockAttribute=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&this.block.isEmpty();},t3;}();}.call(this),function(){var t3,n2,i,o2,r2,s2,a2,u,c2,l,h=function h(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){p2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},p2={}.hasOwnProperty;s2=e2.normalizeRange,c2=e2.rangesAreEqual,u=e2.rangeIsCollapsed,a2=e2.objectsAreEqual,t3=e2.arrayStartsWith,l=e2.summarizeArrayChange,i=e2.getAllAttributeNames,o2=e2.getBlockConfig,r2=e2.getTextConfig,n2=e2.extend,e2.Composition=function(p3){function d(){this.document=new e2.Document(),this.attachments=[],this.currentAttributes={},this.revision=0;}var f;return h(d,p3),d.prototype.setDocument=function(t4){var e3;return t4.isEqualTo(this.document)?void 0:(this.document=t4,this.refreshAttachments(),this.revision++,(e3=this.delegate)!=null&&typeof e3.compositionDidChangeDocument=="function"?e3.compositionDidChangeDocument(t4):void 0);},d.prototype.getSnapshot=function(){return{document:this.document,selectedRange:this.getSelectedRange()};},d.prototype.loadSnapshot=function(t4){var n3,i2,o3,r3;return n3=t4.document,r3=t4.selectedRange,(i2=this.delegate)!=null&&typeof i2.compositionWillLoadSnapshot=="function"&&i2.compositionWillLoadSnapshot(),this.setDocument(n3!=null?n3:new e2.Document()),this.setSelection(r3!=null?r3:[0,0]),(o3=this.delegate)!=null&&typeof o3.compositionDidLoadSnapshot=="function"?o3.compositionDidLoadSnapshot():void 0;},d.prototype.insertText=function(t4,e3){var n3,i2,o3,r3;return r3=(e3!=null?e3:{updatePosition:true}).updatePosition,i2=this.getSelectedRange(),this.setDocument(this.document.insertTextAtRange(t4,i2)),o3=i2[0],n3=o3+t4.getLength(),r3&&this.setSelection(n3),this.notifyDelegateOfInsertionAtRange([o3,n3]);},d.prototype.insertBlock=function(t4){var n3;return t4==null&&(t4=new e2.Block()),n3=new e2.Document([t4]),this.insertDocument(n3);},d.prototype.insertDocument=function(t4){var n3,i2,o3;return t4==null&&(t4=new e2.Document()),i2=this.getSelectedRange(),this.setDocument(this.document.insertDocumentAtRange(t4,i2)),o3=i2[0],n3=o3+t4.getLength(),this.setSelection(n3),this.notifyDelegateOfInsertionAtRange([o3,n3]);},d.prototype.insertString=function(t4,n3){var i2,o3;return i2=this.getCurrentTextAttributes(),o3=e2.Text.textForStringWithAttributes(t4,i2),this.insertText(o3,n3);},d.prototype.insertBlockBreak=function(){var t4,e3,n3;return e3=this.getSelectedRange(),this.setDocument(this.document.insertBlockBreakAtRange(e3)),n3=e3[0],t4=n3+1,this.setSelection(t4),this.notifyDelegateOfInsertionAtRange([n3,t4]);},d.prototype.insertLineBreak=function(){var t4,n3;return n3=new e2.LineBreakInsertion(this),n3.shouldDecreaseListLevel()?(this.decreaseListLevel(),this.setSelection(n3.startPosition)):n3.shouldPrependListItem()?(t4=new e2.Document([n3.block.copyWithoutText()]),this.insertDocument(t4)):n3.shouldInsertBlockBreak()?this.insertBlockBreak():n3.shouldRemoveLastBlockAttribute()?this.removeLastBlockAttribute():n3.shouldBreakFormattedBlock()?this.breakFormattedBlock(n3):this.insertString("\n");},d.prototype.insertHTML=function(t4){var n3,i2,o3,r3;return n3=e2.Document.fromHTML(t4),o3=this.getSelectedRange(),this.setDocument(this.document.mergeDocumentAtRange(n3,o3)),r3=o3[0],i2=r3+n3.getLength()-1,this.setSelection(i2),this.notifyDelegateOfInsertionAtRange([r3,i2]);},d.prototype.replaceHTML=function(t4){var n3,i2,o3;return n3=e2.Document.fromHTML(t4).copyUsingObjectsFromDocument(this.document),i2=this.getLocationRange({strict:false}),o3=this.document.rangeFromLocationRange(i2),this.setDocument(n3),this.setSelection(o3);},d.prototype.insertFile=function(t4){return this.insertFiles([t4]);},d.prototype.insertFiles=function(t4){var n3,i2,o3,r3,s3,a3;for(i2=[],r3=0,s3=t4.length;s3>r3;r3++){o3=t4[r3],((a3=this.delegate)!=null?a3.compositionShouldAcceptFile(o3):void 0)&&(n3=e2.Attachment.attachmentForFile(o3),i2.push(n3));}return this.insertAttachments(i2);},d.prototype.insertAttachment=function(t4){return this.insertAttachments([t4]);},d.prototype.insertAttachments=function(t4){var n3,i2,o3,r3,s3,a3,u2,c3,l2;for(c3=new e2.Text(),r3=0,s3=t4.length;s3>r3;r3++){n3=t4[r3],l2=n3.getType(),a3=(u2=e2.config.attachments[l2])!=null?u2.presentation:void 0,o3=this.getCurrentTextAttributes(),a3&&(o3.presentation=a3),i2=e2.Text.textForAttachmentWithAttributes(n3,o3),c3=c3.appendText(i2);}return this.insertText(c3);},d.prototype.shouldManageDeletingInDirection=function(t4){var e3;if(e3=this.getLocationRange(),u(e3)){if(t4==="backward"&&e3[0].offset===0)return true;if(this.shouldManageMovingCursorInDirection(t4))return true;}else if(e3[0].index!==e3[1].index)return true;return false;},d.prototype.deleteInDirection=function(t4,e3){var n3,i2,o3,r3,s3,a3,c3,l2;return r3=(e3!=null?e3:{}).length,s3=this.getLocationRange(),a3=this.getSelectedRange(),c3=u(a3),c3?o3=t4==="backward"&&s3[0].offset===0:l2=s3[0].index!==s3[1].index,o3&&this.canDecreaseBlockAttributeLevel()&&(i2=this.getBlock(),i2.isListItem()?this.decreaseListLevel():this.decreaseBlockAttributeLevel(),this.setSelection(a3[0]),i2.isEmpty())?false:(c3&&(a3=this.getExpandedRangeInDirection(t4,{length:r3}),t4==="backward"&&(n3=this.getAttachmentAtRange(a3))),n3?(this.editAttachment(n3),false):(this.setDocument(this.document.removeTextAtRange(a3)),this.setSelection(a3[0]),o3||l2?false:void 0));},d.prototype.moveTextFromRange=function(t4){var e3;return e3=this.getSelectedRange()[0],this.setDocument(this.document.moveTextFromRangeToPosition(t4,e3)),this.setSelection(e3);},d.prototype.removeAttachment=function(t4){var e3;return(e3=this.document.getRangeOfAttachment(t4))?(this.stopEditingAttachment(),this.setDocument(this.document.removeTextAtRange(e3)),this.setSelection(e3[0])):void 0;},d.prototype.removeLastBlockAttribute=function(){var t4,e3,n3,i2;return n3=this.getSelectedRange(),i2=n3[0],e3=n3[1],t4=this.document.getBlockAtPosition(e3),this.removeCurrentAttribute(t4.getLastAttribute()),this.setSelection(i2);},f=" ",d.prototype.insertPlaceholder=function(){return this.placeholderPosition=this.getPosition(),this.insertString(f);},d.prototype.selectPlaceholder=function(){return this.placeholderPosition!=null?(this.setSelectedRange([this.placeholderPosition,this.placeholderPosition+f.length]),this.getSelectedRange()):void 0;},d.prototype.forgetPlaceholder=function(){return this.placeholderPosition=null;},d.prototype.hasCurrentAttribute=function(t4){var e3;return e3=this.currentAttributes[t4],e3!=null&&e3!==false;},d.prototype.toggleCurrentAttribute=function(t4){var e3;return(e3=!this.currentAttributes[t4])?this.setCurrentAttribute(t4,e3):this.removeCurrentAttribute(t4);},d.prototype.canSetCurrentAttribute=function(t4){return o2(t4)?this.canSetCurrentBlockAttribute(t4):this.canSetCurrentTextAttribute(t4);},d.prototype.canSetCurrentTextAttribute=function(){var t4,e3,n3,i2,o3;if(e3=this.getSelectedDocument()){for(o3=e3.getAttachments(),n3=0,i2=o3.length;i2>n3;n3++){if(t4=o3[n3],!t4.hasContent())return false;}return true;}},d.prototype.canSetCurrentBlockAttribute=function(){var t4;if(t4=this.getBlock())return!t4.isTerminalBlock();},d.prototype.setCurrentAttribute=function(t4,e3){return o2(t4)?this.setBlockAttribute(t4,e3):(this.setTextAttribute(t4,e3),this.currentAttributes[t4]=e3,this.notifyDelegateOfCurrentAttributesChange());},d.prototype.setTextAttribute=function(t4,n3){var i2,o3,r3,s3;if(o3=this.getSelectedRange())return r3=o3[0],i2=o3[1],r3!==i2?this.setDocument(this.document.addAttributeAtRange(t4,n3,o3)):t4==="href"?(s3=e2.Text.textForStringWithAttributes(n3,{href:n3}),this.insertText(s3)):void 0;},d.prototype.setBlockAttribute=function(t4,e3){var n3,i2;if(i2=this.getSelectedRange())return this.canSetCurrentAttribute(t4)?(n3=this.getBlock(),this.setDocument(this.document.applyBlockAttributeAtRange(t4,e3,i2)),this.setSelection(i2)):void 0;},d.prototype.removeCurrentAttribute=function(t4){return o2(t4)?(this.removeBlockAttribute(t4),this.updateCurrentAttributes()):(this.removeTextAttribute(t4),delete this.currentAttributes[t4],this.notifyDelegateOfCurrentAttributesChange());},d.prototype.removeTextAttribute=function(t4){var e3;if(e3=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t4,e3));},d.prototype.removeBlockAttribute=function(t4){var e3;if(e3=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t4,e3));},d.prototype.canDecreaseNestingLevel=function(){var t4;return((t4=this.getBlock())!=null?t4.getNestingLevel():void 0)>0;},d.prototype.canIncreaseNestingLevel=function(){var e3,n3,i2;if(e3=this.getBlock())return((i2=o2(e3.getLastNestableAttribute()))!=null?i2.listAttribute:0)?(n3=this.getPreviousBlock())?t3(n3.getListItemAttributes(),e3.getListItemAttributes()):void 0:e3.getNestingLevel()>0;},d.prototype.decreaseNestingLevel=function(){var t4;if(t4=this.getBlock())return this.setDocument(this.document.replaceBlock(t4,t4.decreaseNestingLevel()));},d.prototype.increaseNestingLevel=function(){var t4;if(t4=this.getBlock())return this.setDocument(this.document.replaceBlock(t4,t4.increaseNestingLevel()));},d.prototype.canDecreaseBlockAttributeLevel=function(){var t4;return((t4=this.getBlock())!=null?t4.getAttributeLevel():void 0)>0;},d.prototype.decreaseBlockAttributeLevel=function(){var t4,e3;return(t4=(e3=this.getBlock())!=null?e3.getLastAttribute():void 0)?this.removeCurrentAttribute(t4):void 0;},d.prototype.decreaseListLevel=function(){var t4,e3,n3,i2,o3,r3;for(r3=this.getSelectedRange()[0],o3=this.document.locationFromPosition(r3).index,n3=o3,t4=this.getBlock().getAttributeLevel();(e3=this.document.getBlockAtIndex(n3+1))&&e3.isListItem()&&e3.getAttributeLevel()>t4;){n3++;}return r3=this.document.positionFromLocation({index:o3,offset:0}),i2=this.document.positionFromLocation({index:n3,offset:0}),this.setDocument(this.document.removeLastListAttributeAtRange([r3,i2]));},d.prototype.updateCurrentAttributes=function(){var t4,e3,n3,o3,r3,s3;if(s3=this.getSelectedRange({ignoreLock:true})){for(e3=this.document.getCommonAttributesAtRange(s3),r3=i(),n3=0,o3=r3.length;o3>n3;n3++){t4=r3[n3],e3[t4]||this.canSetCurrentAttribute(t4)||(e3[t4]=false);}if(!a2(e3,this.currentAttributes))return this.currentAttributes=e3,this.notifyDelegateOfCurrentAttributesChange();}},d.prototype.getCurrentAttributes=function(){return n2.call({},this.currentAttributes);},d.prototype.getCurrentTextAttributes=function(){var t4,e3,n3,i2;t4={},n3=this.currentAttributes;for(e3 in n3){i2=n3[e3],i2!==false&&r2(e3)&&(t4[e3]=i2);}return t4;},d.prototype.freezeSelection=function(){return this.setCurrentAttribute("frozen",true);},d.prototype.thawSelection=function(){return this.removeCurrentAttribute("frozen");},d.prototype.hasFrozenSelection=function(){return this.hasCurrentAttribute("frozen");},d.proxyMethod("getSelectionManager().getPointRange"),d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"),d.proxyMethod("getSelectionManager().locationIsCursorTarget"),d.proxyMethod("getSelectionManager().selectionIsExpanded"),d.proxyMethod("delegate?.getSelectionManager"),d.prototype.setSelection=function(t4){var e3,n3;return e3=this.document.locationRangeFromRange(t4),(n3=this.delegate)!=null?n3.compositionDidRequestChangingSelectionToLocationRange(e3):void 0;},d.prototype.getSelectedRange=function(){var t4;return(t4=this.getLocationRange())?this.document.rangeFromLocationRange(t4):void 0;},d.prototype.setSelectedRange=function(t4){var e3;return e3=this.document.locationRangeFromRange(t4),this.getSelectionManager().setLocationRange(e3);},d.prototype.getPosition=function(){var t4;return(t4=this.getLocationRange())?this.document.positionFromLocation(t4[0]):void 0;},d.prototype.getLocationRange=function(t4){var e3,n3;return(e3=(n3=this.targetLocationRange)!=null?n3:this.getSelectionManager().getLocationRange(t4))!=null?e3:s2({index:0,offset:0});},d.prototype.withTargetLocationRange=function(t4,e3){var n3;this.targetLocationRange=t4;try{n3=e3();}finally{this.targetLocationRange=null;}return n3;},d.prototype.withTargetRange=function(t4,e3){var n3;return n3=this.document.locationRangeFromRange(t4),this.withTargetLocationRange(n3,e3);},d.prototype.withTargetDOMRange=function(t4,e3){var n3;return n3=this.createLocationRangeFromDOMRange(t4,{strict:false}),this.withTargetLocationRange(n3,e3);},d.prototype.getExpandedRangeInDirection=function(t4,e3){var n3,i2,o3,r3;return i2=(e3!=null?e3:{}).length,o3=this.getSelectedRange(),r3=o3[0],n3=o3[1],t4==="backward"?i2?r3-=i2:r3=this.translateUTF16PositionFromOffset(r3,-1):i2?n3+=i2:n3=this.translateUTF16PositionFromOffset(n3,1),s2([r3,n3]);},d.prototype.shouldManageMovingCursorInDirection=function(t4){var e3;return this.editingAttachment?true:(e3=this.getExpandedRangeInDirection(t4),this.getAttachmentAtRange(e3)!=null);},d.prototype.moveCursorInDirection=function(t4){var e3,n3,i2,o3;return this.editingAttachment?i2=this.document.getRangeOfAttachment(this.editingAttachment):(o3=this.getSelectedRange(),i2=this.getExpandedRangeInDirection(t4),n3=!c2(o3,i2)),this.setSelectedRange(t4==="backward"?i2[0]:i2[1]),n3&&(e3=this.getAttachmentAtRange(i2))?this.editAttachment(e3):void 0;},d.prototype.expandSelectionInDirection=function(t4,e3){var n3,i2;return n3=(e3!=null?e3:{}).length,i2=this.getExpandedRangeInDirection(t4,{length:n3}),this.setSelectedRange(i2);},d.prototype.expandSelectionForEditing=function(){return this.hasCurrentAttribute("href")?this.expandSelectionAroundCommonAttribute("href"):void 0;},d.prototype.expandSelectionAroundCommonAttribute=function(t4){var e3,n3;return e3=this.getPosition(),n3=this.document.getRangeOfCommonAttributeAtPosition(t4,e3),this.setSelectedRange(n3);},d.prototype.selectionContainsAttachments=function(){var t4;return((t4=this.getSelectedAttachments())!=null?t4.length:void 0)>0;},d.prototype.selectionIsInCursorTarget=function(){return this.editingAttachment||this.positionIsCursorTarget(this.getPosition());},d.prototype.positionIsCursorTarget=function(t4){var e3;return(e3=this.document.locationFromPosition(t4))?this.locationIsCursorTarget(e3):void 0;},d.prototype.positionIsBlockBreak=function(t4){var e3;return(e3=this.document.getPieceAtPosition(t4))!=null?e3.isBlockBreak():void 0;},d.prototype.getSelectedDocument=function(){var t4;return(t4=this.getSelectedRange())?this.document.getDocumentAtRange(t4):void 0;},d.prototype.getSelectedAttachments=function(){var t4;return(t4=this.getSelectedDocument())!=null?t4.getAttachments():void 0;},d.prototype.getAttachments=function(){return this.attachments.slice(0);},d.prototype.refreshAttachments=function(){var t4,e3,n3,i2,o3,r3,s3,a3,u2,c3,h2,p4;for(n3=this.document.getAttachments(),a3=l(this.attachments,n3),t4=a3.added,h2=a3.removed,this.attachments=n3,i2=0,r3=h2.length;r3>i2;i2++){e3=h2[i2],e3.delegate=null,(u2=this.delegate)!=null&&typeof u2.compositionDidRemoveAttachment=="function"&&u2.compositionDidRemoveAttachment(e3);}for(p4=[],o3=0,s3=t4.length;s3>o3;o3++){e3=t4[o3],e3.delegate=this,p4.push((c3=this.delegate)!=null&&typeof c3.compositionDidAddAttachment=="function"?c3.compositionDidAddAttachment(e3):void 0);}return p4;},d.prototype.attachmentDidChangeAttributes=function(t4){var e3;return this.revision++,(e3=this.delegate)!=null&&typeof e3.compositionDidEditAttachment=="function"?e3.compositionDidEditAttachment(t4):void 0;},d.prototype.attachmentDidChangePreviewURL=function(t4){var e3;return this.revision++,(e3=this.delegate)!=null&&typeof e3.compositionDidChangeAttachmentPreviewURL=="function"?e3.compositionDidChangeAttachmentPreviewURL(t4):void 0;},d.prototype.editAttachment=function(t4,e3){var n3;if(t4!==this.editingAttachment)return this.stopEditingAttachment(),this.editingAttachment=t4,(n3=this.delegate)!=null&&typeof n3.compositionDidStartEditingAttachment=="function"?n3.compositionDidStartEditingAttachment(this.editingAttachment,e3):void 0;},d.prototype.stopEditingAttachment=function(){var t4;if(this.editingAttachment)return(t4=this.delegate)!=null&&typeof t4.compositionDidStopEditingAttachment=="function"&&t4.compositionDidStopEditingAttachment(this.editingAttachment),this.editingAttachment=null;},d.prototype.updateAttributesForAttachment=function(t4,e3){return this.setDocument(this.document.updateAttributesForAttachment(t4,e3));},d.prototype.removeAttributeForAttachment=function(t4,e3){return this.setDocument(this.document.removeAttributeForAttachment(t4,e3));},d.prototype.breakFormattedBlock=function(t4){var n3,i2,o3,r3,s3;return i2=t4.document,n3=t4.block,r3=t4.startPosition,s3=[r3-1,r3],n3.getBlockBreakPosition()===t4.startLocation.offset?(n3.breaksOnReturn()&&t4.nextCharacter==="\n"?r3+=1:i2=i2.removeTextAtRange(s3),s3=[r3,r3]):t4.nextCharacter==="\n"?t4.previousCharacter==="\n"?s3=[r3-1,r3+1]:(s3=[r3,r3+1],r3+=1):t4.startLocation.offset-1!==0&&(r3+=1),o3=new e2.Document([n3.removeLastAttribute().copyWithoutText()]),this.setDocument(i2.insertDocumentAtRange(o3,s3)),this.setSelection(r3);},d.prototype.getPreviousBlock=function(){var t4,e3;return(e3=this.getLocationRange())&&(t4=e3[0].index,t4>0)?this.document.getBlockAtIndex(t4-1):void 0;},d.prototype.getBlock=function(){var t4;return(t4=this.getLocationRange())?this.document.getBlockAtIndex(t4[0].index):void 0;},d.prototype.getAttachmentAtRange=function(t4){var n3;return n3=this.document.getDocumentAtRange(t4),n3.toString()===e2.OBJECT_REPLACEMENT_CHARACTER+"\n"?n3.getAttachments()[0]:void 0;},d.prototype.notifyDelegateOfCurrentAttributesChange=function(){var t4;return(t4=this.delegate)!=null&&typeof t4.compositionDidChangeCurrentAttributes=="function"?t4.compositionDidChangeCurrentAttributes(this.currentAttributes):void 0;},d.prototype.notifyDelegateOfInsertionAtRange=function(t4){var e3;return(e3=this.delegate)!=null&&typeof e3.compositionDidPerformInsertionAtRange=="function"?e3.compositionDidPerformInsertionAtRange(t4):void 0;},d.prototype.translateUTF16PositionFromOffset=function(t4,e3){var n3,i2;return i2=this.document.toUTF16String(),n3=i2.offsetFromUCS2Offset(t4),i2.offsetToUCS2Offset(n3+e3);},d;}(e2.BasicObject);}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.UndoManager=function(e3){function n3(t4){this.composition=t4,this.undoEntries=[],this.redoEntries=[];}var i;return t3(n3,e3),n3.prototype.recordUndoEntry=function(t4,e4){var n4,o2,r2,s2,a2;return s2=e4!=null?e4:{},o2=s2.context,n4=s2.consolidatable,r2=this.undoEntries.slice(-1)[0],n4&&i(r2,t4,o2)?void 0:(a2=this.createEntry({description:t4,context:o2}),this.undoEntries.push(a2),this.redoEntries=[]);},n3.prototype.undo=function(){var t4,e4;return(e4=this.undoEntries.pop())?(t4=this.createEntry(e4),this.redoEntries.push(t4),this.composition.loadSnapshot(e4.snapshot)):void 0;},n3.prototype.redo=function(){var t4,e4;return(t4=this.redoEntries.pop())?(e4=this.createEntry(t4),this.undoEntries.push(e4),this.composition.loadSnapshot(t4.snapshot)):void 0;},n3.prototype.canUndo=function(){return this.undoEntries.length>0;},n3.prototype.canRedo=function(){return this.redoEntries.length>0;},n3.prototype.createEntry=function(t4){var e4,n4,i2;return i2=t4!=null?t4:{},n4=i2.description,e4=i2.context,{description:n4!=null?n4.toString():void 0,context:JSON.stringify(e4),snapshot:this.composition.getSnapshot()};},i=function i(t4,e4,n4){return(t4!=null?t4.description:void 0)===(e4!=null?e4.toString():void 0)&&(t4!=null?t4.context:void 0)===JSON.stringify(n4);},n3;}(e2.BasicObject);}.call(this),function(){var t3;e2.attachmentGalleryFilter=function(e3){var n2;return n2=new t3(e3),n2.perform(),n2.getSnapshot();},t3=function(){function t4(t5){this.document=t5.document,this.selectedRange=t5.selectedRange;}var e3,n2,i;return e3="attachmentGallery",n2="presentation",i="gallery",t4.prototype.perform=function(){return this.removeBlockAttribute(),this.applyBlockAttribute();},t4.prototype.getSnapshot=function(){return{document:this.document,selectedRange:this.selectedRange};},t4.prototype.removeBlockAttribute=function(){var t5,n3,i2,o2,r2;for(o2=this.findRangesOfBlocks(),r2=[],t5=0,n3=o2.length;n3>t5;t5++){i2=o2[t5],r2.push(this.document=this.document.removeAttributeAtRange(e3,i2));}return r2;},t4.prototype.applyBlockAttribute=function(){var t5,n3,i2,o2,r2,s2;for(i2=0,r2=this.findRangesOfPieces(),s2=[],t5=0,n3=r2.length;n3>t5;t5++){o2=r2[t5],o2[1]-o2[0]>1&&(o2[0]+=i2,o2[1]+=i2,this.document.getCharacterAtPosition(o2[1])!=="\n"&&(this.document=this.document.insertBlockBreakAtRange(o2[1]),o2[1]<this.selectedRange[1]&&this.moveSelectedRangeForward(),o2[1]++,i2++),o2[0]!==0&&this.document.getCharacterAtPosition(o2[0]-1)!=="\n"&&(this.document=this.document.insertBlockBreakAtRange(o2[0]),o2[0]<this.selectedRange[0]&&this.moveSelectedRangeForward(),o2[0]++,i2++),s2.push(this.document=this.document.applyBlockAttributeAtRange(e3,true,o2)));}return s2;},t4.prototype.findRangesOfBlocks=function(){return this.document.findRangesForBlockAttribute(e3);},t4.prototype.findRangesOfPieces=function(){return this.document.findRangesForTextAttribute(n2,{withValue:i});},t4.prototype.moveSelectedRangeForward=function(){return this.selectedRange[0]+=1,this.selectedRange[1]+=1;},t4;}();}.call(this),function(){var t3=function t3(t4,e3){return function(){return t4.apply(e3,arguments);};};e2.Editor=function(){function n2(n3,o2,r2){this.composition=n3,this.selectionManager=o2,this.element=r2,this.insertFiles=t3(this.insertFiles,this),this.undoManager=new e2.UndoManager(this.composition),this.filters=i.slice(0);}var i;return i=[e2.attachmentGalleryFilter],n2.prototype.loadDocument=function(t4){return this.loadSnapshot({document:t4,selectedRange:[0,0]});},n2.prototype.loadHTML=function(t4){return t4==null&&(t4=""),this.loadDocument(e2.Document.fromHTML(t4,{referenceElement:this.element}));},n2.prototype.loadJSON=function(t4){var n3,i2;return n3=t4.document,i2=t4.selectedRange,n3=e2.Document.fromJSON(n3),this.loadSnapshot({document:n3,selectedRange:i2});},n2.prototype.loadSnapshot=function(t4){return this.undoManager=new e2.UndoManager(this.composition),this.composition.loadSnapshot(t4);},n2.prototype.getDocument=function(){return this.composition.document;},n2.prototype.getSelectedDocument=function(){return this.composition.getSelectedDocument();},n2.prototype.getSnapshot=function(){return this.composition.getSnapshot();},n2.prototype.toJSON=function(){return this.getSnapshot();},n2.prototype.deleteInDirection=function(t4){return this.composition.deleteInDirection(t4);},n2.prototype.insertAttachment=function(t4){return this.composition.insertAttachment(t4);},n2.prototype.insertAttachments=function(t4){return this.composition.insertAttachments(t4);},n2.prototype.insertDocument=function(t4){return this.composition.insertDocument(t4);},n2.prototype.insertFile=function(t4){return this.composition.insertFile(t4);},n2.prototype.insertFiles=function(t4){return this.composition.insertFiles(t4);},n2.prototype.insertHTML=function(t4){return this.composition.insertHTML(t4);},n2.prototype.insertString=function(t4){return this.composition.insertString(t4);},n2.prototype.insertText=function(t4){return this.composition.insertText(t4);},n2.prototype.insertLineBreak=function(){return this.composition.insertLineBreak();},n2.prototype.getSelectedRange=function(){return this.composition.getSelectedRange();},n2.prototype.getPosition=function(){return this.composition.getPosition();},n2.prototype.getClientRectAtPosition=function(t4){var e3;return e3=this.getDocument().locationRangeFromRange([t4,t4+1]),this.selectionManager.getClientRectAtLocationRange(e3);},n2.prototype.expandSelectionInDirection=function(t4){return this.composition.expandSelectionInDirection(t4);},n2.prototype.moveCursorInDirection=function(t4){return this.composition.moveCursorInDirection(t4);},n2.prototype.setSelectedRange=function(t4){return this.composition.setSelectedRange(t4);},n2.prototype.activateAttribute=function(t4,e3){return e3==null&&(e3=true),this.composition.setCurrentAttribute(t4,e3);},n2.prototype.attributeIsActive=function(t4){return this.composition.hasCurrentAttribute(t4);},n2.prototype.canActivateAttribute=function(t4){return this.composition.canSetCurrentAttribute(t4);},n2.prototype.deactivateAttribute=function(t4){return this.composition.removeCurrentAttribute(t4);},n2.prototype.canDecreaseNestingLevel=function(){return this.composition.canDecreaseNestingLevel();},n2.prototype.canIncreaseNestingLevel=function(){return this.composition.canIncreaseNestingLevel();},n2.prototype.decreaseNestingLevel=function(){return this.canDecreaseNestingLevel()?this.composition.decreaseNestingLevel():void 0;},n2.prototype.increaseNestingLevel=function(){return this.canIncreaseNestingLevel()?this.composition.increaseNestingLevel():void 0;},n2.prototype.canRedo=function(){return this.undoManager.canRedo();},n2.prototype.canUndo=function(){return this.undoManager.canUndo();},n2.prototype.recordUndoEntry=function(t4,e3){var n3,i2,o2;return o2=e3!=null?e3:{},i2=o2.context,n3=o2.consolidatable,this.undoManager.recordUndoEntry(t4,{context:i2,consolidatable:n3});},n2.prototype.redo=function(){return this.canRedo()?this.undoManager.redo():void 0;},n2.prototype.undo=function(){return this.canUndo()?this.undoManager.undo():void 0;},n2;}();}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.ManagedAttachment=function(e3){function n3(t4,e4){var n4;this.attachmentManager=t4,this.attachment=e4,n4=this.attachment,this.id=n4.id,this.file=n4.file;}return t3(n3,e3),n3.prototype.remove=function(){return this.attachmentManager.requestRemovalOfAttachment(this.attachment);},n3.proxyMethod("attachment.getAttribute"),n3.proxyMethod("attachment.hasAttribute"),n3.proxyMethod("attachment.setAttribute"),n3.proxyMethod("attachment.getAttributes"),n3.proxyMethod("attachment.setAttributes"),n3.proxyMethod("attachment.isPending"),n3.proxyMethod("attachment.isPreviewable"),n3.proxyMethod("attachment.getURL"),n3.proxyMethod("attachment.getHref"),n3.proxyMethod("attachment.getFilename"),n3.proxyMethod("attachment.getFilesize"),n3.proxyMethod("attachment.getFormattedFilesize"),n3.proxyMethod("attachment.getExtension"),n3.proxyMethod("attachment.getContentType"),n3.proxyMethod("attachment.getFile"),n3.proxyMethod("attachment.setFile"),n3.proxyMethod("attachment.releaseFile"),n3.proxyMethod("attachment.getUploadProgress"),n3.proxyMethod("attachment.setUploadProgress"),n3;}(e2.BasicObject);}.call(this),function(){var t3=function t3(t4,e3){function i(){this.constructor=t4;}for(var o2 in e3){n2.call(e3,o2)&&(t4[o2]=e3[o2]);}return i.prototype=e3.prototype,t4.prototype=new i(),t4.__super__=e3.prototype,t4;},n2={}.hasOwnProperty;e2.AttachmentManager=function(n3){function i(t4){var e3,n4,i2;for(t4==null&&(t4=[]),this.managedAttachments={},n4=0,i2=t4.length;i2>n4;n4++){e3=t4[n4],this.manageAttachment(e3);}}return t3(i,n3),i.prototype.getAttachments=function(){var t4,e3,n4,i2;n4=this.managedAttachments,i2=[];for(e3 in n4){t4=n4[e3],i2.push(t4);}return i2;},i.prototype.manageAttachment=function(t4){var n4,i2;return(n4=this.managedAttachments)[i2=t4.id]!=null?n4[i2]:n4[i2]=new e2.ManagedAttachment(this,t4);},i.prototype.attachmentIsManaged=function(t4){return t4.id in this.managedAttachments;},i.prototype.requestRemovalOfAttachment=function(t4){var e3;return this.attachmentIsManaged(t4)&&(e3=this.delegate)!=null&&typeof e3.attachmentManagerDidRequestRemovalOfAttachment=="function"?e3.attachmentManagerDidRequestRemovalOfAttachment(t4):void 0;},i.prototype.unmanageAttachment=function(t4){var e3;return e3=this.managedAttachments[t4.id],delete this.managedAttachments[t4.id],e3;},i;}(e2.BasicObject);}.call(this),function(){var t3,n2,i,o2,r2,s2,a2,u,c2,l,h;t3=e2.elementContainsNode,n2=e2.findChildIndexOfNode,r2=e2.nodeIsBlockStart,s2=e2.nodeIsBlockStartComment,o2=e2.nodeIsBlockContainer,a2=e2.nodeIsCursorTarget,u=e2.nodeIsEmptyTextNode,c2=e2.nodeIsTextNode,i=e2.nodeIsAttachmentElement,l=e2.tagName,h=e2.walkTree,e2.LocationMapper=function(){function e3(t4){this.element=t4;}var p2,d,f,g;return e3.prototype.findLocationFromContainerAndOffset=function(e4,i2,o3){var s3,u2,l2,p3,g2,m,v;for(m=(o3!=null?o3:{strict:true}).strict,u2=0,l2=false,p3={index:0,offset:0},(s3=this.findAttachmentElementParentForNode(e4))&&(e4=s3.parentNode,i2=n2(s3)),v=h(this.element,{usingFilter:f});v.nextNode();){if(g2=v.currentNode,g2===e4&&c2(e4)){a2(g2)||(p3.offset+=i2);break;}if(g2.parentNode===e4){if(u2++===i2)break;}else if(!t3(e4,g2)&&u2>0)break;r2(g2,{strict:m})?(l2&&p3.index++,p3.offset=0,l2=true):p3.offset+=d(g2);}return p3;},e3.prototype.findContainerAndOffsetFromLocation=function(t4){var e4,i2,s3,u2,l2;if(t4.index===0&&t4.offset===0){for(e4=this.element,u2=0;e4.firstChild;){if(e4=e4.firstChild,o2(e4)){u2=1;break;}}return[e4,u2];}if(l2=this.findNodeAndOffsetFromLocation(t4),i2=l2[0],s3=l2[1],i2){if(c2(i2))d(i2)===0?(e4=i2.parentNode.parentNode,u2=n2(i2.parentNode),a2(i2,{name:"right"})&&u2++):(e4=i2,u2=t4.offset-s3);else{if(e4=i2.parentNode,!r2(i2.previousSibling)&&!o2(e4))for(;i2===e4.lastChild&&(i2=e4,e4=e4.parentNode,!o2(e4));){;}u2=n2(i2),t4.offset!==0&&u2++;}return[e4,u2];}},e3.prototype.findNodeAndOffsetFromLocation=function(t4){var e4,n3,i2,o3,r3,s3,u2,l2;for(u2=0,l2=this.getSignificantNodesForIndex(t4.index),n3=0,i2=l2.length;i2>n3;n3++){if(e4=l2[n3],o3=d(e4),t4.offset<=u2+o3)if(c2(e4)){if(r3=e4,s3=u2,t4.offset===s3&&a2(r3))break;}else r3||(r3=e4,s3=u2);if(u2+=o3,u2>t4.offset)break;}return[r3,s3];},e3.prototype.findAttachmentElementParentForNode=function(t4){for(;t4&&t4!==this.element;){if(i(t4))return t4;t4=t4.parentNode;}},e3.prototype.getSignificantNodesForIndex=function(t4){var e4,n3,i2,o3,r3;for(i2=[],r3=h(this.element,{usingFilter:p2}),o3=false;r3.nextNode();){if(n3=r3.currentNode,s2(n3)){if(typeof e4!="undefined"&&e4!==null?e4++:e4=0,e4===t4)o3=true;else if(o3)break;}else o3&&i2.push(n3);}return i2;},d=function d(t4){var e4;return t4.nodeType===Node.TEXT_NODE?a2(t4)?0:(e4=t4.textContent,e4.length):l(t4)==="br"||i(t4)?1:0;},p2=function p2(t4){return g(t4)===NodeFilter.FILTER_ACCEPT?f(t4):NodeFilter.FILTER_REJECT;},g=function g(t4){return u(t4)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;},f=function f(t4){return i(t4.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;},e3;}();}.call(this),function(){var t3,n2,i=[].slice;t3=e2.getDOMRange,n2=e2.setDOMRange,e2.PointMapper=function(){function e3(){}return e3.prototype.createDOMRangeFromPoint=function(e4){var i2,o2,r2,s2,a2,u,c2,l;if(c2=e4.x,l=e4.y,document.caretPositionFromPoint)return a2=document.caretPositionFromPoint(c2,l),r2=a2.offsetNode,o2=a2.offset,i2=document.createRange(),i2.setStart(r2,o2),i2;if(document.caretRangeFromPoint)return document.caretRangeFromPoint(c2,l);if(document.body.createTextRange){s2=t3();try{u=document.body.createTextRange(),u.moveToPoint(c2,l),u.select();}catch(h){}return i2=t3(),n2(s2),i2;}},e3.prototype.getClientRectsForDOMRange=function(t4){var e4,n3,o2;return n3=i.call(t4.getClientRects()),o2=n3[0],e4=n3[n3.length-1],[o2,e4];},e3;}();}.call(this),function(){var t3,n2=function n2(t4,e3){return function(){return t4.apply(e3,arguments);};},i=function i(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){o2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},o2={}.hasOwnProperty,r2=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;};t3=e2.getDOMRange,e2.SelectionChangeObserver=function(e3){function o3(){this.run=n2(this.run,this),this.update=n2(this.update,this),this.selectionManagers=[];}var s2;return i(o3,e3),o3.prototype.start=function(){return this.started?void 0:(this.started=true,"onselectionchange"in document?document.addEventListener("selectionchange",this.update,true):this.run());},o3.prototype.stop=function(){return this.started?(this.started=false,document.removeEventListener("selectionchange",this.update,true)):void 0;},o3.prototype.registerSelectionManager=function(t4){return r2.call(this.selectionManagers,t4)<0?(this.selectionManagers.push(t4),this.start()):void 0;},o3.prototype.unregisterSelectionManager=function(t4){var e4;return this.selectionManagers=function(){var n3,i2,o4,r3;for(o4=this.selectionManagers,r3=[],n3=0,i2=o4.length;i2>n3;n3++){e4=o4[n3],e4!==t4&&r3.push(e4);}return r3;}.call(this),this.selectionManagers.length===0?this.stop():void 0;},o3.prototype.notifySelectionManagersOfSelectionChange=function(){var t4,e4,n3,i2,o4;for(n3=this.selectionManagers,i2=[],t4=0,e4=n3.length;e4>t4;t4++){o4=n3[t4],i2.push(o4.selectionDidChange());}return i2;},o3.prototype.update=function(){var e4;return e4=t3(),s2(e4,this.domRange)?void 0:(this.domRange=e4,this.notifySelectionManagersOfSelectionChange());},o3.prototype.reset=function(){return this.domRange=null,this.update();},o3.prototype.run=function(){return this.started?(this.update(),requestAnimationFrame(this.run)):void 0;},s2=function s2(t4,e4){return(t4!=null?t4.startContainer:void 0)===(e4!=null?e4.startContainer:void 0)&&(t4!=null?t4.startOffset:void 0)===(e4!=null?e4.startOffset:void 0)&&(t4!=null?t4.endContainer:void 0)===(e4!=null?e4.endContainer:void 0)&&(t4!=null?t4.endOffset:void 0)===(e4!=null?e4.endOffset:void 0);},o3;}(e2.BasicObject),e2.selectionChangeObserver==null&&(e2.selectionChangeObserver=new e2.SelectionChangeObserver());}.call(this),function(){var t3,n2,i,o2,r2,s2,a2,u,c2,l,h=function h(t4,e3){return function(){return t4.apply(e3,arguments);};},p2=function p2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){d.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},d={}.hasOwnProperty;i=e2.getDOMSelection,n2=e2.getDOMRange,l=e2.setDOMRange,t3=e2.elementContainsNode,s2=e2.nodeIsCursorTarget,r2=e2.innerElementIsActive,o2=e2.handleEvent,a2=e2.normalizeRange,u=e2.rangeIsCollapsed,c2=e2.rangesAreEqual,e2.SelectionManager=function(d2){function f(t4){this.element=t4,this.selectionDidChange=h(this.selectionDidChange,this),this.didMouseDown=h(this.didMouseDown,this),this.locationMapper=new e2.LocationMapper(this.element),this.pointMapper=new e2.PointMapper(),this.lockCount=0,o2("mousedown",{onElement:this.element,withCallback:this.didMouseDown});}return p2(f,d2),f.prototype.getLocationRange=function(t4){var e3,i2;return t4==null&&(t4={}),e3=t4.strict===false?this.createLocationRangeFromDOMRange(n2(),{strict:false}):t4.ignoreLock?this.currentLocationRange:(i2=this.lockedLocationRange)!=null?i2:this.currentLocationRange;},f.prototype.setLocationRange=function(t4){var e3;if(!this.lockedLocationRange)return t4=a2(t4),(e3=this.createDOMRangeFromLocationRange(t4))?(l(e3),this.updateCurrentLocationRange(t4)):void 0;},f.prototype.setLocationRangeFromPointRange=function(t4){var e3,n3;return t4=a2(t4),n3=this.getLocationAtPoint(t4[0]),e3=this.getLocationAtPoint(t4[1]),this.setLocationRange([n3,e3]);},f.prototype.getClientRectAtLocationRange=function(t4){var e3;return(e3=this.createDOMRangeFromLocationRange(t4))?this.getClientRectsForDOMRange(e3)[1]:void 0;},f.prototype.locationIsCursorTarget=function(t4){var e3,n3,i2;return i2=this.findNodeAndOffsetFromLocation(t4),e3=i2[0],n3=i2[1],s2(e3);},f.prototype.lock=function(){return this.lockCount++===0?(this.updateCurrentLocationRange(),this.lockedLocationRange=this.getLocationRange()):void 0;},f.prototype.unlock=function(){var t4;return--this.lockCount===0&&(t4=this.lockedLocationRange,this.lockedLocationRange=null,t4!=null)?this.setLocationRange(t4):void 0;},f.prototype.clearSelection=function(){var t4;return(t4=i())!=null?t4.removeAllRanges():void 0;},f.prototype.selectionIsCollapsed=function(){var t4;return((t4=n2())!=null?t4.collapsed:void 0)===true;},f.prototype.selectionIsExpanded=function(){return!this.selectionIsCollapsed();},f.prototype.createLocationRangeFromDOMRange=function(t4,e3){var n3,i2;if(t4!=null&&this.domRangeWithinElement(t4)&&(i2=this.findLocationFromContainerAndOffset(t4.startContainer,t4.startOffset,e3)))return t4.collapsed||(n3=this.findLocationFromContainerAndOffset(t4.endContainer,t4.endOffset,e3)),a2([i2,n3]);},f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),f.proxyMethod("pointMapper.createDOMRangeFromPoint"),f.proxyMethod("pointMapper.getClientRectsForDOMRange"),f.prototype.didMouseDown=function(){return this.pauseTemporarily();},f.prototype.pauseTemporarily=function(){var e3,n3,i2,r3;return this.paused=true,n3=function(e4){return function(){var n4,o3,s3;for(e4.paused=false,clearTimeout(r3),o3=0,s3=i2.length;s3>o3;o3++){n4=i2[o3],n4.destroy();}return t3(document,e4.element)?e4.selectionDidChange():void 0;};}(this),r3=setTimeout(n3,200),i2=function(){var t4,i3,r4,s3;for(r4=["mousemove","keydown"],s3=[],t4=0,i3=r4.length;i3>t4;t4++){e3=r4[t4],s3.push(o2(e3,{onElement:document,withCallback:n3}));}return s3;}();},f.prototype.selectionDidChange=function(){return this.paused||r2(this.element)?void 0:this.updateCurrentLocationRange();},f.prototype.updateCurrentLocationRange=function(t4){var e3;return(t4!=null?t4:t4=this.createLocationRangeFromDOMRange(n2()))&&!c2(t4,this.currentLocationRange)?(this.currentLocationRange=t4,(e3=this.delegate)!=null&&typeof e3.locationRangeDidChange=="function"?e3.locationRangeDidChange(this.currentLocationRange.slice(0)):void 0):void 0;},f.prototype.createDOMRangeFromLocationRange=function(t4){var e3,n3,i2,o3;return i2=this.findContainerAndOffsetFromLocation(t4[0]),n3=u(t4)?i2:(o3=this.findContainerAndOffsetFromLocation(t4[1]))!=null?o3:i2,i2!=null&&n3!=null?(e3=document.createRange(),e3.setStart.apply(e3,i2),e3.setEnd.apply(e3,n3),e3):void 0;},f.prototype.getLocationAtPoint=function(t4){var e3,n3;return(e3=this.createDOMRangeFromPoint(t4))&&(n3=this.createLocationRangeFromDOMRange(e3))!=null?n3[0]:void 0;},f.prototype.domRangeWithinElement=function(e3){return e3.collapsed?t3(this.element,e3.startContainer):t3(this.element,e3.startContainer)&&t3(this.element,e3.endContainer);},f;}(e2.BasicObject);}.call(this),function(){var t3,n2,i,o2,r2=function r2(t4,e3){function n3(){this.constructor=t4;}for(var i2 in e3){s2.call(e3,i2)&&(t4[i2]=e3[i2]);}return n3.prototype=e3.prototype,t4.prototype=new n3(),t4.__super__=e3.prototype,t4;},s2={}.hasOwnProperty,a2=[].slice;i=e2.rangeIsCollapsed,o2=e2.rangesAreEqual,n2=e2.objectsAreEqual,t3=e2.getBlockConfig,e2.EditorController=function(s3){function u(t4){var n3,i2;this.editorElement=t4.editorElement,n3=t4.document,i2=t4.html,this.selectionManager=new e2.SelectionManager(this.editorElement),this.selectionManager.delegate=this,this.composition=new e2.Composition(),this.composition.delegate=this,this.attachmentManager=new e2.AttachmentManager(this.composition.getAttachments()),this.attachmentManager.delegate=this,this.inputController=new e2["Level"+e2.config.input.getLevel()+"InputController"](this.editorElement),this.inputController.delegate=this,this.inputController.responder=this.composition,this.compositionController=new e2.CompositionController(this.editorElement,this.composition),this.compositionController.delegate=this,this.toolbarController=new e2.ToolbarController(this.editorElement.toolbarElement),this.toolbarController.delegate=this,this.editor=new e2.Editor(this.composition,this.selectionManager,this.editorElement),n3!=null?this.editor.loadDocument(n3):this.editor.loadHTML(i2);}var c2;return r2(u,s3),u.prototype.registerSelectionManager=function(){return e2.selectionChangeObserver.registerSelectionManager(this.selectionManager);},u.prototype.unregisterSelectionManager=function(){return e2.selectionChangeObserver.unregisterSelectionManager(this.selectionManager);},u.prototype.render=function(){return this.compositionController.render();},u.prototype.reparse=function(){return this.composition.replaceHTML(this.editorElement.innerHTML);},u.prototype.compositionDidChangeDocument=function(){return this.notifyEditorElement("document-change"),this.handlingInput?void 0:this.render();},u.prototype.compositionDidChangeCurrentAttributes=function(t4){return this.currentAttributes=t4,this.toolbarController.updateAttributes(this.currentAttributes),this.updateCurrentActions(),this.notifyEditorElement("attributes-change",{attributes:this.currentAttributes});},u.prototype.compositionDidPerformInsertionAtRange=function(t4){return this.pasting?this.pastedRange=t4:void 0;},u.prototype.compositionShouldAcceptFile=function(t4){return this.notifyEditorElement("file-accept",{file:t4});},u.prototype.compositionDidAddAttachment=function(t4){var e3;return e3=this.attachmentManager.manageAttachment(t4),this.notifyEditorElement("attachment-add",{attachment:e3});},u.prototype.compositionDidEditAttachment=function(t4){var e3;return this.compositionController.rerenderViewForObject(t4),e3=this.attachmentManager.manageAttachment(t4),this.notifyEditorElement("attachment-edit",{attachment:e3}),this.notifyEditorElement("change");},u.prototype.compositionDidChangeAttachmentPreviewURL=function(t4){return this.compositionController.invalidateViewForObject(t4),this.notifyEditorElement("change");},u.prototype.compositionDidRemoveAttachment=function(t4){var e3;return e3=this.attachmentManager.unmanageAttachment(t4),this.notifyEditorElement("attachment-remove",{attachment:e3});},u.prototype.compositionDidStartEditingAttachment=function(t4,e3){return this.attachmentLocationRange=this.composition.document.getLocationRangeOfAttachment(t4),this.compositionController.installAttachmentEditorForAttachment(t4,e3),this.selectionManager.setLocationRange(this.attachmentLocationRange);},u.prototype.compositionDidStopEditingAttachment=function(){return this.compositionController.uninstallAttachmentEditor(),this.attachmentLocationRange=null;},u.prototype.compositionDidRequestChangingSelectionToLocationRange=function(t4){return!this.loadingSnapshot||this.isFocused()?(this.requestedLocationRange=t4,this.compositionRevisionWhenLocationRangeRequested=this.composition.revision,this.handlingInput?void 0:this.render()):void 0;},u.prototype.compositionWillLoadSnapshot=function(){return this.loadingSnapshot=true;},u.prototype.compositionDidLoadSnapshot=function(){return this.compositionController.refreshViewCache(),this.render(),this.loadingSnapshot=false;},u.prototype.getSelectionManager=function(){return this.selectionManager;},u.proxyMethod("getSelectionManager().setLocationRange"),u.proxyMethod("getSelectionManager().getLocationRange"),u.prototype.attachmentManagerDidRequestRemovalOfAttachment=function(t4){return this.removeAttachment(t4);},u.prototype.compositionControllerWillSyncDocumentView=function(){return this.inputController.editorWillSyncDocumentView(),this.selectionManager.lock(),this.selectionManager.clearSelection();},u.prototype.compositionControllerDidSyncDocumentView=function(){return this.inputController.editorDidSyncDocumentView(),this.selectionManager.unlock(),this.updateCurrentActions(),this.notifyEditorElement("sync");},u.prototype.compositionControllerDidRender=function(){return this.requestedLocationRange!=null&&(this.compositionRevisionWhenLocationRangeRequested===this.composition.revision&&this.selectionManager.setLocationRange(this.requestedLocationRange),this.requestedLocationRange=null,this.compositionRevisionWhenLocationRangeRequested=null),this.renderedCompositionRevision!==this.composition.revision&&(this.runEditorFilters(),this.composition.updateCurrentAttributes(),this.notifyEditorElement("render")),this.renderedCompositionRevision=this.composition.revision;},u.prototype.compositionControllerDidFocus=function(){return this.isFocusedInvisibly()&&this.setLocationRange({index:0,offset:0}),this.toolbarController.hideDialog(),this.notifyEditorElement("focus");},u.prototype.compositionControllerDidBlur=function(){return this.notifyEditorElement("blur");},u.prototype.compositionControllerDidSelectAttachment=function(t4,e3){return this.toolbarController.hideDialog(),this.composition.editAttachment(t4,e3);},u.prototype.compositionControllerDidRequestDeselectingAttachment=function(t4){var e3,n3;return e3=(n3=this.attachmentLocationRange)!=null?n3:this.composition.document.getLocationRangeOfAttachment(t4),this.selectionManager.setLocationRange(e3[1]);},u.prototype.compositionControllerWillUpdateAttachment=function(t4){return this.editor.recordUndoEntry("Edit Attachment",{context:t4.id,consolidatable:true});},u.prototype.compositionControllerDidRequestRemovalOfAttachment=function(t4){return this.removeAttachment(t4);},u.prototype.inputControllerWillHandleInput=function(){return this.handlingInput=true,this.requestedRender=false;},u.prototype.inputControllerDidRequestRender=function(){return this.requestedRender=true;},u.prototype.inputControllerDidHandleInput=function(){return this.handlingInput=false,this.requestedRender?(this.requestedRender=false,this.render()):void 0;},u.prototype.inputControllerDidAllowUnhandledInput=function(){return this.notifyEditorElement("change");},u.prototype.inputControllerDidRequestReparse=function(){return this.reparse();},u.prototype.inputControllerWillPerformTyping=function(){return this.recordTypingUndoEntry();},u.prototype.inputControllerWillPerformFormatting=function(t4){return this.recordFormattingUndoEntry(t4);},u.prototype.inputControllerWillCutText=function(){return this.editor.recordUndoEntry("Cut");},u.prototype.inputControllerWillPaste=function(t4){return this.editor.recordUndoEntry("Paste"),this.pasting=true,this.notifyEditorElement("before-paste",{paste:t4});},u.prototype.inputControllerDidPaste=function(t4){return t4.range=this.pastedRange,this.pastedRange=null,this.pasting=null,this.notifyEditorElement("paste",{paste:t4});},u.prototype.inputControllerWillMoveText=function(){return this.editor.recordUndoEntry("Move");},u.prototype.inputControllerWillAttachFiles=function(){return this.editor.recordUndoEntry("Drop Files");},u.prototype.inputControllerWillPerformUndo=function(){return this.editor.undo();},u.prototype.inputControllerWillPerformRedo=function(){return this.editor.redo();},u.prototype.inputControllerDidReceiveKeyboardCommand=function(t4){return this.toolbarController.applyKeyboardCommand(t4);},u.prototype.inputControllerDidStartDrag=function(){return this.locationRangeBeforeDrag=this.selectionManager.getLocationRange();},u.prototype.inputControllerDidReceiveDragOverPoint=function(t4){return this.selectionManager.setLocationRangeFromPointRange(t4);},u.prototype.inputControllerDidCancelDrag=function(){return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),this.locationRangeBeforeDrag=null;},u.prototype.locationRangeDidChange=function(t4){return this.composition.updateCurrentAttributes(),this.updateCurrentActions(),this.attachmentLocationRange&&!o2(this.attachmentLocationRange,t4)&&this.composition.stopEditingAttachment(),this.notifyEditorElement("selection-change");},u.prototype.toolbarDidClickButton=function(){return this.getLocationRange()?void 0:this.setLocationRange({index:0,offset:0});},u.prototype.toolbarDidInvokeAction=function(t4){return this.invokeAction(t4);},u.prototype.toolbarDidToggleAttribute=function(t4){return this.recordFormattingUndoEntry(t4),this.composition.toggleCurrentAttribute(t4),this.render(),this.selectionFrozen?void 0:this.editorElement.focus();},u.prototype.toolbarDidUpdateAttribute=function(t4,e3){return this.recordFormattingUndoEntry(t4),this.composition.setCurrentAttribute(t4,e3),this.render(),this.selectionFrozen?void 0:this.editorElement.focus();},u.prototype.toolbarDidRemoveAttribute=function(t4){return this.recordFormattingUndoEntry(t4),this.composition.removeCurrentAttribute(t4),this.render(),this.selectionFrozen?void 0:this.editorElement.focus();},u.prototype.toolbarWillShowDialog=function(){return this.composition.expandSelectionForEditing(),this.freezeSelection();},u.prototype.toolbarDidShowDialog=function(t4){return this.notifyEditorElement("toolbar-dialog-show",{dialogName:t4});},u.prototype.toolbarDidHideDialog=function(t4){return this.thawSelection(),this.editorElement.focus(),this.notifyEditorElement("toolbar-dialog-hide",{dialogName:t4});},u.prototype.freezeSelection=function(){return this.selectionFrozen?void 0:(this.selectionManager.lock(),this.composition.freezeSelection(),this.selectionFrozen=true,this.render());},u.prototype.thawSelection=function(){return this.selectionFrozen?(this.composition.thawSelection(),this.selectionManager.unlock(),this.selectionFrozen=false,this.render()):void 0;},u.prototype.actions={undo:{test:function test(){return this.editor.canUndo();},perform:function perform(){return this.editor.undo();}},redo:{test:function test(){return this.editor.canRedo();},perform:function perform(){return this.editor.redo();}},link:{test:function test(){return this.editor.canActivateAttribute("href");}},increaseNestingLevel:{test:function test(){return this.editor.canIncreaseNestingLevel();},perform:function perform(){return this.editor.increaseNestingLevel()&&this.render();}},decreaseNestingLevel:{test:function test(){return this.editor.canDecreaseNestingLevel();},perform:function perform(){return this.editor.decreaseNestingLevel()&&this.render();}},attachFiles:{test:function test(){return true;},perform:function perform(){return e2.config.input.pickFiles(this.editor.insertFiles);}}},u.prototype.canInvokeAction=function(t4){var e3,n3;return this.actionIsExternal(t4)?true:!!((e3=this.actions[t4])!=null&&(n3=e3.test)!=null?n3.call(this):void 0);},u.prototype.invokeAction=function(t4){var e3,n3;return this.actionIsExternal(t4)?this.notifyEditorElement("action-invoke",{actionName:t4}):(e3=this.actions[t4])!=null&&(n3=e3.perform)!=null?n3.call(this):void 0;},u.prototype.actionIsExternal=function(t4){return /^x-./.test(t4);},u.prototype.getCurrentActions=function(){var t4,e3;e3={};for(t4 in this.actions){e3[t4]=this.canInvokeAction(t4);}return e3;},u.prototype.updateCurrentActions=function(){var t4;return t4=this.getCurrentActions(),n2(t4,this.currentActions)?void 0:(this.currentActions=t4,this.toolbarController.updateActions(this.currentActions),this.notifyEditorElement("actions-change",{actions:this.currentActions}));},u.prototype.runEditorFilters=function(){var t4,e3,n3,i2,o3,r3,s4,a3;for(a3=this.composition.getSnapshot(),o3=this.editor.filters,n3=0,i2=o3.length;i2>n3;n3++){e3=o3[n3],t4=a3.document,s4=a3.selectedRange,a3=(r3=e3.call(this.editor,a3))!=null?r3:{},a3.document==null&&(a3.document=t4),a3.selectedRange==null&&(a3.selectedRange=s4);}return c2(a3,this.composition.getSnapshot())?void 0:this.composition.loadSnapshot(a3);},c2=function c2(t4,e3){return o2(t4.selectedRange,e3.selectedRange)&&t4.document.isEqualTo(e3.document);},u.prototype.updateInputElement=function(){var t4,n3;return t4=this.compositionController.getSerializableElement(),n3=e2.serializeToContentType(t4,"text/html"),this.editorElement.setInputElementValue(n3);},u.prototype.notifyEditorElement=function(t4,e3){switch(t4){case"document-change":this.documentChangedSinceLastRender=true;break;case"render":this.documentChangedSinceLastRender&&(this.documentChangedSinceLastRender=false,this.notifyEditorElement("change"));break;case"change":case"attachment-add":case"attachment-edit":case"attachment-remove":this.updateInputElement();}return this.editorElement.notify(t4,e3);},u.prototype.removeAttachment=function(t4){return this.editor.recordUndoEntry("Delete Attachment"),this.composition.removeAttachment(t4),this.render();},u.prototype.recordFormattingUndoEntry=function(e3){var n3,o3;return n3=t3(e3),o3=this.selectionManager.getLocationRange(),n3||!i(o3)?this.editor.recordUndoEntry("Formatting",{context:this.getUndoContext(),consolidatable:true}):void 0;},u.prototype.recordTypingUndoEntry=function(){return this.editor.recordUndoEntry("Typing",{context:this.getUndoContext(this.currentAttributes),consolidatable:true});},u.prototype.getUndoContext=function(){var t4;return t4=1<=arguments.length?a2.call(arguments,0):[],[this.getLocationContext(),this.getTimeContext()].concat(a2.call(t4));},u.prototype.getLocationContext=function(){var t4;return t4=this.selectionManager.getLocationRange(),i(t4)?t4[0].index:t4;},u.prototype.getTimeContext=function(){return e2.config.undoInterval>0?Math.floor(new Date().getTime()/e2.config.undoInterval):0;},u.prototype.isFocused=function(){var t4;return this.editorElement===((t4=this.editorElement.ownerDocument)!=null?t4.activeElement:void 0);},u.prototype.isFocusedInvisibly=function(){return this.isFocused()&&!this.getLocationRange();},u;}(e2.Controller);}.call(this),function(){var t3,n2,i,o2,r2,s2,a2,u=[].indexOf||function(t4){for(var e3=0,n3=this.length;n3>e3;e3++){if(e3 in this&&this[e3]===t4)return e3;}return-1;};n2=e2.browser,s2=e2.makeElement,a2=e2.triggerEvent,o2=e2.handleEvent,r2=e2.handleEventOnce,i=e2.findClosestElementFromNode,t3=e2.AttachmentView.attachmentSelector,e2.registerElement("trix-editor",function(){var c2,l,h,p2,d,f,g,m,v;return g=0,l=function l(t4){return!document.querySelector(":focus")&&t4.hasAttribute("autofocus")&&document.querySelector("[autofocus]")===t4?t4.focus():void 0;},m=function m(t4){return t4.hasAttribute("contenteditable")?void 0:(t4.setAttribute("contenteditable",""),r2("focus",{onElement:t4,withCallback:function withCallback(){return h(t4);}}));},h=function h(t4){return d(t4),v(t4);},d=function d(t4){return(typeof document.queryCommandSupported=="function"?document.queryCommandSupported("enableObjectResizing"):void 0)?(document.execCommand("enableObjectResizing",false,false),o2("mscontrolselect",{onElement:t4,preventDefault:true})):void 0;},v=function v(){var t4;return(typeof document.queryCommandSupported=="function"?document.queryCommandSupported("DefaultParagraphSeparator"):void 0)&&(t4=e2.config.blockAttributes["default"].tagName,t4==="div"||t4==="p")?document.execCommand("DefaultParagraphSeparator",false,t4):void 0;},c2=function c2(t4){return t4.hasAttribute("role")?void 0:t4.setAttribute("role","textbox");},f=function f(t4){var e3;if(!t4.hasAttribute("aria-label")&&!t4.hasAttribute("aria-labelledby"))return(e3=function e3(){var e4,n3,i2;return i2=function(){var n4,i3,o3,r3;for(o3=t4.labels,r3=[],n4=0,i3=o3.length;i3>n4;n4++){e4=o3[n4],e4.contains(t4)||r3.push(e4.textContent);}return r3;}(),(n3=i2.join(" "))?t4.setAttribute("aria-label",n3):t4.removeAttribute("aria-label");})(),o2("focus",{onElement:t4,withCallback:e3});},p2=function(){return n2.forcesObjectResizing?{display:"inline",width:"auto"}:{display:"inline-block",width:"1px"};}(),{defaultCSS:"%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n  pointer-events: none;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t "+t3+" figcaption textarea {\n  resize: none;\n}\n\n%t "+t3+" figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t "+t3+" figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: "+p2.display+" !important;\n  width: "+p2.width+" !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",trixId:{get:function get(){return this.hasAttribute("trix-id")?this.getAttribute("trix-id"):(this.setAttribute("trix-id",++g),this.trixId);}},labels:{get:function get(){var t4,e3,n3;return e3=[],this.id&&this.ownerDocument&&e3.push.apply(e3,this.ownerDocument.querySelectorAll("label[for='"+this.id+"']")),(t4=i(this,{matchingSelector:"label"}))&&((n3=t4.control)===this||n3===null)&&e3.push(t4),e3;}},toolbarElement:{get:function get(){var t4,e3,n3;return this.hasAttribute("toolbar")?(e3=this.ownerDocument)!=null?e3.getElementById(this.getAttribute("toolbar")):void 0:this.parentNode?(n3="trix-toolbar-"+this.trixId,this.setAttribute("toolbar",n3),t4=s2("trix-toolbar",{id:n3}),this.parentNode.insertBefore(t4,this),t4):void 0;}},inputElement:{get:function get(){var t4,e3,n3;return this.hasAttribute("input")?(n3=this.ownerDocument)!=null?n3.getElementById(this.getAttribute("input")):void 0:this.parentNode?(e3="trix-input-"+this.trixId,this.setAttribute("input",e3),t4=s2("input",{type:"hidden",id:e3}),this.parentNode.insertBefore(t4,this.nextElementSibling),t4):void 0;}},editor:{get:function get(){var t4;return(t4=this.editorController)!=null?t4.editor:void 0;}},name:{get:function get(){var t4;return(t4=this.inputElement)!=null?t4.name:void 0;}},value:{get:function get(){var t4;return(t4=this.inputElement)!=null?t4.value:void 0;},set:function set(t4){var e3;return this.defaultValue=t4,(e3=this.editor)!=null?e3.loadHTML(this.defaultValue):void 0;}},notify:function notify(t4,e3){return this.editorController?a2("trix-"+t4,{onElement:this,attributes:e3}):void 0;},setInputElementValue:function setInputElementValue(t4){var e3;return(e3=this.inputElement)!=null?e3.value=t4:void 0;},initialize:function initialize(){return this.hasAttribute("data-trix-internal")?void 0:(m(this),c2(this),f(this));},connect:function connect(){return this.hasAttribute("data-trix-internal")?void 0:(this.editorController||(a2("trix-before-initialize",{onElement:this}),this.editorController=new e2.EditorController({editorElement:this,html:this.defaultValue=this.value}),requestAnimationFrame(function(t4){return function(){return a2("trix-initialize",{onElement:t4});};}(this))),this.editorController.registerSelectionManager(),this.registerResetListener(),this.registerClickListener(),l(this));},disconnect:function disconnect(){var t4;return(t4=this.editorController)!=null&&t4.unregisterSelectionManager(),this.unregisterResetListener(),this.unregisterClickListener();},registerResetListener:function registerResetListener(){return this.resetListener=this.resetBubbled.bind(this),window.addEventListener("reset",this.resetListener,false);},unregisterResetListener:function unregisterResetListener(){return window.removeEventListener("reset",this.resetListener,false);},registerClickListener:function registerClickListener(){return this.clickListener=this.clickBubbled.bind(this),window.addEventListener("click",this.clickListener,false);},unregisterClickListener:function unregisterClickListener(){return window.removeEventListener("click",this.clickListener,false);},resetBubbled:function resetBubbled(t4){var e3;if(!t4.defaultPrevented&&t4.target===((e3=this.inputElement)!=null?e3.form:void 0))return this.reset();},clickBubbled:function clickBubbled(t4){var e3;if(!(t4.defaultPrevented||this.contains(t4.target)||!(e3=i(t4.target,{matchingSelector:"label"}))||u.call(this.labels,e3)<0))return this.focus();},reset:function reset(){return this.value=this.defaultValue;}};}());}.call(this),function(){}.call(this);}).call(this),_typeof2(module)=="object"&&module.exports?module.exports=e2:typeof define=="function"&&__webpack_require__.amdO&&define(e2);}.call(exports);});// node_modules/dayjs/esm/constant.js
var SECONDS_A_MINUTE=60;var SECONDS_A_HOUR=SECONDS_A_MINUTE*60;var SECONDS_A_DAY=SECONDS_A_HOUR*24;var SECONDS_A_WEEK=SECONDS_A_DAY*7;var MILLISECONDS_A_SECOND=1e3;var MILLISECONDS_A_MINUTE=SECONDS_A_MINUTE*MILLISECONDS_A_SECOND;var MILLISECONDS_A_HOUR=SECONDS_A_HOUR*MILLISECONDS_A_SECOND;var MILLISECONDS_A_DAY=SECONDS_A_DAY*MILLISECONDS_A_SECOND;var MILLISECONDS_A_WEEK=SECONDS_A_WEEK*MILLISECONDS_A_SECOND;var MS="millisecond";var S="second";var MIN="minute";var H="hour";var D="day";var W="week";var M="month";var Q="quarter";var Y="year";var DATE="date";var FORMAT_DEFAULT="YYYY-MM-DDTHH:mm:ssZ";var INVALID_DATE_STRING="Invalid Date";var REGEX_PARSE=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;var REGEX_FORMAT=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;// node_modules/dayjs/esm/locale/en.js
var en_default={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")};// node_modules/dayjs/esm/utils.js
var padStart=function padStart2(string,length,pad){var s2=String(string);if(!s2||s2.length>=length)return string;return""+Array(length+1-s2.length).join(pad)+string;};var padZoneStr=function padZoneStr2(instance){var negMinutes=-instance.utcOffset();var minutes=Math.abs(negMinutes);var hourOffset=Math.floor(minutes/60);var minuteOffset=minutes%60;return""+(negMinutes<=0?"+":"-")+padStart(hourOffset,2,"0")+":"+padStart(minuteOffset,2,"0");};var monthDiff=function monthDiff2(a2,b){if(a2.date()<b.date())return-monthDiff2(b,a2);var wholeMonthDiff=(b.year()-a2.year())*12+(b.month()-a2.month());var anchor=a2.clone().add(wholeMonthDiff,M);var c2=b-anchor<0;var anchor2=a2.clone().add(wholeMonthDiff+(c2?-1:1),M);return+(-(wholeMonthDiff+(b-anchor)/(c2?anchor-anchor2:anchor2-anchor))||0);};var absFloor=function absFloor2(n2){return n2<0?Math.ceil(n2)||0:Math.floor(n2);};var prettyUnit=function prettyUnit2(u){var special={M:M,y:Y,w:W,d:D,D:DATE,h:H,m:MIN,s:S,ms:MS,Q:Q};return special[u]||String(u||"").toLowerCase().replace(/s$/,"");};var isUndefined=function isUndefined2(s2){return s2===void 0;};var utils_default={s:padStart,z:padZoneStr,m:monthDiff,a:absFloor,p:prettyUnit,u:isUndefined};// node_modules/dayjs/esm/index.js
var L="en";var Ls={};Ls[L]=en_default;var isDayjs=function isDayjs2(d){return d instanceof Dayjs;};var parseLocale=function parseLocale2(preset,object,isLocal){var l;if(!preset)return L;if(typeof preset==="string"){if(Ls[preset]){l=preset;}if(object){Ls[preset]=object;l=preset;}}else{var name2=preset.name;Ls[name2]=preset;l=name2;}if(!isLocal&&l)L=l;return l||!isLocal&&L;};var dayjs=function dayjs2(date,c2){if(isDayjs(date)){return date.clone();}var cfg=_typeof2(c2)==="object"?c2:{};cfg.date=date;cfg.args=arguments;return new Dayjs(cfg);};var wrapper=function wrapper2(date,instance){return dayjs(date,{locale:instance.$L,utc:instance.$u,x:instance.$x,$offset:instance.$offset});};var Utils=utils_default;Utils.l=parseLocale;Utils.i=isDayjs;Utils.w=wrapper;var parseDate=function parseDate2(cfg){var date=cfg.date,utc2=cfg.utc;if(date===null)return new Date(NaN);if(Utils.u(date))return new Date();if(date instanceof Date)return new Date(date);if(typeof date==="string"&&!/Z$/i.test(date)){var d=date.match(REGEX_PARSE);if(d){var m=d[2]-1||0;var ms=(d[7]||"0").substring(0,3);if(utc2){return new Date(Date.UTC(d[1],m,d[3]||1,d[4]||0,d[5]||0,d[6]||0,ms));}return new Date(d[1],m,d[3]||1,d[4]||0,d[5]||0,d[6]||0,ms);}}return new Date(date);};var Dayjs=/* @__PURE__ */function(){function Dayjs2(cfg){this.$L=parseLocale(cfg.locale,null,true);this.parse(cfg);}var _proto=Dayjs2.prototype;_proto.parse=function parse4(cfg){this.$d=parseDate(cfg);this.$x=cfg.x||{};this.init();};_proto.init=function init(){var $d=this.$d;this.$y=$d.getFullYear();this.$M=$d.getMonth();this.$D=$d.getDate();this.$W=$d.getDay();this.$H=$d.getHours();this.$m=$d.getMinutes();this.$s=$d.getSeconds();this.$ms=$d.getMilliseconds();};_proto.$utils=function $utils(){return Utils;};_proto.isValid=function isValid(){return!(this.$d.toString()===INVALID_DATE_STRING);};_proto.isSame=function isSame(that,units){var other=dayjs(that);return this.startOf(units)<=other&&other<=this.endOf(units);};_proto.isAfter=function isAfter(that,units){return dayjs(that)<this.startOf(units);};_proto.isBefore=function isBefore(that,units){return this.endOf(units)<dayjs(that);};_proto.$g=function $g(input,get,set2){if(Utils.u(input))return this[get];return this.set(set2,input);};_proto.unix=function unix(){return Math.floor(this.valueOf()/1e3);};_proto.valueOf=function valueOf(){return this.$d.getTime();};_proto.startOf=function startOf(units,_startOf){var _this=this;var isStartOf=!Utils.u(_startOf)?_startOf:true;var unit=Utils.p(units);var instanceFactory=function instanceFactory2(d,m){var ins=Utils.w(_this.$u?Date.UTC(_this.$y,m,d):new Date(_this.$y,m,d),_this);return isStartOf?ins:ins.endOf(D);};var instanceFactorySet=function instanceFactorySet2(method,slice){var argumentStart=[0,0,0,0];var argumentEnd=[23,59,59,999];return Utils.w(_this.toDate()[method].apply(_this.toDate("s"),(isStartOf?argumentStart:argumentEnd).slice(slice)),_this);};var $W=this.$W,$M=this.$M,$D=this.$D;var utcPad="set"+(this.$u?"UTC":"");switch(unit){case Y:return isStartOf?instanceFactory(1,0):instanceFactory(31,11);case M:return isStartOf?instanceFactory(1,$M):instanceFactory(0,$M+1);case W:{var weekStart=this.$locale().weekStart||0;var gap=($W<weekStart?$W+7:$W)-weekStart;return instanceFactory(isStartOf?$D-gap:$D+(6-gap),$M);}case D:case DATE:return instanceFactorySet(utcPad+"Hours",0);case H:return instanceFactorySet(utcPad+"Minutes",1);case MIN:return instanceFactorySet(utcPad+"Seconds",2);case S:return instanceFactorySet(utcPad+"Milliseconds",3);default:return this.clone();}};_proto.endOf=function endOf(arg){return this.startOf(arg,false);};_proto.$set=function $set(units,_int){var _C$D$C$DATE$C$M$C$Y$C;var unit=Utils.p(units);var utcPad="set"+(this.$u?"UTC":"");var name2=(_C$D$C$DATE$C$M$C$Y$C={},_C$D$C$DATE$C$M$C$Y$C[D]=utcPad+"Date",_C$D$C$DATE$C$M$C$Y$C[DATE]=utcPad+"Date",_C$D$C$DATE$C$M$C$Y$C[M]=utcPad+"Month",_C$D$C$DATE$C$M$C$Y$C[Y]=utcPad+"FullYear",_C$D$C$DATE$C$M$C$Y$C[H]=utcPad+"Hours",_C$D$C$DATE$C$M$C$Y$C[MIN]=utcPad+"Minutes",_C$D$C$DATE$C$M$C$Y$C[S]=utcPad+"Seconds",_C$D$C$DATE$C$M$C$Y$C[MS]=utcPad+"Milliseconds",_C$D$C$DATE$C$M$C$Y$C)[unit];var arg=unit===D?this.$D+(_int-this.$W):_int;if(unit===M||unit===Y){var date=this.clone().set(DATE,1);date.$d[name2](arg);date.init();this.$d=date.set(DATE,Math.min(this.$D,date.daysInMonth())).$d;}else if(name2)this.$d[name2](arg);this.init();return this;};_proto.set=function set2(string,_int2){return this.clone().$set(string,_int2);};_proto.get=function get(unit){return this[Utils.p(unit)]();};_proto.add=function add(number,units){var _this2=this,_C$MIN$C$H$C$S$unit;number=Number(number);var unit=Utils.p(units);var instanceFactorySet=function instanceFactorySet2(n2){var d=dayjs(_this2);return Utils.w(d.date(d.date()+Math.round(n2*number)),_this2);};if(unit===M){return this.set(M,this.$M+number);}if(unit===Y){return this.set(Y,this.$y+number);}if(unit===D){return instanceFactorySet(1);}if(unit===W){return instanceFactorySet(7);}var step=(_C$MIN$C$H$C$S$unit={},_C$MIN$C$H$C$S$unit[MIN]=MILLISECONDS_A_MINUTE,_C$MIN$C$H$C$S$unit[H]=MILLISECONDS_A_HOUR,_C$MIN$C$H$C$S$unit[S]=MILLISECONDS_A_SECOND,_C$MIN$C$H$C$S$unit)[unit]||1;var nextTimeStamp=this.$d.getTime()+number*step;return Utils.w(nextTimeStamp,this);};_proto.subtract=function subtract(number,string){return this.add(number*-1,string);};_proto.format=function format3(formatStr){var _this3=this;var locale=this.$locale();if(!this.isValid())return locale.invalidDate||INVALID_DATE_STRING;var str=formatStr||FORMAT_DEFAULT;var zoneStr=Utils.z(this);var $H=this.$H,$m=this.$m,$M=this.$M;var weekdays=locale.weekdays,months=locale.months,meridiem=locale.meridiem;var getShort=function getShort2(arr,index,full,length){return arr&&(arr[index]||arr(_this3,str))||full[index].substr(0,length);};var get$H=function get$H2(num){return Utils.s($H%12||12,num,"0");};var meridiemFunc=meridiem||function(hour,minute,isLowercase){var m=hour<12?"AM":"PM";return isLowercase?m.toLowerCase():m;};var matches={YY:String(this.$y).slice(-2),YYYY:this.$y,M:$M+1,MM:Utils.s($M+1,2,"0"),MMM:getShort(locale.monthsShort,$M,months,3),MMMM:getShort(months,$M),D:this.$D,DD:Utils.s(this.$D,2,"0"),d:String(this.$W),dd:getShort(locale.weekdaysMin,this.$W,weekdays,2),ddd:getShort(locale.weekdaysShort,this.$W,weekdays,3),dddd:weekdays[this.$W],H:String($H),HH:Utils.s($H,2,"0"),h:get$H(1),hh:get$H(2),a:meridiemFunc($H,$m,true),A:meridiemFunc($H,$m,false),m:String($m),mm:Utils.s($m,2,"0"),s:String(this.$s),ss:Utils.s(this.$s,2,"0"),SSS:Utils.s(this.$ms,3,"0"),Z:zoneStr};return str.replace(REGEX_FORMAT,function(match,$1){return $1||matches[match]||zoneStr.replace(":","");});};_proto.utcOffset=function utcOffset(){return-Math.round(this.$d.getTimezoneOffset()/15)*15;};_proto.diff=function diff(input,units,_float){var _C$Y$C$M$C$Q$C$W$C$D$;var unit=Utils.p(units);var that=dayjs(input);var zoneDelta=(that.utcOffset()-this.utcOffset())*MILLISECONDS_A_MINUTE;var diff2=this-that;var result=Utils.m(this,that);result=(_C$Y$C$M$C$Q$C$W$C$D$={},_C$Y$C$M$C$Q$C$W$C$D$[Y]=result/12,_C$Y$C$M$C$Q$C$W$C$D$[M]=result,_C$Y$C$M$C$Q$C$W$C$D$[Q]=result/3,_C$Y$C$M$C$Q$C$W$C$D$[W]=(diff2-zoneDelta)/MILLISECONDS_A_WEEK,_C$Y$C$M$C$Q$C$W$C$D$[D]=(diff2-zoneDelta)/MILLISECONDS_A_DAY,_C$Y$C$M$C$Q$C$W$C$D$[H]=diff2/MILLISECONDS_A_HOUR,_C$Y$C$M$C$Q$C$W$C$D$[MIN]=diff2/MILLISECONDS_A_MINUTE,_C$Y$C$M$C$Q$C$W$C$D$[S]=diff2/MILLISECONDS_A_SECOND,_C$Y$C$M$C$Q$C$W$C$D$)[unit]||diff2;return _float?result:Utils.a(result);};_proto.daysInMonth=function daysInMonth(){return this.endOf(M).$D;};_proto.$locale=function $locale(){return Ls[this.$L];};_proto.locale=function locale(preset,object){if(!preset)return this.$L;var that=this.clone();var nextLocaleName=parseLocale(preset,object,true);if(nextLocaleName)that.$L=nextLocaleName;return that;};_proto.clone=function clone(){return Utils.w(this.$d,this);};_proto.toDate=function toDate(){return new Date(this.valueOf());};_proto.toJSON=function toJSON(){return this.isValid()?this.toISOString():null;};_proto.toISOString=function toISOString(){return this.$d.toISOString();};_proto.toString=function toString2(){return this.$d.toUTCString();};return Dayjs2;}();var proto=Dayjs.prototype;dayjs.prototype=proto;[["$ms",MS],["$s",S],["$m",MIN],["$H",H],["$W",D],["$M",M],["$y",Y],["$D",DATE]].forEach(function(g){proto[g[1]]=function(input){return this.$g(input,g[0],g[1]);};});dayjs.extend=function(plugin8,option2){if(!plugin8.$i){plugin8(option2,Dayjs,dayjs);plugin8.$i=true;}return dayjs;};dayjs.locale=parseLocale;dayjs.isDayjs=isDayjs;dayjs.unix=function(timestamp){return dayjs(timestamp*1e3);};dayjs.en=Ls[L];dayjs.Ls=Ls;dayjs.p={};var esm_default=dayjs;// packages/forms/resources/js/components/date-time-picker.js
var import_customParseFormat=__toModule(require_customParseFormat());var import_localeData=__toModule(require_localeData());var import_timezone=__toModule(require_timezone());var import_utc=__toModule(require_utc());esm_default.extend(import_customParseFormat["default"]);esm_default.extend(import_localeData["default"]);esm_default.extend(import_timezone["default"]);esm_default.extend(import_utc["default"]);esm_default.extend(function(option2,Dayjs2,dayjs3){dayjs3.onLocaleUpdated=function(){},dayjs3.updateLocale=function(locale){dayjs3.locale(locale);dayjs3.onLocaleUpdated();};});window.dayjs=esm_default;var date_time_picker_default=function date_time_picker_default(Alpine){Alpine.data("dateTimePickerFormComponent",function(_ref3){var displayFormat=_ref3.displayFormat,firstDayOfWeek=_ref3.firstDayOfWeek,format3=_ref3.format,isAutofocused=_ref3.isAutofocused,maxDate=_ref3.maxDate,minDate=_ref3.minDate,state2=_ref3.state;var timezone2=esm_default.tz.guess();return{daysInFocusedMonth:[],displayText:"",emptyDaysInFocusedMonth:[],focusedDate:null,focusedMonth:null,focusedYear:null,hour:null,maxDate:maxDate,minDate:minDate,minute:null,open:false,second:null,state:state2,dayLabels:[],months:[],init:function init(){var _this$getSelectedDate,_date$hour,_date,_date$minute,_date2,_date$second,_date3,_this7=this;this.focusedDate=esm_default().tz(timezone2);this.maxDate=esm_default(this.maxDate);if(!this.maxDate.isValid()){this.maxDate=null;}this.minDate=esm_default(this.minDate);if(!this.minDate.isValid()){this.minDate=null;}var date=(_this$getSelectedDate=this.getSelectedDate())!==null&&_this$getSelectedDate!==void 0?_this$getSelectedDate:esm_default().tz(timezone2).hour(0).minute(0).second(0);if(this.maxDate!==null&&date.isAfter(this.maxDate)){date=null;}else if(this.minDate!==null&&date.isBefore(this.minDate)){date=null;}this.hour=(_date$hour=(_date=date)===null||_date===void 0?void 0:_date.hour())!==null&&_date$hour!==void 0?_date$hour:0;this.minute=(_date$minute=(_date2=date)===null||_date2===void 0?void 0:_date2.minute())!==null&&_date$minute!==void 0?_date$minute:0;this.second=(_date$second=(_date3=date)===null||_date3===void 0?void 0:_date3.second())!==null&&_date$second!==void 0?_date$second:0;this.setDisplayText();this.setMonths();this.setDayLabels();if(isAutofocused){this.openPicker();}esm_default.onLocaleUpdated=function(){_this7.setDisplayText();_this7.setMonths();_this7.setDayLabels();};this.$watch("focusedMonth",function(){_this7.focusedMonth=+_this7.focusedMonth;if(_this7.focusedDate.month()===_this7.focusedMonth){return;}_this7.focusedDate=_this7.focusedDate.month(_this7.focusedMonth);});this.$watch("focusedYear",function(){if(!_this7.focusedYear){return;}var year=+_this7.focusedYear;if(!Number.isInteger(year)){year=esm_default().tz(timezone2).year();_this7.focusedYear=year;}if(_this7.focusedDate.year()===year){return;}_this7.focusedDate=_this7.focusedDate.year(year);});this.$watch("focusedDate",function(){var month=_this7.focusedDate.month();var year=_this7.focusedDate.year();if(_this7.focusedMonth!==month){_this7.focusedMonth=month;}if(_this7.focusedYear!==year){_this7.focusedYear=year;}_this7.setupDaysGrid();_this7.$nextTick(function(){_this7.evaluatePosition();});});this.$watch("hour",function(){var _this7$getSelectedDat,_this7$hour;var hour=+_this7.hour;if(!Number.isInteger(hour)){_this7.hour=0;}else if(hour>23){_this7.hour=0;}else if(hour<0){_this7.hour=23;}else{_this7.hour=hour;}var date2=(_this7$getSelectedDat=_this7.getSelectedDate())!==null&&_this7$getSelectedDat!==void 0?_this7$getSelectedDat:_this7.focusedDate;_this7.setState(date2.hour((_this7$hour=_this7.hour)!==null&&_this7$hour!==void 0?_this7$hour:0));});this.$watch("minute",function(){var _this7$getSelectedDat2,_this7$minute;var minute=+_this7.minute;if(!Number.isInteger(minute)){_this7.minute=0;}else if(minute>59){_this7.minute=0;}else if(minute<0){_this7.minute=59;}else{_this7.minute=minute;}var date2=(_this7$getSelectedDat2=_this7.getSelectedDate())!==null&&_this7$getSelectedDat2!==void 0?_this7$getSelectedDat2:_this7.focusedDate;_this7.setState(date2.minute((_this7$minute=_this7.minute)!==null&&_this7$minute!==void 0?_this7$minute:0));});this.$watch("second",function(){var _this7$getSelectedDat3,_this7$second;var second=+_this7.second;if(!Number.isInteger(second)){_this7.second=0;}else if(second>59){_this7.second=0;}else if(second<0){_this7.second=59;}else{_this7.second=second;}var date2=(_this7$getSelectedDat3=_this7.getSelectedDate())!==null&&_this7$getSelectedDat3!==void 0?_this7$getSelectedDat3:_this7.focusedDate;_this7.setState(date2.second((_this7$second=_this7.second)!==null&&_this7$second!==void 0?_this7$second:0));});this.$watch("state",function(){var _date2$hour,_date4,_date2$minute,_date5,_date2$second,_date6;var date2=_this7.getSelectedDate();if(_this7.maxDate!==null&&date2.isAfter(_this7.maxDate)){date2=null;}if(_this7.minDate!==null&&date2.isBefore(_this7.minDate)){date2=null;}_this7.hour=(_date2$hour=(_date4=date2)===null||_date4===void 0?void 0:_date4.hour())!==null&&_date2$hour!==void 0?_date2$hour:0;_this7.minute=(_date2$minute=(_date5=date2)===null||_date5===void 0?void 0:_date5.minute())!==null&&_date2$minute!==void 0?_date2$minute:0;_this7.second=(_date2$second=(_date6=date2)===null||_date6===void 0?void 0:_date6.second())!==null&&_date2$second!==void 0?_date2$second:0;_this7.setDisplayText();});},clearState:function clearState(){this.setState(null);this.closePicker();},closePicker:function closePicker(){this.open=false;},dateIsDisabled:function dateIsDisabled(date){if(this.maxDate&&date.isAfter(this.maxDate)){return true;}if(this.minDate&&date.isBefore(this.minDate)){return true;}return false;},dayIsDisabled:function dayIsDisabled(day){var _this$focusedDate;(_this$focusedDate=this.focusedDate)!==null&&_this$focusedDate!==void 0?_this$focusedDate:this.focusedDate=esm_default().tz(timezone2);return this.dateIsDisabled(this.focusedDate.date(day));},dayIsSelected:function dayIsSelected(day){var _this$focusedDate2;var selectedDate=this.getSelectedDate();if(selectedDate===null){return false;}(_this$focusedDate2=this.focusedDate)!==null&&_this$focusedDate2!==void 0?_this$focusedDate2:this.focusedDate=esm_default().tz(timezone2);return selectedDate.date()===day&&selectedDate.month()===this.focusedDate.month()&&selectedDate.year()===this.focusedDate.year();},dayIsToday:function dayIsToday(day){var _this$focusedDate3;var date=esm_default().tz(timezone2);(_this$focusedDate3=this.focusedDate)!==null&&_this$focusedDate3!==void 0?_this$focusedDate3:this.focusedDate=date;return date.date()===day&&date.month()===this.focusedDate.month()&&date.year()===this.focusedDate.year();},evaluatePosition:function evaluatePosition(){var availableHeight=window.innerHeight-this.$refs.button.offsetHeight;var element=this.$refs.button;while(element){availableHeight-=element.offsetTop;element=element.offsetParent;}if(this.$refs.picker.offsetHeight<=availableHeight){this.$refs.picker.style.bottom="auto";return;}this.$refs.picker.style.bottom="".concat(this.$refs.button.offsetHeight,"px");},focusPreviousDay:function focusPreviousDay(){var _this$focusedDate4;(_this$focusedDate4=this.focusedDate)!==null&&_this$focusedDate4!==void 0?_this$focusedDate4:this.focusedDate=esm_default().tz(timezone2);this.focusedDate=this.focusedDate.subtract(1,"day");},focusPreviousWeek:function focusPreviousWeek(){var _this$focusedDate5;(_this$focusedDate5=this.focusedDate)!==null&&_this$focusedDate5!==void 0?_this$focusedDate5:this.focusedDate=esm_default().tz(timezone2);this.focusedDate=this.focusedDate.subtract(1,"week");},focusNextDay:function focusNextDay(){var _this$focusedDate6;(_this$focusedDate6=this.focusedDate)!==null&&_this$focusedDate6!==void 0?_this$focusedDate6:this.focusedDate=esm_default().tz(timezone2);this.focusedDate=this.focusedDate.add(1,"day");},focusNextWeek:function focusNextWeek(){var _this$focusedDate7;(_this$focusedDate7=this.focusedDate)!==null&&_this$focusedDate7!==void 0?_this$focusedDate7:this.focusedDate=esm_default().tz(timezone2);this.focusedDate=this.focusedDate.add(1,"week");},getDayLabels:function getDayLabels(){var labels=esm_default.weekdaysShort();if(firstDayOfWeek===0){return labels;}return[].concat(_toConsumableArray(labels.slice(firstDayOfWeek)),_toConsumableArray(labels.slice(0,firstDayOfWeek)));},getSelectedDate:function getSelectedDate(){var date=esm_default(this.state,format3);if(!date.isValid()){return null;}return date;},openPicker:function openPicker(){var _this$getSelectedDate2,_this8=this;this.focusedDate=(_this$getSelectedDate2=this.getSelectedDate())!==null&&_this$getSelectedDate2!==void 0?_this$getSelectedDate2:esm_default().tz(timezone2);this.setupDaysGrid();this.open=true;this.$nextTick(function(){_this8.evaluatePosition();});},selectDate:function selectDate(){var _this$focusedDate8;var day=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(day){this.setFocusedDay(day);}(_this$focusedDate8=this.focusedDate)!==null&&_this$focusedDate8!==void 0?_this$focusedDate8:this.focusedDate=esm_default().tz(timezone2);this.setState(this.focusedDate);},setDisplayText:function setDisplayText(){this.displayText=this.getSelectedDate()?this.getSelectedDate().format(displayFormat):"";},setMonths:function setMonths(){this.months=esm_default.months();},setDayLabels:function setDayLabels(){this.dayLabels=this.getDayLabels();},setupDaysGrid:function setupDaysGrid(){var _this$focusedDate9;(_this$focusedDate9=this.focusedDate)!==null&&_this$focusedDate9!==void 0?_this$focusedDate9:this.focusedDate=esm_default().tz(timezone2);this.emptyDaysInFocusedMonth=Array.from({length:this.focusedDate.date(8-firstDayOfWeek).day()},function(_,i){return i+1;});this.daysInFocusedMonth=Array.from({length:this.focusedDate.daysInMonth()},function(_,i){return i+1;});},setFocusedDay:function setFocusedDay(day){var _this$focusedDate10;this.focusedDate=((_this$focusedDate10=this.focusedDate)!==null&&_this$focusedDate10!==void 0?_this$focusedDate10:esm_default().tz(timezone2)).date(day);},setState:function setState(date){var _this$hour,_this$minute,_this$second;if(date===null){this.state=null;this.setDisplayText();return;}else{if(this.dateIsDisabled(date)){return;}}this.state=date.hour((_this$hour=this.hour)!==null&&_this$hour!==void 0?_this$hour:0).minute((_this$minute=this.minute)!==null&&_this$minute!==void 0?_this$minute:0).second((_this$second=this.second)!==null&&_this$second!==void 0?_this$second:0).format(format3);this.setDisplayText();},togglePickerVisibility:function togglePickerVisibility(){if(this.open){this.closePicker();return;}this.openPicker();}};});};// node_modules/filepond/dist/filepond.esm.js
/*!
 * FilePond 4.30.3
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */var isNode=function isNode(value){return value instanceof HTMLElement;};var createStore=function createStore(initialState){var queries2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var actions2=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];var state2=_objectSpread({},initialState);var actionQueue=[];var dispatchQueue=[];var getState=function getState(){return _objectSpread({},state2);};var processActionQueue=function processActionQueue(){var queue=[].concat(actionQueue);actionQueue.length=0;return queue;};var processDispatchQueue=function processDispatchQueue(){var queue=[].concat(dispatchQueue);dispatchQueue.length=0;queue.forEach(function(_ref4){var type=_ref4.type,data3=_ref4.data;dispatch2(type,data3);});};var dispatch2=function dispatch2(type,data3,isBlocking){if(isBlocking&&!document.hidden){dispatchQueue.push({type:type,data:data3});return;}if(actionHandlers[type]){actionHandlers[type](data3);}actionQueue.push({type:type,data:data3});};var query=function query(str){var _queryHandles;for(var _len4=arguments.length,args=new Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++){args[_key4-1]=arguments[_key4];}return queryHandles[str]?(_queryHandles=queryHandles)[str].apply(_queryHandles,args):null;};var api={getState:getState,processActionQueue:processActionQueue,processDispatchQueue:processDispatchQueue,dispatch:dispatch2,query:query};var queryHandles={};queries2.forEach(function(query2){queryHandles=_objectSpread(_objectSpread({},query2(state2)),queryHandles);});var actionHandlers={};actions2.forEach(function(action){actionHandlers=_objectSpread(_objectSpread({},action(dispatch2,query,state2)),actionHandlers);});return api;};var defineProperty=function defineProperty(obj,property,definition){if(typeof definition==="function"){obj[property]=definition;return;}Object.defineProperty(obj,property,_objectSpread({},definition));};var forin=function forin(obj,cb){for(var key in obj){if(!obj.hasOwnProperty(key)){continue;}cb(key,obj[key]);}};var createObject=function createObject(definition){var obj={};forin(definition,function(property){defineProperty(obj,property,definition[property]);});return obj;};var attr=function attr(node,name2){var value=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(value===null){return node.getAttribute(name2)||node.hasAttribute(name2);}node.setAttribute(name2,value);};var ns="http://www.w3.org/2000/svg";var svgElements=["svg","path"];var isSVGElement=function isSVGElement(tag){return svgElements.includes(tag);};var createElement=function createElement(tag,className){var attributes=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(_typeof2(className)==="object"){attributes=className;className=null;}var element=isSVGElement(tag)?document.createElementNS(ns,tag):document.createElement(tag);if(className){if(isSVGElement(tag)){attr(element,"class",className);}else{element.className=className;}}forin(attributes,function(name2,value){attr(element,name2,value);});return element;};var appendChild=function appendChild(parent){return function(child,index){if(typeof index!=="undefined"&&parent.children[index]){parent.insertBefore(child,parent.children[index]);}else{parent.appendChild(child);}};};var appendChildView=function appendChildView(parent,childViews){return function(view,index){if(typeof index!=="undefined"){childViews.splice(index,0,view);}else{childViews.push(view);}return view;};};var removeChildView=function removeChildView(parent,childViews){return function(view){childViews.splice(childViews.indexOf(view),1);if(view.element.parentNode){parent.removeChild(view.element);}return view;};};var IS_BROWSER=function(){return typeof window!=="undefined"&&typeof window.document!=="undefined";}();var isBrowser=function isBrowser(){return IS_BROWSER;};var testElement=isBrowser()?createElement("svg"):{};var getChildCount="children"in testElement?function(el){return el.children.length;}:function(el){return el.childNodes.length;};var getViewRect=function getViewRect(elementRect,childViews,offset,scale){var left=offset[0]||elementRect.left;var top=offset[1]||elementRect.top;var right=left+elementRect.width;var bottom=top+elementRect.height*(scale[1]||1);var rect={element:_objectSpread({},elementRect),inner:{left:elementRect.left,top:elementRect.top,right:elementRect.right,bottom:elementRect.bottom},outer:{left:left,top:top,right:right,bottom:bottom}};childViews.filter(function(childView){return!childView.isRectIgnored();}).map(function(childView){return childView.rect;}).forEach(function(childViewRect){expandRect(rect.inner,_objectSpread({},childViewRect.inner));expandRect(rect.outer,_objectSpread({},childViewRect.outer));});calculateRectSize(rect.inner);rect.outer.bottom+=rect.element.marginBottom;rect.outer.right+=rect.element.marginRight;calculateRectSize(rect.outer);return rect;};var expandRect=function expandRect(parent,child){child.top+=parent.top;child.right+=parent.left;child.bottom+=parent.top;child.left+=parent.left;if(child.bottom>parent.bottom){parent.bottom=child.bottom;}if(child.right>parent.right){parent.right=child.right;}};var calculateRectSize=function calculateRectSize(rect){rect.width=rect.right-rect.left;rect.height=rect.bottom-rect.top;};var isNumber=function isNumber(value){return typeof value==="number";};var thereYet=function thereYet(position,destination,velocity){var errorMargin=arguments.length>3&&arguments[3]!==undefined?arguments[3]:1e-3;return Math.abs(position-destination)<errorMargin&&Math.abs(velocity)<errorMargin;};var spring=function spring(){var _ref5=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref5$stiffness=_ref5.stiffness,stiffness=_ref5$stiffness===void 0?0.5:_ref5$stiffness,_ref5$damping=_ref5.damping,damping=_ref5$damping===void 0?0.75:_ref5$damping,_ref5$mass=_ref5.mass,mass=_ref5$mass===void 0?10:_ref5$mass;var target=null;var position=null;var velocity=0;var resting=false;var interpolate=function interpolate(ts,skipToEndState){if(resting)return;if(!(isNumber(target)&&isNumber(position))){resting=true;velocity=0;return;}var f=-(position-target)*stiffness;velocity+=f/mass;position+=velocity;velocity*=damping;if(thereYet(position,target,velocity)||skipToEndState){position=target;velocity=0;resting=true;api.onupdate(position);api.oncomplete(position);}else{api.onupdate(position);}};var setTarget=function setTarget(value){if(isNumber(value)&&!isNumber(position)){position=value;}if(target===null){target=value;position=value;}target=value;if(position===target||typeof target==="undefined"){resting=true;velocity=0;api.onupdate(position);api.oncomplete(position);return;}resting=false;};var api=createObject({interpolate:interpolate,target:{set:setTarget,get:function get(){return target;}},resting:{get:function get(){return resting;}},onupdate:function onupdate(value){},oncomplete:function oncomplete(value){}});return api;};var easeInOutQuad=function easeInOutQuad(t2){return t2<0.5?2*t2*t2:-1+(4-2*t2)*t2;};var tween=function tween(){var _ref6=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref6$duration=_ref6.duration,duration=_ref6$duration===void 0?500:_ref6$duration,_ref6$easing=_ref6.easing,easing=_ref6$easing===void 0?easeInOutQuad:_ref6$easing,_ref6$delay=_ref6.delay,delay=_ref6$delay===void 0?0:_ref6$delay;var start=null;var t2;var p2;var resting=true;var reverse=false;var target=null;var interpolate=function interpolate(ts,skipToEndState){if(resting||target===null)return;if(start===null){start=ts;}if(ts-start<delay)return;t2=ts-start-delay;if(t2>=duration||skipToEndState){t2=1;p2=reverse?0:1;api.onupdate(p2*target);api.oncomplete(p2*target);resting=true;}else{p2=t2/duration;api.onupdate((t2>=0?easing(reverse?1-p2:p2):0)*target);}};var api=createObject({interpolate:interpolate,target:{get:function get(){return reverse?0:target;},set:function set(value){if(target===null){target=value;api.onupdate(value);api.oncomplete(value);return;}if(value<target){target=1;reverse=true;}else{reverse=false;target=value;}resting=false;start=null;}},resting:{get:function get(){return resting;}},onupdate:function onupdate(value){},oncomplete:function oncomplete(value){}});return api;};var animator={spring:spring,tween:tween};var createAnimator=function createAnimator(definition,category,property){var def=definition[category]&&_typeof2(definition[category][property])==="object"?definition[category][property]:definition[category]||definition;var type=typeof def==="string"?def:def.type;var props=_typeof2(def)==="object"?_objectSpread({},def):{};return animator[type]?animator[type](props):null;};var addGetSet=function addGetSet(keys,obj,props){var overwrite=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;obj=Array.isArray(obj)?obj:[obj];obj.forEach(function(o2){keys.forEach(function(key){var name2=key;var getter=function getter(){return props[key];};var setter=function setter(value){return props[key]=value;};if(_typeof2(key)==="object"){name2=key.key;getter=key.getter||getter;setter=key.setter||setter;}if(o2[name2]&&!overwrite){return;}o2[name2]={get:getter,set:setter};});});};var animations=function animations(_ref7){var mixinConfig=_ref7.mixinConfig,viewProps=_ref7.viewProps,viewInternalAPI=_ref7.viewInternalAPI,viewExternalAPI=_ref7.viewExternalAPI;var initialProps=_objectSpread({},viewProps);var animations2=[];forin(mixinConfig,function(property,animation){var animator2=createAnimator(animation);if(!animator2){return;}animator2.onupdate=function(value){viewProps[property]=value;};animator2.target=initialProps[property];var prop={key:property,setter:function setter(value){if(animator2.target===value){return;}animator2.target=value;},getter:function getter(){return viewProps[property];}};addGetSet([prop],[viewInternalAPI,viewExternalAPI],viewProps,true);animations2.push(animator2);});return{write:function write(ts){var skipToEndState=document.hidden;var resting=true;animations2.forEach(function(animation){if(!animation.resting)resting=false;animation.interpolate(ts,skipToEndState);});return resting;},destroy:function destroy(){}};};var addEvent=function addEvent(element){return function(type,fn2){element.addEventListener(type,fn2);};};var removeEvent=function removeEvent(element){return function(type,fn2){element.removeEventListener(type,fn2);};};var listeners=function listeners(_ref8){var mixinConfig=_ref8.mixinConfig,viewProps=_ref8.viewProps,viewInternalAPI=_ref8.viewInternalAPI,viewExternalAPI=_ref8.viewExternalAPI,viewState=_ref8.viewState,view=_ref8.view;var events=[];var add=addEvent(view.element);var remove=removeEvent(view.element);viewExternalAPI.on=function(type,fn2){events.push({type:type,fn:fn2});add(type,fn2);};viewExternalAPI.off=function(type,fn2){events.splice(events.findIndex(function(event){return event.type===type&&event.fn===fn2;}),1);remove(type,fn2);};return{write:function write(){return true;},destroy:function destroy(){events.forEach(function(event){remove(event.type,event.fn);});}};};var apis=function apis(_ref9){var mixinConfig=_ref9.mixinConfig,viewProps=_ref9.viewProps,viewExternalAPI=_ref9.viewExternalAPI;addGetSet(mixinConfig,viewExternalAPI,viewProps);};var isDefined=function isDefined(value){return value!=null;};var defaults={opacity:1,scaleX:1,scaleY:1,translateX:0,translateY:0,rotateX:0,rotateY:0,rotateZ:0,originX:0,originY:0};var styles=function styles(_ref10){var mixinConfig=_ref10.mixinConfig,viewProps=_ref10.viewProps,viewInternalAPI=_ref10.viewInternalAPI,viewExternalAPI=_ref10.viewExternalAPI,view=_ref10.view;var initialProps=_objectSpread({},viewProps);var currentProps={};addGetSet(mixinConfig,[viewInternalAPI,viewExternalAPI],viewProps);var getOffset=function getOffset(){return[viewProps["translateX"]||0,viewProps["translateY"]||0];};var getScale=function getScale(){return[viewProps["scaleX"]||0,viewProps["scaleY"]||0];};var getRect=function getRect(){return view.rect?getViewRect(view.rect,view.childViews,getOffset(),getScale()):null;};viewInternalAPI.rect={get:getRect};viewExternalAPI.rect={get:getRect};mixinConfig.forEach(function(key){viewProps[key]=typeof initialProps[key]==="undefined"?defaults[key]:initialProps[key];});return{write:function write(){if(!propsHaveChanged(currentProps,viewProps)){return;}applyStyles(view.element,viewProps);Object.assign(currentProps,_objectSpread({},viewProps));return true;},destroy:function destroy(){}};};var propsHaveChanged=function propsHaveChanged(currentProps,newProps){if(Object.keys(currentProps).length!==Object.keys(newProps).length){return true;}for(var prop in newProps){if(newProps[prop]!==currentProps[prop]){return true;}}return false;};var applyStyles=function applyStyles(element,_ref11){var opacity=_ref11.opacity,perspective=_ref11.perspective,translateX=_ref11.translateX,translateY=_ref11.translateY,scaleX=_ref11.scaleX,scaleY=_ref11.scaleY,rotateX=_ref11.rotateX,rotateY=_ref11.rotateY,rotateZ=_ref11.rotateZ,originX=_ref11.originX,originY=_ref11.originY,width=_ref11.width,height=_ref11.height;var transforms2="";var styles3="";if(isDefined(originX)||isDefined(originY)){styles3+="transform-origin: ".concat(originX||0,"px ").concat(originY||0,"px;");}if(isDefined(perspective)){transforms2+="perspective(".concat(perspective,"px) ");}if(isDefined(translateX)||isDefined(translateY)){transforms2+="translate3d(".concat(translateX||0,"px, ").concat(translateY||0,"px, 0) ");}if(isDefined(scaleX)||isDefined(scaleY)){transforms2+="scale3d(".concat(isDefined(scaleX)?scaleX:1,", ").concat(isDefined(scaleY)?scaleY:1,", 1) ");}if(isDefined(rotateZ)){transforms2+="rotateZ(".concat(rotateZ,"rad) ");}if(isDefined(rotateX)){transforms2+="rotateX(".concat(rotateX,"rad) ");}if(isDefined(rotateY)){transforms2+="rotateY(".concat(rotateY,"rad) ");}if(transforms2.length){styles3+="transform:".concat(transforms2,";");}if(isDefined(opacity)){styles3+="opacity:".concat(opacity,";");if(opacity===0){styles3+="visibility:hidden;";}if(opacity<1){styles3+="pointer-events:none;";}}if(isDefined(height)){styles3+="height:".concat(height,"px;");}if(isDefined(width)){styles3+="width:".concat(width,"px;");}var elementCurrentStyle=element.elementCurrentStyle||"";if(styles3.length!==elementCurrentStyle.length||styles3!==elementCurrentStyle){element.style.cssText=styles3;element.elementCurrentStyle=styles3;}};var Mixins={styles:styles,listeners:listeners,animations:animations,apis:apis};var updateRect=function updateRect(){var rect=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var element=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var style=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(!element.layoutCalculated){rect.paddingTop=parseInt(style.paddingTop,10)||0;rect.marginTop=parseInt(style.marginTop,10)||0;rect.marginRight=parseInt(style.marginRight,10)||0;rect.marginBottom=parseInt(style.marginBottom,10)||0;rect.marginLeft=parseInt(style.marginLeft,10)||0;element.layoutCalculated=true;}rect.left=element.offsetLeft||0;rect.top=element.offsetTop||0;rect.width=element.offsetWidth||0;rect.height=element.offsetHeight||0;rect.right=rect.left+rect.width;rect.bottom=rect.top+rect.height;rect.scrollTop=element.scrollTop;rect.hidden=element.offsetParent===null;return rect;};var createView=function createView(){var _ref12=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref12$tag=_ref12.tag,tag=_ref12$tag===void 0?"div":_ref12$tag,_ref12$name=_ref12.name,name2=_ref12$name===void 0?null:_ref12$name,_ref12$attributes=_ref12.attributes,attributes=_ref12$attributes===void 0?{}:_ref12$attributes,_ref12$read=_ref12.read,read=_ref12$read===void 0?function(){}:_ref12$read,_ref12$write=_ref12.write,write2=_ref12$write===void 0?function(){}:_ref12$write,_ref12$create=_ref12.create,create2=_ref12$create===void 0?function(){}:_ref12$create,_ref12$destroy=_ref12.destroy,destroy2=_ref12$destroy===void 0?function(){}:_ref12$destroy,_ref12$filterFrameAct=_ref12.filterFrameActionsForChild,filterFrameActionsForChild=_ref12$filterFrameAct===void 0?function(child,actions2){return actions2;}:_ref12$filterFrameAct,_ref12$didCreateView=_ref12.didCreateView,didCreateView=_ref12$didCreateView===void 0?function(){}:_ref12$didCreateView,_ref12$didWriteView=_ref12.didWriteView,didWriteView=_ref12$didWriteView===void 0?function(){}:_ref12$didWriteView,_ref12$ignoreRect=_ref12.ignoreRect,ignoreRect=_ref12$ignoreRect===void 0?false:_ref12$ignoreRect,_ref12$ignoreRectUpda=_ref12.ignoreRectUpdate,ignoreRectUpdate=_ref12$ignoreRectUpda===void 0?false:_ref12$ignoreRectUpda,_ref12$mixins=_ref12.mixins,mixins=_ref12$mixins===void 0?[]:_ref12$mixins;return function(store){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var element=createElement(tag,"filepond--".concat(name2),attributes);var style=window.getComputedStyle(element,null);var rect=updateRect();var frameRect=null;var isResting=false;var childViews=[];var activeMixins=[];var ref={};var state2={};var writers=[write2];var readers=[read];var destroyers=[destroy2];var getElement=function getElement(){return element;};var getChildViews=function getChildViews(){return childViews.concat();};var getReference=function getReference(){return ref;};var createChildView=function createChildView(store2){return function(view,props2){return view(store2,props2);};};var getRect=function getRect(){if(frameRect){return frameRect;}frameRect=getViewRect(rect,childViews,[0,0],[1,1]);return frameRect;};var getStyle=function getStyle(){return style;};var _read=function _read(){frameRect=null;childViews.forEach(function(child){return child._read();});var shouldUpdate=!(ignoreRectUpdate&&rect.width&&rect.height);if(shouldUpdate){updateRect(rect,element,style);}var api={root:internalAPI,props:props,rect:rect};readers.forEach(function(reader){return reader(api);});};var _write=function _write(ts,frameActions,shouldOptimize){var resting=frameActions.length===0;writers.forEach(function(writer){var writerResting=writer({props:props,root:internalAPI,actions:frameActions,timestamp:ts,shouldOptimize:shouldOptimize});if(writerResting===false){resting=false;}});activeMixins.forEach(function(mixin){var mixinResting=mixin.write(ts);if(mixinResting===false){resting=false;}});childViews.filter(function(child){return!!child.element.parentNode;}).forEach(function(child){var childResting=child._write(ts,filterFrameActionsForChild(child,frameActions),shouldOptimize);if(!childResting){resting=false;}});childViews.forEach(function(child,index){if(child.element.parentNode){return;}internalAPI.appendChild(child.element,index);child._read();child._write(ts,filterFrameActionsForChild(child,frameActions),shouldOptimize);resting=false;});isResting=resting;didWriteView({props:props,root:internalAPI,actions:frameActions,timestamp:ts});return resting;};var _destroy=function _destroy(){activeMixins.forEach(function(mixin){return mixin.destroy();});destroyers.forEach(function(destroyer){destroyer({root:internalAPI,props:props});});childViews.forEach(function(child){return child._destroy();});};var sharedAPIDefinition={element:{get:getElement},style:{get:getStyle},childViews:{get:getChildViews}};var internalAPIDefinition=_objectSpread(_objectSpread({},sharedAPIDefinition),{},{rect:{get:getRect},ref:{get:getReference},is:function is(needle){return name2===needle;},appendChild:appendChild(element),createChildView:createChildView(store),linkView:function linkView(view){childViews.push(view);return view;},unlinkView:function unlinkView(view){childViews.splice(childViews.indexOf(view),1);},appendChildView:appendChildView(element,childViews),removeChildView:removeChildView(element,childViews),registerWriter:function registerWriter(writer){return writers.push(writer);},registerReader:function registerReader(reader){return readers.push(reader);},registerDestroyer:function registerDestroyer(destroyer){return destroyers.push(destroyer);},invalidateLayout:function invalidateLayout(){return element.layoutCalculated=false;},dispatch:store.dispatch,query:store.query});var externalAPIDefinition={element:{get:getElement},childViews:{get:getChildViews},rect:{get:getRect},resting:{get:function get(){return isResting;}},isRectIgnored:function isRectIgnored(){return ignoreRect;},_read:_read,_write:_write,_destroy:_destroy};var mixinAPIDefinition=_objectSpread(_objectSpread({},sharedAPIDefinition),{},{rect:{get:function get(){return rect;}}});Object.keys(mixins).sort(function(a2,b){if(a2==="styles"){return 1;}else if(b==="styles"){return-1;}return 0;}).forEach(function(key){var mixinAPI=Mixins[key]({mixinConfig:mixins[key],viewProps:props,viewState:state2,viewInternalAPI:internalAPIDefinition,viewExternalAPI:externalAPIDefinition,view:createObject(mixinAPIDefinition)});if(mixinAPI){activeMixins.push(mixinAPI);}});var internalAPI=createObject(internalAPIDefinition);create2({root:internalAPI,props:props});var childCount=getChildCount(element);childViews.forEach(function(child,index){internalAPI.appendChild(child.element,childCount+index);});didCreateView(internalAPI);return createObject(externalAPIDefinition);};};var createPainter=function createPainter(read,write2){var fps=arguments.length>2&&arguments[2]!==undefined?arguments[2]:60;var name2="__framePainter";if(window[name2]){window[name2].readers.push(read);window[name2].writers.push(write2);return;}window[name2]={readers:[read],writers:[write2]};var painter=window[name2];var interval=1e3/fps;var last=null;var id=null;var requestTick=null;var cancelTick=null;var setTimerType=function setTimerType(){if(document.hidden){requestTick=function requestTick(){return window.setTimeout(function(){return tick(performance.now());},interval);};cancelTick=function cancelTick(){return window.clearTimeout(id);};}else{requestTick=function requestTick(){return window.requestAnimationFrame(tick);};cancelTick=function cancelTick(){return window.cancelAnimationFrame(id);};}};document.addEventListener("visibilitychange",function(){if(cancelTick)cancelTick();setTimerType();tick(performance.now());});var tick=function tick(ts){id=requestTick(tick);if(!last){last=ts;}var delta=ts-last;if(delta<=interval){return;}last=ts-delta%interval;painter.readers.forEach(function(read2){return read2();});painter.writers.forEach(function(write3){return write3(ts);});};setTimerType();tick(performance.now());return{pause:function pause(){cancelTick(id);}};};var createRoute=function createRoute(routes,fn2){return function(_ref13){var root2=_ref13.root,props=_ref13.props,_ref13$actions=_ref13.actions,actions2=_ref13$actions===void 0?[]:_ref13$actions,timestamp=_ref13.timestamp,shouldOptimize=_ref13.shouldOptimize;actions2.filter(function(action){return routes[action.type];}).forEach(function(action){return routes[action.type]({root:root2,props:props,action:action.data,timestamp:timestamp,shouldOptimize:shouldOptimize});});if(fn2){fn2({root:root2,props:props,actions:actions2,timestamp:timestamp,shouldOptimize:shouldOptimize});}};};var _insertBefore=function insertBefore(newNode,referenceNode){return referenceNode.parentNode.insertBefore(newNode,referenceNode);};var _insertAfter=function insertAfter(newNode,referenceNode){return referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling);};var isArray=function isArray(value){return Array.isArray(value);};var isEmpty=function isEmpty(value){return value==null;};var trim=function trim(str){return str.trim();};var toString=function toString(value){return""+value;};var toArray=function toArray(value){var splitter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:",";if(isEmpty(value)){return[];}if(isArray(value)){return value;}return toString(value).split(splitter).map(trim).filter(function(str){return str.length;});};var isBoolean=function isBoolean(value){return typeof value==="boolean";};var toBoolean=function toBoolean(value){return isBoolean(value)?value:value==="true";};var isString=function isString(value){return typeof value==="string";};var toNumber=function toNumber(value){return isNumber(value)?value:isString(value)?toString(value).replace(/[a-z]+/gi,""):0;};var toInt=function toInt(value){return parseInt(toNumber(value),10);};var toFloat=function toFloat(value){return parseFloat(toNumber(value));};var isInt=function isInt(value){return isNumber(value)&&isFinite(value)&&Math.floor(value)===value;};var toBytes=function toBytes(value){var base=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1e3;if(isInt(value)){return value;}var naturalFileSize=toString(value).trim();if(/MB$/i.test(naturalFileSize)){naturalFileSize=naturalFileSize.replace(/MB$i/,"").trim();return toInt(naturalFileSize)*base*base;}if(/KB/i.test(naturalFileSize)){naturalFileSize=naturalFileSize.replace(/KB$i/,"").trim();return toInt(naturalFileSize)*base;}return toInt(naturalFileSize);};var isFunction=function isFunction(value){return typeof value==="function";};var toFunctionReference=function toFunctionReference(string){var ref=self;var levels=string.split(".");var level=null;while(level=levels.shift()){ref=ref[level];if(!ref){return null;}}return ref;};var methods={process:"POST",patch:"PATCH",revert:"DELETE",fetch:"GET",restore:"GET",load:"GET"};var createServerAPI=function createServerAPI(outline){var api={};api.url=isString(outline)?outline:outline.url||"";api.timeout=outline.timeout?parseInt(outline.timeout,10):0;api.headers=outline.headers?outline.headers:{};forin(methods,function(key){api[key]=createAction(key,outline[key],methods[key],api.timeout,api.headers);});api.process=outline.process||isString(outline)||outline.url?api.process:null;api.remove=outline.remove||null;delete api.headers;return api;};var createAction=function createAction(name2,outline,method,timeout,headers){if(outline===null){return null;}if(typeof outline==="function"){return outline;}var action={url:method==="GET"||method==="PATCH"?"?".concat(name2,"="):"",method:method,headers:headers,withCredentials:false,timeout:timeout,onload:null,ondata:null,onerror:null};if(isString(outline)){action.url=outline;return action;}Object.assign(action,outline);if(isString(action.headers)){var parts=action.headers.split(/:(.+)/);action.headers={header:parts[0],value:parts[1]};}action.withCredentials=toBoolean(action.withCredentials);return action;};var toServerAPI=function toServerAPI(value){return createServerAPI(value);};var isNull=function isNull(value){return value===null;};var isObject=function isObject(value){return _typeof2(value)==="object"&&value!==null;};var isAPI=function isAPI(value){return isObject(value)&&isString(value.url)&&isObject(value.process)&&isObject(value.revert)&&isObject(value.restore)&&isObject(value.fetch);};var getType=function getType(value){if(isArray(value)){return"array";}if(isNull(value)){return"null";}if(isInt(value)){return"int";}if(/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(value)){return"bytes";}if(isAPI(value)){return"api";}return _typeof2(value);};var replaceSingleQuotes=function replaceSingleQuotes(str){return str.replace(/{\s*'/g,'{"').replace(/'\s*}/g,'"}').replace(/'\s*:/g,'":').replace(/:\s*'/g,':"').replace(/,\s*'/g,',"').replace(/'\s*,/g,'",');};var conversionTable={array:toArray,"boolean":toBoolean,"int":function int(value){return getType(value)==="bytes"?toBytes(value):toInt(value);},number:toFloat,"float":toFloat,bytes:toBytes,string:function string(value){return isFunction(value)?value:toString(value);},"function":function _function(value){return toFunctionReference(value);},serverapi:toServerAPI,object:function object(value){try{return JSON.parse(replaceSingleQuotes(value));}catch(e2){return null;}}};var convertTo=function convertTo(value,type){return conversionTable[type](value);};var getValueByType=function getValueByType(newValue,defaultValue,valueType){if(newValue===defaultValue){return newValue;}var newValueType=getType(newValue);if(newValueType!==valueType){var convertedValue=convertTo(newValue,valueType);newValueType=getType(convertedValue);if(convertedValue===null){throw"Trying to assign value with incorrect type to \"".concat(option,"\", allowed type: \"").concat(valueType,"\"");}else{newValue=convertedValue;}}return newValue;};var createOption=function createOption(defaultValue,valueType){var currentValue=defaultValue;return{enumerable:true,get:function get(){return currentValue;},set:function set(newValue){currentValue=getValueByType(newValue,defaultValue,valueType);}};};var createOptions=function createOptions(options2){var obj={};forin(options2,function(prop){var optionDefinition=options2[prop];obj[prop]=createOption(optionDefinition[0],optionDefinition[1]);});return createObject(obj);};var createInitialState=function createInitialState(options2){return{items:[],listUpdateTimeout:null,itemUpdateTimeout:null,processingQueue:[],options:createOptions(options2)};};var fromCamels=function fromCamels(string){var separator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"-";return string.split(/(?=[A-Z])/).map(function(part){return part.toLowerCase();}).join(separator);};var createOptionAPI=function createOptionAPI(store,options2){var obj={};forin(options2,function(key){obj[key]={get:function get(){return store.getState().options[key];},set:function set(value){store.dispatch("SET_".concat(fromCamels(key,"_").toUpperCase()),{value:value});}};});return obj;};var createOptionActions=function createOptionActions(options2){return function(dispatch2,query,state2){var obj={};forin(options2,function(key){var name2=fromCamels(key,"_").toUpperCase();obj["SET_".concat(name2)]=function(action){try{state2.options[key]=action.value;}catch(e2){}dispatch2("DID_SET_".concat(name2),{value:state2.options[key]});};});return obj;};};var createOptionQueries=function createOptionQueries(options2){return function(state2){var obj={};forin(options2,function(key){obj["GET_".concat(fromCamels(key,"_").toUpperCase())]=function(action){return state2.options[key];};});return obj;};};var InteractionMethod={API:1,DROP:2,BROWSE:3,PASTE:4,NONE:5};var getUniqueId=function getUniqueId(){return Math.random().toString(36).substr(2,9);};var arrayRemove=function arrayRemove(arr,index){return arr.splice(index,1);};var run=function run(cb,sync){if(sync){cb();}else if(document.hidden){Promise.resolve(1).then(cb);}else{setTimeout(cb,0);}};var on=function on(){var listeners2=[];var off=function off(event,cb){arrayRemove(listeners2,listeners2.findIndex(function(listener){return listener.event===event&&(listener.cb===cb||!cb);}));};var _fire=function fire(event,args,sync){listeners2.filter(function(listener){return listener.event===event;}).map(function(listener){return listener.cb;}).forEach(function(cb){return run(function(){return cb.apply(void 0,_toConsumableArray(args));},sync);});};return{fireSync:function fireSync(event){for(var _len5=arguments.length,args=new Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++){args[_key5-1]=arguments[_key5];}_fire(event,args,true);},fire:function fire(event){for(var _len6=arguments.length,args=new Array(_len6>1?_len6-1:0),_key6=1;_key6<_len6;_key6++){args[_key6-1]=arguments[_key6];}_fire(event,args,false);},on:function on(event,cb){listeners2.push({event:event,cb:cb});},onOnce:function onOnce(event,_cb){listeners2.push({event:event,cb:function cb(){off(event,_cb);_cb.apply(void 0,arguments);}});},off:off};};var copyObjectPropertiesToObject=function copyObjectPropertiesToObject(src,target,excluded){Object.getOwnPropertyNames(src).filter(function(property){return!excluded.includes(property);}).forEach(function(key){return Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(src,key));});};var PRIVATE=["fire","process","revert","load","on","off","onOnce","retryLoad","extend","archive","archived","release","released","requestProcessing","freeze"];var createItemAPI=function createItemAPI(item2){var api={};copyObjectPropertiesToObject(item2,api,PRIVATE);return api;};var removeReleasedItems=function removeReleasedItems(items){items.forEach(function(item2,index){if(item2.released){arrayRemove(items,index);}});};var ItemStatus={INIT:1,IDLE:2,PROCESSING_QUEUED:9,PROCESSING:3,PROCESSING_COMPLETE:5,PROCESSING_ERROR:6,PROCESSING_REVERT_ERROR:10,LOADING:7,LOAD_ERROR:8};var FileOrigin={INPUT:1,LIMBO:2,LOCAL:3};var getNonNumeric=function getNonNumeric(str){return /[^0-9]+/.exec(str);};var getDecimalSeparator=function getDecimalSeparator(){return getNonNumeric(1.1.toLocaleString())[0];};var getThousandsSeparator=function getThousandsSeparator(){var decimalSeparator=getDecimalSeparator();var thousandsStringWithSeparator=1e3.toLocaleString();var thousandsStringWithoutSeparator=1e3.toString();if(thousandsStringWithSeparator!==thousandsStringWithoutSeparator){return getNonNumeric(thousandsStringWithSeparator)[0];}return decimalSeparator==="."?",":".";};var Type={BOOLEAN:"boolean",INT:"int",NUMBER:"number",STRING:"string",ARRAY:"array",OBJECT:"object",FUNCTION:"function",ACTION:"action",SERVER_API:"serverapi",REGEX:"regex"};var filters=[];var applyFilterChain=function applyFilterChain(key,value,utils){return new Promise(function(resolve,reject){var matchingFilters=filters.filter(function(f){return f.key===key;}).map(function(f){return f.cb;});if(matchingFilters.length===0){resolve(value);return;}var initialFilter=matchingFilters.shift();matchingFilters.reduce(function(current,next){return current.then(function(value2){return next(value2,utils);});},initialFilter(value,utils)).then(function(value2){return resolve(value2);})["catch"](function(error2){return reject(error2);});});};var applyFilters=function applyFilters(key,value,utils){return filters.filter(function(f){return f.key===key;}).map(function(f){return f.cb(value,utils);});};var addFilter=function addFilter(key,cb){return filters.push({key:key,cb:cb});};var extendDefaultOptions=function extendDefaultOptions(additionalOptions){return Object.assign(defaultOptions,additionalOptions);};var getOptions=function getOptions(){return _objectSpread({},defaultOptions);};var setOptions=function setOptions(opts){forin(opts,function(key,value){if(!defaultOptions[key]){return;}defaultOptions[key][0]=getValueByType(value,defaultOptions[key][0],defaultOptions[key][1]);});};var defaultOptions={id:[null,Type.STRING],name:["filepond",Type.STRING],disabled:[false,Type.BOOLEAN],className:[null,Type.STRING],required:[false,Type.BOOLEAN],captureMethod:[null,Type.STRING],allowSyncAcceptAttribute:[true,Type.BOOLEAN],allowDrop:[true,Type.BOOLEAN],allowBrowse:[true,Type.BOOLEAN],allowPaste:[true,Type.BOOLEAN],allowMultiple:[false,Type.BOOLEAN],allowReplace:[true,Type.BOOLEAN],allowRevert:[true,Type.BOOLEAN],allowRemove:[true,Type.BOOLEAN],allowProcess:[true,Type.BOOLEAN],allowReorder:[false,Type.BOOLEAN],allowDirectoriesOnly:[false,Type.BOOLEAN],storeAsFile:[false,Type.BOOLEAN],forceRevert:[false,Type.BOOLEAN],maxFiles:[null,Type.INT],checkValidity:[false,Type.BOOLEAN],itemInsertLocationFreedom:[true,Type.BOOLEAN],itemInsertLocation:["before",Type.STRING],itemInsertInterval:[75,Type.INT],dropOnPage:[false,Type.BOOLEAN],dropOnElement:[true,Type.BOOLEAN],dropValidation:[false,Type.BOOLEAN],ignoredFiles:[[".ds_store","thumbs.db","desktop.ini"],Type.ARRAY],instantUpload:[true,Type.BOOLEAN],maxParallelUploads:[2,Type.INT],allowMinimumUploadDuration:[true,Type.BOOLEAN],chunkUploads:[false,Type.BOOLEAN],chunkForce:[false,Type.BOOLEAN],chunkSize:[5e6,Type.INT],chunkRetryDelays:[[500,1e3,3e3],Type.ARRAY],server:[null,Type.SERVER_API],fileSizeBase:[1e3,Type.INT],labelFileSizeBytes:["bytes",Type.STRING],labelFileSizeKilobytes:["KB",Type.STRING],labelFileSizeMegabytes:["MB",Type.STRING],labelFileSizeGigabytes:["GB",Type.STRING],labelDecimalSeparator:[getDecimalSeparator(),Type.STRING],labelThousandsSeparator:[getThousandsSeparator(),Type.STRING],labelIdle:['Drag & Drop your files or <span class="filepond--label-action">Browse</span>',Type.STRING],labelInvalidField:["Field contains invalid files",Type.STRING],labelFileWaitingForSize:["Waiting for size",Type.STRING],labelFileSizeNotAvailable:["Size not available",Type.STRING],labelFileCountSingular:["file in list",Type.STRING],labelFileCountPlural:["files in list",Type.STRING],labelFileLoading:["Loading",Type.STRING],labelFileAdded:["Added",Type.STRING],labelFileLoadError:["Error during load",Type.STRING],labelFileRemoved:["Removed",Type.STRING],labelFileRemoveError:["Error during remove",Type.STRING],labelFileProcessing:["Uploading",Type.STRING],labelFileProcessingComplete:["Upload complete",Type.STRING],labelFileProcessingAborted:["Upload cancelled",Type.STRING],labelFileProcessingError:["Error during upload",Type.STRING],labelFileProcessingRevertError:["Error during revert",Type.STRING],labelTapToCancel:["tap to cancel",Type.STRING],labelTapToRetry:["tap to retry",Type.STRING],labelTapToUndo:["tap to undo",Type.STRING],labelButtonRemoveItem:["Remove",Type.STRING],labelButtonAbortItemLoad:["Abort",Type.STRING],labelButtonRetryItemLoad:["Retry",Type.STRING],labelButtonAbortItemProcessing:["Cancel",Type.STRING],labelButtonUndoItemProcessing:["Undo",Type.STRING],labelButtonRetryItemProcessing:["Retry",Type.STRING],labelButtonProcessItem:["Upload",Type.STRING],iconRemove:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',Type.STRING],iconProcess:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',Type.STRING],iconRetry:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',Type.STRING],iconUndo:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',Type.STRING],iconDone:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',Type.STRING],oninit:[null,Type.FUNCTION],onwarning:[null,Type.FUNCTION],onerror:[null,Type.FUNCTION],onactivatefile:[null,Type.FUNCTION],oninitfile:[null,Type.FUNCTION],onaddfilestart:[null,Type.FUNCTION],onaddfileprogress:[null,Type.FUNCTION],onaddfile:[null,Type.FUNCTION],onprocessfilestart:[null,Type.FUNCTION],onprocessfileprogress:[null,Type.FUNCTION],onprocessfileabort:[null,Type.FUNCTION],onprocessfilerevert:[null,Type.FUNCTION],onprocessfile:[null,Type.FUNCTION],onprocessfiles:[null,Type.FUNCTION],onremovefile:[null,Type.FUNCTION],onpreparefile:[null,Type.FUNCTION],onupdatefiles:[null,Type.FUNCTION],onreorderfiles:[null,Type.FUNCTION],beforeDropFile:[null,Type.FUNCTION],beforeAddFile:[null,Type.FUNCTION],beforeRemoveFile:[null,Type.FUNCTION],beforePrepareFile:[null,Type.FUNCTION],stylePanelLayout:[null,Type.STRING],stylePanelAspectRatio:[null,Type.STRING],styleItemPanelAspectRatio:[null,Type.STRING],styleButtonRemoveItemPosition:["left",Type.STRING],styleButtonProcessItemPosition:["right",Type.STRING],styleLoadIndicatorPosition:["right",Type.STRING],styleProgressIndicatorPosition:["right",Type.STRING],styleButtonRemoveItemAlign:[false,Type.BOOLEAN],files:[[],Type.ARRAY],credits:[["https://pqina.nl/","Powered by PQINA"],Type.ARRAY]};var getItemByQuery=function getItemByQuery(items,query){if(isEmpty(query)){return items[0]||null;}if(isInt(query)){return items[query]||null;}if(_typeof2(query)==="object"){query=query.id;}return items.find(function(item2){return item2.id===query;})||null;};var getNumericAspectRatioFromString=function getNumericAspectRatioFromString(aspectRatio){if(isEmpty(aspectRatio)){return aspectRatio;}if(/:/.test(aspectRatio)){var parts=aspectRatio.split(":");return parts[1]/parts[0];}return parseFloat(aspectRatio);};var getActiveItems=function getActiveItems(items){return items.filter(function(item2){return!item2.archived;});};var Status={EMPTY:0,IDLE:1,ERROR:2,BUSY:3,READY:4};var res=null;var canUpdateFileInput=function canUpdateFileInput(){if(res===null){try{var dataTransfer=new DataTransfer();dataTransfer.items.add(new File(["hello world"],"This_Works.txt"));var el=document.createElement("input");el.setAttribute("type","file");el.files=dataTransfer.files;res=el.files.length===1;}catch(err){res=false;}}return res;};var ITEM_ERROR=[ItemStatus.LOAD_ERROR,ItemStatus.PROCESSING_ERROR,ItemStatus.PROCESSING_REVERT_ERROR];var ITEM_BUSY=[ItemStatus.LOADING,ItemStatus.PROCESSING,ItemStatus.PROCESSING_QUEUED,ItemStatus.INIT];var ITEM_READY=[ItemStatus.PROCESSING_COMPLETE];var isItemInErrorState=function isItemInErrorState(item2){return ITEM_ERROR.includes(item2.status);};var isItemInBusyState=function isItemInBusyState(item2){return ITEM_BUSY.includes(item2.status);};var isItemInReadyState=function isItemInReadyState(item2){return ITEM_READY.includes(item2.status);};var isAsync=function isAsync(state2){return isObject(state2.options.server)&&(isObject(state2.options.server.process)||isFunction(state2.options.server.process));};var queries=function queries(state2){return{GET_STATUS:function GET_STATUS(){var items=getActiveItems(state2.items);var EMPTY=Status.EMPTY,ERROR=Status.ERROR,BUSY=Status.BUSY,IDLE=Status.IDLE,READY=Status.READY;if(items.length===0)return EMPTY;if(items.some(isItemInErrorState))return ERROR;if(items.some(isItemInBusyState))return BUSY;if(items.some(isItemInReadyState))return READY;return IDLE;},GET_ITEM:function GET_ITEM(query){return getItemByQuery(state2.items,query);},GET_ACTIVE_ITEM:function GET_ACTIVE_ITEM(query){return getItemByQuery(getActiveItems(state2.items),query);},GET_ACTIVE_ITEMS:function GET_ACTIVE_ITEMS(){return getActiveItems(state2.items);},GET_ITEMS:function GET_ITEMS(){return state2.items;},GET_ITEM_NAME:function GET_ITEM_NAME(query){var item2=getItemByQuery(state2.items,query);return item2?item2.filename:null;},GET_ITEM_SIZE:function GET_ITEM_SIZE(query){var item2=getItemByQuery(state2.items,query);return item2?item2.fileSize:null;},GET_STYLES:function GET_STYLES(){return Object.keys(state2.options).filter(function(key){return /^style/.test(key);}).map(function(option2){return{name:option2,value:state2.options[option2]};});},GET_PANEL_ASPECT_RATIO:function GET_PANEL_ASPECT_RATIO(){var isShapeCircle=/circle/.test(state2.options.stylePanelLayout);var aspectRatio=isShapeCircle?1:getNumericAspectRatioFromString(state2.options.stylePanelAspectRatio);return aspectRatio;},GET_ITEM_PANEL_ASPECT_RATIO:function GET_ITEM_PANEL_ASPECT_RATIO(){return state2.options.styleItemPanelAspectRatio;},GET_ITEMS_BY_STATUS:function GET_ITEMS_BY_STATUS(status){return getActiveItems(state2.items).filter(function(item2){return item2.status===status;});},GET_TOTAL_ITEMS:function GET_TOTAL_ITEMS(){return getActiveItems(state2.items).length;},SHOULD_UPDATE_FILE_INPUT:function SHOULD_UPDATE_FILE_INPUT(){return state2.options.storeAsFile&&canUpdateFileInput()&&!isAsync(state2);},IS_ASYNC:function IS_ASYNC(){return isAsync(state2);},GET_FILE_SIZE_LABELS:function GET_FILE_SIZE_LABELS(query){return{labelBytes:query("GET_LABEL_FILE_SIZE_BYTES")||void 0,labelKilobytes:query("GET_LABEL_FILE_SIZE_KILOBYTES")||void 0,labelMegabytes:query("GET_LABEL_FILE_SIZE_MEGABYTES")||void 0,labelGigabytes:query("GET_LABEL_FILE_SIZE_GIGABYTES")||void 0};}};};var hasRoomForItem=function hasRoomForItem(state2){var count=getActiveItems(state2.items).length;if(!state2.options.allowMultiple){return count===0;}var maxFileCount=state2.options.maxFiles;if(maxFileCount===null){return true;}if(count<maxFileCount){return true;}return false;};var limit=function limit(value,min,max){return Math.max(Math.min(max,value),min);};var arrayInsert=function arrayInsert(arr,index,item2){return arr.splice(index,0,item2);};var insertItem=function insertItem(items,item2,index){if(isEmpty(item2)){return null;}if(typeof index==="undefined"){items.push(item2);return item2;}index=limit(index,0,items.length);arrayInsert(items,index,item2);return item2;};var isBase64DataURI=function isBase64DataURI(str){return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(str);};var getFilenameFromURL=function getFilenameFromURL(url){return url.split("/").pop().split("?").shift();};var getExtensionFromFilename=function getExtensionFromFilename(name2){return name2.split(".").pop();};var guesstimateExtension=function guesstimateExtension(type){if(typeof type!=="string"){return"";}var subtype=type.split("/").pop();if(/svg/.test(subtype)){return"svg";}if(/zip|compressed/.test(subtype)){return"zip";}if(/plain/.test(subtype)){return"txt";}if(/msword/.test(subtype)){return"doc";}if(/[a-z]+/.test(subtype)){if(subtype==="jpeg"){return"jpg";}return subtype;}return"";};var leftPad=function leftPad(value){var padding=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return(padding+value).slice(-padding.length);};var getDateString=function getDateString(){var date=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Date();return"".concat(date.getFullYear(),"-").concat(leftPad(date.getMonth()+1,"00"),"-").concat(leftPad(date.getDate(),"00"),"_").concat(leftPad(date.getHours(),"00"),"-").concat(leftPad(date.getMinutes(),"00"),"-").concat(leftPad(date.getSeconds(),"00"));};var getFileFromBlob=function getFileFromBlob(blob2,filename){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var extension=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var file2=typeof type==="string"?blob2.slice(0,blob2.size,type):blob2.slice(0,blob2.size,blob2.type);file2.lastModifiedDate=new Date();if(blob2._relativePath)file2._relativePath=blob2._relativePath;if(!isString(filename)){filename=getDateString();}if(filename&&extension===null&&getExtensionFromFilename(filename)){file2.name=filename;}else{extension=extension||guesstimateExtension(file2.type);file2.name=filename+(extension?"."+extension:"");}return file2;};var getBlobBuilder=function getBlobBuilder(){return window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;};var createBlob=function createBlob(arrayBuffer,mimeType){var BB=getBlobBuilder();if(BB){var bb=new BB();bb.append(arrayBuffer);return bb.getBlob(mimeType);}return new Blob([arrayBuffer],{type:mimeType});};var getBlobFromByteStringWithMimeType=function getBlobFromByteStringWithMimeType(byteString,mimeType){var ab=new ArrayBuffer(byteString.length);var ia=new Uint8Array(ab);for(var i=0;i<byteString.length;i++){ia[i]=byteString.charCodeAt(i);}return createBlob(ab,mimeType);};var getMimeTypeFromBase64DataURI=function getMimeTypeFromBase64DataURI(dataURI){return(/^data:(.+);/.exec(dataURI)||[])[1]||null;};var getBase64DataFromBase64DataURI=function getBase64DataFromBase64DataURI(dataURI){var data3=dataURI.split(",")[1];return data3.replace(/\s/g,"");};var getByteStringFromBase64DataURI=function getByteStringFromBase64DataURI(dataURI){return atob(getBase64DataFromBase64DataURI(dataURI));};var getBlobFromBase64DataURI=function getBlobFromBase64DataURI(dataURI){var mimeType=getMimeTypeFromBase64DataURI(dataURI);var byteString=getByteStringFromBase64DataURI(dataURI);return getBlobFromByteStringWithMimeType(byteString,mimeType);};var getFileFromBase64DataURI=function getFileFromBase64DataURI(dataURI,filename,extension){return getFileFromBlob(getBlobFromBase64DataURI(dataURI),filename,null,extension);};var getFileNameFromHeader=function getFileNameFromHeader(header){if(!/^content-disposition:/i.test(header))return null;var matches=header.split(/filename=|filename\*=.+''/).splice(1).map(function(name2){return name2.trim().replace(/^["']|[;"']{0,2}$/g,"");}).filter(function(name2){return name2.length;});return matches.length?decodeURI(matches[matches.length-1]):null;};var getFileSizeFromHeader=function getFileSizeFromHeader(header){if(/content-length:/i.test(header)){var size=header.match(/[0-9]+/)[0];return size?parseInt(size,10):null;}return null;};var getTranfserIdFromHeader=function getTranfserIdFromHeader(header){if(/x-content-transfer-id:/i.test(header)){var id=(header.split(":")[1]||"").trim();return id||null;}return null;};var getFileInfoFromHeaders=function getFileInfoFromHeaders(headers){var info={source:null,name:null,size:null};var rows=headers.split("\n");var _iterator2=_createForOfIteratorHelper(rows),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var header=_step2.value;var name2=getFileNameFromHeader(header);if(name2){info.name=name2;continue;}var size=getFileSizeFromHeader(header);if(size){info.size=size;continue;}var source=getTranfserIdFromHeader(header);if(source){info.source=source;continue;}}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}return info;};var createFileLoader=function createFileLoader(fetchFn){var state2={source:null,complete:false,progress:0,size:null,timestamp:null,duration:0,request:null};var getProgress=function getProgress(){return state2.progress;};var abort=function abort(){if(state2.request&&state2.request.abort){state2.request.abort();}};var load=function load(){var source=state2.source;api.fire("init",source);if(source instanceof File){api.fire("load",source);}else if(source instanceof Blob){api.fire("load",getFileFromBlob(source,source.name));}else if(isBase64DataURI(source)){api.fire("load",getFileFromBase64DataURI(source));}else{loadURL(source);}};var loadURL=function loadURL(url){if(!fetchFn){api.fire("error",{type:"error",body:"Can't load URL",code:400});return;}state2.timestamp=Date.now();state2.request=fetchFn(url,function(response){state2.duration=Date.now()-state2.timestamp;state2.complete=true;if(response instanceof Blob){response=getFileFromBlob(response,response.name||getFilenameFromURL(url));}api.fire("load",response instanceof Blob?response:response?response.body:null);},function(error2){api.fire("error",typeof error2==="string"?{type:"error",code:0,body:error2}:error2);},function(computable,current,total){if(total){state2.size=total;}state2.duration=Date.now()-state2.timestamp;if(!computable){state2.progress=null;return;}state2.progress=current/total;api.fire("progress",state2.progress);},function(){api.fire("abort");},function(response){var fileinfo=getFileInfoFromHeaders(typeof response==="string"?response:response.headers);api.fire("meta",{size:state2.size||fileinfo.size,filename:fileinfo.name,source:fileinfo.source});});};var api=_objectSpread(_objectSpread({},on()),{},{setSource:function setSource(source){return state2.source=source;},getProgress:getProgress,abort:abort,load:load});return api;};var isGet=function isGet(method){return /GET|HEAD/.test(method);};var sendRequest=function sendRequest(data3,url,options2){var api={onheaders:function onheaders(){},onprogress:function onprogress(){},onload:function onload(){},ontimeout:function ontimeout(){},onerror:function onerror(){},onabort:function onabort(){},abort:function abort(){aborted=true;xhr.abort();}};var aborted=false;var headersReceived=false;options2=_objectSpread({method:"POST",headers:{},withCredentials:false},options2);url=encodeURI(url);if(isGet(options2.method)&&data3){url="".concat(url).concat(encodeURIComponent(typeof data3==="string"?data3:JSON.stringify(data3)));}var xhr=new XMLHttpRequest();var process=isGet(options2.method)?xhr:xhr.upload;process.onprogress=function(e2){if(aborted){return;}api.onprogress(e2.lengthComputable,e2.loaded,e2.total);};xhr.onreadystatechange=function(){if(xhr.readyState<2){return;}if(xhr.readyState===4&&xhr.status===0){return;}if(headersReceived){return;}headersReceived=true;api.onheaders(xhr);};xhr.onload=function(){if(xhr.status>=200&&xhr.status<300){api.onload(xhr);}else{api.onerror(xhr);}};xhr.onerror=function(){return api.onerror(xhr);};xhr.onabort=function(){aborted=true;api.onabort();};xhr.ontimeout=function(){return api.ontimeout(xhr);};xhr.open(options2.method,url,true);if(isInt(options2.timeout)){xhr.timeout=options2.timeout;}Object.keys(options2.headers).forEach(function(key){var value=unescape(encodeURIComponent(options2.headers[key]));xhr.setRequestHeader(key,value);});if(options2.responseType){xhr.responseType=options2.responseType;}if(options2.withCredentials){xhr.withCredentials=true;}xhr.send(data3);return api;};var createResponse=function createResponse(type,code,body,headers){return{type:type,code:code,body:body,headers:headers};};var createTimeoutResponse=function createTimeoutResponse(cb){return function(xhr){cb(createResponse("error",0,"Timeout",xhr.getAllResponseHeaders()));};};var hasQS=function hasQS(str){return /\?/.test(str);};var buildURL=function buildURL(){var url="";for(var _len7=arguments.length,parts=new Array(_len7),_key7=0;_key7<_len7;_key7++){parts[_key7]=arguments[_key7];}parts.forEach(function(part){url+=hasQS(url)&&hasQS(part)?part.replace(/\?/,"&"):part;});return url;};var createFetchFunction=function createFetchFunction(){var apiUrl=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var action=arguments.length>1?arguments[1]:undefined;if(typeof action==="function"){return action;}if(!action||!isString(action.url)){return null;}var onload=action.onload||function(res2){return res2;};var onerror=action.onerror||function(res2){return null;};return function(url,load,error2,progress,abort,headers){var request=sendRequest(url,buildURL(apiUrl,action.url),_objectSpread(_objectSpread({},action),{},{responseType:"blob"}));request.onload=function(xhr){var headers2=xhr.getAllResponseHeaders();var filename=getFileInfoFromHeaders(headers2).name||getFilenameFromURL(url);load(createResponse("load",xhr.status,action.method==="HEAD"?null:getFileFromBlob(onload(xhr.response),filename),headers2));};request.onerror=function(xhr){error2(createResponse("error",xhr.status,onerror(xhr.response)||xhr.statusText,xhr.getAllResponseHeaders()));};request.onheaders=function(xhr){headers(createResponse("headers",xhr.status,null,xhr.getAllResponseHeaders()));};request.ontimeout=createTimeoutResponse(error2);request.onprogress=progress;request.onabort=abort;return request;};};var ChunkStatus={QUEUED:0,COMPLETE:1,PROCESSING:2,ERROR:3,WAITING:4};var processFileChunked=function processFileChunked(apiUrl,action,name2,file2,metadata,load,error2,progress,abort,transfer,options2){var chunks=[];var chunkTransferId=options2.chunkTransferId,chunkServer=options2.chunkServer,chunkSize=options2.chunkSize,chunkRetryDelays=options2.chunkRetryDelays;var state2={serverId:chunkTransferId,aborted:false};var ondata=action.ondata||function(fd){return fd;};var onload=action.onload||function(xhr,method){return method==="HEAD"?xhr.getResponseHeader("Upload-Offset"):xhr.response;};var onerror=action.onerror||function(res2){return null;};var requestTransferId=function requestTransferId(cb){var formData=new FormData();if(isObject(metadata))formData.append(name2,JSON.stringify(metadata));var headers=typeof action.headers==="function"?action.headers(file2,metadata):_objectSpread(_objectSpread({},action.headers),{},{"Upload-Length":file2.size});var requestParams=_objectSpread(_objectSpread({},action),{},{headers:headers});var request=sendRequest(ondata(formData),buildURL(apiUrl,action.url),requestParams);request.onload=function(xhr){return cb(onload(xhr,requestParams.method));};request.onerror=function(xhr){return error2(createResponse("error",xhr.status,onerror(xhr.response)||xhr.statusText,xhr.getAllResponseHeaders()));};request.ontimeout=createTimeoutResponse(error2);};var requestTransferOffset=function requestTransferOffset(cb){var requestUrl=buildURL(apiUrl,chunkServer.url,state2.serverId);var headers=typeof action.headers==="function"?action.headers(state2.serverId):_objectSpread({},action.headers);var requestParams={headers:headers,method:"HEAD"};var request=sendRequest(null,requestUrl,requestParams);request.onload=function(xhr){return cb(onload(xhr,requestParams.method));};request.onerror=function(xhr){return error2(createResponse("error",xhr.status,onerror(xhr.response)||xhr.statusText,xhr.getAllResponseHeaders()));};request.ontimeout=createTimeoutResponse(error2);};var lastChunkIndex=Math.floor(file2.size/chunkSize);for(var i=0;i<=lastChunkIndex;i++){var offset=i*chunkSize;var data3=file2.slice(offset,offset+chunkSize,"application/offset+octet-stream");chunks[i]={index:i,size:data3.size,offset:offset,data:data3,file:file2,progress:0,retries:_toConsumableArray(chunkRetryDelays),status:ChunkStatus.QUEUED,error:null,request:null,timeout:null};}var completeProcessingChunks=function completeProcessingChunks(){return load(state2.serverId);};var canProcessChunk=function canProcessChunk(chunk){return chunk.status===ChunkStatus.QUEUED||chunk.status===ChunkStatus.ERROR;};var processChunk=function processChunk(chunk){if(state2.aborted)return;chunk=chunk||chunks.find(canProcessChunk);if(!chunk){if(chunks.every(function(chunk2){return chunk2.status===ChunkStatus.COMPLETE;})){completeProcessingChunks();}return;}chunk.status=ChunkStatus.PROCESSING;chunk.progress=null;var ondata2=chunkServer.ondata||function(fd){return fd;};var onerror2=chunkServer.onerror||function(res2){return null;};var requestUrl=buildURL(apiUrl,chunkServer.url,state2.serverId);var headers=typeof chunkServer.headers==="function"?chunkServer.headers(chunk):_objectSpread(_objectSpread({},chunkServer.headers),{},{"Content-Type":"application/offset+octet-stream","Upload-Offset":chunk.offset,"Upload-Length":file2.size,"Upload-Name":file2.name});var request=chunk.request=sendRequest(ondata2(chunk.data),requestUrl,_objectSpread(_objectSpread({},chunkServer),{},{headers:headers}));request.onload=function(){chunk.status=ChunkStatus.COMPLETE;chunk.request=null;processChunks();};request.onprogress=function(lengthComputable,loaded,total){chunk.progress=lengthComputable?loaded:null;updateTotalProgress();};request.onerror=function(xhr){chunk.status=ChunkStatus.ERROR;chunk.request=null;chunk.error=onerror2(xhr.response)||xhr.statusText;if(!retryProcessChunk(chunk)){error2(createResponse("error",xhr.status,onerror2(xhr.response)||xhr.statusText,xhr.getAllResponseHeaders()));}};request.ontimeout=function(xhr){chunk.status=ChunkStatus.ERROR;chunk.request=null;if(!retryProcessChunk(chunk)){createTimeoutResponse(error2)(xhr);}};request.onabort=function(){chunk.status=ChunkStatus.QUEUED;chunk.request=null;abort();};};var retryProcessChunk=function retryProcessChunk(chunk){if(chunk.retries.length===0)return false;chunk.status=ChunkStatus.WAITING;clearTimeout(chunk.timeout);chunk.timeout=setTimeout(function(){processChunk(chunk);},chunk.retries.shift());return true;};var updateTotalProgress=function updateTotalProgress(){var totalBytesTransfered=chunks.reduce(function(p2,chunk){if(p2===null||chunk.progress===null)return null;return p2+chunk.progress;},0);if(totalBytesTransfered===null)return progress(false,0,0);var totalSize=chunks.reduce(function(total,chunk){return total+chunk.size;},0);progress(true,totalBytesTransfered,totalSize);};var processChunks=function processChunks(){var totalProcessing=chunks.filter(function(chunk){return chunk.status===ChunkStatus.PROCESSING;}).length;if(totalProcessing>=1)return;processChunk();};var abortChunks=function abortChunks(){chunks.forEach(function(chunk){clearTimeout(chunk.timeout);if(chunk.request){chunk.request.abort();}});};if(!state2.serverId){requestTransferId(function(serverId){if(state2.aborted)return;transfer(serverId);state2.serverId=serverId;processChunks();});}else{requestTransferOffset(function(offset){if(state2.aborted)return;chunks.filter(function(chunk){return chunk.offset<offset;}).forEach(function(chunk){chunk.status=ChunkStatus.COMPLETE;chunk.progress=chunk.size;});processChunks();});}return{abort:function abort(){state2.aborted=true;abortChunks();}};};var createFileProcessorFunction=function createFileProcessorFunction(apiUrl,action,name2,options2){return function(file2,metadata,load,error2,progress,abort,transfer){if(!file2)return;var canChunkUpload=options2.chunkUploads;var shouldChunkUpload=canChunkUpload&&file2.size>options2.chunkSize;var willChunkUpload=canChunkUpload&&(shouldChunkUpload||options2.chunkForce);if(file2 instanceof Blob&&willChunkUpload)return processFileChunked(apiUrl,action,name2,file2,metadata,load,error2,progress,abort,transfer,options2);var ondata=action.ondata||function(fd){return fd;};var onload=action.onload||function(res2){return res2;};var onerror=action.onerror||function(res2){return null;};var headers=typeof action.headers==="function"?action.headers(file2,metadata)||{}:_objectSpread({},action.headers);var requestParams=_objectSpread(_objectSpread({},action),{},{headers:headers});var formData=new FormData();if(isObject(metadata)){formData.append(name2,JSON.stringify(metadata));}(file2 instanceof Blob?[{name:null,file:file2}]:file2).forEach(function(item2){formData.append(name2,item2.file,item2.name===null?item2.file.name:"".concat(item2.name).concat(item2.file.name));});var request=sendRequest(ondata(formData),buildURL(apiUrl,action.url),requestParams);request.onload=function(xhr){load(createResponse("load",xhr.status,onload(xhr.response),xhr.getAllResponseHeaders()));};request.onerror=function(xhr){error2(createResponse("error",xhr.status,onerror(xhr.response)||xhr.statusText,xhr.getAllResponseHeaders()));};request.ontimeout=createTimeoutResponse(error2);request.onprogress=progress;request.onabort=abort;return request;};};var createProcessorFunction=function createProcessorFunction(){var apiUrl=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var action=arguments.length>1?arguments[1]:undefined;var name2=arguments.length>2?arguments[2]:undefined;var options2=arguments.length>3?arguments[3]:undefined;if(typeof action==="function")return function(){for(var _len8=arguments.length,params=new Array(_len8),_key8=0;_key8<_len8;_key8++){params[_key8]=arguments[_key8];}return action.apply(void 0,[name2].concat(params,[options2]));};if(!action||!isString(action.url))return null;return createFileProcessorFunction(apiUrl,action,name2,options2);};var createRevertFunction=function createRevertFunction(){var apiUrl=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var action=arguments.length>1?arguments[1]:undefined;if(typeof action==="function"){return action;}if(!action||!isString(action.url)){return function(uniqueFileId,load){return load();};}var onload=action.onload||function(res2){return res2;};var onerror=action.onerror||function(res2){return null;};return function(uniqueFileId,load,error2){var request=sendRequest(uniqueFileId,apiUrl+action.url,action);request.onload=function(xhr){load(createResponse("load",xhr.status,onload(xhr.response),xhr.getAllResponseHeaders()));};request.onerror=function(xhr){error2(createResponse("error",xhr.status,onerror(xhr.response)||xhr.statusText,xhr.getAllResponseHeaders()));};request.ontimeout=createTimeoutResponse(error2);return request;};};var getRandomNumber=function getRandomNumber(){var min=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var max=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;return min+Math.random()*(max-min);};var createPerceivedPerformanceUpdater=function createPerceivedPerformanceUpdater(cb){var duration=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1e3;var offset=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var tickMin=arguments.length>3&&arguments[3]!==undefined?arguments[3]:25;var tickMax=arguments.length>4&&arguments[4]!==undefined?arguments[4]:250;var timeout=null;var start=Date.now();var tick=function tick(){var runtime=Date.now()-start;var delay=getRandomNumber(tickMin,tickMax);if(runtime+delay>duration){delay=runtime+delay-duration;}var progress=runtime/duration;if(progress>=1||document.hidden){cb(1);return;}cb(progress);timeout=setTimeout(tick,delay);};if(duration>0)tick();return{clear:function clear(){clearTimeout(timeout);}};};var createFileProcessor=function createFileProcessor(processFn,options2){var state2={complete:false,perceivedProgress:0,perceivedPerformanceUpdater:null,progress:null,timestamp:null,perceivedDuration:0,duration:0,request:null,response:null};var allowMinimumUploadDuration=options2.allowMinimumUploadDuration;var process=function process(file2,metadata){var progressFn=function progressFn(){if(state2.duration===0||state2.progress===null)return;api.fire("progress",api.getProgress());};var completeFn=function completeFn(){state2.complete=true;api.fire("load-perceived",state2.response.body);};api.fire("start");state2.timestamp=Date.now();state2.perceivedPerformanceUpdater=createPerceivedPerformanceUpdater(function(progress){state2.perceivedProgress=progress;state2.perceivedDuration=Date.now()-state2.timestamp;progressFn();if(state2.response&&state2.perceivedProgress===1&&!state2.complete){completeFn();}},allowMinimumUploadDuration?getRandomNumber(750,1500):0);state2.request=processFn(file2,metadata,function(response){state2.response=isObject(response)?response:{type:"load",code:200,body:"".concat(response),headers:{}};state2.duration=Date.now()-state2.timestamp;state2.progress=1;api.fire("load",state2.response.body);if(!allowMinimumUploadDuration||allowMinimumUploadDuration&&state2.perceivedProgress===1){completeFn();}},function(error2){state2.perceivedPerformanceUpdater.clear();api.fire("error",isObject(error2)?error2:{type:"error",code:0,body:"".concat(error2)});},function(computable,current,total){state2.duration=Date.now()-state2.timestamp;state2.progress=computable?current/total:null;progressFn();},function(){state2.perceivedPerformanceUpdater.clear();api.fire("abort",state2.response?state2.response.body:null);},function(transferId){api.fire("transfer",transferId);});};var abort=function abort(){if(!state2.request)return;state2.perceivedPerformanceUpdater.clear();if(state2.request.abort)state2.request.abort();state2.complete=true;};var reset=function reset(){abort();state2.complete=false;state2.perceivedProgress=0;state2.progress=0;state2.timestamp=null;state2.perceivedDuration=0;state2.duration=0;state2.request=null;state2.response=null;};var getProgress=allowMinimumUploadDuration?function(){return state2.progress?Math.min(state2.progress,state2.perceivedProgress):null;}:function(){return state2.progress||null;};var getDuration=allowMinimumUploadDuration?function(){return Math.min(state2.duration,state2.perceivedDuration);}:function(){return state2.duration;};var api=_objectSpread(_objectSpread({},on()),{},{process:process,abort:abort,getProgress:getProgress,getDuration:getDuration,reset:reset});return api;};var getFilenameWithoutExtension=function getFilenameWithoutExtension(name2){return name2.substr(0,name2.lastIndexOf("."))||name2;};var createFileStub=function createFileStub(source){var data3=[source.name,source.size,source.type];if(source instanceof Blob||isBase64DataURI(source)){data3[0]=source.name||getDateString();}else if(isBase64DataURI(source)){data3[1]=source.length;data3[2]=getMimeTypeFromBase64DataURI(source);}else if(isString(source)){data3[0]=getFilenameFromURL(source);data3[1]=0;data3[2]="application/octet-stream";}return{name:data3[0],size:data3[1],type:data3[2]};};var isFile=function isFile(value){return!!(value instanceof File||value instanceof Blob&&value.name);};var deepCloneObject=function deepCloneObject(src){if(!isObject(src))return src;var target=isArray(src)?[]:{};for(var key in src){if(!src.hasOwnProperty(key))continue;var v=src[key];target[key]=v&&isObject(v)?deepCloneObject(v):v;}return target;};var createItem=function createItem(){var origin=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var serverFileReference=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var file2=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var id=getUniqueId();var state2={archived:false,frozen:false,released:false,source:null,file:file2,serverFileReference:serverFileReference,transferId:null,processingAborted:false,status:serverFileReference?ItemStatus.PROCESSING_COMPLETE:ItemStatus.INIT,activeLoader:null,activeProcessor:null};var abortProcessingRequestComplete=null;var metadata={};var setStatus=function setStatus(status){return state2.status=status;};var fire=function fire(event){if(state2.released||state2.frozen)return;for(var _len9=arguments.length,params=new Array(_len9>1?_len9-1:0),_key9=1;_key9<_len9;_key9++){params[_key9-1]=arguments[_key9];}api.fire.apply(api,[event].concat(params));};var getFileExtension=function getFileExtension(){return getExtensionFromFilename(state2.file.name);};var getFileType=function getFileType(){return state2.file.type;};var getFileSize=function getFileSize(){return state2.file.size;};var getFile2=function getFile2(){return state2.file;};var load=function load(source,loader,onload){state2.source=source;api.fireSync("init");if(state2.file){api.fireSync("load-skip");return;}state2.file=createFileStub(source);loader.on("init",function(){fire("load-init");});loader.on("meta",function(meta){state2.file.size=meta.size;state2.file.filename=meta.filename;if(meta.source){origin=FileOrigin.LIMBO;state2.serverFileReference=meta.source;state2.status=ItemStatus.PROCESSING_COMPLETE;}fire("load-meta");});loader.on("progress",function(progress){setStatus(ItemStatus.LOADING);fire("load-progress",progress);});loader.on("error",function(error2){setStatus(ItemStatus.LOAD_ERROR);fire("load-request-error",error2);});loader.on("abort",function(){setStatus(ItemStatus.INIT);fire("load-abort");});loader.on("load",function(file3){state2.activeLoader=null;var success=function success(result){state2.file=isFile(result)?result:state2.file;if(origin===FileOrigin.LIMBO&&state2.serverFileReference){setStatus(ItemStatus.PROCESSING_COMPLETE);}else{setStatus(ItemStatus.IDLE);}fire("load");};var error2=function error2(result){state2.file=file3;fire("load-meta");setStatus(ItemStatus.LOAD_ERROR);fire("load-file-error",result);};if(state2.serverFileReference){success(file3);return;}onload(file3,success,error2);});loader.setSource(source);state2.activeLoader=loader;loader.load();};var retryLoad=function retryLoad(){if(!state2.activeLoader){return;}state2.activeLoader.load();};var abortLoad=function abortLoad(){if(state2.activeLoader){state2.activeLoader.abort();return;}setStatus(ItemStatus.INIT);fire("load-abort");};var process=function process(processor,onprocess){if(state2.processingAborted){state2.processingAborted=false;return;}setStatus(ItemStatus.PROCESSING);abortProcessingRequestComplete=null;if(!(state2.file instanceof Blob)){api.on("load",function(){process(processor,onprocess);});return;}processor.on("load",function(serverFileReference2){state2.transferId=null;state2.serverFileReference=serverFileReference2;});processor.on("transfer",function(transferId){state2.transferId=transferId;});processor.on("load-perceived",function(serverFileReference2){state2.activeProcessor=null;state2.transferId=null;state2.serverFileReference=serverFileReference2;setStatus(ItemStatus.PROCESSING_COMPLETE);fire("process-complete",serverFileReference2);});processor.on("start",function(){fire("process-start");});processor.on("error",function(error3){state2.activeProcessor=null;setStatus(ItemStatus.PROCESSING_ERROR);fire("process-error",error3);});processor.on("abort",function(serverFileReference2){state2.activeProcessor=null;state2.serverFileReference=serverFileReference2;setStatus(ItemStatus.IDLE);fire("process-abort");if(abortProcessingRequestComplete){abortProcessingRequestComplete();}});processor.on("progress",function(progress){fire("process-progress",progress);});var success=function success(file3){if(state2.archived)return;processor.process(file3,_objectSpread({},metadata));};var error2=console.error;onprocess(state2.file,success,error2);state2.activeProcessor=processor;};var requestProcessing=function requestProcessing(){state2.processingAborted=false;setStatus(ItemStatus.PROCESSING_QUEUED);};var abortProcessing=function abortProcessing(){return new Promise(function(resolve){if(!state2.activeProcessor){state2.processingAborted=true;setStatus(ItemStatus.IDLE);fire("process-abort");resolve();return;}abortProcessingRequestComplete=function abortProcessingRequestComplete(){resolve();};state2.activeProcessor.abort();});};var revert=function revert(revertFileUpload,forceRevert){return new Promise(function(resolve,reject){var serverTransferId=state2.serverFileReference!==null?state2.serverFileReference:state2.transferId;if(serverTransferId===null){resolve();return;}revertFileUpload(serverTransferId,function(){state2.serverFileReference=null;state2.transferId=null;resolve();},function(error2){if(!forceRevert){resolve();return;}setStatus(ItemStatus.PROCESSING_REVERT_ERROR);fire("process-revert-error");reject(error2);});setStatus(ItemStatus.IDLE);fire("process-revert");});};var _setMetadata=function setMetadata(key,value,silent){var keys=key.split(".");var root2=keys[0];var last=keys.pop();var data3=metadata;keys.forEach(function(key2){return data3=data3[key2];});if(JSON.stringify(data3[last])===JSON.stringify(value))return;data3[last]=value;fire("metadata-update",{key:root2,value:metadata[root2],silent:silent});};var getMetadata=function getMetadata(key){return deepCloneObject(key?metadata[key]:metadata);};var api=_objectSpread(_objectSpread({id:{get:function get(){return id;}},origin:{get:function get(){return origin;},set:function set(value){return origin=value;}},serverId:{get:function get(){return state2.serverFileReference;}},transferId:{get:function get(){return state2.transferId;}},status:{get:function get(){return state2.status;}},filename:{get:function get(){return state2.file.name;}},filenameWithoutExtension:{get:function get(){return getFilenameWithoutExtension(state2.file.name);}},fileExtension:{get:getFileExtension},fileType:{get:getFileType},fileSize:{get:getFileSize},file:{get:getFile2},relativePath:{get:function get(){return state2.file._relativePath;}},source:{get:function get(){return state2.source;}},getMetadata:getMetadata,setMetadata:function setMetadata(key,value,silent){if(isObject(key)){var data3=key;Object.keys(data3).forEach(function(key2){_setMetadata(key2,data3[key2],value);});return key;}_setMetadata(key,value,silent);return value;},extend:function extend(name2,handler){return itemAPI[name2]=handler;},abortLoad:abortLoad,retryLoad:retryLoad,requestProcessing:requestProcessing,abortProcessing:abortProcessing,load:load,process:process,revert:revert},on()),{},{freeze:function freeze(){return state2.frozen=true;},release:function release(){return state2.released=true;},released:{get:function get(){return state2.released;}},archive:function archive(){return state2.archived=true;},archived:{get:function get(){return state2.archived;}}});var itemAPI=createObject(api);return itemAPI;};var getItemIndexByQuery=function getItemIndexByQuery(items,query){if(isEmpty(query)){return 0;}if(!isString(query)){return-1;}return items.findIndex(function(item2){return item2.id===query;});};var getItemById=function getItemById(items,itemId){var index=getItemIndexByQuery(items,itemId);if(index<0){return;}return items[index]||null;};var fetchBlob=function fetchBlob(url,load,error2,progress,abort,headers){var request=sendRequest(null,url,{method:"GET",responseType:"blob"});request.onload=function(xhr){var headers2=xhr.getAllResponseHeaders();var filename=getFileInfoFromHeaders(headers2).name||getFilenameFromURL(url);load(createResponse("load",xhr.status,getFileFromBlob(xhr.response,filename),headers2));};request.onerror=function(xhr){error2(createResponse("error",xhr.status,xhr.statusText,xhr.getAllResponseHeaders()));};request.onheaders=function(xhr){headers(createResponse("headers",xhr.status,null,xhr.getAllResponseHeaders()));};request.ontimeout=createTimeoutResponse(error2);request.onprogress=progress;request.onabort=abort;return request;};var getDomainFromURL=function getDomainFromURL(url){if(url.indexOf("//")===0){url=location.protocol+url;}return url.toLowerCase().replace("blob:","").replace(/([a-z])?:\/\//,"$1").split("/")[0];};var isExternalURL=function isExternalURL(url){return(url.indexOf(":")>-1||url.indexOf("//")>-1)&&getDomainFromURL(location.href)!==getDomainFromURL(url);};var dynamicLabel=function dynamicLabel(label){return function(){return isFunction(label)?label.apply(void 0,arguments):label;};};var isMockItem=function isMockItem(item2){return!isFile(item2.file);};var listUpdated=function listUpdated(dispatch2,state2){clearTimeout(state2.listUpdateTimeout);state2.listUpdateTimeout=setTimeout(function(){dispatch2("DID_UPDATE_ITEMS",{items:getActiveItems(state2.items)});},0);};var optionalPromise=function optionalPromise(fn2){for(var _len10=arguments.length,params=new Array(_len10>1?_len10-1:0),_key10=1;_key10<_len10;_key10++){params[_key10-1]=arguments[_key10];}return new Promise(function(resolve){if(!fn2){return resolve(true);}var result=fn2.apply(void 0,params);if(result==null){return resolve(true);}if(typeof result==="boolean"){return resolve(result);}if(typeof result.then==="function"){result.then(resolve);}});};var sortItems=function sortItems(state2,compare){state2.items.sort(function(a2,b){return compare(createItemAPI(a2),createItemAPI(b));});};var getItemByQueryFromState=function getItemByQueryFromState(state2,itemHandler){return function(){var _ref14=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var query=_ref14.query,_ref14$success=_ref14.success,success=_ref14$success===void 0?function(){}:_ref14$success,_ref14$failure=_ref14.failure,failure=_ref14$failure===void 0?function(){}:_ref14$failure,options2=_objectWithoutProperties2(_ref14,_excluded6);var item2=getItemByQuery(state2.items,query);if(!item2){failure({error:createResponse("error",0,"Item not found"),file:null});return;}itemHandler(item2,success,failure,options2||{});};};var actions=function actions(dispatch2,query,state2){return{ABORT_ALL:function ABORT_ALL(){getActiveItems(state2.items).forEach(function(item2){item2.freeze();item2.abortLoad();item2.abortProcessing();});},DID_SET_FILES:function DID_SET_FILES(_ref15){var _ref15$value=_ref15.value,value=_ref15$value===void 0?[]:_ref15$value;var files=value.map(function(file2){return{source:file2.source?file2.source:file2,options:file2.options};});var activeItems=getActiveItems(state2.items);activeItems.forEach(function(item2){if(!files.find(function(file2){return file2.source===item2.source||file2.source===item2.file;})){dispatch2("REMOVE_ITEM",{query:item2,remove:false});}});activeItems=getActiveItems(state2.items);files.forEach(function(file2,index){if(activeItems.find(function(item2){return item2.source===file2.source||item2.file===file2.source;}))return;dispatch2("ADD_ITEM",_objectSpread(_objectSpread({},file2),{},{interactionMethod:InteractionMethod.NONE,index:index}));});},DID_UPDATE_ITEM_METADATA:function DID_UPDATE_ITEM_METADATA(_ref16){var id=_ref16.id,action=_ref16.action,change=_ref16.change;if(change.silent)return;clearTimeout(state2.itemUpdateTimeout);state2.itemUpdateTimeout=setTimeout(function(){var item2=getItemById(state2.items,id);if(!query("IS_ASYNC")){applyFilterChain("SHOULD_PREPARE_OUTPUT",false,{item:item2,query:query,action:action,change:change}).then(function(shouldPrepareOutput){var beforePrepareFile=query("GET_BEFORE_PREPARE_FILE");if(beforePrepareFile)shouldPrepareOutput=beforePrepareFile(item2,shouldPrepareOutput);if(!shouldPrepareOutput)return;dispatch2("REQUEST_PREPARE_OUTPUT",{query:id,item:item2,success:function success(file2){dispatch2("DID_PREPARE_OUTPUT",{id:id,file:file2});}},true);});return;}if(item2.origin===FileOrigin.LOCAL){dispatch2("DID_LOAD_ITEM",{id:item2.id,error:null,serverFileReference:item2.source});}var upload=function upload(){setTimeout(function(){dispatch2("REQUEST_ITEM_PROCESSING",{query:id});},32);};var revert=function revert(doUpload){item2.revert(createRevertFunction(state2.options.server.url,state2.options.server.revert),query("GET_FORCE_REVERT")).then(doUpload?upload:function(){})["catch"](function(){});};var abort=function abort(doUpload){item2.abortProcessing().then(doUpload?upload:function(){});};if(item2.status===ItemStatus.PROCESSING_COMPLETE){return revert(state2.options.instantUpload);}if(item2.status===ItemStatus.PROCESSING){return abort(state2.options.instantUpload);}if(state2.options.instantUpload){upload();}},0);},MOVE_ITEM:function MOVE_ITEM(_ref17){var query2=_ref17.query,index=_ref17.index;var item2=getItemByQuery(state2.items,query2);if(!item2)return;var currentIndex=state2.items.indexOf(item2);index=limit(index,0,state2.items.length-1);if(currentIndex===index)return;state2.items.splice(index,0,state2.items.splice(currentIndex,1)[0]);},SORT:function SORT(_ref18){var compare=_ref18.compare;sortItems(state2,compare);dispatch2("DID_SORT_ITEMS",{items:query("GET_ACTIVE_ITEMS")});},ADD_ITEMS:function ADD_ITEMS(_ref19){var items=_ref19.items,index=_ref19.index,interactionMethod=_ref19.interactionMethod,_ref19$success=_ref19.success,success=_ref19$success===void 0?function(){}:_ref19$success,_ref19$failure=_ref19.failure,failure=_ref19$failure===void 0?function(){}:_ref19$failure;var currentIndex=index;if(index===-1||typeof index==="undefined"){var insertLocation=query("GET_ITEM_INSERT_LOCATION");var totalItems=query("GET_TOTAL_ITEMS");currentIndex=insertLocation==="before"?0:totalItems;}var ignoredFiles=query("GET_IGNORED_FILES");var isValidFile=function isValidFile(source){return isFile(source)?!ignoredFiles.includes(source.name.toLowerCase()):!isEmpty(source);};var validItems=items.filter(isValidFile);var promises=validItems.map(function(source){return new Promise(function(resolve,reject){dispatch2("ADD_ITEM",{interactionMethod:interactionMethod,source:source.source||source,success:resolve,failure:reject,index:currentIndex++,options:source.options||{}});});});Promise.all(promises).then(success)["catch"](failure);},ADD_ITEM:function ADD_ITEM(_ref20){var source=_ref20.source,_ref20$index=_ref20.index,index=_ref20$index===void 0?-1:_ref20$index,interactionMethod=_ref20.interactionMethod,_ref20$success=_ref20.success,success=_ref20$success===void 0?function(){}:_ref20$success,_ref20$failure=_ref20.failure,failure=_ref20$failure===void 0?function(){}:_ref20$failure,_ref20$options=_ref20.options,options2=_ref20$options===void 0?{}:_ref20$options;if(isEmpty(source)){failure({error:createResponse("error",0,"No source"),file:null});return;}if(isFile(source)&&state2.options.ignoredFiles.includes(source.name.toLowerCase())){return;}if(!hasRoomForItem(state2)){if(state2.options.allowMultiple||!state2.options.allowMultiple&&!state2.options.allowReplace){var error2=createResponse("warning",0,"Max files");dispatch2("DID_THROW_MAX_FILES",{source:source,error:error2});failure({error:error2,file:null});return;}var item3=getActiveItems(state2.items)[0];if(item3.status===ItemStatus.PROCESSING_COMPLETE||item3.status===ItemStatus.PROCESSING_REVERT_ERROR){var forceRevert=query("GET_FORCE_REVERT");item3.revert(createRevertFunction(state2.options.server.url,state2.options.server.revert),forceRevert).then(function(){if(!forceRevert)return;dispatch2("ADD_ITEM",{source:source,index:index,interactionMethod:interactionMethod,success:success,failure:failure,options:options2});})["catch"](function(){});if(forceRevert)return;}dispatch2("REMOVE_ITEM",{query:item3.id});}var origin=options2.type==="local"?FileOrigin.LOCAL:options2.type==="limbo"?FileOrigin.LIMBO:FileOrigin.INPUT;var item2=createItem(origin,origin===FileOrigin.INPUT?null:source,options2.file);Object.keys(options2.metadata||{}).forEach(function(key){item2.setMetadata(key,options2.metadata[key]);});applyFilters("DID_CREATE_ITEM",item2,{query:query,dispatch:dispatch2});var itemInsertLocation=query("GET_ITEM_INSERT_LOCATION");if(!state2.options.itemInsertLocationFreedom){index=itemInsertLocation==="before"?-1:state2.items.length;}insertItem(state2.items,item2,index);if(isFunction(itemInsertLocation)&&source){sortItems(state2,itemInsertLocation);}var id=item2.id;item2.on("init",function(){dispatch2("DID_INIT_ITEM",{id:id});});item2.on("load-init",function(){dispatch2("DID_START_ITEM_LOAD",{id:id});});item2.on("load-meta",function(){dispatch2("DID_UPDATE_ITEM_META",{id:id});});item2.on("load-progress",function(progress){dispatch2("DID_UPDATE_ITEM_LOAD_PROGRESS",{id:id,progress:progress});});item2.on("load-request-error",function(error2){var mainStatus=dynamicLabel(state2.options.labelFileLoadError)(error2);if(error2.code>=400&&error2.code<500){dispatch2("DID_THROW_ITEM_INVALID",{id:id,error:error2,status:{main:mainStatus,sub:"".concat(error2.code," (").concat(error2.body,")")}});failure({error:error2,file:createItemAPI(item2)});return;}dispatch2("DID_THROW_ITEM_LOAD_ERROR",{id:id,error:error2,status:{main:mainStatus,sub:state2.options.labelTapToRetry}});});item2.on("load-file-error",function(error2){dispatch2("DID_THROW_ITEM_INVALID",{id:id,error:error2.status,status:error2.status});failure({error:error2.status,file:createItemAPI(item2)});});item2.on("load-abort",function(){dispatch2("REMOVE_ITEM",{query:id});});item2.on("load-skip",function(){dispatch2("COMPLETE_LOAD_ITEM",{query:id,item:item2,data:{source:source,success:success}});});item2.on("load",function(){var handleAdd=function handleAdd(shouldAdd){if(!shouldAdd){dispatch2("REMOVE_ITEM",{query:id});return;}item2.on("metadata-update",function(change){dispatch2("DID_UPDATE_ITEM_METADATA",{id:id,change:change});});applyFilterChain("SHOULD_PREPARE_OUTPUT",false,{item:item2,query:query}).then(function(shouldPrepareOutput){var beforePrepareFile=query("GET_BEFORE_PREPARE_FILE");if(beforePrepareFile)shouldPrepareOutput=beforePrepareFile(item2,shouldPrepareOutput);var loadComplete=function loadComplete(){dispatch2("COMPLETE_LOAD_ITEM",{query:id,item:item2,data:{source:source,success:success}});listUpdated(dispatch2,state2);};if(shouldPrepareOutput){dispatch2("REQUEST_PREPARE_OUTPUT",{query:id,item:item2,success:function success(file2){dispatch2("DID_PREPARE_OUTPUT",{id:id,file:file2});loadComplete();}},true);return;}loadComplete();});};applyFilterChain("DID_LOAD_ITEM",item2,{query:query,dispatch:dispatch2}).then(function(){optionalPromise(query("GET_BEFORE_ADD_FILE"),createItemAPI(item2)).then(handleAdd);})["catch"](function(e2){if(!e2||!e2.error||!e2.status)return handleAdd(false);dispatch2("DID_THROW_ITEM_INVALID",{id:id,error:e2.error,status:e2.status});});});item2.on("process-start",function(){dispatch2("DID_START_ITEM_PROCESSING",{id:id});});item2.on("process-progress",function(progress){dispatch2("DID_UPDATE_ITEM_PROCESS_PROGRESS",{id:id,progress:progress});});item2.on("process-error",function(error2){dispatch2("DID_THROW_ITEM_PROCESSING_ERROR",{id:id,error:error2,status:{main:dynamicLabel(state2.options.labelFileProcessingError)(error2),sub:state2.options.labelTapToRetry}});});item2.on("process-revert-error",function(error2){dispatch2("DID_THROW_ITEM_PROCESSING_REVERT_ERROR",{id:id,error:error2,status:{main:dynamicLabel(state2.options.labelFileProcessingRevertError)(error2),sub:state2.options.labelTapToRetry}});});item2.on("process-complete",function(serverFileReference){dispatch2("DID_COMPLETE_ITEM_PROCESSING",{id:id,error:null,serverFileReference:serverFileReference});dispatch2("DID_DEFINE_VALUE",{id:id,value:serverFileReference});});item2.on("process-abort",function(){dispatch2("DID_ABORT_ITEM_PROCESSING",{id:id});});item2.on("process-revert",function(){dispatch2("DID_REVERT_ITEM_PROCESSING",{id:id});dispatch2("DID_DEFINE_VALUE",{id:id,value:null});});dispatch2("DID_ADD_ITEM",{id:id,index:index,interactionMethod:interactionMethod});listUpdated(dispatch2,state2);var _ref21=state2.options.server||{},url=_ref21.url,load=_ref21.load,restore=_ref21.restore,fetch2=_ref21.fetch;item2.load(source,createFileLoader(origin===FileOrigin.INPUT?isString(source)&&isExternalURL(source)?fetch2?createFetchFunction(url,fetch2):fetchBlob:fetchBlob:origin===FileOrigin.LIMBO?createFetchFunction(url,restore):createFetchFunction(url,load)),function(file2,success2,error2){applyFilterChain("LOAD_FILE",file2,{query:query}).then(success2)["catch"](error2);});},REQUEST_PREPARE_OUTPUT:function REQUEST_PREPARE_OUTPUT(_ref22){var item2=_ref22.item,success=_ref22.success,_ref22$failure=_ref22.failure,failure=_ref22$failure===void 0?function(){}:_ref22$failure;var err={error:createResponse("error",0,"Item not found"),file:null};if(item2.archived)return failure(err);applyFilterChain("PREPARE_OUTPUT",item2.file,{query:query,item:item2}).then(function(result){applyFilterChain("COMPLETE_PREPARE_OUTPUT",result,{query:query,item:item2}).then(function(result2){if(item2.archived)return failure(err);success(result2);});});},COMPLETE_LOAD_ITEM:function COMPLETE_LOAD_ITEM(_ref23){var item2=_ref23.item,data3=_ref23.data;var success=data3.success,source=data3.source;var itemInsertLocation=query("GET_ITEM_INSERT_LOCATION");if(isFunction(itemInsertLocation)&&source){sortItems(state2,itemInsertLocation);}dispatch2("DID_LOAD_ITEM",{id:item2.id,error:null,serverFileReference:item2.origin===FileOrigin.INPUT?null:source});success(createItemAPI(item2));if(item2.origin===FileOrigin.LOCAL){dispatch2("DID_LOAD_LOCAL_ITEM",{id:item2.id});return;}if(item2.origin===FileOrigin.LIMBO){dispatch2("DID_COMPLETE_ITEM_PROCESSING",{id:item2.id,error:null,serverFileReference:source});dispatch2("DID_DEFINE_VALUE",{id:item2.id,value:item2.serverId||source});return;}if(query("IS_ASYNC")&&state2.options.instantUpload){dispatch2("REQUEST_ITEM_PROCESSING",{query:item2.id});}},RETRY_ITEM_LOAD:getItemByQueryFromState(state2,function(item2){item2.retryLoad();}),REQUEST_ITEM_PREPARE:getItemByQueryFromState(state2,function(item2,_success,failure){dispatch2("REQUEST_PREPARE_OUTPUT",{query:item2.id,item:item2,success:function success(file2){dispatch2("DID_PREPARE_OUTPUT",{id:item2.id,file:file2});_success({file:item2,output:file2});},failure:failure},true);}),REQUEST_ITEM_PROCESSING:getItemByQueryFromState(state2,function(item2,success,failure){var itemCanBeQueuedForProcessing=item2.status===ItemStatus.IDLE||item2.status===ItemStatus.PROCESSING_ERROR;if(!itemCanBeQueuedForProcessing){var processNow=function processNow(){return dispatch2("REQUEST_ITEM_PROCESSING",{query:item2,success:success,failure:failure});};var process=function process(){return document.hidden?processNow():setTimeout(processNow,32);};if(item2.status===ItemStatus.PROCESSING_COMPLETE||item2.status===ItemStatus.PROCESSING_REVERT_ERROR){item2.revert(createRevertFunction(state2.options.server.url,state2.options.server.revert),query("GET_FORCE_REVERT")).then(process)["catch"](function(){});}else if(item2.status===ItemStatus.PROCESSING){item2.abortProcessing().then(process);}return;}if(item2.status===ItemStatus.PROCESSING_QUEUED)return;item2.requestProcessing();dispatch2("DID_REQUEST_ITEM_PROCESSING",{id:item2.id});dispatch2("PROCESS_ITEM",{query:item2,success:success,failure:failure},true);}),PROCESS_ITEM:getItemByQueryFromState(state2,function(item2,success,failure){var maxParallelUploads=query("GET_MAX_PARALLEL_UPLOADS");var totalCurrentUploads=query("GET_ITEMS_BY_STATUS",ItemStatus.PROCESSING).length;if(totalCurrentUploads===maxParallelUploads){state2.processingQueue.push({id:item2.id,success:success,failure:failure});return;}if(item2.status===ItemStatus.PROCESSING)return;var processNext=function processNext(){var queueEntry=state2.processingQueue.shift();if(!queueEntry)return;var id=queueEntry.id,success2=queueEntry.success,failure2=queueEntry.failure;var itemReference=getItemByQuery(state2.items,id);if(!itemReference||itemReference.archived){processNext();return;}dispatch2("PROCESS_ITEM",{query:id,success:success2,failure:failure2},true);};item2.onOnce("process-complete",function(){success(createItemAPI(item2));processNext();var server=state2.options.server;var instantUpload=state2.options.instantUpload;if(instantUpload&&item2.origin===FileOrigin.LOCAL&&isFunction(server.remove)){var noop=function noop(){};item2.origin=FileOrigin.LIMBO;state2.options.server.remove(item2.source,noop,noop);}var allItemsProcessed=query("GET_ITEMS_BY_STATUS",ItemStatus.PROCESSING_COMPLETE).length===state2.items.length;if(allItemsProcessed){dispatch2("DID_COMPLETE_ITEM_PROCESSING_ALL");}});item2.onOnce("process-error",function(error2){failure({error:error2,file:createItemAPI(item2)});processNext();});var options2=state2.options;item2.process(createFileProcessor(createProcessorFunction(options2.server.url,options2.server.process,options2.name,{chunkTransferId:item2.transferId,chunkServer:options2.server.patch,chunkUploads:options2.chunkUploads,chunkForce:options2.chunkForce,chunkSize:options2.chunkSize,chunkRetryDelays:options2.chunkRetryDelays}),{allowMinimumUploadDuration:query("GET_ALLOW_MINIMUM_UPLOAD_DURATION")}),function(file2,success2,error2){applyFilterChain("PREPARE_OUTPUT",file2,{query:query,item:item2}).then(function(file3){dispatch2("DID_PREPARE_OUTPUT",{id:item2.id,file:file3});success2(file3);})["catch"](error2);});}),RETRY_ITEM_PROCESSING:getItemByQueryFromState(state2,function(item2){dispatch2("REQUEST_ITEM_PROCESSING",{query:item2});}),REQUEST_REMOVE_ITEM:getItemByQueryFromState(state2,function(item2){optionalPromise(query("GET_BEFORE_REMOVE_FILE"),createItemAPI(item2)).then(function(shouldRemove){if(!shouldRemove){return;}dispatch2("REMOVE_ITEM",{query:item2});});}),RELEASE_ITEM:getItemByQueryFromState(state2,function(item2){item2.release();}),REMOVE_ITEM:getItemByQueryFromState(state2,function(item2,success,failure,options2){var removeFromView=function removeFromView(){var id=item2.id;getItemById(state2.items,id).archive();dispatch2("DID_REMOVE_ITEM",{error:null,id:id,item:item2});listUpdated(dispatch2,state2);success(createItemAPI(item2));};var server=state2.options.server;if(item2.origin===FileOrigin.LOCAL&&server&&isFunction(server.remove)&&options2.remove!==false){dispatch2("DID_START_ITEM_REMOVE",{id:item2.id});server.remove(item2.source,function(){return removeFromView();},function(status){dispatch2("DID_THROW_ITEM_REMOVE_ERROR",{id:item2.id,error:createResponse("error",0,status,null),status:{main:dynamicLabel(state2.options.labelFileRemoveError)(status),sub:state2.options.labelTapToRetry}});});}else{if(options2.revert&&item2.origin!==FileOrigin.LOCAL&&item2.serverId!==null||state2.options.chunkUploads&&item2.file.size>state2.options.chunkSize||state2.options.chunkUploads&&state2.options.chunkForce){item2.revert(createRevertFunction(state2.options.server.url,state2.options.server.revert),query("GET_FORCE_REVERT"));}removeFromView();}}),ABORT_ITEM_LOAD:getItemByQueryFromState(state2,function(item2){item2.abortLoad();}),ABORT_ITEM_PROCESSING:getItemByQueryFromState(state2,function(item2){if(item2.serverId){dispatch2("REVERT_ITEM_PROCESSING",{id:item2.id});return;}item2.abortProcessing().then(function(){var shouldRemove=state2.options.instantUpload;if(shouldRemove){dispatch2("REMOVE_ITEM",{query:item2.id});}});}),REQUEST_REVERT_ITEM_PROCESSING:getItemByQueryFromState(state2,function(item2){if(!state2.options.instantUpload){dispatch2("REVERT_ITEM_PROCESSING",{query:item2});return;}var handleRevert2=function handleRevert2(shouldRevert){if(!shouldRevert)return;dispatch2("REVERT_ITEM_PROCESSING",{query:item2});};var fn2=query("GET_BEFORE_REMOVE_FILE");if(!fn2){return handleRevert2(true);}var requestRemoveResult=fn2(createItemAPI(item2));if(requestRemoveResult==null){return handleRevert2(true);}if(typeof requestRemoveResult==="boolean"){return handleRevert2(requestRemoveResult);}if(typeof requestRemoveResult.then==="function"){requestRemoveResult.then(handleRevert2);}}),REVERT_ITEM_PROCESSING:getItemByQueryFromState(state2,function(item2){item2.revert(createRevertFunction(state2.options.server.url,state2.options.server.revert),query("GET_FORCE_REVERT")).then(function(){var shouldRemove=state2.options.instantUpload||isMockItem(item2);if(shouldRemove){dispatch2("REMOVE_ITEM",{query:item2.id});}})["catch"](function(){});}),SET_OPTIONS:function SET_OPTIONS(_ref24){var options2=_ref24.options;var optionKeys=Object.keys(options2);var prioritizedOptionKeys=PrioritizedOptions.filter(function(key){return optionKeys.includes(key);});var orderedOptionKeys=[].concat(_toConsumableArray(prioritizedOptionKeys),_toConsumableArray(Object.keys(options2).filter(function(key){return!prioritizedOptionKeys.includes(key);})));orderedOptionKeys.forEach(function(key){dispatch2("SET_".concat(fromCamels(key,"_").toUpperCase()),{value:options2[key]});});}};};var PrioritizedOptions=["server"];var formatFilename=function formatFilename(name2){return name2;};var createElement$1=function createElement$1(tagName){return document.createElement(tagName);};var text=function text(node,value){var textNode=node.childNodes[0];if(!textNode){textNode=document.createTextNode(value);node.appendChild(textNode);}else if(value!==textNode.nodeValue){textNode.nodeValue=value;}};var polarToCartesian=function polarToCartesian(centerX,centerY,radius,angleInDegrees){var angleInRadians=(angleInDegrees%360-90)*Math.PI/180;return{x:centerX+radius*Math.cos(angleInRadians),y:centerY+radius*Math.sin(angleInRadians)};};var describeArc=function describeArc(x,y,radius,startAngle,endAngle,arcSweep){var start=polarToCartesian(x,y,radius,endAngle);var end=polarToCartesian(x,y,radius,startAngle);return["M",start.x,start.y,"A",radius,radius,0,arcSweep,0,end.x,end.y].join(" ");};var percentageArc=function percentageArc(x,y,radius,from,to){var arcSweep=1;if(to>from&&to-from<=0.5){arcSweep=0;}if(from>to&&from-to>=0.5){arcSweep=0;}return describeArc(x,y,radius,Math.min(0.9999,from)*360,Math.min(0.9999,to)*360,arcSweep);};var create=function create(_ref25){var root2=_ref25.root,props=_ref25.props;props.spin=false;props.progress=0;props.opacity=0;var svg3=createElement("svg");root2.ref.path=createElement("path",{"stroke-width":2,"stroke-linecap":"round"});svg3.appendChild(root2.ref.path);root2.ref.svg=svg3;root2.appendChild(svg3);};var write=function write(_ref26){var root2=_ref26.root,props=_ref26.props;if(props.opacity===0){return;}if(props.align){root2.element.dataset.align=props.align;}var ringStrokeWidth=parseInt(attr(root2.ref.path,"stroke-width"),10);var size=root2.rect.element.width*0.5;var ringFrom=0;var ringTo=0;if(props.spin){ringFrom=0;ringTo=0.5;}else{ringFrom=0;ringTo=props.progress;}var coordinates=percentageArc(size,size,size-ringStrokeWidth,ringFrom,ringTo);attr(root2.ref.path,"d",coordinates);attr(root2.ref.path,"stroke-opacity",props.spin||props.progress>0?1:0);};var progressIndicator=createView({tag:"div",name:"progress-indicator",ignoreRectUpdate:true,ignoreRect:true,create:create,write:write,mixins:{apis:["progress","spin","align"],styles:["opacity"],animations:{opacity:{type:"tween",duration:500},progress:{type:"spring",stiffness:0.95,damping:0.65,mass:10}}}});var create$1=function create$1(_ref27){var root2=_ref27.root,props=_ref27.props;root2.element.innerHTML=(props.icon||"")+"<span>".concat(props.label,"</span>");props.isDisabled=false;};var write$1=function write$1(_ref28){var root2=_ref28.root,props=_ref28.props;var isDisabled=props.isDisabled;var shouldDisable=root2.query("GET_DISABLED")||props.opacity===0;if(shouldDisable&&!isDisabled){props.isDisabled=true;attr(root2.element,"disabled","disabled");}else if(!shouldDisable&&isDisabled){props.isDisabled=false;root2.element.removeAttribute("disabled");}};var fileActionButton=createView({tag:"button",attributes:{type:"button"},ignoreRect:true,ignoreRectUpdate:true,name:"file-action-button",mixins:{apis:["label"],styles:["translateX","translateY","scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",translateX:"spring",translateY:"spring",opacity:{type:"tween",duration:250}},listeners:true},create:create$1,write:write$1});var toNaturalFileSize=function toNaturalFileSize(bytes){var decimalSeparator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:".";var base=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1e3;var options2=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var _options2$labelBytes=options2.labelBytes,labelBytes=_options2$labelBytes===void 0?"bytes":_options2$labelBytes,_options2$labelKiloby=options2.labelKilobytes,labelKilobytes=_options2$labelKiloby===void 0?"KB":_options2$labelKiloby,_options2$labelMegaby=options2.labelMegabytes,labelMegabytes=_options2$labelMegaby===void 0?"MB":_options2$labelMegaby,_options2$labelGigaby=options2.labelGigabytes,labelGigabytes=_options2$labelGigaby===void 0?"GB":_options2$labelGigaby;bytes=Math.round(Math.abs(bytes));var KB=base;var MB=base*base;var GB=base*base*base;if(bytes<KB){return"".concat(bytes," ").concat(labelBytes);}if(bytes<MB){return"".concat(Math.floor(bytes/KB)," ").concat(labelKilobytes);}if(bytes<GB){return"".concat(removeDecimalsWhenZero(bytes/MB,1,decimalSeparator)," ").concat(labelMegabytes);}return"".concat(removeDecimalsWhenZero(bytes/GB,2,decimalSeparator)," ").concat(labelGigabytes);};var removeDecimalsWhenZero=function removeDecimalsWhenZero(value,decimalCount,separator){return value.toFixed(decimalCount).split(".").filter(function(part){return part!=="0";}).join(separator);};var create$2=function create$2(_ref29){var root2=_ref29.root,props=_ref29.props;var fileName=createElement$1("span");fileName.className="filepond--file-info-main";attr(fileName,"aria-hidden","true");root2.appendChild(fileName);root2.ref.fileName=fileName;var fileSize=createElement$1("span");fileSize.className="filepond--file-info-sub";root2.appendChild(fileSize);root2.ref.fileSize=fileSize;text(fileSize,root2.query("GET_LABEL_FILE_WAITING_FOR_SIZE"));text(fileName,formatFilename(root2.query("GET_ITEM_NAME",props.id)));};var updateFile=function updateFile(_ref30){var root2=_ref30.root,props=_ref30.props;text(root2.ref.fileSize,toNaturalFileSize(root2.query("GET_ITEM_SIZE",props.id),".",root2.query("GET_FILE_SIZE_BASE"),root2.query("GET_FILE_SIZE_LABELS",root2.query)));text(root2.ref.fileName,formatFilename(root2.query("GET_ITEM_NAME",props.id)));};var updateFileSizeOnError=function updateFileSizeOnError(_ref31){var root2=_ref31.root,props=_ref31.props;if(isInt(root2.query("GET_ITEM_SIZE",props.id))){updateFile({root:root2,props:props});return;}text(root2.ref.fileSize,root2.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"));};var fileInfo=createView({name:"file-info",ignoreRect:true,ignoreRectUpdate:true,write:createRoute({DID_LOAD_ITEM:updateFile,DID_UPDATE_ITEM_META:updateFile,DID_THROW_ITEM_LOAD_ERROR:updateFileSizeOnError,DID_THROW_ITEM_INVALID:updateFileSizeOnError}),didCreateView:function didCreateView(root2){applyFilters("CREATE_VIEW",_objectSpread(_objectSpread({},root2),{},{view:root2}));},create:create$2,mixins:{styles:["translateX","translateY"],animations:{translateX:"spring",translateY:"spring"}}});var toPercentage=function toPercentage(value){return Math.round(value*100);};var create$3=function create$3(_ref32){var root2=_ref32.root;var main=createElement$1("span");main.className="filepond--file-status-main";root2.appendChild(main);root2.ref.main=main;var sub=createElement$1("span");sub.className="filepond--file-status-sub";root2.appendChild(sub);root2.ref.sub=sub;didSetItemLoadProgress({root:root2,action:{progress:null}});};var didSetItemLoadProgress=function didSetItemLoadProgress(_ref33){var root2=_ref33.root,action=_ref33.action;var title=action.progress===null?root2.query("GET_LABEL_FILE_LOADING"):"".concat(root2.query("GET_LABEL_FILE_LOADING")," ").concat(toPercentage(action.progress),"%");text(root2.ref.main,title);text(root2.ref.sub,root2.query("GET_LABEL_TAP_TO_CANCEL"));};var didSetItemProcessProgress=function didSetItemProcessProgress(_ref34){var root2=_ref34.root,action=_ref34.action;var title=action.progress===null?root2.query("GET_LABEL_FILE_PROCESSING"):"".concat(root2.query("GET_LABEL_FILE_PROCESSING")," ").concat(toPercentage(action.progress),"%");text(root2.ref.main,title);text(root2.ref.sub,root2.query("GET_LABEL_TAP_TO_CANCEL"));};var didRequestItemProcessing=function didRequestItemProcessing(_ref35){var root2=_ref35.root;text(root2.ref.main,root2.query("GET_LABEL_FILE_PROCESSING"));text(root2.ref.sub,root2.query("GET_LABEL_TAP_TO_CANCEL"));};var didAbortItemProcessing=function didAbortItemProcessing(_ref36){var root2=_ref36.root;text(root2.ref.main,root2.query("GET_LABEL_FILE_PROCESSING_ABORTED"));text(root2.ref.sub,root2.query("GET_LABEL_TAP_TO_RETRY"));};var didCompleteItemProcessing=function didCompleteItemProcessing(_ref37){var root2=_ref37.root;text(root2.ref.main,root2.query("GET_LABEL_FILE_PROCESSING_COMPLETE"));text(root2.ref.sub,root2.query("GET_LABEL_TAP_TO_UNDO"));};var clear=function clear(_ref38){var root2=_ref38.root;text(root2.ref.main,"");text(root2.ref.sub,"");};var error=function error(_ref39){var root2=_ref39.root,action=_ref39.action;text(root2.ref.main,action.status.main);text(root2.ref.sub,action.status.sub);};var fileStatus=createView({name:"file-status",ignoreRect:true,ignoreRectUpdate:true,write:createRoute({DID_LOAD_ITEM:clear,DID_REVERT_ITEM_PROCESSING:clear,DID_REQUEST_ITEM_PROCESSING:didRequestItemProcessing,DID_ABORT_ITEM_PROCESSING:didAbortItemProcessing,DID_COMPLETE_ITEM_PROCESSING:didCompleteItemProcessing,DID_UPDATE_ITEM_PROCESS_PROGRESS:didSetItemProcessProgress,DID_UPDATE_ITEM_LOAD_PROGRESS:didSetItemLoadProgress,DID_THROW_ITEM_LOAD_ERROR:error,DID_THROW_ITEM_INVALID:error,DID_THROW_ITEM_PROCESSING_ERROR:error,DID_THROW_ITEM_PROCESSING_REVERT_ERROR:error,DID_THROW_ITEM_REMOVE_ERROR:error}),didCreateView:function didCreateView(root2){applyFilters("CREATE_VIEW",_objectSpread(_objectSpread({},root2),{},{view:root2}));},create:create$3,mixins:{styles:["translateX","translateY","opacity"],animations:{opacity:{type:"tween",duration:250},translateX:"spring",translateY:"spring"}}});var Buttons={AbortItemLoad:{label:"GET_LABEL_BUTTON_ABORT_ITEM_LOAD",action:"ABORT_ITEM_LOAD",className:"filepond--action-abort-item-load",align:"LOAD_INDICATOR_POSITION"},RetryItemLoad:{label:"GET_LABEL_BUTTON_RETRY_ITEM_LOAD",action:"RETRY_ITEM_LOAD",icon:"GET_ICON_RETRY",className:"filepond--action-retry-item-load",align:"BUTTON_PROCESS_ITEM_POSITION"},RemoveItem:{label:"GET_LABEL_BUTTON_REMOVE_ITEM",action:"REQUEST_REMOVE_ITEM",icon:"GET_ICON_REMOVE",className:"filepond--action-remove-item",align:"BUTTON_REMOVE_ITEM_POSITION"},ProcessItem:{label:"GET_LABEL_BUTTON_PROCESS_ITEM",action:"REQUEST_ITEM_PROCESSING",icon:"GET_ICON_PROCESS",className:"filepond--action-process-item",align:"BUTTON_PROCESS_ITEM_POSITION"},AbortItemProcessing:{label:"GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",action:"ABORT_ITEM_PROCESSING",className:"filepond--action-abort-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"},RetryItemProcessing:{label:"GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",action:"RETRY_ITEM_PROCESSING",icon:"GET_ICON_RETRY",className:"filepond--action-retry-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"},RevertItemProcessing:{label:"GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",action:"REQUEST_REVERT_ITEM_PROCESSING",icon:"GET_ICON_UNDO",className:"filepond--action-revert-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"}};var ButtonKeys=[];forin(Buttons,function(key){ButtonKeys.push(key);});var calculateFileInfoOffset=function calculateFileInfoOffset(root2){if(getRemoveIndicatorAligment(root2)==="right")return 0;var buttonRect=root2.ref.buttonRemoveItem.rect.element;return buttonRect.hidden?null:buttonRect.width+buttonRect.left;};var calculateButtonWidth=function calculateButtonWidth(root2){var buttonRect=root2.ref.buttonAbortItemLoad.rect.element;return buttonRect.width;};var calculateFileVerticalCenterOffset=function calculateFileVerticalCenterOffset(root2){return Math.floor(root2.ref.buttonRemoveItem.rect.element.height/4);};var calculateFileHorizontalCenterOffset=function calculateFileHorizontalCenterOffset(root2){return Math.floor(root2.ref.buttonRemoveItem.rect.element.left/2);};var getLoadIndicatorAlignment=function getLoadIndicatorAlignment(root2){return root2.query("GET_STYLE_LOAD_INDICATOR_POSITION");};var getProcessIndicatorAlignment=function getProcessIndicatorAlignment(root2){return root2.query("GET_STYLE_PROGRESS_INDICATOR_POSITION");};var getRemoveIndicatorAligment=function getRemoveIndicatorAligment(root2){return root2.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION");};var DefaultStyle={buttonAbortItemLoad:{opacity:0},buttonRetryItemLoad:{opacity:0},buttonRemoveItem:{opacity:0},buttonProcessItem:{opacity:0},buttonAbortItemProcessing:{opacity:0},buttonRetryItemProcessing:{opacity:0},buttonRevertItemProcessing:{opacity:0},loadProgressIndicator:{opacity:0,align:getLoadIndicatorAlignment},processProgressIndicator:{opacity:0,align:getProcessIndicatorAlignment},processingCompleteIndicator:{opacity:0,scaleX:0.75,scaleY:0.75},info:{translateX:0,translateY:0,opacity:0},status:{translateX:0,translateY:0,opacity:0}};var IdleStyle={buttonRemoveItem:{opacity:1},buttonProcessItem:{opacity:1},info:{translateX:calculateFileInfoOffset},status:{translateX:calculateFileInfoOffset}};var ProcessingStyle={buttonAbortItemProcessing:{opacity:1},processProgressIndicator:{opacity:1},status:{opacity:1}};var StyleMap={DID_THROW_ITEM_INVALID:{buttonRemoveItem:{opacity:1},info:{translateX:calculateFileInfoOffset},status:{translateX:calculateFileInfoOffset,opacity:1}},DID_START_ITEM_LOAD:{buttonAbortItemLoad:{opacity:1},loadProgressIndicator:{opacity:1},status:{opacity:1}},DID_THROW_ITEM_LOAD_ERROR:{buttonRetryItemLoad:{opacity:1},buttonRemoveItem:{opacity:1},info:{translateX:calculateFileInfoOffset},status:{opacity:1}},DID_START_ITEM_REMOVE:{processProgressIndicator:{opacity:1,align:getRemoveIndicatorAligment},info:{translateX:calculateFileInfoOffset},status:{opacity:0}},DID_THROW_ITEM_REMOVE_ERROR:{processProgressIndicator:{opacity:0,align:getRemoveIndicatorAligment},buttonRemoveItem:{opacity:1},info:{translateX:calculateFileInfoOffset},status:{opacity:1,translateX:calculateFileInfoOffset}},DID_LOAD_ITEM:IdleStyle,DID_LOAD_LOCAL_ITEM:{buttonRemoveItem:{opacity:1},info:{translateX:calculateFileInfoOffset},status:{translateX:calculateFileInfoOffset}},DID_START_ITEM_PROCESSING:ProcessingStyle,DID_REQUEST_ITEM_PROCESSING:ProcessingStyle,DID_UPDATE_ITEM_PROCESS_PROGRESS:ProcessingStyle,DID_COMPLETE_ITEM_PROCESSING:{buttonRevertItemProcessing:{opacity:1},info:{opacity:1},status:{opacity:1}},DID_THROW_ITEM_PROCESSING_ERROR:{buttonRemoveItem:{opacity:1},buttonRetryItemProcessing:{opacity:1},status:{opacity:1},info:{translateX:calculateFileInfoOffset}},DID_THROW_ITEM_PROCESSING_REVERT_ERROR:{buttonRevertItemProcessing:{opacity:1},status:{opacity:1},info:{opacity:1}},DID_ABORT_ITEM_PROCESSING:{buttonRemoveItem:{opacity:1},buttonProcessItem:{opacity:1},info:{translateX:calculateFileInfoOffset},status:{opacity:1}},DID_REVERT_ITEM_PROCESSING:IdleStyle};var processingCompleteIndicatorView=createView({create:function create(_ref40){var root2=_ref40.root;root2.element.innerHTML=root2.query("GET_ICON_DONE");},name:"processing-complete-indicator",ignoreRect:true,mixins:{styles:["scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",opacity:{type:"tween",duration:250}}}});var create$4=function create$4(_ref41){var root2=_ref41.root,props=_ref41.props;var LocalButtons=Object.keys(Buttons).reduce(function(prev,curr){prev[curr]=_objectSpread({},Buttons[curr]);return prev;},{});var id=props.id;var allowRevert=root2.query("GET_ALLOW_REVERT");var allowRemove=root2.query("GET_ALLOW_REMOVE");var allowProcess=root2.query("GET_ALLOW_PROCESS");var instantUpload=root2.query("GET_INSTANT_UPLOAD");var isAsync2=root2.query("IS_ASYNC");var alignRemoveItemButton=root2.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");var buttonFilter;if(isAsync2){if(allowProcess&&!allowRevert){buttonFilter=function buttonFilter(key){return!/RevertItemProcessing/.test(key);};}else if(!allowProcess&&allowRevert){buttonFilter=function buttonFilter(key){return!/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(key);};}else if(!allowProcess&&!allowRevert){buttonFilter=function buttonFilter(key){return!/Process/.test(key);};}}else{buttonFilter=function buttonFilter(key){return!/Process/.test(key);};}var enabledButtons=buttonFilter?ButtonKeys.filter(buttonFilter):ButtonKeys.concat();if(instantUpload&&allowRevert){LocalButtons["RevertItemProcessing"].label="GET_LABEL_BUTTON_REMOVE_ITEM";LocalButtons["RevertItemProcessing"].icon="GET_ICON_REMOVE";}if(isAsync2&&!allowRevert){var map2=StyleMap["DID_COMPLETE_ITEM_PROCESSING"];map2.info.translateX=calculateFileHorizontalCenterOffset;map2.info.translateY=calculateFileVerticalCenterOffset;map2.status.translateY=calculateFileVerticalCenterOffset;map2.processingCompleteIndicator={opacity:1,scaleX:1,scaleY:1};}if(isAsync2&&!allowProcess){["DID_START_ITEM_PROCESSING","DID_REQUEST_ITEM_PROCESSING","DID_UPDATE_ITEM_PROCESS_PROGRESS","DID_THROW_ITEM_PROCESSING_ERROR"].forEach(function(key){StyleMap[key].status.translateY=calculateFileVerticalCenterOffset;});StyleMap["DID_THROW_ITEM_PROCESSING_ERROR"].status.translateX=calculateButtonWidth;}if(alignRemoveItemButton&&allowRevert){LocalButtons["RevertItemProcessing"].align="BUTTON_REMOVE_ITEM_POSITION";var _map=StyleMap["DID_COMPLETE_ITEM_PROCESSING"];_map.info.translateX=calculateFileInfoOffset;_map.status.translateY=calculateFileVerticalCenterOffset;_map.processingCompleteIndicator={opacity:1,scaleX:1,scaleY:1};}if(!allowRemove){LocalButtons["RemoveItem"].disabled=true;}forin(LocalButtons,function(key,definition){var buttonView=root2.createChildView(fileActionButton,{label:root2.query(definition.label),icon:root2.query(definition.icon),opacity:0});if(enabledButtons.includes(key)){root2.appendChildView(buttonView);}if(definition.disabled){buttonView.element.setAttribute("disabled","disabled");buttonView.element.setAttribute("hidden","hidden");}buttonView.element.dataset.align=root2.query("GET_STYLE_".concat(definition.align));buttonView.element.classList.add(definition.className);buttonView.on("click",function(e2){e2.stopPropagation();if(definition.disabled)return;root2.dispatch(definition.action,{query:id});});root2.ref["button".concat(key)]=buttonView;});root2.ref.processingCompleteIndicator=root2.appendChildView(root2.createChildView(processingCompleteIndicatorView));root2.ref.processingCompleteIndicator.element.dataset.align=root2.query("GET_STYLE_BUTTON_PROCESS_ITEM_POSITION");root2.ref.info=root2.appendChildView(root2.createChildView(fileInfo,{id:id}));root2.ref.status=root2.appendChildView(root2.createChildView(fileStatus,{id:id}));var loadIndicatorView=root2.appendChildView(root2.createChildView(progressIndicator,{opacity:0,align:root2.query("GET_STYLE_LOAD_INDICATOR_POSITION")}));loadIndicatorView.element.classList.add("filepond--load-indicator");root2.ref.loadProgressIndicator=loadIndicatorView;var progressIndicatorView=root2.appendChildView(root2.createChildView(progressIndicator,{opacity:0,align:root2.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")}));progressIndicatorView.element.classList.add("filepond--process-indicator");root2.ref.processProgressIndicator=progressIndicatorView;root2.ref.activeStyles=[];};var write$2=function write$2(_ref42){var root2=_ref42.root,actions2=_ref42.actions,props=_ref42.props;route({root:root2,actions:actions2,props:props});var action=actions2.concat().filter(function(action2){return /^DID_/.test(action2.type);}).reverse().find(function(action2){return StyleMap[action2.type];});if(action){root2.ref.activeStyles=[];var stylesToApply=StyleMap[action.type];forin(DefaultStyle,function(name2,defaultStyles){var control=root2.ref[name2];forin(defaultStyles,function(key,defaultValue){var value=stylesToApply[name2]&&typeof stylesToApply[name2][key]!=="undefined"?stylesToApply[name2][key]:defaultValue;root2.ref.activeStyles.push({control:control,key:key,value:value});});});}root2.ref.activeStyles.forEach(function(_ref43){var control=_ref43.control,key=_ref43.key,value=_ref43.value;control[key]=typeof value==="function"?value(root2):value;});};var route=createRoute({DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING:function DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING(_ref44){var root2=_ref44.root,action=_ref44.action;root2.ref.buttonAbortItemProcessing.label=action.value;},DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD:function DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD(_ref45){var root2=_ref45.root,action=_ref45.action;root2.ref.buttonAbortItemLoad.label=action.value;},DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL:function DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL(_ref46){var root2=_ref46.root,action=_ref46.action;root2.ref.buttonAbortItemRemoval.label=action.value;},DID_REQUEST_ITEM_PROCESSING:function DID_REQUEST_ITEM_PROCESSING(_ref47){var root2=_ref47.root;root2.ref.processProgressIndicator.spin=true;root2.ref.processProgressIndicator.progress=0;},DID_START_ITEM_LOAD:function DID_START_ITEM_LOAD(_ref48){var root2=_ref48.root;root2.ref.loadProgressIndicator.spin=true;root2.ref.loadProgressIndicator.progress=0;},DID_START_ITEM_REMOVE:function DID_START_ITEM_REMOVE(_ref49){var root2=_ref49.root;root2.ref.processProgressIndicator.spin=true;root2.ref.processProgressIndicator.progress=0;},DID_UPDATE_ITEM_LOAD_PROGRESS:function DID_UPDATE_ITEM_LOAD_PROGRESS(_ref50){var root2=_ref50.root,action=_ref50.action;root2.ref.loadProgressIndicator.spin=false;root2.ref.loadProgressIndicator.progress=action.progress;},DID_UPDATE_ITEM_PROCESS_PROGRESS:function DID_UPDATE_ITEM_PROCESS_PROGRESS(_ref51){var root2=_ref51.root,action=_ref51.action;root2.ref.processProgressIndicator.spin=false;root2.ref.processProgressIndicator.progress=action.progress;}});var file=createView({create:create$4,write:write$2,didCreateView:function didCreateView(root2){applyFilters("CREATE_VIEW",_objectSpread(_objectSpread({},root2),{},{view:root2}));},name:"file"});var create$5=function create$5(_ref52){var root2=_ref52.root,props=_ref52.props;root2.ref.fileName=createElement$1("legend");root2.appendChild(root2.ref.fileName);root2.ref.file=root2.appendChildView(root2.createChildView(file,{id:props.id}));root2.ref.data=false;};var didLoadItem=function didLoadItem(_ref53){var root2=_ref53.root,props=_ref53.props;text(root2.ref.fileName,formatFilename(root2.query("GET_ITEM_NAME",props.id)));};var fileWrapper=createView({create:create$5,ignoreRect:true,write:createRoute({DID_LOAD_ITEM:didLoadItem}),didCreateView:function didCreateView(root2){applyFilters("CREATE_VIEW",_objectSpread(_objectSpread({},root2),{},{view:root2}));},tag:"fieldset",name:"file-wrapper"});var PANEL_SPRING_PROPS={type:"spring",damping:0.6,mass:7};var create$6=function create$6(_ref54){var root2=_ref54.root,props=_ref54.props;[{name:"top"},{name:"center",props:{translateY:null,scaleY:null},mixins:{animations:{scaleY:PANEL_SPRING_PROPS},styles:["translateY","scaleY"]}},{name:"bottom",props:{translateY:null},mixins:{animations:{translateY:PANEL_SPRING_PROPS},styles:["translateY"]}}].forEach(function(section){createSection(root2,section,props.name);});root2.element.classList.add("filepond--".concat(props.name));root2.ref.scalable=null;};var createSection=function createSection(root2,section,className){var viewConstructor=createView({name:"panel-".concat(section.name," filepond--").concat(className),mixins:section.mixins,ignoreRectUpdate:true});var view=root2.createChildView(viewConstructor,section.props);root2.ref[section.name]=root2.appendChildView(view);};var write$3=function write$3(_ref55){var root2=_ref55.root,props=_ref55.props;if(root2.ref.scalable===null||props.scalable!==root2.ref.scalable){root2.ref.scalable=isBoolean(props.scalable)?props.scalable:true;root2.element.dataset.scalable=root2.ref.scalable;}if(!props.height)return;var topRect=root2.ref.top.rect.element;var bottomRect=root2.ref.bottom.rect.element;var height=Math.max(topRect.height+bottomRect.height,props.height);root2.ref.center.translateY=topRect.height;root2.ref.center.scaleY=(height-topRect.height-bottomRect.height)/100;root2.ref.bottom.translateY=height-bottomRect.height;};var panel=createView({name:"panel",read:function read(_ref56){var root2=_ref56.root,props=_ref56.props;return props.heightCurrent=root2.ref.bottom.translateY;},write:write$3,create:create$6,ignoreRect:true,mixins:{apis:["height","heightCurrent","scalable"]}});var createDragHelper=function createDragHelper(items){var itemIds=items.map(function(item2){return item2.id;});var prevIndex=void 0;return{setIndex:function setIndex(index){prevIndex=index;},getIndex:function getIndex(){return prevIndex;},getItemIndex:function getItemIndex(item2){return itemIds.indexOf(item2.id);}};};var ITEM_TRANSLATE_SPRING={type:"spring",stiffness:0.75,damping:0.45,mass:10};var ITEM_SCALE_SPRING="spring";var StateMap={DID_START_ITEM_LOAD:"busy",DID_UPDATE_ITEM_LOAD_PROGRESS:"loading",DID_THROW_ITEM_INVALID:"load-invalid",DID_THROW_ITEM_LOAD_ERROR:"load-error",DID_LOAD_ITEM:"idle",DID_THROW_ITEM_REMOVE_ERROR:"remove-error",DID_START_ITEM_REMOVE:"busy",DID_START_ITEM_PROCESSING:"busy processing",DID_REQUEST_ITEM_PROCESSING:"busy processing",DID_UPDATE_ITEM_PROCESS_PROGRESS:"processing",DID_COMPLETE_ITEM_PROCESSING:"processing-complete",DID_THROW_ITEM_PROCESSING_ERROR:"processing-error",DID_THROW_ITEM_PROCESSING_REVERT_ERROR:"processing-revert-error",DID_ABORT_ITEM_PROCESSING:"cancelled",DID_REVERT_ITEM_PROCESSING:"idle"};var create$7=function create$7(_ref57){var root2=_ref57.root,props=_ref57.props;root2.ref.handleClick=function(e2){return root2.dispatch("DID_ACTIVATE_ITEM",{id:props.id});};root2.element.id="filepond--item-".concat(props.id);root2.element.addEventListener("click",root2.ref.handleClick);root2.ref.container=root2.appendChildView(root2.createChildView(fileWrapper,{id:props.id}));root2.ref.panel=root2.appendChildView(root2.createChildView(panel,{name:"item-panel"}));root2.ref.panel.height=null;props.markedForRemoval=false;if(!root2.query("GET_ALLOW_REORDER"))return;root2.element.dataset.dragState="idle";var grab=function grab(e2){if(!e2.isPrimary)return;var removedActivateListener=false;var origin={x:e2.pageX,y:e2.pageY};props.dragOrigin={x:root2.translateX,y:root2.translateY};props.dragCenter={x:e2.offsetX,y:e2.offsetY};var dragState=createDragHelper(root2.query("GET_ACTIVE_ITEMS"));root2.dispatch("DID_GRAB_ITEM",{id:props.id,dragState:dragState});var drag=function drag(e3){if(!e3.isPrimary)return;e3.stopPropagation();e3.preventDefault();props.dragOffset={x:e3.pageX-origin.x,y:e3.pageY-origin.y};var dist=props.dragOffset.x*props.dragOffset.x+props.dragOffset.y*props.dragOffset.y;if(dist>16&&!removedActivateListener){removedActivateListener=true;root2.element.removeEventListener("click",root2.ref.handleClick);}root2.dispatch("DID_DRAG_ITEM",{id:props.id,dragState:dragState});};var drop2=function drop2(e3){if(!e3.isPrimary)return;document.removeEventListener("pointermove",drag);document.removeEventListener("pointerup",drop2);props.dragOffset={x:e3.pageX-origin.x,y:e3.pageY-origin.y};root2.dispatch("DID_DROP_ITEM",{id:props.id,dragState:dragState});if(removedActivateListener){setTimeout(function(){return root2.element.addEventListener("click",root2.ref.handleClick);},0);}};document.addEventListener("pointermove",drag);document.addEventListener("pointerup",drop2);};root2.element.addEventListener("pointerdown",grab);};var route$1=createRoute({DID_UPDATE_PANEL_HEIGHT:function DID_UPDATE_PANEL_HEIGHT(_ref58){var root2=_ref58.root,action=_ref58.action;root2.height=action.height;}});var write$4=createRoute({DID_GRAB_ITEM:function DID_GRAB_ITEM(_ref59){var root2=_ref59.root,props=_ref59.props;props.dragOrigin={x:root2.translateX,y:root2.translateY};},DID_DRAG_ITEM:function DID_DRAG_ITEM(_ref60){var root2=_ref60.root;root2.element.dataset.dragState="drag";},DID_DROP_ITEM:function DID_DROP_ITEM(_ref61){var root2=_ref61.root,props=_ref61.props;props.dragOffset=null;props.dragOrigin=null;root2.element.dataset.dragState="drop";}},function(_ref62){var root2=_ref62.root,actions2=_ref62.actions,props=_ref62.props,shouldOptimize=_ref62.shouldOptimize;if(root2.element.dataset.dragState==="drop"){if(root2.scaleX<=1){root2.element.dataset.dragState="idle";}}var action=actions2.concat().filter(function(action2){return /^DID_/.test(action2.type);}).reverse().find(function(action2){return StateMap[action2.type];});if(action&&action.type!==props.currentState){props.currentState=action.type;root2.element.dataset.filepondItemState=StateMap[props.currentState]||"";}var aspectRatio=root2.query("GET_ITEM_PANEL_ASPECT_RATIO")||root2.query("GET_PANEL_ASPECT_RATIO");if(!aspectRatio){route$1({root:root2,actions:actions2,props:props});if(!root2.height&&root2.ref.container.rect.element.height>0){root2.height=root2.ref.container.rect.element.height;}}else if(!shouldOptimize){root2.height=root2.rect.element.width*aspectRatio;}if(shouldOptimize){root2.ref.panel.height=null;}root2.ref.panel.height=root2.height;});var item=createView({create:create$7,write:write$4,destroy:function destroy(_ref63){var root2=_ref63.root,props=_ref63.props;root2.element.removeEventListener("click",root2.ref.handleClick);root2.dispatch("RELEASE_ITEM",{query:props.id});},tag:"li",name:"item",mixins:{apis:["id","interactionMethod","markedForRemoval","spawnDate","dragCenter","dragOrigin","dragOffset"],styles:["translateX","translateY","scaleX","scaleY","opacity","height"],animations:{scaleX:ITEM_SCALE_SPRING,scaleY:ITEM_SCALE_SPRING,translateX:ITEM_TRANSLATE_SPRING,translateY:ITEM_TRANSLATE_SPRING,opacity:{type:"tween",duration:150}}}});var getItemsPerRow=function getItemsPerRow(horizontalSpace,itemWidth){return Math.max(1,Math.floor((horizontalSpace+1)/itemWidth));};var getItemIndexByPosition=function getItemIndexByPosition(view,children,positionInView){if(!positionInView)return;var horizontalSpace=view.rect.element.width;var l=children.length;var last=null;if(l===0||positionInView.top<children[0].rect.element.top)return-1;var item2=children[0];var itemRect=item2.rect.element;var itemHorizontalMargin=itemRect.marginLeft+itemRect.marginRight;var itemWidth=itemRect.width+itemHorizontalMargin;var itemsPerRow=getItemsPerRow(horizontalSpace,itemWidth);if(itemsPerRow===1){for(var index=0;index<l;index++){var child=children[index];var childMid=child.rect.outer.top+child.rect.element.height*0.5;if(positionInView.top<childMid){return index;}}return l;}var itemVerticalMargin=itemRect.marginTop+itemRect.marginBottom;var itemHeight=itemRect.height+itemVerticalMargin;for(var _index=0;_index<l;_index++){var indexX=_index%itemsPerRow;var indexY=Math.floor(_index/itemsPerRow);var offsetX=indexX*itemWidth;var offsetY=indexY*itemHeight;var itemTop=offsetY-itemRect.marginTop;var itemRight=offsetX+itemWidth;var itemBottom=offsetY+itemHeight+itemRect.marginBottom;if(positionInView.top<itemBottom&&positionInView.top>itemTop){if(positionInView.left<itemRight){return _index;}else if(_index!==l-1){last=_index;}else{last=null;}}}if(last!==null){return last;}return l;};var dropAreaDimensions={height:0,width:0,get getHeight(){return this.height;},set setHeight(val){if(this.height===0||val===0)this.height=val;},get getWidth(){return this.width;},set setWidth(val){if(this.width===0||val===0)this.width=val;},setDimensions:function setDimensions(height,width){if(this.height===0||height===0)this.height=height;if(this.width===0||width===0)this.width=width;}};var create$8=function create$8(_ref64){var root2=_ref64.root;attr(root2.element,"role","list");root2.ref.lastItemSpanwDate=Date.now();};var addItemView=function addItemView(_ref65){var root2=_ref65.root,action=_ref65.action;var id=action.id,index=action.index,interactionMethod=action.interactionMethod;root2.ref.addIndex=index;var now=Date.now();var spawnDate=now;var opacity=1;if(interactionMethod!==InteractionMethod.NONE){opacity=0;var cooldown=root2.query("GET_ITEM_INSERT_INTERVAL");var dist=now-root2.ref.lastItemSpanwDate;spawnDate=dist<cooldown?now+(cooldown-dist):now;}root2.ref.lastItemSpanwDate=spawnDate;root2.appendChildView(root2.createChildView(item,{spawnDate:spawnDate,id:id,opacity:opacity,interactionMethod:interactionMethod}),index);};var moveItem=function moveItem(item2,x,y){var vx=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var vy=arguments.length>4&&arguments[4]!==undefined?arguments[4]:1;if(item2.dragOffset){item2.translateX=null;item2.translateY=null;item2.translateX=item2.dragOrigin.x+item2.dragOffset.x;item2.translateY=item2.dragOrigin.y+item2.dragOffset.y;item2.scaleX=1.025;item2.scaleY=1.025;}else{item2.translateX=x;item2.translateY=y;if(Date.now()>item2.spawnDate){if(item2.opacity===0){introItemView(item2,x,y,vx,vy);}item2.scaleX=1;item2.scaleY=1;item2.opacity=1;}}};var introItemView=function introItemView(item2,x,y,vx,vy){if(item2.interactionMethod===InteractionMethod.NONE){item2.translateX=null;item2.translateX=x;item2.translateY=null;item2.translateY=y;}else if(item2.interactionMethod===InteractionMethod.DROP){item2.translateX=null;item2.translateX=x-vx*20;item2.translateY=null;item2.translateY=y-vy*10;item2.scaleX=0.8;item2.scaleY=0.8;}else if(item2.interactionMethod===InteractionMethod.BROWSE){item2.translateY=null;item2.translateY=y-30;}else if(item2.interactionMethod===InteractionMethod.API){item2.translateX=null;item2.translateX=x-30;item2.translateY=null;}};var removeItemView=function removeItemView(_ref66){var root2=_ref66.root,action=_ref66.action;var id=action.id;var view=root2.childViews.find(function(child){return child.id===id;});if(!view){return;}view.scaleX=0.9;view.scaleY=0.9;view.opacity=0;view.markedForRemoval=true;};var getItemHeight=function getItemHeight(child){return child.rect.element.height+child.rect.element.marginBottom*0.5+child.rect.element.marginTop*0.5;};var getItemWidth=function getItemWidth(child){return child.rect.element.width+child.rect.element.marginLeft*0.5+child.rect.element.marginRight*0.5;};var dragItem=function dragItem(_ref67){var root2=_ref67.root,action=_ref67.action;var id=action.id,dragState=action.dragState;var item2=root2.query("GET_ITEM",{id:id});var view=root2.childViews.find(function(child){return child.id===id;});var numItems=root2.childViews.length;var oldIndex=dragState.getItemIndex(item2);if(!view)return;var dragPosition={x:view.dragOrigin.x+view.dragOffset.x+view.dragCenter.x,y:view.dragOrigin.y+view.dragOffset.y+view.dragCenter.y};var dragHeight=getItemHeight(view);var dragWidth=getItemWidth(view);var cols=Math.floor(root2.rect.outer.width/dragWidth);if(cols>numItems)cols=numItems;var rows=Math.floor(numItems/cols+1);dropAreaDimensions.setHeight=dragHeight*rows;dropAreaDimensions.setWidth=dragWidth*cols;var location2={y:Math.floor(dragPosition.y/dragHeight),x:Math.floor(dragPosition.x/dragWidth),getGridIndex:function getGridIndex(){if(dragPosition.y>dropAreaDimensions.getHeight||dragPosition.y<0||dragPosition.x>dropAreaDimensions.getWidth||dragPosition.x<0)return oldIndex;return this.y*cols+this.x;},getColIndex:function getColIndex(){var items=root2.query("GET_ACTIVE_ITEMS");var visibleChildren=root2.childViews.filter(function(child){return child.rect.element.height;});var children=items.map(function(item3){return visibleChildren.find(function(childView){return childView.id===item3.id;});});var currentIndex2=children.findIndex(function(child){return child===view;});var dragHeight2=getItemHeight(view);var l=children.length;var idx=l;var childHeight=0;var childBottom=0;var childTop=0;for(var i=0;i<l;i++){childHeight=getItemHeight(children[i]);childTop=childBottom;childBottom=childTop+childHeight;if(dragPosition.y<childBottom){if(currentIndex2>i){if(dragPosition.y<childTop+dragHeight2){idx=i;break;}continue;}idx=i;break;}}return idx;}};var index=cols>1?location2.getGridIndex():location2.getColIndex();root2.dispatch("MOVE_ITEM",{query:view,index:index});var currentIndex=dragState.getIndex();if(currentIndex===void 0||currentIndex!==index){dragState.setIndex(index);if(currentIndex===void 0)return;root2.dispatch("DID_REORDER_ITEMS",{items:root2.query("GET_ACTIVE_ITEMS"),origin:oldIndex,target:index});}};var route$2=createRoute({DID_ADD_ITEM:addItemView,DID_REMOVE_ITEM:removeItemView,DID_DRAG_ITEM:dragItem});var write$5=function write$5(_ref68){var root2=_ref68.root,props=_ref68.props,actions2=_ref68.actions,shouldOptimize=_ref68.shouldOptimize;route$2({root:root2,props:props,actions:actions2});var dragCoordinates=props.dragCoordinates;var horizontalSpace=root2.rect.element.width;var visibleChildren=root2.childViews.filter(function(child){return child.rect.element.height;});var children=root2.query("GET_ACTIVE_ITEMS").map(function(item2){return visibleChildren.find(function(child){return child.id===item2.id;});}).filter(function(item2){return item2;});var dragIndex=dragCoordinates?getItemIndexByPosition(root2,children,dragCoordinates):null;var addIndex=root2.ref.addIndex||null;root2.ref.addIndex=null;var dragIndexOffset=0;var removeIndexOffset=0;var addIndexOffset=0;if(children.length===0)return;var childRect=children[0].rect.element;var itemVerticalMargin=childRect.marginTop+childRect.marginBottom;var itemHorizontalMargin=childRect.marginLeft+childRect.marginRight;var itemWidth=childRect.width+itemHorizontalMargin;var itemHeight=childRect.height+itemVerticalMargin;var itemsPerRow=getItemsPerRow(horizontalSpace,itemWidth);if(itemsPerRow===1){var offsetY=0;var dragOffset=0;children.forEach(function(child,index){if(dragIndex){var dist=index-dragIndex;if(dist===-2){dragOffset=-itemVerticalMargin*0.25;}else if(dist===-1){dragOffset=-itemVerticalMargin*0.75;}else if(dist===0){dragOffset=itemVerticalMargin*0.75;}else if(dist===1){dragOffset=itemVerticalMargin*0.25;}else{dragOffset=0;}}if(shouldOptimize){child.translateX=null;child.translateY=null;}if(!child.markedForRemoval){moveItem(child,0,offsetY+dragOffset);}var itemHeight2=child.rect.element.height+itemVerticalMargin;var visualHeight=itemHeight2*(child.markedForRemoval?child.opacity:1);offsetY+=visualHeight;});}else{var prevX=0;var prevY=0;children.forEach(function(child,index){if(index===dragIndex){dragIndexOffset=1;}if(index===addIndex){addIndexOffset+=1;}if(child.markedForRemoval&&child.opacity<0.5){removeIndexOffset-=1;}var visualIndex=index+addIndexOffset+dragIndexOffset+removeIndexOffset;var indexX=visualIndex%itemsPerRow;var indexY=Math.floor(visualIndex/itemsPerRow);var offsetX=indexX*itemWidth;var offsetY=indexY*itemHeight;var vectorX=Math.sign(offsetX-prevX);var vectorY=Math.sign(offsetY-prevY);prevX=offsetX;prevY=offsetY;if(child.markedForRemoval)return;if(shouldOptimize){child.translateX=null;child.translateY=null;}moveItem(child,offsetX,offsetY,vectorX,vectorY);});}};var filterSetItemActions=function filterSetItemActions(child,actions2){return actions2.filter(function(action){if(action.data&&action.data.id){return child.id===action.data.id;}return true;});};var list=createView({create:create$8,write:write$5,tag:"ul",name:"list",didWriteView:function didWriteView(_ref69){var root2=_ref69.root;root2.childViews.filter(function(view){return view.markedForRemoval&&view.opacity===0&&view.resting;}).forEach(function(view){view._destroy();root2.removeChildView(view);});},filterFrameActionsForChild:filterSetItemActions,mixins:{apis:["dragCoordinates"]}});var create$9=function create$9(_ref70){var root2=_ref70.root,props=_ref70.props;root2.ref.list=root2.appendChildView(root2.createChildView(list));props.dragCoordinates=null;props.overflowing=false;};var storeDragCoordinates=function storeDragCoordinates(_ref71){var root2=_ref71.root,props=_ref71.props,action=_ref71.action;if(!root2.query("GET_ITEM_INSERT_LOCATION_FREEDOM"))return;props.dragCoordinates={left:action.position.scopeLeft-root2.ref.list.rect.element.left,top:action.position.scopeTop-(root2.rect.outer.top+root2.rect.element.marginTop+root2.rect.element.scrollTop)};};var clearDragCoordinates=function clearDragCoordinates(_ref72){var props=_ref72.props;props.dragCoordinates=null;};var route$3=createRoute({DID_DRAG:storeDragCoordinates,DID_END_DRAG:clearDragCoordinates});var write$6=function write$6(_ref73){var root2=_ref73.root,props=_ref73.props,actions2=_ref73.actions;route$3({root:root2,props:props,actions:actions2});root2.ref.list.dragCoordinates=props.dragCoordinates;if(props.overflowing&&!props.overflow){props.overflowing=false;root2.element.dataset.state="";root2.height=null;}if(props.overflow){var newHeight=Math.round(props.overflow);if(newHeight!==root2.height){props.overflowing=true;root2.element.dataset.state="overflow";root2.height=newHeight;}}};var listScroller=createView({create:create$9,write:write$6,name:"list-scroller",mixins:{apis:["overflow","dragCoordinates"],styles:["height","translateY"],animations:{translateY:"spring"}}});var attrToggle=function attrToggle(element,name2,state2){var enabledValue=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";if(state2){attr(element,name2,enabledValue);}else{element.removeAttribute(name2);}};var resetFileInput=function resetFileInput(input){if(!input||input.value===""){return;}try{input.value="";}catch(err){}if(input.value){var form=createElement$1("form");var parentNode=input.parentNode;var ref=input.nextSibling;form.appendChild(input);form.reset();if(ref){parentNode.insertBefore(input,ref);}else{parentNode.appendChild(input);}}};var create$a=function create$a(_ref74){var root2=_ref74.root,props=_ref74.props;root2.element.id="filepond--browser-".concat(props.id);attr(root2.element,"name",root2.query("GET_NAME"));attr(root2.element,"aria-controls","filepond--assistant-".concat(props.id));attr(root2.element,"aria-labelledby","filepond--drop-label-".concat(props.id));setAcceptedFileTypes({root:root2,action:{value:root2.query("GET_ACCEPTED_FILE_TYPES")}});toggleAllowMultiple({root:root2,action:{value:root2.query("GET_ALLOW_MULTIPLE")}});toggleDirectoryFilter({root:root2,action:{value:root2.query("GET_ALLOW_DIRECTORIES_ONLY")}});toggleDisabled({root:root2});toggleRequired({root:root2,action:{value:root2.query("GET_REQUIRED")}});setCaptureMethod({root:root2,action:{value:root2.query("GET_CAPTURE_METHOD")}});root2.ref.handleChange=function(e2){if(!root2.element.value){return;}var files=Array.from(root2.element.files).map(function(file2){file2._relativePath=file2.webkitRelativePath;return file2;});setTimeout(function(){props.onload(files);resetFileInput(root2.element);},250);};root2.element.addEventListener("change",root2.ref.handleChange);};var setAcceptedFileTypes=function setAcceptedFileTypes(_ref75){var root2=_ref75.root,action=_ref75.action;if(!root2.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE"))return;attrToggle(root2.element,"accept",!!action.value,action.value?action.value.join(","):"");};var toggleAllowMultiple=function toggleAllowMultiple(_ref76){var root2=_ref76.root,action=_ref76.action;attrToggle(root2.element,"multiple",action.value);};var toggleDirectoryFilter=function toggleDirectoryFilter(_ref77){var root2=_ref77.root,action=_ref77.action;attrToggle(root2.element,"webkitdirectory",action.value);};var toggleDisabled=function toggleDisabled(_ref78){var root2=_ref78.root;var isDisabled=root2.query("GET_DISABLED");var doesAllowBrowse=root2.query("GET_ALLOW_BROWSE");var disableField=isDisabled||!doesAllowBrowse;attrToggle(root2.element,"disabled",disableField);};var toggleRequired=function toggleRequired(_ref79){var root2=_ref79.root,action=_ref79.action;if(!action.value){attrToggle(root2.element,"required",false);}else if(root2.query("GET_TOTAL_ITEMS")===0){attrToggle(root2.element,"required",true);}};var setCaptureMethod=function setCaptureMethod(_ref80){var root2=_ref80.root,action=_ref80.action;attrToggle(root2.element,"capture",!!action.value,action.value===true?"":action.value);};var updateRequiredStatus=function updateRequiredStatus(_ref81){var root2=_ref81.root;var element=root2.element;if(root2.query("GET_TOTAL_ITEMS")>0){attrToggle(element,"required",false);attrToggle(element,"name",false);}else{attrToggle(element,"name",true,root2.query("GET_NAME"));var shouldCheckValidity=root2.query("GET_CHECK_VALIDITY");if(shouldCheckValidity){element.setCustomValidity("");}if(root2.query("GET_REQUIRED")){attrToggle(element,"required",true);}}};var updateFieldValidityStatus=function updateFieldValidityStatus(_ref82){var root2=_ref82.root;var shouldCheckValidity=root2.query("GET_CHECK_VALIDITY");if(!shouldCheckValidity)return;root2.element.setCustomValidity(root2.query("GET_LABEL_INVALID_FIELD"));};var browser=createView({tag:"input",name:"browser",ignoreRect:true,ignoreRectUpdate:true,attributes:{type:"file"},create:create$a,destroy:function destroy(_ref83){var root2=_ref83.root;root2.element.removeEventListener("change",root2.ref.handleChange);},write:createRoute({DID_LOAD_ITEM:updateRequiredStatus,DID_REMOVE_ITEM:updateRequiredStatus,DID_THROW_ITEM_INVALID:updateFieldValidityStatus,DID_SET_DISABLED:toggleDisabled,DID_SET_ALLOW_BROWSE:toggleDisabled,DID_SET_ALLOW_DIRECTORIES_ONLY:toggleDirectoryFilter,DID_SET_ALLOW_MULTIPLE:toggleAllowMultiple,DID_SET_ACCEPTED_FILE_TYPES:setAcceptedFileTypes,DID_SET_CAPTURE_METHOD:setCaptureMethod,DID_SET_REQUIRED:toggleRequired})});var Key={ENTER:13,SPACE:32};var create$b=function create$b(_ref84){var root2=_ref84.root,props=_ref84.props;var label=createElement$1("label");attr(label,"for","filepond--browser-".concat(props.id));attr(label,"id","filepond--drop-label-".concat(props.id));attr(label,"aria-hidden","true");root2.ref.handleKeyDown=function(e2){var isActivationKey=e2.keyCode===Key.ENTER||e2.keyCode===Key.SPACE;if(!isActivationKey)return;e2.preventDefault();root2.ref.label.click();};root2.ref.handleClick=function(e2){var isLabelClick=e2.target===label||label.contains(e2.target);if(isLabelClick)return;root2.ref.label.click();};label.addEventListener("keydown",root2.ref.handleKeyDown);root2.element.addEventListener("click",root2.ref.handleClick);updateLabelValue(label,props.caption);root2.appendChild(label);root2.ref.label=label;};var updateLabelValue=function updateLabelValue(label,value){label.innerHTML=value;var clickable=label.querySelector(".filepond--label-action");if(clickable){attr(clickable,"tabindex","0");}return value;};var dropLabel=createView({name:"drop-label",ignoreRect:true,create:create$b,destroy:function destroy(_ref85){var root2=_ref85.root;root2.ref.label.addEventListener("keydown",root2.ref.handleKeyDown);root2.element.removeEventListener("click",root2.ref.handleClick);},write:createRoute({DID_SET_LABEL_IDLE:function DID_SET_LABEL_IDLE(_ref86){var root2=_ref86.root,action=_ref86.action;updateLabelValue(root2.ref.label,action.value);}}),mixins:{styles:["opacity","translateX","translateY"],animations:{opacity:{type:"tween",duration:150},translateX:"spring",translateY:"spring"}}});var blob=createView({name:"drip-blob",ignoreRect:true,mixins:{styles:["translateX","translateY","scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",translateX:"spring",translateY:"spring",opacity:{type:"tween",duration:250}}}});var addBlob=function addBlob(_ref87){var root2=_ref87.root;var centerX=root2.rect.element.width*0.5;var centerY=root2.rect.element.height*0.5;root2.ref.blob=root2.appendChildView(root2.createChildView(blob,{opacity:0,scaleX:2.5,scaleY:2.5,translateX:centerX,translateY:centerY}));};var moveBlob=function moveBlob(_ref88){var root2=_ref88.root,action=_ref88.action;if(!root2.ref.blob){addBlob({root:root2});return;}root2.ref.blob.translateX=action.position.scopeLeft;root2.ref.blob.translateY=action.position.scopeTop;root2.ref.blob.scaleX=1;root2.ref.blob.scaleY=1;root2.ref.blob.opacity=1;};var hideBlob=function hideBlob(_ref89){var root2=_ref89.root;if(!root2.ref.blob){return;}root2.ref.blob.opacity=0;};var explodeBlob=function explodeBlob(_ref90){var root2=_ref90.root;if(!root2.ref.blob){return;}root2.ref.blob.scaleX=2.5;root2.ref.blob.scaleY=2.5;root2.ref.blob.opacity=0;};var write$7=function write$7(_ref91){var root2=_ref91.root,props=_ref91.props,actions2=_ref91.actions;route$4({root:root2,props:props,actions:actions2});var blob2=root2.ref.blob;if(actions2.length===0&&blob2&&blob2.opacity===0){root2.removeChildView(blob2);root2.ref.blob=null;}};var route$4=createRoute({DID_DRAG:moveBlob,DID_DROP:explodeBlob,DID_END_DRAG:hideBlob});var drip=createView({ignoreRect:true,ignoreRectUpdate:true,name:"drip",write:write$7});var setInputFiles=function setInputFiles(element,files){try{var dataTransfer=new DataTransfer();files.forEach(function(file2){if(file2 instanceof File){dataTransfer.items.add(file2);}else{dataTransfer.items.add(new File([file2],file2.name,{type:file2.type}));}});element.files=dataTransfer.files;}catch(err){return false;}return true;};var create$c=function create$c(_ref92){var root2=_ref92.root;return root2.ref.fields={};};var getField=function getField(root2,id){return root2.ref.fields[id];};var syncFieldPositionsWithItems=function syncFieldPositionsWithItems(root2){root2.query("GET_ACTIVE_ITEMS").forEach(function(item2){if(!root2.ref.fields[item2.id])return;root2.element.appendChild(root2.ref.fields[item2.id]);});};var didReorderItems=function didReorderItems(_ref93){var root2=_ref93.root;return syncFieldPositionsWithItems(root2);};var didAddItem=function didAddItem(_ref94){var root2=_ref94.root,action=_ref94.action;var fileItem=root2.query("GET_ITEM",action.id);var isLocalFile=fileItem.origin===FileOrigin.LOCAL;var shouldUseFileInput=!isLocalFile&&root2.query("SHOULD_UPDATE_FILE_INPUT");var dataContainer=createElement$1("input");dataContainer.type=shouldUseFileInput?"file":"hidden";dataContainer.name=root2.query("GET_NAME");dataContainer.disabled=root2.query("GET_DISABLED");root2.ref.fields[action.id]=dataContainer;syncFieldPositionsWithItems(root2);};var didLoadItem$1=function didLoadItem$1(_ref95){var root2=_ref95.root,action=_ref95.action;var field=getField(root2,action.id);if(!field)return;if(action.serverFileReference!==null)field.value=action.serverFileReference;if(!root2.query("SHOULD_UPDATE_FILE_INPUT"))return;var fileItem=root2.query("GET_ITEM",action.id);setInputFiles(field,[fileItem.file]);};var didPrepareOutput=function didPrepareOutput(_ref96){var root2=_ref96.root,action=_ref96.action;if(!root2.query("SHOULD_UPDATE_FILE_INPUT"))return;setTimeout(function(){var field=getField(root2,action.id);if(!field)return;setInputFiles(field,[action.file]);},0);};var didSetDisabled=function didSetDisabled(_ref97){var root2=_ref97.root;root2.element.disabled=root2.query("GET_DISABLED");};var didRemoveItem=function didRemoveItem(_ref98){var root2=_ref98.root,action=_ref98.action;var field=getField(root2,action.id);if(!field)return;if(field.parentNode)field.parentNode.removeChild(field);delete root2.ref.fields[action.id];};var didDefineValue=function didDefineValue(_ref99){var root2=_ref99.root,action=_ref99.action;var field=getField(root2,action.id);if(!field)return;if(action.value===null){field.removeAttribute("value");}else{field.value=action.value;}syncFieldPositionsWithItems(root2);};var write$8=createRoute({DID_SET_DISABLED:didSetDisabled,DID_ADD_ITEM:didAddItem,DID_LOAD_ITEM:didLoadItem$1,DID_REMOVE_ITEM:didRemoveItem,DID_DEFINE_VALUE:didDefineValue,DID_PREPARE_OUTPUT:didPrepareOutput,DID_REORDER_ITEMS:didReorderItems,DID_SORT_ITEMS:didReorderItems});var data2=createView({tag:"fieldset",name:"data",create:create$c,write:write$8,ignoreRect:true});var getRootNode=function getRootNode(element){return"getRootNode"in element?element.getRootNode():document;};var images=["jpg","jpeg","png","gif","bmp","webp","svg","tiff"];var text$1=["css","csv","html","txt"];var map={zip:"zip|compressed",epub:"application/epub+zip"};var guesstimateMimeType=function guesstimateMimeType(){var extension=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";extension=extension.toLowerCase();if(images.includes(extension)){return"image/"+(extension==="jpg"?"jpeg":extension==="svg"?"svg+xml":extension);}if(text$1.includes(extension)){return"text/"+extension;}return map[extension]||"";};var requestDataTransferItems=function requestDataTransferItems(dataTransfer){return new Promise(function(resolve,reject){var links=getLinks(dataTransfer);if(links.length&&!hasFiles(dataTransfer)){return resolve(links);}getFiles(dataTransfer).then(resolve);});};var hasFiles=function hasFiles(dataTransfer){if(dataTransfer.files)return dataTransfer.files.length>0;return false;};var getFiles=function getFiles(dataTransfer){return new Promise(function(resolve,reject){var promisedFiles=(dataTransfer.items?Array.from(dataTransfer.items):[]).filter(function(item2){return isFileSystemItem(item2);}).map(function(item2){return getFilesFromItem(item2);});if(!promisedFiles.length){resolve(dataTransfer.files?Array.from(dataTransfer.files):[]);return;}Promise.all(promisedFiles).then(function(returnedFileGroups){var files=[];returnedFileGroups.forEach(function(group){files.push.apply(files,group);});resolve(files.filter(function(file2){return file2;}).map(function(file2){if(!file2._relativePath)file2._relativePath=file2.webkitRelativePath;return file2;}));})["catch"](console.error);});};var isFileSystemItem=function isFileSystemItem(item2){if(isEntry(item2)){var entry=getAsEntry(item2);if(entry){return entry.isFile||entry.isDirectory;}}return item2.kind==="file";};var getFilesFromItem=function getFilesFromItem(item2){return new Promise(function(resolve,reject){if(isDirectoryEntry(item2)){getFilesInDirectory(getAsEntry(item2)).then(resolve)["catch"](reject);return;}resolve([item2.getAsFile()]);});};var getFilesInDirectory=function getFilesInDirectory(entry){return new Promise(function(resolve,reject){var files=[];var dirCounter=0;var fileCounter=0;var resolveIfDone=function resolveIfDone(){if(fileCounter===0&&dirCounter===0){resolve(files);}};var readEntries=function readEntries(dirEntry){dirCounter++;var directoryReader=dirEntry.createReader();var readBatch=function readBatch(){directoryReader.readEntries(function(entries){if(entries.length===0){dirCounter--;resolveIfDone();return;}entries.forEach(function(entry2){if(entry2.isDirectory){readEntries(entry2);}else{fileCounter++;entry2.file(function(file2){var correctedFile=correctMissingFileType(file2);if(entry2.fullPath)correctedFile._relativePath=entry2.fullPath;files.push(correctedFile);fileCounter--;resolveIfDone();});}});readBatch();},reject);};readBatch();};readEntries(entry);});};var correctMissingFileType=function correctMissingFileType(file2){if(file2.type.length)return file2;var date=file2.lastModifiedDate;var name2=file2.name;var type=guesstimateMimeType(getExtensionFromFilename(file2.name));if(!type.length)return file2;file2=file2.slice(0,file2.size,type);file2.name=name2;file2.lastModifiedDate=date;return file2;};var isDirectoryEntry=function isDirectoryEntry(item2){return isEntry(item2)&&(getAsEntry(item2)||{}).isDirectory;};var isEntry=function isEntry(item2){return"webkitGetAsEntry"in item2;};var getAsEntry=function getAsEntry(item2){return item2.webkitGetAsEntry();};var getLinks=function getLinks(dataTransfer){var links=[];try{links=getLinksFromTransferMetaData(dataTransfer);if(links.length){return links;}links=getLinksFromTransferURLData(dataTransfer);}catch(e2){}return links;};var getLinksFromTransferURLData=function getLinksFromTransferURLData(dataTransfer){var data3=dataTransfer.getData("url");if(typeof data3==="string"&&data3.length){return[data3];}return[];};var getLinksFromTransferMetaData=function getLinksFromTransferMetaData(dataTransfer){var data3=dataTransfer.getData("text/html");if(typeof data3==="string"&&data3.length){var matches=data3.match(/src\s*=\s*"(.+?)"/);if(matches){return[matches[1]];}}return[];};var dragNDropObservers=[];var eventPosition=function eventPosition(e2){return{pageLeft:e2.pageX,pageTop:e2.pageY,scopeLeft:e2.offsetX||e2.layerX,scopeTop:e2.offsetY||e2.layerY};};var createDragNDropClient=function createDragNDropClient(element,scopeToObserve,filterElement){var observer=getDragNDropObserver(scopeToObserve);var client={element:element,filterElement:filterElement,state:null,ondrop:function ondrop(){},onenter:function onenter(){},ondrag:function ondrag(){},onexit:function onexit(){},onload:function onload(){},allowdrop:function allowdrop(){}};client.destroy=observer.addListener(client);return client;};var getDragNDropObserver=function getDragNDropObserver(element){var observer=dragNDropObservers.find(function(item2){return item2.element===element;});if(observer){return observer;}var newObserver=createDragNDropObserver(element);dragNDropObservers.push(newObserver);return newObserver;};var createDragNDropObserver=function createDragNDropObserver(element){var clients=[];var routes={dragenter:dragenter,dragover:dragover,dragleave:dragleave,drop:drop};var handlers={};forin(routes,function(event,createHandler){handlers[event]=createHandler(element,clients);element.addEventListener(event,handlers[event],false);});var observer={element:element,addListener:function addListener(client){clients.push(client);return function(){clients.splice(clients.indexOf(client),1);if(clients.length===0){dragNDropObservers.splice(dragNDropObservers.indexOf(observer),1);forin(routes,function(event){element.removeEventListener(event,handlers[event],false);});}};}};return observer;};var elementFromPoint=function elementFromPoint(root2,point){if(!("elementFromPoint"in root2)){root2=document;}return root2.elementFromPoint(point.x,point.y);};var isEventTarget=function isEventTarget(e2,target){var root2=getRootNode(target);var elementAtPosition=elementFromPoint(root2,{x:e2.pageX-window.pageXOffset,y:e2.pageY-window.pageYOffset});return elementAtPosition===target||target.contains(elementAtPosition);};var initialTarget=null;var setDropEffect=function setDropEffect(dataTransfer,effect){try{dataTransfer.dropEffect=effect;}catch(e2){}};var dragenter=function dragenter(root2,clients){return function(e2){e2.preventDefault();initialTarget=e2.target;clients.forEach(function(client){var element=client.element,onenter=client.onenter;if(isEventTarget(e2,element)){client.state="enter";onenter(eventPosition(e2));}});};};var dragover=function dragover(root2,clients){return function(e2){e2.preventDefault();var dataTransfer=e2.dataTransfer;requestDataTransferItems(dataTransfer).then(function(items){var overDropTarget=false;clients.some(function(client){var filterElement=client.filterElement,element=client.element,onenter=client.onenter,onexit=client.onexit,ondrag=client.ondrag,allowdrop=client.allowdrop;setDropEffect(dataTransfer,"copy");var allowsTransfer=allowdrop(items);if(!allowsTransfer){setDropEffect(dataTransfer,"none");return;}if(isEventTarget(e2,element)){overDropTarget=true;if(client.state===null){client.state="enter";onenter(eventPosition(e2));return;}client.state="over";if(filterElement&&!allowsTransfer){setDropEffect(dataTransfer,"none");return;}ondrag(eventPosition(e2));}else{if(filterElement&&!overDropTarget){setDropEffect(dataTransfer,"none");}if(client.state){client.state=null;onexit(eventPosition(e2));}}});});};};var drop=function drop(root2,clients){return function(e2){e2.preventDefault();var dataTransfer=e2.dataTransfer;requestDataTransferItems(dataTransfer).then(function(items){clients.forEach(function(client){var filterElement=client.filterElement,element=client.element,ondrop=client.ondrop,onexit=client.onexit,allowdrop=client.allowdrop;client.state=null;if(filterElement&&!isEventTarget(e2,element))return;if(!allowdrop(items))return onexit(eventPosition(e2));ondrop(eventPosition(e2),items);});});};};var dragleave=function dragleave(root2,clients){return function(e2){if(initialTarget!==e2.target){return;}clients.forEach(function(client){var onexit=client.onexit;client.state=null;onexit(eventPosition(e2));});};};var createHopper=function createHopper(scope,validateItems,options2){scope.classList.add("filepond--hopper");var catchesDropsOnPage=options2.catchesDropsOnPage,requiresDropOnElement=options2.requiresDropOnElement,_options2$filterItems=options2.filterItems,filterItems=_options2$filterItems===void 0?function(items){return items;}:_options2$filterItems;var client=createDragNDropClient(scope,catchesDropsOnPage?document.documentElement:scope,requiresDropOnElement);var lastState="";var currentState="";client.allowdrop=function(items){return validateItems(filterItems(items));};client.ondrop=function(position,items){var filteredItems=filterItems(items);if(!validateItems(filteredItems)){api.ondragend(position);return;}currentState="drag-drop";api.onload(filteredItems,position);};client.ondrag=function(position){api.ondrag(position);};client.onenter=function(position){currentState="drag-over";api.ondragstart(position);};client.onexit=function(position){currentState="drag-exit";api.ondragend(position);};var api={updateHopperState:function updateHopperState(){if(lastState!==currentState){scope.dataset.hopperState=currentState;lastState=currentState;}},onload:function onload(){},ondragstart:function ondragstart(){},ondrag:function ondrag(){},ondragend:function ondragend(){},destroy:function destroy(){client.destroy();}};return api;};var listening=false;var listeners$1=[];var handlePaste=function handlePaste(e2){var activeEl=document.activeElement;if(activeEl&&/textarea|input/i.test(activeEl.nodeName)){var inScope=false;var element=activeEl;while(element!==document.body){if(element.classList.contains("filepond--root")){inScope=true;break;}element=element.parentNode;}if(!inScope)return;}requestDataTransferItems(e2.clipboardData).then(function(files){if(!files.length){return;}listeners$1.forEach(function(listener){return listener(files);});});};var listen=function listen(cb){if(listeners$1.includes(cb)){return;}listeners$1.push(cb);if(listening){return;}listening=true;document.addEventListener("paste",handlePaste);};var unlisten=function unlisten(listener){arrayRemove(listeners$1,listeners$1.indexOf(listener));if(listeners$1.length===0){document.removeEventListener("paste",handlePaste);listening=false;}};var createPaster=function createPaster(){var cb=function cb(files){api.onload(files);};var api={destroy:function destroy(){unlisten(cb);},onload:function onload(){}};listen(cb);return api;};var create$d=function create$d(_ref100){var root2=_ref100.root,props=_ref100.props;root2.element.id="filepond--assistant-".concat(props.id);attr(root2.element,"role","status");attr(root2.element,"aria-live","polite");attr(root2.element,"aria-relevant","additions");};var addFilesNotificationTimeout=null;var notificationClearTimeout=null;var filenames=[];var assist=function assist(root2,message){root2.element.textContent=message;};var clear$1=function clear$1(root2){root2.element.textContent="";};var listModified=function listModified(root2,filename,label){var total=root2.query("GET_TOTAL_ITEMS");assist(root2,"".concat(label," ").concat(filename,", ").concat(total," ").concat(total===1?root2.query("GET_LABEL_FILE_COUNT_SINGULAR"):root2.query("GET_LABEL_FILE_COUNT_PLURAL")));clearTimeout(notificationClearTimeout);notificationClearTimeout=setTimeout(function(){clear$1(root2);},1500);};var isUsingFilePond=function isUsingFilePond(root2){return root2.element.parentNode.contains(document.activeElement);};var itemAdded=function itemAdded(_ref101){var root2=_ref101.root,action=_ref101.action;if(!isUsingFilePond(root2)){return;}root2.element.textContent="";var item2=root2.query("GET_ITEM",action.id);filenames.push(item2.filename);clearTimeout(addFilesNotificationTimeout);addFilesNotificationTimeout=setTimeout(function(){listModified(root2,filenames.join(", "),root2.query("GET_LABEL_FILE_ADDED"));filenames.length=0;},750);};var itemRemoved=function itemRemoved(_ref102){var root2=_ref102.root,action=_ref102.action;if(!isUsingFilePond(root2)){return;}var item2=action.item;listModified(root2,item2.filename,root2.query("GET_LABEL_FILE_REMOVED"));};var itemProcessed=function itemProcessed(_ref103){var root2=_ref103.root,action=_ref103.action;var item2=root2.query("GET_ITEM",action.id);var filename=item2.filename;var label=root2.query("GET_LABEL_FILE_PROCESSING_COMPLETE");assist(root2,"".concat(filename," ").concat(label));};var itemProcessedUndo=function itemProcessedUndo(_ref104){var root2=_ref104.root,action=_ref104.action;var item2=root2.query("GET_ITEM",action.id);var filename=item2.filename;var label=root2.query("GET_LABEL_FILE_PROCESSING_ABORTED");assist(root2,"".concat(filename," ").concat(label));};var itemError=function itemError(_ref105){var root2=_ref105.root,action=_ref105.action;var item2=root2.query("GET_ITEM",action.id);var filename=item2.filename;assist(root2,"".concat(action.status.main," ").concat(filename," ").concat(action.status.sub));};var assistant=createView({create:create$d,ignoreRect:true,ignoreRectUpdate:true,write:createRoute({DID_LOAD_ITEM:itemAdded,DID_REMOVE_ITEM:itemRemoved,DID_COMPLETE_ITEM_PROCESSING:itemProcessed,DID_ABORT_ITEM_PROCESSING:itemProcessedUndo,DID_REVERT_ITEM_PROCESSING:itemProcessedUndo,DID_THROW_ITEM_REMOVE_ERROR:itemError,DID_THROW_ITEM_LOAD_ERROR:itemError,DID_THROW_ITEM_INVALID:itemError,DID_THROW_ITEM_PROCESSING_ERROR:itemError}),tag:"span",name:"assistant"});var toCamels=function toCamels(string){var separator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"-";return string.replace(new RegExp("".concat(separator,"."),"g"),function(sub){return sub.charAt(1).toUpperCase();});};var debounce=function debounce(func){var interval=arguments.length>1&&arguments[1]!==undefined?arguments[1]:16;var immidiateOnly=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var last=Date.now();var timeout=null;return function(){for(var _len11=arguments.length,args=new Array(_len11),_key11=0;_key11<_len11;_key11++){args[_key11]=arguments[_key11];}clearTimeout(timeout);var dist=Date.now()-last;var fn2=function fn2(){last=Date.now();func.apply(void 0,args);};if(dist<interval){if(!immidiateOnly){timeout=setTimeout(fn2,interval-dist);}}else{fn2();}};};var MAX_FILES_LIMIT=1e6;var prevent=function prevent(e2){return e2.preventDefault();};var create$e=function create$e(_ref106){var root2=_ref106.root,props=_ref106.props;var id=root2.query("GET_ID");if(id){root2.element.id=id;}var className=root2.query("GET_CLASS_NAME");if(className){className.split(" ").filter(function(name2){return name2.length;}).forEach(function(name2){root2.element.classList.add(name2);});}root2.ref.label=root2.appendChildView(root2.createChildView(dropLabel,_objectSpread(_objectSpread({},props),{},{translateY:null,caption:root2.query("GET_LABEL_IDLE")})));root2.ref.list=root2.appendChildView(root2.createChildView(listScroller,{translateY:null}));root2.ref.panel=root2.appendChildView(root2.createChildView(panel,{name:"panel-root"}));root2.ref.assistant=root2.appendChildView(root2.createChildView(assistant,_objectSpread({},props)));root2.ref.data=root2.appendChildView(root2.createChildView(data2,_objectSpread({},props)));root2.ref.measure=createElement$1("div");root2.ref.measure.style.height="100%";root2.element.appendChild(root2.ref.measure);root2.ref.bounds=null;root2.query("GET_STYLES").filter(function(style){return!isEmpty(style.value);}).map(function(_ref107){var name2=_ref107.name,value=_ref107.value;root2.element.dataset[name2]=value;});root2.ref.widthPrevious=null;root2.ref.widthUpdated=debounce(function(){root2.ref.updateHistory=[];root2.dispatch("DID_RESIZE_ROOT");},250);root2.ref.previousAspectRatio=null;root2.ref.updateHistory=[];var canHover=window.matchMedia("(pointer: fine) and (hover: hover)").matches;var hasPointerEvents=("PointerEvent"in window);if(root2.query("GET_ALLOW_REORDER")&&hasPointerEvents&&!canHover){root2.element.addEventListener("touchmove",prevent,{passive:false});root2.element.addEventListener("gesturestart",prevent);}var credits=root2.query("GET_CREDITS");var hasCredits=credits.length===2;if(hasCredits){var frag=document.createElement("a");frag.className="filepond--credits";frag.setAttribute("aria-hidden","true");frag.href=credits[0];frag.tabindex=-1;frag.target="_blank";frag.rel="noopener noreferrer";frag.textContent=credits[1];root2.element.appendChild(frag);root2.ref.credits=frag;}};var write$9=function write$9(_ref108){var root2=_ref108.root,props=_ref108.props,actions2=_ref108.actions;route$5({root:root2,props:props,actions:actions2});actions2.filter(function(action){return /^DID_SET_STYLE_/.test(action.type);}).filter(function(action){return!isEmpty(action.data.value);}).map(function(_ref109){var type=_ref109.type,data3=_ref109.data;var name2=toCamels(type.substr(8).toLowerCase(),"_");root2.element.dataset[name2]=data3.value;root2.invalidateLayout();});if(root2.rect.element.hidden)return;if(root2.rect.element.width!==root2.ref.widthPrevious){root2.ref.widthPrevious=root2.rect.element.width;root2.ref.widthUpdated();}var bounds=root2.ref.bounds;if(!bounds){bounds=root2.ref.bounds=calculateRootBoundingBoxHeight(root2);root2.element.removeChild(root2.ref.measure);root2.ref.measure=null;}var _root2$ref=root2.ref,hopper=_root2$ref.hopper,label=_root2$ref.label,list2=_root2$ref.list,panel2=_root2$ref.panel;if(hopper){hopper.updateHopperState();}var aspectRatio=root2.query("GET_PANEL_ASPECT_RATIO");var isMultiItem=root2.query("GET_ALLOW_MULTIPLE");var totalItems=root2.query("GET_TOTAL_ITEMS");var maxItems=isMultiItem?root2.query("GET_MAX_FILES")||MAX_FILES_LIMIT:1;var atMaxCapacity=totalItems===maxItems;var addAction=actions2.find(function(action){return action.type==="DID_ADD_ITEM";});if(atMaxCapacity&&addAction){var interactionMethod=addAction.data.interactionMethod;label.opacity=0;if(isMultiItem){label.translateY=-40;}else{if(interactionMethod===InteractionMethod.API){label.translateX=40;}else if(interactionMethod===InteractionMethod.BROWSE){label.translateY=40;}else{label.translateY=30;}}}else if(!atMaxCapacity){label.opacity=1;label.translateX=0;label.translateY=0;}var listItemMargin=calculateListItemMargin(root2);var listHeight=calculateListHeight(root2);var labelHeight=label.rect.element.height;var currentLabelHeight=!isMultiItem||atMaxCapacity?0:labelHeight;var listMarginTop=atMaxCapacity?list2.rect.element.marginTop:0;var listMarginBottom=totalItems===0?0:list2.rect.element.marginBottom;var visualHeight=currentLabelHeight+listMarginTop+listHeight.visual+listMarginBottom;var boundsHeight=currentLabelHeight+listMarginTop+listHeight.bounds+listMarginBottom;list2.translateY=Math.max(0,currentLabelHeight-list2.rect.element.marginTop)-listItemMargin.top;if(aspectRatio){var width=root2.rect.element.width;var height=width*aspectRatio;if(aspectRatio!==root2.ref.previousAspectRatio){root2.ref.previousAspectRatio=aspectRatio;root2.ref.updateHistory=[];}var history=root2.ref.updateHistory;history.push(width);var MAX_BOUNCES=2;if(history.length>MAX_BOUNCES*2){var l=history.length;var bottom=l-10;var bounces=0;for(var i=l;i>=bottom;i--){if(history[i]===history[i-2]){bounces++;}if(bounces>=MAX_BOUNCES){return;}}}panel2.scalable=false;panel2.height=height;var listAvailableHeight=height-currentLabelHeight-(listMarginBottom-listItemMargin.bottom)-(atMaxCapacity?listMarginTop:0);if(listHeight.visual>listAvailableHeight){list2.overflow=listAvailableHeight;}else{list2.overflow=null;}root2.height=height;}else if(bounds.fixedHeight){panel2.scalable=false;var _listAvailableHeight=bounds.fixedHeight-currentLabelHeight-(listMarginBottom-listItemMargin.bottom)-(atMaxCapacity?listMarginTop:0);if(listHeight.visual>_listAvailableHeight){list2.overflow=_listAvailableHeight;}else{list2.overflow=null;}}else if(bounds.cappedHeight){var isCappedHeight=visualHeight>=bounds.cappedHeight;var panelHeight=Math.min(bounds.cappedHeight,visualHeight);panel2.scalable=true;panel2.height=isCappedHeight?panelHeight:panelHeight-listItemMargin.top-listItemMargin.bottom;var _listAvailableHeight2=panelHeight-currentLabelHeight-(listMarginBottom-listItemMargin.bottom)-(atMaxCapacity?listMarginTop:0);if(visualHeight>bounds.cappedHeight&&listHeight.visual>_listAvailableHeight2){list2.overflow=_listAvailableHeight2;}else{list2.overflow=null;}root2.height=Math.min(bounds.cappedHeight,boundsHeight-listItemMargin.top-listItemMargin.bottom);}else{var itemMargin=totalItems>0?listItemMargin.top+listItemMargin.bottom:0;panel2.scalable=true;panel2.height=Math.max(labelHeight,visualHeight-itemMargin);root2.height=Math.max(labelHeight,boundsHeight-itemMargin);}if(root2.ref.credits&&panel2.heightCurrent)root2.ref.credits.style.transform="translateY(".concat(panel2.heightCurrent,"px)");};var calculateListItemMargin=function calculateListItemMargin(root2){var item2=root2.ref.list.childViews[0].childViews[0];return item2?{top:item2.rect.element.marginTop,bottom:item2.rect.element.marginBottom}:{top:0,bottom:0};};var calculateListHeight=function calculateListHeight(root2){var visual=0;var bounds=0;var scrollList=root2.ref.list;var itemList=scrollList.childViews[0];var visibleChildren=itemList.childViews.filter(function(child){return child.rect.element.height;});var children=root2.query("GET_ACTIVE_ITEMS").map(function(item2){return visibleChildren.find(function(child){return child.id===item2.id;});}).filter(function(item2){return item2;});if(children.length===0)return{visual:visual,bounds:bounds};var horizontalSpace=itemList.rect.element.width;var dragIndex=getItemIndexByPosition(itemList,children,scrollList.dragCoordinates);var childRect=children[0].rect.element;var itemVerticalMargin=childRect.marginTop+childRect.marginBottom;var itemHorizontalMargin=childRect.marginLeft+childRect.marginRight;var itemWidth=childRect.width+itemHorizontalMargin;var itemHeight=childRect.height+itemVerticalMargin;var newItem=typeof dragIndex!=="undefined"&&dragIndex>=0?1:0;var removedItem=children.find(function(child){return child.markedForRemoval&&child.opacity<0.45;})?-1:0;var verticalItemCount=children.length+newItem+removedItem;var itemsPerRow=getItemsPerRow(horizontalSpace,itemWidth);if(itemsPerRow===1){children.forEach(function(item2){var height=item2.rect.element.height+itemVerticalMargin;bounds+=height;visual+=height*item2.opacity;});}else{bounds=Math.ceil(verticalItemCount/itemsPerRow)*itemHeight;visual=bounds;}return{visual:visual,bounds:bounds};};var calculateRootBoundingBoxHeight=function calculateRootBoundingBoxHeight(root2){var height=root2.ref.measureHeight||null;var cappedHeight=parseInt(root2.style.maxHeight,10)||null;var fixedHeight=height===0?null:height;return{cappedHeight:cappedHeight,fixedHeight:fixedHeight};};var exceedsMaxFiles=function exceedsMaxFiles(root2,items){var allowReplace=root2.query("GET_ALLOW_REPLACE");var allowMultiple=root2.query("GET_ALLOW_MULTIPLE");var totalItems=root2.query("GET_TOTAL_ITEMS");var maxItems=root2.query("GET_MAX_FILES");var totalBrowseItems=items.length;if(!allowMultiple&&totalBrowseItems>1){return true;}maxItems=allowMultiple?maxItems:allowReplace?maxItems:1;var hasMaxItems=isInt(maxItems);if(hasMaxItems&&totalItems+totalBrowseItems>maxItems){root2.dispatch("DID_THROW_MAX_FILES",{source:items,error:createResponse("warning",0,"Max files")});return true;}return false;};var getDragIndex=function getDragIndex(list2,children,position){var itemList=list2.childViews[0];return getItemIndexByPosition(itemList,children,{left:position.scopeLeft-itemList.rect.element.left,top:position.scopeTop-(list2.rect.outer.top+list2.rect.element.marginTop+list2.rect.element.scrollTop)});};var toggleDrop=function toggleDrop(root2){var isAllowed=root2.query("GET_ALLOW_DROP");var isDisabled=root2.query("GET_DISABLED");var enabled=isAllowed&&!isDisabled;if(enabled&&!root2.ref.hopper){var hopper=createHopper(root2.element,function(items){var beforeDropFile=root2.query("GET_BEFORE_DROP_FILE")||function(){return true;};var dropValidation=root2.query("GET_DROP_VALIDATION");return dropValidation?items.every(function(item2){return applyFilters("ALLOW_HOPPER_ITEM",item2,{query:root2.query}).every(function(result){return result===true;})&&beforeDropFile(item2);}):true;},{filterItems:function filterItems(items){var ignoredFiles=root2.query("GET_IGNORED_FILES");return items.filter(function(item2){if(isFile(item2)){return!ignoredFiles.includes(item2.name.toLowerCase());}return true;});},catchesDropsOnPage:root2.query("GET_DROP_ON_PAGE"),requiresDropOnElement:root2.query("GET_DROP_ON_ELEMENT")});hopper.onload=function(items,position){var list2=root2.ref.list.childViews[0];var visibleChildren=list2.childViews.filter(function(child){return child.rect.element.height;});var children=root2.query("GET_ACTIVE_ITEMS").map(function(item2){return visibleChildren.find(function(child){return child.id===item2.id;});}).filter(function(item2){return item2;});applyFilterChain("ADD_ITEMS",items,{dispatch:root2.dispatch}).then(function(queue){if(exceedsMaxFiles(root2,queue))return false;root2.dispatch("ADD_ITEMS",{items:queue,index:getDragIndex(root2.ref.list,children,position),interactionMethod:InteractionMethod.DROP});});root2.dispatch("DID_DROP",{position:position});root2.dispatch("DID_END_DRAG",{position:position});};hopper.ondragstart=function(position){root2.dispatch("DID_START_DRAG",{position:position});};hopper.ondrag=debounce(function(position){root2.dispatch("DID_DRAG",{position:position});});hopper.ondragend=function(position){root2.dispatch("DID_END_DRAG",{position:position});};root2.ref.hopper=hopper;root2.ref.drip=root2.appendChildView(root2.createChildView(drip));}else if(!enabled&&root2.ref.hopper){root2.ref.hopper.destroy();root2.ref.hopper=null;root2.removeChildView(root2.ref.drip);}};var toggleBrowse=function toggleBrowse(root2,props){var isAllowed=root2.query("GET_ALLOW_BROWSE");var isDisabled=root2.query("GET_DISABLED");var enabled=isAllowed&&!isDisabled;if(enabled&&!root2.ref.browser){root2.ref.browser=root2.appendChildView(root2.createChildView(browser,_objectSpread(_objectSpread({},props),{},{onload:function onload(items){applyFilterChain("ADD_ITEMS",items,{dispatch:root2.dispatch}).then(function(queue){if(exceedsMaxFiles(root2,queue))return false;root2.dispatch("ADD_ITEMS",{items:queue,index:-1,interactionMethod:InteractionMethod.BROWSE});});}})),0);}else if(!enabled&&root2.ref.browser){root2.removeChildView(root2.ref.browser);root2.ref.browser=null;}};var togglePaste=function togglePaste(root2){var isAllowed=root2.query("GET_ALLOW_PASTE");var isDisabled=root2.query("GET_DISABLED");var enabled=isAllowed&&!isDisabled;if(enabled&&!root2.ref.paster){root2.ref.paster=createPaster();root2.ref.paster.onload=function(items){applyFilterChain("ADD_ITEMS",items,{dispatch:root2.dispatch}).then(function(queue){if(exceedsMaxFiles(root2,queue))return false;root2.dispatch("ADD_ITEMS",{items:queue,index:-1,interactionMethod:InteractionMethod.PASTE});});};}else if(!enabled&&root2.ref.paster){root2.ref.paster.destroy();root2.ref.paster=null;}};var route$5=createRoute({DID_SET_ALLOW_BROWSE:function DID_SET_ALLOW_BROWSE(_ref110){var root2=_ref110.root,props=_ref110.props;toggleBrowse(root2,props);},DID_SET_ALLOW_DROP:function DID_SET_ALLOW_DROP(_ref111){var root2=_ref111.root;toggleDrop(root2);},DID_SET_ALLOW_PASTE:function DID_SET_ALLOW_PASTE(_ref112){var root2=_ref112.root;togglePaste(root2);},DID_SET_DISABLED:function DID_SET_DISABLED(_ref113){var root2=_ref113.root,props=_ref113.props;toggleDrop(root2);togglePaste(root2);toggleBrowse(root2,props);var isDisabled=root2.query("GET_DISABLED");if(isDisabled){root2.element.dataset.disabled="disabled";}else{root2.element.removeAttribute("data-disabled");}}});var root=createView({name:"root",read:function read(_ref114){var root2=_ref114.root;if(root2.ref.measure){root2.ref.measureHeight=root2.ref.measure.offsetHeight;}},create:create$e,write:write$9,destroy:function destroy(_ref115){var root2=_ref115.root;if(root2.ref.paster){root2.ref.paster.destroy();}if(root2.ref.hopper){root2.ref.hopper.destroy();}root2.element.removeEventListener("touchmove",prevent);root2.element.removeEventListener("gesturestart",prevent);},mixins:{styles:["height"]}});var createApp=function createApp(){var initialOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var originalElement=null;var defaultOptions2=getOptions();var store=createStore(createInitialState(defaultOptions2),[queries,createOptionQueries(defaultOptions2)],[actions,createOptionActions(defaultOptions2)]);store.dispatch("SET_OPTIONS",{options:initialOptions});var visibilityHandler=function visibilityHandler(){if(document.hidden)return;store.dispatch("KICK");};document.addEventListener("visibilitychange",visibilityHandler);var resizeDoneTimer=null;var isResizing=false;var isResizingHorizontally=false;var initialWindowWidth=null;var currentWindowWidth=null;var resizeHandler=function resizeHandler(){if(!isResizing){isResizing=true;}clearTimeout(resizeDoneTimer);resizeDoneTimer=setTimeout(function(){isResizing=false;initialWindowWidth=null;currentWindowWidth=null;if(isResizingHorizontally){isResizingHorizontally=false;store.dispatch("DID_STOP_RESIZE");}},500);};window.addEventListener("resize",resizeHandler);var view=root(store,{id:getUniqueId()});var isResting=false;var isHidden=false;var readWriteApi={_read:function _read(){if(isResizing){currentWindowWidth=window.innerWidth;if(!initialWindowWidth){initialWindowWidth=currentWindowWidth;}if(!isResizingHorizontally&&currentWindowWidth!==initialWindowWidth){store.dispatch("DID_START_RESIZE");isResizingHorizontally=true;}}if(isHidden&&isResting){isResting=view.element.offsetParent===null;}if(isResting)return;view._read();isHidden=view.rect.element.hidden;},_write:function _write(ts){var actions2=store.processActionQueue().filter(function(action){return!/^SET_/.test(action.type);});if(isResting&&!actions2.length)return;routeActionsToEvents(actions2);isResting=view._write(ts,actions2,isResizingHorizontally);removeReleasedItems(store.query("GET_ITEMS"));if(isResting){store.processDispatchQueue();}}};var createEvent=function createEvent(name2){return function(data3){var event={type:name2};if(!data3){return event;}if(data3.hasOwnProperty("error")){event.error=data3.error?_objectSpread({},data3.error):null;}if(data3.status){event.status=_objectSpread({},data3.status);}if(data3.file){event.output=data3.file;}if(data3.source){event.file=data3.source;}else if(data3.item||data3.id){var item2=data3.item?data3.item:store.query("GET_ITEM",data3.id);event.file=item2?createItemAPI(item2):null;}if(data3.items){event.items=data3.items.map(createItemAPI);}if(/progress/.test(name2)){event.progress=data3.progress;}if(data3.hasOwnProperty("origin")&&data3.hasOwnProperty("target")){event.origin=data3.origin;event.target=data3.target;}return event;};};var eventRoutes={DID_DESTROY:createEvent("destroy"),DID_INIT:createEvent("init"),DID_THROW_MAX_FILES:createEvent("warning"),DID_INIT_ITEM:createEvent("initfile"),DID_START_ITEM_LOAD:createEvent("addfilestart"),DID_UPDATE_ITEM_LOAD_PROGRESS:createEvent("addfileprogress"),DID_LOAD_ITEM:createEvent("addfile"),DID_THROW_ITEM_INVALID:[createEvent("error"),createEvent("addfile")],DID_THROW_ITEM_LOAD_ERROR:[createEvent("error"),createEvent("addfile")],DID_THROW_ITEM_REMOVE_ERROR:[createEvent("error"),createEvent("removefile")],DID_PREPARE_OUTPUT:createEvent("preparefile"),DID_START_ITEM_PROCESSING:createEvent("processfilestart"),DID_UPDATE_ITEM_PROCESS_PROGRESS:createEvent("processfileprogress"),DID_ABORT_ITEM_PROCESSING:createEvent("processfileabort"),DID_COMPLETE_ITEM_PROCESSING:createEvent("processfile"),DID_COMPLETE_ITEM_PROCESSING_ALL:createEvent("processfiles"),DID_REVERT_ITEM_PROCESSING:createEvent("processfilerevert"),DID_THROW_ITEM_PROCESSING_ERROR:[createEvent("error"),createEvent("processfile")],DID_REMOVE_ITEM:createEvent("removefile"),DID_UPDATE_ITEMS:createEvent("updatefiles"),DID_ACTIVATE_ITEM:createEvent("activatefile"),DID_REORDER_ITEMS:createEvent("reorderfiles")};var exposeEvent=function exposeEvent(event){var detail=_objectSpread({pond:exports},event);delete detail.type;view.element.dispatchEvent(new CustomEvent("FilePond:".concat(event.type),{detail:detail,bubbles:true,cancelable:true,composed:true}));var params=[];if(event.hasOwnProperty("error")){params.push(event.error);}if(event.hasOwnProperty("file")){params.push(event.file);}var filtered=["type","error","file"];Object.keys(event).filter(function(key){return!filtered.includes(key);}).forEach(function(key){return params.push(event[key]);});exports.fire.apply(exports,[event.type].concat(params));var handler=store.query("GET_ON".concat(event.type.toUpperCase()));if(handler){handler.apply(void 0,params);}};var routeActionsToEvents=function routeActionsToEvents(actions2){if(!actions2.length)return;actions2.filter(function(action){return eventRoutes[action.type];}).forEach(function(action){var routes=eventRoutes[action.type];(Array.isArray(routes)?routes:[routes]).forEach(function(route2){if(action.type==="DID_INIT_ITEM"){exposeEvent(route2(action.data));}else{setTimeout(function(){exposeEvent(route2(action.data));},0);}});});};var setOptions3=function setOptions3(options2){return store.dispatch("SET_OPTIONS",{options:options2});};var getFile2=function getFile2(query){return store.query("GET_ACTIVE_ITEM",query);};var prepareFile=function prepareFile(query){return new Promise(function(resolve,reject){store.dispatch("REQUEST_ITEM_PREPARE",{query:query,success:function success(item2){resolve(item2);},failure:function failure(error2){reject(error2);}});});};var addFile=function addFile(source){var options2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return new Promise(function(resolve,reject){addFiles([{source:source,options:options2}],{index:options2.index}).then(function(items){return resolve(items&&items[0]);})["catch"](reject);});};var isFilePondFile=function isFilePondFile(obj){return obj.file&&obj.id;};var removeFile=function removeFile(query,options2){if(_typeof2(query)==="object"&&!isFilePondFile(query)&&!options2){options2=query;query=void 0;}store.dispatch("REMOVE_ITEM",_objectSpread(_objectSpread({},options2),{},{query:query}));return store.query("GET_ACTIVE_ITEM",query)===null;};var addFiles=function addFiles(){for(var _len12=arguments.length,args=new Array(_len12),_key12=0;_key12<_len12;_key12++){args[_key12]=arguments[_key12];}return new Promise(function(resolve,reject){var sources=[];var options2={};if(isArray(args[0])){sources.push.apply(sources,args[0]);Object.assign(options2,args[1]||{});}else{var lastArgument=args[args.length-1];if(_typeof2(lastArgument)==="object"&&!(lastArgument instanceof Blob)){Object.assign(options2,args.pop());}sources.push.apply(sources,args);}store.dispatch("ADD_ITEMS",{items:sources,index:options2.index,interactionMethod:InteractionMethod.API,success:resolve,failure:reject});});};var getFiles2=function getFiles2(){return store.query("GET_ACTIVE_ITEMS");};var processFile=function processFile(query){return new Promise(function(resolve,reject){store.dispatch("REQUEST_ITEM_PROCESSING",{query:query,success:function success(item2){resolve(item2);},failure:function failure(error2){reject(error2);}});});};var prepareFiles=function prepareFiles(){for(var _len13=arguments.length,args=new Array(_len13),_key13=0;_key13<_len13;_key13++){args[_key13]=arguments[_key13];}var queries2=Array.isArray(args[0])?args[0]:args;var items=queries2.length?queries2:getFiles2();return Promise.all(items.map(prepareFile));};var processFiles=function processFiles(){for(var _len14=arguments.length,args=new Array(_len14),_key14=0;_key14<_len14;_key14++){args[_key14]=arguments[_key14];}var queries2=Array.isArray(args[0])?args[0]:args;if(!queries2.length){var files=getFiles2().filter(function(item2){return!(item2.status===ItemStatus.IDLE&&item2.origin===FileOrigin.LOCAL)&&item2.status!==ItemStatus.PROCESSING&&item2.status!==ItemStatus.PROCESSING_COMPLETE&&item2.status!==ItemStatus.PROCESSING_REVERT_ERROR;});return Promise.all(files.map(processFile));}return Promise.all(queries2.map(processFile));};var removeFiles=function removeFiles(){for(var _len15=arguments.length,args=new Array(_len15),_key15=0;_key15<_len15;_key15++){args[_key15]=arguments[_key15];}var queries2=Array.isArray(args[0])?args[0]:args;var options2;if(_typeof2(queries2[queries2.length-1])==="object"){options2=queries2.pop();}else if(Array.isArray(args[0])){options2=args[1];}var files=getFiles2();if(!queries2.length)return Promise.all(files.map(function(file2){return removeFile(file2,options2);}));var mappedQueries=queries2.map(function(query){return isNumber(query)?files[query]?files[query].id:null:query;}).filter(function(query){return query;});return mappedQueries.map(function(q){return removeFile(q,options2);});};var exports=_objectSpread(_objectSpread(_objectSpread(_objectSpread({},on()),readWriteApi),createOptionAPI(store,defaultOptions2)),{},{setOptions:setOptions3,addFile:addFile,addFiles:addFiles,getFile:getFile2,processFile:processFile,prepareFile:prepareFile,removeFile:removeFile,moveFile:function moveFile(query,index){return store.dispatch("MOVE_ITEM",{query:query,index:index});},getFiles:getFiles2,processFiles:processFiles,removeFiles:removeFiles,prepareFiles:prepareFiles,sort:function sort(compare){return store.dispatch("SORT",{compare:compare});},browse:function browse(){var input=view.element.querySelector("input[type=file]");if(input){input.click();}},destroy:function destroy(){exports.fire("destroy",view.element);store.dispatch("ABORT_ALL");view._destroy();window.removeEventListener("resize",resizeHandler);document.removeEventListener("visibilitychange",visibilityHandler);store.dispatch("DID_DESTROY");},insertBefore:function insertBefore(element){return _insertBefore(view.element,element);},insertAfter:function insertAfter(element){return _insertAfter(view.element,element);},appendTo:function appendTo(element){return element.appendChild(view.element);},replaceElement:function replaceElement(element){_insertBefore(view.element,element);element.parentNode.removeChild(element);originalElement=element;},restoreElement:function restoreElement(){if(!originalElement){return;}_insertAfter(originalElement,view.element);view.element.parentNode.removeChild(view.element);originalElement=null;},isAttachedTo:function isAttachedTo(element){return view.element===element||originalElement===element;},element:{get:function get(){return view.element;}},status:{get:function get(){return store.query("GET_STATUS");}}});store.dispatch("DID_INIT");return createObject(exports);};var createAppObject=function createAppObject(){var customOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var defaultOptions2={};forin(getOptions(),function(key,value){defaultOptions2[key]=value[0];});var app=createApp(_objectSpread(_objectSpread({},defaultOptions2),customOptions));return app;};var lowerCaseFirstLetter=function lowerCaseFirstLetter(string){return string.charAt(0).toLowerCase()+string.slice(1);};var attributeNameToPropertyName=function attributeNameToPropertyName(attributeName){return toCamels(attributeName.replace(/^data-/,""));};var mapObject=function mapObject(object,propertyMap){forin(propertyMap,function(selector,mapping){forin(object,function(property,value){var selectorRegExp=new RegExp(selector);var matches=selectorRegExp.test(property);if(!matches){return;}delete object[property];if(mapping===false){return;}if(isString(mapping)){object[mapping]=value;return;}var group=mapping.group;if(isObject(mapping)&&!object[group]){object[group]={};}object[group][lowerCaseFirstLetter(property.replace(selectorRegExp,""))]=value;});if(mapping.mapping){mapObject(object[mapping.group],mapping.mapping);}});};var getAttributesAsObject=function getAttributesAsObject(node){var attributeMapping=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var attributes=[];forin(node.attributes,function(index){attributes.push(node.attributes[index]);});var output=attributes.filter(function(attribute){return attribute.name;}).reduce(function(obj,attribute){var value=attr(node,attribute.name);obj[attributeNameToPropertyName(attribute.name)]=value===attribute.name?true:value;return obj;},{});mapObject(output,attributeMapping);return output;};var createAppAtElement=function createAppAtElement(element){var options2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var attributeMapping={"^class$":"className","^multiple$":"allowMultiple","^capture$":"captureMethod","^webkitdirectory$":"allowDirectoriesOnly","^server":{group:"server",mapping:{"^process":{group:"process"},"^revert":{group:"revert"},"^fetch":{group:"fetch"},"^restore":{group:"restore"},"^load":{group:"load"}}},"^type$":false,"^files$":false};applyFilters("SET_ATTRIBUTE_TO_OPTION_MAP",attributeMapping);var mergedOptions=_objectSpread({},options2);var attributeOptions=getAttributesAsObject(element.nodeName==="FIELDSET"?element.querySelector("input[type=file]"):element,attributeMapping);Object.keys(attributeOptions).forEach(function(key){if(isObject(attributeOptions[key])){if(!isObject(mergedOptions[key])){mergedOptions[key]={};}Object.assign(mergedOptions[key],attributeOptions[key]);}else{mergedOptions[key]=attributeOptions[key];}});mergedOptions.files=(options2.files||[]).concat(Array.from(element.querySelectorAll("input:not([type=file])")).map(function(input){return{source:input.value,options:{type:input.dataset.type}};}));var app=createAppObject(mergedOptions);if(element.files){Array.from(element.files).forEach(function(file2){app.addFile(file2);});}app.replaceElement(element);return app;};var createApp$1=function createApp$1(){return isNode(arguments.length<=0?undefined:arguments[0])?createAppAtElement.apply(void 0,arguments):createAppObject.apply(void 0,arguments);};var PRIVATE_METHODS=["fire","_read","_write"];var createAppAPI=function createAppAPI(app){var api={};copyObjectPropertiesToObject(app,api,PRIVATE_METHODS);return api;};var replaceInString=function replaceInString(string,replacements){return string.replace(/(?:{([a-zA-Z]+)})/g,function(match,group){return replacements[group];});};var createWorker=function createWorker(fn2){var workerBlob=new Blob(["(",fn2.toString(),")()"],{type:"application/javascript"});var workerURL=URL.createObjectURL(workerBlob);var worker=new Worker(workerURL);return{transfer:function transfer(message,cb){},post:function post(message,cb,transferList){var id=getUniqueId();worker.onmessage=function(e2){if(e2.data.id===id){cb(e2.data.message);}};worker.postMessage({id:id,message:message},transferList);},terminate:function terminate(){worker.terminate();URL.revokeObjectURL(workerURL);}};};var loadImage=function loadImage(url){return new Promise(function(resolve,reject){var img=new Image();img.onload=function(){resolve(img);};img.onerror=function(e2){reject(e2);};img.src=url;});};var renameFile=function renameFile(file2,name2){var renamedFile=file2.slice(0,file2.size,file2.type);renamedFile.lastModifiedDate=file2.lastModifiedDate;renamedFile.name=name2;return renamedFile;};var copyFile=function copyFile(file2){return renameFile(file2,file2.name);};var registeredPlugins=[];var createAppPlugin=function createAppPlugin(plugin8){if(registeredPlugins.includes(plugin8)){return;}registeredPlugins.push(plugin8);var pluginOutline=plugin8({addFilter:addFilter,utils:{Type:Type,forin:forin,isString:isString,isFile:isFile,toNaturalFileSize:toNaturalFileSize,replaceInString:replaceInString,getExtensionFromFilename:getExtensionFromFilename,getFilenameWithoutExtension:getFilenameWithoutExtension,guesstimateMimeType:guesstimateMimeType,getFileFromBlob:getFileFromBlob,getFilenameFromURL:getFilenameFromURL,createRoute:createRoute,createWorker:createWorker,createView:createView,createItemAPI:createItemAPI,loadImage:loadImage,copyFile:copyFile,renameFile:renameFile,createBlob:createBlob,applyFilterChain:applyFilterChain,text:text,getNumericAspectRatioFromString:getNumericAspectRatioFromString},views:{fileActionButton:fileActionButton}});extendDefaultOptions(pluginOutline.options);};var isOperaMini=function isOperaMini(){return Object.prototype.toString.call(window.operamini)==="[object OperaMini]";};var hasPromises=function hasPromises(){return"Promise"in window;};var hasBlobSlice=function hasBlobSlice(){return"slice"in Blob.prototype;};var hasCreateObjectURL=function hasCreateObjectURL(){return"URL"in window&&"createObjectURL"in window.URL;};var hasVisibility=function hasVisibility(){return"visibilityState"in document;};var hasTiming=function hasTiming(){return"performance"in window;};var hasCSSSupports=function hasCSSSupports(){return"supports"in(window.CSS||{});};var isIE11=function isIE11(){return /MSIE|Trident/.test(window.navigator.userAgent);};var supported=function(){var isSupported=isBrowser()&&!isOperaMini()&&hasVisibility()&&hasPromises()&&hasBlobSlice()&&hasCreateObjectURL()&&hasTiming()&&(hasCSSSupports()||isIE11());return function(){return isSupported;};}();var state={apps:[]};var name="filepond";var fn=function fn(){};var Status$1={};var FileStatus={};var FileOrigin$1={};var OptionTypes={};var create$f=fn;var destroy=fn;var parse=fn;var find=fn;var registerPlugin=fn;var getOptions$1=fn;var setOptions$1=fn;if(supported()){createPainter(function(){state.apps.forEach(function(app){return app._read();});},function(ts){state.apps.forEach(function(app){return app._write(ts);});});var dispatch2=function dispatch2(){document.dispatchEvent(new CustomEvent("FilePond:loaded",{detail:{supported:supported,create:create$f,destroy:destroy,parse:parse,find:find,registerPlugin:registerPlugin,setOptions:setOptions$1}}));document.removeEventListener("DOMContentLoaded",dispatch2);};if(document.readyState!=="loading"){setTimeout(function(){return dispatch2();},0);}else{document.addEventListener("DOMContentLoaded",dispatch2);}var updateOptionTypes=function updateOptionTypes(){return forin(getOptions(),function(key,value){OptionTypes[key]=value[1];});};Status$1=_objectSpread({},Status);FileOrigin$1=_objectSpread({},FileOrigin);FileStatus=_objectSpread({},ItemStatus);OptionTypes={};updateOptionTypes();create$f=function create$f(){var app=createApp$1.apply(void 0,arguments);app.on("destroy",destroy);state.apps.push(app);return createAppAPI(app);};destroy=function destroy(hook){var indexToRemove=state.apps.findIndex(function(app){return app.isAttachedTo(hook);});if(indexToRemove>=0){var app=state.apps.splice(indexToRemove,1)[0];app.restoreElement();return true;}return false;};parse=function parse(context){var matchedHooks=Array.from(context.querySelectorAll(".".concat(name)));var newHooks=matchedHooks.filter(function(newHook){return!state.apps.find(function(app){return app.isAttachedTo(newHook);});});return newHooks.map(function(hook){return create$f(hook);});};find=function find(hook){var app=state.apps.find(function(app2){return app2.isAttachedTo(hook);});if(!app){return null;}return createAppAPI(app);};registerPlugin=function registerPlugin(){for(var _len16=arguments.length,plugins=new Array(_len16),_key16=0;_key16<_len16;_key16++){plugins[_key16]=arguments[_key16];}plugins.forEach(createAppPlugin);updateOptionTypes();};getOptions$1=function getOptions$1(){var opts={};forin(getOptions(),function(key,value){opts[key]=value[0];});return opts;};setOptions$1=function setOptions$1(opts){if(isObject(opts)){state.apps.forEach(function(app){app.setOptions(opts);});setOptions(opts);}return getOptions$1();};}// node_modules/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.esm.js
/*!
 * FilePondPluginFileValidateSize 2.2.5
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */var plugin=function plugin(_ref116){var addFilter2=_ref116.addFilter,utils=_ref116.utils;var Type2=utils.Type,replaceInString2=utils.replaceInString,toNaturalFileSize2=utils.toNaturalFileSize;addFilter2("ALLOW_HOPPER_ITEM",function(file2,_ref117){var query=_ref117.query;if(!query("GET_ALLOW_FILE_SIZE_VALIDATION")){return true;}var sizeMax=query("GET_MAX_FILE_SIZE");if(sizeMax!==null&&file2.size>=sizeMax){return false;}var sizeMin=query("GET_MIN_FILE_SIZE");if(sizeMin!==null&&file2.size<=sizeMin){return false;}return true;});addFilter2("LOAD_FILE",function(file2,_ref118){var query=_ref118.query;return new Promise(function(resolve,reject){if(!query("GET_ALLOW_FILE_SIZE_VALIDATION")){return resolve(file2);}var fileFilter=query("GET_FILE_VALIDATE_SIZE_FILTER");if(fileFilter&&!fileFilter(file2)){return resolve(file2);}var sizeMax=query("GET_MAX_FILE_SIZE");if(sizeMax!==null&&file2.size>=sizeMax){reject({status:{main:query("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),sub:replaceInString2(query("GET_LABEL_MAX_FILE_SIZE"),{filesize:toNaturalFileSize2(sizeMax,".",query("GET_FILE_SIZE_BASE"),query("GET_FILE_SIZE_LABELS",query))})}});return;}var sizeMin=query("GET_MIN_FILE_SIZE");if(sizeMin!==null&&file2.size<=sizeMin){reject({status:{main:query("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),sub:replaceInString2(query("GET_LABEL_MIN_FILE_SIZE"),{filesize:toNaturalFileSize2(sizeMin,".",query("GET_FILE_SIZE_BASE"),query("GET_FILE_SIZE_LABELS",query))})}});return;}var totalSizeMax=query("GET_MAX_TOTAL_FILE_SIZE");if(totalSizeMax!==null){var currentTotalSize=query("GET_ACTIVE_ITEMS").reduce(function(total,item2){return total+item2.fileSize;},0);if(currentTotalSize>totalSizeMax){reject({status:{main:query("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),sub:replaceInString2(query("GET_LABEL_MAX_TOTAL_FILE_SIZE"),{filesize:toNaturalFileSize2(totalSizeMax,".",query("GET_FILE_SIZE_BASE"),query("GET_FILE_SIZE_LABELS",query))})}});return;}}resolve(file2);});});return{options:{allowFileSizeValidation:[true,Type2.BOOLEAN],maxFileSize:[null,Type2.INT],minFileSize:[null,Type2.INT],maxTotalFileSize:[null,Type2.INT],fileValidateSizeFilter:[null,Type2.FUNCTION],labelMinFileSizeExceeded:["File is too small",Type2.STRING],labelMinFileSize:["Minimum file size is {filesize}",Type2.STRING],labelMaxFileSizeExceeded:["File is too large",Type2.STRING],labelMaxFileSize:["Maximum file size is {filesize}",Type2.STRING],labelMaxTotalFileSizeExceeded:["Maximum total size exceeded",Type2.STRING],labelMaxTotalFileSize:["Maximum total file size is {filesize}",Type2.STRING]}};};var isBrowser2=typeof window!=="undefined"&&typeof window.document!=="undefined";if(isBrowser2){document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin}));}var filepond_plugin_file_validate_size_esm_default=plugin;// node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js
/*!
 * FilePondPluginFileValidateType 1.2.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */var plugin2=function plugin2(_ref119){var addFilter2=_ref119.addFilter,utils=_ref119.utils;var Type2=utils.Type,isString3=utils.isString,replaceInString2=utils.replaceInString,guesstimateMimeType2=utils.guesstimateMimeType,getExtensionFromFilename2=utils.getExtensionFromFilename,getFilenameFromURL2=utils.getFilenameFromURL;var mimeTypeMatchesWildCard=function mimeTypeMatchesWildCard(mimeType,wildcard){var mimeTypeGroup=(/^[^/]+/.exec(mimeType)||[]).pop();var wildcardGroup=wildcard.slice(0,-2);return mimeTypeGroup===wildcardGroup;};var isValidMimeType=function isValidMimeType(acceptedTypes,userInputType){return acceptedTypes.some(function(acceptedType){if(/\*$/.test(acceptedType)){return mimeTypeMatchesWildCard(userInputType,acceptedType);}return acceptedType===userInputType;});};var getItemType=function getItemType(item2){var type="";if(isString3(item2)){var filename=getFilenameFromURL2(item2);var extension=getExtensionFromFilename2(filename);if(extension){type=guesstimateMimeType2(extension);}}else{type=item2.type;}return type;};var validateFile=function validateFile(item2,acceptedFileTypes,typeDetector){if(acceptedFileTypes.length===0){return true;}var type=getItemType(item2);if(!typeDetector){return isValidMimeType(acceptedFileTypes,type);}return new Promise(function(resolve,reject){typeDetector(item2,type).then(function(detectedType){if(isValidMimeType(acceptedFileTypes,detectedType)){resolve();}else{reject();}})["catch"](reject);});};var applyMimeTypeMap=function applyMimeTypeMap(map2){return function(acceptedFileType){return map2[acceptedFileType]===null?false:map2[acceptedFileType]||acceptedFileType;};};addFilter2("SET_ATTRIBUTE_TO_OPTION_MAP",function(map2){return Object.assign(map2,{accept:"acceptedFileTypes"});});addFilter2("ALLOW_HOPPER_ITEM",function(file2,_ref120){var query=_ref120.query;if(!query("GET_ALLOW_FILE_TYPE_VALIDATION")){return true;}return validateFile(file2,query("GET_ACCEPTED_FILE_TYPES"));});addFilter2("LOAD_FILE",function(file2,_ref121){var query=_ref121.query;return new Promise(function(resolve,reject){if(!query("GET_ALLOW_FILE_TYPE_VALIDATION")){resolve(file2);return;}var acceptedFileTypes=query("GET_ACCEPTED_FILE_TYPES");var typeDetector=query("GET_FILE_VALIDATE_TYPE_DETECT_TYPE");var validationResult=validateFile(file2,acceptedFileTypes,typeDetector);var handleRejection=function handleRejection(){var acceptedFileTypesMapped=acceptedFileTypes.map(applyMimeTypeMap(query("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter(function(label){return label!==false;});reject({status:{main:query("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),sub:replaceInString2(query("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),{allTypes:acceptedFileTypesMapped.join(", "),allButLastType:acceptedFileTypesMapped.slice(0,-1).join(", "),lastType:acceptedFileTypesMapped[acceptedFileTypesMapped.length-1]})}});};if(typeof validationResult==="boolean"){if(!validationResult){return handleRejection();}return resolve(file2);}validationResult.then(function(){resolve(file2);})["catch"](handleRejection);});});return{options:{allowFileTypeValidation:[true,Type2.BOOLEAN],acceptedFileTypes:[[],Type2.ARRAY],labelFileTypeNotAllowed:["File is of invalid type",Type2.STRING],fileValidateTypeLabelExpectedTypes:["Expects {allButLastType} or {lastType}",Type2.STRING],fileValidateTypeLabelExpectedTypesMap:[{},Type2.OBJECT],fileValidateTypeDetectType:[null,Type2.FUNCTION]}};};var isBrowser3=typeof window!=="undefined"&&typeof window.document!=="undefined";if(isBrowser3){document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin2}));}var filepond_plugin_file_validate_type_esm_default=plugin2;// node_modules/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.esm.js
/*!
 * FilePondPluginImageCrop 2.0.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */var isImage=function isImage(file2){return /^image/.test(file2.type);};var plugin3=function plugin3(_ref122){var addFilter2=_ref122.addFilter,utils=_ref122.utils;var Type2=utils.Type,isFile2=utils.isFile,getNumericAspectRatioFromString2=utils.getNumericAspectRatioFromString;var allowCrop=function allowCrop(item2,query){return!(!isImage(item2.file)||!query("GET_ALLOW_IMAGE_CROP"));};var isObject2=function isObject2(value){return _typeof2(value)==="object";};var isNumber2=function isNumber2(value){return typeof value==="number";};var updateCrop=function updateCrop(item2,obj){return item2.setMetadata("crop",Object.assign({},item2.getMetadata("crop"),obj));};addFilter2("DID_CREATE_ITEM",function(item2,_ref123){var query=_ref123.query;item2.extend("setImageCrop",function(crop){if(!allowCrop(item2,query)||!isObject2(center))return;item2.setMetadata("crop",crop);return crop;});item2.extend("setImageCropCenter",function(center2){if(!allowCrop(item2,query)||!isObject2(center2))return;return updateCrop(item2,{center:center2});});item2.extend("setImageCropZoom",function(zoom){if(!allowCrop(item2,query)||!isNumber2(zoom))return;return updateCrop(item2,{zoom:Math.max(1,zoom)});});item2.extend("setImageCropRotation",function(rotation){if(!allowCrop(item2,query)||!isNumber2(rotation))return;return updateCrop(item2,{rotation:rotation});});item2.extend("setImageCropFlip",function(flip){if(!allowCrop(item2,query)||!isObject2(flip))return;return updateCrop(item2,{flip:flip});});item2.extend("setImageCropAspectRatio",function(newAspectRatio){if(!allowCrop(item2,query)||typeof newAspectRatio==="undefined")return;var currentCrop=item2.getMetadata("crop");var aspectRatio=getNumericAspectRatioFromString2(newAspectRatio);var newCrop={center:{x:0.5,y:0.5},flip:currentCrop?Object.assign({},currentCrop.flip):{horizontal:false,vertical:false},rotation:0,zoom:1,aspectRatio:aspectRatio};item2.setMetadata("crop",newCrop);return newCrop;});});addFilter2("DID_LOAD_ITEM",function(item2,_ref124){var query=_ref124.query;return new Promise(function(resolve,reject){var file2=item2.file;if(!isFile2(file2)||!isImage(file2)||!query("GET_ALLOW_IMAGE_CROP")){return resolve(item2);}var crop=item2.getMetadata("crop");if(crop){return resolve(item2);}var humanAspectRatio=query("GET_IMAGE_CROP_ASPECT_RATIO");item2.setMetadata("crop",{center:{x:0.5,y:0.5},flip:{horizontal:false,vertical:false},rotation:0,zoom:1,aspectRatio:humanAspectRatio?getNumericAspectRatioFromString2(humanAspectRatio):null});resolve(item2);});});return{options:{allowImageCrop:[true,Type2.BOOLEAN],imageCropAspectRatio:[null,Type2.STRING]}};};var isBrowser4=typeof window!=="undefined"&&typeof window.document!=="undefined";if(isBrowser4){document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin3}));}var filepond_plugin_image_crop_esm_default=plugin3;// node_modules/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.esm.js
/*!
 * FilePondPluginImageExifOrientation 1.0.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */var isJPEG=function isJPEG(file2){return /^image\/jpeg/.test(file2.type);};var Marker={JPEG:65496,APP1:65505,EXIF:1165519206,TIFF:18761,Orientation:274,Unknown:65280};var getUint16=function getUint16(view,offset){var little=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return view.getUint16(offset,little);};var getUint32=function getUint32(view,offset){var little=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return view.getUint32(offset,little);};var getImageOrientation=function getImageOrientation(file2){return new Promise(function(resolve,reject){var reader=new FileReader();reader.onload=function(e2){var view=new DataView(e2.target.result);if(getUint16(view,0)!==Marker.JPEG){resolve(-1);return;}var length=view.byteLength;var offset=2;while(offset<length){var marker=getUint16(view,offset);offset+=2;if(marker===Marker.APP1){if(getUint32(view,offset+=2)!==Marker.EXIF){break;}var little=getUint16(view,offset+=6)===Marker.TIFF;offset+=getUint32(view,offset+4,little);var tags=getUint16(view,offset,little);offset+=2;for(var i=0;i<tags;i++){if(getUint16(view,offset+i*12,little)===Marker.Orientation){resolve(getUint16(view,offset+i*12+8,little));return;}}}else if((marker&Marker.Unknown)!==Marker.Unknown){break;}else{offset+=getUint16(view,offset);}}resolve(-1);};reader.readAsArrayBuffer(file2.slice(0,64*1024));});};var IS_BROWSER2=function(){return typeof window!=="undefined"&&typeof window.document!=="undefined";}();var isBrowser5=function isBrowser5(){return IS_BROWSER2;};var testSrc="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=";var shouldCorrect=void 0;var testImage=isBrowser5()?new Image():{};testImage.onload=function(){return shouldCorrect=testImage.naturalWidth>testImage.naturalHeight;};testImage.src=testSrc;var shouldCorrectImageExifOrientation=function shouldCorrectImageExifOrientation(){return shouldCorrect;};var plugin4=function plugin4(_ref125){var addFilter2=_ref125.addFilter,utils=_ref125.utils;var Type2=utils.Type,isFile2=utils.isFile;addFilter2("DID_LOAD_ITEM",function(item2,_ref126){var query=_ref126.query;return new Promise(function(resolve,reject){var file2=item2.file;if(!isFile2(file2)||!isJPEG(file2)||!query("GET_ALLOW_IMAGE_EXIF_ORIENTATION")||!shouldCorrectImageExifOrientation()){return resolve(item2);}getImageOrientation(file2).then(function(orientation){item2.setMetadata("exif",{orientation:orientation});resolve(item2);});});});return{options:{allowImageExifOrientation:[true,Type2.BOOLEAN]}};};var isBrowser$1=typeof window!=="undefined"&&typeof window.document!=="undefined";if(isBrowser$1){document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin4}));}var filepond_plugin_image_exif_orientation_esm_default=plugin4;// node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js
/*!
 * FilePondPluginImagePreview 4.6.10
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */var isPreviewableImage=function isPreviewableImage(file2){return /^image/.test(file2.type);};var vectorMultiply=function vectorMultiply(v,amount){return createVector(v.x*amount,v.y*amount);};var vectorAdd=function vectorAdd(a2,b){return createVector(a2.x+b.x,a2.y+b.y);};var vectorNormalize=function vectorNormalize(v){var l=Math.sqrt(v.x*v.x+v.y*v.y);if(l===0){return{x:0,y:0};}return createVector(v.x/l,v.y/l);};var vectorRotate=function vectorRotate(v,radians,origin){var cos=Math.cos(radians);var sin=Math.sin(radians);var t2=createVector(v.x-origin.x,v.y-origin.y);return createVector(origin.x+cos*t2.x-sin*t2.y,origin.y+sin*t2.x+cos*t2.y);};var createVector=function createVector(){var x=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var y=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return{x:x,y:y};};var getMarkupValue=function getMarkupValue(value,size){var scalar=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var axis=arguments.length>3?arguments[3]:undefined;if(typeof value==="string"){return parseFloat(value)*scalar;}if(typeof value==="number"){return value*(axis?size[axis]:Math.min(size.width,size.height));}return;};var getMarkupStyles=function getMarkupStyles(markup,size,scale){var lineStyle=markup.borderStyle||markup.lineStyle||"solid";var fill=markup.backgroundColor||markup.fontColor||"transparent";var stroke=markup.borderColor||markup.lineColor||"transparent";var strokeWidth=getMarkupValue(markup.borderWidth||markup.lineWidth,size,scale);var lineCap=markup.lineCap||"round";var lineJoin=markup.lineJoin||"round";var dashes=typeof lineStyle==="string"?"":lineStyle.map(function(v){return getMarkupValue(v,size,scale);}).join(",");var opacity=markup.opacity||1;return{"stroke-linecap":lineCap,"stroke-linejoin":lineJoin,"stroke-width":strokeWidth||0,"stroke-dasharray":dashes,stroke:stroke,fill:fill,opacity:opacity};};var isDefined2=function isDefined2(value){return value!=null;};var getMarkupRect=function getMarkupRect(rect,size){var scalar=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var left=getMarkupValue(rect.x,size,scalar,"width")||getMarkupValue(rect.left,size,scalar,"width");var top=getMarkupValue(rect.y,size,scalar,"height")||getMarkupValue(rect.top,size,scalar,"height");var width=getMarkupValue(rect.width,size,scalar,"width");var height=getMarkupValue(rect.height,size,scalar,"height");var right=getMarkupValue(rect.right,size,scalar,"width");var bottom=getMarkupValue(rect.bottom,size,scalar,"height");if(!isDefined2(top)){if(isDefined2(height)&&isDefined2(bottom)){top=size.height-height-bottom;}else{top=bottom;}}if(!isDefined2(left)){if(isDefined2(width)&&isDefined2(right)){left=size.width-width-right;}else{left=right;}}if(!isDefined2(width)){if(isDefined2(left)&&isDefined2(right)){width=size.width-left-right;}else{width=0;}}if(!isDefined2(height)){if(isDefined2(top)&&isDefined2(bottom)){height=size.height-top-bottom;}else{height=0;}}return{x:left||0,y:top||0,width:width||0,height:height||0};};var pointsToPathShape=function pointsToPathShape(points){return points.map(function(point,index){return"".concat(index===0?"M":"L"," ").concat(point.x," ").concat(point.y);}).join(" ");};var setAttributes=function setAttributes(element,attr2){return Object.keys(attr2).forEach(function(key){return element.setAttribute(key,attr2[key]);});};var ns2="http://www.w3.org/2000/svg";var svg=function svg(tag,attr2){var element=document.createElementNS(ns2,tag);if(attr2){setAttributes(element,attr2);}return element;};var updateRect2=function updateRect2(element){return setAttributes(element,_objectSpread(_objectSpread({},element.rect),element.styles));};var updateEllipse=function updateEllipse(element){var cx=element.rect.x+element.rect.width*0.5;var cy=element.rect.y+element.rect.height*0.5;var rx=element.rect.width*0.5;var ry=element.rect.height*0.5;return setAttributes(element,_objectSpread({cx:cx,cy:cy,rx:rx,ry:ry},element.styles));};var IMAGE_FIT_STYLE={contain:"xMidYMid meet",cover:"xMidYMid slice"};var updateImage=function updateImage(element,markup){setAttributes(element,_objectSpread(_objectSpread(_objectSpread({},element.rect),element.styles),{},{preserveAspectRatio:IMAGE_FIT_STYLE[markup.fit]||"none"}));};var TEXT_ANCHOR={left:"start",center:"middle",right:"end"};var updateText=function updateText(element,markup,size,scale){var fontSize=getMarkupValue(markup.fontSize,size,scale);var fontFamily=markup.fontFamily||"sans-serif";var fontWeight=markup.fontWeight||"normal";var textAlign=TEXT_ANCHOR[markup.textAlign]||"start";setAttributes(element,_objectSpread(_objectSpread(_objectSpread({},element.rect),element.styles),{},{"stroke-width":0,"font-weight":fontWeight,"font-size":fontSize,"font-family":fontFamily,"text-anchor":textAlign}));if(element.text!==markup.text){element.text=markup.text;element.textContent=markup.text.length?markup.text:" ";}};var updateLine=function updateLine(element,markup,size,scale){setAttributes(element,_objectSpread(_objectSpread(_objectSpread({},element.rect),element.styles),{},{fill:"none"}));var line=element.childNodes[0];var begin=element.childNodes[1];var end=element.childNodes[2];var origin=element.rect;var target={x:element.rect.x+element.rect.width,y:element.rect.y+element.rect.height};setAttributes(line,{x1:origin.x,y1:origin.y,x2:target.x,y2:target.y});if(!markup.lineDecoration)return;begin.style.display="none";end.style.display="none";var v=vectorNormalize({x:target.x-origin.x,y:target.y-origin.y});var l=getMarkupValue(0.05,size,scale);if(markup.lineDecoration.indexOf("arrow-begin")!==-1){var arrowBeginRotationPoint=vectorMultiply(v,l);var arrowBeginCenter=vectorAdd(origin,arrowBeginRotationPoint);var arrowBeginA=vectorRotate(origin,2,arrowBeginCenter);var arrowBeginB=vectorRotate(origin,-2,arrowBeginCenter);setAttributes(begin,{style:"display:block;",d:"M".concat(arrowBeginA.x,",").concat(arrowBeginA.y," L").concat(origin.x,",").concat(origin.y," L").concat(arrowBeginB.x,",").concat(arrowBeginB.y)});}if(markup.lineDecoration.indexOf("arrow-end")!==-1){var arrowEndRotationPoint=vectorMultiply(v,-l);var arrowEndCenter=vectorAdd(target,arrowEndRotationPoint);var arrowEndA=vectorRotate(target,2,arrowEndCenter);var arrowEndB=vectorRotate(target,-2,arrowEndCenter);setAttributes(end,{style:"display:block;",d:"M".concat(arrowEndA.x,",").concat(arrowEndA.y," L").concat(target.x,",").concat(target.y," L").concat(arrowEndB.x,",").concat(arrowEndB.y)});}};var updatePath=function updatePath(element,markup,size,scale){setAttributes(element,_objectSpread(_objectSpread({},element.styles),{},{fill:"none",d:pointsToPathShape(markup.points.map(function(point){return{x:getMarkupValue(point.x,size,scale,"width"),y:getMarkupValue(point.y,size,scale,"height")};}))}));};var createShape=function createShape(node){return function(markup){return svg(node,{id:markup.id});};};var createImage=function createImage(markup){var shape=svg("image",{id:markup.id,"stroke-linecap":"round","stroke-linejoin":"round",opacity:"0"});shape.onload=function(){shape.setAttribute("opacity",markup.opacity||1);};shape.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",markup.src);return shape;};var createLine=function createLine(markup){var shape=svg("g",{id:markup.id,"stroke-linecap":"round","stroke-linejoin":"round"});var line=svg("line");shape.appendChild(line);var begin=svg("path");shape.appendChild(begin);var end=svg("path");shape.appendChild(end);return shape;};var CREATE_TYPE_ROUTES={image:createImage,rect:createShape("rect"),ellipse:createShape("ellipse"),text:createShape("text"),path:createShape("path"),line:createLine};var UPDATE_TYPE_ROUTES={rect:updateRect2,ellipse:updateEllipse,image:updateImage,text:updateText,path:updatePath,line:updateLine};var createMarkupByType=function createMarkupByType(type,markup){return CREATE_TYPE_ROUTES[type](markup);};var updateMarkupByType=function updateMarkupByType(element,type,markup,size,scale){if(type!=="path"){element.rect=getMarkupRect(markup,size,scale);}element.styles=getMarkupStyles(markup,size,scale);UPDATE_TYPE_ROUTES[type](element,markup,size,scale);};var MARKUP_RECT=["x","y","left","top","right","bottom","width","height"];var toOptionalFraction=function toOptionalFraction(value){return typeof value==="string"&&/%/.test(value)?parseFloat(value)/100:value;};var prepareMarkup=function prepareMarkup(markup){var _markup=_slicedToArray2(markup,2),type=_markup[0],props=_markup[1];var rect=props.points?{}:MARKUP_RECT.reduce(function(prev,curr){prev[curr]=toOptionalFraction(props[curr]);return prev;},{});return[type,_objectSpread(_objectSpread({zIndex:0},props),rect)];};var sortMarkupByZIndex=function sortMarkupByZIndex(a2,b){if(a2[1].zIndex>b[1].zIndex){return 1;}if(a2[1].zIndex<b[1].zIndex){return-1;}return 0;};var createMarkupView=function createMarkupView(_){return _.utils.createView({name:"image-preview-markup",tag:"svg",ignoreRect:true,mixins:{apis:["width","height","crop","markup","resize","dirty"]},write:function write(_ref127){var root2=_ref127.root,props=_ref127.props;if(!props.dirty)return;var crop=props.crop,resize=props.resize,markup=props.markup;var viewWidth=props.width;var viewHeight=props.height;var cropWidth=crop.width;var cropHeight=crop.height;if(resize){var size2=resize.size;var outputWidth=size2&&size2.width;var outputHeight=size2&&size2.height;var outputFit=resize.mode;var outputUpscale=resize.upscale;if(outputWidth&&!outputHeight)outputHeight=outputWidth;if(outputHeight&&!outputWidth)outputWidth=outputHeight;var shouldUpscale=cropWidth<outputWidth&&cropHeight<outputHeight;if(!shouldUpscale||shouldUpscale&&outputUpscale){var scalarWidth=outputWidth/cropWidth;var scalarHeight=outputHeight/cropHeight;if(outputFit==="force"){cropWidth=outputWidth;cropHeight=outputHeight;}else{var scalar;if(outputFit==="cover"){scalar=Math.max(scalarWidth,scalarHeight);}else if(outputFit==="contain"){scalar=Math.min(scalarWidth,scalarHeight);}cropWidth=cropWidth*scalar;cropHeight=cropHeight*scalar;}}}var size={width:viewWidth,height:viewHeight};root2.element.setAttribute("width",size.width);root2.element.setAttribute("height",size.height);var scale=Math.min(viewWidth/cropWidth,viewHeight/cropHeight);root2.element.innerHTML="";var markupFilter=root2.query("GET_IMAGE_PREVIEW_MARKUP_FILTER");markup.filter(markupFilter).map(prepareMarkup).sort(sortMarkupByZIndex).forEach(function(markup2){var _markup2=_slicedToArray2(markup2,2),type=_markup2[0],settings=_markup2[1];var element=createMarkupByType(type,settings);updateMarkupByType(element,type,settings,size,scale);root2.element.appendChild(element);});}});};var createVector$1=function createVector$1(x,y){return{x:x,y:y};};var vectorDot=function vectorDot(a2,b){return a2.x*b.x+a2.y*b.y;};var vectorSubtract=function vectorSubtract(a2,b){return createVector$1(a2.x-b.x,a2.y-b.y);};var vectorDistanceSquared=function vectorDistanceSquared(a2,b){return vectorDot(vectorSubtract(a2,b),vectorSubtract(a2,b));};var vectorDistance=function vectorDistance(a2,b){return Math.sqrt(vectorDistanceSquared(a2,b));};var getOffsetPointOnEdge=function getOffsetPointOnEdge(length,rotation){var a2=length;var A=1.5707963267948966;var B=rotation;var C3=1.5707963267948966-rotation;var sinA=Math.sin(A);var sinB=Math.sin(B);var sinC=Math.sin(C3);var cosC=Math.cos(C3);var ratio=a2/sinA;var b=ratio*sinB;var c2=ratio*sinC;return createVector$1(cosC*b,cosC*c2);};var getRotatedRectSize=function getRotatedRectSize(rect,rotation){var w=rect.width;var h=rect.height;var hor=getOffsetPointOnEdge(w,rotation);var ver=getOffsetPointOnEdge(h,rotation);var tl=createVector$1(rect.x+Math.abs(hor.x),rect.y-Math.abs(hor.y));var tr=createVector$1(rect.x+rect.width+Math.abs(ver.y),rect.y+Math.abs(ver.x));var bl=createVector$1(rect.x-Math.abs(ver.y),rect.y+rect.height-Math.abs(ver.x));return{width:vectorDistance(tl,tr),height:vectorDistance(tl,bl)};};var calculateCanvasSize=function calculateCanvasSize(image,canvasAspectRatio){var zoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var imageAspectRatio=image.height/image.width;var canvasWidth=1;var canvasHeight=canvasAspectRatio;var imgWidth=1;var imgHeight=imageAspectRatio;if(imgHeight>canvasHeight){imgHeight=canvasHeight;imgWidth=imgHeight/imageAspectRatio;}var scalar=Math.max(canvasWidth/imgWidth,canvasHeight/imgHeight);var width=image.width/(zoom*scalar*imgWidth);var height=width*canvasAspectRatio;return{width:width,height:height};};var getImageRectZoomFactor=function getImageRectZoomFactor(imageRect,cropRect,rotation,center2){var cx=center2.x>0.5?1-center2.x:center2.x;var cy=center2.y>0.5?1-center2.y:center2.y;var imageWidth=cx*2*imageRect.width;var imageHeight=cy*2*imageRect.height;var rotatedCropSize=getRotatedRectSize(cropRect,rotation);return Math.max(rotatedCropSize.width/imageWidth,rotatedCropSize.height/imageHeight);};var getCenteredCropRect=function getCenteredCropRect(container,aspectRatio){var width=container.width;var height=width*aspectRatio;if(height>container.height){height=container.height;width=height/aspectRatio;}var x=(container.width-width)*0.5;var y=(container.height-height)*0.5;return{x:x,y:y,width:width,height:height};};var getCurrentCropSize=function getCurrentCropSize(imageSize){var crop=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var zoom=crop.zoom,rotation=crop.rotation,center2=crop.center,aspectRatio=crop.aspectRatio;if(!aspectRatio)aspectRatio=imageSize.height/imageSize.width;var canvasSize=calculateCanvasSize(imageSize,aspectRatio,zoom);var canvasCenter={x:canvasSize.width*0.5,y:canvasSize.height*0.5};var stage={x:0,y:0,width:canvasSize.width,height:canvasSize.height,center:canvasCenter};var shouldLimit=typeof crop.scaleToFit==="undefined"||crop.scaleToFit;var stageZoomFactor=getImageRectZoomFactor(imageSize,getCenteredCropRect(stage,aspectRatio),rotation,shouldLimit?center2:{x:0.5,y:0.5});var scale=zoom*stageZoomFactor;return{widthFloat:canvasSize.width/scale,heightFloat:canvasSize.height/scale,width:Math.round(canvasSize.width/scale),height:Math.round(canvasSize.height/scale)};};var IMAGE_SCALE_SPRING_PROPS={type:"spring",stiffness:0.5,damping:0.45,mass:10};var createBitmapView=function createBitmapView(_){return _.utils.createView({name:"image-bitmap",ignoreRect:true,mixins:{styles:["scaleX","scaleY"]},create:function create(_ref128){var root2=_ref128.root,props=_ref128.props;root2.appendChild(props.image);}});};var createImageCanvasWrapper=function createImageCanvasWrapper(_){return _.utils.createView({name:"image-canvas-wrapper",tag:"div",ignoreRect:true,mixins:{apis:["crop","width","height"],styles:["originX","originY","translateX","translateY","scaleX","scaleY","rotateZ"],animations:{originX:IMAGE_SCALE_SPRING_PROPS,originY:IMAGE_SCALE_SPRING_PROPS,scaleX:IMAGE_SCALE_SPRING_PROPS,scaleY:IMAGE_SCALE_SPRING_PROPS,translateX:IMAGE_SCALE_SPRING_PROPS,translateY:IMAGE_SCALE_SPRING_PROPS,rotateZ:IMAGE_SCALE_SPRING_PROPS}},create:function create(_ref129){var root2=_ref129.root,props=_ref129.props;props.width=props.image.width;props.height=props.image.height;root2.ref.bitmap=root2.appendChildView(root2.createChildView(createBitmapView(_),{image:props.image}));},write:function write(_ref130){var root2=_ref130.root,props=_ref130.props;var flip=props.crop.flip;var bitmap=root2.ref.bitmap;bitmap.scaleX=flip.horizontal?-1:1;bitmap.scaleY=flip.vertical?-1:1;}});};var createClipView=function createClipView(_){return _.utils.createView({name:"image-clip",tag:"div",ignoreRect:true,mixins:{apis:["crop","markup","resize","width","height","dirty","background"],styles:["width","height","opacity"],animations:{opacity:{type:"tween",duration:250}}},didWriteView:function didWriteView(_ref131){var root2=_ref131.root,props=_ref131.props;if(!props.background)return;root2.element.style.backgroundColor=props.background;},create:function create(_ref132){var root2=_ref132.root,props=_ref132.props;root2.ref.image=root2.appendChildView(root2.createChildView(createImageCanvasWrapper(_),Object.assign({},props)));root2.ref.createMarkup=function(){if(root2.ref.markup)return;root2.ref.markup=root2.appendChildView(root2.createChildView(createMarkupView(_),Object.assign({},props)));};root2.ref.destroyMarkup=function(){if(!root2.ref.markup)return;root2.removeChildView(root2.ref.markup);root2.ref.markup=null;};var transparencyIndicator=root2.query("GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR");if(transparencyIndicator===null)return;if(transparencyIndicator==="grid"){root2.element.dataset.transparencyIndicator=transparencyIndicator;}else{root2.element.dataset.transparencyIndicator="color";}},write:function write(_ref133){var root2=_ref133.root,props=_ref133.props,shouldOptimize=_ref133.shouldOptimize;var crop=props.crop,markup=props.markup,resize=props.resize,dirty=props.dirty,width=props.width,height=props.height;root2.ref.image.crop=crop;var stage={x:0,y:0,width:width,height:height,center:{x:width*0.5,y:height*0.5}};var image={width:root2.ref.image.width,height:root2.ref.image.height};var origin={x:crop.center.x*image.width,y:crop.center.y*image.height};var translation={x:stage.center.x-image.width*crop.center.x,y:stage.center.y-image.height*crop.center.y};var rotation=Math.PI*2+crop.rotation%(Math.PI*2);var cropAspectRatio=crop.aspectRatio||image.height/image.width;var shouldLimit=typeof crop.scaleToFit==="undefined"||crop.scaleToFit;var stageZoomFactor=getImageRectZoomFactor(image,getCenteredCropRect(stage,cropAspectRatio),rotation,shouldLimit?crop.center:{x:0.5,y:0.5});var scale=crop.zoom*stageZoomFactor;if(markup&&markup.length){root2.ref.createMarkup();root2.ref.markup.width=width;root2.ref.markup.height=height;root2.ref.markup.resize=resize;root2.ref.markup.dirty=dirty;root2.ref.markup.markup=markup;root2.ref.markup.crop=getCurrentCropSize(image,crop);}else if(root2.ref.markup){root2.ref.destroyMarkup();}var imageView=root2.ref.image;if(shouldOptimize){imageView.originX=null;imageView.originY=null;imageView.translateX=null;imageView.translateY=null;imageView.rotateZ=null;imageView.scaleX=null;imageView.scaleY=null;return;}imageView.originX=origin.x;imageView.originY=origin.y;imageView.translateX=translation.x;imageView.translateY=translation.y;imageView.rotateZ=rotation;imageView.scaleX=scale;imageView.scaleY=scale;}});};var createImageView=function createImageView(_){return _.utils.createView({name:"image-preview",tag:"div",ignoreRect:true,mixins:{apis:["image","crop","markup","resize","dirty","background"],styles:["translateY","scaleX","scaleY","opacity"],animations:{scaleX:IMAGE_SCALE_SPRING_PROPS,scaleY:IMAGE_SCALE_SPRING_PROPS,translateY:IMAGE_SCALE_SPRING_PROPS,opacity:{type:"tween",duration:400}}},create:function create(_ref134){var root2=_ref134.root,props=_ref134.props;root2.ref.clip=root2.appendChildView(root2.createChildView(createClipView(_),{id:props.id,image:props.image,crop:props.crop,markup:props.markup,resize:props.resize,dirty:props.dirty,background:props.background}));},write:function write(_ref135){var root2=_ref135.root,props=_ref135.props,shouldOptimize=_ref135.shouldOptimize;var clip=root2.ref.clip;var image=props.image,crop=props.crop,markup=props.markup,resize=props.resize,dirty=props.dirty;clip.crop=crop;clip.markup=markup;clip.resize=resize;clip.dirty=dirty;clip.opacity=shouldOptimize?0:1;if(shouldOptimize||root2.rect.element.hidden)return;var imageAspectRatio=image.height/image.width;var aspectRatio=crop.aspectRatio||imageAspectRatio;var containerWidth=root2.rect.inner.width;var containerHeight=root2.rect.inner.height;var fixedPreviewHeight=root2.query("GET_IMAGE_PREVIEW_HEIGHT");var minPreviewHeight=root2.query("GET_IMAGE_PREVIEW_MIN_HEIGHT");var maxPreviewHeight=root2.query("GET_IMAGE_PREVIEW_MAX_HEIGHT");var panelAspectRatio=root2.query("GET_PANEL_ASPECT_RATIO");var allowMultiple=root2.query("GET_ALLOW_MULTIPLE");if(panelAspectRatio&&!allowMultiple){fixedPreviewHeight=containerWidth*panelAspectRatio;aspectRatio=panelAspectRatio;}var clipHeight=fixedPreviewHeight!==null?fixedPreviewHeight:Math.max(minPreviewHeight,Math.min(containerWidth*aspectRatio,maxPreviewHeight));var clipWidth=clipHeight/aspectRatio;if(clipWidth>containerWidth){clipWidth=containerWidth;clipHeight=clipWidth*aspectRatio;}if(clipHeight>containerHeight){clipHeight=containerHeight;clipWidth=containerHeight/aspectRatio;}clip.width=clipWidth;clip.height=clipHeight;}});};var SVG_MASK="<svg width=\"500\" height=\"200\" viewBox=\"0 0 500 200\" preserveAspectRatio=\"none\">\n    <defs>\n        <radialGradient id=\"gradient-__UID__\" cx=\".5\" cy=\"1.25\" r=\"1.15\">\n            <stop offset='50%' stop-color='#000000'/>\n            <stop offset='56%' stop-color='#0a0a0a'/>\n            <stop offset='63%' stop-color='#262626'/>\n            <stop offset='69%' stop-color='#4f4f4f'/>\n            <stop offset='75%' stop-color='#808080'/>\n            <stop offset='81%' stop-color='#b1b1b1'/>\n            <stop offset='88%' stop-color='#dadada'/>\n            <stop offset='94%' stop-color='#f6f6f6'/>\n            <stop offset='100%' stop-color='#ffffff'/>\n        </radialGradient>\n        <mask id=\"mask-__UID__\">\n            <rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" fill=\"url(#gradient-__UID__)\"></rect>\n        </mask>\n    </defs>\n    <rect x=\"0\" width=\"500\" height=\"200\" fill=\"currentColor\" mask=\"url(#mask-__UID__)\"></rect>\n</svg>";var SVGMaskUniqueId=0;var createImageOverlayView=function createImageOverlayView(fpAPI){return fpAPI.utils.createView({name:"image-preview-overlay",tag:"div",ignoreRect:true,create:function create(_ref136){var root2=_ref136.root,props=_ref136.props;var mask=SVG_MASK;if(document.querySelector("base")){var url=window.location.href.replace(window.location.hash,"");mask=mask.replace(/url\(\#/g,"url("+url+"#");}SVGMaskUniqueId++;root2.element.classList.add("filepond--image-preview-overlay-".concat(props.status));root2.element.innerHTML=mask.replace(/__UID__/g,SVGMaskUniqueId);},mixins:{styles:["opacity"],animations:{opacity:{type:"spring",mass:25}}}});};var BitmapWorker=function BitmapWorker(){self.onmessage=function(e2){createImageBitmap(e2.data.message.file).then(function(bitmap){self.postMessage({id:e2.data.id,message:bitmap},[bitmap]);});};};var ColorMatrixWorker=function ColorMatrixWorker(){self.onmessage=function(e2){var imageData=e2.data.message.imageData;var matrix=e2.data.message.colorMatrix;var data3=imageData.data;var l=data3.length;var m11=matrix[0];var m12=matrix[1];var m13=matrix[2];var m14=matrix[3];var m15=matrix[4];var m21=matrix[5];var m22=matrix[6];var m23=matrix[7];var m24=matrix[8];var m25=matrix[9];var m31=matrix[10];var m32=matrix[11];var m33=matrix[12];var m34=matrix[13];var m35=matrix[14];var m41=matrix[15];var m42=matrix[16];var m43=matrix[17];var m44=matrix[18];var m45=matrix[19];var index=0,r2=0,g=0,b=0,a2=0;for(;index<l;index+=4){r2=data3[index]/255;g=data3[index+1]/255;b=data3[index+2]/255;a2=data3[index+3]/255;data3[index]=Math.max(0,Math.min((r2*m11+g*m12+b*m13+a2*m14+m15)*255,255));data3[index+1]=Math.max(0,Math.min((r2*m21+g*m22+b*m23+a2*m24+m25)*255,255));data3[index+2]=Math.max(0,Math.min((r2*m31+g*m32+b*m33+a2*m34+m35)*255,255));data3[index+3]=Math.max(0,Math.min((r2*m41+g*m42+b*m43+a2*m44+m45)*255,255));}self.postMessage({id:e2.data.id,message:imageData},[imageData.data.buffer]);};};var getImageSize=function getImageSize(url,cb){var image=new Image();image.onload=function(){var width=image.naturalWidth;var height=image.naturalHeight;image=null;cb(width,height);};image.src=url;};var transforms={1:function _(){return[1,0,0,1,0,0];},2:function _(width){return[-1,0,0,1,width,0];},3:function _(width,height){return[-1,0,0,-1,width,height];},4:function _(width,height){return[1,0,0,-1,0,height];},5:function _(){return[0,1,1,0,0,0];},6:function _(width,height){return[0,1,-1,0,height,0];},7:function _(width,height){return[0,-1,-1,0,height,width];},8:function _(width){return[0,-1,1,0,0,width];}};var fixImageOrientation=function fixImageOrientation(ctx,width,height,orientation){if(orientation===-1){return;}ctx.transform.apply(ctx,transforms[orientation](width,height));};var createPreviewImage=function createPreviewImage(data3,width,height,orientation){width=Math.round(width);height=Math.round(height);var canvas=document.createElement("canvas");canvas.width=width;canvas.height=height;var ctx=canvas.getContext("2d");if(orientation>=5&&orientation<=8){var _ref137=[height,width];width=_ref137[0];height=_ref137[1];}fixImageOrientation(ctx,width,height,orientation);ctx.drawImage(data3,0,0,width,height);return canvas;};var isBitmap=function isBitmap(file2){return /^image/.test(file2.type)&&!/svg/.test(file2.type);};var MAX_WIDTH=10;var MAX_HEIGHT=10;var calculateAverageColor=function calculateAverageColor(image){var scalar=Math.min(MAX_WIDTH/image.width,MAX_HEIGHT/image.height);var canvas=document.createElement("canvas");var ctx=canvas.getContext("2d");var width=canvas.width=Math.ceil(image.width*scalar);var height=canvas.height=Math.ceil(image.height*scalar);ctx.drawImage(image,0,0,width,height);var data3=null;try{data3=ctx.getImageData(0,0,width,height).data;}catch(e2){return null;}var l=data3.length;var r2=0;var g=0;var b=0;var i=0;for(;i<l;i+=4){r2+=data3[i]*data3[i];g+=data3[i+1]*data3[i+1];b+=data3[i+2]*data3[i+2];}r2=averageColor(r2,l);g=averageColor(g,l);b=averageColor(b,l);return{r:r2,g:g,b:b};};var averageColor=function averageColor(c2,l){return Math.floor(Math.sqrt(c2/(l/4)));};var cloneCanvas=function cloneCanvas(origin,target){target=target||document.createElement("canvas");target.width=origin.width;target.height=origin.height;var ctx=target.getContext("2d");ctx.drawImage(origin,0,0);return target;};var cloneImageData=function cloneImageData(imageData){var id;try{id=new ImageData(imageData.width,imageData.height);}catch(e2){var canvas=document.createElement("canvas");var ctx=canvas.getContext("2d");id=ctx.createImageData(imageData.width,imageData.height);}id.data.set(new Uint8ClampedArray(imageData.data));return id;};var loadImage2=function loadImage2(url){return new Promise(function(resolve,reject){var img=new Image();img.crossOrigin="Anonymous";img.onload=function(){resolve(img);};img.onerror=function(e2){reject(e2);};img.src=url;});};var createImageWrapperView=function createImageWrapperView(_){var OverlayView=createImageOverlayView(_);var ImageView=createImageView(_);var createWorker3=_.utils.createWorker;var applyFilter=function applyFilter(root2,filter,target){return new Promise(function(resolve){if(!root2.ref.imageData){root2.ref.imageData=target.getContext("2d").getImageData(0,0,target.width,target.height);}var imageData=cloneImageData(root2.ref.imageData);if(!filter||filter.length!==20){target.getContext("2d").putImageData(imageData,0,0);return resolve();}var worker=createWorker3(ColorMatrixWorker);worker.post({imageData:imageData,colorMatrix:filter},function(response){target.getContext("2d").putImageData(response,0,0);worker.terminate();resolve();},[imageData.data.buffer]);});};var removeImageView=function removeImageView(root2,imageView){root2.removeChildView(imageView);imageView.image.width=1;imageView.image.height=1;imageView._destroy();};var shiftImage=function shiftImage(_ref138){var root2=_ref138.root;var imageView=root2.ref.images.shift();imageView.opacity=0;imageView.translateY=-15;root2.ref.imageViewBin.push(imageView);return imageView;};var pushImage=function pushImage(_ref139){var root2=_ref139.root,props=_ref139.props,image=_ref139.image;var id=props.id;var item2=root2.query("GET_ITEM",{id:id});if(!item2)return;var crop=item2.getMetadata("crop")||{center:{x:0.5,y:0.5},flip:{horizontal:false,vertical:false},zoom:1,rotation:0,aspectRatio:null};var background=root2.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR");var markup;var resize;var dirty=false;if(root2.query("GET_IMAGE_PREVIEW_MARKUP_SHOW")){markup=item2.getMetadata("markup")||[];resize=item2.getMetadata("resize");dirty=true;}var imageView=root2.appendChildView(root2.createChildView(ImageView,{id:id,image:image,crop:crop,resize:resize,markup:markup,dirty:dirty,background:background,opacity:0,scaleX:1.15,scaleY:1.15,translateY:15}),root2.childViews.length);root2.ref.images.push(imageView);imageView.opacity=1;imageView.scaleX=1;imageView.scaleY=1;imageView.translateY=0;setTimeout(function(){root2.dispatch("DID_IMAGE_PREVIEW_SHOW",{id:id});},250);};var updateImage3=function updateImage3(_ref140){var root2=_ref140.root,props=_ref140.props;var item2=root2.query("GET_ITEM",{id:props.id});if(!item2)return;var imageView=root2.ref.images[root2.ref.images.length-1];imageView.crop=item2.getMetadata("crop");imageView.background=root2.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR");if(root2.query("GET_IMAGE_PREVIEW_MARKUP_SHOW")){imageView.dirty=true;imageView.resize=item2.getMetadata("resize");imageView.markup=item2.getMetadata("markup");}};var didUpdateItemMetadata=function didUpdateItemMetadata(_ref141){var root2=_ref141.root,props=_ref141.props,action=_ref141.action;if(!/crop|filter|markup|resize/.test(action.change.key))return;if(!root2.ref.images.length)return;var item2=root2.query("GET_ITEM",{id:props.id});if(!item2)return;if(/filter/.test(action.change.key)){var imageView=root2.ref.images[root2.ref.images.length-1];applyFilter(root2,action.change.value,imageView.image);return;}if(/crop|markup|resize/.test(action.change.key)){var crop=item2.getMetadata("crop");var image=root2.ref.images[root2.ref.images.length-1];if(crop&&crop.aspectRatio&&image.crop&&image.crop.aspectRatio&&Math.abs(crop.aspectRatio-image.crop.aspectRatio)>1e-5){var _imageView=shiftImage({root:root2});pushImage({root:root2,props:props,image:cloneCanvas(_imageView.image)});}else{updateImage3({root:root2,props:props});}}};var canCreateImageBitmap=function canCreateImageBitmap(file2){var userAgent=window.navigator.userAgent;var isFirefox=userAgent.match(/Firefox\/([0-9]+)\./);var firefoxVersion=isFirefox?parseInt(isFirefox[1]):null;if(firefoxVersion<=58)return false;return"createImageBitmap"in window&&isBitmap(file2);};var didCreatePreviewContainer=function didCreatePreviewContainer(_ref142){var root2=_ref142.root,props=_ref142.props;var id=props.id;var item2=root2.query("GET_ITEM",id);if(!item2)return;var fileURL=URL.createObjectURL(item2.file);getImageSize(fileURL,function(width,height){root2.dispatch("DID_IMAGE_PREVIEW_CALCULATE_SIZE",{id:id,width:width,height:height});});};var drawPreview=function drawPreview(_ref143){var root2=_ref143.root,props=_ref143.props;var id=props.id;var item2=root2.query("GET_ITEM",id);if(!item2)return;var fileURL=URL.createObjectURL(item2.file);var loadPreviewFallback=function loadPreviewFallback(){loadImage2(fileURL).then(previewImageLoaded);};var previewImageLoaded=function previewImageLoaded(imageData){URL.revokeObjectURL(fileURL);var exif=item2.getMetadata("exif")||{};var orientation=exif.orientation||-1;var width=imageData.width,height=imageData.height;if(!width||!height)return;if(orientation>=5&&orientation<=8){var _ref144=[height,width];width=_ref144[0];height=_ref144[1];}var pixelDensityFactor=Math.max(1,window.devicePixelRatio*0.75);var zoomFactor=root2.query("GET_IMAGE_PREVIEW_ZOOM_FACTOR");var scaleFactor=zoomFactor*pixelDensityFactor;var previewImageRatio=height/width;var previewContainerWidth=root2.rect.element.width;var previewContainerHeight=root2.rect.element.height;var imageWidth=previewContainerWidth;var imageHeight=imageWidth*previewImageRatio;if(previewImageRatio>1){imageWidth=Math.min(width,previewContainerWidth*scaleFactor);imageHeight=imageWidth*previewImageRatio;}else{imageHeight=Math.min(height,previewContainerHeight*scaleFactor);imageWidth=imageHeight/previewImageRatio;}var previewImage=createPreviewImage(imageData,imageWidth,imageHeight,orientation);var done=function done(){var averageColor2=root2.query("GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR")?calculateAverageColor(data):null;item2.setMetadata("color",averageColor2,true);if("close"in imageData){imageData.close();}root2.ref.overlayShadow.opacity=1;pushImage({root:root2,props:props,image:previewImage});};var filter=item2.getMetadata("filter");if(filter){applyFilter(root2,filter,previewImage).then(done);}else{done();}};if(canCreateImageBitmap(item2.file)){var worker=createWorker3(BitmapWorker);worker.post({file:item2.file},function(imageBitmap){worker.terminate();if(!imageBitmap){loadPreviewFallback();return;}previewImageLoaded(imageBitmap);});}else{loadPreviewFallback();}};var didDrawPreview=function didDrawPreview(_ref145){var root2=_ref145.root;var image=root2.ref.images[root2.ref.images.length-1];image.translateY=0;image.scaleX=1;image.scaleY=1;image.opacity=1;};var restoreOverlay=function restoreOverlay(_ref146){var root2=_ref146.root;root2.ref.overlayShadow.opacity=1;root2.ref.overlayError.opacity=0;root2.ref.overlaySuccess.opacity=0;};var didThrowError=function didThrowError(_ref147){var root2=_ref147.root;root2.ref.overlayShadow.opacity=0.25;root2.ref.overlayError.opacity=1;};var didCompleteProcessing=function didCompleteProcessing(_ref148){var root2=_ref148.root;root2.ref.overlayShadow.opacity=0.25;root2.ref.overlaySuccess.opacity=1;};var create2=function create2(_ref149){var root2=_ref149.root;root2.ref.images=[];root2.ref.imageData=null;root2.ref.imageViewBin=[];root2.ref.overlayShadow=root2.appendChildView(root2.createChildView(OverlayView,{opacity:0,status:"idle"}));root2.ref.overlaySuccess=root2.appendChildView(root2.createChildView(OverlayView,{opacity:0,status:"success"}));root2.ref.overlayError=root2.appendChildView(root2.createChildView(OverlayView,{opacity:0,status:"failure"}));};return _.utils.createView({name:"image-preview-wrapper",create:create2,styles:["height"],apis:["height"],destroy:function destroy(_ref150){var root2=_ref150.root;root2.ref.images.forEach(function(imageView){imageView.image.width=1;imageView.image.height=1;});},didWriteView:function didWriteView(_ref151){var root2=_ref151.root;root2.ref.images.forEach(function(imageView){imageView.dirty=false;});},write:_.utils.createRoute({DID_IMAGE_PREVIEW_DRAW:didDrawPreview,DID_IMAGE_PREVIEW_CONTAINER_CREATE:didCreatePreviewContainer,DID_FINISH_CALCULATE_PREVIEWSIZE:drawPreview,DID_UPDATE_ITEM_METADATA:didUpdateItemMetadata,DID_THROW_ITEM_LOAD_ERROR:didThrowError,DID_THROW_ITEM_PROCESSING_ERROR:didThrowError,DID_THROW_ITEM_INVALID:didThrowError,DID_COMPLETE_ITEM_PROCESSING:didCompleteProcessing,DID_START_ITEM_PROCESSING:restoreOverlay,DID_REVERT_ITEM_PROCESSING:restoreOverlay},function(_ref152){var root2=_ref152.root;var viewsToRemove=root2.ref.imageViewBin.filter(function(imageView){return imageView.opacity===0;});root2.ref.imageViewBin=root2.ref.imageViewBin.filter(function(imageView){return imageView.opacity>0;});viewsToRemove.forEach(function(imageView){return removeImageView(root2,imageView);});viewsToRemove.length=0;})});};var plugin5=function plugin5(fpAPI){var addFilter2=fpAPI.addFilter,utils=fpAPI.utils;var Type2=utils.Type,createRoute2=utils.createRoute,isFile2=utils.isFile;var imagePreviewView=createImageWrapperView(fpAPI);addFilter2("CREATE_VIEW",function(viewAPI){var is=viewAPI.is,view=viewAPI.view,query=viewAPI.query;if(!is("file")||!query("GET_ALLOW_IMAGE_PREVIEW"))return;var didLoadItem2=function didLoadItem2(_ref153){var root2=_ref153.root,props=_ref153.props;var id=props.id;var item2=query("GET_ITEM",id);if(!item2||!isFile2(item2.file)||item2.archived)return;var file2=item2.file;if(!isPreviewableImage(file2))return;if(!query("GET_IMAGE_PREVIEW_FILTER_ITEM")(item2))return;var supportsCreateImageBitmap=("createImageBitmap"in(window||{}));var maxPreviewFileSize=query("GET_IMAGE_PREVIEW_MAX_FILE_SIZE");if(!supportsCreateImageBitmap&&maxPreviewFileSize&&file2.size>maxPreviewFileSize)return;root2.ref.imagePreview=view.appendChildView(view.createChildView(imagePreviewView,{id:id}));var fixedPreviewHeight=root2.query("GET_IMAGE_PREVIEW_HEIGHT");if(fixedPreviewHeight){root2.dispatch("DID_UPDATE_PANEL_HEIGHT",{id:item2.id,height:fixedPreviewHeight});}var queue=!supportsCreateImageBitmap&&file2.size>query("GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE");root2.dispatch("DID_IMAGE_PREVIEW_CONTAINER_CREATE",{id:id},queue);};var rescaleItem=function rescaleItem(root2,props){if(!root2.ref.imagePreview)return;var id=props.id;var item2=root2.query("GET_ITEM",{id:id});if(!item2)return;var panelAspectRatio=root2.query("GET_PANEL_ASPECT_RATIO");var itemPanelAspectRatio=root2.query("GET_ITEM_PANEL_ASPECT_RATIO");var fixedHeight=root2.query("GET_IMAGE_PREVIEW_HEIGHT");if(panelAspectRatio||itemPanelAspectRatio||fixedHeight)return;var _root2$ref2=root2.ref,imageWidth=_root2$ref2.imageWidth,imageHeight=_root2$ref2.imageHeight;if(!imageWidth||!imageHeight)return;var minPreviewHeight=root2.query("GET_IMAGE_PREVIEW_MIN_HEIGHT");var maxPreviewHeight=root2.query("GET_IMAGE_PREVIEW_MAX_HEIGHT");var exif=item2.getMetadata("exif")||{};var orientation=exif.orientation||-1;if(orientation>=5&&orientation<=8){var _ref154=[imageHeight,imageWidth];imageWidth=_ref154[0];imageHeight=_ref154[1];}if(!isBitmap(item2.file)||root2.query("GET_IMAGE_PREVIEW_UPSCALE")){var scalar=2048/imageWidth;imageWidth*=scalar;imageHeight*=scalar;}var imageAspectRatio=imageHeight/imageWidth;var previewAspectRatio=(item2.getMetadata("crop")||{}).aspectRatio||imageAspectRatio;var previewHeightMax=Math.max(minPreviewHeight,Math.min(imageHeight,maxPreviewHeight));var itemWidth=root2.rect.element.width;var previewHeight=Math.min(itemWidth*previewAspectRatio,previewHeightMax);root2.dispatch("DID_UPDATE_PANEL_HEIGHT",{id:item2.id,height:previewHeight});};var didResizeView=function didResizeView(_ref155){var root2=_ref155.root;root2.ref.shouldRescale=true;};var didUpdateItemMetadata=function didUpdateItemMetadata(_ref156){var root2=_ref156.root,action=_ref156.action;if(action.change.key!=="crop")return;root2.ref.shouldRescale=true;};var didCalculatePreviewSize=function didCalculatePreviewSize(_ref157){var root2=_ref157.root,action=_ref157.action;root2.ref.imageWidth=action.width;root2.ref.imageHeight=action.height;root2.ref.shouldRescale=true;root2.ref.shouldDrawPreview=true;root2.dispatch("KICK");};view.registerWriter(createRoute2({DID_RESIZE_ROOT:didResizeView,DID_STOP_RESIZE:didResizeView,DID_LOAD_ITEM:didLoadItem2,DID_IMAGE_PREVIEW_CALCULATE_SIZE:didCalculatePreviewSize,DID_UPDATE_ITEM_METADATA:didUpdateItemMetadata},function(_ref158){var root2=_ref158.root,props=_ref158.props;if(!root2.ref.imagePreview)return;if(root2.rect.element.hidden)return;if(root2.ref.shouldRescale){rescaleItem(root2,props);root2.ref.shouldRescale=false;}if(root2.ref.shouldDrawPreview){requestAnimationFrame(function(){requestAnimationFrame(function(){root2.dispatch("DID_FINISH_CALCULATE_PREVIEWSIZE",{id:props.id});});});root2.ref.shouldDrawPreview=false;}}));});return{options:{allowImagePreview:[true,Type2.BOOLEAN],imagePreviewFilterItem:[function(){return true;},Type2.FUNCTION],imagePreviewHeight:[null,Type2.INT],imagePreviewMinHeight:[44,Type2.INT],imagePreviewMaxHeight:[256,Type2.INT],imagePreviewMaxFileSize:[null,Type2.INT],imagePreviewZoomFactor:[2,Type2.INT],imagePreviewUpscale:[false,Type2.BOOLEAN],imagePreviewMaxInstantPreviewFileSize:[1e6,Type2.INT],imagePreviewTransparencyIndicator:[null,Type2.STRING],imagePreviewCalculateAverageImageColor:[false,Type2.BOOLEAN],imagePreviewMarkupShow:[true,Type2.BOOLEAN],imagePreviewMarkupFilter:[function(){return true;},Type2.FUNCTION]}};};var isBrowser6=typeof window!=="undefined"&&typeof window.document!=="undefined";if(isBrowser6){document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin5}));}var filepond_plugin_image_preview_esm_default=plugin5;// node_modules/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.esm.js
/*!
 * FilePondPluginImageResize 2.0.10
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */var isImage2=function isImage2(file2){return /^image/.test(file2.type);};var getImageSize2=function getImageSize2(url,cb){var image=new Image();image.onload=function(){var width=image.naturalWidth;var height=image.naturalHeight;image=null;cb({width:width,height:height});};image.onerror=function(){return cb(null);};image.src=url;};var plugin6=function plugin6(_ref159){var addFilter2=_ref159.addFilter,utils=_ref159.utils;var Type2=utils.Type;addFilter2("DID_LOAD_ITEM",function(item2,_ref160){var query=_ref160.query;return new Promise(function(resolve,reject){var file2=item2.file;if(!isImage2(file2)||!query("GET_ALLOW_IMAGE_RESIZE")){return resolve(item2);}var mode=query("GET_IMAGE_RESIZE_MODE");var width=query("GET_IMAGE_RESIZE_TARGET_WIDTH");var height=query("GET_IMAGE_RESIZE_TARGET_HEIGHT");var upscale=query("GET_IMAGE_RESIZE_UPSCALE");if(width===null&&height===null)return resolve(item2);var targetWidth=width===null?height:width;var targetHeight=height===null?targetWidth:height;var fileURL=URL.createObjectURL(file2);getImageSize2(fileURL,function(size){URL.revokeObjectURL(fileURL);if(!size)return resolve(item2);var imageWidth=size.width,imageHeight=size.height;var orientation=(item2.getMetadata("exif")||{}).orientation||-1;if(orientation>=5&&orientation<=8){var _ref161=[imageHeight,imageWidth];imageWidth=_ref161[0];imageHeight=_ref161[1];}if(imageWidth===targetWidth&&imageHeight===targetHeight)return resolve(item2);if(!upscale){if(mode==="cover"){if(imageWidth<=targetWidth||imageHeight<=targetHeight)return resolve(item2);}else if(imageWidth<=targetWidth&&imageHeight<=targetWidth){return resolve(item2);}}item2.setMetadata("resize",{mode:mode,upscale:upscale,size:{width:targetWidth,height:targetHeight}});resolve(item2);});});});return{options:{allowImageResize:[true,Type2.BOOLEAN],imageResizeMode:["cover",Type2.STRING],imageResizeUpscale:[true,Type2.BOOLEAN],imageResizeTargetWidth:[null,Type2.INT],imageResizeTargetHeight:[null,Type2.INT]}};};var isBrowser7=typeof window!=="undefined"&&typeof window.document!=="undefined";if(isBrowser7){document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin6}));}var filepond_plugin_image_resize_esm_default=plugin6;// node_modules/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.esm.js
/*!
 * FilePondPluginImageTransform 3.8.7
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */var isImage3=function isImage3(file2){return /^image/.test(file2.type);};var getFilenameWithoutExtension2=function getFilenameWithoutExtension2(name2){return name2.substr(0,name2.lastIndexOf("."))||name2;};var ExtensionMap={jpeg:"jpg","svg+xml":"svg"};var renameFileToMatchMimeType=function renameFileToMatchMimeType(filename,mimeType){var name2=getFilenameWithoutExtension2(filename);var type=mimeType.split("/")[1];var extension=ExtensionMap[type]||type;return"".concat(name2,".").concat(extension);};var getValidOutputMimeType=function getValidOutputMimeType(type){return /jpeg|png|svg\+xml/.test(type)?type:"image/jpeg";};var isImage$1=function isImage$1(file2){return /^image/.test(file2.type);};var MATRICES={1:function _(){return[1,0,0,1,0,0];},2:function _(width){return[-1,0,0,1,width,0];},3:function _(width,height){return[-1,0,0,-1,width,height];},4:function _(width,height){return[1,0,0,-1,0,height];},5:function _(){return[0,1,1,0,0,0];},6:function _(width,height){return[0,1,-1,0,height,0];},7:function _(width,height){return[0,-1,-1,0,height,width];},8:function _(width){return[0,-1,1,0,0,width];}};var getImageOrientationMatrix=function getImageOrientationMatrix(width,height,orientation){if(orientation===-1){orientation=1;}return MATRICES[orientation](width,height);};var createVector2=function createVector2(x,y){return{x:x,y:y};};var vectorDot2=function vectorDot2(a2,b){return a2.x*b.x+a2.y*b.y;};var vectorSubtract2=function vectorSubtract2(a2,b){return createVector2(a2.x-b.x,a2.y-b.y);};var vectorDistanceSquared2=function vectorDistanceSquared2(a2,b){return vectorDot2(vectorSubtract2(a2,b),vectorSubtract2(a2,b));};var vectorDistance2=function vectorDistance2(a2,b){return Math.sqrt(vectorDistanceSquared2(a2,b));};var getOffsetPointOnEdge2=function getOffsetPointOnEdge2(length,rotation){var a2=length;var A=1.5707963267948966;var B=rotation;var C3=1.5707963267948966-rotation;var sinA=Math.sin(A);var sinB=Math.sin(B);var sinC=Math.sin(C3);var cosC=Math.cos(C3);var ratio=a2/sinA;var b=ratio*sinB;var c2=ratio*sinC;return createVector2(cosC*b,cosC*c2);};var getRotatedRectSize2=function getRotatedRectSize2(rect,rotation){var w=rect.width;var h=rect.height;var hor=getOffsetPointOnEdge2(w,rotation);var ver=getOffsetPointOnEdge2(h,rotation);var tl=createVector2(rect.x+Math.abs(hor.x),rect.y-Math.abs(hor.y));var tr=createVector2(rect.x+rect.width+Math.abs(ver.y),rect.y+Math.abs(ver.x));var bl=createVector2(rect.x-Math.abs(ver.y),rect.y+rect.height-Math.abs(ver.x));return{width:vectorDistance2(tl,tr),height:vectorDistance2(tl,bl)};};var getImageRectZoomFactor2=function getImageRectZoomFactor2(imageRect,cropRect){var rotation=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var center2=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{x:0.5,y:0.5};var cx=center2.x>0.5?1-center2.x:center2.x;var cy=center2.y>0.5?1-center2.y:center2.y;var imageWidth=cx*2*imageRect.width;var imageHeight=cy*2*imageRect.height;var rotatedCropSize=getRotatedRectSize2(cropRect,rotation);return Math.max(rotatedCropSize.width/imageWidth,rotatedCropSize.height/imageHeight);};var getCenteredCropRect2=function getCenteredCropRect2(container,aspectRatio){var width=container.width;var height=width*aspectRatio;if(height>container.height){height=container.height;width=height/aspectRatio;}var x=(container.width-width)*0.5;var y=(container.height-height)*0.5;return{x:x,y:y,width:width,height:height};};var calculateCanvasSize2=function calculateCanvasSize2(image,canvasAspectRatio){var zoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var imageAspectRatio=image.height/image.width;var canvasWidth=1;var canvasHeight=canvasAspectRatio;var imgWidth=1;var imgHeight=imageAspectRatio;if(imgHeight>canvasHeight){imgHeight=canvasHeight;imgWidth=imgHeight/imageAspectRatio;}var scalar=Math.max(canvasWidth/imgWidth,canvasHeight/imgHeight);var width=image.width/(zoom*scalar*imgWidth);var height=width*canvasAspectRatio;return{width:width,height:height};};var canvasRelease=function canvasRelease(canvas){canvas.width=1;canvas.height=1;var ctx=canvas.getContext("2d");ctx.clearRect(0,0,1,1);};var isFlipped=function isFlipped(flip){return flip&&(flip.horizontal||flip.vertical);};var getBitmap=function getBitmap(image,orientation,flip){if(orientation<=1&&!isFlipped(flip)){image.width=image.naturalWidth;image.height=image.naturalHeight;return image;}var canvas=document.createElement("canvas");var width=image.naturalWidth;var height=image.naturalHeight;var swapped=orientation>=5&&orientation<=8;if(swapped){canvas.width=height;canvas.height=width;}else{canvas.width=width;canvas.height=height;}var ctx=canvas.getContext("2d");if(orientation){ctx.transform.apply(ctx,getImageOrientationMatrix(width,height,orientation));}if(isFlipped(flip)){var matrix=[1,0,0,1,0,0];if(!swapped&&flip.horizontal||swapped&flip.vertical){matrix[0]=-1;matrix[4]=width;}if(!swapped&&flip.vertical||swapped&&flip.horizontal){matrix[3]=-1;matrix[5]=height;}ctx.transform.apply(ctx,matrix);}ctx.drawImage(image,0,0,width,height);return canvas;};var imageToImageData=function imageToImageData(imageElement,orientation){var crop=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var options2=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var canvasMemoryLimit=options2.canvasMemoryLimit,_options2$background=options2.background,background=_options2$background===void 0?null:_options2$background;var zoom=crop.zoom||1;var bitmap=getBitmap(imageElement,orientation,crop.flip);var imageSize={width:bitmap.width,height:bitmap.height};var aspectRatio=crop.aspectRatio||imageSize.height/imageSize.width;var canvasSize=calculateCanvasSize2(imageSize,aspectRatio,zoom);if(canvasMemoryLimit){var requiredMemory=canvasSize.width*canvasSize.height;if(requiredMemory>canvasMemoryLimit){var scalar=Math.sqrt(canvasMemoryLimit)/Math.sqrt(requiredMemory);imageSize.width=Math.floor(imageSize.width*scalar);imageSize.height=Math.floor(imageSize.height*scalar);canvasSize=calculateCanvasSize2(imageSize,aspectRatio,zoom);}}var canvas=document.createElement("canvas");var canvasCenter={x:canvasSize.width*0.5,y:canvasSize.height*0.5};var stage={x:0,y:0,width:canvasSize.width,height:canvasSize.height,center:canvasCenter};var shouldLimit=typeof crop.scaleToFit==="undefined"||crop.scaleToFit;var scale=zoom*getImageRectZoomFactor2(imageSize,getCenteredCropRect2(stage,aspectRatio),crop.rotation,shouldLimit?crop.center:{x:0.5,y:0.5});canvas.width=Math.round(canvasSize.width/scale);canvas.height=Math.round(canvasSize.height/scale);canvasCenter.x/=scale;canvasCenter.y/=scale;var imageOffset={x:canvasCenter.x-imageSize.width*(crop.center?crop.center.x:0.5),y:canvasCenter.y-imageSize.height*(crop.center?crop.center.y:0.5)};var ctx=canvas.getContext("2d");if(background){ctx.fillStyle=background;ctx.fillRect(0,0,canvas.width,canvas.height);}ctx.translate(canvasCenter.x,canvasCenter.y);ctx.rotate(crop.rotation||0);ctx.drawImage(bitmap,imageOffset.x-canvasCenter.x,imageOffset.y-canvasCenter.y,imageSize.width,imageSize.height);var imageData=ctx.getImageData(0,0,canvas.width,canvas.height);canvasRelease(canvas);return imageData;};var IS_BROWSER3=function(){return typeof window!=="undefined"&&typeof window.document!=="undefined";}();if(IS_BROWSER3){if(!HTMLCanvasElement.prototype.toBlob){Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function value(callback,type,quality){var dataURL=this.toDataURL(type,quality).split(",")[1];setTimeout(function(){var binStr=atob(dataURL);var len=binStr.length;var arr=new Uint8Array(len);for(var i=0;i<len;i++){arr[i]=binStr.charCodeAt(i);}callback(new Blob([arr],{type:type||"image/png"}));});}});}}var canvasToBlob=function canvasToBlob(canvas,options2){var beforeCreateBlob=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;return new Promise(function(resolve){var promisedImage=beforeCreateBlob?beforeCreateBlob(canvas):canvas;Promise.resolve(promisedImage).then(function(canvas2){canvas2.toBlob(resolve,options2.type,options2.quality);});});};var vectorMultiply2=function vectorMultiply2(v,amount){return createVector$12(v.x*amount,v.y*amount);};var vectorAdd2=function vectorAdd2(a2,b){return createVector$12(a2.x+b.x,a2.y+b.y);};var vectorNormalize2=function vectorNormalize2(v){var l=Math.sqrt(v.x*v.x+v.y*v.y);if(l===0){return{x:0,y:0};}return createVector$12(v.x/l,v.y/l);};var vectorRotate2=function vectorRotate2(v,radians,origin){var cos=Math.cos(radians);var sin=Math.sin(radians);var t2=createVector$12(v.x-origin.x,v.y-origin.y);return createVector$12(origin.x+cos*t2.x-sin*t2.y,origin.y+sin*t2.x+cos*t2.y);};var createVector$12=function createVector$12(){var x=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var y=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return{x:x,y:y};};var getMarkupValue2=function getMarkupValue2(value,size){var scalar=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var axis=arguments.length>3?arguments[3]:undefined;if(typeof value==="string"){return parseFloat(value)*scalar;}if(typeof value==="number"){return value*(axis?size[axis]:Math.min(size.width,size.height));}return;};var getMarkupStyles2=function getMarkupStyles2(markup,size,scale){var lineStyle=markup.borderStyle||markup.lineStyle||"solid";var fill=markup.backgroundColor||markup.fontColor||"transparent";var stroke=markup.borderColor||markup.lineColor||"transparent";var strokeWidth=getMarkupValue2(markup.borderWidth||markup.lineWidth,size,scale);var lineCap=markup.lineCap||"round";var lineJoin=markup.lineJoin||"round";var dashes=typeof lineStyle==="string"?"":lineStyle.map(function(v){return getMarkupValue2(v,size,scale);}).join(",");var opacity=markup.opacity||1;return{"stroke-linecap":lineCap,"stroke-linejoin":lineJoin,"stroke-width":strokeWidth||0,"stroke-dasharray":dashes,stroke:stroke,fill:fill,opacity:opacity};};var isDefined3=function isDefined3(value){return value!=null;};var getMarkupRect2=function getMarkupRect2(rect,size){var scalar=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var left=getMarkupValue2(rect.x,size,scalar,"width")||getMarkupValue2(rect.left,size,scalar,"width");var top=getMarkupValue2(rect.y,size,scalar,"height")||getMarkupValue2(rect.top,size,scalar,"height");var width=getMarkupValue2(rect.width,size,scalar,"width");var height=getMarkupValue2(rect.height,size,scalar,"height");var right=getMarkupValue2(rect.right,size,scalar,"width");var bottom=getMarkupValue2(rect.bottom,size,scalar,"height");if(!isDefined3(top)){if(isDefined3(height)&&isDefined3(bottom)){top=size.height-height-bottom;}else{top=bottom;}}if(!isDefined3(left)){if(isDefined3(width)&&isDefined3(right)){left=size.width-width-right;}else{left=right;}}if(!isDefined3(width)){if(isDefined3(left)&&isDefined3(right)){width=size.width-left-right;}else{width=0;}}if(!isDefined3(height)){if(isDefined3(top)&&isDefined3(bottom)){height=size.height-top-bottom;}else{height=0;}}return{x:left||0,y:top||0,width:width||0,height:height||0};};var pointsToPathShape2=function pointsToPathShape2(points){return points.map(function(point,index){return"".concat(index===0?"M":"L"," ").concat(point.x," ").concat(point.y);}).join(" ");};var setAttributes2=function setAttributes2(element,attr2){return Object.keys(attr2).forEach(function(key){return element.setAttribute(key,attr2[key]);});};var ns3="http://www.w3.org/2000/svg";var svg2=function svg2(tag,attr2){var element=document.createElementNS(ns3,tag);if(attr2){setAttributes2(element,attr2);}return element;};var updateRect3=function updateRect3(element){return setAttributes2(element,_objectSpread(_objectSpread({},element.rect),element.styles));};var updateEllipse2=function updateEllipse2(element){var cx=element.rect.x+element.rect.width*0.5;var cy=element.rect.y+element.rect.height*0.5;var rx=element.rect.width*0.5;var ry=element.rect.height*0.5;return setAttributes2(element,_objectSpread({cx:cx,cy:cy,rx:rx,ry:ry},element.styles));};var IMAGE_FIT_STYLE2={contain:"xMidYMid meet",cover:"xMidYMid slice"};var updateImage2=function updateImage2(element,markup){setAttributes2(element,_objectSpread(_objectSpread(_objectSpread({},element.rect),element.styles),{},{preserveAspectRatio:IMAGE_FIT_STYLE2[markup.fit]||"none"}));};var TEXT_ANCHOR2={left:"start",center:"middle",right:"end"};var updateText2=function updateText2(element,markup,size,scale){var fontSize=getMarkupValue2(markup.fontSize,size,scale);var fontFamily=markup.fontFamily||"sans-serif";var fontWeight=markup.fontWeight||"normal";var textAlign=TEXT_ANCHOR2[markup.textAlign]||"start";setAttributes2(element,_objectSpread(_objectSpread(_objectSpread({},element.rect),element.styles),{},{"stroke-width":0,"font-weight":fontWeight,"font-size":fontSize,"font-family":fontFamily,"text-anchor":textAlign}));if(element.text!==markup.text){element.text=markup.text;element.textContent=markup.text.length?markup.text:" ";}};var updateLine2=function updateLine2(element,markup,size,scale){setAttributes2(element,_objectSpread(_objectSpread(_objectSpread({},element.rect),element.styles),{},{fill:"none"}));var line=element.childNodes[0];var begin=element.childNodes[1];var end=element.childNodes[2];var origin=element.rect;var target={x:element.rect.x+element.rect.width,y:element.rect.y+element.rect.height};setAttributes2(line,{x1:origin.x,y1:origin.y,x2:target.x,y2:target.y});if(!markup.lineDecoration)return;begin.style.display="none";end.style.display="none";var v=vectorNormalize2({x:target.x-origin.x,y:target.y-origin.y});var l=getMarkupValue2(0.05,size,scale);if(markup.lineDecoration.indexOf("arrow-begin")!==-1){var arrowBeginRotationPoint=vectorMultiply2(v,l);var arrowBeginCenter=vectorAdd2(origin,arrowBeginRotationPoint);var arrowBeginA=vectorRotate2(origin,2,arrowBeginCenter);var arrowBeginB=vectorRotate2(origin,-2,arrowBeginCenter);setAttributes2(begin,{style:"display:block;",d:"M".concat(arrowBeginA.x,",").concat(arrowBeginA.y," L").concat(origin.x,",").concat(origin.y," L").concat(arrowBeginB.x,",").concat(arrowBeginB.y)});}if(markup.lineDecoration.indexOf("arrow-end")!==-1){var arrowEndRotationPoint=vectorMultiply2(v,-l);var arrowEndCenter=vectorAdd2(target,arrowEndRotationPoint);var arrowEndA=vectorRotate2(target,2,arrowEndCenter);var arrowEndB=vectorRotate2(target,-2,arrowEndCenter);setAttributes2(end,{style:"display:block;",d:"M".concat(arrowEndA.x,",").concat(arrowEndA.y," L").concat(target.x,",").concat(target.y," L").concat(arrowEndB.x,",").concat(arrowEndB.y)});}};var updatePath2=function updatePath2(element,markup,size,scale){setAttributes2(element,_objectSpread(_objectSpread({},element.styles),{},{fill:"none",d:pointsToPathShape2(markup.points.map(function(point){return{x:getMarkupValue2(point.x,size,scale,"width"),y:getMarkupValue2(point.y,size,scale,"height")};}))}));};var createShape2=function createShape2(node){return function(markup){return svg2(node,{id:markup.id});};};var createImage2=function createImage2(markup){var shape=svg2("image",{id:markup.id,"stroke-linecap":"round","stroke-linejoin":"round",opacity:"0"});shape.onload=function(){shape.setAttribute("opacity",markup.opacity||1);};shape.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",markup.src);return shape;};var createLine2=function createLine2(markup){var shape=svg2("g",{id:markup.id,"stroke-linecap":"round","stroke-linejoin":"round"});var line=svg2("line");shape.appendChild(line);var begin=svg2("path");shape.appendChild(begin);var end=svg2("path");shape.appendChild(end);return shape;};var CREATE_TYPE_ROUTES2={image:createImage2,rect:createShape2("rect"),ellipse:createShape2("ellipse"),text:createShape2("text"),path:createShape2("path"),line:createLine2};var UPDATE_TYPE_ROUTES2={rect:updateRect3,ellipse:updateEllipse2,image:updateImage2,text:updateText2,path:updatePath2,line:updateLine2};var createMarkupByType2=function createMarkupByType2(type,markup){return CREATE_TYPE_ROUTES2[type](markup);};var updateMarkupByType2=function updateMarkupByType2(element,type,markup,size,scale){if(type!=="path"){element.rect=getMarkupRect2(markup,size,scale);}element.styles=getMarkupStyles2(markup,size,scale);UPDATE_TYPE_ROUTES2[type](element,markup,size,scale);};var sortMarkupByZIndex2=function sortMarkupByZIndex2(a2,b){if(a2[1].zIndex>b[1].zIndex){return 1;}if(a2[1].zIndex<b[1].zIndex){return-1;}return 0;};var cropSVG=function cropSVG(blob2){var crop=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var markup=arguments.length>2?arguments[2]:undefined;var options2=arguments.length>3?arguments[3]:undefined;return new Promise(function(resolve){var _options2$background2=options2.background,background=_options2$background2===void 0?null:_options2$background2;var fr=new FileReader();fr.onloadend=function(){var text2=fr.result;var original=document.createElement("div");original.style.cssText="position:absolute;pointer-events:none;width:0;height:0;visibility:hidden;";original.innerHTML=text2;var originalNode=original.querySelector("svg");document.body.appendChild(original);var bBox=originalNode.getBBox();original.parentNode.removeChild(original);var titleNode=original.querySelector("title");var viewBoxAttribute=originalNode.getAttribute("viewBox")||"";var widthAttribute=originalNode.getAttribute("width")||"";var heightAttribute=originalNode.getAttribute("height")||"";var width=parseFloat(widthAttribute)||null;var height=parseFloat(heightAttribute)||null;var widthUnits=(widthAttribute.match(/[a-z]+/)||[])[0]||"";var heightUnits=(heightAttribute.match(/[a-z]+/)||[])[0]||"";var viewBoxList=viewBoxAttribute.split(" ").map(parseFloat);var viewBox=viewBoxList.length?{x:viewBoxList[0],y:viewBoxList[1],width:viewBoxList[2],height:viewBoxList[3]}:bBox;var imageWidth=width!=null?width:viewBox.width;var imageHeight=height!=null?height:viewBox.height;originalNode.style.overflow="visible";originalNode.setAttribute("width",imageWidth);originalNode.setAttribute("height",imageHeight);var markupSVG="";if(markup&&markup.length){var size={width:imageWidth,height:imageHeight};markupSVG=markup.sort(sortMarkupByZIndex2).reduce(function(prev,shape){var el=createMarkupByType2(shape[0],shape[1]);updateMarkupByType2(el,shape[0],shape[1],size);el.removeAttribute("id");if(el.getAttribute("opacity")===1){el.removeAttribute("opacity");}return prev+"\n"+el.outerHTML+"\n";},"");markupSVG="\n\n<g>".concat(markupSVG.replace(/&nbsp;/g," "),"</g>\n\n");}var aspectRatio=crop.aspectRatio||imageHeight/imageWidth;var canvasWidth=imageWidth;var canvasHeight=canvasWidth*aspectRatio;var shouldLimit=typeof crop.scaleToFit==="undefined"||crop.scaleToFit;var cropCenterX=crop.center?crop.center.x:0.5;var cropCenterY=crop.center?crop.center.y:0.5;var canvasZoomFactor=getImageRectZoomFactor2({width:imageWidth,height:imageHeight},getCenteredCropRect2({width:canvasWidth,height:canvasHeight},aspectRatio),crop.rotation,shouldLimit?{x:cropCenterX,y:cropCenterY}:{x:0.5,y:0.5});var scale=crop.zoom*canvasZoomFactor;var rotation=crop.rotation*(180/Math.PI);var canvasCenter={x:canvasWidth*0.5,y:canvasHeight*0.5};var imageOffset={x:canvasCenter.x-imageWidth*cropCenterX,y:canvasCenter.y-imageHeight*cropCenterY};var cropTransforms=["rotate(".concat(rotation," ").concat(canvasCenter.x," ").concat(canvasCenter.y,")"),"translate(".concat(canvasCenter.x," ").concat(canvasCenter.y,")"),"scale(".concat(scale,")"),"translate(".concat(-canvasCenter.x," ").concat(-canvasCenter.y,")"),"translate(".concat(imageOffset.x," ").concat(imageOffset.y,")")];var cropFlipHorizontal=crop.flip&&crop.flip.horizontal;var cropFlipVertical=crop.flip&&crop.flip.vertical;var flipTransforms=["scale(".concat(cropFlipHorizontal?-1:1," ").concat(cropFlipVertical?-1:1,")"),"translate(".concat(cropFlipHorizontal?-imageWidth:0," ").concat(cropFlipVertical?-imageHeight:0,")")];var transformed="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"".concat(canvasWidth).concat(widthUnits,"\" height=\"").concat(canvasHeight).concat(heightUnits,"\" \nviewBox=\"0 0 ").concat(canvasWidth," ").concat(canvasHeight,"\" ").concat(background?'style="background:'+background+'" ':"","\npreserveAspectRatio=\"xMinYMin\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nxmlns=\"http://www.w3.org/2000/svg\">\n<!-- Generated by PQINA - https://pqina.nl/ -->\n<title>").concat(titleNode?titleNode.textContent:"","</title>\n<g transform=\"").concat(cropTransforms.join(" "),"\">\n<g transform=\"").concat(flipTransforms.join(" "),"\">\n").concat(originalNode.outerHTML).concat(markupSVG,"\n</g>\n</g>\n</svg>");resolve(transformed);};fr.readAsText(blob2);});};var objectToImageData=function objectToImageData(obj){var imageData;try{imageData=new ImageData(obj.width,obj.height);}catch(e2){var canvas=document.createElement("canvas");imageData=canvas.getContext("2d").createImageData(obj.width,obj.height);}imageData.data.set(obj.data);return imageData;};var TransformWorker=function TransformWorker(){var TRANSFORMS={resize:resize,filter:filter};var applyTransforms=function applyTransforms(transforms2,imageData){transforms2.forEach(function(transform2){imageData=TRANSFORMS[transform2.type](imageData,transform2.data);});return imageData;};var transform=function transform(data3,cb){var transforms2=data3.transforms;var filterTransform=null;transforms2.forEach(function(transform2){if(transform2.type==="filter"){filterTransform=transform2;}});if(filterTransform){var resizeTransform=null;transforms2.forEach(function(transform2){if(transform2.type==="resize"){resizeTransform=transform2;}});if(resizeTransform){resizeTransform.data.matrix=filterTransform.data;transforms2=transforms2.filter(function(transform2){return transform2.type!=="filter";});}}cb(applyTransforms(transforms2,data3.imageData));};self.onmessage=function(e2){transform(e2.data.message,function(response){self.postMessage({id:e2.data.id,message:response},[response.data.buffer]);});};var br=1;var bg=1;var bb=1;function applyFilterMatrix(index,data3,m){var ir=data3[index]/255;var ig=data3[index+1]/255;var ib=data3[index+2]/255;var ia=data3[index+3]/255;var mr=ir*m[0]+ig*m[1]+ib*m[2]+ia*m[3]+m[4];var mg=ir*m[5]+ig*m[6]+ib*m[7]+ia*m[8]+m[9];var mb=ir*m[10]+ig*m[11]+ib*m[12]+ia*m[13]+m[14];var ma=ir*m[15]+ig*m[16]+ib*m[17]+ia*m[18]+m[19];var or=Math.max(0,mr*ma)+br*(1-ma);var og=Math.max(0,mg*ma)+bg*(1-ma);var ob=Math.max(0,mb*ma)+bb*(1-ma);data3[index]=Math.max(0,Math.min(1,or))*255;data3[index+1]=Math.max(0,Math.min(1,og))*255;data3[index+2]=Math.max(0,Math.min(1,ob))*255;}var identityMatrix=self.JSON.stringify([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]);function isIdentityMatrix(filter2){return self.JSON.stringify(filter2||[])===identityMatrix;}function filter(imageData,matrix){if(!matrix||isIdentityMatrix(matrix))return imageData;var data3=imageData.data;var l=data3.length;var m11=matrix[0];var m12=matrix[1];var m13=matrix[2];var m14=matrix[3];var m15=matrix[4];var m21=matrix[5];var m22=matrix[6];var m23=matrix[7];var m24=matrix[8];var m25=matrix[9];var m31=matrix[10];var m32=matrix[11];var m33=matrix[12];var m34=matrix[13];var m35=matrix[14];var m41=matrix[15];var m42=matrix[16];var m43=matrix[17];var m44=matrix[18];var m45=matrix[19];var index=0,r2=0,g=0,b=0,a2=0,mr=0,mg=0,mb=0,ma=0,or=0,og=0,ob=0;for(;index<l;index+=4){r2=data3[index]/255;g=data3[index+1]/255;b=data3[index+2]/255;a2=data3[index+3]/255;mr=r2*m11+g*m12+b*m13+a2*m14+m15;mg=r2*m21+g*m22+b*m23+a2*m24+m25;mb=r2*m31+g*m32+b*m33+a2*m34+m35;ma=r2*m41+g*m42+b*m43+a2*m44+m45;or=Math.max(0,mr*ma)+br*(1-ma);og=Math.max(0,mg*ma)+bg*(1-ma);ob=Math.max(0,mb*ma)+bb*(1-ma);data3[index]=Math.max(0,Math.min(1,or))*255;data3[index+1]=Math.max(0,Math.min(1,og))*255;data3[index+2]=Math.max(0,Math.min(1,ob))*255;}return imageData;}function resize(imageData,data3){var _data3$mode=data3.mode,mode=_data3$mode===void 0?"contain":_data3$mode,_data3$upscale=data3.upscale,upscale=_data3$upscale===void 0?false:_data3$upscale,width=data3.width,height=data3.height,matrix=data3.matrix;matrix=!matrix||isIdentityMatrix(matrix)?null:matrix;if(!width&&!height){return filter(imageData,matrix);}if(width===null){width=height;}else if(height===null){height=width;}if(mode!=="force"){var scalarWidth=width/imageData.width;var scalarHeight=height/imageData.height;var scalar=1;if(mode==="cover"){scalar=Math.max(scalarWidth,scalarHeight);}else if(mode==="contain"){scalar=Math.min(scalarWidth,scalarHeight);}if(scalar>1&&upscale===false){return filter(imageData,matrix);}width=imageData.width*scalar;height=imageData.height*scalar;}var originWidth=imageData.width;var originHeight=imageData.height;var targetWidth=Math.round(width);var targetHeight=Math.round(height);var inputData=imageData.data;var outputData=new Uint8ClampedArray(targetWidth*targetHeight*4);var ratioWidth=originWidth/targetWidth;var ratioHeight=originHeight/targetHeight;var ratioWidthHalf=Math.ceil(ratioWidth*0.5);var ratioHeightHalf=Math.ceil(ratioHeight*0.5);for(var j=0;j<targetHeight;j++){for(var i=0;i<targetWidth;i++){var x2=(i+j*targetWidth)*4;var weight=0;var weights=0;var weightsAlpha=0;var r2=0;var g=0;var b=0;var a2=0;var centerY=(j+0.5)*ratioHeight;for(var yy=Math.floor(j*ratioHeight);yy<(j+1)*ratioHeight;yy++){var dy=Math.abs(centerY-(yy+0.5))/ratioHeightHalf;var centerX=(i+0.5)*ratioWidth;var w0=dy*dy;for(var xx=Math.floor(i*ratioWidth);xx<(i+1)*ratioWidth;xx++){var dx=Math.abs(centerX-(xx+0.5))/ratioWidthHalf;var w=Math.sqrt(w0+dx*dx);if(w>=-1&&w<=1){weight=2*w*w*w-3*w*w+1;if(weight>0){dx=4*(xx+yy*originWidth);var ref=inputData[dx+3];a2+=weight*ref;weightsAlpha+=weight;if(ref<255){weight=weight*ref/250;}r2+=weight*inputData[dx];g+=weight*inputData[dx+1];b+=weight*inputData[dx+2];weights+=weight;}}}}outputData[x2]=r2/weights;outputData[x2+1]=g/weights;outputData[x2+2]=b/weights;outputData[x2+3]=a2/weightsAlpha;matrix&&applyFilterMatrix(x2,outputData,matrix);}}return{data:outputData,width:targetWidth,height:targetHeight};}};var correctOrientation=function correctOrientation(view,offset){if(view.getUint32(offset+4,false)!==1165519206)return;offset+=4;var intelByteAligned=view.getUint16(offset+=6,false)===18761;offset+=view.getUint32(offset+4,intelByteAligned);var tags=view.getUint16(offset,intelByteAligned);offset+=2;for(var i=0;i<tags;i++){if(view.getUint16(offset+i*12,intelByteAligned)===274){view.setUint16(offset+i*12+8,1,intelByteAligned);return true;}}return false;};var readData=function readData(data3){var view=new DataView(data3);if(view.getUint16(0)!==65496)return null;var offset=2;var marker;var markerLength;var orientationCorrected=false;while(offset<view.byteLength){marker=view.getUint16(offset,false);markerLength=view.getUint16(offset+2,false)+2;var isData=marker>=65504&&marker<=65519||marker===65534;if(!isData){break;}if(!orientationCorrected){orientationCorrected=correctOrientation(view,offset,markerLength);}if(offset+markerLength>view.byteLength){break;}offset+=markerLength;}return data3.slice(0,offset);};var getImageHead=function getImageHead(file2){return new Promise(function(resolve){var reader=new FileReader();reader.onload=function(){return resolve(readData(reader.result)||null);};reader.readAsArrayBuffer(file2.slice(0,256*1024));});};var getBlobBuilder2=function getBlobBuilder2(){return window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;};var createBlob2=function createBlob2(arrayBuffer,mimeType){var BB=getBlobBuilder2();if(BB){var bb=new BB();bb.append(arrayBuffer);return bb.getBlob(mimeType);}return new Blob([arrayBuffer],{type:mimeType});};var getUniqueId2=function getUniqueId2(){return Math.random().toString(36).substr(2,9);};var createWorker2=function createWorker2(fn2){var workerBlob=new Blob(["(",fn2.toString(),")()"],{type:"application/javascript"});var workerURL=URL.createObjectURL(workerBlob);var worker=new Worker(workerURL);var trips=[];return{transfer:function transfer(){},post:function post(message,cb,transferList){var id=getUniqueId2();trips[id]=cb;worker.onmessage=function(e2){var cb2=trips[e2.data.id];if(!cb2)return;cb2(e2.data.message);delete trips[e2.data.id];};worker.postMessage({id:id,message:message},transferList);},terminate:function terminate(){worker.terminate();URL.revokeObjectURL(workerURL);}};};var loadImage3=function loadImage3(url){return new Promise(function(resolve,reject){var img=new Image();img.onload=function(){resolve(img);};img.onerror=function(e2){reject(e2);};img.src=url;});};var chain=function chain(funcs){return funcs.reduce(function(promise,func){return promise.then(function(result){return func().then(Array.prototype.concat.bind(result));});},Promise.resolve([]));};var canvasApplyMarkup=function canvasApplyMarkup(canvas,markup){return new Promise(function(resolve){var size={width:canvas.width,height:canvas.height};var ctx=canvas.getContext("2d");var drawers=markup.sort(sortMarkupByZIndex2).map(function(item2){return function(){return new Promise(function(resolve2){var result=TYPE_DRAW_ROUTES[item2[0]](ctx,size,item2[1],resolve2);if(result)resolve2();});};});chain(drawers).then(function(){return resolve(canvas);});});};var applyMarkupStyles=function applyMarkupStyles(ctx,styles3){ctx.beginPath();ctx.lineCap=styles3["stroke-linecap"];ctx.lineJoin=styles3["stroke-linejoin"];ctx.lineWidth=styles3["stroke-width"];if(styles3["stroke-dasharray"].length){ctx.setLineDash(styles3["stroke-dasharray"].split(","));}ctx.fillStyle=styles3["fill"];ctx.strokeStyle=styles3["stroke"];ctx.globalAlpha=styles3.opacity||1;};var drawMarkupStyles=function drawMarkupStyles(ctx){ctx.fill();ctx.stroke();ctx.globalAlpha=1;};var drawRect=function drawRect(ctx,size,markup){var rect=getMarkupRect2(markup,size);var styles3=getMarkupStyles2(markup,size);applyMarkupStyles(ctx,styles3);ctx.rect(rect.x,rect.y,rect.width,rect.height);drawMarkupStyles(ctx,styles3);return true;};var drawEllipse=function drawEllipse(ctx,size,markup){var rect=getMarkupRect2(markup,size);var styles3=getMarkupStyles2(markup,size);applyMarkupStyles(ctx,styles3);var x=rect.x,y=rect.y,w=rect.width,h=rect.height,kappa=0.5522848,ox=w/2*kappa,oy=h/2*kappa,xe=x+w,ye=y+h,xm=x+w/2,ym=y+h/2;ctx.moveTo(x,ym);ctx.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y);ctx.bezierCurveTo(xm+ox,y,xe,ym-oy,xe,ym);ctx.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye);ctx.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym);drawMarkupStyles(ctx,styles3);return true;};var drawImage=function drawImage(ctx,size,markup,done){var rect=getMarkupRect2(markup,size);var styles3=getMarkupStyles2(markup,size);applyMarkupStyles(ctx,styles3);var image=new Image();var isCrossOriginImage=new URL(markup.src,window.location.href).origin!==window.location.origin;if(isCrossOriginImage)image.crossOrigin="";image.onload=function(){if(markup.fit==="cover"){var ar=rect.width/rect.height;var width=ar>1?image.width:image.height*ar;var height=ar>1?image.width/ar:image.height;var x=image.width*0.5-width*0.5;var y=image.height*0.5-height*0.5;ctx.drawImage(image,x,y,width,height,rect.x,rect.y,rect.width,rect.height);}else if(markup.fit==="contain"){var scalar=Math.min(rect.width/image.width,rect.height/image.height);var _width=scalar*image.width;var _height=scalar*image.height;var _x=rect.x+rect.width*0.5-_width*0.5;var _y=rect.y+rect.height*0.5-_height*0.5;ctx.drawImage(image,0,0,image.width,image.height,_x,_y,_width,_height);}else{ctx.drawImage(image,0,0,image.width,image.height,rect.x,rect.y,rect.width,rect.height);}drawMarkupStyles(ctx,styles3);done();};image.src=markup.src;};var drawText=function drawText(ctx,size,markup){var rect=getMarkupRect2(markup,size);var styles3=getMarkupStyles2(markup,size);applyMarkupStyles(ctx,styles3);var fontSize=getMarkupValue2(markup.fontSize,size);var fontFamily=markup.fontFamily||"sans-serif";var fontWeight=markup.fontWeight||"normal";var textAlign=markup.textAlign||"left";ctx.font="".concat(fontWeight," ").concat(fontSize,"px ").concat(fontFamily);ctx.textAlign=textAlign;ctx.fillText(markup.text,rect.x,rect.y);drawMarkupStyles(ctx,styles3);return true;};var drawPath=function drawPath(ctx,size,markup){var styles3=getMarkupStyles2(markup,size);applyMarkupStyles(ctx,styles3);ctx.beginPath();var points=markup.points.map(function(point){return{x:getMarkupValue2(point.x,size,1,"width"),y:getMarkupValue2(point.y,size,1,"height")};});ctx.moveTo(points[0].x,points[0].y);var l=points.length;for(var i=1;i<l;i++){ctx.lineTo(points[i].x,points[i].y);}drawMarkupStyles(ctx,styles3);return true;};var drawLine=function drawLine(ctx,size,markup){var rect=getMarkupRect2(markup,size);var styles3=getMarkupStyles2(markup,size);applyMarkupStyles(ctx,styles3);ctx.beginPath();var origin={x:rect.x,y:rect.y};var target={x:rect.x+rect.width,y:rect.y+rect.height};ctx.moveTo(origin.x,origin.y);ctx.lineTo(target.x,target.y);var v=vectorNormalize2({x:target.x-origin.x,y:target.y-origin.y});var l=0.04*Math.min(size.width,size.height);if(markup.lineDecoration.indexOf("arrow-begin")!==-1){var arrowBeginRotationPoint=vectorMultiply2(v,l);var arrowBeginCenter=vectorAdd2(origin,arrowBeginRotationPoint);var arrowBeginA=vectorRotate2(origin,2,arrowBeginCenter);var arrowBeginB=vectorRotate2(origin,-2,arrowBeginCenter);ctx.moveTo(arrowBeginA.x,arrowBeginA.y);ctx.lineTo(origin.x,origin.y);ctx.lineTo(arrowBeginB.x,arrowBeginB.y);}if(markup.lineDecoration.indexOf("arrow-end")!==-1){var arrowEndRotationPoint=vectorMultiply2(v,-l);var arrowEndCenter=vectorAdd2(target,arrowEndRotationPoint);var arrowEndA=vectorRotate2(target,2,arrowEndCenter);var arrowEndB=vectorRotate2(target,-2,arrowEndCenter);ctx.moveTo(arrowEndA.x,arrowEndA.y);ctx.lineTo(target.x,target.y);ctx.lineTo(arrowEndB.x,arrowEndB.y);}drawMarkupStyles(ctx,styles3);return true;};var TYPE_DRAW_ROUTES={rect:drawRect,ellipse:drawEllipse,image:drawImage,text:drawText,line:drawLine,path:drawPath};var imageDataToCanvas=function imageDataToCanvas(imageData){var image=document.createElement("canvas");image.width=imageData.width;image.height=imageData.height;var ctx=image.getContext("2d");ctx.putImageData(imageData,0,0);return image;};var transformImage=function transformImage(file2,instructions){var options2=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return new Promise(function(resolve,reject){if(!file2||!isImage$1(file2))return reject({status:"not an image file",file:file2});var stripImageHead=options2.stripImageHead,beforeCreateBlob=options2.beforeCreateBlob,afterCreateBlob=options2.afterCreateBlob,canvasMemoryLimit=options2.canvasMemoryLimit;var crop=instructions.crop,size=instructions.size,filter=instructions.filter,markup=instructions.markup,output=instructions.output;var orientation=instructions.image&&instructions.image.orientation?Math.max(1,Math.min(8,instructions.image.orientation)):null;var qualityAsPercentage=output&&output.quality;var quality=qualityAsPercentage===null?null:qualityAsPercentage/100;var type=output&&output.type||null;var background=output&&output.background||null;var transforms2=[];if(size&&(typeof size.width==="number"||typeof size.height==="number")){transforms2.push({type:"resize",data:size});}if(filter&&filter.length===20){transforms2.push({type:"filter",data:filter});}var resolveWithBlob=function resolveWithBlob(blob2){var promisedBlob=afterCreateBlob?afterCreateBlob(blob2):blob2;Promise.resolve(promisedBlob).then(resolve);};var toBlob=function toBlob(imageData,options3){var canvas=imageDataToCanvas(imageData);var promisedCanvas=markup.length?canvasApplyMarkup(canvas,markup):canvas;Promise.resolve(promisedCanvas).then(function(canvas2){canvasToBlob(canvas2,options3,beforeCreateBlob).then(function(blob2){canvasRelease(canvas2);if(stripImageHead)return resolveWithBlob(blob2);getImageHead(file2).then(function(imageHead){if(imageHead!==null){blob2=new Blob([imageHead,blob2.slice(20)],{type:blob2.type});}resolveWithBlob(blob2);});})["catch"](reject);});};if(/svg/.test(file2.type)&&type===null){return cropSVG(file2,crop,markup,{background:background}).then(function(text2){resolve(createBlob2(text2,"image/svg+xml"));});}var url=URL.createObjectURL(file2);loadImage3(url).then(function(image){URL.revokeObjectURL(url);var imageData=imageToImageData(image,orientation,crop,{canvasMemoryLimit:canvasMemoryLimit,background:background});var outputFormat={quality:quality,type:type||file2.type};if(!transforms2.length){return toBlob(imageData,outputFormat);}var worker=createWorker2(TransformWorker);worker.post({transforms:transforms2,imageData:imageData},function(response){toBlob(objectToImageData(response),outputFormat);worker.terminate();},[imageData.data.buffer]);})["catch"](reject);});};var MARKUP_RECT2=["x","y","left","top","right","bottom","width","height"];var toOptionalFraction2=function toOptionalFraction2(value){return typeof value==="string"&&/%/.test(value)?parseFloat(value)/100:value;};var prepareMarkup2=function prepareMarkup2(markup){var _markup3=_slicedToArray2(markup,2),type=_markup3[0],props=_markup3[1];var rect=props.points?{}:MARKUP_RECT2.reduce(function(prev,curr){prev[curr]=toOptionalFraction2(props[curr]);return prev;},{});return[type,_objectSpread(_objectSpread({zIndex:0},props),rect)];};var getImageSize3=function getImageSize3(file2){return new Promise(function(resolve,reject){var imageElement=new Image();imageElement.src=URL.createObjectURL(file2);var measure=function measure(){var width=imageElement.naturalWidth;var height=imageElement.naturalHeight;var hasSize=width&&height;if(!hasSize)return;URL.revokeObjectURL(imageElement.src);clearInterval(intervalId);resolve({width:width,height:height});};imageElement.onerror=function(err){URL.revokeObjectURL(imageElement.src);clearInterval(intervalId);reject(err);};var intervalId=setInterval(measure,1);measure();});};if(typeof window!=="undefined"&&typeof window.document!=="undefined"){if(!HTMLCanvasElement.prototype.toBlob){Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function value(cb,type,quality){var canvas=this;setTimeout(function(){var dataURL=canvas.toDataURL(type,quality).split(",")[1];var binStr=atob(dataURL);var index=binStr.length;var data3=new Uint8Array(index);while(index--){data3[index]=binStr.charCodeAt(index);}cb(new Blob([data3],{type:type||"image/png"}));});}});}}var isBrowser8=typeof window!=="undefined"&&typeof window.document!=="undefined";var isIOS=isBrowser8&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;var plugin7=function plugin7(_ref162){var addFilter2=_ref162.addFilter,utils=_ref162.utils;var Type2=utils.Type,forin2=utils.forin,getFileFromBlob2=utils.getFileFromBlob,isFile2=utils.isFile;var TRANSFORM_LIST=["crop","resize","filter","markup","output"];var createVariantCreator=function createVariantCreator(updateMetadata){return function(transform,file2,metadata){return transform(file2,updateMetadata?updateMetadata(metadata):metadata);};};var isDefaultCrop=function isDefaultCrop(crop){return crop.aspectRatio===null&&crop.rotation===0&&crop.zoom===1&&crop.center&&crop.center.x===0.5&&crop.center.y===0.5&&crop.flip&&crop.flip.horizontal===false&&crop.flip.vertical===false;};addFilter2("SHOULD_PREPARE_OUTPUT",function(shouldPrepareOutput,_ref163){var query=_ref163.query;return new Promise(function(resolve){resolve(!query("IS_ASYNC"));});});var shouldTransformFile=function shouldTransformFile(query,file2,item2){return new Promise(function(resolve){if(!query("GET_ALLOW_IMAGE_TRANSFORM")||item2.archived||!isFile2(file2)||!isImage3(file2)){return resolve(false);}getImageSize3(file2).then(function(){var fn2=query("GET_IMAGE_TRANSFORM_IMAGE_FILTER");if(fn2){var filterResult=fn2(file2);if(filterResult==null){return handleRevert(true);}if(typeof filterResult==="boolean"){return resolve(filterResult);}if(typeof filterResult.then==="function"){return filterResult.then(resolve);}}resolve(true);})["catch"](function(err){resolve(false);});});};addFilter2("DID_CREATE_ITEM",function(item2,_ref164){var query=_ref164.query,dispatch2=_ref164.dispatch;if(!query("GET_ALLOW_IMAGE_TRANSFORM"))return;item2.extend("requestPrepare",function(){return new Promise(function(resolve,reject){dispatch2("REQUEST_PREPARE_OUTPUT",{query:item2.id,item:item2,success:resolve,failure:reject},true);});});});addFilter2("PREPARE_OUTPUT",function(file2,_ref165){var query=_ref165.query,item2=_ref165.item;return new Promise(function(resolve){shouldTransformFile(query,file2,item2).then(function(shouldTransform){if(!shouldTransform)return resolve(file2);var variants=[];if(query("GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_ORIGINAL")){variants.push(function(){return new Promise(function(resolve2){resolve2({name:query("GET_IMAGE_TRANSFORM_VARIANTS_ORIGINAL_NAME"),file:file2});});});}if(query("GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_DEFAULT")){variants.push(function(transform2,file3,metadata){return new Promise(function(resolve2){transform2(file3,metadata).then(function(file4){return resolve2({name:query("GET_IMAGE_TRANSFORM_VARIANTS_DEFAULT_NAME"),file:file4});});});});}var variantsDefinition=query("GET_IMAGE_TRANSFORM_VARIANTS")||{};forin2(variantsDefinition,function(key,fn2){var createVariant=createVariantCreator(fn2);variants.push(function(transform2,file3,metadata){return new Promise(function(resolve2){createVariant(transform2,file3,metadata).then(function(file4){return resolve2({name:key,file:file4});});});});});var qualityAsPercentage=query("GET_IMAGE_TRANSFORM_OUTPUT_QUALITY");var qualityMode=query("GET_IMAGE_TRANSFORM_OUTPUT_QUALITY_MODE");var quality=qualityAsPercentage===null?null:qualityAsPercentage/100;var type=query("GET_IMAGE_TRANSFORM_OUTPUT_MIME_TYPE");var clientTransforms=query("GET_IMAGE_TRANSFORM_CLIENT_TRANSFORMS")||TRANSFORM_LIST;item2.setMetadata("output",{type:type,quality:quality,client:clientTransforms},true);var transform=function transform(file3,metadata){return new Promise(function(resolve2,reject){var filteredMetadata=_objectSpread({},metadata);Object.keys(filteredMetadata).filter(function(instruction){return instruction!=="exif";}).forEach(function(instruction){if(clientTransforms.indexOf(instruction)===-1){delete filteredMetadata[instruction];}});var resize=filteredMetadata.resize,exif=filteredMetadata.exif,output=filteredMetadata.output,crop=filteredMetadata.crop,filter=filteredMetadata.filter,markup=filteredMetadata.markup;var instructions={image:{orientation:exif?exif.orientation:null},output:output&&(output.type||typeof output.quality==="number"||output.background)?{type:output.type,quality:typeof output.quality==="number"?output.quality*100:null,background:output.background||query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR")||null}:void 0,size:resize&&(resize.size.width||resize.size.height)?_objectSpread({mode:resize.mode,upscale:resize.upscale},resize.size):void 0,crop:crop&&!isDefaultCrop(crop)?_objectSpread({},crop):void 0,markup:markup&&markup.length?markup.map(prepareMarkup2):[],filter:filter};if(instructions.output){var willChangeType=output.type?output.type!==file3.type:false;var canChangeQuality=/\/jpe?g$/.test(file3.type);var willChangeQuality=output.quality!==null?canChangeQuality&&qualityMode==="always":false;var willModifyImageData=!!(instructions.size||instructions.crop||instructions.filter||willChangeType||willChangeQuality);if(!willModifyImageData)return resolve2(file3);}var options2={beforeCreateBlob:query("GET_IMAGE_TRANSFORM_BEFORE_CREATE_BLOB"),afterCreateBlob:query("GET_IMAGE_TRANSFORM_AFTER_CREATE_BLOB"),canvasMemoryLimit:query("GET_IMAGE_TRANSFORM_CANVAS_MEMORY_LIMIT"),stripImageHead:query("GET_IMAGE_TRANSFORM_OUTPUT_STRIP_IMAGE_HEAD")};transformImage(file3,instructions,options2).then(function(blob2){var out=getFileFromBlob2(blob2,renameFileToMatchMimeType(file3.name,getValidOutputMimeType(blob2.type)));resolve2(out);})["catch"](reject);});};var variantPromises=variants.map(function(create2){return create2(transform,file2,item2.getMetadata());});Promise.all(variantPromises).then(function(files){resolve(files.length===1&&files[0].name===null?files[0].file:files);});});});});return{options:{allowImageTransform:[true,Type2.BOOLEAN],imageTransformImageFilter:[null,Type2.FUNCTION],imageTransformOutputMimeType:[null,Type2.STRING],imageTransformOutputQuality:[null,Type2.INT],imageTransformOutputStripImageHead:[true,Type2.BOOLEAN],imageTransformClientTransforms:[null,Type2.ARRAY],imageTransformOutputQualityMode:["always",Type2.STRING],imageTransformVariants:[null,Type2.OBJECT],imageTransformVariantsIncludeDefault:[true,Type2.BOOLEAN],imageTransformVariantsDefaultName:[null,Type2.STRING],imageTransformVariantsIncludeOriginal:[false,Type2.BOOLEAN],imageTransformVariantsOriginalName:["original_",Type2.STRING],imageTransformBeforeCreateBlob:[null,Type2.FUNCTION],imageTransformAfterCreateBlob:[null,Type2.FUNCTION],imageTransformCanvasMemoryLimit:[isBrowser8&&isIOS?4096*4096:null,Type2.INT],imageTransformCanvasBackgroundColor:[null,Type2.STRING]}};};if(isBrowser8){document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin7}));}var filepond_plugin_image_transform_esm_default=plugin7;// packages/forms/resources/js/components/file-upload.js
registerPlugin(filepond_plugin_file_validate_size_esm_default);registerPlugin(filepond_plugin_file_validate_type_esm_default);registerPlugin(filepond_plugin_image_crop_esm_default);registerPlugin(filepond_plugin_image_exif_orientation_esm_default);registerPlugin(filepond_plugin_image_preview_esm_default);registerPlugin(filepond_plugin_image_resize_esm_default);registerPlugin(filepond_plugin_image_transform_esm_default);var file_upload_default=function file_upload_default(Alpine){Alpine.data("fileUploadFormComponent",function(_ref166){var acceptedFileTypes=_ref166.acceptedFileTypes,canReorder=_ref166.canReorder,deleteUploadedFileUsing=_ref166.deleteUploadedFileUsing,getUploadedFileUrlUsing=_ref166.getUploadedFileUrlUsing,imageCropAspectRatio=_ref166.imageCropAspectRatio,imagePreviewHeight=_ref166.imagePreviewHeight,imageResizeTargetHeight=_ref166.imageResizeTargetHeight,imageResizeTargetWidth=_ref166.imageResizeTargetWidth,loadingIndicatorPosition=_ref166.loadingIndicatorPosition,panelAspectRatio=_ref166.panelAspectRatio,panelLayout=_ref166.panelLayout,placeholder=_ref166.placeholder,maxSize=_ref166.maxSize,minSize=_ref166.minSize,removeUploadedFileButtonPosition=_ref166.removeUploadedFileButtonPosition,removeUploadedFileUsing=_ref166.removeUploadedFileUsing,reorderUploadedFilesUsing=_ref166.reorderUploadedFilesUsing,shouldAppendFiles=_ref166.shouldAppendFiles,state2=_ref166.state,uploadButtonPosition=_ref166.uploadButtonPosition,uploadProgressIndicatorPosition=_ref166.uploadProgressIndicatorPosition,uploadUsing=_ref166.uploadUsing;return{fileKeyIndex:{},files:[],pond:null,shouldUpdateState:true,state:state2,uploadedFileUrlIndex:{},init:function(){var _init=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(){var _this9=this;var _i2,_Object$entries,_Object$entries$_i,fileKey,file2,uploadedFileUrl;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_i2=0,_Object$entries=Object.entries(this.state);case 1:if(!(_i2<_Object$entries.length)){_context6.next=14;break;}_Object$entries$_i=_slicedToArray2(_Object$entries[_i2],2),fileKey=_Object$entries$_i[0],file2=_Object$entries$_i[1];if(!file2.startsWith("livewire-file:")){_context6.next=5;break;}return _context6.abrupt("continue",11);case 5:_context6.next=7;return this.getUploadedFileUrl(fileKey);case 7:uploadedFileUrl=_context6.sent;if(uploadedFileUrl){_context6.next=10;break;}return _context6.abrupt("continue",11);case 10:this.files.push({source:uploadedFileUrl,options:{type:"local"}});case 11:_i2++;_context6.next=1;break;case 14:this.pond=create$f(this.$refs.input,_objectSpread(_objectSpread({acceptedFileTypes:acceptedFileTypes,allowReorder:canReorder,credits:false,files:shouldAppendFiles?this.files:this.files.reverse(),imageCropAspectRatio:imageCropAspectRatio,imagePreviewHeight:imagePreviewHeight,imageResizeTargetHeight:imageResizeTargetHeight,imageResizeTargetWidth:imageResizeTargetWidth,itemInsertLocation:shouldAppendFiles?"after":"before"},placeholder&&{labelIdle:placeholder}),{},{maxFileSize:maxSize,minFileSize:minSize,styleButtonProcessItemPosition:uploadButtonPosition,styleButtonRemoveItemPosition:removeUploadedFileButtonPosition,styleLoadIndicatorPosition:loadingIndicatorPosition,stylePanelAspectRatio:panelAspectRatio,stylePanelLayout:panelLayout,styleProgressIndicatorPosition:uploadProgressIndicatorPosition,server:{load:function(){var _load2=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(source,_load){var response,blob2;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return fetch(source);case 2:response=_context.sent;_context.next=5;return response.blob();case 5:blob2=_context.sent;_load(blob2);case 7:case"end":return _context.stop();}}},_callee);}));function load(_x2,_x3){return _load2.apply(this,arguments);}return load;}(),process:function process(fieldName,file2,metadata,load,error2,progress){_this9.shouldUpdateState=false;var fileKey=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(c2){return(c2^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c2/4).toString(16);});uploadUsing(fileKey,file2,function(fileKey2){_this9.shouldUpdateState=true;load(fileKey2);},error2,progress);},remove:function(){var _remove=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(source,load){var _this9$uploadedFileUr;var fileKey;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:fileKey=(_this9$uploadedFileUr=_this9.uploadedFileUrlIndex[source])!==null&&_this9$uploadedFileUr!==void 0?_this9$uploadedFileUr:null;if(fileKey){_context2.next=3;break;}return _context2.abrupt("return");case 3:_context2.next=5;return deleteUploadedFileUsing(fileKey);case 5:load();case 6:case"end":return _context2.stop();}}},_callee2);}));function remove(_x4,_x5){return _remove.apply(this,arguments);}return remove;}(),revert:function(){var _revert=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(uniqueFileId,load){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return removeUploadedFileUsing(uniqueFileId);case 2:load();case 3:case"end":return _context3.stop();}}},_callee3);}));function revert(_x6,_x7){return _revert.apply(this,arguments);}return revert;}()}}));this.$watch("state",/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(){var files,_i3,_Object$keys,_fileKey,_uploadedFileUrl;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(_this9.shouldUpdateState){_context4.next=2;break;}return _context4.abrupt("return");case 2:if(!Object.values(_this9.state).filter(function(file2){return file2.startsWith("livewire-file:");}).length){_context4.next=4;break;}return _context4.abrupt("return");case 4:files=[];_i3=0,_Object$keys=Object.keys(_this9.state);case 6:if(!(_i3<_Object$keys.length)){_context4.next=17;break;}_fileKey=_Object$keys[_i3];_context4.next=10;return _this9.getUploadedFileUrl(_fileKey);case 10:_uploadedFileUrl=_context4.sent;if(_uploadedFileUrl){_context4.next=13;break;}return _context4.abrupt("continue",14);case 13:files.push({source:_uploadedFileUrl,options:{type:"local"}});case 14:_i3++;_context4.next=6;break;case 17:_this9.pond.files=shouldAppendFiles?files:files.reverse();case 18:case"end":return _context4.stop();}}},_callee4);})));this.pond.on("reorderfiles",/*#__PURE__*/function(){var _ref168=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(files){var orderedFileKeys;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:orderedFileKeys=files.map(function(file2){var _this9$uploadedFileUr2;return file2.source instanceof File?file2.serverId:(_this9$uploadedFileUr2=_this9.uploadedFileUrlIndex[file2.source])!==null&&_this9$uploadedFileUr2!==void 0?_this9$uploadedFileUr2:null;}).filter(function(fileKey){return fileKey;});_context5.next=3;return reorderUploadedFilesUsing(shouldAppendFiles?orderedFileKeys:orderedFileKeys.reverse());case 3:case"end":return _context5.stop();}}},_callee5);}));return function(_x8){return _ref168.apply(this,arguments);};}());case 17:case"end":return _context6.stop();}}},_callee6,this);}));function init(){return _init.apply(this,arguments);}return init;}(),getUploadedFileUrl:function(){var _getUploadedFileUrl=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(fileKey){var _this$fileKeyIndex$fi;var uploadedFileUrl;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:uploadedFileUrl=(_this$fileKeyIndex$fi=this.fileKeyIndex[fileKey])!==null&&_this$fileKeyIndex$fi!==void 0?_this$fileKeyIndex$fi:null;if(!(uploadedFileUrl!==null)){_context7.next=3;break;}return _context7.abrupt("return",uploadedFileUrl);case 3:_context7.next=5;return getUploadedFileUrlUsing(fileKey);case 5:uploadedFileUrl=_context7.sent;this.uploadedFileUrlIndex[uploadedFileUrl]=fileKey;this.fileKeyIndex[fileKey]=uploadedFileUrl;return _context7.abrupt("return",uploadedFileUrl);case 9:case"end":return _context7.stop();}}},_callee7,this);}));function getUploadedFileUrl(_x9){return _getUploadedFileUrl.apply(this,arguments);}return getUploadedFileUrl;}()};});};// packages/forms/resources/js/components/key-value.js
var key_value_default=function key_value_default(Alpine){Alpine.data("keyValueFormComponent",function(_ref169){var state2=_ref169.state;return{state:state2,rows:[],shouldUpdateRows:true,init:function init(){var _this10=this;this.updateRows();if(this.rows.length<=0){this.addRow();}this.$watch("state",function(){if(!_this10.shouldUpdateRows){_this10.shouldUpdateRows=true;return;}_this10.updateRows();});},addRow:function addRow(){this.rows.push({key:"",value:""});this.updateState();},deleteRow:function deleteRow(index){this.rows.splice(index,1);if(this.rows.length<=0){this.addRow();}this.updateState();this.shouldUpdateRows=true;},updateRows:function updateRows(){var rows=[];for(var _i4=0,_Object$entries2=Object.entries((_this$state=this.state)!==null&&_this$state!==void 0?_this$state:{});_i4<_Object$entries2.length;_i4++){var _this$state;var _Object$entries2$_i=_slicedToArray2(_Object$entries2[_i4],2),key=_Object$entries2$_i[0],value=_Object$entries2$_i[1];rows.push({key:key,value:value});}this.rows=rows;},updateState:function updateState(){var state3={};this.rows.forEach(function(row){if(row.key===""||row.key===null){return;}state3[row.key]=row.value;});this.shouldUpdateRows=false;this.state=state3;}};});};// node_modules/@github/file-attachment-element/dist/index.js
var Attachment=/*#__PURE__*/function(){function Attachment(file2,directory){_classCallCheck2(this,Attachment);this.file=file2;this.directory=directory;this.state="pending";this.id=null;this.href=null;this.name=null;this.percent=0;}_createClass2(Attachment,[{key:"fullPath",get:function get(){return this.directory?"".concat(this.directory,"/").concat(this.file.name):this.file.name;}},{key:"isImage",value:function isImage(){return["image/gif","image/png","image/jpg","image/jpeg"].indexOf(this.file.type)>-1;}},{key:"saving",value:function saving(percent){if(this.state!=="pending"&&this.state!=="saving"){throw new Error("Unexpected transition from ".concat(this.state," to saving"));}this.state="saving";this.percent=percent;}},{key:"saved",value:function saved(attributes){var _a,_b,_c;if(this.state!=="pending"&&this.state!=="saving"){throw new Error("Unexpected transition from ".concat(this.state," to saved"));}this.state="saved";this.id=(_a=attributes===null||attributes===void 0?void 0:attributes.id)!==null&&_a!==void 0?_a:null;this.href=(_b=attributes===null||attributes===void 0?void 0:attributes.href)!==null&&_b!==void 0?_b:null;this.name=(_c=attributes===null||attributes===void 0?void 0:attributes.name)!==null&&_c!==void 0?_c:null;}},{key:"isPending",value:function isPending(){return this.state==="pending";}},{key:"isSaving",value:function isSaving(){return this.state==="saving";}},{key:"isSaved",value:function isSaved(){return this.state==="saved";}}],[{key:"traverse",value:function traverse(transfer,directory){return transferredFiles(transfer,directory);}},{key:"from",value:function from(files){var result=[];var _iterator3=_createForOfIteratorHelper(files),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var file2=_step3.value;if(file2 instanceof File){result.push(new Attachment(file2));}else if(file2 instanceof Attachment){result.push(file2);}else{throw new Error("Unexpected type");}}}catch(err){_iterator3.e(err);}finally{_iterator3.f();}return result;}}]);return Attachment;}();function transferredFiles(transfer,directory){if(directory&&isDirectory(transfer)){return traverse("",roots(transfer));}return Promise.resolve(visible(Array.from(transfer.files||[])).map(function(f){return new Attachment(f);}));}function hidden(file2){return file2.name.startsWith(".");}function visible(files){return Array.from(files).filter(function(file2){return!hidden(file2);});}function getFile(entry){return new Promise(function(resolve,reject){entry.file(resolve,reject);});}function getEntries(entry){return new Promise(function(resolve,reject){var result=[];var reader=entry.createReader();var read=function read(){reader.readEntries(function(entries){if(entries.length>0){result.push.apply(result,_toConsumableArray(entries));read();}else{resolve(result);}},reject);};read();});}function traverse(_x10,_x11){return _traverse.apply(this,arguments);}function _traverse(){_traverse=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee17(path,entries){var results,_iterator14,_step14,entry,file2;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee17$(_context17){while(1){switch(_context17.prev=_context17.next){case 0:results=[];_iterator14=_createForOfIteratorHelper(visible(entries));_context17.prev=2;_iterator14.s();case 4:if((_step14=_iterator14.n()).done){_context17.next=28;break;}entry=_step14.value;if(!entry.isDirectory){_context17.next=22;break;}_context17.t0=results.push;_context17.t1=results;_context17.t2=_toConsumableArray;_context17.t3=traverse;_context17.t4=entry.fullPath;_context17.next=14;return getEntries(entry);case 14:_context17.t5=_context17.sent;_context17.next=17;return(0,_context17.t3)(_context17.t4,_context17.t5);case 17:_context17.t6=_context17.sent;_context17.t7=(0,_context17.t2)(_context17.t6);_context17.t0.apply.call(_context17.t0,_context17.t1,_context17.t7);_context17.next=26;break;case 22:_context17.next=24;return getFile(entry);case 24:file2=_context17.sent;results.push(new Attachment(file2,path));case 26:_context17.next=4;break;case 28:_context17.next=33;break;case 30:_context17.prev=30;_context17.t8=_context17["catch"](2);_iterator14.e(_context17.t8);case 33:_context17.prev=33;_iterator14.f();return _context17.finish(33);case 36:return _context17.abrupt("return",results);case 37:case"end":return _context17.stop();}}},_callee17,null,[[2,30,33,36]]);}));return _traverse.apply(this,arguments);}function isDirectory(transfer){return transfer.items&&Array.from(transfer.items).some(function(item2){var entry=item2.webkitGetAsEntry&&item2.webkitGetAsEntry();return entry&&entry.isDirectory;});}function roots(transfer){return Array.from(transfer.items).map(function(item2){return item2.webkitGetAsEntry();}).filter(function(entry){return entry!=null;});}var FileAttachmentElement=/*#__PURE__*/function(_HTMLElement){_inherits2(FileAttachmentElement,_HTMLElement);var _super2=_createSuper2(FileAttachmentElement);function FileAttachmentElement(){_classCallCheck2(this,FileAttachmentElement);return _super2.apply(this,arguments);}_createClass2(FileAttachmentElement,[{key:"connectedCallback",value:function connectedCallback(){this.addEventListener("dragenter",onDragenter);this.addEventListener("dragover",onDragenter);this.addEventListener("dragleave",onDragleave);this.addEventListener("drop",onDrop);this.addEventListener("paste",onPaste);this.addEventListener("change",onChange);}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.removeEventListener("dragenter",onDragenter);this.removeEventListener("dragover",onDragenter);this.removeEventListener("dragleave",onDragleave);this.removeEventListener("drop",onDrop);this.removeEventListener("paste",onPaste);this.removeEventListener("change",onChange);}},{key:"directory",get:function get(){return this.hasAttribute("directory");},set:function set(value){if(value){this.setAttribute("directory","");}else{this.removeAttribute("directory");}}},{key:"attach",value:function(){var _attach=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(transferred){var attachments,accepted;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:if(!(transferred instanceof DataTransfer)){_context8.next=6;break;}_context8.next=3;return Attachment.traverse(transferred,this.directory);case 3:_context8.t0=_context8.sent;_context8.next=7;break;case 6:_context8.t0=Attachment.from(transferred);case 7:attachments=_context8.t0;accepted=this.dispatchEvent(new CustomEvent("file-attachment-accept",{bubbles:true,cancelable:true,detail:{attachments:attachments}}));if(accepted&&attachments.length){this.dispatchEvent(new CustomEvent("file-attachment-accepted",{bubbles:true,detail:{attachments:attachments}}));}case 10:case"end":return _context8.stop();}}},_callee8,this);}));function attach(_x12){return _attach.apply(this,arguments);}return attach;}()}]);return FileAttachmentElement;}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));function hasFile(transfer){return Array.from(transfer.types).indexOf("Files")>=0;}var dragging=null;function onDragenter(event){var target=event.currentTarget;if(dragging){clearTimeout(dragging);}dragging=window.setTimeout(function(){return target.removeAttribute("hover");},200);var transfer=event.dataTransfer;if(!transfer||!hasFile(transfer))return;transfer.dropEffect="copy";target.setAttribute("hover","");event.stopPropagation();event.preventDefault();}function onDragleave(event){if(event.dataTransfer){event.dataTransfer.dropEffect="none";}var target=event.currentTarget;target.removeAttribute("hover");event.stopPropagation();event.preventDefault();}function onDrop(event){var container=event.currentTarget;if(!(container instanceof FileAttachmentElement))return;container.removeAttribute("hover");var transfer=event.dataTransfer;if(!transfer||!hasFile(transfer))return;container.attach(transfer);event.stopPropagation();event.preventDefault();}var images2=/^image\/(gif|png|jpeg)$/;function pastedFile(items){var _iterator4=_createForOfIteratorHelper(items),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var item2=_step4.value;if(images2.test(item2.type)){return item2.getAsFile();}}}catch(err){_iterator4.e(err);}finally{_iterator4.f();}return null;}function onPaste(event){if(!event.clipboardData)return;if(!event.clipboardData.items)return;var container=event.currentTarget;if(!(container instanceof FileAttachmentElement))return;var file2=pastedFile(event.clipboardData.items);if(!file2)return;var files=[file2];container.attach(files);event.preventDefault();}function onChange(event){var container=event.currentTarget;if(!(container instanceof FileAttachmentElement))return;var input=event.target;if(!(input instanceof HTMLInputElement))return;var id=container.getAttribute("input");if(id&&input.id!==id)return;var files=input.files;if(!files||files.length===0)return;container.attach(files);input.value="";}if(!window.customElements.get("file-attachment")){window.FileAttachmentElement=FileAttachmentElement;window.customElements.define("file-attachment",FileAttachmentElement);}// node_modules/@github/markdown-toolbar-element/dist/index.js
var buttonSelectors=["[data-md-button]","md-header","md-bold","md-italic","md-quote","md-code","md-link","md-image","md-unordered-list","md-ordered-list","md-task-list","md-mention","md-ref","md-strikethrough"];function getButtons(toolbar){var els=[];var _iterator5=_createForOfIteratorHelper(toolbar.querySelectorAll(buttonSelectors.join(", "))),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var button=_step5.value;if(button.hidden||button.offsetWidth<=0&&button.offsetHeight<=0)continue;if(button.closest("markdown-toolbar")===toolbar)els.push(button);}}catch(err){_iterator5.e(err);}finally{_iterator5.f();}return els;}function keydown(fn2){return function(event){if(event.key===" "||event.key==="Enter"){event.preventDefault();fn2(event);}};}var styles2=new WeakMap();var MarkdownButtonElement=/*#__PURE__*/function(_HTMLElement2){_inherits2(MarkdownButtonElement,_HTMLElement2);var _super3=_createSuper2(MarkdownButtonElement);function MarkdownButtonElement(){var _this11;_classCallCheck2(this,MarkdownButtonElement);_this11=_super3.call(this);var apply=function apply(){var style=styles2.get(_assertThisInitialized2(_this11));if(!style)return;applyStyle(_assertThisInitialized2(_this11),style);};_this11.addEventListener("keydown",keydown(apply));_this11.addEventListener("click",apply);return _this11;}_createClass2(MarkdownButtonElement,[{key:"connectedCallback",value:function connectedCallback(){if(!this.hasAttribute("role")){this.setAttribute("role","button");}}},{key:"click",value:function click(){var style=styles2.get(this);if(!style)return;applyStyle(this,style);}}]);return MarkdownButtonElement;}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));var MarkdownHeaderButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen){_inherits2(MarkdownHeaderButtonElement,_MarkdownButtonElemen);var _super4=_createSuper2(MarkdownHeaderButtonElement);function MarkdownHeaderButtonElement(){var _this12;_classCallCheck2(this,MarkdownHeaderButtonElement);_this12=_super4.call(this);var level=parseInt(_this12.getAttribute("level")||"3",10);if(level<1||level>6){return _possibleConstructorReturn2(_this12);}var prefix="".concat("#".repeat(level)," ");styles2.set(_assertThisInitialized2(_this12),{prefix:prefix});return _this12;}return _createClass2(MarkdownHeaderButtonElement);}(MarkdownButtonElement);if(!window.customElements.get("md-header")){window.MarkdownHeaderButtonElement=MarkdownHeaderButtonElement;window.customElements.define("md-header",MarkdownHeaderButtonElement);}var MarkdownBoldButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen2){_inherits2(MarkdownBoldButtonElement,_MarkdownButtonElemen2);var _super5=_createSuper2(MarkdownBoldButtonElement);function MarkdownBoldButtonElement(){var _this13;_classCallCheck2(this,MarkdownBoldButtonElement);_this13=_super5.call(this);styles2.set(_assertThisInitialized2(_this13),{prefix:"**",suffix:"**",trimFirst:true});return _this13;}_createClass2(MarkdownBoldButtonElement,[{key:"connectedCallback",value:function connectedCallback(){_get5(_getPrototypeOf3(MarkdownBoldButtonElement.prototype),"connectedCallback",this).call(this);this.setAttribute("hotkey","b");}}]);return MarkdownBoldButtonElement;}(MarkdownButtonElement);if(!window.customElements.get("md-bold")){window.MarkdownBoldButtonElement=MarkdownBoldButtonElement;window.customElements.define("md-bold",MarkdownBoldButtonElement);}var MarkdownItalicButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen3){_inherits2(MarkdownItalicButtonElement,_MarkdownButtonElemen3);var _super6=_createSuper2(MarkdownItalicButtonElement);function MarkdownItalicButtonElement(){var _this14;_classCallCheck2(this,MarkdownItalicButtonElement);_this14=_super6.call(this);styles2.set(_assertThisInitialized2(_this14),{prefix:"_",suffix:"_",trimFirst:true});return _this14;}_createClass2(MarkdownItalicButtonElement,[{key:"connectedCallback",value:function connectedCallback(){_get5(_getPrototypeOf3(MarkdownItalicButtonElement.prototype),"connectedCallback",this).call(this);this.setAttribute("hotkey","i");}}]);return MarkdownItalicButtonElement;}(MarkdownButtonElement);if(!window.customElements.get("md-italic")){window.MarkdownItalicButtonElement=MarkdownItalicButtonElement;window.customElements.define("md-italic",MarkdownItalicButtonElement);}var MarkdownQuoteButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen4){_inherits2(MarkdownQuoteButtonElement,_MarkdownButtonElemen4);var _super7=_createSuper2(MarkdownQuoteButtonElement);function MarkdownQuoteButtonElement(){var _this15;_classCallCheck2(this,MarkdownQuoteButtonElement);_this15=_super7.call(this);styles2.set(_assertThisInitialized2(_this15),{prefix:"> ",multiline:true,surroundWithNewlines:true});return _this15;}_createClass2(MarkdownQuoteButtonElement,[{key:"connectedCallback",value:function connectedCallback(){_get5(_getPrototypeOf3(MarkdownQuoteButtonElement.prototype),"connectedCallback",this).call(this);this.setAttribute("hotkey",".");this.setAttribute("hotkey-requires-shift","true");}}]);return MarkdownQuoteButtonElement;}(MarkdownButtonElement);if(!window.customElements.get("md-quote")){window.MarkdownQuoteButtonElement=MarkdownQuoteButtonElement;window.customElements.define("md-quote",MarkdownQuoteButtonElement);}var MarkdownCodeButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen5){_inherits2(MarkdownCodeButtonElement,_MarkdownButtonElemen5);var _super8=_createSuper2(MarkdownCodeButtonElement);function MarkdownCodeButtonElement(){var _this16;_classCallCheck2(this,MarkdownCodeButtonElement);_this16=_super8.call(this);styles2.set(_assertThisInitialized2(_this16),{prefix:"`",suffix:"`",blockPrefix:"```",blockSuffix:"```"});return _this16;}_createClass2(MarkdownCodeButtonElement,[{key:"connectedCallback",value:function connectedCallback(){_get5(_getPrototypeOf3(MarkdownCodeButtonElement.prototype),"connectedCallback",this).call(this);this.setAttribute("hotkey","e");}}]);return MarkdownCodeButtonElement;}(MarkdownButtonElement);if(!window.customElements.get("md-code")){window.MarkdownCodeButtonElement=MarkdownCodeButtonElement;window.customElements.define("md-code",MarkdownCodeButtonElement);}var MarkdownLinkButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen6){_inherits2(MarkdownLinkButtonElement,_MarkdownButtonElemen6);var _super9=_createSuper2(MarkdownLinkButtonElement);function MarkdownLinkButtonElement(){var _this17;_classCallCheck2(this,MarkdownLinkButtonElement);_this17=_super9.call(this);styles2.set(_assertThisInitialized2(_this17),{prefix:"[",suffix:"](url)",replaceNext:"url",scanFor:"https?://"});return _this17;}_createClass2(MarkdownLinkButtonElement,[{key:"connectedCallback",value:function connectedCallback(){_get5(_getPrototypeOf3(MarkdownLinkButtonElement.prototype),"connectedCallback",this).call(this);this.setAttribute("hotkey","k");}}]);return MarkdownLinkButtonElement;}(MarkdownButtonElement);if(!window.customElements.get("md-link")){window.MarkdownLinkButtonElement=MarkdownLinkButtonElement;window.customElements.define("md-link",MarkdownLinkButtonElement);}var MarkdownImageButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen7){_inherits2(MarkdownImageButtonElement,_MarkdownButtonElemen7);var _super10=_createSuper2(MarkdownImageButtonElement);function MarkdownImageButtonElement(){var _this18;_classCallCheck2(this,MarkdownImageButtonElement);_this18=_super10.call(this);styles2.set(_assertThisInitialized2(_this18),{prefix:"![",suffix:"](url)",replaceNext:"url",scanFor:"https?://"});return _this18;}return _createClass2(MarkdownImageButtonElement);}(MarkdownButtonElement);if(!window.customElements.get("md-image")){window.MarkdownImageButtonElement=MarkdownImageButtonElement;window.customElements.define("md-image",MarkdownImageButtonElement);}var MarkdownUnorderedListButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen8){_inherits2(MarkdownUnorderedListButtonElement,_MarkdownButtonElemen8);var _super11=_createSuper2(MarkdownUnorderedListButtonElement);function MarkdownUnorderedListButtonElement(){var _this19;_classCallCheck2(this,MarkdownUnorderedListButtonElement);_this19=_super11.call(this);styles2.set(_assertThisInitialized2(_this19),{prefix:"- ",multiline:true,surroundWithNewlines:true});return _this19;}_createClass2(MarkdownUnorderedListButtonElement,[{key:"connectedCallback",value:function connectedCallback(){_get5(_getPrototypeOf3(MarkdownUnorderedListButtonElement.prototype),"connectedCallback",this).call(this);this.setAttribute("hotkey","8");this.setAttribute("hotkey-requires-shift","true");}}]);return MarkdownUnorderedListButtonElement;}(MarkdownButtonElement);if(!window.customElements.get("md-unordered-list")){window.MarkdownUnorderedListButtonElement=MarkdownUnorderedListButtonElement;window.customElements.define("md-unordered-list",MarkdownUnorderedListButtonElement);}var MarkdownOrderedListButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen9){_inherits2(MarkdownOrderedListButtonElement,_MarkdownButtonElemen9);var _super12=_createSuper2(MarkdownOrderedListButtonElement);function MarkdownOrderedListButtonElement(){var _this20;_classCallCheck2(this,MarkdownOrderedListButtonElement);_this20=_super12.call(this);styles2.set(_assertThisInitialized2(_this20),{prefix:"1. ",multiline:true,orderedList:true});return _this20;}_createClass2(MarkdownOrderedListButtonElement,[{key:"connectedCallback",value:function connectedCallback(){_get5(_getPrototypeOf3(MarkdownOrderedListButtonElement.prototype),"connectedCallback",this).call(this);this.setAttribute("hotkey","7");this.setAttribute("hotkey-requires-shift","true");}}]);return MarkdownOrderedListButtonElement;}(MarkdownButtonElement);if(!window.customElements.get("md-ordered-list")){window.MarkdownOrderedListButtonElement=MarkdownOrderedListButtonElement;window.customElements.define("md-ordered-list",MarkdownOrderedListButtonElement);}var MarkdownTaskListButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen10){_inherits2(MarkdownTaskListButtonElement,_MarkdownButtonElemen10);var _super13=_createSuper2(MarkdownTaskListButtonElement);function MarkdownTaskListButtonElement(){var _this21;_classCallCheck2(this,MarkdownTaskListButtonElement);_this21=_super13.call(this);styles2.set(_assertThisInitialized2(_this21),{prefix:"- [ ] ",multiline:true,surroundWithNewlines:true});return _this21;}_createClass2(MarkdownTaskListButtonElement,[{key:"connectedCallback",value:function connectedCallback(){_get5(_getPrototypeOf3(MarkdownTaskListButtonElement.prototype),"connectedCallback",this).call(this);this.setAttribute("hotkey","L");}}]);return MarkdownTaskListButtonElement;}(MarkdownButtonElement);if(!window.customElements.get("md-task-list")){window.MarkdownTaskListButtonElement=MarkdownTaskListButtonElement;window.customElements.define("md-task-list",MarkdownTaskListButtonElement);}var MarkdownMentionButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen11){_inherits2(MarkdownMentionButtonElement,_MarkdownButtonElemen11);var _super14=_createSuper2(MarkdownMentionButtonElement);function MarkdownMentionButtonElement(){var _this22;_classCallCheck2(this,MarkdownMentionButtonElement);_this22=_super14.call(this);styles2.set(_assertThisInitialized2(_this22),{prefix:"@",prefixSpace:true});return _this22;}return _createClass2(MarkdownMentionButtonElement);}(MarkdownButtonElement);if(!window.customElements.get("md-mention")){window.MarkdownMentionButtonElement=MarkdownMentionButtonElement;window.customElements.define("md-mention",MarkdownMentionButtonElement);}var MarkdownRefButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen12){_inherits2(MarkdownRefButtonElement,_MarkdownButtonElemen12);var _super15=_createSuper2(MarkdownRefButtonElement);function MarkdownRefButtonElement(){var _this23;_classCallCheck2(this,MarkdownRefButtonElement);_this23=_super15.call(this);styles2.set(_assertThisInitialized2(_this23),{prefix:"#",prefixSpace:true});return _this23;}return _createClass2(MarkdownRefButtonElement);}(MarkdownButtonElement);if(!window.customElements.get("md-ref")){window.MarkdownRefButtonElement=MarkdownRefButtonElement;window.customElements.define("md-ref",MarkdownRefButtonElement);}var MarkdownStrikethroughButtonElement=/*#__PURE__*/function(_MarkdownButtonElemen13){_inherits2(MarkdownStrikethroughButtonElement,_MarkdownButtonElemen13);var _super16=_createSuper2(MarkdownStrikethroughButtonElement);function MarkdownStrikethroughButtonElement(){var _this24;_classCallCheck2(this,MarkdownStrikethroughButtonElement);_this24=_super16.call(this);styles2.set(_assertThisInitialized2(_this24),{prefix:"~~",suffix:"~~",trimFirst:true});return _this24;}return _createClass2(MarkdownStrikethroughButtonElement);}(MarkdownButtonElement);if(!window.customElements.get("md-strikethrough")){window.MarkdownStrikethroughButtonElement=MarkdownStrikethroughButtonElement;window.customElements.define("md-strikethrough",MarkdownStrikethroughButtonElement);}var modifierKey=navigator.userAgent.match(/Macintosh/)?"Meta":"Control";var MarkdownToolbarElement=/*#__PURE__*/function(_HTMLElement3){_inherits2(MarkdownToolbarElement,_HTMLElement3);var _super17=_createSuper2(MarkdownToolbarElement);function MarkdownToolbarElement(){_classCallCheck2(this,MarkdownToolbarElement);return _super17.call(this);}_createClass2(MarkdownToolbarElement,[{key:"connectedCallback",value:function connectedCallback(){if(!this.hasAttribute("role")){this.setAttribute("role","toolbar");}this.addEventListener("keydown",focusKeydown);var fn2=shortcut.bind(null,this);if(this.field){this.field.addEventListener("keydown",fn2);shortcutListeners.set(this,fn2);}this.setAttribute("tabindex","0");this.addEventListener("focus",onToolbarFocus,{once:true});}},{key:"disconnectedCallback",value:function disconnectedCallback(){var fn2=shortcutListeners.get(this);if(fn2&&this.field){this.field.removeEventListener("keydown",fn2);shortcutListeners["delete"](this);}this.removeEventListener("keydown",focusKeydown);}},{key:"field",get:function get(){var id=this.getAttribute("for");if(!id)return null;var root2="getRootNode"in this?this.getRootNode():document;var field;if(root2 instanceof Document||root2 instanceof ShadowRoot){field=root2.getElementById(id);}return field instanceof HTMLTextAreaElement?field:null;}}]);return MarkdownToolbarElement;}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));function onToolbarFocus(_ref170){var target=_ref170.target;if(!(target instanceof Element))return;target.removeAttribute("tabindex");var tabindex="0";var _iterator6=_createForOfIteratorHelper(getButtons(target)),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var button=_step6.value;button.setAttribute("tabindex",tabindex);if(tabindex==="0"){button.focus();tabindex="-1";}}}catch(err){_iterator6.e(err);}finally{_iterator6.f();}}function focusKeydown(event){var key=event.key;if(key!=="ArrowRight"&&key!=="ArrowLeft"&&key!=="Home"&&key!=="End")return;var toolbar=event.currentTarget;if(!(toolbar instanceof HTMLElement))return;var buttons=getButtons(toolbar);var index=buttons.indexOf(event.target);var length=buttons.length;if(index===-1)return;var n2=0;if(key==="ArrowLeft")n2=index-1;if(key==="ArrowRight")n2=index+1;if(key==="End")n2=length-1;if(n2<0)n2=length-1;if(n2>length-1)n2=0;for(var i=0;i<length;i+=1){buttons[i].setAttribute("tabindex",i===n2?"0":"-1");}event.preventDefault();buttons[n2].focus();}var shortcutListeners=new WeakMap();function elementHotkeyRequiresShift(element){return element.hasAttribute("hotkey-requires-shift")&&element.getAttribute("hotkey-requires-shift")!=="false";}function findHotkey(toolbar,key,shiftPressed){var _iterator7=_createForOfIteratorHelper(toolbar.querySelectorAll("[hotkey]")),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var el=_step7.value;if(el.getAttribute("hotkey")===key&&(!elementHotkeyRequiresShift(el)||shiftPressed)){return el;}}}catch(err){_iterator7.e(err);}finally{_iterator7.f();}return null;}function shortcut(toolbar,event){if(event.metaKey&&modifierKey==="Meta"||event.ctrlKey&&modifierKey==="Control"){var key=event.shiftKey?event.key.toUpperCase():event.key;var button=findHotkey(toolbar,key,event.shiftKey);if(button){button.click();event.preventDefault();}}}if(!window.customElements.get("markdown-toolbar")){window.MarkdownToolbarElement=MarkdownToolbarElement;window.customElements.define("markdown-toolbar",MarkdownToolbarElement);}function isMultipleLines(string){return string.trim().split("\n").length>1;}function repeat(string,n2){return Array(n2+1).join(string);}function wordSelectionStart(text2,i){var index=i;while(text2[index]&&text2[index-1]!=null&&!text2[index-1].match(/\s/)){index--;}return index;}function wordSelectionEnd(text2,i,multiline){var index=i;var breakpoint=multiline?/\n/:/\s/;while(text2[index]&&!text2[index].match(breakpoint)){index++;}return index;}var canInsertText=null;function insertText(textarea,_ref171){var text2=_ref171.text,selectionStart=_ref171.selectionStart,selectionEnd=_ref171.selectionEnd;var originalSelectionStart=textarea.selectionStart;var before=textarea.value.slice(0,originalSelectionStart);var after=textarea.value.slice(textarea.selectionEnd);if(canInsertText===null||canInsertText===true){textarea.contentEditable="true";try{canInsertText=document.execCommand("insertText",false,text2);}catch(error2){canInsertText=false;}textarea.contentEditable="false";}if(canInsertText&&!textarea.value.slice(0,textarea.selectionStart).endsWith(text2)){canInsertText=false;}if(!canInsertText){try{document.execCommand("ms-beginUndoUnit");}catch(e2){}textarea.value=before+text2+after;try{document.execCommand("ms-endUndoUnit");}catch(e2){}textarea.dispatchEvent(new CustomEvent("input",{bubbles:true,cancelable:true}));}if(selectionStart!=null&&selectionEnd!=null){textarea.setSelectionRange(selectionStart,selectionEnd);}else{textarea.setSelectionRange(originalSelectionStart,textarea.selectionEnd);}}function styleSelectedText(textarea,styleArgs){var text2=textarea.value.slice(textarea.selectionStart,textarea.selectionEnd);var result;if(styleArgs.orderedList){result=orderedList(textarea);}else if(styleArgs.multiline&&isMultipleLines(text2)){result=multilineStyle(textarea,styleArgs);}else{result=blockStyle(textarea,styleArgs);}insertText(textarea,result);}function expandSelectedText(textarea,prefixToUse,suffixToUse){var multiline=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(textarea.selectionStart===textarea.selectionEnd){textarea.selectionStart=wordSelectionStart(textarea.value,textarea.selectionStart);textarea.selectionEnd=wordSelectionEnd(textarea.value,textarea.selectionEnd,multiline);}else{var expandedSelectionStart=textarea.selectionStart-prefixToUse.length;var expandedSelectionEnd=textarea.selectionEnd+suffixToUse.length;var beginsWithPrefix=textarea.value.slice(expandedSelectionStart,textarea.selectionStart)===prefixToUse;var endsWithSuffix=textarea.value.slice(textarea.selectionEnd,expandedSelectionEnd)===suffixToUse;if(beginsWithPrefix&&endsWithSuffix){textarea.selectionStart=expandedSelectionStart;textarea.selectionEnd=expandedSelectionEnd;}}return textarea.value.slice(textarea.selectionStart,textarea.selectionEnd);}function newlinesToSurroundSelectedText(textarea){var beforeSelection=textarea.value.slice(0,textarea.selectionStart);var afterSelection=textarea.value.slice(textarea.selectionEnd);var breaksBefore=beforeSelection.match(/\n*$/);var breaksAfter=afterSelection.match(/^\n*/);var newlinesBeforeSelection=breaksBefore?breaksBefore[0].length:0;var newlinesAfterSelection=breaksAfter?breaksAfter[0].length:0;var newlinesToAppend;var newlinesToPrepend;if(beforeSelection.match(/\S/)&&newlinesBeforeSelection<2){newlinesToAppend=repeat("\n",2-newlinesBeforeSelection);}if(afterSelection.match(/\S/)&&newlinesAfterSelection<2){newlinesToPrepend=repeat("\n",2-newlinesAfterSelection);}if(newlinesToAppend==null){newlinesToAppend="";}if(newlinesToPrepend==null){newlinesToPrepend="";}return{newlinesToAppend:newlinesToAppend,newlinesToPrepend:newlinesToPrepend};}function blockStyle(textarea,arg){var newlinesToAppend;var newlinesToPrepend;var prefix=arg.prefix,suffix=arg.suffix,blockPrefix=arg.blockPrefix,blockSuffix=arg.blockSuffix,replaceNext=arg.replaceNext,prefixSpace=arg.prefixSpace,scanFor=arg.scanFor,surroundWithNewlines=arg.surroundWithNewlines;var originalSelectionStart=textarea.selectionStart;var originalSelectionEnd=textarea.selectionEnd;var selectedText=textarea.value.slice(textarea.selectionStart,textarea.selectionEnd);var prefixToUse=isMultipleLines(selectedText)&&blockPrefix.length>0?"".concat(blockPrefix,"\n"):prefix;var suffixToUse=isMultipleLines(selectedText)&&blockSuffix.length>0?"\n".concat(blockSuffix):suffix;if(prefixSpace){var beforeSelection=textarea.value[textarea.selectionStart-1];if(textarea.selectionStart!==0&&beforeSelection!=null&&!beforeSelection.match(/\s/)){prefixToUse=" ".concat(prefixToUse);}}selectedText=expandSelectedText(textarea,prefixToUse,suffixToUse,arg.multiline);var selectionStart=textarea.selectionStart;var selectionEnd=textarea.selectionEnd;var hasReplaceNext=replaceNext.length>0&&suffixToUse.indexOf(replaceNext)>-1&&selectedText.length>0;if(surroundWithNewlines){var ref=newlinesToSurroundSelectedText(textarea);newlinesToAppend=ref.newlinesToAppend;newlinesToPrepend=ref.newlinesToPrepend;prefixToUse=newlinesToAppend+prefix;suffixToUse+=newlinesToPrepend;}if(selectedText.startsWith(prefixToUse)&&selectedText.endsWith(suffixToUse)){var replacementText=selectedText.slice(prefixToUse.length,selectedText.length-suffixToUse.length);if(originalSelectionStart===originalSelectionEnd){var position=originalSelectionStart-prefixToUse.length;position=Math.max(position,selectionStart);position=Math.min(position,selectionStart+replacementText.length);selectionStart=selectionEnd=position;}else{selectionEnd=selectionStart+replacementText.length;}return{text:replacementText,selectionStart:selectionStart,selectionEnd:selectionEnd};}else if(!hasReplaceNext){var _replacementText=prefixToUse+selectedText+suffixToUse;selectionStart=originalSelectionStart+prefixToUse.length;selectionEnd=originalSelectionEnd+prefixToUse.length;var whitespaceEdges=selectedText.match(/^\s*|\s*$/g);if(arg.trimFirst&&whitespaceEdges){var leadingWhitespace=whitespaceEdges[0]||"";var trailingWhitespace=whitespaceEdges[1]||"";_replacementText=leadingWhitespace+prefixToUse+selectedText.trim()+suffixToUse+trailingWhitespace;selectionStart+=leadingWhitespace.length;selectionEnd-=trailingWhitespace.length;}return{text:_replacementText,selectionStart:selectionStart,selectionEnd:selectionEnd};}else if(scanFor.length>0&&selectedText.match(scanFor)){suffixToUse=suffixToUse.replace(replaceNext,selectedText);var _replacementText2=prefixToUse+suffixToUse;selectionStart=selectionEnd=selectionStart+prefixToUse.length;return{text:_replacementText2,selectionStart:selectionStart,selectionEnd:selectionEnd};}else{var _replacementText3=prefixToUse+selectedText+suffixToUse;selectionStart=selectionStart+prefixToUse.length+selectedText.length+suffixToUse.indexOf(replaceNext);selectionEnd=selectionStart+replaceNext.length;return{text:_replacementText3,selectionStart:selectionStart,selectionEnd:selectionEnd};}}function multilineStyle(textarea,arg){var prefix=arg.prefix,suffix=arg.suffix,surroundWithNewlines=arg.surroundWithNewlines;var text2=textarea.value.slice(textarea.selectionStart,textarea.selectionEnd);var selectionStart=textarea.selectionStart;var selectionEnd=textarea.selectionEnd;var lines=text2.split("\n");var undoStyle=lines.every(function(line){return line.startsWith(prefix)&&line.endsWith(suffix);});if(undoStyle){text2=lines.map(function(line){return line.slice(prefix.length,line.length-suffix.length);}).join("\n");selectionEnd=selectionStart+text2.length;}else{text2=lines.map(function(line){return prefix+line+suffix;}).join("\n");if(surroundWithNewlines){var _newlinesToSurroundSe=newlinesToSurroundSelectedText(textarea),newlinesToAppend=_newlinesToSurroundSe.newlinesToAppend,newlinesToPrepend=_newlinesToSurroundSe.newlinesToPrepend;selectionStart+=newlinesToAppend.length;selectionEnd=selectionStart+text2.length;text2=newlinesToAppend+text2+newlinesToPrepend;}}return{text:text2,selectionStart:selectionStart,selectionEnd:selectionEnd};}function orderedList(textarea){var orderedListRegex=/^\d+\.\s+/;var noInitialSelection=textarea.selectionStart===textarea.selectionEnd;var selectionEnd;var selectionStart;var text2=textarea.value.slice(textarea.selectionStart,textarea.selectionEnd);var textToUnstyle=text2;var lines=text2.split("\n");var startOfLine,endOfLine;if(noInitialSelection){var linesBefore=textarea.value.slice(0,textarea.selectionStart).split(/\n/);startOfLine=textarea.selectionStart-linesBefore[linesBefore.length-1].length;endOfLine=wordSelectionEnd(textarea.value,textarea.selectionStart,true);textToUnstyle=textarea.value.slice(startOfLine,endOfLine);}var linesToUnstyle=textToUnstyle.split("\n");var undoStyling=linesToUnstyle.every(function(line){return orderedListRegex.test(line);});if(undoStyling){lines=linesToUnstyle.map(function(line){return line.replace(orderedListRegex,"");});text2=lines.join("\n");if(noInitialSelection&&startOfLine&&endOfLine){var lengthDiff=linesToUnstyle[0].length-lines[0].length;selectionStart=selectionEnd=textarea.selectionStart-lengthDiff;textarea.selectionStart=startOfLine;textarea.selectionEnd=endOfLine;}}else{lines=numberedLines(lines);text2=lines.join("\n");var _newlinesToSurroundSe2=newlinesToSurroundSelectedText(textarea),newlinesToAppend=_newlinesToSurroundSe2.newlinesToAppend,newlinesToPrepend=_newlinesToSurroundSe2.newlinesToPrepend;selectionStart=textarea.selectionStart+newlinesToAppend.length;selectionEnd=selectionStart+text2.length;if(noInitialSelection)selectionStart=selectionEnd;text2=newlinesToAppend+text2+newlinesToPrepend;}return{text:text2,selectionStart:selectionStart,selectionEnd:selectionEnd};}function numberedLines(lines){var i;var len;var index;var results=[];for(index=i=0,len=lines.length;i<len;index=++i){var line=lines[index];results.push("".concat(index+1,". ").concat(line));}return results;}function applyStyle(button,stylesToApply){var toolbar=button.closest("markdown-toolbar");if(!(toolbar instanceof MarkdownToolbarElement))return;var defaults3={prefix:"",suffix:"",blockPrefix:"",blockSuffix:"",multiline:false,replaceNext:"",prefixSpace:false,scanFor:"",surroundWithNewlines:false,orderedList:false,trimFirst:false};var style=Object.assign(Object.assign({},defaults3),stylesToApply);var field=toolbar.field;if(field){field.focus();styleSelectedText(field,style);}}// node_modules/marked/lib/marked.esm.js
function getDefaults(){return{baseUrl:null,breaks:false,extensions:null,gfm:true,headerIds:true,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:true,pedantic:false,renderer:null,sanitize:false,sanitizer:null,silent:false,smartLists:false,smartypants:false,tokenizer:null,walkTokens:null,xhtml:false};}var defaults2=getDefaults();function changeDefaults(newDefaults){defaults2=newDefaults;}var escapeTest=/[&<>"']/;var escapeReplace=/[&<>"']/g;var escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/;var escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var escapeReplacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};var getEscapeReplacement=function getEscapeReplacement(ch){return escapeReplacements[ch];};function _escape(html,encode){if(encode){if(escapeTest.test(html)){return html.replace(escapeReplace,getEscapeReplacement);}}else{if(escapeTestNoEncode.test(html)){return html.replace(escapeReplaceNoEncode,getEscapeReplacement);}}return html;}var unescapeTest=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function unescape2(html){return html.replace(unescapeTest,function(_,n2){n2=n2.toLowerCase();if(n2==="colon")return":";if(n2.charAt(0)==="#"){return n2.charAt(1)==="x"?String.fromCharCode(parseInt(n2.substring(2),16)):String.fromCharCode(+n2.substring(1));}return"";});}var caret=/(^|[^\[])\^/g;function edit(regex,opt){regex=regex.source||regex;opt=opt||"";var obj={replace:function replace(name2,val){val=val.source||val;val=val.replace(caret,"$1");regex=regex.replace(name2,val);return obj;},getRegex:function getRegex(){return new RegExp(regex,opt);}};return obj;}var nonWordAndColonTest=/[^\w:]/g;var originIndependentUrl=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function cleanUrl(sanitize,base,href){if(sanitize){var prot;try{prot=decodeURIComponent(unescape2(href)).replace(nonWordAndColonTest,"").toLowerCase();}catch(e2){return null;}if(prot.indexOf("javascript:")===0||prot.indexOf("vbscript:")===0||prot.indexOf("data:")===0){return null;}}if(base&&!originIndependentUrl.test(href)){href=resolveUrl(base,href);}try{href=encodeURI(href).replace(/%25/g,"%");}catch(e2){return null;}return href;}var baseUrls={};var justDomain=/^[^:]+:\/*[^/]*$/;var protocol=/^([^:]+:)[\s\S]*$/;var domain=/^([^:]+:\/*[^/]*)[\s\S]*$/;function resolveUrl(base,href){if(!baseUrls[" "+base]){if(justDomain.test(base)){baseUrls[" "+base]=base+"/";}else{baseUrls[" "+base]=rtrim(base,"/",true);}}base=baseUrls[" "+base];var relativeBase=base.indexOf(":")===-1;if(href.substring(0,2)==="//"){if(relativeBase){return href;}return base.replace(protocol,"$1")+href;}else if(href.charAt(0)==="/"){if(relativeBase){return href;}return base.replace(domain,"$1")+href;}else{return base+href;}}var noopTest={exec:function noopTest2(){}};function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key];}}}return obj;}function splitCells(tableRow,count){var row=tableRow.replace(/\|/g,function(match,offset,str){var escaped=false,curr=offset;while(--curr>=0&&str[curr]==="\\"){escaped=!escaped;}if(escaped){return"|";}else{return" |";}}),cells=row.split(/ \|/);var i=0;if(!cells[0].trim()){cells.shift();}if(cells.length>0&&!cells[cells.length-1].trim()){cells.pop();}if(cells.length>count){cells.splice(count);}else{while(cells.length<count){cells.push("");}}for(;i<cells.length;i++){cells[i]=cells[i].trim().replace(/\\\|/g,"|");}return cells;}function rtrim(str,c2,invert){var l=str.length;if(l===0){return"";}var suffLen=0;while(suffLen<l){var currChar=str.charAt(l-suffLen-1);if(currChar===c2&&!invert){suffLen++;}else if(currChar!==c2&&invert){suffLen++;}else{break;}}return str.substr(0,l-suffLen);}function findClosingBracket(str,b){if(str.indexOf(b[1])===-1){return-1;}var l=str.length;var level=0,i=0;for(;i<l;i++){if(str[i]==="\\"){i++;}else if(str[i]===b[0]){level++;}else if(str[i]===b[1]){level--;if(level<0){return i;}}}return-1;}function checkSanitizeDeprecation(opt){if(opt&&opt.sanitize&&!opt.silent){console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");}}function repeatString(pattern,count){if(count<1){return"";}var result="";while(count>1){if(count&1){result+=pattern;}count>>=1;pattern+=pattern;}return result+pattern;}function outputLink(cap,link,raw,lexer2){var href=link.href;var title=link.title?_escape(link.title):null;var text2=cap[1].replace(/\\([\[\]])/g,"$1");if(cap[0].charAt(0)!=="!"){lexer2.state.inLink=true;var token={type:"link",raw:raw,href:href,title:title,text:text2,tokens:lexer2.inlineTokens(text2,[])};lexer2.state.inLink=false;return token;}else{return{type:"image",raw:raw,href:href,title:title,text:_escape(text2)};}}function indentCodeCompensation(raw,text2){var matchIndentToCode=raw.match(/^(\s+)(?:```)/);if(matchIndentToCode===null){return text2;}var indentToCode=matchIndentToCode[1];return text2.split("\n").map(function(node){var matchIndentInNode=node.match(/^\s+/);if(matchIndentInNode===null){return node;}var _matchIndentInNode=_slicedToArray2(matchIndentInNode,1),indentInNode=_matchIndentInNode[0];if(indentInNode.length>=indentToCode.length){return node.slice(indentToCode.length);}return node;}).join("\n");}var Tokenizer=/*#__PURE__*/function(){function Tokenizer(options2){_classCallCheck2(this,Tokenizer);this.options=options2||defaults2;}_createClass2(Tokenizer,[{key:"space",value:function space(src){var cap=this.rules.block.newline.exec(src);if(cap&&cap[0].length>0){return{type:"space",raw:cap[0]};}}},{key:"code",value:function code(src){var cap=this.rules.block.code.exec(src);if(cap){var text2=cap[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:cap[0],codeBlockStyle:"indented",text:!this.options.pedantic?rtrim(text2,"\n"):text2};}}},{key:"fences",value:function fences(src){var cap=this.rules.block.fences.exec(src);if(cap){var raw=cap[0];var text2=indentCodeCompensation(raw,cap[3]||"");return{type:"code",raw:raw,lang:cap[2]?cap[2].trim():cap[2],text:text2};}}},{key:"heading",value:function heading(src){var cap=this.rules.block.heading.exec(src);if(cap){var text2=cap[2].trim();if(/#$/.test(text2)){var trimmed=rtrim(text2,"#");if(this.options.pedantic){text2=trimmed.trim();}else if(!trimmed||/ $/.test(trimmed)){text2=trimmed.trim();}}var token={type:"heading",raw:cap[0],depth:cap[1].length,text:text2,tokens:[]};this.lexer.inline(token.text,token.tokens);return token;}}},{key:"hr",value:function hr(src){var cap=this.rules.block.hr.exec(src);if(cap){return{type:"hr",raw:cap[0]};}}},{key:"blockquote",value:function blockquote(src){var cap=this.rules.block.blockquote.exec(src);if(cap){var text2=cap[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:cap[0],tokens:this.lexer.blockTokens(text2,[]),text:text2};}}},{key:"list",value:function list(src){var cap=this.rules.block.list.exec(src);if(cap){var raw,istask,ischecked,indent,i,blankLine,endsWithBlankLine,line,nextLine,rawLine,itemContents,endEarly;var bull=cap[1].trim();var isordered=bull.length>1;var list2={type:"list",raw:"",ordered:isordered,start:isordered?+bull.slice(0,-1):"",loose:false,items:[]};bull=isordered?"\\d{1,9}\\".concat(bull.slice(-1)):"\\".concat(bull);if(this.options.pedantic){bull=isordered?bull:"[*+-]";}var itemRegex=new RegExp("^( {0,3}".concat(bull,")((?: [^\\n]*)?(?:\\n|$))"));while(src){endEarly=false;if(!(cap=itemRegex.exec(src))){break;}if(this.rules.block.hr.test(src)){break;}raw=cap[0];src=src.substring(raw.length);line=cap[2].split("\n",1)[0];nextLine=src.split("\n",1)[0];if(this.options.pedantic){indent=2;itemContents=line.trimLeft();}else{indent=cap[2].search(/[^ ]/);indent=indent>4?1:indent;itemContents=line.slice(indent);indent+=cap[1].length;}blankLine=false;if(!line&&/^ *$/.test(nextLine)){raw+=nextLine+"\n";src=src.substring(nextLine.length+1);endEarly=true;}if(!endEarly){var nextBulletRegex=new RegExp("^ {0,".concat(Math.min(3,indent-1),"}(?:[*+-]|\\d{1,9}[.)])"));while(src){rawLine=src.split("\n",1)[0];line=rawLine;if(this.options.pedantic){line=line.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ");}if(nextBulletRegex.test(line)){break;}if(line.search(/[^ ]/)>=indent||!line.trim()){itemContents+="\n"+line.slice(indent);}else if(!blankLine){itemContents+="\n"+line;}else{break;}if(!blankLine&&!line.trim()){blankLine=true;}raw+=rawLine+"\n";src=src.substring(rawLine.length+1);}}if(!list2.loose){if(endsWithBlankLine){list2.loose=true;}else if(/\n *\n *$/.test(raw)){endsWithBlankLine=true;}}if(this.options.gfm){istask=/^\[[ xX]\] /.exec(itemContents);if(istask){ischecked=istask[0]!=="[ ] ";itemContents=itemContents.replace(/^\[[ xX]\] +/,"");}}list2.items.push({type:"list_item",raw:raw,task:!!istask,checked:ischecked,loose:false,text:itemContents});list2.raw+=raw;}list2.items[list2.items.length-1].raw=raw.trimRight();list2.items[list2.items.length-1].text=itemContents.trimRight();list2.raw=list2.raw.trimRight();var l=list2.items.length;for(i=0;i<l;i++){this.lexer.state.top=false;list2.items[i].tokens=this.lexer.blockTokens(list2.items[i].text,[]);var spacers=list2.items[i].tokens.filter(function(t2){return t2.type==="space";});var hasMultipleLineBreaks=spacers.every(function(t2){var chars=t2.raw.split("");var lineBreaks=0;var _iterator8=_createForOfIteratorHelper(chars),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var _char=_step8.value;if(_char==="\n"){lineBreaks+=1;}if(lineBreaks>1){return true;}}}catch(err){_iterator8.e(err);}finally{_iterator8.f();}return false;});if(!list2.loose&&spacers.length&&hasMultipleLineBreaks){list2.loose=true;list2.items[i].loose=true;}}return list2;}}},{key:"html",value:function html(src){var cap=this.rules.block.html.exec(src);if(cap){var token={type:"html",raw:cap[0],pre:!this.options.sanitizer&&(cap[1]==="pre"||cap[1]==="script"||cap[1]==="style"),text:cap[0]};if(this.options.sanitize){token.type="paragraph";token.text=this.options.sanitizer?this.options.sanitizer(cap[0]):_escape(cap[0]);token.tokens=[];this.lexer.inline(token.text,token.tokens);}return token;}}},{key:"def",value:function def(src){var cap=this.rules.block.def.exec(src);if(cap){if(cap[3])cap[3]=cap[3].substring(1,cap[3].length-1);var tag=cap[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:tag,raw:cap[0],href:cap[2],title:cap[3]};}}},{key:"table",value:function table(src){var cap=this.rules.block.table.exec(src);if(cap){var item2={type:"table",header:splitCells(cap[1]).map(function(c2){return{text:c2};}),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:cap[3]&&cap[3].trim()?cap[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(item2.header.length===item2.align.length){item2.raw=cap[0];var l=item2.align.length;var i,j,k,row;for(i=0;i<l;i++){if(/^ *-+: *$/.test(item2.align[i])){item2.align[i]="right";}else if(/^ *:-+: *$/.test(item2.align[i])){item2.align[i]="center";}else if(/^ *:-+ *$/.test(item2.align[i])){item2.align[i]="left";}else{item2.align[i]=null;}}l=item2.rows.length;for(i=0;i<l;i++){item2.rows[i]=splitCells(item2.rows[i],item2.header.length).map(function(c2){return{text:c2};});}l=item2.header.length;for(j=0;j<l;j++){item2.header[j].tokens=[];this.lexer.inlineTokens(item2.header[j].text,item2.header[j].tokens);}l=item2.rows.length;for(j=0;j<l;j++){row=item2.rows[j];for(k=0;k<row.length;k++){row[k].tokens=[];this.lexer.inlineTokens(row[k].text,row[k].tokens);}}return item2;}}}},{key:"lheading",value:function lheading(src){var cap=this.rules.block.lheading.exec(src);if(cap){var token={type:"heading",raw:cap[0],depth:cap[2].charAt(0)==="="?1:2,text:cap[1],tokens:[]};this.lexer.inline(token.text,token.tokens);return token;}}},{key:"paragraph",value:function paragraph(src){var cap=this.rules.block.paragraph.exec(src);if(cap){var token={type:"paragraph",raw:cap[0],text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1],tokens:[]};this.lexer.inline(token.text,token.tokens);return token;}}},{key:"text",value:function text(src){var cap=this.rules.block.text.exec(src);if(cap){var token={type:"text",raw:cap[0],text:cap[0],tokens:[]};this.lexer.inline(token.text,token.tokens);return token;}}},{key:"escape",value:function escape(src){var cap=this.rules.inline.escape.exec(src);if(cap){return{type:"escape",raw:cap[0],text:_escape(cap[1])};}}},{key:"tag",value:function tag(src){var cap=this.rules.inline.tag.exec(src);if(cap){if(!this.lexer.state.inLink&&/^<a /i.test(cap[0])){this.lexer.state.inLink=true;}else if(this.lexer.state.inLink&&/^<\/a>/i.test(cap[0])){this.lexer.state.inLink=false;}if(!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])){this.lexer.state.inRawBlock=true;}else if(this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])){this.lexer.state.inRawBlock=false;}return{type:this.options.sanitize?"text":"html",raw:cap[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):_escape(cap[0]):cap[0]};}}},{key:"link",value:function link(src){var cap=this.rules.inline.link.exec(src);if(cap){var trimmedUrl=cap[2].trim();if(!this.options.pedantic&&/^</.test(trimmedUrl)){if(!/>$/.test(trimmedUrl)){return;}var rtrimSlash=rtrim(trimmedUrl.slice(0,-1),"\\");if((trimmedUrl.length-rtrimSlash.length)%2===0){return;}}else{var lastParenIndex=findClosingBracket(cap[2],"()");if(lastParenIndex>-1){var start=cap[0].indexOf("!")===0?5:4;var linkLen=start+cap[1].length+lastParenIndex;cap[2]=cap[2].substring(0,lastParenIndex);cap[0]=cap[0].substring(0,linkLen).trim();cap[3]="";}}var href=cap[2];var title="";if(this.options.pedantic){var link=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);if(link){href=link[1];title=link[3];}}else{title=cap[3]?cap[3].slice(1,-1):"";}href=href.trim();if(/^</.test(href)){if(this.options.pedantic&&!/>$/.test(trimmedUrl)){href=href.slice(1);}else{href=href.slice(1,-1);}}return outputLink(cap,{href:href?href.replace(this.rules.inline._escapes,"$1"):href,title:title?title.replace(this.rules.inline._escapes,"$1"):title},cap[0],this.lexer);}}},{key:"reflink",value:function reflink(src,links){var cap;if((cap=this.rules.inline.reflink.exec(src))||(cap=this.rules.inline.nolink.exec(src))){var link=(cap[2]||cap[1]).replace(/\s+/g," ");link=links[link.toLowerCase()];if(!link||!link.href){var text2=cap[0].charAt(0);return{type:"text",raw:text2,text:text2};}return outputLink(cap,link,cap[0],this.lexer);}}},{key:"emStrong",value:function emStrong(src,maskedSrc){var prevChar=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var match=this.rules.inline.emStrong.lDelim.exec(src);if(!match)return;if(match[3]&&prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))return;var nextChar=match[1]||match[2]||"";if(!nextChar||nextChar&&(prevChar===""||this.rules.inline.punctuation.exec(prevChar))){var lLength=match[0].length-1;var rDelim,rLength,delimTotal=lLength,midDelimTotal=0;var endReg=match[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;endReg.lastIndex=0;maskedSrc=maskedSrc.slice(-1*src.length+lLength);while((match=endReg.exec(maskedSrc))!=null){rDelim=match[1]||match[2]||match[3]||match[4]||match[5]||match[6];if(!rDelim)continue;rLength=rDelim.length;if(match[3]||match[4]){delimTotal+=rLength;continue;}else if(match[5]||match[6]){if(lLength%3&&!((lLength+rLength)%3)){midDelimTotal+=rLength;continue;}}delimTotal-=rLength;if(delimTotal>0)continue;rLength=Math.min(rLength,rLength+delimTotal+midDelimTotal);if(Math.min(lLength,rLength)%2){var text3=src.slice(1,lLength+match.index+rLength);return{type:"em",raw:src.slice(0,lLength+match.index+rLength+1),text:text3,tokens:this.lexer.inlineTokens(text3,[])};}var text2=src.slice(2,lLength+match.index+rLength-1);return{type:"strong",raw:src.slice(0,lLength+match.index+rLength+1),text:text2,tokens:this.lexer.inlineTokens(text2,[])};}}}},{key:"codespan",value:function codespan(src){var cap=this.rules.inline.code.exec(src);if(cap){var text2=cap[2].replace(/\n/g," ");var hasNonSpaceChars=/[^ ]/.test(text2);var hasSpaceCharsOnBothEnds=/^ /.test(text2)&&/ $/.test(text2);if(hasNonSpaceChars&&hasSpaceCharsOnBothEnds){text2=text2.substring(1,text2.length-1);}text2=_escape(text2,true);return{type:"codespan",raw:cap[0],text:text2};}}},{key:"br",value:function br(src){var cap=this.rules.inline.br.exec(src);if(cap){return{type:"br",raw:cap[0]};}}},{key:"del",value:function del(src){var cap=this.rules.inline.del.exec(src);if(cap){return{type:"del",raw:cap[0],text:cap[2],tokens:this.lexer.inlineTokens(cap[2],[])};}}},{key:"autolink",value:function autolink(src,mangle2){var cap=this.rules.inline.autolink.exec(src);if(cap){var text2,href;if(cap[2]==="@"){text2=_escape(this.options.mangle?mangle2(cap[1]):cap[1]);href="mailto:"+text2;}else{text2=_escape(cap[1]);href=text2;}return{type:"link",raw:cap[0],text:text2,href:href,tokens:[{type:"text",raw:text2,text:text2}]};}}},{key:"url",value:function url(src,mangle2){var cap;if(cap=this.rules.inline.url.exec(src)){var text2,href;if(cap[2]==="@"){text2=_escape(this.options.mangle?mangle2(cap[0]):cap[0]);href="mailto:"+text2;}else{var prevCapZero;do{prevCapZero=cap[0];cap[0]=this.rules.inline._backpedal.exec(cap[0])[0];}while(prevCapZero!==cap[0]);text2=_escape(cap[0]);if(cap[1]==="www."){href="http://"+text2;}else{href=text2;}}return{type:"link",raw:cap[0],text:text2,href:href,tokens:[{type:"text",raw:text2,text:text2}]};}}},{key:"inlineText",value:function inlineText(src,smartypants2){var cap=this.rules.inline.text.exec(src);if(cap){var text2;if(this.lexer.state.inRawBlock){text2=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):_escape(cap[0]):cap[0];}else{text2=_escape(this.options.smartypants?smartypants2(cap[0]):cap[0]);}return{type:"text",raw:cap[0],text:text2};}}}]);return Tokenizer;}();var block={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:noopTest,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};block._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;block._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;block.def=edit(block.def).replace("label",block._label).replace("title",block._title).getRegex();block.bullet=/(?:[*+-]|\d{1,9}[.)])/;block.listItemStart=edit(/^( *)(bull) */).replace("bull",block.bullet).getRegex();block.list=edit(block.list).replace(/bull/g,block.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+block.def.source+")").getRegex();block._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";block._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;block.html=edit(block.html,"i").replace("comment",block._comment).replace("tag",block._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();block.paragraph=edit(block._paragraph).replace("hr",block.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",block._tag).getRegex();block.blockquote=edit(block.blockquote).replace("paragraph",block.paragraph).getRegex();block.normal=merge({},block);block.gfm=merge({},block.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});block.gfm.table=edit(block.gfm.table).replace("hr",block.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",block._tag).getRegex();block.gfm.paragraph=edit(block._paragraph).replace("hr",block.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",block.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",block._tag).getRegex();block.pedantic=merge({},block.normal,{html:edit("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",block._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:noopTest,paragraph:edit(block.normal._paragraph).replace("hr",block.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",block.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var inline={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:noopTest,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:noopTest,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};inline._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";inline.punctuation=edit(inline.punctuation).replace(/punctuation/g,inline._punctuation).getRegex();inline.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;inline.escapedEmSt=/\\\*|\\_/g;inline._comment=edit(block._comment).replace("(?:-->|$)","-->").getRegex();inline.emStrong.lDelim=edit(inline.emStrong.lDelim).replace(/punct/g,inline._punctuation).getRegex();inline.emStrong.rDelimAst=edit(inline.emStrong.rDelimAst,"g").replace(/punct/g,inline._punctuation).getRegex();inline.emStrong.rDelimUnd=edit(inline.emStrong.rDelimUnd,"g").replace(/punct/g,inline._punctuation).getRegex();inline._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;inline._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;inline._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;inline.autolink=edit(inline.autolink).replace("scheme",inline._scheme).replace("email",inline._email).getRegex();inline._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;inline.tag=edit(inline.tag).replace("comment",inline._comment).replace("attribute",inline._attribute).getRegex();inline._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;inline._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;inline._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;inline.link=edit(inline.link).replace("label",inline._label).replace("href",inline._href).replace("title",inline._title).getRegex();inline.reflink=edit(inline.reflink).replace("label",inline._label).replace("ref",block._label).getRegex();inline.nolink=edit(inline.nolink).replace("ref",block._label).getRegex();inline.reflinkSearch=edit(inline.reflinkSearch,"g").replace("reflink",inline.reflink).replace("nolink",inline.nolink).getRegex();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:edit(/^!?\[(label)\]\((.*?)\)/).replace("label",inline._label).getRegex(),reflink:edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",inline._label).getRegex()});inline.gfm=merge({},inline.normal,{escape:edit(inline.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});inline.gfm.url=edit(inline.gfm.url,"i").replace("email",inline.gfm._extended_email).getRegex();inline.breaks=merge({},inline.gfm,{br:edit(inline.br).replace("{2,}","*").getRegex(),text:edit(inline.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function smartypants(text2){return text2.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026");}function mangle(text2){var out="",i,ch;var l=text2.length;for(i=0;i<l;i++){ch=text2.charCodeAt(i);if(Math.random()>0.5){ch="x"+ch.toString(16);}out+="&#"+ch+";";}return out;}var Lexer=/*#__PURE__*/function(){function Lexer(options2){_classCallCheck2(this,Lexer);this.tokens=[];this.tokens.links=Object.create(null);this.options=options2||defaults2;this.options.tokenizer=this.options.tokenizer||new Tokenizer();this.tokenizer=this.options.tokenizer;this.tokenizer.options=this.options;this.tokenizer.lexer=this;this.inlineQueue=[];this.state={inLink:false,inRawBlock:false,top:true};var rules={block:block.normal,inline:inline.normal};if(this.options.pedantic){rules.block=block.pedantic;rules.inline=inline.pedantic;}else if(this.options.gfm){rules.block=block.gfm;if(this.options.breaks){rules.inline=inline.breaks;}else{rules.inline=inline.gfm;}}this.tokenizer.rules=rules;}_createClass2(Lexer,[{key:"lex",value:function lex(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ");this.blockTokens(src,this.tokens);var next;while(next=this.inlineQueue.shift()){this.inlineTokens(next.src,next.tokens);}return this.tokens;}},{key:"blockTokens",value:function blockTokens(src){var _this25=this;var tokens=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];if(this.options.pedantic){src=src.replace(/^ +$/gm,"");}var token,lastToken,cutSrc,lastParagraphClipped;while(src){if(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(function(extTokenizer){if(token=extTokenizer.call({lexer:_this25},src,tokens)){src=src.substring(token.raw.length);tokens.push(token);return true;}return false;})){continue;}if(token=this.tokenizer.space(src)){src=src.substring(token.raw.length);if(token.raw.length===1&&tokens.length>0){tokens[tokens.length-1].raw+="\n";}else{tokens.push(token);}continue;}if(token=this.tokenizer.code(src)){src=src.substring(token.raw.length);lastToken=tokens[tokens.length-1];if(lastToken&&(lastToken.type==="paragraph"||lastToken.type==="text")){lastToken.raw+="\n"+token.raw;lastToken.text+="\n"+token.text;this.inlineQueue[this.inlineQueue.length-1].src=lastToken.text;}else{tokens.push(token);}continue;}if(token=this.tokenizer.fences(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.heading(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.hr(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.blockquote(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.list(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.html(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.def(src)){src=src.substring(token.raw.length);lastToken=tokens[tokens.length-1];if(lastToken&&(lastToken.type==="paragraph"||lastToken.type==="text")){lastToken.raw+="\n"+token.raw;lastToken.text+="\n"+token.raw;this.inlineQueue[this.inlineQueue.length-1].src=lastToken.text;}else if(!this.tokens.links[token.tag]){this.tokens.links[token.tag]={href:token.href,title:token.title};}continue;}if(token=this.tokenizer.table(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.lheading(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}cutSrc=src;if(this.options.extensions&&this.options.extensions.startBlock){(function(){var startIndex=Infinity;var tempSrc=src.slice(1);var tempStart=void 0;_this25.options.extensions.startBlock.forEach(function(getStartIndex){tempStart=getStartIndex.call({lexer:this},tempSrc);if(typeof tempStart==="number"&&tempStart>=0){startIndex=Math.min(startIndex,tempStart);}});if(startIndex<Infinity&&startIndex>=0){cutSrc=src.substring(0,startIndex+1);}})();}if(this.state.top&&(token=this.tokenizer.paragraph(cutSrc))){lastToken=tokens[tokens.length-1];if(lastParagraphClipped&&lastToken.type==="paragraph"){lastToken.raw+="\n"+token.raw;lastToken.text+="\n"+token.text;this.inlineQueue.pop();this.inlineQueue[this.inlineQueue.length-1].src=lastToken.text;}else{tokens.push(token);}lastParagraphClipped=cutSrc.length!==src.length;src=src.substring(token.raw.length);continue;}if(token=this.tokenizer.text(src)){src=src.substring(token.raw.length);lastToken=tokens[tokens.length-1];if(lastToken&&lastToken.type==="text"){lastToken.raw+="\n"+token.raw;lastToken.text+="\n"+token.text;this.inlineQueue.pop();this.inlineQueue[this.inlineQueue.length-1].src=lastToken.text;}else{tokens.push(token);}continue;}if(src){var errMsg="Infinite loop on byte: "+src.charCodeAt(0);if(this.options.silent){console.error(errMsg);break;}else{throw new Error(errMsg);}}}this.state.top=true;return tokens;}},{key:"inline",value:function inline(src,tokens){this.inlineQueue.push({src:src,tokens:tokens});}},{key:"inlineTokens",value:function inlineTokens(src){var _this26=this;var tokens=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var token,lastToken,cutSrc;var maskedSrc=src;var match;var keepPrevChar,prevChar;if(this.tokens.links){var links=Object.keys(this.tokens.links);if(links.length>0){while((match=this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc))!=null){if(links.includes(match[0].slice(match[0].lastIndexOf("[")+1,-1))){maskedSrc=maskedSrc.slice(0,match.index)+"["+repeatString("a",match[0].length-2)+"]"+maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);}}}}while((match=this.tokenizer.rules.inline.blockSkip.exec(maskedSrc))!=null){maskedSrc=maskedSrc.slice(0,match.index)+"["+repeatString("a",match[0].length-2)+"]"+maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);}while((match=this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc))!=null){maskedSrc=maskedSrc.slice(0,match.index)+"++"+maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);}while(src){if(!keepPrevChar){prevChar="";}keepPrevChar=false;if(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(function(extTokenizer){if(token=extTokenizer.call({lexer:_this26},src,tokens)){src=src.substring(token.raw.length);tokens.push(token);return true;}return false;})){continue;}if(token=this.tokenizer.escape(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.tag(src)){src=src.substring(token.raw.length);lastToken=tokens[tokens.length-1];if(lastToken&&token.type==="text"&&lastToken.type==="text"){lastToken.raw+=token.raw;lastToken.text+=token.text;}else{tokens.push(token);}continue;}if(token=this.tokenizer.link(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.reflink(src,this.tokens.links)){src=src.substring(token.raw.length);lastToken=tokens[tokens.length-1];if(lastToken&&token.type==="text"&&lastToken.type==="text"){lastToken.raw+=token.raw;lastToken.text+=token.text;}else{tokens.push(token);}continue;}if(token=this.tokenizer.emStrong(src,maskedSrc,prevChar)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.codespan(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.br(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.del(src)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(token=this.tokenizer.autolink(src,mangle)){src=src.substring(token.raw.length);tokens.push(token);continue;}if(!this.state.inLink&&(token=this.tokenizer.url(src,mangle))){src=src.substring(token.raw.length);tokens.push(token);continue;}cutSrc=src;if(this.options.extensions&&this.options.extensions.startInline){(function(){var startIndex=Infinity;var tempSrc=src.slice(1);var tempStart=void 0;_this26.options.extensions.startInline.forEach(function(getStartIndex){tempStart=getStartIndex.call({lexer:this},tempSrc);if(typeof tempStart==="number"&&tempStart>=0){startIndex=Math.min(startIndex,tempStart);}});if(startIndex<Infinity&&startIndex>=0){cutSrc=src.substring(0,startIndex+1);}})();}if(token=this.tokenizer.inlineText(cutSrc,smartypants)){src=src.substring(token.raw.length);if(token.raw.slice(-1)!=="_"){prevChar=token.raw.slice(-1);}keepPrevChar=true;lastToken=tokens[tokens.length-1];if(lastToken&&lastToken.type==="text"){lastToken.raw+=token.raw;lastToken.text+=token.text;}else{tokens.push(token);}continue;}if(src){var errMsg="Infinite loop on byte: "+src.charCodeAt(0);if(this.options.silent){console.error(errMsg);break;}else{throw new Error(errMsg);}}}return tokens;}}],[{key:"rules",get:function get(){return{block:block,inline:inline};}},{key:"lex",value:function lex(src,options2){var lexer2=new Lexer(options2);return lexer2.lex(src);}},{key:"lexInline",value:function lexInline(src,options2){var lexer2=new Lexer(options2);return lexer2.inlineTokens(src);}}]);return Lexer;}();var Renderer=/*#__PURE__*/function(){function Renderer(options2){_classCallCheck2(this,Renderer);this.options=options2||defaults2;}_createClass2(Renderer,[{key:"code",value:function code(_code,infostring,escaped){var lang=(infostring||"").match(/\S*/)[0];if(this.options.highlight){var out=this.options.highlight(_code,lang);if(out!=null&&out!==_code){escaped=true;_code=out;}}_code=_code.replace(/\n$/,"")+"\n";if(!lang){return"<pre><code>"+(escaped?_code:_escape(_code,true))+"</code></pre>\n";}return'<pre><code class="'+this.options.langPrefix+_escape(lang,true)+'">'+(escaped?_code:_escape(_code,true))+"</code></pre>\n";}},{key:"blockquote",value:function blockquote(quote){return"<blockquote>\n"+quote+"</blockquote>\n";}},{key:"html",value:function html(_html){return _html;}},{key:"heading",value:function heading(text2,level,raw,slugger){if(this.options.headerIds){return"<h"+level+' id="'+this.options.headerPrefix+slugger.slug(raw)+'">'+text2+"</h"+level+">\n";}return"<h"+level+">"+text2+"</h"+level+">\n";}},{key:"hr",value:function hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n";}},{key:"list",value:function list(body,ordered,start){var type=ordered?"ol":"ul",startatt=ordered&&start!==1?' start="'+start+'"':"";return"<"+type+startatt+">\n"+body+"</"+type+">\n";}},{key:"listitem",value:function listitem(text2){return"<li>"+text2+"</li>\n";}},{key:"checkbox",value:function checkbox(checked){return"<input "+(checked?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> ";}},{key:"paragraph",value:function paragraph(text2){return"<p>"+text2+"</p>\n";}},{key:"table",value:function table(header,body){if(body)body="<tbody>"+body+"</tbody>";return"<table>\n<thead>\n"+header+"</thead>\n"+body+"</table>\n";}},{key:"tablerow",value:function tablerow(content){return"<tr>\n"+content+"</tr>\n";}},{key:"tablecell",value:function tablecell(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' align="'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n";}},{key:"strong",value:function strong(text2){return"<strong>"+text2+"</strong>";}},{key:"em",value:function em(text2){return"<em>"+text2+"</em>";}},{key:"codespan",value:function codespan(text2){return"<code>"+text2+"</code>";}},{key:"br",value:function br(){return this.options.xhtml?"<br/>":"<br>";}},{key:"del",value:function del(text2){return"<del>"+text2+"</del>";}},{key:"link",value:function link(href,title,text2){href=cleanUrl(this.options.sanitize,this.options.baseUrl,href);if(href===null){return text2;}var out='<a href="'+_escape(href)+'"';if(title){out+=' title="'+title+'"';}out+=">"+text2+"</a>";return out;}},{key:"image",value:function image(href,title,text2){href=cleanUrl(this.options.sanitize,this.options.baseUrl,href);if(href===null){return text2;}var out='<img src="'+href+'" alt="'+text2+'"';if(title){out+=' title="'+title+'"';}out+=this.options.xhtml?"/>":">";return out;}},{key:"text",value:function text(text2){return text2;}}]);return Renderer;}();var TextRenderer=/*#__PURE__*/function(){function TextRenderer(){_classCallCheck2(this,TextRenderer);}_createClass2(TextRenderer,[{key:"strong",value:function strong(text2){return text2;}},{key:"em",value:function em(text2){return text2;}},{key:"codespan",value:function codespan(text2){return text2;}},{key:"del",value:function del(text2){return text2;}},{key:"html",value:function html(text2){return text2;}},{key:"text",value:function text(text2){return text2;}},{key:"link",value:function link(href,title,text2){return""+text2;}},{key:"image",value:function image(href,title,text2){return""+text2;}},{key:"br",value:function br(){return"";}}]);return TextRenderer;}();var Slugger=/*#__PURE__*/function(){function Slugger(){_classCallCheck2(this,Slugger);this.seen={};}_createClass2(Slugger,[{key:"serialize",value:function serialize(value){return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");}},{key:"getNextSafeSlug",value:function getNextSafeSlug(originalSlug,isDryRun){var slug=originalSlug;var occurenceAccumulator=0;if(this.seen.hasOwnProperty(slug)){occurenceAccumulator=this.seen[originalSlug];do{occurenceAccumulator++;slug=originalSlug+"-"+occurenceAccumulator;}while(this.seen.hasOwnProperty(slug));}if(!isDryRun){this.seen[originalSlug]=occurenceAccumulator;this.seen[slug]=0;}return slug;}},{key:"slug",value:function slug(value){var options2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var slug=this.serialize(value);return this.getNextSafeSlug(slug,options2.dryrun);}}]);return Slugger;}();var Parser=/*#__PURE__*/function(){function Parser(options2){_classCallCheck2(this,Parser);this.options=options2||defaults2;this.options.renderer=this.options.renderer||new Renderer();this.renderer=this.options.renderer;this.renderer.options=this.options;this.textRenderer=new TextRenderer();this.slugger=new Slugger();}_createClass2(Parser,[{key:"parse",value:function parse(tokens){var top=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var out="",i,j,k,l2,l3,row,cell,header,body,token,ordered,start,loose,itemBody,item2,checked,task,checkbox,ret;var l=tokens.length;for(i=0;i<l;i++){token=tokens[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[token.type]){ret=this.options.extensions.renderers[token.type].call({parser:this},token);if(ret!==false||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(token.type)){out+=ret||"";continue;}}switch(token.type){case"space":{continue;}case"hr":{out+=this.renderer.hr();continue;}case"heading":{out+=this.renderer.heading(this.parseInline(token.tokens),token.depth,unescape2(this.parseInline(token.tokens,this.textRenderer)),this.slugger);continue;}case"code":{out+=this.renderer.code(token.text,token.lang,token.escaped);continue;}case"table":{header="";cell="";l2=token.header.length;for(j=0;j<l2;j++){cell+=this.renderer.tablecell(this.parseInline(token.header[j].tokens),{header:true,align:token.align[j]});}header+=this.renderer.tablerow(cell);body="";l2=token.rows.length;for(j=0;j<l2;j++){row=token.rows[j];cell="";l3=row.length;for(k=0;k<l3;k++){cell+=this.renderer.tablecell(this.parseInline(row[k].tokens),{header:false,align:token.align[k]});}body+=this.renderer.tablerow(cell);}out+=this.renderer.table(header,body);continue;}case"blockquote":{body=this.parse(token.tokens);out+=this.renderer.blockquote(body);continue;}case"list":{ordered=token.ordered;start=token.start;loose=token.loose;l2=token.items.length;body="";for(j=0;j<l2;j++){item2=token.items[j];checked=item2.checked;task=item2.task;itemBody="";if(item2.task){checkbox=this.renderer.checkbox(checked);if(loose){if(item2.tokens.length>0&&item2.tokens[0].type==="paragraph"){item2.tokens[0].text=checkbox+" "+item2.tokens[0].text;if(item2.tokens[0].tokens&&item2.tokens[0].tokens.length>0&&item2.tokens[0].tokens[0].type==="text"){item2.tokens[0].tokens[0].text=checkbox+" "+item2.tokens[0].tokens[0].text;}}else{item2.tokens.unshift({type:"text",text:checkbox});}}else{itemBody+=checkbox;}}itemBody+=this.parse(item2.tokens,loose);body+=this.renderer.listitem(itemBody,task,checked);}out+=this.renderer.list(body,ordered,start);continue;}case"html":{out+=this.renderer.html(token.text);continue;}case"paragraph":{out+=this.renderer.paragraph(this.parseInline(token.tokens));continue;}case"text":{body=token.tokens?this.parseInline(token.tokens):token.text;while(i+1<l&&tokens[i+1].type==="text"){token=tokens[++i];body+="\n"+(token.tokens?this.parseInline(token.tokens):token.text);}out+=top?this.renderer.paragraph(body):body;continue;}default:{var errMsg='Token with "'+token.type+'" type was not found.';if(this.options.silent){console.error(errMsg);return;}else{throw new Error(errMsg);}}}}return out;}},{key:"parseInline",value:function parseInline(tokens,renderer){renderer=renderer||this.renderer;var out="",i,token,ret;var l=tokens.length;for(i=0;i<l;i++){token=tokens[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[token.type]){ret=this.options.extensions.renderers[token.type].call({parser:this},token);if(ret!==false||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(token.type)){out+=ret||"";continue;}}switch(token.type){case"escape":{out+=renderer.text(token.text);break;}case"html":{out+=renderer.html(token.text);break;}case"link":{out+=renderer.link(token.href,token.title,this.parseInline(token.tokens,renderer));break;}case"image":{out+=renderer.image(token.href,token.title,token.text);break;}case"strong":{out+=renderer.strong(this.parseInline(token.tokens,renderer));break;}case"em":{out+=renderer.em(this.parseInline(token.tokens,renderer));break;}case"codespan":{out+=renderer.codespan(token.text);break;}case"br":{out+=renderer.br();break;}case"del":{out+=renderer.del(this.parseInline(token.tokens,renderer));break;}case"text":{out+=renderer.text(token.text);break;}default:{var errMsg='Token with "'+token.type+'" type was not found.';if(this.options.silent){console.error(errMsg);return;}else{throw new Error(errMsg);}}}}return out;}}],[{key:"parse",value:function parse(tokens,options2){var parser2=new Parser(options2);return parser2.parse(tokens);}},{key:"parseInline",value:function parseInline(tokens,options2){var parser2=new Parser(options2);return parser2.parseInline(tokens);}}]);return Parser;}();function marked(src,opt,callback){if(typeof src==="undefined"||src===null){throw new Error("marked(): input parameter is undefined or null");}if(typeof src!=="string"){throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(src)+", string expected");}if(typeof opt==="function"){callback=opt;opt=null;}opt=merge({},marked.defaults,opt||{});checkSanitizeDeprecation(opt);if(callback){var highlight=opt.highlight;var tokens;try{tokens=Lexer.lex(src,opt);}catch(e2){return callback(e2);}var done=function done(err){var out;if(!err){try{if(opt.walkTokens){marked.walkTokens(tokens,opt.walkTokens);}out=Parser.parse(tokens,opt);}catch(e2){err=e2;}}opt.highlight=highlight;return err?callback(err):callback(null,out);};if(!highlight||highlight.length<3){return done();}delete opt.highlight;if(!tokens.length)return done();var pending=0;marked.walkTokens(tokens,function(token){if(token.type==="code"){pending++;setTimeout(function(){highlight(token.text,token.lang,function(err,code){if(err){return done(err);}if(code!=null&&code!==token.text){token.text=code;token.escaped=true;}pending--;if(pending===0){done();}});},0);}});if(pending===0){done();}return;}try{var _tokens=Lexer.lex(src,opt);if(opt.walkTokens){marked.walkTokens(_tokens,opt.walkTokens);}return Parser.parse(_tokens,opt);}catch(e2){e2.message+="\nPlease report this to https://github.com/markedjs/marked.";if(opt.silent){return"<p>An error occurred:</p><pre>"+_escape(e2.message+"",true)+"</pre>";}throw e2;}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);changeDefaults(marked.defaults);return marked;};marked.getDefaults=getDefaults;marked.defaults=defaults2;marked.use=function(){for(var _len17=arguments.length,args=new Array(_len17),_key17=0;_key17<_len17;_key17++){args[_key17]=arguments[_key17];}var opts=merge.apply(void 0,[{}].concat(args));var extensions=marked.defaults.extensions||{renderers:{},childTokens:{}};var hasExtensions;args.forEach(function(pack){if(pack.extensions){hasExtensions=true;pack.extensions.forEach(function(ext){if(!ext.name){throw new Error("extension name required");}if(ext.renderer){var prevRenderer=extensions.renderers?extensions.renderers[ext.name]:null;if(prevRenderer){extensions.renderers[ext.name]=function(){for(var _len18=arguments.length,args2=new Array(_len18),_key18=0;_key18<_len18;_key18++){args2[_key18]=arguments[_key18];}var ret=ext.renderer.apply(this,args2);if(ret===false){ret=prevRenderer.apply(this,args2);}return ret;};}else{extensions.renderers[ext.name]=ext.renderer;}}if(ext.tokenizer){if(!ext.level||ext.level!=="block"&&ext.level!=="inline"){throw new Error("extension level must be 'block' or 'inline'");}if(extensions[ext.level]){extensions[ext.level].unshift(ext.tokenizer);}else{extensions[ext.level]=[ext.tokenizer];}if(ext.start){if(ext.level==="block"){if(extensions.startBlock){extensions.startBlock.push(ext.start);}else{extensions.startBlock=[ext.start];}}else if(ext.level==="inline"){if(extensions.startInline){extensions.startInline.push(ext.start);}else{extensions.startInline=[ext.start];}}}}if(ext.childTokens){extensions.childTokens[ext.name]=ext.childTokens;}});}if(pack.renderer){(function(){var renderer=marked.defaults.renderer||new Renderer();var _loop2=function _loop2(prop){var prevRenderer=renderer[prop];renderer[prop]=function(){for(var _len19=arguments.length,args2=new Array(_len19),_key19=0;_key19<_len19;_key19++){args2[_key19]=arguments[_key19];}var ret=pack.renderer[prop].apply(renderer,args2);if(ret===false){ret=prevRenderer.apply(renderer,args2);}return ret;};};for(var prop in pack.renderer){_loop2(prop);}opts.renderer=renderer;})();}if(pack.tokenizer){(function(){var tokenizer=marked.defaults.tokenizer||new Tokenizer();var _loop3=function _loop3(prop){var prevTokenizer=tokenizer[prop];tokenizer[prop]=function(){for(var _len20=arguments.length,args2=new Array(_len20),_key20=0;_key20<_len20;_key20++){args2[_key20]=arguments[_key20];}var ret=pack.tokenizer[prop].apply(tokenizer,args2);if(ret===false){ret=prevTokenizer.apply(tokenizer,args2);}return ret;};};for(var prop in pack.tokenizer){_loop3(prop);}opts.tokenizer=tokenizer;})();}if(pack.walkTokens){var walkTokens2=marked.defaults.walkTokens;opts.walkTokens=function(token){pack.walkTokens.call(this,token);if(walkTokens2){walkTokens2.call(this,token);}};}if(hasExtensions){opts.extensions=extensions;}marked.setOptions(opts);});};marked.walkTokens=function(tokens,callback){var _iterator9=_createForOfIteratorHelper(tokens),_step9;try{var _loop4=function _loop4(){var token=_step9.value;callback.call(marked,token);switch(token.type){case"table":{var _iterator10=_createForOfIteratorHelper(token.header),_step10;try{for(_iterator10.s();!(_step10=_iterator10.n()).done;){var cell=_step10.value;marked.walkTokens(cell.tokens,callback);}}catch(err){_iterator10.e(err);}finally{_iterator10.f();}var _iterator11=_createForOfIteratorHelper(token.rows),_step11;try{for(_iterator11.s();!(_step11=_iterator11.n()).done;){var row=_step11.value;var _iterator12=_createForOfIteratorHelper(row),_step12;try{for(_iterator12.s();!(_step12=_iterator12.n()).done;){var _cell=_step12.value;marked.walkTokens(_cell.tokens,callback);}}catch(err){_iterator12.e(err);}finally{_iterator12.f();}}}catch(err){_iterator11.e(err);}finally{_iterator11.f();}break;}case"list":{marked.walkTokens(token.items,callback);break;}default:{if(marked.defaults.extensions&&marked.defaults.extensions.childTokens&&marked.defaults.extensions.childTokens[token.type]){marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens){marked.walkTokens(token[childTokens],callback);});}else if(token.tokens){marked.walkTokens(token.tokens,callback);}}}};for(_iterator9.s();!(_step9=_iterator9.n()).done;){_loop4();}}catch(err){_iterator9.e(err);}finally{_iterator9.f();}};marked.parseInline=function(src,opt){if(typeof src==="undefined"||src===null){throw new Error("marked.parseInline(): input parameter is undefined or null");}if(typeof src!=="string"){throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(src)+", string expected");}opt=merge({},marked.defaults,opt||{});checkSanitizeDeprecation(opt);try{var tokens=Lexer.lexInline(src,opt);if(opt.walkTokens){marked.walkTokens(tokens,opt.walkTokens);}return Parser.parseInline(tokens,opt);}catch(e2){e2.message+="\nPlease report this to https://github.com/markedjs/marked.";if(opt.silent){return"<p>An error occurred:</p><pre>"+_escape(e2.message+"",true)+"</pre>";}throw e2;}};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.TextRenderer=TextRenderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.Tokenizer=Tokenizer;marked.Slugger=Slugger;marked.parse=marked;var options=marked.options;var setOptions2=marked.setOptions;var use=marked.use;var walkTokens=marked.walkTokens;var parseInline=marked.parseInline;var parser=Parser.parse;var lexer=Lexer.lex;// node_modules/mdhl/dist/mdhl.esm.js
function e(e2){return e2.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");}var n={space:/^\n+/,blockCode:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)(\n)(|[\s\S]*?\n)( {0,3}\1[~`]* *(?:\n+|$)|$)/,heading:/^#{1,6} [^\n]+(\n|$)/,lheading:/^[^\n]+\n {0,3}(=+|-+) *(\n+|$)/,hr:/^(([-_*]) *){3,}(\n+|$)/,list:/^( {0})((?:[*+-]|\d{1,9}\.)) [\s\S]+?(?:\n+(?! )(?!\1(?:[*+-]|\d{1,9}\.) )\n*|\s*$)/,blockquote:/^( {0,3}> ?([^\n]*)(?:\n|$))+/,html:/^ {0,3}(?:<(script|pre|style)[\s>][\s\S]*?(?:<\/\1>[^\n]*\n+|$)|<!--(?!-?>)[\s\S]*?-->[^\n]*(\n+|$)|<\/?(\w+)(?: +|\n|\/?>)[\s\S]*?(?:\n{2,}|$))/,paragraph:/^[^\n]+/};var t={strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,inlineCode:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,link:/^!?\[([\s\S]+)\]\(\s*([\s\S]+)(?:\s+([\s\S]+))?\s*\)/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};var r=function r(e2,n2,t2){return"<".concat(e2," class=\"mdhl-").concat(t2,"\">").concat(n2,"</").concat(e2,">");};var s={codeInFences:function codeInFences(n2,t2){return r("span",e(n2),"codeInFences");},heading:function heading(e2,n2,t2){return r("b",t2(e2.text,n2),e2.type);},lheading:function lheading(e2,n2,t2){return r("b",t2(e2.text,n2),"heading");},paragraph:function paragraph(e2,n2,t2){return r("span",t2(e2.text,n2),e2.type);},list:function list(e2,n2,t2){var s2=e2.text.split("\n").map(function(e3){var s3=e3.substr(0,1),c2=e3.substr(1),o2=t2(c2,n2);return"".concat(r("span",s3,"bullet")).concat(o2);}).join("\n");return r("span",s2,"list");},fences:function fences(n2,t2){var _n2$cap=_slicedToArray2(n2.cap,6),r2=_n2$cap[1],s2=_n2$cap[2],c2=_n2$cap[3],o2=_n2$cap[4],p2=_n2$cap[5],a2=t2.codeInFences(o2,s2);return"".concat(r2).concat(e(s2)).concat(c2).concat(a2).concat(p2);},space:function space(e2){return e2.text;},text:function text(e2){return e2.text;},em:function em(e2){return r("i",e2.text,e2.type);},strong:function strong(e2){return r("b",e2.text,e2.type);},defaultInlineRenderer:function defaultInlineRenderer(e2){return r("span",e2.text,e2.type);},defaultBlockRenderer:function defaultBlockRenderer(n2){return r("span",e(n2.text),n2.type);}};function c(n2,r2){var s2="";for(;n2;){if(!Object.keys(t).some(function(o2){var p2=t[o2].exec(n2);if(p2){var t2=p2[0];n2=n2.substring(t2.length);var a2=e(t2);return s2+=(r2[o2]||r2.defaultInlineRenderer)({type:o2,text:a2,cap:p2},r2,c),true;}return false;}))throw new Error("Infinite loop on byte: "+n2.charCodeAt(0));}return s2;}function o(e2){var t2=[];for(e2=e2.replace(/^ +$/gm,"");e2;){if(!Object.keys(n).some(function(r2){var s2=n[r2].exec(e2);if(s2){var n2=s2[0];return e2=e2.substring(n2.length),t2.push({text:n2,type:r2,cap:s2}),true;}return false;}))throw new Error("Infinite loop on byte: "+e2.charCodeAt(0));}return t2;}function p(e2,n2){return e2.map(function(e3){return(n2[e3.type]||n2.defaultBlockRenderer)(e3,n2,c);}).join("").replace(/\n/g,"<br/>");}function a(e2){var n2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:s;return p(o(e2),n2);}// packages/forms/resources/js/components/markdown-editor.js
var markdown_editor_default=function markdown_editor_default(Alpine){Alpine.data("markdownEditorFormComponent",function(_ref172){var state2=_ref172.state,tab=_ref172.tab;return{attachment:null,overlay:null,preview:"",state:state2,tab:tab,init:function init(){var _this27=this;if(this.state!==null){this.render();}this.$watch("state",function(){_this27.render();});},render:function render(){if(this.$refs.textarea.scrollHeight>0){this.$refs.overlay.style.height="150px";this.$refs.overlay.style.height=this.$refs.textarea.scrollHeight+"px";}this.overlay=null;this.overlay=a(this.state);this.preview=null;this.preview=marked(this.state);},checkForAutoInsertion:function checkForAutoInsertion($event){var lines=this.$refs.textarea.value.split("\n");var currentLine=this.$refs.textarea.value.substring(0,this.$refs.textarea.value.selectionStart).split("\n").length;var previousLine=lines[currentLine-2];if(!previousLine.match(/^(\*\s|-\s)|^(\d)+\./)){return;}if(previousLine.match(/^(\*\s)/)){if(previousLine.trim().length>1){lines[currentLine-1]="* ";}else{delete lines[currentLine-2];}}else if(previousLine.match(/^(-\s)/)){if(previousLine.trim().length>1){lines[currentLine-1]="- ";}else{delete lines[currentLine-2];}}else{var matches=previousLine.match(/^(\d)+/);var number=matches[0];if(previousLine.trim().length>number.length+2){lines[currentLine-1]="".concat(parseInt(number)+1,". ");}else{delete lines[currentLine-2];}}this.state=lines.join("\n");this.render();}};});};// packages/forms/resources/js/components/multi-select.js
var multi_select_default=function multi_select_default(Alpine){Alpine.data("multiSelectFormComponent",function(_ref173){var getOptionLabelsUsing=_ref173.getOptionLabelsUsing,getSearchResultsUsing=_ref173.getSearchResultsUsing,isAutofocused=_ref173.isAutofocused,options2=_ref173.options,state2=_ref173.state;return{focusedOptionIndex:null,index:{},isLoading:false,isOpen:false,labels:[],options:options2,search:"",state:state2,init:function(){var _init2=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11(){var _this28=this;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:if(isAutofocused){this.openListbox();}if(!this.state){this.state=[];}this.addOptionsToIndex(this.options);_context11.next=5;return this.getOptionLabels();case 5:this.labels=_context11.sent;this.$watch("search",/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9(){var search,key;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:if(!(!_this28.isOpen||_this28.search===""||_this28.search===null)){_context9.next=4;break;}_this28.options=options2;_this28.focusedOptionIndex=0;return _context9.abrupt("return");case 4:if(!Object.keys(options2).length){_context9.next=11;break;}_this28.options={};search=_this28.search.trim().toLowerCase();for(key in options2){if(options2[key].trim().toLowerCase().includes(search)){_this28.options[key]=options2[key];}}_this28.focusedOptionIndex=0;_context9.next=18;break;case 11:_this28.isLoading=true;_context9.next=14;return getSearchResultsUsing(_this28.search);case 14:_this28.options=_context9.sent;_this28.addOptionsToIndex(_this28.options);_this28.focusedOptionIndex=0;_this28.isLoading=false;case 18:case"end":return _context9.stop();}}},_callee9);})));this.$watch("state",/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:_context10.next=2;return _this28.getOptionLabels();case 2:_this28.labels=_context10.sent;case 3:case"end":return _context10.stop();}}},_callee10);})));case 8:case"end":return _context11.stop();}}},_callee11,this);}));function init(){return _init2.apply(this,arguments);}return init;}(),addOptionsToIndex:function addOptionsToIndex(options3){this.index=_objectSpread(_objectSpread({},this.index),options3);},clearState:function clearState(){this.state=[];this.labels=[];this.closeListbox();},closeListbox:function closeListbox(){this.isOpen=false;this.focusedOptionIndex=null;this.search="";},evaluatePosition:function evaluatePosition(){var availableHeight=window.innerHeight-this.$refs.button.offsetHeight;var element=this.$refs.button;while(element){availableHeight-=element.offsetTop;element=element.offsetParent;}if(this.$refs.listbox.offsetHeight<=availableHeight){this.$refs.listbox.style.bottom="auto";return;}this.$refs.listbox.style.bottom="".concat(this.$refs.button.offsetHeight,"px");},focusNextOption:function focusNextOption(){if(this.focusedOptionIndex===null){this.focusedOptionIndex=Object.keys(this.options).length-1;return;}if(this.focusedOptionIndex+1>=Object.keys(this.options).length){return;}this.focusedOptionIndex++;this.$refs.listboxOptionsList.children[this.focusedOptionIndex].scrollIntoView({block:"center"});},focusPreviousOption:function focusPreviousOption(){if(this.focusedOptionIndex===null){this.focusedOptionIndex=0;return;}if(this.focusedOptionIndex<=0){return;}this.focusedOptionIndex--;this.$refs.listboxOptionsList.children[this.focusedOptionIndex].scrollIntoView({block:"center"});},openListbox:function openListbox(){var _this29=this;this.focusedOptionIndex=0;this.isOpen=true;this.$nextTick(function(){_this29.$refs.search.focus();_this29.evaluatePosition();_this29.$refs.listboxOptionsList.children[_this29.focusedOptionIndex].scrollIntoView({block:"center"});});},selectOption:function selectOption(){var index=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!this.isOpen){this.closeListbox();return;}var value=Object.keys(this.options)[index!==null&&index!==void 0?index:this.focusedOptionIndex];if(this.state.indexOf(value)<0){this.state.push(value);}else{this.deselectOption(value);}this.closeListbox();},deselectOption:function deselectOption(optionToDeselect){this.state=this.state.filter(function(option2){return option2!==optionToDeselect;});},toggleListboxVisibility:function toggleListboxVisibility(){if(this.isOpen){this.closeListbox();return;}this.openListbox();},getOptionLabels:function(){var _getOptionLabels=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12(){var labels,areAllLabelsIndexed,_iterator13,_step13,_this$index$key,key,label;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:labels={};areAllLabelsIndexed=true;_iterator13=_createForOfIteratorHelper(this.state);_context12.prev=3;_iterator13.s();case 5:if((_step13=_iterator13.n()).done){_context12.next=14;break;}key=_step13.value;label=(_this$index$key=this.index[key])!==null&&_this$index$key!==void 0?_this$index$key:null;if(!(label===null)){_context12.next=11;break;}areAllLabelsIndexed=false;return _context12.abrupt("break",14);case 11:labels[key]=label;case 12:_context12.next=5;break;case 14:_context12.next=19;break;case 16:_context12.prev=16;_context12.t0=_context12["catch"](3);_iterator13.e(_context12.t0);case 19:_context12.prev=19;_iterator13.f();return _context12.finish(19);case 22:if(!areAllLabelsIndexed){_context12.next=24;break;}return _context12.abrupt("return",labels);case 24:_context12.next=26;return getOptionLabelsUsing();case 26:labels=_context12.sent;this.addOptionsToIndex(labels);return _context12.abrupt("return",labels);case 29:case"end":return _context12.stop();}}},_callee12,this,[[3,16,19,22]]);}));function getOptionLabels(){return _getOptionLabels.apply(this,arguments);}return getOptionLabels;}()};});};// packages/forms/resources/js/components/rich-editor.js
var import_trix=__toModule(require_trix());import_trix["default"].config.blockAttributes.heading={tagName:"h2",terminal:true,breakOnReturn:true,group:false};import_trix["default"].config.blockAttributes.subHeading={tagName:"h3",terminal:true,breakOnReturn:true,group:false};var rich_editor_default=function rich_editor_default(Alpine){Alpine.data("richEditorFormComponent",function(_ref176){var state2=_ref176.state;return{state:state2,init:function init(){var _this$$refs$trix,_this$$refs$trix$edit,_this30=this;(_this$$refs$trix=this.$refs.trix)===null||_this$$refs$trix===void 0?void 0:(_this$$refs$trix$edit=_this$$refs$trix.editor)===null||_this$$refs$trix$edit===void 0?void 0:_this$$refs$trix$edit.loadHTML(this.state);this.$watch("state",function(){var _this30$$refs$trix,_this30$$refs$trix$ed;if(document.activeElement===_this30.$refs.trix){return;}(_this30$$refs$trix=_this30.$refs.trix)===null||_this30$$refs$trix===void 0?void 0:(_this30$$refs$trix$ed=_this30$$refs$trix.editor)===null||_this30$$refs$trix$ed===void 0?void 0:_this30$$refs$trix$ed.loadHTML(_this30.state);});}};});};// packages/forms/resources/js/components/select.js
var select_default=function select_default(Alpine){Alpine.data("selectFormComponent",function(_ref177){var getOptionLabelUsing=_ref177.getOptionLabelUsing,getSearchResultsUsing=_ref177.getSearchResultsUsing,isAutofocused=_ref177.isAutofocused,options2=_ref177.options,state2=_ref177.state;return{focusedOptionIndex:null,index:{},isLoading:false,isOpen:false,label:null,options:options2,search:"",state:state2,init:function(){var _init3=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee15(){var _this31=this;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee15$(_context15){while(1){switch(_context15.prev=_context15.next){case 0:if(isAutofocused){this.openListbox();}this.addOptionsToIndex(this.options);_context15.next=4;return this.getOptionLabel();case 4:this.label=_context15.sent;this.$watch("search",/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13(){var search,key;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:if(!(!_this31.isOpen||_this31.search===""||_this31.search===null)){_context13.next=4;break;}_this31.options=options2;_this31.focusedOptionIndex=0;return _context13.abrupt("return");case 4:if(!Object.keys(options2).length){_context13.next=11;break;}_this31.options={};search=_this31.search.trim().toLowerCase();for(key in options2){if(options2[key].trim().toLowerCase().includes(search)){_this31.options[key]=options2[key];}}_this31.focusedOptionIndex=0;_context13.next=18;break;case 11:_this31.isLoading=true;_context13.next=14;return getSearchResultsUsing(_this31.search);case 14:_this31.options=_context13.sent;_this31.addOptionsToIndex(_this31.options);_this31.focusedOptionIndex=0;_this31.isLoading=false;case 18:case"end":return _context13.stop();}}},_callee13);})));this.$watch("state",/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:_context14.next=2;return _this31.getOptionLabel();case 2:_this31.label=_context14.sent;case 3:case"end":return _context14.stop();}}},_callee14);})));case 7:case"end":return _context15.stop();}}},_callee15,this);}));function init(){return _init3.apply(this,arguments);}return init;}(),addOptionToIndex:function addOptionToIndex(key,label){this.index[key]=label;},addOptionsToIndex:function addOptionsToIndex(options3){this.index=_objectSpread(_objectSpread({},this.index),options3);},clearState:function clearState(){this.state=null;this.label=null;this.closeListbox();},closeListbox:function closeListbox(){this.isOpen=false;this.focusedOptionIndex=null;this.search="";},evaluatePosition:function evaluatePosition(){var availableHeight=window.innerHeight-this.$refs.button.offsetHeight;var element=this.$refs.button;while(element){availableHeight-=element.offsetTop;element=element.offsetParent;}if(this.$refs.listbox.offsetHeight<=availableHeight){this.$refs.listbox.style.bottom="auto";return;}this.$refs.listbox.style.bottom="".concat(this.$refs.button.offsetHeight,"px");},focusNextOption:function focusNextOption(){if(this.focusedOptionIndex===null){this.focusedOptionIndex=Object.keys(this.options).length-1;return;}if(this.focusedOptionIndex+1>=Object.keys(this.options).length){return;}this.focusedOptionIndex++;this.$refs.listboxOptionsList.children[this.focusedOptionIndex].scrollIntoView({block:"center"});},focusPreviousOption:function focusPreviousOption(){if(this.focusedOptionIndex===null){this.focusedOptionIndex=0;return;}if(this.focusedOptionIndex<=0){return;}this.focusedOptionIndex--;this.$refs.listboxOptionsList.children[this.focusedOptionIndex].scrollIntoView({block:"center"});},openListbox:function openListbox(){var _this32=this;this.focusedOptionIndex=Object.keys(this.options).indexOf(this.state);if(this.focusedOptionIndex<0){this.focusedOptionIndex=0;}this.isOpen=true;this.$nextTick(function(){_this32.$refs.search.focus();_this32.evaluatePosition();_this32.$refs.listboxOptionsList.children[_this32.focusedOptionIndex].scrollIntoView({block:"center"});});},selectOption:function selectOption(){var index=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!this.isOpen){this.closeListbox();return;}this.state=Object.keys(this.options)[index!==null&&index!==void 0?index:this.focusedOptionIndex];this.label=this.options[this.state];this.closeListbox();},toggleListboxVisibility:function toggleListboxVisibility(){if(this.isOpen){this.closeListbox();return;}this.openListbox();},getOptionLabel:function(){var _getOptionLabel=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee16(){var _this$index$this$stat;var label;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee16$(_context16){while(1){switch(_context16.prev=_context16.next){case 0:label=(_this$index$this$stat=this.index[this.state])!==null&&_this$index$this$stat!==void 0?_this$index$this$stat:null;if(!(label!==null)){_context16.next=3;break;}return _context16.abrupt("return",label);case 3:_context16.next=5;return getOptionLabelUsing(this.state);case 5:label=_context16.sent;this.addOptionToIndex(this.state,label);return _context16.abrupt("return",label);case 8:case"end":return _context16.stop();}}},_callee16,this);}));function getOptionLabel(){return _getOptionLabel.apply(this,arguments);}return getOptionLabel;}()};});};// packages/forms/resources/js/components/tags-input.js
var tags_input_default=function tags_input_default(Alpine){Alpine.data("tagsInputFormComponent",function(_ref180){var state2=_ref180.state;return{newTag:"",state:state2,createTag:function createTag(){this.newTag=this.newTag.trim();if(this.newTag===""){return;}if(this.state.includes(this.newTag)){this.newTag="";return;}this.state.push(this.newTag);this.newTag="";},deleteTag:function deleteTag(tagToDelete){this.state=this.state.filter(function(tag){return tag!==tagToDelete;});}};});};// node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js
function _typeof(obj){"@babel/helpers - typeof";return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(obj2){return typeof obj2;}:function(obj2){return obj2&&typeof Symbol=="function"&&obj2.constructor===Symbol&&obj2!==Symbol.prototype?"symbol":typeof obj2;},_typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});Object.defineProperty(subClass,"prototype",{writable:false});if(superClass)_setPrototypeOf(subClass,superClass);}function _getPrototypeOf(o2){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf2(o3){return o3.__proto__||Object.getPrototypeOf(o3);};return _getPrototypeOf(o2);}function _setPrototypeOf(o2,p2){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf2(o3,p3){o3.__proto__=p3;return o3;};return _setPrototypeOf(o2,p2);}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e2){return false;}}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _assertThisInitialized(self2){if(self2===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self2;}function _possibleConstructorReturn(self2,call){if(call&&(_typeof2(call)==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self2);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _get(){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get;}else{_get=function _get2(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(arguments.length<3?target:receiver);}return desc.value;};}return _get.apply(this,arguments);}function set(target,property,value,receiver){if(typeof Reflect!=="undefined"&&Reflect.set){set=Reflect.set;}else{set=function set2(target2,property2,value2,receiver2){var base=_superPropBase(target2,property2);var desc;if(base){desc=Object.getOwnPropertyDescriptor(base,property2);if(desc.set){desc.set.call(receiver2,value2);return true;}else if(!desc.writable){return false;}}desc=Object.getOwnPropertyDescriptor(receiver2,property2);if(desc){if(!desc.writable){return false;}desc.value=value2;Object.defineProperty(receiver2,property2,desc);}else{_defineProperty(receiver2,property2,value2);}return true;};}return set(target,property,value,receiver);}function _set(target,property,value,receiver,isStrict){var s2=set(target,property,value,receiver||target);if(!s2&&isStrict){throw new Error("failed to set property");}return value;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _unsupportedIterableToArray(o2,minLen){if(!o2)return;if(typeof o2==="string")return _arrayLikeToArray(o2,minLen);var n2=Object.prototype.toString.call(o2).slice(8,-1);if(n2==="Object"&&o2.constructor)n2=o2.constructor.name;if(n2==="Map"||n2==="Set")return Array.from(o2);if(n2==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))return _arrayLikeToArray(o2,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}// node_modules/imask/esm/core/change-details.js
var ChangeDetails=/* @__PURE__ */function(){function ChangeDetails2(details){_classCallCheck(this,ChangeDetails2);Object.assign(this,{inserted:"",rawInserted:"",skip:false,tailShift:0},details);}_createClass(ChangeDetails2,[{key:"aggregate",value:function aggregate(details){this.rawInserted+=details.rawInserted;this.skip=this.skip||details.skip;this.inserted+=details.inserted;this.tailShift+=details.tailShift;return this;}},{key:"offset",get:function get(){return this.tailShift+this.inserted.length;}}]);return ChangeDetails2;}();// node_modules/imask/esm/core/utils.js
function isString2(str){return typeof str==="string"||str instanceof String;}var DIRECTION={NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT"};function forceDirection(direction){switch(direction){case DIRECTION.LEFT:return DIRECTION.FORCE_LEFT;case DIRECTION.RIGHT:return DIRECTION.FORCE_RIGHT;default:return direction;}}function escapeRegExp(str){return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1");}function normalizePrepare(prep){return Array.isArray(prep)?prep:[prep,new ChangeDetails()];}function objectIncludes(b,a2){if(a2===b)return true;var arrA=Array.isArray(a2),arrB=Array.isArray(b),i;if(arrA&&arrB){if(a2.length!=b.length)return false;for(i=0;i<a2.length;i++){if(!objectIncludes(a2[i],b[i]))return false;}return true;}if(arrA!=arrB)return false;if(a2&&b&&_typeof(a2)==="object"&&_typeof(b)==="object"){var dateA=a2 instanceof Date,dateB=b instanceof Date;if(dateA&&dateB)return a2.getTime()==b.getTime();if(dateA!=dateB)return false;var regexpA=a2 instanceof RegExp,regexpB=b instanceof RegExp;if(regexpA&&regexpB)return a2.toString()==b.toString();if(regexpA!=regexpB)return false;var keys=Object.keys(a2);for(i=0;i<keys.length;i++){if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return false;}for(i=0;i<keys.length;i++){if(!objectIncludes(b[keys[i]],a2[keys[i]]))return false;}return true;}else if(a2&&b&&typeof a2==="function"&&typeof b==="function"){return a2.toString()===b.toString();}return false;}// node_modules/imask/esm/core/action-details.js
var ActionDetails=/* @__PURE__ */function(){function ActionDetails2(value,cursorPos,oldValue,oldSelection){_classCallCheck(this,ActionDetails2);this.value=value;this.cursorPos=cursorPos;this.oldValue=oldValue;this.oldSelection=oldSelection;while(this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos)){--this.oldSelection.start;}}_createClass(ActionDetails2,[{key:"startChangePos",get:function get(){return Math.min(this.cursorPos,this.oldSelection.start);}},{key:"insertedCount",get:function get(){return this.cursorPos-this.startChangePos;}},{key:"inserted",get:function get(){return this.value.substr(this.startChangePos,this.insertedCount);}},{key:"removedCount",get:function get(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0);}},{key:"removed",get:function get(){return this.oldValue.substr(this.startChangePos,this.removedCount);}},{key:"head",get:function get(){return this.value.substring(0,this.startChangePos);}},{key:"tail",get:function get(){return this.value.substring(this.startChangePos+this.insertedCount);}},{key:"removeDirection",get:function get(){if(!this.removedCount||this.insertedCount)return DIRECTION.NONE;return(this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos)&&this.oldSelection.end===this.oldSelection.start?DIRECTION.RIGHT:DIRECTION.LEFT;}}]);return ActionDetails2;}();// node_modules/imask/esm/core/continuous-tail-details.js
var ContinuousTailDetails=/* @__PURE__ */function(){function ContinuousTailDetails2(){var value=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";var from=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;var stop=arguments.length>2?arguments[2]:void 0;_classCallCheck(this,ContinuousTailDetails2);this.value=value;this.from=from;this.stop=stop;}_createClass(ContinuousTailDetails2,[{key:"toString",value:function toString2(){return this.value;}},{key:"extend",value:function extend(tail){this.value+=String(tail);}},{key:"appendTo",value:function appendTo(masked){return masked.append(this.toString(),{tail:true}).aggregate(masked._appendPlaceholder());}},{key:"state",get:function get(){return{value:this.value,from:this.from,stop:this.stop};},set:function set2(state2){Object.assign(this,state2);}},{key:"unshift",value:function unshift(beforePos){if(!this.value.length||beforePos!=null&&this.from>=beforePos)return"";var shiftChar=this.value[0];this.value=this.value.slice(1);return shiftChar;}},{key:"shift",value:function shift(){if(!this.value.length)return"";var shiftChar=this.value[this.value.length-1];this.value=this.value.slice(0,-1);return shiftChar;}}]);return ContinuousTailDetails2;}();// node_modules/imask/esm/core/holder.js
function IMask(el){var opts=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new IMask.InputMask(el,opts);}// node_modules/imask/esm/masked/base.js
var Masked=/* @__PURE__ */function(){function Masked2(opts){_classCallCheck(this,Masked2);this._value="";this._update(Object.assign({},Masked2.DEFAULTS,opts));this.isInitialized=true;}_createClass(Masked2,[{key:"updateOptions",value:function updateOptions(opts){if(!Object.keys(opts).length)return;this.withValueRefresh(this._update.bind(this,opts));}},{key:"_update",value:function _update(opts){Object.assign(this,opts);}},{key:"state",get:function get(){return{_value:this.value};},set:function set2(state2){this._value=state2._value;}},{key:"reset",value:function reset(){this._value="";}},{key:"value",get:function get(){return this._value;},set:function set2(value){this.resolve(value);}},{key:"resolve",value:function resolve(value){this.reset();this.append(value,{input:true},"");this.doCommit();return this.value;}},{key:"unmaskedValue",get:function get(){return this.value;},set:function set2(value){this.reset();this.append(value,{},"");this.doCommit();}},{key:"typedValue",get:function get(){return this.doParse(this.value);},set:function set2(value){this.value=this.doFormat(value);}},{key:"rawInputValue",get:function get(){return this.extractInput(0,this.value.length,{raw:true});},set:function set2(value){this.reset();this.append(value,{raw:true},"");this.doCommit();}},{key:"isComplete",get:function get(){return true;}},{key:"isFilled",get:function get(){return this.isComplete;}},{key:"nearestInputPos",value:function nearestInputPos(cursorPos,direction){return cursorPos;}},{key:"extractInput",value:function extractInput(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;return this.value.slice(fromPos,toPos);}},{key:"extractTail",value:function extractTail(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;return new ContinuousTailDetails(this.extractInput(fromPos,toPos),fromPos);}},{key:"appendTail",value:function appendTail(tail){if(isString2(tail))tail=new ContinuousTailDetails(String(tail));return tail.appendTo(this);}},{key:"_appendCharRaw",value:function _appendCharRaw(ch){if(!ch)return new ChangeDetails();this._value+=ch;return new ChangeDetails({inserted:ch,rawInserted:ch});}},{key:"_appendChar",value:function _appendChar(ch){var flags=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var checkTail=arguments.length>2?arguments[2]:void 0;var consistentState=this.state;var details;var _normalizePrepare=normalizePrepare(this.doPrepare(ch,flags));var _normalizePrepare2=_slicedToArray(_normalizePrepare,2);ch=_normalizePrepare2[0];details=_normalizePrepare2[1];details=details.aggregate(this._appendCharRaw(ch,flags));if(details.inserted){var consistentTail;var appended=this.doValidate(flags)!==false;if(appended&&checkTail!=null){var beforeTailState=this.state;if(this.overwrite===true){consistentTail=checkTail.state;checkTail.unshift(this.value.length);}var tailDetails=this.appendTail(checkTail);appended=tailDetails.rawInserted===checkTail.toString();if(!(appended&&tailDetails.inserted)&&this.overwrite==="shift"){this.state=beforeTailState;consistentTail=checkTail.state;checkTail.shift();tailDetails=this.appendTail(checkTail);appended=tailDetails.rawInserted===checkTail.toString();}if(appended&&tailDetails.inserted)this.state=beforeTailState;}if(!appended){details=new ChangeDetails();this.state=consistentState;if(checkTail&&consistentTail)checkTail.state=consistentTail;}}return details;}},{key:"_appendPlaceholder",value:function _appendPlaceholder(){return new ChangeDetails();}},{key:"_appendEager",value:function _appendEager(){return new ChangeDetails();}},{key:"append",value:function append(str,flags,tail){if(!isString2(str))throw new Error("value should be string");var details=new ChangeDetails();var checkTail=isString2(tail)?new ContinuousTailDetails(String(tail)):tail;if(flags&&flags.tail)flags._beforeTailState=this.state;for(var ci=0;ci<str.length;++ci){details.aggregate(this._appendChar(str[ci],flags,checkTail));}if(checkTail!=null){details.tailShift+=this.appendTail(checkTail).tailShift;}if(this.eager&&flags!==null&&flags!==void 0&&flags.input&&str){details.aggregate(this._appendEager());}return details;}},{key:"remove",value:function remove(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;this._value=this.value.slice(0,fromPos)+this.value.slice(toPos);return new ChangeDetails();}},{key:"withValueRefresh",value:function withValueRefresh(fn2){if(this._refreshing||!this.isInitialized)return fn2();this._refreshing=true;var rawInput=this.rawInputValue;var value=this.value;var ret=fn2();this.rawInputValue=rawInput;if(this.value&&this.value!==value&&value.indexOf(this.value)===0){this.append(value.slice(this.value.length),{},"");}delete this._refreshing;return ret;}},{key:"runIsolated",value:function runIsolated(fn2){if(this._isolated||!this.isInitialized)return fn2(this);this._isolated=true;var state2=this.state;var ret=fn2(this);this.state=state2;delete this._isolated;return ret;}},{key:"doPrepare",value:function doPrepare(str){var flags=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.prepare?this.prepare(str,this,flags):str;}},{key:"doValidate",value:function doValidate(flags){return(!this.validate||this.validate(this.value,this,flags))&&(!this.parent||this.parent.doValidate(flags));}},{key:"doCommit",value:function doCommit(){if(this.commit)this.commit(this.value,this);}},{key:"doFormat",value:function doFormat(value){return this.format?this.format(value,this):value;}},{key:"doParse",value:function doParse(str){return this.parse?this.parse(str,this):str;}},{key:"splice",value:function splice(start,deleteCount,inserted,removeDirection){var tailPos=start+deleteCount;var tail=this.extractTail(tailPos);var oldRawValue;if(this.eager){removeDirection=forceDirection(removeDirection);oldRawValue=this.extractInput(0,tailPos,{raw:true});}var startChangePos=this.nearestInputPos(start,deleteCount>1&&start!==0&&!this.eager?DIRECTION.NONE:removeDirection);var details=new ChangeDetails({tailShift:startChangePos-start}).aggregate(this.remove(startChangePos));if(this.eager&&removeDirection!==DIRECTION.NONE&&oldRawValue===this.rawInputValue){if(removeDirection===DIRECTION.FORCE_LEFT){var valLength;while(oldRawValue===this.rawInputValue&&(valLength=this.value.length)){details.aggregate(new ChangeDetails({tailShift:-1})).aggregate(this.remove(valLength-1));}}else if(removeDirection===DIRECTION.FORCE_RIGHT){tail.unshift();}}return details.aggregate(this.append(inserted,{input:true},tail));}},{key:"maskEquals",value:function maskEquals(mask){return this.mask===mask;}}]);return Masked2;}();Masked.DEFAULTS={format:function format(v){return v;},parse:function parse2(v){return v;}};IMask.Masked=Masked;// node_modules/imask/esm/masked/factory.js
function maskedClass(mask){if(mask==null){throw new Error("mask property should be defined");}if(mask instanceof RegExp)return IMask.MaskedRegExp;if(isString2(mask))return IMask.MaskedPattern;if(mask instanceof Date||mask===Date)return IMask.MaskedDate;if(mask instanceof Number||typeof mask==="number"||mask===Number)return IMask.MaskedNumber;if(Array.isArray(mask)||mask===Array)return IMask.MaskedDynamic;if(IMask.Masked&&mask.prototype instanceof IMask.Masked)return mask;if(mask instanceof IMask.Masked)return mask.constructor;if(mask instanceof Function)return IMask.MaskedFunction;console.warn("Mask not found for mask",mask);return IMask.Masked;}function createMask(opts){if(IMask.Masked&&opts instanceof IMask.Masked)return opts;opts=Object.assign({},opts);var mask=opts.mask;if(IMask.Masked&&mask instanceof IMask.Masked)return mask;var MaskedClass=maskedClass(mask);if(!MaskedClass)throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");return new MaskedClass(opts);}IMask.createMask=createMask;// node_modules/imask/esm/masked/pattern/input-definition.js
var _excluded=["mask"];var DEFAULT_INPUT_DEFINITIONS={"0":/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./};var PatternInputDefinition=/* @__PURE__ */function(){function PatternInputDefinition2(opts){_classCallCheck(this,PatternInputDefinition2);var mask=opts.mask,blockOpts=_objectWithoutProperties(opts,_excluded);this.masked=createMask({mask:mask});Object.assign(this,blockOpts);}_createClass(PatternInputDefinition2,[{key:"reset",value:function reset(){this.isFilled=false;this.masked.reset();}},{key:"remove",value:function remove(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;if(fromPos===0&&toPos>=1){this.isFilled=false;return this.masked.remove(fromPos,toPos);}return new ChangeDetails();}},{key:"value",get:function get(){return this.masked.value||(this.isFilled&&!this.isOptional?this.placeholderChar:"");}},{key:"unmaskedValue",get:function get(){return this.masked.unmaskedValue;}},{key:"isComplete",get:function get(){return Boolean(this.masked.value)||this.isOptional;}},{key:"_appendChar",value:function _appendChar(ch){var flags=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isFilled)return new ChangeDetails();var state2=this.masked.state;var details=this.masked._appendChar(ch,flags);if(details.inserted&&this.doValidate(flags)===false){details.inserted=details.rawInserted="";this.masked.state=state2;}if(!details.inserted&&!this.isOptional&&!this.lazy&&!flags.input){details.inserted=this.placeholderChar;}details.skip=!details.inserted&&!this.isOptional;this.isFilled=Boolean(details.inserted);return details;}},{key:"append",value:function append(){var _this$masked;return(_this$masked=this.masked).append.apply(_this$masked,arguments);}},{key:"_appendPlaceholder",value:function _appendPlaceholder(){var details=new ChangeDetails();if(this.isFilled||this.isOptional)return details;this.isFilled=true;details.inserted=this.placeholderChar;return details;}},{key:"_appendEager",value:function _appendEager(){return new ChangeDetails();}},{key:"extractTail",value:function extractTail(){var _this$masked2;return(_this$masked2=this.masked).extractTail.apply(_this$masked2,arguments);}},{key:"appendTail",value:function appendTail(){var _this$masked3;return(_this$masked3=this.masked).appendTail.apply(_this$masked3,arguments);}},{key:"extractInput",value:function extractInput(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;var flags=arguments.length>2?arguments[2]:void 0;return this.masked.extractInput(fromPos,toPos,flags);}},{key:"nearestInputPos",value:function nearestInputPos(cursorPos){var direction=arguments.length>1&&arguments[1]!==void 0?arguments[1]:DIRECTION.NONE;var minPos=0;var maxPos=this.value.length;var boundPos=Math.min(Math.max(cursorPos,minPos),maxPos);switch(direction){case DIRECTION.LEFT:case DIRECTION.FORCE_LEFT:return this.isComplete?boundPos:minPos;case DIRECTION.RIGHT:case DIRECTION.FORCE_RIGHT:return this.isComplete?boundPos:maxPos;case DIRECTION.NONE:default:return boundPos;}}},{key:"doValidate",value:function doValidate(){var _this$masked4,_this$parent;return(_this$masked4=this.masked).doValidate.apply(_this$masked4,arguments)&&(!this.parent||(_this$parent=this.parent).doValidate.apply(_this$parent,arguments));}},{key:"doCommit",value:function doCommit(){this.masked.doCommit();}},{key:"state",get:function get(){return{masked:this.masked.state,isFilled:this.isFilled};},set:function set2(state2){this.masked.state=state2.masked;this.isFilled=state2.isFilled;}}]);return PatternInputDefinition2;}();// node_modules/imask/esm/masked/pattern/fixed-definition.js
var PatternFixedDefinition=/* @__PURE__ */function(){function PatternFixedDefinition2(opts){_classCallCheck(this,PatternFixedDefinition2);Object.assign(this,opts);this._value="";this.isFixed=true;}_createClass(PatternFixedDefinition2,[{key:"value",get:function get(){return this._value;}},{key:"unmaskedValue",get:function get(){return this.isUnmasking?this.value:"";}},{key:"reset",value:function reset(){this._isRawInput=false;this._value="";}},{key:"remove",value:function remove(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._value.length;this._value=this._value.slice(0,fromPos)+this._value.slice(toPos);if(!this._value)this._isRawInput=false;return new ChangeDetails();}},{key:"nearestInputPos",value:function nearestInputPos(cursorPos){var direction=arguments.length>1&&arguments[1]!==void 0?arguments[1]:DIRECTION.NONE;var minPos=0;var maxPos=this._value.length;switch(direction){case DIRECTION.LEFT:case DIRECTION.FORCE_LEFT:return minPos;case DIRECTION.NONE:case DIRECTION.RIGHT:case DIRECTION.FORCE_RIGHT:default:return maxPos;}}},{key:"extractInput",value:function extractInput(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._value.length;var flags=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return flags.raw&&this._isRawInput&&this._value.slice(fromPos,toPos)||"";}},{key:"isComplete",get:function get(){return true;}},{key:"isFilled",get:function get(){return Boolean(this._value);}},{key:"_appendChar",value:function _appendChar(ch){var flags=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var details=new ChangeDetails();if(this._value)return details;var appended=this["char"]===ch;var isResolved=appended&&(this.isUnmasking||flags.input||flags.raw)&&!this.eager&&!flags.tail;if(isResolved)details.rawInserted=this["char"];this._value=details.inserted=this["char"];this._isRawInput=isResolved&&(flags.raw||flags.input);return details;}},{key:"_appendEager",value:function _appendEager(){return this._appendChar(this["char"]);}},{key:"_appendPlaceholder",value:function _appendPlaceholder(){var details=new ChangeDetails();if(this._value)return details;this._value=details.inserted=this["char"];return details;}},{key:"extractTail",value:function extractTail(){arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;return new ContinuousTailDetails("");}},{key:"appendTail",value:function appendTail(tail){if(isString2(tail))tail=new ContinuousTailDetails(String(tail));return tail.appendTo(this);}},{key:"append",value:function append(str,flags,tail){var details=this._appendChar(str[0],flags);if(tail!=null){details.tailShift+=this.appendTail(tail).tailShift;}return details;}},{key:"doCommit",value:function doCommit(){}},{key:"state",get:function get(){return{_value:this._value,_isRawInput:this._isRawInput};},set:function set2(state2){Object.assign(this,state2);}}]);return PatternFixedDefinition2;}();// node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var _excluded2=["chunks"];var ChunksTailDetails=/* @__PURE__ */function(){function ChunksTailDetails2(){var chunks=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];var from=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;_classCallCheck(this,ChunksTailDetails2);this.chunks=chunks;this.from=from;}_createClass(ChunksTailDetails2,[{key:"toString",value:function toString2(){return this.chunks.map(String).join("");}},{key:"extend",value:function extend(tailChunk){if(!String(tailChunk))return;if(isString2(tailChunk))tailChunk=new ContinuousTailDetails(String(tailChunk));var lastChunk=this.chunks[this.chunks.length-1];var extendLast=lastChunk&&(lastChunk.stop===tailChunk.stop||tailChunk.stop==null)&&tailChunk.from===lastChunk.from+lastChunk.toString().length;if(tailChunk instanceof ContinuousTailDetails){if(extendLast){lastChunk.extend(tailChunk.toString());}else{this.chunks.push(tailChunk);}}else if(tailChunk instanceof ChunksTailDetails2){if(tailChunk.stop==null){var firstTailChunk;while(tailChunk.chunks.length&&tailChunk.chunks[0].stop==null){firstTailChunk=tailChunk.chunks.shift();firstTailChunk.from+=tailChunk.from;this.extend(firstTailChunk);}}if(tailChunk.toString()){tailChunk.stop=tailChunk.blockIndex;this.chunks.push(tailChunk);}}}},{key:"appendTo",value:function appendTo(masked){if(!(masked instanceof IMask.MaskedPattern)){var tail=new ContinuousTailDetails(this.toString());return tail.appendTo(masked);}var details=new ChangeDetails();for(var ci=0;ci<this.chunks.length&&!details.skip;++ci){var chunk=this.chunks[ci];var lastBlockIter=masked._mapPosToBlock(masked.value.length);var stop=chunk.stop;var chunkBlock=void 0;if(stop!=null&&(!lastBlockIter||lastBlockIter.index<=stop)){if(chunk instanceof ChunksTailDetails2||masked._stops.indexOf(stop)>=0){details.aggregate(masked._appendPlaceholder(stop));}chunkBlock=chunk instanceof ChunksTailDetails2&&masked._blocks[stop];}if(chunkBlock){var tailDetails=chunkBlock.appendTail(chunk);tailDetails.skip=false;details.aggregate(tailDetails);masked._value+=tailDetails.inserted;var remainChars=chunk.toString().slice(tailDetails.rawInserted.length);if(remainChars)details.aggregate(masked.append(remainChars,{tail:true}));}else{details.aggregate(masked.append(chunk.toString(),{tail:true}));}}return details;}},{key:"state",get:function get(){return{chunks:this.chunks.map(function(c2){return c2.state;}),from:this.from,stop:this.stop,blockIndex:this.blockIndex};},set:function set2(state2){var chunks=state2.chunks,props=_objectWithoutProperties(state2,_excluded2);Object.assign(this,props);this.chunks=chunks.map(function(cstate){var chunk="chunks"in cstate?new ChunksTailDetails2():new ContinuousTailDetails();chunk.state=cstate;return chunk;});}},{key:"unshift",value:function unshift(beforePos){if(!this.chunks.length||beforePos!=null&&this.from>=beforePos)return"";var chunkShiftPos=beforePos!=null?beforePos-this.from:beforePos;var ci=0;while(ci<this.chunks.length){var chunk=this.chunks[ci];var shiftChar=chunk.unshift(chunkShiftPos);if(chunk.toString()){if(!shiftChar)break;++ci;}else{this.chunks.splice(ci,1);}if(shiftChar)return shiftChar;}return"";}},{key:"shift",value:function shift(){if(!this.chunks.length)return"";var ci=this.chunks.length-1;while(0<=ci){var chunk=this.chunks[ci];var shiftChar=chunk.shift();if(chunk.toString()){if(!shiftChar)break;--ci;}else{this.chunks.splice(ci,1);}if(shiftChar)return shiftChar;}return"";}}]);return ChunksTailDetails2;}();// node_modules/imask/esm/masked/pattern/cursor.js
var PatternCursor=/* @__PURE__ */function(){function PatternCursor2(masked,pos){_classCallCheck(this,PatternCursor2);this.masked=masked;this._log=[];var _ref=masked._mapPosToBlock(pos)||(pos<0?{index:0,offset:0}:{index:this.masked._blocks.length,offset:0}),offset=_ref.offset,index=_ref.index;this.offset=offset;this.index=index;this.ok=false;}_createClass(PatternCursor2,[{key:"block",get:function get(){return this.masked._blocks[this.index];}},{key:"pos",get:function get(){return this.masked._blockStartPos(this.index)+this.offset;}},{key:"state",get:function get(){return{index:this.index,offset:this.offset,ok:this.ok};},set:function set2(s2){Object.assign(this,s2);}},{key:"pushState",value:function pushState(){this._log.push(this.state);}},{key:"popState",value:function popState(){var s2=this._log.pop();this.state=s2;return s2;}},{key:"bindBlock",value:function bindBlock(){if(this.block)return;if(this.index<0){this.index=0;this.offset=0;}if(this.index>=this.masked._blocks.length){this.index=this.masked._blocks.length-1;this.offset=this.block.value.length;}}},{key:"_pushLeft",value:function _pushLeft(fn2){this.pushState();for(this.bindBlock();0<=this.index;--this.index,this.offset=((_this$block=this.block)===null||_this$block===void 0?void 0:_this$block.value.length)||0){var _this$block;if(fn2())return this.ok=true;}return this.ok=false;}},{key:"_pushRight",value:function _pushRight(fn2){this.pushState();for(this.bindBlock();this.index<this.masked._blocks.length;++this.index,this.offset=0){if(fn2())return this.ok=true;}return this.ok=false;}},{key:"pushLeftBeforeFilled",value:function pushLeftBeforeFilled(){var _this=this;return this._pushLeft(function(){if(_this.block.isFixed||!_this.block.value)return;_this.offset=_this.block.nearestInputPos(_this.offset,DIRECTION.FORCE_LEFT);if(_this.offset!==0)return true;});}},{key:"pushLeftBeforeInput",value:function pushLeftBeforeInput(){var _this2=this;return this._pushLeft(function(){if(_this2.block.isFixed)return;_this2.offset=_this2.block.nearestInputPos(_this2.offset,DIRECTION.LEFT);return true;});}},{key:"pushLeftBeforeRequired",value:function pushLeftBeforeRequired(){var _this3=this;return this._pushLeft(function(){if(_this3.block.isFixed||_this3.block.isOptional&&!_this3.block.value)return;_this3.offset=_this3.block.nearestInputPos(_this3.offset,DIRECTION.LEFT);return true;});}},{key:"pushRightBeforeFilled",value:function pushRightBeforeFilled(){var _this4=this;return this._pushRight(function(){if(_this4.block.isFixed||!_this4.block.value)return;_this4.offset=_this4.block.nearestInputPos(_this4.offset,DIRECTION.FORCE_RIGHT);if(_this4.offset!==_this4.block.value.length)return true;});}},{key:"pushRightBeforeInput",value:function pushRightBeforeInput(){var _this5=this;return this._pushRight(function(){if(_this5.block.isFixed)return;_this5.offset=_this5.block.nearestInputPos(_this5.offset,DIRECTION.NONE);return true;});}},{key:"pushRightBeforeRequired",value:function pushRightBeforeRequired(){var _this6=this;return this._pushRight(function(){if(_this6.block.isFixed||_this6.block.isOptional&&!_this6.block.value)return;_this6.offset=_this6.block.nearestInputPos(_this6.offset,DIRECTION.NONE);return true;});}}]);return PatternCursor2;}();// node_modules/imask/esm/masked/regexp.js
var MaskedRegExp=/* @__PURE__ */function(_Masked){_inherits(MaskedRegExp2,_Masked);var _super=_createSuper(MaskedRegExp2);function MaskedRegExp2(){_classCallCheck(this,MaskedRegExp2);return _super.apply(this,arguments);}_createClass(MaskedRegExp2,[{key:"_update",value:function _update(opts){if(opts.mask)opts.validate=function(value){return value.search(opts.mask)>=0;};_get(_getPrototypeOf(MaskedRegExp2.prototype),"_update",this).call(this,opts);}}]);return MaskedRegExp2;}(Masked);IMask.MaskedRegExp=MaskedRegExp;// node_modules/imask/esm/masked/pattern.js
var _excluded3=["_blocks"];var MaskedPattern=/* @__PURE__ */function(_Masked){_inherits(MaskedPattern2,_Masked);var _super=_createSuper(MaskedPattern2);function MaskedPattern2(){var opts=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_classCallCheck(this,MaskedPattern2);opts.definitions=Object.assign({},DEFAULT_INPUT_DEFINITIONS,opts.definitions);return _super.call(this,Object.assign({},MaskedPattern2.DEFAULTS,opts));}_createClass(MaskedPattern2,[{key:"_update",value:function _update(){var opts=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};opts.definitions=Object.assign({},this.definitions,opts.definitions);_get(_getPrototypeOf(MaskedPattern2.prototype),"_update",this).call(this,opts);this._rebuildMask();}},{key:"_rebuildMask",value:function _rebuildMask(){var _this=this;var defs=this.definitions;this._blocks=[];this._stops=[];this._maskedBlocks={};var pattern=this.mask;if(!pattern||!defs)return;var unmaskingBlock=false;var optionalBlock=false;for(var i=0;i<pattern.length;++i){if(this.blocks){var _ret=function(){var p2=pattern.slice(i);var bNames=Object.keys(_this.blocks).filter(function(bName2){return p2.indexOf(bName2)===0;});bNames.sort(function(a2,b){return b.length-a2.length;});var bName=bNames[0];if(bName){var maskedBlock=createMask(Object.assign({parent:_this,lazy:_this.lazy,eager:_this.eager,placeholderChar:_this.placeholderChar,overwrite:_this.overwrite},_this.blocks[bName]));if(maskedBlock){_this._blocks.push(maskedBlock);if(!_this._maskedBlocks[bName])_this._maskedBlocks[bName]=[];_this._maskedBlocks[bName].push(_this._blocks.length-1);}i+=bName.length-1;return"continue";}}();if(_ret==="continue")continue;}var _char2=pattern[i];var isInput=(_char2 in defs);if(_char2===MaskedPattern2.STOP_CHAR){this._stops.push(this._blocks.length);continue;}if(_char2==="{"||_char2==="}"){unmaskingBlock=!unmaskingBlock;continue;}if(_char2==="["||_char2==="]"){optionalBlock=!optionalBlock;continue;}if(_char2===MaskedPattern2.ESCAPE_CHAR){++i;_char2=pattern[i];if(!_char2)break;isInput=false;}var def=isInput?new PatternInputDefinition({parent:this,lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,mask:defs[_char2],isOptional:optionalBlock}):new PatternFixedDefinition({"char":_char2,eager:this.eager,isUnmasking:unmaskingBlock});this._blocks.push(def);}}},{key:"state",get:function get(){return Object.assign({},_get(_getPrototypeOf(MaskedPattern2.prototype),"state",this),{_blocks:this._blocks.map(function(b){return b.state;})});},set:function set2(state2){var _blocks=state2._blocks,maskedState=_objectWithoutProperties(state2,_excluded3);this._blocks.forEach(function(b,bi){return b.state=_blocks[bi];});_set(_getPrototypeOf(MaskedPattern2.prototype),"state",maskedState,this,true);}},{key:"reset",value:function reset(){_get(_getPrototypeOf(MaskedPattern2.prototype),"reset",this).call(this);this._blocks.forEach(function(b){return b.reset();});}},{key:"isComplete",get:function get(){return this._blocks.every(function(b){return b.isComplete;});}},{key:"isFilled",get:function get(){return this._blocks.every(function(b){return b.isFilled;});}},{key:"isFixed",get:function get(){return this._blocks.every(function(b){return b.isFixed;});}},{key:"isOptional",get:function get(){return this._blocks.every(function(b){return b.isOptional;});}},{key:"doCommit",value:function doCommit(){this._blocks.forEach(function(b){return b.doCommit();});_get(_getPrototypeOf(MaskedPattern2.prototype),"doCommit",this).call(this);}},{key:"unmaskedValue",get:function get(){return this._blocks.reduce(function(str,b){return str+=b.unmaskedValue;},"");},set:function set2(unmaskedValue){_set(_getPrototypeOf(MaskedPattern2.prototype),"unmaskedValue",unmaskedValue,this,true);}},{key:"value",get:function get(){return this._blocks.reduce(function(str,b){return str+=b.value;},"");},set:function set2(value){_set(_getPrototypeOf(MaskedPattern2.prototype),"value",value,this,true);}},{key:"appendTail",value:function appendTail(tail){return _get(_getPrototypeOf(MaskedPattern2.prototype),"appendTail",this).call(this,tail).aggregate(this._appendPlaceholder());}},{key:"_appendEager",value:function _appendEager(){var _this$_mapPosToBlock;var details=new ChangeDetails();var startBlockIndex=(_this$_mapPosToBlock=this._mapPosToBlock(this.value.length))===null||_this$_mapPosToBlock===void 0?void 0:_this$_mapPosToBlock.index;if(startBlockIndex==null)return details;if(this._blocks[startBlockIndex].isFilled)++startBlockIndex;for(var bi=startBlockIndex;bi<this._blocks.length;++bi){var d=this._blocks[bi]._appendEager();if(!d.inserted)break;details.aggregate(d);}return details;}},{key:"_appendCharRaw",value:function _appendCharRaw(ch){var flags=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var blockIter=this._mapPosToBlock(this.value.length);var details=new ChangeDetails();if(!blockIter)return details;for(var bi=blockIter.index;;++bi){var _flags$_beforeTailSta;var _block=this._blocks[bi];if(!_block)break;var blockDetails=_block._appendChar(ch,Object.assign({},flags,{_beforeTailState:(_flags$_beforeTailSta=flags._beforeTailState)===null||_flags$_beforeTailSta===void 0?void 0:_flags$_beforeTailSta._blocks[bi]}));var skip=blockDetails.skip;details.aggregate(blockDetails);if(skip||blockDetails.rawInserted)break;}return details;}},{key:"extractTail",value:function extractTail(){var _this2=this;var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;var chunkTail=new ChunksTailDetails();if(fromPos===toPos)return chunkTail;this._forEachBlocksInRange(fromPos,toPos,function(b,bi,bFromPos,bToPos){var blockChunk=b.extractTail(bFromPos,bToPos);blockChunk.stop=_this2._findStopBefore(bi);blockChunk.from=_this2._blockStartPos(bi);if(blockChunk instanceof ChunksTailDetails)blockChunk.blockIndex=bi;chunkTail.extend(blockChunk);});return chunkTail;}},{key:"extractInput",value:function extractInput(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;var flags=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(fromPos===toPos)return"";var input="";this._forEachBlocksInRange(fromPos,toPos,function(b,_,fromPos2,toPos2){input+=b.extractInput(fromPos2,toPos2,flags);});return input;}},{key:"_findStopBefore",value:function _findStopBefore(blockIndex){var stopBefore;for(var si=0;si<this._stops.length;++si){var stop=this._stops[si];if(stop<=blockIndex)stopBefore=stop;else break;}return stopBefore;}},{key:"_appendPlaceholder",value:function _appendPlaceholder(toBlockIndex){var _this3=this;var details=new ChangeDetails();if(this.lazy&&toBlockIndex==null)return details;var startBlockIter=this._mapPosToBlock(this.value.length);if(!startBlockIter)return details;var startBlockIndex=startBlockIter.index;var endBlockIndex=toBlockIndex!=null?toBlockIndex:this._blocks.length;this._blocks.slice(startBlockIndex,endBlockIndex).forEach(function(b){if(!b.lazy||toBlockIndex!=null){var args=b._blocks!=null?[b._blocks.length]:[];var bDetails=b._appendPlaceholder.apply(b,args);_this3._value+=bDetails.inserted;details.aggregate(bDetails);}});return details;}},{key:"_mapPosToBlock",value:function _mapPosToBlock(pos){var accVal="";for(var bi=0;bi<this._blocks.length;++bi){var _block2=this._blocks[bi];var blockStartPos=accVal.length;accVal+=_block2.value;if(pos<=accVal.length){return{index:bi,offset:pos-blockStartPos};}}}},{key:"_blockStartPos",value:function _blockStartPos(blockIndex){return this._blocks.slice(0,blockIndex).reduce(function(pos,b){return pos+=b.value.length;},0);}},{key:"_forEachBlocksInRange",value:function _forEachBlocksInRange(fromPos){var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;var fn2=arguments.length>2?arguments[2]:void 0;var fromBlockIter=this._mapPosToBlock(fromPos);if(fromBlockIter){var toBlockIter=this._mapPosToBlock(toPos);var isSameBlock=toBlockIter&&fromBlockIter.index===toBlockIter.index;var fromBlockStartPos=fromBlockIter.offset;var fromBlockEndPos=toBlockIter&&isSameBlock?toBlockIter.offset:this._blocks[fromBlockIter.index].value.length;fn2(this._blocks[fromBlockIter.index],fromBlockIter.index,fromBlockStartPos,fromBlockEndPos);if(toBlockIter&&!isSameBlock){for(var bi=fromBlockIter.index+1;bi<toBlockIter.index;++bi){fn2(this._blocks[bi],bi,0,this._blocks[bi].value.length);}fn2(this._blocks[toBlockIter.index],toBlockIter.index,0,toBlockIter.offset);}}}},{key:"remove",value:function remove(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;var removeDetails=_get(_getPrototypeOf(MaskedPattern2.prototype),"remove",this).call(this,fromPos,toPos);this._forEachBlocksInRange(fromPos,toPos,function(b,_,bFromPos,bToPos){removeDetails.aggregate(b.remove(bFromPos,bToPos));});return removeDetails;}},{key:"nearestInputPos",value:function nearestInputPos(cursorPos){var direction=arguments.length>1&&arguments[1]!==void 0?arguments[1]:DIRECTION.NONE;if(!this._blocks.length)return 0;var cursor=new PatternCursor(this,cursorPos);if(direction===DIRECTION.NONE){if(cursor.pushRightBeforeInput())return cursor.pos;cursor.popState();if(cursor.pushLeftBeforeInput())return cursor.pos;return this.value.length;}if(direction===DIRECTION.LEFT||direction===DIRECTION.FORCE_LEFT){if(direction===DIRECTION.LEFT){cursor.pushRightBeforeFilled();if(cursor.ok&&cursor.pos===cursorPos)return cursorPos;cursor.popState();}cursor.pushLeftBeforeInput();cursor.pushLeftBeforeRequired();cursor.pushLeftBeforeFilled();if(direction===DIRECTION.LEFT){cursor.pushRightBeforeInput();cursor.pushRightBeforeRequired();if(cursor.ok&&cursor.pos<=cursorPos)return cursor.pos;cursor.popState();if(cursor.ok&&cursor.pos<=cursorPos)return cursor.pos;cursor.popState();}if(cursor.ok)return cursor.pos;if(direction===DIRECTION.FORCE_LEFT)return 0;cursor.popState();if(cursor.ok)return cursor.pos;cursor.popState();if(cursor.ok)return cursor.pos;return 0;}if(direction===DIRECTION.RIGHT||direction===DIRECTION.FORCE_RIGHT){cursor.pushRightBeforeInput();cursor.pushRightBeforeRequired();if(cursor.pushRightBeforeFilled())return cursor.pos;if(direction===DIRECTION.FORCE_RIGHT)return this.value.length;cursor.popState();if(cursor.ok)return cursor.pos;cursor.popState();if(cursor.ok)return cursor.pos;return this.nearestInputPos(cursorPos,DIRECTION.LEFT);}return cursorPos;}},{key:"maskedBlock",value:function maskedBlock(name2){return this.maskedBlocks(name2)[0];}},{key:"maskedBlocks",value:function maskedBlocks(name2){var _this4=this;var indices=this._maskedBlocks[name2];if(!indices)return[];return indices.map(function(gi){return _this4._blocks[gi];});}}]);return MaskedPattern2;}(Masked);MaskedPattern.DEFAULTS={lazy:true,placeholderChar:"_"};MaskedPattern.STOP_CHAR="`";MaskedPattern.ESCAPE_CHAR="\\";MaskedPattern.InputDefinition=PatternInputDefinition;MaskedPattern.FixedDefinition=PatternFixedDefinition;IMask.MaskedPattern=MaskedPattern;// node_modules/imask/esm/masked/range.js
var MaskedRange=/* @__PURE__ */function(_MaskedPattern){_inherits(MaskedRange2,_MaskedPattern);var _super=_createSuper(MaskedRange2);function MaskedRange2(){_classCallCheck(this,MaskedRange2);return _super.apply(this,arguments);}_createClass(MaskedRange2,[{key:"_matchFrom",get:function get(){return this.maxLength-String(this.from).length;}},{key:"_update",value:function _update(opts){opts=Object.assign({to:this.to||0,from:this.from||0,maxLength:this.maxLength||0},opts);var maxLength=String(opts.to).length;if(opts.maxLength!=null)maxLength=Math.max(maxLength,opts.maxLength);opts.maxLength=maxLength;var fromStr=String(opts.from).padStart(maxLength,"0");var toStr=String(opts.to).padStart(maxLength,"0");var sameCharsCount=0;while(sameCharsCount<toStr.length&&toStr[sameCharsCount]===fromStr[sameCharsCount]){++sameCharsCount;}opts.mask=toStr.slice(0,sameCharsCount).replace(/0/g,"\\0")+"0".repeat(maxLength-sameCharsCount);_get(_getPrototypeOf(MaskedRange2.prototype),"_update",this).call(this,opts);}},{key:"isComplete",get:function get(){return _get(_getPrototypeOf(MaskedRange2.prototype),"isComplete",this)&&Boolean(this.value);}},{key:"boundaries",value:function boundaries(str){var minstr="";var maxstr="";var _ref=str.match(/^(\D*)(\d*)(\D*)/)||[],_ref2=_slicedToArray(_ref,3),placeholder=_ref2[1],num=_ref2[2];if(num){minstr="0".repeat(placeholder.length)+num;maxstr="9".repeat(placeholder.length)+num;}minstr=minstr.padEnd(this.maxLength,"0");maxstr=maxstr.padEnd(this.maxLength,"9");return[minstr,maxstr];}},{key:"doPrepare",value:function doPrepare(ch){var flags=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var details;var _normalizePrepare=normalizePrepare(_get(_getPrototypeOf(MaskedRange2.prototype),"doPrepare",this).call(this,ch.replace(/\D/g,""),flags));var _normalizePrepare2=_slicedToArray(_normalizePrepare,2);ch=_normalizePrepare2[0];details=_normalizePrepare2[1];if(!this.autofix||!ch)return ch;var fromStr=String(this.from).padStart(this.maxLength,"0");var toStr=String(this.to).padStart(this.maxLength,"0");var nextVal=this.value+ch;if(nextVal.length>this.maxLength)return"";var _this$boundaries=this.boundaries(nextVal),_this$boundaries2=_slicedToArray(_this$boundaries,2),minstr=_this$boundaries2[0],maxstr=_this$boundaries2[1];if(Number(maxstr)<this.from)return fromStr[nextVal.length-1];if(Number(minstr)>this.to){if(this.autofix==="pad"&&nextVal.length<this.maxLength){return["",details.aggregate(this.append(fromStr[nextVal.length-1]+ch,flags))];}return toStr[nextVal.length-1];}return ch;}},{key:"doValidate",value:function doValidate(){var _get2;var str=this.value;var firstNonZero=str.search(/[^0]/);if(firstNonZero===-1&&str.length<=this._matchFrom)return true;var _this$boundaries3=this.boundaries(str),_this$boundaries4=_slicedToArray(_this$boundaries3,2),minstr=_this$boundaries4[0],maxstr=_this$boundaries4[1];for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return this.from<=Number(maxstr)&&Number(minstr)<=this.to&&(_get2=_get(_getPrototypeOf(MaskedRange2.prototype),"doValidate",this)).call.apply(_get2,[this].concat(args));}}]);return MaskedRange2;}(MaskedPattern);IMask.MaskedRange=MaskedRange;// node_modules/imask/esm/masked/date.js
var MaskedDate=/* @__PURE__ */function(_MaskedPattern){_inherits(MaskedDate2,_MaskedPattern);var _super=_createSuper(MaskedDate2);function MaskedDate2(opts){_classCallCheck(this,MaskedDate2);return _super.call(this,Object.assign({},MaskedDate2.DEFAULTS,opts));}_createClass(MaskedDate2,[{key:"_update",value:function _update(opts){if(opts.mask===Date)delete opts.mask;if(opts.pattern)opts.mask=opts.pattern;var blocks=opts.blocks;opts.blocks=Object.assign({},MaskedDate2.GET_DEFAULT_BLOCKS());if(opts.min)opts.blocks.Y.from=opts.min.getFullYear();if(opts.max)opts.blocks.Y.to=opts.max.getFullYear();if(opts.min&&opts.max&&opts.blocks.Y.from===opts.blocks.Y.to){opts.blocks.m.from=opts.min.getMonth()+1;opts.blocks.m.to=opts.max.getMonth()+1;if(opts.blocks.m.from===opts.blocks.m.to){opts.blocks.d.from=opts.min.getDate();opts.blocks.d.to=opts.max.getDate();}}Object.assign(opts.blocks,this.blocks,blocks);Object.keys(opts.blocks).forEach(function(bk){var b=opts.blocks[bk];if(!("autofix"in b)&&"autofix"in opts)b.autofix=opts.autofix;});_get(_getPrototypeOf(MaskedDate2.prototype),"_update",this).call(this,opts);}},{key:"doValidate",value:function doValidate(){var _get2;var date=this.date;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(_get2=_get(_getPrototypeOf(MaskedDate2.prototype),"doValidate",this)).call.apply(_get2,[this].concat(args))&&(!this.isComplete||this.isDateExist(this.value)&&date!=null&&(this.min==null||this.min<=date)&&(this.max==null||date<=this.max));}},{key:"isDateExist",value:function isDateExist(str){return this.format(this.parse(str,this),this).indexOf(str)>=0;}},{key:"date",get:function get(){return this.typedValue;},set:function set2(date){this.typedValue=date;}},{key:"typedValue",get:function get(){return this.isComplete?_get(_getPrototypeOf(MaskedDate2.prototype),"typedValue",this):null;},set:function set2(value){_set(_getPrototypeOf(MaskedDate2.prototype),"typedValue",value,this,true);}},{key:"maskEquals",value:function maskEquals(mask){return mask===Date||_get(_getPrototypeOf(MaskedDate2.prototype),"maskEquals",this).call(this,mask);}}]);return MaskedDate2;}(MaskedPattern);MaskedDate.DEFAULTS={pattern:"d{.}`m{.}`Y",format:function format2(date){if(!date)return"";var day=String(date.getDate()).padStart(2,"0");var month=String(date.getMonth()+1).padStart(2,"0");var year=date.getFullYear();return[day,month,year].join(".");},parse:function parse3(str){var _str$split=str.split("."),_str$split2=_slicedToArray(_str$split,3),day=_str$split2[0],month=_str$split2[1],year=_str$split2[2];return new Date(year,month-1,day);}};MaskedDate.GET_DEFAULT_BLOCKS=function(){return{d:{mask:MaskedRange,from:1,to:31,maxLength:2},m:{mask:MaskedRange,from:1,to:12,maxLength:2},Y:{mask:MaskedRange,from:1900,to:9999}};};IMask.MaskedDate=MaskedDate;// node_modules/imask/esm/controls/mask-element.js
var MaskElement=/* @__PURE__ */function(){function MaskElement2(){_classCallCheck(this,MaskElement2);}_createClass(MaskElement2,[{key:"selectionStart",get:function get(){var start;try{start=this._unsafeSelectionStart;}catch(e2){}return start!=null?start:this.value.length;}},{key:"selectionEnd",get:function get(){var end;try{end=this._unsafeSelectionEnd;}catch(e2){}return end!=null?end:this.value.length;}},{key:"select",value:function select(start,end){if(start==null||end==null||start===this.selectionStart&&end===this.selectionEnd)return;try{this._unsafeSelect(start,end);}catch(e2){}}},{key:"_unsafeSelect",value:function _unsafeSelect(start,end){}},{key:"isActive",get:function get(){return false;}},{key:"bindEvents",value:function bindEvents(handlers){}},{key:"unbindEvents",value:function unbindEvents(){}}]);return MaskElement2;}();IMask.MaskElement=MaskElement;// node_modules/imask/esm/controls/html-mask-element.js
var HTMLMaskElement=/* @__PURE__ */function(_MaskElement){_inherits(HTMLMaskElement2,_MaskElement);var _super=_createSuper(HTMLMaskElement2);function HTMLMaskElement2(input){var _this;_classCallCheck(this,HTMLMaskElement2);_this=_super.call(this);_this.input=input;_this._handlers={};return _this;}_createClass(HTMLMaskElement2,[{key:"rootElement",get:function get(){var _this$input$getRootNo,_this$input$getRootNo2,_this$input;return(_this$input$getRootNo=(_this$input$getRootNo2=(_this$input=this.input).getRootNode)===null||_this$input$getRootNo2===void 0?void 0:_this$input$getRootNo2.call(_this$input))!==null&&_this$input$getRootNo!==void 0?_this$input$getRootNo:document;}},{key:"isActive",get:function get(){return this.input===this.rootElement.activeElement;}},{key:"_unsafeSelectionStart",get:function get(){return this.input.selectionStart;}},{key:"_unsafeSelectionEnd",get:function get(){return this.input.selectionEnd;}},{key:"_unsafeSelect",value:function _unsafeSelect(start,end){this.input.setSelectionRange(start,end);}},{key:"value",get:function get(){return this.input.value;},set:function set2(value){this.input.value=value;}},{key:"bindEvents",value:function bindEvents(handlers){var _this2=this;Object.keys(handlers).forEach(function(event){return _this2._toggleEventHandler(HTMLMaskElement2.EVENTS_MAP[event],handlers[event]);});}},{key:"unbindEvents",value:function unbindEvents(){var _this3=this;Object.keys(this._handlers).forEach(function(event){return _this3._toggleEventHandler(event);});}},{key:"_toggleEventHandler",value:function _toggleEventHandler(event,handler){if(this._handlers[event]){this.input.removeEventListener(event,this._handlers[event]);delete this._handlers[event];}if(handler){this.input.addEventListener(event,handler);this._handlers[event]=handler;}}}]);return HTMLMaskElement2;}(MaskElement);HTMLMaskElement.EVENTS_MAP={selectionChange:"keydown",input:"input",drop:"drop",click:"click",focus:"focus",commit:"blur"};IMask.HTMLMaskElement=HTMLMaskElement;// node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var HTMLContenteditableMaskElement=/* @__PURE__ */function(_HTMLMaskElement){_inherits(HTMLContenteditableMaskElement2,_HTMLMaskElement);var _super=_createSuper(HTMLContenteditableMaskElement2);function HTMLContenteditableMaskElement2(){_classCallCheck(this,HTMLContenteditableMaskElement2);return _super.apply(this,arguments);}_createClass(HTMLContenteditableMaskElement2,[{key:"_unsafeSelectionStart",get:function get(){var root2=this.rootElement;var selection=root2.getSelection&&root2.getSelection();var anchorOffset=selection&&selection.anchorOffset;var focusOffset=selection&&selection.focusOffset;if(focusOffset==null||anchorOffset==null||anchorOffset<focusOffset){return anchorOffset;}return focusOffset;}},{key:"_unsafeSelectionEnd",get:function get(){var root2=this.rootElement;var selection=root2.getSelection&&root2.getSelection();var anchorOffset=selection&&selection.anchorOffset;var focusOffset=selection&&selection.focusOffset;if(focusOffset==null||anchorOffset==null||anchorOffset>focusOffset){return anchorOffset;}return focusOffset;}},{key:"_unsafeSelect",value:function _unsafeSelect(start,end){if(!this.rootElement.createRange)return;var range=this.rootElement.createRange();range.setStart(this.input.firstChild||this.input,start);range.setEnd(this.input.lastChild||this.input,end);var root2=this.rootElement;var selection=root2.getSelection&&root2.getSelection();if(selection){selection.removeAllRanges();selection.addRange(range);}}},{key:"value",get:function get(){return this.input.textContent;},set:function set2(value){this.input.textContent=value;}}]);return HTMLContenteditableMaskElement2;}(HTMLMaskElement);IMask.HTMLContenteditableMaskElement=HTMLContenteditableMaskElement;// node_modules/imask/esm/controls/input.js
var _excluded4=["mask"];var InputMask=/* @__PURE__ */function(){function InputMask2(el,opts){_classCallCheck(this,InputMask2);this.el=el instanceof MaskElement?el:el.isContentEditable&&el.tagName!=="INPUT"&&el.tagName!=="TEXTAREA"?new HTMLContenteditableMaskElement(el):new HTMLMaskElement(el);this.masked=createMask(opts);this._listeners={};this._value="";this._unmaskedValue="";this._saveSelection=this._saveSelection.bind(this);this._onInput=this._onInput.bind(this);this._onChange=this._onChange.bind(this);this._onDrop=this._onDrop.bind(this);this._onFocus=this._onFocus.bind(this);this._onClick=this._onClick.bind(this);this.alignCursor=this.alignCursor.bind(this);this.alignCursorFriendly=this.alignCursorFriendly.bind(this);this._bindEvents();this.updateValue();this._onChange();}_createClass(InputMask2,[{key:"mask",get:function get(){return this.masked.mask;},set:function set2(mask){if(this.maskEquals(mask))return;if(!(mask instanceof IMask.Masked)&&this.masked.constructor===maskedClass(mask)){this.masked.updateOptions({mask:mask});return;}var masked=createMask({mask:mask});masked.unmaskedValue=this.masked.unmaskedValue;this.masked=masked;}},{key:"maskEquals",value:function maskEquals(mask){var _this$masked;return mask==null||((_this$masked=this.masked)===null||_this$masked===void 0?void 0:_this$masked.maskEquals(mask));}},{key:"value",get:function get(){return this._value;},set:function set2(str){this.masked.value=str;this.updateControl();this.alignCursor();}},{key:"unmaskedValue",get:function get(){return this._unmaskedValue;},set:function set2(str){this.masked.unmaskedValue=str;this.updateControl();this.alignCursor();}},{key:"typedValue",get:function get(){return this.masked.typedValue;},set:function set2(val){this.masked.typedValue=val;this.updateControl();this.alignCursor();}},{key:"_bindEvents",value:function _bindEvents(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange});}},{key:"_unbindEvents",value:function _unbindEvents(){if(this.el)this.el.unbindEvents();}},{key:"_fireEvent",value:function _fireEvent(ev){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var listeners2=this._listeners[ev];if(!listeners2)return;listeners2.forEach(function(l){return l.apply(void 0,args);});}},{key:"selectionStart",get:function get(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart;}},{key:"cursorPos",get:function get(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd;},set:function set2(pos){if(!this.el||!this.el.isActive)return;this.el.select(pos,pos);this._saveSelection();}},{key:"_saveSelection",value:function _saveSelection(){if(this.value!==this.el.value){console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.");}this._selection={start:this.selectionStart,end:this.cursorPos};}},{key:"updateValue",value:function updateValue(){this.masked.value=this.el.value;this._value=this.masked.value;}},{key:"updateControl",value:function updateControl(){var newUnmaskedValue=this.masked.unmaskedValue;var newValue=this.masked.value;var isChanged=this.unmaskedValue!==newUnmaskedValue||this.value!==newValue;this._unmaskedValue=newUnmaskedValue;this._value=newValue;if(this.el.value!==newValue)this.el.value=newValue;if(isChanged)this._fireChangeEvents();}},{key:"updateOptions",value:function updateOptions(opts){var mask=opts.mask,restOpts=_objectWithoutProperties(opts,_excluded4);var updateMask=!this.maskEquals(mask);var updateOpts=!objectIncludes(this.masked,restOpts);if(updateMask)this.mask=mask;if(updateOpts)this.masked.updateOptions(restOpts);if(updateMask||updateOpts)this.updateControl();}},{key:"updateCursor",value:function updateCursor(cursorPos){if(cursorPos==null)return;this.cursorPos=cursorPos;this._delayUpdateCursor(cursorPos);}},{key:"_delayUpdateCursor",value:function _delayUpdateCursor(cursorPos){var _this=this;this._abortUpdateCursor();this._changingCursorPos=cursorPos;this._cursorChanging=setTimeout(function(){if(!_this.el)return;_this.cursorPos=_this._changingCursorPos;_this._abortUpdateCursor();},10);}},{key:"_fireChangeEvents",value:function _fireChangeEvents(){this._fireEvent("accept",this._inputEvent);if(this.masked.isComplete)this._fireEvent("complete",this._inputEvent);}},{key:"_abortUpdateCursor",value:function _abortUpdateCursor(){if(this._cursorChanging){clearTimeout(this._cursorChanging);delete this._cursorChanging;}}},{key:"alignCursor",value:function alignCursor(){this.cursorPos=this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos,DIRECTION.LEFT));}},{key:"alignCursorFriendly",value:function alignCursorFriendly(){if(this.selectionStart!==this.cursorPos)return;this.alignCursor();}},{key:"on",value:function on2(ev,handler){if(!this._listeners[ev])this._listeners[ev]=[];this._listeners[ev].push(handler);return this;}},{key:"off",value:function off(ev,handler){if(!this._listeners[ev])return this;if(!handler){delete this._listeners[ev];return this;}var hIndex=this._listeners[ev].indexOf(handler);if(hIndex>=0)this._listeners[ev].splice(hIndex,1);return this;}},{key:"_onInput",value:function _onInput(e2){this._inputEvent=e2;this._abortUpdateCursor();if(!this._selection)return this.updateValue();var details=new ActionDetails(this.el.value,this.cursorPos,this.value,this._selection);var oldRawValue=this.masked.rawInputValue;var offset=this.masked.splice(details.startChangePos,details.removed.length,details.inserted,details.removeDirection).offset;var removeDirection=oldRawValue===this.masked.rawInputValue?details.removeDirection:DIRECTION.NONE;var cursorPos=this.masked.nearestInputPos(details.startChangePos+offset,removeDirection);if(removeDirection!==DIRECTION.NONE)cursorPos=this.masked.nearestInputPos(cursorPos,DIRECTION.NONE);this.updateControl();this.updateCursor(cursorPos);delete this._inputEvent;}},{key:"_onChange",value:function _onChange(){if(this.value!==this.el.value){this.updateValue();}this.masked.doCommit();this.updateControl();this._saveSelection();}},{key:"_onDrop",value:function _onDrop(ev){ev.preventDefault();ev.stopPropagation();}},{key:"_onFocus",value:function _onFocus(ev){this.alignCursorFriendly();}},{key:"_onClick",value:function _onClick(ev){this.alignCursorFriendly();}},{key:"destroy",value:function destroy2(){this._unbindEvents();this._listeners.length=0;delete this.el;}}]);return InputMask2;}();IMask.InputMask=InputMask;// node_modules/imask/esm/masked/enum.js
var MaskedEnum=/* @__PURE__ */function(_MaskedPattern){_inherits(MaskedEnum2,_MaskedPattern);var _super=_createSuper(MaskedEnum2);function MaskedEnum2(){_classCallCheck(this,MaskedEnum2);return _super.apply(this,arguments);}_createClass(MaskedEnum2,[{key:"_update",value:function _update(opts){if(opts["enum"])opts.mask="*".repeat(opts["enum"][0].length);_get(_getPrototypeOf(MaskedEnum2.prototype),"_update",this).call(this,opts);}},{key:"doValidate",value:function doValidate(){var _this=this,_get2;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return this["enum"].some(function(e2){return e2.indexOf(_this.unmaskedValue)>=0;})&&(_get2=_get(_getPrototypeOf(MaskedEnum2.prototype),"doValidate",this)).call.apply(_get2,[this].concat(args));}}]);return MaskedEnum2;}(MaskedPattern);IMask.MaskedEnum=MaskedEnum;// node_modules/imask/esm/masked/number.js
var MaskedNumber=/* @__PURE__ */function(_Masked){_inherits(MaskedNumber2,_Masked);var _super=_createSuper(MaskedNumber2);function MaskedNumber2(opts){_classCallCheck(this,MaskedNumber2);return _super.call(this,Object.assign({},MaskedNumber2.DEFAULTS,opts));}_createClass(MaskedNumber2,[{key:"_update",value:function _update(opts){_get(_getPrototypeOf(MaskedNumber2.prototype),"_update",this).call(this,opts);this._updateRegExps();}},{key:"_updateRegExps",value:function _updateRegExps(){var start="^"+(this.allowNegative?"[+|\\-]?":"");var midInput="(0|([1-9]+\\d*))?";var mid="\\d*";var end=(this.scale?"("+escapeRegExp(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExpInput=new RegExp(start+midInput+end);this._numberRegExp=new RegExp(start+mid+end);this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(escapeRegExp).join("")+"]","g");this._thousandsSeparatorRegExp=new RegExp(escapeRegExp(this.thousandsSeparator),"g");}},{key:"_removeThousandsSeparators",value:function _removeThousandsSeparators(value){return value.replace(this._thousandsSeparatorRegExp,"");}},{key:"_insertThousandsSeparators",value:function _insertThousandsSeparators(value){var parts=value.split(this.radix);parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator);return parts.join(this.radix);}},{key:"doPrepare",value:function doPrepare(ch){var _get2;ch=ch.replace(this._mapToRadixRegExp,this.radix);var noSepCh=this._removeThousandsSeparators(ch);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var _normalizePrepare=normalizePrepare((_get2=_get(_getPrototypeOf(MaskedNumber2.prototype),"doPrepare",this)).call.apply(_get2,[this,noSepCh].concat(args))),_normalizePrepare2=_slicedToArray(_normalizePrepare,2),prepCh=_normalizePrepare2[0],details=_normalizePrepare2[1];if(ch&&!noSepCh)details.skip=true;return[prepCh,details];}},{key:"_separatorsCount",value:function _separatorsCount(to){var extendOnSeparators=arguments.length>1&&arguments[1]!==void 0?arguments[1]:false;var count=0;for(var pos=0;pos<to;++pos){if(this._value.indexOf(this.thousandsSeparator,pos)===pos){++count;if(extendOnSeparators)to+=this.thousandsSeparator.length;}}return count;}},{key:"_separatorsCountFromSlice",value:function _separatorsCountFromSlice(){var slice=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._value;return this._separatorsCount(this._removeThousandsSeparators(slice).length,true);}},{key:"extractInput",value:function extractInput(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;var flags=arguments.length>2?arguments[2]:void 0;var _this$_adjustRangeWit=this._adjustRangeWithSeparators(fromPos,toPos);var _this$_adjustRangeWit2=_slicedToArray(_this$_adjustRangeWit,2);fromPos=_this$_adjustRangeWit2[0];toPos=_this$_adjustRangeWit2[1];return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber2.prototype),"extractInput",this).call(this,fromPos,toPos,flags));}},{key:"_appendCharRaw",value:function _appendCharRaw(ch){var flags=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.thousandsSeparator)return _get(_getPrototypeOf(MaskedNumber2.prototype),"_appendCharRaw",this).call(this,ch,flags);var prevBeforeTailValue=flags.tail&&flags._beforeTailState?flags._beforeTailState._value:this._value;var prevBeforeTailSeparatorsCount=this._separatorsCountFromSlice(prevBeforeTailValue);this._value=this._removeThousandsSeparators(this.value);var appendDetails=_get(_getPrototypeOf(MaskedNumber2.prototype),"_appendCharRaw",this).call(this,ch,flags);this._value=this._insertThousandsSeparators(this._value);var beforeTailValue=flags.tail&&flags._beforeTailState?flags._beforeTailState._value:this._value;var beforeTailSeparatorsCount=this._separatorsCountFromSlice(beforeTailValue);appendDetails.tailShift+=(beforeTailSeparatorsCount-prevBeforeTailSeparatorsCount)*this.thousandsSeparator.length;appendDetails.skip=!appendDetails.rawInserted&&ch===this.thousandsSeparator;return appendDetails;}},{key:"_findSeparatorAround",value:function _findSeparatorAround(pos){if(this.thousandsSeparator){var searchFrom=pos-this.thousandsSeparator.length+1;var separatorPos=this.value.indexOf(this.thousandsSeparator,searchFrom);if(separatorPos<=pos)return separatorPos;}return-1;}},{key:"_adjustRangeWithSeparators",value:function _adjustRangeWithSeparators(from,to){var separatorAroundFromPos=this._findSeparatorAround(from);if(separatorAroundFromPos>=0)from=separatorAroundFromPos;var separatorAroundToPos=this._findSeparatorAround(to);if(separatorAroundToPos>=0)to=separatorAroundToPos+this.thousandsSeparator.length;return[from,to];}},{key:"remove",value:function remove(){var fromPos=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var toPos=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.value.length;var _this$_adjustRangeWit3=this._adjustRangeWithSeparators(fromPos,toPos);var _this$_adjustRangeWit4=_slicedToArray(_this$_adjustRangeWit3,2);fromPos=_this$_adjustRangeWit4[0];toPos=_this$_adjustRangeWit4[1];var valueBeforePos=this.value.slice(0,fromPos);var valueAfterPos=this.value.slice(toPos);var prevBeforeTailSeparatorsCount=this._separatorsCount(valueBeforePos.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos+valueAfterPos));var beforeTailSeparatorsCount=this._separatorsCountFromSlice(valueBeforePos);return new ChangeDetails({tailShift:(beforeTailSeparatorsCount-prevBeforeTailSeparatorsCount)*this.thousandsSeparator.length});}},{key:"nearestInputPos",value:function nearestInputPos(cursorPos,direction){if(!this.thousandsSeparator)return cursorPos;switch(direction){case DIRECTION.NONE:case DIRECTION.LEFT:case DIRECTION.FORCE_LEFT:{var separatorAtLeftPos=this._findSeparatorAround(cursorPos-1);if(separatorAtLeftPos>=0){var separatorAtLeftEndPos=separatorAtLeftPos+this.thousandsSeparator.length;if(cursorPos<separatorAtLeftEndPos||this.value.length<=separatorAtLeftEndPos||direction===DIRECTION.FORCE_LEFT){return separatorAtLeftPos;}}break;}case DIRECTION.RIGHT:case DIRECTION.FORCE_RIGHT:{var separatorAtRightPos=this._findSeparatorAround(cursorPos);if(separatorAtRightPos>=0){return separatorAtRightPos+this.thousandsSeparator.length;}}}return cursorPos;}},{key:"doValidate",value:function doValidate(flags){var regexp=flags.input?this._numberRegExpInput:this._numberRegExp;var valid=regexp.test(this._removeThousandsSeparators(this.value));if(valid){var number=this.number;valid=valid&&!isNaN(number)&&(this.min==null||this.min>=0||this.min<=this.number)&&(this.max==null||this.max<=0||this.number<=this.max);}return valid&&_get(_getPrototypeOf(MaskedNumber2.prototype),"doValidate",this).call(this,flags);}},{key:"doCommit",value:function doCommit(){if(this.value){var number=this.number;var validnum=number;if(this.min!=null)validnum=Math.max(validnum,this.min);if(this.max!=null)validnum=Math.min(validnum,this.max);if(validnum!==number)this.unmaskedValue=String(validnum);var formatted=this.value;if(this.normalizeZeros)formatted=this._normalizeZeros(formatted);if(this.padFractionalZeros&&this.scale>0)formatted=this._padFractionalZeros(formatted);this._value=formatted;}_get(_getPrototypeOf(MaskedNumber2.prototype),"doCommit",this).call(this);}},{key:"_normalizeZeros",value:function _normalizeZeros(value){var parts=this._removeThousandsSeparators(value).split(this.radix);parts[0]=parts[0].replace(/^(\D*)(0*)(\d*)/,function(match,sign,zeros,num){return sign+num;});if(value.length&&!/\d$/.test(parts[0]))parts[0]=parts[0]+"0";if(parts.length>1){parts[1]=parts[1].replace(/0*$/,"");if(!parts[1].length)parts.length=1;}return this._insertThousandsSeparators(parts.join(this.radix));}},{key:"_padFractionalZeros",value:function _padFractionalZeros(value){if(!value)return value;var parts=value.split(this.radix);if(parts.length<2)parts.push("");parts[1]=parts[1].padEnd(this.scale,"0");return parts.join(this.radix);}},{key:"unmaskedValue",get:function get(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,".");},set:function set2(unmaskedValue){_set(_getPrototypeOf(MaskedNumber2.prototype),"unmaskedValue",unmaskedValue.replace(".",this.radix),this,true);}},{key:"typedValue",get:function get(){return Number(this.unmaskedValue);},set:function set2(n2){_set(_getPrototypeOf(MaskedNumber2.prototype),"unmaskedValue",String(n2),this,true);}},{key:"number",get:function get(){return this.typedValue;},set:function set2(number){this.typedValue=number;}},{key:"allowNegative",get:function get(){return this.signed||this.min!=null&&this.min<0||this.max!=null&&this.max<0;}}]);return MaskedNumber2;}(Masked);MaskedNumber.DEFAULTS={radix:",",thousandsSeparator:"",mapToRadix:["."],scale:2,signed:false,normalizeZeros:true,padFractionalZeros:false};IMask.MaskedNumber=MaskedNumber;// node_modules/imask/esm/masked/function.js
var MaskedFunction=/* @__PURE__ */function(_Masked){_inherits(MaskedFunction2,_Masked);var _super=_createSuper(MaskedFunction2);function MaskedFunction2(){_classCallCheck(this,MaskedFunction2);return _super.apply(this,arguments);}_createClass(MaskedFunction2,[{key:"_update",value:function _update(opts){if(opts.mask)opts.validate=opts.mask;_get(_getPrototypeOf(MaskedFunction2.prototype),"_update",this).call(this,opts);}}]);return MaskedFunction2;}(Masked);IMask.MaskedFunction=MaskedFunction;// node_modules/imask/esm/masked/dynamic.js
var _excluded5=["compiledMasks","currentMaskRef","currentMask"];var MaskedDynamic=/* @__PURE__ */function(_Masked){_inherits(MaskedDynamic2,_Masked);var _super=_createSuper(MaskedDynamic2);function MaskedDynamic2(opts){var _this;_classCallCheck(this,MaskedDynamic2);_this=_super.call(this,Object.assign({},MaskedDynamic2.DEFAULTS,opts));_this.currentMask=null;return _this;}_createClass(MaskedDynamic2,[{key:"_update",value:function _update(opts){_get(_getPrototypeOf(MaskedDynamic2.prototype),"_update",this).call(this,opts);if("mask"in opts){this.compiledMasks=Array.isArray(opts.mask)?opts.mask.map(function(m){return createMask(m);}):[];}}},{key:"_appendCharRaw",value:function _appendCharRaw(ch){var flags=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var details=this._applyDispatch(ch,flags);if(this.currentMask){details.aggregate(this.currentMask._appendChar(ch,flags));}return details;}},{key:"_applyDispatch",value:function _applyDispatch(){var appended=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";var flags=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var prevValueBeforeTail=flags.tail&&flags._beforeTailState!=null?flags._beforeTailState._value:this.value;var inputValue=this.rawInputValue;var insertValue=flags.tail&&flags._beforeTailState!=null?flags._beforeTailState._rawInputValue:inputValue;var tailValue=inputValue.slice(insertValue.length);var prevMask=this.currentMask;var details=new ChangeDetails();var prevMaskState=prevMask&&prevMask.state;this.currentMask=this.doDispatch(appended,Object.assign({},flags));if(this.currentMask){if(this.currentMask!==prevMask){this.currentMask.reset();if(insertValue){var d=this.currentMask.append(insertValue,{raw:true});details.tailShift=d.inserted.length-prevValueBeforeTail.length;}if(tailValue){details.tailShift+=this.currentMask.append(tailValue,{raw:true,tail:true}).tailShift;}}else{this.currentMask.state=prevMaskState;}}return details;}},{key:"_appendPlaceholder",value:function _appendPlaceholder(){var details=this._applyDispatch.apply(this,arguments);if(this.currentMask){details.aggregate(this.currentMask._appendPlaceholder());}return details;}},{key:"doDispatch",value:function doDispatch(appended){var flags=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.dispatch(appended,this,flags);}},{key:"doValidate",value:function doValidate(){var _get2,_this$currentMask;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(_get2=_get(_getPrototypeOf(MaskedDynamic2.prototype),"doValidate",this)).call.apply(_get2,[this].concat(args))&&(!this.currentMask||(_this$currentMask=this.currentMask).doValidate.apply(_this$currentMask,args));}},{key:"reset",value:function reset(){if(this.currentMask)this.currentMask.reset();this.compiledMasks.forEach(function(m){return m.reset();});}},{key:"value",get:function get(){return this.currentMask?this.currentMask.value:"";},set:function set2(value){_set(_getPrototypeOf(MaskedDynamic2.prototype),"value",value,this,true);}},{key:"unmaskedValue",get:function get(){return this.currentMask?this.currentMask.unmaskedValue:"";},set:function set2(unmaskedValue){_set(_getPrototypeOf(MaskedDynamic2.prototype),"unmaskedValue",unmaskedValue,this,true);}},{key:"typedValue",get:function get(){return this.currentMask?this.currentMask.typedValue:"";},set:function set2(value){var unmaskedValue=String(value);if(this.currentMask){this.currentMask.typedValue=value;unmaskedValue=this.currentMask.unmaskedValue;}this.unmaskedValue=unmaskedValue;}},{key:"isComplete",get:function get(){return!!this.currentMask&&this.currentMask.isComplete;}},{key:"remove",value:function remove(){var details=new ChangeDetails();if(this.currentMask){var _this$currentMask2;details.aggregate((_this$currentMask2=this.currentMask).remove.apply(_this$currentMask2,arguments)).aggregate(this._applyDispatch());}return details;}},{key:"state",get:function get(){return Object.assign({},_get(_getPrototypeOf(MaskedDynamic2.prototype),"state",this),{_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map(function(m){return m.state;}),currentMaskRef:this.currentMask,currentMask:this.currentMask&&this.currentMask.state});},set:function set2(state2){var compiledMasks=state2.compiledMasks,currentMaskRef=state2.currentMaskRef,currentMask=state2.currentMask,maskedState=_objectWithoutProperties(state2,_excluded5);this.compiledMasks.forEach(function(m,mi){return m.state=compiledMasks[mi];});if(currentMaskRef!=null){this.currentMask=currentMaskRef;this.currentMask.state=currentMask;}_set(_getPrototypeOf(MaskedDynamic2.prototype),"state",maskedState,this,true);}},{key:"extractInput",value:function extractInput(){var _this$currentMask3;return this.currentMask?(_this$currentMask3=this.currentMask).extractInput.apply(_this$currentMask3,arguments):"";}},{key:"extractTail",value:function extractTail(){var _this$currentMask4,_get3;for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return this.currentMask?(_this$currentMask4=this.currentMask).extractTail.apply(_this$currentMask4,args):(_get3=_get(_getPrototypeOf(MaskedDynamic2.prototype),"extractTail",this)).call.apply(_get3,[this].concat(args));}},{key:"doCommit",value:function doCommit(){if(this.currentMask)this.currentMask.doCommit();_get(_getPrototypeOf(MaskedDynamic2.prototype),"doCommit",this).call(this);}},{key:"nearestInputPos",value:function nearestInputPos(){var _this$currentMask5,_get4;for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}return this.currentMask?(_this$currentMask5=this.currentMask).nearestInputPos.apply(_this$currentMask5,args):(_get4=_get(_getPrototypeOf(MaskedDynamic2.prototype),"nearestInputPos",this)).call.apply(_get4,[this].concat(args));}},{key:"overwrite",get:function get(){return this.currentMask?this.currentMask.overwrite:_get(_getPrototypeOf(MaskedDynamic2.prototype),"overwrite",this);},set:function set2(overwrite){console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');}},{key:"maskEquals",value:function maskEquals(mask){return Array.isArray(mask)&&this.compiledMasks.every(function(m,mi){var _mask$mi;return m.maskEquals((_mask$mi=mask[mi])===null||_mask$mi===void 0?void 0:_mask$mi.mask);});}}]);return MaskedDynamic2;}(Masked);MaskedDynamic.DEFAULTS={dispatch:function dispatch(appended,masked,flags){if(!masked.compiledMasks.length)return;var inputValue=masked.rawInputValue;var inputs=masked.compiledMasks.map(function(m,index){m.reset();m.append(inputValue,{raw:true});m.append(appended,flags);var weight=m.rawInputValue.length;return{weight:weight,index:index};});inputs.sort(function(i1,i2){return i2.weight-i1.weight;});return masked.compiledMasks[inputs[0].index];}};IMask.MaskedDynamic=MaskedDynamic;// node_modules/imask/esm/masked/pipe.js
var PIPE_TYPE={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function createPipe(mask){var from=arguments.length>1&&arguments[1]!==void 0?arguments[1]:PIPE_TYPE.MASKED;var to=arguments.length>2&&arguments[2]!==void 0?arguments[2]:PIPE_TYPE.MASKED;var masked=createMask(mask);return function(value){return masked.runIsolated(function(m){m[from]=value;return m[to];});};}function pipe(value){for(var _len=arguments.length,pipeArgs=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){pipeArgs[_key-1]=arguments[_key];}return createPipe.apply(void 0,pipeArgs)(value);}IMask.PIPE_TYPE=PIPE_TYPE;IMask.createPipe=createPipe;IMask.pipe=pipe;// node_modules/imask/esm/index.js
try{globalThis.IMask=IMask;}catch(e2){}// packages/forms/resources/js/components/text-input.js
var text_input_default=function text_input_default(Alpine){Alpine.data("textInputFormComponent",function(_ref181){var getMaskOptionsUsing=_ref181.getMaskOptionsUsing,state2=_ref181.state;return{mask:null,state:state2,init:function init(){var _this33=this;if(!getMaskOptionsUsing){return;}if(this.state){var _this$state2;this.$el.value=(_this$state2=this.state)===null||_this$state2===void 0?void 0:_this$state2.valueOf();}this.mask=IMask(this.$el,getMaskOptionsUsing(IMask)).on("accept",function(){_this33.state=_this33.mask.unmaskedValue;});this.$watch("state",function(){var _this33$state$valueOf,_this33$state;_this33.mask.unmaskedValue=(_this33$state$valueOf=(_this33$state=_this33.state)===null||_this33$state===void 0?void 0:_this33$state.valueOf())!==null&&_this33$state$valueOf!==void 0?_this33$state$valueOf:"";});}};});};// packages/forms/resources/js/components/textarea.js
var textarea_default=function textarea_default(Alpine){Alpine.data("textareaFormComponent",function(){return{init:function init(){this.render();},render:function render(){if(this.$el.scrollHeight>0){this.$el.style.height="150px";this.$el.style.height=this.$el.scrollHeight+2+"px";}}};});};// packages/forms/resources/js/index.js
var js_default=function js_default(Alpine){Alpine.plugin(date_time_picker_default);Alpine.plugin(file_upload_default);Alpine.plugin(key_value_default);Alpine.plugin(markdown_editor_default);Alpine.plugin(multi_select_default);Alpine.plugin(rich_editor_default);Alpine.plugin(select_default);Alpine.plugin(tags_input_default);Alpine.plugin(text_input_default);Alpine.plugin(textarea_default);};

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
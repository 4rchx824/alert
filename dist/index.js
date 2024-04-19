"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tailwindcss/lib/util/createPlugin.js
var require_createPlugin = __commonJS({
  "node_modules/tailwindcss/lib/util/createPlugin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    function createPlugin(plugin2, config) {
      return {
        handler: plugin2,
        config
      };
    }
    createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
      const optionsFunction = function(options) {
        return {
          __options: options,
          handler: pluginFunction(options),
          config: configFunction(options)
        };
      };
      optionsFunction.__isOptionsFunction = true;
      optionsFunction.__pluginFunction = pluginFunction;
      optionsFunction.__configFunction = configFunction;
      return optionsFunction;
    };
    var _default = createPlugin;
  }
});

// node_modules/tailwindcss/lib/public/create-plugin.js
var require_create_plugin = __commonJS({
  "node_modules/tailwindcss/lib/public/create-plugin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _createPlugin = /* @__PURE__ */ _interop_require_default(require_createPlugin());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _default = _createPlugin.default;
  }
});

// node_modules/tailwindcss/plugin.js
var require_plugin = __commonJS({
  "node_modules/tailwindcss/plugin.js"(exports2, module2) {
    "use strict";
    var createPlugin = require_create_plugin();
    module2.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
  }
});

// index.ts
var ui_exports = {};
__export(ui_exports, {
  default: () => ui_default
});
module.exports = __toCommonJS(ui_exports);
var import_plugin = __toESM(require_plugin());
var ui_default = (0, import_plugin.default)(function() {
}, {
  // content: ["./node_modules/@4rchx824/ui/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: "#5E27B6",
        "primary-accent": "#DDD2F0",
        "primary-disabled": "#AC9BDB",
        "primary-active": "#482384",
        "text-primary-disabled": "#7260A4",
        // Secondary colors
        secondary: "#F78E5A",
        "secondary-accent": "#FCF0EE",
        "secondary-disabled": "#F7D5C2",
        "secondary-active": "#AF522A",
        "text-secondary-disabled": "#F0A47A",
        // Text colors
        "text-default": "#0D0815",
        "text-light": "#F8F8F8",
        // Gray colors
        "grey-100": "#F7F7F9",
        "grey-200": "#E4E7EC",
        "grey-300": "#D0D5DD",
        "grey-400": "#98A2B3",
        "grey-500": "#667085",
        "grey-600": "#344054",
        "grey-700": "#1D2939",
        // State colors
        success: "#58BE62",
        danger: "#ED452E",
        warning: "#FEC84B",
        info: "#58A1D4",
        "success-accent": "#ECFBEE",
        "danger-accent": "#FFF4F3",
        "warning-accent": "#FFFAEB",
        "info-accent": "#E2EFF8",
        // Background colors
        background: "#FDFCFF"
      }
    }
  }
});
//# sourceMappingURL=index.js.map
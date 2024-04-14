"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Alert: () => Alert,
  alertVariants: () => alertVariants
});
module.exports = __toCommonJS(src_exports);
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// src/lib/utils.ts
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)(clsx(inputs));
}

// src/index.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
var alertVariants = (0, import_class_variance_authority.cva)("inc-p-3 inc-rounded-lg inc-w-full inc-flex inc-flex-col inc-items-center inc-px-2", {
  variants: {
    variant: {
      info: "inc-bg-info-accent inc-text-info",
      danger: "inc-bg-danger-accent inc-text-danger",
      warning: "inc-bg-warning-accent inc-text-warning",
      success: "inc-bg-success-accent inc-text-success"
    }
  },
  defaultVariants: {
    variant: "info"
  }
});
var Alert = React.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, children, dismissable = false, showIcon = true, onDismissed } = _b, props = __objRest(_b, ["className", "variant", "children", "dismissable", "showIcon", "onDismissed"]);
  const [dismissed, setDismissed] = React.useState(false);
  let icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Info, {});
  if (variant === "info") {
    icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Info, { size: 24, className: "inc-fill-info inc-stroke-info-accent" });
  } else if (variant === "danger") {
    icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.XCircle, { size: 24, className: "inc-fill-danger inc-stroke-danger-accent" });
  } else if (variant === "warning") {
    icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CircleAlert, { size: 24, className: "inc-fill-warning inc-stroke-warning-accent" });
  } else if (variant === "success") {
    icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CircleCheck, { size: 24, className: "inc-fill-success inc-stroke-success-accent" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", __spreadProps(__spreadValues({ className: cn(alertVariants({ variant, className })), ref }, props), { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "inc-flex inc-flex-row inc-space-x-2", children: [
    showIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "inc-mr-2", children: icon }),
    children,
    dismissable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: onDismissed, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.XIcon, { size: 24, className: "inc-stroke-gray-400" }) })
  ] }) }));
});
Alert.displayName = "Alert";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  alertVariants
});
//# sourceMappingURL=index.js.map
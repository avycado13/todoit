(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-MKB4RXL3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ../shared/src/resolved-promises.ts
__turbopack_context__.s([
    "promiseFalse",
    ()=>promiseFalse,
    "promiseTrue",
    ()=>promiseTrue,
    "promiseUndefined",
    ()=>promiseUndefined,
    "promiseVoid",
    ()=>promiseVoid
]);
var promiseTrue = Promise.resolve(true);
var promiseFalse = Promise.resolve(false);
var promiseUndefined = Promise.resolve(void 0);
var promiseVoid = Promise.resolve();
var promiseNever = new Promise(()=>{});
;
 //# sourceMappingURL=chunk-MKB4RXL3.js.map
}),
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ../shared/src/asserts.ts
__turbopack_context__.s([
    "assert",
    ()=>assert,
    "assertArray",
    ()=>assertArray,
    "assertBoolean",
    ()=>assertBoolean,
    "assertDeepFrozen",
    ()=>assertDeepFrozen,
    "assertNotNull",
    ()=>assertNotNull,
    "assertNumber",
    ()=>assertNumber,
    "assertObject",
    ()=>assertObject,
    "assertString",
    ()=>assertString,
    "deepFreeze",
    ()=>deepFreeze,
    "deepFreezeAllowUndefined",
    ()=>deepFreezeAllowUndefined,
    "hasOwn",
    ()=>hasOwn,
    "isProd",
    ()=>isProd,
    "throwInvalidType",
    ()=>throwInvalidType,
    "unreachable",
    ()=>unreachable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function assert(b) {
    let msg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Assertion failed";
    if (!b) {
        throw new Error(typeof msg === "string" ? msg : msg());
    }
}
function assertString(v) {
    assertType(v, "string");
}
function assertNumber(v) {
    assertType(v, "number");
}
function assertBoolean(v) {
    assertType(v, "boolean");
}
function assertType(v, t) {
    if (typeof v !== t) {
        throwInvalidType(v, t);
    }
}
function assertObject(v) {
    if (v === null) {
        throwInvalidType(v, "object");
    }
    assertType(v, "object");
}
function assertArray(v) {
    if (!Array.isArray(v)) {
        throwInvalidType(v, "array");
    }
}
function invalidType(v, t) {
    let s = "Invalid type: ";
    if (v === null || v === void 0) {
        s += v;
    } else {
        s += "".concat(typeof v, " `").concat(v, "`");
    }
    return s + ", expected ".concat(t);
}
function throwInvalidType(v, t) {
    throw new Error(invalidType(v, t));
}
function assertNotNull(v) {
    if (v === null) {
        throw new Error("Expected non-null value");
    }
}
function unreachable(_) {
    throw new Error("Unreachable");
}
// ../shared/src/has-own.ts
var { hasOwn } = Object;
// ../shared/src/config.ts
var isProd = ("TURBOPACK compile-time value", "development") === "production";
// ../replicache/src/frozen-json.ts
var deepFrozenObjects = /* @__PURE__ */ new WeakSet();
function deepFreeze(v) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    deepFreezeInternal(v, []);
    return v;
}
function deepFreezeInternal(v, seen) {
    switch(typeof v){
        case "undefined":
            throw new TypeError("Unexpected value undefined");
        case "boolean":
        case "number":
        case "string":
            return;
        case "object":
            {
                if (v === null) {
                    return;
                }
                if (deepFrozenObjects.has(v)) {
                    return;
                }
                deepFrozenObjects.add(v);
                if (seen.includes(v)) {
                    throwInvalidType(v, "Cyclic JSON object");
                }
                seen.push(v);
                Object.freeze(v);
                if (Array.isArray(v)) {
                    deepFreezeArray(v, seen);
                } else {
                    deepFreezeObject(v, seen);
                }
                seen.pop();
                return;
            }
        default:
            throwInvalidType(v, "JSON value");
    }
}
function deepFreezeArray(v, seen) {
    for (const item of v){
        deepFreezeInternal(item, seen);
    }
}
function deepFreezeObject(v, seen) {
    for(const k in v){
        if (hasOwn(v, k)) {
            const value = v[k];
            if (value !== void 0) {
                deepFreezeInternal(value, seen);
            }
        }
    }
}
function assertDeepFrozen(v) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!isDeepFrozen(v, [])) {
        throw new Error("Expected frozen object");
    }
}
function isDeepFrozen(v, seen) {
    switch(typeof v){
        case "boolean":
        case "number":
        case "string":
            return true;
        case "object":
            if (v === null) {
                return true;
            }
            if (deepFrozenObjects.has(v)) {
                return true;
            }
            if (!Object.isFrozen(v)) {
                return false;
            }
            if (seen.includes(v)) {
                throwInvalidType(v, "Cyclic JSON object");
            }
            seen.push(v);
            if (Array.isArray(v)) {
                for (const item of v){
                    if (!isDeepFrozen(item, seen)) {
                        seen.pop();
                        return false;
                    }
                }
            } else {
                for(const k in v){
                    if (hasOwn(v, k)) {
                        const value = v[k];
                        if (value !== void 0 && !isDeepFrozen(value, seen)) {
                            seen.pop();
                            return false;
                        }
                    }
                }
            }
            deepFrozenObjects.add(v);
            seen.pop();
            return true;
        default:
            throwInvalidType(v, "JSON value");
    }
}
function deepFreezeAllowUndefined(v) {
    if (v === void 0) {
        return void 0;
    }
    return deepFreeze(v);
}
;
 //# sourceMappingURL=chunk-SGW2EIVJ.js.map
}),
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-424PT5DM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__export",
    ()=>__export,
    "__reExport",
    ()=>__reExport
]);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __reExport = (target, mod, secondTarget)=>(__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
;
 //# sourceMappingURL=chunk-424PT5DM.js.map
}),
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-O7W55FT4.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ../zero-react/src/components/mark-icon.tsx
__turbopack_context__.s([
    "MarkIcon",
    ()=>MarkIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
var MarkIcon = (props)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: "Show Zero Inspector"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.407235 15.1075C-0.661857 11.1041 0.374032 6.65546 3.51478 3.51471C8.20106 -1.17157 15.799 -1.17157 20.4854 3.51471C20.8969 3.92627 21.2723 4.36029 21.6115 4.81284L17.6063 8.81802H12.7576L16.7275 4.84814C13.3994 2.64322 8.87135 3.00687 5.9391 5.93909C4.24366 7.63455 3.40687 9.86362 3.42896 12.0857L0.407235 15.1075ZM18.0609 18.0609C15.1287 20.9931 10.6006 21.3568 7.27247 19.1519L11.2423 15.182H6.39356L2.38844 19.1872C2.72767 19.6397 3.10316 20.0737 3.51466 20.4853C8.20094 25.1716 15.799 25.1716 20.4852 20.4853C23.626 17.3445 24.6619 12.8959 23.5927 8.89255L20.5709 11.9143C20.593 14.1364 19.7564 16.3654 18.0609 18.0609Z",
                fill: "currentColor"
            })
        ]
    });
;
 //# sourceMappingURL=chunk-O7W55FT4.js.map
}),
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/react.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZeroInspector",
    ()=>ZeroInspector,
    "ZeroProvider",
    ()=>ZeroProvider,
    "createUseZero",
    ()=>createUseZero,
    "useQuery",
    ()=>useQuery,
    "useSuspenseQuery",
    ()=>useSuspenseQuery,
    "useZero",
    ()=>useZero,
    "useZeroOnline",
    ()=>useZeroOnline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$6USDOK3X$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-6USDOK3X.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-MKB4RXL3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-G442PJSB.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$O7W55FT4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-O7W55FT4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-424PT5DM.js [app-client] (ecmascript)");
// ../zero-react/src/components/zero-inspector.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+resolver@1.0.2/node_modules/@rocicorp/resolver/out/resolver.js [app-client] (ecmascript)");
;
;
;
;
var _views, _zero, _view, _onDematerialized, _onMaterialized, _query, _format, _snapshot, _reactInternals, _ttl, _complete, _completeResolver, _nonEmpty, _nonEmptyResolver, _onData, _materializeIfNeeded;
;
;
;
;
;
;
;
;
var Inspector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/inspector-YIRP3TTL.js [app-client] (ecmascript, async loader)"));
function ZeroInspector(param) {
    let { zero } = param;
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return show ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            children: "Loading Inspector..."
        }),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Inspector, {
            zero,
            onClose: ()=>setShow(false)
        })
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        onClick: ()=>setShow(!show),
        style: {
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: 1e3,
            padding: "5px",
            color: "white",
            backgroundColor: "#333",
            borderTopLeftRadius: "8px",
            opacity: 0.95
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$O7W55FT4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkIcon"], {
            style: {
                width: "20px",
                height: "20px",
                fill: "currentColor"
            }
        })
    });
}
;
;
// ../shared/src/deep-clone.ts
function deepClone(value) {
    const seen = [];
    return internalDeepClone(value, seen);
}
function internalDeepClone(value, seen) {
    switch(typeof value){
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return value;
        case "object":
            {
                if (value === null) {
                    return null;
                }
                if (seen.includes(value)) {
                    throw new Error("Cyclic object");
                }
                seen.push(value);
                if (Array.isArray(value)) {
                    const rv = value.map((v)=>internalDeepClone(v, seen));
                    seen.pop();
                    return rv;
                }
                const obj = {};
                for(const k in value){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(value, k)) {
                        const v = value[k];
                        if (v !== void 0) {
                            obj[k] = internalDeepClone(v, seen);
                        }
                    }
                }
                seen.pop();
                return obj;
            }
        default:
            throw new Error("Invalid type: ".concat(typeof value));
    }
}
;
;
var ZeroContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useZero() {
    const zero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ZeroContext);
    if (zero === void 0) {
        throw new Error("useZero must be used within a ZeroProvider");
    }
    return zero;
}
function createUseZero() {
    return ()=>useZero();
}
function ZeroProvider(param) {
    let { children, init, ...props } = param;
    const [zero, setZero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("zero" in props ? props.zero : void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ZeroProvider.useEffect": ()=>{
            if ("zero" in props) {
                setZero(props.zero);
                return;
            }
            const z = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$6USDOK3X$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Zero"](props);
            init === null || init === void 0 ? void 0 : init(z);
            setZero(z);
            return ({
                "ZeroProvider.useEffect": ()=>{
                    void z.close();
                    setZero(void 0);
                }
            })["ZeroProvider.useEffect"];
        }
    }["ZeroProvider.useEffect"], [
        init,
        ...Object.values(props)
    ]);
    return zero && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ZeroContext.Provider, {
        value: zero,
        children
    });
}
// ../zero-react/src/use-query.tsx
var reactUse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use;
var suspend = reactUse ? reactUse : (p)=>{
    throw p;
};
function useQuery(query, options) {
    let enabled = true;
    let ttl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TTL_MS"];
    if (typeof options === "boolean") {
        enabled = options;
    } else if (options) {
        ({ enabled = true, ttl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TTL_MS"] } = options);
    }
    const view = viewStore.getView(useZero(), query, enabled, ttl);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(view.subscribeReactInternals, view.getSnapshot, view.getSnapshot);
}
function useSuspenseQuery(query, options) {
    let enabled = true;
    let ttl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TTL_MS"];
    let suspendUntil = "partial";
    if (typeof options === "boolean") {
        enabled = options;
    } else if (options) {
        ({ enabled = true, ttl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TTL_MS"], suspendUntil = "complete" } = options);
    }
    const view = viewStore.getView(useZero(), query, enabled, ttl);
    const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(view.subscribeReactInternals, view.getSnapshot, view.getSnapshot);
    if (enabled) {
        if (suspendUntil === "complete" && !view.complete) {
            suspend(view.waitForComplete());
        }
        if (suspendUntil === "partial" && !view.nonEmpty) {
            suspend(view.waitForNonEmpty());
        }
    }
    return snapshot;
}
var emptyArray = [];
var disabledSubscriber = ()=>()=>{};
var resultTypeUnknown = {
    type: "unknown"
};
var resultTypeComplete = {
    type: "complete"
};
var emptySnapshotSingularUnknown = [
    void 0,
    resultTypeUnknown
];
var emptySnapshotSingularComplete = [
    void 0,
    resultTypeComplete
];
var emptySnapshotPluralUnknown = [
    emptyArray,
    resultTypeUnknown
];
var emptySnapshotPluralComplete = [
    emptyArray,
    resultTypeComplete
];
function getDefaultSnapshot(singular) {
    return singular ? emptySnapshotSingularUnknown : emptySnapshotPluralUnknown;
}
function getSnapshot(singular, data, resultType) {
    if (singular && data === void 0) {
        return resultType === "complete" ? emptySnapshotSingularComplete : emptySnapshotSingularUnknown;
    }
    if (!singular && data.length === 0) {
        return resultType === "complete" ? emptySnapshotPluralComplete : emptySnapshotPluralUnknown;
    }
    return [
        data,
        resultType === "complete" ? resultTypeComplete : resultTypeUnknown
    ];
}
var ViewStore = (_views = /*#__PURE__*/ new WeakMap(), class {
    getView(zero, query, enabled, ttl) {
        const { format } = query;
        if (!enabled) {
            return {
                getSnapshot: ()=>getDefaultSnapshot(format.singular),
                subscribeReactInternals: disabledSubscriber,
                updateTTL: ()=>{},
                waitForComplete: ()=>Promise.resolve(),
                waitForNonEmpty: ()=>Promise.resolve(),
                complete: false,
                nonEmpty: false
            };
        }
        const hash = query.hash() + zero.clientID;
        let existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _views).get(hash);
        if (!existing) {
            existing = new ViewWrapper(zero, query, format, ttl, (view)=>{
                const lastView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _views).get(hash);
                if (lastView && lastView !== view) {
                    throw new Error("View already exists");
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _views).set(hash, view);
            }, ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _views).delete(hash);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _views).set(hash, existing);
        } else {
            existing.updateTTL(ttl);
        }
        return existing;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _views, {
            writable: true,
            value: /* @__PURE__ */ new Map()
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
});
var viewStore = new ViewStore();
var ViewWrapper = (_zero = /*#__PURE__*/ new WeakMap(), _view = /*#__PURE__*/ new WeakMap(), _onDematerialized = /*#__PURE__*/ new WeakMap(), _onMaterialized = /*#__PURE__*/ new WeakMap(), _query = /*#__PURE__*/ new WeakMap(), _format = /*#__PURE__*/ new WeakMap(), _snapshot = /*#__PURE__*/ new WeakMap(), _reactInternals = /*#__PURE__*/ new WeakMap(), _ttl = /*#__PURE__*/ new WeakMap(), _complete = /*#__PURE__*/ new WeakMap(), _completeResolver = /*#__PURE__*/ new WeakMap(), _nonEmpty = /*#__PURE__*/ new WeakMap(), _nonEmptyResolver = /*#__PURE__*/ new WeakMap(), _onData = /*#__PURE__*/ new WeakMap(), _materializeIfNeeded = /*#__PURE__*/ new WeakMap(), class {
    updateTTL(ttl) {
        var _class_private_field_get;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _ttl, ttl);
        (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _view)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.updateTTL(ttl);
    }
    get complete() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _complete);
    }
    waitForComplete() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completeResolver).promise;
    }
    get nonEmpty() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nonEmpty);
    }
    waitForNonEmpty() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nonEmptyResolver).promise;
    }
    constructor(zero, query, format, ttl, onMaterialized, onDematerialized){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _zero, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _view, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onDematerialized, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onMaterialized, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _query, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _snapshot, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _reactInternals, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _ttl, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _complete, {
            writable: true,
            value: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completeResolver, {
            writable: true,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolver"])()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nonEmpty, {
            writable: true,
            value: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nonEmptyResolver, {
            writable: true,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolver"])()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onData, {
            writable: true,
            value: (snap, resultType)=>{
                const data = snap === void 0 ? snap : deepClone(snap);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _snapshot, getSnapshot((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format).singular, data, resultType));
                if (resultType === "complete") {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _complete, true);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completeResolver).resolve();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nonEmpty, true);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nonEmptyResolver).resolve();
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format).singular ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _snapshot)[0] !== void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _snapshot)[0].length !== 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nonEmpty, true);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nonEmptyResolver).resolve();
                }
                for (const internals of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _reactInternals)){
                    internals();
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _materializeIfNeeded, {
            writable: true,
            value: ()=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _view)) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _view, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _zero).materialize((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _query), {
                    ttl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _ttl)
                }));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _view).addListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onData));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onMaterialized).call(this, this);
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "getSnapshot", ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _snapshot));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "subscribeReactInternals", (internals)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _reactInternals).add(internals);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _materializeIfNeeded).call(this);
            return ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _reactInternals).delete(internals);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _reactInternals).size === 0) {
                    setTimeout(()=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _reactInternals).size > 0) {
                            return;
                        }
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _view) === void 0) {
                            return;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _view).destroy();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _view, void 0);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _complete, false);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completeResolver, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolver"])());
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nonEmpty, false);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nonEmptyResolver, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolver"])());
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onDematerialized).call(this);
                    }, 10);
                }
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _zero, zero);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _query, query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format, format);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _ttl, ttl);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onMaterialized, onMaterialized);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onDematerialized, onDematerialized);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _snapshot, getDefaultSnapshot(format.singular));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _reactInternals, /* @__PURE__ */ new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _materializeIfNeeded).call(this);
    }
});
;
function useZeroOnline() {
    const zero = useZero();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(zero.onOnline, {
        "useZeroOnline.useSyncExternalStore2": ()=>zero.online
    }["useZeroOnline.useSyncExternalStore2"], {
        "useZeroOnline.useSyncExternalStore2": ()=>zero.online
    }["useZeroOnline.useSyncExternalStore2"]);
}
;
 //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-FMWNU2YJ.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANYONE_CAN",
    ()=>ANYONE_CAN,
    "ANYONE_CAN_DO_ANYTHING",
    ()=>ANYONE_CAN_DO_ANYTHING,
    "NOBODY_CAN",
    ()=>NOBODY_CAN,
    "createBuilder",
    ()=>createBuilder,
    "definePermissions",
    ()=>definePermissions,
    "escapeLike",
    ()=>escapeLike,
    "relationships",
    ()=>relationships,
    "syncedQuery",
    ()=>syncedQuery,
    "syncedQueryWithContext",
    ()=>syncedQueryWithContext,
    "withValidation",
    ()=>withValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$6USDOK3X$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-6USDOK3X.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-G442PJSB.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-client] (ecmascript)");
;
;
;
var _anchor, _path;
;
;
;
// ../zero-schema/src/builder/relationship-builder.ts
function relationships(table2, cb) {
    const relationships2 = cb({
        many,
        one
    });
    return {
        name: table2.schema.name,
        relationships: relationships2
    };
}
function many() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return args.map((arg)=>({
            sourceField: arg.sourceField,
            destField: arg.destField,
            destSchema: arg.destSchema.schema.name,
            cardinality: "many"
        }));
}
function one() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return args.map((arg)=>({
            sourceField: arg.sourceField,
            destField: arg.destField,
            destSchema: arg.destSchema.schema.name,
            cardinality: "one"
        }));
}
// ../zql/src/query/static-query.ts
var StaticQuery = class _StaticQuery extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractQuery"] {
    expressionBuilder() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpressionBuilder"](this._exists);
    }
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newQuerySymbol"]](_delegate, schema, tableName, ast, format, customQueryID, currentJunction) {
        return new _StaticQuery(schema, tableName, ast, format, "permissions", customQueryID, currentJunction);
    }
    get ast() {
        return this._completeAst();
    }
    materialize() {
        throw new Error("StaticQuery cannot be materialized");
    }
    run() {
        return Promise.reject(new Error("StaticQuery cannot be run"));
    }
    preload() {
        throw new Error("StaticQuery cannot be preloaded");
    }
    constructor(schema, tableName, ast, format, system = "permissions", customQueryID, currentJunction){
        super(void 0, schema, tableName, ast, format, system, customQueryID, currentJunction);
    }
};
// ../zero-schema/src/permissions.ts
var ANYONE_CAN = [
    (_, eb)=>eb.and()
];
var ANYONE_CAN_DO_ANYTHING = {
    row: {
        select: ANYONE_CAN,
        insert: ANYONE_CAN,
        update: {
            preMutation: ANYONE_CAN,
            postMutation: ANYONE_CAN
        },
        delete: ANYONE_CAN
    }
};
var NOBODY_CAN = [];
async function definePermissions(schema, definer) {
    const expressionBuilders = {};
    for (const name of Object.keys(schema.tables)){
        expressionBuilders[name] = new StaticQuery(schema, name, {
            table: name
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultFormat"]).expressionBuilder();
    }
    const config = await definer();
    return compilePermissions(schema, config, expressionBuilders);
}
function compilePermissions(schema, authz, expressionBuilders) {
    if (!authz) {
        return void 0;
    }
    const nameMapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$6USDOK3X$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientToServer"])(schema.tables);
    const ret = {
        tables: {}
    };
    for (const [tableName, tableConfig] of Object.entries(authz)){
        var _schema_tables_tableName_serverName;
        const serverName = (_schema_tables_tableName_serverName = schema.tables[tableName].serverName) !== null && _schema_tables_tableName_serverName !== void 0 ? _schema_tables_tableName_serverName : tableName;
        ret.tables[serverName] = {
            row: compileRowConfig(nameMapper, tableName, tableConfig.row, expressionBuilders[tableName]),
            cell: compileCellConfig(nameMapper, tableName, tableConfig.cell, expressionBuilders[tableName])
        };
    }
    return ret;
}
function compileRowConfig(clientToServer2, tableName, rowRules, expressionBuilder) {
    var _rowRules_update, _rowRules_update1;
    if (!rowRules) {
        return void 0;
    }
    return {
        select: compileRules(clientToServer2, tableName, rowRules.select, expressionBuilder),
        insert: compileRules(clientToServer2, tableName, rowRules.insert, expressionBuilder),
        update: {
            preMutation: compileRules(clientToServer2, tableName, (_rowRules_update = rowRules.update) === null || _rowRules_update === void 0 ? void 0 : _rowRules_update.preMutation, expressionBuilder),
            postMutation: compileRules(clientToServer2, tableName, (_rowRules_update1 = rowRules.update) === null || _rowRules_update1 === void 0 ? void 0 : _rowRules_update1.postMutation, expressionBuilder)
        },
        delete: compileRules(clientToServer2, tableName, rowRules.delete, expressionBuilder)
    };
}
function compileRules(clientToServer2, tableName, rules, expressionBuilder) {
    if (!rules) {
        return void 0;
    }
    return rules.map((rule)=>{
        const cond = rule(authDataRef, expressionBuilder);
        return [
            "allow",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapCondition"])(cond, tableName, clientToServer2)
        ];
    });
}
function compileCellConfig(clientToServer2, tableName, cellRules, expressionBuilder) {
    if (!cellRules) {
        return void 0;
    }
    const ret = {};
    for (const [columnName, rules] of Object.entries(cellRules)){
        var _rules_update, _rules_update1;
        ret[columnName] = {
            select: compileRules(clientToServer2, tableName, rules.select, expressionBuilder),
            insert: compileRules(clientToServer2, tableName, rules.insert, expressionBuilder),
            update: {
                preMutation: compileRules(clientToServer2, tableName, (_rules_update = rules.update) === null || _rules_update === void 0 ? void 0 : _rules_update.preMutation, expressionBuilder),
                postMutation: compileRules(clientToServer2, tableName, (_rules_update1 = rules.update) === null || _rules_update1 === void 0 ? void 0 : _rules_update1.postMutation, expressionBuilder)
            },
            delete: compileRules(clientToServer2, tableName, rules.delete, expressionBuilder)
        };
    }
    return ret;
}
var CallTracker = (_anchor = /*#__PURE__*/ new WeakMap(), _path = /*#__PURE__*/ new WeakMap(), class _CallTracker {
    get(target, prop) {
        if (prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toStaticParam"]) {
            return target[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toStaticParam"]];
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(typeof prop === "string");
        const path = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _path),
            prop
        ];
        return new Proxy({
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toStaticParam"]]: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staticParam"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _anchor), path)
        }, new _CallTracker((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _anchor), path));
    }
    constructor(anchor, path){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _anchor, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _path, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _anchor, anchor);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _path, path);
    }
});
function baseTracker(anchor) {
    return new Proxy({
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toStaticParam"]]: ()=>{
            throw new Error("no JWT field specified");
        }
    }, new CallTracker(anchor, []));
}
var authDataRef = baseTracker("authData");
var preMutationRowRef = baseTracker("preMutationRow");
// ../zql/src/query/escape-like.ts
function escapeLike(val) {
    return val.replace(/[%_]/g, "\\$&");
}
// ../zql/src/query/named.ts
function normalizeParser(parser) {
    if (parser) {
        if ("parse" in parser) {
            return parser.parse.bind(parser);
        }
        return parser;
    }
    return void 0;
}
function syncedQuery(name, parser, fn) {
    const impl = syncedQueryImpl(name, fn, false);
    const ret = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return impl(void 0, args);
    };
    ret.queryName = name;
    ret.parse = normalizeParser(parser);
    ret.takesContext = false;
    return ret;
}
function syncedQueryWithContext(name, parser, fn) {
    const impl = syncedQueryImpl(name, fn, true);
    const ret = function(context) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return impl(context, args);
    };
    ret.queryName = name;
    ret.parse = normalizeParser(parser);
    ret.takesContext = true;
    return ret;
}
function syncedQueryImpl(name, fn, takesContext) {
    return (context, args)=>{
        const q = takesContext ? fn(context, ...args) : fn(...args);
        return q.nameAndArgs(name, args);
    };
}
function withValidation(fn) {
    if (!fn.parse) {
        throw new Error("ret does not have a parse function defined");
    }
    const ret = function(context) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        const f = fn;
        const parsed = f.parse(args);
        return f.takesContext ? f(context, ...parsed) : f(...parsed);
    };
    ret.queryName = fn.queryName;
    ret.parse = fn.parse;
    ret.takesContext = true;
    return ret;
}
function createBuilder(s) {
    return makeQueryBuilders(s);
}
function makeQueryBuilders(schema) {
    return new Proxy({}, {
        get: (target, prop)=>{
            if (prop in target) {
                return target[prop];
            }
            if (!(prop in schema.tables)) {
                throw new Error("Table ".concat(prop, " does not exist in schema"));
            }
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newQuery"])(void 0, schema, prop);
            target[prop] = q;
            return q;
        }
    });
}
;
 //# sourceMappingURL=chunk-FMWNU2YJ.js.map
}),
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/zero.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$FMWNU2YJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-FMWNU2YJ.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$6USDOK3X$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-6USDOK3X.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-MKB4RXL3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-G442PJSB.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-424PT5DM.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
 //# sourceMappingURL=zero.js.map
}),
]);

//# sourceMappingURL=fe940_%40rocicorp_zero_out_c2416138._.js.map
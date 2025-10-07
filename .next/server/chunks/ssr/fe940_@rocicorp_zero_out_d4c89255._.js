module.exports = [
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-MKB4RXL3.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
function assert(b, msg = "Assertion failed") {
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
        s += `${typeof v} \`${v}\``;
    }
    return s + `, expected ${t}`;
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
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-424PT5DM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-G442PJSB.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractQuery",
    ()=>AbstractQuery,
    "BTreeRead",
    ()=>BTreeRead,
    "Chunk",
    ()=>Chunk,
    "ChunkNotFoundError",
    ()=>ChunkNotFoundError,
    "ClientStateNotFoundError",
    ()=>ClientStateNotFoundError,
    "DD31",
    ()=>DD31,
    "DEFAULT_HEAD_NAME",
    ()=>DEFAULT_HEAD_NAME,
    "DEFAULT_TTL_MS",
    ()=>DEFAULT_TTL_MS,
    "DiffsMap",
    ()=>DiffsMap,
    "ENTITIES_KEY_PREFIX",
    ()=>ENTITIES_KEY_PREFIX,
    "ExpressionBuilder",
    ()=>ExpressionBuilder,
    "GOT_QUERIES_KEY_PREFIX",
    ()=>GOT_QUERIES_KEY_PREFIX,
    "Latest",
    ()=>Latest,
    "MUTATIONS_KEY_PREFIX",
    ()=>MUTATIONS_KEY_PREFIX,
    "SUBQ_PREFIX",
    ()=>SUBQ_PREFIX,
    "TDigest",
    ()=>TDigest,
    "V6",
    ()=>V6,
    "V7",
    ()=>V7,
    "addDiffsForIndexes",
    ()=>addDiffsForIndexes,
    "applyChange",
    ()=>applyChange,
    "assertClientV6",
    ()=>assertClientV6,
    "assertCookie",
    ()=>assertCookie,
    "assertHasClientState",
    ()=>assertHasClientState,
    "assertHash",
    ()=>assertHash,
    "assertJSONObject",
    ()=>assertJSONObject,
    "assertJSONValue",
    ()=>assertJSONValue,
    "assertLocalMetaDD31",
    ()=>assertLocalMetaDD31,
    "assertOrderingIncludesPK",
    ()=>assertOrderingIncludesPK,
    "assertRefs",
    ()=>assertRefs,
    "assertSnapshotCommitDD31",
    ()=>assertSnapshotCommitDD31,
    "assertSnapshotMetaDD31",
    ()=>assertSnapshotMetaDD31,
    "astSchema",
    ()=>astSchema,
    "asyncIterableToArray",
    ()=>asyncIterableToArray,
    "baseSnapshotFromCommit",
    ()=>baseSnapshotFromCommit,
    "baseSnapshotFromHash",
    ()=>baseSnapshotFromHash,
    "baseSnapshotFromHead",
    ()=>baseSnapshotFromHead,
    "binarySearch",
    ()=>binarySearch,
    "clampTTL",
    ()=>clampTTL,
    "clientGroupHasPendingMutations",
    ()=>clientGroupHasPendingMutations,
    "clientGroupIDSchema",
    ()=>clientGroupIDSchema,
    "clientIDSchema",
    ()=>clientIDSchema,
    "commitFromHash",
    ()=>commitFromHash,
    "commitFromHead",
    ()=>commitFromHead,
    "commitIsLocalDD31",
    ()=>commitIsLocalDD31,
    "compareCookies",
    ()=>compareCookies,
    "compareCookiesForSnapshots",
    ()=>compareCookiesForSnapshots,
    "compareTTL",
    ()=>compareTTL,
    "compareValues",
    ()=>compareValues,
    "createChunk",
    ()=>createChunk,
    "createPredicate",
    ()=>createPredicate,
    "decodeIndexKey",
    ()=>decodeIndexKey,
    "deepEqual",
    ()=>deepEqual,
    "defaultFormat",
    ()=>defaultFormat,
    "delegateSymbol",
    ()=>delegateSymbol,
    "desiredQueriesPrefixForClient",
    ()=>desiredQueriesPrefixForClient,
    "diff",
    ()=>diff,
    "diff2",
    ()=>diff2,
    "diffCommits",
    ()=>diffCommits,
    "disableClientGroup",
    ()=>disableClientGroup,
    "emptyHash",
    ()=>emptyHash,
    "encodeIndexScanKey",
    ()=>encodeIndexScanKey,
    "filterPush",
    ()=>filterPush,
    "getClient",
    ()=>getClient,
    "getClientGroup",
    ()=>getClientGroup,
    "getClientGroupForClient",
    ()=>getClientGroupForClient,
    "getClientGroupIDForClient",
    ()=>getClientGroupIDForClient,
    "getClientGroups",
    ()=>getClientGroups,
    "getClients",
    ()=>getClients,
    "getNonCryptoRandomValues",
    ()=>getNonCryptoRandomValues,
    "getSizeOfValue",
    ()=>getSizeOfValue,
    "h64",
    ()=>h64,
    "hasClientState",
    ()=>hasClientState,
    "hashOfAST",
    ()=>hashOfAST,
    "hashOfNameAndArgs",
    ()=>hashOfNameAndArgs,
    "idSymbol",
    ()=>idSymbol,
    "initClientV6",
    ()=>initClientV6,
    "inspectDownMessageSchema",
    ()=>inspectDownMessageSchema,
    "inspectMetricsDownSchema",
    ()=>inspectMetricsDownSchema,
    "inspectQueriesDownSchema",
    ()=>inspectQueriesDownSchema,
    "inspectVersionDownSchema",
    ()=>inspectVersionDownSchema,
    "isLocalMetaDD31",
    ()=>isLocalMetaDD31,
    "joinIterables",
    ()=>joinIterables,
    "jsonObjectSchema",
    ()=>jsonObjectSchema,
    "jsonSchema",
    ()=>jsonSchema,
    "literalUnion",
    ()=>literalUnion,
    "localMutations",
    ()=>localMutations,
    "localMutationsDD31",
    ()=>localMutationsDD31,
    "localMutationsGreaterThan",
    ()=>localMutationsGreaterThan,
    "makeClientID",
    ()=>makeClientID,
    "makeComparator",
    ()=>makeComparator,
    "mapAST",
    ()=>mapAST,
    "mapAllEntries",
    ()=>mapAllEntries,
    "mapCondition",
    ()=>mapCondition,
    "mapEntries",
    ()=>mapEntries,
    "mapValues",
    ()=>mapValues,
    "materialize",
    ()=>materialize,
    "must",
    ()=>must,
    "mustGetChunk",
    ()=>mustGetChunk,
    "mustGetClient",
    ()=>mustGetClient,
    "mustGetHeadHash",
    ()=>mustGetHeadHash,
    "nanoid",
    ()=>nanoid,
    "newQuery",
    ()=>newQuery,
    "newQuerySymbol",
    ()=>newQuerySymbol,
    "newRandomHash",
    ()=>newRandomHash,
    "newWriteLocal",
    ()=>newWriteLocal,
    "newWriteSnapshotDD31",
    ()=>newWriteSnapshotDD31,
    "normalizeAST",
    ()=>normalizeAST,
    "normalizeTTL",
    ()=>normalizeTTL,
    "once",
    ()=>once,
    "parse",
    ()=>parse,
    "primaryKeySchema",
    ()=>primaryKeySchema,
    "primaryKeyValueRecordSchema",
    ()=>primaryKeyValueRecordSchema,
    "readFromDefaultHead",
    ()=>readFromDefaultHead,
    "readFromHash",
    ()=>readFromHash,
    "readonly",
    ()=>readonly,
    "readonlyArray",
    ()=>readonlyArray,
    "readonlyObject",
    ()=>readonlyObject,
    "rowSchema",
    ()=>rowSchema,
    "setClient",
    ()=>setClient,
    "setClientGroup",
    ()=>setClientGroup,
    "setClientGroups",
    ()=>setClientGroups,
    "setClients",
    ()=>setClients,
    "snapshotMetaParts",
    ()=>snapshotMetaParts,
    "sourceNameFromKey",
    ()=>sourceNameFromKey,
    "staticParam",
    ()=>staticParam,
    "stringCompare",
    ()=>stringCompare,
    "test",
    ()=>test,
    "throwOutput",
    ()=>throwOutput,
    "toDesiredQueriesKey",
    ()=>toDesiredQueriesKey,
    "toGotQueriesKey",
    ()=>toGotQueriesKey,
    "toMutationResponseKey",
    ()=>toMutationResponseKey,
    "toPrimaryKeyString",
    ()=>toPrimaryKeyString,
    "toStaticParam",
    ()=>toStaticParam,
    "transformFilters",
    ()=>transformFilters,
    "using",
    ()=>using,
    "valita_exports",
    ()=>valita_exports,
    "valuesEqual",
    ()=>valuesEqual,
    "withRead",
    ()=>withRead,
    "withWrite",
    ()=>withWrite,
    "withWriteNoImplicitCommit",
    ()=>withWriteNoImplicitCommit,
    "wrapIterable",
    ()=>wrapIterable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-424PT5DM.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@badrap+valita@0.3.11/node_modules/@badrap/valita/dist/node-mjs/index.mjs [app-ssr] (ecmascript)");
// ../replicache/src/btree/node.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/compare-utf8@0.1.1/node_modules/compare-utf8/src/index.js [app-ssr] (ecmascript)");
// ../replicache/src/btree/write.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$lock$40$1$2e$0$2e$4$2f$node_modules$2f40$rocicorp$2f$lock$2f$out$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+lock@1.0.4/node_modules/@rocicorp/lock/out/lock.js [app-ssr] (ecmascript)");
// ../shared/src/hash.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$xxhash$40$4$2e$0$2e$0$2f$node_modules$2f$js$2d$xxhash$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-xxhash@4.0.0/node_modules/js-xxhash/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$xxhash$40$4$2e$0$2e$0$2f$node_modules$2f$js$2d$xxhash$2f$dist$2f$esm$2f$xxHash32$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-xxhash@4.0.0/node_modules/js-xxhash/dist/esm/xxHash32.js [app-ssr] (ecmascript)");
// ../zql/src/query/query-impl.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+resolver@1.0.2/node_modules/@rocicorp/resolver/out/resolver.js [app-ssr] (ecmascript)");
;
;
// ../replicache/src/format-version-enum.ts
var DD31 = 5;
var V6 = 6;
var V7 = 7;
var Latest = V7;
// ../shared/src/valita.ts
var valita_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__export"])(valita_exports, {
    assert: ()=>assert2,
    deepPartial: ()=>deepPartial,
    instanceOfAbstractType: ()=>instanceOfAbstractType,
    is: ()=>is,
    literalUnion: ()=>literalUnion,
    parse: ()=>parse,
    readonly: ()=>readonly,
    readonlyArray: ()=>readonlyArray,
    readonlyObject: ()=>readonlyObject,
    readonlyRecord: ()=>readonlyRecord,
    test: ()=>test,
    testOptional: ()=>testOptional
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__reExport"])(valita_exports, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__);
;
;
function toDisplay(value) {
    switch(typeof value){
        case "string":
        case "number":
        case "boolean":
            return JSON.stringify(value);
        case "undefined":
            return "undefined";
        case "bigint":
            return value.toString() + "n";
        default:
            if (value === null) {
                return "null";
            }
            if (Array.isArray(value)) {
                return "array";
            }
            return typeof value;
    }
}
function toDisplayAtPath(v2, path2) {
    if (!path2?.length) {
        return toDisplay(v2);
    }
    let cur = v2;
    for (const p of path2){
        cur = cur[p];
    }
    return toDisplay(cur);
}
function displayList(word, expected, toDisplay2 = (x)=>String(x)) {
    if (expected.length === 1) {
        return toDisplay2(expected[0]);
    }
    const suffix = `${toDisplay2(expected[expected.length - 2])} ${word} ${toDisplay2(expected[expected.length - 1])}`;
    if (expected.length === 2) {
        return suffix;
    }
    return `${expected.slice(0, -2).map(toDisplay2).join(", ")}, ${suffix}`;
}
function getMessage(err2, v2, schema, mode) {
    const firstIssue = err2.issues[0];
    const { path: path2 } = firstIssue;
    const atPath = path2?.length ? ` at ${path2.join(".")}` : "";
    switch(firstIssue.code){
        case "invalid_type":
            return `Expected ${displayList("or", firstIssue.expected)}${atPath}. Got ${toDisplayAtPath(v2, path2)}`;
        case "missing_value":
            {
                const atPath2 = path2 && path2.length > 1 ? ` at ${path2.slice(0, -1).join(".")}` : "";
                if (firstIssue.path?.length) {
                    return `Missing property ${firstIssue.path.at(-1)}${atPath2}`;
                }
                return `TODO Unknown missing property${atPath2}`;
            }
        case "invalid_literal":
            return `Expected literal value ${displayList("or", firstIssue.expected, toDisplay)}${atPath} Got ${toDisplayAtPath(v2, path2)}`;
        case "invalid_length":
            {
                return `Expected array with length ${firstIssue.minLength === firstIssue.maxLength ? firstIssue.minLength : `between ${firstIssue.minLength} and ${firstIssue.maxLength}`}${atPath}. Got array with length ${v2.length}`;
            }
        case "unrecognized_keys":
            if (firstIssue.keys.length === 1) {
                return `Unexpected property ${firstIssue.keys[0]}${atPath}`;
            }
            return `Unexpected properties ${displayList("and", firstIssue.keys)}${atPath}`;
        case "invalid_union":
            return schema.name === "union" ? getDeepestUnionParseError(v2, schema, mode ?? "strict") : `Invalid union value${atPath}`;
        case "custom_error":
            {
                const { error } = firstIssue;
                const message = !error ? "unknown" : typeof error === "string" ? error : error.message ?? "unknown";
                return `${message}${atPath}. Got ${toDisplayAtPath(v2, path2)}`;
            }
    }
}
function getDeepestUnionParseError(value, schema, mode) {
    const failures = [];
    for (const type of schema.options){
        const r = type.try(value, {
            mode
        });
        if (!r.ok) {
            failures.push({
                type,
                err: r
            });
        }
    }
    if (failures.length) {
        failures.sort(pathCmp);
        if (failures.length === 1 || pathCmp(failures[0], failures[1]) < 0) {
            return getMessage(failures[0].err, value, failures[0].type, mode);
        }
    }
    try {
        const str = JSON.stringify(value);
        return `Invalid union value: ${str}`;
    } catch (e) {
        return `Invalid union value`;
    }
}
function pathCmp(a, b) {
    const aPath = a.err.issues[0].path;
    const bPath = b.err.issues[0].path;
    if (aPath.length !== bPath.length) {
        return bPath.length - aPath.length;
    }
    for(let i = 0; i < aPath.length; i++){
        if (bPath[i] > aPath[i]) {
            return -1;
        }
        if (bPath[i] < aPath[i]) {
            return 1;
        }
    }
    return 0;
}
function parse(value, schema, mode) {
    const res = test(value, schema, mode);
    if (!res.ok) {
        throw new TypeError(res.error);
    }
    return res.value;
}
function is(value, schema, mode) {
    return test(value, schema, mode).ok;
}
function assert2(value, schema, mode) {
    parse(value, schema, mode);
}
function test(value, schema, mode) {
    const res = schema.try(value, mode ? {
        mode
    } : void 0);
    if (!res.ok) {
        return {
            ok: false,
            error: getMessage(res, value, schema, mode)
        };
    }
    return res;
}
function testOptional(value, schema, mode) {
    let flags = 1;
    if (mode === "passthrough") {
        flags = 0;
    } else if (mode === "strip") {
        flags = 2;
    }
    const res = schema.func(value, flags);
    if (res === void 0) {
        return {
            ok: true,
            value
        };
    } else if (res.ok) {
        return res;
    }
    const err2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ValitaError(res);
    return {
        ok: false,
        error: getMessage(err2, value, schema, mode)
    };
}
function readonly(t) {
    return t;
}
function readonlyObject(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.object(t);
}
function readonlyArray(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.array(t);
}
function readonlyRecord(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.record(t);
}
var AbstractType = Object.getPrototypeOf(Object.getPrototypeOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.string().optional())).constructor;
function instanceOfAbstractType(obj) {
    return obj instanceof AbstractType;
}
function deepPartial(s) {
    const shape = {};
    for (const [key, type] of Object.entries(s.shape)){
        if (type.name === "object") {
            shape[key] = deepPartial(type).optional();
        } else {
            shape[key] = type.optional();
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.object(shape);
}
function literalUnion(...literals) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.union(...literals.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.literal));
}
// ../replicache/src/dag/store.ts
var ChunkNotFoundError = class extends Error {
    name = "ChunkNotFoundError";
    hash;
    constructor(hash2){
        super(`Chunk not found ${hash2}`);
        this.hash = hash2;
    }
};
async function mustGetChunk(store, hash2) {
    const chunk = await store.getChunk(hash2);
    if (chunk) {
        return chunk;
    }
    throw new ChunkNotFoundError(hash2);
}
async function mustGetHeadHash(name, store) {
    const hash2 = await store.getHead(name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(hash2, `Missing head ${name}`);
    return hash2;
}
// ../replicache/src/with-transactions.ts
function withRead(store, fn) {
    return using(store.read(), fn);
}
function withWriteNoImplicitCommit(store, fn) {
    return using(store.write(), fn);
}
function withWrite(store, fn) {
    return using(store.write(), async (write)=>{
        const result = await fn(write);
        await write.commit();
        return result;
    });
}
async function using(x, fn) {
    const write = await x;
    try {
        return await fn(write);
    } finally{
        write.release();
    }
}
// ../replicache/src/dag/chunk.ts
function asRefs(sortedRefs) {
    return sortedRefs;
}
function toRefs(refs) {
    if (Array.isArray(refs)) {
        refs.sort();
        for(let i = 1; i < refs.length; i++){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(refs[i - 1] !== refs[i], "Refs must not have duplicates");
        }
        return asRefs(refs);
    }
    const refsArray = [
        ...refs
    ];
    refsArray.sort();
    return asRefs(refsArray);
}
var Chunk = class {
    hash;
    data;
    /**
   * Meta is an array of refs. If there are no refs we do not write a meta
   * chunk.
   */ meta;
    constructor(hash2, data, refs){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!refs.includes(hash2), "Chunk cannot reference itself");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(data);
        this.hash = hash2;
        this.data = data;
        this.meta = refs;
    }
};
function assertRefs(v2) {
    if (!Array.isArray(v2)) {
        throw new Error("Refs must be an array");
    }
    if (v2.length > 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v2[0]);
        for(let i = 1; i < v2.length; i++){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v2[i]);
        }
    }
}
function createChunk(data, refs, chunkHasher) {
    const hash2 = chunkHasher();
    return new Chunk(hash2, data, refs);
}
// ../shared/src/random-uint64.ts
function randomUint64() {
    const high = Math.floor(Math.random() * 4294967295);
    const low = Math.floor(Math.random() * 4294967295);
    return BigInt(high) << 32n | BigInt(low);
}
// ../replicache/src/hash.ts
var STRING_LENGTH = 22;
var hashRe = /^[0-9a-v-]+$/;
var emptyUUID = "0".repeat(STRING_LENGTH);
var emptyHash = emptyUUID;
var newRandomHash = makeNewRandomHashFunctionInternal();
function toStringAndSlice(n, len) {
    return n.toString(32).slice(-len).padStart(len, "0");
}
function makeNewRandomHashFunctionInternal() {
    let base = "";
    let i = 0;
    return ()=>{
        if (!base) {
            base = toStringAndSlice(randomUint64(), 12);
        }
        const tail = toStringAndSlice(i++, 10);
        return base + tail;
    };
}
function isHash(value) {
    return typeof value === "string" && hashRe.test(value);
}
function assertHash(value) {
    assert2(value, hashSchema);
}
var hashSchema = valita_exports.string().assert(isHash, "Invalid hash");
// ../replicache/src/index-defs.ts
var indexDefinitionSchema = readonlyObject({
    prefix: valita_exports.string().optional(),
    jsonPointer: valita_exports.string(),
    allowEmpty: valita_exports.boolean().optional()
});
var indexDefinitionsSchema = readonlyRecord(indexDefinitionSchema);
function indexDefinitionEqual(a, b) {
    return a.jsonPointer === b.jsonPointer && (a.allowEmpty ?? false) === (b.allowEmpty ?? false) && (a.prefix ?? "") === (b.prefix ?? "");
}
function indexDefinitionsEqual(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for (const [aKey, aValue] of Object.entries(a)){
        const bValue = b[aKey];
        if (!bValue || !indexDefinitionEqual(aValue, bValue)) {
            return false;
        }
    }
    return true;
}
// ../replicache/src/persist/client-groups.ts
var clientGroupSchema = readonlyObject({
    /**
   * The hash of the commit in the perdag last persisted to this client group.
   * Should only be updated by clients assigned to this client group.
   */ headHash: hashSchema,
    /**
   * Set of mutator names common to all clients assigned to this client group.
   */ mutatorNames: readonlyArray(valita_exports.string()),
    /**
   * Index definitions common to all clients assigned to this client group.
   */ indexes: indexDefinitionsSchema,
    /**
   * The highest mutation ID of every client assigned to this client group.
   * Should only be updated by clients assigned to this client group. Read by
   * other clients to determine if there are unacknowledged pending mutations
   * for them to try to recover. This is redundant with information in the
   * commit graph at `headHash`, but allows other clients to determine if there
   * are unacknowledged pending mutations without having to load the commit
   * graph.
   */ mutationIDs: readonlyRecord(valita_exports.number()),
    /**
   * The highest lastMutationID received from the server for every client
   * assigned to this client group.
   *
   * Should be updated by the clients assigned to this client group whenever
   * they persist to this client group. Read by other clients to determine if
   * there are unacknowledged pending mutations for them to recover and
   * *updated* by other clients upon successfully recovering pending mutations
   * to avoid redundant pushes of pending mutations.
   *
   * Note: This will be the same as the `lastMutationIDs` of the base snapshot
   * of the client group's commit graph when written by clients assigned to this
   * client group.  However, when written by another client recovering mutations
   * it may be different because the other client does not update the commit
   * graph.
   */ lastServerAckdMutationIDs: valita_exports.record(valita_exports.number()),
    /**
   * If the server deletes this client group it can signal that the client group
   * was deleted. If that happens we mark this client group as disabled so that
   * we do not use it again when creating new clients.
   */ disabled: valita_exports.boolean()
});
var CLIENT_GROUPS_HEAD_NAME = "client-groups";
function assertClientGroup(value) {
    assert2(value, clientGroupSchema);
}
function chunkDataToClientGroupMap(chunkData) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(chunkData);
    const clientGroups = /* @__PURE__ */ new Map();
    for (const [key, value] of Object.entries(chunkData)){
        if (value !== void 0) {
            assertClientGroup(value);
            clientGroups.set(key, value);
        }
    }
    return clientGroups;
}
function clientGroupMapToChunkData(clientGroups, dagWrite) {
    const chunkData = {};
    for (const [clientGroupID, clientGroup] of clientGroups.entries()){
        dagWrite.assertValidHash(clientGroup.headHash);
        chunkData[clientGroupID] = {
            ...clientGroup,
            mutatorNames: [
                ...clientGroup.mutatorNames.values()
            ]
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(chunkData);
}
async function getClientGroupsAtHash(hash2, dagRead) {
    const chunk = await dagRead.getChunk(hash2);
    return chunkDataToClientGroupMap(chunk?.data);
}
async function getClientGroups(dagRead) {
    const hash2 = await dagRead.getHead(CLIENT_GROUPS_HEAD_NAME);
    if (!hash2) {
        return /* @__PURE__ */ new Map();
    }
    return getClientGroupsAtHash(hash2, dagRead);
}
async function setClientGroups(clientGroups, dagWrite) {
    const currClientGroups = await getClientGroups(dagWrite);
    for (const [clientGroupID, clientGroup] of clientGroups){
        const currClientGroup = currClientGroups.get(clientGroupID);
        validateClientGroupUpdate(clientGroup, currClientGroup);
    }
    return setValidatedClientGroups(clientGroups, dagWrite);
}
async function setClientGroup(clientGroupID, clientGroup, dagWrite) {
    const currClientGroups = await getClientGroups(dagWrite);
    const currClientGroup = currClientGroups.get(clientGroupID);
    validateClientGroupUpdate(clientGroup, currClientGroup);
    const newClientGroups = new Map(currClientGroups);
    newClientGroups.set(clientGroupID, clientGroup);
    return setValidatedClientGroups(newClientGroups, dagWrite);
}
function validateClientGroupUpdate(clientGroup, currClientGroup) {
    const mutatorNamesSet = new Set(clientGroup.mutatorNames);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(mutatorNamesSet.size === clientGroup.mutatorNames.length, "A client group's mutatorNames must be a set.");
    if (currClientGroup !== void 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(indexDefinitionsEqual(currClientGroup.indexes, clientGroup.indexes), "A client group's index definitions must never change.");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(mutatorNamesEqual(mutatorNamesSet, currClientGroup.mutatorNames), "A client group's mutatorNames must never change.");
    }
}
async function setValidatedClientGroups(clientGroups, dagWrite) {
    const chunkData = clientGroupMapToChunkData(clientGroups, dagWrite);
    const refs = /* @__PURE__ */ new Set();
    for (const clientGroup of clientGroups.values()){
        refs.add(clientGroup.headHash);
    }
    const chunk = dagWrite.createChunk(chunkData, toRefs(refs));
    await dagWrite.putChunk(chunk);
    await dagWrite.setHead(CLIENT_GROUPS_HEAD_NAME, chunk.hash);
    return clientGroups;
}
function mutatorNamesEqual(mutatorNamesSet, mutatorNames) {
    if (mutatorNames.length !== mutatorNamesSet.size) {
        return false;
    }
    for (const mutatorName of mutatorNames){
        if (!mutatorNamesSet.has(mutatorName)) {
            return false;
        }
    }
    return true;
}
async function getClientGroup(id, dagRead) {
    const clientGroups = await getClientGroups(dagRead);
    return clientGroups.get(id);
}
function clientGroupHasPendingMutations(clientGroup) {
    for (const [clientID, mutationID] of Object.entries(clientGroup.mutationIDs)){
        const lastServerAckdMutationID = clientGroup.lastServerAckdMutationIDs[clientID];
        if (lastServerAckdMutationID === void 0 && mutationID !== 0 || lastServerAckdMutationID < mutationID) {
            return true;
        }
    }
    return false;
}
async function disableClientGroup(clientGroupID, dagWrite) {
    const clientGroup = await getClientGroup(clientGroupID, dagWrite);
    if (!clientGroup) {
        return;
    }
    const disabledClientGroup = {
        ...clientGroup,
        disabled: true
    };
    await setClientGroup(clientGroupID, disabledClientGroup, dagWrite);
}
// ../shared/src/json.ts
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    switch(typeof a){
        case "boolean":
        case "number":
        case "string":
            return false;
    }
    a = a;
    if (Array.isArray(a)) {
        if (!Array.isArray(b)) {
            return false;
        }
        if (a.length !== b.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if (!deepEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    if (a === null || b === null) {
        return false;
    }
    if (Array.isArray(b)) {
        return false;
    }
    a = a;
    b = b;
    let aSize = 0;
    for(const key in a){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(a, key)) {
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
            aSize++;
        }
    }
    let bSize = 0;
    for(const key in b){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(b, key)) {
            bSize++;
        }
    }
    return aSize === bSize;
}
function assertJSONValue(v2) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProd"]) {
        return;
    }
    switch(typeof v2){
        case "boolean":
        case "number":
        case "string":
            return;
        case "object":
            if (v2 === null) {
                return;
            }
            if (Array.isArray(v2)) {
                return assertJSONArray(v2);
            }
            return assertObjectIsJSONObject(v2);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwInvalidType"])(v2, "JSON value");
}
function assertJSONObject(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    assertObjectIsJSONObject(v2);
}
function assertObjectIsJSONObject(v2) {
    for(const k in v2){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(v2, k)) {
            const value = v2[k];
            if (value !== void 0) {
                assertJSONValue(value);
            }
        }
    }
}
function assertJSONArray(v2) {
    for (const item of v2){
        assertJSONValue(item);
    }
}
function isJSONValue(v2, path2) {
    switch(typeof v2){
        case "boolean":
        case "number":
        case "string":
            return true;
        case "object":
            if (v2 === null) {
                return true;
            }
            if (Array.isArray(v2)) {
                return isJSONArray(v2, path2);
            }
            return objectIsJSONObject(v2, path2);
    }
    return false;
}
function isJSONObject(v2, path2) {
    if (typeof v2 !== "object" || v2 === null) {
        return false;
    }
    return objectIsJSONObject(v2, path2);
}
function objectIsJSONObject(v2, path2) {
    for(const k in v2){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(v2, k)) {
            path2.push(k);
            const value = v2[k];
            if (value !== void 0 && !isJSONValue(value, path2)) {
                return false;
            }
            path2.pop();
        }
    }
    return true;
}
function isJSONArray(v2, path2) {
    for(let i = 0; i < v2.length; i++){
        path2.push(i);
        if (!isJSONValue(v2[i], path2)) {
            return false;
        }
        path2.pop();
    }
    return true;
}
// ../replicache/src/size-of-value.ts
var SIZE_TAG = 1;
var SIZE_INT32 = 4;
var SIZE_SMI = 5;
var SIZE_DOUBLE = 8;
function getSizeOfValue(value) {
    switch(typeof value){
        case "string":
            return SIZE_TAG + SIZE_INT32 + value.length;
        case "number":
            if (isSmi(value)) {
                if (value <= -(2 ** 30) || value >= 2 ** 30 - 1) {
                    return SIZE_TAG + SIZE_SMI;
                }
                return SIZE_TAG + SIZE_INT32;
            }
            return SIZE_TAG + SIZE_DOUBLE;
        case "boolean":
            return SIZE_TAG;
        case "object":
            if (value === null) {
                return SIZE_TAG;
            }
            if (Array.isArray(value)) {
                let sum = 2 * SIZE_TAG + SIZE_INT32;
                for (const element of value){
                    sum += getSizeOfValue(element);
                }
                return sum;
            }
            {
                const val = value;
                let sum = 2 * SIZE_TAG + SIZE_INT32;
                for(const k in val){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(val, k)) {
                        const propertyValue = val[k];
                        if (propertyValue !== void 0) {
                            sum += getSizeOfValue(k) + getSizeOfValue(propertyValue);
                        }
                    }
                }
                return sum;
            }
    }
    throw new Error(`Invalid value. type: ${typeof value}, value: ${value}`);
}
function isSmi(value) {
    return value === (value | 0);
}
var entryFixed = 2 * SIZE_TAG + SIZE_INT32 + SIZE_TAG + SIZE_INT32;
function getSizeOfEntry(key, value) {
    return entryFixed + getSizeOfValue(key) + getSizeOfValue(value);
}
;
// ../shared/src/binary-search.ts
function binarySearch(high, compare) {
    let low = 0;
    while(low < high){
        const mid = low + (high - low >> 1);
        const i = compare(mid);
        if (i === 0) {
            return mid;
        }
        if (i > 0) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}
// ../shared/src/iterables.ts
function* joinIterables(...iters) {
    for (const iter of iters){
        yield* iter;
    }
}
function* filterIter(iter, p) {
    let index = 0;
    for (const t of iter){
        if (p(t, index++)) {
            yield t;
        }
    }
}
function* mapIter(iter, f) {
    let index = 0;
    for (const t of iter){
        yield f(t, index++);
    }
}
function* once(stream) {
    const it = stream[Symbol.iterator]();
    const { value } = it.next();
    if (value !== void 0) {
        yield value;
    }
    it.return?.();
}
var IterWrapper = class _IterWrapper {
    iter;
    constructor(iter){
        this.iter = iter;
    }
    [Symbol.iterator]() {
        return this.iter[Symbol.iterator]();
    }
    map(f) {
        return new _IterWrapper(mapIter(this.iter, f));
    }
    filter(p) {
        return new _IterWrapper(filterIter(this.iter, p));
    }
};
function wrapIterable(iter) {
    return new IterWrapper(iter);
}
// ../replicache/src/btree/node.ts
var NODE_LEVEL = 0;
var NODE_ENTRIES = 1;
function makeNodeChunkData(level, entries, formatVersion) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])([
        level,
        formatVersion >= V7 ? entries : entries.map((e)=>e.slice(0, 2))
    ]);
}
async function findLeaf(key, hash2, source, expectedRootHash) {
    const node = await source.getNode(hash2);
    if (expectedRootHash !== source.rootHash) {
        return findLeaf(key, source.rootHash, source, source.rootHash);
    }
    if (isDataNodeImpl(node)) {
        return node;
    }
    const { entries } = node;
    let i = binarySearch2(key, entries);
    if (i === entries.length) {
        i--;
    }
    const entry = entries[i];
    return findLeaf(key, entry[1], source, expectedRootHash);
}
function binarySearch2(key, entries) {
    return binarySearch(entries.length, (i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareUTF8"])(key, entries[i][0]));
}
function binarySearchFound(i, entries, key) {
    return i !== entries.length && entries[i][0] === key;
}
function parseBTreeNode(v2, formatVersion, getSizeOfEntry2) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProd"] && formatVersion >= V7) {
        return v2;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertArray"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(v2.length >= 2);
    const [level, entries] = v2;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(level);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertArray"])(entries);
    const f = level > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"] : assertJSONValue;
    if (formatVersion >= V7) {
        for (const e of entries){
            assertEntry(e, f);
        }
        return v2;
    }
    const newEntries = entries.map((e)=>convertNonV7Entry(e, f, getSizeOfEntry2));
    return [
        level,
        newEntries
    ];
}
function assertEntry(entry, f) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertArray"])(entry);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(entry.length >= 3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(entry[0]);
    f(entry[1]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(entry[2]);
}
function convertNonV7Entry(entry, f, getSizeOfEntry2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertArray"])(entry);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(entry.length >= 2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(entry[0]);
    f(entry[1]);
    const entrySize = getSizeOfEntry2(entry[0], entry[1]);
    return [
        entry[0],
        entry[1],
        entrySize
    ];
}
var NodeImpl = class {
    entries;
    hash;
    isMutable;
    #childNodeSize = -1;
    constructor(entries, hash2, isMutable){
        this.entries = entries;
        this.hash = hash2;
        this.isMutable = isMutable;
    }
    maxKey() {
        return this.entries[this.entries.length - 1][0];
    }
    getChildNodeSize(tree) {
        if (this.#childNodeSize !== -1) {
            return this.#childNodeSize;
        }
        let sum = tree.chunkHeaderSize;
        for (const entry of this.entries){
            sum += entry[2];
        }
        return this.#childNodeSize = sum;
    }
    _updateNode(tree) {
        this.#childNodeSize = -1;
        tree.updateNode(this);
    }
};
function toChunkData(node, formatVersion) {
    return makeNodeChunkData(node.level, node.entries, formatVersion);
}
var DataNodeImpl = class extends NodeImpl {
    level = 0;
    set(key, value, entrySize, tree) {
        let deleteCount;
        const i = binarySearch2(key, this.entries);
        if (!binarySearchFound(i, this.entries, key)) {
            deleteCount = 0;
        } else {
            deleteCount = 1;
        }
        return Promise.resolve(this.#splice(tree, i, deleteCount, [
            key,
            value,
            entrySize
        ]));
    }
    #splice(tree, start, deleteCount, ...items) {
        if (this.isMutable) {
            this.entries.splice(start, deleteCount, ...items);
            this._updateNode(tree);
            return this;
        }
        const entries = readonlySplice(this.entries, start, deleteCount, ...items);
        return tree.newDataNodeImpl(entries);
    }
    del(key, tree) {
        const i = binarySearch2(key, this.entries);
        if (!binarySearchFound(i, this.entries, key)) {
            return Promise.resolve(this);
        }
        return Promise.resolve(this.#splice(tree, i, 1));
    }
    async *keys(_tree) {
        for (const entry of this.entries){
            yield entry[0];
        }
    }
    async *entriesIter(_tree) {
        for (const entry of this.entries){
            yield entry;
        }
    }
};
function readonlySplice(array6, start, deleteCount, ...items) {
    const arr = array6.slice(0, start);
    for(let i = 0; i < items.length; i++){
        arr.push(items[i]);
    }
    for(let i = start + deleteCount; i < array6.length; i++){
        arr.push(array6[i]);
    }
    return arr;
}
var InternalNodeImpl = class _InternalNodeImpl extends NodeImpl {
    level;
    constructor(entries, hash2, level, isMutable){
        super(entries, hash2, isMutable);
        this.level = level;
    }
    async set(key, value, entrySize, tree) {
        let i = binarySearch2(key, this.entries);
        if (i === this.entries.length) {
            i--;
        }
        const childHash = this.entries[i][1];
        const oldChildNode = await tree.getNode(childHash);
        const childNode = await oldChildNode.set(key, value, entrySize, tree);
        const childNodeSize = childNode.getChildNodeSize(tree);
        if (childNodeSize > tree.maxSize || childNodeSize < tree.minSize) {
            return this.#mergeAndPartition(tree, i, childNode);
        }
        const newEntry = createNewInternalEntryForNode(childNode, tree.getEntrySize);
        return this.#replaceChild(tree, i, newEntry);
    }
    /**
   * This merges the child node entries with previous or next sibling and then
   * partitions the merged entries.
   */ async #mergeAndPartition(tree, i, childNode) {
        const level = this.level - 1;
        const thisEntries = this.entries;
        let values;
        let startIndex;
        let removeCount;
        if (i > 0) {
            const hash2 = thisEntries[i - 1][1];
            const previousSibling = await tree.getNode(hash2);
            values = joinIterables(previousSibling.entries, childNode.entries);
            startIndex = i - 1;
            removeCount = 2;
        } else if (i < thisEntries.length - 1) {
            const hash2 = thisEntries[i + 1][1];
            const nextSibling = await tree.getNode(hash2);
            values = joinIterables(childNode.entries, nextSibling.entries);
            startIndex = i;
            removeCount = 2;
        } else {
            values = childNode.entries;
            startIndex = i;
            removeCount = 1;
        }
        const partitions = partition(values, (value)=>value[2], tree.minSize - tree.chunkHeaderSize, tree.maxSize - tree.chunkHeaderSize);
        const newEntries = [];
        for (const entries2 of partitions){
            const node = tree.newNodeImpl(entries2, level);
            const newHashEntry = createNewInternalEntryForNode(node, tree.getEntrySize);
            newEntries.push(newHashEntry);
        }
        if (this.isMutable) {
            this.entries.splice(startIndex, removeCount, ...newEntries);
            this._updateNode(tree);
            return this;
        }
        const entries = readonlySplice(thisEntries, startIndex, removeCount, ...newEntries);
        return tree.newInternalNodeImpl(entries, this.level);
    }
    #replaceChild(tree, index, newEntry) {
        if (this.isMutable) {
            this.entries.splice(index, 1, newEntry);
            this._updateNode(tree);
            return this;
        }
        const entries = readonlySplice(this.entries, index, 1, newEntry);
        return tree.newInternalNodeImpl(entries, this.level);
    }
    async del(key, tree) {
        const i = binarySearch2(key, this.entries);
        if (i === this.entries.length) {
            return this;
        }
        const childHash = this.entries[i][1];
        const oldChildNode = await tree.getNode(childHash);
        const oldHash = oldChildNode.hash;
        const childNode = await oldChildNode.del(key, tree);
        if (childNode.hash === oldHash) {
            return this;
        }
        if (childNode.entries.length === 0) {
            const entries = readonlySplice(this.entries, i, 1);
            return tree.newInternalNodeImpl(entries, this.level);
        }
        if (i === 0 && this.entries.length === 1) {
            return childNode;
        }
        if (childNode.getChildNodeSize(tree) > tree.minSize) {
            const entry = createNewInternalEntryForNode(childNode, tree.getEntrySize);
            return this.#replaceChild(tree, i, entry);
        }
        return this.#mergeAndPartition(tree, i, childNode);
    }
    async *keys(tree) {
        for (const entry of this.entries){
            const childNode = await tree.getNode(entry[1]);
            yield* childNode.keys(tree);
        }
    }
    async *entriesIter(tree) {
        for (const entry of this.entries){
            const childNode = await tree.getNode(entry[1]);
            yield* childNode.entriesIter(tree);
        }
    }
    getChildren(start, length, tree) {
        const ps = [];
        for(let i = start; i < length && i < this.entries.length; i++){
            ps.push(tree.getNode(this.entries[i][1]));
        }
        return Promise.all(ps);
    }
    async getCompositeChildren(start, length, tree) {
        const { level } = this;
        if (length === 0) {
            return new _InternalNodeImpl([], newRandomHash(), level - 1, true);
        }
        const output = await this.getChildren(start, start + length, tree);
        if (level > 1) {
            const entries2 = [];
            for (const child of output){
                entries2.push(...child.entries);
            }
            return new _InternalNodeImpl(entries2, newRandomHash(), level - 1, true);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(level === 1);
        const entries = [];
        for (const child of output){
            entries.push(...child.entries);
        }
        return new DataNodeImpl(entries, newRandomHash(), true);
    }
};
function newNodeImpl(entries, hash2, level, isMutable) {
    if (level === 0) {
        return new DataNodeImpl(entries, hash2, isMutable);
    }
    return new InternalNodeImpl(entries, hash2, level, isMutable);
}
function isDataNodeImpl(node) {
    return node.level === 0;
}
function partition(values, getSizeOfEntry2, min, max) {
    const partitions = [];
    const sizes = [];
    let sum = 0;
    let accum = [];
    for (const value of values){
        const size = getSizeOfEntry2(value);
        if (size >= max) {
            if (accum.length > 0) {
                partitions.push(accum);
                sizes.push(sum);
            }
            partitions.push([
                value
            ]);
            sizes.push(size);
            sum = 0;
            accum = [];
        } else if (sum + size >= min) {
            accum.push(value);
            partitions.push(accum);
            sizes.push(sum + size);
            sum = 0;
            accum = [];
        } else {
            sum += size;
            accum.push(value);
        }
    }
    if (sum > 0) {
        if (sizes.length > 0 && sum + sizes[sizes.length - 1] <= max) {
            partitions[partitions.length - 1].push(...accum);
        } else {
            partitions.push(accum);
        }
    }
    return partitions;
}
var emptyDataNode = makeNodeChunkData(0, [], Latest);
var emptyDataNodeImpl = new DataNodeImpl([], emptyHash, false);
function createNewInternalEntryForNode(node, getSizeOfEntry2) {
    const key = node.maxKey();
    const value = node.hash;
    const size = getSizeOfEntry2(key, value);
    return [
        key,
        value,
        size
    ];
}
// ../replicache/src/btree/splice.ts
var SPLICE_UNASSIGNED = -1;
var SPLICE_AT = 0;
var SPLICE_REMOVED = 1;
var SPLICE_ADDED = 2;
var SPLICE_FROM = 3;
var KEY = 0;
var VALUE = 1;
function* computeSplices(previous, current) {
    let previousIndex = 0;
    let currentIndex = 0;
    let splice;
    function ensureAssigned(splice2, index) {
        if (splice2[SPLICE_FROM] === SPLICE_UNASSIGNED) {
            splice2[SPLICE_FROM] = index;
        }
    }
    function newSplice() {
        return [
            previousIndex,
            0,
            0,
            SPLICE_UNASSIGNED
        ];
    }
    while(previousIndex < previous.length && currentIndex < current.length){
        if (previous[previousIndex][KEY] === current[currentIndex][KEY]) {
            if (deepEqual(// These are really Hash | InternalValue
            previous[previousIndex][VALUE], current[currentIndex][VALUE])) {
                if (splice) {
                    ensureAssigned(splice, 0);
                    yield splice;
                    splice = void 0;
                }
            } else {
                if (!splice) {
                    splice = newSplice();
                }
                splice[SPLICE_ADDED]++;
                splice[SPLICE_REMOVED]++;
                ensureAssigned(splice, currentIndex);
            }
            previousIndex++;
            currentIndex++;
        } else if (previous[previousIndex][KEY] < current[currentIndex][KEY]) {
            if (!splice) {
                splice = newSplice();
            }
            splice[SPLICE_REMOVED]++;
            previousIndex++;
        } else {
            if (!splice) {
                splice = newSplice();
            }
            splice[SPLICE_ADDED]++;
            ensureAssigned(splice, currentIndex);
            currentIndex++;
        }
    }
    if (currentIndex < current.length) {
        if (!splice) {
            splice = newSplice();
        }
        splice[SPLICE_ADDED] += current.length - currentIndex;
        ensureAssigned(splice, currentIndex);
    }
    if (previousIndex < previous.length) {
        if (!splice) {
            splice = newSplice();
        }
        splice[SPLICE_REMOVED] += previous.length - previousIndex;
    }
    if (splice) {
        ensureAssigned(splice, 0);
        yield splice;
    }
}
// ../replicache/src/btree/read.ts
var NODE_HEADER_SIZE = 11;
var BTreeRead = class {
    _cache = /* @__PURE__ */ new Map();
    _dagRead;
    _formatVersion;
    rootHash;
    getEntrySize;
    chunkHeaderSize;
    constructor(dagRead, formatVersion, root = emptyHash, getEntrySize = getSizeOfEntry, chunkHeaderSize = NODE_HEADER_SIZE){
        this._dagRead = dagRead;
        this._formatVersion = formatVersion;
        this.rootHash = root;
        this.getEntrySize = getEntrySize;
        this.chunkHeaderSize = chunkHeaderSize;
    }
    async getNode(hash2) {
        if (hash2 === emptyHash) {
            return emptyDataNodeImpl;
        }
        const cached = this._cache.get(hash2);
        if (cached) {
            return cached;
        }
        const chunk = await this._dagRead.mustGetChunk(hash2);
        const data = parseBTreeNode(chunk.data, this._formatVersion, this.getEntrySize);
        const impl = newNodeImpl(data[NODE_ENTRIES], hash2, data[NODE_LEVEL], false);
        this._cache.set(hash2, impl);
        return impl;
    }
    async get(key) {
        const leaf = await findLeaf(key, this.rootHash, this, this.rootHash);
        const index = binarySearch2(key, leaf.entries);
        if (!binarySearchFound(index, leaf.entries, key)) {
            return void 0;
        }
        return leaf.entries[index][1];
    }
    async has(key) {
        const leaf = await findLeaf(key, this.rootHash, this, this.rootHash);
        const index = binarySearch2(key, leaf.entries);
        return binarySearchFound(index, leaf.entries, key);
    }
    async isEmpty() {
        const { rootHash } = this;
        const node = await this.getNode(this.rootHash);
        if (this.rootHash !== rootHash) {
            return this.isEmpty();
        }
        return node.entries.length === 0;
    }
    // We don't do any encoding of the key in the map, so we have no way of
    // determining from an entry.key alone whether it is a regular key or an
    // encoded IndexKey in an index map. Without encoding regular map keys the
    // caller has to deal with encoding and decoding the keys for the index map.
    scan(fromKey) {
        return scanForHash(this.rootHash, ()=>this.rootHash, this.rootHash, fromKey, async (hash2)=>{
            const cached = await this.getNode(hash2);
            if (cached) {
                return [
                    cached.level,
                    cached.isMutable ? cached.entries.slice() : cached.entries
                ];
            }
            const chunk = await this._dagRead.mustGetChunk(hash2);
            return parseBTreeNode(chunk.data, this._formatVersion, this.getEntrySize);
        });
    }
    async *keys() {
        const node = await this.getNode(this.rootHash);
        yield* node.keys(this);
    }
    async *entries() {
        const node = await this.getNode(this.rootHash);
        yield* node.entriesIter(this);
    }
    [Symbol.asyncIterator]() {
        return this.entries();
    }
    async *diff(last) {
        const [currentNode, lastNode] = await Promise.all([
            this.getNode(this.rootHash),
            last.getNode(last.rootHash)
        ]);
        yield* diffNodes(lastNode, currentNode, last, this);
    }
};
async function* diffNodes(last, current, lastTree, currentTree) {
    if (last.level > current.level) {
        const lastChild = await last.getCompositeChildren(0, last.entries.length, lastTree);
        yield* diffNodes(lastChild, current, lastTree, currentTree);
        return;
    }
    if (current.level > last.level) {
        const currentChild = await current.getCompositeChildren(0, current.entries.length, currentTree);
        yield* diffNodes(last, currentChild, lastTree, currentTree);
        return;
    }
    if (isDataNodeImpl(last) && isDataNodeImpl(current)) {
        yield* diffEntries(last.entries, current.entries);
        return;
    }
    const initialSplices = computeSplices(last.entries, current.entries);
    for (const splice of initialSplices){
        const [lastChild, currentChild] = await Promise.all([
            last.getCompositeChildren(splice[SPLICE_AT], splice[SPLICE_REMOVED], lastTree),
            current.getCompositeChildren(splice[SPLICE_FROM], splice[SPLICE_ADDED], currentTree)
        ]);
        yield* diffNodes(lastChild, currentChild, lastTree, currentTree);
    }
}
function* diffEntries(lastEntries, currentEntries) {
    const lastLength = lastEntries.length;
    const currentLength = currentEntries.length;
    let i = 0;
    let j = 0;
    while(i < lastLength && j < currentLength){
        const lastKey = lastEntries[i][0];
        const currentKey = currentEntries[j][0];
        if (lastKey === currentKey) {
            if (!deepEqual(lastEntries[i][1], currentEntries[j][1])) {
                yield {
                    op: "change",
                    key: lastKey,
                    oldValue: lastEntries[i][1],
                    newValue: currentEntries[j][1]
                };
            }
            i++;
            j++;
        } else if (lastKey < currentKey) {
            yield {
                op: "del",
                key: lastKey,
                oldValue: lastEntries[i][1]
            };
            i++;
        } else {
            yield {
                op: "add",
                key: currentKey,
                newValue: currentEntries[j][1]
            };
            j++;
        }
    }
    for(; i < lastLength; i++){
        yield {
            op: "del",
            key: lastEntries[i][0],
            oldValue: lastEntries[i][1]
        };
    }
    for(; j < currentLength; j++){
        yield {
            op: "add",
            key: currentEntries[j][0],
            newValue: currentEntries[j][1]
        };
    }
}
async function* scanForHash(expectedRootHash, getRootHash, hash2, fromKey, readNode) {
    if (hash2 === emptyHash) {
        return;
    }
    const data = await readNode(hash2);
    const entries = data[NODE_ENTRIES];
    let i = 0;
    if (fromKey) {
        i = binarySearch2(fromKey, entries);
    }
    if (data[NODE_LEVEL] > 0) {
        for(; i < entries.length; i++){
            yield* scanForHash(expectedRootHash, getRootHash, entries[i][1], fromKey, readNode);
            fromKey = "";
        }
    } else {
        for(; i < entries.length; i++){
            const rootHash = getRootHash();
            if (expectedRootHash !== rootHash) {
                yield* scanForHash(rootHash, getRootHash, rootHash, entries[i][0], readNode);
                return;
            }
            yield entries[i];
        }
    }
}
async function allEntriesAsDiff(map, op) {
    const diff3 = [];
    const make = op === "add" ? (entry)=>({
            op: "add",
            key: entry[0],
            newValue: entry[1]
        }) : (entry)=>({
            op: "del",
            key: entry[0],
            oldValue: entry[1]
        });
    for await (const entry of map.entries()){
        diff3.push(make(entry));
    }
    return diff3;
}
// ../shared/src/string-compare.ts
function stringCompare(a, b) {
    if (a === b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
}
// ../replicache/src/cookies.ts
function compareCookies(a, b) {
    if (a === b) {
        return 0;
    }
    if (a === null) {
        return -1;
    }
    if (b === null) {
        return 1;
    }
    const cva = getCompareValue(a);
    const cvb = getCompareValue(b);
    if (typeof cva === "string" || typeof cvb === "string") {
        return stringCompare(String(cva), String(cvb));
    }
    return cva - cvb;
}
function getCompareValue(cookie) {
    if (typeof cookie === "string" || typeof cookie === "number") {
        return cookie;
    }
    return cookie.order;
}
function assertCookie(v2) {
    if (v2 === null || typeof v2 === "string" || typeof v2 === "number") {
        return;
    }
    assertJSONObject(v2);
    if (typeof v2.order === "string" || typeof v2.order === "number") {
        return;
    }
    throw new Error("Invalid cookie");
}
// ../replicache/src/db/meta-type-enum.ts
var LocalDD31 = 4;
var SnapshotDD31 = 5;
// ../replicache/src/db/commit.ts
var DEFAULT_HEAD_NAME = "main";
function commitIsLocalDD31(commit) {
    return isLocalMetaDD31(commit.meta);
}
function commitIsLocal(commit) {
    return commitIsLocalDD31(commit);
}
function commitIsSnapshot(commit) {
    return isSnapshotMetaDD31(commit.meta);
}
var Commit = class {
    chunk;
    constructor(chunk){
        this.chunk = chunk;
    }
    get meta() {
        return this.chunk.data.meta;
    }
    get valueHash() {
        return this.chunk.data.valueHash;
    }
    getMutationID(clientID, dagRead) {
        return getMutationID(clientID, dagRead, this.meta);
    }
    async getNextMutationID(clientID, dagRead) {
        return await this.getMutationID(clientID, dagRead) + 1;
    }
    get indexes() {
        return this.chunk.data.indexes;
    }
};
async function getMutationID(clientID, dagRead, meta) {
    switch(meta.type){
        case SnapshotDD31:
            return meta.lastMutationIDs[clientID] ?? 0;
        case LocalDD31:
            {
                if (meta.clientID === clientID) {
                    return meta.mutationID;
                }
                const { basisHash } = meta;
                const basisCommit = await commitFromHash(basisHash, dagRead);
                return getMutationID(clientID, dagRead, basisCommit.meta);
            }
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(meta);
    }
}
async function localMutations(fromCommitHash, dagRead) {
    const commits = await commitChain(fromCommitHash, dagRead);
    return commits.filter((c)=>commitIsLocal(c));
}
async function localMutationsDD31(fromCommitHash, dagRead) {
    const commits = await commitChain(fromCommitHash, dagRead);
    return commits.filter((c)=>commitIsLocalDD31(c));
}
async function localMutationsGreaterThan(commit, mutationIDLimits, dagRead) {
    const commits = [];
    const remainingMutationIDLimits = new Map(Object.entries(mutationIDLimits));
    while(!commitIsSnapshot(commit) && remainingMutationIDLimits.size > 0){
        if (commitIsLocalDD31(commit)) {
            const { meta } = commit;
            const mutationIDLowerLimit = remainingMutationIDLimits.get(meta.clientID);
            if (mutationIDLowerLimit !== void 0) {
                if (meta.mutationID <= mutationIDLowerLimit) {
                    remainingMutationIDLimits.delete(meta.clientID);
                } else {
                    commits.push(commit);
                }
            }
        }
        const { basisHash } = commit.meta;
        if (basisHash === null) {
            throw new Error(`Commit ${commit.chunk.hash} has no basis`);
        }
        commit = await commitFromHash(basisHash, dagRead);
    }
    return commits;
}
async function baseSnapshotFromHead(name, dagRead) {
    const hash2 = await dagRead.getHead(name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(hash2, `Missing head ${name}`);
    return baseSnapshotFromHash(hash2, dagRead);
}
async function baseSnapshotHashFromHash(hash2, dagRead) {
    return (await baseSnapshotFromHash(hash2, dagRead)).chunk.hash;
}
async function baseSnapshotFromHash(hash2, dagRead) {
    const commit = await commitFromHash(hash2, dagRead);
    return baseSnapshotFromCommit(commit, dagRead);
}
async function baseSnapshotFromCommit(commit, dagRead) {
    while(!commitIsSnapshot(commit)){
        const { meta } = commit;
        if (isLocalMetaDD31(meta)) {
            commit = await commitFromHash(meta.baseSnapshotHash, dagRead);
        } else {
            const { basisHash } = meta;
            if (basisHash === null) {
                throw new Error(`Commit ${commit.chunk.hash} has no basis`);
            }
            commit = await commitFromHash(basisHash, dagRead);
        }
    }
    return commit;
}
function snapshotMetaParts(c, clientID) {
    const m = c.meta;
    const lmid = m.lastMutationIDs[clientID] ?? 0;
    return [
        lmid,
        m.cookieJSON
    ];
}
function compareCookiesForSnapshots(a, b) {
    return compareCookies(a.meta.cookieJSON, b.meta.cookieJSON);
}
async function commitChain(fromCommitHash, dagRead) {
    let commit = await commitFromHash(fromCommitHash, dagRead);
    const commits = [];
    while(!commitIsSnapshot(commit)){
        const { meta } = commit;
        const { basisHash } = meta;
        if (basisHash === null) {
            throw new Error(`Commit ${commit.chunk.hash} has no basis`);
        }
        commits.push(commit);
        commit = await commitFromHash(basisHash, dagRead);
    }
    commits.push(commit);
    return commits;
}
async function commitFromHash(hash2, dagRead) {
    const chunk = await dagRead.mustGetChunk(hash2);
    return fromChunk(chunk);
}
async function commitFromHead(name, dagRead) {
    const hash2 = await mustGetHeadHash(name, dagRead);
    return commitFromHash(hash2, dagRead);
}
function assertLocalMetaDD31(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v2.clientID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(v2.mutationID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v2.mutatorName);
    if (!v2.mutatorName) {
        throw new Error("Missing mutator name");
    }
    assertJSONValue(v2.mutatorArgsJSON);
    if (v2.originalHash !== null) {
        assertHash(v2.originalHash);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(v2.timestamp);
}
function isLocalMetaDD31(meta) {
    return meta.type === LocalDD31;
}
function assertSnapshotMetaDD31(v2) {
    if (v2.basisHash !== null) {
        assertHash(v2.basisHash);
    }
    assertJSONValue(v2.cookieJSON);
    assertLastMutationIDs(v2.lastMutationIDs);
}
function assertLastMutationIDs(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    for (const e of Object.values(v2)){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(e);
    }
}
function assertSnapshotCommitDD31(c) {
    assertSnapshotMetaDD31(c.meta);
}
function isSnapshotMetaDD31(meta) {
    return meta.type === SnapshotDD31;
}
function assertMeta(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    if (v2.basisHash !== null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v2.basisHash);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(v2.type);
    switch(v2.type){
        case LocalDD31:
            assertLocalMetaDD31(v2);
            break;
        case SnapshotDD31:
            assertSnapshotMetaDD31(v2);
            break;
        default:
            throw new Error(`Invalid enum value ${v2.type}`);
    }
}
function chunkIndexDefinitionEqualIgnoreName(a, b) {
    return a.jsonPointer === b.jsonPointer && (a.allowEmpty ?? false) === (b.allowEmpty ?? false) && a.keyPrefix === b.keyPrefix;
}
function assertChunkIndexDefinition(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v2.name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v2.keyPrefix);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v2.jsonPointer);
    if (v2.allowEmpty !== void 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertBoolean"])(v2.allowEmpty);
    }
}
function toChunkIndexDefinition(name, indexDefinition) {
    return {
        name,
        keyPrefix: indexDefinition.prefix ?? "",
        jsonPointer: indexDefinition.jsonPointer,
        allowEmpty: indexDefinition.allowEmpty ?? false
    };
}
function assertIndexRecord(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    assertChunkIndexDefinition(v2.definition);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v2.valueHash);
}
function assertIndexRecords(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertArray"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    for (const ir of v2){
        assertIndexRecord(ir);
    }
}
function newLocalDD31(createChunk2, basisHash, baseSnapshotHash, mutationID, mutatorName, mutatorArgsJSON, originalHash, valueHash, indexes, timestamp, clientID) {
    const meta = {
        type: LocalDD31,
        basisHash,
        baseSnapshotHash,
        mutationID,
        mutatorName,
        mutatorArgsJSON,
        originalHash,
        timestamp,
        clientID
    };
    return commitFromCommitData(createChunk2, makeCommitData(meta, valueHash, indexes));
}
function newSnapshotDD31(createChunk2, basisHash, lastMutationIDs, cookieJSON, valueHash, indexes) {
    return commitFromCommitData(createChunk2, newSnapshotCommitDataDD31(basisHash, lastMutationIDs, cookieJSON, valueHash, indexes));
}
function newSnapshotCommitDataDD31(basisHash, lastMutationIDs, cookieJSON, valueHash, indexes) {
    const meta = {
        type: SnapshotDD31,
        basisHash,
        lastMutationIDs,
        cookieJSON
    };
    return makeCommitData(meta, valueHash, indexes);
}
function fromChunk(chunk) {
    validateChunk(chunk);
    return new Commit(chunk);
}
function commitFromCommitData(createChunk2, data) {
    return new Commit(createChunk2(data, getRefs(data)));
}
function getRefs(data) {
    const refs = /* @__PURE__ */ new Set();
    refs.add(data.valueHash);
    const { meta } = data;
    switch(meta.type){
        case LocalDD31:
            meta.basisHash && refs.add(meta.basisHash);
            break;
        case SnapshotDD31:
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(meta);
    }
    for (const index of data.indexes){
        refs.add(index.valueHash);
    }
    return toRefs(refs);
}
function makeCommitData(meta, valueHash, indexes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])({
        meta,
        valueHash,
        indexes
    });
}
function assertCommitData(v2) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProd"]) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    assertMeta(v2.meta);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v2.valueHash);
    assertIndexRecords(v2.indexes);
}
function validateChunk(chunk) {
    const { data } = chunk;
    assertCommitData(data);
    const seen = /* @__PURE__ */ new Set();
    for (const index of data.indexes){
        const { name } = index.definition;
        if (seen.has(name)) {
            throw new Error(`Duplicate index ${name}`);
        }
        seen.add(name);
    }
}
// ../replicache/src/db/index-operation-enum.ts
var Add = 0;
var Remove = 1;
// ../replicache/src/db/index.ts
var IndexRead = class {
    meta;
    map;
    constructor(meta, map){
        this.meta = meta;
        this.map = map;
    }
};
var IndexWrite = class extends IndexRead {
    // Note: does not update self.meta.valueHash (doesn't need to at this point as flush
    // is only called during commit.)
    flush() {
        return this.map.flush();
    }
    clear() {
        return this.map.clear();
    }
};
async function indexValue(lc, index, op, key, val, jsonPointer, allowEmpty) {
    try {
        for (const entry of getIndexKeys(key, val, jsonPointer, allowEmpty)){
            switch(op){
                case Add:
                    await index.put(entry, val);
                    break;
                case Remove:
                    await index.del(entry);
                    break;
            }
        }
    } catch (e) {
        lc.info?.("Not indexing value", val, ":", e);
    }
}
function getIndexKeys(primary, value, jsonPointer, allowEmpty) {
    const target = evaluateJSONPointer(value, jsonPointer);
    if (target === void 0) {
        if (allowEmpty) {
            return [];
        }
        throw new Error(`No value at path: ${jsonPointer}`);
    }
    const values = Array.isArray(target) ? target : [
        target
    ];
    const indexKeys = [];
    for (const value2 of values){
        if (typeof value2 === "string") {
            indexKeys.push(encodeIndexKey([
                value2,
                primary
            ]));
        } else {
            throw new Error("Unsupported target type");
        }
    }
    return indexKeys;
}
var KEY_VERSION_0 = "\0";
var KEY_SEPARATOR = "\0";
function encodeIndexKey(indexKey) {
    const secondary = indexKey[0];
    const primary = indexKey[1];
    if (secondary.includes("\0")) {
        throw new Error("Secondary key cannot contain null byte");
    }
    return KEY_VERSION_0 + secondary + KEY_SEPARATOR + primary;
}
function encodeIndexScanKey(secondary, primary) {
    const k = encodeIndexKey([
        secondary,
        primary || ""
    ]);
    if (primary === void 0) {
        return k.slice(0, k.length - 1);
    }
    return k;
}
function decodeIndexKey(encodedIndexKey) {
    if (encodedIndexKey[0] !== KEY_VERSION_0) {
        throw new Error("Invalid version");
    }
    const versionLen = KEY_VERSION_0.length;
    const separatorLen = KEY_SEPARATOR.length;
    const separatorOffset = encodedIndexKey.indexOf(KEY_SEPARATOR, versionLen);
    if (separatorOffset === -1) {
        throw new Error("Invalid formatting");
    }
    const secondary = encodedIndexKey.slice(versionLen, separatorOffset);
    const primary = encodedIndexKey.slice(separatorOffset + separatorLen);
    return [
        secondary,
        primary
    ];
}
function evaluateJSONPointer(value, pointer) {
    function parseIndex(s) {
        if (s.startsWith("+") || s.startsWith("0") && s.length !== 1) {
            return void 0;
        }
        return parseInt(s, 10);
    }
    if (pointer === "") {
        return value;
    }
    if (!pointer.startsWith("/")) {
        throw new Error(`Invalid JSON pointer: ${pointer}`);
    }
    const tokens = pointer.split("/").slice(1).map((x)=>x.replace(/~1/g, "/").replace(/~0/g, "~"));
    let target = value;
    for (const token of tokens){
        let targetOpt;
        if (Array.isArray(target)) {
            const i = parseIndex(token);
            if (i === void 0) {
                return void 0;
            }
            targetOpt = target[i];
        } else if (target === null) {
            return void 0;
        } else if (typeof target === "object") {
            target = target;
            targetOpt = target[token];
        }
        if (targetOpt === void 0) {
            return void 0;
        }
        target = targetOpt;
    }
    return target;
}
// ../replicache/src/db/read.ts
var Read = class {
    #dagRead;
    map;
    indexes;
    constructor(dagRead, map, indexes){
        this.#dagRead = dagRead;
        this.map = map;
        this.indexes = indexes;
    }
    has(key) {
        return this.map.has(key);
    }
    get(key) {
        return this.map.get(key);
    }
    isEmpty() {
        return this.map.isEmpty();
    }
    getMapForIndex(indexName) {
        const idx = this.indexes.get(indexName);
        if (idx === void 0) {
            throw new Error(`Unknown index name: ${indexName}`);
        }
        return idx.map;
    }
    get closed() {
        return this.#dagRead.closed;
    }
    close() {
        this.#dagRead.release();
    }
};
function readFromDefaultHead(dagRead, formatVersion) {
    return readFromHead(DEFAULT_HEAD_NAME, dagRead, formatVersion);
}
async function readFromHead(name, dagRead, formatVersion) {
    const commit = await commitFromHead(name, dagRead);
    return readFromCommit(commit, dagRead, formatVersion);
}
async function readFromHash(hash2, dagRead, formatVersion) {
    const commit = await commitFromHash(hash2, dagRead);
    return readFromCommit(commit, dagRead, formatVersion);
}
function readFromCommit(commit, dagRead, formatVersion) {
    const indexes = readIndexesForRead(commit, dagRead, formatVersion);
    const map = new BTreeRead(dagRead, formatVersion, commit.valueHash);
    return new Read(dagRead, map, indexes);
}
function readIndexesForRead(commit, dagRead, formatVersion) {
    const m = /* @__PURE__ */ new Map();
    for (const index of commit.indexes){
        m.set(index.definition.name, new IndexRead(index, new BTreeRead(dagRead, formatVersion, index.valueHash)));
    }
    return m;
}
// ../replicache/src/async-iterable-to-array.ts
async function asyncIterableToArray(it) {
    const arr = [];
    for await (const v2 of it){
        arr.push(v2);
    }
    return arr;
}
// ../replicache/src/btree/diff.ts
function diff(oldMap, newMap) {
    return asyncIterableToArray(newMap.diff(oldMap));
}
;
var BTreeWrite = class extends BTreeRead {
    /**
   * This rw lock is used to ensure we do not mutate the btree in parallel. It
   * would be a problem if we didn't have the lock in cases like this:
   *
   * ```ts
   * const p1 = tree.put('a', 0);
   * const p2 = tree.put('b', 1);
   * await p1;
   * await p2;
   * ```
   *
   * because both `p1` and `p2` would start from the old root hash but a put
   * changes the root hash so the two concurrent puts would lead to only one of
   * them actually working, and it is not deterministic which one would finish
   * last.
   */ #lock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$lock$40$1$2e$0$2e$4$2f$node_modules$2f40$rocicorp$2f$lock$2f$out$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lock"]();
    #modified = /* @__PURE__ */ new Map();
    minSize;
    maxSize;
    constructor(dagWrite, formatVersion, root = emptyHash, minSize = 8 * 1024, maxSize = 16 * 1024, getEntrySize = getSizeOfEntry, chunkHeaderSize){
        super(dagWrite, formatVersion, root, getEntrySize, chunkHeaderSize);
        this.minSize = minSize;
        this.maxSize = maxSize;
    }
    #addToModified(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(node.isMutable);
        this.#modified.set(node.hash, node);
        this._cache.set(node.hash, node);
    }
    updateNode(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(node.isMutable);
        this.#modified.delete(node.hash);
        node.hash = newRandomHash();
        this.#addToModified(node);
    }
    newInternalNodeImpl(entries, level) {
        const n = new InternalNodeImpl(entries, newRandomHash(), level, true);
        this.#addToModified(n);
        return n;
    }
    newDataNodeImpl(entries) {
        const n = new DataNodeImpl(entries, newRandomHash(), true);
        this.#addToModified(n);
        return n;
    }
    newNodeImpl(entries, level) {
        const n = newNodeImpl(entries, newRandomHash(), level, true);
        this.#addToModified(n);
        return n;
    }
    put(key, value) {
        return this.#lock.withLock(async ()=>{
            const oldRootNode = await this.getNode(this.rootHash);
            const entrySize = this.getEntrySize(key, value);
            const rootNode = await oldRootNode.set(key, value, entrySize, this);
            if (rootNode.getChildNodeSize(this) > this.maxSize) {
                const headerSize = this.chunkHeaderSize;
                const partitions = partition(rootNode.entries, (value2)=>value2[2], this.minSize - headerSize, this.maxSize - headerSize);
                const { level } = rootNode;
                const entries = partitions.map((entries2)=>{
                    const node = this.newNodeImpl(entries2, level);
                    return createNewInternalEntryForNode(node, this.getEntrySize);
                });
                const newRoot = this.newInternalNodeImpl(entries, level + 1);
                this.rootHash = newRoot.hash;
                return;
            }
            this.rootHash = rootNode.hash;
        });
    }
    del(key) {
        return this.#lock.withLock(async ()=>{
            const oldRootNode = await this.getNode(this.rootHash);
            const newRootNode = await oldRootNode.del(key, this);
            const found = this.rootHash !== newRootNode.hash;
            if (found) {
                if (newRootNode.level > 0 && newRootNode.entries.length === 1) {
                    this.rootHash = newRootNode.entries[0][1];
                } else {
                    this.rootHash = newRootNode.hash;
                }
            }
            return found;
        });
    }
    clear() {
        return this.#lock.withLock(()=>{
            this.#modified.clear();
            this.rootHash = emptyHash;
        });
    }
    flush() {
        return this.#lock.withLock(async ()=>{
            const dagWrite = this._dagRead;
            if (this.rootHash === emptyHash) {
                const chunk = dagWrite.createChunk(emptyDataNode, []);
                await dagWrite.putChunk(chunk);
                return chunk.hash;
            }
            const newChunks = [];
            const newRoot = gatherNewChunks(this.rootHash, newChunks, dagWrite.createChunk, this.#modified, this._formatVersion);
            await Promise.all(newChunks.map((chunk)=>dagWrite.putChunk(chunk)));
            this.#modified.clear();
            this.rootHash = newRoot;
            return newRoot;
        });
    }
};
function gatherNewChunks(hash2, newChunks, createChunk2, modified, formatVersion) {
    const node = modified.get(hash2);
    if (node === void 0) {
        return hash2;
    }
    if (isDataNodeImpl(node)) {
        const chunk2 = createChunk2(toChunkData(node, formatVersion), []);
        newChunks.push(chunk2);
        return chunk2.hash;
    }
    const refs = [];
    const { entries } = node;
    for(let i = 0; i < entries.length; i++){
        const entry = entries[i];
        const childHash = entry[1];
        const newChildHash = gatherNewChunks(childHash, newChunks, createChunk2, modified, formatVersion);
        if (newChildHash !== childHash) {
            entries[i] = [
                entry[0],
                newChildHash,
                entry[2]
            ];
        }
        refs.push(newChildHash);
    }
    const chunk = createChunk2(toChunkData(node, formatVersion), toRefs(refs));
    newChunks.push(chunk);
    return chunk.hash;
}
// ../replicache/src/lazy.ts
function lazy(factory) {
    let value;
    return ()=>{
        if (value === void 0) {
            value = factory();
        }
        return value;
    };
}
// ../replicache/src/sync/diff.ts
var DiffsMap = class extends Map {
    set(key, value) {
        if (value.length === 0) {
            return this;
        }
        return super.set(key, value);
    }
};
async function diff2(oldHash, newHash, read, diffConfig, formatVersion) {
    const [oldCommit, newCommit] = await Promise.all([
        commitFromHash(oldHash, read),
        commitFromHash(newHash, read)
    ]);
    return diffCommits(oldCommit, newCommit, read, diffConfig, formatVersion);
}
async function diffCommits(oldCommit, newCommit, read, diffConfig, formatVersion) {
    const diffsMap = new DiffsMap();
    if (!diffConfig.shouldComputeDiffs()) {
        return diffsMap;
    }
    const oldMap = new BTreeRead(read, formatVersion, oldCommit.valueHash);
    const newMap = new BTreeRead(read, formatVersion, newCommit.valueHash);
    const valueDiff = await diff(oldMap, newMap);
    diffsMap.set("", valueDiff);
    await addDiffsForIndexes(oldCommit, newCommit, read, diffsMap, diffConfig, formatVersion);
    return diffsMap;
}
async function addDiffsForIndexes(mainCommit, syncCommit, read, diffsMap, diffConfig, formatVersion) {
    const oldIndexes = readIndexesForRead(mainCommit, read, formatVersion);
    const newIndexes = readIndexesForRead(syncCommit, read, formatVersion);
    for (const [oldIndexName, oldIndex] of oldIndexes){
        if (!diffConfig.shouldComputeDiffsForIndex(oldIndexName)) {
            continue;
        }
        const newIndex = newIndexes.get(oldIndexName);
        if (newIndex !== void 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(newIndex !== oldIndex);
            const diffs = await diff(oldIndex.map, newIndex.map);
            newIndexes.delete(oldIndexName);
            diffsMap.set(oldIndexName, diffs);
        } else {
            const diffs = await allEntriesAsDiff(oldIndex.map, "del");
            diffsMap.set(oldIndexName, diffs);
        }
    }
    for (const [newIndexName, newIndex] of newIndexes){
        if (!diffConfig.shouldComputeDiffsForIndex(newIndexName)) {
            continue;
        }
        const diffs = await allEntriesAsDiff(newIndex.map, "add");
        diffsMap.set(newIndexName, diffs);
    }
}
// ../replicache/src/db/write.ts
var Write = class extends Read {
    #dagWrite;
    #basis;
    #meta;
    #clientID;
    #formatVersion;
    constructor(dagWrite, map, basis, meta, indexes, clientID, formatVersion){
        super(dagWrite, map, indexes);
        this.#dagWrite = dagWrite;
        this.#basis = basis;
        this.#meta = meta;
        this.#clientID = clientID;
        this.#formatVersion = formatVersion;
        if (basis === void 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(meta.basisHash === emptyHash);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(meta.basisHash === basis.chunk.hash);
        }
    }
    /**
   * The value needs to be frozen since it is kept in memory and used later for
   * comparison as well as returned in `get`.
   */ async put(lc, key, value) {
        const oldVal = lazy(()=>this.map.get(key));
        await updateIndexes(lc, this.indexes, key, oldVal, value);
        await this.map.put(key, value);
    }
    getMutationID() {
        return getMutationID(this.#clientID, this.#dagWrite, this.#meta);
    }
    async del(lc, key) {
        const oldVal = lazy(()=>this.map.get(key));
        if (oldVal !== void 0) {
            await updateIndexes(lc, this.indexes, key, oldVal, void 0);
        }
        return this.map.del(key);
    }
    async clear() {
        await this.map.clear();
        const ps = [];
        for (const idx of this.indexes.values()){
            ps.push(idx.clear());
        }
        await Promise.all(ps);
    }
    async putCommit() {
        const valueHash = await this.map.flush();
        const indexRecords = [];
        for (const index of this.indexes.values()){
            const valueHash2 = await index.flush();
            const indexRecord = {
                definition: index.meta.definition,
                valueHash: valueHash2
            };
            indexRecords.push(indexRecord);
        }
        let commit;
        const meta = this.#meta;
        switch(meta.type){
            case LocalDD31:
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#formatVersion >= DD31);
                    const { basisHash, mutationID, mutatorName, mutatorArgsJSON, originalHash, timestamp } = meta;
                    commit = newLocalDD31(this.#dagWrite.createChunk, basisHash, await baseSnapshotHashFromHash(basisHash, this.#dagWrite), mutationID, mutatorName, mutatorArgsJSON, originalHash, valueHash, indexRecords, timestamp, this.#clientID);
                    break;
                }
            case SnapshotDD31:
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#formatVersion > DD31);
                    const { basisHash, lastMutationIDs, cookieJSON } = meta;
                    commit = newSnapshotDD31(this.#dagWrite.createChunk, basisHash, lastMutationIDs, cookieJSON, valueHash, indexRecords);
                    break;
                }
        }
        await this.#dagWrite.putChunk(commit.chunk);
        return commit;
    }
    // Return value is the hash of the new commit.
    async commit(headName) {
        const commit = await this.putCommit();
        const commitHash = commit.chunk.hash;
        await this.#dagWrite.setHead(headName, commitHash);
        await this.#dagWrite.commit();
        return commitHash;
    }
    async commitWithDiffs(headName, diffConfig) {
        const commit = this.putCommit();
        const diffMap = await this.#generateDiffs(diffConfig);
        const commitHash = (await commit).chunk.hash;
        await this.#dagWrite.setHead(headName, commitHash);
        await this.#dagWrite.commit();
        return [
            commitHash,
            diffMap
        ];
    }
    async #generateDiffs(diffConfig) {
        const diffsMap = new DiffsMap();
        if (!diffConfig.shouldComputeDiffs()) {
            return diffsMap;
        }
        let valueDiff = [];
        if (this.#basis) {
            const basisMap = new BTreeRead(this.#dagWrite, this.#formatVersion, this.#basis.valueHash);
            valueDiff = await diff(basisMap, this.map);
        }
        diffsMap.set("", valueDiff);
        let basisIndexes;
        if (this.#basis) {
            basisIndexes = readIndexesForRead(this.#basis, this.#dagWrite, this.#formatVersion);
        } else {
            basisIndexes = /* @__PURE__ */ new Map();
        }
        for (const [name, index] of this.indexes){
            if (!diffConfig.shouldComputeDiffsForIndex(name)) {
                continue;
            }
            const basisIndex = basisIndexes.get(name);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(index !== basisIndex);
            const indexDiffResult = await (basisIndex ? diff(basisIndex.map, index.map) : // No basis. All keys are new.
            allEntriesAsDiff(index.map, "add"));
            diffsMap.set(name, indexDiffResult);
        }
        for (const [name, basisIndex] of basisIndexes){
            if (!this.indexes.has(name) && diffConfig.shouldComputeDiffsForIndex(name)) {
                const indexDiffResult = await allEntriesAsDiff(basisIndex.map, "del");
                diffsMap.set(name, indexDiffResult);
            }
        }
        return diffsMap;
    }
    close() {
        this.#dagWrite.release();
    }
};
async function newWriteLocal(basisHash, mutatorName, mutatorArgsJSON, originalHash, dagWrite, timestamp, clientID, formatVersion) {
    const basis = await commitFromHash(basisHash, dagWrite);
    const bTreeWrite = new BTreeWrite(dagWrite, formatVersion, basis.valueHash);
    const mutationID = await basis.getNextMutationID(clientID, dagWrite);
    const indexes = readIndexesForWrite(basis, dagWrite, formatVersion);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(formatVersion >= DD31);
    return new Write(dagWrite, bTreeWrite, basis, {
        type: LocalDD31,
        basisHash,
        baseSnapshotHash: await baseSnapshotHashFromHash(basisHash, dagWrite),
        mutatorName,
        mutatorArgsJSON,
        mutationID,
        originalHash,
        timestamp,
        clientID
    }, indexes, clientID, formatVersion);
}
async function newWriteSnapshotDD31(basisHash, lastMutationIDs, cookieJSON, dagWrite, clientID, formatVersion) {
    const basis = await commitFromHash(basisHash, dagWrite);
    const bTreeWrite = new BTreeWrite(dagWrite, formatVersion, basis.valueHash);
    return new Write(dagWrite, bTreeWrite, basis, {
        basisHash,
        type: SnapshotDD31,
        lastMutationIDs,
        cookieJSON
    }, readIndexesForWrite(basis, dagWrite, formatVersion), clientID, formatVersion);
}
async function updateIndexes(lc, indexes, key, oldValGetter, newVal) {
    const ps = [];
    for (const idx of indexes.values()){
        const { keyPrefix } = idx.meta.definition;
        if (!keyPrefix || key.startsWith(keyPrefix)) {
            const oldVal = await oldValGetter();
            if (oldVal !== void 0) {
                ps.push(indexValue(lc, idx.map, Remove, key, oldVal, idx.meta.definition.jsonPointer, idx.meta.definition.allowEmpty ?? false));
            }
            if (newVal !== void 0) {
                ps.push(indexValue(lc, idx.map, Add, key, newVal, idx.meta.definition.jsonPointer, idx.meta.definition.allowEmpty ?? false));
            }
        }
    }
    await Promise.all(ps);
}
function readIndexesForWrite(commit, dagWrite, formatVersion) {
    const m = /* @__PURE__ */ new Map();
    for (const index of commit.indexes){
        m.set(index.definition.name, new IndexWrite(index, new BTreeWrite(dagWrite, formatVersion, index.valueHash)));
    }
    return m;
}
async function createIndexBTree(lc, dagWrite, valueMap, prefix, jsonPointer, allowEmpty, formatVersion) {
    const indexMap = new BTreeWrite(dagWrite, formatVersion);
    for await (const entry of valueMap.scan(prefix)){
        const key = entry[0];
        if (!key.startsWith(prefix)) {
            break;
        }
        await indexValue(lc, indexMap, Add, key, entry[1], jsonPointer, allowEmpty);
    }
    return indexMap;
}
// ../replicache/src/sync/ids.ts
var clientGroupIDSchema = valita_exports.string();
var clientIDSchema = valita_exports.string();
// ../replicache/src/persist/make-client-id.ts
function makeClientID() {
    const length = 18;
    const high = randomUint64();
    const low = randomUint64();
    const combined = high << 64n | low;
    return combined.toString(32).slice(-length).padStart(length, "0");
}
// ../replicache/src/persist/clients.ts
var clientV5Schema = readonlyObject({
    heartbeatTimestampMs: valita_exports.number(),
    headHash: hashSchema,
    /**
   * The hash of a commit we are in the middle of refreshing into this client's
   * memdag.
   */ tempRefreshHash: hashSchema.nullable(),
    /**
   * ID of this client's perdag client group. This needs to be sent in pull
   * request (to enable syncing all last mutation ids in the client group).
   */ clientGroupID: clientGroupIDSchema
});
var clientV6Schema = readonlyObject({
    heartbeatTimestampMs: valita_exports.number(),
    /**
   * A set of hashes, which contains:
   * 1. The hash of the last commit this client refreshed from its client group
   *    (this is the commit it bootstrapped from until it completes its first
   *    refresh).
   * 2. One or more hashes that were added to retain chunks of a commit while it
   *    was being refreshed into this client's memdag. (This can be one or more
   *    because refresh's cleanup step is a separate transaction and can fail).
   * Upon refresh completing and successfully running its clean up step, this
   * set will contain a single hash: the hash of the last commit this client
   * refreshed.
   */ refreshHashes: readonlyArray(hashSchema),
    /**
   * The hash of the last snapshot commit persisted by this client to this
   * client's client group, or null if has never persisted a snapshot.
   */ persistHash: hashSchema.nullable(),
    /**
   * ID of this client's perdag client group. This needs to be sent in pull
   * request (to enable syncing all last mutation ids in the client group).
   */ clientGroupID: clientGroupIDSchema
});
function isClientV6(client) {
    return client.refreshHashes !== void 0;
}
var CLIENTS_HEAD_NAME = "clients";
var clientSchema = valita_exports.union(clientV5Schema, clientV6Schema);
function assertClient(value) {
    assert2(value, clientSchema);
}
function assertClientV6(value) {
    assert2(value, clientV6Schema);
}
function chunkDataToClientMap(chunkData) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(chunkData);
    const clients = /* @__PURE__ */ new Map();
    for(const key in chunkData){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(chunkData, key)) {
            const value = chunkData[key];
            if (value !== void 0) {
                assertClient(value);
                clients.set(key, value);
            }
        }
    }
    return clients;
}
function clientMapToChunkData(clients, dagWrite) {
    for (const client of clients.values()){
        if (isClientV6(client)) {
            client.refreshHashes.forEach(dagWrite.assertValidHash);
            if (client.persistHash) {
                dagWrite.assertValidHash(client.persistHash);
            }
        } else {
            dagWrite.assertValidHash(client.headHash);
            if (client.tempRefreshHash) {
                dagWrite.assertValidHash(client.tempRefreshHash);
            }
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(Object.fromEntries(clients));
}
async function getClients(dagRead) {
    const hash2 = await dagRead.getHead(CLIENTS_HEAD_NAME);
    return getClientsAtHash(hash2, dagRead);
}
async function getClientsAtHash(hash2, dagRead) {
    if (!hash2) {
        return /* @__PURE__ */ new Map();
    }
    const chunk = await dagRead.getChunk(hash2);
    return chunkDataToClientMap(chunk?.data);
}
var ClientStateNotFoundError = class extends Error {
    name = "ClientStateNotFoundError";
    id;
    constructor(id){
        super(`Client state not found, id: ${id}`);
        this.id = id;
    }
};
async function assertHasClientState(id, dagRead) {
    if (!await hasClientState(id, dagRead)) {
        throw new ClientStateNotFoundError(id);
    }
}
async function hasClientState(id, dagRead) {
    return !!await getClient(id, dagRead);
}
async function getClient(id, dagRead) {
    const clients = await getClients(dagRead);
    return clients.get(id);
}
async function mustGetClient(id, dagRead) {
    const client = await getClient(id, dagRead);
    if (!client) {
        throw new ClientStateNotFoundError(id);
    }
    return client;
}
function initClientV6(newClientID, lc, perdag, mutatorNames, indexes, formatVersion, enableClientGroupForking) {
    return withWrite(perdag, async (dagWrite)=>{
        async function setClientsAndClientGroupAndCommit(basisHash, cookieJSON, valueHash2, indexRecords2) {
            const newSnapshotData = newSnapshotCommitDataDD31(basisHash, {}, cookieJSON, valueHash2, indexRecords2);
            const chunk = dagWrite.createChunk(newSnapshotData, getRefs(newSnapshotData));
            const newClientGroupID = makeClientID();
            const newClient = {
                heartbeatTimestampMs: Date.now(),
                refreshHashes: [
                    chunk.hash
                ],
                persistHash: null,
                clientGroupID: newClientGroupID
            };
            const newClients = new Map(clients).set(newClientID, newClient);
            const clientGroup = {
                headHash: chunk.hash,
                mutatorNames,
                indexes,
                mutationIDs: {},
                lastServerAckdMutationIDs: {},
                disabled: false
            };
            await Promise.all([
                dagWrite.putChunk(chunk),
                setClients(newClients, dagWrite),
                setClientGroup(newClientGroupID, clientGroup, dagWrite)
            ]);
            return [
                newClient,
                chunk.hash,
                newClients,
                true
            ];
        }
        const clients = await getClients(dagWrite);
        const res = await findMatchingClient(dagWrite, mutatorNames, indexes);
        if (res.type === FIND_MATCHING_CLIENT_TYPE_HEAD) {
            const { clientGroupID, headHash } = res;
            const newClient = {
                clientGroupID,
                refreshHashes: [
                    headHash
                ],
                heartbeatTimestampMs: Date.now(),
                persistHash: null
            };
            const newClients = new Map(clients).set(newClientID, newClient);
            await setClients(newClients, dagWrite);
            return [
                newClient,
                headHash,
                newClients,
                false
            ];
        }
        if (!enableClientGroupForking || res.type === FIND_MATCHING_CLIENT_TYPE_NEW) {
            const emptyBTreeChunk = dagWrite.createChunk(emptyDataNode, []);
            await dagWrite.putChunk(emptyBTreeChunk);
            const indexRecords2 = [];
            for (const [name, indexDefinition] of Object.entries(indexes)){
                const chunkIndexDefinition = toChunkIndexDefinition(name, indexDefinition);
                indexRecords2.push({
                    definition: chunkIndexDefinition,
                    valueHash: emptyBTreeChunk.hash
                });
            }
            return setClientsAndClientGroupAndCommit(null, null, emptyBTreeChunk.hash, indexRecords2);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(res.type === FIND_MATCHING_CLIENT_TYPE_FORK);
        const { snapshot } = res;
        const indexRecords = [];
        const { valueHash, indexes: oldIndexes } = snapshot;
        const map = new BTreeRead(dagWrite, formatVersion, valueHash);
        for (const [name, indexDefinition] of Object.entries(indexes)){
            const { prefix = "", jsonPointer, allowEmpty = false } = indexDefinition;
            const chunkIndexDefinition = {
                name,
                keyPrefix: prefix,
                jsonPointer,
                allowEmpty
            };
            const oldIndex = findMatchingOldIndex(oldIndexes, chunkIndexDefinition);
            if (oldIndex) {
                indexRecords.push({
                    definition: chunkIndexDefinition,
                    valueHash: oldIndex.valueHash
                });
            } else {
                const indexBTree = await createIndexBTree(lc, dagWrite, map, prefix, jsonPointer, allowEmpty, formatVersion);
                indexRecords.push({
                    definition: chunkIndexDefinition,
                    valueHash: await indexBTree.flush()
                });
            }
        }
        return setClientsAndClientGroupAndCommit(snapshot.meta.basisHash, snapshot.meta.cookieJSON, snapshot.valueHash, indexRecords);
    });
}
function findMatchingOldIndex(oldIndexes, chunkIndexDefinition) {
    return oldIndexes.find((index)=>chunkIndexDefinitionEqualIgnoreName(index.definition, chunkIndexDefinition));
}
var FIND_MATCHING_CLIENT_TYPE_NEW = 0;
var FIND_MATCHING_CLIENT_TYPE_FORK = 1;
var FIND_MATCHING_CLIENT_TYPE_HEAD = 2;
async function findMatchingClient(dagRead, mutatorNames, indexes) {
    let newestCookie;
    let bestSnapshot;
    const mutatorNamesSet = new Set(mutatorNames);
    const clientGroups = await getClientGroups(dagRead);
    for (const [clientGroupID, clientGroup] of clientGroups){
        if (!clientGroup.disabled && mutatorNamesEqual(mutatorNamesSet, clientGroup.mutatorNames) && indexDefinitionsEqual(indexes, clientGroup.indexes)) {
            return {
                type: FIND_MATCHING_CLIENT_TYPE_HEAD,
                clientGroupID,
                headHash: clientGroup.headHash
            };
        }
        const clientGroupSnapshotCommit = await baseSnapshotFromHash(clientGroup.headHash, dagRead);
        assertSnapshotCommitDD31(clientGroupSnapshotCommit);
        const { cookieJSON } = clientGroupSnapshotCommit.meta;
        if (newestCookie === void 0 || compareCookies(cookieJSON, newestCookie) > 0) {
            newestCookie = cookieJSON;
            bestSnapshot = clientGroupSnapshotCommit;
        }
    }
    if (bestSnapshot) {
        return {
            type: FIND_MATCHING_CLIENT_TYPE_FORK,
            snapshot: bestSnapshot
        };
    }
    return {
        type: FIND_MATCHING_CLIENT_TYPE_NEW
    };
}
function getRefsForClients(clients) {
    const refs = /* @__PURE__ */ new Set();
    for (const client of clients.values()){
        if (isClientV6(client)) {
            for (const hash2 of client.refreshHashes){
                refs.add(hash2);
            }
            if (client.persistHash) {
                refs.add(client.persistHash);
            }
        } else {
            refs.add(client.headHash);
            if (client.tempRefreshHash) {
                refs.add(client.tempRefreshHash);
            }
        }
    }
    return toRefs(refs);
}
async function getClientGroupForClient(clientID, read) {
    const clientGroupID = await getClientGroupIDForClient(clientID, read);
    if (!clientGroupID) {
        return void 0;
    }
    return getClientGroup(clientGroupID, read);
}
async function getClientGroupIDForClient(clientID, read) {
    const client = await getClient(clientID, read);
    return client?.clientGroupID;
}
async function setClient(clientID, client, dagWrite) {
    const clients = await getClients(dagWrite);
    const newClients = new Map(clients).set(clientID, client);
    return setClients(newClients, dagWrite);
}
async function setClients(clients, dagWrite) {
    const chunkData = clientMapToChunkData(clients, dagWrite);
    const chunk = dagWrite.createChunk(chunkData, getRefsForClients(clients));
    await dagWrite.putChunk(chunk);
    await dagWrite.setHead(CLIENTS_HEAD_NAME, chunk.hash);
    return chunk.hash;
}
// ../shared/src/objects.ts
function mapValues(input, mapper) {
    return mapEntries(input, (k, v2)=>[
            k,
            mapper(v2)
        ]);
}
function mapEntries(input, mapper) {
    const output = {};
    for (const entry of Object.entries(input)){
        const mapped = mapper(entry[0], entry[1]);
        output[mapped[0]] = mapped[1];
    }
    return output;
}
function mapAllEntries(input, mapper) {
    const output = {};
    for (const mapped of mapper(Object.entries(input))){
        output[mapped[0]] = mapped[1];
    }
    return output;
}
// ../shared/src/must.ts
function must(v2, msg) {
    if (v2 == null) {
        throw new Error(msg ?? `Unexpected ${v2} value`);
    }
    return v2;
}
;
function compareValues(a, b) {
    a = normalizeUndefined(a);
    b = normalizeUndefined(b);
    if (a === b) {
        return 0;
    }
    if (a === null) {
        return -1;
    }
    if (b === null) {
        return 1;
    }
    if (typeof a === "boolean") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertBoolean"])(b);
        return a ? 1 : -1;
    }
    if (typeof a === "number") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(b);
        return a - b;
    }
    if (typeof a === "string") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(b);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareUTF8"])(a, b);
    }
    throw new Error(`Unsupported type: ${a}`);
}
function normalizeUndefined(v2) {
    return v2 ?? null;
}
function makeComparator(order, reverse) {
    return (a, b)=>{
        for (const ord of order){
            const field = ord[0];
            const comp = compareValues(a[field], b[field]);
            if (comp !== 0) {
                const result = ord[1] === "asc" ? comp : -comp;
                return reverse ? -result : result;
            }
        }
        return 0;
    };
}
function valuesEqual(a, b) {
    if (a == null || b == null) {
        return false;
    }
    return a === b;
}
function drainStreams(node) {
    for (const stream of Object.values(node.relationships)){
        for (const node2 of stream()){
            drainStreams(node2);
        }
    }
}
// ../zql/src/ivm/view-apply-change.ts
var refCountSymbol = Symbol("rc");
var idSymbol = Symbol("id");
function applyChange(parentEntry, change, schema, relationship, format, withIDs = false) {
    if (schema.isHidden) {
        switch(change.type){
            case "add":
            case "remove":
                for (const [relationship2, children] of Object.entries(change.node.relationships)){
                    const childSchema = must(schema.relationships[relationship2]);
                    for (const node of children()){
                        applyChange(parentEntry, {
                            type: change.type,
                            node
                        }, childSchema, relationship2, format, withIDs);
                    }
                }
                return;
            case "edit":
                return;
            case "child":
                {
                    const childSchema = must(schema.relationships[change.child.relationshipName]);
                    applyChange(parentEntry, change.child.change, childSchema, relationship, format, withIDs);
                    return;
                }
            default:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(change);
        }
    }
    const { singular, relationships: childFormats } = format;
    switch(change.type){
        case "add":
            {
                let newEntry;
                if (singular) {
                    const oldEntry = parentEntry[relationship];
                    if (oldEntry !== void 0) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(schema.compareRows(oldEntry, change.node.row) === 0, `Singular relationship '${relationship}' should not have multiple rows. You may need to declare this relationship with the \`many\` helper instead of the \`one\` helper in your schema.`);
                        oldEntry[refCountSymbol]++;
                    } else {
                        newEntry = makeNewMetaEntry(change.node.row, schema, withIDs, 1);
                        parentEntry[relationship] = newEntry;
                    }
                } else {
                    newEntry = add(change.node.row, getChildEntryList(parentEntry, relationship), schema, withIDs);
                }
                if (newEntry) {
                    for (const [relationship2, children] of Object.entries(change.node.relationships)){
                        const childSchema = must(schema.relationships[relationship2]);
                        const childFormat = childFormats[relationship2];
                        if (childFormat === void 0) {
                            continue;
                        }
                        const newView = childFormat.singular ? void 0 : [];
                        newEntry[relationship2] = newView;
                        for (const node of children()){
                            applyChange(newEntry, {
                                type: "add",
                                node
                            }, childSchema, relationship2, childFormat, withIDs);
                        }
                    }
                }
                break;
            }
        case "remove":
            {
                if (singular) {
                    const oldEntry = parentEntry[relationship];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(oldEntry !== void 0, "node does not exist");
                    const rc = oldEntry[refCountSymbol];
                    if (rc === 1) {
                        parentEntry[relationship] = void 0;
                    }
                    oldEntry[refCountSymbol]--;
                } else {
                    removeAndUpdateRefCount(getChildEntryList(parentEntry, relationship), change.node.row, schema.compareRows);
                }
                drainStreams(change.node);
                break;
            }
        case "child":
            {
                let existing;
                if (singular) {
                    existing = getSingularEntry(parentEntry, relationship);
                } else {
                    const view = getChildEntryList(parentEntry, relationship);
                    const { pos, found } = binarySearch3(view, change.node.row, schema.compareRows);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(found, "node does not exist");
                    existing = view[pos];
                }
                const childSchema = must(schema.relationships[change.child.relationshipName]);
                const childFormat = format.relationships[change.child.relationshipName];
                if (childFormat !== void 0) {
                    applyChange(existing, change.child.change, childSchema, change.child.relationshipName, childFormat, withIDs);
                }
                break;
            }
        case "edit":
            {
                if (singular) {
                    const existing = parentEntry[relationship];
                    assertMetaEntry(existing);
                    applyEdit(existing, change, schema, withIDs);
                } else {
                    const view = getChildEntryList(parentEntry, relationship);
                    if (schema.compareRows(change.oldNode.row, change.node.row) !== 0) {
                        const { pos: oldPos, found: oldFound } = binarySearch3(view, change.oldNode.row, schema.compareRows);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(oldFound, "old node does not exist");
                        const oldEntry = view[oldPos];
                        const { pos, found } = binarySearch3(view, change.node.row, schema.compareRows);
                        if (oldEntry[refCountSymbol] === 1 && (pos === oldPos || pos - 1 === oldPos)) {
                            applyEdit(oldEntry, change, schema, withIDs);
                        } else {
                            oldEntry[refCountSymbol]--;
                            let adjustedPos = pos;
                            if (oldEntry[refCountSymbol] === 0) {
                                view.splice(oldPos, 1);
                                adjustedPos = oldPos < pos ? pos - 1 : pos;
                            }
                            let entryToEdit;
                            if (found) {
                                entryToEdit = view[adjustedPos];
                            } else {
                                view.splice(adjustedPos, 0, oldEntry);
                                entryToEdit = oldEntry;
                                if (oldEntry[refCountSymbol] > 0) {
                                    const oldEntryCopy = {
                                        ...oldEntry
                                    };
                                    view[oldPos] = oldEntryCopy;
                                }
                            }
                            entryToEdit[refCountSymbol]++;
                            applyEdit(entryToEdit, change, schema, withIDs);
                        }
                    } else {
                        const { pos, found } = binarySearch3(view, change.oldNode.row, schema.compareRows);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(found, "node does not exist");
                        applyEdit(view[pos], change, schema, withIDs);
                    }
                }
                break;
            }
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(change);
    }
}
function applyEdit(existing, change, schema, withIDs) {
    Object.assign(existing, change.node.row);
    if (withIDs) {
        existing[idSymbol] = makeID(change.node.row, schema);
    }
}
function add(row, view, schema, withIDs) {
    const { pos, found } = binarySearch3(view, row, schema.compareRows);
    if (found) {
        view[pos][refCountSymbol]++;
        return void 0;
    }
    const newEntry = makeNewMetaEntry(row, schema, withIDs, 1);
    view.splice(pos, 0, newEntry);
    return newEntry;
}
function removeAndUpdateRefCount(view, row, compareRows) {
    const { pos, found } = binarySearch3(view, row, compareRows);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(found, "node does not exist");
    const oldEntry = view[pos];
    const rc = oldEntry[refCountSymbol];
    if (rc === 1) {
        view.splice(pos, 1);
    }
    oldEntry[refCountSymbol]--;
    return oldEntry;
}
function binarySearch3(view, target, comparator) {
    let low = 0;
    let high = view.length - 1;
    while(low <= high){
        const mid = low + high >>> 1;
        const comparison = comparator(view[mid], target);
        if (comparison < 0) {
            low = mid + 1;
        } else if (comparison > 0) {
            high = mid - 1;
        } else {
            return {
                pos: mid,
                found: true
            };
        }
    }
    return {
        pos: low,
        found: false
    };
}
function getChildEntryList(parentEntry, relationship) {
    const view = parentEntry[relationship];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertArray"])(view);
    return view;
}
function assertMetaEntry(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(v2[refCountSymbol]);
}
function getSingularEntry(parentEntry, relationship) {
    const e = parentEntry[relationship];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(e[refCountSymbol]);
    return e;
}
function makeNewMetaEntry(row, schema, withIDs, rc) {
    if (withIDs) {
        return {
            ...row,
            [refCountSymbol]: rc,
            [idSymbol]: makeID(row, schema)
        };
    }
    return {
        ...row,
        [refCountSymbol]: rc
    };
}
function makeID(row, schema) {
    if (schema.primaryKey.length === 1) {
        return JSON.stringify(row[schema.primaryKey[0]]);
    }
    return JSON.stringify(schema.primaryKey.map((k)=>row[k]));
}
// ../zql/src/query/ttl.ts
var DEFAULT_TTL_MS = 1e3 * 60 * 5;
var DEFAULT_PRELOAD_TTL_MS = 0;
var MAX_TTL = "10m";
var MAX_TTL_MS = 1e3 * 60 * 10;
var multiplier = {
    s: 1e3,
    m: 60 * 1e3,
    h: 60 * 60 * 1e3,
    d: 24 * 60 * 60 * 1e3,
    y: 365 * 24 * 60 * 60 * 1e3
};
function parseTTL(ttl) {
    if (typeof ttl === "number") {
        return Number.isNaN(ttl) ? 0 : !Number.isFinite(ttl) || ttl < 0 ? -1 : ttl;
    }
    if (ttl === "none") {
        return 0;
    }
    if (ttl === "forever") {
        return -1;
    }
    const multi = multiplier[ttl[ttl.length - 1]];
    return Number(ttl.slice(0, -1)) * multi;
}
function compareTTL(a, b) {
    const ap = parseTTL(a);
    const bp = parseTTL(b);
    if (ap === -1 && bp !== -1) {
        return 1;
    }
    if (ap !== -1 && bp === -1) {
        return -1;
    }
    return ap - bp;
}
function normalizeTTL(ttl) {
    if (typeof ttl === "string") {
        return ttl;
    }
    if (ttl < 0) {
        return "forever";
    }
    if (ttl === 0) {
        return "none";
    }
    let shortest = ttl.toString();
    const lengthOfNumber = shortest.length;
    for (const unit of [
        "y",
        "d",
        "h",
        "m",
        "s"
    ]){
        const multi = multiplier[unit];
        const value = ttl / multi;
        const candidate = `${value}${unit}`;
        if (candidate.length < shortest.length) {
            shortest = candidate;
        }
    }
    return shortest.length < lengthOfNumber ? shortest : ttl;
}
function clampTTL(ttl, lc) {
    const parsedTTL = parseTTL(ttl);
    if (parsedTTL === -1 || parsedTTL > 10 * 60 * 1e3) {
        lc?.warn?.(`TTL (${ttl}) is too high, clamping to ${MAX_TTL}`);
        return parseTTL(MAX_TTL);
    }
    return parsedTTL;
}
;
var path = [];
var jsonSchema = valita_exports.unknown().chain((v2)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProd"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ok(v2);
    }
    const rv = isJSONValue(v2, path) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ok(v2) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.err({
        message: `Not a JSON value`,
        path: path.slice()
    });
    path.length = 0;
    return rv;
});
var jsonObjectSchema = valita_exports.unknown().chain((v2)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProd"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ok(v2);
    }
    const rv = isJSONObject(v2, path) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ok(v2) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$node$2d$mjs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.err({
        message: `Not a JSON object`,
        path: path.slice()
    });
    path.length = 0;
    return rv;
});
// ../shared/src/tdigest-schema.ts
var tdigestSchema = valita_exports.tuple([
    valita_exports.number()
]).concat(valita_exports.array(valita_exports.number()));
;
// ../shared/src/arrays.ts
function defined(arr) {
    let i = arr.findIndex((x)=>x === void 0);
    if (i < 0) {
        return arr;
    }
    const defined2 = arr.slice(0, i);
    for(i++; i < arr.length; i++){
        const x = arr[i];
        if (x !== void 0) {
            defined2.push(x);
        }
    }
    return defined2;
}
function areEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((e, i)=>e === arr2[i]);
}
// ../zero-protocol/src/data.ts
var valueSchema = valita_exports.union(jsonSchema, valita_exports.undefined());
var rowSchema = readonlyRecord(valueSchema);
// ../zero-protocol/src/ast.ts
var selectorSchema = valita_exports.string();
var toStaticParam = Symbol();
var orderingElementSchema = readonly(valita_exports.tuple([
    selectorSchema,
    literalUnion("asc", "desc")
]));
var orderingSchema = readonlyArray(orderingElementSchema);
var primitiveSchema = valita_exports.union(valita_exports.string(), valita_exports.number(), valita_exports.boolean(), valita_exports.null());
var equalityOpsSchema = literalUnion("=", "!=", "IS", "IS NOT");
var orderOpsSchema = literalUnion("<", ">", "<=", ">=");
var likeOpsSchema = literalUnion("LIKE", "NOT LIKE", "ILIKE", "NOT ILIKE");
var inOpsSchema = literalUnion("IN", "NOT IN");
var simpleOperatorSchema = valita_exports.union(equalityOpsSchema, orderOpsSchema, likeOpsSchema, inOpsSchema);
var literalReferenceSchema = readonlyObject({
    type: valita_exports.literal("literal"),
    value: valita_exports.union(valita_exports.string(), valita_exports.number(), valita_exports.boolean(), valita_exports.null(), readonlyArray(valita_exports.union(valita_exports.string(), valita_exports.number(), valita_exports.boolean())))
});
var columnReferenceSchema = readonlyObject({
    type: valita_exports.literal("column"),
    name: valita_exports.string()
});
var parameterReferenceSchema = readonlyObject({
    type: valita_exports.literal("static"),
    // The "namespace" of the injected parameter.
    // Write authorization will send the value of a row
    // prior to the mutation being run (preMutationRow).
    // Read and write authorization will both send the
    // current authentication data (authData).
    anchor: literalUnion("authData", "preMutationRow"),
    field: valita_exports.union(valita_exports.string(), valita_exports.array(valita_exports.string()))
});
var conditionValueSchema = valita_exports.union(literalReferenceSchema, columnReferenceSchema, parameterReferenceSchema);
var simpleConditionSchema = readonlyObject({
    type: valita_exports.literal("simple"),
    op: simpleOperatorSchema,
    left: conditionValueSchema,
    right: valita_exports.union(parameterReferenceSchema, literalReferenceSchema)
});
var correlatedSubqueryConditionOperatorSchema = literalUnion("EXISTS", "NOT EXISTS");
var correlatedSubqueryConditionSchema = readonlyObject({
    type: valita_exports.literal("correlatedSubquery"),
    related: valita_exports.lazy(()=>correlatedSubquerySchema),
    op: correlatedSubqueryConditionOperatorSchema
});
var conditionSchema = valita_exports.union(simpleConditionSchema, valita_exports.lazy(()=>conjunctionSchema), valita_exports.lazy(()=>disjunctionSchema), correlatedSubqueryConditionSchema);
var conjunctionSchema = readonlyObject({
    type: valita_exports.literal("and"),
    conditions: readonlyArray(conditionSchema)
});
var disjunctionSchema = readonlyObject({
    type: valita_exports.literal("or"),
    conditions: readonlyArray(conditionSchema)
});
function mustCompoundKey(field) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(Array.isArray(field) && field.length >= 1);
    return field;
}
var compoundKeySchema = readonly(valita_exports.tuple([
    valita_exports.string()
]).concat(valita_exports.array(valita_exports.string())));
var correlationSchema = readonlyObject({
    parentField: compoundKeySchema,
    childField: compoundKeySchema
});
var correlatedSubquerySchemaOmitSubquery = readonlyObject({
    correlation: correlationSchema,
    hidden: valita_exports.boolean().optional(),
    system: literalUnion("permissions", "client", "test").optional()
});
var correlatedSubquerySchema = correlatedSubquerySchemaOmitSubquery.extend({
    subquery: valita_exports.lazy(()=>astSchema)
});
var astSchema = readonlyObject({
    schema: valita_exports.string().optional(),
    table: valita_exports.string(),
    alias: valita_exports.string().optional(),
    where: conditionSchema.optional(),
    related: readonlyArray(correlatedSubquerySchema).optional(),
    limit: valita_exports.number().optional(),
    orderBy: orderingSchema.optional(),
    start: valita_exports.object({
        row: rowSchema,
        exclusive: valita_exports.boolean()
    }).optional()
});
function transformAST(ast, transform) {
    const { tableName, columnName } = transform;
    const colName = (c)=>columnName(ast.table, c);
    const key = (table, k)=>{
        const serverKey = k.map((col)=>columnName(table, col));
        return mustCompoundKey(serverKey);
    };
    const where = ast.where ? transform.where(ast.where) : void 0;
    const transformed = {
        schema: ast.schema,
        table: tableName(ast.table),
        alias: ast.alias,
        where: where ? transformWhere(where, ast.table, transform) : void 0,
        related: ast.related ? transform.related(ast.related.map((r)=>({
                correlation: {
                    parentField: key(ast.table, r.correlation.parentField),
                    childField: key(r.subquery.table, r.correlation.childField)
                },
                hidden: r.hidden,
                subquery: transformAST(r.subquery, transform),
                system: r.system
            }))) : void 0,
        start: ast.start ? {
            ...ast.start,
            row: Object.fromEntries(Object.entries(ast.start.row).map(([col, val])=>[
                    colName(col),
                    val
                ]))
        } : void 0,
        limit: ast.limit,
        orderBy: ast.orderBy?.map(([col, dir])=>[
                colName(col),
                dir
            ])
    };
    return transformed;
}
function transformWhere(where, table, transform) {
    const { columnName } = transform;
    const condValue = (c)=>c.type !== "column" ? c : {
            ...c,
            name: columnName(table, c.name)
        };
    const key = (table2, k)=>{
        const serverKey = k.map((col)=>columnName(table2, col));
        return mustCompoundKey(serverKey);
    };
    if (where.type === "simple") {
        return {
            ...where,
            left: condValue(where.left)
        };
    } else if (where.type === "correlatedSubquery") {
        const { correlation, subquery } = where.related;
        return {
            ...where,
            related: {
                ...where.related,
                correlation: {
                    parentField: key(table, correlation.parentField),
                    childField: key(subquery.table, correlation.childField)
                },
                subquery: transformAST(subquery, transform)
            }
        };
    }
    return {
        type: where.type,
        conditions: transform.conditions(where.conditions.map((c)=>transformWhere(c, table, transform)))
    };
}
var normalizeCache = /* @__PURE__ */ new WeakMap();
var NORMALIZE_TRANSFORM = {
    tableName: (t)=>t,
    columnName: (_, c)=>c,
    related: sortedRelated,
    where: flattened,
    conditions: (c)=>c.sort(cmpCondition)
};
function normalizeAST(ast) {
    let normalized = normalizeCache.get(ast);
    if (!normalized) {
        normalized = transformAST(ast, NORMALIZE_TRANSFORM);
        normalizeCache.set(ast, normalized);
    }
    return normalized;
}
function mapAST(ast, mapper) {
    return transformAST(ast, {
        tableName: (table)=>mapper.tableName(table),
        columnName: (table, col)=>mapper.columnName(table, col),
        related: (r)=>r,
        where: (w)=>w,
        conditions: (c)=>c
    });
}
function mapCondition(cond, table, mapper) {
    return transformWhere(cond, table, {
        tableName: (table2)=>mapper.tableName(table2),
        columnName: (table2, col)=>mapper.columnName(table2, col),
        related: (r)=>r,
        where: (w)=>w,
        conditions: (c)=>c
    });
}
function sortedRelated(related) {
    return related.sort(cmpRelated);
}
function cmpCondition(a, b) {
    if (a.type === "simple") {
        if (b.type !== "simple") {
            return -1;
        }
        return compareValuePosition(a.left, b.left) || compareUTF8MaybeNull(a.op, b.op) || compareValuePosition(a.right, b.right);
    }
    if (b.type === "simple") {
        return 1;
    }
    if (a.type === "correlatedSubquery") {
        if (b.type !== "correlatedSubquery") {
            return -1;
        }
        return cmpRelated(a.related, b.related) || compareUTF8MaybeNull(a.op, b.op);
    }
    if (b.type === "correlatedSubquery") {
        return -1;
    }
    const val = compareUTF8MaybeNull(a.type, b.type);
    if (val !== 0) {
        return val;
    }
    for(let l = 0, r = 0; l < a.conditions.length && r < b.conditions.length; l++, r++){
        const val2 = cmpCondition(a.conditions[l], b.conditions[r]);
        if (val2 !== 0) {
            return val2;
        }
    }
    return a.conditions.length - b.conditions.length;
}
function compareValuePosition(a, b) {
    if (a.type !== b.type) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareUTF8"])(a.type, b.type);
    }
    switch(a.type){
        case "literal":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(b.type === "literal");
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareUTF8"])(String(a.value), String(b.value));
        case "column":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(b.type === "column");
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareUTF8"])(a.name, b.name);
        case "static":
            throw new Error("Static parameters should be resolved before normalization");
    }
}
function cmpRelated(a, b) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareUTF8"])(must(a.subquery.alias), must(b.subquery.alias));
}
function flattened(cond) {
    if (cond.type === "simple" || cond.type === "correlatedSubquery") {
        return cond;
    }
    const conditions = defined(cond.conditions.flatMap((c)=>c.type === cond.type ? c.conditions.map((c2)=>flattened(c2)) : flattened(c)));
    switch(conditions.length){
        case 0:
            return void 0;
        case 1:
            return conditions[0];
        default:
            return {
                type: cond.type,
                conditions
            };
    }
}
function compareUTF8MaybeNull(a, b) {
    if (a !== null && b !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareUTF8"])(a, b);
    }
    if (b !== null) {
        return -1;
    }
    if (a !== null) {
        return 1;
    }
    return 0;
}
// ../zero-protocol/src/inspect-down.ts
var serverMetricsSchema = valita_exports.object({
    "query-materialization-server": tdigestSchema,
    "query-update-server": tdigestSchema
});
var inspectQueryRowSchema = valita_exports.object({
    clientID: valita_exports.string(),
    queryID: valita_exports.string(),
    // This is the server return AST for custom queries
    // TODO: Return server generated AST
    ast: astSchema.nullable(),
    // not null for custom queries
    name: valita_exports.string().nullable(),
    // not null for custom queries
    args: readonlyArray(jsonSchema).nullable(),
    got: valita_exports.boolean(),
    deleted: valita_exports.boolean(),
    ttl: valita_exports.number(),
    inactivatedAt: valita_exports.number().nullable(),
    rowCount: valita_exports.number(),
    metrics: serverMetricsSchema.nullable().optional()
});
var inspectBaseDownSchema = valita_exports.object({
    id: valita_exports.string()
});
var inspectQueriesDownSchema = inspectBaseDownSchema.extend({
    op: valita_exports.literal("queries"),
    value: valita_exports.array(inspectQueryRowSchema)
});
var inspectMetricsDownSchema = inspectBaseDownSchema.extend({
    op: valita_exports.literal("metrics"),
    value: serverMetricsSchema
});
var inspectVersionDownSchema = inspectBaseDownSchema.extend({
    op: valita_exports.literal("version"),
    value: valita_exports.string()
});
var inspectDownBodySchema = valita_exports.union(inspectQueriesDownSchema, inspectMetricsDownSchema, inspectVersionDownSchema);
var inspectDownMessageSchema = valita_exports.tuple([
    valita_exports.literal("inspect"),
    inspectDownBodySchema
]);
// ../shared/src/random-values.ts
function getNonCryptoRandomValues(array6) {
    if (array6 === null) {
        throw new TypeError("array cannot be null");
    }
    for(let i = 0; i < array6.length; i++){
        array6[i] = Math.floor(Math.random() * 256);
    }
    return array6;
}
// ../zero-client/src/util/nanoid.ts
function nanoid(size = 21) {
    const randomBytes = getNonCryptoRandomValues(new Uint8Array(size));
    return randomBytes.reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) {
            id += byte.toString(36);
        } else if (byte < 62) {
            id += (byte - 26).toString(36).toUpperCase();
        } else if (byte > 62) {
            id += "-";
        } else {
            id += "_";
        }
        return id;
    }, "");
}
;
var h64 = (s)=>hash(s, 2);
var h128 = (s)=>hash(s, 4);
function hash(str, words) {
    let hash2 = 0n;
    for(let i = 0; i < words; i++){
        hash2 = (hash2 << 32n) + BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$xxhash$40$4$2e$0$2e$0$2f$node_modules$2f$js$2d$xxhash$2f$dist$2f$esm$2f$xxHash32$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xxHash32"])(str, i));
    }
    return hash2;
}
// ../zero-protocol/src/primary-key.ts
var primaryKeySchema = readonly(valita_exports.tuple([
    valita_exports.string()
]).concat(valita_exports.array(valita_exports.string())));
var primaryKeyValueSchema = valita_exports.union(valita_exports.string(), valita_exports.number(), valita_exports.boolean());
var primaryKeyValueRecordSchema = readonlyRecord(primaryKeyValueSchema);
// ../zero-client/src/client/keys.ts
var DESIRED_QUERIES_KEY_PREFIX = "d/";
var GOT_QUERIES_KEY_PREFIX = "g/";
var ENTITIES_KEY_PREFIX = "e/";
var MUTATIONS_KEY_PREFIX = "m/";
function toDesiredQueriesKey(clientID, hash2) {
    return DESIRED_QUERIES_KEY_PREFIX + clientID + "/" + hash2;
}
function desiredQueriesPrefixForClient(clientID) {
    return DESIRED_QUERIES_KEY_PREFIX + clientID + "/";
}
function toGotQueriesKey(hash2) {
    return GOT_QUERIES_KEY_PREFIX + hash2;
}
function toMutationResponseKey(mid) {
    return MUTATIONS_KEY_PREFIX + mid.clientID + "/" + mid.id;
}
function toPrimaryKeyString(tableName, primaryKey, value) {
    if (primaryKey.length === 1) {
        return ENTITIES_KEY_PREFIX + tableName + "/" + parse(value[primaryKey[0]], primaryKeyValueSchema);
    }
    const values = primaryKey.map((k)=>parse(value[k], primaryKeyValueSchema));
    const str = JSON.stringify(values);
    const idSegment = h128(str);
    return ENTITIES_KEY_PREFIX + tableName + "/" + idSegment;
}
function sourceNameFromKey(key) {
    const slash = key.indexOf("/", ENTITIES_KEY_PREFIX.length);
    return key.slice(ENTITIES_KEY_PREFIX.length, slash);
}
// ../shared/src/centroid.ts
var Centroid = class {
    mean;
    weight;
    constructor(mean, weight){
        this.mean = mean;
        this.weight = weight;
    }
    add(r) {
        if (r.weight < 0) {
            throw new Error("centroid weight cannot be less than zero");
        }
        if (this.weight !== 0) {
            this.weight += r.weight;
            this.mean += r.weight * (r.mean - this.mean) / this.weight;
        } else {
            this.weight = r.weight;
            this.mean = r.mean;
        }
    }
};
function sortCentroidList(centroids) {
    centroids.sort((a, b)=>a.mean - b.mean);
}
// ../shared/src/tdigest.ts
var TDigest = class _TDigest {
    compression;
    #maxProcessed;
    #maxUnprocessed;
    #processed;
    #unprocessed;
    #cumulative;
    #processedWeight;
    #unprocessedWeight;
    #min;
    #max;
    constructor(compression = 1e3){
        this.compression = compression;
        this.#maxProcessed = processedSize(0, this.compression);
        this.#maxUnprocessed = unprocessedSize(0, this.compression);
        this.reset();
    }
    /**
   * fromJSON creates a TDigest from a JSON-serializable representation.
   * The data should be an object with compression and centroids array.
   */ static fromJSON(data) {
        const digest = new _TDigest(data[0]);
        if (data.length % 2 !== 1) {
            throw new Error("Invalid centroids array");
        }
        for(let i = 1; i < data.length; i += 2){
            digest.add(data[i], data[i + 1]);
        }
        return digest;
    }
    reset() {
        this.#processed = [];
        this.#unprocessed = [];
        this.#cumulative = [];
        this.#processedWeight = 0;
        this.#unprocessedWeight = 0;
        this.#min = Number.MAX_VALUE;
        this.#max = -Number.MAX_VALUE;
    }
    add(mean, weight = 1) {
        this.addCentroid(new Centroid(mean, weight));
    }
    /** AddCentroidList can quickly add multiple centroids. */ addCentroidList(centroidList) {
        for (const c of centroidList){
            this.addCentroid(c);
        }
    }
    /**
   * AddCentroid adds a single centroid.
   * Weights which are not a number or are <= 0 are ignored, as are NaN means.
   */ addCentroid(c) {
        if (Number.isNaN(c.mean) || c.weight <= 0 || Number.isNaN(c.weight) || !Number.isFinite(c.weight)) {
            return;
        }
        this.#unprocessed.push(new Centroid(c.mean, c.weight));
        this.#unprocessedWeight += c.weight;
        if (this.#processed.length > this.#maxProcessed || this.#unprocessed.length > this.#maxUnprocessed) {
            this.#process();
        }
    }
    /**
   *  Merges the supplied digest into this digest. Functionally equivalent to
   * calling t.AddCentroidList(t2.Centroids(nil)), but avoids making an extra
   * copy of the CentroidList.
   **/ merge(t2) {
        t2.#process();
        this.addCentroidList(t2.#processed);
    }
    #process() {
        if (this.#unprocessed.length > 0 || this.#processed.length > this.#maxProcessed) {
            this.#unprocessed.push(...this.#processed);
            sortCentroidList(this.#unprocessed);
            this.#processed.length = 0;
            this.#processed.push(this.#unprocessed[0]);
            this.#processedWeight += this.#unprocessedWeight;
            this.#unprocessedWeight = 0;
            let soFar = this.#unprocessed[0].weight;
            let limit = this.#processedWeight * this.#integratedQ(1);
            for(let i = 1; i < this.#unprocessed.length; i++){
                const centroid = this.#unprocessed[i];
                const projected = soFar + centroid.weight;
                if (projected <= limit) {
                    soFar = projected;
                    this.#processed[this.#processed.length - 1].add(centroid);
                } else {
                    const k1 = this.#integratedLocation(soFar / this.#processedWeight);
                    limit = this.#processedWeight * this.#integratedQ(k1 + 1);
                    soFar += centroid.weight;
                    this.#processed.push(centroid);
                }
            }
            this.#min = Math.min(this.#min, this.#processed[0].mean);
            this.#max = Math.max(this.#max, this.#processed[this.#processed.length - 1].mean);
            this.#unprocessed.length = 0;
        }
    }
    /**
   * Centroids returns a copy of processed centroids.
   * Useful when aggregating multiple t-digests.
   *
   * Centroids are appended to the passed CentroidList; if you're re-using a
   * buffer, be sure to pass cl[:0].
   */ centroids(cl = []) {
        this.#process();
        return cl.concat(this.#processed);
    }
    count() {
        this.#process();
        return this.#processedWeight;
    }
    /**
   * toJSON returns a JSON-serializable representation of the digest.
   * This processes the digest and returns an object with compression and centroid data.
   */ toJSON() {
        this.#process();
        const data = [
            this.compression
        ];
        for (const centroid of this.#processed){
            data.push(centroid.mean, centroid.weight);
        }
        return data;
    }
    #updateCumulative() {
        if (this.#cumulative.length > 0 && this.#cumulative[this.#cumulative.length - 1] === this.#processedWeight) {
            return;
        }
        const n = this.#processed.length + 1;
        if (this.#cumulative.length > n) {
            this.#cumulative.length = n;
        }
        let prev = 0;
        for(let i = 0; i < this.#processed.length; i++){
            const centroid = this.#processed[i];
            const cur = centroid.weight;
            this.#cumulative[i] = prev + cur / 2;
            prev += cur;
        }
        this.#cumulative[this.#processed.length] = prev;
    }
    // Quantile returns the (approximate) quantile of
    // the distribution. Accepted values for q are between 0 and 1.
    // Returns NaN if Count is zero or bad inputs.
    quantile(q) {
        this.#process();
        this.#updateCumulative();
        if (q < 0 || q > 1 || this.#processed.length === 0) {
            return NaN;
        }
        if (this.#processed.length === 1) {
            return this.#processed[0].mean;
        }
        const index = q * this.#processedWeight;
        if (index <= this.#processed[0].weight / 2) {
            return this.#min + 2 * index / this.#processed[0].weight * (this.#processed[0].mean - this.#min);
        }
        const lower = binarySearch(this.#cumulative.length, (i)=>-this.#cumulative[i] + index);
        if (lower + 1 !== this.#cumulative.length) {
            const z12 = index - this.#cumulative[lower - 1];
            const z22 = this.#cumulative[lower] - index;
            return weightedAverage(this.#processed[lower - 1].mean, z22, this.#processed[lower].mean, z12);
        }
        const z1 = index - this.#processedWeight - this.#processed[lower - 1].weight / 2;
        const z2 = this.#processed[lower - 1].weight / 2 - z1;
        return weightedAverage(this.#processed[this.#processed.length - 1].mean, z1, this.#max, z2);
    }
    /**
   * CDF returns the cumulative distribution function for a given value x.
   */ cdf(x) {
        this.#process();
        this.#updateCumulative();
        switch(this.#processed.length){
            case 0:
                return 0;
            case 1:
                {
                    const width = this.#max - this.#min;
                    if (x <= this.#min) {
                        return 0;
                    }
                    if (x >= this.#max) {
                        return 1;
                    }
                    if (x - this.#min <= width) {
                        return 0.5;
                    }
                    return (x - this.#min) / width;
                }
        }
        if (x <= this.#min) {
            return 0;
        }
        if (x >= this.#max) {
            return 1;
        }
        const m0 = this.#processed[0].mean;
        if (x <= m0) {
            if (m0 - this.#min > 0) {
                return (x - this.#min) / (m0 - this.#min) * this.#processed[0].weight / this.#processedWeight / 2;
            }
            return 0;
        }
        const mn = this.#processed[this.#processed.length - 1].mean;
        if (x >= mn) {
            if (this.#max - mn > 0) {
                return 1 - (this.#max - x) / (this.#max - mn) * this.#processed[this.#processed.length - 1].weight / this.#processedWeight / 2;
            }
            return 1;
        }
        const upper = binarySearch(this.#processed.length, // Treat equals as greater than, so we can use the upper index
        // This is equivalent to:
        //   i => this.#processed[i].mean > x ? -1 : 1,
        (i)=>x - this.#processed[i].mean || 1);
        const z1 = x - this.#processed[upper - 1].mean;
        const z2 = this.#processed[upper].mean - x;
        return weightedAverage(this.#cumulative[upper - 1], z2, this.#cumulative[upper], z1) / this.#processedWeight;
    }
    #integratedQ(k) {
        return (Math.sin(Math.min(k, this.compression) * Math.PI / this.compression - Math.PI / 2) + 1) / 2;
    }
    #integratedLocation(q) {
        return this.compression * (Math.asin(2 * q - 1) + Math.PI / 2) / Math.PI;
    }
};
function weightedAverage(x1, w1, x2, w2) {
    if (x1 <= x2) {
        return weightedAverageSorted(x1, w1, x2, w2);
    }
    return weightedAverageSorted(x2, w2, x1, w1);
}
function weightedAverageSorted(x1, w1, x2, w2) {
    const x = (x1 * w1 + x2 * w2) / (w1 + w2);
    return Math.max(x1, Math.min(x, x2));
}
function processedSize(size, compression) {
    if (size === 0) {
        return Math.ceil(compression) * 2;
    }
    return size;
}
function unprocessedSize(size, compression) {
    if (size === 0) {
        return Math.ceil(compression) * 8;
    }
    return size;
}
// ../zero-schema/src/table-schema.ts
function isOneHop(r) {
    return r.length === 1;
}
function isTwoHop(r) {
    return r.length === 2;
}
// ../zql/src/query/query.ts
var delegateSymbol = Symbol("delegate");
;
// ../zero-protocol/src/query-hash.ts
var hashCache = /* @__PURE__ */ new WeakMap();
function hashOfAST(ast) {
    const normalized = normalizeAST(ast);
    const cached = hashCache.get(normalized);
    if (cached) {
        return cached;
    }
    const hash2 = h64(JSON.stringify(normalized)).toString(36);
    hashCache.set(normalized, hash2);
    return hash2;
}
function hashOfNameAndArgs(name, args) {
    const argsString = JSON.stringify(args);
    return h64(`${name}:${argsString}`).toString(36);
}
// ../zql/src/ivm/filter-operators.ts
var throwFilterOutput = {
    push (_change) {
        throw new Error("Output not set");
    },
    filter (_node, _cleanup) {
        throw new Error("Output not set");
    }
};
var FilterStart = class {
    #input;
    #output = throwFilterOutput;
    constructor(input){
        this.#input = input;
        input.setOutput(this);
    }
    setFilterOutput(output) {
        this.#output = output;
    }
    destroy() {
        this.#input.destroy();
    }
    getSchema() {
        return this.#input.getSchema();
    }
    push(change) {
        this.#output.push(change);
    }
    *fetch(req) {
        for (const node of this.#input.fetch(req)){
            if (this.#output.filter(node, false)) {
                yield node;
            }
        }
    }
    *cleanup(req) {
        for (const node of this.#input.cleanup(req)){
            if (this.#output.filter(node, true)) {
                yield node;
            } else {
                drainStreams(node);
            }
        }
    }
};
var FilterEnd = class {
    #start;
    #input;
    #output = throwFilterOutput;
    constructor(start, input){
        this.#start = start;
        this.#input = input;
        input.setFilterOutput(this);
    }
    *fetch(req) {
        for (const node of this.#start.fetch(req)){
            yield node;
        }
    }
    *cleanup(req) {
        for (const node of this.#start.cleanup(req)){
            yield node;
        }
    }
    filter(_node, _cleanup) {
        return true;
    }
    setOutput(output) {
        this.#output = output;
    }
    destroy() {
        this.#input.destroy();
    }
    getSchema() {
        return this.#input.getSchema();
    }
    push(change) {
        this.#output.push(change);
    }
};
function buildFilterPipeline(input, delegate, pipeline) {
    const filterStart = new FilterStart(input);
    delegate.addEdge(input, filterStart);
    const middle = pipeline(filterStart);
    delegate.addEdge(filterStart, middle);
    const filterEnd = new FilterEnd(filterStart, middle);
    delegate.addEdge(middle, filterEnd);
    return filterEnd;
}
// ../zql/src/ivm/operator.ts
var throwOutput = {
    push (_change) {
        throw new Error("Output not set");
    }
};
// ../zql/src/ivm/stream.ts
function* take(stream, limit) {
    if (limit < 1) {
        return;
    }
    let count = 0;
    for (const v2 of stream){
        yield v2;
        if (++count === limit) {
            break;
        }
    }
}
function first(stream) {
    const it = stream[Symbol.iterator]();
    const { value } = it.next();
    it.return?.();
    return value;
}
// ../zql/src/ivm/exists.ts
var Exists = class {
    #input;
    #relationshipName;
    #storage;
    #not;
    #parentJoinKey;
    #noSizeReuse;
    #output = throwFilterOutput;
    /**
   * This instance variable is `true` when this operator is processing a `push`,
   * and is used to disable reuse of cached sizes across rows with the
   * same parent join key value.
   * This is necessary because during a push relationships can be inconsistent
   * due to push communicating changes (which may change multiple Nodes) one
   * Node at a time.
   */ #inPush = false;
    constructor(input, storage, relationshipName, parentJoinKey, type){
        this.#input = input;
        this.#relationshipName = relationshipName;
        this.#input.setFilterOutput(this);
        this.#storage = storage;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#input.getSchema().relationships[relationshipName], `Input schema missing ${relationshipName}`);
        this.#not = type === "NOT EXISTS";
        this.#parentJoinKey = parentJoinKey;
        this.#noSizeReuse = areEqual(parentJoinKey, this.#input.getSchema().primaryKey);
    }
    setFilterOutput(output) {
        this.#output = output;
    }
    filter(node, cleanup) {
        const result = this.#filter(node) && this.#output.filter(node, cleanup);
        if (cleanup) {
            this.#delSize(node);
        }
        return result;
    }
    destroy() {
        this.#input.destroy();
    }
    getSchema() {
        return this.#input.getSchema();
    }
    push(change) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!this.#inPush, "Unexpected re-entrancy");
        this.#inPush = true;
        try {
            switch(change.type){
                // add, remove and edit cannot change the size of the
                // this.#relationshipName relationship, so simply #pushWithFilter
                case "add":
                case "edit":
                    {
                        this.#pushWithFilter(change);
                        return;
                    }
                case "remove":
                    {
                        const size = this.#getSize(change.node);
                        if (size === void 0) {
                            return;
                        }
                        this.#pushWithFilter(change, size);
                        this.#delSize(change.node);
                        return;
                    }
                case "child":
                    if (change.child.relationshipName !== this.#relationshipName || change.child.change.type === "edit" || change.child.change.type === "child") {
                        this.#pushWithFilter(change);
                        return;
                    }
                    switch(change.child.change.type){
                        case "add":
                            {
                                let size = this.#getSize(change.node);
                                if (size !== void 0) {
                                    size++;
                                    this.#setSize(change.node, size);
                                } else {
                                    size = this.#fetchSize(change.node);
                                }
                                if (size === 1) {
                                    if (this.#not) {
                                        this.#output.push({
                                            type: "remove",
                                            node: {
                                                row: change.node.row,
                                                relationships: {
                                                    ...change.node.relationships,
                                                    [this.#relationshipName]: ()=>[]
                                                }
                                            }
                                        });
                                    } else {
                                        this.#output.push({
                                            type: "add",
                                            node: change.node
                                        });
                                    }
                                } else {
                                    this.#pushWithFilter(change, size);
                                }
                                return;
                            }
                        case "remove":
                            {
                                let size = this.#getSize(change.node);
                                if (size !== void 0) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(size > 0);
                                    size--;
                                    this.#setSize(change.node, size);
                                } else {
                                    size = this.#fetchSize(change.node);
                                }
                                if (size === 0) {
                                    if (this.#not) {
                                        this.#output.push({
                                            type: "add",
                                            node: change.node
                                        });
                                    } else {
                                        this.#output.push({
                                            type: "remove",
                                            node: {
                                                row: change.node.row,
                                                relationships: {
                                                    ...change.node.relationships,
                                                    [this.#relationshipName]: ()=>[
                                                            change.child.change.node
                                                        ]
                                                }
                                            }
                                        });
                                    }
                                } else {
                                    this.#pushWithFilter(change, size);
                                }
                                return;
                            }
                    }
                    return;
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(change);
            }
        } finally{
            this.#inPush = false;
        }
    }
    /**
   * Returns whether or not the node's this.#relationshipName
   * relationship passes the exist/not exists filter condition.
   * If the optional `size` is passed it is used.
   * Otherwise, if there is a stored size for the row it is used.
   * Otherwise the size is computed by streaming the node's
   * relationship with this.#relationshipName (this computed size is also
   * stored).
   */ #filter(node, size) {
        const exists = (size ?? this.#getOrFetchSize(node)) > 0;
        return this.#not ? !exists : exists;
    }
    /**
   * Pushes a change if this.#filter is true for its row.
   */ #pushWithFilter(change, size) {
        if (this.#filter(change.node, size)) {
            this.#output.push(change);
        }
    }
    #getSize(node) {
        return this.#storage.get(this.#makeSizeStorageKey(node));
    }
    #setSize(node, size) {
        this.#storage.set(this.#makeSizeStorageKey(node), size);
    }
    #delSize(node) {
        this.#storage.del(this.#makeSizeStorageKey(node));
    }
    #getOrFetchSize(node) {
        const size = this.#getSize(node);
        if (size !== void 0) {
            return size;
        }
        return this.#fetchSize(node);
    }
    #fetchSize(node) {
        if (!this.#noSizeReuse && !this.#inPush) {
            const cachedSizeEntry = first(this.#storage.scan({
                prefix: this.#makeSizeStorageKeyPrefix(node)
            }));
            if (cachedSizeEntry !== void 0) {
                this.#setSize(node, cachedSizeEntry[1]);
                return cachedSizeEntry[1];
            }
        }
        const relationship = node.relationships[this.#relationshipName];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(relationship);
        let size = 0;
        for (const _relatedNode of relationship()){
            size++;
        }
        this.#setSize(node, size);
        return size;
    }
    #makeSizeStorageKeyPrefix(node) {
        return `row/${this.#noSizeReuse ? "" : JSON.stringify(this.#getKeyValues(node, this.#parentJoinKey))}/`;
    }
    #makeSizeStorageKey(node) {
        return `${this.#makeSizeStorageKeyPrefix(node)}${JSON.stringify(this.#getKeyValues(node, this.#input.getSchema().primaryKey))}`;
    }
    #getKeyValues(node, def) {
        const values = [];
        for (const key of def){
            values.push(normalizeUndefined(node.row[key]));
        }
        return values;
    }
};
// ../zql/src/ivm/fan-in.ts
var FanIn = class {
    #inputs;
    #schema;
    #output = throwFilterOutput;
    #accumulatedPushes = [];
    constructor(fanOut, inputs){
        this.#inputs = inputs;
        this.#schema = fanOut.getSchema();
        for (const input of inputs){
            input.setFilterOutput(this);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#schema === input.getSchema(), `Schema mismatch in fan-in`);
        }
    }
    setFilterOutput(output) {
        this.#output = output;
    }
    destroy() {
        for (const input of this.#inputs){
            input.destroy();
        }
    }
    getSchema() {
        return this.#schema;
    }
    filter(node, cleanup) {
        return this.#output.filter(node, cleanup);
    }
    push(change) {
        this.#accumulatedPushes.push(change);
    }
    fanOutDonePushingToAllBranches(fanOutChangeType) {
        if (this.#inputs.length === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#accumulatedPushes.length === 0, "If there are no inputs then fan-in should not receive any pushes.");
            return;
        }
        if (this.#accumulatedPushes.length === 0) {
            return;
        }
        const candidatesToPush = /* @__PURE__ */ new Map();
        for (const change of this.#accumulatedPushes){
            if (fanOutChangeType === "child" && change.type !== "child") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(candidatesToPush.has(change.type) === false, ()=>`Fan-in:child expected at most one ${change.type} when fan-out is of type child`);
            }
            candidatesToPush.set(change.type, change);
        }
        this.#accumulatedPushes = [];
        const types = [
            ...candidatesToPush.keys()
        ];
        switch(fanOutChangeType){
            case "remove":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(types.length === 1 && types[0] === "remove", "Fan-in:remove expected all removes");
                this.#output.push(must(candidatesToPush.get("remove")));
                return;
            case "add":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(types.length === 1 && types[0] === "add", "Fan-in:add expected all adds");
                this.#output.push(must(candidatesToPush.get("add")));
                return;
            case "edit":
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(types.every((type)=>type === "add" || type === "remove" || type === "edit"), "Fan-in:edit expected all adds, removes, or edits");
                    const addChange = candidatesToPush.get("add");
                    const removeChange = candidatesToPush.get("remove");
                    const editChange = candidatesToPush.get("edit");
                    if (editChange) {
                        this.#output.push(editChange);
                        return;
                    }
                    if (addChange && removeChange) {
                        this.#output.push({
                            type: "edit",
                            node: addChange.node,
                            oldNode: removeChange.node
                        });
                        return;
                    }
                    this.#output.push(must(addChange ?? removeChange));
                    return;
                }
            case "child":
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(types.every((type)=>type === "add" || // exists can change child to add or remove
                        type === "remove" || // exists can change child to add or remove
                        type === "child"), "Fan-in:child expected all adds, removes, or children");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(types.length <= 2, "Fan-in:child expected at most 2 types on a child change from fan-out");
                    const childChange = candidatesToPush.get("child");
                    if (childChange) {
                        this.#output.push(childChange);
                        return;
                    }
                    const addChange = candidatesToPush.get("add");
                    const removeChange = candidatesToPush.get("remove");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(addChange === void 0 || removeChange === void 0, "Fan-in:child expected either add or remove, not both");
                    this.#output.push(must(addChange ?? removeChange));
                    return;
                }
            default:
                fanOutChangeType;
        }
    }
};
// ../zql/src/ivm/fan-out.ts
var FanOut = class {
    #input;
    #outputs = [];
    #fanIn;
    #destroyCount = 0;
    constructor(input){
        this.#input = input;
        input.setFilterOutput(this);
    }
    setFanIn(fanIn) {
        this.#fanIn = fanIn;
    }
    setFilterOutput(output) {
        this.#outputs.push(output);
    }
    destroy() {
        if (this.#destroyCount < this.#outputs.length) {
            if (this.#destroyCount === 0) {
                this.#input.destroy();
            }
            ++this.#destroyCount;
        } else {
            throw new Error("FanOut already destroyed once for each output");
        }
    }
    getSchema() {
        return this.#input.getSchema();
    }
    filter(node, cleanup) {
        let result = false;
        for (const output of this.#outputs){
            result = output.filter(node, cleanup) || result;
            if (!cleanup && result) {
                return true;
            }
        }
        return result;
    }
    push(change) {
        for (const out of this.#outputs){
            out.push(change);
        }
        must(this.#fanIn, "fan-out must have a corresponding fan-in set!").fanOutDonePushingToAllBranches(change.type);
    }
};
// ../zql/src/ivm/maybe-split-and-push-edit-change.ts
function maybeSplitAndPushEditChange(change, predicate, output) {
    const oldWasPresent = predicate(change.oldNode.row);
    const newIsPresent = predicate(change.node.row);
    if (oldWasPresent && newIsPresent) {
        output.push(change);
    } else if (oldWasPresent && !newIsPresent) {
        output.push({
            type: "remove",
            node: change.oldNode
        });
    } else if (!oldWasPresent && newIsPresent) {
        output.push({
            type: "add",
            node: change.node
        });
    }
}
// ../zql/src/ivm/filter-push.ts
function filterPush(change, output, predicate) {
    if (!predicate) {
        output.push(change);
        return;
    }
    switch(change.type){
        case "add":
        case "remove":
            if (predicate(change.node.row)) {
                output.push(change);
            }
            break;
        case "child":
            if (predicate(change.node.row)) {
                output.push(change);
            }
            break;
        case "edit":
            maybeSplitAndPushEditChange(change, predicate, output);
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(change);
    }
}
// ../zql/src/ivm/filter.ts
var Filter = class {
    #input;
    #predicate;
    #output = throwFilterOutput;
    constructor(input, predicate){
        this.#input = input;
        this.#predicate = predicate;
        input.setFilterOutput(this);
    }
    filter(node, cleanup) {
        return this.#predicate(node.row) && this.#output.filter(node, cleanup);
    }
    setFilterOutput(output) {
        this.#output = output;
    }
    destroy() {
        this.#input.destroy();
    }
    getSchema() {
        return this.#input.getSchema();
    }
    push(change) {
        filterPush(change, this.#output, this.#predicate);
    }
};
// ../zql/src/ivm/join.ts
var Join = class {
    #parent;
    #child;
    #storage;
    #parentKey;
    #childKey;
    #relationshipName;
    #schema;
    #output = throwOutput;
    #inprogressChildChange;
    constructor({ parent, child, storage, parentKey, childKey, relationshipName, hidden, system }){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(parent !== child, "Parent and child must be different operators");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(parentKey.length === childKey.length, "The parentKey and childKey keys must have same length");
        this.#parent = parent;
        this.#child = child;
        this.#storage = storage;
        this.#parentKey = parentKey;
        this.#childKey = childKey;
        this.#relationshipName = relationshipName;
        const parentSchema = parent.getSchema();
        const childSchema = child.getSchema();
        this.#schema = {
            ...parentSchema,
            relationships: {
                ...parentSchema.relationships,
                [relationshipName]: {
                    ...childSchema,
                    isHidden: hidden,
                    system
                }
            }
        };
        parent.setOutput({
            push: (change)=>this.#pushParent(change)
        });
        child.setOutput({
            push: (change)=>this.#pushChild(change)
        });
    }
    destroy() {
        this.#parent.destroy();
        this.#child.destroy();
    }
    setOutput(output) {
        this.#output = output;
    }
    getSchema() {
        return this.#schema;
    }
    *fetch(req) {
        for (const parentNode of this.#parent.fetch(req)){
            yield this.#processParentNode(parentNode.row, parentNode.relationships, "fetch");
        }
    }
    *cleanup(req) {
        for (const parentNode of this.#parent.cleanup(req)){
            yield this.#processParentNode(parentNode.row, parentNode.relationships, "cleanup");
        }
    }
    #pushParent(change) {
        switch(change.type){
            case "add":
                this.#output.push({
                    type: "add",
                    node: this.#processParentNode(change.node.row, change.node.relationships, "fetch")
                });
                break;
            case "remove":
                this.#output.push({
                    type: "remove",
                    node: this.#processParentNode(change.node.row, change.node.relationships, "cleanup")
                });
                break;
            case "child":
                this.#output.push({
                    type: "child",
                    node: this.#processParentNode(change.node.row, change.node.relationships, "fetch"),
                    child: change.child
                });
                break;
            case "edit":
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(rowEqualsForCompoundKey(change.oldNode.row, change.node.row, this.#parentKey), `Parent edit must not change relationship.`);
                    this.#output.push({
                        type: "edit",
                        oldNode: this.#processParentNode(change.oldNode.row, change.oldNode.relationships, "cleanup"),
                        node: this.#processParentNode(change.node.row, change.node.relationships, "fetch")
                    });
                    break;
                }
            default:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(change);
        }
    }
    #pushChild(change) {
        const pushChildChange = (childRow, change2)=>{
            this.#inprogressChildChange = {
                change: change2,
                position: void 0
            };
            try {
                const parentNodes = this.#parent.fetch({
                    constraint: Object.fromEntries(this.#parentKey.map((key, i)=>[
                            key,
                            childRow[this.#childKey[i]]
                        ]))
                });
                for (const parentNode of parentNodes){
                    this.#inprogressChildChange.position = parentNode.row;
                    const childChange = {
                        type: "child",
                        node: this.#processParentNode(parentNode.row, parentNode.relationships, "fetch"),
                        child: {
                            relationshipName: this.#relationshipName,
                            change: change2
                        }
                    };
                    this.#output.push(childChange);
                }
            } finally{
                this.#inprogressChildChange = void 0;
            }
        };
        switch(change.type){
            case "add":
            case "remove":
                pushChildChange(change.node.row, change);
                break;
            case "child":
                pushChildChange(change.node.row, change);
                break;
            case "edit":
                {
                    const childRow = change.node.row;
                    const oldChildRow = change.oldNode.row;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(rowEqualsForCompoundKey(oldChildRow, childRow, this.#childKey), "Child edit must not change relationship.");
                    pushChildChange(childRow, change);
                    break;
                }
            default:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(change);
        }
    }
    *#generateChildStreamWithOverlay(stream, overlay) {
        let applied = false;
        let editOldApplied = false;
        let editNewApplied = false;
        for (const child of stream){
            let yieldChild = true;
            if (!applied) {
                switch(overlay.type){
                    case "add":
                        {
                            if (this.#child.getSchema().compareRows(overlay.node.row, child.row) === 0) {
                                applied = true;
                                yieldChild = false;
                            }
                            break;
                        }
                    case "remove":
                        {
                            if (this.#child.getSchema().compareRows(overlay.node.row, child.row) < 0) {
                                applied = true;
                                yield overlay.node;
                            }
                            break;
                        }
                    case "edit":
                        {
                            if (this.#child.getSchema().compareRows(overlay.oldNode.row, child.row) < 0) {
                                editOldApplied = true;
                                if (editNewApplied) {
                                    applied = true;
                                }
                                yield overlay.oldNode;
                            }
                            if (this.#child.getSchema().compareRows(overlay.node.row, child.row) === 0) {
                                editNewApplied = true;
                                if (editOldApplied) {
                                    applied = true;
                                }
                                yieldChild = false;
                            }
                            break;
                        }
                    case "child":
                        {
                            if (this.#child.getSchema().compareRows(overlay.node.row, child.row) === 0) {
                                applied = true;
                                yield {
                                    row: child.row,
                                    relationships: {
                                        ...child.relationships,
                                        [overlay.child.relationshipName]: ()=>this.#generateChildStreamWithOverlay(child.relationships[overlay.child.relationshipName](), overlay.child.change)
                                    }
                                };
                                yieldChild = false;
                            }
                            break;
                        }
                }
            }
            if (yieldChild) {
                yield child;
            }
        }
        if (!applied) {
            if (overlay.type === "remove") {
                applied = true;
                yield overlay.node;
            } else if (overlay.type === "edit") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(editNewApplied);
                editOldApplied = true;
                applied = true;
                yield overlay.oldNode;
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(applied);
    }
    #processParentNode(parentNodeRow, parentNodeRelations, mode) {
        let method = mode;
        let storageUpdated = false;
        const childStream = ()=>{
            if (!storageUpdated) {
                if (mode === "cleanup") {
                    this.#storage.del(makeStorageKey(this.#parentKey, this.#parent.getSchema().primaryKey, parentNodeRow));
                    const empty = [
                        ...take(this.#storage.scan({
                            prefix: makeStorageKeyPrefix(parentNodeRow, this.#parentKey)
                        }), 1)
                    ].length === 0;
                    method = empty ? "cleanup" : "fetch";
                }
                storageUpdated = true;
                if (mode === "fetch") {
                    this.#storage.set(makeStorageKey(this.#parentKey, this.#parent.getSchema().primaryKey, parentNodeRow), true);
                }
            }
            const stream = this.#child[method]({
                constraint: Object.fromEntries(this.#childKey.map((key, i)=>[
                        key,
                        parentNodeRow[this.#parentKey[i]]
                    ]))
            });
            if (this.#inprogressChildChange && this.#isJoinMatch(parentNodeRow, this.#inprogressChildChange.change.node.row) && this.#inprogressChildChange.position && this.#schema.compareRows(parentNodeRow, this.#inprogressChildChange.position) > 0) {
                return this.#generateChildStreamWithOverlay(stream, this.#inprogressChildChange.change);
            }
            return stream;
        };
        return {
            row: parentNodeRow,
            relationships: {
                ...parentNodeRelations,
                [this.#relationshipName]: childStream
            }
        };
    }
    #isJoinMatch(parent, child) {
        for(let i = 0; i < this.#parentKey.length; i++){
            if (!valuesEqual(parent[this.#parentKey[i]], child[this.#childKey[i]])) {
                return false;
            }
        }
        return true;
    }
};
function makeStorageKeyForValues(values) {
    const json = JSON.stringify([
        "pKeySet",
        ...values
    ]);
    return json.substring(1, json.length - 1) + ",";
}
function makeStorageKeyPrefix(row, key) {
    return makeStorageKeyForValues(key.map((k)=>row[k]));
}
function makeStorageKey(key, primaryKey, row) {
    const values = key.map((k)=>row[k]);
    for (const key2 of primaryKey){
        values.push(row[key2]);
    }
    return makeStorageKeyForValues(values);
}
function rowEqualsForCompoundKey(a, b, key) {
    for(let i = 0; i < key.length; i++){
        if (compareValues(a[key[i]], b[key[i]]) !== 0) {
            return false;
        }
    }
    return true;
}
// ../zql/src/ivm/skip.ts
var Skip = class {
    #input;
    #bound;
    #comparator;
    #output = throwOutput;
    constructor(input, bound){
        this.#input = input;
        this.#bound = bound;
        this.#comparator = input.getSchema().compareRows;
        input.setOutput(this);
    }
    getSchema() {
        return this.#input.getSchema();
    }
    fetch(req) {
        return this.#fetchOrCleanup("fetch", req);
    }
    cleanup(req) {
        return this.#fetchOrCleanup("fetch", req);
    }
    *#fetchOrCleanup(method, req) {
        const start = this.#getStart(req);
        if (start === "empty") {
            return;
        }
        const nodes = this.#input[method]({
            ...req,
            start
        });
        if (!req.reverse) {
            yield* nodes;
            return;
        }
        for (const node of nodes){
            if (!this.#shouldBePresent(node.row)) {
                return;
            }
            yield node;
        }
    }
    setOutput(output) {
        this.#output = output;
    }
    destroy() {
        this.#input.destroy();
    }
    #shouldBePresent(row) {
        const cmp2 = this.#comparator(this.#bound.row, row);
        return cmp2 < 0 || cmp2 === 0 && !this.#bound.exclusive;
    }
    push(change) {
        const shouldBePresent = (row)=>this.#shouldBePresent(row);
        if (change.type === "edit") {
            maybeSplitAndPushEditChange(change, shouldBePresent, this.#output);
            return;
        }
        change;
        if (shouldBePresent(change.node.row)) {
            this.#output.push(change);
        }
    }
    #getStart(req) {
        const boundStart = {
            row: this.#bound.row,
            basis: this.#bound.exclusive ? "after" : "at"
        };
        if (!req.start) {
            if (req.reverse) {
                return void 0;
            }
            return boundStart;
        }
        const cmp2 = this.#comparator(this.#bound.row, req.start.row);
        if (!req.reverse) {
            if (cmp2 > 0) {
                return boundStart;
            }
            if (cmp2 === 0) {
                if (this.#bound.exclusive || req.start.basis === "after") {
                    return {
                        row: this.#bound.row,
                        basis: "after"
                    };
                }
                return boundStart;
            }
            return req.start;
        }
        req.reverse;
        if (cmp2 > 0) {
            return "empty";
        }
        if (cmp2 === 0) {
            if (!this.#bound.exclusive && req.start.basis === "at") {
                return boundStart;
            }
            return "empty";
        }
        return req.start;
    }
};
// ../zql/src/ivm/take.ts
var MAX_BOUND_KEY = "maxBound";
var Take = class {
    #input;
    #storage;
    #limit;
    #partitionKey;
    #partitionKeyComparator;
    // Fetch overlay needed for some split push cases.
    #rowHiddenFromFetch;
    #output = throwOutput;
    constructor(input, storage, limit, partitionKey){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(limit >= 0);
        assertOrderingIncludesPK(input.getSchema().sort, input.getSchema().primaryKey);
        input.setOutput(this);
        this.#input = input;
        this.#storage = storage;
        this.#limit = limit;
        this.#partitionKey = partitionKey;
        this.#partitionKeyComparator = partitionKey && makePartitionKeyComparator(partitionKey);
    }
    setOutput(output) {
        this.#output = output;
    }
    getSchema() {
        return this.#input.getSchema();
    }
    *fetch(req) {
        if (!this.#partitionKey || req.constraint && constraintMatchesPartitionKey(req.constraint, this.#partitionKey)) {
            const takeStateKey = getTakeStateKey(this.#partitionKey, req.constraint);
            const takeState = this.#storage.get(takeStateKey);
            if (!takeState) {
                yield* this.#initialFetch(req);
                return;
            }
            if (takeState.bound === void 0) {
                return;
            }
            for (const inputNode of this.#input.fetch(req)){
                if (this.getSchema().compareRows(takeState.bound, inputNode.row) < 0) {
                    return;
                }
                if (this.#rowHiddenFromFetch && this.getSchema().compareRows(this.#rowHiddenFromFetch, inputNode.row) === 0) {
                    continue;
                }
                yield inputNode;
            }
            return;
        }
        const maxBound = this.#storage.get(MAX_BOUND_KEY);
        if (maxBound === void 0) {
            return;
        }
        for (const inputNode of this.#input.fetch(req)){
            if (this.getSchema().compareRows(inputNode.row, maxBound) > 0) {
                return;
            }
            const takeStateKey = getTakeStateKey(this.#partitionKey, inputNode.row);
            const takeState = this.#storage.get(takeStateKey);
            if (takeState?.bound !== void 0 && this.getSchema().compareRows(takeState.bound, inputNode.row) >= 0) {
                yield inputNode;
            }
        }
    }
    *#initialFetch(req) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(req.start === void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!req.reverse);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(constraintMatchesPartitionKey(req.constraint, this.#partitionKey));
        if (this.#limit === 0) {
            return;
        }
        const takeStateKey = getTakeStateKey(this.#partitionKey, req.constraint);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#storage.get(takeStateKey) === void 0);
        let size = 0;
        let bound;
        let downstreamEarlyReturn = true;
        let exceptionThrown = false;
        try {
            for (const inputNode of this.#input.fetch(req)){
                yield inputNode;
                bound = inputNode.row;
                size++;
                if (size === this.#limit) {
                    break;
                }
            }
            downstreamEarlyReturn = false;
        } catch (e) {
            exceptionThrown = true;
            throw e;
        } finally{
            if (!exceptionThrown) {
                this.#setTakeState(takeStateKey, size, bound, this.#storage.get(MAX_BOUND_KEY));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!downstreamEarlyReturn, "Unexpected early return prevented full hydration");
            }
        }
    }
    *cleanup(req) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(req.start === void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(constraintMatchesPartitionKey(req.constraint, this.#partitionKey));
        const takeStateKey = getTakeStateKey(this.#partitionKey, req.constraint);
        this.#storage.del(takeStateKey);
        let size = 0;
        for (const inputNode of this.#input.cleanup(req)){
            if (size === this.#limit) {
                return;
            }
            size++;
            yield inputNode;
        }
    }
    #getStateAndConstraint(row) {
        const takeStateKey = getTakeStateKey(this.#partitionKey, row);
        const takeState = this.#storage.get(takeStateKey);
        let maxBound;
        let constraint;
        if (takeState) {
            maxBound = this.#storage.get(MAX_BOUND_KEY);
            constraint = this.#partitionKey && Object.fromEntries(this.#partitionKey.map((key)=>[
                    key,
                    row[key]
                ]));
        }
        return {
            takeState,
            takeStateKey,
            maxBound,
            constraint
        };
    }
    push(change) {
        if (change.type === "edit") {
            this.#pushEditChange(change);
            return;
        }
        const { takeState, takeStateKey, maxBound, constraint } = this.#getStateAndConstraint(change.node.row);
        if (!takeState) {
            return;
        }
        const { compareRows } = this.getSchema();
        if (change.type === "add") {
            if (takeState.size < this.#limit) {
                this.#setTakeState(takeStateKey, takeState.size + 1, takeState.bound === void 0 || compareRows(takeState.bound, change.node.row) < 0 ? change.node.row : takeState.bound, maxBound);
                this.#output.push(change);
                return;
            }
            if (takeState.bound === void 0 || compareRows(change.node.row, takeState.bound) >= 0) {
                return;
            }
            let beforeBoundNode;
            let boundNode;
            if (this.#limit === 1) {
                boundNode = must(first(this.#input.fetch({
                    start: {
                        row: takeState.bound,
                        basis: "at"
                    },
                    constraint
                })));
            } else {
                [boundNode, beforeBoundNode] = take(this.#input.fetch({
                    start: {
                        row: takeState.bound,
                        basis: "at"
                    },
                    constraint,
                    reverse: true
                }), 2);
            }
            const removeChange = {
                type: "remove",
                node: boundNode
            };
            this.#setTakeState(takeStateKey, takeState.size, beforeBoundNode === void 0 || compareRows(change.node.row, beforeBoundNode.row) > 0 ? change.node.row : beforeBoundNode.row, maxBound);
            this.#withRowHiddenFromFetch(change.node.row, ()=>{
                this.#output.push(removeChange);
            });
            this.#output.push(change);
        } else if (change.type === "remove") {
            if (takeState.bound === void 0) {
                return;
            }
            const compToBound = compareRows(change.node.row, takeState.bound);
            if (compToBound > 0) {
                return;
            }
            const [beforeBoundNode] = take(this.#input.fetch({
                start: {
                    row: takeState.bound,
                    basis: "after"
                },
                constraint,
                reverse: true
            }), 1);
            let newBound;
            if (beforeBoundNode) {
                const push = compareRows(beforeBoundNode.row, takeState.bound) > 0;
                newBound = {
                    node: beforeBoundNode,
                    push
                };
            }
            if (!newBound?.push) {
                for (const node of this.#input.fetch({
                    start: {
                        row: takeState.bound,
                        basis: "at"
                    },
                    constraint
                })){
                    const push = compareRows(node.row, takeState.bound) > 0;
                    newBound = {
                        node,
                        push
                    };
                    if (push) {
                        break;
                    }
                }
            }
            if (newBound?.push) {
                this.#output.push(change);
                this.#setTakeState(takeStateKey, takeState.size, newBound.node.row, maxBound);
                this.#output.push({
                    type: "add",
                    node: newBound.node
                });
                return;
            }
            this.#setTakeState(takeStateKey, takeState.size - 1, newBound?.node.row, maxBound);
            this.#output.push(change);
        } else if (change.type === "child") {
            if (takeState.bound && compareRows(change.node.row, takeState.bound) <= 0) {
                this.#output.push(change);
            }
        }
    }
    #pushEditChange(change) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!this.#partitionKeyComparator || this.#partitionKeyComparator(change.oldNode.row, change.node.row) === 0, "Unexpected change of partition key");
        const { takeState, takeStateKey, maxBound, constraint } = this.#getStateAndConstraint(change.oldNode.row);
        if (!takeState) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(takeState.bound, "Bound should be set");
        const { compareRows } = this.getSchema();
        const oldCmp = compareRows(change.oldNode.row, takeState.bound);
        const newCmp = compareRows(change.node.row, takeState.bound);
        const replaceBoundAndForwardChange = ()=>{
            this.#setTakeState(takeStateKey, takeState.size, change.node.row, maxBound);
            this.#output.push(change);
        };
        if (oldCmp === 0) {
            if (newCmp === 0) {
                this.#output.push(change);
                return;
            }
            if (newCmp < 0) {
                if (this.#limit === 1) {
                    replaceBoundAndForwardChange();
                    return;
                }
                const beforeBoundNode = must(first(this.#input.fetch({
                    start: {
                        row: takeState.bound,
                        basis: "after"
                    },
                    constraint,
                    reverse: true
                })));
                this.#setTakeState(takeStateKey, takeState.size, beforeBoundNode.row, maxBound);
                this.#output.push(change);
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(newCmp > 0);
            const newBoundNode = must(first(this.#input.fetch({
                start: {
                    row: takeState.bound,
                    basis: "at"
                },
                constraint
            })));
            if (compareRows(newBoundNode.row, change.node.row) === 0) {
                replaceBoundAndForwardChange();
                return;
            }
            this.#setTakeState(takeStateKey, takeState.size, newBoundNode.row, maxBound);
            this.#withRowHiddenFromFetch(newBoundNode.row, ()=>{
                this.#output.push({
                    type: "remove",
                    node: change.oldNode
                });
            });
            this.#output.push({
                type: "add",
                node: newBoundNode
            });
            return;
        }
        if (oldCmp > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(newCmp !== 0, "Invalid state. Row has duplicate primary key");
            if (newCmp > 0) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(newCmp < 0);
            const [oldBoundNode, newBoundNode] = take(this.#input.fetch({
                start: {
                    row: takeState.bound,
                    basis: "at"
                },
                constraint,
                reverse: true
            }), 2);
            this.#setTakeState(takeStateKey, takeState.size, newBoundNode.row, maxBound);
            this.#withRowHiddenFromFetch(change.node.row, ()=>{
                this.#output.push({
                    type: "remove",
                    node: oldBoundNode
                });
            });
            this.#output.push({
                type: "add",
                node: change.node
            });
            return;
        }
        if (oldCmp < 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(newCmp !== 0, "Invalid state. Row has duplicate primary key");
            if (newCmp < 0) {
                this.#output.push(change);
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(newCmp > 0);
            const afterBoundNode = must(first(this.#input.fetch({
                start: {
                    row: takeState.bound,
                    basis: "after"
                },
                constraint
            })));
            if (compareRows(afterBoundNode.row, change.node.row) === 0) {
                replaceBoundAndForwardChange();
                return;
            }
            this.#output.push({
                type: "remove",
                node: change.oldNode
            });
            this.#setTakeState(takeStateKey, takeState.size, afterBoundNode.row, maxBound);
            this.#output.push({
                type: "add",
                node: afterBoundNode
            });
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])();
    }
    #withRowHiddenFromFetch(row, fn) {
        this.#rowHiddenFromFetch = row;
        try {
            fn();
        } finally{
            this.#rowHiddenFromFetch = void 0;
        }
    }
    #setTakeState(takeStateKey, size, bound, maxBound) {
        this.#storage.set(takeStateKey, {
            size,
            bound
        });
        if (bound !== void 0 && (maxBound === void 0 || this.getSchema().compareRows(bound, maxBound) > 0)) {
            this.#storage.set(MAX_BOUND_KEY, bound);
        }
    }
    destroy() {
        this.#input.destroy();
    }
};
function getTakeStateKey(partitionKey, rowOrConstraint) {
    const partitionValues = [];
    if (partitionKey && rowOrConstraint) {
        for (const key of partitionKey){
            partitionValues.push(rowOrConstraint[key]);
        }
    }
    return JSON.stringify([
        "take",
        ...partitionValues
    ]);
}
function constraintMatchesPartitionKey(constraint, partitionKey) {
    if (constraint === void 0 || partitionKey === void 0) {
        return constraint === partitionKey;
    }
    if (partitionKey.length !== Object.keys(constraint).length) {
        return false;
    }
    for (const key of partitionKey){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(constraint, key)) {
            return false;
        }
    }
    return true;
}
function makePartitionKeyComparator(partitionKey) {
    return (a, b)=>{
        for (const key of partitionKey){
            const cmp2 = compareValues(a[key], b[key]);
            if (cmp2 !== 0) {
                return cmp2;
            }
        }
        return 0;
    };
}
// ../zql/src/query/expression.ts
var ExpressionBuilder = class {
    #exists;
    constructor(exists){
        this.#exists = exists;
        this.exists = this.exists.bind(this);
    }
    get eb() {
        return this;
    }
    cmp(field, opOrValue, value) {
        return cmp(field, opOrValue, value);
    }
    cmpLit(left, op, right) {
        return {
            type: "simple",
            left: isParameterReference(left) ? left[toStaticParam]() : {
                type: "literal",
                value: left
            },
            right: isParameterReference(right) ? right[toStaticParam]() : {
                type: "literal",
                value: right
            },
            op
        };
    }
    and = and;
    or = or;
    not = not;
    exists = (relationship, cb)=>this.#exists(relationship, cb);
};
function and(...conditions) {
    const expressions = filterTrue(filterUndefined(conditions));
    if (expressions.length === 1) {
        return expressions[0];
    }
    if (expressions.some(isAlwaysFalse)) {
        return FALSE;
    }
    return {
        type: "and",
        conditions: expressions
    };
}
function or(...conditions) {
    const expressions = filterFalse(filterUndefined(conditions));
    if (expressions.length === 1) {
        return expressions[0];
    }
    if (expressions.some(isAlwaysTrue)) {
        return TRUE;
    }
    return {
        type: "or",
        conditions: expressions
    };
}
function not(expression) {
    switch(expression.type){
        case "and":
            return {
                type: "or",
                conditions: expression.conditions.map(not)
            };
        case "or":
            return {
                type: "and",
                conditions: expression.conditions.map(not)
            };
        case "correlatedSubquery":
            return {
                type: "correlatedSubquery",
                related: expression.related,
                op: negateOperator(expression.op)
            };
        case "simple":
            return {
                type: "simple",
                op: negateOperator(expression.op),
                left: expression.left,
                right: expression.right
            };
    }
}
function cmp(field, opOrValue, value) {
    let op;
    if (value === void 0) {
        value = opOrValue;
        op = "=";
    } else {
        op = opOrValue;
    }
    return {
        type: "simple",
        left: {
            type: "column",
            name: field
        },
        right: isParameterReference(value) ? value[toStaticParam]() : {
            type: "literal",
            value
        },
        op
    };
}
function isParameterReference(value) {
    return value !== null && typeof value === "object" && value[toStaticParam];
}
var TRUE = {
    type: "and",
    conditions: []
};
var FALSE = {
    type: "or",
    conditions: []
};
function isAlwaysTrue(condition) {
    return condition.type === "and" && condition.conditions.length === 0;
}
function isAlwaysFalse(condition) {
    return condition.type === "or" && condition.conditions.length === 0;
}
function simplifyCondition(c) {
    if (c.type === "simple" || c.type === "correlatedSubquery") {
        return c;
    }
    if (c.conditions.length === 1) {
        return simplifyCondition(c.conditions[0]);
    }
    const conditions = flatten(c.type, c.conditions.map(simplifyCondition));
    if (c.type === "and" && conditions.some(isAlwaysFalse)) {
        return FALSE;
    }
    if (c.type === "or" && conditions.some(isAlwaysTrue)) {
        return TRUE;
    }
    return {
        type: c.type,
        conditions
    };
}
function flatten(type, conditions) {
    const flattened2 = [];
    for (const c of conditions){
        if (c.type === type) {
            flattened2.push(...c.conditions);
        } else {
            flattened2.push(c);
        }
    }
    return flattened2;
}
var negateSimpleOperatorMap = {
    ["="]: "!=",
    ["!="]: "=",
    ["<"]: ">=",
    [">"]: "<=",
    [">="]: "<",
    ["<="]: ">",
    ["IN"]: "NOT IN",
    ["NOT IN"]: "IN",
    ["LIKE"]: "NOT LIKE",
    ["NOT LIKE"]: "LIKE",
    ["ILIKE"]: "NOT ILIKE",
    ["NOT ILIKE"]: "ILIKE",
    ["IS"]: "IS NOT",
    ["IS NOT"]: "IS"
};
var negateOperatorMap = {
    ...negateSimpleOperatorMap,
    ["EXISTS"]: "NOT EXISTS",
    ["NOT EXISTS"]: "EXISTS"
};
function negateOperator(op) {
    return must(negateOperatorMap[op]);
}
function filterUndefined(array6) {
    return array6.filter((e)=>e !== void 0);
}
function filterTrue(conditions) {
    return conditions.filter((c)=>!isAlwaysTrue(c));
}
function filterFalse(conditions) {
    return conditions.filter((c)=>!isAlwaysFalse(c));
}
// ../zql/src/builder/like.ts
function getLikePredicate(pattern, flags) {
    const op = getLikeOp(String(pattern), flags);
    return (lhs)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(lhs);
        return op(String(lhs));
    };
}
function getLikeOp(pattern, flags) {
    if (!/_|%|\\/.test(pattern)) {
        if (flags === "i") {
            const rhsLower = pattern.toLowerCase();
            return (lhs)=>lhs.toLowerCase() === rhsLower;
        }
        return (lhs)=>lhs === pattern;
    }
    const re = patternToRegExp(pattern, flags);
    return (lhs)=>re.test(lhs);
}
var specialCharsRe = /[$()*+.?[\]\\^{|}]/;
function patternToRegExp(source, flags = "") {
    let pattern = "^";
    for(let i = 0; i < source.length; i++){
        let c = source[i];
        switch(c){
            case "%":
                pattern += ".*";
                break;
            case "_":
                pattern += ".";
                break;
            // @ts-expect-error fallthrough
            case "\\":
                if (i === source.length - 1) {
                    throw new Error("LIKE pattern must not end with escape character");
                }
                i++;
                c = source[i];
            // fall through
            default:
                if (specialCharsRe.test(c)) {
                    pattern += "\\";
                }
                pattern += c;
                break;
        }
    }
    return new RegExp(pattern + "$", flags + "m");
}
// ../zql/src/builder/filter.ts
function createPredicate(condition) {
    if (condition.type !== "simple") {
        const predicates = condition.conditions.map((c)=>createPredicate(c));
        return condition.type === "and" ? (row)=>{
            for (const predicate of predicates){
                if (!predicate(row)) {
                    return false;
                }
            }
            return true;
        } : (row)=>{
            for (const predicate of predicates){
                if (predicate(row)) {
                    return true;
                }
            }
            return false;
        };
    }
    const { left } = condition;
    const { right } = condition;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(right.type !== "static", "static values should be resolved before creating predicates");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(left.type !== "static", "static values should be resolved before creating predicates");
    switch(condition.op){
        case "IS":
        case "IS NOT":
            {
                const impl2 = createIsPredicate(right.value, condition.op);
                if (left.type === "literal") {
                    const result = impl2(left.value);
                    return ()=>result;
                }
                return (row)=>impl2(row[left.name]);
            }
    }
    if (right.value === null || right.value === void 0) {
        return (_row)=>false;
    }
    const impl = createPredicateImpl(right.value, condition.op);
    if (left.type === "literal") {
        if (left.value === null || left.value === void 0) {
            return (_row)=>false;
        }
        const result = impl(left.value);
        return ()=>result;
    }
    return (row)=>{
        const lhs = row[left.name];
        if (lhs === null || lhs === void 0) {
            return false;
        }
        return impl(lhs);
    };
}
function createIsPredicate(rhs, operator) {
    switch(operator){
        case "IS":
            return (lhs)=>lhs === rhs;
        case "IS NOT":
            return (lhs)=>lhs !== rhs;
    }
}
function createPredicateImpl(rhs, operator) {
    switch(operator){
        case "=":
            return (lhs)=>lhs === rhs;
        case "!=":
            return (lhs)=>lhs !== rhs;
        case "<":
            return (lhs)=>lhs < rhs;
        case "<=":
            return (lhs)=>lhs <= rhs;
        case ">":
            return (lhs)=>lhs > rhs;
        case ">=":
            return (lhs)=>lhs >= rhs;
        case "LIKE":
            return getLikePredicate(rhs, "");
        case "NOT LIKE":
            return not2(getLikePredicate(rhs, ""));
        case "ILIKE":
            return getLikePredicate(rhs, "i");
        case "NOT ILIKE":
            return not2(getLikePredicate(rhs, "i"));
        case "IN":
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(Array.isArray(rhs));
                const set = new Set(rhs);
                return (lhs)=>set.has(lhs);
            }
        case "NOT IN":
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(Array.isArray(rhs));
                const set = new Set(rhs);
                return (lhs)=>!set.has(lhs);
            }
        default:
            operator;
            throw new Error(`Unexpected operator: ${operator}`);
    }
}
function not2(f) {
    return (lhs)=>!f(lhs);
}
function transformFilters(filters) {
    if (!filters) {
        return {
            filters: void 0,
            conditionsRemoved: false
        };
    }
    switch(filters.type){
        case "simple":
            return {
                filters,
                conditionsRemoved: false
            };
        case "correlatedSubquery":
            return {
                filters: void 0,
                conditionsRemoved: true
            };
        case "and":
        case "or":
            {
                const transformedConditions = [];
                let conditionsRemoved = false;
                for (const cond of filters.conditions){
                    const transformed = transformFilters(cond);
                    if (transformed.filters === void 0 && filters.type === "or") {
                        return {
                            filters: void 0,
                            conditionsRemoved: true
                        };
                    }
                    conditionsRemoved = conditionsRemoved || transformed.conditionsRemoved;
                    if (transformed.filters) {
                        transformedConditions.push(transformed.filters);
                    }
                }
                return {
                    filters: simplifyCondition({
                        type: filters.type,
                        conditions: transformedConditions
                    }),
                    conditionsRemoved
                };
            }
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(filters);
    }
}
// ../zql/src/builder/builder.ts
function buildPipeline(ast, delegate, queryID) {
    return buildPipelineInternal(delegate.mapAst ? delegate.mapAst(ast) : ast, delegate, queryID, "");
}
function buildPipelineInternal(ast, delegate, queryID, name, partitionKey) {
    const source = delegate.getSource(ast.table);
    if (!source) {
        throw new Error(`Source not found: ${ast.table}`);
    }
    ast = uniquifyCorrelatedSubqueryConditionAliases(ast);
    const csqsFromCondition = gatherCorrelatedSubqueryQueriesFromCondition(ast.where);
    const splitEditKeys = partitionKey ? new Set(partitionKey) : /* @__PURE__ */ new Set();
    const aliases = /* @__PURE__ */ new Set();
    for (const csq of csqsFromCondition){
        aliases.add(csq.subquery.alias || "");
        for (const key of csq.correlation.parentField){
            splitEditKeys.add(key);
        }
    }
    if (ast.related) {
        for (const csq of ast.related){
            for (const key of csq.correlation.parentField){
                splitEditKeys.add(key);
            }
        }
    }
    const conn = source.connect(must(ast.orderBy), ast.where, splitEditKeys, delegate.debug);
    let end = delegate.decorateSourceInput(conn, queryID);
    end = delegate.decorateInput(end, `${name}:source(${ast.table})`);
    const { fullyAppliedFilters } = conn;
    if (ast.start) {
        const skip = new Skip(end, ast.start);
        delegate.addEdge(end, skip);
        end = delegate.decorateInput(skip, `${name}:skip)`);
    }
    for (const csq of csqsFromCondition){
        end = applyCorrelatedSubQuery(csq, delegate, queryID, end, name, true);
    }
    if (ast.where && (!fullyAppliedFilters || delegate.applyFiltersAnyway)) {
        end = applyWhere(end, ast.where, delegate, name);
    }
    if (ast.limit !== void 0) {
        const takeName = `${name}:take`;
        const take2 = new Take(end, delegate.createStorage(takeName), ast.limit, partitionKey);
        delegate.addEdge(end, take2);
        end = delegate.decorateInput(take2, takeName);
    }
    if (ast.related) {
        for (const csq of ast.related){
            end = applyCorrelatedSubQuery(csq, delegate, queryID, end, name, false);
        }
    }
    return end;
}
function applyWhere(input, condition, delegate, name) {
    return buildFilterPipeline(input, delegate, (filterInput)=>applyFilter(filterInput, condition, delegate, name));
}
function applyFilter(input, condition, delegate, name) {
    switch(condition.type){
        case "and":
            return applyAnd(input, condition, delegate, name);
        case "or":
            return applyOr(input, condition, delegate, name);
        case "correlatedSubquery":
            return applyCorrelatedSubqueryCondition(input, condition, delegate, name);
        case "simple":
            return applySimpleCondition(input, delegate, condition);
    }
}
function applyAnd(input, condition, delegate, name) {
    for (const subCondition of condition.conditions){
        input = applyFilter(input, subCondition, delegate, name);
    }
    return input;
}
function applyOr(input, condition, delegate, name) {
    const [subqueryConditions, otherConditions] = groupSubqueryConditions(condition);
    if (subqueryConditions.length === 0) {
        const filter = new Filter(input, createPredicate({
            type: "or",
            conditions: otherConditions
        }));
        delegate.addEdge(input, filter);
        return filter;
    }
    const fanOut = new FanOut(input);
    delegate.addEdge(input, fanOut);
    const branches = subqueryConditions.map((subCondition)=>applyFilter(fanOut, subCondition, delegate, name));
    if (otherConditions.length > 0) {
        const filter = new Filter(fanOut, createPredicate({
            type: "or",
            conditions: otherConditions
        }));
        delegate.addEdge(fanOut, filter);
        branches.push(filter);
    }
    const ret = new FanIn(fanOut, branches);
    for (const branch of branches){
        delegate.addEdge(branch, ret);
    }
    fanOut.setFanIn(ret);
    return ret;
}
function groupSubqueryConditions(condition) {
    const partitioned = [
        [],
        []
    ];
    for (const subCondition of condition.conditions){
        if (isNotAndDoesNotContainSubquery(subCondition)) {
            partitioned[1].push(subCondition);
        } else {
            partitioned[0].push(subCondition);
        }
    }
    return partitioned;
}
function isNotAndDoesNotContainSubquery(condition) {
    if (condition.type === "correlatedSubquery") {
        return false;
    }
    if (condition.type === "simple") {
        return true;
    }
    return condition.conditions.every(isNotAndDoesNotContainSubquery);
}
function applySimpleCondition(input, delegate, condition) {
    const filter = new Filter(input, createPredicate(condition));
    delegate.decorateFilterInput(filter, `${valuePosName(condition.left)}:${condition.op}:${valuePosName(condition.right)}`);
    delegate.addEdge(input, filter);
    return filter;
}
function valuePosName(left) {
    switch(left.type){
        case "static":
            return left.field;
        case "literal":
            return left.value;
        case "column":
            return left.name;
    }
}
function applyCorrelatedSubQuery(sq, delegate, queryID, end, name, fromCondition) {
    if (sq.subquery.limit === 0 && fromCondition) {
        return end;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(sq.subquery.alias, "Subquery must have an alias");
    const child = buildPipelineInternal(sq.subquery, delegate, queryID, `${name}.${sq.subquery.alias}`, sq.correlation.childField);
    const joinName = `${name}:join(${sq.subquery.alias})`;
    const join = new Join({
        parent: end,
        child,
        storage: delegate.createStorage(joinName),
        parentKey: sq.correlation.parentField,
        childKey: sq.correlation.childField,
        relationshipName: sq.subquery.alias,
        hidden: sq.hidden ?? false,
        system: sq.system ?? "client"
    });
    delegate.addEdge(end, join);
    delegate.addEdge(child, join);
    return delegate.decorateInput(join, joinName);
}
function applyCorrelatedSubqueryCondition(input, condition, delegate, name) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(condition.op === "EXISTS" || condition.op === "NOT EXISTS");
    if (condition.related.subquery.limit === 0) {
        if (condition.op === "EXISTS") {
            const filter2 = new Filter(input, ()=>false);
            delegate.addEdge(input, filter2);
            return filter2;
        }
        const filter = new Filter(input, ()=>true);
        delegate.addEdge(input, filter);
        return filter;
    }
    const existsName = `${name}:exists(${condition.related.subquery.alias})`;
    const exists = new Exists(input, delegate.createStorage(existsName), must(condition.related.subquery.alias), condition.related.correlation.parentField, condition.op);
    delegate.addEdge(input, exists);
    return delegate.decorateFilterInput(exists, existsName);
}
function gatherCorrelatedSubqueryQueriesFromCondition(condition) {
    const csqs = [];
    const gather = (condition2)=>{
        if (condition2.type === "correlatedSubquery") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(condition2.op === "EXISTS" || condition2.op === "NOT EXISTS");
            csqs.push({
                ...condition2.related,
                subquery: {
                    ...condition2.related.subquery,
                    limit: condition2.related.system === "permissions" ? PERMISSIONS_EXISTS_LIMIT : EXISTS_LIMIT
                }
            });
            return;
        }
        if (condition2.type === "and" || condition2.type === "or") {
            for (const c of condition2.conditions){
                gather(c);
            }
            return;
        }
    };
    if (condition) {
        gather(condition);
    }
    return csqs;
}
var EXISTS_LIMIT = 3;
var PERMISSIONS_EXISTS_LIMIT = 1;
function assertOrderingIncludesPK(ordering, pk) {
    const orderingFields = ordering.map(([field])=>field);
    const missingFields = pk.filter((pkField)=>!orderingFields.includes(pkField));
    if (missingFields.length > 0) {
        throw new Error(`Ordering must include all primary key fields. Missing: ${missingFields.join(", ")}. ZQL automatically appends primary key fields to the ordering if they are missing 
      so a common cause of this error is a casing mismatch between Postgres and ZQL.
      E.g., "userid" vs "userID".
      You may want to add double-quotes around your Postgres column names to prevent Postgres from lower-casing them:
      https://www.postgresql.org/docs/current/sql-syntax-lexical.htm`);
    }
}
function uniquifyCorrelatedSubqueryConditionAliases(ast) {
    if (!ast.where) {
        return ast;
    }
    const { where } = ast;
    if (where.type !== "and" && where.type !== "or") {
        return ast;
    }
    let count = 0;
    const uniquifyCorrelatedSubquery = (csqc)=>({
            ...csqc,
            related: {
                ...csqc.related,
                subquery: {
                    ...csqc.related.subquery,
                    alias: (csqc.related.subquery.alias ?? "") + "_" + count++
                }
            }
        });
    const uniquify = (cond)=>{
        if (cond.type === "simple") {
            return cond;
        } else if (cond.type === "correlatedSubquery") {
            return uniquifyCorrelatedSubquery(cond);
        }
        const conditions = [];
        for (const c of cond.conditions){
            conditions.push(uniquify(c));
        }
        return {
            type: cond.type,
            conditions
        };
    };
    const result = {
        ...ast,
        where: uniquify(where)
    };
    return result;
}
// ../zql/src/error.ts
var NotImplementedError = class extends Error {
    constructor(message){
        super(message);
        this.name = "NotImplementedError";
    }
};
// ../zql/src/ivm/array-view.ts
var ArrayView = class {
    #input;
    #listeners = /* @__PURE__ */ new Set();
    #schema;
    #format;
    // Synthetic "root" entry that has a single "" relationship, so that we can
    // treat all changes, including the root change, generically.
    #root;
    onDestroy;
    #dirty = false;
    #complete = false;
    #updateTTL;
    constructor(input, format, queryComplete, updateTTL){
        this.#input = input;
        this.#schema = input.getSchema();
        this.#format = format;
        this.#updateTTL = updateTTL;
        this.#root = {
            "": format.singular ? void 0 : []
        };
        input.setOutput(this);
        if (queryComplete === true) {
            this.#complete = true;
        } else {
            void queryComplete.then(()=>{
                this.#complete = true;
                this.#fireListeners();
            });
        }
        this.#hydrate();
    }
    get data() {
        return this.#root[""];
    }
    addListener(listener) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!this.#listeners.has(listener), "Listener already registered");
        this.#listeners.add(listener);
        this.#fireListener(listener);
        return ()=>{
            this.#listeners.delete(listener);
        };
    }
    #fireListeners() {
        for (const listener of this.#listeners){
            this.#fireListener(listener);
        }
    }
    #fireListener(listener) {
        listener(this.data, this.#complete ? "complete" : "unknown");
    }
    destroy() {
        this.onDestroy?.();
    }
    #hydrate() {
        this.#dirty = true;
        for (const node of this.#input.fetch({})){
            applyChange(this.#root, {
                type: "add",
                node
            }, this.#schema, "", this.#format);
        }
        this.flush();
    }
    push(change) {
        this.#dirty = true;
        applyChange(this.#root, change, this.#schema, "", this.#format);
    }
    flush() {
        if (!this.#dirty) {
            return;
        }
        this.#dirty = false;
        this.#fireListeners();
    }
    updateTTL(ttl) {
        this.#updateTTL(ttl);
    }
};
// ../zql/src/query/assert-no-not-exists.ts
function assertNoNotExists(condition) {
    switch(condition.type){
        case "simple":
            return;
        case "correlatedSubquery":
            if (condition.op === "NOT EXISTS") {
                throw new Error("not(exists()) is not supported on the client - see https://bugs.rocicorp.dev/issue/3438");
            }
            if (condition.related.subquery.where) {
                assertNoNotExists(condition.related.subquery.where);
            }
            return;
        case "and":
        case "or":
            for (const c of condition.conditions){
                assertNoNotExists(c);
            }
            return;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(condition);
    }
}
// ../zql/src/query/query-impl.ts
function materialize(query, delegate, factoryOrOptions, maybeOptions) {
    if (typeof factoryOrOptions === "function") {
        return query[delegateSymbol](delegate).materialize(factoryOrOptions, maybeOptions?.ttl);
    }
    return query[delegateSymbol](delegate).materialize(factoryOrOptions?.ttl);
}
var astSymbol = Symbol();
function newQuery(delegate, schema, table) {
    return new QueryImpl(delegate, schema, table, {
        table
    }, defaultFormat, void 0);
}
function staticParam(anchorClass, field) {
    return {
        type: "static",
        anchor: anchorClass,
        // for backwards compatibility
        field: field.length === 1 ? field[0] : field
    };
}
var SUBQ_PREFIX = "zsubq_";
var defaultFormat = {
    singular: false,
    relationships: {}
};
var newQuerySymbol = Symbol();
var AbstractQuery = class {
    #schema;
    _delegate;
    #tableName;
    _ast;
    format;
    #hash = "";
    #system;
    #currentJunction;
    customQueryID;
    constructor(delegate, schema, tableName, ast, format, system, customQueryID, currentJunction){
        this.#schema = schema;
        this._delegate = delegate;
        this.#tableName = tableName;
        this._ast = ast;
        this.format = format;
        this.#system = system;
        this.#currentJunction = currentJunction;
        this.customQueryID = customQueryID;
    }
    [delegateSymbol](delegate) {
        return this[newQuerySymbol](delegate, this.#schema, this.#tableName, this._ast, this.format, this.customQueryID, this.#currentJunction);
    }
    nameAndArgs(name, args) {
        return this[newQuerySymbol](this._delegate, this.#schema, this.#tableName, this._ast, this.format, {
            name,
            args
        }, this.#currentJunction);
    }
    get [astSymbol]() {
        return this._ast;
    }
    get ast() {
        return this._completeAst();
    }
    hash() {
        if (!this.#hash) {
            this.#hash = hashOfAST(this._completeAst());
        }
        return this.#hash;
    }
    one = ()=>this[newQuerySymbol](this._delegate, this.#schema, this.#tableName, {
            ...this._ast,
            limit: 1
        }, {
            ...this.format,
            singular: true
        }, this.customQueryID, this.#currentJunction);
    whereExists = (relationship, cb)=>this.where(({ exists })=>exists(relationship, cb));
    related = (relationship, cb)=>{
        if (relationship.startsWith(SUBQ_PREFIX)) {
            throw new Error(`Relationship names may not start with "${SUBQ_PREFIX}". That is a reserved prefix.`);
        }
        cb = cb ?? ((q)=>q);
        const related = this.#schema.relationships[this.#tableName][relationship];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(related, "Invalid relationship");
        if (isOneHop(related)) {
            const { destSchema, destField, sourceField, cardinality } = related[0];
            let q = this[newQuerySymbol](this._delegate, this.#schema, destSchema, {
                table: destSchema,
                alias: relationship
            }, {
                relationships: {},
                singular: cardinality === "one"
            }, this.customQueryID, void 0);
            if (cardinality === "one") {
                q = q.one();
            }
            const sq = cb(q);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(sourceField), "The source of a relationship must specify at last 1 field");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(destField), "The destination of a relationship must specify at last 1 field");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(sourceField.length === destField.length, "The source and destination of a relationship must have the same number of fields");
            return this[newQuerySymbol](this._delegate, this.#schema, this.#tableName, {
                ...this._ast,
                related: [
                    ...this._ast.related ?? [],
                    {
                        system: this.#system,
                        correlation: {
                            parentField: sourceField,
                            childField: destField
                        },
                        subquery: addPrimaryKeysToAst(this.#schema.tables[destSchema], sq._ast)
                    }
                ]
            }, {
                ...this.format,
                relationships: {
                    ...this.format.relationships,
                    [relationship]: sq.format
                }
            }, this.customQueryID, this.#currentJunction);
        }
        if (isTwoHop(related)) {
            const [firstRelation, secondRelation] = related;
            const { destSchema } = secondRelation;
            const junctionSchema = firstRelation.destSchema;
            const sq = cb(this[newQuerySymbol](this._delegate, this.#schema, destSchema, {
                table: destSchema,
                alias: relationship
            }, {
                relationships: {},
                singular: secondRelation.cardinality === "one"
            }, this.customQueryID, relationship));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(firstRelation.sourceField), "Invalid relationship");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(firstRelation.destField), "Invalid relationship");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(secondRelation.sourceField), "Invalid relationship");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(secondRelation.destField), "Invalid relationship");
            return this[newQuerySymbol](this._delegate, this.#schema, this.#tableName, {
                ...this._ast,
                related: [
                    ...this._ast.related ?? [],
                    {
                        system: this.#system,
                        correlation: {
                            parentField: firstRelation.sourceField,
                            childField: firstRelation.destField
                        },
                        hidden: true,
                        subquery: {
                            table: junctionSchema,
                            alias: relationship,
                            orderBy: addPrimaryKeys(this.#schema.tables[junctionSchema], void 0),
                            related: [
                                {
                                    system: this.#system,
                                    correlation: {
                                        parentField: secondRelation.sourceField,
                                        childField: secondRelation.destField
                                    },
                                    subquery: addPrimaryKeysToAst(this.#schema.tables[destSchema], sq._ast)
                                }
                            ]
                        }
                    }
                ]
            }, {
                ...this.format,
                relationships: {
                    ...this.format.relationships,
                    [relationship]: sq.format
                }
            }, this.customQueryID, this.#currentJunction);
        }
        throw new Error(`Invalid relationship ${relationship}`);
    };
    where = (fieldOrExpressionFactory, opOrValue, value)=>{
        let cond;
        if (typeof fieldOrExpressionFactory === "function") {
            cond = fieldOrExpressionFactory(new ExpressionBuilder(this._exists));
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(opOrValue !== void 0, "Invalid condition");
            cond = cmp(fieldOrExpressionFactory, opOrValue, value);
        }
        const existingWhere = this._ast.where;
        if (existingWhere) {
            cond = and(existingWhere, cond);
        }
        const where = simplifyCondition(cond);
        if (this.#system === "client") {
            assertNoNotExists(where);
        }
        return this[newQuerySymbol](this._delegate, this.#schema, this.#tableName, {
            ...this._ast,
            where
        }, this.format, this.customQueryID, this.#currentJunction);
    };
    start = (row, opts)=>this[newQuerySymbol](this._delegate, this.#schema, this.#tableName, {
            ...this._ast,
            start: {
                row,
                exclusive: !opts?.inclusive
            }
        }, this.format, this.customQueryID, this.#currentJunction);
    limit = (limit)=>{
        if (limit < 0) {
            throw new Error("Limit must be non-negative");
        }
        if ((limit | 0) !== limit) {
            throw new Error("Limit must be an integer");
        }
        if (this.#currentJunction) {
            throw new NotImplementedError("Limit is not supported in junction relationships yet. Junction relationship being limited: " + this.#currentJunction);
        }
        return this[newQuerySymbol](this._delegate, this.#schema, this.#tableName, {
            ...this._ast,
            limit
        }, this.format, this.customQueryID, this.#currentJunction);
    };
    orderBy = (field, direction)=>{
        if (this.#currentJunction) {
            throw new NotImplementedError("Order by is not supported in junction relationships yet. Junction relationship being ordered: " + this.#currentJunction);
        }
        return this[newQuerySymbol](this._delegate, this.#schema, this.#tableName, {
            ...this._ast,
            orderBy: [
                ...this._ast.orderBy ?? [],
                [
                    field,
                    direction
                ]
            ]
        }, this.format, this.customQueryID, this.#currentJunction);
    };
    _exists = (relationship, cb = (q)=>q)=>{
        const related = this.#schema.relationships[this.#tableName][relationship];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(related, "Invalid relationship");
        if (isOneHop(related)) {
            const { destSchema, sourceField, destField } = related[0];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(sourceField), "Invalid relationship");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(destField), "Invalid relationship");
            const sq = cb(this[newQuerySymbol](this._delegate, this.#schema, destSchema, {
                table: destSchema,
                alias: `${SUBQ_PREFIX}${relationship}`
            }, defaultFormat, this.customQueryID, void 0));
            return {
                type: "correlatedSubquery",
                related: {
                    system: this.#system,
                    correlation: {
                        parentField: sourceField,
                        childField: destField
                    },
                    subquery: addPrimaryKeysToAst(this.#schema.tables[destSchema], sq._ast)
                },
                op: "EXISTS"
            };
        }
        if (isTwoHop(related)) {
            const [firstRelation, secondRelation] = related;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(firstRelation.sourceField), "Invalid relationship");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(firstRelation.destField), "Invalid relationship");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(secondRelation.sourceField), "Invalid relationship");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(secondRelation.destField), "Invalid relationship");
            const { destSchema } = secondRelation;
            const junctionSchema = firstRelation.destSchema;
            const queryToDest = cb(this[newQuerySymbol](this._delegate, this.#schema, destSchema, {
                table: destSchema,
                alias: `${SUBQ_PREFIX}zhidden_${relationship}`
            }, defaultFormat, this.customQueryID, relationship));
            return {
                type: "correlatedSubquery",
                related: {
                    system: this.#system,
                    correlation: {
                        parentField: firstRelation.sourceField,
                        childField: firstRelation.destField
                    },
                    subquery: {
                        table: junctionSchema,
                        alias: `${SUBQ_PREFIX}${relationship}`,
                        orderBy: addPrimaryKeys(this.#schema.tables[junctionSchema], void 0),
                        where: {
                            type: "correlatedSubquery",
                            related: {
                                system: this.#system,
                                correlation: {
                                    parentField: secondRelation.sourceField,
                                    childField: secondRelation.destField
                                },
                                subquery: addPrimaryKeysToAst(this.#schema.tables[destSchema], queryToDest._ast)
                            },
                            op: "EXISTS"
                        }
                    }
                },
                op: "EXISTS"
            };
        }
        throw new Error(`Invalid relationship ${relationship}`);
    };
    #completedAST;
    _completeAst() {
        if (!this.#completedAST) {
            const finalOrderBy = addPrimaryKeys(this.#schema.tables[this.#tableName], this._ast.orderBy);
            if (this._ast.start) {
                const { row } = this._ast.start;
                const narrowedRow = {};
                for (const [field] of finalOrderBy){
                    narrowedRow[field] = row[field];
                }
                this.#completedAST = {
                    ...this._ast,
                    start: {
                        ...this._ast.start,
                        row: narrowedRow
                    },
                    orderBy: finalOrderBy
                };
            } else {
                this.#completedAST = {
                    ...this._ast,
                    orderBy: addPrimaryKeys(this.#schema.tables[this.#tableName], this._ast.orderBy)
                };
            }
        }
        return this.#completedAST;
    }
    then(onFulfilled, onRejected) {
        return this.run().then(onFulfilled, onRejected);
    }
};
var completedAstSymbol = Symbol();
var QueryImpl = class _QueryImpl extends AbstractQuery {
    #system;
    constructor(delegate, schema, tableName, ast = {
        table: tableName
    }, format = defaultFormat, system = "client", customQueryID, currentJunction){
        super(delegate, schema, tableName, ast, format, system, customQueryID, currentJunction);
        this.#system = system;
    }
    get [completedAstSymbol]() {
        return this._completeAst();
    }
    [newQuerySymbol](delegate, schema, tableName, ast, format, customQueryID, currentJunction) {
        return new _QueryImpl(delegate, schema, tableName, ast, format, this.#system, customQueryID, currentJunction);
    }
    materialize(factoryOrTTL, ttl = DEFAULT_TTL_MS) {
        const delegate = must(this._delegate, "materialize requires a query delegate to be set");
        let factory;
        if (typeof factoryOrTTL === "function") {
            factory = factoryOrTTL;
        } else {
            ttl = factoryOrTTL ?? DEFAULT_TTL_MS;
        }
        const ast = this._completeAst();
        const queryID = this.customQueryID ? hashOfNameAndArgs(this.customQueryID.name, this.customQueryID.args) : this.hash();
        const queryCompleteResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        let queryComplete = delegate.defaultQueryComplete;
        const updateTTL = (newTTL)=>{
            this.customQueryID ? delegate.updateCustomQuery(this.customQueryID, newTTL) : delegate.updateServerQuery(ast, newTTL);
        };
        const gotCallback = (got)=>{
            if (got) {
                delegate.addMetric("query-materialization-end-to-end", performance.now() - t0, queryID, ast);
                queryComplete = true;
                queryCompleteResolver.resolve(true);
            }
        };
        let removeCommitObserver;
        const onDestroy = ()=>{
            input.destroy();
            removeCommitObserver?.();
            removeAddedQuery();
        };
        const t0 = performance.now();
        const removeAddedQuery = this.customQueryID ? delegate.addCustomQuery(ast, this.customQueryID, ttl, gotCallback) : delegate.addServerQuery(ast, ttl, gotCallback);
        const input = buildPipeline(ast, delegate, queryID);
        const view = delegate.batchViewUpdates(()=>(factory ?? arrayViewFactory)(this, input, this.format, onDestroy, (cb)=>{
                removeCommitObserver = delegate.onTransactionCommit(cb);
            }, queryComplete || queryCompleteResolver.promise, updateTTL));
        delegate.addMetric("query-materialization-client", performance.now() - t0, queryID);
        return view;
    }
    run(options) {
        const delegate = must(this._delegate, "run requires a query delegate to be set");
        delegate.assertValidRunOptions(options);
        const v2 = this.materialize(options?.ttl);
        if (options?.type === "complete") {
            return new Promise((resolve)=>{
                v2.addListener((data, type)=>{
                    if (type === "complete") {
                        v2.destroy();
                        resolve(data);
                    }
                });
            });
        }
        options?.type;
        const ret = v2.data;
        v2.destroy();
        return Promise.resolve(ret);
    }
    preload(options) {
        const delegate = must(this._delegate, "preload requires a query delegate to be set");
        const ttl = options?.ttl ?? DEFAULT_PRELOAD_TTL_MS;
        const ast = this._completeAst();
        const { resolve, promise: complete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        if (this.customQueryID) {
            const cleanup2 = delegate.addCustomQuery(ast, this.customQueryID, ttl, (got)=>{
                if (got) {
                    resolve();
                }
            });
            return {
                cleanup: cleanup2,
                complete
            };
        }
        const cleanup = delegate.addServerQuery(ast, ttl, (got)=>{
            if (got) {
                resolve();
            }
        });
        return {
            cleanup,
            complete
        };
    }
};
function addPrimaryKeys(schema, orderBy) {
    orderBy = orderBy ?? [];
    const { primaryKey } = schema;
    const primaryKeysToAdd = new Set(primaryKey);
    for (const [field] of orderBy){
        primaryKeysToAdd.delete(field);
    }
    if (primaryKeysToAdd.size === 0) {
        return orderBy;
    }
    return [
        ...orderBy,
        ...[
            ...primaryKeysToAdd
        ].map((key)=>[
                key,
                "asc"
            ])
    ];
}
function addPrimaryKeysToAst(schema, ast) {
    return {
        ...ast,
        orderBy: addPrimaryKeys(schema, ast.orderBy)
    };
}
function arrayViewFactory(_query, input, format, onDestroy, onTransactionCommit, queryComplete, updateTTL) {
    const v2 = new ArrayView(input, format, queryComplete, updateTTL);
    v2.onDestroy = onDestroy;
    onTransactionCommit(()=>{
        v2.flush();
    });
    return v2;
}
function isCompoundKey(field) {
    return Array.isArray(field) && field.length >= 1;
}
;
 //# sourceMappingURL=chunk-G442PJSB.js.map
}),
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-6USDOK3X.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IDBNotFoundError",
    ()=>IDBNotFoundError,
    "TransactionClosedError",
    ()=>TransactionClosedError,
    "Zero",
    ()=>Zero,
    "boolean",
    ()=>boolean,
    "clientToServer",
    ()=>clientToServer,
    "createSchema",
    ()=>createSchema,
    "dropAllDatabases",
    ()=>dropAllDatabases,
    "dropDatabase",
    ()=>dropDatabase,
    "enumeration",
    ()=>enumeration,
    "error_kind_enum_exports",
    ()=>error_kind_enum_exports,
    "getDefaultPuller",
    ()=>getDefaultPuller,
    "json",
    ()=>json,
    "makeIDBName",
    ()=>makeIDBName,
    "number",
    ()=>number2,
    "string",
    ()=>string3,
    "table",
    ()=>table,
    "transformRequestMessageSchema",
    ()=>transformRequestMessageSchema,
    "transformResponseMessageSchema",
    ()=>transformResponseMessageSchema,
    "update_needed_reason_type_enum_exports",
    ()=>update_needed_reason_type_enum_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-MKB4RXL3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-G442PJSB.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-424PT5DM.js [app-ssr] (ecmascript)");
// ../replicache/src/kv/idb-store.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+resolver@1.0.2/node_modules/@rocicorp/resolver/out/resolver.js [app-ssr] (ecmascript)");
// ../replicache/src/kv/mem-store.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$lock$40$1$2e$0$2e$4$2f$node_modules$2f40$rocicorp$2f$lock$2f$out$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+lock@1.0.4/node_modules/@rocicorp/lock/out/lock.js [app-ssr] (ecmascript)");
// ../replicache/src/log-options.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$logger$40$5$2e$4$2e$0$2f$node_modules$2f40$rocicorp$2f$logger$2f$out$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+logger@5.4.0/node_modules/@rocicorp/logger/out/logger.js [app-ssr] (ecmascript)");
// ../replicache/src/transactions.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/compare-utf8@0.1.1/node_modules/compare-utf8/src/index.js [app-ssr] (ecmascript)");
;
;
;
;
// ../replicache/src/call-default-fetch.ts
async function callDefaultFetch(url, auth, requestID, requestBody) {
    const init = {
        headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Content-type": "application/json",
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Authorization": auth,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "X-Replicache-RequestID": requestID
        },
        body: JSON.stringify(requestBody),
        method: "POST"
    };
    const request = new Request(url, init);
    const response = await fetch(request);
    const httpStatusCode = response.status;
    if (httpStatusCode !== 200) {
        return [
            void 0,
            {
                httpStatusCode,
                errorMessage: await response.text()
            }
        ];
    }
    return [
        response,
        {
            httpStatusCode,
            errorMessage: ""
        }
    ];
}
// ../replicache/src/error-responses.ts
function isError(obj, type) {
    return typeof obj === "object" && obj !== null && obj.error === type;
}
function isErrorResponse(obj) {
    return typeof obj.error === "string";
}
function isClientStateNotFoundResponse(v) {
    return isError(v, "ClientStateNotFound");
}
function isVersionNotSupportedResponse(v) {
    if (!isError(v, "VersionNotSupported")) {
        return false;
    }
    const { versionType } = v;
    switch(versionType){
        case void 0:
        case "pull":
        case "push":
        case "schema":
            return true;
    }
    return false;
}
function assertVersionNotSupportedResponse(v) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isVersionNotSupportedResponse(v));
}
// ../replicache/src/http-request-info.ts
function assertHTTPRequestInfo(v) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(v);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(v.httpStatusCode);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(v.errorMessage);
}
// ../replicache/src/patch-operation.ts
function assertPatchOperations(p) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertArray"])(p);
    for (const item of p){
        assertPatchOperation(item);
    }
}
function assertPatchOperation(p) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(p);
    switch(p.op){
        case "put":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(p.key);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertJSONValue"])(p.value);
            break;
        case "update":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(p.key);
            if (p.merge !== void 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertJSONObject"])(p.merge);
            }
            if (p.constrain !== void 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertArray"])(p.constrain);
                for (const key of p.constrain){
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(key);
                }
            }
            break;
        case "del":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(p.key);
            break;
        case "clear":
            break;
        default:
            throw new Error(`unknown patch op \`${p.op}\`, expected one of \`put\`, \`del\`, \`clear\``);
    }
}
// ../replicache/src/get-default-puller.ts
function getDefaultPuller(rep) {
    async function puller(requestBody, requestID) {
        const [response, httpRequestInfo] = await callDefaultFetch(rep.pullURL, rep.auth, requestID, requestBody);
        if (!response) {
            return {
                httpRequestInfo
            };
        }
        return {
            response: await response.json(),
            httpRequestInfo
        };
    }
    defaultPullers.add(puller);
    return puller;
}
var defaultPullers = /* @__PURE__ */ new WeakSet();
function isDefaultPuller(puller) {
    return defaultPullers.has(puller);
}
function assertPullResponseV1(v) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(v);
    if (isClientStateNotFoundResponse(v) || isVersionNotSupportedResponse(v)) {
        return;
    }
    const v2 = v;
    if (v2.cookie !== void 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertCookie"])(v2.cookie);
    }
    assertLastMutationIDChanges(v2.lastMutationIDChanges);
    assertPatchOperations(v2.patch);
}
function assertLastMutationIDChanges(lastMutationIDChanges) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(lastMutationIDChanges);
    for (const [key, value] of Object.entries(lastMutationIDChanges)){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(key);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(value);
    }
}
function assertPullerResultV1(v) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(v);
    assertHTTPRequestInfo(v.httpRequestInfo);
    if (v.response !== void 0) {
        assertPullResponseV1(v.response);
    }
}
;
// ../shared/src/browser-env.ts
var overrides = /* @__PURE__ */ new Map();
function getBrowserGlobal(name) {
    if (overrides.has(name)) {
        return overrides.get(name);
    }
    return globalThis[name];
}
function getBrowserGlobalMethod(name) {
    return getBrowserGlobal(name)?.bind(globalThis);
}
function mustGetBrowserGlobal(name) {
    const r = getBrowserGlobal(name);
    if (r === void 0) {
        throw new Error(`Unsupported JavaScript environment: Could not find ${name}.`);
    }
    return r;
}
// ../replicache/src/kv/write-impl-base.ts
var deleteSentinel = Symbol();
var WriteImplBase = class {
    _pending = /* @__PURE__ */ new Map();
    #read;
    constructor(read){
        this.#read = read;
    }
    has(key) {
        switch(this._pending.get(key)){
            case void 0:
                return this.#read.has(key);
            case deleteSentinel:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseFalse"];
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseTrue"];
        }
    }
    async get(key) {
        const v = this._pending.get(key);
        switch(v){
            case deleteSentinel:
                return void 0;
            case void 0:
                {
                    const v2 = await this.#read.get(key);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreezeAllowUndefined"])(v2);
                }
            default:
                return v;
        }
    }
    put(key, value) {
        this._pending.set(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(value));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
    }
    del(key) {
        this._pending.set(key, deleteSentinel);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
    }
    release() {
        this.#read.release();
    }
    get closed() {
        return this.#read.closed;
    }
};
// ../replicache/src/kv/idb-store.ts
var RELAXED = {
    durability: "relaxed"
};
var OBJECT_STORE = "chunks";
var IDBStore = class {
    #db;
    #closed = false;
    #idbDeleted = false;
    constructor(name){
        this.#db = openDatabase(name);
    }
    read() {
        return this.#withReopen(readImpl);
    }
    write() {
        return this.#withReopen(writeImpl);
    }
    async close() {
        if (!this.#idbDeleted) {
            const db = await this.#db;
            db.close();
        }
        this.#closed = true;
    }
    get closed() {
        return this.#closed;
    }
    async #withReopen(fn) {
        const reopenExistingDB = async (name)=>{
            const { promise, resolve, reject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
            const req = indexedDB.open(name);
            req.onupgradeneeded = ()=>{
                const tx = req.transaction;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNotNull"])(tx);
                tx.abort();
                this.#idbDeleted = true;
                reject(new IDBNotFoundError(`Expected IndexedDB not found: ${name}. This likely means that the user deleted IndexedDB instances while the app was running. This is non-fatal. The app will continue running in memory until reload.`));
            };
            req.onsuccess = ()=>resolve(req.result);
            req.onerror = ()=>reject(req.error);
            const db2 = await promise;
            db2.onversionchange = ()=>db2.close();
            return db2;
        };
        const db = await this.#db;
        try {
            return fn(db);
        } catch (e) {
            if (!this.#closed && e instanceof DOMException) {
                if (e.name === "InvalidStateError") {
                    this.#db = reopenExistingDB(db.name);
                    const reopened = await this.#db;
                    return fn(reopened);
                } else if (e.name === "NotFoundError") {
                    this.#idbDeleted = true;
                    mustGetBrowserGlobal("indexedDB").deleteDatabase(db.name);
                    throw new IDBNotFoundError(`Expected IndexedDB ${db.name} missing object store. Deleting db. This is non-fatal, the app will continue working in memory until it is reloaded.`);
                }
            }
            throw e;
        }
    }
};
var ReadImpl = class {
    #tx;
    #closed = false;
    constructor(tx){
        this.#tx = tx;
    }
    has(key) {
        return new Promise((resolve, reject)=>{
            const req = objectStore(this.#tx).count(key);
            req.onsuccess = ()=>resolve(req.result > 0);
            req.onerror = ()=>reject(req.error);
        });
    }
    get(key) {
        return new Promise((resolve, reject)=>{
            const req = objectStore(this.#tx).get(key);
            req.onsuccess = ()=>resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreezeAllowUndefined"])(req.result));
            req.onerror = ()=>reject(req.error);
        });
    }
    release() {
        this.#closed = true;
    }
    get closed() {
        return this.#closed;
    }
};
var WriteImpl = class extends WriteImplBase {
    #tx;
    #closed = false;
    constructor(tx){
        super(new ReadImpl(tx));
        this.#tx = tx;
    }
    commit() {
        if (this._pending.size === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
        }
        return new Promise((resolve, reject)=>{
            const tx = this.#tx;
            const store = objectStore(tx);
            for (const [key, val] of this._pending){
                if (val === deleteSentinel) {
                    store.delete(key);
                } else {
                    store.put(val, key);
                }
            }
            tx.oncomplete = ()=>resolve();
            tx.onerror = ()=>reject(tx.error);
        });
    }
    release() {
        this.#closed = true;
    }
    get closed() {
        return this.#closed;
    }
};
function writeImpl(db) {
    const tx = db.transaction(OBJECT_STORE, "readwrite", RELAXED);
    return new WriteImpl(tx);
}
function readImpl(db) {
    const tx = db.transaction(OBJECT_STORE, "readonly");
    return new ReadImpl(tx);
}
function objectStore(tx) {
    return tx.objectStore(OBJECT_STORE);
}
function openDatabase(name) {
    const idb = mustGetBrowserGlobal("indexedDB");
    return new Promise((resolve, reject)=>{
        const req = idb.open(name);
        req.onupgradeneeded = ()=>{
            req.result.createObjectStore(OBJECT_STORE);
        };
        req.onsuccess = ()=>{
            const db = req.result;
            db.onversionchange = ()=>db.close();
            resolve(db);
        };
        req.onerror = ()=>reject(req.error);
    });
}
var IDBNotFoundError = class extends Error {
    name = "IDBNotFoundError";
};
// ../replicache/src/make-idb-name.ts
function makeIDBName(name, schemaVersion) {
    return makeIDBNameInternal(name, schemaVersion, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"]);
}
function makeIDBNameInternal(name, schemaVersion, formatVersion) {
    const n = `rep:${name}:${formatVersion}`;
    return schemaVersion ? `${n}:${schemaVersion}` : n;
}
// ../shared/src/abort-error.ts
var AbortError = class extends Error {
    name = "AbortError";
};
;
var promiseVoid2 = Promise.resolve();
var promiseNever = new Promise(()=>void 0);
function sleep(ms, signal) {
    const newAbortError = ()=>new AbortError("Aborted");
    if (signal?.aborted) {
        return Promise.reject(newAbortError());
    }
    if (ms === 0) {
        return promiseVoid2;
    }
    return new Promise((resolve, reject)=>{
        let handleAbort;
        if (signal) {
            handleAbort = ()=>{
                clearTimeout(id);
                reject(newAbortError());
            };
            signal.addEventListener("abort", handleAbort, {
                once: true
            });
        }
        const id = setTimeout(()=>{
            resolve();
            signal?.removeEventListener("abort", handleAbort);
        }, ms);
    });
}
function sleepWithAbort(ms, signal) {
    if (ms === 0) {
        return [
            promiseVoid2,
            promiseNever
        ];
    }
    const { promise: abortedPromise, resolve: abortedResolve } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
    const sleepPromise = new Promise((resolve)=>{
        const handleAbort = ()=>{
            clearTimeout(id);
            abortedResolve();
        };
        const id = setTimeout(()=>{
            resolve();
            signal.removeEventListener("abort", handleAbort);
        }, ms);
        signal.addEventListener("abort", handleAbort, {
            once: true
        });
    });
    return [
        sleepPromise,
        abortedPromise
    ];
}
// ../replicache/src/bg-interval.ts
function initBgIntervalProcess(processName, process2, delayMs, lc, signal) {
    void runBgIntervalProcess(processName, process2, delayMs, lc, signal);
}
async function runBgIntervalProcess(processName, process2, delayMs, lc, signal) {
    if (signal.aborted) {
        return;
    }
    lc = lc.withContext("bgIntervalProcess", processName);
    lc.debug?.("Starting");
    while(!signal.aborted){
        try {
            await sleep(delayMs(), signal);
        } catch (e) {
            if (!(e instanceof AbortError)) {
                throw e;
            }
        }
        if (!signal.aborted) {
            lc.debug?.("Running");
            try {
                await process2();
            } catch (e) {
                if (signal.aborted) {
                    lc.debug?.("Error running most likely due to close.", e);
                } else {
                    lc.error?.("Error running.", e);
                }
            }
        }
    }
    lc.debug?.("Stopping");
}
// ../replicache/src/dag/gc.ts
function computeRefCountUpdates(headChanges, putChunks, delegate) {
    return new RefCountUpdates(headChanges, putChunks, delegate).compute();
}
var RefCountUpdates = class {
    #newHeads;
    #oldHeads;
    #putChunks;
    #delegate;
    #refsCounted;
    #refCountUpdates;
    #loadedRefCountPromises;
    #isLazyDelegate;
    constructor(headChanges, putChunks, delegate){
        const newHeads = [];
        const oldHeads = [];
        for (const changedHead of headChanges){
            if (changedHead.old !== changedHead.new) {
                changedHead.old && oldHeads.push(changedHead.old);
                changedHead.new && newHeads.push(changedHead.new);
            }
        }
        this.#newHeads = newHeads;
        this.#oldHeads = oldHeads;
        this.#putChunks = putChunks;
        this.#delegate = delegate;
        this.#refCountUpdates = /* @__PURE__ */ new Map();
        this.#loadedRefCountPromises = /* @__PURE__ */ new Map();
        this.#isLazyDelegate = delegate.areRefsCounted !== void 0;
        this.#refsCounted = this.#isLazyDelegate ? /* @__PURE__ */ new Set() : null;
    }
    async compute() {
        for (const n of this.#newHeads){
            await this.#changeRefCount(n, 1);
        }
        await Promise.all(Array.from(this.#putChunks.values(), (hash)=>this.#ensureRefCountLoaded(hash)));
        if (this.#isLazyDelegate) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#delegate.areRefsCounted);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#refsCounted);
            let refCountsUpdated;
            do {
                refCountsUpdated = false;
                for (const hash of this.#putChunks.values()){
                    if (!this.#delegate.areRefsCounted(hash) && !this.#refsCounted.has(hash) && this.#refCountUpdates.get(hash) !== 0) {
                        await this.#updateRefsCounts(hash, 1);
                        refCountsUpdated = true;
                        break;
                    }
                }
            }while (refCountsUpdated)
        }
        for (const o of this.#oldHeads){
            await this.#changeRefCount(o, -1);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProd"]) {
            for (const [hash, update] of this.#refCountUpdates){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(update >= 0, `ref count update must be non-negative. ${hash}:${update}`);
            }
        }
        return this.#refCountUpdates;
    }
    async #changeRefCount(hash, delta) {
        await this.#ensureRefCountLoaded(hash);
        if (this.#updateRefCount(hash, delta)) {
            await this.#updateRefsCounts(hash, delta);
        }
    }
    async #updateRefsCounts(hash, delta) {
        if (hash === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyHash"]) {
            return;
        }
        const refs = await this.#delegate.getRefs(hash);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProd"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(refs || this.#isLazyDelegate && !this.#putChunks.has(hash), "refs must be defined");
        }
        if (refs !== void 0) {
            this.#refsCounted?.add(hash);
            const ps = refs.map((ref)=>this.#changeRefCount(ref, delta));
            await Promise.all(ps);
        }
    }
    #ensureRefCountLoaded(hash) {
        let p = this.#loadedRefCountPromises.get(hash);
        if (p === void 0) {
            p = (async ()=>{
                const value = await this.#delegate.getRefCount(hash) || 0;
                this.#refCountUpdates.set(hash, value);
                return value;
            })();
            this.#loadedRefCountPromises.set(hash, p);
        }
        return p;
    }
    #updateRefCount(hash, delta) {
        const oldCount = this.#refCountUpdates.get(hash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(oldCount);
        this.#refCountUpdates.set(hash, oldCount + delta);
        return oldCount === 0 && delta === 1 || oldCount === 1 && delta === -1;
    }
};
// ../replicache/src/dag/key.ts
function chunkDataKey(hash) {
    return `c/${hash}/d`;
}
function chunkMetaKey(hash) {
    return `c/${hash}/m`;
}
function chunkRefCountKey(hash) {
    return `c/${hash}/r`;
}
function headKey(name) {
    return `h/${name}`;
}
// ../replicache/src/dag/store-impl.ts
var StoreImpl = class {
    #kv;
    #chunkHasher;
    #assertValidHash;
    constructor(kv, chunkHasher, assertValidHash){
        this.#kv = kv;
        this.#chunkHasher = chunkHasher;
        this.#assertValidHash = assertValidHash;
    }
    async read() {
        return new ReadImpl2(await this.#kv.read(), this.#assertValidHash);
    }
    async write() {
        return new WriteImpl2(await this.#kv.write(), this.#chunkHasher, this.#assertValidHash);
    }
    close() {
        return this.#kv.close();
    }
};
var ReadImpl2 = class {
    _tx;
    assertValidHash;
    constructor(kv, assertValidHash){
        this._tx = kv;
        this.assertValidHash = assertValidHash;
    }
    hasChunk(hash) {
        return this._tx.has(chunkDataKey(hash));
    }
    async getChunk(hash) {
        const data = await this._tx.get(chunkDataKey(hash));
        if (data === void 0) {
            return void 0;
        }
        const refsVal = await this._tx.get(chunkMetaKey(hash));
        let refs;
        if (refsVal !== void 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertRefs"])(refsVal);
            refs = refsVal;
        } else {
            refs = [];
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chunk"](hash, data, refs);
    }
    mustGetChunk(hash) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mustGetChunk"])(this, hash);
    }
    async getHead(name) {
        const data = await this._tx.get(headKey(name));
        if (data === void 0) {
            return void 0;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertHash"])(data);
        return data;
    }
    release() {
        this._tx.release();
    }
    get closed() {
        return this._tx.closed;
    }
};
var WriteImpl2 = class extends ReadImpl2 {
    #chunkHasher;
    #putChunks = /* @__PURE__ */ new Set();
    #changedHeads = /* @__PURE__ */ new Map();
    constructor(kvw, chunkHasher, assertValidHash){
        super(kvw, assertValidHash);
        this.#chunkHasher = chunkHasher;
    }
    createChunk = (data, refs)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChunk"])(data, refs, this.#chunkHasher);
    get kvWrite() {
        return this._tx;
    }
    async putChunk(c) {
        const { hash, data, meta } = c;
        this.assertValidHash(hash);
        const key = chunkDataKey(hash);
        const p1 = this._tx.put(key, data);
        let p2;
        if (meta.length > 0) {
            for (const h of meta){
                this.assertValidHash(h);
            }
            p2 = this._tx.put(chunkMetaKey(hash), meta);
        }
        this.#putChunks.add(hash);
        await p1;
        await p2;
    }
    setHead(name, hash) {
        return this.#setHead(name, hash);
    }
    removeHead(name) {
        return this.#setHead(name, void 0);
    }
    async #setHead(name, hash) {
        const oldHash = await this.getHead(name);
        const hk = headKey(name);
        let p1;
        if (hash === void 0) {
            p1 = this._tx.del(hk);
        } else {
            p1 = this._tx.put(hk, hash);
        }
        const v = this.#changedHeads.get(name);
        if (v === void 0) {
            this.#changedHeads.set(name, {
                new: hash,
                old: oldHash
            });
        } else {
            v.new = hash;
        }
        await p1;
    }
    async commit() {
        const refCountUpdates = await computeRefCountUpdates(this.#changedHeads.values(), this.#putChunks, this);
        await this.#applyRefCountUpdates(refCountUpdates);
        await this._tx.commit();
    }
    async getRefCount(hash) {
        const value = await this._tx.get(chunkRefCountKey(hash));
        if (value === void 0) {
            return void 0;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(value);
        if (value < 0 || value > 65535 || value !== (value | 0)) {
            throw new Error(`Invalid ref count ${value}. We expect the value to be a Uint16`);
        }
        return value;
    }
    async getRefs(hash) {
        const meta = await this._tx.get(chunkMetaKey(hash));
        if (meta === void 0) {
            return [];
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertRefs"])(meta);
        return meta;
    }
    async #applyRefCountUpdates(refCountCache) {
        const ps = [];
        for (const [hash, count] of refCountCache){
            if (count === 0) {
                ps.push(this.#removeAllRelatedKeys(hash));
            } else {
                const refCountKey = chunkRefCountKey(hash);
                ps.push(this._tx.put(refCountKey, count));
            }
        }
        await Promise.all(ps);
    }
    async #removeAllRelatedKeys(hash) {
        await Promise.all([
            this._tx.del(chunkDataKey(hash)),
            this._tx.del(chunkMetaKey(hash)),
            this._tx.del(chunkRefCountKey(hash))
        ]);
        this.#putChunks.delete(hash);
    }
    release() {
        this._tx.release();
    }
};
// ../replicache/src/deleted-clients.ts
var DELETED_CLIENTS_HEAD_NAME = "deleted-clients";
var deletedClientsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readonlyObject"])({
    clientIDs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readonlyArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()),
    clientGroupIDs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readonlyArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string())
});
var legacyDeletedClientsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readonlyArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string());
async function setDeletedClients(dagWrite, clientIDs, clientGroupIDs) {
    const data = {
        clientIDs: normalize(clientIDs),
        clientGroupIDs: normalize(clientGroupIDs)
    };
    const chunkData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(data);
    const chunk = dagWrite.createChunk(chunkData, []);
    await dagWrite.putChunk(chunk);
    await dagWrite.setHead(DELETED_CLIENTS_HEAD_NAME, chunk.hash);
    return data;
}
async function getDeletedClients(dagRead) {
    const hash = await dagRead.getHead(DELETED_CLIENTS_HEAD_NAME);
    if (hash === void 0) {
        return {
            clientIDs: [],
            clientGroupIDs: []
        };
    }
    const chunk = await dagRead.mustGetChunk(hash);
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["test"])(chunk.data, legacyDeletedClientsSchema);
    if (res.ok) {
        return {
            clientIDs: res.value,
            clientGroupIDs: []
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(chunk.data, deletedClientsSchema);
}
async function addDeletedClients(dagWrite, clientIDs, clientGroupIDs) {
    const { clientIDs: oldClientIDs, clientGroupIDs: oldClientGroupIDs } = await getDeletedClients(dagWrite);
    return setDeletedClients(dagWrite, [
        ...oldClientIDs,
        ...clientIDs
    ], [
        ...oldClientGroupIDs,
        ...clientGroupIDs
    ]);
}
async function removeDeletedClients(dagWrite, clientIDs, clientGroupIDs) {
    const { clientIDs: oldClientIDs, clientGroupIDs: oldClientGroupIDs } = await getDeletedClients(dagWrite);
    const newDeletedClients = oldClientIDs.filter((clientID)=>!clientIDs.includes(clientID));
    const newDeletedClientGroups = oldClientGroupIDs.filter((clientGroupID)=>!clientGroupIDs.includes(clientGroupID));
    return setDeletedClients(dagWrite, newDeletedClients, newDeletedClientGroups);
}
function normalize(arr) {
    return [
        ...new Set(arr)
    ].sort();
}
// ../shared/src/navigator.ts
var localNavigator = typeof navigator !== "undefined" ? navigator : void 0;
;
// ../replicache/src/kv/read-impl.ts
var ReadImpl3 = class {
    #map;
    #release;
    #closed = false;
    constructor(map, release){
        this.#map = map;
        this.#release = release;
    }
    release() {
        this.#release();
        this.#closed = true;
    }
    get closed() {
        return this.#closed;
    }
    has(key) {
        return Promise.resolve(this.#map.has(key));
    }
    get(key) {
        return Promise.resolve(this.#map.get(key));
    }
};
// ../replicache/src/kv/write-impl.ts
var WriteImpl3 = class extends WriteImplBase {
    #map;
    constructor(map, release){
        super(new ReadImpl3(map, release));
        this.#map = map;
    }
    commit() {
        this._pending.forEach((value, key)=>{
            if (value === deleteSentinel) {
                this.#map.delete(key);
            } else {
                this.#map.set(key, value);
            }
        });
        this._pending.clear();
        this.release();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
    }
};
// ../replicache/src/kv/mem-store.ts
var stores = /* @__PURE__ */ new Map();
function dropMemStore(name) {
    stores.delete(name);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
}
var MemStore = class {
    #map;
    #rwLock;
    #closed = false;
    constructor(name){
        const entry = stores.get(name);
        let lock;
        let map;
        if (entry) {
            ({ lock, map } = entry);
        } else {
            lock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$lock$40$1$2e$0$2e$4$2f$node_modules$2f40$rocicorp$2f$lock$2f$out$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RWLock"]();
            map = /* @__PURE__ */ new Map();
            stores.set(name, {
                lock,
                map
            });
        }
        this.#rwLock = lock;
        this.#map = map;
    }
    async read() {
        const release = await this.#rwLock.read();
        return new ReadImpl3(this.#map, release);
    }
    async write() {
        const release = await this.#rwLock.write();
        return new WriteImpl3(this.#map, release);
    }
    close() {
        this.#closed = true;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
    }
    get closed() {
        return this.#closed;
    }
};
// ../replicache/src/kv/idb-store-with-mem-fallback.ts
var IDBStoreWithMemFallback = class {
    #lc;
    #name;
    #store;
    constructor(lc, name){
        this.#lc = lc;
        this.#name = name;
        this.#store = new IDBStore(name);
    }
    read() {
        return this.#withBrainTransplant((s)=>s.read());
    }
    write() {
        return this.#withBrainTransplant((s)=>s.write());
    }
    async #withBrainTransplant(f) {
        try {
            return await f(this.#store);
        } catch (e) {
            if (isFirefoxPrivateBrowsingError(e)) {
                if (this.#store instanceof IDBStore) {
                    this.#lc.info?.("Switching to MemStore because of Firefox private browsing error");
                    this.#store = new MemStore(this.#name);
                }
                return f(this.#store);
            }
            throw e;
        }
    }
    close() {
        return this.#store.close();
    }
    get closed() {
        return this.#store.closed;
    }
};
function isFirefoxPrivateBrowsingError(e) {
    return isFirefox() && e instanceof DOMException && e.name === "InvalidStateError" && e.message === "A mutation operation was attempted on a database that did not allow mutations.";
}
function isFirefox() {
    return localNavigator?.userAgent?.includes("Firefox") ?? false;
}
function newIDBStoreWithMemFallback(lc, name) {
    if (isFirefox()) {
        return new IDBStoreWithMemFallback(lc, name);
    }
    return new IDBStore(name);
}
function dropIDBStoreWithMemFallback(name) {
    if (!isFirefox()) {
        return dropIDBStore(name);
    }
    try {
        return dropIDBStore(name);
    } catch (e) {
        if (isFirefoxPrivateBrowsingError(e)) {
            return dropMemStore(name);
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
}
function dropIDBStore(name) {
    return new Promise((resolve, reject)=>{
        const req = indexedDB.deleteDatabase(name);
        req.onsuccess = ()=>resolve();
        req.onerror = ()=>reject(req.error);
    });
}
// ../replicache/src/get-kv-store-provider.ts
function getKVStoreProvider(lc, kvStore) {
    switch(kvStore){
        case "idb":
        case void 0:
            return {
                create: (name)=>newIDBStoreWithMemFallback(lc, name),
                drop: dropIDBStoreWithMemFallback
            };
        case "mem":
            return {
                create: (name)=>new MemStore(name),
                drop: (name)=>dropMemStore(name)
            };
        default:
            return kvStore;
    }
}
;
function createLogContext(logLevel = "info", logSinks = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$logger$40$5$2e$4$2e$0$2f$node_modules$2f40$rocicorp$2f$logger$2f$out$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consoleLogSink"]
], context) {
    const logSink = logSinks.length === 1 ? logSinks[0] : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$logger$40$5$2e$4$2e$0$2f$node_modules$2f40$rocicorp$2f$logger$2f$out$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TeeLogSink"](logSinks);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$logger$40$5$2e$4$2e$0$2f$node_modules$2f40$rocicorp$2f$logger$2f$out$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogContext"](logLevel, context, logSink);
}
// ../replicache/src/persist/idb-databases-store-db-name.ts
var IDB_DATABASES_VERSION = 0;
var IDB_DATABASES_DB_NAME = "replicache-dbs-v" + IDB_DATABASES_VERSION;
var testNamespace = "";
function getIDBDatabasesDBName() {
    return testNamespace + IDB_DATABASES_DB_NAME;
}
// ../replicache/src/persist/idb-databases-store.ts
var DBS_KEY = "dbs";
var PROFILE_ID_KEY = "profileId";
function assertIndexedDBDatabaseRecord(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(value);
    for (const [name, db] of Object.entries(value)){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(name);
        assertIndexedDBDatabase(db);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(name === db.name);
    }
}
function assertIndexedDBDatabase(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(value.name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(value.replicacheName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(value.replicacheFormatVersion);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(value.schemaVersion);
    if (value.lastOpenedTimestampMS !== void 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNumber"])(value.lastOpenedTimestampMS);
    }
}
var IDBDatabasesStore = class {
    #kvStore;
    constructor(createKVStore){
        this.#kvStore = createKVStore(getIDBDatabasesDBName());
    }
    putDatabase(db) {
        return this.#putDatabase({
            ...db,
            lastOpenedTimestampMS: Date.now()
        });
    }
    putDatabaseForTesting(db) {
        return this.#putDatabase(db);
    }
    #putDatabase(db) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(this.#kvStore, async (write)=>{
            const oldDbRecord = await getDatabases(write);
            const dbRecord = {
                ...oldDbRecord,
                [db.name]: db
            };
            await write.put(DBS_KEY, dbRecord);
            return dbRecord;
        });
    }
    clearDatabases() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(this.#kvStore, (write)=>write.del(DBS_KEY));
    }
    deleteDatabases(names) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(this.#kvStore, async (write)=>{
            const oldDbRecord = await getDatabases(write);
            const dbRecord = {
                ...oldDbRecord
            };
            for (const name of names){
                delete dbRecord[name];
            }
            await write.put(DBS_KEY, dbRecord);
        });
    }
    getDatabases() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(this.#kvStore, getDatabases);
    }
    close() {
        return this.#kvStore.close();
    }
    getProfileID() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(this.#kvStore, async (write)=>{
            let profileId = await write.get(PROFILE_ID_KEY);
            if (profileId === void 0) {
                profileId = `p${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeClientID"])()}`;
                await write.put(PROFILE_ID_KEY, profileId);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(profileId);
            return profileId;
        });
    }
};
async function getDatabases(read) {
    let dbRecord = await read.get(DBS_KEY);
    if (!dbRecord) {
        dbRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])({});
    }
    assertIndexedDBDatabaseRecord(dbRecord);
    return dbRecord;
}
// ../replicache/src/persist/collect-idb-databases.ts
var COLLECT_IDB_INTERVAL = 12 * 60 * 60 * 1e3;
var INITIAL_COLLECT_IDB_DELAY = 5 * 60 * 1e3;
function initCollectIDBDatabases(idbDatabasesStore, kvDropStore, collectInterval, initialCollectDelay, maxAge, enableMutationRecovery, onClientsDeleted, lc, signal) {
    let initial = true;
    initBgIntervalProcess("CollectIDBDatabases", async ()=>{
        await collectIDBDatabases(idbDatabasesStore, Date.now(), maxAge, kvDropStore, enableMutationRecovery, onClientsDeleted);
    }, ()=>{
        if (initial) {
            initial = false;
            return initialCollectDelay;
        }
        return collectInterval;
    }, lc, signal);
}
async function collectIDBDatabases(idbDatabasesStore, now, maxAge, kvDropStore, enableMutationRecovery, onClientsDeleted, newDagStore = defaultNewDagStore) {
    const databases = await idbDatabasesStore.getDatabases();
    const dbs = Object.values(databases);
    const collectResults = await Promise.all(dbs.map(async (db)=>[
            db.name,
            await gatherDatabaseInfoForCollect(db, now, maxAge, enableMutationRecovery, newDagStore)
        ]));
    const dbNamesToRemove = [];
    const dbNamesToKeep = [];
    const clientIDsToRemove = [];
    const clientGroupIDsToRemove = [];
    for (const [dbName, [canCollect, clientIDs, clientGroupIDs]] of collectResults){
        if (canCollect) {
            dbNamesToRemove.push(dbName);
            clientIDsToRemove.push(...clientIDs);
            clientGroupIDsToRemove.push(...clientGroupIDs);
        } else {
            dbNamesToKeep.push(dbName);
        }
    }
    const { errors } = await dropDatabases(idbDatabasesStore, dbNamesToRemove, kvDropStore);
    if (errors.length) {
        throw errors[0];
    }
    if (clientIDsToRemove.length || clientGroupIDsToRemove.length) {
        const newClientIDsToRemove = clientIDsToRemove;
        const newClientGroupIDsToRemove = clientGroupIDsToRemove;
        for (const name of dbNamesToKeep){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(newDagStore(name), async (dagWrite)=>{
                const { clientIDs, clientGroupIDs } = await addDeletedClients(dagWrite, clientIDsToRemove, clientGroupIDsToRemove);
                newClientIDsToRemove.push(...clientIDs);
                newClientGroupIDsToRemove.push(...clientGroupIDs);
            });
        }
        onClientsDeleted(normalize(newClientIDsToRemove), normalize(newClientGroupIDsToRemove));
    }
}
async function dropDatabaseInternal(name, idbDatabasesStore, kvDropStore) {
    await kvDropStore(name);
    await idbDatabasesStore.deleteDatabases([
        name
    ]);
}
async function dropDatabases(idbDatabasesStore, namesToRemove, kvDropStore) {
    const dropStoreResults = await Promise.allSettled(namesToRemove.map(async (name)=>{
        await dropDatabaseInternal(name, idbDatabasesStore, kvDropStore);
        return name;
    }));
    const dropped = [];
    const errors = [];
    for (const result of dropStoreResults){
        if (result.status === "fulfilled") {
            dropped.push(result.value);
        } else {
            errors.push(result.reason);
        }
    }
    return {
        dropped,
        errors
    };
}
function defaultNewDagStore(name) {
    const perKvStore = new IDBStore(name);
    return new StoreImpl(perKvStore, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newRandomHash"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertHash"]);
}
function gatherDatabaseInfoForCollect(db, now, maxAge, enableMutationRecovery, newDagStore) {
    if (db.replicacheFormatVersion > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"]) {
        return [
            false
        ];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(db.lastOpenedTimestampMS !== void 0);
    if (now - db.lastOpenedTimestampMS < maxAge) {
        return [
            false
        ];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(db.replicacheFormatVersion === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DD31"] || db.replicacheFormatVersion === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["V6"] || db.replicacheFormatVersion === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["V7"]);
    return canDatabaseBeCollectedAndGetDeletedClientIDs(enableMutationRecovery, newDagStore(db.name));
}
async function dropDatabase(dbName, opts) {
    const logContext = createLogContext(opts?.logLevel, opts?.logSinks, {
        dropDatabase: void 0
    });
    const kvStoreProvider = getKVStoreProvider(logContext, opts?.kvStore);
    await dropDatabaseInternal(dbName, new IDBDatabasesStore(kvStoreProvider.create), kvStoreProvider.drop);
}
async function dropAllDatabases(opts) {
    const logContext = createLogContext(opts?.logLevel, opts?.logSinks, {
        dropAllDatabases: void 0
    });
    const kvStoreProvider = getKVStoreProvider(logContext, opts?.kvStore);
    const store = new IDBDatabasesStore(kvStoreProvider.create);
    const databases = await store.getDatabases();
    const dbNames = Object.values(databases).map((db)=>db.name);
    const result = await dropDatabases(store, dbNames, kvStoreProvider.drop);
    return result;
}
function canDatabaseBeCollectedAndGetDeletedClientIDs(enableMutationRecovery, perdag) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(perdag, async (read)=>{
        if (enableMutationRecovery) {
            const clientGroups = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientGroups"])(read);
            for (const clientGroup of clientGroups.values()){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientGroupHasPendingMutations"])(clientGroup)) {
                    return [
                        false
                    ];
                }
            }
        }
        const clients = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClients"])(read);
        const { clientIDs, clientGroupIDs } = await getDeletedClients(read);
        const newClientIDs = [
            ...clientIDs
        ];
        const newClientGroupIDs = [
            ...clientGroupIDs
        ];
        for (const [clientID, client] of clients){
            newClientIDs.push(clientID);
            newClientGroupIDs.push(client.clientGroupID);
        }
        return [
            true,
            newClientIDs,
            newClientGroupIDs
        ];
    });
}
// ../replicache/src/transaction-closed-error.ts
var TransactionClosedError = class extends Error {
    constructor(){
        super("Transaction is closed");
    }
};
function throwIfClosed(tx) {
    if (tx.closed) {
        throw new TransactionClosedError();
    }
}
function rejectIfClosed(tx) {
    return tx.closed ? Promise.reject(new TransactionClosedError()) : void 0;
}
// ../zero-protocol/src/custom-queries.ts
var transformRequestBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    args: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readonly"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonSchema"]))
}));
var transformedQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    ast: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["astSchema"]
});
var appQueryErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("app"),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonSchema"]
});
var zeroErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("zero"),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonSchema"]
});
var httpQueryErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("http"),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number(),
    details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonSchema"]
});
var erroredQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(appQueryErrorSchema, httpQueryErrorSchema, zeroErrorSchema);
var transformResponseBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(transformedQuerySchema, erroredQuerySchema));
var transformRequestMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("transform"),
    transformRequestBodySchema
]);
var transformErrorMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("transformError"),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(erroredQuerySchema)
]);
var transformResponseMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("transformed"),
    transformResponseBodySchema
]);
// ../zero-protocol/src/error-kind-enum.ts
var error_kind_enum_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__export"])(error_kind_enum_exports, {
    AuthInvalidated: ()=>AuthInvalidated,
    ClientNotFound: ()=>ClientNotFound,
    Internal: ()=>Internal,
    InvalidConnectionRequest: ()=>InvalidConnectionRequest,
    InvalidConnectionRequestBaseCookie: ()=>InvalidConnectionRequestBaseCookie,
    InvalidConnectionRequestClientDeleted: ()=>InvalidConnectionRequestClientDeleted,
    InvalidConnectionRequestLastMutationID: ()=>InvalidConnectionRequestLastMutationID,
    InvalidMessage: ()=>InvalidMessage,
    InvalidPush: ()=>InvalidPush,
    MutationFailed: ()=>MutationFailed,
    MutationRateLimited: ()=>MutationRateLimited,
    Rebalance: ()=>Rebalance,
    Rehome: ()=>Rehome,
    SchemaVersionNotSupported: ()=>SchemaVersionNotSupported,
    ServerOverloaded: ()=>ServerOverloaded,
    Unauthorized: ()=>Unauthorized,
    VersionNotSupported: ()=>VersionNotSupported
});
var AuthInvalidated = "AuthInvalidated";
var ClientNotFound = "ClientNotFound";
var InvalidConnectionRequest = "InvalidConnectionRequest";
var InvalidConnectionRequestBaseCookie = "InvalidConnectionRequestBaseCookie";
var InvalidConnectionRequestLastMutationID = "InvalidConnectionRequestLastMutationID";
var InvalidConnectionRequestClientDeleted = "InvalidConnectionRequestClientDeleted";
var InvalidMessage = "InvalidMessage";
var InvalidPush = "InvalidPush";
var MutationFailed = "MutationFailed";
var MutationRateLimited = "MutationRateLimited";
var Rebalance = "Rebalance";
var Rehome = "Rehome";
var Unauthorized = "Unauthorized";
var VersionNotSupported = "VersionNotSupported";
var SchemaVersionNotSupported = "SchemaVersionNotSupported";
var ServerOverloaded = "ServerOverloaded";
var Internal = "Internal";
// ../zero-schema/src/builder/table-builder.ts
function table(name) {
    return new TableBuilder({
        name,
        columns: {},
        primaryKey: []
    });
}
function string3() {
    return new ColumnBuilder({
        type: "string",
        optional: false,
        customType: null
    });
}
function number2() {
    return new ColumnBuilder({
        type: "number",
        optional: false,
        customType: null
    });
}
function boolean() {
    return new ColumnBuilder({
        type: "boolean",
        optional: false,
        customType: null
    });
}
function json() {
    return new ColumnBuilder({
        type: "json",
        optional: false,
        customType: null
    });
}
function enumeration() {
    return new ColumnBuilder({
        type: "string",
        optional: false,
        customType: null
    });
}
var TableBuilder = class _TableBuilder {
    #schema;
    constructor(schema){
        this.#schema = schema;
    }
    from(serverName) {
        return new _TableBuilder({
            ...this.#schema,
            // Strip the "public." schema if specified, as tables in the upstream
            // "public" schema are created without the schema prefix on the replica.
            // See liteTableName() in zero-cache/src/types/names.ts
            serverName: serverName.startsWith("public.") ? serverName.substring("public.".length) : serverName
        });
    }
    columns(columns) {
        const columnSchemas = Object.fromEntries(Object.entries(columns).map(([k, v])=>[
                k,
                v.schema
            ]));
        return new TableBuilderWithColumns({
            ...this.#schema,
            columns: columnSchemas
        });
    }
};
var TableBuilderWithColumns = class _TableBuilderWithColumns {
    #schema;
    constructor(schema){
        this.#schema = schema;
    }
    primaryKey(...pkColumnNames) {
        return new _TableBuilderWithColumns({
            ...this.#schema,
            primaryKey: pkColumnNames
        });
    }
    get schema() {
        return this.#schema;
    }
    build() {
        if (this.#schema.primaryKey.length === 0) {
            throw new Error(`Table "${this.#schema.name}" is missing a primary key`);
        }
        const names = /* @__PURE__ */ new Set();
        for (const [col, { serverName }] of Object.entries(this.#schema.columns)){
            const name = serverName ?? col;
            if (names.has(name)) {
                throw new Error(`Table "${this.#schema.name}" has multiple columns referencing "${name}"`);
            }
            names.add(name);
        }
        return this.#schema;
    }
};
var ColumnBuilder = class _ColumnBuilder {
    #schema;
    constructor(schema){
        this.#schema = schema;
    }
    from(serverName) {
        return new _ColumnBuilder({
            ...this.#schema,
            serverName
        });
    }
    optional() {
        return new _ColumnBuilder({
            ...this.#schema,
            optional: true
        });
    }
    get schema() {
        return this.#schema;
    }
};
// ../zero-protocol/src/client-schema.ts
var valueTypeSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["literalUnion"])("string", "number", "boolean", "null", "json");
var columnSchemaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    type: valueTypeSchema
});
var tableSchemaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].record(columnSchemaSchema)
});
var clientSchemaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    tables: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].record(tableSchemaSchema)
});
var keyCmp = ([a], [b])=>a < b ? -1 : a > b ? 1 : 0;
function normalizeClientSchema(schema) {
    return {
        tables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapAllEntries"])(schema.tables, (tables)=>tables.sort(keyCmp).map(([name, table2])=>[
                    name,
                    {
                        columns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapAllEntries"])(table2.columns, (e)=>e.sort(keyCmp))
                    }
                ]))
    };
}
// ../zero-schema/src/builder/schema-builder.ts
function createSchema(options) {
    const retTables = {};
    const retRelationships = {};
    const serverNames = /* @__PURE__ */ new Set();
    options.tables.forEach((table2)=>{
        const { serverName = table2.schema.name } = table2.schema;
        if (serverNames.has(serverName)) {
            throw new Error(`Multiple tables reference the name "${serverName}"`);
        }
        serverNames.add(serverName);
        if (retTables[table2.schema.name]) {
            throw new Error(`Table "${table2.schema.name}" is defined more than once in the schema`);
        }
        retTables[table2.schema.name] = table2.build();
    });
    options.relationships?.forEach((relationships)=>{
        if (retRelationships[relationships.name]) {
            throw new Error(`Relationships for table "${relationships.name}" are defined more than once in the schema`);
        }
        retRelationships[relationships.name] = relationships.relationships;
        checkRelationship(relationships.relationships, relationships.name, retTables);
    });
    return {
        tables: retTables,
        relationships: retRelationships,
        enableLegacyQueries: options.enableLegacyQueries,
        enableLegacyMutators: options.enableLegacyMutators
    };
}
function checkRelationship(relationships, tableName, tables) {
    Object.entries(relationships).forEach(([name, rel])=>{
        let source = tables[tableName];
        if (source.columns[name] !== void 0) {
            throw new Error(`Relationship "${tableName}"."${name}" cannot have the same name as the column "${name}" on the the table "${source.name}"`);
        }
        rel.forEach((connection)=>{
            if (!tables[connection.destSchema]) {
                throw new Error(`For relationship "${tableName}"."${name}", destination table "${connection.destSchema}" is missing in the schema`);
            }
            if (!source.columns[connection.sourceField[0]]) {
                throw new Error(`For relationship "${tableName}"."${name}", the source field "${connection.sourceField[0]}" is missing in the table schema "${source.name}"`);
            }
            source = tables[connection.destSchema];
        });
    });
}
function clientSchemaFrom(schema) {
    const client = {
        tables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapEntries"])(schema.tables, (name, { serverName, columns })=>[
                serverName ?? name,
                {
                    columns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapEntries"])(columns, (name2, { serverName: serverName2, type })=>[
                            serverName2 ?? name2,
                            {
                                type
                            }
                        ])
                }
            ])
    };
    const clientSchema = normalizeClientSchema(client);
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h64"])(JSON.stringify(clientSchema)).toString(36);
    return {
        clientSchema,
        hash
    };
}
// ../zero-client/src/client/update-needed-reason-type-enum.ts
var update_needed_reason_type_enum_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__export"])(update_needed_reason_type_enum_exports, {
    NewClientGroup: ()=>NewClientGroup,
    SchemaVersionNotSupported: ()=>SchemaVersionNotSupported2,
    VersionNotSupported: ()=>VersionNotSupported2
});
var NewClientGroup = "NewClientGroup";
var VersionNotSupported2 = "VersionNotSupported";
var SchemaVersionNotSupported2 = "SchemaVersionNotSupported";
;
;
;
;
;
;
function getDocumentVisibilityWatcher(doc, hiddenIntervalMS, signal) {
    return doc ? new DocumentVisibilityWatcherImpl(doc, hiddenIntervalMS, signal) : new DocumentVisibilityWatcherNoDoc();
}
var DocumentVisibilityWatcherImpl = class {
    #doc;
    #hiddenIntervalMS;
    #timeoutID = 0;
    // This trails doc.visibilityState by hiddenIntervalMS when being hidden. This
    // is because we want to wait for the tab to be hidden for a while before
    // considering as hidden.
    visibilityState;
    #promises = /* @__PURE__ */ new Set();
    constructor(doc, hiddenIntervalMS, signal){
        this.#doc = doc;
        this.#hiddenIntervalMS = hiddenIntervalMS;
        this.visibilityState = doc.visibilityState;
        this.#doc.addEventListener("visibilitychange", this.#onVisibilityChange, {
            signal
        });
    }
    #onVisibilityChange = ()=>{
        if (this.#doc.visibilityState === "visible") {
            clearTimeout(this.#timeoutID);
            this.#setVisibilityState("visible");
        } else {
            this.#timeoutID = setTimeout(()=>{
                this.#setVisibilityState("hidden");
            }, this.#hiddenIntervalMS);
        }
    };
    #setVisibilityState(visibilityState) {
        if (visibilityState === this.visibilityState) {
            return;
        }
        this.visibilityState = visibilityState;
        for (const entry of this.#promises){
            const { resolve, state } = entry;
            if (state === visibilityState) {
                resolve();
                this.#promises.delete(entry);
            }
        }
    }
    waitForVisible() {
        return this.#waitFor("visible");
    }
    waitForHidden() {
        return this.#waitFor("hidden");
    }
    #waitFor(state) {
        if (this.visibilityState === state) {
            return Promise.resolve();
        }
        const { promise, resolve } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        this.#promises.add({
            resolve,
            state
        });
        return promise;
    }
};
var resolvedPromise = Promise.resolve();
var promiseThatNeverResolves = new Promise(()=>void 0);
var DocumentVisibilityWatcherNoDoc = class {
    visibilityState = "visible";
    waitForVisible() {
        return resolvedPromise;
    }
    waitForHidden() {
        return promiseThatNeverResolves;
    }
};
// ../replicache/src/connection-loop-delegates.ts
var ConnectionLoopDelegateImpl = class {
    rep;
    invokeSend;
    // TODO: Remove the ability to have more than one concurrent connection and update tests.
    // Bug: https://github.com/rocicorp/replicache-internal/issues/303
    maxConnections = 1;
    constructor(rep, invokeSend){
        this.rep = rep;
        this.invokeSend = invokeSend;
    }
    get maxDelayMs() {
        return this.rep.requestOptions.maxDelayMs;
    }
    get minDelayMs() {
        return this.rep.requestOptions.minDelayMs;
    }
};
var PullDelegate = class extends ConnectionLoopDelegateImpl {
    debounceDelay = 0;
    get watchdogTimer() {
        return this.rep.pullInterval;
    }
};
var PushDelegate = class extends ConnectionLoopDelegateImpl {
    get debounceDelay() {
        return this.rep.pushDelay;
    }
    watchdogTimer = null;
};
;
var MIN_DELAY_MS = 30;
var MAX_DELAY_MS = 6e4;
var ConnectionLoop = class {
    // ConnectionLoop runs a loop sending network requests (either pushes or
    // pulls) to the server. Our goal, generally, is to send requests as fast as
    // we can, but to adjust in case of slowness, network errors, etc. We will
    // send requests in parallel if the server supports it. We also debounce
    // pushes since they frequently happen in series very near to one another
    // (e.g., during drag'n drops).
    //
    // The loop flows through the following states forever, until it is closed:
    //
    // Pending: Wait for event or watchdog
    //          |
    //          v
    // Debounce: Wait for more events (we debounce pushes)
    //          |
    //          v
    // Wait for available connection (we limit number of parallel requests
    // allowed)
    //          |
    //          v
    // Wait to send (if requests are taking too long, we will slow down)
    //          |
    //          v
    // Send (asynchronously, wrt the loop)
    //          |
    //          v
    // Back to the pending!
    // Controls whether the next iteration of the loop will wait at the pending
    // state.
    #pendingResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
    /**
   * This resolver is used to allow us to skip sleeps when we do send(true)
   */ #skipSleepsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
    /**
   * Resolver for the next send. Never rejects. Returns an error instead since
   * this resolver is used in cases where they might not be someone waiting,
   * and we don't want an unhandled promise rejection in that case.
   */ #sendResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
    #delegate;
    #closed = false;
    /**
   * Number of pending send calls.
   *
   * We keep track of this because if close happens while we are waiting for the
   * send to resolve we should reject the send promise.
   */ #sendCounter = 0;
    #lc;
    #visibilityWatcher;
    constructor(lc, delegate, visibilityWatcher){
        this.#lc = lc;
        this.#delegate = delegate;
        this.#visibilityWatcher = visibilityWatcher;
        void this.run();
    }
    close() {
        this.#closed = true;
        if (this.#sendCounter > 0) {
            this.#sendResolver.resolve({
                error: closeError()
            });
        }
    }
    /**
   *
   * @returns Returns undefined if ok, otherwise it return the error that caused
   * the send to fail.
   */ async send(now) {
        if (this.#closed) {
            return {
                error: closeError()
            };
        }
        this.#sendCounter++;
        this.#lc.debug?.("send", now);
        if (now) {
            this.#skipSleepsResolver.resolve();
        } else {
            await this.#visibilityWatcher?.waitForVisible();
        }
        this.#pendingResolver.resolve();
        const result = await this.#sendResolver.promise;
        this.#sendCounter--;
        return result;
    }
    async run() {
        const sendRecords = [];
        let recoverResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        let lastSendTime;
        let counter = 0;
        const delegate = this.#delegate;
        const { debug } = this.#lc;
        let delay = 0;
        debug?.("Starting connection loop");
        const sleepMaybeSkip = (ms)=>Promise.race([
                this.#skipSleepsResolver.promise,
                sleep(ms)
            ]);
        while(!this.#closed){
            debug?.(didLastSendRequestFail(sendRecords) ? "Last request failed. Trying again" : "Waiting for a send");
            const races = [
                this.#pendingResolver.promise
            ];
            const t2 = delegate.watchdogTimer;
            if (t2 !== null) {
                races.push(sleep(t2));
            }
            await Promise.race(races);
            if (this.#closed) break;
            debug?.("Waiting for debounce");
            await sleepMaybeSkip(delegate.debounceDelay);
            if (this.#closed) break;
            debug?.("debounced");
            this.#pendingResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
            if (counter >= delegate.maxConnections) {
                debug?.("Too many request in flight. Waiting until one finishes...");
                await this.#waitUntilAvailableConnection();
                if (this.#closed) break;
                debug?.("...finished");
            }
            if (counter > 0 || didLastSendRequestFail(sendRecords)) {
                delay = computeDelayAndUpdateDurations(delay, delegate, sendRecords);
                debug?.(didLastSendRequestFail(sendRecords) ? "Last connection errored. Sleeping for" : "More than one outstanding connection (" + counter + "). Sleeping for", delay, "ms");
            } else {
                delay = 0;
            }
            const clampedDelay = Math.min(delegate.maxDelayMs, Math.max(delegate.minDelayMs, delay));
            if (lastSendTime !== void 0) {
                const timeSinceLastSend = Date.now() - lastSendTime;
                if (clampedDelay > timeSinceLastSend) {
                    await Promise.race([
                        sleepMaybeSkip(clampedDelay - timeSinceLastSend),
                        recoverResolver.promise
                    ]);
                    if (this.#closed) break;
                }
            }
            counter++;
            (async ()=>{
                const start = Date.now();
                let ok;
                let error;
                try {
                    lastSendTime = start;
                    debug?.("Sending request");
                    this.#skipSleepsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
                    ok = await delegate.invokeSend();
                    debug?.("Send returned", ok);
                } catch (e) {
                    debug?.("Send failed", e);
                    error = e;
                    ok = false;
                }
                if (this.#closed) {
                    debug?.("Closed after invokeSend");
                    return;
                }
                debug?.("Request done", {
                    duration: Date.now() - start,
                    ok
                });
                sendRecords.push({
                    duration: Date.now() - start,
                    ok
                });
                if (recovered(sendRecords)) {
                    recoverResolver.resolve();
                    recoverResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
                }
                counter--;
                this.#connectionAvailable();
                const sendResolver = this.#sendResolver;
                this.#sendResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
                if (error) {
                    sendResolver.resolve({
                        error
                    });
                } else {
                    sendResolver.resolve(void 0);
                }
                if (!ok) {
                    this.#pendingResolver.resolve();
                }
            })();
        }
    }
    #waitingConnectionResolve = void 0;
    #connectionAvailable() {
        if (this.#waitingConnectionResolve) {
            const resolve = this.#waitingConnectionResolve;
            this.#waitingConnectionResolve = void 0;
            resolve();
        }
    }
    #waitUntilAvailableConnection() {
        const { promise, resolve } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        this.#waitingConnectionResolve = resolve;
        return promise;
    }
};
var CONNECTION_MEMORY_COUNT = 9;
function closeError() {
    return new Error("Closed");
}
function computeDelayAndUpdateDurations(delay, delegate, sendRecords) {
    const { length } = sendRecords;
    if (length === 0) {
        return delay;
    }
    const { ok } = sendRecords[sendRecords.length - 1];
    const { maxConnections, minDelayMs } = delegate;
    if (!ok) {
        return delay === 0 ? minDelayMs : delay * 2;
    }
    if (length > 1) {
        const previous = sendRecords[sendRecords.length - 2];
        while(sendRecords.length > CONNECTION_MEMORY_COUNT){
            sendRecords.shift();
        }
        if (ok && !previous.ok) {
            return minDelayMs;
        }
    }
    const med = median(sendRecords.filter(({ ok: ok2 })=>ok2).map(({ duration })=>duration));
    return med / maxConnections | 0;
}
function median(values) {
    values.sort();
    const { length } = values;
    const half = length >> 1;
    if (length % 2 === 1) {
        return values[half];
    }
    return (values[half - 1] + values[half]) / 2;
}
function didLastSendRequestFail(sendRecords) {
    return sendRecords.length > 0 && !sendRecords[sendRecords.length - 1].ok;
}
function recovered(sendRecords) {
    return sendRecords.length > 1 && !sendRecords[sendRecords.length - 2].ok && sendRecords[sendRecords.length - 1].ok;
}
;
var LazyStore = class {
    /**
   * This lock is used to ensure correct isolation of Reads and Writes.
   * Multiple Reads are allowed in parallel but only a single Write.  Reads and
   * Writes see an isolated view of the store (corresponding to the Serializable
   * level of transaction isolation defined in the SQL standard).
   *
   * To ensure these semantics the read lock must be acquired when a Read is
   * created and held til it is closed, and a Write lock must be acquired when a
   * Write is created and held til it is committed or closed.
   *
   * Code must have a read or write lock to
   * - read `_heads`
   * - read `_memOnlyChunks`
   * - read `_sourceStore`
   * - read and write `_sourceChunksCache`
   * - read and write `_refCounts`
   * - read and write `_refs`
   * and must have a write lock to
   * - write `_heads`
   * - write `_memOnlyChunks`
   */ #rwLock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$lock$40$1$2e$0$2e$4$2f$node_modules$2f40$rocicorp$2f$lock$2f$out$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RWLock"]();
    #heads = /* @__PURE__ */ new Map();
    #sourceStore;
    #chunkHasher;
    #assertValidHash;
    /** The following are protected so testing subclass can access. */ _memOnlyChunks = /* @__PURE__ */ new Map();
    _sourceChunksCache;
    /**
   * Ref counts are maintained so that chunks which are unreachable
   * from this stores heads can be eagerly and deterministically deleted from
   * `this._memOnlyChunks` and `this._sourceChunksCache`.
   *
   * These ref counts are independent from `this._sourceStore`'s ref counts.
   * These ref counts are based on reachability from `this._heads`.
   * A chunk is deleted from `this._memOnlyChunks` or
   * `this._sourceChunksCache` (which ever it is in) when its ref count becomes
   * zero.
   * These ref counts count the refs in `this._heads` and `this._refs`.
   *
   * Not all reachable chunk's refs are included in `this._refs`, because this
   * would require loading all chunks reachable in the source store in a
   * non-lazy manner. `this._refs` contains the refs of all currently reachable
   * chunks that were ever in `this._memOnlyChunks` or
   * `this._sourceChunksCache` (even if they have been evicted).  A
   * chunk's ref information is lazily discovered and stored in `this._refs` and
   * counted in `this._refCounts`. A chunk's entries in `this._refs` and
   * `this._refCounts` are only deleted when a chunk is deleted due to it
   * becoming unreachable (it is not deleted if the chunk is evicted from the
   * source-store cache).
   *
   * The major implication of this lazy discovery of source store refs, is that
   * a reachable source store chunk may not be cached when loaded, because it is
   * not known to be reachable because some of the pertinent refs have not been
   * discovered.  However, in practice chunks are read by traversing the graph
   * starting from a head, and all pertinent refs are discovered as part of the
   * traversal.
   *
   * These ref counts can be changed in two ways:
   * 1. A LazyRead has a cache miss and loads a chunk from the source store that
   * is reachable from this._heads.  If this chunk's refs are not currently
   * counted, it will not have an entry in `this._refs`.  In this case, the
   * chunks refs will be put in `this._refs` and `this._refCounts` will be
   * updated to count them.
   * 2. A LazyWrite commit updates a head (which can result in increasing or
   * decreasing ref count) or puts a reachable chunk (either a `memory-only` or
   * `source` chunk) that references this hash (increasing ref count).  The
   * computation of these ref count changes is delegated to the
   * `computeRefCountUpdates` shared with dag.StoreImpl.  In order to
   * delegate determining reachability to `computeRefCountUpdates` and defer
   * this determination until commit time, LazyWrite treats cache misses
   * as a 'put' of the lazily-loaded chunk.
   *
   * A chunk's hash may have an entry in `this._refCounts` without that
   * chunk have ever been in `this._memOnlyChunks` or `this._sourceChunksCache`.
   * This is the case when a head or a reachable chunk that was ever in
   * `this._memOnlyChunks` or `this._sourceChunksCache` references a chunk
   * which is not currently cached (either because it has not been read, or
   * because it has been evicted).
   */ _refCounts = /* @__PURE__ */ new Map();
    _refs = /* @__PURE__ */ new Map();
    constructor(sourceStore, sourceCacheSizeLimit, chunkHasher, assertValidHash, getSizeOfChunk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSizeOfValue"]){
        this._sourceChunksCache = new ChunksCache(sourceCacheSizeLimit, getSizeOfChunk, this._refCounts, this._refs);
        this.#sourceStore = sourceStore;
        this.#chunkHasher = chunkHasher;
        this.#assertValidHash = assertValidHash;
    }
    async read(sourceRead) {
        const release = await this.#rwLock.read();
        return new LazyRead(this.#heads, this._memOnlyChunks, this._sourceChunksCache, this.#sourceStore, release, this.#assertValidHash, sourceRead);
    }
    async write() {
        const release = await this.#rwLock.write();
        return new LazyWrite(this.#heads, this._memOnlyChunks, this._sourceChunksCache, this.#sourceStore, this._refCounts, this._refs, release, this.#chunkHasher, this.#assertValidHash);
    }
    close() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
    }
    /**
   * Does not acquire any lock on the store.
   */ isCached(chunkHash) {
        return this._sourceChunksCache.getWithoutUpdatingLRU(chunkHash) !== void 0;
    }
    withSuspendedSourceCacheEvictsAndDeletes(fn) {
        return this._sourceChunksCache.withSuspendedEvictsAndDeletes(fn);
    }
};
var LazyRead = class {
    _heads;
    _memOnlyChunks;
    _sourceChunksCache;
    _sourceStore;
    #sourceRead = void 0;
    #release;
    #closed = false;
    assertValidHash;
    #sourceReadOwnedByCaller;
    constructor(heads, memOnlyChunks, sourceChunksCache, sourceStore, release, assertValidHash, sourceRead){
        this._heads = heads;
        this._memOnlyChunks = memOnlyChunks;
        this._sourceChunksCache = sourceChunksCache;
        this._sourceStore = sourceStore;
        this.#release = release;
        this.assertValidHash = assertValidHash;
        this.#sourceRead = sourceRead !== void 0 ? Promise.resolve(sourceRead) : void 0;
        this.#sourceReadOwnedByCaller = sourceRead !== void 0;
    }
    isMemOnlyChunkHash(hash) {
        return this._memOnlyChunks.has(hash);
    }
    async hasChunk(hash) {
        return await this.getChunk(hash) !== void 0;
    }
    async getChunk(hash) {
        const memOnlyChunk = this._memOnlyChunks.get(hash);
        if (memOnlyChunk !== void 0) {
            return memOnlyChunk;
        }
        let chunk = this._sourceChunksCache.get(hash);
        if (chunk === void 0) {
            chunk = await (await this._getSourceRead()).getChunk(hash);
            if (chunk !== void 0) {
                this._sourceChunksCache.put(chunk);
            }
        }
        return chunk;
    }
    mustGetChunk(hash) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mustGetChunk"])(this, hash);
    }
    getHead(name) {
        return Promise.resolve(this._heads.get(name));
    }
    release() {
        if (!this.#closed) {
            this.#release();
            if (!this.#sourceReadOwnedByCaller) {
                this.#sourceRead?.then((read)=>read.release()).catch((_)=>{});
            }
            this.#closed = true;
        }
    }
    get closed() {
        return this.#closed;
    }
    _getSourceRead() {
        if (!this.#sourceRead) {
            this.#sourceRead = this._sourceStore.read();
        }
        return this.#sourceRead;
    }
};
var LazyWrite = class extends LazyRead {
    #refCounts;
    #refs;
    #chunkHasher;
    _pendingHeadChanges = /* @__PURE__ */ new Map();
    _pendingMemOnlyChunks = /* @__PURE__ */ new Map();
    _pendingCachedChunks = /* @__PURE__ */ new Map();
    #createdChunks = /* @__PURE__ */ new Set();
    constructor(heads, memOnlyChunks, sourceChunksCache, sourceStore, refCounts, refs, release, chunkHasher, assertValidHash){
        super(heads, memOnlyChunks, sourceChunksCache, sourceStore, release, assertValidHash);
        this.#refCounts = refCounts;
        this.#refs = refs;
        this.#chunkHasher = chunkHasher;
    }
    createChunk = (data, refs)=>{
        const chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChunk"])(data, refs, this.#chunkHasher);
        this.#createdChunks.add(chunk.hash);
        return chunk;
    };
    putChunk(c, size) {
        const { hash, meta } = c;
        this.assertValidHash(hash);
        if (meta.length > 0) {
            for (const h of meta){
                this.assertValidHash(h);
            }
        }
        if (this.#createdChunks.has(hash) || this.isMemOnlyChunkHash(hash)) {
            this._pendingMemOnlyChunks.set(hash, c);
        } else {
            this._pendingCachedChunks.set(hash, {
                chunk: c,
                size: size ?? -1
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
    }
    async setHead(name, hash) {
        await this.#setHead(name, hash);
    }
    async removeHead(name) {
        await this.#setHead(name, void 0);
    }
    async #setHead(name, hash) {
        const oldHash = await this.getHead(name);
        const v = this._pendingHeadChanges.get(name);
        if (v === void 0) {
            this._pendingHeadChanges.set(name, {
                new: hash,
                old: oldHash
            });
        } else {
            v.new = hash;
        }
    }
    isMemOnlyChunkHash(hash) {
        return this._pendingMemOnlyChunks.has(hash) || super.isMemOnlyChunkHash(hash);
    }
    async getChunk(hash) {
        const pendingMemOnlyChunk = this._pendingMemOnlyChunks.get(hash);
        if (pendingMemOnlyChunk !== void 0) {
            return pendingMemOnlyChunk;
        }
        const memOnlyChunk = this._memOnlyChunks.get(hash);
        if (memOnlyChunk !== void 0) {
            return memOnlyChunk;
        }
        const pendingCachedChunk = this._pendingCachedChunks.get(hash);
        if (pendingCachedChunk !== void 0) {
            return pendingCachedChunk.chunk;
        }
        let chunk = this._sourceChunksCache.get(hash);
        if (chunk === void 0) {
            chunk = await (await this._getSourceRead()).getChunk(hash);
            if (chunk !== void 0) {
                this._pendingCachedChunks.set(chunk.hash, {
                    chunk,
                    size: -1
                });
            }
        }
        return chunk;
    }
    getHead(name) {
        const headChange = this._pendingHeadChanges.get(name);
        if (headChange) {
            return Promise.resolve(headChange.new);
        }
        return super.getHead(name);
    }
    async commit() {
        const pendingChunks = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["joinIterables"])(this._pendingMemOnlyChunks.keys(), this._pendingCachedChunks.keys()));
        const refCountUpdates = await computeRefCountUpdates(this._pendingHeadChanges.values(), pendingChunks, this);
        for (const [hash, count] of refCountUpdates){
            if (this.isMemOnlyChunkHash(hash)) {
                if (count === 0) {
                    this.#refCounts.delete(hash);
                    this._memOnlyChunks.delete(hash);
                    this.#refs.delete(hash);
                } else {
                    this.#refCounts.set(hash, count);
                    const chunk = this._pendingMemOnlyChunks.get(hash);
                    if (chunk) {
                        this.#refs.set(hash, chunk.meta);
                        this._memOnlyChunks.set(hash, chunk);
                    }
                }
                refCountUpdates.delete(hash);
            }
        }
        this._sourceChunksCache.updateForCommit(this._pendingCachedChunks, refCountUpdates);
        for (const [name, headChange] of this._pendingHeadChanges){
            if (headChange.new) {
                this._heads.set(name, headChange.new);
            } else {
                this._heads.delete(name);
            }
        }
        this._pendingMemOnlyChunks.clear();
        this._pendingCachedChunks.clear();
        this._pendingHeadChanges.clear();
        this.release();
    }
    getRefCount(hash) {
        return this.#refCounts.get(hash);
    }
    getRefs(hash) {
        const pendingMemOnlyChunk = this._pendingMemOnlyChunks.get(hash);
        if (pendingMemOnlyChunk) {
            return pendingMemOnlyChunk.meta;
        }
        const memOnlyChunk = this._memOnlyChunks.get(hash);
        if (memOnlyChunk) {
            return memOnlyChunk.meta;
        }
        const pendingCachedChunk = this._pendingCachedChunks.get(hash);
        if (pendingCachedChunk !== void 0) {
            return pendingCachedChunk.chunk.meta;
        }
        return this.#refs.get(hash);
    }
    areRefsCounted(hash) {
        return this.#refs.has(hash);
    }
    chunksPersisted(chunkHashes) {
        const chunksToCache = [];
        for (const chunkHash of chunkHashes){
            const chunk = this._memOnlyChunks.get(chunkHash);
            if (chunk) {
                this._memOnlyChunks.delete(chunkHash);
                chunksToCache.push(chunk);
            }
        }
        this._sourceChunksCache.persisted(chunksToCache);
    }
};
var ChunksCache = class {
    #cacheSizeLimit;
    #getSizeOfChunk;
    #refCounts;
    #refs;
    #size = 0;
    #evictsAndDeletesSuspended = false;
    #suspendedDeletes = [];
    /**
   * Iteration order is from least to most recently used.
   *
   * Public so that testing subclass can access.
   */ cacheEntries = /* @__PURE__ */ new Map();
    constructor(cacheSizeLimit, getSizeOfChunk, refCounts, refs){
        this.#cacheSizeLimit = cacheSizeLimit;
        this.#getSizeOfChunk = getSizeOfChunk;
        this.#refCounts = refCounts;
        this.#refs = refs;
    }
    get(hash) {
        const cacheEntry = this.cacheEntries.get(hash);
        if (cacheEntry) {
            this.cacheEntries.delete(hash);
            this.cacheEntries.set(hash, cacheEntry);
        }
        return cacheEntry?.chunk;
    }
    getWithoutUpdatingLRU(hash) {
        return this.cacheEntries.get(hash)?.chunk;
    }
    put(chunk) {
        const { hash } = chunk;
        const oldCacheEntry = this.cacheEntries.get(hash);
        if (oldCacheEntry) {
            this.cacheEntries.delete(hash);
            this.cacheEntries.set(hash, oldCacheEntry);
            return;
        }
        const refCount = this.#refCounts.get(hash);
        if (refCount === void 0 || refCount < 1) {
            return;
        }
        if (!this.#cacheChunk(chunk)) {
            return;
        }
        if (!this.#refs.has(hash)) {
            for (const refHash of chunk.meta){
                this.#refCounts.set(refHash, (this.#refCounts.get(refHash) || 0) + 1);
            }
            this.#refs.set(hash, chunk.meta);
        }
        this.#ensureCacheSizeLimit();
    }
    #ensureCacheSizeLimit() {
        if (this.#evictsAndDeletesSuspended) {
            return;
        }
        for (const entry of this.cacheEntries.values()){
            if (this.#size <= this.#cacheSizeLimit) {
                break;
            }
            this.#evict(entry);
        }
    }
    #cacheChunk(chunk, size) {
        const chunkSize = size ?? this.#getSizeOfChunk(chunk);
        if (chunkSize > this.#cacheSizeLimit) {
            return false;
        }
        this.#size += chunkSize;
        this.cacheEntries.set(chunk.hash, {
            chunk,
            size: chunkSize
        });
        return true;
    }
    #evict(cacheEntry) {
        const { hash } = cacheEntry.chunk;
        this.#size -= cacheEntry.size;
        this.cacheEntries.delete(hash);
    }
    #deleteEntryByHash(hash) {
        this.#refCounts.delete(hash);
        this.#refs.delete(hash);
        const cacheEntry = this.cacheEntries.get(hash);
        if (cacheEntry) {
            this.#size -= cacheEntry.size;
            this.cacheEntries.delete(hash);
        }
    }
    updateForCommit(chunksToPut, refCountUpdates) {
        for (const [hash, count] of refCountUpdates){
            if (count === 0) {
                if (!this.#evictsAndDeletesSuspended) {
                    this.#deleteEntryByHash(hash);
                } else {
                    this.#refCounts.set(hash, 0);
                    this.#suspendedDeletes.push(hash);
                }
            } else {
                this.#refCounts.set(hash, count);
                const chunkAndSize = chunksToPut.get(hash);
                if (chunkAndSize) {
                    const { chunk, size } = chunkAndSize;
                    const oldCacheEntry = this.cacheEntries.get(hash);
                    if (oldCacheEntry) {
                        this.cacheEntries.delete(hash);
                        this.cacheEntries.set(hash, oldCacheEntry);
                    } else {
                        this.#cacheChunk(chunk, size !== -1 ? size : void 0);
                        this.#refs.set(hash, chunk.meta);
                    }
                }
            }
        }
        this.#ensureCacheSizeLimit();
    }
    persisted(chunks) {
        for (const chunk of chunks){
            this.#cacheChunk(chunk);
        }
        this.#ensureCacheSizeLimit();
    }
    async withSuspendedEvictsAndDeletes(fn) {
        this.#evictsAndDeletesSuspended = true;
        try {
            return await fn();
        } finally{
            this.#evictsAndDeletesSuspended = false;
            for (const hash of this.#suspendedDeletes){
                if (this.#refCounts.get(hash) === 0) {
                    this.#deleteEntryByHash(hash);
                }
            }
            this.#ensureCacheSizeLimit();
        }
    }
};
;
;
// ../replicache/src/scan-options.ts
function isScanIndexOptions(options) {
    return options.indexName !== void 0;
}
function normalizeScanOptionIndexedStartKey(startKey) {
    if (typeof startKey === "string") {
        return [
            startKey
        ];
    }
    return startKey;
}
function toDbScanOptions(options) {
    if (!options) {
        return {};
    }
    let key;
    let exclusive;
    let primary;
    let secondary;
    if (options.start) {
        ({ key, exclusive } = options.start);
        if (options.indexName) {
            if (typeof key === "string") {
                secondary = key;
            } else {
                secondary = key[0];
                primary = key[1];
            }
        } else {
            primary = key;
        }
    }
    return {
        prefix: options.prefix,
        startSecondaryKey: secondary,
        startKey: primary,
        startExclusive: exclusive,
        limit: options.limit,
        indexName: options.indexName
    };
}
// ../replicache/src/scan-iterator.ts
var ScanResultImpl = class {
    #iter;
    #options;
    #dbDelegateOptions;
    #onLimitKey;
    constructor(iter, options, dbDelegateOptions, onLimitKey){
        this.#iter = iter;
        this.#options = options;
        this.#dbDelegateOptions = dbDelegateOptions;
        this.#onLimitKey = onLimitKey;
    }
    /** The default AsyncIterable. This is the same as {@link values}. */ [Symbol.asyncIterator]() {
        return this.values();
    }
    /** Async iterator over the values of the {@link ReadTransaction.scan | scan} call. */ values() {
        return new AsyncIterableIteratorToArrayWrapperImpl(this.#newIterator((e)=>e[1]));
    }
    /**
   * Async iterator over the keys of the {@link ReadTransaction.scan | scan}
   * call. If the {@link ReadTransaction.scan | scan} is over an index the key
   * is a tuple of `[secondaryKey: string, primaryKey]`
   */ keys() {
        return new AsyncIterableIteratorToArrayWrapperImpl(this.#newIterator((e)=>e[0]));
    }
    /**
   * Async iterator over the entries of the {@link ReadTransaction.scan | scan}
   * call. An entry is a tuple of key values. If the
   * {@link ReadTransaction.scan | scan} is over an index the key is a tuple of
   * `[secondaryKey: string, primaryKey]`
   */ entries() {
        return new AsyncIterableIteratorToArrayWrapperImpl(this.#newIterator((e)=>[
                e[0],
                e[1]
            ]));
    }
    /** Returns all the values as an array. Same as `values().toArray()` */ toArray() {
        return this.values().toArray();
    }
    #newIterator(toValue) {
        return scanIterator(toValue, this.#iter, this.#options, this.#dbDelegateOptions, this.#onLimitKey);
    }
};
var AsyncIterableIteratorToArrayWrapperImpl = class {
    #it;
    constructor(it){
        this.#it = it;
    }
    next() {
        return this.#it.next();
    }
    [Symbol.asyncIterator]() {
        return this.#it[Symbol.asyncIterator]();
    }
    toArray() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asyncIterableToArray"])(this.#it);
    }
};
async function* scanIterator(toValue, iter, options, closed, onLimitKey) {
    throwIfClosed(closed);
    let { limit = Infinity } = options;
    const { prefix = "" } = options;
    let exclusive = options.start?.exclusive;
    const isIndexScan = isScanIndexOptions(options);
    for await (const entry of iter){
        const key = entry[0];
        const keyToMatch = isIndexScan ? key[0] : key;
        if (!keyToMatch.startsWith(prefix)) {
            return;
        }
        if (exclusive) {
            exclusive = true;
            if (isIndexScan) {
                if (shouldSkipIndexScan(key, options.start.key)) {
                    continue;
                }
            } else {
                if (shouldSkipNonIndexScan(key, options.start.key)) {
                    continue;
                }
            }
        }
        yield toValue(entry);
        if (--limit === 0) {
            if (!isIndexScan) {
                onLimitKey(key);
            }
            return;
        }
    }
}
function shouldSkipIndexScan(key, startKey) {
    const [secondaryStartKey, primaryStartKey] = normalizeScanOptionIndexedStartKey(startKey);
    const [secondaryKey, primaryKey] = normalizeScanOptionIndexedStartKey(key);
    if (secondaryKey !== secondaryStartKey) {
        return false;
    }
    if (primaryStartKey === void 0) {
        return true;
    }
    return primaryKey === primaryStartKey;
}
function shouldSkipNonIndexScan(key, startKey) {
    return key === startKey;
}
function fromKeyForIndexScanInternal(options) {
    const { prefix, start } = options;
    let prefix2 = "";
    if (prefix !== void 0) {
        prefix2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeIndexScanKey"])(prefix, void 0);
    }
    if (!start) {
        return prefix2;
    }
    const { key } = start;
    const [secondary, primary] = normalizeScanOptionIndexedStartKey(key);
    const startKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeIndexScanKey"])(secondary, primary);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greaterThan"])(startKey, prefix2)) {
        return startKey;
    }
    return prefix2;
}
// ../replicache/src/transactions.ts
var transactionIDCounter = 0;
var ReadTransactionImpl = class {
    clientID;
    dbtx;
    _lc;
    /**
   * The location in which this transaction is being used. This is either `client` or `server`.
   */ location;
    /** @deprecated Use {@link ReadTransaction.location} instead. */ environment;
    constructor(clientID, dbRead, lc, rpcName = "openReadTransaction"){
        this.clientID = clientID;
        this.dbtx = dbRead;
        this._lc = lc.withContext(rpcName).withContext("txid", transactionIDCounter++);
        this.environment = "client";
        this.location = "client";
    }
    get(key) {
        return rejectIfClosed(this.dbtx) || this.dbtx.get(key);
    }
    // eslint-disable-next-line require-await
    async has(key) {
        throwIfClosed(this.dbtx);
        return this.dbtx.has(key);
    }
    // eslint-disable-next-line require-await
    async isEmpty() {
        throwIfClosed(this.dbtx);
        return this.dbtx.isEmpty();
    }
    scan(options) {
        return scan(options, this.dbtx, noop);
    }
};
function noop(_) {}
function scan(options, dbRead, onLimitKey) {
    const iter = getScanIterator(dbRead, options);
    return makeScanResultFromScanIteratorInternal(iter, options ?? {}, dbRead, onLimitKey);
}
var SubscriptionTransactionWrapper = class {
    #keys = /* @__PURE__ */ new Set();
    #scans = [];
    #tx;
    constructor(tx){
        this.#tx = tx;
    }
    get environment() {
        return this.#tx.location;
    }
    get location() {
        return this.#tx.location;
    }
    get clientID() {
        return this.#tx.clientID;
    }
    isEmpty() {
        this.#scans.push({
            options: {}
        });
        return this.#tx.isEmpty();
    }
    get(key) {
        this.#keys.add(key);
        return this.#tx.get(key);
    }
    has(key) {
        this.#keys.add(key);
        return this.#tx.has(key);
    }
    scan(options) {
        const scanInfo = {
            options: toDbScanOptions(options),
            inclusiveLimitKey: void 0
        };
        this.#scans.push(scanInfo);
        return scan(options, this.#tx.dbtx, (inclusiveLimitKey)=>{
            scanInfo.inclusiveLimitKey = inclusiveLimitKey;
        });
    }
    get keys() {
        return this.#keys;
    }
    get scans() {
        return this.#scans;
    }
};
var zeroData = Symbol();
var WriteTransactionImpl = class extends ReadTransactionImpl {
    reason;
    mutationID;
    [zeroData];
    constructor(clientID, mutationID, reason, zData, dbWrite, lc, rpcName = "openWriteTransaction"){
        super(clientID, dbWrite, lc, rpcName);
        this.mutationID = mutationID;
        this.reason = reason;
        this[zeroData] = zData;
    }
    put(key, value) {
        return this.set(key, value);
    }
    async set(key, value) {
        throwIfClosed(this.dbtx);
        await this.dbtx.put(this._lc, key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(value));
    }
    del(key) {
        return rejectIfClosed(this.dbtx) ?? this.dbtx.del(this._lc, key);
    }
};
function getScanIterator(dbRead, options) {
    if (options && isScanIndexOptions(options)) {
        return getScanIteratorForIndexMap(dbRead, options);
    }
    return dbRead.map.scan(fromKeyForNonIndexScan(options));
}
function fromKeyForNonIndexScan(options) {
    if (!options) {
        return "";
    }
    const { prefix = "", start } = options;
    if (start && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greaterThan"])(start.key, prefix)) {
        return start.key;
    }
    return prefix;
}
function makeScanResultFromScanIteratorInternal(iter, options, dbRead, onLimitKey) {
    return new ScanResultImpl(iter, options, dbRead, onLimitKey);
}
async function* getScanIteratorForIndexMap(dbRead, options) {
    const map = dbRead.getMapForIndex(options.indexName);
    for await (const entry of map.scan(fromKeyForIndexScanInternal(options))){
        yield [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeIndexKey"])(entry[0]),
            entry[1]
        ];
    }
}
// ../replicache/src/db/rebase.ts
async function rebaseMutation(mutation, dagWrite, basisHash, mutators, lc, mutationClientID, formatVersion, zeroData2) {
    const localMeta = mutation.meta;
    const name = localMeta.mutatorName;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLocalMetaDD31"])(localMeta)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(localMeta.clientID === mutationClientID, "mutationClientID must match clientID of LocalMeta");
    }
    const maybeMutatorImpl = mutators[name];
    if (!maybeMutatorImpl) {
        lc.error?.(`Cannot rebase unknown mutator ${name}`);
    }
    const mutatorImpl = maybeMutatorImpl || (async ()=>{});
    const args = localMeta.mutatorArgsJSON;
    const basisCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitFromHash"])(basisHash, dagWrite);
    const nextMutationID = await basisCommit.getNextMutationID(mutationClientID, dagWrite);
    if (nextMutationID !== localMeta.mutationID) {
        throw new Error(`Inconsistent mutation ID: original: ${localMeta.mutationID}, next: ${nextMutationID} - mutationClientID: ${mutationClientID} mutatorName: ${name}`);
    }
    if (formatVersion >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DD31"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertLocalMetaDD31"])(localMeta);
    }
    const dbWrite = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newWriteLocal"])(basisHash, name, args, mutation.chunk.hash, dagWrite, localMeta.timestamp, mutationClientID, formatVersion);
    const tx = new WriteTransactionImpl(mutationClientID, await dbWrite.getMutationID(), "rebase", zeroData2, dbWrite, lc);
    await mutatorImpl(tx, args);
    return dbWrite;
}
async function rebaseMutationAndPutCommit(mutation, dagWrite, basis, mutators, lc, mutationClientID, formatVersion, zeroData2) {
    const tx = await rebaseMutation(mutation, dagWrite, basis, mutators, lc, mutationClientID, formatVersion, zeroData2);
    return tx.putCommit();
}
async function rebaseMutationAndCommit(mutation, dagWrite, basis, headName, mutators, lc, mutationClientID, formatVersion, zeroData2) {
    const dbWrite = await rebaseMutation(mutation, dagWrite, basis, mutators, lc, mutationClientID, formatVersion, zeroData2);
    return dbWrite.commit(headName);
}
// ../replicache/src/get-default-pusher.ts
function getDefaultPusher(rep) {
    async function pusher(requestBody, requestID) {
        const [response, httpRequestInfo] = await callDefaultFetch(rep.pushURL, rep.auth, requestID, requestBody);
        if (!response) {
            return {
                httpRequestInfo
            };
        }
        const rv = {
            httpRequestInfo
        };
        let result;
        try {
            result = await response.json();
        } catch  {
            return rv;
        }
        if (isClientStateNotFoundResponse(result) || isVersionNotSupportedResponse(result)) {
            rv.response = result;
        }
        return rv;
    }
    defaultPushers.add(pusher);
    return pusher;
}
var defaultPushers = /* @__PURE__ */ new WeakSet();
function isDefaultPusher(pusher) {
    return defaultPushers.has(pusher);
}
// ../replicache/src/http-status-unauthorized.ts
var httpStatusUnauthorized = 401;
// ../replicache/src/report-error.ts
var ReportError = class extends Error {
};
// ../replicache/src/to-error.ts
function toError(e) {
    if (e instanceof Error) {
        return e;
    }
    return new Error(String(e));
}
// ../replicache/src/sync/handle-pull-response-result-type-enum.ts
var Applied = 0;
var NoOp = 1;
var CookieMismatch = 2;
// ../replicache/src/sync/patch.ts
async function apply(lc, dbWrite, patch) {
    for (const p of patch){
        switch(p.op){
            case "put":
                {
                    const frozen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(p.value);
                    await dbWrite.put(lc, p.key, frozen);
                    break;
                }
            case "update":
                {
                    const existing = await dbWrite.get(p.key);
                    const entries = [];
                    const addToEntries = (toAdd)=>{
                        for (const [key, value] of Object.entries(toAdd)){
                            if (!p.constrain || p.constrain.length === 0 || p.constrain.indexOf(key) > -1) {
                                entries.push([
                                    key,
                                    value
                                ]);
                            }
                        }
                    };
                    if (existing !== void 0) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(existing);
                        addToEntries(existing);
                    }
                    if (p.merge) {
                        addToEntries(p.merge);
                    }
                    const frozen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(Object.fromEntries(entries));
                    await dbWrite.put(lc, p.key, frozen);
                    break;
                }
            case "del":
                {
                    const existing = await dbWrite.get(p.key);
                    if (existing === void 0) {
                        continue;
                    }
                    await dbWrite.del(lc, p.key);
                    break;
                }
            case "clear":
                await dbWrite.clear();
                break;
        }
    }
}
// ../replicache/src/sync/pull-error.ts
var PullError = class extends Error {
    name = "PullError";
    // causedBy is used instead of cause, because while cause has been proposed as a
    // JavaScript language standard for this purpose (see
    // https://github.com/tc39/proposal-error-cause) current browser behavior is
    // inconsistent.
    causedBy;
    constructor(causedBy){
        super("Failed to pull");
        this.causedBy = causedBy;
    }
};
// ../replicache/src/sync/sync-head-name.ts
var SYNC_HEAD_NAME = "sync";
// ../replicache/src/sync/pull.ts
var PULL_VERSION_DD31 = 1;
async function beginPullV1(profileID, clientID, clientGroupID, schemaVersion, puller, requestID, store, formatVersion, lc, createSyncBranch = true) {
    const baseCookie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(store, async (dagRead)=>{
        const mainHeadHash = await dagRead.getHead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"]);
        if (!mainHeadHash) {
            throw new Error("Internal no main head found");
        }
        const baseSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromHash"])(mainHeadHash, dagRead);
        const baseSnapshotMeta = baseSnapshot.meta;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSnapshotMetaDD31"])(baseSnapshotMeta);
        return baseSnapshotMeta.cookieJSON;
    });
    const pullReq = {
        profileID,
        clientGroupID,
        cookie: baseCookie,
        pullVersion: PULL_VERSION_DD31,
        schemaVersion
    };
    const { response, httpRequestInfo } = await callPuller(lc, puller, pullReq, requestID);
    if (!response) {
        return {
            httpRequestInfo,
            syncHead: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyHash"]
        };
    }
    if (!createSyncBranch || isErrorResponse(response)) {
        return {
            httpRequestInfo,
            pullResponse: response,
            syncHead: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyHash"]
        };
    }
    const result = await handlePullResponseV1(lc, store, baseCookie, response, clientID, formatVersion);
    return {
        httpRequestInfo,
        pullResponse: response,
        syncHead: result.type === Applied ? result.syncHead : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyHash"]
    };
}
async function callPuller(lc, puller, pullReq, requestID) {
    lc.debug?.("Starting pull...");
    const pullStart = Date.now();
    let pullerResult;
    try {
        pullerResult = await puller(pullReq, requestID);
        lc.debug?.(`...Pull ${pullerResult.response ? "complete" : "failed"} in `, Date.now() - pullStart, "ms");
    } catch (e) {
        throw new PullError(toError(e));
    }
    try {
        assertPullerResultV1(pullerResult);
        return pullerResult;
    } catch (e) {
        throw new ReportError("Invalid puller result", toError(e));
    }
}
function badOrderMessage(name, receivedValue, lastSnapshotValue) {
    return `Received ${name} ${receivedValue} is < than last snapshot ${name} ${lastSnapshotValue}; ignoring client view`;
}
function handlePullResponseV1(lc, store, expectedBaseCookie, response, clientID, formatVersion) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWriteNoImplicitCommit"])(store, async (dagWrite)=>{
        const dagRead = dagWrite;
        const mainHead = await dagRead.getHead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"]);
        if (mainHead === void 0) {
            throw new Error("Main head disappeared");
        }
        const baseSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromHash"])(mainHead, dagRead);
        const baseSnapshotMeta = baseSnapshot.meta;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSnapshotMetaDD31"])(baseSnapshotMeta);
        const baseCookie = baseSnapshotMeta.cookieJSON;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepEqual"])(expectedBaseCookie, baseCookie)) {
            lc.debug?.("handlePullResponse: cookie mismatch, response is not applicable");
            return {
                type: CookieMismatch
            };
        }
        for (const [clientID2, lmidChange] of Object.entries(response.lastMutationIDChanges)){
            const lastMutationID = baseSnapshotMeta.lastMutationIDs[clientID2];
            if (lastMutationID !== void 0 && lmidChange < lastMutationID) {
                throw new Error(badOrderMessage(`${clientID2} lastMutationID`, String(lmidChange), String(lastMutationID)));
            }
        }
        const frozenResponseCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(response.cookie);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareCookies"])(frozenResponseCookie, baseCookie) < 0) {
            throw new Error(badOrderMessage("cookie", JSON.stringify(frozenResponseCookie), JSON.stringify(baseCookie)));
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepEqual"])(frozenResponseCookie, baseCookie)) {
            if (response.patch.length > 0) {
                lc.error?.(`handlePullResponse: cookie ${JSON.stringify(baseCookie)} did not change, but patch is not empty`);
            }
            if (Object.keys(response.lastMutationIDChanges).length > 0) {
                lc.error?.(`handlePullResponse: cookie ${JSON.stringify(baseCookie)} did not change, but lastMutationIDChanges is not empty`);
            }
            return {
                type: NoOp
            };
        }
        const dbWrite = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newWriteSnapshotDD31"])(baseSnapshot.chunk.hash, {
            ...baseSnapshotMeta.lastMutationIDs,
            ...response.lastMutationIDChanges
        }, frozenResponseCookie, dagWrite, clientID, formatVersion);
        await apply(lc, dbWrite, response.patch);
        return {
            type: Applied,
            syncHead: await dbWrite.commit(SYNC_HEAD_NAME)
        };
    });
}
function maybeEndPull(store, lc, expectedSyncHead, clientID, diffConfig, formatVersion) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWriteNoImplicitCommit"])(store, async (dagWrite)=>{
        const dagRead = dagWrite;
        const syncHeadHash = await dagRead.getHead(SYNC_HEAD_NAME);
        if (syncHeadHash === void 0) {
            throw new Error("Missing sync head");
        }
        if (syncHeadHash !== expectedSyncHead) {
            lc.error?.("maybeEndPull, Wrong sync head. Expecting:", expectedSyncHead, "got:", syncHeadHash);
            throw new Error("Wrong sync head");
        }
        const syncSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromHash"])(syncHeadHash, dagRead);
        const mainHeadHash = await dagRead.getHead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"]);
        if (mainHeadHash === void 0) {
            throw new Error("Missing main head");
        }
        const mainSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromHash"])(mainHeadHash, dagRead);
        const { meta } = syncSnapshot;
        const syncSnapshotBasis = meta.basisHash;
        if (syncSnapshot === null) {
            throw new Error("Sync snapshot with no basis");
        }
        if (syncSnapshotBasis !== mainSnapshot.chunk.hash) {
            throw new Error("Overlapping syncs");
        }
        const syncHead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitFromHash"])(syncHeadHash, dagRead);
        const pending = [];
        const localMutations2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localMutations"])(mainHeadHash, dagRead);
        for (const commit of localMutations2){
            let cid = clientID;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitIsLocalDD31"])(commit));
            cid = commit.meta.clientID;
            if (await commit.getMutationID(cid, dagRead) > await syncHead.getMutationID(cid, dagRead)) {
                pending.push(commit);
            }
        }
        pending.reverse();
        const diffsMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiffsMap"]();
        if (pending.length > 0) {
            return {
                syncHead: syncHeadHash,
                oldMainHead: mainHeadHash,
                mainHead: mainHeadHash,
                replayMutations: pending,
                // The changed keys are not reported when further replays are
                // needed. The diffs will be reported at the end when there
                // are no more mutations to be replay and then it will be reported
                // relative to DEFAULT_HEAD_NAME.
                diffs: diffsMap
            };
        }
        const mainHead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitFromHash"])(mainHeadHash, dagRead);
        if (diffConfig.shouldComputeDiffs()) {
            const mainHeadMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BTreeRead"](dagRead, formatVersion, mainHead.valueHash);
            const syncHeadMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BTreeRead"](dagRead, formatVersion, syncHead.valueHash);
            const valueDiff = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diff"])(mainHeadMap, syncHeadMap);
            diffsMap.set("", valueDiff);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDiffsForIndexes"])(mainHead, syncHead, dagRead, diffsMap, diffConfig, formatVersion);
        }
        await Promise.all([
            dagWrite.setHead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"], syncHeadHash),
            dagWrite.removeHead(SYNC_HEAD_NAME)
        ]);
        await dagWrite.commit();
        const newMainHeadHash = syncHeadHash;
        if (lc.debug) {
            const [oldLastMutationID, oldCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapshotMetaParts"])(mainSnapshot, clientID);
            const [newLastMutationID, newCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapshotMetaParts"])(syncSnapshot, clientID);
            lc.debug(`Successfully pulled new snapshot with lastMutationID:`, newLastMutationID, `(prev:`, oldLastMutationID, `), cookie: `, newCookie, `(prev:`, oldCookie, `), sync head hash:`, syncHeadHash, ", main head hash:", mainHeadHash, `, valueHash:`, syncHead.valueHash, `(prev:`, mainSnapshot.valueHash);
        }
        return {
            syncHead: syncHeadHash,
            oldMainHead: mainHeadHash,
            mainHead: newMainHeadHash,
            replayMutations: [],
            diffs: diffsMap
        };
    });
}
// ../replicache/src/pusher.ts
function assertPusherResult(v) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(v);
    assertHTTPRequestInfo(v.httpRequestInfo);
    if (v.response !== void 0) {
        assertPushResponse(v.response);
    }
}
function assertPushResponse(v) {
    if (isClientStateNotFoundResponse(v)) {
        return;
    }
    assertVersionNotSupportedResponse(v);
}
var PushError = class extends Error {
    name = "PushError";
    // causedBy is used instead of cause, because while cause has been proposed as a
    // JavaScript language standard for this purpose (see
    // https://github.com/tc39/proposal-error-cause) current browser behavior is
    // inconsistent.
    causedBy;
    constructor(causedBy){
        super("Failed to push");
        this.causedBy = causedBy;
    }
};
// ../replicache/src/sync/push.ts
var PUSH_VERSION_DD31 = 1;
var mutationV1Schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readonlyObject"])({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    args: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonSchema"],
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number(),
    clientID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientIDSchema"]
});
var pushRequestV1Schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    pushVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal(1),
    schemaVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    profileID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    clientGroupID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientGroupIDSchema"],
    mutations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(mutationV1Schema)
});
function convertDD31(lm) {
    return {
        id: lm.mutationID,
        name: lm.mutatorName,
        args: lm.mutatorArgsJSON,
        timestamp: lm.timestamp,
        clientID: lm.clientID
    };
}
async function push(requestID, store, lc, profileID, clientGroupID, _clientID, pusher, schemaVersion, pushVersion) {
    const pending = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(store, async (dagRead)=>{
        const mainHeadHash = await dagRead.getHead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"]);
        if (!mainHeadHash) {
            throw new Error("Internal no main head");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localMutations"])(mainHeadHash, dagRead);
    });
    if (pending.length === 0) {
        return void 0;
    }
    pending.reverse();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(pushVersion === PUSH_VERSION_DD31);
    const pushMutations = [];
    for (const commit of pending){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitIsLocalDD31"])(commit)) {
            pushMutations.push(convertDD31(commit.meta));
        } else {
            throw new Error("Internal non local pending commit");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(clientGroupID);
    const pushReq = {
        profileID,
        clientGroupID,
        mutations: pushMutations,
        pushVersion: PUSH_VERSION_DD31,
        schemaVersion
    };
    lc.debug?.("Starting push...");
    const pushStart = Date.now();
    const pusherResult = await callPusher(pusher, pushReq, requestID);
    lc.debug?.("...Push complete in ", Date.now() - pushStart, "ms");
    return pusherResult;
}
async function callPusher(pusher, body, requestID) {
    let pusherResult;
    try {
        pusherResult = await pusher(body, requestID);
    } catch (e) {
        throw new PushError(toError(e));
    }
    try {
        assertPusherResult(pusherResult);
        return pusherResult;
    } catch (e) {
        throw new ReportError("Invalid pusher result", toError(e));
    }
}
// ../replicache/src/mutation-recovery.ts
var MUTATION_RECOVERY_LAZY_STORE_SOURCE_CHUNK_CACHE_SIZE_LIMIT = 10 * 2 ** 20;
// ../shared/src/broadcast-channel.ts
var NoopBroadcastChannel = class {
    name;
    onmessage = null;
    onmessageerror = null;
    constructor(name){
        this.name = name;
    }
    addEventListener() {}
    removeEventListener() {}
    dispatchEvent() {
        return false;
    }
    close() {}
    postMessage() {}
};
var bc = typeof BroadcastChannel === "undefined" ? NoopBroadcastChannel : BroadcastChannel;
// ../replicache/src/new-client-channel.ts
function makeChannelNameV0(replicacheName) {
    return `replicache-new-client-group:${replicacheName}`;
}
function makeChannelNameV1(replicacheName) {
    return `replicache-new-client-group-v1:${replicacheName}`;
}
function isNewClientChannelMessageV1(message) {
    return typeof message === "object" && typeof message.clientGroupID === "string" && typeof message.idbName === "string";
}
function initNewClientChannel(replicacheName, idbName, signal, clientGroupID, isNewClientGroup, onUpdateNeeded, perdag) {
    if (signal.aborted) {
        return;
    }
    const channelV1 = new bc(makeChannelNameV1(replicacheName));
    if (isNewClientGroup) {
        channelV1.postMessage({
            clientGroupID,
            idbName
        });
        const channelV0 = new bc(makeChannelNameV0(replicacheName));
        channelV0.postMessage([
            clientGroupID
        ]);
        channelV0.close();
    }
    channelV1.onmessage = async (e)=>{
        const { data } = e;
        if (isNewClientChannelMessageV1(data)) {
            const { clientGroupID: newClientGroupID, idbName: newClientIDBName } = data;
            if (newClientGroupID !== clientGroupID) {
                if (newClientIDBName === idbName) {
                    const updateNeeded = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(perdag, async (perdagRead)=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientGroup"])(newClientGroupID, perdagRead) !== void 0);
                    if (updateNeeded) {
                        onUpdateNeeded();
                    }
                } else {
                    onUpdateNeeded();
                    return;
                }
            }
        }
    };
    signal.addEventListener("abort", ()=>channelV1.close(), {
        once: true
    });
}
// ../replicache/src/on-persist-channel.ts
function makeChannelName(replicacheName) {
    return `replicache-on-persist:${replicacheName}`;
}
function assertPersistInfo(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertObject"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(value.clientGroupID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertString"])(value.clientID);
}
function initOnPersistChannel(replicacheName, signal, handlePersist) {
    if (signal.aborted) {
        return ()=>void 0;
    }
    const channel = new bc(makeChannelName(replicacheName));
    channel.onmessage = (e)=>{
        const { data } = e;
        assertPersistInfo(data);
        handlePersist({
            clientGroupID: data.clientGroupID,
            clientID: data.clientID
        });
    };
    signal.addEventListener("abort", ()=>channel.close(), {
        once: true
    });
    return (persistInfo)=>{
        if (signal.aborted) {
            return;
        }
        channel.postMessage(persistInfo);
        handlePersist(persistInfo);
    };
}
// ../replicache/src/pending-mutations.ts
async function pendingMutationsForAPI(dagRead) {
    const mainHeadHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mustGetHeadHash"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"], dagRead);
    const pending = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localMutationsDD31"])(mainHeadHash, dagRead);
    return pending.map((p)=>({
            id: p.meta.mutationID,
            name: p.meta.mutatorName,
            args: p.meta.mutatorArgsJSON,
            clientID: p.meta.clientID
        })).reverse();
}
// ../replicache/src/persist/client-gc.ts
var CLIENT_MAX_INACTIVE_TIME = 24 * 60 * 60 * 1e3;
var GC_INTERVAL = 5 * 60 * 1e3;
var latestGCUpdate;
function initClientGC(clientID, dagStore, clientMaxInactiveTime, gcInterval, onClientsDeleted, lc, signal) {
    initBgIntervalProcess("ClientGC", ()=>{
        latestGCUpdate = gcClients(clientID, dagStore, clientMaxInactiveTime, onClientsDeleted);
        return latestGCUpdate;
    }, ()=>gcInterval, lc, signal);
}
function gcClients(clientID, dagStore, clientMaxInactiveTime, onClientsDeleted) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(dagStore, async (dagWrite)=>{
        const now = Date.now();
        const clients = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClients"])(dagWrite);
        const deletedClients = [];
        const newClients = /* @__PURE__ */ new Map();
        for (const [id, client] of clients){
            if (id === clientID || now - client.heartbeatTimestampMs <= clientMaxInactiveTime) {
                newClients.set(id, client);
            } else {
                deletedClients.push(id);
            }
        }
        if (newClients.size === clients.size) {
            return clients;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setClients"])(newClients, dagWrite);
        const { clientIDs, clientGroupIDs } = await addDeletedClients(dagWrite, deletedClients, // gcClients does not delete client groups
        []);
        onClientsDeleted(clientIDs, clientGroupIDs);
        return newClients;
    });
}
// ../replicache/src/persist/client-group-gc.ts
var GC_INTERVAL_MS = 5 * 60 * 1e3;
var latestGCUpdate2;
function initClientGroupGC(dagStore, enableMutationRecovery, onClientsDeleted, lc, signal) {
    initBgIntervalProcess("ClientGroupGC", ()=>{
        latestGCUpdate2 = gcClientGroups(dagStore, enableMutationRecovery, onClientsDeleted);
        return latestGCUpdate2;
    }, ()=>GC_INTERVAL_MS, lc, signal);
}
function gcClientGroups(dagStore, enableMutationRecovery, onClientsDeleted) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(dagStore, async (tx)=>{
        const clients = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClients"])(tx);
        const clientGroupIDs = /* @__PURE__ */ new Set();
        for (const client of clients.values()){
            clientGroupIDs.add(client.clientGroupID);
        }
        const clientGroups = /* @__PURE__ */ new Map();
        const removeClientGroups = /* @__PURE__ */ new Set();
        for (const [clientGroupID, clientGroup] of (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientGroups"])(tx))){
            if (clientGroupIDs.has(clientGroupID) || enableMutationRecovery && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientGroupHasPendingMutations"])(clientGroup)) {
                clientGroups.set(clientGroupID, clientGroup);
            } else {
                removeClientGroups.add(clientGroupID);
            }
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setClientGroups"])(clientGroups, tx);
        onClientsDeleted([], [
            ...removeClientGroups
        ].sort());
        return clientGroups;
    });
}
// ../replicache/src/persist/heartbeat.ts
var HEARTBEAT_INTERVAL = 60 * 1e3;
var latestHeartbeatUpdate;
function startHeartbeats(clientID, dagStore, onClientStateNotFound, heartbeatIntervalMs, lc, signal) {
    initBgIntervalProcess("Heartbeat", async ()=>{
        latestHeartbeatUpdate = writeHeartbeat(clientID, dagStore);
        try {
            return await latestHeartbeatUpdate;
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientStateNotFoundError"]) {
                onClientStateNotFound();
                return;
            }
            throw e;
        }
    }, ()=>heartbeatIntervalMs, lc, signal);
}
function writeHeartbeat(clientID, dagStore) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(dagStore, async (dagWrite)=>{
        const clients = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClients"])(dagWrite);
        const client = clients.get(clientID);
        if (!client) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientStateNotFoundError"](clientID);
        }
        const newClient = {
            ...client,
            heartbeatTimestampMs: Date.now()
        };
        const newClients = new Map(clients).set(clientID, newClient);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setClients"])(newClients, dagWrite);
        return newClients;
    });
}
// ../replicache/src/dag/visitor.ts
var Visitor = class {
    #seen = /* @__PURE__ */ new Set();
    #dagRead;
    constructor(dagRead){
        this.#dagRead = dagRead;
    }
    async visit(h) {
        if (this.#seen.has(h)) {
            return;
        }
        this.#seen.add(h);
        const chunk = await this.#dagRead.mustGetChunk(h);
        await this.visitChunk(chunk);
    }
    async visitChunk(chunk) {
        await Promise.all(chunk.meta.map((ref)=>this.visit(ref)));
    }
};
// ../replicache/src/persist/gather-mem-only-visitor.ts
var GatherMemoryOnlyVisitor = class extends Visitor {
    #gatheredChunks = /* @__PURE__ */ new Map();
    #lazyRead;
    constructor(dagRead){
        super(dagRead);
        this.#lazyRead = dagRead;
    }
    get gatheredChunks() {
        return this.#gatheredChunks;
    }
    visit(h) {
        if (!this.#lazyRead.isMemOnlyChunkHash(h)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
        }
        return super.visit(h);
    }
    visitChunk(chunk) {
        this.#gatheredChunks.set(chunk.hash, chunk);
        return super.visitChunk(chunk);
    }
};
// ../replicache/src/persist/persist.ts
async function persistDD31(lc, clientID, memdag, perdag, mutators, closed, formatVersion, getZeroData, onGatherMemOnlyChunksForTest = ()=>Promise.resolve()) {
    if (closed()) {
        return;
    }
    const [perdagLMID, perdagBaseSnapshot, mainClientGroupID] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(perdag, async (perdagRead)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertHasClientState"])(clientID, perdagRead);
        const mainClientGroupID2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientGroupIDForClient"])(clientID, perdagRead);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(mainClientGroupID2, `No main client group for clientID: ${clientID}`);
        const [, perdagMainClientGroupHeadCommit] = await getClientGroupInfo(perdagRead, mainClientGroupID2);
        const perdagLMID2 = await perdagMainClientGroupHeadCommit.getMutationID(clientID, perdagRead);
        const perdagBaseSnapshot2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromCommit"])(perdagMainClientGroupHeadCommit, perdagRead);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSnapshotCommitDD31"])(perdagBaseSnapshot2);
        return [
            perdagLMID2,
            perdagBaseSnapshot2,
            mainClientGroupID2
        ];
    });
    if (closed()) {
        return;
    }
    const [newMemdagMutations, memdagBaseSnapshot, gatheredChunks] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(memdag, async (memdagRead)=>{
        const memdagHeadCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitFromHead"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"], memdagRead);
        const newMutations = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localMutationsGreaterThan"])(memdagHeadCommit, {
            [clientID]: perdagLMID || 0
        }, memdagRead);
        const memdagBaseSnapshot2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromCommit"])(memdagHeadCommit, memdagRead);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSnapshotCommitDD31"])(memdagBaseSnapshot2);
        let gatheredChunks2;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareCookiesForSnapshots"])(memdagBaseSnapshot2, perdagBaseSnapshot) > 0) {
            await onGatherMemOnlyChunksForTest();
            const memdagBaseSnapshotHash = memdagBaseSnapshot2.chunk.hash;
            const visitor = new GatherMemoryOnlyVisitor(memdagRead);
            await visitor.visit(memdagBaseSnapshotHash);
            gatheredChunks2 = visitor.gatheredChunks;
        }
        return [
            newMutations,
            memdagBaseSnapshot2,
            gatheredChunks2
        ];
    });
    if (closed()) {
        return;
    }
    let memdagBaseSnapshotPersisted = false;
    const zeroDataForMemdagBaseSnapshot = getZeroData && await getZeroData(memdagBaseSnapshot.chunk.hash);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(perdag, async (perdagWrite)=>{
        const [mainClientGroup, latestPerdagMainClientGroupHeadCommit] = await getClientGroupInfo(perdagWrite, mainClientGroupID);
        let newMainClientGroupHeadHash = latestPerdagMainClientGroupHeadCommit.chunk.hash;
        let mutationIDs = {
            ...mainClientGroup.mutationIDs
        };
        let { lastServerAckdMutationIDs } = mainClientGroup;
        if (gatheredChunks) {
            const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mustGetClient"])(clientID, perdagWrite);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertClientV6"])(client);
            const latestPerdagBaseSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromCommit"])(latestPerdagMainClientGroupHeadCommit, perdagWrite);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSnapshotCommitDD31"])(latestPerdagBaseSnapshot);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareCookiesForSnapshots"])(memdagBaseSnapshot, latestPerdagBaseSnapshot) > 0) {
                memdagBaseSnapshotPersisted = true;
                await Promise.all(Array.from(gatheredChunks.values(), (c)=>perdagWrite.putChunk(c)));
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setClient"])(clientID, {
                    ...client,
                    persistHash: memdagBaseSnapshot.chunk.hash
                }, perdagWrite);
                newMainClientGroupHeadHash = memdagBaseSnapshot.chunk.hash;
                const mainClientGroupLocalMutations = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localMutationsDD31"])(mainClientGroup.headHash, perdagWrite);
                lastServerAckdMutationIDs = memdagBaseSnapshot.meta.lastMutationIDs;
                mutationIDs = {
                    ...lastServerAckdMutationIDs
                };
                newMainClientGroupHeadHash = await rebase(mainClientGroupLocalMutations, newMainClientGroupHeadHash, perdagWrite, mutators, mutationIDs, lc, formatVersion, zeroDataForMemdagBaseSnapshot);
            }
        }
        let zeroDataForPerdagHeadCommit;
        if (!memdagBaseSnapshotPersisted) {
            zeroDataForPerdagHeadCommit = getZeroData && await getZeroData(newMainClientGroupHeadHash, {
                openLazySourceRead: perdagWrite
            });
        }
        newMainClientGroupHeadHash = await rebase(newMemdagMutations, newMainClientGroupHeadHash, perdagWrite, mutators, mutationIDs, lc, formatVersion, zeroDataForPerdagHeadCommit ?? zeroDataForMemdagBaseSnapshot);
        const newMainClientGroup = {
            ...mainClientGroup,
            headHash: newMainClientGroupHeadHash,
            mutationIDs,
            lastServerAckdMutationIDs
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setClientGroup"])(mainClientGroupID, newMainClientGroup, perdagWrite);
    });
    if (gatheredChunks && memdagBaseSnapshotPersisted) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(memdag, (memdagWrite)=>memdagWrite.chunksPersisted([
                ...gatheredChunks.keys()
            ]));
    }
}
async function getClientGroupInfo(perdagRead, clientGroupID) {
    const clientGroup = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientGroup"])(clientGroupID, perdagRead);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(clientGroup, `No client group for clientGroupID: ${clientGroupID}`);
    return [
        clientGroup,
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitFromHash"])(clientGroup.headHash, perdagRead)
    ];
}
async function rebase(mutations, basis, write, mutators, mutationIDs, lc, formatVersion, zeroData2) {
    for(let i = mutations.length - 1; i >= 0; i--){
        const mutationCommit = mutations[i];
        const { meta } = mutationCommit;
        const newMainHead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitFromHash"])(basis, write);
        if (await mutationCommit.getMutationID(meta.clientID, write) > await newMainHead.getMutationID(meta.clientID, write)) {
            mutationIDs[meta.clientID] = meta.mutationID;
            basis = (await rebaseMutationAndPutCommit(mutationCommit, write, basis, mutators, lc, meta.clientID, formatVersion, zeroData2)).chunk.hash;
        }
    }
    return basis;
}
// ../replicache/src/persist/gather-not-cached-visitor.ts
var GatherNotCachedVisitor = class extends Visitor {
    #gatheredChunks = /* @__PURE__ */ new Map();
    #gatheredChunksTotalSize = 0;
    #lazyStore;
    #gatherSizeLimit;
    #getSizeOfChunk;
    constructor(dagRead, lazyStore, gatherSizeLimit, getSizeOfChunk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSizeOfValue"]){
        super(dagRead);
        this.#lazyStore = lazyStore;
        this.#gatherSizeLimit = gatherSizeLimit;
        this.#getSizeOfChunk = getSizeOfChunk;
    }
    get gatheredChunks() {
        return this.#gatheredChunks;
    }
    visit(h) {
        if (this.#gatheredChunksTotalSize >= this.#gatherSizeLimit || this.#lazyStore.isCached(h)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
        }
        return super.visit(h);
    }
    visitChunk(chunk) {
        if (this.#gatheredChunksTotalSize < this.#gatherSizeLimit) {
            const size = this.#getSizeOfChunk(chunk);
            this.#gatheredChunks.set(chunk.hash, {
                chunk,
                size
            });
            this.#gatheredChunksTotalSize += size;
        }
        return super.visitChunk(chunk);
    }
};
// ../replicache/src/persist/refresh.ts
var GATHER_SIZE_LIMIT = 5 * 2 ** 20;
var DELAY_MS = 300;
async function refresh(lc, memdag, perdag, clientID, mutators, diffConfig, closed, formatVersion, zero) {
    if (closed()) {
        return;
    }
    const memdagBaseSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(memdag, (memdagRead)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromHead"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"], memdagRead));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSnapshotCommitDD31"])(memdagBaseSnapshot);
    const result = await memdag.withSuspendedSourceCacheEvictsAndDeletes(async ()=>{
        const perdagWriteResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(perdag, async (perdagWrite)=>{
            const clientGroup = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientGroupForClient"])(clientID, perdagWrite);
            if (!clientGroup) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientStateNotFoundError"](clientID);
            }
            const perdagClientGroupHeadHash2 = clientGroup.headHash;
            const perdagClientGroupHeadCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitFromHash"])(perdagClientGroupHeadHash2, perdagWrite);
            const perdagLmid2 = await perdagClientGroupHeadCommit.getMutationID(clientID, perdagWrite);
            const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mustGetClient"])(clientID, perdagWrite);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertClientV6"])(client);
            const perdagClientGroupBaseSnapshot2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromHash"])(perdagClientGroupHeadHash2, perdagWrite);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSnapshotCommitDD31"])(perdagClientGroupBaseSnapshot2);
            if (shouldAbortRefresh(memdagBaseSnapshot, perdagClientGroupBaseSnapshot2, perdagClientGroupHeadHash2)) {
                return void 0;
            }
            const visitor = new GatherNotCachedVisitor(perdagWrite, memdag, GATHER_SIZE_LIMIT);
            await visitor.visit(perdagClientGroupHeadHash2);
            const { gatheredChunks: gatheredChunks2 } = visitor;
            const refreshHashesSet = new Set(client.refreshHashes);
            refreshHashesSet.add(perdagClientGroupHeadHash2);
            const newClient = {
                ...client,
                refreshHashes: [
                    ...refreshHashesSet
                ]
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setClient"])(clientID, newClient, perdagWrite);
            return [
                perdagClientGroupHeadHash2,
                perdagClientGroupBaseSnapshot2,
                perdagLmid2,
                gatheredChunks2,
                client.refreshHashes
            ];
        });
        if (closed() || !perdagWriteResult) {
            return {
                type: "aborted"
            };
        }
        await sleep(DELAY_MS);
        if (closed()) {
            return {
                type: "aborted"
            };
        }
        const [perdagClientGroupHeadHash, perdagClientGroupBaseSnapshot, perdagLmid, gatheredChunks, refreshHashesForRevert] = perdagWriteResult;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(memdag, async (memdagWrite)=>{
            const memdagHeadCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitFromHead"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"], memdagWrite);
            const memdagBaseSnapshot2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromCommit"])(memdagHeadCommit, memdagWrite);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSnapshotCommitDD31"])(memdagBaseSnapshot2);
            if (shouldAbortRefresh(memdagBaseSnapshot2, perdagClientGroupBaseSnapshot, perdagClientGroupHeadHash)) {
                return {
                    type: "aborted",
                    refreshHashesForRevert
                };
            }
            const newMemdagMutations = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localMutationsGreaterThan"])(memdagHeadCommit, {
                [clientID]: perdagLmid
            }, memdagWrite);
            const ps = [];
            for (const { chunk, size } of gatheredChunks.values()){
                ps.push(memdagWrite.putChunk(chunk, size));
            }
            await Promise.all(ps);
            let newMemdagHeadHash = perdagClientGroupHeadHash;
            if (newMemdagMutations.length > 0) {
                const zeroData2 = await zero?.getTxData?.(newMemdagHeadHash, {
                    openLazyRead: memdagWrite
                });
                for(let i = newMemdagMutations.length - 1; i >= 0; i--){
                    newMemdagHeadHash = (await rebaseMutationAndPutCommit(newMemdagMutations[i], memdagWrite, newMemdagHeadHash, mutators, lc, newMemdagMutations[i].meta.clientID, formatVersion, zeroData2)).chunk.hash;
                }
            }
            const newMemdagHeadCommit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitFromHash"])(newMemdagHeadHash, memdagWrite);
            const diffs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffCommits"])(memdagHeadCommit, newMemdagHeadCommit, memdagWrite, diffConfig, formatVersion);
            await memdagWrite.setHead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"], newMemdagHeadHash);
            return {
                type: "complete",
                diffs,
                oldHead: memdagHeadCommit.chunk.hash,
                newHead: newMemdagHeadHash,
                newPerdagClientHeadHash: perdagClientGroupHeadHash
            };
        });
    });
    if (closed()) {
        return;
    }
    const setRefreshHashes = (refreshHashes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(perdag, async (perdagWrite)=>{
            const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mustGetClient"])(clientID, perdagWrite);
            const newClient = {
                ...client,
                refreshHashes
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setClient"])(clientID, newClient, perdagWrite);
        });
    if (result.type === "aborted") {
        if (result.refreshHashesForRevert) {
            await setRefreshHashes(result.refreshHashesForRevert);
        }
        return void 0;
    }
    zero?.advance(result.oldHead, result.newHead, result.diffs.get("") ?? []);
    await setRefreshHashes([
        result.newPerdagClientHeadHash
    ]);
    return {
        oldHead: result.oldHead,
        newHead: result.newHead,
        diffs: result.diffs
    };
}
function shouldAbortRefresh(memdagBaseSnapshot, perdagClientGroupBaseSnapshot, perdagClientGroupHeadHash) {
    const baseSnapshotCookieCompareResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareCookiesForSnapshots"])(memdagBaseSnapshot, perdagClientGroupBaseSnapshot);
    return baseSnapshotCookieCompareResult > 0 || baseSnapshotCookieCompareResult === 0 && perdagClientGroupHeadHash === perdagClientGroupBaseSnapshot.chunk.hash;
}
;
// ../replicache/src/request-idle.ts
function requestIdle(timeout) {
    return new Promise((resolve)=>{
        if (typeof requestIdleCallback === "function") {
            requestIdleCallback(()=>resolve(), {
                timeout
            });
        } else {
            setTimeout(()=>resolve(), timeout);
        }
    });
}
// ../replicache/src/process-scheduler.ts
var ProcessScheduler = class {
    #process;
    #idleTimeoutMs;
    #throttleMs;
    #abortSignal;
    #requestIdle;
    #scheduledResolver = void 0;
    #runResolver = void 0;
    #runPromise = Promise.resolve();
    #throttlePromise = Promise.resolve();
    /**
   * Supports scheduling a `process` to be run with certain constraints.
   *  - Process runs are never concurrent.
   *  - Multiple calls to schedule will be fulfilled by a single process
   *    run started after the call to schedule.  A call is never fulfilled by an
   *    already running process run.  This can be thought of as debouncing.
   *  - Process runs are throttled so that the process runs at most once every
   *    `throttleMs`.
   *  - Process runs try to run during an idle period, but will delay at most
   *    `idleTimeoutMs`.
   *  - Scheduled runs which have not completed when `abortSignal` is aborted
   *    will reject with an `AbortError`.
   */ constructor(process2, idleTimeoutMs, throttleMs, abortSignal, requestIdle2 = requestIdle){
        this.#process = process2;
        this.#idleTimeoutMs = idleTimeoutMs;
        this.#throttleMs = throttleMs;
        this.#abortSignal = abortSignal;
        this.#requestIdle = requestIdle2;
        this.#abortSignal.addEventListener("abort", ()=>{
            const abortError = new AbortError("Aborted");
            this.#runResolver?.reject(abortError);
            this.#scheduledResolver?.reject(abortError);
            this.#runResolver = void 0;
            this.#scheduledResolver = void 0;
        }, {
            once: true
        });
    }
    schedule() {
        if (this.#abortSignal.aborted) {
            return Promise.reject(new AbortError("Aborted"));
        }
        if (this.#scheduledResolver) {
            return this.#scheduledResolver.promise;
        }
        this.#scheduledResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        void this.#scheduleInternal();
        return this.#scheduledResolver.promise;
    }
    async #scheduleInternal() {
        try {
            await this.#runPromise;
        } catch (e) {}
        await this.#throttlePromise;
        if (!this.#scheduledResolver) {
            return;
        }
        await this.#requestIdle(this.#idleTimeoutMs);
        if (!this.#scheduledResolver) {
            return;
        }
        this.#throttlePromise = throttle(this.#throttleMs, this.#abortSignal);
        this.#runResolver = this.#scheduledResolver;
        this.#scheduledResolver = void 0;
        try {
            this.#runPromise = this.#process();
            await this.#runPromise;
            this.#runResolver?.resolve();
        } catch (e) {
            this.#runResolver?.reject(e);
        }
        this.#runResolver = void 0;
    }
};
async function throttle(timeMs, abortSignal) {
    try {
        await sleep(timeMs, abortSignal);
    } catch (e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(e instanceof AbortError);
    }
}
// ../replicache/src/set-interval-with-signal.ts
function setIntervalWithSignal(fn, ms, signal) {
    if (!signal.aborted) {
        const interval = setInterval(fn, ms);
        signal.addEventListener("abort", ()=>{
            clearInterval(interval);
        });
    }
}
;
// ../replicache/src/invoke-kind-enum.ts
var InitialRun = 0;
var Regular = 1;
// ../replicache/src/subscriptions.ts
var emptySet = /* @__PURE__ */ new Set();
var unitializedLastValue = Symbol();
var SubscriptionImpl = class {
    #body;
    #onData;
    #lastValue = unitializedLastValue;
    #keys = emptySet;
    #scans = [];
    onError;
    onDone;
    #isEqual;
    constructor(body, onData, onError, onDone, isEqual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepEqual"]){
        this.#body = body;
        this.#onData = onData;
        this.onError = onError;
        this.onDone = onDone;
        this.#isEqual = isEqual;
    }
    hasIndexSubscription(indexName) {
        for (const scan2 of this.#scans){
            if (scan2.options.indexName === indexName) {
                return true;
            }
        }
        return false;
    }
    invoke(tx, _kind, _diffs) {
        return this.#body(tx);
    }
    matches(diffs) {
        for (const [indexName, diff3] of diffs){
            if (diffMatchesSubscription(this.#keys, this.#scans, indexName, diff3)) {
                return true;
            }
        }
        return false;
    }
    updateDeps(keys, scans) {
        this.#keys = keys;
        this.#scans = scans;
    }
    onData(result) {
        if (this.#lastValue === unitializedLastValue || !this.#isEqual(this.#lastValue, result)) {
            this.#lastValue = result;
            this.#onData(result);
        }
    }
};
var WatchSubscription = class {
    #callback;
    #prefix;
    #indexName;
    #initialValuesInFirstDiff;
    onError = void 0;
    onDone = void 0;
    constructor(callback, options){
        this.#callback = callback;
        this.#prefix = options?.prefix ?? "";
        this.#indexName = options?.indexName;
        this.#initialValuesInFirstDiff = options?.initialValuesInFirstDiff ?? false;
    }
    hasIndexSubscription(indexName) {
        return this.#indexName === indexName;
    }
    onData(result) {
        if (result !== void 0) {
            this.#callback(result);
        }
    }
    invoke(tx, kind, diffs) {
        const invoke = async (indexName, prefix, compareKey, convertInternalDiff)=>{
            let diff3;
            if (kind === InitialRun) {
                if (!this.#initialValuesInFirstDiff) {
                    return void 0;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(diffs === void 0);
                const newDiff2 = [];
                for await (const entry of tx.scan({
                    prefix,
                    indexName
                }).entries()){
                    newDiff2.push({
                        op: "add",
                        key: entry[0],
                        newValue: entry[1]
                    });
                }
                diff3 = newDiff2;
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(diffs);
                const maybeDiff = diffs.get(indexName ?? "") ?? [];
                diff3 = convertInternalDiff(maybeDiff);
            }
            const newDiff = [];
            const { length } = diff3;
            for(let i = diffBinarySearch(diff3, prefix, compareKey); i < length; i++){
                if (compareKey(diff3[i]).startsWith(prefix)) {
                    newDiff.push(diff3[i]);
                } else {
                    break;
                }
            }
            return kind === InitialRun || newDiff.length > 0 ? newDiff : void 0;
        };
        if (this.#indexName) {
            return invoke(this.#indexName, this.#prefix, (diff3)=>diff3.key[0], (internalDiff)=>convertDiffValues(internalDiff, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeIndexKey"]));
        }
        return invoke(void 0, this.#prefix, (diff3)=>diff3.key, (internalDiff)=>convertDiffValues(internalDiff, (k)=>k));
    }
    matches(diffs) {
        const diff3 = diffs.get(this.#indexName ?? "");
        if (diff3 === void 0) {
            return false;
        }
        return watcherMatchesDiff(diff3, this.#prefix, this.#indexName);
    }
    updateDeps(_keys, _scans) {}
};
function convertDiffValues(diff3, convertKey) {
    return diff3.map((op)=>{
        const key = convertKey(op.key);
        switch(op.op){
            case "add":
                return {
                    op: "add",
                    key,
                    newValue: op.newValue
                };
            case "change":
                return {
                    op: "change",
                    key,
                    oldValue: op.oldValue,
                    newValue: op.newValue
                };
            case "del":
                return {
                    op: "del",
                    key,
                    oldValue: op.oldValue
                };
        }
    });
}
var SubscriptionsManagerImpl = class {
    #subscriptions = /* @__PURE__ */ new Set();
    #pendingSubscriptions = /* @__PURE__ */ new Set();
    #queryInternal;
    #lc;
    hasPendingSubscriptionRuns = false;
    #signal;
    constructor(queryInternal, lc, signal){
        this.#queryInternal = queryInternal;
        this.#lc = lc;
        this.#signal = signal;
    }
    add(subscription) {
        this.#subscriptions.add(subscription);
        void this.#scheduleInitialSubscriptionRun(subscription);
        return ()=>this.#subscriptions.delete(subscription);
    }
    clear() {
        for (const subscription of this.#subscriptions){
            subscription.onDone?.();
        }
        this.#subscriptions.clear();
    }
    fire(diffs) {
        const subscriptions = subscriptionsForDiffs(this.#subscriptions, diffs);
        return this.#fireSubscriptions(subscriptions, Regular, diffs);
    }
    async #fireSubscriptions(subscriptions, kind, diffs) {
        if (this.#signal.aborted) {
            return;
        }
        const subs = [
            ...subscriptions
        ];
        if (subs.length === 0) {
            return;
        }
        const results = await this.#queryInternal((tx)=>Promise.allSettled(subs.map(async (s)=>{
                const stx = new SubscriptionTransactionWrapper(tx);
                try {
                    return await s.invoke(stx, kind, diffs);
                } finally{
                    s.updateDeps(stx.keys, stx.scans);
                }
            })));
        this.callCallbacks(subs, results);
    }
    // Public method so that ZQL can wrap it in a transaction.
    callCallbacks(subs, results) {
        for(let i = 0; i < subs.length; i++){
            const s = subs[i];
            const result = results[i];
            if (result.status === "fulfilled") {
                s.onData(result.value);
            } else {
                if (s.onError) {
                    s.onError(result.reason);
                } else {
                    this.#lc.error?.("Error in subscription body:", result.reason);
                }
            }
        }
    }
    async #scheduleInitialSubscriptionRun(s) {
        this.#pendingSubscriptions.add(s);
        if (!this.hasPendingSubscriptionRuns) {
            this.hasPendingSubscriptionRuns = true;
            await Promise.resolve();
            this.hasPendingSubscriptionRuns = false;
            const subscriptions = [
                ...this.#pendingSubscriptions
            ];
            this.#pendingSubscriptions.clear();
            await this.#fireSubscriptions(subscriptions, InitialRun, void 0);
        }
    }
    shouldComputeDiffs() {
        return this.#subscriptions.size > 0;
    }
    shouldComputeDiffsForIndex(indexName) {
        for (const s of this.#subscriptions){
            if (s.hasIndexSubscription(indexName)) {
                return true;
            }
        }
        return false;
    }
};
function diffMatchesSubscription(keys, scans, indexName, diff3) {
    if (indexName === "") {
        for (const diffEntry of diff3){
            if (keys.has(diffEntry.key)) {
                return true;
            }
        }
    }
    for (const scanInfo of scans){
        if (scanInfoMatchesDiff(scanInfo, indexName, diff3)) {
            return true;
        }
    }
    return false;
}
function scanInfoMatchesDiff(scanInfo, changeIndexName, diff3) {
    for (const diffEntry of diff3){
        if (scanInfoMatchesKey(scanInfo, changeIndexName, diffEntry.key)) {
            return true;
        }
    }
    return false;
}
function scanInfoMatchesKey(scanInfo, changeIndexName, changedKey) {
    const { indexName = "", limit, prefix, startKey, startExclusive, startSecondaryKey } = scanInfo.options;
    if (changeIndexName !== indexName) {
        return false;
    }
    if (!indexName) {
        if (limit !== void 0 && limit <= 0) {
            return false;
        }
        if (!prefix && !startKey) {
            return true;
        }
        if (prefix && (!changedKey.startsWith(prefix) || isKeyPastInclusiveLimit(scanInfo, changedKey))) {
            return false;
        }
        if (startKey && (startExclusive && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessThanEq"])(changedKey, startKey) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessThan"])(changedKey, startKey) || isKeyPastInclusiveLimit(scanInfo, changedKey))) {
            return false;
        }
        return true;
    }
    if (!prefix && !startKey && !startSecondaryKey) {
        return true;
    }
    const [changedKeySecondary, changedKeyPrimary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeIndexKey"])(changedKey);
    if (prefix) {
        if (!changedKeySecondary.startsWith(prefix)) {
            return false;
        }
    }
    if (startSecondaryKey && (startExclusive && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessThanEq"])(changedKeySecondary, startSecondaryKey) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessThan"])(changedKeySecondary, startSecondaryKey))) {
        return false;
    }
    if (startKey && (startExclusive && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessThanEq"])(changedKeyPrimary, startKey) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessThan"])(changedKeyPrimary, startKey))) {
        return false;
    }
    return true;
}
function isKeyPastInclusiveLimit(scanInfo, changedKey) {
    const { inclusiveLimitKey } = scanInfo;
    return scanInfo.options.limit !== void 0 && inclusiveLimitKey !== void 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greaterThan"])(changedKey, inclusiveLimitKey);
}
function* subscriptionsForDiffs(subscriptions, diffs) {
    for (const subscription of subscriptions){
        if (subscription.matches(diffs)) {
            yield subscription;
        }
    }
}
function watcherMatchesDiff(diff3, prefix, indexName) {
    if (prefix === "") {
        return true;
    }
    const compareKey = indexName ? (diffOp)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeIndexKey"])(diffOp.key)[0] : (diffOp)=>diffOp.key;
    const i = diffBinarySearch(diff3, prefix, compareKey);
    return i < diff3.length && compareKey(diff3[i]).startsWith(prefix);
}
function diffBinarySearch(diff3, prefix, compareKey) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["binarySearch"])(diff3.length, (i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareUTF8"])(prefix, compareKey(diff3[i])));
}
// ../replicache/src/sync/request-id.ts
var sessionID = "";
function getSessionID() {
    if (sessionID === "") {
        const buf = new Uint8Array(4);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNonCryptoRandomValues"])(buf);
        sessionID = Array.from(buf, (x)=>x.toString(16)).join("");
    }
    return sessionID;
}
var REQUEST_COUNTERS = /* @__PURE__ */ new Map();
function newRequestID(clientID) {
    const counter = REQUEST_COUNTERS.get(clientID) ?? 0;
    REQUEST_COUNTERS.set(clientID, counter + 1);
    return `${clientID}-${getSessionID()}-${counter}`;
}
// ../replicache/src/version.ts
var version = "15.2.1";
// ../replicache/src/replicache-impl.ts
var MAX_REAUTH_TRIES = 8;
var PERSIST_IDLE_TIMEOUT_MS = 1e3;
var REFRESH_IDLE_TIMEOUT_MS = 1e3;
var PERSIST_THROTTLE_MS = 500;
var REFRESH_THROTTLE_MS = 500;
var LAZY_STORE_SOURCE_CHUNK_CACHE_SIZE_LIMIT = 100 * 2 ** 20;
var RECOVER_MUTATIONS_INTERVAL_MS = 5 * 60 * 1e3;
var noop2 = ()=>{};
var updateNeededReasonNewClientGroup = {
    type: "NewClientGroup"
};
var ReplicacheImpl = class {
    /** The URL to use when doing a pull request. */ pullURL;
    /** The URL to use when doing a push request. */ pushURL;
    /** The authorization token used when doing a push request. */ #auth;
    /** The name of the Replicache database. Populated by {@link ReplicacheOptions#name}. */ name;
    #subscriptions;
    #mutationRecovery;
    /**
   * Client groups gets disabled when the server does not know about it.
   * A disabled client group prevents the client from pushing and pulling.
   */ isClientGroupDisabled = false;
    #kvStoreProvider;
    lastMutationID = 0;
    /**
   * This is the name Replicache uses for the IndexedDB database where data is
   * stored.
   */ get idbName() {
        return makeIDBName(this.name, this.schemaVersion);
    }
    set auth(auth) {
        if (this.#zero) {
            this.#zero.auth = auth;
        }
        this.#auth = auth;
    }
    get auth() {
        return this.#auth;
    }
    /** The schema version of the data understood by this application. */ schemaVersion;
    get #idbDatabase() {
        return {
            name: this.idbName,
            replicacheName: this.name,
            replicacheFormatVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"],
            schemaVersion: this.schemaVersion
        };
    }
    #closed = false;
    #online = true;
    #clientID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeClientID"])();
    #ready;
    #profileIDPromise;
    #clientGroupIDPromise;
    #mutatorRegistry = {};
    /**
   * The mutators that was registered in the constructor.
   */ mutate;
    // Number of pushes/pulls at the moment.
    #pushCounter = 0;
    #pullCounter = 0;
    #pullConnectionLoop;
    #pushConnectionLoop;
    /**
   * The duration between each periodic {@link pull}. Setting this to `null`
   * disables periodic pull completely. Pull will still happen if you call
   * {@link pull} manually.
   */ pullInterval;
    /**
   * The delay between when a change is made to Replicache and when Replicache
   * attempts to push that change.
   */ pushDelay;
    #requestOptions;
    /**
   * The function to use to pull data from the server.
   */ puller;
    /**
   * The function to use to push data to the server.
   */ pusher;
    memdag;
    perdag;
    #idbDatabases;
    #lc;
    #zero;
    #closeAbortController = new AbortController();
    #persistLock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$lock$40$1$2e$0$2e$4$2f$node_modules$2f40$rocicorp$2f$lock$2f$out$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lock"]();
    #enableScheduledPersist;
    #enableScheduledRefresh;
    #enablePullAndPushInOpen;
    #persistScheduler = new ProcessScheduler(()=>this.persist(), PERSIST_IDLE_TIMEOUT_MS, PERSIST_THROTTLE_MS, this.#closeAbortController.signal);
    #onPersist;
    #refreshScheduler = new ProcessScheduler(()=>this.refresh(), REFRESH_IDLE_TIMEOUT_MS, REFRESH_THROTTLE_MS, this.#closeAbortController.signal);
    /**
   * The options used to control the {@link pull} and push request behavior. This
   * object is live so changes to it will affect the next pull or push call.
   */ get requestOptions() {
        return this.#requestOptions;
    }
    /**
   * `onSync(true)` is called when Replicache transitions from no push or pull
   * happening to at least one happening. `onSync(false)` is called in the
   * opposite case: when Replicache transitions from at least one push or pull
   * happening to none happening.
   *
   * This can be used in a React like app by doing something like the following:
   *
   * ```js
   * const [syncing, setSyncing] = useState(false);
   * useEffect(() => {
   *   rep.onSync = setSyncing;
   * }, [rep]);
   * ```
   */ onSync = null;
    /**
   * `onClientStateNotFound` is called when the persistent client has been
   * garbage collected. This can happen if the client has no pending mutations
   * and has not been used for a while.
   *
   * The default behavior is to reload the page (using `location.reload()`). Set
   * this to `null` or provide your own function to prevent the page from
   * reloading automatically.
   */ onClientStateNotFound = reload;
    /**
   * `onUpdateNeeded` is called when a code update is needed.
   *
   * A code update can be needed because:
   * - the server no longer supports the {@link pushVersion},
   *   {@link pullVersion} or {@link schemaVersion} of the current code.
   * - a new Replicache client has created a new client group, because its code
   *   has different mutators, indexes, schema version and/or format version
   *   from this Replicache client. This is likely due to the new client having
   *   newer code. A code update is needed to be able to locally sync with this
   *   new Replicache client (i.e. to sync while offline, the clients can still
   *   sync with each other via the server).
   *
   * The default behavior is to reload the page (using `location.reload()`). Set
   * this to `null` or provide your own function to prevent the page from
   * reloading automatically. You may want to provide your own function to
   * display a toast to inform the end user there is a new version of your app
   * available and prompting them to refresh.
   */ onUpdateNeeded = reload;
    /**
   * This gets called when we get an HTTP unauthorized (401) response from the
   * push or pull endpoint. Set this to a function that will ask your user to
   * reauthenticate.
   */ getAuth = null;
    // These three are used for testing
    onPushInvoked = ()=>void 0;
    onBeginPull = ()=>void 0;
    onRecoverMutations = (r)=>r;
    constructor(options, implOptions = {}){
        validateOptions(options);
        const { name, logLevel = "info", logSinks = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$logger$40$5$2e$4$2e$0$2f$node_modules$2f40$rocicorp$2f$logger$2f$out$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consoleLogSink"]
        ], pullURL = "", auth, pushDelay = 10, pushURL = "", schemaVersion = "", pullInterval = 6e4, mutators = {}, requestOptions = {}, puller, pusher, indexes = {}, clientMaxAgeMs = CLIENT_MAX_INACTIVE_TIME } = options;
        const { enableMutationRecovery = true, enableScheduledPersist = true, enableScheduledRefresh = true, enablePullAndPushInOpen = true, enableClientGroupForking = true, onClientsDeleted = ()=>{} } = implOptions;
        this.#zero = implOptions.zero;
        this.#auth = auth ?? "";
        this.pullURL = pullURL;
        this.pushURL = pushURL;
        this.name = name;
        this.schemaVersion = schemaVersion;
        this.pullInterval = pullInterval;
        this.pushDelay = pushDelay;
        this.puller = puller ?? getDefaultPuller(this);
        this.pusher = pusher ?? getDefaultPusher(this);
        this.#enableScheduledPersist = enableScheduledPersist;
        this.#enableScheduledRefresh = enableScheduledRefresh;
        this.#enablePullAndPushInOpen = enablePullAndPushInOpen;
        this.#lc = createLogContext(logLevel, logSinks, {
            name
        });
        this.#lc.debug?.("Constructing Replicache", {
            name,
            "replicache version": version
        });
        this.#subscriptions = new SubscriptionsManagerImpl(this.#queryInternal, this.#lc, this.#closeAbortController.signal);
        const kvStoreProvider = getKVStoreProvider(this.#lc, options.kvStore);
        this.#kvStoreProvider = kvStoreProvider;
        const perKVStore = kvStoreProvider.create(this.idbName);
        this.#idbDatabases = new IDBDatabasesStore(kvStoreProvider.create);
        this.perdag = new StoreImpl(perKVStore, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newRandomHash"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertHash"]);
        this.memdag = new LazyStore(this.perdag, LAZY_STORE_SOURCE_CHUNK_CACHE_SIZE_LIMIT, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newRandomHash"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertHash"]);
        const readyResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        this.#ready = readyResolver.promise;
        const { minDelayMs = MIN_DELAY_MS, maxDelayMs = MAX_DELAY_MS } = requestOptions;
        this.#requestOptions = {
            maxDelayMs,
            minDelayMs
        };
        const visibilityWatcher = getDocumentVisibilityWatcher(getBrowserGlobal("document"), 0, this.#closeAbortController.signal);
        this.#pullConnectionLoop = new ConnectionLoop(this.#lc.withContext("PULL"), new PullDelegate(this, ()=>this.#invokePull()), visibilityWatcher);
        this.#pushConnectionLoop = new ConnectionLoop(this.#lc.withContext("PUSH"), new PushDelegate(this, ()=>this.#invokePush()));
        this.mutate = this.#registerMutators(mutators);
        const profileIDResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        this.#profileIDPromise = profileIDResolver.promise;
        const clientGroupIDResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        this.#clientGroupIDPromise = clientGroupIDResolver.promise;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this.#onPersist = initOnPersistChannel(this.name, this.#closeAbortController.signal, (persistInfo)=>{
            void this.#handlePersist(persistInfo);
        });
        void this.#open(indexes, enableClientGroupForking, enableMutationRecovery, clientMaxAgeMs, profileIDResolver.resolve, clientGroupIDResolver.resolve, readyResolver.resolve, onClientsDeleted);
    }
    async #open(indexes, enableClientGroupForking, enableMutationRecovery, clientMaxAgeMs, profileIDResolver, resolveClientGroupID, resolveReady, onClientsDeleted) {
        const { clientID } = this;
        await closingInstances.get(this.name);
        await this.#idbDatabases.getProfileID().then(profileIDResolver);
        await this.#idbDatabases.putDatabase(this.#idbDatabase);
        const [client, headHash, , isNewClientGroup] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initClientV6"])(clientID, this.#lc, this.perdag, Object.keys(this.#mutatorRegistry), indexes, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"], enableClientGroupForking);
        resolveClientGroupID(client.clientGroupID);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(this.memdag, (write)=>write.setHead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"], headHash));
        await this.#zero?.init(headHash, this.memdag);
        resolveReady();
        if (this.#enablePullAndPushInOpen) {
            this.pull().catch(noop2);
            this.push().catch(noop2);
        }
        const { signal } = this.#closeAbortController;
        startHeartbeats(clientID, this.perdag, ()=>{
            this.#clientStateNotFoundOnClient(clientID);
        }, HEARTBEAT_INTERVAL, this.#lc, signal);
        initClientGC(clientID, this.perdag, clientMaxAgeMs, GC_INTERVAL, onClientsDeleted, this.#lc, signal);
        initCollectIDBDatabases(this.#idbDatabases, this.#kvStoreProvider.drop, COLLECT_IDB_INTERVAL, INITIAL_COLLECT_IDB_DELAY, 2 * clientMaxAgeMs, enableMutationRecovery, onClientsDeleted, this.#lc, signal);
        initClientGroupGC(this.perdag, enableMutationRecovery, onClientsDeleted, this.#lc, signal);
        initNewClientChannel(this.name, this.idbName, signal, client.clientGroupID, isNewClientGroup, ()=>{
            this.#fireOnUpdateNeeded(updateNeededReasonNewClientGroup);
        }, this.perdag);
        setIntervalWithSignal(()=>this.recoverMutations(), RECOVER_MUTATIONS_INTERVAL_MS, signal);
        void this.recoverMutations();
        getBrowserGlobal("document")?.addEventListener("visibilitychange", this.#onVisibilityChange);
    }
    #onVisibilityChange = async ()=>{
        if (this.#closed) {
            return;
        }
        if (getBrowserGlobal("document")?.visibilityState !== "visible") {
            return;
        }
        await this.#checkForClientStateNotFoundAndCallHandler();
    };
    async #checkForClientStateNotFoundAndCallHandler() {
        const { clientID } = this;
        const hasClientState2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(this.perdag, (read)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasClientState"])(clientID, read));
        if (!hasClientState2) {
            this.#clientStateNotFoundOnClient(clientID);
        }
        return !hasClientState2;
    }
    /**
   * The browser profile ID for this browser profile. Every instance of Replicache
   * browser-profile-wide shares the same profile ID.
   */ get profileID() {
        return this.#profileIDPromise;
    }
    /**
   * The client ID for this instance of Replicache. Each instance of Replicache
   * gets a unique client ID.
   */ get clientID() {
        return this.#clientID;
    }
    /**
   * The client group ID for this instance of Replicache. Instances of
   * Replicache will have the same client group ID if and only if they have
   * the same name, mutators, indexes, schema version, format version, and
   * browser profile.
   */ get clientGroupID() {
        return this.#clientGroupIDPromise;
    }
    /**
   * `onOnlineChange` is called when the {@link online} property changes. See
   * {@link online} for more details.
   */ onOnlineChange = null;
    /**
   * A rough heuristic for whether the client is currently online. Note that
   * there is no way to know for certain whether a client is online - the next
   * request can always fail. This property returns true if the last sync attempt succeeded,
   * and false otherwise.
   */ get online() {
        return this.#online;
    }
    /**
   * Whether the Replicache database has been closed. Once Replicache has been
   * closed it no longer syncs and you can no longer read or write data out of
   * it. After it has been closed it is pretty much useless and should not be
   * used any more.
   */ get closed() {
        return this.#closed;
    }
    /**
   * Closes this Replicache instance.
   *
   * When closed all subscriptions end and no more read or writes are allowed.
   */ async close() {
        this.#closed = true;
        const { promise, resolve } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        closingInstances.set(this.name, promise);
        this.#closeAbortController.abort();
        getBrowserGlobal("document")?.removeEventListener("visibilitychange", this.#onVisibilityChange);
        await this.#ready;
        const closingPromises = [
            this.memdag.close(),
            this.perdag.close(),
            this.#idbDatabases.close()
        ];
        this.#pullConnectionLoop.close();
        this.#pushConnectionLoop.close();
        this.#subscriptions.clear();
        await Promise.all(closingPromises);
        closingInstances.delete(this.name);
        resolve();
    }
    async maybeEndPull(syncHead, requestID) {
        for(;;){
            if (this.#closed) {
                return;
            }
            await this.#ready;
            const { clientID } = this;
            const lc = this.#lc.withContext("maybeEndPull").withContext("requestID", requestID);
            const { replayMutations, diffs, oldMainHead, mainHead } = await maybeEndPull(this.memdag, lc, syncHead, clientID, this.#subscriptions, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"]);
            if (!replayMutations || replayMutations.length === 0) {
                this.#zero?.advance(oldMainHead, mainHead, diffs.get("") ?? []);
                await this.#subscriptions.fire(diffs);
                void this.#schedulePersist();
                return;
            }
            const zeroData2 = await this.#zero?.getTxData?.(syncHead);
            for (const mutation of replayMutations){
                if (this.#subscriptions.hasPendingSubscriptionRuns) {
                    await Promise.resolve();
                }
                const { meta } = mutation;
                syncHead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWriteNoImplicitCommit"])(this.memdag, (dagWrite)=>rebaseMutationAndCommit(mutation, dagWrite, syncHead, SYNC_HEAD_NAME, this.#mutatorRegistry, lc, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLocalMetaDD31"])(meta) ? meta.clientID : clientID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"], zeroData2));
            }
        }
    }
    #invokePull() {
        if (this.#isPullDisabled()) {
            return Promise.resolve(true);
        }
        return this.#wrapInOnlineCheck(async ()=>{
            try {
                this.#changeSyncCounters(0, 1);
                const { syncHead, requestID, ok } = await this.beginPull();
                if (!ok) {
                    return false;
                }
                if (syncHead !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyHash"]) {
                    await this.maybeEndPull(syncHead, requestID);
                }
            } catch (e) {
                throw await this.#convertToClientStateNotFoundError(e);
            } finally{
                this.#changeSyncCounters(0, -1);
            }
            return true;
        }, "Pull");
    }
    #isPullDisabled() {
        return this.isClientGroupDisabled || this.pullURL === "" && isDefaultPuller(this.puller);
    }
    async #wrapInOnlineCheck(f, name) {
        let online = true;
        try {
            return await f();
        } catch (e) {
            if (e instanceof PushError || e instanceof PullError) {
                online = false;
                this.#lc.debug?.(`${name} threw:
`, e, "\nwith cause:\n", e.causedBy);
            } else if (e instanceof ReportError) {
                this.#lc.error?.(e);
            } else {
                this.#lc.info?.(`${name} threw:
`, e);
            }
            return false;
        } finally{
            if (this.#online !== online) {
                this.#online = online;
                this.onOnlineChange?.(online);
                if (online) {
                    void this.recoverMutations();
                }
            }
        }
    }
    async #wrapInReauthRetries(f, verb, lc, preAuth = noop2, postAuth = noop2) {
        const { clientID } = this;
        let reauthAttempts = 0;
        let lastResult;
        lc = lc.withContext(verb);
        do {
            const requestID = newRequestID(clientID);
            const requestLc = lc.withContext("requestID", requestID);
            const { httpRequestInfo, result } = await f(requestID, requestLc);
            lastResult = result;
            if (!httpRequestInfo) {
                return {
                    result,
                    authFailure: false
                };
            }
            const { errorMessage, httpStatusCode } = httpRequestInfo;
            if (errorMessage || httpStatusCode !== 200) {
                requestLc.error?.(`Got a non 200 response doing ${verb}: ${httpStatusCode}` + (errorMessage ? `: ${errorMessage}` : ""));
            }
            if (httpStatusCode !== httpStatusUnauthorized) {
                return {
                    result,
                    authFailure: false
                };
            }
            if (!this.getAuth) {
                return {
                    result,
                    authFailure: true
                };
            }
            let auth;
            try {
                await preAuth();
                auth = await this.getAuth();
            } finally{
                await postAuth();
            }
            if (auth === null || auth === void 0) {
                return {
                    result,
                    authFailure: true
                };
            }
            this.auth = auth;
            reauthAttempts++;
        }while (reauthAttempts < MAX_REAUTH_TRIES)
        lc.info?.("Tried to reauthenticate too many times");
        return {
            result: lastResult,
            authFailure: true
        };
    }
    #isPushDisabled() {
        return this.isClientGroupDisabled || this.pushURL === "" && isDefaultPusher(this.pusher);
    }
    async #invokePush() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (this.#isPushDisabled()) {
            return true;
        }
        await this.#ready;
        const profileID = await this.#profileIDPromise;
        const { clientID } = this;
        const clientGroupID = await this.#clientGroupIDPromise;
        return this.#wrapInOnlineCheck(async ()=>{
            const { result: pusherResult } = await this.#wrapInReauthRetries(async (requestID, requestLc)=>{
                try {
                    this.#changeSyncCounters(1, 0);
                    const pusherResult2 = await push(requestID, this.memdag, requestLc, profileID, clientGroupID, clientID, this.pusher, this.schemaVersion, PUSH_VERSION_DD31);
                    return {
                        result: pusherResult2,
                        httpRequestInfo: pusherResult2?.httpRequestInfo
                    };
                } finally{
                    this.#changeSyncCounters(-1, 0);
                }
            }, "push", this.#lc);
            if (pusherResult === void 0) {
                return true;
            }
            const { response, httpRequestInfo } = pusherResult;
            if (isVersionNotSupportedResponse(response)) {
                this.#handleVersionNotSupportedResponse(response);
            } else if (isClientStateNotFoundResponse(response)) {
                await this.#clientStateNotFoundOnServer();
            }
            return httpRequestInfo.httpStatusCode === 200;
        }, "Push");
    }
    #handleVersionNotSupportedResponse(response) {
        const reason = {
            type: response.error
        };
        if (response.versionType) {
            reason.versionType = response.versionType;
        }
        this.#fireOnUpdateNeeded(reason);
    }
    /**
   * Push pushes pending changes to the {@link pushURL}.
   *
   * You do not usually need to manually call push. If {@link pushDelay} is
   * non-zero (which it is by default) pushes happen automatically shortly after
   * mutations.
   *
   * If the server endpoint fails push will be continuously retried with an
   * exponential backoff.
   *
   * @param [now=false] If true, push will happen immediately and ignore
   *   {@link pushDelay}, {@link RequestOptions.minDelayMs} as well as the
   *   exponential backoff in case of errors.
   * @returns A promise that resolves when the next push completes. In case of
   * errors the first error will reject the returned promise. Subsequent errors
   * will not be reflected in the promise.
   */ push({ now = false } = {}) {
        return throwIfError(this.#pushConnectionLoop.send(now));
    }
    /**
   * Pull pulls changes from the {@link pullURL}. If there are any changes local
   * changes will get replayed on top of the new server state.
   *
   * If the server endpoint fails pull will be continuously retried with an
   * exponential backoff.
   *
   * @param [now=false] If true, pull will happen immediately and ignore
   *   {@link RequestOptions.minDelayMs} as well as the exponential backoff in
   *   case of errors.
   * @returns A promise that resolves when the next pull completes. In case of
   * errors the first error will reject the returned promise. Subsequent errors
   * will not be reflected in the promise.
   */ pull({ now = false } = {}) {
        return throwIfError(this.#pullConnectionLoop.send(now));
    }
    /**
   * Applies an update from the server to Replicache.
   * Throws an error if cookie does not match. In that case the server thinks
   * this client has a different cookie than it does; the caller should disconnect
   * from the server and re-register, which transmits the cookie the client actually
   * has.
   *
   * @experimental This method is under development and its semantics will change.
   */ async poke(poke) {
        await this.#ready;
        const { clientID } = this;
        const requestID = newRequestID(clientID);
        const lc = this.#lc.withContext("handlePullResponse").withContext("requestID", requestID);
        const { pullResponse } = poke;
        if (isVersionNotSupportedResponse(pullResponse)) {
            this.#handleVersionNotSupportedResponse(pullResponse);
            return;
        }
        if (isClientStateNotFoundResponse(pullResponse)) {
            await this.#clientStateNotFoundOnServer();
            return;
        }
        const result = await handlePullResponseV1(lc, this.memdag, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(poke.baseCookie), pullResponse, clientID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"]);
        switch(result.type){
            case Applied:
                await this.maybeEndPull(result.syncHead, requestID);
                break;
            case CookieMismatch:
                throw new Error("unexpected base cookie for poke: " + JSON.stringify(poke));
            case NoOp:
                break;
        }
    }
    async beginPull() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        await this.#ready;
        const profileID = await this.profileID;
        const { clientID } = this;
        const clientGroupID = await this.#clientGroupIDPromise;
        const { result: { beginPullResponse, requestID } } = await this.#wrapInReauthRetries(async (requestID2, requestLc)=>{
            const beginPullResponse2 = await beginPullV1(profileID, clientID, clientGroupID, this.schemaVersion, this.puller, requestID2, this.memdag, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"], requestLc);
            return {
                result: {
                    beginPullResponse: beginPullResponse2,
                    requestID: requestID2
                },
                httpRequestInfo: beginPullResponse2.httpRequestInfo
            };
        }, "pull", this.#lc, ()=>this.#changeSyncCounters(0, -1), ()=>this.#changeSyncCounters(0, 1));
        const { pullResponse } = beginPullResponse;
        if (isVersionNotSupportedResponse(pullResponse)) {
            this.#handleVersionNotSupportedResponse(pullResponse);
        } else if (isClientStateNotFoundResponse(beginPullResponse.pullResponse)) {
            await this.#clientStateNotFoundOnServer();
        }
        const { syncHead, httpRequestInfo } = beginPullResponse;
        return {
            requestID,
            syncHead,
            ok: httpRequestInfo.httpStatusCode === 200
        };
    }
    persist() {
        return this.#persistLock.withLock(async ()=>{
            const { clientID } = this;
            await this.#ready;
            if (this.#closed) {
                return;
            }
            try {
                await persistDD31(this.#lc, clientID, this.memdag, this.perdag, this.#mutatorRegistry, ()=>this.#closed, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"], this.#zero?.getTxData);
            } catch (e) {
                if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientStateNotFoundError"]) {
                    this.#clientStateNotFoundOnClient(clientID);
                } else if (this.#closed) {
                    this.#lc.debug?.("Exception persisting during close", e);
                } else {
                    throw e;
                }
            }
            const clientGroupID = await this.#clientGroupIDPromise;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(clientGroupID);
            this.#onPersist({
                clientID,
                clientGroupID
            });
        });
    }
    async refresh() {
        await this.#ready;
        const { clientID } = this;
        if (this.#closed) {
            return;
        }
        let refreshResult;
        try {
            refreshResult = await refresh(this.#lc, this.memdag, this.perdag, clientID, this.#mutatorRegistry, this.#subscriptions, ()=>this.closed, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"], this.#zero);
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientStateNotFoundError"]) {
                this.#clientStateNotFoundOnClient(clientID);
            } else if (this.#closed) {
                this.#lc.debug?.("Exception refreshing during close", e);
            } else {
                throw e;
            }
        }
        if (refreshResult !== void 0) {
            await this.#subscriptions.fire(refreshResult.diffs);
        }
    }
    #fireOnClientStateNotFound() {
        this.onClientStateNotFound?.();
    }
    #clientStateNotFoundOnClient(clientID) {
        this.#lc.error?.(`Client state not found on client, clientID: ${clientID}`);
        this.#fireOnClientStateNotFound();
    }
    async #clientStateNotFoundOnServer() {
        const clientGroupID = await this.#clientGroupIDPromise;
        this.#lc.error?.(`Client state not found on server, clientGroupID: ${clientGroupID}`);
        await this.disableClientGroup();
        this.#fireOnClientStateNotFound();
    }
    async disableClientGroup() {
        const clientGroupID = await this.#clientGroupIDPromise;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(clientGroupID);
        this.isClientGroupDisabled = true;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(this.perdag, (dagWrite)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disableClientGroup"])(clientGroupID, dagWrite));
    }
    #fireOnUpdateNeeded(reason) {
        this.#lc.debug?.(`Update needed, reason: ${reason}`);
        this.onUpdateNeeded?.(reason);
    }
    async #schedulePersist() {
        if (!this.#enableScheduledPersist) {
            return;
        }
        await this.#schedule("persist", this.#persistScheduler);
    }
    async #handlePersist(persistInfo) {
        this.#lc.debug?.("Handling persist", persistInfo);
        const clientGroupID = await this.#clientGroupIDPromise;
        if (persistInfo.clientGroupID === clientGroupID) {
            void this.#scheduleRefresh();
        }
    }
    async #scheduleRefresh() {
        if (!this.#enableScheduledRefresh) {
            return;
        }
        await this.#schedule("refresh from storage", this.#refreshScheduler);
    }
    async #schedule(name, scheduler) {
        try {
            await scheduler.schedule();
        } catch (e) {
            if (e instanceof AbortError) {
                this.#lc.debug?.(`Scheduled ${name} did not complete before close.`);
            } else {
                this.#lc.error?.(`Error during ${name}`, e);
            }
        }
    }
    #changeSyncCounters(pushDelta, pullDelta) {
        this.#pushCounter += pushDelta;
        this.#pullCounter += pullDelta;
        const delta = pushDelta + pullDelta;
        const counter = this.#pushCounter + this.#pullCounter;
        if (delta === 1 && counter === 1 || counter === 0) {
            const syncing = counter > 0;
            Promise.resolve().then(()=>this.onSync?.(syncing));
        }
    }
    /**
   * Subscribe to the result of a {@link query}. The `body` function is
   * evaluated once and its results are returned via `onData`.
   *
   * Thereafter, each time the the result of `body` changes, `onData` is fired
   * again with the new result.
   *
   * `subscribe()` goes to significant effort to avoid extraneous work
   * re-evaluating subscriptions:
   *
   * 1. subscribe tracks the keys that `body` accesses each time it runs. `body`
   *    is only re-evaluated when those keys change.
   * 2. subscribe only re-fires `onData` in the case that a result changes by
   *    way of the `isEqual` option which defaults to doing a deep JSON value
   *    equality check.
   *
   * Because of (1), `body` must be a pure function of the data in Replicache.
   * `body` must not access anything other than the `tx` parameter passed to it.
   *
   * Although subscribe is as efficient as it can be, it is somewhat constrained
   * by the goal of returning an arbitrary computation of the cache. For even
   * better performance (but worse dx), see {@link experimentalWatch}.
   *
   * If an error occurs in the `body` the `onError` function is called if
   * present. Otherwise, the error is logged at log level 'error'.
   *
   * To cancel the subscription, call the returned function.
   *
   * @param body The function to evaluate to get the value to pass into
   *    `onData`.
   * @param options Options is either a function or an object. If it is a
   *    function it is equivalent to passing it as the `onData` property of an
   *    object.
   */ subscribe(body, options) {
        if (typeof options === "function") {
            options = {
                onData: options
            };
        }
        const { onData, onError, onDone, isEqual } = options;
        return this.#subscriptions.add(new SubscriptionImpl(body, onData, onError, onDone, isEqual));
    }
    experimentalWatch(callback, options) {
        return this.#subscriptions.add(new WatchSubscription(callback, options));
    }
    /**
   * Query is used for read transactions. It is recommended to use transactions
   * to ensure you get a consistent view across multiple calls to `get`, `has`
   * and `scan`.
   */ query(body) {
        return this.#queryInternal(body);
    }
    get cookie() {
        return this.#ready.then(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(this.memdag, async (dagRead)=>{
                const mainHeadHash = await dagRead.getHead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"]);
                if (!mainHeadHash) {
                    throw new Error("Internal no main head found");
                }
                const baseSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSnapshotFromHash"])(mainHeadHash, dagRead);
                const baseSnapshotMeta = baseSnapshot.meta;
                const cookie = baseSnapshotMeta.cookieJSON;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertCookie"])(cookie);
                return cookie;
            }));
    }
    #queryInternal = async (body)=>{
        await this.#ready;
        const { clientID } = this;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(this.memdag, async (dagRead)=>{
            try {
                const dbRead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readFromDefaultHead"])(dagRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"]);
                const tx = new ReadTransactionImpl(clientID, dbRead, this.#lc);
                return await body(tx);
            } catch (ex) {
                throw await this.#convertToClientStateNotFoundError(ex);
            }
        });
    };
    #register(name, mutatorImpl) {
        this.#mutatorRegistry[name] = mutatorImpl;
        return (args)=>{
            const trackingData = name === "_zero_crud" ? void 0 : this.#zero?.trackMutation();
            const result = this.#mutate(trackingData, name, mutatorImpl, args, performance.now());
            if (trackingData) {
                return {
                    client: result,
                    server: trackingData.serverPromise,
                    then: (onFulfilled, onRejected)=>{
                        this.#lc.warn?.("Awaiting the mutator result directly is being deprecated. Please use `await z.mutate[mutatorName].client` or `await result.mutate[mutatorName].server`");
                        return result.then(onFulfilled, onRejected);
                    }
                };
            }
            return result;
        };
    }
    #registerMutators(regs) {
        const rv = /* @__PURE__ */ Object.create(null);
        for(const k in regs){
            rv[k] = this.#register(k, regs[k]);
        }
        return rv;
    }
    async #mutate(trackingData, name, mutatorImpl, args, timestamp) {
        const frozenArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(args ?? null);
        if (this.#subscriptions.hasPendingSubscriptionRuns) {
            await Promise.resolve();
        }
        await this.#ready;
        const { clientID } = this;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWriteNoImplicitCommit"])(this.memdag, async (dagWrite)=>{
            try {
                let result;
                let newHead;
                let diffs;
                let headHash;
                try {
                    headHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mustGetHeadHash"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"], dagWrite);
                    const originalHash = null;
                    const dbWrite = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newWriteLocal"])(headHash, name, frozenArgs, originalHash, dagWrite, timestamp, clientID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"]);
                    const mutationID = await dbWrite.getMutationID();
                    const tx = new WriteTransactionImpl(clientID, mutationID, "initial", await this.#zero?.getTxData(headHash, {
                        openLazyRead: dagWrite
                    }), dbWrite, this.#lc);
                    if (trackingData) {
                        this.#zero?.mutationIDAssigned(trackingData.ephemeralID, mutationID);
                    }
                    result = await mutatorImpl(tx, args);
                    throwIfClosed(dbWrite);
                    const lastMutationID = await dbWrite.getMutationID();
                    [newHead, diffs] = await dbWrite.commitWithDiffs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEAD_NAME"], this.#subscriptions);
                    this.lastMutationID = lastMutationID;
                } catch (e) {
                    if (trackingData) {
                        this.#zero?.rejectMutation(trackingData.ephemeralID, e);
                    }
                    throw e;
                }
                this.#zero?.advance(headHash, newHead, diffs.get("") ?? []);
                this.#pushConnectionLoop.send(false).catch(()=>void 0);
                await this.#subscriptions.fire(diffs);
                void this.#schedulePersist();
                return result;
            } catch (ex) {
                throw await this.#convertToClientStateNotFoundError(ex);
            }
        });
    }
    /**
   * In the case we get a ChunkNotFoundError we check if the client got garbage
   * collected and if so change the error to a ClientStateNotFoundError instead
   */ async #convertToClientStateNotFoundError(ex) {
        if (ex instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChunkNotFoundError"] && await this.#checkForClientStateNotFoundAndCallHandler()) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientStateNotFoundError"](this.clientID);
        }
        return ex;
    }
    recoverMutations() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    /**
   * List of pending mutations. The order of this is from oldest to newest.
   *
   * Gives a list of local mutations that have `mutationID` >
   * `syncHead.mutationID` that exists on the main client group.
   *
   * @experimental This method is experimental and may change in the future.
   */ experimentalPendingMutations() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(this.memdag, pendingMutationsForAPI);
    }
};
var closingInstances = /* @__PURE__ */ new Map();
async function throwIfError(p) {
    const res = await p;
    if (res) {
        throw res.error;
    }
}
function reload() {
    if (typeof location !== "undefined") {
        location.reload();
    }
}
function validateOptions(options) {
    const { name, clientMaxAgeMs } = options;
    if (typeof name !== "string" || !name) {
        throw new TypeError("name is required and must be non-empty");
    }
    if (clientMaxAgeMs !== void 0) {
        const min = Math.max(GC_INTERVAL, HEARTBEAT_INTERVAL);
        if (typeof clientMaxAgeMs !== "number" || clientMaxAgeMs <= min) {
            throw new TypeError(`clientAgeMaxMs must be a number larger than ${min}ms`);
        }
    }
}
// ../shared/src/subscribable.ts
var Subscribable = class {
    _listeners = /* @__PURE__ */ new Set();
    /**
   * Subscribe to the subscribable.
   *
   * @param listener - The listener to subscribe to.
   * @returns A function to unsubscribe from the subscribable.
   */ subscribe = (listener)=>{
        this._listeners.add(listener);
        return ()=>{
            this._listeners.delete(listener);
        };
    };
    /**
   * Notify all listeners.
   *
   * @param update - The update to notify listeners with.
   */ notify = (update)=>{
        this._listeners.forEach((listener)=>listener(update));
    };
    hasListeners = ()=>this._listeners.size > 0;
    /**
   * Unsubscribe all listeners.
   */ cleanup = ()=>{
        this._listeners.clear();
    };
};
// ../zero-protocol/src/delete-clients.ts
var deleteClientsBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readonlyObject"])({
    clientIDs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readonlyArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()).optional(),
    clientGroupIDs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readonlyArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()).optional()
}));
var deleteClientsMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("deleteClients"),
    deleteClientsBodySchema
]);
// ../zero-protocol/src/queries-patch.ts
var putOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("put"),
    hash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number().optional()
});
var upPutOpSchema = putOpSchema.extend({
    // All fields are optional in this transitional period.
    // - ast is filled in for client queries
    // - name and args are filled in for custom queries
    ast: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["astSchema"].optional(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string().optional(),
    args: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readonly"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonSchema"])).optional()
});
var delOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("del"),
    hash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()
});
var clearOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("clear")
});
var patchOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(putOpSchema, delOpSchema, clearOpSchema);
var upPatchOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(upPutOpSchema, delOpSchema, clearOpSchema);
var queriesPatchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(patchOpSchema);
var upQueriesPatchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(upPatchOpSchema);
// ../zero-protocol/src/connect.ts
var connectedBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    wsid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number().optional()
});
var connectedMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("connected"),
    connectedBodySchema
]);
var userQueryMutateParamsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    /**
   * A client driven URL to send queries or mutations to.
   * This URL must match one of the URLs set in the zero config.
   *
   * E.g., Given the following environment variable:
   * ZERO_GET_QUERIES_URL=[https://*.example.com/query]
   *
   * Then this URL could be:
   * https://myapp.example.com/query
   */ url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string().optional(),
    // The query string to use for query or mutation calls.
    queryParams: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()).optional()
});
var initConnectionBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    desiredQueriesPatch: upQueriesPatchSchema,
    clientSchema: clientSchemaSchema.optional(),
    deleted: deleteClientsBodySchema.optional(),
    // parameters to configure the mutate endpoint
    userPushParams: userQueryMutateParamsSchema.optional(),
    // parameters to configure the query endpoint
    userQueryParams: userQueryMutateParamsSchema.optional(),
    /**
   * `activeClients` is an optional array of client IDs that are currently active
   * in the client group. This is used to inform the server about the clients
   * that are currently active (aka running, aka alive), so it can inactive
   * queries from inactive clients.
   */ activeClients: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()).optional()
});
var initConnectionMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("initConnection"),
    initConnectionBodySchema
]);
function encodeSecProtocols(initConnectionMessage, authToken) {
    const protocols = {
        initConnectionMessage,
        authToken
    };
    const bytes = new TextEncoder().encode(JSON.stringify(protocols));
    const s = Array.from(bytes, (byte)=>String.fromCharCode(byte)).join("");
    return encodeURIComponent(btoa(s));
}
// ../zero-protocol/src/error.ts
var basicErrorKindSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["literalUnion"])(error_kind_enum_exports.AuthInvalidated, error_kind_enum_exports.ClientNotFound, error_kind_enum_exports.InvalidConnectionRequest, error_kind_enum_exports.InvalidConnectionRequestBaseCookie, error_kind_enum_exports.InvalidConnectionRequestLastMutationID, error_kind_enum_exports.InvalidConnectionRequestClientDeleted, error_kind_enum_exports.InvalidMessage, error_kind_enum_exports.InvalidPush, error_kind_enum_exports.MutationRateLimited, error_kind_enum_exports.MutationFailed, error_kind_enum_exports.Unauthorized, error_kind_enum_exports.VersionNotSupported, error_kind_enum_exports.SchemaVersionNotSupported, error_kind_enum_exports.Internal);
var basicErrorBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    kind: basicErrorKindSchema,
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()
});
var backoffErrorKindSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["literalUnion"])(error_kind_enum_exports.Rebalance, error_kind_enum_exports.Rehome, error_kind_enum_exports.ServerOverloaded);
var backoffBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    kind: backoffErrorKindSchema,
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    minBackoffMs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number().optional(),
    maxBackoffMs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number().optional(),
    // Query parameters to send in the next reconnect. In the event of
    // a conflict, these will be overridden by the parameters used by
    // the client; it is the responsibility of the server to avoid
    // parameter name conflicts.
    //
    // The parameters will only be added to the immediately following
    // reconnect, and not after that.
    reconnectParams: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()).optional()
});
var errorKindSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(basicErrorKindSchema, backoffErrorKindSchema);
var errorBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(basicErrorBodySchema, backoffBodySchema);
var errorMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("error"),
    errorBodySchema
]);
// ../zero-protocol/src/mutation-type-enum.ts
var CRUD = "crud";
var Custom = "custom";
// ../zero-protocol/src/push.ts
var CRUD_MUTATION_NAME = "_zero_crud";
var insertOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("insert"),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    primaryKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryKeySchema"],
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rowSchema"]
});
var upsertOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("upsert"),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    primaryKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryKeySchema"],
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rowSchema"]
});
var updateOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("update"),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    primaryKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryKeySchema"],
    // Partial value with at least the primary key fields
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rowSchema"]
});
var deleteOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("delete"),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    primaryKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryKeySchema"],
    // Partial value representing the primary key
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryKeyValueRecordSchema"]
});
var crudOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(insertOpSchema, upsertOpSchema, updateOpSchema, deleteOpSchema);
var crudArgSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    ops: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(crudOpSchema)
});
var crudArgsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    crudArgSchema
]);
var crudMutationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal(CRUD),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number(),
    clientID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal(CRUD_MUTATION_NAME),
    args: crudArgsSchema,
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number()
});
var customMutationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal(Custom),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number(),
    clientID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    args: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonSchema"]),
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number()
});
var mutationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(crudMutationSchema, customMutationSchema);
var pushBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    clientGroupID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    mutations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(mutationSchema),
    pushVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number(),
    // For legacy (CRUD) mutations, the schema is tied to the client group /
    // sync connection. For custom mutations, schema versioning is delegated
    // to the custom protocol / api-server.
    schemaVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number().optional(),
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number(),
    requestID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()
});
var pushMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("push"),
    pushBodySchema
]);
var mutationIDSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number(),
    clientID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()
});
var appErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("app"),
    // The user can return any additional data here
    details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonSchema"].optional()
});
var zeroErrorSchema2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["literalUnion"])("oooMutation", "alreadyProcessed"),
    details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonSchema"].optional()
});
var mutationOkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    // The user can return any additional data here
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonSchema"].optional()
});
var mutationErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(appErrorSchema, zeroErrorSchema2);
var mutationResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(mutationOkSchema, mutationErrorSchema);
var mutationResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    id: mutationIDSchema,
    result: mutationResultSchema
});
var pushOkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    mutations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(mutationResponseSchema)
});
var unsupportedPushVersionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("unsupportedPushVersion"),
    // optional for backwards compatibility
    // This field is included so the client knows which mutations
    // were not processed by the server.
    mutationIDs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(mutationIDSchema).optional()
});
var unsupportedSchemaVersionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("unsupportedSchemaVersion"),
    // optional for backwards compatibility
    // This field is included so the client knows which mutations
    // were not processed by the server.
    mutationIDs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(mutationIDSchema).optional()
});
var httpErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("http"),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number(),
    details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    mutationIDs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(mutationIDSchema).optional()
});
var zeroPusherErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("zeroPusher"),
    details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    mutationIDs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(mutationIDSchema).optional()
});
var pushErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(unsupportedPushVersionSchema, unsupportedSchemaVersionSchema, httpErrorSchema, zeroPusherErrorSchema);
var pushResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(pushOkSchema, pushErrorSchema);
var pushResponseMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("pushResponse"),
    pushResponseSchema
]);
var ackMutationResponsesMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("ackMutationResponses"),
    mutationIDSchema
]);
var pushParamsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    appID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()
});
function mapCRUD(arg, map) {
    return {
        ops: arg.ops.map(({ op, tableName, primaryKey, value })=>({
                op,
                tableName: map.tableName(tableName),
                primaryKey: map.columns(tableName, primaryKey),
                value: map.row(tableName, value)
            }))
    };
}
// ../zero-protocol/src/mutations-patch.ts
var putOpSchema2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("put"),
    mutation: mutationResponseSchema
});
var delOpSchema2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("del"),
    id: mutationIDSchema
});
var patchOpSchema2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(putOpSchema2, delOpSchema2);
var mutationsPatchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(patchOpSchema2);
// ../zero-protocol/src/row-patch.ts
var putOpSchema3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("put"),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rowSchema"]
});
var updateOpSchema2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("update"),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryKeyValueRecordSchema"],
    merge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonObjectSchema"].optional(),
    constrain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()).optional()
});
var delOpSchema3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("del"),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryKeyValueRecordSchema"]
});
var clearOpSchema2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("clear")
});
var rowPatchOpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(putOpSchema3, updateOpSchema2, delOpSchema3, clearOpSchema2);
var rowsPatchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].array(rowPatchOpSchema);
// ../zero-protocol/src/version.ts
var versionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string();
var nullableVersionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(versionSchema, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].null());
// ../zero-protocol/src/poke.ts
var pokeStartBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    pokeID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    // We always specify a Version as our cookie, but Replicache starts clients
    // with initial cookie `null`, before the first request. So we have to be
    // able to send a base cookie with value `null` to match that state.
    baseCookie: nullableVersionSchema,
    /**
   * This field is always set if the poke contains a `rowsPatch`.
   * It may be absent for patches that only update clients and queries.
   */ schemaVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
        minSupportedVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number(),
        maxSupportedVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number()
    }).optional(),
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number().optional()
});
var pokePartBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    pokeID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    // Changes to last mutation id by client id.
    lastMutationIDChanges: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number()).optional(),
    // Patches to the desired query sets by client id.
    desiredQueriesPatches: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].record(queriesPatchSchema).optional(),
    // Patches to the set of queries for which entities are sync'd in
    // rowsPatch.
    gotQueriesPatch: queriesPatchSchema.optional(),
    // Patches to the rows set.
    rowsPatch: rowsPatchSchema.optional(),
    // Mutation results patch
    mutationsPatch: mutationsPatchSchema.optional()
});
var pokeEndBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    pokeID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    // Note: This should be ignored (and may be empty) if cancel === `true`.
    cookie: versionSchema,
    // If `true`, the poke with id `pokeID` should be discarded without
    // applying it.
    cancel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].boolean().optional()
});
var pokeStartMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("pokeStart"),
    pokeStartBodySchema
]);
var pokePartMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("pokePart"),
    pokePartBodySchema
]);
var pokeEndMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("pokeEnd"),
    pokeEndBodySchema
]);
// ../zero-protocol/src/pong.ts
var pongBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({});
var pongMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("pong"),
    pongBodySchema
]);
// ../zero-protocol/src/pull.ts
var pullRequestBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    clientGroupID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    cookie: nullableVersionSchema,
    requestID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()
});
var pullResponseBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    cookie: versionSchema,
    // Matches pullRequestBodySchema requestID that initiated this response
    requestID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string(),
    lastMutationIDChanges: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number())
});
var pullRequestMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("pull"),
    pullRequestBodySchema
]);
var pullResponseMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].literal("pull"),
    pullResponseBodySchema
]);
// ../zero-protocol/src/down.ts
var downstreamSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(connectedMessageSchema, errorMessageSchema, pongMessageSchema, pokeStartMessageSchema, pokePartMessageSchema, pokeEndMessageSchema, pullResponseMessageSchema, deleteClientsMessageSchema, pushResponseMessageSchema, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inspectDownMessageSchema"], transformErrorMessageSchema);
// ../zero-protocol/src/protocol-version.ts
var PROTOCOL_VERSION = 29;
var MIN_SERVER_SUPPORTED_SYNC_PROTOCOL = 18;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(MIN_SERVER_SUPPORTED_SYNC_PROTOCOL < PROTOCOL_VERSION);
// ../zero-schema/src/name-mapper.ts
function clientToServer(tables) {
    return createMapperFrom("client", tables);
}
function serverToClient(tables) {
    return createMapperFrom("server", tables);
}
function createMapperFrom(src, tables) {
    const mapping = new Map(Object.entries(tables).map(([tableName, { serverName: serverTableName, columns }])=>{
        let allColumnsSame = true;
        const names = {};
        for (const [name, { serverName }] of Object.entries(columns)){
            if (serverName && serverName !== name) {
                allColumnsSame = false;
            }
            if (src === "client") {
                names[name] = serverName ?? name;
            } else {
                names[serverName ?? name] = name;
            }
        }
        return [
            src === "client" ? tableName : serverTableName ?? tableName,
            {
                tableName: src === "client" ? serverTableName ?? tableName : tableName,
                columns: names,
                allColumnsSame
            }
        ];
    }));
    return new NameMapper(mapping);
}
var NameMapper = class {
    #tables = /* @__PURE__ */ new Map();
    constructor(tables){
        this.#tables = tables;
    }
    #getTable(src, ctx) {
        const table2 = this.#tables.get(src);
        if (!table2) {
            throw new Error(`unknown table "${src}" ${!ctx ? "" : `in ${JSON.stringify(ctx)}`}`);
        }
        return table2;
    }
    tableName(src, context) {
        return this.#getTable(src, context).tableName;
    }
    columnName(table2, src, ctx) {
        const dst = this.#getTable(table2, ctx).columns[src];
        if (!dst) {
            throw new Error(`unknown column "${src}" of "${table2}" table ${!ctx ? "" : `in ${JSON.stringify(ctx)}`}`);
        }
        return dst;
    }
    row(table2, row) {
        const dest = this.#getTable(table2);
        const { allColumnsSame, columns } = dest;
        if (allColumnsSame) {
            return row;
        }
        const clientRow = {};
        for(const col in row){
            clientRow[columns[col] ?? col] = row[col];
        }
        return clientRow;
    }
    columns(table2, cols) {
        const dest = this.#getTable(table2);
        const { allColumnsSame, columns } = dest;
        return cols === void 0 || allColumnsSame ? cols : cols.map((col)=>columns[col] ?? col);
    }
};
// ../zql/src/mutate/custom.ts
function customMutatorKey(namespace, name) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!namespace.includes("|"), "mutator namespaces must not include a |");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!name.includes("|"), "mutator names must not include a |");
    return `${namespace}|${name}`;
}
// ../zql/src/query/metrics-delegate.ts
function isClientMetric(metric) {
    return metric.endsWith("-client") || metric.endsWith("-end-to-end");
}
// ../zero-client/src/util/socket.ts
function send(ws, data) {
    ws.send(JSON.stringify(data));
}
;
var keyPrefix = "zero-active";
function toLockName(clientGroupID, clientID) {
    return `${keyPrefix}/${clientGroupID}/${clientID}`;
}
function toBroadcastChannelName(clientGroupID) {
    return `${keyPrefix}/${clientGroupID}`;
}
function fromLockName(lockKey) {
    if (!lockKey || !lockKey.startsWith(keyPrefix)) {
        return void 0;
    }
    const parts = lockKey.slice(keyPrefix.length).split("/");
    if (parts.length !== 3) {
        return void 0;
    }
    return {
        clientGroupID: parts[1],
        clientID: parts[2]
    };
}
function ignoreAbortError(e) {
    if (e instanceof Error && e.name === "AbortError") {
        return;
    }
    throw e;
}
var ActiveClientsManager = class _ActiveClientsManager {
    clientGroupID;
    clientID;
    #resolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
    #lockManager;
    #activeClients = /* @__PURE__ */ new Set();
    /**
   * A callback that is called when a client is added to the client group.
   * It receives the client ID of the added client.
   */ onAdd;
    /**
   * A callback that is called when a client is deleted from the client group.
   * It receives the client ID of the deleted client.
   */ onDelete;
    /**
   * Creates an instance of `ActiveClientsManager` for the specified client
   * group and client ID. It will return a promise that resolves when the
   * instance is ready to use, which means that it has successfully acquired the
   * exclusive lock for the client and has retrieved the list of active clients.
   */ static async create(clientGroupID, clientID, signal) {
        const instance = new _ActiveClientsManager(clientGroupID, clientID, signal);
        await instance.#init(signal);
        return instance;
    }
    constructor(clientGroupID, clientID, signal){
        this.clientGroupID = clientGroupID;
        this.clientID = clientID;
        this.#lockManager = getClientLockManager(signal);
        this.#activeClients.add(clientID);
    }
    async #init(signal) {
        const { clientGroupID, clientID } = this;
        const name = toLockName(clientGroupID, clientID);
        const channel = new bc(toBroadcastChannelName(clientGroupID));
        channel.addEventListener("message", (e)=>{
            const client = fromLockName(e.data);
            if (client?.clientGroupID === this.clientGroupID) {
                this.#addClient(client.clientID);
            }
        }, {
            signal
        });
        this.#lockManager.request(name, "exclusive", ()=>this.#resolver.promise).catch(ignoreAbortError);
        signal.addEventListener("abort", ()=>{
            this.#lockManager.release(name, ()=>this.#resolver.resolve());
            channel.close();
        }, {
            once: true
        });
        for (const clientID2 of (await this.#getActiveClients())){
            if (clientID2 !== this.clientID) {
                this.#addClient(clientID2);
            }
        }
        if (!signal.aborted) {
            channel.postMessage(name);
        }
    }
    get activeClients() {
        return this.#activeClients;
    }
    async #getActiveClients() {
        const activeClients = /* @__PURE__ */ new Set();
        for await (const lockName of this.#lockManager.queryExclusive()){
            const client = fromLockName(lockName);
            if (client?.clientGroupID === this.clientGroupID) {
                activeClients.add(client.clientID);
            }
        }
        return activeClients;
    }
    /**
   * This gets called when a new client is added to the client group.
   *
   * It will request a shared lock for the client, and when the exclusive lock
   * is released, it will notify that the client has been deactivated.
   */ #addSharedLockForOtherClient(clientID) {
        const name = toLockName(this.clientGroupID, clientID);
        this.#lockManager.request(name, "shared", ()=>this.#removeClient(clientID)).catch(ignoreAbortError);
    }
    #addClient(clientID) {
        if (!this.#activeClients.has(clientID)) {
            this.#activeClients.add(clientID);
            this.#addSharedLockForOtherClient(clientID);
            this.onAdd?.(clientID);
        }
    }
    #removeClient(clientID) {
        if (this.#activeClients.delete(clientID)) {
            this.onDelete?.(clientID);
        }
    }
};
function getClientLockManager(signal) {
    const locks = getBrowserGlobal("navigator")?.locks;
    if (locks) {
        return new NativeClientLockManager(locks, signal);
    }
    return new MockClientLockManager();
}
var NativeClientLockManager = class {
    #locks;
    #signal;
    constructor(locks, signal){
        this.#locks = locks;
        this.#signal = signal;
    }
    request(name, mode, fn) {
        return this.#locks.request(name, {
            mode,
            signal: this.#signal
        }, fn);
    }
    release(_name, fn) {
        fn();
    }
    async *queryExclusive() {
        const snapshot = await this.#locks.query();
        for (const lock of [
            ...snapshot.held ?? [],
            ...snapshot.pending ?? []
        ]){
            if (lock.mode === "exclusive" && lock.name) {
                yield lock.name;
            }
        }
    }
};
var mockLockNames = /* @__PURE__ */ new Set();
var mockListeners = /* @__PURE__ */ new Set();
var MockClientLockManager = class {
    #listeners = /* @__PURE__ */ new Set();
    request(name, mode, fn) {
        if (mode === "exclusive") {
            mockLockNames.add(name);
        } else {
            mode;
            const listener = (removed)=>{
                if (removed === name) {
                    mockListeners.delete(listener);
                    return fn();
                }
            };
            mockListeners.add(listener);
            this.#listeners.add(listener);
        }
        return Promise.resolve();
    }
    release(name, fn) {
        mockLockNames.delete(name);
        for (const listener of mockListeners){
            listener(name);
        }
        for (const listener of this.#listeners){
            mockListeners.delete(listener);
        }
        fn();
    }
    async *queryExclusive() {
        yield* mockLockNames;
    }
};
// ../zero-client/src/client/connection-state-enum.ts
var Disconnected = 0;
var Connecting = 1;
var Connected = 2;
;
// ../shared/src/btree-set.ts
var MAX_NODE_SIZE = 32;
var BTreeSet = class _BTreeSet {
    #root = emptyLeaf;
    size = 0;
    comparator;
    constructor(comparator2, entries){
        this.comparator = comparator2;
        if (entries) {
            for (const key of entries){
                this.add(key);
            }
        }
    }
    /** Releases the tree so that its size is 0. */ clear() {
        this.#root = emptyLeaf;
        this.size = 0;
    }
    clone() {
        this.#root.isShared = true;
        const ret = new _BTreeSet(this.comparator);
        ret.#root = this.#root;
        ret.size = this.size;
        return ret;
    }
    get(key) {
        return this.#root.get(key, this);
    }
    add(key) {
        if (this.#root.isShared) this.#root = this.#root.clone();
        const result = this.#root.set(key, this);
        if (result === null) return this;
        this.#root = new BNodeInternal([
            this.#root,
            result
        ]);
        return this;
    }
    /**
   * Returns true if the key exists in the B+ tree, false if not.
   * Use get() for best performance; use has() if you need to
   * distinguish between "undefined value" and "key not present".
   * @param key Key to detect
   * @description Computational complexity: O(log size)
   */ has(key) {
        return this.#root.has(key, this);
    }
    /**
   * Removes a single key-value pair from the B+ tree.
   * @param key Key to find
   * @returns true if a pair was found and removed, false otherwise.
   * @description Computational complexity: O(log size)
   */ delete(key) {
        return this.#delete(key);
    }
    #delete(key) {
        let root = this.#root;
        if (root.isShared) {
            this.#root = root = root.clone();
        }
        try {
            return root.delete(key, this);
        } finally{
            let isShared;
            while(root.keys.length <= 1 && root.isInternal()){
                isShared ||= root.isShared;
                this.#root = root = root.keys.length === 0 ? emptyLeaf : root.children[0];
            }
            if (isShared) {
                root.isShared = true;
            }
        }
    }
    keys() {
        return valuesFrom(this.#root, this.comparator, void 0, true);
    }
    values() {
        return valuesFrom(this.#root, this.comparator, void 0, true);
    }
    valuesFrom(lowestKey, inclusive = true) {
        return valuesFrom(this.#root, this.comparator, lowestKey, inclusive);
    }
    valuesReversed() {
        return valuesFromReversed(this.#maxKey(), this.#root, this.comparator, void 0, true);
    }
    valuesFromReversed(highestKey, inclusive = true) {
        return valuesFromReversed(this.#maxKey(), this.#root, this.comparator, highestKey, inclusive);
    }
    /** Gets the highest key in the tree. Complexity: O(1) */ #maxKey() {
        return this.#root.maxKey();
    }
    [Symbol.iterator]() {
        return this.keys();
    }
};
function valuesFrom(root, comparator2, lowestKey, inclusive) {
    const info = findPath(lowestKey, root, comparator2);
    if (info === void 0) {
        return iterator(()=>({
                done: true,
                value: void 0
            }));
    }
    let [nodeQueue, nodeIndex, leaf] = info;
    let i = lowestKey === void 0 ? -1 : indexOf(lowestKey, leaf.keys, 0, comparator2) - 1;
    if (!inclusive && i < leaf.keys.length && // +1 because we did -1 above.
    comparator2(leaf.keys[i + 1], lowestKey) === 0) {
        i++;
    }
    return iterator(()=>{
        for(;;){
            if (++i < leaf.keys.length) {
                return {
                    done: false,
                    value: leaf.keys[i]
                };
            }
            let level = -1;
            for(;;){
                if (++level >= nodeQueue.length) {
                    return {
                        done: true,
                        value: void 0
                    };
                }
                if (++nodeIndex[level] < nodeQueue[level].length) {
                    break;
                }
            }
            for(; level > 0; level--){
                nodeQueue[level - 1] = nodeQueue[level][nodeIndex[level]].children;
                nodeIndex[level - 1] = 0;
            }
            leaf = nodeQueue[0][nodeIndex[0]];
            i = -1;
        }
    });
}
function valuesFromReversed(maxKey, root, comparator2, highestKey, inclusive) {
    if (highestKey === void 0) {
        highestKey = maxKey;
        if (highestKey === void 0) return iterator(()=>({
                done: true,
                value: void 0
            }));
    }
    let [nodeQueue, nodeIndex, leaf] = findPath(highestKey, root, comparator2) || findPath(maxKey, root, comparator2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!nodeQueue[0] || leaf === nodeQueue[0][nodeIndex[0]]);
    let i = indexOf(highestKey, leaf.keys, 0, comparator2);
    if (inclusive && i < leaf.keys.length && comparator2(leaf.keys[i], highestKey) <= 0) {
        i++;
    }
    return iterator(()=>{
        for(;;){
            if (--i >= 0) {
                return {
                    done: false,
                    value: leaf.keys[i]
                };
            }
            let level;
            for(level = -1;;){
                if (++level >= nodeQueue.length) {
                    return {
                        done: true,
                        value: void 0
                    };
                }
                if (--nodeIndex[level] >= 0) {
                    break;
                }
            }
            for(; level > 0; level--){
                nodeQueue[level - 1] = nodeQueue[level][nodeIndex[level]].children;
                nodeIndex[level - 1] = nodeQueue[level - 1].length - 1;
            }
            leaf = nodeQueue[0][nodeIndex[0]];
            i = leaf.keys.length;
        }
    });
}
function findPath(key, root, comparator2) {
    let nextNode = root;
    const nodeQueue = [];
    const nodeIndex = [];
    if (nextNode.isInternal()) {
        for(let d = 0; nextNode.isInternal(); d++){
            nodeQueue[d] = nextNode.children;
            nodeIndex[d] = key === void 0 ? 0 : indexOf(key, nextNode.keys, 0, comparator2);
            if (nodeIndex[d] >= nodeQueue[d].length) return;
            nextNode = nodeQueue[d][nodeIndex[d]];
        }
        nodeQueue.reverse();
        nodeIndex.reverse();
    }
    return [
        nodeQueue,
        nodeIndex,
        nextNode
    ];
}
function iterator(next) {
    return {
        next,
        [Symbol.iterator] () {
            return this;
        }
    };
}
var BNode = class _BNode {
    // If this is an internal node, _keys[i] is the highest key in children[i].
    keys;
    // True if this node might be within multiple `BTree`s (or have multiple parents).
    // If so, it must be cloned before being mutated to avoid changing an unrelated tree.
    // This is transitive: if it's true, children are also shared even if `isShared!=true`
    // in those children. (Certain operations will propagate isShared=true to children.)
    isShared;
    constructor(keys){
        this.keys = keys;
        this.isShared = void 0;
    }
    isInternal() {
        return false;
    }
    maxKey() {
        return this.keys[this.keys.length - 1];
    }
    minKey() {
        return this.keys[0];
    }
    clone() {
        return new _BNode(this.keys.slice(0));
    }
    get(key, tree) {
        const i = indexOf(key, this.keys, -1, tree.comparator);
        return i < 0 ? void 0 : this.keys[i];
    }
    has(key, tree) {
        const i = indexOf(key, this.keys, -1, tree.comparator);
        return i >= 0 && i < this.keys.length;
    }
    set(key, tree) {
        let i = indexOf(key, this.keys, -1, tree.comparator);
        if (i < 0) {
            i = ~i;
            tree.size++;
            if (this.keys.length < MAX_NODE_SIZE) {
                this.keys.splice(i, 0, key);
                return null;
            }
            const newRightSibling = this.splitOffRightSide();
            let target = this;
            if (i > this.keys.length) {
                i -= this.keys.length;
                target = newRightSibling;
            }
            target.keys.splice(i, 0, key);
            return newRightSibling;
        }
        this.keys[i] = key;
        return null;
    }
    takeFromRight(rhs) {
        this.keys.push(rhs.keys.shift());
    }
    takeFromLeft(lhs) {
        this.keys.unshift(lhs.keys.pop());
    }
    splitOffRightSide() {
        const half = this.keys.length >> 1;
        const keys = this.keys.splice(half);
        return new _BNode(keys);
    }
    delete(key, tree) {
        const cmp = tree.comparator;
        const iLow = indexOf(key, this.keys, -1, cmp);
        const iHigh = iLow + 1;
        if (iLow < 0) {
            return false;
        }
        const { keys } = this;
        for(let i = iLow; i < iHigh; i++){
            const key2 = keys[i];
            if (key2 !== keys[i] || this.isShared === true) {
                throw new Error("BTree illegally changed or cloned in delete");
            }
            this.keys.splice(i, 1);
            tree.size--;
            return true;
        }
        return false;
    }
    mergeSibling(rhs, _) {
        this.keys.push(...rhs.keys);
    }
};
var BNodeInternal = class _BNodeInternal extends BNode {
    // Note: conventionally B+ trees have one fewer key than the number of
    // children, but I find it easier to keep the array lengths equal: each
    // keys[i] caches the value of children[i].maxKey().
    children;
    /**
   * This does not mark `children` as shared, so it is the responsibility of the caller
   * to ensure children are either marked shared, or aren't included in another tree.
   */ constructor(children, keys){
        if (!keys) {
            keys = [];
            for(let i = 0; i < children.length; i++){
                keys[i] = children[i].maxKey();
            }
        }
        super(keys);
        this.children = children;
    }
    isInternal() {
        return true;
    }
    clone() {
        const children = this.children.slice(0);
        for(let i = 0; i < children.length; i++){
            children[i].isShared = true;
        }
        return new _BNodeInternal(children, this.keys.slice(0));
    }
    minKey() {
        return this.children[0].minKey();
    }
    get(key, tree) {
        const i = indexOf(key, this.keys, 0, tree.comparator);
        const { children } = this;
        return i < children.length ? children[i].get(key, tree) : void 0;
    }
    has(key, tree) {
        const i = indexOf(key, this.keys, 0, tree.comparator);
        const { children } = this;
        return i < children.length ? children[i].has(key, tree) : false;
    }
    set(key, tree) {
        const c = this.children;
        const cmp = tree.comparator;
        let i = Math.min(indexOf(key, this.keys, 0, cmp), c.length - 1);
        let child = c[i];
        if (child.isShared) {
            c[i] = child = child.clone();
        }
        if (child.keys.length >= MAX_NODE_SIZE) {
            let other;
            if (i > 0 && (other = c[i - 1]).keys.length < MAX_NODE_SIZE && cmp(child.keys[0], key) < 0) {
                if (other.isShared) {
                    c[i - 1] = other = other.clone();
                }
                other.takeFromRight(child);
                this.keys[i - 1] = other.maxKey();
            } else if ((other = c[i + 1]) !== void 0 && other.keys.length < MAX_NODE_SIZE && cmp(child.maxKey(), key) < 0) {
                if (other.isShared) c[i + 1] = other = other.clone();
                other.takeFromLeft(child);
                this.keys[i] = c[i].maxKey();
            }
        }
        const result = child.set(key, tree);
        this.keys[i] = child.maxKey();
        if (result === null) return null;
        if (this.keys.length < MAX_NODE_SIZE) {
            this.insert(i + 1, result);
            return null;
        }
        const newRightSibling = this.splitOffRightSide();
        let target = this;
        if (cmp(result.maxKey(), this.maxKey()) > 0) {
            target = newRightSibling;
            i -= this.keys.length;
        }
        target.insert(i + 1, result);
        return newRightSibling;
    }
    /**
   * Inserts `child` at index `i`.
   * This does not mark `child` as shared, so it is the responsibility of the caller
   * to ensure that either child is marked shared, or it is not included in another tree.
   */ insert(i, child) {
        this.children.splice(i, 0, child);
        this.keys.splice(i, 0, child.maxKey());
    }
    /**
   * Split this node.
   * Modifies this to remove the second half of the items, returning a separate node containing them.
   */ splitOffRightSide() {
        const half = this.children.length >> 1;
        return new _BNodeInternal(this.children.splice(half), this.keys.splice(half));
    }
    takeFromRight(rhs) {
        this.keys.push(rhs.keys.shift());
        this.children.push(rhs.children.shift());
    }
    takeFromLeft(lhs) {
        this.keys.unshift(lhs.keys.pop());
        this.children.unshift(lhs.children.pop());
    }
    delete(key, tree) {
        const cmp = tree.comparator;
        const { keys } = this;
        const { children } = this;
        let iLow = indexOf(key, this.keys, 0, cmp);
        let i = iLow;
        const iHigh = Math.min(iLow, keys.length - 1);
        if (i <= iHigh) {
            try {
                if (children[i].isShared) {
                    children[i] = children[i].clone();
                }
                const result = children[i].delete(key, tree);
                keys[i] = children[i].maxKey();
                return result;
            } finally{
                const half = MAX_NODE_SIZE >> 1;
                if (iLow > 0) iLow--;
                for(i = iHigh; i >= iLow; i--){
                    if (children[i].keys.length <= half) {
                        if (children[i].keys.length !== 0) {
                            this.tryMerge(i, MAX_NODE_SIZE);
                        } else {
                            keys.splice(i, 1);
                            children.splice(i, 1);
                        }
                    }
                }
            }
        }
        return false;
    }
    /** Merges child i with child i+1 if their combined size is not too large */ tryMerge(i, maxSize) {
        const { children } = this;
        if (i >= 0 && i + 1 < children.length) {
            if (children[i].keys.length + children[i + 1].keys.length <= maxSize) {
                if (children[i].isShared) children[i] = children[i].clone();
                children[i].mergeSibling(children[i + 1], maxSize);
                children.splice(i + 1, 1);
                this.keys.splice(i + 1, 1);
                this.keys[i] = children[i].maxKey();
                return true;
            }
        }
        return false;
    }
    /**
   * Move children from `rhs` into this.
   * `rhs` must be part of this tree, and be removed from it after this call
   * (otherwise isShared for its children could be incorrect).
   */ mergeSibling(rhs, maxNodeSize) {
        const oldLength = this.keys.length;
        this.keys.push(...rhs.keys);
        const rhsChildren = rhs.children;
        this.children.push(...rhsChildren);
        if (rhs.isShared && !this.isShared) {
            for(let i = 0; i < rhsChildren.length; i++){
                rhsChildren[i].isShared = true;
            }
        }
        this.tryMerge(oldLength - 1, maxNodeSize);
    }
};
function indexOf(key, keys, failXor, comparator2) {
    let lo = 0;
    let hi = keys.length;
    let mid = hi >> 1;
    while(lo < hi){
        const c = comparator2(keys[mid], key);
        if (c < 0) {
            lo = mid + 1;
        } else if (c > 0) {
            hi = mid;
        } else if (c === 0) {
            return mid;
        } else {
            if (key === key) {
                return keys.length;
            }
            throw new Error("NaN was used as a key");
        }
        mid = lo + hi >> 1;
    }
    return mid ^ failXor;
}
var emptyLeaf = new BNode([]);
emptyLeaf.isShared = true;
// ../zql/src/ivm/memory-storage.ts
function comparator(a, b) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareUTF8"])(a[0], b[0]);
}
var MemoryStorage = class {
    #data = new BTreeSet(comparator);
    set(key, value) {
        this.#data.add([
            key,
            value
        ]);
    }
    get(key, def) {
        const r = this.#data.get([
            key,
            null
        ]);
        if (r !== void 0) {
            return r[1];
        }
        return def;
    }
    del(key) {
        this.#data.delete([
            key,
            null
        ]);
    }
    *scan(options) {
        for (const entry of this.#data.valuesFrom(options && [
            options.prefix,
            null
        ])){
            if (options && !entry[0].startsWith(options.prefix)) {
                return;
            }
            yield entry;
        }
    }
    cloneData() {
        return structuredClone(Object.fromEntries(this.#data.values()));
    }
};
// ../zql/src/query/measure-push-operator.ts
var MeasurePushOperator = class {
    #input;
    #queryID;
    #metricsDelegate;
    #output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwOutput"];
    #metricName;
    constructor(input, queryID, metricsDelegate, metricName){
        this.#input = input;
        this.#queryID = queryID;
        this.#metricsDelegate = metricsDelegate;
        this.#metricName = metricName;
        input.setOutput(this);
    }
    setOutput(output) {
        this.#output = output;
    }
    fetch(req) {
        return this.#input.fetch(req);
    }
    cleanup(req) {
        return this.#input.cleanup(req);
    }
    getSchema() {
        return this.#input.getSchema();
    }
    destroy() {
        this.#input.destroy();
    }
    push(change) {
        const startTime = performance.now();
        this.#output.push(change);
        this.#metricsDelegate.addMetric(this.#metricName, performance.now() - startTime, this.#queryID);
    }
};
// ../zql/src/ivm/constraint.ts
function constraintMatchesRow(constraint, row) {
    for(const key in constraint){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valuesEqual"])(row[key], constraint[key])) {
            return false;
        }
    }
    return true;
}
function constraintMatchesPrimaryKey(constraint, primary) {
    const constraintKeys = Object.keys(constraint);
    if (constraintKeys.length !== primary.length) {
        return false;
    }
    constraintKeys.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringCompare"]);
    for(let i = 0; i < constraintKeys.length; i++){
        if (constraintKeys[i][0] !== primary[i]) {
            return false;
        }
    }
    return true;
}
function pullSimpleAndComponents(condition) {
    if (condition.type === "and") {
        return condition.conditions.flatMap(pullSimpleAndComponents);
    }
    if (condition.type === "simple") {
        return [
            condition
        ];
    }
    if (condition.type === "or" && condition.conditions.length === 1) {
        return pullSimpleAndComponents(condition.conditions[0]);
    }
    return [];
}
function primaryKeyConstraintFromFilters(condition, primary) {
    if (condition === void 0) {
        return void 0;
    }
    const conditions = pullSimpleAndComponents(condition);
    if (conditions.length === 0) {
        return void 0;
    }
    const ret = {};
    for (const subCondition of conditions){
        if (subCondition.op === "=") {
            const column = extractColumn(subCondition);
            if (column !== void 0) {
                if (!primary.includes(column.name)) {
                    continue;
                }
                ret[column.name] = column.value;
            }
        }
    }
    if (Object.keys(ret).length !== primary.length) {
        return void 0;
    }
    return ret;
}
function extractColumn(condition) {
    if (condition.left.type === "column") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(condition.right.type === "literal");
        return {
            name: condition.left.name,
            value: condition.right.value
        };
    }
    return void 0;
}
// ../zql/src/ivm/memory-source.ts
var MemorySource = class _MemorySource {
    #tableName;
    #columns;
    #primaryKey;
    #primaryIndexSort;
    #indexes = /* @__PURE__ */ new Map();
    #connections = [];
    #overlay;
    #splitEditOverlay;
    constructor(tableName, columns, primaryKey, primaryIndexData){
        this.#tableName = tableName;
        this.#columns = columns;
        this.#primaryKey = primaryKey;
        this.#primaryIndexSort = primaryKey.map((k)=>[
                k,
                "asc"
            ]);
        const comparator2 = makeBoundComparator(this.#primaryIndexSort);
        this.#indexes.set(JSON.stringify(this.#primaryIndexSort), {
            comparator: comparator2,
            data: primaryIndexData ?? new BTreeSet(comparator2),
            usedBy: /* @__PURE__ */ new Set()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertOrderingIncludesPK"])(this.#primaryIndexSort, this.#primaryKey);
    }
    // Mainly for tests.
    getSchemaInfo() {
        return {
            tableName: this.#tableName,
            columns: this.#columns,
            primaryKey: this.#primaryKey
        };
    }
    fork() {
        const primaryIndex = this.#getPrimaryIndex();
        return new _MemorySource(this.#tableName, this.#columns, this.#primaryKey, primaryIndex.data.clone());
    }
    get data() {
        return this.#getPrimaryIndex().data;
    }
    #getSchema(connection) {
        return {
            tableName: this.#tableName,
            columns: this.#columns,
            primaryKey: this.#primaryKey,
            sort: connection.sort,
            system: "client",
            relationships: {},
            isHidden: false,
            compareRows: connection.compareRows
        };
    }
    connect(sort, filters, splitEditKeys) {
        const transformedFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformFilters"])(filters);
        const input = {
            getSchema: ()=>schema,
            fetch: (req)=>this.#fetch(req, connection),
            cleanup: (req)=>this.#cleanup(req, connection),
            setOutput: (output)=>{
                connection.output = output;
            },
            destroy: ()=>{
                this.#disconnect(input);
            },
            fullyAppliedFilters: !transformedFilters.conditionsRemoved
        };
        const connection = {
            input,
            output: void 0,
            sort,
            splitEditKeys,
            compareRows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeComparator"])(sort),
            filters: transformedFilters.filters ? {
                condition: transformedFilters.filters,
                predicate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPredicate"])(transformedFilters.filters)
            } : void 0
        };
        const schema = this.#getSchema(connection);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertOrderingIncludesPK"])(sort, this.#primaryKey);
        this.#connections.push(connection);
        return input;
    }
    #disconnect(input) {
        const idx = this.#connections.findIndex((c)=>c.input === input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(idx !== -1, "Connection not found");
        this.#connections.splice(idx, 1);
    }
    #getPrimaryIndex() {
        const index = this.#indexes.get(JSON.stringify(this.#primaryIndexSort));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(index, "Primary index not found");
        return index;
    }
    #getOrCreateIndex(sort, usedBy) {
        const key = JSON.stringify(sort);
        const index = this.#indexes.get(key);
        if (index) {
            index.usedBy.add(usedBy);
            return index;
        }
        const comparator2 = makeBoundComparator(sort);
        const data = new BTreeSet(comparator2);
        for (const row of this.#getPrimaryIndex().data){
            data.add(row);
        }
        const newIndex = {
            comparator: comparator2,
            data,
            usedBy: /* @__PURE__ */ new Set([
                usedBy
            ])
        };
        this.#indexes.set(key, newIndex);
        return newIndex;
    }
    // For unit testing that we correctly clean up indexes.
    getIndexKeys() {
        return [
            ...this.#indexes.keys()
        ];
    }
    *#fetch(req, from) {
        const callingConnectionIndex = this.#connections.indexOf(from);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(callingConnectionIndex !== -1, "Output not found");
        const conn = this.#connections[callingConnectionIndex];
        const { sort: requestedSort } = conn;
        const pkConstraint = primaryKeyConstraintFromFilters(conn.filters?.condition, this.#primaryKey);
        const fetchOrPkConstraint = pkConstraint ?? req.constraint;
        const indexSort = [];
        if (fetchOrPkConstraint) {
            for (const key of Object.keys(fetchOrPkConstraint)){
                indexSort.push([
                    key,
                    "asc"
                ]);
            }
        }
        if (this.#primaryKey.length > 1 || !fetchOrPkConstraint || !constraintMatchesPrimaryKey(fetchOrPkConstraint, this.#primaryKey)) {
            indexSort.push(...requestedSort);
        }
        const index = this.#getOrCreateIndex(indexSort, from);
        const { data, comparator: compare } = index;
        const comparator2 = (r1, r2)=>compare(r1, r2) * (req.reverse ? -1 : 1);
        const startAt = req.start?.row;
        let scanStart;
        if (fetchOrPkConstraint) {
            scanStart = {};
            for (const [key, dir] of indexSort){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(fetchOrPkConstraint, key)) {
                    scanStart[key] = fetchOrPkConstraint[key];
                } else {
                    if (req.reverse) {
                        scanStart[key] = dir === "asc" ? maxValue : minValue;
                    } else {
                        scanStart[key] = dir === "asc" ? minValue : maxValue;
                    }
                }
            }
        } else {
            scanStart = startAt;
        }
        const rowsIterable = generateRows(data, scanStart, req.reverse);
        const withOverlay = generateWithOverlay(startAt, pkConstraint ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["once"])(rowsIterable) : rowsIterable, // use `req.constraint` here and not `fetchOrPkConstraint` since `fetchOrPkConstraint` could be the
        // primary key constraint. The primary key constraint comes from filters and is acting as a filter
        // rather than as the fetch constraint.
        req.constraint, this.#overlay, this.#splitEditOverlay, callingConnectionIndex, comparator2, conn.filters?.predicate);
        const withConstraint = generateWithConstraint(generateWithStart(withOverlay, req.start, comparator2), // we use `req.constraint` and not `fetchOrPkConstraint` here because we need to
        // AND the constraint with what could have been the primary key constraint
        req.constraint);
        yield* conn.filters ? generateWithFilter(withConstraint, conn.filters.predicate) : withConstraint;
    }
    #cleanup(req, connection) {
        return this.#fetch(req, connection);
    }
    push(change) {
        for (const _ of this.genPush(change)){}
    }
    *genPush(change) {
        const primaryIndex = this.#getPrimaryIndex();
        const { data } = primaryIndex;
        const exists = (row)=>data.has(row);
        const setOverlay = (o)=>this.#overlay = o;
        const setSplitEditOverlay = (o)=>this.#splitEditOverlay = o;
        if (change.type === "set") {
            const existing = data.get(change.row);
            if (existing !== void 0) {
                change = {
                    type: "edit",
                    row: change.row,
                    oldRow: existing
                };
            } else {
                change = {
                    type: "add",
                    row: change.row
                };
            }
        }
        for (const x of genPush(change, exists, this.#connections.entries(), setOverlay, setSplitEditOverlay)){
            yield x;
        }
        for (const { data: data2 } of this.#indexes.values()){
            switch(change.type){
                case "add":
                    {
                        const added = data2.add(change.row);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(added);
                        break;
                    }
                case "remove":
                    {
                        const removed = data2.delete(change.row);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(removed);
                        break;
                    }
                case "edit":
                    {
                        const removed = data2.delete(change.oldRow);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(removed);
                        data2.add(change.row);
                        break;
                    }
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(change);
            }
        }
    }
};
function* generateWithConstraint(it, constraint) {
    for (const node of it){
        if (constraint && !constraintMatchesRow(constraint, node.row)) {
            break;
        }
        yield node;
    }
}
function* generateWithFilter(it, filter) {
    for (const node of it){
        if (filter(node.row)) {
            yield node;
        }
    }
}
function* genPush(change, exists, connections, setOverlay, setSplitEditOverlay) {
    switch(change.type){
        case "add":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!exists(change.row), ()=>`Row already exists ${stringify(change)}`);
            break;
        case "remove":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(exists(change.row), ()=>`Row not found ${stringify(change)}`);
            break;
        case "edit":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(exists(change.oldRow), ()=>`Row not found ${stringify(change)}`);
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(change);
    }
    for (const [outputIndex, { output, splitEditKeys, filters }] of connections){
        if (output) {
            let splitEdit = false;
            if (change.type === "edit" && splitEditKeys) {
                for (const key of splitEditKeys){
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valuesEqual"])(change.row[key], change.oldRow[key])) {
                        splitEdit = true;
                        break;
                    }
                }
            }
            if (splitEdit) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(change.type === "edit");
                setSplitEditOverlay({
                    outputIndex,
                    change: {
                        type: "remove",
                        row: change.oldRow
                    }
                });
                const outputRemove = {
                    type: "remove",
                    node: {
                        row: change.oldRow,
                        relationships: {}
                    }
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterPush"])(outputRemove, output, filters?.predicate);
                yield;
                setSplitEditOverlay(void 0);
                setOverlay({
                    outputIndex,
                    change
                });
                const outputAdd = {
                    type: "add",
                    node: {
                        row: change.row,
                        relationships: {}
                    }
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterPush"])(outputAdd, output, filters?.predicate);
                yield;
            } else {
                setOverlay({
                    outputIndex,
                    change
                });
                const outputChange = change.type === "edit" ? {
                    type: change.type,
                    oldNode: {
                        row: change.oldRow,
                        relationships: {}
                    },
                    node: {
                        row: change.row,
                        relationships: {}
                    }
                } : {
                    type: change.type,
                    node: {
                        row: change.row,
                        relationships: {}
                    }
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterPush"])(outputChange, output, filters?.predicate);
                yield;
            }
        }
    }
    setOverlay(void 0);
}
function* generateWithStart(nodes, start, compare) {
    if (!start) {
        yield* nodes;
        return;
    }
    let started = false;
    for (const node of nodes){
        if (!started) {
            if (start.basis === "at") {
                if (compare(node.row, start.row) >= 0) {
                    started = true;
                }
            } else if (start.basis === "after") {
                if (compare(node.row, start.row) > 0) {
                    started = true;
                }
            }
        }
        if (started) {
            yield node;
        }
    }
}
function* generateWithOverlay(startAt, rows, constraint, overlay, splitEditOverlay, connectionIndex, compare, filterPredicate) {
    let overlayToApply = void 0;
    if (splitEditOverlay && splitEditOverlay.outputIndex === connectionIndex) {
        overlayToApply = splitEditOverlay;
    } else if (overlay && connectionIndex <= overlay.outputIndex) {
        overlayToApply = overlay;
    }
    const overlays = computeOverlays(startAt, constraint, overlayToApply, compare, filterPredicate);
    yield* generateWithOverlayInner(rows, overlays, compare);
}
function computeOverlays(startAt, constraint, overlay, compare, filterPredicate) {
    let overlays = {
        add: void 0,
        remove: void 0
    };
    switch(overlay?.change.type){
        case "add":
            overlays = {
                add: overlay.change.row,
                remove: void 0
            };
            break;
        case "remove":
            overlays = {
                add: void 0,
                remove: overlay.change.row
            };
            break;
        case "edit":
            overlays = {
                add: overlay.change.row,
                remove: overlay.change.oldRow
            };
            break;
    }
    if (startAt) {
        overlays = overlaysForStartAt(overlays, startAt, compare);
    }
    if (constraint) {
        overlays = overlaysForConstraint(overlays, constraint);
    }
    if (filterPredicate) {
        overlays = overlaysForFilterPredicate(overlays, filterPredicate);
    }
    return overlays;
}
function overlaysForStartAt({ add, remove }, startAt, compare) {
    const undefinedIfBeforeStartAt = (row)=>row === void 0 || compare(row, startAt) < 0 ? void 0 : row;
    return {
        add: undefinedIfBeforeStartAt(add),
        remove: undefinedIfBeforeStartAt(remove)
    };
}
function overlaysForConstraint({ add, remove }, constraint) {
    const undefinedIfDoesntMatchConstraint = (row)=>row === void 0 || !constraintMatchesRow(constraint, row) ? void 0 : row;
    return {
        add: undefinedIfDoesntMatchConstraint(add),
        remove: undefinedIfDoesntMatchConstraint(remove)
    };
}
function overlaysForFilterPredicate({ add, remove }, filterPredicate) {
    const undefinedIfDoesntMatchFilter = (row)=>row === void 0 || !filterPredicate(row) ? void 0 : row;
    return {
        add: undefinedIfDoesntMatchFilter(add),
        remove: undefinedIfDoesntMatchFilter(remove)
    };
}
function* generateWithOverlayInner(rowIterator, overlays, compare) {
    let addOverlayYielded = false;
    let removeOverlaySkipped = false;
    for (const row of rowIterator){
        if (!addOverlayYielded && overlays.add) {
            const cmp = compare(overlays.add, row);
            if (cmp < 0) {
                addOverlayYielded = true;
                yield {
                    row: overlays.add,
                    relationships: {}
                };
            }
        }
        if (!removeOverlaySkipped && overlays.remove) {
            const cmp = compare(overlays.remove, row);
            if (cmp === 0) {
                removeOverlaySkipped = true;
                continue;
            }
        }
        yield {
            row,
            relationships: {}
        };
    }
    if (!addOverlayYielded && overlays.add) {
        yield {
            row: overlays.add,
            relationships: {}
        };
    }
}
var minValue = Symbol("min-value");
var maxValue = Symbol("max-value");
function makeBoundComparator(sort) {
    return (a, b)=>{
        for (const entry of sort){
            const key = entry[0];
            const cmp = compareBounds(a[key], b[key]);
            if (cmp !== 0) {
                return entry[1] === "asc" ? cmp : -cmp;
            }
        }
        return 0;
    };
}
function compareBounds(a, b) {
    if (a === b) {
        return 0;
    }
    if (a === minValue) {
        return -1;
    }
    if (b === minValue) {
        return 1;
    }
    if (a === maxValue) {
        return 1;
    }
    if (b === maxValue) {
        return -1;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareValues"])(a, b);
}
function* generateRows(data, scanStart, reverse) {
    yield* data[reverse ? "valuesFromReversed" : "valuesFrom"](scanStart);
}
function stringify(change) {
    return JSON.stringify(change, (_, v)=>typeof v === "bigint" ? v.toString() : v);
}
// ../zero-client/src/client/ivm-branch.ts
var IVMSourceBranch = class _IVMSourceBranch {
    #sources;
    #tables;
    hash;
    constructor(tables, hash, sources = /* @__PURE__ */ new Map()){
        this.#tables = tables;
        this.#sources = sources;
        this.hash = hash;
    }
    getSource(name) {
        if (this.#sources.has(name)) {
            return this.#sources.get(name);
        }
        const schema = this.#tables[name];
        const source = schema ? new MemorySource(name, schema.columns, schema.primaryKey) : void 0;
        this.#sources.set(name, source);
        return source;
    }
    clear() {
        this.#sources.clear();
    }
    /**
   * Mutates the current branch, advancing it to the new head
   * by applying the given diffs.
   */ advance(expectedHead, newHead, diffs) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.hash === expectedHead, ()=>`Expected head must match the main head. Got: ${this.hash}, expected: ${expectedHead}`);
        applyDiffs(diffs, this);
        this.hash = newHead;
    }
    /**
   * Fork the branch and patch it up to match the desired head.
   */ async forkToHead(store, desiredHead, readOptions) {
        const fork = this.fork();
        if (fork.hash === desiredHead) {
            return fork;
        }
        await patchBranch(desiredHead, store, fork, readOptions);
        fork.hash = desiredHead;
        return fork;
    }
    /**
   * Creates a new IVMSourceBranch that is a copy of the current one.
   * This is a cheap operation since the b-trees are shared until a write is performed
   * and then only the modified nodes are copied.
   *
   * IVM branches are forked when we need to rebase mutations.
   * The mutations modify the fork rather than original branch.
   */ fork() {
        return new _IVMSourceBranch(this.#tables, this.hash, new Map((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapIterable"])(this.#sources.entries()).map(([name, source])=>[
                name,
                source?.fork()
            ])));
    }
};
async function patchBranch(desiredHead, store, fork, readOptions) {
    const diffs = await computeDiffs((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(fork.hash), desiredHead, store, readOptions);
    if (!diffs) {
        return;
    }
    applyDiffs(diffs, fork);
}
async function computeDiffs(startHash, endHash, store, readOptions) {
    const readFn = (dagRead)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diff2"])(startHash, endHash, dagRead, {
            shouldComputeDiffs: ()=>true,
            shouldComputeDiffsForIndex (_name) {
                return false;
            }
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"]);
    let diffs;
    if (readOptions?.openLazySourceRead) {
        diffs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["using"])(store.read(readOptions.openLazySourceRead), readFn);
    } else if (readOptions?.openLazyRead) {
        diffs = await readFn(readOptions.openLazyRead);
    } else {
        diffs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(store, readFn);
    }
    return diffs.get("");
}
function applyDiffs(diffs, branch) {
    for(let i = diffBinarySearch(diffs, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTITIES_KEY_PREFIX"], (diff3)=>diff3.key); i < diffs.length; i++){
        const diff3 = diffs[i];
        const { key } = diff3;
        if (!key.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTITIES_KEY_PREFIX"])) {
            break;
        }
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sourceNameFromKey"])(key);
        const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(branch.getSource(name));
        switch(diff3.op){
            case "del":
                source.push({
                    type: "remove",
                    row: diff3.oldValue
                });
                break;
            case "add":
                source.push({
                    type: "add",
                    row: diff3.newValue
                });
                break;
            case "change":
                source.push({
                    type: "edit",
                    row: diff3.newValue,
                    oldRow: diff3.oldValue
                });
                break;
        }
    }
}
// ../zero-client/src/client/context.ts
var ZeroContext = class {
    // It is a bummer to have to maintain separate MemorySources here and copy the
    // data in from the Replicache db. But we want the data to be accessible via
    // pipelines *synchronously* and the core Replicache infra is all async. So
    // that needs to be fixed.
    #mainSources;
    addServerQuery;
    addCustomQuery;
    updateServerQuery;
    updateCustomQuery;
    flushQueryChanges;
    #batchViewUpdates;
    #commitListeners = /* @__PURE__ */ new Set();
    #lc;
    assertValidRunOptions;
    /**
   * Client-side queries start out as "unknown" and are then updated to
   * "complete" once the server has sent back the query result.
   */ defaultQueryComplete = false;
    addMetric;
    constructor(lc, mainSources, addQuery, addCustomQuery, updateQuery, updateCustomQuery, flushQueryChanges, batchViewUpdates, addMetric, assertValidRunOptions3){
        this.#mainSources = mainSources;
        this.addServerQuery = addQuery;
        this.updateServerQuery = updateQuery;
        this.updateCustomQuery = updateCustomQuery;
        this.#batchViewUpdates = batchViewUpdates;
        this.#lc = lc;
        this.assertValidRunOptions = assertValidRunOptions3;
        this.addCustomQuery = addCustomQuery;
        this.flushQueryChanges = flushQueryChanges;
        this.addMetric = addMetric;
    }
    getSource(name) {
        return this.#mainSources.getSource(name);
    }
    mapAst(ast) {
        return ast;
    }
    createStorage() {
        return new MemoryStorage();
    }
    decorateInput(input) {
        return input;
    }
    decorateFilterInput(input) {
        return input;
    }
    decorateSourceInput(input, queryID) {
        return new MeasurePushOperator(input, queryID, this, "query-update-client");
    }
    addEdge() {}
    onTransactionCommit(cb) {
        this.#commitListeners.add(cb);
        return ()=>{
            this.#commitListeners.delete(cb);
        };
    }
    batchViewUpdates(applyViewUpdates) {
        let result;
        let viewChangesPerformed = false;
        this.#batchViewUpdates(()=>{
            result = applyViewUpdates();
            viewChangesPerformed = true;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(viewChangesPerformed, "batchViewUpdates must call applyViewUpdates synchronously.");
        return result;
    }
    processChanges(expectedHead, newHead, changes) {
        this.batchViewUpdates(()=>{
            try {
                this.#mainSources.advance(expectedHead, newHead, changes);
            } finally{
                this.#endTransaction();
            }
        });
    }
    #endTransaction() {
        for (const listener of this.#commitListeners){
            try {
                listener();
            } catch (e) {
                this.#lc.error?.(error_kind_enum_exports.Internal, "Failed notifying a commit listener of IVM updates", e);
            }
        }
    }
};
// ../zero-client/src/client/crud.ts
function makeCRUDMutate(schema, repMutate) {
    const { [CRUD_MUTATION_NAME]: zeroCRUD } = repMutate;
    const mutateBatch = async (body)=>{
        const ops = [];
        const m = {};
        for (const name of Object.keys(schema.tables)){
            m[name] = makeBatchCRUDMutate(name, schema, ops);
        }
        const rv = await body(m);
        await zeroCRUD({
            ops
        });
        return rv;
    };
    const mutate = {};
    for (const [name, tableSchema] of Object.entries(schema.tables)){
        mutate[name] = makeEntityCRUDMutate(name, tableSchema.primaryKey, zeroCRUD);
    }
    return {
        mutate,
        mutateBatch
    };
}
function makeEntityCRUDMutate(tableName, primaryKey, zeroCRUD) {
    return {
        insert: (value)=>{
            const op = {
                op: "insert",
                tableName,
                primaryKey,
                value
            };
            return zeroCRUD({
                ops: [
                    op
                ]
            });
        },
        upsert: (value)=>{
            const op = {
                op: "upsert",
                tableName,
                primaryKey,
                value
            };
            return zeroCRUD({
                ops: [
                    op
                ]
            });
        },
        update: (value)=>{
            const op = {
                op: "update",
                tableName,
                primaryKey,
                value
            };
            return zeroCRUD({
                ops: [
                    op
                ]
            });
        },
        delete: (id)=>{
            const op = {
                op: "delete",
                tableName,
                primaryKey,
                value: id
            };
            return zeroCRUD({
                ops: [
                    op
                ]
            });
        }
    };
}
function makeBatchCRUDMutate(tableName, schema, ops) {
    const { primaryKey } = schema.tables[tableName];
    return {
        insert: (value)=>{
            const op = {
                op: "insert",
                tableName,
                primaryKey,
                value
            };
            ops.push(op);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
        },
        upsert: (value)=>{
            const op = {
                op: "upsert",
                tableName,
                primaryKey,
                value
            };
            ops.push(op);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
        },
        update: (value)=>{
            const op = {
                op: "update",
                tableName,
                primaryKey,
                value
            };
            ops.push(op);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
        },
        delete: (id)=>{
            const op = {
                op: "delete",
                tableName,
                primaryKey,
                value: id
            };
            ops.push(op);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
        }
    };
}
function makeCRUDMutator(schema) {
    return async function zeroCRUDMutator(tx, crudArg) {
        for (const op of crudArg.ops){
            switch(op.op){
                case "insert":
                    await insertImpl(tx, op, schema, void 0);
                    break;
                case "upsert":
                    await upsertImpl(tx, op, schema, void 0);
                    break;
                case "update":
                    await updateImpl(tx, op, schema, void 0);
                    break;
                case "delete":
                    await deleteImpl(tx, op, schema, void 0);
                    break;
            }
        }
    };
}
function defaultOptionalFieldsToNull(schema, value) {
    let rv = value;
    for(const name in schema.columns){
        if (rv[name] === void 0) {
            rv = {
                ...rv,
                [name]: null
            };
        }
    }
    return rv;
}
async function insertImpl(tx, arg, schema, ivmBranch) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPrimaryKeyString"])(arg.tableName, schema.tables[arg.tableName].primaryKey, arg.value);
    if (!await tx.has(key)) {
        const val = defaultOptionalFieldsToNull(schema.tables[arg.tableName], arg.value);
        await tx.set(key, val);
        if (ivmBranch) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(ivmBranch.getSource(arg.tableName)).push({
                type: "add",
                row: arg.value
            });
        }
    }
}
async function upsertImpl(tx, arg, schema, ivmBranch) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPrimaryKeyString"])(arg.tableName, schema.tables[arg.tableName].primaryKey, arg.value);
    const val = defaultOptionalFieldsToNull(schema.tables[arg.tableName], arg.value);
    await tx.set(key, val);
    if (ivmBranch) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(ivmBranch.getSource(arg.tableName)).push({
            type: "set",
            row: arg.value
        });
    }
}
async function updateImpl(tx, arg, schema, ivmBranch) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPrimaryKeyString"])(arg.tableName, schema.tables[arg.tableName].primaryKey, arg.value);
    const prev = await tx.get(key);
    if (prev === void 0) {
        return;
    }
    const update = arg.value;
    const next = {
        ...prev
    };
    for(const k in update){
        if (update[k] !== void 0) {
            next[k] = update[k];
        }
    }
    await tx.set(key, next);
    if (ivmBranch) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(ivmBranch.getSource(arg.tableName)).push({
            type: "edit",
            oldRow: prev,
            row: next
        });
    }
}
async function deleteImpl(tx, arg, schema, ivmBranch) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPrimaryKeyString"])(arg.tableName, schema.tables[arg.tableName].primaryKey, arg.value);
    const prev = await tx.get(key);
    if (prev === void 0) {
        return;
    }
    await tx.del(key);
    if (ivmBranch) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(ivmBranch.getSource(arg.tableName)).push({
            type: "remove",
            row: prev
        });
    }
}
// ../shared/src/sentinels.ts
function emptyFunction() {}
var emptyObject = Object.freeze({});
// ../zero-client/src/client/custom.ts
var TransactionImpl = class {
    constructor(lc, repTx, schema){
        const castedRepTx = repTx;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(repTx.reason === "initial" || repTx.reason === "rebase");
        this.clientID = repTx.clientID;
        this.mutationID = repTx.mutationID;
        this.reason = repTx.reason === "initial" ? "optimistic" : "rebase";
        const txData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(castedRepTx[zeroData], "zero was not set on replicache internal options!");
        this.mutate = makeSchemaCRUD(schema, repTx, txData.ivmSources);
        this.query = makeSchemaQuery(lc, schema, txData.ivmSources);
        this.token = txData.token;
    }
    clientID;
    mutationID;
    reason;
    location = "client";
    mutate;
    query;
    token;
};
function makeReplicacheMutator(lc, mutator, schema) {
    return async (repTx, args)=>{
        const tx = new TransactionImpl(lc, repTx, schema);
        await mutator(tx, args);
    };
}
function makeSchemaCRUD(schema, tx, ivmBranch) {
    return new Proxy({}, {
        get (target, prop) {
            if (prop in target) {
                return target[prop];
            }
            target[prop] = makeTableCRUD(schema, prop, tx, ivmBranch);
            return target[prop];
        }
    });
}
function assertValidRunOptions(options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(options?.type !== "complete", "Cannot wait for complete results in custom mutations");
}
function makeSchemaQuery(lc, schema, ivmBranch) {
    const context = new ZeroContext(lc, ivmBranch, ()=>emptyFunction, ()=>emptyFunction, emptyFunction, emptyFunction, emptyFunction, (applyViewUpdates)=>applyViewUpdates(), emptyFunction, assertValidRunOptions);
    return new Proxy({}, {
        get (target, prop) {
            if (prop in target) {
                return target[prop];
            }
            target[prop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newQuery"])(context, schema, prop);
            return target[prop];
        }
    });
}
function makeTableCRUD(schema, tableName, tx, ivmBranch) {
    const table2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(schema.tables[tableName]);
    const { primaryKey } = table2;
    return {
        insert: (value)=>insertImpl(tx, {
                op: "insert",
                tableName,
                primaryKey,
                value
            }, schema, ivmBranch),
        upsert: (value)=>upsertImpl(tx, {
                op: "upsert",
                tableName,
                primaryKey,
                value
            }, schema, ivmBranch),
        update: (value)=>updateImpl(tx, {
                op: "update",
                tableName,
                primaryKey,
                value
            }, schema, ivmBranch),
        delete: (id)=>deleteImpl(tx, {
                op: "delete",
                tableName,
                primaryKey,
                value: id
            }, schema, ivmBranch)
    };
}
// ../zero-client/src/client/delete-clients-manager.ts
var DeleteClientsManager = class {
    #send;
    #lc;
    #dagStore;
    constructor(send2, dagStore, lc){
        this.#send = send2;
        this.#dagStore = dagStore;
        this.#lc = lc;
    }
    /**
   * This gets called by Replicache when it deletes clients from the persistent
   * storage.
   */ onClientsDeleted(clientIDs, clientGroupIDs) {
        this.#lc.debug?.("DeletedClientsManager, send:", clientIDs);
        this.#send([
            "deleteClients",
            {
                clientIDs,
                clientGroupIDs
            }
        ]);
    }
    /**
   * Zero calls this after it connects to ensure that the server knows about all
   * the clients that might have been deleted locally since the last connection.
   */ async sendDeletedClientsToServer() {
        const deleted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(this.#dagStore, (dagRead)=>getDeletedClients(dagRead));
        if (deleted.clientIDs.length > 0 || deleted.clientGroupIDs.length > 0) {
            this.#send([
                "deleteClients",
                deleted
            ]);
            this.#lc.debug?.("DeletedClientsManager, send:", deleted);
        }
    }
    /**
   * This is called as a response to the server telling us which clients it
   * actually deleted.
   */ clientsDeletedOnServer(deletedClients) {
        const { clientIDs = [], clientGroupIDs = [] } = deletedClients;
        if (clientIDs.length > 0 || clientGroupIDs.length > 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withWrite"])(this.#dagStore, async (dagWrite)=>{
                this.#lc.debug?.("clientsDeletedOnServer:", clientIDs, clientGroupIDs);
                await removeDeletedClients(dagWrite, clientIDs, clientGroupIDs);
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promiseVoid"];
    }
    getDeletedClients() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(this.#dagStore, getDeletedClients);
    }
};
// ../zero-client/src/client/enable-analytics.ts
var IPV4_ADDRESS_REGEX = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
var IPV6_ADDRESS_HOSTNAME_REGEX = /^\[[a-fA-F0-9:]*:[a-fA-F0-9:]*\]$/;
var IP_ADDRESS_HOSTNAME_REGEX = new RegExp(`(${IPV4_ADDRESS_REGEX.source}|${IPV6_ADDRESS_HOSTNAME_REGEX.source})`);
function shouldEnableAnalytics(server, enableAnalytics = true) {
    if (!enableAnalytics) {
        return false;
    }
    const serverURL = server === null ? null : new URL(server);
    const socketHostname = serverURL?.hostname;
    return server !== null && socketHostname !== void 0 && socketHostname !== "localhost" && !IP_ADDRESS_HOSTNAME_REGEX.test(socketHostname);
}
// ../zero-client/src/client/http-string.ts
function toWSString(url) {
    return "ws" + url.slice(4);
}
function appendPath(url, toAppend) {
    return url + (url.endsWith("/") ? toAppend.substring(1) : toAppend);
}
;
;
var DD_BASE_URL = new URL("https://http-intake.logs.datadoghq.com/api/v2/logs");
var MAX_LOG_ENTRIES_PER_FLUSH = 1e3;
var FORCE_FLUSH_THRESHOLD = 250;
var MAX_ENTRY_BYTES = 5 * 1024 * 1024;
var MAX_MESSAGE_RETRIES = 2;
var MAX_ENTRY_CHARS = MAX_ENTRY_BYTES / 4;
var DatadogLogSink = class {
    #messages = [];
    #apiKey;
    #source;
    #service;
    #host;
    #version;
    #interval;
    #baseURL;
    #timerID = 0;
    #flushLock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$lock$40$1$2e$0$2e$4$2f$node_modules$2f40$rocicorp$2f$lock$2f$out$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lock"]();
    constructor(options){
        const { apiKey, source, service, host, version: version3, interval = 5e3, baseURL: baseUrl = DD_BASE_URL } = options;
        this.#apiKey = apiKey;
        this.#source = source;
        this.#service = service;
        this.#host = host;
        this.#version = version3;
        this.#interval = interval;
        this.#baseURL = baseUrl.toString();
    }
    log(level, context, ...args) {
        this.#messages.push(makeMessage(args, context, level));
        if (level === "error" || this.#messages.length === FORCE_FLUSH_THRESHOLD) {
            void this.flush();
        } else {
            this.#startTimer();
        }
    }
    #startTimer() {
        if (this.#timerID) {
            return;
        }
        this.#timerID = setTimeout(()=>{
            this.#timerID = 0;
            void this.flush();
        }, this.#interval);
    }
    flush() {
        return this.#flushLock.withLock(async ()=>{
            const { length } = this.#messages;
            if (length === 0) {
                return;
            }
            do {
                const flushTime = Date.now();
                const stringified = [];
                let totalBytes = 0;
                for (const m of this.#messages){
                    m.flushDelayMs = flushTime - m.date;
                    let str = JSON.stringify(m);
                    if (str.length > MAX_ENTRY_CHARS) {
                        m.message = `[Dropped message of length ${str.length}]`;
                        str = JSON.stringify(m);
                    }
                    if (str.length + totalBytes + stringified.length > MAX_ENTRY_CHARS) {
                        break;
                    }
                    totalBytes += str.length;
                    stringified.push(str);
                    if (stringified.length === MAX_LOG_ENTRIES_PER_FLUSH) {
                        break;
                    }
                }
                const body = stringified.join("\n");
                const url = new URL(this.#baseURL);
                if (this.#apiKey !== void 0) {
                    url.searchParams.set("dd-api-key", this.#apiKey);
                }
                if (this.#source) {
                    url.searchParams.set("ddsource", this.#source);
                    url.searchParams.set("dd-evp-origin", this.#source);
                }
                if (this.#service) {
                    url.searchParams.set("service", this.#service);
                }
                if (this.#host) {
                    url.searchParams.set("host", this.#host);
                }
                if (this.#version) {
                    url.searchParams.set("ddtags", `version:${this.#version}`);
                }
                let ok = false;
                try {
                    const response = await fetch(url.toString(), {
                        method: "POST",
                        body,
                        keepalive: true
                    });
                    ok = response.ok;
                    if (!ok) {
                        console.error("response", response.status, response.statusText, await response.text);
                    }
                } catch (e) {
                    console.error("Log flush to datadog failed", e);
                }
                if (ok) {
                    this.#messages.splice(0, stringified.length);
                } else {
                    let numWithTooManyRetries = 0;
                    for(let i = 0; i < stringified.length; i++){
                        const m = this.#messages[i];
                        m.flushRetryCount = (m.flushRetryCount ?? 0) + 1;
                        if (m.flushRetryCount > MAX_MESSAGE_RETRIES) {
                            numWithTooManyRetries++;
                        }
                    }
                    if (numWithTooManyRetries > 0) {
                        console.error(`Dropping ${numWithTooManyRetries} datadog log messages which failed to send ${MAX_MESSAGE_RETRIES + 1} times.`);
                        this.#messages.splice(0, numWithTooManyRetries);
                    }
                }
            }while (this.#messages.length >= FORCE_FLUSH_THRESHOLD)
            if (this.#messages.length) {
                this.#startTimer();
            }
        });
    }
};
function flattenMessage(message) {
    if (Array.isArray(message) && message.length === 1) {
        return flattenMessage(message[0]);
    }
    return message;
}
function convertError(e) {
    return {
        name: e.name,
        message: e.message,
        stack: e.stack
    };
}
function convertErrors(message) {
    if (message instanceof Error) {
        return convertError(message);
    }
    if (message instanceof Array) {
        const convertedMessage = [];
        for (const item of message){
            if (item instanceof Error) {
                convertedMessage.push(convertError(item));
            } else {
                convertedMessage.push(item);
            }
        }
        return convertedMessage;
    }
    return message;
}
var LOG_SINK_FLUSH_RETRY_COUNT = "flushRetryCount";
var LOG_SINK_FLUSH_DELAY_ATTRIBUTE = "flushDelayMs";
var RESERVED_KEY_PREFIX = "@DATADOG_RESERVED_";
var RESERVED_KEYS = [
    "host",
    "source",
    "status",
    "service",
    "version",
    "trace_id",
    "message",
    "msg",
    // alias for message
    "date",
    // The following are attributes reserved by the DataDogLogSink
    // itself (as opposed to DataDog), to report on its own behavior.
    LOG_SINK_FLUSH_DELAY_ATTRIBUTE,
    LOG_SINK_FLUSH_RETRY_COUNT
];
function makeMessage(message, context, logLevel) {
    let safeContext = void 0;
    if (context !== void 0) {
        for (const reservedKey of RESERVED_KEYS){
            if (Object.hasOwn(context, reservedKey)) {
                if (safeContext === void 0) {
                    safeContext = {
                        ...context
                    };
                }
                safeContext[RESERVED_KEY_PREFIX + reservedKey] = safeContext[reservedKey];
                delete safeContext[reservedKey];
            }
        }
    }
    const msg = {
        ...safeContext ?? context,
        date: Date.now(),
        message: convertErrors(flattenMessage(message)),
        status: logLevel
    };
    if (logLevel === "error") {
        msg.error = {
            origin: "logger"
        };
    }
    return msg;
}
// ../zero-client/src/client/version.ts
var version2 = "0.23.2025090100";
// ../zero-client/src/client/log-options.ts
var LevelFilterLogSink = class {
    #wrappedLogSink;
    #level;
    constructor(wrappedLogSink, level){
        this.#wrappedLogSink = wrappedLogSink;
        this.#level = level;
    }
    log(level, context, ...args) {
        if (this.#level === "error" && level !== "error") {
            return;
        }
        if (this.#level === "info" && level === "debug") {
            return;
        }
        this.#wrappedLogSink.log(level, context, ...args);
    }
    async flush() {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$logger$40$5$2e$4$2e$0$2f$node_modules$2f40$rocicorp$2f$logger$2f$out$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consoleLogSink"].flush?.();
    }
};
var DATADOG_LOG_LEVEL = "info";
var ZERO_SASS_DOMAIN = ".reflect-server.net";
function createLogOptions(options, createDatadogLogSink = (options2)=>new DatadogLogSink(options2)) {
    const { consoleLogLevel, server, enableAnalytics } = options;
    if (!enableAnalytics || server === null) {
        return {
            logLevel: consoleLogLevel,
            logSink: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$logger$40$5$2e$4$2e$0$2f$node_modules$2f40$rocicorp$2f$logger$2f$out$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consoleLogSink"]
        };
    }
    const serverURL = new URL(server);
    const { hostname } = serverURL;
    const datadogServiceLabel = hostname.endsWith(ZERO_SASS_DOMAIN) ? hostname.substring(0, hostname.length - ZERO_SASS_DOMAIN.length).toLowerCase() : hostname;
    const baseURL = new URL(appendPath(server, "/logs/v0/log"));
    const logLevel = consoleLogLevel === "debug" ? "debug" : "info";
    const logSink = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$logger$40$5$2e$4$2e$0$2f$node_modules$2f40$rocicorp$2f$logger$2f$out$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TeeLogSink"]([
        new LevelFilterLogSink(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$logger$40$5$2e$4$2e$0$2f$node_modules$2f40$rocicorp$2f$logger$2f$out$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consoleLogSink"], consoleLogLevel),
        new LevelFilterLogSink(createDatadogLogSink({
            service: datadogServiceLabel,
            host: location.host,
            version: version2,
            baseURL
        }), DATADOG_LOG_LEVEL)
    ]);
    return {
        logLevel,
        logSink
    };
}
// ../zero-client/src/client/metric-name-enum.ts
var TimeToConnectMs = "time_to_connect_ms";
var LastConnectError = "last_connect_error";
var TimeToConnectMsV2 = "time_to_connect_ms_v2";
var LastConnectErrorV2 = "last_connect_error_v2";
var TotalTimeToConnectMs = "total_time_to_connect_ms";
var NotConnected = "not_connected";
// ../zero-client/src/client/metrics.ts
var DID_NOT_CONNECT_VALUE = 100 * 1e3;
var REPORT_INTERVAL_MS = 5e3;
function getLastConnectErrorValue(reason) {
    if ("server" in reason) {
        return `server_${camelToSnake(reason.server)}`;
    }
    return `client_${camelToSnake(reason.client)}`;
}
function camelToSnake(s) {
    return s.split(/\.?(?=[A-Z])/).join("_").toLowerCase();
}
var MetricManager = class {
    #reportIntervalMs;
    #host;
    #reporter;
    #lc;
    #timerID;
    constructor(opts){
        this.#reportIntervalMs = opts.reportIntervalMs;
        this.#host = opts.host;
        this.#reporter = opts.reporter;
        this.#lc = opts.lc;
        this.tags.push(`source:${opts.source}`);
        this.timeToConnectMs.set(DID_NOT_CONNECT_VALUE);
        this.#setNotConnectedReason("init");
        this.#timerID = setInterval(()=>{
            void this.flush();
        }, this.#reportIntervalMs);
    }
    #metrics = [];
    // timeToConnectMs measures the time from the call to connect() to receiving
    // the 'connected' ws message. We record the DID_NOT_CONNECT_VALUE if the previous
    // connection attempt failed for any reason.
    //
    // We set the gauge using #connectStart as follows:
    // - #connectStart is undefined if we are disconnected or connected; it is
    //   defined only in the Connecting state, as a number representing the timestamp
    //   at which we started connecting.
    // - #connectStart is set to the current time when connect() is called.
    // - When we receive the 'connected' message we record the time to connect and
    //   set #connectStart to undefined.
    // - If disconnect() is called with a defined #connectStart then we record
    //   DID_NOT_CONNECT_VALUE and set #connectStart to undefined.
    //
    // TODO It's clear after playing with the connection code we should encapsulate
    // the ConnectionState along with its state transitions and possibly behavior.
    // In that world the metric gauge(s) and bookkeeping like #connectStart would
    // be encapsulated with the ConnectionState. This will probably happen as part
    // of https://github.com/rocicorp/reflect-server/issues/255.
    timeToConnectMs = this.#register(new Gauge(TimeToConnectMs));
    // lastConnectError records the last error that occurred when connecting,
    // if any. It is cleared when connecting successfully or when reported, so this
    // state only gets reported if there was a failure during the reporting period and
    // we are still not connected.
    lastConnectError = this.#register(new State(LastConnectError, true));
    // notConnected records the reason why the client is not currently connected.
    // It is cleared when the client successfully connects.
    #notConnected = this.#register(new State(NotConnected));
    // The time from the call to connect() to receiving the 'connected' ws message
    // for the current connection.  Cleared when the client is not connected.
    // TODO: Not actually currently cleared on disconnect untill there is a
    // connect error, or client reports disconnected and waiting for visible.
    // Should have a value iff _notConnected has no value.
    #timeToConnectMsV2 = this.#register(new Gauge(TimeToConnectMsV2));
    // lastConnectErrorV2 records the last error that occurred when connecting,
    // if any. It is cleared when the client successfully connects or
    // stops trying to connect due to being hidden.
    // Should have a value iff notConnected state is NotConnectedReason.Error.
    #lastConnectErrorV2 = this.#register(new State(LastConnectErrorV2));
    // The total time it took to connect across retries for the current
    // connection.  Cleared when the client is not connected.
    // TODO: Not actually currently cleared on disconnect until there is a
    // connect error, or client reports disconnected and waiting for visible.
    // See Zero.#totalToConnectStart for details of how this total is computed.
    // Should have a value iff _notConnected has no value.
    #totalTimeToConnectMs = this.#register(new Gauge(TotalTimeToConnectMs));
    #setNotConnectedReason(reason) {
        this.#notConnected.set(reason);
    }
    setConnected(timeToConnectMs, totalTimeToConnectMs) {
        this.#notConnected.clear();
        this.#lastConnectErrorV2.clear();
        this.#timeToConnectMsV2.set(timeToConnectMs);
        this.#totalTimeToConnectMs.set(totalTimeToConnectMs);
    }
    setDisconnectedWaitingForVisible() {
        this.#timeToConnectMsV2.clear();
        this.#totalTimeToConnectMs.clear();
        this.#lastConnectErrorV2.clear();
        let notConnectedReason;
        switch(this.#notConnected.get()){
            case "init":
                notConnectedReason = "hidden_was_init";
                break;
            case "error":
                notConnectedReason = "hidden_was_error";
                break;
            default:
                notConnectedReason = "hidden";
                break;
        }
        this.#setNotConnectedReason(notConnectedReason);
    }
    setConnectError(reason) {
        this.#timeToConnectMsV2.clear();
        this.#totalTimeToConnectMs.clear();
        this.#setNotConnectedReason("error");
        this.#lastConnectErrorV2.set(getLastConnectErrorValue(reason));
    }
    /**
   * Tags to include in all metrics.
   */ tags = [];
    // Flushes all metrics to an array of time series (plural), one Series
    // per metric.
    async flush() {
        const lc = this.#lc;
        if (this.#timerID === null) {
            lc.error?.("MetricManager.flush() called but already stopped");
            return;
        }
        const allSeries = [];
        for (const metric of this.#metrics){
            const series = metric.flush();
            if (series !== void 0) {
                allSeries.push({
                    ...series,
                    host: this.#host,
                    tags: this.tags
                });
            }
        }
        if (allSeries.length === 0) {
            lc?.debug?.("No metrics to report");
            return;
        }
        try {
            await this.#reporter(allSeries);
        } catch (e) {
            lc?.error?.("Error reporting metrics", e);
        }
    }
    stop() {
        if (this.#timerID === null) {
            this.#lc.error?.("MetricManager.stop() called but already stopped");
            return;
        }
        clearInterval(this.#timerID);
        this.#timerID = null;
    }
    #register(metric) {
        this.#metrics.push(metric);
        return metric;
    }
};
function makePoint(ts, value) {
    return [
        ts,
        [
            value
        ]
    ];
}
var Gauge = class {
    #name;
    #value = void 0;
    constructor(name){
        this.#name = name;
    }
    set(value) {
        this.#value = value;
    }
    get() {
        return this.#value;
    }
    clear() {
        this.#value = void 0;
    }
    flush() {
        if (this.#value === void 0) {
            return void 0;
        }
        const points = [
            makePoint(t(), this.#value)
        ];
        return {
            metric: this.#name,
            points
        };
    }
};
function t() {
    return Math.round(Date.now() / 1e3);
}
var State = class {
    #prefix;
    #clearOnFlush;
    #current = void 0;
    constructor(prefix, clearOnFlush = false){
        this.#prefix = prefix;
        this.#clearOnFlush = clearOnFlush;
    }
    set(state) {
        this.#current = state;
    }
    get() {
        return this.#current;
    }
    clear() {
        this.#current = void 0;
    }
    flush() {
        if (this.#current === void 0) {
            return void 0;
        }
        const gauge = new Gauge([
            this.#prefix,
            this.#current
        ].join("_"));
        gauge.set(1);
        const series = gauge.flush();
        if (this.#clearOnFlush) {
            this.clear();
        }
        return series;
    }
};
;
var currentEphemeralID = 0;
function nextEphemeralID() {
    return ++currentEphemeralID;
}
var MutationTracker = class {
    #outstandingMutations;
    #ephemeralIDsByMutationID;
    #allMutationsAppliedListeners;
    #lc;
    #ackMutations;
    #clientID;
    #largestOutstandingMutationID;
    #currentMutationID;
    constructor(lc, ackMutations){
        this.#lc = lc.withContext("MutationTracker");
        this.#outstandingMutations = /* @__PURE__ */ new Map();
        this.#ephemeralIDsByMutationID = /* @__PURE__ */ new Map();
        this.#allMutationsAppliedListeners = /* @__PURE__ */ new Set();
        this.#largestOutstandingMutationID = 0;
        this.#currentMutationID = 0;
        this.#ackMutations = ackMutations;
    }
    setClientIDAndWatch(clientID, experimentalWatch) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#clientID === void 0, "clientID already set");
        this.#clientID = clientID;
        experimentalWatch((diffs)=>{
            this.#processMutationResponses(diffs);
        }, {
            prefix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MUTATIONS_KEY_PREFIX"] + clientID + "/",
            initialValuesInFirstDiff: true
        });
    }
    trackMutation() {
        const id = nextEphemeralID();
        const mutationResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        this.#outstandingMutations.set(id, {
            resolver: mutationResolver
        });
        return {
            ephemeralID: id,
            serverPromise: mutationResolver.promise
        };
    }
    mutationIDAssigned(id, mutationID) {
        const entry = this.#outstandingMutations.get(id);
        if (entry) {
            entry.mutationID = mutationID;
            this.#ephemeralIDsByMutationID.set(mutationID, id);
            this.#largestOutstandingMutationID = Math.max(this.#largestOutstandingMutationID, mutationID);
        }
    }
    /**
   * Reject the mutation due to an unhandled exception on the client.
   * The mutation must not have been persisted to the client store.
   */ rejectMutation(id, e) {
        const entry = this.#outstandingMutations.get(id);
        if (entry) {
            this.#settleMutation(id, entry, "reject", e);
        }
    }
    /**
   * Used when zero-cache pokes down mutation results.
   */ #processMutationResponses(diffs) {
        const clientID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(this.#clientID);
        let largestLmid = 0;
        for (const diff3 of diffs){
            const mutationID = Number(diff3.key.slice(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MUTATIONS_KEY_PREFIX"].length + clientID.length + 1));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!isNaN(mutationID), `MutationTracker received a diff with an invalid mutation ID: ${diff3.key}`);
            largestLmid = Math.max(largestLmid, mutationID);
            switch(diff3.op){
                case "add":
                    {
                        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(diff3.newValue, mutationResultSchema);
                        if ("error" in result) {
                            this.#processMutationError(clientID, mutationID, result);
                        } else {
                            this.#processMutationOk(clientID, mutationID, result);
                        }
                        break;
                    }
                case "del":
                    break;
                case "change":
                    throw new Error("MutationTracker does not expect change operations");
            }
        }
        if (largestLmid > 0) {
            this.#ackMutations({
                clientID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(this.#clientID),
                id: largestLmid
            });
        }
    }
    processPushResponse(response) {
        if ("error" in response) {
            this.#lc.error?.("Received an error response when pushing mutations", response);
        } else {
            this.#processPushOk(response);
        }
    }
    /**
   * DEPRECATED: to be removed when we switch to fully driving
   * mutation resolution via poke.
   *
   * When we reconnect to zero-cache, we resolve all outstanding mutations
   * whose ID is less than or equal to the lastMutationID.
   *
   * The reason is that any responses the API server sent
   * to those mutations have been lost.
   *
   * An example case: the API server responds while the connection
   * is down. Those responses are lost.
   *
   * Mutations whose LMID is > the lastMutationID are not resolved
   * since they will be retried by the client, giving us another chance
   * at getting a response.
   *
   * The only way to ensure that all API server responses are
   * received would be to have the API server write them
   * to the DB while writing the LMID.
   */ onConnected(lastMutationID) {
        this.lmidAdvanced(lastMutationID);
    }
    /**
   * lmid advance will:
   * 1. notify "allMutationsApplied" listeners if the lastMutationID
   *    is greater than or equal to the largest outstanding mutation ID.
   * 2. resolve all mutations whose mutation ID is less than or equal to
   *    the lastMutationID.
   */ lmidAdvanced(lastMutationID) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(lastMutationID >= this.#currentMutationID, "lmid must be greater than or equal to current lmid");
        if (lastMutationID === this.#currentMutationID) {
            return;
        }
        try {
            this.#currentMutationID = lastMutationID;
            this.#resolveMutations(lastMutationID);
        } finally{
            if (lastMutationID >= this.#largestOutstandingMutationID) {
                this.#notifyAllMutationsAppliedListeners();
            }
        }
    }
    get size() {
        return this.#outstandingMutations.size;
    }
    #resolveMutations(upTo) {
        for (const [id, entry] of this.#outstandingMutations){
            if (entry.mutationID && entry.mutationID <= upTo) {
                this.#settleMutation(id, entry, "resolve", emptyObject);
            } else {
                break;
            }
        }
    }
    #processPushOk(ok) {
        for (const mutation of ok.mutations){
            if ("error" in mutation.result) {
                this.#processMutationError(mutation.id.clientID, mutation.id.id, mutation.result);
            } else {
                this.#processMutationOk(mutation.id.clientID, mutation.id.id, mutation.result);
            }
        }
    }
    #processMutationError(clientID, mid, error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(clientID === this.#clientID, "received mutation for the wrong client");
        const ephemeralID = this.#ephemeralIDsByMutationID.get(mid);
        if (!ephemeralID && error.error === "alreadyProcessed") {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(ephemeralID, `ephemeral ID is missing for mutation error: ${error.error}.`);
        const entry = this.#outstandingMutations.get(ephemeralID);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(entry && entry.mutationID === mid);
        this.#settleMutation(ephemeralID, entry, "reject", error);
    }
    #processMutationOk(clientID, mid, result) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(clientID === this.#clientID, "received mutation for the wrong client");
        const ephemeralID = this.#ephemeralIDsByMutationID.get(mid);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(ephemeralID, "ephemeral ID is missing. This can happen if a mutation response is received twice but it should be impossible to receive a success response twice for the same mutation.");
        const entry = this.#outstandingMutations.get(ephemeralID);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(entry && entry.mutationID === mid);
        this.#settleMutation(ephemeralID, entry, "resolve", result);
    }
    #settleMutation(ephemeralID, entry, type, result) {
        switch(type){
            case "resolve":
                entry.resolver.resolve(result);
                break;
            case "reject":
                entry.resolver.reject(result);
                break;
        }
        this.#outstandingMutations.delete(ephemeralID);
        if (entry.mutationID) {
            this.#ephemeralIDsByMutationID.delete(entry.mutationID);
        }
    }
    /**
   * Be notified when all mutations have been included in the server snapshot.
   *
   * The query manager will not de-register queries from the server until there
   * are no pending mutations.
   *
   * The reason is that a mutation may need to be rebased. We do not want
   * data that was available the first time it was run to not be available
   * on a rebase.
   */ onAllMutationsApplied(listener) {
        this.#allMutationsAppliedListeners.add(listener);
    }
    #notifyAllMutationsAppliedListeners() {
        for (const listener of this.#allMutationsAppliedListeners){
            listener();
        }
    }
};
// ../zero-client/src/client/ping-result-enum.ts
var TimedOut = 0;
var Success = 1;
// ../zero-client/src/client/query-manager.ts
var QueryManager = class {
    #clientID;
    #clientToServer;
    #serverToClient;
    #send;
    #queries = /* @__PURE__ */ new Map();
    #recentQueriesMaxSize;
    #recentQueries = /* @__PURE__ */ new Set();
    #gotQueries = /* @__PURE__ */ new Set();
    #mutationTracker;
    #pendingQueryChanges = [];
    #queryChangeThrottleMs;
    #pendingRemovals = [];
    #batchTimer;
    #lc;
    #metrics = newMetrics();
    #queryMetrics = /* @__PURE__ */ new Map();
    #slowMaterializeThreshold;
    constructor(lc, mutationTracker, clientID, tables, send2, experimentalWatch, recentQueriesMaxSize, queryChangeThrottleMs, slowMaterializeThreshold){
        this.#lc = lc.withContext("QueryManager");
        this.#clientID = clientID;
        this.#clientToServer = clientToServer(tables);
        this.#serverToClient = serverToClient(tables);
        this.#recentQueriesMaxSize = recentQueriesMaxSize;
        this.#send = send2;
        this.#mutationTracker = mutationTracker;
        this.#queryChangeThrottleMs = queryChangeThrottleMs;
        this.#slowMaterializeThreshold = slowMaterializeThreshold;
        this.#mutationTracker.onAllMutationsApplied(()=>{
            if (this.#pendingRemovals.length === 0) {
                return;
            }
            const pendingRemovals = this.#pendingRemovals;
            this.#pendingRemovals = [];
            for (const removal of pendingRemovals){
                removal();
            }
        });
        experimentalWatch((diff3)=>{
            for (const diffOp of diff3){
                const queryHash = diffOp.key.substring(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GOT_QUERIES_KEY_PREFIX"].length);
                switch(diffOp.op){
                    case "add":
                        this.#gotQueries.add(queryHash);
                        this.#fireGotCallbacks(queryHash, true);
                        break;
                    case "del":
                        this.#gotQueries.delete(queryHash);
                        this.#fireGotCallbacks(queryHash, false);
                        break;
                }
            }
        }, {
            prefix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GOT_QUERIES_KEY_PREFIX"],
            initialValuesInFirstDiff: true
        });
    }
    getAST(queryID) {
        const ast = this.#queries.get(queryID)?.normalized;
        return ast && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapAST"])(ast, this.#serverToClient);
    }
    #fireGotCallbacks(queryHash, got) {
        const gotCallbacks = this.#queries.get(queryHash)?.gotCallbacks ?? [];
        for (const gotCallback of gotCallbacks){
            gotCallback(got);
        }
    }
    /**
   * Get the queries that need to be registered with the server.
   *
   * An optional `lastPatch` can be provided. This is the last patch that was
   * sent to the server and may not yet have been acked. If `lastPatch` is provided,
   * this method will return a patch that does not include any events sent in `lastPatch`.
   *
   * This diffing of last patch and current patch is needed since we send
   * a set of queries to the server when we first connect inside of the `sec-protocol` as
   * the `initConnectionMessage`.
   *
   * While we're waiting for the `connected` response to come back from the server,
   * the client may have registered more queries. We need to diff the `initConnectionMessage`
   * queries with the current set of queries to understand what those were.
   */ async getQueriesPatch(tx, lastPatch) {
        const existingQueryHashes = /* @__PURE__ */ new Set();
        const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["desiredQueriesPrefixForClient"])(this.#clientID);
        for await (const key of tx.scan({
            prefix
        }).keys()){
            existingQueryHashes.add(key.substring(prefix.length, key.length));
        }
        const patch = /* @__PURE__ */ new Map();
        for (const hash of existingQueryHashes){
            if (!this.#queries.has(hash)) {
                patch.set(hash, {
                    op: "del",
                    hash
                });
            }
        }
        for (const [hash, { normalized, ttl, name, args }] of this.#queries){
            if (!existingQueryHashes.has(hash)) {
                patch.set(hash, {
                    op: "put",
                    hash,
                    ast: name === void 0 ? normalized : void 0,
                    name,
                    args,
                    // We get TTL out of the DagStore so it is possible that the TTL was written
                    // with a too high TTL.
                    ttl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clampTTL"])(ttl)
                });
            }
        }
        if (lastPatch) {
            for (const [hash, { op }] of lastPatch){
                if (op === "put" && !patch.has(hash)) {
                    patch.set(hash, {
                        op: "del",
                        hash
                    });
                }
            }
            for (const [hash, { op }] of patch){
                const lastPatchOp = lastPatch.get(hash);
                if (lastPatchOp && lastPatchOp.op === op) {
                    patch.delete(hash);
                }
            }
        }
        return patch;
    }
    addCustom(ast, { name, args }, ttl, gotCallback) {
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeAST"])(ast);
        const queryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashOfNameAndArgs"])(name, args);
        return this.#add(queryId, normalized, name, args, ttl, gotCallback);
    }
    addLegacy(ast, ttl, gotCallback) {
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeAST"])(ast);
        const astHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashOfAST"])(normalized);
        return this.#add(astHash, normalized, void 0, // name is undefined for legacy queries
        void 0, // args are undefined for legacy queries
        ttl, gotCallback);
    }
    #add(queryId, normalized, name, args, ttl, gotCallback) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(name === void 0 === (args === void 0), "If name is defined, args must be defined");
        ttl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clampTTL"])(ttl, this.#lc);
        let entry = this.#queries.get(queryId);
        this.#recentQueries.delete(queryId);
        if (!entry) {
            normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapAST"])(normalized, this.#clientToServer);
            entry = {
                normalized,
                name,
                args,
                count: 1,
                gotCallbacks: gotCallback ? [
                    gotCallback
                ] : [],
                ttl
            };
            this.#queries.set(queryId, entry);
            this.#queueQueryChange({
                op: "put",
                hash: queryId,
                ast: name === void 0 ? normalized : void 0,
                name,
                args,
                ttl
            });
        } else {
            ++entry.count;
            this.#updateEntry(entry, queryId, ttl);
            if (gotCallback) {
                entry.gotCallbacks.push(gotCallback);
            }
        }
        if (gotCallback) {
            gotCallback(this.#gotQueries.has(queryId));
        }
        let removed = false;
        return ()=>{
            if (removed) {
                return;
            }
            removed = true;
            if (this.#mutationTracker.size > 0) {
                this.#pendingRemovals.push(()=>this.#remove(entry, queryId, gotCallback));
                return;
            }
            this.#remove(entry, queryId, gotCallback);
        };
    }
    updateCustom({ name, args }, ttl) {
        const queryID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashOfNameAndArgs"])(name, args);
        const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(this.#queries.get(queryID));
        this.#updateEntry(entry, queryID, ttl);
    }
    updateLegacy(ast, ttl) {
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeAST"])(ast);
        const queryID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashOfAST"])(normalized);
        const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(this.#queries.get(queryID));
        this.#updateEntry(entry, queryID, ttl);
    }
    #updateEntry(entry, queryID, ttl) {
        ttl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clampTTL"])(ttl, this.#lc);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareTTL"])(ttl, entry.ttl) > 0) {
            entry.ttl = ttl;
            this.#queueQueryChange({
                op: "put",
                hash: queryID,
                ast: entry.name === void 0 ? entry.normalized : void 0,
                name: entry.name,
                args: entry.args,
                ttl
            });
        }
    }
    #queueQueryChange(op) {
        this.#pendingQueryChanges.push(op);
        this.#scheduleBatch();
    }
    #scheduleBatch() {
        if (this.#batchTimer === void 0) {
            this.#batchTimer = setTimeout(()=>this.flushBatch(), this.#queryChangeThrottleMs);
        }
    }
    flushBatch() {
        if (this.#batchTimer !== void 0) {
            clearTimeout(this.#batchTimer);
            this.#batchTimer = void 0;
        }
        if (this.#pendingQueryChanges.length > 0) {
            this.#send([
                "changeDesiredQueries",
                {
                    desiredQueriesPatch: [
                        ...this.#pendingQueryChanges
                    ]
                }
            ]);
            this.#pendingQueryChanges.length = 0;
        }
    }
    #remove(entry, astHash, gotCallback) {
        if (gotCallback) {
            const index = entry.gotCallbacks.indexOf(gotCallback);
            entry.gotCallbacks.splice(index, 1);
        }
        --entry.count;
        if (entry.count === 0) {
            this.#recentQueries.add(astHash);
            if (this.#recentQueries.size > this.#recentQueriesMaxSize) {
                const lruQueryID = this.#recentQueries.values().next().value;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(lruQueryID);
                this.#queries.delete(lruQueryID);
                this.#recentQueries.delete(lruQueryID);
                this.#queryMetrics.delete(lruQueryID);
                this.#queueQueryChange({
                    op: "del",
                    hash: lruQueryID
                });
            }
        }
    }
    /**
   * Gets the aggregated metrics for all queries managed by this QueryManager.
   */ get metrics() {
        return this.#metrics;
    }
    addMetric(metric, value, ...args) {
        metric;
        this.#metrics[metric].add(value);
        const queryID = args[0];
        if (metric === "query-materialization-end-to-end") {
            const ast = args[1];
            if (this.#slowMaterializeThreshold !== void 0 && value > this.#slowMaterializeThreshold) {
                this.#lc.warn?.("Slow query materialization (including server/network)", queryID, ast, value);
            } else {
                this.#lc.debug?.("Materialized query (including server/network)", queryID, ast, value);
            }
        }
        let existing = this.#queryMetrics.get(queryID);
        if (!existing) {
            existing = newMetrics();
            this.#queryMetrics.set(queryID, existing);
        }
        existing[metric].add(value);
    }
    getQueryMetrics(queryID) {
        return this.#queryMetrics.get(queryID);
    }
};
function newMetrics() {
    return {
        "query-materialization-client": new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TDigest"](),
        "query-materialization-end-to-end": new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TDigest"](),
        "query-update-client": new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TDigest"]()
    };
}
// ../zero-client/src/client/options.ts
var updateNeededReasonTypeSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["literalUnion"])(update_needed_reason_type_enum_exports.NewClientGroup, update_needed_reason_type_enum_exports.VersionNotSupported, update_needed_reason_type_enum_exports.SchemaVersionNotSupported);
// ../zero-client/src/client/reload-error-handler.ts
var RELOAD_REASON_STORAGE_KEY = "_zeroReloadReason";
var RELOAD_BACKOFF_STATE_KEY = "_zeroReloadBackoffState";
var reloadReasonSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].tuple([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].union(updateNeededReasonTypeSchema, errorKindSchema),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].string()
]);
var backoffStateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].object({
    lastReloadTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number().default(0),
    nextIntervalMs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valita_exports"].number().default(0)
});
var MIN_RELOAD_INTERVAL_MS = 500;
var MAX_RELOAD_INTERVAL_MS = 6e4;
var FALLBACK_RELOAD_INTERVAL_MS = 1e4;
var reloadTimer = null;
function reloadWithReason(lc, reload2, reason, message) {
    if (reloadTimer) {
        lc.info?.("reload timer already scheduled");
        return;
    }
    const now = Date.now();
    const backoff = nextBackoff(lc, now);
    if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem(RELOAD_BACKOFF_STATE_KEY, JSON.stringify(backoff));
        sessionStorage.setItem(RELOAD_REASON_STORAGE_KEY, JSON.stringify([
            reason,
            message
        ]));
    }
    const delay = backoff.lastReloadTime - now;
    lc.error?.(reason, "\n", "reloading", delay > 0 ? `in ${delay / 1e3} seconds` : "");
    reloadTimer = setTimeout(()=>{
        reloadTimer = null;
        reload2();
    }, delay);
}
function reportReloadReason(lc) {
    if (typeof sessionStorage !== "undefined") {
        const value = sessionStorage.getItem(RELOAD_REASON_STORAGE_KEY);
        if (value) {
            sessionStorage.removeItem(RELOAD_REASON_STORAGE_KEY);
            try {
                const parsed = JSON.parse(value);
                const [reasonType, message] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(parsed, reloadReasonSchema);
                lc.error?.(reasonType, "Zero reloaded the page.", message);
            } catch (e) {
                lc.error?.("Zero reloaded the page.", e);
                return;
            }
        }
    }
}
function reloadScheduled() {
    return reloadTimer !== null;
}
function resetBackoff() {
    if (typeof sessionStorage !== "undefined") {
        sessionStorage.removeItem(RELOAD_BACKOFF_STATE_KEY);
    }
}
function nextBackoff(lc, now) {
    if (typeof sessionStorage === "undefined") {
        lc.warn?.(`sessionStorage not supported. backing off in ${FALLBACK_RELOAD_INTERVAL_MS / 1e3} seconds`);
        return {
            lastReloadTime: now + FALLBACK_RELOAD_INTERVAL_MS,
            nextIntervalMs: MIN_RELOAD_INTERVAL_MS
        };
    }
    const val = sessionStorage.getItem(RELOAD_BACKOFF_STATE_KEY);
    if (!val) {
        return {
            lastReloadTime: now,
            nextIntervalMs: MIN_RELOAD_INTERVAL_MS
        };
    }
    let parsed;
    try {
        parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(JSON.parse(val), backoffStateSchema, "passthrough");
    } catch (e) {
        lc.warn?.("ignoring unparsable backoff state", val, e);
        return {
            lastReloadTime: now,
            nextIntervalMs: MIN_RELOAD_INTERVAL_MS
        };
    }
    const { lastReloadTime, nextIntervalMs } = parsed;
    if (now - lastReloadTime > MAX_RELOAD_INTERVAL_MS * 2) {
        return {
            lastReloadTime: now,
            nextIntervalMs: MIN_RELOAD_INTERVAL_MS
        };
    }
    if (now < lastReloadTime) {
        return parsed;
    }
    const nextReloadTime = Math.max(now, lastReloadTime + nextIntervalMs);
    return {
        lastReloadTime: nextReloadTime,
        nextIntervalMs: Math.min(nextIntervalMs * 2, MAX_RELOAD_INTERVAL_MS)
    };
}
// ../zero-client/src/client/server-error.ts
var ServerError = class extends Error {
    name = "ServerError";
    errorBody;
    get kind() {
        return this.errorBody.kind;
    }
    constructor(errorBody){
        super(errorBody.kind + ": " + errorBody.message);
        this.errorBody = errorBody;
    }
};
function isServerError(ex) {
    return ex instanceof ServerError;
}
function isAuthError(ex) {
    return isServerError(ex) && isAuthErrorKind(ex.kind);
}
function isAuthErrorKind(kind) {
    return kind === error_kind_enum_exports.AuthInvalidated || kind === error_kind_enum_exports.Unauthorized;
}
function isBackoffError(ex) {
    if (isServerError(ex)) {
        switch(ex.errorBody.kind){
            case error_kind_enum_exports.Rebalance:
            case error_kind_enum_exports.Rehome:
            case error_kind_enum_exports.ServerOverloaded:
                return ex.errorBody;
        }
    }
    return void 0;
}
// ../zero-client/src/client/server-option.ts
function validateServerParam(paramName, server) {
    const expectedProtocol = "http";
    const forExample = (path = "")=>` For example: "${expectedProtocol}s://myapp-myteam.zero.ms/${path}".`;
    if (!server.startsWith(`${expectedProtocol}://`) && !server.startsWith(`${expectedProtocol}s://`)) {
        throw new Error(`ZeroOptions.${paramName} must use the "${expectedProtocol}" or "${expectedProtocol}s" scheme.`);
    }
    let url;
    try {
        url = new URL(server);
    } catch  {
        throw new Error(`ZeroOptions.${paramName} must be a valid URL.${forExample()}`);
    }
    const urlString = url.toString();
    const pathComponents = url.pathname.split("/");
    if (pathComponents[0] === "") {
        pathComponents.shift();
    }
    if (pathComponents[pathComponents.length - 1] === "") {
        pathComponents.pop();
    }
    if (pathComponents.length > 1) {
        throw new Error(`ZeroOptions.${paramName} may have at most one path component.${forExample("zero")}`);
    }
    for (const [property, invalidEndsWith] of [
        [
            "search",
            "?"
        ],
        [
            "hash",
            "#"
        ]
    ]){
        if (url[property] || urlString.endsWith(invalidEndsWith)) {
            throw new Error(`ZeroOptions.${paramName} must not contain a ${property} component.${forExample()}`);
        }
    }
    return urlString;
}
function getServer(server) {
    const WS = getBrowserGlobal("WebSocket");
    if (!WS) {
        console.warn("Zero started in an unsupported environment, no data will be synced.");
        return null;
    }
    if (server === void 0 || server === null) {
        console.warn("Zero starting up with no server URL. No data will be synced.");
        return null;
    }
    return validateServerParam("server", server);
}
;
var ZeroLogContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$logger$40$5$2e$4$2e$0$2f$node_modules$2f40$rocicorp$2f$logger$2f$out$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogContext"];
;
var PokeHandler = class {
    #replicachePoke;
    #onPokeError;
    #clientID;
    #lc;
    #receivingPoke = void 0;
    #pokeBuffer = [];
    #pokePlaybackLoopRunning = false;
    #lastRafPerfTimestamp = 0;
    // Serializes calls to this.#replicachePoke otherwise we can cause out of
    // order poke errors.
    #pokeLock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$lock$40$1$2e$0$2e$4$2f$node_modules$2f40$rocicorp$2f$lock$2f$out$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lock"]();
    #schema;
    #serverToClient;
    #mutationTracker;
    #raf = getBrowserGlobalMethod("requestAnimationFrame") ?? rafFallback;
    constructor(replicachePoke, onPokeError, clientID, schema, lc, mutationTracker){
        this.#replicachePoke = replicachePoke;
        this.#onPokeError = onPokeError;
        this.#clientID = clientID;
        this.#schema = schema;
        this.#serverToClient = serverToClient(schema.tables);
        this.#lc = lc.withContext("PokeHandler");
        this.#mutationTracker = mutationTracker;
    }
    handlePokeStart(pokeStart) {
        if (this.#receivingPoke) {
            this.#handlePokeError(`pokeStart ${JSON.stringify(pokeStart)} while still receiving  ${JSON.stringify(this.#receivingPoke.pokeStart)} `);
            return;
        }
        this.#receivingPoke = {
            pokeStart,
            parts: []
        };
    }
    handlePokePart(pokePart) {
        if (pokePart.pokeID !== this.#receivingPoke?.pokeStart.pokeID) {
            this.#handlePokeError(`pokePart for ${pokePart.pokeID}, when receiving ${this.#receivingPoke?.pokeStart.pokeID}`);
            return;
        }
        this.#receivingPoke.parts.push(pokePart);
        return pokePart.lastMutationIDChanges?.[this.#clientID];
    }
    handlePokeEnd(pokeEnd) {
        if (pokeEnd.pokeID !== this.#receivingPoke?.pokeStart.pokeID) {
            this.#handlePokeError(`pokeEnd for ${pokeEnd.pokeID}, when receiving ${this.#receivingPoke?.pokeStart.pokeID}`);
            return;
        }
        if (pokeEnd.cancel) {
            this.#receivingPoke = void 0;
            return;
        }
        this.#pokeBuffer.push({
            ...this.#receivingPoke,
            pokeEnd
        });
        this.#receivingPoke = void 0;
        if (!this.#pokePlaybackLoopRunning) {
            this.#startPlaybackLoop();
        }
    }
    handleDisconnect() {
        this.#lc.debug?.("clearing due to disconnect");
        this.#clear();
    }
    #startPlaybackLoop() {
        this.#lc.debug?.("starting playback loop");
        this.#pokePlaybackLoopRunning = true;
        this.#raf(this.#rafCallback);
    }
    #rafCallback = async ()=>{
        const rafLC = this.#lc.withContext("rafAt", Math.floor(performance.now()));
        if (this.#pokeBuffer.length === 0) {
            rafLC.debug?.("stopping playback loop");
            this.#pokePlaybackLoopRunning = false;
            return;
        }
        this.#raf(this.#rafCallback);
        const start = performance.now();
        rafLC.debug?.("raf fired, processing pokes.  Since last raf", start - this.#lastRafPerfTimestamp);
        this.#lastRafPerfTimestamp = start;
        await this.#processPokesForFrame(rafLC);
        rafLC.debug?.("processing pokes took", performance.now() - start);
    };
    #processPokesForFrame(lc) {
        return this.#pokeLock.withLock(async ()=>{
            const now = Date.now();
            lc.debug?.("got poke lock at", now);
            lc.debug?.("merging", this.#pokeBuffer.length);
            try {
                const merged = mergePokes(this.#pokeBuffer, this.#schema, this.#serverToClient);
                this.#pokeBuffer.length = 0;
                if (merged === void 0) {
                    lc.debug?.("frame is empty");
                    return;
                }
                const start = performance.now();
                lc.debug?.("poking replicache");
                await this.#replicachePoke(merged);
                lc.debug?.("poking replicache took", performance.now() - start);
                if (!("error" in merged.pullResponse)) {
                    const lmid = merged.pullResponse.lastMutationIDChanges[this.#clientID];
                    if (lmid !== void 0) {
                        this.#mutationTracker.lmidAdvanced(lmid);
                    }
                }
            } catch (e) {
                this.#handlePokeError(e);
            }
        });
    }
    #handlePokeError(e) {
        if (String(e).includes("unexpected base cookie for poke")) {
            this.#lc.debug?.("clearing due to", e);
        } else {
            this.#lc.error?.("clearing due to unexpected poke error", e);
        }
        this.#clear();
        this.#onPokeError();
    }
    #clear() {
        this.#receivingPoke = void 0;
        this.#pokeBuffer.length = 0;
    }
};
function mergePokes(pokeBuffer, schema, serverToClient2) {
    if (pokeBuffer.length === 0) {
        return void 0;
    }
    const { baseCookie } = pokeBuffer[0].pokeStart;
    const lastPoke = pokeBuffer[pokeBuffer.length - 1];
    const { cookie } = lastPoke.pokeEnd;
    const mergedPatch = [];
    const mergedLastMutationIDChanges = {};
    const mutationResults = [];
    let prevPokeEnd = void 0;
    for (const pokeAccumulator of pokeBuffer){
        if (prevPokeEnd && pokeAccumulator.pokeStart.baseCookie && pokeAccumulator.pokeStart.baseCookie > prevPokeEnd.cookie) {
            throw Error(`unexpected cookie gap ${JSON.stringify(prevPokeEnd)} ${JSON.stringify(pokeAccumulator.pokeStart)}`);
        }
        prevPokeEnd = pokeAccumulator.pokeEnd;
        for (const pokePart of pokeAccumulator.parts){
            if (pokePart.lastMutationIDChanges) {
                for (const [clientID, lastMutationID] of Object.entries(pokePart.lastMutationIDChanges)){
                    mergedLastMutationIDChanges[clientID] = lastMutationID;
                }
            }
            if (pokePart.desiredQueriesPatches) {
                for (const [clientID, queriesPatch] of Object.entries(pokePart.desiredQueriesPatches)){
                    for (const op of queriesPatch){
                        mergedPatch.push(queryPatchOpToReplicachePatchOp(op, (hash)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDesiredQueriesKey"])(clientID, hash)));
                    }
                }
            }
            if (pokePart.gotQueriesPatch) {
                for (const op of pokePart.gotQueriesPatch){
                    mergedPatch.push(queryPatchOpToReplicachePatchOp(op, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toGotQueriesKey"]));
                }
            }
            if (pokePart.rowsPatch) {
                for (const p of pokePart.rowsPatch){
                    mergedPatch.push(rowsPatchOpToReplicachePatchOp(p, schema, serverToClient2));
                }
            }
            if (pokePart.mutationsPatch) {
                for (const op of pokePart.mutationsPatch){
                    mergedPatch.push(mutationPatchOpToReplicachePatchOp(op));
                }
            }
        }
    }
    const ret = {
        baseCookie,
        pullResponse: {
            lastMutationIDChanges: mergedLastMutationIDChanges,
            patch: mergedPatch,
            cookie
        }
    };
    if (mutationResults.length > 0) {
        ret.mutationResults = mutationResults;
    }
    return ret;
}
function queryPatchOpToReplicachePatchOp(op, toKey) {
    switch(op.op){
        case "clear":
            return op;
        case "del":
            return {
                op: "del",
                key: toKey(op.hash)
            };
        case "put":
            return {
                op: "put",
                key: toKey(op.hash),
                value: null
            };
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(op);
    }
}
function mutationPatchOpToReplicachePatchOp(op) {
    switch(op.op){
        case "put":
            return {
                op: "put",
                key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMutationResponseKey"])(op.mutation.id),
                value: op.mutation.result
            };
        case "del":
            return {
                op: "del",
                key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMutationResponseKey"])(op.id)
            };
    }
}
function rowsPatchOpToReplicachePatchOp(op, schema, serverToClient2) {
    if (op.op === "clear") {
        return op;
    }
    const tableName = serverToClient2.tableName(op.tableName, op);
    switch(op.op){
        case "del":
            return {
                op: "del",
                key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPrimaryKeyString"])(tableName, schema.tables[tableName].primaryKey, serverToClient2.row(op.tableName, op.id))
            };
        case "put":
            return {
                op: "put",
                key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPrimaryKeyString"])(tableName, schema.tables[tableName].primaryKey, serverToClient2.row(op.tableName, op.value)),
                value: serverToClient2.row(op.tableName, op.value)
            };
        case "update":
            return {
                op: "update",
                key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPrimaryKeyString"])(tableName, schema.tables[tableName].primaryKey, serverToClient2.row(op.tableName, op.id)),
                merge: op.merge ? serverToClient2.row(op.tableName, op.merge) : void 0,
                constrain: serverToClient2.columns(op.tableName, op.constrain)
            };
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(op);
    }
}
function rafFallback(callback) {
    setTimeout(callback, 0);
}
// ../zero-client/src/client/zero-rep.ts
var ZeroRep = class {
    #context;
    #ivmMain;
    #customMutatorsEnabled;
    #mutationTracker;
    #store;
    #auth;
    constructor(context, ivmMain, customMutatorsEnabled, mutationTracker){
        this.#context = context;
        this.#ivmMain = ivmMain;
        this.#customMutatorsEnabled = customMutatorsEnabled;
        this.#mutationTracker = mutationTracker;
    }
    set auth(auth) {
        if (auth === "") {
            this.#auth = void 0;
        } else {
            this.#auth = auth;
        }
    }
    async init(hash, store) {
        const diffs = [];
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRead"])(store, async (dagRead)=>{
            const read = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readFromHash"])(hash, dagRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Latest"]);
            for await (const entry of read.map.scan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTITIES_KEY_PREFIX"])){
                if (!entry[0].startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTITIES_KEY_PREFIX"])) {
                    break;
                }
                diffs.push({
                    op: "add",
                    key: entry[0],
                    newValue: entry[1]
                });
            }
        });
        this.#store = store;
        this.#context.processChanges(void 0, hash, diffs);
    }
    getTxData = (desiredHead, readOptions)=>{
        if (!this.#customMutatorsEnabled) {
            return;
        }
        return this.#ivmMain.forkToHead((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(this.#store), desiredHead, readOptions).then((branch)=>({
                ivmSources: branch,
                token: this.#auth
            }));
    };
    advance = (expectedHash, newHash, diffs)=>{
        this.#context.processChanges(expectedHash, newHash, diffs);
    };
    trackMutation() {
        return this.#mutationTracker.trackMutation();
    }
    mutationIDAssigned(ephemeralID, mutationID) {
        this.#mutationTracker.mutationIDAssigned(ephemeralID, mutationID);
    }
    rejectMutation(ephemeralID, ex) {
        this.#mutationTracker.rejectMutation(ephemeralID, ex);
    }
};
// ../zero-client/src/client/zero.ts
var onSetConnectionStateSymbol = Symbol();
var exposedToTestingSymbol = Symbol();
var createLogOptionsSymbol = Symbol();
var RUN_LOOP_INTERVAL_MS = 5e3;
var PING_INTERVAL_MS = 5e3;
var PING_TIMEOUT_MS = 5e3;
var PULL_TIMEOUT_MS = 5e3;
var DEFAULT_DISCONNECT_HIDDEN_DELAY_MS = 5e3;
var CONNECT_TIMEOUT_MS = 1e4;
var CHECK_CONNECTIVITY_ON_ERROR_FREQUENCY = 6;
var NULL_LAST_MUTATION_ID_SENT = {
    clientID: "",
    id: -1
};
var DEFAULT_QUERY_CHANGE_THROTTLE_MS = 10;
function convertOnUpdateNeededReason(reason) {
    return {
        type: reason.type
    };
}
function updateNeededReloadReasonMessage(reason, serverErrMsg) {
    const { type } = reason;
    let reasonMsg = "";
    switch(type){
        case "NewClientGroup":
            reasonMsg = "This client could not sync with a newer client. This is probably due to another tab loading a newer incompatible version of the app's code.";
            break;
        case "VersionNotSupported":
            reasonMsg = "The server no longer supports this client's protocol version.";
            break;
        case "SchemaVersionNotSupported":
            reasonMsg = "Client and server schemas incompatible.";
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(type);
    }
    if (serverErrMsg) {
        reasonMsg += " " + serverErrMsg;
    }
    return reasonMsg;
}
var serverAheadReloadReason = `Server reported that client is ahead of server. This probably happened because the server is in development mode and restarted. Currently when this happens, the dev server loses its state and on reconnect sees the client as ahead. If you see this in other cases, it may be a bug in Zero.`;
function onClientStateNotFoundServerReason(serverErrMsg) {
    return `Server could not find state needed to synchronize this client. ${serverErrMsg}`;
}
var ON_CLIENT_STATE_NOT_FOUND_REASON_CLIENT = "The local persistent state needed to synchronize this client has been garbage collected.";
var CLOSE_CODE_NORMAL = 1e3;
var Zero = class _Zero {
    version = version2;
    #rep;
    #server;
    userID;
    storageKey;
    #lc;
    #logOptions;
    #enableAnalytics;
    #schema;
    #clientSchema;
    #pokeHandler;
    #queryManager;
    #ivmMain;
    #clientToServer;
    #deleteClientsManager;
    #mutationTracker;
    /**
   * The queries we sent when inside the sec-protocol header when establishing a connection.
   * More queries could be registered while we're waiting for the 'connected' message
   * to come back from the server. To understand what queries we need to send
   * to the server, we diff the `initConnectionQueries` with the current set of desired queries.
   *
   * If this is set to `undefined` that means no queries were sent inside the `sec-protocol` header
   * and an `initConnection` message must be sent to the server after receiving the `connected` message.
   */ #initConnectionQueries;
    /**
   * We try to send the deleted clients and (client groups) as part of the
   * sec-protocol header. If we can't because the header would get too large we
   * keep track of the deleted clients and send them after the connection is
   * established.
   */ #deletedClients;
    #lastMutationIDSent = NULL_LAST_MUTATION_ID_SENT;
    #onPong = ()=>void 0;
    #onlineManager;
    #onUpdateNeeded;
    #onClientStateNotFound;
    // Last cookie used to initiate a connection
    #connectCookie = null;
    // Total number of sockets successfully connected by this client
    #connectedCount = 0;
    // Number of messages received over currently connected socket.  Reset
    // on disconnect.
    #messageCount = 0;
    #connectedAt = 0;
    // Reset on successful connection.
    #connectErrorCount = 0;
    #abortPingTimeout = ()=>{};
    #zeroContext;
    queryDelegate;
    #connectResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
    #pendingPullsByRequestID = /* @__PURE__ */ new Map();
    #lastMutationIDReceived = 0;
    #socket = void 0;
    #socketResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
    #connectionStateChangeResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
    /**
   * This resolver is only used for rejections. It is awaited in the connected
   * state (including when waiting for a pong). It is rejected when we get an
   * invalid message or an 'error' message.
   */ #rejectMessageError = void 0;
    #closeAbortController = new AbortController();
    #visibilityWatcher;
    // We use an accessor pair to allow the subclass to override the setter.
    #connectionState = Disconnected;
    #activeClientsManager;
    #setConnectionState(state) {
        if (state === this.#connectionState) {
            return;
        }
        this.#connectionState = state;
        this.#connectionStateChangeResolver.resolve(state);
        this.#connectionStateChangeResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    #connectStart = void 0;
    // Set on connect attempt if currently undefined.
    // Reset to undefined when
    // 1. client stops trying to connect because it is hidden
    // 2. client encounters a connect error and canary request indicates
    //    the client is offline
    // 2. client successfully connects
    #totalToConnectStart = void 0;
    #options;
    query;
    // TODO: Metrics needs to be rethought entirely as we're not going to
    // send metrics to customer server.
    #metrics;
    // Store as field to allow test subclass to override. Web API doesn't allow
    // overwriting location fields for security reasons.
    #reload = ()=>getBrowserGlobal("location")?.reload();
    /**
   * Constructs a new Zero client.
   */ constructor(options){
        const { userID, storageKey, onOnlineChange, onUpdateNeeded, onClientStateNotFound, hiddenTabDisconnectDelay = DEFAULT_DISCONNECT_HIDDEN_DELAY_MS, schema, batchViewUpdates = (applyViewUpdates)=>applyViewUpdates(), maxRecentQueries = 0, slowMaterializeThreshold = 5e3 } = options;
        if (!userID) {
            throw new Error("ZeroOptions.userID must not be empty.");
        }
        const server = getServer(options.server);
        this.#enableAnalytics = shouldEnableAnalytics(server, false);
        let { kvStore = "idb" } = options;
        if (kvStore === "idb") {
            if (!getBrowserGlobal("indexedDB")) {
                console.warn("IndexedDB is not supported in this environment. Falling back to memory storage.");
                kvStore = "mem";
            }
        }
        if (hiddenTabDisconnectDelay < 0) {
            throw new Error("ZeroOptions.hiddenTabDisconnectDelay must not be negative.");
        }
        this.#onlineManager = new OnlineManager();
        if (onOnlineChange) {
            this.#onlineManager.subscribe(onOnlineChange);
        }
        this.#options = options;
        this.#logOptions = this.#createLogOptions({
            consoleLogLevel: options.logLevel ?? "warn",
            server: null,
            //server, // Reenable remote logging
            enableAnalytics: this.#enableAnalytics
        });
        const logOptions = this.#logOptions;
        const { enableLegacyMutators = true, enableLegacyQueries = true } = schema;
        const replicacheMutators = {
            [CRUD_MUTATION_NAME]: enableLegacyMutators ? makeCRUDMutator(schema) : ()=>Promise.reject(new Error("Zero CRUD mutators are not enabled."))
        };
        this.#ivmMain = new IVMSourceBranch(schema.tables);
        function assertUnique(key) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(replicacheMutators[key] === void 0, `A mutator, or mutator namespace, has already been defined for ${key}`);
        }
        const { onError } = options;
        const sink = logOptions.logSink;
        const logSink = {
            log (level, context, ...args) {
                if (level === "error" && onError) {
                    onError(...args);
                } else {
                    sink.log(level, context, ...args);
                }
            },
            async flush () {
                await sink.flush?.();
            }
        };
        const lc = new ZeroLogContext(logOptions.logLevel, {}, logSink);
        this.#mutationTracker = new MutationTracker(lc, (upTo)=>this.#send([
                "ackMutationResponses",
                upTo
            ]));
        if (options.mutators) {
            for (const [namespaceOrKey, mutatorOrMutators] of Object.entries(options.mutators)){
                if (typeof mutatorOrMutators === "function") {
                    const key = namespaceOrKey;
                    assertUnique(key);
                    replicacheMutators[key] = makeReplicacheMutator(lc, mutatorOrMutators, schema);
                    continue;
                }
                if (typeof mutatorOrMutators === "object") {
                    for (const [name, mutator] of Object.entries(mutatorOrMutators)){
                        const key = customMutatorKey(namespaceOrKey, name);
                        assertUnique(key);
                        replicacheMutators[key] = makeReplicacheMutator(lc, mutator, schema);
                    }
                    continue;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])(mutatorOrMutators);
            }
        }
        this.storageKey = storageKey ?? "";
        this.#schema = schema;
        const { clientSchema, hash } = clientSchemaFrom(schema);
        this.#clientSchema = clientSchema;
        const replicacheOptions = {
            // The schema stored in IDB is dependent upon both the ClientSchema
            // and the AST schema (i.e. PROTOCOL_VERSION).
            schemaVersion: `${PROTOCOL_VERSION}.${hash}`,
            logLevel: logOptions.logLevel,
            logSinks: [
                logOptions.logSink
            ],
            mutators: replicacheMutators,
            name: `zero-${userID}-${this.storageKey}`,
            pusher: (req, reqID)=>this.#pusher(req, reqID),
            puller: (req, reqID)=>this.#puller(req, reqID),
            pushDelay: 0,
            requestOptions: {
                maxDelayMs: 0,
                minDelayMs: 0
            },
            licenseKey: "zero-client-static-key",
            kvStore
        };
        this.#zeroContext = new ZeroContext(lc, this.#ivmMain, (ast, ttl, gotCallback)=>{
            if (enableLegacyQueries) {
                return this.#queryManager.addLegacy(ast, ttl, gotCallback);
            }
            return emptyFunction;
        }, (ast, customQueryID, ttl, gotCallback)=>this.#queryManager.addCustom(ast, customQueryID, ttl, gotCallback), (ast, ttl)=>{
            if (enableLegacyQueries) {
                this.#queryManager.updateLegacy(ast, ttl);
                return;
            }
            this.#queryManager.updateLegacy(ast, ttl);
        }, (customQueryID, ttl)=>this.#queryManager.updateCustom(customQueryID, ttl), ()=>this.#queryManager.flushBatch(), batchViewUpdates, this.#addMetric, assertValidRunOptions2);
        this.queryDelegate = this.#zeroContext;
        const replicacheImplOptions = {
            enableClientGroupForking: false,
            enableMutationRecovery: false,
            enablePullAndPushInOpen: false,
            // Zero calls push in its connection management code
            onClientsDeleted: (clientIDs, clientGroupIDs)=>this.#deleteClientsManager.onClientsDeleted(clientIDs, clientGroupIDs),
            zero: new ZeroRep(this.#zeroContext, this.#ivmMain, options.mutators !== void 0, this.#mutationTracker)
        };
        const rep = new ReplicacheImpl(replicacheOptions, replicacheImplOptions);
        this.#rep = rep;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this.#server = server;
        this.userID = userID;
        this.#lc = lc.withContext("clientID", rep.clientID);
        this.#mutationTracker.setClientIDAndWatch(rep.clientID, rep.experimentalWatch.bind(rep));
        this.#activeClientsManager = makeActiveClientsManager(rep.clientGroupID, this.clientID, this.#closeAbortController.signal, (clientID)=>this.#deleteClientsManager.onClientsDeleted([
                clientID
            ], []));
        const onUpdateNeededCallback = (reason, serverErrorMsg)=>{
            if (onUpdateNeeded) {
                onUpdateNeeded(reason);
            } else {
                reloadWithReason(this.#lc, this.#reload, reason.type, updateNeededReloadReasonMessage(reason, serverErrorMsg));
            }
        };
        this.#onUpdateNeeded = onUpdateNeededCallback;
        this.#rep.onUpdateNeeded = (reason)=>{
            onUpdateNeededCallback(convertOnUpdateNeededReason(reason));
        };
        const onClientStateNotFoundCallback = onClientStateNotFound ?? ((reason)=>{
            reloadWithReason(this.#lc, this.#reload, error_kind_enum_exports.ClientNotFound, reason ?? ON_CLIENT_STATE_NOT_FOUND_REASON_CLIENT);
        });
        this.#onClientStateNotFound = onClientStateNotFoundCallback;
        this.#rep.onClientStateNotFound = onClientStateNotFoundCallback;
        const { mutate, mutateBatch } = makeCRUDMutate(schema, rep.mutate);
        if (options.mutators) {
            for (const [namespaceOrKey, mutatorsOrMutator] of Object.entries(options.mutators)){
                if (typeof mutatorsOrMutator === "function") {
                    mutate[namespaceOrKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(rep.mutate[namespaceOrKey]);
                    continue;
                }
                let existing = mutate[namespaceOrKey];
                if (existing === void 0) {
                    existing = {};
                    mutate[namespaceOrKey] = existing;
                }
                for (const name of Object.keys(mutatorsOrMutator)){
                    existing[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(rep.mutate[customMutatorKey(namespaceOrKey, name)]);
                }
            }
        }
        this.mutate = mutate;
        this.mutateBatch = mutateBatch;
        this.#queryManager = new QueryManager(this.#lc, this.#mutationTracker, rep.clientID, schema.tables, (msg)=>this.#send(msg), rep.experimentalWatch.bind(rep), maxRecentQueries, options.queryChangeThrottleMs ?? DEFAULT_QUERY_CHANGE_THROTTLE_MS, slowMaterializeThreshold);
        this.#clientToServer = clientToServer(schema.tables);
        this.#deleteClientsManager = new DeleteClientsManager((msg)=>this.#send(msg), rep.perdag, this.#lc);
        this.query = this.#registerQueries(schema);
        reportReloadReason(this.#lc);
        this.#metrics = new MetricManager({
            reportIntervalMs: REPORT_INTERVAL_MS,
            host: getBrowserGlobal("location")?.host ?? "",
            source: "client",
            reporter: this.#enableAnalytics ? (allSeries)=>this.#reportMetrics(allSeries) : ()=>Promise.resolve(),
            lc: this.#lc
        });
        this.#metrics.tags.push(`version:${this.version}`);
        this.#pokeHandler = new PokeHandler((poke)=>this.#rep.poke(poke), ()=>this.#onPokeError(), rep.clientID, schema, this.#lc, this.#mutationTracker);
        this.#visibilityWatcher = getDocumentVisibilityWatcher(getBrowserGlobal("document"), hiddenTabDisconnectDelay, this.#closeAbortController.signal);
        void this.#runLoop();
        this.#expose();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    #expose() {
        const g = globalThis;
        if (g.__zero === void 0) {
            g.__zero = this;
        } else if (g.__zero instanceof _Zero) {
            const prev = g.__zero;
            g.__zero = {
                [prev.clientID]: prev,
                [this.clientID]: this
            };
        } else {
            g.__zero[this.clientID] = this;
        }
    }
    #unexpose() {
        const g = globalThis;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(g.__zero !== void 0);
        if (g.__zero instanceof _Zero) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(g.__zero === this);
            delete g.__zero;
        } else {
            delete g.__zero[this.clientID];
            if (Object.entries(g.__zero).length === 1) {
                g.__zero = Object.values(g.__zero)[0];
            }
        }
    }
    #send(msg) {
        if (this.#socket && this.#connectionState === Connected) {
            send(this.#socket, msg);
        }
    }
    #createLogOptions(options) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return createLogOptions(options);
    }
    preload(query, options) {
        return query[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["delegateSymbol"]](this.#zeroContext).preload(options);
    }
    run(query, runOptions) {
        return query[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["delegateSymbol"]](this.#zeroContext).run(runOptions);
    }
    materialize(query, factoryOrOptions, maybeOptions) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["materialize"])(query, this.#zeroContext, factoryOrOptions, maybeOptions);
    }
    /**
   * The server URL that this Zero instance is configured with.
   */ get server() {
        return this.#server;
    }
    /**
   * The name of the IndexedDB database in which the data of this
   * instance of Zero is stored.
   */ get idbName() {
        return this.#rep.idbName;
    }
    /**
   * The schema version of the data understood by this application.
   * See [[ZeroOptions.schemaVersion]].
   */ get schemaVersion() {
        return this.#rep.schemaVersion;
    }
    /**
   * The client ID for this instance of Zero. Each instance
   * gets a unique client ID.
   */ get clientID() {
        return this.#rep.clientID;
    }
    get clientGroupID() {
        return this.#rep.clientGroupID;
    }
    /**
   * Provides simple "CRUD" mutations for the tables in the schema.
   *
   * Each table has `create`, `set`, `update`, and `delete` methods.
   *
   * ```ts
   * await zero.mutate.issue.create({id: '1', title: 'First issue', priority: 'high'});
   * await zero.mutate.comment.create({id: '1', text: 'First comment', issueID: '1'});
   * ```
   *
   * The `update` methods support partials. Unspecified or `undefined` fields
   * are left unchanged:
   *
   * ```ts
   * // Priority left unchanged.
   * await zero.mutate.issue.update({id: '1', title: 'Updated title'});
   * ```
   */ mutate;
    /**
   * Provides a way to batch multiple CRUD mutations together:
   *
   * ```ts
   * await zero.mutateBatch(m => {
   *   await m.issue.create({id: '1', title: 'First issue'});
   *   await m.comment.create({id: '1', text: 'First comment', issueID: '1'});
   * });
   * ```
   *
   * Batch sends all mutations in a single transaction. If one fails, all are
   * rolled back together. Batch can also be more efficient than making many
   * individual mutations.
   *
   * `mutateBatch` is not allowed inside another `mutateBatch` call. Doing so
   * will throw an error.
   */ mutateBatch;
    /**
   * Whether this Zero instance has been closed.
   *
   * Once a Zero instance has been closed it no longer syncs, you can no
   * longer query or mutate data with it, and its query views stop updating.
   */ get closed() {
        return this.#rep.closed;
    }
    /**
   * Closes this Zero instance.
   *
   * Once a Zero instance has been closed it no longer syncs, you can no
   * longer query or mutate data with it, and its query views stop updating.
   */ async close() {
        const lc = this.#lc.withContext("close");
        lc.debug?.("Closing Zero instance. Stack:", new Error().stack);
        this.#onlineManager.cleanup();
        if (this.#connectionState !== Disconnected) {
            this.#disconnect(lc, {
                client: "ClientClosed"
            }, CLOSE_CODE_NORMAL);
        }
        lc.debug?.("Aborting closeAbortController due to close()");
        this.#closeAbortController.abort();
        this.#metrics.stop();
        const ret = await this.#rep.close();
        this.#unexpose();
        return ret;
    }
    #onMessage = (e)=>{
        const lc = this.#lc;
        lc.debug?.("received message", e.data);
        if (this.closed) {
            lc.debug?.("ignoring message because already closed");
            return;
        }
        const rejectInvalidMessage = (e2)=>this.#rejectMessageError?.reject(new Error(`Invalid message received from server: ${e2 instanceof Error ? e2.message + ". " : ""}${data}`));
        let downMessage;
        const { data } = e;
        try {
            downMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(JSON.parse(data), downstreamSchema, "passthrough");
        } catch (e2) {
            rejectInvalidMessage(e2);
            return;
        }
        this.#messageCount++;
        const msgType = downMessage[0];
        switch(msgType){
            case "connected":
                return this.#handleConnectedMessage(lc, downMessage);
            case "error":
                return this.#handleErrorMessage(lc, downMessage);
            case "pong":
                resetBackoff();
                return this.#onPong();
            case "pokeStart":
                return this.#handlePokeStart(lc, downMessage);
            case "pokePart":
                if (downMessage[1].rowsPatch) {
                    resetBackoff();
                }
                return this.#handlePokePart(lc, downMessage);
            case "pokeEnd":
                return this.#handlePokeEnd(lc, downMessage);
            case "pull":
                return this.#handlePullResponse(lc, downMessage);
            case "deleteClients":
                return this.#deleteClientsManager.clientsDeletedOnServer(downMessage[1]);
            case "pushResponse":
                return this.#mutationTracker.processPushResponse(downMessage[1]);
            case "transformError":
                break;
            case "inspect":
                break;
            default:
                msgType;
                rejectInvalidMessage();
        }
    };
    #onOpen = ()=>{
        const l = addWebSocketIDFromSocketToLogContext(this.#socket, this.#lc);
        if (this.#connectStart === void 0) {
            l.error?.("Got open event but connect start time is undefined.");
        } else {
            const now = Date.now();
            const timeToOpenMs = now - this.#connectStart;
            l.info?.("Got socket open event", {
                navigatorOnline: localNavigator?.onLine,
                timeToOpenMs
            });
        }
    };
    #onClose = (e)=>{
        const lc = addWebSocketIDFromSocketToLogContext(this.#socket, this.#lc);
        const { code, reason, wasClean } = e;
        if (code <= 1001) {
            lc.info?.("Got socket close event", {
                code,
                reason,
                wasClean
            });
        } else {
            lc.error?.("Got unexpected socket close event", {
                code,
                reason,
                wasClean
            });
        }
        const closeKind = wasClean ? "CleanClose" : "AbruptClose";
        this.#connectResolver.reject(new CloseError(closeKind));
        this.#disconnect(lc, {
            client: closeKind
        });
    };
    // An error on the connection is fatal for the connection.
    async #handleErrorMessage(lc, downMessage) {
        const [, { kind, message }] = downMessage;
        if (kind === error_kind_enum_exports.MutationRateLimited) {
            this.#lastMutationIDSent = NULL_LAST_MUTATION_ID_SENT;
            lc.error?.(kind, "Mutation rate limited", {
                message
            });
            return;
        }
        lc.info?.(`${kind}: ${message}}`);
        const error = new ServerError(downMessage[1]);
        this.#rejectMessageError?.reject(error);
        lc.debug?.("Rejecting connect resolver due to error", error);
        this.#connectResolver.reject(error);
        this.#disconnect(lc, {
            server: kind
        });
        if (kind === error_kind_enum_exports.VersionNotSupported) {
            this.#onUpdateNeeded?.({
                type: kind
            }, message);
        } else if (kind === error_kind_enum_exports.SchemaVersionNotSupported) {
            await this.#rep.disableClientGroup();
            this.#onUpdateNeeded?.({
                type: "SchemaVersionNotSupported"
            }, message);
        } else if (kind === error_kind_enum_exports.ClientNotFound) {
            await this.#rep.disableClientGroup();
            this.#onClientStateNotFound?.(onClientStateNotFoundServerReason(message));
        } else if (kind === error_kind_enum_exports.InvalidConnectionRequestLastMutationID || kind === error_kind_enum_exports.InvalidConnectionRequestBaseCookie) {
            await dropDatabase(this.#rep.idbName);
            reloadWithReason(lc, this.#reload, kind, serverAheadReloadReason);
        }
    }
    async #handleConnectedMessage(lc, connectedMessage) {
        const now = Date.now();
        const [, connectBody] = connectedMessage;
        lc = addWebSocketIDToLogContext(connectBody.wsid, lc);
        if (this.#connectedCount === 0) {
            this.#checkConnectivity("firstConnect");
        } else if (this.#connectErrorCount > 0) {
            this.#checkConnectivity("connectAfterError");
        }
        this.#connectedCount++;
        this.#connectedAt = now;
        this.#metrics.lastConnectError.clear();
        const proceedingConnectErrorCount = this.#connectErrorCount;
        this.#connectErrorCount = 0;
        let timeToConnectMs;
        let connectMsgLatencyMs;
        if (this.#connectStart === void 0) {
            lc.error?.("Got connected message but connect start time is undefined.");
        } else {
            timeToConnectMs = now - this.#connectStart;
            this.#metrics.timeToConnectMs.set(timeToConnectMs);
            connectMsgLatencyMs = connectBody.timestamp !== void 0 ? now - connectBody.timestamp : void 0;
            this.#connectStart = void 0;
        }
        let totalTimeToConnectMs;
        if (this.#totalToConnectStart === void 0) {
            lc.error?.("Got connected message but total to connect start time is undefined.");
        } else {
            totalTimeToConnectMs = now - this.#totalToConnectStart;
            this.#totalToConnectStart = void 0;
        }
        this.#metrics.setConnected(timeToConnectMs ?? 0, totalTimeToConnectMs ?? 0);
        lc.info?.("Connected", {
            navigatorOnline: localNavigator?.onLine,
            timeToConnectMs,
            totalTimeToConnectMs,
            connectMsgLatencyMs,
            connectedCount: this.#connectedCount,
            proceedingConnectErrorCount
        });
        this.#lastMutationIDSent = NULL_LAST_MUTATION_ID_SENT;
        lc.debug?.("Resolving connect resolver");
        const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["must"])(this.#socket);
        const queriesPatch = await this.#rep.query((tx)=>this.#queryManager.getQueriesPatch(tx, this.#initConnectionQueries));
        const hasDeletedClients = ()=>skipEmptyArray(this.#deletedClients?.clientIDs) || skipEmptyArray(this.#deletedClients?.clientGroupIDs);
        const maybeSendDeletedClients = ()=>{
            if (hasDeletedClients()) {
                send(socket, [
                    "deleteClients",
                    this.#deletedClients
                ]);
                this.#deletedClients = void 0;
            }
        };
        if (queriesPatch.size > 0 && this.#initConnectionQueries !== void 0) {
            maybeSendDeletedClients();
            send(socket, [
                "changeDesiredQueries",
                {
                    desiredQueriesPatch: [
                        ...queriesPatch.values()
                    ]
                }
            ]);
        } else if (this.#initConnectionQueries === void 0) {
            const clientSchema = this.#clientSchema;
            send(socket, [
                "initConnection",
                {
                    desiredQueriesPatch: [
                        ...queriesPatch.values()
                    ],
                    deleted: skipEmptyDeletedClients(this.#deletedClients),
                    // The clientSchema only needs to be sent for the very first request.
                    // Henceforth it is stored with the CVR and verified automatically.
                    ...this.#connectCookie === null ? {
                        clientSchema
                    } : {},
                    userPushParams: this.#options.mutate ?? this.#options.push,
                    userQueryParams: this.#options.query
                }
            ]);
            this.#deletedClients = void 0;
        }
        this.#initConnectionQueries = void 0;
        maybeSendDeletedClients();
        this.#setConnectionState(Connected);
        this.#connectResolver.resolve();
    }
    /**
   * Starts a new connection. This will create the WebSocket that does the HTTP
   * request to the server.
   *
   * {@link #connect} will throw an assertion error if the
   * {@link #connectionState} is not {@link ConnectionState.Disconnected}.
   * Callers MUST check the connection state before calling this method and log
   * an error as needed.
   *
   * The function will resolve once the socket is connected. If you need to know
   * when a connection has been established, as in we have received the
   * {@link ConnectedMessage}, you should await the {@link #connectResolver}
   * promise. The {@link #connectResolver} promise rejects if an error message
   * is received before the connected message is received or if the connection
   * attempt times out.
   */ async #connect(lc, additionalConnectParams) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#server);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#connectionState === Disconnected);
        const wsid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nanoid"])();
        lc = addWebSocketIDToLogContext(wsid, lc);
        lc.info?.("Connecting...", {
            navigatorOnline: localNavigator?.onLine
        });
        this.#setConnectionState(Connecting);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#connectStart === void 0);
        const now = Date.now();
        this.#connectStart = now;
        if (this.#totalToConnectStart === void 0) {
            this.#totalToConnectStart = now;
        }
        if (this.closed) {
            return;
        }
        this.#connectCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(await this.#rep.cookie, nullableVersionSchema, "passthrough");
        if (this.closed) {
            return;
        }
        const timeoutID = setTimeout(()=>{
            lc.debug?.("Rejecting connect resolver due to timeout");
            this.#connectResolver.reject(new TimedOutError("Connect"));
            this.#disconnect(lc, {
                client: "ConnectTimeout"
            });
        }, CONNECT_TIMEOUT_MS);
        const abortHandler = ()=>{
            clearTimeout(timeoutID);
        };
        this.#closeAbortController.signal.addEventListener("abort", abortHandler);
        const [ws, initConnectionQueries, deletedClients] = await createSocket(this.#rep, this.#queryManager, this.#deleteClientsManager, toWSString(this.#server), this.#connectCookie, this.clientID, await this.clientGroupID, this.#clientSchema, this.userID, this.#rep.auth, this.#lastMutationIDReceived, wsid, this.#options.logLevel === "debug", lc, this.#options.mutate ?? this.#options.push, this.#options.query, this.#options.maxHeaderLength, additionalConnectParams, await this.#activeClientsManager);
        if (this.closed) {
            return;
        }
        this.#initConnectionQueries = initConnectionQueries;
        this.#deletedClients = deletedClients;
        ws.addEventListener("message", this.#onMessage);
        ws.addEventListener("open", this.#onOpen);
        ws.addEventListener("close", this.#onClose);
        this.#socket = ws;
        this.#socketResolver.resolve(ws);
        try {
            lc.debug?.("Waiting for connection to be acknowledged");
            await this.#connectResolver.promise;
            this.#mutationTracker.onConnected(this.#lastMutationIDReceived);
            this.#rep.push().catch(()=>{});
        } finally{
            clearTimeout(timeoutID);
            this.#closeAbortController.signal.removeEventListener("abort", abortHandler);
        }
    }
    #disconnect(lc, reason, closeCode) {
        if (this.#connectionState === Connecting) {
            this.#connectErrorCount++;
        }
        lc.info?.("disconnecting", {
            navigatorOnline: localNavigator?.onLine,
            reason,
            connectStart: this.#connectStart,
            totalToConnectStart: this.#totalToConnectStart,
            connectedAt: this.#connectedAt,
            connectionDuration: this.#connectedAt ? Date.now() - this.#connectedAt : 0,
            messageCount: this.#messageCount,
            connectionState: this.#connectionState,
            connectErrorCount: this.#connectErrorCount
        });
        switch(this.#connectionState){
            case Connected:
                {
                    if (this.#connectStart !== void 0) {
                        lc.error?.("disconnect() called while connected but connect start time is defined.");
                    }
                    break;
                }
            case Connecting:
                {
                    this.#metrics.lastConnectError.set(getLastConnectErrorValue(reason));
                    this.#metrics.timeToConnectMs.set(DID_NOT_CONNECT_VALUE);
                    this.#metrics.setConnectError(reason);
                    if (this.#connectErrorCount % CHECK_CONNECTIVITY_ON_ERROR_FREQUENCY === 1) {
                        this.#checkConnectivity(`connectErrorCount=${this.#connectErrorCount}`);
                    }
                    if (this.#connectStart === void 0) {
                        lc.error?.("disconnect() called while connecting but connect start time is undefined.");
                    }
                    break;
                }
            case Disconnected:
                lc.error?.("disconnect() called while disconnected");
                break;
        }
        this.#socketResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        lc.debug?.("Creating new connect resolver");
        this.#connectResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        this.#setConnectionState(Disconnected);
        this.#messageCount = 0;
        this.#connectStart = void 0;
        this.#connectedAt = 0;
        this.#socket?.removeEventListener("message", this.#onMessage);
        this.#socket?.removeEventListener("open", this.#onOpen);
        this.#socket?.removeEventListener("close", this.#onClose);
        this.#socket?.close(closeCode);
        this.#socket = void 0;
        this.#lastMutationIDSent = NULL_LAST_MUTATION_ID_SENT;
        this.#pokeHandler.handleDisconnect();
    }
    #handlePokeStart(_lc, pokeMessage) {
        this.#abortPingTimeout();
        this.#pokeHandler.handlePokeStart(pokeMessage[1]);
    }
    #handlePokePart(_lc, pokeMessage) {
        this.#abortPingTimeout();
        const lastMutationIDChangeForSelf = this.#pokeHandler.handlePokePart(pokeMessage[1]);
        if (lastMutationIDChangeForSelf !== void 0) {
            this.#lastMutationIDReceived = lastMutationIDChangeForSelf;
        }
    }
    #handlePokeEnd(_lc, pokeMessage) {
        this.#abortPingTimeout();
        this.#pokeHandler.handlePokeEnd(pokeMessage[1]);
    }
    #onPokeError() {
        const lc = this.#lc;
        lc.info?.("poke error, disconnecting?", this.#connectionState !== Disconnected);
        if (this.#connectionState !== Disconnected) {
            this.#disconnect(lc, {
                client: "UnexpectedBaseCookie"
            });
        }
    }
    #handlePullResponse(lc, pullResponseMessage) {
        this.#abortPingTimeout();
        const body = pullResponseMessage[1];
        lc = lc.withContext("requestID", body.requestID);
        lc.debug?.("Handling pull response", body);
        const resolver10 = this.#pendingPullsByRequestID.get(body.requestID);
        if (!resolver10) {
            lc.debug?.("No resolver found");
            return;
        }
        resolver10.resolve(pullResponseMessage[1]);
    }
    async #pusher(req, requestID) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(req.pushVersion === 1);
        await this.#connectResolver.promise;
        const lc = this.#lc.withContext("requestID", requestID);
        lc.debug?.(`pushing ${req.mutations.length} mutations`);
        const socket = this.#socket;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(socket);
        const isMutationRecoveryPush = req.clientGroupID !== await this.clientGroupID;
        const start = isMutationRecoveryPush ? 0 : req.mutations.findIndex((m)=>m.clientID === this.#lastMutationIDSent.clientID && m.id === this.#lastMutationIDSent.id) + 1;
        lc.debug?.(isMutationRecoveryPush ? "pushing for recovery" : "pushing", req.mutations.length - start, "mutations of", req.mutations.length, "mutations.");
        const now = Date.now();
        for(let i = start; i < req.mutations.length; i++){
            const m = req.mutations[i];
            const timestamp = now - Math.round(performance.now() - m.timestamp);
            const zeroM = m.name === CRUD_MUTATION_NAME ? {
                type: CRUD,
                timestamp,
                id: m.id,
                clientID: m.clientID,
                name: m.name,
                args: [
                    mapCRUD(m.args, this.#clientToServer)
                ]
            } : {
                type: Custom,
                timestamp,
                id: m.id,
                clientID: m.clientID,
                name: m.name,
                args: [
                    m.args
                ]
            };
            const msg = [
                "push",
                {
                    timestamp: now,
                    clientGroupID: req.clientGroupID,
                    mutations: [
                        zeroM
                    ],
                    pushVersion: req.pushVersion,
                    requestID
                }
            ];
            send(socket, msg);
            if (!isMutationRecoveryPush) {
                this.#lastMutationIDSent = {
                    clientID: m.clientID,
                    id: m.id
                };
            }
        }
        return {
            httpRequestInfo: {
                errorMessage: "",
                httpStatusCode: 200
            }
        };
    }
    async #updateAuthToken(lc, error) {
        const { auth: authOption } = this.#options;
        const auth = await (typeof authOption === "function" ? authOption(error) : authOption);
        if (auth) {
            lc.debug?.("Got auth token");
            this.#rep.auth = auth;
        }
    }
    async #runLoop() {
        this.#lc.info?.(`Starting Zero version: ${this.version}`);
        if (this.#server === null) {
            this.#lc.info?.("No socket origin provided, not starting connect loop.");
            return;
        }
        let runLoopCounter = 0;
        const bareLogContext = this.#lc;
        const getLogContext = ()=>{
            let lc = bareLogContext;
            if (this.#socket) {
                lc = addWebSocketIDFromSocketToLogContext(this.#socket, lc);
            }
            return lc.withContext("runLoopCounter", runLoopCounter);
        };
        await this.#updateAuthToken(bareLogContext);
        let needsReauth = false;
        let gotError = false;
        let backoffMs = RUN_LOOP_INTERVAL_MS;
        let additionalConnectParams;
        while(!this.closed){
            runLoopCounter++;
            let lc = getLogContext();
            backoffMs = RUN_LOOP_INTERVAL_MS;
            try {
                switch(this.#connectionState){
                    case Disconnected:
                        {
                            if (this.#visibilityWatcher.visibilityState === "hidden") {
                                this.#metrics.setDisconnectedWaitingForVisible();
                                this.#totalToConnectStart = void 0;
                            }
                            await this.#visibilityWatcher.waitForVisible();
                            if (needsReauth) {
                                await this.#updateAuthToken(lc, "invalid-token");
                            }
                            if (reloadScheduled()) {
                                break;
                            }
                            await this.#connect(lc, additionalConnectParams);
                            additionalConnectParams = void 0;
                            if (this.closed) {
                                break;
                            }
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#socket);
                            lc = getLogContext();
                            lc.debug?.("Connected successfully");
                            gotError = false;
                            needsReauth = false;
                            this.#setOnline(true);
                            break;
                        }
                    case Connecting:
                        lc.error?.("unreachable");
                        gotError = true;
                        break;
                    case Connected:
                        {
                            const controller = new AbortController();
                            this.#abortPingTimeout = ()=>controller.abort();
                            const [pingTimeoutPromise, pingTimeoutAborted] = sleepWithAbort(PING_INTERVAL_MS, controller.signal);
                            this.#rejectMessageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
                            const PING = 0;
                            const HIDDEN = 2;
                            const raceResult = await promiseRace([
                                pingTimeoutPromise,
                                pingTimeoutAborted,
                                this.#visibilityWatcher.waitForHidden(),
                                this.#connectionStateChangeResolver.promise,
                                this.#rejectMessageError.promise
                            ]);
                            if (this.closed) {
                                this.#rejectMessageError = void 0;
                                break;
                            }
                            switch(raceResult){
                                case PING:
                                    {
                                        const pingResult = await this.#ping(lc, this.#rejectMessageError.promise);
                                        if (pingResult === TimedOut) {
                                            gotError = true;
                                        }
                                        break;
                                    }
                                case HIDDEN:
                                    this.#disconnect(lc, {
                                        client: "Hidden"
                                    });
                                    this.#setOnline(false);
                                    break;
                            }
                            this.#rejectMessageError = void 0;
                        }
                }
            } catch (ex) {
                if (this.#connectionState !== Connected) {
                    const level = isAuthError(ex) ? "warn" : "error";
                    const kind = isServerError(ex) ? ex.kind : "Unknown Error";
                    lc[level]?.("Failed to connect", ex, kind, {
                        lmid: this.#lastMutationIDReceived,
                        baseCookie: this.#connectCookie
                    });
                }
                lc.debug?.("Got an exception in the run loop", "state:", this.#connectionState, "exception:", ex);
                if (isAuthError(ex)) {
                    if (!needsReauth) {
                        needsReauth = true;
                        continue;
                    }
                    needsReauth = true;
                }
                if (isServerError(ex) || ex instanceof TimedOutError || ex instanceof CloseError) {
                    gotError = true;
                }
                const backoffError = isBackoffError(ex);
                if (backoffError) {
                    if (backoffError.minBackoffMs !== void 0) {
                        backoffMs = Math.max(backoffMs, backoffError.minBackoffMs);
                    }
                    if (backoffError.maxBackoffMs !== void 0) {
                        backoffMs = Math.min(backoffMs, backoffError.maxBackoffMs);
                    }
                    additionalConnectParams = backoffError.reconnectParams;
                }
            }
            if (gotError) {
                this.#setOnline(false);
                lc.debug?.("Sleeping", backoffMs, "ms before reconnecting due to error, state:", this.#connectionState);
                await sleep(backoffMs);
            }
        }
    }
    async #puller(req, requestID) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(req.pullVersion === 1);
        const lc = this.#lc.withContext("requestID", requestID);
        lc.debug?.("Pull", req);
        if (req.clientGroupID === await this.clientGroupID) {
            return {
                httpRequestInfo: {
                    errorMessage: "",
                    httpStatusCode: 200
                }
            };
        }
        await this.#connectResolver.promise;
        const socket = this.#socket;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(socket);
        lc.debug?.("Pull is for mutation recovery");
        const cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(req.cookie, nullableVersionSchema, "passthrough");
        const pullRequestMessage = [
            "pull",
            {
                clientGroupID: req.clientGroupID,
                cookie,
                requestID
            }
        ];
        send(socket, pullRequestMessage);
        const pullResponseResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        this.#pendingPullsByRequestID.set(requestID, pullResponseResolver);
        try {
            const TIMEOUT = 0;
            const RESPONSE = 1;
            const raceResult = await promiseRace([
                sleep(PULL_TIMEOUT_MS),
                pullResponseResolver.promise
            ]);
            switch(raceResult){
                case TIMEOUT:
                    lc.debug?.("Mutation recovery pull timed out");
                    throw new Error("Pull timed out");
                case RESPONSE:
                    {
                        lc.debug?.("Returning mutation recovery pull response");
                        const response = await pullResponseResolver.promise;
                        return {
                            response: {
                                cookie: response.cookie,
                                lastMutationIDChanges: response.lastMutationIDChanges,
                                patch: []
                            },
                            httpRequestInfo: {
                                errorMessage: "",
                                httpStatusCode: 200
                            }
                        };
                    }
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])();
            }
        } finally{
            pullResponseResolver.reject("timed out");
            this.#pendingPullsByRequestID.delete(requestID);
        }
    }
    #setOnline(online) {
        this.#onlineManager.setOnline(online);
    }
    /**
   * A rough heuristic for whether the client is currently online and
   * authenticated.
   */ get online() {
        return this.#onlineManager.online;
    }
    /**
   * Subscribe to online status changes.
   *
   * This is useful when you want to update state based on the online status.
   *
   * @param listener - The listener to subscribe to.
   * @returns A function to unsubscribe the listener.
   */ onOnline = (listener)=>this.#onlineManager.subscribe(listener);
    /**
   * Starts a ping and waits for a pong.
   *
   * If it takes too long to get a pong we disconnect and this returns
   * {@linkcode PingResult.TimedOut}.
   */ async #ping(lc, messageErrorRejectionPromise) {
        lc.debug?.("pinging");
        const { promise, resolve } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
        this.#onPong = resolve;
        const pingMessage = [
            "ping",
            {}
        ];
        const t0 = performance.now();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(this.#socket);
        send(this.#socket, pingMessage);
        const connected = await promiseRace([
            promise,
            sleep(PING_TIMEOUT_MS),
            messageErrorRejectionPromise
        ]) === 0;
        const delta = performance.now() - t0;
        if (!connected) {
            lc.info?.("ping failed in", delta, "ms - disconnecting");
            this.#disconnect(lc, {
                client: "PingTimeout"
            });
            return TimedOut;
        }
        lc.debug?.("ping succeeded in", delta, "ms");
        return Success;
    }
    // Sends a set of metrics to the server. Throws unless the server
    // returns 200.
    // TODO: Reenable metrics reporting
    async #reportMetrics(_allSeries) {}
    #checkConnectivity(reason) {
        void this.#checkConnectivityAsync(reason);
    }
    #checkConnectivityAsync(_reason) {}
    #registerQueries(schema) {
        const rv = {};
        const context = this.#zeroContext;
        for (const name of Object.keys(schema.tables)){
            rv[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newQuery"])(context, schema, name);
        }
        return rv;
    }
    /**
   * `inspect` returns an object that can be used to inspect the state of the
   * queries a Zero instance uses. It is intended for debugging purposes.
   */ async inspect() {
        BUNDLE_SIZE: {
            const m = await __turbopack_context__.A("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/inspector-4ALIZXAU.js [app-ssr] (ecmascript, async loader)");
            return m.newInspector(this.#rep, this.#queryManager, this.#schema, async ()=>{
                await this.#connectResolver.promise;
                return this.#socket;
            });
        }
    }
    #addMetric = (metric, value, ...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(isClientMetric(metric), `Invalid metric: ${metric}`);
        this.#queryManager.addMetric(metric, value, ...args);
    };
};
var OnlineManager = class extends Subscribable {
    #online = false;
    setOnline(online) {
        if (this.#online === online) {
            return;
        }
        this.#online = online;
        this.notify(online);
    }
    get online() {
        return this.#online;
    }
};
async function createSocket(rep, queryManager, deleteClientsManager, socketOrigin, baseCookie, clientID, clientGroupID, clientSchema, userID, auth, lmid, wsid, debugPerf, lc, userPushParams, userQueryParams, maxHeaderLength = 1024 * 8, additionalConnectParams, activeClientsManager) {
    const url = new URL(appendPath(socketOrigin, `/sync/v${PROTOCOL_VERSION}/connect`));
    const { searchParams } = url;
    searchParams.set("clientID", clientID);
    searchParams.set("clientGroupID", clientGroupID);
    searchParams.set("userID", userID);
    searchParams.set("baseCookie", baseCookie === null ? "" : String(baseCookie));
    searchParams.set("ts", String(performance.now()));
    searchParams.set("lmid", String(lmid));
    searchParams.set("wsid", wsid);
    if (debugPerf) {
        searchParams.set("debugPerf", true.toString());
    }
    if (additionalConnectParams) {
        for(const k in additionalConnectParams){
            if (searchParams.has(k)) {
                lc.warn?.(`skipping conflicting parameter ${k}`);
            } else {
                searchParams.set(k, additionalConnectParams[k]);
            }
        }
    }
    lc.info?.("Connecting to", url.toString());
    const WS = mustGetBrowserGlobal("WebSocket");
    const queriesPatchP = rep.query((tx)=>queryManager.getQueriesPatch(tx));
    let deletedClients = await deleteClientsManager.getDeletedClients();
    let queriesPatch = await queriesPatchP;
    const { activeClients } = activeClientsManager;
    let secProtocol = encodeSecProtocols([
        "initConnection",
        {
            desiredQueriesPatch: [
                ...queriesPatch.values()
            ],
            deleted: skipEmptyDeletedClients(deletedClients),
            // The clientSchema only needs to be sent for the very first request.
            // Henceforth it is stored with the CVR and verified automatically.
            ...baseCookie === null ? {
                clientSchema
            } : {},
            userPushParams,
            userQueryParams,
            activeClients: [
                ...activeClients
            ]
        }
    ], auth);
    if (secProtocol.length > maxHeaderLength) {
        secProtocol = encodeSecProtocols(void 0, auth);
        if (secProtocol.length > maxHeaderLength) {
            lc.warn?.(`Encoded auth token length (${secProtocol.length}) exceeds ZeroOptions.maxHeaderLength (${maxHeaderLength}). This may cause connection failures.`);
        }
        queriesPatch = void 0;
    } else {
        deletedClients = void 0;
    }
    return [
        new WS(// toString() required for RN URL polyfill.
        url.toString(), secProtocol),
        queriesPatch,
        skipEmptyDeletedClients(deletedClients)
    ];
}
function skipEmptyArray(arr) {
    return arr && arr.length > 0 ? arr : void 0;
}
function skipEmptyDeletedClients(deletedClients) {
    if (!deletedClients) {
        return void 0;
    }
    const { clientIDs, clientGroupIDs } = deletedClients;
    if ((!clientIDs || clientIDs.length === 0) && (!clientGroupIDs || clientGroupIDs.length === 0)) {
        return void 0;
    }
    const data = {};
    data.clientIDs = skipEmptyArray(clientIDs);
    data.clientGroupIDs = skipEmptyArray(clientGroupIDs);
    return data;
}
function addWebSocketIDFromSocketToLogContext({ url }, lc) {
    const wsid = new URL(url).searchParams.get("wsid") ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nanoid"])();
    return addWebSocketIDToLogContext(wsid, lc);
}
function addWebSocketIDToLogContext(wsid, lc) {
    return lc.withContext("wsid", wsid);
}
function promiseRace(ps) {
    return Promise.race(ps.map((p, i)=>p.then(()=>i)));
}
var TimedOutError = class extends Error {
    constructor(m){
        super(`${m} timed out`);
    }
};
var CloseError = class extends Error {
};
function assertValidRunOptions2(_options) {}
async function makeActiveClientsManager(clientGroupID, clientID, signal, onDelete) {
    const manager = await ActiveClientsManager.create(await clientGroupID, clientID, signal);
    manager.onDelete = onDelete;
    return manager;
}
;
 //# sourceMappingURL=chunk-6USDOK3X.js.map
}),
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-O7W55FT4.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ../zero-react/src/components/mark-icon.tsx
__turbopack_context__.s([
    "MarkIcon",
    ()=>MarkIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
var MarkIcon = (props)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: "Show Zero Inspector"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
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
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/react.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$6USDOK3X$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-6USDOK3X.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-MKB4RXL3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-G442PJSB.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$O7W55FT4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-O7W55FT4.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-424PT5DM.js [app-ssr] (ecmascript)");
// ../zero-react/src/components/zero-inspector.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+resolver@1.0.2/node_modules/@rocicorp/resolver/out/resolver.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var Inspector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/inspector-YIRP3TTL.js [app-ssr] (ecmascript, async loader)"));
function ZeroInspector({ zero }) {
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return show ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            children: "Loading Inspector..."
        }),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Inspector, {
            zero,
            onClose: ()=>setShow(false)
        })
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
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
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$O7W55FT4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkIcon"], {
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
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"])(value, k)) {
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
            throw new Error(`Invalid type: ${typeof value}`);
    }
}
;
;
var ZeroContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useZero() {
    const zero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ZeroContext);
    if (zero === void 0) {
        throw new Error("useZero must be used within a ZeroProvider");
    }
    return zero;
}
function createUseZero() {
    return ()=>useZero();
}
function ZeroProvider({ children, init, ...props }) {
    const [zero, setZero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("zero" in props ? props.zero : void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("zero" in props) {
            setZero(props.zero);
            return;
        }
        const z = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$6USDOK3X$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Zero"](props);
        init?.(z);
        setZero(z);
        return ()=>{
            void z.close();
            setZero(void 0);
        };
    }, [
        init,
        ...Object.values(props)
    ]);
    return zero && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ZeroContext.Provider, {
        value: zero,
        children
    });
}
// ../zero-react/src/use-query.tsx
var reactUse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use;
var suspend = reactUse ? reactUse : (p)=>{
    throw p;
};
function useQuery(query, options) {
    let enabled = true;
    let ttl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TTL_MS"];
    if (typeof options === "boolean") {
        enabled = options;
    } else if (options) {
        ({ enabled = true, ttl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TTL_MS"] } = options);
    }
    const view = viewStore.getView(useZero(), query, enabled, ttl);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(view.subscribeReactInternals, view.getSnapshot, view.getSnapshot);
}
function useSuspenseQuery(query, options) {
    let enabled = true;
    let ttl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TTL_MS"];
    let suspendUntil = "partial";
    if (typeof options === "boolean") {
        enabled = options;
    } else if (options) {
        ({ enabled = true, ttl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TTL_MS"], suspendUntil = "complete" } = options);
    }
    const view = viewStore.getView(useZero(), query, enabled, ttl);
    const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(view.subscribeReactInternals, view.getSnapshot, view.getSnapshot);
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
var ViewStore = class {
    #views = /* @__PURE__ */ new Map();
    constructor(){
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
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
        let existing = this.#views.get(hash);
        if (!existing) {
            existing = new ViewWrapper(zero, query, format, ttl, (view)=>{
                const lastView = this.#views.get(hash);
                if (lastView && lastView !== view) {
                    throw new Error("View already exists");
                }
                this.#views.set(hash, view);
            }, ()=>{
                this.#views.delete(hash);
            });
            this.#views.set(hash, existing);
        } else {
            existing.updateTTL(ttl);
        }
        return existing;
    }
};
var viewStore = new ViewStore();
var ViewWrapper = class {
    #zero;
    #view;
    #onDematerialized;
    #onMaterialized;
    #query;
    #format;
    #snapshot;
    #reactInternals;
    #ttl;
    #complete = false;
    #completeResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
    #nonEmpty = false;
    #nonEmptyResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
    constructor(zero, query, format, ttl, onMaterialized, onDematerialized){
        this.#zero = zero;
        this.#query = query;
        this.#format = format;
        this.#ttl = ttl;
        this.#onMaterialized = onMaterialized;
        this.#onDematerialized = onDematerialized;
        this.#snapshot = getDefaultSnapshot(format.singular);
        this.#reactInternals = /* @__PURE__ */ new Set();
        this.#materializeIfNeeded();
    }
    #onData = (snap, resultType)=>{
        const data = snap === void 0 ? snap : deepClone(snap);
        this.#snapshot = getSnapshot(this.#format.singular, data, resultType);
        if (resultType === "complete") {
            this.#complete = true;
            this.#completeResolver.resolve();
            this.#nonEmpty = true;
            this.#nonEmptyResolver.resolve();
        }
        if (this.#format.singular ? this.#snapshot[0] !== void 0 : this.#snapshot[0].length !== 0) {
            this.#nonEmpty = true;
            this.#nonEmptyResolver.resolve();
        }
        for (const internals of this.#reactInternals){
            internals();
        }
    };
    #materializeIfNeeded = ()=>{
        if (this.#view) {
            return;
        }
        this.#view = this.#zero.materialize(this.#query, {
            ttl: this.#ttl
        });
        this.#view.addListener(this.#onData);
        this.#onMaterialized(this);
    };
    getSnapshot = ()=>this.#snapshot;
    subscribeReactInternals = (internals)=>{
        this.#reactInternals.add(internals);
        this.#materializeIfNeeded();
        return ()=>{
            this.#reactInternals.delete(internals);
            if (this.#reactInternals.size === 0) {
                setTimeout(()=>{
                    if (this.#reactInternals.size > 0) {
                        return;
                    }
                    if (this.#view === void 0) {
                        return;
                    }
                    this.#view.destroy();
                    this.#view = void 0;
                    this.#complete = false;
                    this.#completeResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
                    this.#nonEmpty = false;
                    this.#nonEmptyResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"])();
                    this.#onDematerialized();
                }, 10);
            }
        };
    };
    updateTTL(ttl) {
        this.#ttl = ttl;
        this.#view?.updateTTL(ttl);
    }
    get complete() {
        return this.#complete;
    }
    waitForComplete() {
        return this.#completeResolver.promise;
    }
    get nonEmpty() {
        return this.#nonEmpty;
    }
    waitForNonEmpty() {
        return this.#nonEmptyResolver.promise;
    }
};
;
function useZeroOnline() {
    const zero = useZero();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(zero.onOnline, ()=>zero.online, ()=>zero.online);
}
;
 //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-FMWNU2YJ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$6USDOK3X$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-6USDOK3X.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-G442PJSB.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-ssr] (ecmascript)");
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
function many(...args) {
    return args.map((arg)=>({
            sourceField: arg.sourceField,
            destField: arg.destField,
            destSchema: arg.destSchema.schema.name,
            cardinality: "many"
        }));
}
function one(...args) {
    return args.map((arg)=>({
            sourceField: arg.sourceField,
            destField: arg.destField,
            destSchema: arg.destSchema.schema.name,
            cardinality: "one"
        }));
}
// ../zql/src/query/static-query.ts
var StaticQuery = class _StaticQuery extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractQuery"] {
    constructor(schema, tableName, ast, format, system = "permissions", customQueryID, currentJunction){
        super(void 0, schema, tableName, ast, format, system, customQueryID, currentJunction);
    }
    expressionBuilder() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExpressionBuilder"](this._exists);
    }
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newQuerySymbol"]](_delegate, schema, tableName, ast, format, customQueryID, currentJunction) {
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
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultFormat"]).expressionBuilder();
    }
    const config = await definer();
    return compilePermissions(schema, config, expressionBuilders);
}
function compilePermissions(schema, authz, expressionBuilders) {
    if (!authz) {
        return void 0;
    }
    const nameMapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$6USDOK3X$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientToServer"])(schema.tables);
    const ret = {
        tables: {}
    };
    for (const [tableName, tableConfig] of Object.entries(authz)){
        const serverName = schema.tables[tableName].serverName ?? tableName;
        ret.tables[serverName] = {
            row: compileRowConfig(nameMapper, tableName, tableConfig.row, expressionBuilders[tableName]),
            cell: compileCellConfig(nameMapper, tableName, tableConfig.cell, expressionBuilders[tableName])
        };
    }
    return ret;
}
function compileRowConfig(clientToServer2, tableName, rowRules, expressionBuilder) {
    if (!rowRules) {
        return void 0;
    }
    return {
        select: compileRules(clientToServer2, tableName, rowRules.select, expressionBuilder),
        insert: compileRules(clientToServer2, tableName, rowRules.insert, expressionBuilder),
        update: {
            preMutation: compileRules(clientToServer2, tableName, rowRules.update?.preMutation, expressionBuilder),
            postMutation: compileRules(clientToServer2, tableName, rowRules.update?.postMutation, expressionBuilder)
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapCondition"])(cond, tableName, clientToServer2)
        ];
    });
}
function compileCellConfig(clientToServer2, tableName, cellRules, expressionBuilder) {
    if (!cellRules) {
        return void 0;
    }
    const ret = {};
    for (const [columnName, rules] of Object.entries(cellRules)){
        ret[columnName] = {
            select: compileRules(clientToServer2, tableName, rules.select, expressionBuilder),
            insert: compileRules(clientToServer2, tableName, rules.insert, expressionBuilder),
            update: {
                preMutation: compileRules(clientToServer2, tableName, rules.update?.preMutation, expressionBuilder),
                postMutation: compileRules(clientToServer2, tableName, rules.update?.postMutation, expressionBuilder)
            },
            delete: compileRules(clientToServer2, tableName, rules.delete, expressionBuilder)
        };
    }
    return ret;
}
var CallTracker = class _CallTracker {
    #anchor;
    #path;
    constructor(anchor, path){
        this.#anchor = anchor;
        this.#path = path;
    }
    get(target, prop) {
        if (prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toStaticParam"]) {
            return target[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toStaticParam"]];
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(typeof prop === "string");
        const path = [
            ...this.#path,
            prop
        ];
        return new Proxy({
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toStaticParam"]]: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticParam"])(this.#anchor, path)
        }, new _CallTracker(this.#anchor, path));
    }
};
function baseTracker(anchor) {
    return new Proxy({
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toStaticParam"]]: ()=>{
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
    const ret = (...args)=>impl(void 0, args);
    ret.queryName = name;
    ret.parse = normalizeParser(parser);
    ret.takesContext = false;
    return ret;
}
function syncedQueryWithContext(name, parser, fn) {
    const impl = syncedQueryImpl(name, fn, true);
    const ret = (context, ...args)=>impl(context, args);
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
    const ret = (context, ...args)=>{
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
                throw new Error(`Table ${prop} does not exist in schema`);
            }
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newQuery"])(void 0, schema, prop);
            target[prop] = q;
            return q;
        }
    });
}
;
 //# sourceMappingURL=chunk-FMWNU2YJ.js.map
}),
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/zero.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$FMWNU2YJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-FMWNU2YJ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$6USDOK3X$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-6USDOK3X.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$MKB4RXL3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-MKB4RXL3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-G442PJSB.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-424PT5DM.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
 //# sourceMappingURL=zero.js.map
}),
];

//# sourceMappingURL=fe940_%40rocicorp_zero_out_d4c89255._.js.map
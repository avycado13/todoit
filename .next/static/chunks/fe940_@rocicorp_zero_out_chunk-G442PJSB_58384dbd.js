(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-G442PJSB.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-424PT5DM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@badrap+valita@0.3.11/node_modules/@badrap/valita/dist/mjs/index.mjs [app-client] (ecmascript)");
// ../replicache/src/btree/node.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/compare-utf8@0.1.1/node_modules/compare-utf8/src/index.js [app-client] (ecmascript)");
// ../replicache/src/btree/write.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$lock$40$1$2e$0$2e$4$2f$node_modules$2f40$rocicorp$2f$lock$2f$out$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+lock@1.0.4/node_modules/@rocicorp/lock/out/lock.js [app-client] (ecmascript)");
// ../shared/src/hash.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$xxhash$40$4$2e$0$2e$0$2f$node_modules$2f$js$2d$xxhash$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-xxhash@4.0.0/node_modules/js-xxhash/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$xxhash$40$4$2e$0$2e$0$2f$node_modules$2f$js$2d$xxhash$2f$dist$2f$esm$2f$xxHash32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-xxhash@4.0.0/node_modules/js-xxhash/dist/esm/xxHash32.js [app-client] (ecmascript)");
// ../zql/src/query/query-impl.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+resolver@1.0.2/node_modules/@rocicorp/resolver/out/resolver.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
let _delegateSymbol, _astSymbol, _completedAstSymbol, _newQuerySymbol;
var _childNodeSize, _splice, _class, _mergeAndPartition, _replaceChild, __InternalNodeImpl, _dagRead, /**
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
   */ _lock, _modified, _addToModified, _class1, _dagWrite, _basis, _meta, _clientID, _formatVersion, _generateDiffs, _class2, _maxProcessed, _maxUnprocessed, _processed, _unprocessed, _cumulative, _processedWeight, _unprocessedWeight, _min, _max, _process, _updateCumulative, _integratedQ, _integratedLocation, __TDigest, _input, _output, _start, _input1, _output1, _input2, _relationshipName, _storage, _not, _parentJoinKey, _noSizeReuse, _output2, /**
   * This instance variable is `true` when this operator is processing a `push`,
   * and is used to disable reuse of cached sizes across rows with the
   * same parent join key value.
   * This is necessary because during a push relationships can be inconsistent
   * due to push communicating changes (which may change multiple Nodes) one
   * Node at a time.
   */ _inPush, /**
   * Returns whether or not the node's this.#relationshipName
   * relationship passes the exist/not exists filter condition.
   * If the optional `size` is passed it is used.
   * Otherwise, if there is a stored size for the row it is used.
   * Otherwise the size is computed by streaming the node's
   * relationship with this.#relationshipName (this computed size is also
   * stored).
   */ _filter, /**
   * Pushes a change if this.#filter is true for its row.
   */ _pushWithFilter, _getSize, _setSize, _delSize, _getOrFetchSize, _fetchSize, _makeSizeStorageKeyPrefix, _makeSizeStorageKey, _getKeyValues, _class3, _inputs, _schema, _output3, _accumulatedPushes, _input3, _outputs, _fanIn, _destroyCount, _input4, _predicate, _output4, _parent, _child, _storage1, _parentKey, _childKey, _relationshipName1, _schema1, _output5, _inprogressChildChange, _pushParent, _pushChild, _generateChildStreamWithOverlay, _processParentNode, _isJoinMatch, _class4, _input5, _bound, _comparator, _output6, _fetchOrCleanup, _shouldBePresent, _getStart, _class5, _input6, _storage2, _limit, _partitionKey, _partitionKeyComparator, // Fetch overlay needed for some split push cases.
_rowHiddenFromFetch, _output7, _initialFetch, _getStateAndConstraint, _pushEditChange, _withRowHiddenFromFetch, _setTakeState, _class6, _exists, _input7, _listeners, _schema2, _format, // Synthetic "root" entry that has a single "" relationship, so that we can
// treat all changes, including the root change, generically.
_root, _dirty, _complete, _updateTTL, _fireListeners, _fireListener, _hydrate, _class7, _schema3, _tableName, _hash, _system, _currentJunction, _completedAST, _system1;
;
;
// ../replicache/src/format-version-enum.ts
var DD31 = 5;
var V6 = 6;
var V7 = 7;
var Latest = V7;
// ../shared/src/valita.ts
var valita_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__export"])(valita_exports, {
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__reExport"])(valita_exports, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__);
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
    if (!(path2 === null || path2 === void 0 ? void 0 : path2.length)) {
        return toDisplay(v2);
    }
    let cur = v2;
    for (const p of path2){
        cur = cur[p];
    }
    return toDisplay(cur);
}
function displayList(word, expected) {
    let toDisplay2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (x)=>String(x);
    if (expected.length === 1) {
        return toDisplay2(expected[0]);
    }
    const suffix = "".concat(toDisplay2(expected[expected.length - 2]), " ").concat(word, " ").concat(toDisplay2(expected[expected.length - 1]));
    if (expected.length === 2) {
        return suffix;
    }
    return "".concat(expected.slice(0, -2).map(toDisplay2).join(", "), ", ").concat(suffix);
}
function getMessage(err2, v2, schema, mode) {
    const firstIssue = err2.issues[0];
    const { path: path2 } = firstIssue;
    const atPath = (path2 === null || path2 === void 0 ? void 0 : path2.length) ? " at ".concat(path2.join(".")) : "";
    switch(firstIssue.code){
        case "invalid_type":
            return "Expected ".concat(displayList("or", firstIssue.expected)).concat(atPath, ". Got ").concat(toDisplayAtPath(v2, path2));
        case "missing_value":
            {
                var _firstIssue_path;
                const atPath2 = path2 && path2.length > 1 ? " at ".concat(path2.slice(0, -1).join(".")) : "";
                if ((_firstIssue_path = firstIssue.path) === null || _firstIssue_path === void 0 ? void 0 : _firstIssue_path.length) {
                    return "Missing property ".concat(firstIssue.path.at(-1)).concat(atPath2);
                }
                return "TODO Unknown missing property".concat(atPath2);
            }
        case "invalid_literal":
            return "Expected literal value ".concat(displayList("or", firstIssue.expected, toDisplay)).concat(atPath, " Got ").concat(toDisplayAtPath(v2, path2));
        case "invalid_length":
            {
                return "Expected array with length ".concat(firstIssue.minLength === firstIssue.maxLength ? firstIssue.minLength : "between ".concat(firstIssue.minLength, " and ").concat(firstIssue.maxLength)).concat(atPath, ". Got array with length ").concat(v2.length);
            }
        case "unrecognized_keys":
            if (firstIssue.keys.length === 1) {
                return "Unexpected property ".concat(firstIssue.keys[0]).concat(atPath);
            }
            return "Unexpected properties ".concat(displayList("and", firstIssue.keys)).concat(atPath);
        case "invalid_union":
            return schema.name === "union" ? getDeepestUnionParseError(v2, schema, mode !== null && mode !== void 0 ? mode : "strict") : "Invalid union value".concat(atPath);
        case "custom_error":
            {
                const { error } = firstIssue;
                var _error_message;
                const message = !error ? "unknown" : typeof error === "string" ? error : (_error_message = error.message) !== null && _error_message !== void 0 ? _error_message : "unknown";
                return "".concat(message).concat(atPath, ". Got ").concat(toDisplayAtPath(v2, path2));
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
        return "Invalid union value: ".concat(str);
    } catch (e) {
        return "Invalid union value";
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
    const err2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ValitaError(res);
    return {
        ok: false,
        error: getMessage(err2, value, schema, mode)
    };
}
function readonly(t) {
    return t;
}
function readonlyObject(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.object(t);
}
function readonlyArray(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.array(t);
}
function readonlyRecord(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.record(t);
}
var AbstractType = Object.getPrototypeOf(Object.getPrototypeOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().optional())).constructor;
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.object(shape);
}
function literalUnion() {
    for(var _len = arguments.length, literals = new Array(_len), _key = 0; _key < _len; _key++){
        literals[_key] = arguments[_key];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.union(...literals.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.literal));
}
// ../replicache/src/dag/store.ts
var ChunkNotFoundError = class extends Error {
    constructor(hash2){
        super("Chunk not found ".concat(hash2)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", "ChunkNotFoundError"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "hash", void 0);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(hash2, "Missing head ".concat(name));
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(refs[i - 1] !== refs[i], "Refs must not have duplicates");
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
    constructor(hash2, data, refs){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "hash", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "data", void 0);
        /**
   * Meta is an array of refs. If there are no refs we do not write a meta
   * chunk.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "meta", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!refs.includes(hash2), "Chunk cannot reference itself");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(data);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(v2[0]);
        for(let i = 1; i < v2.length; i++){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(v2[i]);
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
    var _a_allowEmpty, _b_allowEmpty, _a_prefix, _b_prefix;
    return a.jsonPointer === b.jsonPointer && ((_a_allowEmpty = a.allowEmpty) !== null && _a_allowEmpty !== void 0 ? _a_allowEmpty : false) === ((_b_allowEmpty = b.allowEmpty) !== null && _b_allowEmpty !== void 0 ? _b_allowEmpty : false) && ((_a_prefix = a.prefix) !== null && _a_prefix !== void 0 ? _a_prefix : "") === ((_b_prefix = b.prefix) !== null && _b_prefix !== void 0 ? _b_prefix : "");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertObject"])(chunkData);
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepFreeze"])(chunkData);
}
async function getClientGroupsAtHash(hash2, dagRead) {
    const chunk = await dagRead.getChunk(hash2);
    return chunkDataToClientGroupMap(chunk === null || chunk === void 0 ? void 0 : chunk.data);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(mutatorNamesSet.size === clientGroup.mutatorNames.length, "A client group's mutatorNames must be a set.");
    if (currClientGroup !== void 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(indexDefinitionsEqual(currClientGroup.indexes, clientGroup.indexes), "A client group's index definitions must never change.");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(mutatorNamesEqual(mutatorNamesSet, currClientGroup.mutatorNames), "A client group's mutatorNames must never change.");
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(a, key)) {
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
            aSize++;
        }
    }
    let bSize = 0;
    for(const key in b){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(b, key)) {
            bSize++;
        }
    }
    return aSize === bSize;
}
function assertJSONValue(v2) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProd"]) {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwInvalidType"])(v2, "JSON value");
}
function assertJSONObject(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    assertObjectIsJSONObject(v2);
}
function assertObjectIsJSONObject(v2) {
    for(const k in v2){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(v2, k)) {
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(v2, k)) {
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
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(val, k)) {
                        const propertyValue = val[k];
                        if (propertyValue !== void 0) {
                            sum += getSizeOfValue(k) + getSizeOfValue(propertyValue);
                        }
                    }
                }
                return sum;
            }
    }
    throw new Error("Invalid value. type: ".concat(typeof value, ", value: ").concat(value));
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
function* joinIterables() {
    for(var _len = arguments.length, iters = new Array(_len), _key = 0; _key < _len; _key++){
        iters[_key] = arguments[_key];
    }
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
    var _it_return;
    const it = stream[Symbol.iterator]();
    const { value } = it.next();
    if (value !== void 0) {
        yield value;
    }
    (_it_return = it.return) === null || _it_return === void 0 ? void 0 : _it_return.call(it);
}
var IterWrapper = class _IterWrapper {
    [Symbol.iterator]() {
        return this.iter[Symbol.iterator]();
    }
    map(f) {
        return new _IterWrapper(mapIter(this.iter, f));
    }
    filter(p) {
        return new _IterWrapper(filterIter(this.iter, p));
    }
    constructor(iter){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "iter", void 0);
        this.iter = iter;
    }
};
function wrapIterable(iter) {
    return new IterWrapper(iter);
}
// ../replicache/src/btree/node.ts
var NODE_LEVEL = 0;
var NODE_ENTRIES = 1;
function makeNodeChunkData(level, entries, formatVersion) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepFreeze"])([
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
    return binarySearch(entries.length, (i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareUTF8"])(key, entries[i][0]));
}
function binarySearchFound(i, entries, key) {
    return i !== entries.length && entries[i][0] === key;
}
function parseBTreeNode(v2, formatVersion, getSizeOfEntry2) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProd"] && formatVersion >= V7) {
        return v2;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArray"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(v2.length >= 2);
    const [level, entries] = v2;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNumber"])(level);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArray"])(entries);
    const f = level > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"] : assertJSONValue;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArray"])(entry);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(entry.length >= 3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(entry[0]);
    f(entry[1]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNumber"])(entry[2]);
}
function convertNonV7Entry(entry, f, getSizeOfEntry2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArray"])(entry);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(entry.length >= 2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(entry[0]);
    f(entry[1]);
    const entrySize = getSizeOfEntry2(entry[0], entry[1]);
    return [
        entry[0],
        entry[1],
        entrySize
    ];
}
var NodeImpl = (_childNodeSize = /*#__PURE__*/ new WeakMap(), class {
    maxKey() {
        return this.entries[this.entries.length - 1][0];
    }
    getChildNodeSize(tree) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childNodeSize) !== -1) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childNodeSize);
        }
        let sum = tree.chunkHeaderSize;
        for (const entry of this.entries){
            sum += entry[2];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childNodeSize, sum);
    }
    _updateNode(tree) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childNodeSize, -1);
        tree.updateNode(this);
    }
    constructor(entries, hash2, isMutable){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "entries", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "hash", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isMutable", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childNodeSize, {
            writable: true,
            value: -1
        });
        this.entries = entries;
        this.hash = hash2;
        this.isMutable = isMutable;
    }
});
function toChunkData(node, formatVersion) {
    return makeNodeChunkData(node.level, node.entries, formatVersion);
}
var DataNodeImpl = (_splice = /*#__PURE__*/ new WeakSet(), _class = class extends NodeImpl {
    set(key, value, entrySize, tree) {
        let deleteCount;
        const i = binarySearch2(key, this.entries);
        if (!binarySearchFound(i, this.entries, key)) {
            deleteCount = 0;
        } else {
            deleteCount = 1;
        }
        return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _splice, splice).call(this, tree, i, deleteCount, [
            key,
            value,
            entrySize
        ]));
    }
    del(key, tree) {
        const i = binarySearch2(key, this.entries);
        if (!binarySearchFound(i, this.entries, key)) {
            return Promise.resolve(this);
        }
        return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _splice, splice).call(this, tree, i, 1));
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
    constructor(...args){
        super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _splice), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "level", 0);
    }
}, _class);
function readonlySplice(array6, start, deleteCount) {
    for(var _len = arguments.length, items = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        items[_key - 3] = arguments[_key];
    }
    const arr = array6.slice(0, start);
    for(let i = 0; i < items.length; i++){
        arr.push(items[i]);
    }
    for(let i = start + deleteCount; i < array6.length; i++){
        arr.push(array6[i]);
    }
    return arr;
}
var InternalNodeImpl = (_mergeAndPartition = /*#__PURE__*/ new WeakSet(), _replaceChild = /*#__PURE__*/ new WeakSet(), __InternalNodeImpl = class _InternalNodeImpl extends NodeImpl {
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mergeAndPartition, mergeAndPartition).call(this, tree, i, childNode);
        }
        const newEntry = createNewInternalEntryForNode(childNode, tree.getEntrySize);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _replaceChild, replaceChild).call(this, tree, i, newEntry);
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _replaceChild, replaceChild).call(this, tree, i, entry);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mergeAndPartition, mergeAndPartition).call(this, tree, i, childNode);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(level === 1);
        const entries = [];
        for (const child of output){
            entries.push(...child.entries);
        }
        return new DataNodeImpl(entries, newRandomHash(), true);
    }
    constructor(entries, hash2, level, isMutable){
        super(entries, hash2, isMutable), /**
   * This merges the child node entries with previous or next sibling and then
   * partitions the merged entries.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mergeAndPartition), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _replaceChild), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "level", void 0);
        this.level = level;
    }
}, __InternalNodeImpl);
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
    constructor(dagRead, formatVersion, root = emptyHash, getEntrySize = getSizeOfEntry, chunkHeaderSize = NODE_HEADER_SIZE){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_cache", /* @__PURE__ */ new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_dagRead", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_formatVersion", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rootHash", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "getEntrySize", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "chunkHeaderSize", void 0);
        this._dagRead = dagRead;
        this._formatVersion = formatVersion;
        this.rootHash = root;
        this.getEntrySize = getEntrySize;
        this.chunkHeaderSize = chunkHeaderSize;
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
    constructor(chunk){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "chunk", void 0);
        this.chunk = chunk;
    }
};
async function getMutationID(clientID, dagRead, meta) {
    switch(meta.type){
        case SnapshotDD31:
            var _meta_lastMutationIDs_clientID;
            return (_meta_lastMutationIDs_clientID = meta.lastMutationIDs[clientID]) !== null && _meta_lastMutationIDs_clientID !== void 0 ? _meta_lastMutationIDs_clientID : 0;
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(meta);
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
            throw new Error("Commit ".concat(commit.chunk.hash, " has no basis"));
        }
        commit = await commitFromHash(basisHash, dagRead);
    }
    return commits;
}
async function baseSnapshotFromHead(name, dagRead) {
    const hash2 = await dagRead.getHead(name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(hash2, "Missing head ".concat(name));
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
                throw new Error("Commit ".concat(commit.chunk.hash, " has no basis"));
            }
            commit = await commitFromHash(basisHash, dagRead);
        }
    }
    return commit;
}
function snapshotMetaParts(c, clientID) {
    const m = c.meta;
    var _m_lastMutationIDs_clientID;
    const lmid = (_m_lastMutationIDs_clientID = m.lastMutationIDs[clientID]) !== null && _m_lastMutationIDs_clientID !== void 0 ? _m_lastMutationIDs_clientID : 0;
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
            throw new Error("Commit ".concat(commit.chunk.hash, " has no basis"));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(v2.clientID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNumber"])(v2.mutationID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(v2.mutatorName);
    if (!v2.mutatorName) {
        throw new Error("Missing mutator name");
    }
    assertJSONValue(v2.mutatorArgsJSON);
    if (v2.originalHash !== null) {
        assertHash(v2.originalHash);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNumber"])(v2.timestamp);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    for (const e of Object.values(v2)){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNumber"])(e);
    }
}
function assertSnapshotCommitDD31(c) {
    assertSnapshotMetaDD31(c.meta);
}
function isSnapshotMetaDD31(meta) {
    return meta.type === SnapshotDD31;
}
function assertMeta(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    if (v2.basisHash !== null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(v2.basisHash);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNumber"])(v2.type);
    switch(v2.type){
        case LocalDD31:
            assertLocalMetaDD31(v2);
            break;
        case SnapshotDD31:
            assertSnapshotMetaDD31(v2);
            break;
        default:
            throw new Error("Invalid enum value ".concat(v2.type));
    }
}
function chunkIndexDefinitionEqualIgnoreName(a, b) {
    var _a_allowEmpty, _b_allowEmpty;
    return a.jsonPointer === b.jsonPointer && ((_a_allowEmpty = a.allowEmpty) !== null && _a_allowEmpty !== void 0 ? _a_allowEmpty : false) === ((_b_allowEmpty = b.allowEmpty) !== null && _b_allowEmpty !== void 0 ? _b_allowEmpty : false) && a.keyPrefix === b.keyPrefix;
}
function assertChunkIndexDefinition(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(v2.name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(v2.keyPrefix);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(v2.jsonPointer);
    if (v2.allowEmpty !== void 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertBoolean"])(v2.allowEmpty);
    }
}
function toChunkIndexDefinition(name, indexDefinition) {
    var _indexDefinition_prefix, _indexDefinition_allowEmpty;
    return {
        name,
        keyPrefix: (_indexDefinition_prefix = indexDefinition.prefix) !== null && _indexDefinition_prefix !== void 0 ? _indexDefinition_prefix : "",
        jsonPointer: indexDefinition.jsonPointer,
        allowEmpty: (_indexDefinition_allowEmpty = indexDefinition.allowEmpty) !== null && _indexDefinition_allowEmpty !== void 0 ? _indexDefinition_allowEmpty : false
    };
}
function assertIndexRecord(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    assertChunkIndexDefinition(v2.definition);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(v2.valueHash);
}
function assertIndexRecords(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArray"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(meta);
    }
    for (const index of data.indexes){
        refs.add(index.valueHash);
    }
    return toRefs(refs);
}
function makeCommitData(meta, valueHash, indexes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepFreeze"])({
        meta,
        valueHash,
        indexes
    });
}
function assertCommitData(v2) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProd"]) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertObject"])(v2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDeepFrozen"])(v2);
    assertMeta(v2.meta);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(v2.valueHash);
    assertIndexRecords(v2.indexes);
}
function validateChunk(chunk) {
    const { data } = chunk;
    assertCommitData(data);
    const seen = /* @__PURE__ */ new Set();
    for (const index of data.indexes){
        const { name } = index.definition;
        if (seen.has(name)) {
            throw new Error("Duplicate index ".concat(name));
        }
        seen.add(name);
    }
}
// ../replicache/src/db/index-operation-enum.ts
var Add = 0;
var Remove = 1;
// ../replicache/src/db/index.ts
var IndexRead = class {
    constructor(meta, map){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "meta", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "map", void 0);
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
        var _lc_info;
        (_lc_info = lc.info) === null || _lc_info === void 0 ? void 0 : _lc_info.call(lc, "Not indexing value", val, ":", e);
    }
}
function getIndexKeys(primary, value, jsonPointer, allowEmpty) {
    const target = evaluateJSONPointer(value, jsonPointer);
    if (target === void 0) {
        if (allowEmpty) {
            return [];
        }
        throw new Error("No value at path: ".concat(jsonPointer));
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
        throw new Error("Invalid JSON pointer: ".concat(pointer));
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
var Read = (_dagRead = /*#__PURE__*/ new WeakMap(), class {
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
            throw new Error("Unknown index name: ".concat(indexName));
        }
        return idx.map;
    }
    get closed() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagRead).closed;
    }
    close() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagRead).release();
    }
    constructor(dagRead, map, indexes){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagRead, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "map", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "indexes", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagRead, dagRead);
        this.map = map;
        this.indexes = indexes;
    }
});
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
var BTreeWrite = (_lock = /*#__PURE__*/ new WeakMap(), _modified = /*#__PURE__*/ new WeakMap(), _addToModified = /*#__PURE__*/ new WeakSet(), _class1 = class extends BTreeRead {
    updateNode(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(node.isMutable);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _modified).delete(node.hash);
        node.hash = newRandomHash();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addToModified, addToModified).call(this, node);
    }
    newInternalNodeImpl(entries, level) {
        const n = new InternalNodeImpl(entries, newRandomHash(), level, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addToModified, addToModified).call(this, n);
        return n;
    }
    newDataNodeImpl(entries) {
        const n = new DataNodeImpl(entries, newRandomHash(), true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addToModified, addToModified).call(this, n);
        return n;
    }
    newNodeImpl(entries, level) {
        const n = newNodeImpl(entries, newRandomHash(), level, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addToModified, addToModified).call(this, n);
        return n;
    }
    put(key, value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lock).withLock(async ()=>{
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lock).withLock(async ()=>{
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lock).withLock(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _modified).clear();
            this.rootHash = emptyHash;
        });
    }
    flush() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lock).withLock(async ()=>{
            const dagWrite = this._dagRead;
            if (this.rootHash === emptyHash) {
                const chunk = dagWrite.createChunk(emptyDataNode, []);
                await dagWrite.putChunk(chunk);
                return chunk.hash;
            }
            const newChunks = [];
            const newRoot = gatherNewChunks(this.rootHash, newChunks, dagWrite.createChunk, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _modified), this._formatVersion);
            await Promise.all(newChunks.map((chunk)=>dagWrite.putChunk(chunk)));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _modified).clear();
            this.rootHash = newRoot;
            return newRoot;
        });
    }
    constructor(dagWrite, formatVersion, root = emptyHash, minSize = 8 * 1024, maxSize = 16 * 1024, getEntrySize = getSizeOfEntry, chunkHeaderSize){
        super(dagWrite, formatVersion, root, getEntrySize, chunkHeaderSize), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addToModified), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lock, {
            writable: true,
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$lock$40$1$2e$0$2e$4$2f$node_modules$2f40$rocicorp$2f$lock$2f$out$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lock"]()
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _modified, {
            writable: true,
            value: /* @__PURE__ */ new Map()
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "minSize", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "maxSize", void 0);
        this.minSize = minSize;
        this.maxSize = maxSize;
    }
}, _class1);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(newIndex !== oldIndex);
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
var Write = (_dagWrite = /*#__PURE__*/ new WeakMap(), _basis = /*#__PURE__*/ new WeakMap(), _meta = /*#__PURE__*/ new WeakMap(), _clientID = /*#__PURE__*/ new WeakMap(), _formatVersion = /*#__PURE__*/ new WeakMap(), _generateDiffs = /*#__PURE__*/ new WeakSet(), _class2 = class extends Read {
    /**
   * The value needs to be frozen since it is kept in memory and used later for
   * comparison as well as returned in `get`.
   */ async put(lc, key, value) {
        const oldVal = lazy(()=>this.map.get(key));
        await updateIndexes(lc, this.indexes, key, oldVal, value);
        await this.map.put(key, value);
    }
    getMutationID() {
        return getMutationID((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientID), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _meta));
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
        const meta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _meta);
        switch(meta.type){
            case LocalDD31:
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _formatVersion) >= DD31);
                    const { basisHash, mutationID, mutatorName, mutatorArgsJSON, originalHash, timestamp } = meta;
                    commit = newLocalDD31((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite).createChunk, basisHash, await baseSnapshotHashFromHash(basisHash, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite)), mutationID, mutatorName, mutatorArgsJSON, originalHash, valueHash, indexRecords, timestamp, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientID));
                    break;
                }
            case SnapshotDD31:
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _formatVersion) > DD31);
                    const { basisHash, lastMutationIDs, cookieJSON } = meta;
                    commit = newSnapshotDD31((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite).createChunk, basisHash, lastMutationIDs, cookieJSON, valueHash, indexRecords);
                    break;
                }
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite).putChunk(commit.chunk);
        return commit;
    }
    // Return value is the hash of the new commit.
    async commit(headName) {
        const commit = await this.putCommit();
        const commitHash = commit.chunk.hash;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite).setHead(headName, commitHash);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite).commit();
        return commitHash;
    }
    async commitWithDiffs(headName, diffConfig) {
        const commit = this.putCommit();
        const diffMap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _generateDiffs, generateDiffs).call(this, diffConfig);
        const commitHash = (await commit).chunk.hash;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite).setHead(headName, commitHash);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite).commit();
        return [
            commitHash,
            diffMap
        ];
    }
    close() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite).release();
    }
    constructor(dagWrite, map, basis, meta, indexes, clientID, formatVersion){
        super(dagWrite, map, indexes), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _generateDiffs), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _basis, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _meta, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientID, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _formatVersion, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite, dagWrite);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _basis, basis);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _meta, meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientID, clientID);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _formatVersion, formatVersion);
        if (basis === void 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.basisHash === emptyHash);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.basisHash === basis.chunk.hash);
        }
    }
}, _class2);
async function newWriteLocal(basisHash, mutatorName, mutatorArgsJSON, originalHash, dagWrite, timestamp, clientID, formatVersion) {
    const basis = await commitFromHash(basisHash, dagWrite);
    const bTreeWrite = new BTreeWrite(dagWrite, formatVersion, basis.valueHash);
    const mutationID = await basis.getNextMutationID(clientID, dagWrite);
    const indexes = readIndexesForWrite(basis, dagWrite, formatVersion);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(formatVersion >= DD31);
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
                var _idx_meta_definition_allowEmpty;
                ps.push(indexValue(lc, idx.map, Remove, key, oldVal, idx.meta.definition.jsonPointer, (_idx_meta_definition_allowEmpty = idx.meta.definition.allowEmpty) !== null && _idx_meta_definition_allowEmpty !== void 0 ? _idx_meta_definition_allowEmpty : false));
            }
            if (newVal !== void 0) {
                var _idx_meta_definition_allowEmpty1;
                ps.push(indexValue(lc, idx.map, Add, key, newVal, idx.meta.definition.jsonPointer, (_idx_meta_definition_allowEmpty1 = idx.meta.definition.allowEmpty) !== null && _idx_meta_definition_allowEmpty1 !== void 0 ? _idx_meta_definition_allowEmpty1 : false));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertObject"])(chunkData);
    const clients = /* @__PURE__ */ new Map();
    for(const key in chunkData){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(chunkData, key)) {
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepFreeze"])(Object.fromEntries(clients));
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
    return chunkDataToClientMap(chunk === null || chunk === void 0 ? void 0 : chunk.data);
}
var ClientStateNotFoundError = class extends Error {
    constructor(id){
        super("Client state not found, id: ".concat(id)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", "ClientStateNotFoundError"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "id", void 0);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(res.type === FIND_MATCHING_CLIENT_TYPE_FORK);
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
    return client === null || client === void 0 ? void 0 : client.clientGroupID;
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
        throw new Error(msg !== null && msg !== void 0 ? msg : "Unexpected ".concat(v2, " value"));
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertBoolean"])(b);
        return a ? 1 : -1;
    }
    if (typeof a === "number") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNumber"])(b);
        return a - b;
    }
    if (typeof a === "string") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(b);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareUTF8"])(a, b);
    }
    throw new Error("Unsupported type: ".concat(a));
}
function normalizeUndefined(v2) {
    return v2 !== null && v2 !== void 0 ? v2 : null;
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
function applyChange(parentEntry, change, schema, relationship, format) {
    let withIDs = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(change);
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(schema.compareRows(oldEntry, change.node.row) === 0, "Singular relationship '".concat(relationship, "' should not have multiple rows. You may need to declare this relationship with the `many` helper instead of the `one` helper in your schema."));
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(oldEntry !== void 0, "node does not exist");
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(found, "node does not exist");
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(oldFound, "old node does not exist");
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(found, "node does not exist");
                        applyEdit(view[pos], change, schema, withIDs);
                    }
                }
                break;
            }
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(change);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(found, "node does not exist");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArray"])(view);
    return view;
}
function assertMetaEntry(v2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNumber"])(v2[refCountSymbol]);
}
function getSingularEntry(parentEntry, relationship) {
    const e = parentEntry[relationship];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNumber"])(e[refCountSymbol]);
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
        const candidate = "".concat(value).concat(unit);
        if (candidate.length < shortest.length) {
            shortest = candidate;
        }
    }
    return shortest.length < lengthOfNumber ? shortest : ttl;
}
function clampTTL(ttl, lc) {
    const parsedTTL = parseTTL(ttl);
    if (parsedTTL === -1 || parsedTTL > 10 * 60 * 1e3) {
        var _lc_warn;
        lc === null || lc === void 0 ? void 0 : (_lc_warn = lc.warn) === null || _lc_warn === void 0 ? void 0 : _lc_warn.call(lc, "TTL (".concat(ttl, ") is too high, clamping to ").concat(MAX_TTL));
        return parseTTL(MAX_TTL);
    }
    return parsedTTL;
}
;
var path = [];
var jsonSchema = valita_exports.unknown().chain((v2)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProd"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ok(v2);
    }
    const rv = isJSONValue(v2, path) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ok(v2) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.err({
        message: "Not a JSON value",
        path: path.slice()
    });
    path.length = 0;
    return rv;
});
var jsonObjectSchema = valita_exports.unknown().chain((v2)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProd"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ok(v2);
    }
    const rv = isJSONObject(v2, path) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ok(v2) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$badrap$2b$valita$40$0$2e$3$2e$11$2f$node_modules$2f40$badrap$2f$valita$2f$dist$2f$mjs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.err({
        message: "Not a JSON object",
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(Array.isArray(field) && field.length >= 1);
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
    var _ast_orderBy;
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
            row: Object.fromEntries(Object.entries(ast.start.row).map((param)=>{
                let [col, val] = param;
                return [
                    colName(col),
                    val
                ];
            }))
        } : void 0,
        limit: ast.limit,
        orderBy: (_ast_orderBy = ast.orderBy) === null || _ast_orderBy === void 0 ? void 0 : _ast_orderBy.map((param)=>{
            let [col, dir] = param;
            return [
                colName(col),
                dir
            ];
        })
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareUTF8"])(a.type, b.type);
    }
    switch(a.type){
        case "literal":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(b.type === "literal");
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareUTF8"])(String(a.value), String(b.value));
        case "column":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(b.type === "column");
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareUTF8"])(a.name, b.name);
        case "static":
            throw new Error("Static parameters should be resolved before normalization");
    }
}
function cmpRelated(a, b) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareUTF8"])(must(a.subquery.alias), must(b.subquery.alias));
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$compare$2d$utf8$40$0$2e$1$2e$1$2f$node_modules$2f$compare$2d$utf8$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareUTF8"])(a, b);
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
function nanoid() {
    let size = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 21;
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
        hash2 = (hash2 << 32n) + BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$xxhash$40$4$2e$0$2e$0$2f$node_modules$2f$js$2d$xxhash$2f$dist$2f$esm$2f$xxHash32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xxHash32"])(str, i));
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
    constructor(mean, weight){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "mean", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "weight", void 0);
        this.mean = mean;
        this.weight = weight;
    }
};
function sortCentroidList(centroids) {
    centroids.sort((a, b)=>a.mean - b.mean);
}
// ../shared/src/tdigest.ts
var TDigest = (_maxProcessed = /*#__PURE__*/ new WeakMap(), _maxUnprocessed = /*#__PURE__*/ new WeakMap(), _processed = /*#__PURE__*/ new WeakMap(), _unprocessed = /*#__PURE__*/ new WeakMap(), _cumulative = /*#__PURE__*/ new WeakMap(), _processedWeight = /*#__PURE__*/ new WeakMap(), _unprocessedWeight = /*#__PURE__*/ new WeakMap(), _min = /*#__PURE__*/ new WeakMap(), _max = /*#__PURE__*/ new WeakMap(), _process = /*#__PURE__*/ new WeakSet(), _updateCumulative = /*#__PURE__*/ new WeakSet(), _integratedQ = /*#__PURE__*/ new WeakSet(), _integratedLocation = /*#__PURE__*/ new WeakSet(), __TDigest = class _TDigest {
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed, []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed, []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative, []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight, 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessedWeight, 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min, Number.MAX_VALUE);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max, -Number.MAX_VALUE);
    }
    add(mean) {
        let weight = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed).push(new Centroid(c.mean, c.weight));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessedWeight, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessedWeight) + c.weight);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxProcessed) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed).length > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxUnprocessed)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _process, process).call(this);
        }
    }
    /**
   *  Merges the supplied digest into this digest. Functionally equivalent to
   * calling t.AddCentroidList(t2.Centroids(nil)), but avoids making an extra
   * copy of the CentroidList.
   **/ merge(t2) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(t2, _process, process).call(t2);
        this.addCentroidList((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(t2, _processed));
    }
    /**
   * Centroids returns a copy of processed centroids.
   * Useful when aggregating multiple t-digests.
   *
   * Centroids are appended to the passed CentroidList; if you're re-using a
   * buffer, be sure to pass cl[:0].
   */ centroids() {
        let cl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _process, process).call(this);
        return cl.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed));
    }
    count() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _process, process).call(this);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight);
    }
    /**
   * toJSON returns a JSON-serializable representation of the digest.
   * This processes the digest and returns an object with compression and centroid data.
   */ toJSON() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _process, process).call(this);
        const data = [
            this.compression
        ];
        for (const centroid of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)){
            data.push(centroid.mean, centroid.weight);
        }
        return data;
    }
    // Quantile returns the (approximate) quantile of
    // the distribution. Accepted values for q are between 0 and 1.
    // Returns NaN if Count is zero or bad inputs.
    quantile(q) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _process, process).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateCumulative, updateCumulative).call(this);
        if (q < 0 || q > 1 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length === 0) {
            return NaN;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length === 1) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[0].mean;
        }
        const index = q * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight);
        if (index <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[0].weight / 2) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min) + 2 * index / (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[0].weight * ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[0].mean - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min));
        }
        const lower = binarySearch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative).length, (i)=>-(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative)[i] + index);
        if (lower + 1 !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative).length) {
            const z12 = index - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative)[lower - 1];
            const z22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative)[lower] - index;
            return weightedAverage((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[lower - 1].mean, z22, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[lower].mean, z12);
        }
        const z1 = index - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[lower - 1].weight / 2;
        const z2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[lower - 1].weight / 2 - z1;
        return weightedAverage((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length - 1].mean, z1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max), z2);
    }
    /**
   * CDF returns the cumulative distribution function for a given value x.
   */ cdf(x) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _process, process).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateCumulative, updateCumulative).call(this);
        switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length){
            case 0:
                return 0;
            case 1:
                {
                    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min);
                    if (x <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min)) {
                        return 0;
                    }
                    if (x >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max)) {
                        return 1;
                    }
                    if (x - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min) <= width) {
                        return 0.5;
                    }
                    return (x - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min)) / width;
                }
        }
        if (x <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min)) {
            return 0;
        }
        if (x >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max)) {
            return 1;
        }
        const m0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[0].mean;
        if (x <= m0) {
            if (m0 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min) > 0) {
                return (x - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min)) / (m0 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min)) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[0].weight / (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight) / 2;
            }
            return 0;
        }
        const mn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length - 1].mean;
        if (x >= mn) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max) - mn > 0) {
                return 1 - ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max) - x) / ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max) - mn) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length - 1].weight / (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight) / 2;
            }
            return 1;
        }
        const upper = binarySearch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length, // Treat equals as greater than, so we can use the upper index
        // This is equivalent to:
        //   i => this.#processed[i].mean > x ? -1 : 1,
        (i)=>x - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[i].mean || 1);
        const z1 = x - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[upper - 1].mean;
        const z2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[upper].mean - x;
        return weightedAverage((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative)[upper - 1], z2, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative)[upper], z1) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight);
    }
    constructor(compression = 1e3){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _process);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateCumulative);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _integratedQ);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _integratedLocation);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "compression", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxProcessed, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxUnprocessed, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessedWeight, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max, {
            writable: true,
            value: void 0
        });
        this.compression = compression;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxProcessed, processedSize(0, this.compression));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxUnprocessed, unprocessedSize(0, this.compression));
        this.reset();
    }
}, __TDigest);
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
    return h64("".concat(name, ":").concat(argsString)).toString(36);
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
var FilterStart = (_input = /*#__PURE__*/ new WeakMap(), _output = /*#__PURE__*/ new WeakMap(), class {
    setFilterOutput(output) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output, output);
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input).destroy();
    }
    getSchema() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input).getSchema();
    }
    push(change) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output).push(change);
    }
    *fetch(req) {
        for (const node of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input).fetch(req)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output).filter(node, false)) {
                yield node;
            }
        }
    }
    *cleanup(req) {
        for (const node of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input).cleanup(req)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output).filter(node, true)) {
                yield node;
            } else {
                drainStreams(node);
            }
        }
    }
    constructor(input){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output, {
            writable: true,
            value: throwFilterOutput
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input, input);
        input.setOutput(this);
    }
});
var FilterEnd = (_start = /*#__PURE__*/ new WeakMap(), _input1 = /*#__PURE__*/ new WeakMap(), _output1 = /*#__PURE__*/ new WeakMap(), class {
    *fetch(req) {
        for (const node of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _start).fetch(req)){
            yield node;
        }
    }
    *cleanup(req) {
        for (const node of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _start).cleanup(req)){
            yield node;
        }
    }
    filter(_node, _cleanup) {
        return true;
    }
    setOutput(output) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output1, output);
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input1).destroy();
    }
    getSchema() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input1).getSchema();
    }
    push(change) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output1).push(change);
    }
    constructor(start, input){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _start, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output1, {
            writable: true,
            value: throwFilterOutput
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _start, start);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input1, input);
        input.setFilterOutput(this);
    }
});
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
    var _it_return;
    const it = stream[Symbol.iterator]();
    const { value } = it.next();
    (_it_return = it.return) === null || _it_return === void 0 ? void 0 : _it_return.call(it);
    return value;
}
// ../zql/src/ivm/exists.ts
var Exists = (_input2 = /*#__PURE__*/ new WeakMap(), _relationshipName = /*#__PURE__*/ new WeakMap(), _storage = /*#__PURE__*/ new WeakMap(), _not = /*#__PURE__*/ new WeakMap(), _parentJoinKey = /*#__PURE__*/ new WeakMap(), _noSizeReuse = /*#__PURE__*/ new WeakMap(), _output2 = /*#__PURE__*/ new WeakMap(), _inPush = /*#__PURE__*/ new WeakMap(), _filter = /*#__PURE__*/ new WeakSet(), _pushWithFilter = /*#__PURE__*/ new WeakSet(), _getSize = /*#__PURE__*/ new WeakSet(), _setSize = /*#__PURE__*/ new WeakSet(), _delSize = /*#__PURE__*/ new WeakSet(), _getOrFetchSize = /*#__PURE__*/ new WeakSet(), _fetchSize = /*#__PURE__*/ new WeakSet(), _makeSizeStorageKeyPrefix = /*#__PURE__*/ new WeakSet(), _makeSizeStorageKey = /*#__PURE__*/ new WeakSet(), _getKeyValues = /*#__PURE__*/ new WeakSet(), _class3 = class {
    setFilterOutput(output) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output2, output);
    }
    filter(node, cleanup) {
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter, filter).call(this, node) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output2).filter(node, cleanup);
        if (cleanup) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delSize, delSize).call(this, node);
        }
        return result;
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input2).destroy();
    }
    getSchema() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input2).getSchema();
    }
    push(change) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inPush), "Unexpected re-entrancy");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inPush, true);
        try {
            switch(change.type){
                // add, remove and edit cannot change the size of the
                // this.#relationshipName relationship, so simply #pushWithFilter
                case "add":
                case "edit":
                    {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushWithFilter, pushWithFilter).call(this, change);
                        return;
                    }
                case "remove":
                    {
                        const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSize, getSize).call(this, change.node);
                        if (size === void 0) {
                            return;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushWithFilter, pushWithFilter).call(this, change, size);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delSize, delSize).call(this, change.node);
                        return;
                    }
                case "child":
                    if (change.child.relationshipName !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _relationshipName) || change.child.change.type === "edit" || change.child.change.type === "child") {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushWithFilter, pushWithFilter).call(this, change);
                        return;
                    }
                    switch(change.child.change.type){
                        case "add":
                            {
                                let size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSize, getSize).call(this, change.node);
                                if (size !== void 0) {
                                    size++;
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setSize, setSize).call(this, change.node, size);
                                } else {
                                    size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetchSize, fetchSize).call(this, change.node);
                                }
                                if (size === 1) {
                                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _not)) {
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output2).push({
                                            type: "remove",
                                            node: {
                                                row: change.node.row,
                                                relationships: {
                                                    ...change.node.relationships,
                                                    [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _relationshipName)]: ()=>[]
                                                }
                                            }
                                        });
                                    } else {
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output2).push({
                                            type: "add",
                                            node: change.node
                                        });
                                    }
                                } else {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushWithFilter, pushWithFilter).call(this, change, size);
                                }
                                return;
                            }
                        case "remove":
                            {
                                let size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSize, getSize).call(this, change.node);
                                if (size !== void 0) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(size > 0);
                                    size--;
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setSize, setSize).call(this, change.node, size);
                                } else {
                                    size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetchSize, fetchSize).call(this, change.node);
                                }
                                if (size === 0) {
                                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _not)) {
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output2).push({
                                            type: "add",
                                            node: change.node
                                        });
                                    } else {
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output2).push({
                                            type: "remove",
                                            node: {
                                                row: change.node.row,
                                                relationships: {
                                                    ...change.node.relationships,
                                                    [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _relationshipName)]: ()=>[
                                                            change.child.change.node
                                                        ]
                                                }
                                            }
                                        });
                                    }
                                } else {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushWithFilter, pushWithFilter).call(this, change, size);
                                }
                                return;
                            }
                    }
                    return;
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(change);
            }
        } finally{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inPush, false);
        }
    }
    constructor(input, storage, relationshipName, parentJoinKey, type){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushWithFilter);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSize);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setSize);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delSize);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getOrFetchSize);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetchSize);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _makeSizeStorageKeyPrefix);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _makeSizeStorageKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getKeyValues);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input2, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _relationshipName, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _not, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentJoinKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _noSizeReuse, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output2, {
            writable: true,
            value: throwFilterOutput
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inPush, {
            writable: true,
            value: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input2, input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _relationshipName, relationshipName);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input2).setFilterOutput(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage, storage);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input2).getSchema().relationships[relationshipName], "Input schema missing ".concat(relationshipName));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _not, type === "NOT EXISTS");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentJoinKey, parentJoinKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _noSizeReuse, areEqual(parentJoinKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input2).getSchema().primaryKey));
    }
}, _class3);
// ../zql/src/ivm/fan-in.ts
var FanIn = (_inputs = /*#__PURE__*/ new WeakMap(), _schema = /*#__PURE__*/ new WeakMap(), _output3 = /*#__PURE__*/ new WeakMap(), _accumulatedPushes = /*#__PURE__*/ new WeakMap(), class {
    setFilterOutput(output) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output3, output);
    }
    destroy() {
        for (const input of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inputs)){
            input.destroy();
        }
    }
    getSchema() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema);
    }
    filter(node, cleanup) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output3).filter(node, cleanup);
    }
    push(change) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _accumulatedPushes).push(change);
    }
    fanOutDonePushingToAllBranches(fanOutChangeType) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inputs).length === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _accumulatedPushes).length === 0, "If there are no inputs then fan-in should not receive any pushes.");
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _accumulatedPushes).length === 0) {
            return;
        }
        const candidatesToPush = /* @__PURE__ */ new Map();
        for (const change of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _accumulatedPushes)){
            if (fanOutChangeType === "child" && change.type !== "child") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(candidatesToPush.has(change.type) === false, ()=>"Fan-in:child expected at most one ".concat(change.type, " when fan-out is of type child"));
            }
            candidatesToPush.set(change.type, change);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _accumulatedPushes, []);
        const types = [
            ...candidatesToPush.keys()
        ];
        switch(fanOutChangeType){
            case "remove":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(types.length === 1 && types[0] === "remove", "Fan-in:remove expected all removes");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output3).push(must(candidatesToPush.get("remove")));
                return;
            case "add":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(types.length === 1 && types[0] === "add", "Fan-in:add expected all adds");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output3).push(must(candidatesToPush.get("add")));
                return;
            case "edit":
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(types.every((type)=>type === "add" || type === "remove" || type === "edit"), "Fan-in:edit expected all adds, removes, or edits");
                    const addChange = candidatesToPush.get("add");
                    const removeChange = candidatesToPush.get("remove");
                    const editChange = candidatesToPush.get("edit");
                    if (editChange) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output3).push(editChange);
                        return;
                    }
                    if (addChange && removeChange) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output3).push({
                            type: "edit",
                            node: addChange.node,
                            oldNode: removeChange.node
                        });
                        return;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output3).push(must(addChange !== null && addChange !== void 0 ? addChange : removeChange));
                    return;
                }
            case "child":
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(types.every((type)=>type === "add" || // exists can change child to add or remove
                        type === "remove" || // exists can change child to add or remove
                        type === "child"), "Fan-in:child expected all adds, removes, or children");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(types.length <= 2, "Fan-in:child expected at most 2 types on a child change from fan-out");
                    const childChange = candidatesToPush.get("child");
                    if (childChange) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output3).push(childChange);
                        return;
                    }
                    const addChange = candidatesToPush.get("add");
                    const removeChange = candidatesToPush.get("remove");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(addChange === void 0 || removeChange === void 0, "Fan-in:child expected either add or remove, not both");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output3).push(must(addChange !== null && addChange !== void 0 ? addChange : removeChange));
                    return;
                }
            default:
                fanOutChangeType;
        }
    }
    constructor(fanOut, inputs){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inputs, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output3, {
            writable: true,
            value: throwFilterOutput
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _accumulatedPushes, {
            writable: true,
            value: []
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inputs, inputs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema, fanOut.getSchema());
        for (const input of inputs){
            input.setFilterOutput(this);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema) === input.getSchema(), "Schema mismatch in fan-in");
        }
    }
});
// ../zql/src/ivm/fan-out.ts
var FanOut = (_input3 = /*#__PURE__*/ new WeakMap(), _outputs = /*#__PURE__*/ new WeakMap(), _fanIn = /*#__PURE__*/ new WeakMap(), _destroyCount = /*#__PURE__*/ new WeakMap(), class {
    setFanIn(fanIn) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fanIn, fanIn);
    }
    setFilterOutput(output) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _outputs).push(output);
    }
    destroy() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _destroyCount) < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _outputs).length) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _destroyCount) === 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input3).destroy();
            }
            ++(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _destroyCount).value;
        } else {
            throw new Error("FanOut already destroyed once for each output");
        }
    }
    getSchema() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input3).getSchema();
    }
    filter(node, cleanup) {
        let result = false;
        for (const output of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _outputs)){
            result = output.filter(node, cleanup) || result;
            if (!cleanup && result) {
                return true;
            }
        }
        return result;
    }
    push(change) {
        for (const out of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _outputs)){
            out.push(change);
        }
        must((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fanIn), "fan-out must have a corresponding fan-in set!").fanOutDonePushingToAllBranches(change.type);
    }
    constructor(input){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input3, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _outputs, {
            writable: true,
            value: []
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fanIn, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _destroyCount, {
            writable: true,
            value: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input3, input);
        input.setFilterOutput(this);
    }
});
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(change);
    }
}
// ../zql/src/ivm/filter.ts
var Filter = (_input4 = /*#__PURE__*/ new WeakMap(), _predicate = /*#__PURE__*/ new WeakMap(), _output4 = /*#__PURE__*/ new WeakMap(), class {
    filter(node, cleanup) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _predicate).call(this, node.row) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output4).filter(node, cleanup);
    }
    setFilterOutput(output) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output4, output);
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input4).destroy();
    }
    getSchema() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input4).getSchema();
    }
    push(change) {
        filterPush(change, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output4), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _predicate));
    }
    constructor(input, predicate){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input4, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _predicate, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output4, {
            writable: true,
            value: throwFilterOutput
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input4, input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _predicate, predicate);
        input.setFilterOutput(this);
    }
});
// ../zql/src/ivm/join.ts
var Join = (_parent = /*#__PURE__*/ new WeakMap(), _child = /*#__PURE__*/ new WeakMap(), _storage1 = /*#__PURE__*/ new WeakMap(), _parentKey = /*#__PURE__*/ new WeakMap(), _childKey = /*#__PURE__*/ new WeakMap(), _relationshipName1 = /*#__PURE__*/ new WeakMap(), _schema1 = /*#__PURE__*/ new WeakMap(), _output5 = /*#__PURE__*/ new WeakMap(), _inprogressChildChange = /*#__PURE__*/ new WeakMap(), _pushParent = /*#__PURE__*/ new WeakSet(), _pushChild = /*#__PURE__*/ new WeakSet(), _generateChildStreamWithOverlay = /*#__PURE__*/ new WeakSet(), _processParentNode = /*#__PURE__*/ new WeakSet(), _isJoinMatch = /*#__PURE__*/ new WeakSet(), _class4 = class {
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parent).destroy();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _child).destroy();
    }
    setOutput(output) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output5, output);
    }
    getSchema() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema1);
    }
    *fetch(req) {
        for (const parentNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parent).fetch(req)){
            yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processParentNode, processParentNode).call(this, parentNode.row, parentNode.relationships, "fetch");
        }
    }
    *cleanup(req) {
        for (const parentNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parent).cleanup(req)){
            yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processParentNode, processParentNode).call(this, parentNode.row, parentNode.relationships, "cleanup");
        }
    }
    constructor({ parent, child, storage, parentKey, childKey, relationshipName, hidden, system }){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushParent);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushChild);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _generateChildStreamWithOverlay);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processParentNode);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isJoinMatch);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parent, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _child, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _relationshipName1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output5, {
            writable: true,
            value: throwOutput
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inprogressChildChange, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(parent !== child, "Parent and child must be different operators");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(parentKey.length === childKey.length, "The parentKey and childKey keys must have same length");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parent, parent);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _child, child);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage1, storage);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentKey, parentKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childKey, childKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _relationshipName1, relationshipName);
        const parentSchema = parent.getSchema();
        const childSchema = child.getSchema();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema1, {
            ...parentSchema,
            relationships: {
                ...parentSchema.relationships,
                [relationshipName]: {
                    ...childSchema,
                    isHidden: hidden,
                    system
                }
            }
        });
        parent.setOutput({
            push: (change)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushParent, pushParent).call(this, change)
        });
        child.setOutput({
            push: (change)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushChild, pushChild).call(this, change)
        });
    }
}, _class4);
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
var Skip = (_input5 = /*#__PURE__*/ new WeakMap(), _bound = /*#__PURE__*/ new WeakMap(), _comparator = /*#__PURE__*/ new WeakMap(), _output6 = /*#__PURE__*/ new WeakMap(), _fetchOrCleanup = /*#__PURE__*/ new WeakSet(), _shouldBePresent = /*#__PURE__*/ new WeakSet(), _getStart = /*#__PURE__*/ new WeakSet(), _class5 = class {
    getSchema() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input5).getSchema();
    }
    fetch(req) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetchOrCleanup, fetchOrCleanup).call(this, "fetch", req);
    }
    cleanup(req) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetchOrCleanup, fetchOrCleanup).call(this, "fetch", req);
    }
    setOutput(output) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output6, output);
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input5).destroy();
    }
    push(change) {
        const shouldBePresent1 = (row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shouldBePresent, shouldBePresent).call(this, row);
        if (change.type === "edit") {
            maybeSplitAndPushEditChange(change, shouldBePresent1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output6));
            return;
        }
        change;
        if (shouldBePresent1(change.node.row)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output6).push(change);
        }
    }
    constructor(input, bound){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetchOrCleanup);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shouldBePresent);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getStart);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input5, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _bound, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _comparator, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output6, {
            writable: true,
            value: throwOutput
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input5, input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _bound, bound);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _comparator, input.getSchema().compareRows);
        input.setOutput(this);
    }
}, _class5);
// ../zql/src/ivm/take.ts
var MAX_BOUND_KEY = "maxBound";
var Take = (_input6 = /*#__PURE__*/ new WeakMap(), _storage2 = /*#__PURE__*/ new WeakMap(), _limit = /*#__PURE__*/ new WeakMap(), _partitionKey = /*#__PURE__*/ new WeakMap(), _partitionKeyComparator = /*#__PURE__*/ new WeakMap(), _rowHiddenFromFetch = /*#__PURE__*/ new WeakMap(), _output7 = /*#__PURE__*/ new WeakMap(), _initialFetch = /*#__PURE__*/ new WeakSet(), _getStateAndConstraint = /*#__PURE__*/ new WeakSet(), _pushEditChange = /*#__PURE__*/ new WeakSet(), _withRowHiddenFromFetch = /*#__PURE__*/ new WeakSet(), _setTakeState = /*#__PURE__*/ new WeakSet(), _class6 = class {
    setOutput(output) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7, output);
    }
    getSchema() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).getSchema();
    }
    *fetch(req) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey) || req.constraint && constraintMatchesPartitionKey(req.constraint, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey))) {
            const takeStateKey = getTakeStateKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey), req.constraint);
            const takeState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2).get(takeStateKey);
            if (!takeState) {
                yield* (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialFetch, initialFetch).call(this, req);
                return;
            }
            if (takeState.bound === void 0) {
                return;
            }
            for (const inputNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch(req)){
                if (this.getSchema().compareRows(takeState.bound, inputNode.row) < 0) {
                    return;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rowHiddenFromFetch) && this.getSchema().compareRows((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rowHiddenFromFetch), inputNode.row) === 0) {
                    continue;
                }
                yield inputNode;
            }
            return;
        }
        const maxBound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2).get(MAX_BOUND_KEY);
        if (maxBound === void 0) {
            return;
        }
        for (const inputNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch(req)){
            if (this.getSchema().compareRows(inputNode.row, maxBound) > 0) {
                return;
            }
            const takeStateKey = getTakeStateKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey), inputNode.row);
            const takeState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2).get(takeStateKey);
            if ((takeState === null || takeState === void 0 ? void 0 : takeState.bound) !== void 0 && this.getSchema().compareRows(takeState.bound, inputNode.row) >= 0) {
                yield inputNode;
            }
        }
    }
    *cleanup(req) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(req.start === void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(constraintMatchesPartitionKey(req.constraint, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey)));
        const takeStateKey = getTakeStateKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey), req.constraint);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2).del(takeStateKey);
        let size = 0;
        for (const inputNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).cleanup(req)){
            if (size === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _limit)) {
                return;
            }
            size++;
            yield inputNode;
        }
    }
    push(change) {
        if (change.type === "edit") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushEditChange, pushEditChange).call(this, change);
            return;
        }
        const { takeState, takeStateKey, maxBound, constraint } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getStateAndConstraint, getStateAndConstraint).call(this, change.node.row);
        if (!takeState) {
            return;
        }
        const { compareRows } = this.getSchema();
        if (change.type === "add") {
            if (takeState.size < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _limit)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState, setTakeState).call(this, takeStateKey, takeState.size + 1, takeState.bound === void 0 || compareRows(takeState.bound, change.node.row) < 0 ? change.node.row : takeState.bound, maxBound);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push(change);
                return;
            }
            if (takeState.bound === void 0 || compareRows(change.node.row, takeState.bound) >= 0) {
                return;
            }
            let beforeBoundNode;
            let boundNode;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _limit) === 1) {
                boundNode = must(first((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch({
                    start: {
                        row: takeState.bound,
                        basis: "at"
                    },
                    constraint
                })));
            } else {
                [boundNode, beforeBoundNode] = take((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch({
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState, setTakeState).call(this, takeStateKey, takeState.size, beforeBoundNode === void 0 || compareRows(change.node.row, beforeBoundNode.row) > 0 ? change.node.row : beforeBoundNode.row, maxBound);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _withRowHiddenFromFetch, withRowHiddenFromFetch).call(this, change.node.row, ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push(removeChange);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push(change);
        } else if (change.type === "remove") {
            if (takeState.bound === void 0) {
                return;
            }
            const compToBound = compareRows(change.node.row, takeState.bound);
            if (compToBound > 0) {
                return;
            }
            const [beforeBoundNode] = take((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch({
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
            if (!(newBound === null || newBound === void 0 ? void 0 : newBound.push)) {
                for (const node of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch({
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
            if (newBound === null || newBound === void 0 ? void 0 : newBound.push) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push(change);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState, setTakeState).call(this, takeStateKey, takeState.size, newBound.node.row, maxBound);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push({
                    type: "add",
                    node: newBound.node
                });
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState, setTakeState).call(this, takeStateKey, takeState.size - 1, newBound === null || newBound === void 0 ? void 0 : newBound.node.row, maxBound);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push(change);
        } else if (change.type === "child") {
            if (takeState.bound && compareRows(change.node.row, takeState.bound) <= 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push(change);
            }
        }
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).destroy();
    }
    constructor(input, storage, limit, partitionKey){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialFetch);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getStateAndConstraint);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pushEditChange);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _withRowHiddenFromFetch);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _limit, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKeyComparator, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rowHiddenFromFetch, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7, {
            writable: true,
            value: throwOutput
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(limit >= 0);
        assertOrderingIncludesPK(input.getSchema().sort, input.getSchema().primaryKey);
        input.setOutput(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6, input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2, storage);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _limit, limit);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey, partitionKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKeyComparator, partitionKey && makePartitionKeyComparator(partitionKey));
    }
}, _class6);
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
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(constraint, key)) {
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
var ExpressionBuilder = (_exists = /*#__PURE__*/ new WeakMap(), class {
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
    constructor(exists){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exists, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "and", and);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "or", or);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "not", not);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "exists", (relationship, cb)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exists).call(this, relationship, cb));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _exists, exists);
        this.exists = this.exists.bind(this);
    }
});
function and() {
    for(var _len = arguments.length, conditions = new Array(_len), _key = 0; _key < _len; _key++){
        conditions[_key] = arguments[_key];
    }
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
function or() {
    for(var _len = arguments.length, conditions = new Array(_len), _key = 0; _key < _len; _key++){
        conditions[_key] = arguments[_key];
    }
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertString"])(lhs);
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
function patternToRegExp(source) {
    let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(right.type !== "static", "static values should be resolved before creating predicates");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(left.type !== "static", "static values should be resolved before creating predicates");
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(Array.isArray(rhs));
                const set = new Set(rhs);
                return (lhs)=>set.has(lhs);
            }
        case "NOT IN":
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(Array.isArray(rhs));
                const set = new Set(rhs);
                return (lhs)=>!set.has(lhs);
            }
        default:
            operator;
            throw new Error("Unexpected operator: ".concat(operator));
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(filters);
    }
}
// ../zql/src/builder/builder.ts
function buildPipeline(ast, delegate, queryID) {
    return buildPipelineInternal(delegate.mapAst ? delegate.mapAst(ast) : ast, delegate, queryID, "");
}
function buildPipelineInternal(ast, delegate, queryID, name, partitionKey) {
    const source = delegate.getSource(ast.table);
    if (!source) {
        throw new Error("Source not found: ".concat(ast.table));
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
    end = delegate.decorateInput(end, "".concat(name, ":source(").concat(ast.table, ")"));
    const { fullyAppliedFilters } = conn;
    if (ast.start) {
        const skip = new Skip(end, ast.start);
        delegate.addEdge(end, skip);
        end = delegate.decorateInput(skip, "".concat(name, ":skip)"));
    }
    for (const csq of csqsFromCondition){
        end = applyCorrelatedSubQuery(csq, delegate, queryID, end, name, true);
    }
    if (ast.where && (!fullyAppliedFilters || delegate.applyFiltersAnyway)) {
        end = applyWhere(end, ast.where, delegate, name);
    }
    if (ast.limit !== void 0) {
        const takeName = "".concat(name, ":take");
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
    delegate.decorateFilterInput(filter, "".concat(valuePosName(condition.left), ":").concat(condition.op, ":").concat(valuePosName(condition.right)));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(sq.subquery.alias, "Subquery must have an alias");
    const child = buildPipelineInternal(sq.subquery, delegate, queryID, "".concat(name, ".").concat(sq.subquery.alias), sq.correlation.childField);
    const joinName = "".concat(name, ":join(").concat(sq.subquery.alias, ")");
    var _sq_hidden, _sq_system;
    const join = new Join({
        parent: end,
        child,
        storage: delegate.createStorage(joinName),
        parentKey: sq.correlation.parentField,
        childKey: sq.correlation.childField,
        relationshipName: sq.subquery.alias,
        hidden: (_sq_hidden = sq.hidden) !== null && _sq_hidden !== void 0 ? _sq_hidden : false,
        system: (_sq_system = sq.system) !== null && _sq_system !== void 0 ? _sq_system : "client"
    });
    delegate.addEdge(end, join);
    delegate.addEdge(child, join);
    return delegate.decorateInput(join, joinName);
}
function applyCorrelatedSubqueryCondition(input, condition, delegate, name) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(condition.op === "EXISTS" || condition.op === "NOT EXISTS");
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
    const existsName = "".concat(name, ":exists(").concat(condition.related.subquery.alias, ")");
    const exists = new Exists(input, delegate.createStorage(existsName), must(condition.related.subquery.alias), condition.related.correlation.parentField, condition.op);
    delegate.addEdge(input, exists);
    return delegate.decorateFilterInput(exists, existsName);
}
function gatherCorrelatedSubqueryQueriesFromCondition(condition) {
    const csqs = [];
    const gather = (condition2)=>{
        if (condition2.type === "correlatedSubquery") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(condition2.op === "EXISTS" || condition2.op === "NOT EXISTS");
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
    const orderingFields = ordering.map((param)=>{
        let [field] = param;
        return field;
    });
    const missingFields = pk.filter((pkField)=>!orderingFields.includes(pkField));
    if (missingFields.length > 0) {
        throw new Error("Ordering must include all primary key fields. Missing: ".concat(missingFields.join(", "), '. ZQL automatically appends primary key fields to the ordering if they are missing \n      so a common cause of this error is a casing mismatch between Postgres and ZQL.\n      E.g., "userid" vs "userID".\n      You may want to add double-quotes around your Postgres column names to prevent Postgres from lower-casing them:\n      https://www.postgresql.org/docs/current/sql-syntax-lexical.htm'));
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
    const uniquifyCorrelatedSubquery = (csqc)=>{
        var _csqc_related_subquery_alias;
        return {
            ...csqc,
            related: {
                ...csqc.related,
                subquery: {
                    ...csqc.related.subquery,
                    alias: ((_csqc_related_subquery_alias = csqc.related.subquery.alias) !== null && _csqc_related_subquery_alias !== void 0 ? _csqc_related_subquery_alias : "") + "_" + count++
                }
            }
        };
    };
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
var ArrayView = (_input7 = /*#__PURE__*/ new WeakMap(), _listeners = /*#__PURE__*/ new WeakMap(), _schema2 = /*#__PURE__*/ new WeakMap(), _format = /*#__PURE__*/ new WeakMap(), _root = /*#__PURE__*/ new WeakMap(), _dirty = /*#__PURE__*/ new WeakMap(), _complete = /*#__PURE__*/ new WeakMap(), _updateTTL = /*#__PURE__*/ new WeakMap(), _fireListeners = /*#__PURE__*/ new WeakSet(), _fireListener = /*#__PURE__*/ new WeakSet(), _hydrate = /*#__PURE__*/ new WeakSet(), _class7 = class {
    get data() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _root)[""];
    }
    addListener(listener) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _listeners).has(listener), "Listener already registered");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _listeners).add(listener);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fireListener, fireListener).call(this, listener);
        return ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _listeners).delete(listener);
        };
    }
    destroy() {
        var _this_onDestroy, _this;
        (_this_onDestroy = (_this = this).onDestroy) === null || _this_onDestroy === void 0 ? void 0 : _this_onDestroy.call(_this);
    }
    push(change) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dirty, true);
        applyChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _root), change, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema2), "", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format));
    }
    flush() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dirty)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dirty, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fireListeners, fireListeners).call(this);
    }
    updateTTL(ttl) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateTTL).call(this, ttl);
    }
    constructor(input, format, queryComplete, updateTTL){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fireListeners);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fireListener);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hydrate);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input7, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _listeners, {
            writable: true,
            value: /* @__PURE__ */ new Set()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema2, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _root, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onDestroy", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dirty, {
            writable: true,
            value: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _complete, {
            writable: true,
            value: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateTTL, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input7, input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema2, input.getSchema());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format, format);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateTTL, updateTTL);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _root, {
            "": format.singular ? void 0 : []
        });
        input.setOutput(this);
        if (queryComplete === true) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _complete, true);
        } else {
            void queryComplete.then(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _complete, true);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fireListeners, fireListeners).call(this);
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hydrate, hydrate).call(this);
    }
}, _class7);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(condition);
    }
}
// ../zql/src/query/query-impl.ts
function materialize(query, delegate, factoryOrOptions, maybeOptions) {
    if (typeof factoryOrOptions === "function") {
        return query[delegateSymbol](delegate).materialize(factoryOrOptions, maybeOptions === null || maybeOptions === void 0 ? void 0 : maybeOptions.ttl);
    }
    return query[delegateSymbol](delegate).materialize(factoryOrOptions === null || factoryOrOptions === void 0 ? void 0 : factoryOrOptions.ttl);
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
var AbstractQuery = (_schema3 = /*#__PURE__*/ new WeakMap(), _tableName = /*#__PURE__*/ new WeakMap(), _hash = /*#__PURE__*/ new WeakMap(), _system = /*#__PURE__*/ new WeakMap(), _currentJunction = /*#__PURE__*/ new WeakMap(), _completedAST = /*#__PURE__*/ new WeakMap(), _delegateSymbol = delegateSymbol, _astSymbol = astSymbol, class {
    [_delegateSymbol](delegate) {
        return this[newQuerySymbol](delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName), this._ast, this.format, this.customQueryID, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction));
    }
    nameAndArgs(name, args) {
        return this[newQuerySymbol](this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName), this._ast, this.format, {
            name,
            args
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction));
    }
    get [_astSymbol]() {
        return this._ast;
    }
    get ast() {
        return this._completeAst();
    }
    hash() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hash)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hash, hashOfAST(this._completeAst()));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hash);
    }
    _completeAst() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedAST)) {
            const finalOrderBy = addPrimaryKeys((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3).tables[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName)], this._ast.orderBy);
            if (this._ast.start) {
                const { row } = this._ast.start;
                const narrowedRow = {};
                for (const [field] of finalOrderBy){
                    narrowedRow[field] = row[field];
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedAST, {
                    ...this._ast,
                    start: {
                        ...this._ast.start,
                        row: narrowedRow
                    },
                    orderBy: finalOrderBy
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedAST, {
                    ...this._ast,
                    orderBy: addPrimaryKeys((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3).tables[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName)], this._ast.orderBy)
                });
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedAST);
    }
    then(onFulfilled, onRejected) {
        return this.run().then(onFulfilled, onRejected);
    }
    constructor(delegate, schema, tableName, ast, format, system, customQueryID, currentJunction){
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_delegate", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_ast", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "format", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hash, {
            writable: true,
            value: ""
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _system, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "customQueryID", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "one", ()=>this[newQuerySymbol](this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName), {
                ...this._ast,
                limit: 1
            }, {
                ...this.format,
                singular: true
            }, this.customQueryID, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction)));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "whereExists", (relationship, cb)=>this.where((param)=>{
                let { exists } = param;
                return exists(relationship, cb);
            }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "related", (relationship, cb)=>{
            if (relationship.startsWith(SUBQ_PREFIX)) {
                throw new Error('Relationship names may not start with "'.concat(SUBQ_PREFIX, '". That is a reserved prefix.'));
            }
            cb = cb !== null && cb !== void 0 ? cb : (q)=>q;
            const related = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3).relationships[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName)][relationship];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(related, "Invalid relationship");
            if (isOneHop(related)) {
                const { destSchema, destField, sourceField, cardinality } = related[0];
                let q = this[newQuerySymbol](this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), destSchema, {
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(sourceField), "The source of a relationship must specify at last 1 field");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(destField), "The destination of a relationship must specify at last 1 field");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(sourceField.length === destField.length, "The source and destination of a relationship must have the same number of fields");
                var _this__ast_related;
                return this[newQuerySymbol](this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName), {
                    ...this._ast,
                    related: [
                        ...(_this__ast_related = this._ast.related) !== null && _this__ast_related !== void 0 ? _this__ast_related : [],
                        {
                            system: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _system),
                            correlation: {
                                parentField: sourceField,
                                childField: destField
                            },
                            subquery: addPrimaryKeysToAst((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3).tables[destSchema], sq._ast)
                        }
                    ]
                }, {
                    ...this.format,
                    relationships: {
                        ...this.format.relationships,
                        [relationship]: sq.format
                    }
                }, this.customQueryID, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction));
            }
            if (isTwoHop(related)) {
                const [firstRelation, secondRelation] = related;
                const { destSchema } = secondRelation;
                const junctionSchema = firstRelation.destSchema;
                const sq = cb(this[newQuerySymbol](this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), destSchema, {
                    table: destSchema,
                    alias: relationship
                }, {
                    relationships: {},
                    singular: secondRelation.cardinality === "one"
                }, this.customQueryID, relationship));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(firstRelation.sourceField), "Invalid relationship");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(firstRelation.destField), "Invalid relationship");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(secondRelation.sourceField), "Invalid relationship");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(secondRelation.destField), "Invalid relationship");
                var _this__ast_related1;
                return this[newQuerySymbol](this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName), {
                    ...this._ast,
                    related: [
                        ...(_this__ast_related1 = this._ast.related) !== null && _this__ast_related1 !== void 0 ? _this__ast_related1 : [],
                        {
                            system: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _system),
                            correlation: {
                                parentField: firstRelation.sourceField,
                                childField: firstRelation.destField
                            },
                            hidden: true,
                            subquery: {
                                table: junctionSchema,
                                alias: relationship,
                                orderBy: addPrimaryKeys((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3).tables[junctionSchema], void 0),
                                related: [
                                    {
                                        system: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _system),
                                        correlation: {
                                            parentField: secondRelation.sourceField,
                                            childField: secondRelation.destField
                                        },
                                        subquery: addPrimaryKeysToAst((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3).tables[destSchema], sq._ast)
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
                }, this.customQueryID, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction));
            }
            throw new Error("Invalid relationship ".concat(relationship));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "where", (fieldOrExpressionFactory, opOrValue, value)=>{
            let cond;
            if (typeof fieldOrExpressionFactory === "function") {
                cond = fieldOrExpressionFactory(new ExpressionBuilder(this._exists));
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(opOrValue !== void 0, "Invalid condition");
                cond = cmp(fieldOrExpressionFactory, opOrValue, value);
            }
            const existingWhere = this._ast.where;
            if (existingWhere) {
                cond = and(existingWhere, cond);
            }
            const where = simplifyCondition(cond);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _system) === "client") {
                assertNoNotExists(where);
            }
            return this[newQuerySymbol](this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName), {
                ...this._ast,
                where
            }, this.format, this.customQueryID, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "start", (row, opts)=>this[newQuerySymbol](this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName), {
                ...this._ast,
                start: {
                    row,
                    exclusive: !(opts === null || opts === void 0 ? void 0 : opts.inclusive)
                }
            }, this.format, this.customQueryID, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction)));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "limit", (limit)=>{
            if (limit < 0) {
                throw new Error("Limit must be non-negative");
            }
            if ((limit | 0) !== limit) {
                throw new Error("Limit must be an integer");
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction)) {
                throw new NotImplementedError("Limit is not supported in junction relationships yet. Junction relationship being limited: " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction));
            }
            return this[newQuerySymbol](this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName), {
                ...this._ast,
                limit
            }, this.format, this.customQueryID, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "orderBy", (field, direction)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction)) {
                throw new NotImplementedError("Order by is not supported in junction relationships yet. Junction relationship being ordered: " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction));
            }
            var _this__ast_orderBy;
            return this[newQuerySymbol](this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName), {
                ...this._ast,
                orderBy: [
                    ...(_this__ast_orderBy = this._ast.orderBy) !== null && _this__ast_orderBy !== void 0 ? _this__ast_orderBy : [],
                    [
                        field,
                        direction
                    ]
                ]
            }, this.format, this.customQueryID, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_exists", function(relationship) {
            let cb = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (q)=>q;
            const related = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, _schema3).relationships[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, _tableName)][relationship];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(related, "Invalid relationship");
            if (isOneHop(related)) {
                const { destSchema, sourceField, destField } = related[0];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(sourceField), "Invalid relationship");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(destField), "Invalid relationship");
                const sq = cb(_this[newQuerySymbol](_this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, _schema3), destSchema, {
                    table: destSchema,
                    alias: "".concat(SUBQ_PREFIX).concat(relationship)
                }, defaultFormat, _this.customQueryID, void 0));
                return {
                    type: "correlatedSubquery",
                    related: {
                        system: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, _system),
                        correlation: {
                            parentField: sourceField,
                            childField: destField
                        },
                        subquery: addPrimaryKeysToAst((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, _schema3).tables[destSchema], sq._ast)
                    },
                    op: "EXISTS"
                };
            }
            if (isTwoHop(related)) {
                const [firstRelation, secondRelation] = related;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(firstRelation.sourceField), "Invalid relationship");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(firstRelation.destField), "Invalid relationship");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(secondRelation.sourceField), "Invalid relationship");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(isCompoundKey(secondRelation.destField), "Invalid relationship");
                const { destSchema } = secondRelation;
                const junctionSchema = firstRelation.destSchema;
                const queryToDest = cb(_this[newQuerySymbol](_this._delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, _schema3), destSchema, {
                    table: destSchema,
                    alias: "".concat(SUBQ_PREFIX, "zhidden_").concat(relationship)
                }, defaultFormat, _this.customQueryID, relationship));
                return {
                    type: "correlatedSubquery",
                    related: {
                        system: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, _system),
                        correlation: {
                            parentField: firstRelation.sourceField,
                            childField: firstRelation.destField
                        },
                        subquery: {
                            table: junctionSchema,
                            alias: "".concat(SUBQ_PREFIX).concat(relationship),
                            orderBy: addPrimaryKeys((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, _schema3).tables[junctionSchema], void 0),
                            where: {
                                type: "correlatedSubquery",
                                related: {
                                    system: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, _system),
                                    correlation: {
                                        parentField: secondRelation.sourceField,
                                        childField: secondRelation.destField
                                    },
                                    subquery: addPrimaryKeysToAst((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, _schema3).tables[destSchema], queryToDest._ast)
                                },
                                op: "EXISTS"
                            }
                        }
                    },
                    op: "EXISTS"
                };
            }
            throw new Error("Invalid relationship ".concat(relationship));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _completedAST, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema3, schema);
        this._delegate = delegate;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tableName, tableName);
        this._ast = ast;
        this.format = format;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _system, system);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentJunction, currentJunction);
        this.customQueryID = customQueryID;
    }
});
var completedAstSymbol = Symbol();
var QueryImpl = (_system1 = /*#__PURE__*/ new WeakMap(), _completedAstSymbol = completedAstSymbol, _newQuerySymbol = newQuerySymbol, class _QueryImpl extends AbstractQuery {
    get [_completedAstSymbol]() {
        return this._completeAst();
    }
    [_newQuerySymbol](delegate, schema, tableName, ast, format, customQueryID, currentJunction) {
        return new _QueryImpl(delegate, schema, tableName, ast, format, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _system1), customQueryID, currentJunction);
    }
    materialize(factoryOrTTL) {
        let ttl = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_TTL_MS;
        const delegate = must(this._delegate, "materialize requires a query delegate to be set");
        let factory;
        if (typeof factoryOrTTL === "function") {
            factory = factoryOrTTL;
        } else {
            ttl = factoryOrTTL !== null && factoryOrTTL !== void 0 ? factoryOrTTL : DEFAULT_TTL_MS;
        }
        const ast = this._completeAst();
        const queryID = this.customQueryID ? hashOfNameAndArgs(this.customQueryID.name, this.customQueryID.args) : this.hash();
        const queryCompleteResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolver"])();
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
            removeCommitObserver === null || removeCommitObserver === void 0 ? void 0 : removeCommitObserver();
            removeAddedQuery();
        };
        const t0 = performance.now();
        const removeAddedQuery = this.customQueryID ? delegate.addCustomQuery(ast, this.customQueryID, ttl, gotCallback) : delegate.addServerQuery(ast, ttl, gotCallback);
        const input = buildPipeline(ast, delegate, queryID);
        const view = delegate.batchViewUpdates(()=>(factory !== null && factory !== void 0 ? factory : arrayViewFactory)(this, input, this.format, onDestroy, (cb)=>{
                removeCommitObserver = delegate.onTransactionCommit(cb);
            }, queryComplete || queryCompleteResolver.promise, updateTTL));
        delegate.addMetric("query-materialization-client", performance.now() - t0, queryID);
        return view;
    }
    run(options) {
        const delegate = must(this._delegate, "run requires a query delegate to be set");
        delegate.assertValidRunOptions(options);
        const v2 = this.materialize(options === null || options === void 0 ? void 0 : options.ttl);
        if ((options === null || options === void 0 ? void 0 : options.type) === "complete") {
            return new Promise((resolve)=>{
                v2.addListener((data, type)=>{
                    if (type === "complete") {
                        v2.destroy();
                        resolve(data);
                    }
                });
            });
        }
        options === null || options === void 0 ? void 0 : options.type;
        const ret = v2.data;
        v2.destroy();
        return Promise.resolve(ret);
    }
    preload(options) {
        const delegate = must(this._delegate, "preload requires a query delegate to be set");
        var _options_ttl;
        const ttl = (_options_ttl = options === null || options === void 0 ? void 0 : options.ttl) !== null && _options_ttl !== void 0 ? _options_ttl : DEFAULT_PRELOAD_TTL_MS;
        const ast = this._completeAst();
        const { resolve, promise: complete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$resolver$40$1$2e$0$2e$2$2f$node_modules$2f40$rocicorp$2f$resolver$2f$out$2f$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolver"])();
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
    constructor(delegate, schema, tableName, ast = {
        table: tableName
    }, format = defaultFormat, system = "client", customQueryID, currentJunction){
        super(delegate, schema, tableName, ast, format, system, customQueryID, currentJunction), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _system1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _system1, system);
    }
});
function addPrimaryKeys(schema, orderBy) {
    orderBy = orderBy !== null && orderBy !== void 0 ? orderBy : [];
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
function splice(tree, start, deleteCount) {
    for(var _len = arguments.length, items = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        items[_key - 3] = arguments[_key];
    }
    if (this.isMutable) {
        this.entries.splice(start, deleteCount, ...items);
        this._updateNode(tree);
        return this;
    }
    const entries = readonlySplice(this.entries, start, deleteCount, ...items);
    return tree.newDataNodeImpl(entries);
}
async function mergeAndPartition(tree, i, childNode) {
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
function replaceChild(tree, index, newEntry) {
    if (this.isMutable) {
        this.entries.splice(index, 1, newEntry);
        this._updateNode(tree);
        return this;
    }
    const entries = readonlySplice(this.entries, index, 1, newEntry);
    return tree.newInternalNodeImpl(entries, this.level);
}
function addToModified(node) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(node.isMutable);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _modified).set(node.hash, node);
    this._cache.set(node.hash, node);
}
async function generateDiffs(diffConfig) {
    const diffsMap = new DiffsMap();
    if (!diffConfig.shouldComputeDiffs()) {
        return diffsMap;
    }
    let valueDiff = [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _basis)) {
        const basisMap = new BTreeRead((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _formatVersion), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _basis).valueHash);
        valueDiff = await diff(basisMap, this.map);
    }
    diffsMap.set("", valueDiff);
    let basisIndexes;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _basis)) {
        basisIndexes = readIndexesForRead((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _basis), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dagWrite), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _formatVersion));
    } else {
        basisIndexes = /* @__PURE__ */ new Map();
    }
    for (const [name, index] of this.indexes){
        if (!diffConfig.shouldComputeDiffsForIndex(name)) {
            continue;
        }
        const basisIndex = basisIndexes.get(name);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(index !== basisIndex);
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
function process() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed).length > 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxProcessed)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed).push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed));
        sortCentroidList((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length = 0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed)[0]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessedWeight));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessedWeight, 0);
        let soFar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed)[0].weight;
        let limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _integratedQ, integratedQ).call(this, 1);
        for(let i = 1; i < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed).length; i++){
            const centroid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed)[i];
            const projected = soFar + centroid.weight;
            if (projected <= limit) {
                soFar = projected;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length - 1].add(centroid);
            } else {
                const k1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _integratedLocation, integratedLocation).call(this, soFar / (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight));
                limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _integratedQ, integratedQ).call(this, k1 + 1);
                soFar += centroid.weight;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).push(centroid);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min, Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _min), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[0].mean));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max, Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length - 1].mean));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unprocessed).length = 0;
    }
}
function updateCumulative() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative).length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative)[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative).length - 1] === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processedWeight)) {
        return;
    }
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length + 1;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative).length > n) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative).length = n;
    }
    let prev = 0;
    for(let i = 0; i < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length; i++){
        const centroid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed)[i];
        const cur = centroid.weight;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative)[i] = prev + cur / 2;
        prev += cur;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cumulative)[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processed).length] = prev;
}
function integratedQ(k) {
    return (Math.sin(Math.min(k, this.compression) * Math.PI / this.compression - Math.PI / 2) + 1) / 2;
}
function integratedLocation(q) {
    return this.compression * (Math.asin(2 * q - 1) + Math.PI / 2) / Math.PI;
}
function filter(node, size) {
    const exists = (size !== null && size !== void 0 ? size : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getOrFetchSize, getOrFetchSize).call(this, node)) > 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _not) ? !exists : exists;
}
function pushWithFilter(change, size) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter, filter).call(this, change.node, size)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output2).push(change);
    }
}
function getSize(node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage).get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _makeSizeStorageKey, makeSizeStorageKey).call(this, node));
}
function setSize(node, size) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage).set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _makeSizeStorageKey, makeSizeStorageKey).call(this, node), size);
}
function delSize(node) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage).del((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _makeSizeStorageKey, makeSizeStorageKey).call(this, node));
}
function getOrFetchSize(node) {
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSize, getSize).call(this, node);
    if (size !== void 0) {
        return size;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetchSize, fetchSize).call(this, node);
}
function fetchSize(node) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _noSizeReuse) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inPush)) {
        const cachedSizeEntry = first((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage).scan({
            prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _makeSizeStorageKeyPrefix, makeSizeStorageKeyPrefix).call(this, node)
        }));
        if (cachedSizeEntry !== void 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setSize, setSize).call(this, node, cachedSizeEntry[1]);
            return cachedSizeEntry[1];
        }
    }
    const relationship = node.relationships[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _relationshipName)];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(relationship);
    let size = 0;
    for (const _relatedNode of relationship()){
        size++;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setSize, setSize).call(this, node, size);
    return size;
}
function makeSizeStorageKeyPrefix(node) {
    return "row/".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _noSizeReuse) ? "" : JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getKeyValues, getKeyValues).call(this, node, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentJoinKey))), "/");
}
function makeSizeStorageKey(node) {
    return "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _makeSizeStorageKeyPrefix, makeSizeStorageKeyPrefix).call(this, node)).concat(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getKeyValues, getKeyValues).call(this, node, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input2).getSchema().primaryKey)));
}
function getKeyValues(node, def) {
    const values = [];
    for (const key of def){
        values.push(normalizeUndefined(node.row[key]));
    }
    return values;
}
function pushParent(change) {
    switch(change.type){
        case "add":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output5).push({
                type: "add",
                node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processParentNode, processParentNode).call(this, change.node.row, change.node.relationships, "fetch")
            });
            break;
        case "remove":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output5).push({
                type: "remove",
                node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processParentNode, processParentNode).call(this, change.node.row, change.node.relationships, "cleanup")
            });
            break;
        case "child":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output5).push({
                type: "child",
                node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processParentNode, processParentNode).call(this, change.node.row, change.node.relationships, "fetch"),
                child: change.child
            });
            break;
        case "edit":
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(rowEqualsForCompoundKey(change.oldNode.row, change.node.row, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentKey)), "Parent edit must not change relationship.");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output5).push({
                    type: "edit",
                    oldNode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processParentNode, processParentNode).call(this, change.oldNode.row, change.oldNode.relationships, "cleanup"),
                    node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processParentNode, processParentNode).call(this, change.node.row, change.node.relationships, "fetch")
                });
                break;
            }
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(change);
    }
}
function pushChild(change) {
    const pushChildChange = (childRow, change2)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inprogressChildChange, {
            change: change2,
            position: void 0
        });
        try {
            const parentNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parent).fetch({
                constraint: Object.fromEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentKey).map((key, i)=>[
                        key,
                        childRow[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childKey)[i]]
                    ]))
            });
            for (const parentNode of parentNodes){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inprogressChildChange).position = parentNode.row;
                const childChange = {
                    type: "child",
                    node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processParentNode, processParentNode).call(this, parentNode.row, parentNode.relationships, "fetch"),
                    child: {
                        relationshipName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _relationshipName1),
                        change: change2
                    }
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output5).push(childChange);
            }
        } finally{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inprogressChildChange, void 0);
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(rowEqualsForCompoundKey(oldChildRow, childRow, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childKey)), "Child edit must not change relationship.");
                pushChildChange(childRow, change);
                break;
            }
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(change);
    }
}
function* generateChildStreamWithOverlay(stream, overlay) {
    let applied = false;
    let editOldApplied = false;
    let editNewApplied = false;
    for (const child of stream){
        let yieldChild = true;
        if (!applied) {
            switch(overlay.type){
                case "add":
                    {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _child).getSchema().compareRows(overlay.node.row, child.row) === 0) {
                            applied = true;
                            yieldChild = false;
                        }
                        break;
                    }
                case "remove":
                    {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _child).getSchema().compareRows(overlay.node.row, child.row) < 0) {
                            applied = true;
                            yield overlay.node;
                        }
                        break;
                    }
                case "edit":
                    {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _child).getSchema().compareRows(overlay.oldNode.row, child.row) < 0) {
                            editOldApplied = true;
                            if (editNewApplied) {
                                applied = true;
                            }
                            yield overlay.oldNode;
                        }
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _child).getSchema().compareRows(overlay.node.row, child.row) === 0) {
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
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _child).getSchema().compareRows(overlay.node.row, child.row) === 0) {
                            applied = true;
                            yield {
                                row: child.row,
                                relationships: {
                                    ...child.relationships,
                                    [overlay.child.relationshipName]: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _generateChildStreamWithOverlay, generateChildStreamWithOverlay).call(this, child.relationships[overlay.child.relationshipName](), overlay.child.change)
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(editNewApplied);
            editOldApplied = true;
            applied = true;
            yield overlay.oldNode;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(applied);
}
function processParentNode(parentNodeRow, parentNodeRelations, mode) {
    let method = mode;
    let storageUpdated = false;
    const childStream = ()=>{
        if (!storageUpdated) {
            if (mode === "cleanup") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage1).del(makeStorageKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentKey), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parent).getSchema().primaryKey, parentNodeRow));
                const empty = [
                    ...take((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage1).scan({
                        prefix: makeStorageKeyPrefix(parentNodeRow, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentKey))
                    }), 1)
                ].length === 0;
                method = empty ? "cleanup" : "fetch";
            }
            storageUpdated = true;
            if (mode === "fetch") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage1).set(makeStorageKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentKey), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parent).getSchema().primaryKey, parentNodeRow), true);
            }
        }
        const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _child)[method]({
            constraint: Object.fromEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childKey).map((key, i)=>[
                    key,
                    parentNodeRow[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentKey)[i]]
                ]))
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inprogressChildChange) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isJoinMatch, isJoinMatch).call(this, parentNodeRow, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inprogressChildChange).change.node.row) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inprogressChildChange).position && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema1).compareRows(parentNodeRow, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inprogressChildChange).position) > 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _generateChildStreamWithOverlay, generateChildStreamWithOverlay).call(this, stream, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _inprogressChildChange).change);
        }
        return stream;
    };
    return {
        row: parentNodeRow,
        relationships: {
            ...parentNodeRelations,
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _relationshipName1)]: childStream
        }
    };
}
function isJoinMatch(parent, child) {
    for(let i = 0; i < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentKey).length; i++){
        if (!valuesEqual(parent[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _parentKey)[i]], child[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childKey)[i]])) {
            return false;
        }
    }
    return true;
}
function* fetchOrCleanup(method, req) {
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getStart, getStart).call(this, req);
    if (start === "empty") {
        return;
    }
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input5)[method]({
        ...req,
        start
    });
    if (!req.reverse) {
        yield* nodes;
        return;
    }
    for (const node of nodes){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shouldBePresent, shouldBePresent).call(this, node.row)) {
            return;
        }
        yield node;
    }
}
function shouldBePresent(row) {
    const cmp2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _comparator).call(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _bound).row, row);
    return cmp2 < 0 || cmp2 === 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _bound).exclusive;
}
function getStart(req) {
    const boundStart = {
        row: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _bound).row,
        basis: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _bound).exclusive ? "after" : "at"
    };
    if (!req.start) {
        if (req.reverse) {
            return void 0;
        }
        return boundStart;
    }
    const cmp2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _comparator).call(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _bound).row, req.start.row);
    if (!req.reverse) {
        if (cmp2 > 0) {
            return boundStart;
        }
        if (cmp2 === 0) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _bound).exclusive || req.start.basis === "after") {
                return {
                    row: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _bound).row,
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
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _bound).exclusive && req.start.basis === "at") {
            return boundStart;
        }
        return "empty";
    }
    return req.start;
}
function* initialFetch(req) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(req.start === void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!req.reverse);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(constraintMatchesPartitionKey(req.constraint, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey)));
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _limit) === 0) {
        return;
    }
    const takeStateKey = getTakeStateKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey), req.constraint);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2).get(takeStateKey) === void 0);
    let size = 0;
    let bound;
    let downstreamEarlyReturn = true;
    let exceptionThrown = false;
    try {
        for (const inputNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch(req)){
            yield inputNode;
            bound = inputNode.row;
            size++;
            if (size === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _limit)) {
                break;
            }
        }
        downstreamEarlyReturn = false;
    } catch (e) {
        exceptionThrown = true;
        throw e;
    } finally{
        if (!exceptionThrown) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState, setTakeState).call(this, takeStateKey, size, bound, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2).get(MAX_BOUND_KEY));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!downstreamEarlyReturn, "Unexpected early return prevented full hydration");
        }
    }
}
function getStateAndConstraint(row) {
    const takeStateKey = getTakeStateKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey), row);
    const takeState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2).get(takeStateKey);
    let maxBound;
    let constraint;
    if (takeState) {
        maxBound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2).get(MAX_BOUND_KEY);
        constraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey) && Object.fromEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKey).map((key)=>[
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
function pushEditChange(change) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKeyComparator) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _partitionKeyComparator).call(this, change.oldNode.row, change.node.row) === 0, "Unexpected change of partition key");
    const { takeState, takeStateKey, maxBound, constraint } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getStateAndConstraint, getStateAndConstraint).call(this, change.oldNode.row);
    if (!takeState) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(takeState.bound, "Bound should be set");
    const { compareRows } = this.getSchema();
    const oldCmp = compareRows(change.oldNode.row, takeState.bound);
    const newCmp = compareRows(change.node.row, takeState.bound);
    const replaceBoundAndForwardChange = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState, setTakeState).call(this, takeStateKey, takeState.size, change.node.row, maxBound);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push(change);
    };
    if (oldCmp === 0) {
        if (newCmp === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push(change);
            return;
        }
        if (newCmp < 0) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _limit) === 1) {
                replaceBoundAndForwardChange();
                return;
            }
            const beforeBoundNode = must(first((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch({
                start: {
                    row: takeState.bound,
                    basis: "after"
                },
                constraint,
                reverse: true
            })));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState, setTakeState).call(this, takeStateKey, takeState.size, beforeBoundNode.row, maxBound);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push(change);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(newCmp > 0);
        const newBoundNode = must(first((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState, setTakeState).call(this, takeStateKey, takeState.size, newBoundNode.row, maxBound);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _withRowHiddenFromFetch, withRowHiddenFromFetch).call(this, newBoundNode.row, ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push({
                type: "remove",
                node: change.oldNode
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push({
            type: "add",
            node: newBoundNode
        });
        return;
    }
    if (oldCmp > 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(newCmp !== 0, "Invalid state. Row has duplicate primary key");
        if (newCmp > 0) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(newCmp < 0);
        const [oldBoundNode, newBoundNode] = take((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch({
            start: {
                row: takeState.bound,
                basis: "at"
            },
            constraint,
            reverse: true
        }), 2);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState, setTakeState).call(this, takeStateKey, takeState.size, newBoundNode.row, maxBound);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _withRowHiddenFromFetch, withRowHiddenFromFetch).call(this, change.node.row, ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push({
                type: "remove",
                node: oldBoundNode
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push({
            type: "add",
            node: change.node
        });
        return;
    }
    if (oldCmp < 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(newCmp !== 0, "Invalid state. Row has duplicate primary key");
        if (newCmp < 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push(change);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(newCmp > 0);
        const afterBoundNode = must(first((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input6).fetch({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push({
            type: "remove",
            node: change.oldNode
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setTakeState, setTakeState).call(this, takeStateKey, takeState.size, afterBoundNode.row, maxBound);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _output7).push({
            type: "add",
            node: afterBoundNode
        });
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])();
}
function withRowHiddenFromFetch(row, fn) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rowHiddenFromFetch, row);
    try {
        fn();
    } finally{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rowHiddenFromFetch, void 0);
    }
}
function setTakeState(takeStateKey, size, bound, maxBound) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2).set(takeStateKey, {
        size,
        bound
    });
    if (bound !== void 0 && (maxBound === void 0 || this.getSchema().compareRows(bound, maxBound) > 0)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storage2).set(MAX_BOUND_KEY, bound);
    }
}
function fireListeners() {
    for (const listener of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _listeners)){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fireListener, fireListener).call(this, listener);
    }
}
function fireListener(listener) {
    listener(this.data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _complete) ? "complete" : "unknown");
}
function hydrate() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dirty, true);
    for (const node of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _input7).fetch({})){
        applyChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _root), {
            type: "add",
            node
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema2), "", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format));
    }
    this.flush();
}
 //# sourceMappingURL=chunk-G442PJSB.js.map
}),
]);

//# sourceMappingURL=fe940_%40rocicorp_zero_out_chunk-G442PJSB_58384dbd.js.map
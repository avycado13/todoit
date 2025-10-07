(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/inspector-4ALIZXAU.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "newInspector",
    ()=>newInspector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-G442PJSB.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-SGW2EIVJ.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$424PT5DM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rocicorp+zero@0.23.2025090100_@opentelemetry+core@2.1.0_@opentelemetry+api@1.9.0__typescript@5.9.3/node_modules/@rocicorp/zero/out/chunk-424PT5DM.js [app-client] (ecmascript)");
;
;
;
;
var _rep, _schema, _delegate, _rep1, _socket, _delegate1, _rep2, _schema1, _socket1, _delegate2;
;
;
;
// ../ast-to-zql/src/ast-to-zql.ts
function astToZQL(ast) {
    let code = "";
    if (ast.where) {
        code += transformCondition(ast.where, ".where", /* @__PURE__ */ new Set());
    }
    if (ast.related && ast.related.length > 0) {
        for (const related of ast.related){
            if (related.hidden) {
                var _related_subquery_related;
                const nestedRelated = (_related_subquery_related = related.subquery.related) === null || _related_subquery_related === void 0 ? void 0 : _related_subquery_related[0];
                if (nestedRelated) {
                    code += transformRelated(nestedRelated);
                }
            } else {
                code += transformRelated(related);
            }
        }
    }
    if (ast.orderBy && ast.orderBy.length > 0) {
        code += transformOrder(ast.orderBy);
    }
    if (ast.limit !== void 0) {
        code += ".limit(".concat(ast.limit, ")");
    }
    if (ast.start) {
        const { row, exclusive } = ast.start;
        code += ".start(".concat(JSON.stringify(row)).concat(exclusive ? "" : ", { inclusive: true }", ")");
    }
    return code;
}
function transformCondition(condition, prefix, args) {
    switch(condition.type){
        case "simple":
            return transformSimpleCondition(condition, prefix);
        case "and":
        case "or":
            return transformLogicalCondition(condition, prefix, args);
        case "correlatedSubquery":
            return transformExistsCondition(condition, prefix, args);
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(condition);
    }
}
function transformSimpleCondition(condition, prefix) {
    const { left, op, right } = condition;
    const leftCode = transformValuePosition(left);
    const rightCode = transformValuePosition(right);
    if (op === "=") {
        return "".concat(prefix, "(").concat(leftCode, ", ").concat(rightCode, ")");
    }
    return "".concat(prefix, "(").concat(leftCode, ", '").concat(op, "', ").concat(rightCode, ")");
}
function transformLogicalCondition(condition, prefix, args) {
    const { type, conditions } = condition;
    if (conditions.length === 1) {
        return transformCondition(conditions[0], prefix, args);
    }
    if (type === "and") {
        const parts = conditions.map((c)=>transformCondition(c, prefix, args));
        if (prefix === ".where") {
            return parts.join("");
        }
        args.add("and");
        return "and(" + parts.join(", ") + ")";
    }
    args = /* @__PURE__ */ new Set();
    const conditionsCode = conditions.map((c)=>transformCondition(c, "cmp", args)).join(", ");
    args.add("cmp");
    args.add(type);
    const argsCode = [
        ...args
    ].sort().join(", ");
    return ".where(({".concat(argsCode, "}) => ").concat(type, "(").concat(conditionsCode, "))");
}
function transformExistsCondition(condition, prefix, args) {
    const { related, op } = condition;
    const relationship = extractRelationshipName(related);
    const nextSubquery = getNextExistsSubquery(related);
    const hasSubQueryProps = nextSubquery.where || nextSubquery.related && nextSubquery.related.length > 0 || nextSubquery.orderBy || nextSubquery.limit;
    if (op === "EXISTS") {
        if (!hasSubQueryProps) {
            if (prefix === ".where") {
                return ".whereExists('".concat(relationship, "')");
            }
            args.add("exists");
            return "exists('".concat(relationship, "')");
        }
        if (prefix === ".where") {
            return ".whereExists('".concat(relationship, "', q => q").concat(astToZQL(nextSubquery), ")");
        }
        prefix;
        args.add("exists");
        return "exists('".concat(relationship, "', q => q").concat(astToZQL(nextSubquery), ")");
    }
    op;
    if (hasSubQueryProps) {
        if (prefix === ".where") {
            return ".where(({exists, not}) => not(exists('".concat(relationship, "', q => q").concat(astToZQL(nextSubquery), ")))");
        }
        prefix;
        args.add("not");
        args.add("exists");
        return "not(exists('".concat(relationship, "', q => q").concat(astToZQL(nextSubquery), "))");
    }
    if (prefix === ".where") {
        return ".where(({exists, not}) => not(exists('".concat(relationship, "')))");
    }
    args.add("not");
    args.add("exists");
    return "not(exists('".concat(relationship, "')))");
}
function getNextExistsSubquery(related) {
    var _related_subquery_where, _related_subquery_where_related_subquery_alias;
    if (((_related_subquery_where = related.subquery.where) === null || _related_subquery_where === void 0 ? void 0 : _related_subquery_where.type) === "correlatedSubquery" && ((_related_subquery_where_related_subquery_alias = related.subquery.where.related.subquery.alias) === null || _related_subquery_where_related_subquery_alias === void 0 ? void 0 : _related_subquery_where_related_subquery_alias.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBQ_PREFIX"] + "zhidden_"))) {
        return getNextExistsSubquery(related.subquery.where.related);
    }
    return related.subquery;
}
function extractRelationshipName(related) {
    const alias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["must"])(related.subquery.alias);
    return alias.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBQ_PREFIX"]) ? alias.substring(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBQ_PREFIX"].length) : alias;
}
function transformRelated(related) {
    const { alias } = related.subquery;
    if (!alias) return "";
    const relationship = alias;
    let code = ".related('".concat(relationship, "'");
    if (related.subquery.where || related.subquery.related && related.subquery.related.length > 0 || related.subquery.orderBy || related.subquery.limit) {
        code += ", q => q" + astToZQL(related.subquery);
    }
    code += ")";
    return code;
}
function transformOrder(orderBy) {
    let code = "";
    for (const [field, direction] of orderBy){
        code += ".orderBy('".concat(field, "', '").concat(direction, "')");
    }
    return code;
}
function transformValuePosition(value) {
    switch(value.type){
        case "literal":
            return transformLiteral(value);
        case "column":
            return "'".concat(value.name, "'");
        case "static":
            return transformParameter(value);
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(value);
    }
}
function transformLiteral(literal) {
    if (literal.value === null) {
        return "null";
    }
    if (Array.isArray(literal.value)) {
        return JSON.stringify(literal.value);
    }
    if (typeof literal.value === "string") {
        return "'".concat(literal.value.replace(/'/g, "\\'"), "'");
    }
    return String(literal.value);
}
function transformParameter(param) {
    const fieldStr = Array.isArray(param.field) ? "[".concat(param.field.map((f)=>"'".concat(f, "'")).join(", "), "]") : "'".concat(param.field, "'");
    return "authParam(".concat(fieldStr, ")");
}
// ../zero-client/src/client/inspector/inspector.ts
async function newInspector(rep, delegate, schema, socket) {
    const clientGroupID = await rep.clientGroupID;
    return new Inspector(rep, delegate, schema, rep.clientID, clientGroupID, socket);
}
var Inspector = (_rep = /*#__PURE__*/ new WeakMap(), _schema = /*#__PURE__*/ new WeakMap(), _delegate = /*#__PURE__*/ new WeakMap(), class {
    async metrics() {
        const clientMetrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate).metrics;
        const serverMetricsJSON = await rpc(await this.socket(), {
            op: "metrics"
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inspectMetricsDownSchema"]);
        return mergeMetrics(clientMetrics, serverMetricsJSON);
    }
    clients() {
        return withDagRead((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep), (dagRead)=>clients((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate), this.socket, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema), dagRead));
    }
    clientsWithQueries() {
        return withDagRead((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep), (dagRead)=>clientsWithQueries((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate), this.socket, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema), dagRead));
    }
    async serverVersion() {
        return rpc(await this.socket(), {
            op: "version"
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inspectVersionDownSchema"]);
    }
    constructor(rep, delegate, schema, clientID, clientGroupID, socket){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "client", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "clientGroup", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "socket", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep, rep);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema, schema);
        this.client = new Client(rep, delegate, schema, socket, clientID, clientGroupID);
        this.clientGroup = this.client.clientGroup;
        this.socket = socket;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate, delegate);
    }
});
function rpc(socket, arg, downSchema) {
    return new Promise((resolve, reject)=>{
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nanoid"])();
        const f = (ev)=>{
            const msg = JSON.parse(ev.data);
            if (msg[0] === "inspect") {
                const body = msg[1];
                if (body.id !== id) {
                    return;
                }
                const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["test"])(body, downSchema);
                if (res.ok) {
                    resolve(res.value.value);
                } else {
                    reject(res.error);
                }
                socket.removeEventListener("message", f);
            }
        };
        socket.addEventListener("message", f);
        socket.send(JSON.stringify([
            "inspect",
            {
                ...arg,
                id
            }
        ]));
    });
}
var Client = (_rep1 = /*#__PURE__*/ new WeakMap(), _socket = /*#__PURE__*/ new WeakMap(), _delegate1 = /*#__PURE__*/ new WeakMap(), class {
    async queries() {
        const rows = await rpc(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _socket).call(this), {
            op: "queries",
            clientID: this.id
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inspectQueriesDownSchema"]);
        return rows.map((row)=>new Query(row, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate1)));
    }
    map() {
        return withDagRead((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep1), async (dagRead)=>{
            const tree = await getBTree(dagRead, this.id);
            const map = /* @__PURE__ */ new Map();
            for await (const [key, value] of tree.scan("")){
                map.set(key, value);
            }
            return map;
        });
    }
    rows(tableName) {
        return withDagRead((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep1), async (dagRead)=>{
            const prefix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITIES_KEY_PREFIX"] + tableName;
            const tree = await getBTree(dagRead, this.id);
            const rows = [];
            for await (const [key, value] of tree.scan(prefix)){
                if (!key.startsWith(prefix)) {
                    break;
                }
                rows.push(value);
            }
            return rows;
        });
    }
    constructor(rep, delegate, schema, socket, id, clientGroupID){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "id", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "clientGroup", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _socket, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep1, rep);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _socket, socket);
        this.id = id;
        this.clientGroup = new ClientGroup(rep, delegate, socket, schema, clientGroupID);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate1, delegate);
    }
});
var ClientGroup = (_rep2 = /*#__PURE__*/ new WeakMap(), _schema1 = /*#__PURE__*/ new WeakMap(), _socket1 = /*#__PURE__*/ new WeakMap(), _delegate2 = /*#__PURE__*/ new WeakMap(), class {
    clients() {
        return withDagRead((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep2), (dagRead)=>clients((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _socket1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema1), dagRead, (param)=>{
                let [_, v] = param;
                return v.clientGroupID === this.id;
            }));
    }
    clientsWithQueries() {
        return withDagRead((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep2), (dagRead)=>clientsWithQueries((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _socket1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema1), dagRead, (param)=>{
                let [_, v] = param;
                return v.clientGroupID === this.id;
            }));
    }
    async queries() {
        const rows = await rpc(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _socket1).call(this), {
            op: "queries"
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inspectQueriesDownSchema"]);
        return rows.map((row)=>new Query(row, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate2)));
    }
    constructor(rep, delegate, socket, schema, id){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep2, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "id", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _socket1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate2, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _rep2, rep);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delegate2, delegate);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _socket1, socket);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _schema1, schema);
        this.id = id;
    }
});
async function withDagRead(rep, f) {
    await rep.refresh();
    await rep.persist();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRead"])(rep.perdag, f);
}
async function getBTree(dagRead, clientID) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])(clientID, dagRead);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(client, "Client not found: ".concat(clientID));
    const { clientGroupID } = client;
    const clientGroup = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientGroup"])(clientGroupID, dagRead);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$SGW2EIVJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(clientGroup, "Client group not found: ".concat(clientGroupID));
    const dbRead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readFromHash"])(clientGroup.headHash, dagRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Latest"]);
    return dbRead.map;
}
async function clients(rep, delegate, socket, schema, dagRead) {
    let predicate = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : ()=>true;
    const clients2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClients"])(dagRead);
    return [
        ...clients2.entries()
    ].filter(predicate).map((param)=>{
        let [clientID, { clientGroupID }] = param;
        return new Client(rep, delegate, schema, socket, clientID, clientGroupID);
    });
}
async function clientsWithQueries(rep, delegate, socket, schema, dagRead) {
    let predicate = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : ()=>true;
    const allClients = await clients(rep, delegate, socket, schema, dagRead, predicate);
    const clientsWithQueries2 = [];
    await Promise.all(allClients.map(async (client)=>{
        const queries = await client.queries();
        if (queries.length > 0) {
            clientsWithQueries2.push(client);
        }
    }));
    return clientsWithQueries2;
}
var Query = class {
    constructor(row, delegate){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "args", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "got", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "ttl", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "inactivatedAt", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rowCount", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "deleted", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "id", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "clientID", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "metrics", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "clientZQL", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "serverZQL", void 0);
        const { ast, queryID, inactivatedAt } = row;
        this.clientID = row.clientID;
        this.id = queryID;
        this.inactivatedAt = inactivatedAt === null ? null : new Date(inactivatedAt);
        this.ttl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeTTL"])(row.ttl);
        this.name = row.name;
        this.args = row.args;
        this.got = row.got;
        this.rowCount = row.rowCount;
        this.deleted = row.deleted;
        this.serverZQL = ast ? ast.table + astToZQL(ast) : null;
        const clientAST = delegate.getAST(queryID);
        this.clientZQL = clientAST ? clientAST.table + astToZQL(clientAST) : null;
        const clientMetrics = delegate.getQueryMetrics(queryID);
        const serverMetrics = row.metrics;
        this.metrics = mergeMetrics(clientMetrics, serverMetrics);
    }
};
function mergeMetrics(clientMetrics, serverMetrics) {
    return {
        ...clientMetrics !== null && clientMetrics !== void 0 ? clientMetrics : newClientMetrics(),
        ...serverMetrics ? convertServerMetrics(serverMetrics) : newServerMetrics()
    };
}
function newClientMetrics() {
    return {
        "query-materialization-client": new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TDigest"](),
        "query-materialization-end-to-end": new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TDigest"](),
        "query-update-client": new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TDigest"]()
    };
}
function newServerMetrics() {
    return {
        "query-materialization-server": new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TDigest"](),
        "query-update-server": new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TDigest"]()
    };
}
function convertServerMetrics(metrics) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapValues"])(metrics, (v)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rocicorp$2b$zero$40$0$2e$23$2e$2025090100_$40$opentelemetry$2b$core$40$2$2e$1$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$rocicorp$2f$zero$2f$out$2f$chunk$2d$G442PJSB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TDigest"].fromJSON(v));
}
;
 //# sourceMappingURL=inspector-4ALIZXAU.js.map
}),
]);

//# sourceMappingURL=fe940_%40rocicorp_zero_out_inspector-4ALIZXAU_69652911.js.map
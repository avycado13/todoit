module.exports = [
"[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/crypto/index.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareHash",
    ()=>compareHash,
    "constantTimeEqual",
    ()=>constantTimeEqual,
    "hashPassword",
    ()=>hashPassword,
    "hashToBase64",
    ()=>hashToBase64,
    "signJWT",
    ()=>signJWT,
    "symmetricDecrypt",
    ()=>symmetricDecrypt,
    "symmetricEncrypt",
    ()=>symmetricEncrypt,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+ciphers@2.0.1/node_modules/@noble/ciphers/chacha.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+ciphers@2.0.1/node_modules/@noble/ciphers/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$0$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.0/node_modules/jose/dist/webapi/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$scrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/scrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hex.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DdzSJf-n.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B4Qoxdgc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.B4Qoxdgc.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
async function signJWT(payload, secret, expiresIn = 3600) {
    const jwt = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$0$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1e3) + expiresIn).sign(new TextEncoder().encode(secret));
    return jwt;
}
function constantTimeEqual(a, b) {
    const aBuffer = new Uint8Array(a);
    const bBuffer = new Uint8Array(b);
    let c = aBuffer.length ^ bBuffer.length;
    const length = Math.max(aBuffer.length, bBuffer.length);
    for(let i = 0; i < length; i++){
        c |= (i < aBuffer.length ? aBuffer[i] : 0) ^ (i < bBuffer.length ? bBuffer[i] : 0);
    }
    return c === 0;
}
async function hashToBase64(data) {
    const buffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(data);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64"].encode(buffer);
}
async function compareHash(data, hash) {
    const buffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(typeof data === "string" ? new TextEncoder().encode(data) : data);
    const hashBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64"].decode(hash);
    return constantTimeEqual(buffer, hashBuffer);
}
const config = {
    N: 16384,
    r: 16,
    p: 1,
    dkLen: 64
};
async function generateKey(password, salt) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$scrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scryptAsync"])(password.normalize("NFKC"), salt, {
        N: config.N,
        p: config.p,
        r: config.r,
        dkLen: config.dkLen,
        maxmem: 128 * config.N * config.r * 2
    });
}
const hashPassword = async (password)=>{
    const salt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hex"].encode(crypto.getRandomValues(new Uint8Array(16)));
    const key = await generateKey(password, salt);
    return `${salt}:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hex"].encode(key)}`;
};
const verifyPassword = async ({ hash, password })=>{
    const [salt, key] = hash.split(":");
    if (!salt || !key) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"]("Invalid password hash");
    }
    const targetKey = await generateKey(password, salt);
    return constantTimeEqual(targetKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToBytes"])(key));
};
const symmetricEncrypt = async ({ key, data })=>{
    const keyAsBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(key);
    const dataAsBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["utf8ToBytes"])(data);
    const chacha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["managedNonce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["xchacha20poly1305"])(new Uint8Array(keyAsBytes));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])(chacha.encrypt(dataAsBytes));
};
const symmetricDecrypt = async ({ key, data })=>{
    const keyAsBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(key);
    const dataAsBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToBytes"])(data);
    const chacha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["managedNonce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["xchacha20poly1305"])(new Uint8Array(keyAsBytes));
    return new TextDecoder().decode(chacha.decrypt(dataAsBytes));
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/api/index.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEndpointConflicts",
    ()=>checkEndpointConflicts,
    "getEndpoints",
    ()=>getEndpoints,
    "router",
    ()=>router,
    "signUpEmail",
    ()=>signUpEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.0.19/node_modules/better-call/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.C3-_8m-g.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.C5vDERgF.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/schemas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DiMXeqeq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DiMXeqeq.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CiuwFiHM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.CiuwFiHM.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$27$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.27/node_modules/@better-auth/core/dist/db/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BLnvK9hk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BLnvK9hk.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DgGir396$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DgGir396.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hex.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B4Qoxdgc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.B4Qoxdgc.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BTrSrKsi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BTrSrKsi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BQOp$2d$6ij$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BQOp-6ij.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CW6D9eSx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.CW6D9eSx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/crypto/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DdzSJf-n.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-fetch+fetch@1.1.18/node_modules/@better-fetch/fetch/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BRFtaovt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BRFtaovt.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BUPPRXfK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BUPPRXfK.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hmac.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/binary.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$D2xndZ2p$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.D2xndZ2p.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const signUpEmail = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])("/sign-up/email", {
        method: "POST",
        body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["record"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["any"]()),
        metadata: {
            $Infer: {
                body: {}
            },
            openapi: {
                description: "Sign up a user using email and password",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name of the user"
                                    },
                                    email: {
                                        type: "string",
                                        description: "The email of the user"
                                    },
                                    password: {
                                        type: "string",
                                        description: "The password of the user"
                                    },
                                    image: {
                                        type: "string",
                                        description: "The profile image URL of the user"
                                    },
                                    callbackURL: {
                                        type: "string",
                                        description: "The URL to use for email verification callback"
                                    },
                                    rememberMe: {
                                        type: "boolean",
                                        description: "If this is false, the session will not be remembered. Default is `true`."
                                    }
                                },
                                required: [
                                    "name",
                                    "email",
                                    "password"
                                ]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Successfully created user",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string",
                                            nullable: true,
                                            description: "Authentication token for the session"
                                        },
                                        user: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "string",
                                                    description: "The unique identifier of the user"
                                                },
                                                email: {
                                                    type: "string",
                                                    format: "email",
                                                    description: "The email address of the user"
                                                },
                                                name: {
                                                    type: "string",
                                                    description: "The name of the user"
                                                },
                                                image: {
                                                    type: "string",
                                                    format: "uri",
                                                    nullable: true,
                                                    description: "The profile image URL of the user"
                                                },
                                                emailVerified: {
                                                    type: "boolean",
                                                    description: "Whether the email has been verified"
                                                },
                                                createdAt: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "When the user was created"
                                                },
                                                updatedAt: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "When the user was last updated"
                                                }
                                            },
                                            required: [
                                                "id",
                                                "email",
                                                "name",
                                                "emailVerified",
                                                "createdAt",
                                                "updatedAt"
                                            ]
                                        }
                                    },
                                    required: [
                                        "user"
                                    ]
                                }
                            }
                        }
                    },
                    "422": {
                        description: "Unprocessable Entity. User already exists or failed to create user.",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        if (!ctx.context.options.emailAndPassword?.enabled || ctx.context.options.emailAndPassword?.disableSignUp) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: "Email and password sign up is not enabled"
            });
        }
        const body = ctx.body;
        const { name, email, password, image, callbackURL, rememberMe, ...rest } = body;
        const isValidEmail = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["email"]().safeParse(email);
        if (!isValidEmail.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"].INVALID_EMAIL
            });
        }
        const minPasswordLength = ctx.context.password.config.minPasswordLength;
        if (password.length < minPasswordLength) {
            ctx.context.logger.error("Password is too short");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"].PASSWORD_TOO_SHORT
            });
        }
        const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
        if (password.length > maxPasswordLength) {
            ctx.context.logger.error("Password is too long");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"].PASSWORD_TOO_LONG
            });
        }
        const dbUser = await ctx.context.internalAdapter.findUserByEmail(email);
        if (dbUser?.user) {
            ctx.context.logger.info(`Sign-up attempt for existing email: ${email}`);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"].USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL
            });
        }
        const hash = await ctx.context.password.hash(password);
        let createdUser;
        try {
            const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BLnvK9hk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["d"])(ctx.context.options, rest, "create");
            createdUser = await ctx.context.internalAdapter.createUser({
                email: email.toLowerCase(),
                name,
                image,
                ...data,
                emailVerified: false
            }, ctx);
            if (!createdUser) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"].FAILED_TO_CREATE_USER
                });
            }
        } catch (e) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CiuwFiHM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"]) {
                ctx.context.logger.error("Failed to create user", e);
            }
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]) {
                throw e;
            }
            ctx.context.logger?.error("Failed to create user", e);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"].FAILED_TO_CREATE_USER,
                details: e
            });
        }
        if (!createdUser) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"].FAILED_TO_CREATE_USER
            });
        }
        await ctx.context.internalAdapter.linkAccount({
            userId: createdUser.id,
            providerId: "credential",
            accountId: createdUser.id,
            password: hash
        }, ctx);
        if (ctx.context.options.emailVerification?.sendOnSignUp || ctx.context.options.emailAndPassword.requireEmailVerification) {
            const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"])(ctx.context.secret, createdUser.email, void 0, ctx.context.options.emailVerification?.expiresIn);
            const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${body.callbackURL || "/"}`;
            const args = ctx.request ? [
                {
                    user: createdUser,
                    url,
                    token
                },
                ctx.request
            ] : [
                {
                    user: createdUser,
                    url,
                    token
                }
            ];
            await ctx.context.options.emailVerification?.sendVerificationEmail?.(...args);
        }
        if (ctx.context.options.emailAndPassword.autoSignIn === false || ctx.context.options.emailAndPassword.requireEmailVerification) {
            return ctx.json({
                token: null,
                user: {
                    id: createdUser.id,
                    email: createdUser.email,
                    name: createdUser.name,
                    image: createdUser.image,
                    emailVerified: createdUser.emailVerified,
                    createdAt: createdUser.createdAt,
                    updatedAt: createdUser.updatedAt
                }
            });
        }
        const session = await ctx.context.internalAdapter.createSession(createdUser.id, ctx, rememberMe === false);
        if (!session) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"].FAILED_TO_CREATE_SESSION
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DiMXeqeq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(ctx, {
            session,
            user: createdUser
        }, rememberMe === false);
        return ctx.json({
            token: session.token,
            user: {
                id: createdUser.id,
                email: createdUser.email,
                name: createdUser.name,
                image: createdUser.image,
                emailVerified: createdUser.emailVerified,
                createdAt: createdUser.createdAt,
                updatedAt: createdUser.updatedAt
            }
        });
    });
function shouldRateLimit(max, window, rateLimitData) {
    const now = Date.now();
    const windowInMs = window * 1e3;
    const timeSinceLastRequest = now - rateLimitData.lastRequest;
    return timeSinceLastRequest < windowInMs && rateLimitData.count >= max;
}
function rateLimitResponse(retryAfter) {
    return new Response(JSON.stringify({
        message: "Too many requests. Please try again later."
    }), {
        status: 429,
        statusText: "Too Many Requests",
        headers: {
            "X-Retry-After": retryAfter.toString()
        }
    });
}
function getRetryAfter(lastRequest, window) {
    const now = Date.now();
    const windowInMs = window * 1e3;
    return Math.ceil((lastRequest + windowInMs - now) / 1e3);
}
function createDBStorage(ctx) {
    const model = "rateLimit";
    const db = ctx.adapter;
    return {
        get: async (key)=>{
            const res = await db.findMany({
                model,
                where: [
                    {
                        field: "key",
                        value: key
                    }
                ]
            });
            const data = res[0];
            if (typeof data?.lastRequest === "bigint") {
                data.lastRequest = Number(data.lastRequest);
            }
            return data;
        },
        set: async (key, value, _update)=>{
            try {
                if (_update) {
                    await db.updateMany({
                        model,
                        where: [
                            {
                                field: "key",
                                value: key
                            }
                        ],
                        update: {
                            count: value.count,
                            lastRequest: value.lastRequest
                        }
                    });
                } else {
                    await db.create({
                        model,
                        data: {
                            key,
                            count: value.count,
                            lastRequest: value.lastRequest
                        }
                    });
                }
            } catch (e) {
                ctx.logger.error("Error setting rate limit", e);
            }
        }
    };
}
const memory = /* @__PURE__ */ new Map();
function getRateLimitStorage(ctx, rateLimitSettings) {
    if (ctx.options.rateLimit?.customStorage) {
        return ctx.options.rateLimit.customStorage;
    }
    const storage = ctx.rateLimit.storage;
    if (storage === "secondary-storage") {
        return {
            get: async (key)=>{
                const data = await ctx.options.secondaryStorage?.get(key);
                return data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BTrSrKsi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(data) : void 0;
            },
            set: async (key, value, _update)=>{
                const ttl = rateLimitSettings?.window ?? ctx.options.rateLimit?.window ?? 10;
                await ctx.options.secondaryStorage?.set?.(key, JSON.stringify(value), ttl);
            }
        };
    } else if (storage === "memory") {
        return {
            async get (key) {
                return memory.get(key);
            },
            async set (key, value, _update) {
                memory.set(key, value);
            }
        };
    }
    return createDBStorage(ctx);
}
async function onRequestRateLimit(req, ctx) {
    if (!ctx.rateLimit.enabled) {
        return;
    }
    const path = new URL(req.url).pathname.replace(ctx.options.basePath || "/api/auth", "");
    let window = ctx.rateLimit.window;
    let max = ctx.rateLimit.max;
    const ip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BQOp$2d$6ij$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["g"])(req, ctx.options);
    if (!ip) {
        return;
    }
    const key = ip + path;
    const specialRules = getDefaultSpecialRules();
    const specialRule = specialRules.find((rule)=>rule.pathMatcher(path));
    if (specialRule) {
        window = specialRule.window;
        max = specialRule.max;
    }
    for (const plugin of ctx.options.plugins || []){
        if (plugin.rateLimit) {
            const matchedRule = plugin.rateLimit.find((rule)=>rule.pathMatcher(path));
            if (matchedRule) {
                window = matchedRule.window;
                max = matchedRule.max;
                break;
            }
        }
    }
    if (ctx.rateLimit.customRules) {
        const _path = Object.keys(ctx.rateLimit.customRules).find((p)=>{
            if (p.includes("*")) {
                const isMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["w"])(p)(path);
                return isMatch;
            }
            return p === path;
        });
        if (_path) {
            const customRule = ctx.rateLimit.customRules[_path];
            const resolved = typeof customRule === "function" ? await customRule(req) : customRule;
            if (resolved) {
                window = resolved.window;
                max = resolved.max;
            }
            if (resolved === false) {
                return;
            }
        }
    }
    const storage = getRateLimitStorage(ctx, {
        window
    });
    const data = await storage.get(key);
    const now = Date.now();
    if (!data) {
        await storage.set(key, {
            key,
            count: 1,
            lastRequest: now
        });
    } else {
        const timeSinceLastRequest = now - data.lastRequest;
        if (shouldRateLimit(max, window, data)) {
            const retryAfter = getRetryAfter(data.lastRequest, window);
            return rateLimitResponse(retryAfter);
        } else if (timeSinceLastRequest > window * 1e3) {
            await storage.set(key, {
                ...data,
                count: 1,
                lastRequest: now
            }, true);
        } else {
            await storage.set(key, {
                ...data,
                count: data.count + 1,
                lastRequest: now
            }, true);
        }
    }
}
function getDefaultSpecialRules() {
    const specialRules = [
        {
            pathMatcher (path) {
                return path.startsWith("/sign-in") || path.startsWith("/sign-up") || path.startsWith("/change-password") || path.startsWith("/change-email");
            },
            window: 10,
            max: 3
        }
    ];
    return specialRules;
}
function checkEndpointConflicts(options, logger2) {
    const endpointRegistry = /* @__PURE__ */ new Map();
    options.plugins?.forEach((plugin)=>{
        if (plugin.endpoints) {
            for (const [key, endpoint] of Object.entries(plugin.endpoints)){
                if (endpoint && "path" in endpoint) {
                    const path = endpoint.path;
                    let methods = [];
                    if (endpoint.options && "method" in endpoint.options) {
                        if (Array.isArray(endpoint.options.method)) {
                            methods = endpoint.options.method;
                        } else if (typeof endpoint.options.method === "string") {
                            methods = [
                                endpoint.options.method
                            ];
                        }
                    }
                    if (methods.length === 0) {
                        methods = [
                            "*"
                        ];
                    }
                    if (!endpointRegistry.has(path)) {
                        endpointRegistry.set(path, []);
                    }
                    endpointRegistry.get(path).push({
                        pluginId: plugin.id,
                        endpointKey: key,
                        methods
                    });
                }
            }
        }
    });
    const conflicts = [];
    for (const [path, entries] of endpointRegistry.entries()){
        if (entries.length > 1) {
            const methodMap = /* @__PURE__ */ new Map();
            let hasConflict = false;
            for (const entry of entries){
                for (const method of entry.methods){
                    if (!methodMap.has(method)) {
                        methodMap.set(method, []);
                    }
                    methodMap.get(method).push(entry.pluginId);
                    if (methodMap.get(method).length > 1) {
                        hasConflict = true;
                    }
                    if (method === "*" && entries.length > 1) {
                        hasConflict = true;
                    } else if (method !== "*" && methodMap.has("*")) {
                        hasConflict = true;
                    }
                }
            }
            if (hasConflict) {
                const uniquePlugins = [
                    ...new Set(entries.map((e)=>e.pluginId))
                ];
                const conflictingMethods = [];
                for (const [method, plugins] of methodMap.entries()){
                    if (plugins.length > 1 || method === "*" && entries.length > 1 || method !== "*" && methodMap.has("*")) {
                        conflictingMethods.push(method);
                    }
                }
                conflicts.push({
                    path,
                    plugins: uniquePlugins,
                    conflictingMethods
                });
            }
        }
    }
    if (conflicts.length > 0) {
        const conflictMessages = conflicts.map((conflict)=>`  - "${conflict.path}" [${conflict.conflictingMethods.join(", ")}] used by plugins: ${conflict.plugins.join(", ")}`).join("\n");
        logger2.error(`Endpoint path conflicts detected! Multiple plugins are trying to use the same endpoint paths with conflicting HTTP methods:
${conflictMessages}

To resolve this, you can:
	1. Use only one of the conflicting plugins
	2. Configure the plugins to use different paths (if supported)
	3. Ensure plugins use different HTTP methods for the same path
`);
    }
}
function getEndpoints(ctx, options) {
    const pluginEndpoints = options.plugins?.reduce((acc, plugin)=>{
        return {
            ...acc,
            ...plugin.endpoints
        };
    }, {}) ?? {};
    const middlewares = options.plugins?.map((plugin)=>plugin.middlewares?.map((m)=>{
            const middleware = async (context)=>{
                const authContext = await ctx;
                return m.middleware({
                    ...context,
                    context: {
                        ...authContext,
                        ...context.context
                    }
                });
            };
            middleware.options = m.middleware.options;
            return {
                path: m.path,
                middleware
            };
        })).filter((plugin)=>plugin !== void 0).flat() || [];
    const baseEndpoints = {
        signInSocial: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["S"],
        callbackOAuth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["R"],
        getSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["b"])(),
        signOut: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Q"],
        signUpEmail: signUpEmail(),
        signInEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["P"],
        forgetPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["O"],
        resetPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["N"],
        verifyEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["M"],
        sendVerificationEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["L"],
        changeEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["K"],
        changePassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["J"],
        setPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I"],
        updateUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])(),
        deleteUser: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["G"],
        forgetPasswordCallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["F"],
        requestPasswordReset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["E"],
        requestPasswordResetCallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["D"],
        listSessions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(),
        revokeSession: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["e"],
        revokeSessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["d"],
        revokeOtherSessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"],
        linkSocialAccount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"],
        listUserAccounts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"],
        deleteUserCallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["A"],
        unlinkAccount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"],
        refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["y"],
        getAccessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["x"],
        accountInfo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"]
    };
    const endpoints = {
        ...baseEndpoints,
        ...pluginEndpoints,
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"],
        error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"]
    };
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(endpoints, ctx);
    return {
        api,
        middlewares
    };
}
const router = (ctx, options)=>{
    const { api, middlewares } = getEndpoints(ctx, options);
    const basePath = new URL(ctx.baseURL).pathname;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRouter"])(api, {
        routerContext: ctx,
        openapi: {
            disabled: true
        },
        basePath,
        routerMiddleware: [
            {
                path: "/**",
                middleware: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
            },
            ...middlewares
        ],
        async onRequest (req) {
            const disabledPaths = ctx.options.disabledPaths || [];
            const path = new URL(req.url).pathname.replace(basePath, "");
            if (disabledPaths.includes(path)) {
                return new Response("Not Found", {
                    status: 404
                });
            }
            for (const plugin of ctx.options.plugins || []){
                if (plugin.onRequest) {
                    const response = await plugin.onRequest(req, ctx);
                    if (response && "response" in response) {
                        return response.response;
                    }
                }
            }
            return onRequestRateLimit(req, ctx);
        },
        async onResponse (res) {
            for (const plugin of ctx.options.plugins || []){
                if (plugin.onResponse) {
                    const response = await plugin.onResponse(res, ctx);
                    if (response) {
                        return response.response;
                    }
                }
            }
            return res;
        },
        onError (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] && e.status === "FOUND") {
                return;
            }
            if (options.onAPIError?.throw) {
                throw e;
            }
            if (options.onAPIError?.onError) {
                options.onAPIError.onError(e, ctx);
                return;
            }
            const optLogLevel = options.logger?.level;
            const log = optLogLevel === "error" || optLogLevel === "warn" || optLogLevel === "debug" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DgGir396$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"] : void 0;
            if (options.logger?.disabled !== true) {
                if (e && typeof e === "object" && "message" in e && typeof e.message === "string") {
                    if (e.message.includes("no column") || e.message.includes("column") || e.message.includes("relation") || e.message.includes("table") || e.message.includes("does not exist")) {
                        ctx.logger?.error(e.message);
                        return;
                    }
                }
                if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]) {
                    if (e.status === "INTERNAL_SERVER_ERROR") {
                        ctx.logger.error(e.status, e);
                    }
                    log?.error(e.message);
                } else {
                    ctx.logger?.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
                }
            }
        }
    });
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/index.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$mPTDVpKF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.mPTDVpKF.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DdzSJf-n.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$D$2d$2CmEwz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.D-2CmEwz.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C3$2d$_8m$2d$g$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.C3-_8m-g.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BUPPRXfK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BUPPRXfK.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DgGir396$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DgGir396.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.0.19/node_modules/better-call/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$C5vDERgF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.C5vDERgF.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CiuwFiHM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.CiuwFiHM.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hmac.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/binary.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$27$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.27/node_modules/@better-auth/core/dist/db/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/api/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DiMXeqeq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DiMXeqeq.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CW6D9eSx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.CW6D9eSx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BTrSrKsi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BTrSrKsi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BRFtaovt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BRFtaovt.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BLnvK9hk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BLnvK9hk.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hex.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B4Qoxdgc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.B4Qoxdgc.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BQOp$2d$6ij$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BQOp-6ij.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/crypto/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$D$2d$L3RQ6y$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.D-L3RQ6y.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DhziC0ap$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DhziC0ap.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BAk2ZmIN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BAk2ZmIN.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BvvYEWCP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BvvYEWCP.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$QSZgH9k6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.QSZgH9k6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$YwDQhoPc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.YwDQhoPc.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-fetch+fetch@1.1.18/node_modules/@better-fetch/fetch/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$D2xndZ2p$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.D2xndZ2p.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drizzleAdapter",
    ()=>drizzleAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$functions$2f$aggregate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.44.6_@opentelemetry+api@1.9.0_@types+pg@8.15.5_kysely@0.28.7_pg@8.16.3_postgres@3.4.7/node_modules/drizzle-orm/sql/functions/aggregate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.44.6_@opentelemetry+api@1.9.0_@types+pg@8.15.5_kysely@0.28.7_pg@8.16.3_postgres@3.4.7/node_modules/drizzle-orm/sql/expressions/select.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.44.6_@opentelemetry+api@1.9.0_@types+pg@8.15.5_kysely@0.28.7_pg@8.16.3_postgres@3.4.7/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.44.6_@opentelemetry+api@1.9.0_@types+pg@8.15.5_kysely@0.28.7_pg@8.16.3_postgres@3.4.7/node_modules/drizzle-orm/sql/sql.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DdzSJf-n.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BvvYEWCP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BvvYEWCP.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BTrSrKsi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BTrSrKsi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DgGir396$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DgGir396.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CiuwFiHM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.CiuwFiHM.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DhziC0ap$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.DhziC0ap.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BUPPRXfK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.BUPPRXfK.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.0.19/node_modules/better-call/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hex.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B4Qoxdgc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.27_next@15.5.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0___ed7dd2f5da0a3d3042fc65fe0fb08700/node_modules/better-auth/dist/shared/better-auth.B4Qoxdgc.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const drizzleAdapter = (db, config)=>{
    let lazyOptions = null;
    const createCustomAdapter = (db2)=>({ getFieldName, debugLog })=>{
            function getSchema(model) {
                const schema = config.schema || db2._.fullSchema;
                if (!schema) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"]("Drizzle adapter failed to initialize. Schema not found. Please provide a schema object in the adapter options object.");
                }
                const schemaModel = schema[model];
                if (!schemaModel) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"](`[# Drizzle Adapter]: The model "${model}" was not found in the schema object. Please pass the schema directly to the adapter options.`);
                }
                return schemaModel;
            }
            const withReturning = async (model, builder, data, where)=>{
                if (config.provider !== "mysql") {
                    const c = await builder.returning();
                    return c[0];
                }
                await builder.execute();
                const schemaModel = getSchema(model);
                const builderVal = builder.config?.values;
                if (where?.length) {
                    const updatedWhere = where.map((w)=>{
                        if (data[w.field] !== void 0) {
                            return {
                                ...w,
                                value: data[w.field]
                            };
                        }
                        return w;
                    });
                    const clause = convertWhereClause(updatedWhere, model);
                    const res = await db2.select().from(schemaModel).where(...clause);
                    return res[0];
                } else if (builderVal && builderVal[0]?.id?.value) {
                    let tId = builderVal[0]?.id?.value;
                    if (!tId) {
                        const lastInsertId = await db2.select({
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`LAST_INSERT_ID()`
                        }).from(schemaModel).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"])(schemaModel.id)).limit(1);
                        tId = lastInsertId[0].id;
                    }
                    const res = await db2.select().from(schemaModel).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(schemaModel.id, tId)).limit(1).execute();
                    return res[0];
                } else if (data.id) {
                    const res = await db2.select().from(schemaModel).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(schemaModel.id, data.id)).limit(1).execute();
                    return res[0];
                } else {
                    if (!("id" in schemaModel)) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"](`The model "${model}" does not have an "id" field. Please use the "id" field as your primary key.`);
                    }
                    const res = await db2.select().from(schemaModel).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"])(schemaModel.id)).limit(1).execute();
                    return res[0];
                }
            };
            function convertWhereClause(where, model) {
                const schemaModel = getSchema(model);
                if (!where) return [];
                if (where.length === 1) {
                    const w = where[0];
                    if (!w) {
                        return [];
                    }
                    const field = getFieldName({
                        model,
                        field: w.field
                    });
                    if (!schemaModel[field]) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"](`The field "${w.field}" does not exist in the schema for the model "${model}". Please update your schema.`);
                    }
                    if (w.operator === "in") {
                        if (!Array.isArray(w.value)) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"](`The value for the field "${w.field}" must be an array when using the "in" operator.`);
                        }
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inArray"])(schemaModel[field], w.value)
                        ];
                    }
                    if (w.operator === "not_in") {
                        if (!Array.isArray(w.value)) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"](`The value for the field "${w.field}" must be an array when using the "not_in" operator.`);
                        }
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notInArray"])(schemaModel[field], w.value)
                        ];
                    }
                    if (w.operator === "contains") {
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["like"])(schemaModel[field], `%${w.value}%`)
                        ];
                    }
                    if (w.operator === "starts_with") {
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["like"])(schemaModel[field], `${w.value}%`)
                        ];
                    }
                    if (w.operator === "ends_with") {
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["like"])(schemaModel[field], `%${w.value}`)
                        ];
                    }
                    if (w.operator === "lt") {
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lt"])(schemaModel[field], w.value)
                        ];
                    }
                    if (w.operator === "lte") {
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lte"])(schemaModel[field], w.value)
                        ];
                    }
                    if (w.operator === "ne") {
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ne"])(schemaModel[field], w.value)
                        ];
                    }
                    if (w.operator === "gt") {
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gt"])(schemaModel[field], w.value)
                        ];
                    }
                    if (w.operator === "gte") {
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gte"])(schemaModel[field], w.value)
                        ];
                    }
                    return [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(schemaModel[field], w.value)
                    ];
                }
                const andGroup = where.filter((w)=>w.connector === "AND" || !w.connector);
                const orGroup = where.filter((w)=>w.connector === "OR");
                const andClause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...andGroup.map((w)=>{
                    const field = getFieldName({
                        model,
                        field: w.field
                    });
                    if (w.operator === "in") {
                        if (!Array.isArray(w.value)) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"](`The value for the field "${w.field}" must be an array when using the "in" operator.`);
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inArray"])(schemaModel[field], w.value);
                    }
                    if (w.operator === "not_in") {
                        if (!Array.isArray(w.value)) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"](`The value for the field "${w.field}" must be an array when using the "not_in" operator.`);
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notInArray"])(schemaModel[field], w.value);
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(schemaModel[field], w.value);
                }));
                const orClause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["or"])(...orGroup.map((w)=>{
                    const field = getFieldName({
                        model,
                        field: w.field
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(schemaModel[field], w.value);
                }));
                const clause = [];
                if (andGroup.length) clause.push(andClause);
                if (orGroup.length) clause.push(orClause);
                return clause;
            }
            function checkMissingFields(schema, model, values) {
                if (!schema) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"]("Drizzle adapter failed to initialize. Schema not found. Please provide a schema object in the adapter options object.");
                }
                for(const key in values){
                    if (!schema[key]) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DdzSJf$2d$n$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"](`The field "${key}" does not exist in the "${model}" schema. Please update your drizzle schema or re-generate using "npx @better-auth/cli generate".`);
                    }
                }
            }
            return {
                async create ({ model, data: values }) {
                    const schemaModel = getSchema(model);
                    checkMissingFields(schemaModel, model, values);
                    const builder = db2.insert(schemaModel).values(values);
                    const returned = await withReturning(model, builder, values);
                    return returned;
                },
                async findOne ({ model, where }) {
                    const schemaModel = getSchema(model);
                    const clause = convertWhereClause(where, model);
                    const res = await db2.select().from(schemaModel).where(...clause);
                    if (!res.length) return null;
                    return res[0];
                },
                async findMany ({ model, where, sortBy, limit, offset }) {
                    const schemaModel = getSchema(model);
                    const clause = where ? convertWhereClause(where, model) : [];
                    const sortFn = sortBy?.direction === "desc" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asc"];
                    const builder = db2.select().from(schemaModel).limit(limit || 100).offset(offset || 0);
                    if (sortBy?.field) {
                        builder.orderBy(sortFn(schemaModel[getFieldName({
                            model,
                            field: sortBy?.field
                        })]));
                    }
                    return await builder.where(...clause);
                },
                async count ({ model, where }) {
                    const schemaModel = getSchema(model);
                    const clause = where ? convertWhereClause(where, model) : [];
                    const res = await db2.select({
                        count: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$15$2e$5_kysely$40$0$2e$28$2e$7_pg$40$8$2e$16$2e$3_postgres$40$3$2e$4$2e$7$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$functions$2f$aggregate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["count"])()
                    }).from(schemaModel).where(...clause);
                    return res[0].count;
                },
                async update ({ model, where, update: values }) {
                    const schemaModel = getSchema(model);
                    const clause = convertWhereClause(where, model);
                    const builder = db2.update(schemaModel).set(values).where(...clause);
                    return await withReturning(model, builder, values, where);
                },
                async updateMany ({ model, where, update: values }) {
                    const schemaModel = getSchema(model);
                    const clause = convertWhereClause(where, model);
                    const builder = db2.update(schemaModel).set(values).where(...clause);
                    return await builder;
                },
                async delete ({ model, where }) {
                    const schemaModel = getSchema(model);
                    const clause = convertWhereClause(where, model);
                    const builder = db2.delete(schemaModel).where(...clause);
                    return await builder;
                },
                async deleteMany ({ model, where }) {
                    const schemaModel = getSchema(model);
                    const clause = convertWhereClause(where, model);
                    const builder = db2.delete(schemaModel).where(...clause);
                    return await builder;
                },
                options: config
            };
        };
    let adapterOptions = null;
    adapterOptions = {
        config: {
            adapterId: "drizzle",
            adapterName: "Drizzle Adapter",
            usePlural: config.usePlural ?? false,
            debugLogs: config.debugLogs ?? false,
            transaction: config.transaction ?? false ? (cb)=>db.transaction((tx)=>{
                    const adapter2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BvvYEWCP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])({
                        config: adapterOptions.config,
                        adapter: createCustomAdapter(tx)
                    })(lazyOptions);
                    return cb(adapter2);
                }) : false
        },
        adapter: createCustomAdapter(db)
    };
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$27_next$40$15$2e$5$2e$4_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$_ed7dd2f5da0a3d3042fc65fe0fb08700$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BvvYEWCP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(adapterOptions);
    return (options)=>{
        lazyOptions = options;
        return adapter(options);
    };
};
;
}),
];

//# sourceMappingURL=7c34f_better-auth_dist_10a20bbc._.js.map
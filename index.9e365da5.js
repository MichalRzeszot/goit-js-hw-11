!function(){function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n),(0,n.register)("eWrZJ",function(t,r){e(t.exports,"fetchBreeds",function(){return o}),e(t.exports,"fetchCatByBreed",function(){return i});var a=n("dIxxU");a.default.defaults.headers.common["x-api-key"]="live_bKos22lfkR2KSSZCf3f2DRAz4y5lV6qNZLWGaBuRF1JVl4O1USEmGeRbOIZNpqZK";let o=async()=>{try{return(await (0,a.default).get("https://api.thecatapi.com/v1/breeds")).data}catch(e){throw e}},i=async e=>{try{return(await (0,a.default).get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`)).data}catch(e){throw e}}}),n("eWrZJ")}();
//# sourceMappingURL=index.9e365da5.js.map

/*

const path = require("path");
const fs = require("fs");
const vm = require('vm');

// 載入動態模組
let jsencrypt = path.resolve("libs", "jsencrypt.js");
let content = fs.readFileSync(jsencrypt, { encoding: "utf-8" });
vm.runInThisContext(content);

var crypt = new JSEncrypt({ default_key_size: 128 });
crypt.getKey();
console.log(crypt.getPrivateKey()) ;

*/

require('ts-node/register');
require('./src/main');

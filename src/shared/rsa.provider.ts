const base64url = require("base64-url") ;

// private _publicKey: string = `-----BEGIN PUBLIC KEY-----
// MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAd5xX0daiZmRkh+cOLjYAfc90F4d5jrBV
// +iQZ0mxxWvUE0sJ5oIXf+LuaV3+b992L1Lr4vor4xDInSa0Qojy9FQIDAQAB
// -----END PUBLIC KEY-----` ;

const rsaKey: string = `-----BEGIN RSA PRIVATE KEY-----
MIIBOwIBAAJBALAbJ4Sw2bwd1hn5O6N8EJmtKs1pUlI9kADSmuAIkdpo62wT1PZt
VQn1Iqjau3fD1auAICeF4uxRvIEUzjf+7RkCAwEAAQJBAIUcsV1B1AK2RrwxQFwN
jfqrAtxrDLdvIycMCdbng1+jhd/y5SefvPUcJAL+kHKWUkhHqZiOUIJKRTYZG5VW
ttECIQDsa4iqy46Bd10zQb4BoySJWEjDua5JJyLYQJ/dE/ZszQIhAL6w3zrLgN3f
eaP80mzlW2IEQHENh4ObfCIIFY4rOwF9AiBlA+VXJLZ09u1pkzN+O5jG3mPozRN8
yi4HPEWSDo+CGQIhAKIJV9b1IC7o+8seRYylJI7YgA3Q6ksp70RXzEE/eOddAiB4
BmXvcP2sqYdJYnXT6lD9we2AHhRFaTLXggyihne/zw==
-----END RSA PRIVATE KEY-----` ;

// https://github.com/travist/jsencrypt/issues/56#issuecomment-327723892
const NodeRSA = require('node-rsa');
const rsa = new NodeRSA(rsaKey);
rsa.setOptions({ encryptionScheme: 'pkcs1' }); // must set it
export function RSADecryptProvider(data: string, isJSON : boolean = true )
{
    var res: string;
    try
    {
        res = <string>rsa.decrypt(base64url.unescape(data), 'utf8') ;
        if(isJSON) res = JSON.parse(res);
    }
    catch (e)
    {
        res = "";
    }
    return res;
}

export function RSAEncryptProvider(data: string)
{
    var res: string;
    try
    {
        res = base64url.escape( rsa.encrypt(data, 'base64') );
    }
    catch (e)
    {
        res = "";
    }
    return res;
}
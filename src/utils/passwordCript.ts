import crypto from 'crypto';

export function encriptPass(password: string) {
    return crypto.createHash('md5').update(crypto.createHash('md5').update(password).digest("hex")).digest("base64");
}

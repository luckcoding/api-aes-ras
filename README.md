# 前后端AES与RSA混合加密

> nodejs 不推荐做计算密集型的操作，方法仅供参考！😬😬😬

## Mac 生成公私钥

1. `$ openssl genrsa -out private.pem 1024`生成私钥；
2. `openssl pkcs8 -topk8 -inform PEM -in private.pem -outform PEM -nocrypt`私钥转换成`PKCS8`格式；
3. `openssl rsa -in private.pem -out public.pem -pubout`使用私钥生成公钥。
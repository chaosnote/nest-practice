@echo off
set path=%path%;C:\Program Files\MongoDB\Server\3.4\bin;

REM --port 34001
REM 啟動 mongoDB
mongod --dbpath "Z:\Code\VSCode\Nestjs\nest-practice\db\db-store"
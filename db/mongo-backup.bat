@echo off

REM 指定輸出
REM mongoexport --db test --collection contacts --type=csv --fields name,address --out /opt/backups/contacts.csv

REM 備份資料庫
REM mongodump --archive=test.20171211.gz --gzip --db test
REM mongodump --archive=temp.20171211.gz --gzip --db temp

REM 還原資料庫
REM mongorestore --gzip --archive=test.20171211.gz --db test
REM mongorestore --gzip --archive=temp.20171211.gz --db temp

set path=%path%;C:\Program Files\MongoDB\Server\3.4\bin;
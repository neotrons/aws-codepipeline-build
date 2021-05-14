#!/bin/bash
APPDIR=/home/ubuntu/app/
cd $APPDIR
pm2 start ./bin/process.json
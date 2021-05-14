#!/bin/bash
cd /home/ubuntu/app/
pm2 stop all
pm2 delete all
pm2 stop ./bin/process.json
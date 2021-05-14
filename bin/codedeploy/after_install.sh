#!/bin/bash
APPDIR=/home/ubuntu/app/
SERVERDIR=$APPDIR"server/"
cd $SERVERDIR
npm install
chown ubuntu:ubuntu $APPDIR -R
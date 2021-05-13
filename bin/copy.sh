#/bin/bash

cp -ra ./server/ ./dist/aws-codepipeline-build/
cp -ra ./bin/ ./dist/aws-codepipeline-build/
cp -ra ./aws/appspec.yml ./dist/aws-codepipeline-build/
echo "Archivos copiados"
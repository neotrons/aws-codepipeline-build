const express = require('express');
const path = require('path');
const fs = require('fs');
const rendertron = require('rendertron-middleware');

const app = express();
const rendertronUrl = process.env.RENDERTRON_URL || 'http://52.200.9.140:3000/render';
const distPath = process.env.DIST_PATH || '../dist/aws-codepipeline-build';
const bots = [
  'baiduspider',
  'bingbot',
  'embedly',
  'facebookexternalhit',
  'linkedinbot',
  'outbrain',
  'pinterest',
  'quora link preview',
  'rogerbot',
  'showyoubot',
  'slackbot',
  'twitterbot',
  'vkShare',
  'W3C_Validator',
  'whatsapp',
];

app.use(rendertron.makeMiddleware({
	proxyUrl: rendertronUrl,
	userAgentPattern: new RegExp(bots.join('|'), 'i')
}));
console.log(path.join(__dirname, distPath));
app.use(express.static(path.join(__dirname, distPath)));
app.use('*', express.static(path.join(__dirname, distPath)));

module.exports = app;
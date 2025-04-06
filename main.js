"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var User_js_1 = require("./datapool/User.js");
var Dataprovider_js_1 = require("./datapool/Dataprovider.js");
var fs = require("fs"); // Importe o módulo 'fs'
var userData = JSON.parse(fs.readFileSync('./datapool/User.json', 'utf8'));
var dataProvider = new Dataprovider_js_1.default(userData);
var user = dataProvider.convertToModel(User_js_1.default);
console.log("User:", user);

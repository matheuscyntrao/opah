// main.ts
import User from "./datapool/User.js";
import Dataprovider from "./datapool/Dataprovider.js";
import * as fs from 'fs'; // Importe o módulo 'fs'

const userData = JSON.parse(fs.readFileSync('./datapool/User.json', 'utf8'));

const dataProvider = new Dataprovider(userData);
const user: User = dataProvider.convertToModel<User>(User);

console.log("User:", user);
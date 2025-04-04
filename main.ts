// main.ts
import User from "./datapool/User.js";
import Dataprovider from "./datapool/Dataprovider.js";

const userData = {
  id: 1,
  name: "John Doe",
  usuario: "johndoe",
  password: "password123",
};

const dataProvider = new Dataprovider(userData);
const user: User = dataProvider.convertToModel<User>(User);

console.log("User:", user);
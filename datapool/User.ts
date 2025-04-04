// Users.ts
class User {
  id: number;
  name: string;
  usuario: string;
  password: string;

  constructor(id: number, name: string, usuario: string, password: string) {
      this.id = id;
      this.name = name;
      this.usuario = usuario;
      this.password = password;
  }
}

export default User;
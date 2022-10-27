const AppError = require("../utils/AppError")

const { hash, compare } = require("bcryptjs")

const sqliteConnection = require("../database/sqlite")

class UsersController {
  
 async create(request, response) {
    
  const { name, email, password} = request.body;

  const database = await sqliteConnection();

  const checkUsersEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

  if(checkUsersEmail) {
    throw new AppError("Voce ja tem este email");
  }

  const hashPassword = await hash(password, 8)

  await database.run("INSERT INTO users (name, email, password) VALUES (?,?,?)", [name, email, hashPassword])

  return response.status(201).json();

  }

  async update(request,response) {
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

    if(!user) {
      throw new AppError("Usuario nao encontratado")
    }

    const userUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(userUpdatedEmail && userUpdatedEmail.id !== user.id) {
      throw new AppError("Este email ja existe")
    }
  
    user.name = name ?? user.name
    user.email = email ?? user.email

    if(password && !old_password) {
      throw new AppError("Senha diferente da senha antiga")
    }

    if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if(!checkOldPassword) { 
        throw new AppError("Senha não confere")
      }

      user.password = await hash(password, 8)
    } 

    new Date()

    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, id])

    return response.json();  
  }

  
}

module.exports = UsersController;

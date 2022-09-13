const AppError = require("../utils/AppError")

class UsersController {
  create(request, response) {
    
  const { name, email, password} = request.body

   if(!name) {
    throw new AppError("Voce precisa coloca o nome")
   }
   if(!email) {
    throw new AppError("Voce precisa coloca o email")
   }
    
  response.status(201).json({ name, email, password})
  }

}

module.exports = UsersController
const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router()

function myMiddleware(request, response, next) {
console.log("Voce passou por aqui");

if (!request.body.isAdmin) {
   response.json({ message: "VOCE NAO ESTA AUTORIZADO" });
}
next()
}

const usersController = new UsersController()

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;
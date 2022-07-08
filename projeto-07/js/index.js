import { Router } from './router.js'

const router = new Router()
router.add('/home', "/projeto-07/pages/home.html")
router.add("/universo", "/projeto-07/pages/universo.html")
router.add("/exploracao", "/projeto-07/pages/exploracao.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

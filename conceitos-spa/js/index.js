import { Router } from './router.js'

const router = new Router()
router.add('/', "/conceitos-spa/pages/home.html")
router.add("/about", "/conceitos-spa/pages/about.html")
router.add("/contact", "/conceitos-spa/pages/contact.html")
router.add(404, "/conceitos-spa/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

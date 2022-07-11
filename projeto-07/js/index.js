import { Router } from "./router.js";

const router = new Router();
router.add("/", "projeto-07/pages/home.html");
router.add("/universo", "projeto-07/pages/universo.html");
router.add("/exploracao", "projeto-07/pages/exploracao.html");
router.add(404, "projeto-07/pages/404.html");

router.loadPage();

window.onpopstate = () => router.loadPage();
window.route = () => router.route();
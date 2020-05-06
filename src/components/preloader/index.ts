import "@luvolunov/ts-preloader-controller/styles/index";
import { PreloaderController } from "@luvolunov/ts-preloader-controller";

const preloader = new PreloaderController();

preloader.init({
    hideClass: "hidden",
    auto: true
})
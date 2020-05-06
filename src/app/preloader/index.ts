import "@dev-boost/ts-preloader-controller/styles/index";
import { PreloaderController } from "@dev-boost/ts-preloader-controller";

const preloader = new PreloaderController();

preloader.init({
    hideClass: "hidden",
    auto: true
})

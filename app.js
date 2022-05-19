import { menuController } from "./services/menuController";
import { priceController } from "./services/priceController";

App({
  onLaunch() {
    menuController();
    priceController();
  }
});

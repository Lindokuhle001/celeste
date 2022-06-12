import { menuController } from "./services/menuController";
import { priceController } from "./services/priceController";
import { userController } from "./services/userController";

App({
  onLaunch() {
    const menu = menuController();
    console.log(menu);

    priceController();
    userController();
  }
});

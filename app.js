import { menuController } from "./services/menuController";
import { priceController } from "./services/priceController";
import { userController } from "./services/userController";

App({
  onLaunch() {
    menuController();
    priceController();
    userController();

    console.log(menuController());
    console.log(priceController());
    
  }
});

const url = "http://localhost:3000/pay";

const header = {};

const body = {
  productCode: "CASHIER_PAYMENT",
  salesCode: "51051000101000000011",
  paymentRequestId: "lind1b17161398737179310015310",
  paymentNotifyUrl: "https://www.merchant.com/paymentNotifyxxx",
  paymentRedirectUrl: "https://www.merchant.com/redirectxxx",
  paymentExpiryTime: "2022-07-22T17:49:31+08:00",
  paymentAmount: {
    currency: "ZAR",
    value: "6234"
  },
  order: {
    goods: {
      referenceGoodsId: "goods123",
      goodsUnitAmount: {
        currency: "ZAR",
        value: "6234"
      },
      goodsName: "mobile1"
    },
    env: {
      terminalType: "MINI_APP"
    },
    orderDescription: "Car",
    buyer: {
      referenceBuyerId: "216610000000259832353"
    }
  }
};

const method = "POST";

import {
  HANDLE_CARTS,
  HANDLE_CARTS_DELETE,
  HANDLE_CARTS_QUANTITY,
  HANDLE_PHONE_DETAIL,
} from "./actionType";

const intialState = {
  productDetail: {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./images/phone/vsphone.jpg",
  },

  carts: [],
};

export const phoneReduxReducer = (state = intialState, action) => {
  switch (action.type) {
    case HANDLE_PHONE_DETAIL: {
      let newPhoneDetail = { ...action.payload };

      return { ...state, productDetail: newPhoneDetail };
    }
    case HANDLE_CARTS: {
      // kiểm tra xem sản phẩm đã tồn tại hay chưa

      const newCarts = [...state.carts];

      const index = newCarts.findIndex(
        (item) => item.maSP === action.payload.maSP
      );

      if (index !== -1) {
        newCarts[index].cartsQuantity += 1;
      } else {
        newCarts.push({ ...action.payload, cartsQuantity: 1 });
      }

      return { ...state, carts: newCarts };
    }

    case HANDLE_CARTS_QUANTITY: {
      //C1:
      const newCarts = [...state.carts];

      const index = state.carts.findIndex(
        (item) => item.maSP === action.payload.maSP
      );
      // console.log('index: ', index);

      // item[index].cartsQuantity =
      newCarts[index].cartsQuantity =
        newCarts[index].cartsQuantity + action.payload.quantity || 1;

      return { ...state, carts: newCarts };
    }

    case HANDLE_CARTS_DELETE: {
      const newCarts = state.carts.filter(
        (item) => item.maSP !== action.payload
      );
      return { ...state, carts: newCarts };
    }

    default:
      return state;
  }
};

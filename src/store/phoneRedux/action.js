import {
  HANDLE_CARTS,
  HANDLE_CARTS_DELETE,
  HANDLE_CARTS_QUANTITY,
  HANDLE_PHONE_DETAIL,
} from "./actionType";

export const phoneAction = {
  handlePhoneDetail: (payload) => {
    return {
      type: HANDLE_PHONE_DETAIL,
      payload,
    };
  },
  handleCarts: (payload) => {
    return {
      type: HANDLE_CARTS,
      payload,
    };
  },
  handleCartsQuantity: (payload) => {
    return {
      type: HANDLE_CARTS_QUANTITY,
      payload,
    };
  },

  handleCartsDelete: (payload) => {
    return {
      type: HANDLE_CARTS_DELETE,
      payload
    };
  },
};

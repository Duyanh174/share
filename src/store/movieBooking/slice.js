import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chairBooking: [],
  chairBooked: [],
};

const movieBookingSlice = createSlice({
  name: "movieBooking",
  initialState,
  reducers: {
    // xử lý action
    setChairsBooking: (state, action) => {
      // state.chairBooking.push(action.payload);
      //kiểm tra ghế đã được đặt chưa
      const index = state.chairBooking.findIndex(
        (item) => item.soGhe === action.payload.soGhe
      );
      console.log('index: ', index);
      if (index !== -1) {
        state.chairBooking.splice(index, 1);
      } else {
        state.chairBooking.push(action.payload);
      }
      console.log("index: ", index);
    },

    setChairsBooked: (state, { payload }) => {
      //gán lại mảng của chairbooking cho chairbooked
      state.chairBooked = [...state.chairBooked, ...state.chairBooking];

      state.chairBooking = []
    },
  }, // xử lý đồng bộ

  extraReducers: () => {}, // xử lý bất đồng bộ (call API)
});

export const { reducer: movieBookingReducer, actions: movieBookingActions } =
  movieBookingSlice;

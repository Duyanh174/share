import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";


//------------Sử dung redux cũ-------------
// export const store = createStore(
// rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


//-----------Sử dụng redux mới-------------
export const store = configureStore({
  reducer: rootReducer,
  devTools: true, // extention redux devtools
})

// redux cũ

// redux toolkit => mới

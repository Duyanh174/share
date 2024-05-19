import {combineReducers} from "redux"
import { demoReduxReducer } from "./demoRedux/reducer"
import { testReduxreducer } from "./testReducer/reducer"
import { phoneReduxReducer } from "./phoneRedux/reducer"
import { movieBookingReducer } from "./movieBooking/slice"

export const rootReducer = combineReducers({
    demoRedux : demoReduxReducer,
    testReducer: testReduxreducer,
    phoneReducer : phoneReduxReducer,

    movieBooking : movieBookingReducer,
})

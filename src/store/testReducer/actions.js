import { CHANGE_NAME, CHANGE_NAME_DEFAULT } from "./actionType"

export const testActionsRedux = {
    changeName: (payload) => {
        return {
            type: CHANGE_NAME,
            payload,
        }
    },

    changeNameDefault: (payload) => {
        return {
            type: CHANGE_NAME_DEFAULT,
            payload,
        }
    }
}
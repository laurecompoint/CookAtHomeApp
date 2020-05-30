import { Types } from "../actions"
const initialState = {

    favorierecette: [],

};


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_FAVORIES:
            return {
                ...state,

                favorierecette: action.payload,

            };
        default:
            return state;
    }
};
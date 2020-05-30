import { Types } from "../actions"
const initialState = {

    recettes: [],

};


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_LISTINGS:
            return {
                ...state,

                recettes: action.payload,

            };
        default:
            return state;
    }
};
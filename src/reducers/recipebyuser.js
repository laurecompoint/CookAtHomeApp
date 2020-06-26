import { Types } from "../actions"
const initialState = {

    userrecette: [],

};


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_RECETTEUSER:
            return {
                ...state,

                userrecette: action.payload,

            };

        case Types.LOGOUT:
            return {
                ...state,
                userrecette: [],

            };
        default:
            return state;
    }
};
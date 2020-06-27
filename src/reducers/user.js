import { Types } from "../actions"
const initialState = {
    token: null,



};



export default (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGOUT:
            return {
                ...state,
                token: null,


            };
        case Types.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                email: action.payload.email,
                name: action.payload.name,
            }

        case Types.REGISTER:
            return {
                ...state,
                token: action.payload.token,
                email: action.payload.email,
                name: action.payload.name,
            }



        default:
            return state;
    }
};
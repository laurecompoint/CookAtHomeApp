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
                email: '',
                name: '',


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


        case Types.RESETFILTER:
            return {
                ...state,
                filter: "",
            };
        default:
            return state;
    }
};
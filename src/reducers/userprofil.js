import { Types } from "../actions"
const initialState = {



};
export default (state = initialState, action) => {
    switch (action.type) {


        case Types.USERPROFIL:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
            }
        default:
            return state;
    }
};
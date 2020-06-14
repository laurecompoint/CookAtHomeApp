import { Types } from "../actions"
const initialState = {



};
export default (state = initialState, action) => {
    switch (action.type) {


        case Types.SET_FAVORIEBYRECETTE:
            return {
                ...state,

                favoriebyrecetteid: action.payload,
            }

        default:
            return state;
    }
};
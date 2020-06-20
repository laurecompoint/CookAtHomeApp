import { Types } from "../actions"
const initialState = {

    commentaire: [],

};


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_COMMENTAIRE:
            return {
                ...state,

                commentaire: action.payload,

            };
        default:
            return state;
    }
};
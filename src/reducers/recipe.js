import { Types } from "../actions"
const initialState = {

    recettes: [],
    sort: '',
    filter: ""

};


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.FILTER_RECETTES:
            return {
                ...state,
                filter: action.payload.criteria,
                sort: action.payload.sort,
            }
        case Types.SET_LISTINGS:
            return {
                ...state,

                recettes: action.payload,

            };
        default:
            return state;
    }
};

const sortRecettesbyType = (left, right) => {
    return left.type.toUpperCase().localeCompare(right.type.toUpperCase())
}

const sortRecettesbyTitle = (left, right) => {
    return left.title.toUpperCase().localeCompare(right.title.toUpperCase())
}

export function filterRecettes(state) {
    const { listings } = state
    const { filter, sort } = listings
    const filteredRecettes = listings.recettes.filter((recette) => {
        return recette.title.toUpperCase().indexOf(filter.toUpperCase()) > -1
    })
    switch (sort) {
        case 'type':
            return filteredRecettes.sort(sortRecettesbyType)
        case 'title':
            return filteredRecettes.sort(sortRecettesbyTitle)
        default:
            return filteredRecettes
    }

}
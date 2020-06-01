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

export function filterRecettes(state) {
    const { listings } = state
    const { filter, sort } = listings
    const filteredRecettes = listings.recettes.filter((recette) => {
        return recette.title.toUpperCase().indexOf(filter.toUpperCase()) > -1

    })
    const filteredTypesPlats = listings.recettes.filter((recette) => {
        return recette.type.toUpperCase().indexOf(filter.toUpperCase()) > -1

    })
    const filteredTypesDessert = listings.recettes.filter((recette) => {
        return recette.type.toUpperCase().indexOf(filter.toUpperCase()) > -1

    })
    const filteredTypesApero = listings.recettes.filter((recette) => {
        return recette.type.toUpperCase().indexOf(filter.toUpperCase()) > -1

    })
    const filteredTypesEntree = listings.recettes.filter((recette) => {
        return recette.type.toUpperCase().indexOf(filter.toUpperCase()) > -1

    })
    switch (sort) {
        case 'type-apero':
            return filteredTypesApero
        case 'type-entree':
            return filteredTypesEntree
        case 'type-plats':
            return filteredTypesPlats
        case 'type-dessert':
            return filteredTypesDessert
        default:
            return filteredRecettes
    }

}
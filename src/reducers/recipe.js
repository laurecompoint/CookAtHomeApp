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

        case Types.SET_RECETTES:
            return {
                ...state,

                recettes: action.payload,


            };
        case Types.LOGOUT:
            return {
                ...state,
                sort: '',
                filter: "",
                recettes: [],

            };
        default:
            return state;
    }
};

export function filterRecettes(state) {
    const { recipe } = state
    const { filter, sort } = recipe
    const filteredRecettes = recipe.recettes.filter((recette) => {
        return recette.title.toUpperCase().indexOf(filter.toUpperCase()) > -1

    })
    const filteredTypesPlats = recipe.recettes.filter((recette) => {
        return recette.type.toUpperCase().indexOf(filter.toUpperCase()) > -1

    })
    const filteredTypesDessert = recipe.recettes.filter((recette) => {
        return recette.type.toUpperCase().indexOf(filter.toUpperCase()) > -1

    })
    const filteredTypesApero = recipe.recettes.filter((recette) => {
        return recette.type.toUpperCase().indexOf(filter.toUpperCase()) > -1

    })
    const filteredTypesEntree = recipe.recettes.filter((recette) => {
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
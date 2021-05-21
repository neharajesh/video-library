export const initialData = {
    category: "All"
}

export const reducerFunction = (state, action) => {
    switch(action.type) {
        case "SORT_BY_CATEGORY": 
            return (state = {...state, category: action.payload});
        default: 
            return state;
    }
}
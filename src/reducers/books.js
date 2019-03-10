const books = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            if (action.id && action.name) {
                let newBook = {
                    id: action.id,
                    name: action.name
                }
                return [...state, newBook]
            } else {
                return state
            }
        default:
            return state
    }
}

export default books
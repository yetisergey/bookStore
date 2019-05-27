 const initialState = {
      books: [],
      modal: {}
  }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK': {
            if (action.id && action.name) {
                let newBook = makeBook(action);
                return { ...state, books: [...state.books, { ...newBook }] }
            } else {
                return state
            }
        }
        case 'EDIT_BOOK': {
            let newBook = makeBook(action);
            let oldBookIndex = state.books.findIndex((book) => {
                return book.id === newBook.id;
            });
            const newState = { ...state }
            newState.books[oldBookIndex] = newBook;
            return newState;
        }
        case 'OPEN_MODAL_BOOK': {
            const modal = {
                ...state.modal,
                isOpen: true,
                ...makeBook(action)
            };
            return { ...state, modal: { ...modal } };
        }
        case 'CLOSE_MODAL_BOOK': {
            const modal = { ...state.modal, isOpen: false, ...action.book };
            return { ...state, modal: { ...modal } };
        }
        default:
            return state;
    }
}

function makeBook(action) {
    const book = {
        id: action.id,
        name: action.name,
        description: action.description,
        author: action.author,
        photo: action.photo,
        page: action.page
    }
    return book;
}
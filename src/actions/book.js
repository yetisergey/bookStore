let id = 1

export const addBook = ({ name, description, page }) =>
    ({
        type: 'ADD_BOOK',
        id: id++,
        name,
        description,
        page
    });

export const editBook = ({ id, name, description, page }) =>
    ({
        type: 'EDIT_BOOK',
        id,
        name,
        description,
        page
    });

export const openModal = (book) =>
    ({
        type: 'OPEN_MODAL_BOOK',
        ...book
    });

export const closeModal = () =>
    ({
        type: 'CLOSE_MODAL_BOOK'
    });




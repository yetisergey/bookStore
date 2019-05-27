let id = 1

export const addBook = ({ name, description, page, author, photo }) =>
    ({
        type: 'ADD_BOOK',
        id: id++,
        name,
        description,
        page,
        author,
        photo
    });

export const editBook = ({ id, name, description, page, author, photo }) =>
    ({
        type: 'EDIT_BOOK',
        id,
        name,
        description,
        page,
        author,
        photo
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




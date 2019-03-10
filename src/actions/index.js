let nextTodoId = 1

export const addBook = name => ({
    type: 'ADD_BOOK',
    id: nextTodoId++,
    name
})
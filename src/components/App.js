import React from 'react'
import AddBook from '../containers/AddBook'
import VisibleBookList from '../containers/VisibleBooks'

const App = () => (
  <div>
    <AddBook></AddBook>
    <VisibleBookList></VisibleBookList>
  </div>
)

export default App
import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions'

const AddBook = ({ dispatch }) => {
  let input
  return (
    <div>
      <div>
        <input ref={node => (input = node)} />
        <button type="submit" onClick={
          e => {
            if (!input.value.trim()) {
              return
            }
            dispatch(addBook(input.value));
            input.value = ''
          }
        } >Add Book</button>
      </div>
    </div>
  )
}

export default connect()(AddBook)
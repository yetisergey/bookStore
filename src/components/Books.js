import React from 'react'
import { connect } from 'react-redux'
import { openModal } from '../actions/book'
import ModalBook from './ModalBook';

class Books extends React.Component {
    render() {
        return (
            <div>
                <input type="button" onClick={e => { this.props.dispatch(openModal()) }} value="Add book" />
                <ul>
                    {this.props.books.map(book => (
                        <li key={book.id}>
                            {book.name}
                            <input type="button" value="Редактировать" onClick={e => { this.props.dispatch(openModal(book)) }} />
                        </li>
                    ))}
                </ul>
                <ModalBook></ModalBook>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.books;
}

export default connect(mapStateToProps)(Books)
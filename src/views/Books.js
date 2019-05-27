import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { openModal } from '../actions/book'
import ModalBook from './ModalBook';

import { BooksWrap, Book, Navbar, ListBooks } from './Books.styles';
import Button from '../components/Buttons/Button';

class Books extends React.Component {

    getImageSrcFromFile(file, callback){
        const fr = new FileReader();
        fr.onloadend = (image) => {
            callback(image.target.result);
        }
        fr.readAsDataURL(file)
    }

    render() {
        return (
            <BooksWrap>
                <Navbar>
                    <Button onClick={e => { this.props.openBookModal() }}>Add book</Button>
                </Navbar>
                <ListBooks>
                    {this.props.books.map(book => (
                        <Book key={book.id}>
                            <div>
                                {book.photo && <img width="100%" src={  URL.createObjectURL(book.photo) } />}
                            </div>
                            <div>
                                <p>{book.author}</p>
                                <p>{book.name}</p>
                                <Button fullWidth onClick={e => { this.props.openBookModal(book) }}>Edit</Button>
                            </div>

                        </Book>
                    ))}
                </ListBooks>
                <ModalBook></ModalBook>
            </BooksWrap>
        )
    }
}



const mapDispatchToProps = dispatch => bindActionCreators({
    openBookModal: book => openModal(book)
}, dispatch);

const mapStateToProps = (state) => {
    return state.books;
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
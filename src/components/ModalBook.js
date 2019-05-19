import React from 'react'
import { connect } from 'react-redux'
import { addBook, editBook, closeModal } from '../actions/book'

class ModalBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.handleChange = this.handleChange.bind(this)
    this.dispatch = this.props.dispatch.bind(this)
  }

  componentDidMount() {
    this.setState(this.props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState(this.props)
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  isCreate() {
    return !this.props.id;
  }

  close() {
    this.dispatch(closeModal());
  }

  onSave() {
    if (this.isCreate()) {
      this.dispatch(addBook(this.state));
    } else {
      this.dispatch(editBook({ ...this.state, id: this.props.id }));
    }
    this.close();
  }

  render() {
    return (
      <div style={{ display: this.state.isOpen ? 'block' : 'none' }}>
        <h1>{this.isCreate() ? 'Add book' : 'Edit book'}</h1>
        <button type="submit" onClick={e => { this.close() }} >Close</button>
        <div>
          <label>Name
          <input name="name" value={this.state.name || ''} onChange={this.handleChange} />
          </label>
          <label>Description
          <textarea name="description" value={this.state.description || ''} onChange={this.handleChange}></textarea>
          </label>
          <button type="submit" onClick={e => { this.onSave() }} >{this.isCreate() ? 'Add book' : 'Edit book'}</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.books.modal
}

export default connect(mapStateToProps)(ModalBook)
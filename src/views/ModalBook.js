import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { PoseGroup } from 'react-pose'

import { addBook, editBook, closeModal } from '../actions/book'
import Button from '../components/Buttons/Button';
import LabeledTextInput from '../components/TextInputs/LabeledTextInput';
import LabeledTextArea from '../components/TextAreas/LabeledTextArea';
import ImageUploader from '../components/ImageUploader/ImageUploader';
import { Modal, ModalBody, ModalHead, ModalFoot, ModalName, Shade, WrapperModal } from "../components/Modals/Modals.styles";

class ModalBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.handleChange = this.handleChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
  }


  componentDidMount() {
    this.setState(this.props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState(this.props)
      this.handleImageChange(this.props.photo)
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleImageChange(imageFile) {
    this.setState({ 'photo': imageFile });
  }

  isCreate() {
    return !this.props.id;
  }

  onSave() {
    if (this.isCreate()) {
      this.props.addBook(this.state);
    } else {
      this.props.editBook({ ...this.state });
    }
    this.props.closeModal();
  }

  render() {
    return (
      <PoseGroup>
        {this.state.isOpen && [
          <Shade key="shade" onClick={e => { this.props.closeModal() }} />,
          <WrapperModal key="modal">
            <Modal>
              <ModalHead>
                <ModalName>{this.isCreate() ? 'Add book' : 'Edit book'}</ModalName>
                <Button onClick={e => { this.props.closeModal() }} >Close</Button>
              </ModalHead>
              <ModalBody>
                <LabeledTextInput name="author" value={this.state.author || ''} onChange={this.handleChange}></LabeledTextInput>
                <LabeledTextInput name="name" value={this.state.name || ''} onChange={this.handleChange}></LabeledTextInput>
                <LabeledTextInput name="page" value={this.state.page || ''} onChange={this.handleChange}></LabeledTextInput>
                <LabeledTextArea name="description" value={this.state.description || ''} onChange={this.handleChange}></LabeledTextArea>
                <ImageUploader name="photo" onChange={this.handleImageChange}></ImageUploader>
              </ModalBody>
              <ModalFoot>
                <Button onClick={e => { this.onSave() }} >{this.isCreate() ? 'Add book' : 'Edit book'}</Button>
                <Button onClick={e => { this.props.closeModal(); }} >Close</Button>
              </ModalFoot>
            </Modal>
          </WrapperModal>
        ]}
      </PoseGroup>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addBook: book => addBook(book),
  editBook: book => editBook(book),
  closeModal: () => closeModal()
}, dispatch);

const mapStateToProps = (state) => {
  return state.books.modal
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalBook);
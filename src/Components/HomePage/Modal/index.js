import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as modalCreators from '../../../redux/actions/modalCreators'
import * as postCreators from '../../../redux/actions/postCreators'
import API from '../../../services/api'

import './modals.css'

import Axios from 'axios'

class ModalContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      hashtags: '',
      isImageUploaded: false,
      assetId: ''
    }

    this.handleOnTitleChange = this.handleOnTitleChange.bind(this)
    this.handleOnContentChange = this.handleOnContentChange.bind(this)
    this.handleOnHashtagChange = this.handleOnHashtagChange.bind(this)
    this.selectForm = this.selectForm.bind(this)
    this.handlePost = this.handlePost.bind(this)
    this.handleImagePost = this.handleImagePost.bind(this)
    this.handleImageSelected = this.handleImageSelected.bind(this)
  }

  handlePost () {
    const { modalType } = this.props
    switch (modalType) {
      case 'text':
        this.handleTextPost()
        break
      case 'photo':
        this.handleImagePost()
        break
      default:
        return null
    }
  }

  handleTextPost () {
    const { title, content, hashtags } = this.state
    const { user, addNewPost } = this.props
    API.saveTextPost({
      postType: 'text',
      author: user.id,
      text: content,
      hashtags: hashtags.split(' ')
    }).then(data => {
      this.setState({ title: '', content: '', hashtags: '' })
      addNewPost(data)
      this.closeModal()
    })
  }

  handleImagePost () {
    const { assetId } = this.state
    const { user } = this.props
    console.log(assetId)
    API.saveTextPost({
      author: user.id,
      postType: 'photo',
      multimedia: assetId
    })
  }

  handleImageSelected (evt) {
    const formData = new FormData()
    formData.append('asset', evt.target.files[0])
    formData.append('multiType', 'photo')
    API.saveMultimediaFile(formData)
      .then(data => {
        this.setState({
          assetId: data,
          isImageUploaded: true
        })
      })
      .catch(error => console.error(error))

    // Show image
    // Sorry for use this :-(
    const reader = new FileReader()

    reader.onload = (e) =>
      document.getElementById('photo-preview').setAttribute('src', e.target.result)

    reader.readAsDataURL(evt.target.files[0])
  }

  handleOnTitleChange (evt) {
    this.setState({ title: evt.target.value })
  }

  handleOnContentChange (evt) {
    this.setState({ content: evt.target.value })
  }

  handleOnHashtagChange (evt) {
    this.setState({ hashtags: evt.target.value })
  }

  selectForm () {
    const { title, content, hashtags } = this.state
    const { modalType } = this.props
    console.log(modalType)
    switch (modalType) {
      case 'text':
        return (
          <TextForm
            title={title}
            content={content}
            hashtags={hashtags}
            changeTitle={this.handleOnTitleChange}
            changeContent={this.handleOnContentChange}
            changeHashtag={this.handleOnHashtagChange}
          />
        )
      case 'photo':
        return (<ImageForm handleImage={this.handleImageSelected} />)
      default:
        return null
    }
  }

  render () {
    const { isModalVisible, modalType, user, closeModal } = this.props

    const ModalHeader = (
      <section className='post-modal__header'>
        <div className='post-modal__user-info'>
          <p>{user.username}</p>
          <i className='glyphicon glyphicon-chevron-down' />
        </div>
        <img className='post-modal__header-img'
          src='/assets/img/modal/settings.svg'
          alt='settings' />
      </section>
    )

    const ModalBody = (
      <section className='post-modal__body'>
        {this.selectForm(modalType)}
      </section>
    )

    const ModalFooter = (
      <section className='post-modal__footer'>
        <button className='post-modal__close'
          onClick={closeModal}
        >
          CLOSE
        </button>
        <div className='post-modal__footer-right'>
          <img src='/assets/img/modal/twitter.svg' alt='twitter' />
          <button onClick={this.handlePost}>
            POST <i className='glyphicon glyphicon-chevron-down' />
          </button>
        </div>
      </section>
    )

    return (
      isModalVisible
        ? (
          <div className='post-modal__container'>
            <div className='row'>
              <main className='col-md-offset-3 col-md-6 post-modal'>
                {ModalHeader}
                {ModalBody}
                {ModalFooter}
              </main>
            </div>
          </div>
        ) : null
    )
  }
}

const TextForm = (
  { title, content, hashtags,
    changeTitle, changeContent, changeHashtag
  }) => (
  <section className='text-form'>
    <input className='text-form__title'
      value={title}
      placeholder='Title'
      type='text'
      onChange={changeTitle}
    />
    <input className='text-form__content'
      value={content}
      type='text'
      onChange={changeContent}
    />
    <input className='text-form__hastags'
      value={hashtags}
      placeholder='#hastags'
      type='text'
      onChange={changeHashtag}
    />
  </section>
)

const ImageForm = ({ handleImage }) => (
  <section className='image-form'>
    <section className='image-form__upload'>
      <div className='image-form__upload-frontend'>
        <img src='/assets/img/modal/upload-photo.svg' alt='upload-photo' />
        <p>Upload Photo</p>
      </div>
      <input onChange={handleImage} className='image-form__input' type='file' />
    </section>
    <section className='image-form__web'>
      <img id='photo-preview' className='image-form__preview' />
      <img src='/assets/img/modal/upload-photos-for-web.svg' alt='web' />
      <p>Upload Photo</p>
    </section>
  </section>
)

const mapStateToProps = state => ({
  isModalVisible: state.isModalVisible,
  user: state.user,
  modalType: state.modalType
})

export default connect(mapStateToProps, { ...modalCreators, ...postCreators })(ModalContainer)

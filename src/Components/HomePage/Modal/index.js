import React, { Component } from 'react'
import { connect } from 'react-redux'

import './modals.css'

class ModalContainer extends Component {
  render () {
    const ModalHeader = (
      <section className='post-modal__header'>
        <div className='post-modal__user-info'>
          <p>Nivek</p>
          <i className='glyphicon glyphicon-chevron-down' />
        </div>
        <img className='post-modal__header-img' src='/assets/img/modal/settings.svg' alt='settings' />
      </section>
    )

    const ModalBody = (
      <section className='post-modal__body'>
        <TextForm />
      </section>
    )

    const ModalFooter = (
      <section className='post-modal__footer'>
        <button className='post-modal__close'>CLOSE</button>
        <div className='post-modal__footer-right'>
          <img src='/assets/img/modal/twitter.svg' alt='twitter' />
          <button>
            POST <i className='glyphicon glyphicon-chevron-down' />
          </button>
        </div>
      </section>
    )

    return (
      <div className='post-modal__container'>
        <div className='row col-md-offset-3 col-md-6'>
          <main className='post-modal'>
            {ModalHeader}
            {ModalBody}
            {ModalFooter}
          </main>
        </div>
      </div>
    )
  }
}

const TextForm = (props) => (
  <section className='text-form'>
    <h2>Text Form Someday</h2>
  </section>
)

const mapStateToProps = state => ({ isModalVisible: state.isModalVisible, user: state.user })

export default connect(mapStateToProps)(ModalContainer)

import React from 'react'
import { connect } from 'react-redux'
import postImagesProperties from './postImagesProperties'

import PostsContainer from './PostsContainer'
import * as modalCreators from '../../../../redux/actions/modalCreators'

import './feed.css'

const Feed = (props) => (
  <main className='fixed-width'>
    <NewPost {...props} />
    <PostsContainer />
  </main>
)

const NewPost = ({ setModalType }) => (
  <section className='new-post'>
    {/* TODO: Fetch image from user */}
    <img className='feed__user-photo' src='/assets/img/dummy/me.png' alt='me' />
    <section className='new-post__menu'>
      {postImagesProperties.map((imgInfo, index) => (
        <NewPostIcon
          key={index}
          path={imgInfo.path}
          alt={imgInfo.alt}
          cssClassName={imgInfo.cssClass}
          handleOnClick={setModalType.bind(null, imgInfo.alt)}
        />
      ))}
    </section>
  </section>
)

const NewPostIcon = ({ path, alt, cssClassName, handleOnClick }) => (
  <div className='new-post__action' onClick={handleOnClick} >
    <img
      className={`new-post__icon ${cssClassName}`}
      src={path} alt={alt}
    />
    <p>{alt}</p>
  </div>
)

export default connect(() => { }, modalCreators)(Feed)

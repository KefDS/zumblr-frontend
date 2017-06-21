import React from 'react'
import postImagesProperties from './postImagesProperties'

import PostsContainer from './PostsContainer'

import './feed.css'

const Feed = (props) => (
  <main className='main-content fixed-width'>
    <NewPost />
    <PostsContainer />
  </main>
)

const NewPost = (props) => (
  <section className='new-post'>
    {/* TODO: Fetch image from user */}
    <img className='feed__user-photo' src='/assets/img/dummy/me.png' alt='me' />
    <section className='new-post__menu'>
      {postImagesProperties.map(imgInfo => (
        <NewPostIcon
          path={imgInfo.path}
          alt={imgInfo.alt}
          cssClassName={imgInfo.cssClass}
          handleOnClick={() => console.log(imgInfo.alt)}
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

export default Feed

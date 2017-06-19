import React from 'react'
import postImagesProperties from './postImagesProperties'

import './feed.css'

const Feed = (props) => (
  <main className='main-content'>
    <NewPost />
  </main>
)

const NewPost = (props) => (
  <section className='new-post'>
    {/* TODO: Fetch image from user */}
    <img className='feed__user-photo' src='/assets/img/dummy/me.png' alt='me' />
    <section className='new-post__menu'>
      {postImagesProperties.map(imgInfo => (
        <PostIcon
          path={imgInfo.path}
          alt={imgInfo.alt}
          cssClassName={imgInfo.cssClass}
          handleOnClick={() => console.log(imgInfo.alt)}
        />
      ))}
    </section>
  </section>
)

const PostIcon = ({ path, alt, cssClassName, handleOnClick }) => (
  <div className='new-post__action' onClick={handleOnClick} >
    <img
      className={`new-post__icon ${cssClassName}`}
      src={path} alt={alt}
    />
    <p className='text-center'>{alt}</p>
  </div>
)

export default Feed

import React from 'react'

import './post.css'

const Post = ({ author, hashtags, children }) => (
  <section className='post'>
    <img className='feed__user-photo' src='/assets/img/dummy/me.png' alt='me' />
    <div className='post__content'>
      <section className='post__header'>
        <div className='post__info'>
          <p>Here's a blog: <strong>{author}</strong></p>
          <p><a href=''>Follow</a></p>
        </div>
        <div className='post__actions'>
          <img src='/assets/img/post/close.svg' alt='close' />
          <img src='/assets/img/post/explore.svg' alt='explore' />
        </div>
      </section>
      <section className='post__body'>
        {children}
      </section>
      <section className='post__footer'>
        <div className='post__hastag'>
          <p>{hashtags.map((hashtag, index) => <span key={index}>{hashtag} </span>)}</p>
        </div>
        <div className='post__bottom-info'>
          <div className='post__notes'>
            <strong>{Math.floor(Math.random() * (2567 - 50) + 50)} notes</strong>
          </div>
          <div className='post__bottom-actions'>
            <img src='/assets/img/post/share.svg' alt='share' />
            <img src='/assets/img/post/reply.svg' alt='reply' />
            <img src='/assets/img/post/reblog.svg' alt='reblog' />
            <img src='/assets/img/post/like.svg' alt='like' />
          </div>
        </div>
      </section>
    </div>
  </section>
)

export default Post

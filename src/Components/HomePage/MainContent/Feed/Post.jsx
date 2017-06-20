import React from 'react'

import './post.css'

const Post = ({ author, hashtags, children }) => (
  <section className='post'>
    <img className='feed__user-photo' src='/assets/img/dummy/me.png' alt='me' />
    <div className='post__content'>
      <section className='post__header'>
        <div className='post__info'>
          <p>Here's a blog: <strong>{author}</strong></p>
          <p><a href='#'>Follow</a></p>
        </div>
        <div className='post__actions'>
          <img src='/assets/img/post/close.svg' />
          <img src='/assets/img/post/explore.svg' />
        </div>
      </section>
      <section className='post__body'>
        {children}
      </section>
      <section className='post__footer'>
        <div className='post__hastag'>
          <p>{hashtags.map(hashtag => <span>#{hashtag} </span>)}</p>
        </div>
        <div className='post__bottom-info'>
          <div className='post__notes'>
            <strong>283783 notes</strong>
          </div>
          <div className='post__bottom-actions'>
            <img src='/assets/img/post/share.svg' />
            <img src='/assets/img/post/reply.svg' />
            <img src='/assets/img/post/reblog.svg' />
            <img src='/assets/img/post/like.svg' />
          </div>
        </div>
      </section>
    </div>
  </section>
)

export default Post

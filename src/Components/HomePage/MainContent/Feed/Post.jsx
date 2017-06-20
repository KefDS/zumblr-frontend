import React from 'react'

import './post.css'

const Post = (props) => (
  <section className='post'>
    <img className='feed__user-photo' src='/assets/img/dummy/me.png' alt='me' />
    <div className='post__content'>
      <section className='post__header'>
        <div className='post__info'>
          <p>Here's a blog: <strong>bob-strauss</strong></p>
          <p><a href='#'>Follow</a></p>
        </div>
        <div className='post__actions'>
          <img src='/assets/img/post/close.svg' />
          <img src='/assets/img/post/explore.svg' />
        </div>
      </section>
      <section className='post__body'>
        <p>
          - ¿No estás escribiendo? <br />
          - Estoy con mi tren. ¿Te gusta?, lo acabo de comprar. <br />
          - ¿Hace cuanto que no escribís nada? <br />
          - Estuve de viaje. <br />
          - Tal vez ya no tengas nada que escribir. Mira, aquí te marqué varios trabajos posibles. <br />
          - No necesito que me busques trabajo, estoy bien así, soy poeta. <br />
          - ¿Qué oficio ser poeta?, acaso dice aquí "se busca poeta, buena remuneración".
        </p>
      </section>
      <section className='post__footer'>
        <div className='post__hastag'>
          <p>#laHoraSad #lauraSad #noMeVaADarTiempo</p>
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

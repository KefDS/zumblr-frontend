import React from 'react'

import './sidebar.css'
import './recommendedBlog.css'

const SidebarContainer = ({ title, children }) => (
  <section className='sidebar'>
    <h2>{title}</h2>
    <section className='sidebar__content'>
      {children}
    </section>
  </section>
)

const RecommendedBlog = ({ img, username, blogName }) => (
  <section className='recommended-blog'>
    <div className='recommended-blog__info'>
      <img className='recommended-blog__photo' src={img} alt='avatar' />
      <div>
        <p className='recommended-blog__username'>{username}</p>
        <p className='recommended-blog__blog-name'>{blogName}</p>
      </div>
    </div>
    <img className='recommended-blog__icon' src='/assets/img/recommended-blogs/follow.svg' alt='follow' />
  </section>
)

// const RecommendedBlogs = ({ users }) => (
//   <SidebarContainer>
//     {users.map((user, index) => (
//       <RecommendedBlog
//         img={user.img}
//         username={user.username}
//         blogName={user.blogName}
//       />)
//     )}
//   </SidebarContainer>
// )

const RadarSidebar = ({ user, children }) => (
  <SidebarContainer title='RADAR'>
    <RecommendedBlog
      img={user.img}
      username={user.username}
      blogName={user.blogName}
    />
    <section className='radar'>
      {children}
    </section>
  </SidebarContainer>
)

// MockArea
const RecommendedBlogUsers = ({ children }) => (
  <div>
    <RecommendedBlog
      img='/assets/img/dummy/avatar-1.png'
      username='Dylan Quesada'
      blogName='Vue > React'
    />
    <RecommendedBlog
      img='/assets/img/dummy/avatar-2.png'
      username='Issac Corrales'
      blogName='Alajuela es lo mejor!'
    />
    <RecommendedBlog
      img='/assets/img/dummy/avatar-3.png'
      username='Joel Myrrie'
      blogName='Chau >:-('
    />
    {children}
    <p className='recommended-blogs'><a>EXPLORE TUMBLR</a></p>
  </div>
)

const MockUsersSidebar = (props) => (
  <div>
    <SidebarContainer title='RECOMMENDED BLOGS'>
      <RecommendedBlogUsers />
    </SidebarContainer>
    <RadarSidebar user={{ img: '/assets/img/dummy/avatar-1.png', username: 'NG', blogName: 'Landscaping' }}>
      <img src='/assets/img/dummy/post-img.png' alt='radar' />
    </RadarSidebar>
  </div>
)

export default MockUsersSidebar

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
      <img className='recommended-blog__photo' src={img} />
      <div>
        <p className='recommended-blog__username'>{username}</p>
        <p className='recommended-blog__blog-name'>{blogName}</p>
      </div>
    </div>
    <img className='recommended-blog__icon' src='/assets/img/recommended-blogs/follow.svg' />
  </section>
)

const RecommendedBlogs = ({ users }) => (
  <SidebarContainer>
    {users.map((user, index) => (
      <RecommendedBlog
        img={user.img}
        username={user.username}
        blogName={user.blogName}
      />)
    )}
  </SidebarContainer>
)

const Radar = ({ user, content }) => (
  <SidebarContainer>
    <RecommendedBlog
      img={user.img}
      username={user.username}
      blogName={user.blogName}
    />
    {content.isImage ? <img style='width: 100%' src={content.path} /> : content}
  </SidebarContainer>
)

// MockArea
const RecommendedBlogUsers = ({ children }) => (
  <div>
    <RecommendedBlog
      img='/assets/img/dummy/me.png'
      username='John Doe'
      blogName='No pos que mal'
    />
    <RecommendedBlog
      img='/assets/img/dummy/me.png'
      username='Jhon Cena'
      blogName='My time is now'
    />
    <RecommendedBlog
      img='/assets/img/dummy/me.png'
      username='Jhon Smith'
      blogName='Another blog'
    />
    {children}
    <p className='recommended-blogs'><a>EXPLORE TUMBLR</a></p>
  </div>
)

const RadarSidebar = () => (
  <div>
    <RecommendedBlog
      img='/assets/img/dummy/me.png'
      username='Ray Paté'
      blogName='Landscaping'
    />
    <img src='/assets/img/dummy/post-img.png' alt='' />
  </div>
)

const MockUsersSidebar = (props) => (
  <div>
    <SidebarContainer title='RECOMMENDED BLOGS'>
      <RecommendedBlogUsers />
    </SidebarContainer>
    <SidebarContainer title='RADAR'>
      <RadarSidebar />
    </SidebarContainer>
  </div>
)

export default MockUsersSidebar

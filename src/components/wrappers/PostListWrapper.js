import { useEffect } from 'react'
import { connect } from 'react-redux'

import { getPosts, addLike, removeLike } from '../../store/blog'
import PostList from '../visual/PostList/PostList'
import Post from '../visual/Post/Post'

const PostListWrapper = ({ page, totalPages, posts, getPosts, addLike, removeLike }) => {
  useEffect(() => {
    getPosts(page)
  }, [])

  const loadPage = (page) => {
    getPosts(page)
  }

  const list = posts.map((post) => {
    return (
      <Post
        {...post}
        key={post.slug}
        addLike={() => {
          addLike(post.slug)
        }}
        removeLike={() => {
          removeLike(post.slug)
        }}
        hideBody={true}
      />
    )
  })

  return <PostList list={list} page={page} totalPages={totalPages} onPageChange={loadPage} />
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
    totalPages: state.totalPages,
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { getPosts, addLike, removeLike })(PostListWrapper)

import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul className="blog-item-container">
      {blogList.map(eachItem => (
        <BlogItem key={eachItem.id} itemDetails={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList

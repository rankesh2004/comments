import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here.
class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
    count: 0,
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png',
  }

  toggleLikeBtn = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (id === eachItem.id) {
          return {
            ...eachItem,
            imgUrl:
              'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png',
          }
        }
        return eachItem
      }),
    }))
  }

  onNameText = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onCommentText = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const filterCommentList = commentList.filter(eachItem => id !== eachItem.id)
    console.log(filterCommentList)
    this.setState({
      commentList: filterCommentList,
    })
  }

  render() {
    const {commentList, name, comment, count} = this.state
    console.log(comment)
    return (
      <div>
        <h1>Comments</h1>
        <p>Say something about 4.0 technologies</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            onChange={this.onNameText}
            value={name}
          />
          <br />
          <textarea
            placeholder="Your Comment"
            onChange={this.onCommentText}
            value={comment}
            rows="6"
          />
          <br />
          <button type="submit">Add Comment</button>
        </form>
        <p>
          <span>{count}</span> comments
        </p>
        <ul>
          {commentList.map(eachItem => (
            <CommentItem
              commentDetails={eachItem}
              id={eachItem.id}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
              toggleLikeBtn={this.toggleLikeBtn}
              deleteComment={this.deleteComment}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments

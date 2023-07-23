// Write your code here
const CommentItem = props => {
  const {commentDetails, deleteComment, toggleLikeBtn} = props
  const {name, comment, id, imgUrl} = commentDetails

  const onDelete = () => {
    deleteComment(id)
  }

  const onLike = () => {
    toggleLikeBtn(id)
  }
  return (
    <li>
      <h1>{name}</h1>
      <p>{comment}</p>
      <button type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </button>
      <button type="button" onClick={onLike}>
        <img src={imgUrl} alt="like" />
      </button>
    </li>
  )
}
export default CommentItem

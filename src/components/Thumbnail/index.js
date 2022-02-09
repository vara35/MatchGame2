import './index.css'

const Thumbnail = props => {
  const {item, getThumbnailId} = props
  const addScoreFunction = () => {
    getThumbnailId(item.id)
  }

  return (
    <li className="list">
      <button type="button" onClick={addScoreFunction} className="list-button">
        <img
          src={item.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default Thumbnail

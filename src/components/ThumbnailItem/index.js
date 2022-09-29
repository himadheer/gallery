// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, selectThumbnail, isActiveThumbnail, imageAltText} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList

  const thumbnailOpacity = isActiveThumbnail ? 'selectedthumbnail' : ''

  const onSelectThumbnail = () => {
    selectThumbnail(id)
  }

  return (
    <li className="thumbnail-item">
      <button type="button" className="button" onClick={onSelectThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${thumbnailOpacity}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

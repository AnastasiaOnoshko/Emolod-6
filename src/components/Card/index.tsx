import './style.css'
import type { ItemType } from '../../types/mainPage'

const NewsItem = (props: ItemType) => {
  return (
    <div className="news-item">
    <p className = "news-title">
      {props.isImportant ? <strong>{props.title}</strong> : props.title}
    </p>

    <a href={props.link} className="small-desc"> Переглянути </a>

    <p className="news-time">{props.time}</p>
    </div>
  )
}

export default NewsItem

import { IEmoji } from "@/api/emojiApp"
import "./card.css"

export default function Card({emoji, title, keywords}: IEmoji) {




    return(
        <div className="card">
            
            <h1 className="emoji">{emoji}</h1>
            <h3 className="title">{title}</h3>
            <p className="description">{keywords}</p>
        </div>
    )
}
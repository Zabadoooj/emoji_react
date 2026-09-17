'use client'

import "../main.css";

import { useEffect, useState } from "react";
import { getEmojis, type IEmoji } from "../../api/emojiApp"
import Card from "./card";

export default function EmojiFinder() {

    const [input, setInput] = useState("")
    const [emojis, setEmojis] = useState<IEmoji[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<String | null>(null)


    
    const fetchData = async () => {
        const data = await getEmojis(input)
        setEmojis(data)
    }

    useEffect(() => {
        setLoading(true)

        try {
            fetchData()
        } catch (error){
            if(typeof error == 'string'){
                setError(error)
            }
            else if (error instanceof Error){
                setError(error.message)
            }
        }
        
        setLoading(false)
    }, [input])

    

    return (
        <div className="main">
            <header className="header">

                <h1>Emoji Finder</h1>
                <p>Find emoji by keywords</p>

            </header>

            <input id="a" className="search"
                placeholder="Search emoji"
                value={input}
                onChange={(e) => { setInput(e.currentTarget.value)}}
            />

            <main>
                { loading && <h1>Загрузка</ h1>}
                { error && <h2>Ошибка: {error}</h2>}
                {
                    emojis.map((emoji, index) => 
                    <Card 
                        key={index+emoji.title} 
                        emoji={emoji.emoji} 
                        title={emoji.title} 
                        keywords={emoji.keywords}
                    />)
                }
            </main>
        </div>
    );
}

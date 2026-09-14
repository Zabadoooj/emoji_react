'use client'

import "../main.css";

import { useEffect, useState } from "react";
import { getEmojis, type IEmoji } from "../../api/emojiApp"
import Card from "./card";

export default function EmojiFinder() {

    const [input, setInput] = useState("")
    const [emojis, setEmojis] = useState<IEmoji[]>([])
    const [error, setError] = useState<String | null>(null)


    
        const fetchData = async () => {
            const data = await getEmojis(input)
            setEmojis(data)

            console.log("Text");
        }

    useEffect(() => {

        console.log(123)
        fetchData()

        console.log(emojis)
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
                onChange={(e) => { setInput(e.currentTarget.value); console.log(e) }}
            />

            <main>
                {
                    emojis.map((emoji) => <Card />)
                }
            </main>
        </div>
    );
}

'use client'

import "../main.css";

import { useEffect, useState } from "react";
import { getEmojis, type IEmoji } from "../../api/emojiApp"
import Card from "./card";

export default function EmojiFinder() {

  const [input_, setInput] = useState('')
  const [emojis, setEmojis] = useState<IEmoji[]>([])
  const [error, setError] = useState<String | null>(null)

  const fetchData = async () => {
    const data = await getEmojis(input_)
    setEmojis(data)

    console.log("Text");
    
  }

  useEffect(() => {
    console.log(123)
    fetchData()
    
    console.log(emojis)
  }, [input_])

  return (
    <div className="main">
      <header className="header">

        <h1>Emoji Finder</h1>
        <p>Find emoji by keywords</p>

      </header>

      <input id="a" className="search"
       placeholder="Search emoji"
       value={input_}
       onChange={(e) => {setInput(e.currentTarget.value)}}
       />

      <main>
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}

"use client"

import axios from "axios";


export interface IEmoji {
    emoji: string,
    title: string;
    keywords: string;
}

const API_URL = "http://localhost:5000/api/emojis"

export const getEmojis = async (query?: string): Promise<IEmoji[]> => {

    try {

        const params = query ? { q: query } : undefined
        const responce = await axios.get<IEmoji[]>( API_URL, {params} );
        return responce.data
        
    } catch (error) {
        console.log("Ошибка при запросе к API: ", error);

        throw Error
    }
}
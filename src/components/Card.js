import Main from "./Main"
import { useEffect, useState } from "react"

export default function Card(){
    const [news, setNews] = useState([])
    const getNews = async() =>{
      const response = await fetch('https://newsapi.org/v2/everything?q=attack-on-titan&pageSize=20&apiKey=633e97a939284371a57ca6a9a7497b2b')
      const data = await response.json()
      setNews(data.articles)
    }
    console.log(news)
    
    useEffect(()=>{
      getNews()
    },[])
    return(
        <>
        {news.map((item, index)=>(
        <Main key={index} img={item.urlToImage} author= {item.author} published = {item.publishedAt} title={item.title} ingress={item.description} />

        ))}

        </>
    )
}
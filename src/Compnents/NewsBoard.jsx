import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem";
const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      const apiKey = 'f7a954a2735e4903aac7f3d6067d76ec';
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data.articles)) {
            setArticles(data.articles);
          }
        });
    }, [category]);
    return (
      <div>
        <h2 className="text-center">
          Latest <span className="badge bg-danger">News</span>
        </h2>
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    );
  };
  
  export default NewsBoard;
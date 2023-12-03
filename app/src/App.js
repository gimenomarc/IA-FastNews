// App.js
import React, { useState, useEffect } from 'react';
import NewsCard from './Components/NewsCard';  // Adjust the path accordingly
import Parser from 'rss-parser';


const rssFeedURL = 'https://hnrss.org/newest';

const App = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const parser = new Parser();
      const feed = await parser.parseURL(rssFeedURL);
      setNewsItems(feed.items);
    };

    fetchNews();
  }, []);

  return (
    <div className="container">
      {newsItems.map((item, index) => (
        <NewsCard key={index} item={item} />
      ))}
    </div>
  );
};

export default App;

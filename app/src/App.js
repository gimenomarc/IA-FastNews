// App.js con Tailwind CSS y componentes NewsCard

import React from 'react';
import NewsCard from './Components/NewsCard';

const newsItems = [
  {
    title: 'News Item 1 Title',
    description: 'News Item 1 Description',
    summary: 'News Item 1 Summary',
  },
  {
    title: 'News Item 2 Title',
    description: 'News Item 2 Description',
    summary: 'News Item 2 Summary',
  },
  {
    title: 'News Item 3 Title',
    description: 'News Item 3 Description',
    summary: 'News Item 3 Summary',
  },
];

function App() {
  return (
    <div className="App">
      {newsItems.map((item) => (
        <NewsCard key={item.title} item={item} />
      ))}
    </div>
  );
}

export default App;

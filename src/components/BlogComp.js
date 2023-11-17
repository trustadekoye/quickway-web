import { useState } from "react"
import React from 'react'
import './BlogComp.css'

function BlogComp() {

    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const pinnedArticle = {
        title: 'The future of package delivery. Say hello to Qwikway.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quia.',
    };

    const articles = [
        {
            title: 'The Best Way to Learn React',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quia.',
        },
        {
            title: 'The Worst Way to Learn React',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quia.',
        },
        {
            title: 'The Cheapest Way to Learn React',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quia.',
        },
        {
            title: 'The Most Expensive Way to Learn React',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quia.',
        },
    ];

    const filteredArticles =
        selectedFilter === 'all'
            ? articles
            : articles.filter((article) => article.title.includes(selectedFilter));

  return (
    <div className="blog-page">
        <h2>Qwikway Blog</h2>
        <p>Catch up with the latest news.</p>
      <div className="filters">
        <button
          className={selectedFilter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        {/* Add more filter buttons based on your categories */}
        <button
          className={selectedFilter === 'earn' ? 'active' : ''}
          onClick={() => handleFilterChange('earn')}
        >
          Earn
        </button>
        <button
          className={selectedFilter === 'inside qwikway' ? 'active' : ''}
          onClick={() => handleFilterChange('inside qwikway')}
        >
          Inside Qwikway
        </button>
        <button
          className={selectedFilter === 'customers' ? 'active' : ''}
          onClick={() => handleFilterChange('customers')}
        >
          Customers
        </button>
        <button
          className={selectedFilter === 'others' ? 'active' : ''}
          onClick={() => handleFilterChange('others')}
        >
          Others
        </button>
      </div>

      {pinnedArticle && (
        <div className="pinned-article">
          <h2>{pinnedArticle.title}</h2>
          <p>{pinnedArticle.description}</p>
        </div>
      )}

      <div className="article-grid">
        {filteredArticles.map((article) => (
          <div key={article.id} className="article-card">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComp

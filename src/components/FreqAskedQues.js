import React from 'react'
import { useState } from 'react';
import './FreqAskedQues.css'

function FreqAskedQues() {

    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    const faqData = [
        {
            id: 1,
            question: 'What is Qwikway and how does it work?',
            answer: 'Qwikway is a delivery service that helps you move your packages from one location to another. We provide a platform that connects you to a dispatch rider who picks up your package and delivers it to your desired location.',
        },
        {
            id: 2,
            question: 'Is there a weight limit to the packages?',
            answer: 'Qwikway is a delivery service that helps you move your packages from one location to another. We provide a platform that connects you to a dispatch rider who picks up your package and delivers it to your desired location.',
        },
        {
            id: 3,
            question: 'Can i pay with cash?',
            answer: 'Qwikway is a delivery service that helps you move your packages from one location to another. We provide a platform that connects you to a dispatch rider who picks up your package and delivers it to your desired location.',
        },
        {
            id: 4,
            question: 'Can i rate and review each trip and driver?',
            answer: 'Qwikway is a delivery service that helps you move your packages from one location to another. We provide a platform that connects you to a dispatch rider who picks up your package and delivers it to your desired location.',
        },
    ]

  return (
    <div className='faq-main'>
        <div className='faq-container'>
      <div className='faq-text'>
        <h2>FAQs</h2>
        <p>Get answers to all the queries you may have about Qwikay</p>
      </div>
      <div className='faq-list'>
        {faqData.map((item) => (
          <div key={item.id} className='faq-item'>
            <button
              className={`question ${activeQuestion === item.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(item.id)}
            >
              {item.question}
            </button>
            <div className={`answer ${activeQuestion === item.id ? 'active' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default FreqAskedQues;

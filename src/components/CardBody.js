import React from 'react';
import { useState } from 'react';
import quotes from '../data/quotes';
import CardFooter from './CardFooter';

function CardBody() {
  const quotesQuantity = quotes.length;
  const initialRandomNum = Math.floor(Math.random() * quotesQuantity);

  let [quote, setQuote] = useState(quotes[initialRandomNum].text);
  let [author, setAuthor] = useState(quotes[initialRandomNum].author);
  const getQuote = () => {
    console.log(quotes.length);
    const randomNum = Math.floor(Math.random() * quotesQuantity);
    setQuote(quotes[randomNum].text);
    if (!quotes[randomNum].author) {
      setAuthor('Anonymous');
    } else {
      setAuthor(quotes[randomNum].author);
    }
  };
  return (
    <React.Fragment>
      <div className='card-body'>
        <h1 className='h1' id='text'>
          <i className='fas fa-quote-left text-secondary'> </i>
          {' ' + quote + ' '}
          <i className='fas fa-quote-right text-secondary'> </i>
        </h1>
        <h2 className='lead' id='author'>
          {author}
        </h2>
        <button className='btn btn-primary' id='new-quote' onClick={getQuote}>
          New quote
        </button>
      </div>
      <CardFooter quote={quote} author={author} />
    </React.Fragment>
  );
}

export default CardBody;

import React from 'react';

function CardFooter(props) {
  console.log(props.quote);
  const twitterText = props.quote.split(' ').join('%20');
  let twitterAuthor = 'Anonymous';
  if (props.author) {
    twitterAuthor = props.author.split(' ').join('%20');
  }

  return (
    <div className='card-footer text-muted'>
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${twitterText}%22%20${twitterAuthor}`}
        id='tweet-quote'
      >
        <i className='fab fa-twitter'></i> tweet quote
      </a>
    </div>
  );
}

export default CardFooter;

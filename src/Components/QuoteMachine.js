import React from 'react';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';


import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import  Typography  from '@material-ui/core/Typography';
import  CardContent  from '@material-ui/core/CardContent';


const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (

    <Card>
        <CardContent>
              <Typography id="text">
                 {selectedQuote.quote} - <span id="author"> {selectedQuote.author}</span>
              </Typography>
    
        </CardContent>

            <CardActions>
            <button id="new-quote" size="small" onClick={assignNewQuoteIndex}>
              Next Quote
            </button> 

            <IconButton id="tweet-quote"
                target="_blank"
                 href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=imran`}
            >

              <FontAwesomeIcon icon={faTwitter} size="md" ></FontAwesomeIcon>

            </IconButton>

            </CardActions>

    </Card>
);


export default QuoteMachine
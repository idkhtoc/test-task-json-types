import { useState } from 'react';

import Form from '../form/Form';
import Answer from '../answer/Answer';

import './App.css';

const App = () => {
  const [ isAnswerShown, setIsAnswerShown ] = useState(false);
  const [answer, setAnswer] = useState([]);

  const showAnswer = (types) => {
    setAnswer(types);
    setIsAnswerShown(true);
  };

  return (
    <div className='container'>
      <Form showAnswer={showAnswer}/>
      <Answer hide={!isAnswerShown} answer={answer}/>
    </div>
  );
};

export default App;

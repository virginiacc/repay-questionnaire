import './App.css';
import { useEffect, useState } from 'react';
import QuestionnaireQuestionList from './Questionnaire/QuestionnaireQuestionList.js';
import QuestionnaireSubmitButton from './Questionnaire/QuestionnaireSubmitButton.js';

import { checkFinished, getDisplayable } from './utils.js';
var initial_json = require('./test.json');

function App() {
  const [ results, setResults ] = useState( [] );
  const [ questions, setQuestions ] = useState( [] );
  const [selections, setSelections] = useState( {} );
  const [activeQuestions, setActiveQuestions] = useState( [] );
  const [isFinished, setFinished] = useState( false );

  const resetState = ( obj ) => {
    if ( obj ) {
      setQuestions( obj.questions || [] );
      setResults( obj.results || [] );
      setup( obj.questions || [], [] );
    }
  }

  const setup = ( questionsArray, selectionsObj ) => {
    const displayable = getDisplayable( questionsArray, selectionsObj );
    // let ids = displayable.map( item => item.id );
    // let leftovers = Object.keys( selectionsObj ).filter( x => !ids.includes( +x ) );
    // handle checkbox array items that are no longer visible?
    // let copy = Object.assign( {}, selectionsObj );
    // leftovers.forEach( id => delete copy[id] ); 
    // let required = displayable.filter( q => q.required );
    const finished = checkFinished( displayable, selectionsObj );
    setActiveQuestions( displayable );
    setSelections( selectionsObj );
    setFinished( finished );
  }

  const updateState = ( question, answer ) => {
    let selectionsCopy = Object.assign( {}, selections );
    selectionsCopy[ question ] = answer;
    setup( questions, selectionsCopy );
  }

  useEffect( () => {
    resetState( initial_json )
  }, []);
  
  return (
    <div className="App">
      <div className="Questionnaire block">
        <QuestionnaireQuestionList questions={ activeQuestions } 
                                   selections={ selections }
                                   handleChange={ updateState }/>
        <QuestionnaireSubmitButton isFinished={ isFinished }
                                   results={ results } 
                                   selections={ selections }/>
      </div>
      
    </div>
  );
}

export default App;

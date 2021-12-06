import { getDisplayable } from '../utils.js';


const QuestionnaireSubmitButton = ( { isFinished, results, selections } ) => {
  let href;
  const result = getDisplayable( results, selections );
    // console.log(result)
    if ( isFinished && result.length > 0 ) {
      let res = result[0];
      href = res.text;
    }
  const handleClick = ( e ) => {
    if ( !isFinished ) {
      e.preventDefault();
    }
  }

  return (
      <a className={`a-btn ${isFinished ? '' : 'a-btn__disabled'}`} 
         onClick={ handleClick }
         href={ href }
         title={`${isFinished ? '' : 'disabled'}`}>
        Go to results
      </a>
  )
}

export default QuestionnaireSubmitButton;
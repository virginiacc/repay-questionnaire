import QuestionnaireResultItem from './QuestionnaireResultItem.js';
import { getDisplayable } from '../utils.js';

const QuestionnaireResults = ( {
  isFinished, isSubmitted, questions, selections, results
} ) => {
  const displayableResults = getDisplayable( results, selections );
  return (
      <div>
      { isFinished && isSubmitted ? 
        (
          <div className="results-list">
            { displayableResults.length > 0 && displayableResults.map( ( item, index ) => (
              <QuestionnaireResultItem result={ item } 
                                       key={ item.id }/>
            ) ) }  
          </div>
        ) :
        ( null )
      }
      </div>
  )
}

export default QuestionnaireResults;

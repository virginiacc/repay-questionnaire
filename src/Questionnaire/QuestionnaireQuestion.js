import QuestionnaireContentBlock from './QuestionnaireContentBlock.js';
import RadioGroup from '../FormElements/RadioGroup.js';
import CheckboxGroup from '../FormElements/CheckboxGroup.js';
import { getDisplayable } from '../utils.js';

const QuestionnaireQuestion = ( { 
  question, selections, content, handleChange 
} ) => {
  const answers = getDisplayable( question.answers, selections );
  const contentBlocks = getDisplayable( question.content_blocks, selections );
  const id = question.id;
  const FormComponent = question.type === 'radio' ?
                        RadioGroup : 
                        CheckboxGroup;
  console.log('questionnaire question', id, selections, selections[id])
  return (
    <div className="question-item block">
      { contentBlocks.length > 0 && contentBlocks.map( ( item, index ) => (
        <QuestionnaireContentBlock key={ item.id } 
                                   contentBlock={ item }/>
      ) ) } 
      <FormComponent questionID={ id }
                     selection={ selections[id] }
                     answers={ answers }
                     onChange={ ( val ) => handleChange( id, val ) }/>
    </div>
  )
}

export default QuestionnaireQuestion;
import Radio from './Radio.js';

const RadioGroup = ( { questionID, selection, answers, onChange } ) => {
  console.log('radio group', selection)
  return (
    <fieldset className="o-form_fieldset">
      { answers.map( ( answer, index ) => (
        <Radio label={ answer.text }
               value={ answer.id }
               checked={ selection === answer.id }
               id={`q_${questionID}_a_${answer.id}`}
               onChange={ onChange } 
               key={ answer.id }/>
      ) ) }
    </fieldset>
  )
}

export default RadioGroup;
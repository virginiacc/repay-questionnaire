import Checkbox from './Checkbox.js';

const CheckboxGroup = ( { questionID, selection, answers, onChange } ) => {
  const selected = selection || [];
  const handleChange = ( val, isChecked ) => {
    let copy = [...selected];
    if ( isChecked ) {
      !copy.includes( val ) && copy.push( val );
    } else {
      copy = copy.filter( item => item !== val );
    }
    onChange( copy );
  };

  return (
    <fieldset className="o-form_fieldset">
      { answers.map( ( answer, index ) => (
        <Checkbox label={ answer.text }
                  value={ answer.id }
                  checked={ selected.includes( answer.id ) }
                  id={`q_${questionID}_a_${answer.id}`}
                  onChange={ handleChange }
                  key={ answer.id }/>
      ) ) }
    </fieldset>
  )
}

export default CheckboxGroup;
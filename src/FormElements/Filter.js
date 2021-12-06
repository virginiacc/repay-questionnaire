import Select from 'react-select';

const customStyles = {
  control: base => ( {
    ...base,
    borderColor: '#919395',
    borderRadius: 0
  } ),
  dropdownIndicator: base => ( {
    ...base,
    backgroundColor: '#e7e8e9',
    color: '#101820 !important'
  } ),
  indicatorSeparator: base => ( {
    ...base,
    backgroundColor: '#919395',
    margin: 0
  } ),
  placeholder: base => ( {
    ...base,
    color: '#585d61'
  } )
};

const Filter = ( props ) => {
  const changeHandler = ( val ) => {
    props.onChange( val ? val.value : val );
  }

  const valueFromId = (opts, id) => {
    return opts.find(o => o.value === id) || 0;
  }

  return (
    <div className="m-form-field">
      <label className="a-label a-label__heading"
             htmlFor={ props.id }>
        { props.label }
      </label>
      <Select aria-label={ props.label }
              className={ props.className }
              classNamePrefix="react-select"
              inputId={ props.id }
              isClearable={ false }
              onChange={ changeHandler }
              options={ props.options }
              placeholder={ props.placeholder }
              styles={customStyles}
              value={ valueFromId( props.options, props.value ) }/>
      </div>
    );
};

export default Filter;
const Radio = ( props ) => {
    const onChange = e => {
      props.onChange( props.value );
    };
    return (
      <div className={`m-form-field m-form-field__radio m-form-field__lg-target
                       ${ props.containerClass ? props.containerClass : '' }`}>
        <input className="a-radio"
               type="radio"
               value={ props.value }
               id={ props.id }
               name={ props.name }
               checked={ props.checked }
               disabled={ props.disabled }
               onChange={ onChange }/>
        <label className="a-label"
               htmlFor={ props.id }>
          <span dangerouslySetInnerHTML={{__html: props.label }}></span>
        </label>
      </div>
    )
}

export default Radio;
const Checkbox = ( props ) => {
    const onChange = e => {
      props.onChange( props.value, e.target.checked );
    };
    
    return (
      <div className={`m-form-field m-form-field__checkbox m-form-field__lg-target
                       ${ props.containerClass ? props.containerClass : '' }`}>
        <input className="a-checkbox"
               type="checkbox"
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

export default Checkbox;
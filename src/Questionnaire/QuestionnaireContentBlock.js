const QuestionnaireContentBlock = ( { contentBlock  } ) => {
  return (
  	<div dangerouslySetInnerHTML={{__html: contentBlock.text }}></div>
  )
}

export default QuestionnaireContentBlock;
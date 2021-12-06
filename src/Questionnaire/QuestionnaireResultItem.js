const QuestionnaireResultItem = ( {result} ) => {
  return (
      <div className="block block__sub">
        <div dangerouslySetInnerHTML={{__html: result.text }}></div>
      </div>
  )
}

export default QuestionnaireResultItem;
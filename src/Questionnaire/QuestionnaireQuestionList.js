import QuestionnaireQuestion from './QuestionnaireQuestion.js';

const QuestionnaireQuestionList = ( 
  { questions, selections, content, handleChange } 
) => {
  console.log(questions)
  return (
      <div className="question-list">
        { questions.length > 0 && questions.map( ( item, index ) => (
          <QuestionnaireQuestion question={ item } 
                                 key={ item.id }
                                 selections={ selections }
                                 content={ content }
                                 handleChange={ handleChange } />
        ) ) } 
      </div>
  )
}

export default QuestionnaireQuestionList;
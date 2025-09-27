function Options({ question, dispatch, answer }) {
  const haveAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            haveAnswered ? (index === question.correctOption ? 'correct' : 'wrong') : ''
          }`}
          key={option}
          disabled={haveAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

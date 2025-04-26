function NextButton({dispatch}) {
    return (
        <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "nextQuestion" })}
              >
                Next Question
              </button>
    )
}

export default NextButton

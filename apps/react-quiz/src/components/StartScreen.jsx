function StartScreen({numQuestions}) {
    return (
        <div>
          <h2>Welcome to the React quiz!</h2> 
          <h3>{numQuestions} questions to test your react mastery</h3> 
          <button className="btn btn-ui">Let's start</button>
        </div>
    )
}

export default StartScreen

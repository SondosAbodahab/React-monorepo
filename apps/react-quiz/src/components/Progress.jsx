function Progress({ points, index, numQuestions, maxPossiblePoints }) {
    return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <progress id="file" value={points} max={maxPossiblePoints}>
        {" "}
        {points}{" "}
      </progress>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;

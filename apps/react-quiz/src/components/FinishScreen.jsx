function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> Out of {maxPossiblePoints}(
        {Math.ceil(percentage)}%)
      </p>
      <button className="btn btn-ui" onClick={()=>dispatch({type:'restart'})}>Restart quiz</button>
    </>
  );
}

export default FinishScreen;

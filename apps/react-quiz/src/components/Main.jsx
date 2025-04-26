import { Children } from "react";

function Main({children}) {
  return (
    <main className="main">
      <p>1/15</p>
      <p>Question</p>
        {children}
    </main>
  );
}
export default Main
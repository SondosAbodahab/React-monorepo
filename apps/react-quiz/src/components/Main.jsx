import { Children } from "react";

function Main({children}) {
  return (
    <main className="main">
      <p>1/15 question</p>
        {children}
    </main>
  );
}
export default Main
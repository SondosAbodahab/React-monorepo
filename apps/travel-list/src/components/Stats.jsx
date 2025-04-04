export default function Stats({ items }) {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = (numPacked / numItems) * 100;
    return (
      <footer className="stats">
        {numItems ? (
          <em>
            {percentage === 100
              ? `You have got everything ✈️`
              : `🧳 You have ${numItems} items on your list. and you already packed
          ${numPacked} (${percentage}%)`}
          </em>
        ) : (
          <em>Start adding some items 🚀</em>
        )}
      </footer>
    );
  }

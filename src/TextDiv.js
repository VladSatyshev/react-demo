const TextDiv = ({ loading, definition }) => {
  return !loading ? (
    <div
      style={{
        border: "2px solid",
        width: "1000px",
        height: "200px",
        margin: "10px auto",
        overflow: "auto",
      }}
    >
      <span>{definition}</span>
    </div>
  ) : (
    <div
      style={{
        border: "2px solid",
        margin: "10px auto",
        overflow: "auto",
      }}
    >
      Loading...
    </div>
  );
};

export default TextDiv;

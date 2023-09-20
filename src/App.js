import { useState, useEffect } from "react";
import TextDiv from "./TextDiv";

const API_KEY = "rfojOmWtM4RtBR5VJ5Q+mg==KeoG3G5OEAXKF0gU";

function App() {
  const [data, setData] = useState(null);
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    console.log("------");
    console.log(data);
    console.log(word);
    console.log(loading);
    console.log(showDiv);
  }, [data, word, loading, showDiv]);

  const handelLookup = async () => {
    setShowDiv(true);
    setLoading(true);
    const response = await fetch(
      `https://api.api-ninjas.com/v1/dictionary?word=${word}`,
      {
        headers: {
          "X-Api-Key": API_KEY,
        },
      }
    );
    const responseData = await response.json();
    setData(responseData);
    setLoading(false);
    if (responseData.valid === false) {
      setShowDiv(false);
    }
  };

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        React Demo
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <input
          type="text"
          value={word}
          onChange={handleChange}
          style={{ width: "200px" }}
        />
        <button onClick={handelLookup}>Find</button>
        <button
          onClick={() => {
            setData({});
            setWord("");
            setShowDiv(false);
          }}
        >
          Reset
        </button>
      </div>
      <h2
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content",
          fontSize: "20px",
          fontWeight: "bold",
          color: data?.valid === true ? "#4f87e8" : "red",
        }}
      >
        {data?.word}
      </h2>
      {showDiv === true ? <TextDiv loading={loading} definition={data?.definition}/> : <></>}
    </div>
  );
}

export default App;

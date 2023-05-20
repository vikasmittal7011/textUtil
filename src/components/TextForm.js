import { useState } from "react";

const TextFrom = (props) => {
  const [text, setText] = useState("");
  const [isDone, setDone] = useState(false);

  const handleChnage = (event) => {
    setText(event.target.value);
  };

  const handleClearCase = () => {
    setText("");
  };

  const handleUpCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowCase = () => {
    setText(text.toLowerCase());
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    setDone(true);

    setTimeout(() => {
      setDone(false);
    }, 5000);
  };

  const handleCapitalFirstLetterOfWord = () => {
    let newText = text.split(" ");
    let upperCaseText = newText.map((text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    });
    setText(upperCaseText.toString().replaceAll(",", " "));
  };

  const handleOddCharactersCapital = () => {
    let newText = "";
    for (let i = 0; i <= text.length; i++) {
      if (i % 2 === 0) {
        newText += text.charAt(i).toLowerCase();
      } else {
        newText += text.charAt(i).toUpperCase();
      }
    }
    setText(newText);
  };

  const handleEvenCharactersCapital = () => {
    let newText = "";
    for (let i = 0; i <= text.length; i++) {
      if (i % 2 === 0) {
        newText += text.charAt(i).toUpperCase();
      } else {
        newText += text.charAt(i).toLowerCase();
      }
    }
    setText(newText);
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };

  return (
    <>
      <div className="container mt-2 rounded rounded-4">
        <h1 style={{ color: props.color }}>{props.heading}</h1>
        <div
          className="alert alert-primary alert-dismissible fade show my-4 fs-4"
          role="alert"
          style={{ display: isDone === true ? "block" : "none" }}
        >
          <strong>Your text is successfully copy to your clipboard</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div className="mt-3">
          <textarea
            style={{
              backgroundColor: "transparent",
              color: props.mode !== "light" ? "white" : "black",
              borderColor: props.mode === "light" && "black",
            }}
            className="form-control"
            onChange={handleChnage}
            value={text}
            id="text"
            rows="6"
            placeholder="Write text here..."
          ></textarea>
        </div>
        <button
          hidden={text.length === 0}
          className={`btn btn-${props.btnColor} m-3`}
          onClick={handleClearCase}
        >
          Clear
        </button>
        <button
          hidden={text.length === 0}
          className={`btn btn-${props.btnColor} m-3`}
          onClick={handleUpCase}
        >
          UpperCase
        </button>
        <button
          hidden={text.length === 0}
          className={`btn btn-${props.btnColor} m-3`}
          onClick={handleLowCase}
        >
          LowerCase
        </button>
        <button
          hidden={text.length === 0}
          className={`btn btn-${props.btnColor} m-3`}
          onClick={handleCapitalFirstLetterOfWord}
        >
          Do Like This
        </button>
        <button
          hidden={text.length === 0}
          className={`btn btn-${props.btnColor} m-3`}
          onClick={handleOddCharactersCapital}
        >
          dOLiKeThIs
        </button>
        <button
          hidden={text.length === 0}
          className={`btn btn-${props.btnColor} m-3`}
          onClick={handleEvenCharactersCapital}
        >
          DoLiKeThIs
        </button>
        <button
          hidden={text.length === 0}
          className={`btn btn-${props.btnColor} m-3`}
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          hidden={text.length === 0}
          className={`btn btn-${props.btnColor} m-3`}
          onClick={handleRemoveSpaces}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container mt-5" style={{ color: props.color }}>
        <h1>Text summary is: </h1>
        <p>
          {
            text.split(" ").filter((word) => {
              return word.length !== 0;
            }).length
          }{" "}
          Word and
          {text.length} Letters
        </p>
        <p>
          Take{" "}
          {0.008 *
            text.split(" ").filter((word) => {
              return word.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextFrom;

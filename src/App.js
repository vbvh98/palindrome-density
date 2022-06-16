import { useState } from "react";
import TextArea from "./components/TextArea";
import ProgressBar from "./components/ProgressBar";
import { computeProgress } from "./utils";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <TextArea value={text} onInput={setText} />
      <ProgressBar
        label="Palindrome density"
        progress={computeProgress(text)}
      />
    </div>
  );
}

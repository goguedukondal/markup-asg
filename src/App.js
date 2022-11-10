import Display from "./components/Screen";
import Input from "./components/Input";
import React,{ useState } from "react";

function App() {
  const [markup, setMarkup] = useState("");
  return (
    < div  style={{display : "flex"
    }}>
      <Input setdatafn={setMarkup}></Input>
      <Display markupdata={markup}></Display>
    </div>
  );
}

export default App;
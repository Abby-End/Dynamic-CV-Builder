import {useState} from "react";
import FormPanel from "./components/FormComponent/FormPanel";
import CVPreview from "./components/CVComponent/CVPreview";
import { createInitialCV} from "./data/initialCV";
import "./App.css";

function App () {
  return (
    <div className="app-container">
      <FormPanel />
      <CVPreview />
    </div>
  );
}

export default App;
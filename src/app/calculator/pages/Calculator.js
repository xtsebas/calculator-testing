import { useState } from "react";

import Screen from "../components/Screen";
import Options from "../components/Options";  
import Numbers from "../components/Numbers";
import './Calculator.css';

const Calculator = props => {
    const [output, setOutput] = useState("");

    return (
        <div className="Calculator">
            <Screen value={output} />
            <Options setOutput={setOutput} output={output} />
            <Numbers setOutput={setOutput} output={output} />
        </div>
    );
};  

export default Calculator;
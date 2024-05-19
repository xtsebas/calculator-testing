import { useState } from "react";

import Screen from "../components/Screen";
import Options from "../components/Options";  
import Numbers from "../components/Numbers";
import './Calculator.css';

const Calculator = props => {
    const [output, setOutput] = useState("");
    const [total, setTotal] = useState("");

    return (
        <div className="Calculator">
            <Screen value={output} total={total} />
            <Options setOutput={setOutput} output={output} setTotal={setTotal} total={total} />
        </div>
    );
};  

export default Calculator;
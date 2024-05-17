import { useState } from 'react';

import './Options.css';
import { sum, sub, mul, div, toggleSign, isEqual } from '../operations.js';

const Options = props => {
    const [Option, setOption] = useState('');
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    const handleOptionClick = (option) => {
        if (Option === '') {
            setOption(option);
            console.log(option);
        }
        
        if (first === 0) {
            setFirst(props.output);
            props.setOutput('');
        } else if (second === 0){
            setSecond(props.output);
            props.setOutput('');
        }

        if (first !== 0 && second !== 0 && Option !== '') {
            
            if (Option === '+/-') {
                props.setOutput(toggleSign(props.output));
            }
            if (Option === '==') {
                props.setOutput(isEqual(first, second));
            }
            if (option === '=') {
                switch(option){
                    case '+':
                        props.setOutput(sum(first, second));
                        break;
                    case '-':
                        props.setOutput(sub(first, second));
                        break;
                    case '*':
                        props.setOutput(mul(first, second));
                        break;
                    case '/':
                        props.setOutput(div(first, second));
                        break;
                }
            }
        }



    };

    return (
        <section className="options">
            <option className="options__option" onClick={() => handleOptionClick('+')}>+</option>
            <option className="options__option" onClick={() => handleOptionClick('-')}>-</option>
            <option className="options__option" onClick={() => handleOptionClick('*')}>x</option>
            <option className="options__option" onClick={() => handleOptionClick('/')}>/</option>
            <option className="options__option" onClick={() => handleOptionClick('+/-')}>+/-</option>
            <option className="options__option" onClick={() => handleOptionClick('==')}> == </option>
            <option className="options__option" onClick={() => handleOptionClick('=')}> = </option>
        </section>
    );
};

export default Options;
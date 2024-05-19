import { useState, useEffect } from 'react';

import './Options.css';
import Numbers from './Numbers';
import { sum, sub, mul, div, toggleSign, isEqual } from '../operations.js';

const Options = (props) => {
    const [Option, setOption] = useState('');
    const [first, setFirst] = useState(null);
    const [second, setSecond] = useState(null);
    const [operationHistory, setOperationHistory] = useState('');

    useEffect(() => {
        let result;
        if (first !== null && Option === '+/-') {
            result = toggleSign(first);
            props.setOutput(result);
            props.setTotal(result);
        }

        if (first !== null && second !== null && Option !== '') {
            switch (Option) {
                case '+':
                    result = sum(first, second);
                    break;
                case '-':
                    result = sub(first, second);
                    break;
                case '*':
                    result = mul(first, second);
                    break;
                case '/':
                    result = div(first, second);
                    break;
                case '==':
                    result = isEqual(first, second);
                    break;
                default:
                    break;
            }
            if (Option !== '=') {
                props.setOutput(result);
                setFirst(result);
                setSecond(null);
                setOption('');
            }
        }
    }, [first, second, Option, props]);

    const handleOptionClick = (option) => {
        if (Option === '' && option !== '=') {
            setOption(option);
            if (props.output !== '') {
                const currentValue = Number(props.output);
                setFirst(currentValue);
                setOperationHistory(operationHistory + currentValue + option);
                console.log('aqui hace eso 2');
                props.setTotal(operationHistory + currentValue + option);
                props.setOutput('');
            }
        } else if (first !== null && props.output !== '' && option === '=') {
            const currentValue = Number(props.output);
            setSecond(currentValue);
            setOption(Option);
            setOperationHistory(operationHistory + currentValue);
            console.log('First:', first, 'Second:', second, 'Option:', Option, 'Output:', props.output);
            console.log('aqui hace eso 3');
            props.setTotal(operationHistory + currentValue);
        }
    };

    return (
        <>
            <section className="options">
                <button className="options__option" onClick={() => handleOptionClick('+')}>+</button>
                <button className="options__option" onClick={() => handleOptionClick('-')}>-</button>
                <button className="options__option" onClick={() => handleOptionClick('*')}>x</button>
                <button className="options__option" onClick={() => handleOptionClick('/')}>/</button>
                <button className="options__option" onClick={() => handleOptionClick('+/-')}>+/-</button>
                <button className="options__option" onClick={() => handleOptionClick('==')}>==</button>
                <button className="options__option" onClick={() => handleOptionClick('=')}>=</button>
            </section>
            <Numbers setOutput={props.setOutput} output={props.output} first={first} second={second} option={Option} setFirst={setFirst} setSecond={setSecond} setOption={setOption} setTotal={props.setTotal} setOperationHistory={setOperationHistory} />
        </>
    );
};

export default Options;

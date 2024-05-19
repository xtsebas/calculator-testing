import './Numbers.css';

const Numbers = (props) => {
    const handleNumberClick = (number) => {
        if (number === 'CE') {
            props.setFirst(null);
            props.setSecond(null);
            props.setOption('');
            props.setOutput('');
            props.setTotal('');
            props.setOperationHistory('');
            return;
        }

        if (props.output.length < 9) {
            props.setOutput(props.output + number);
        }
    };

    return (
        <section className="numbers">
            <button className="numbers__number" onClick={() => handleNumberClick('7')}>7</button>
            <button className="numbers__number" onClick={() => handleNumberClick('8')}>8</button>
            <button className="numbers__number" onClick={() => handleNumberClick('9')}>9</button>
            <button className="numbers__number" onClick={() => handleNumberClick('4')}>4</button>
            <button className="numbers__number" onClick={() => handleNumberClick('5')}>5</button>
            <button className="numbers__number" onClick={() => handleNumberClick('6')}>6</button>
            <button className="numbers__number" onClick={() => handleNumberClick('1')}>1</button>
            <button className="numbers__number" onClick={() => handleNumberClick('2')}>2</button>
            <button className="numbers__number" onClick={() => handleNumberClick('3')}>3</button>
            <button className="numbers__number" onClick={() => handleNumberClick('CE')}>CE</button>
            <button className="numbers__number" onClick={() => handleNumberClick('0')}>0</button>
            <button className="numbers__number" onClick={() => handleNumberClick('.')}>.</button>
        </section>
    );
};

export default Numbers;

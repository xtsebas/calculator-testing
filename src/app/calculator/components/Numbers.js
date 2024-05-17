import './Numbers.css';

const Numbers = props => {
    const handleNumberClick = (number) => {
        if (number === 'CE') {
            return props.setOutput('');
        }

        if (props.output.length < 9) {
            props.setOutput(props.output + number);
        }
    };

    return (
        <section className="numbers">
            <option className="numbers__number" onClick={() => handleNumberClick(7)}>7</option>
            <option className="numbers__number" onClick={() => handleNumberClick(8)}>8</option>
            <option className="numbers__number" onClick={() => handleNumberClick(9)}>9</option>
            <option className="numbers__number" onClick={() => handleNumberClick(4)}>4</option>
            <option className="numbers__number" onClick={() => handleNumberClick(5)}>5</option>
            <option className="numbers__number" onClick={() => handleNumberClick(6)}>6</option>
            <option className="numbers__number" onClick={() => handleNumberClick(1)}>1</option>
            <option className="numbers__number" onClick={() => handleNumberClick(2)}>2</option>
            <option className="numbers__number" onClick={() => handleNumberClick(3)}>3</option>
            <option className="numbers__number" onClick={() => handleNumberClick('CE')}>CE</option>
            <option className="numbers__number" onClick={() => handleNumberClick(0)}>0</option>
            <option className="numbers__number" onClick={() => handleNumberClick('.')}>.</option>
        </section>
    );
};

export default Numbers;
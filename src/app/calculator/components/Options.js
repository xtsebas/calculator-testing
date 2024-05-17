import './Options.css';

const Options = props => {
    return (
        <section className="options">
            <option className="options__option">+</option>
            <option className="options__option">-</option>
            <option className="options__option">x</option>
            <option className="options__option">/</option>
            <option className="options__option">+/-</option>
            <option className="options__option"> == </option>
            <option className="options__option"> = </option>
        </section>
    );
};

export default Options;
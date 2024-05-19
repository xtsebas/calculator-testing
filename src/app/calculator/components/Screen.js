import './Screen.css';

const Screen = props => {
    return (
        <div className="screen">
            <input className="screen__output" value={props.total || ""} readOnly  aria-label="total"/>
            <textarea className="screen__output" value={props.value || ""} readOnly aria-label="value" />
        </div>
    );
};

export default Screen;
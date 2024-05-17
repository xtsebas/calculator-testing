import './Screen.css';

const Screen = props => {
    return (
        <div className="screen">
            <textarea className="screen__output" value={props.value} readOnly />
        </div>
    );
};

export default Screen;
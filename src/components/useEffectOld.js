import React from "react";

class EffectfulComponentOld extends React.Component {

    constructor (props) {
        super(props);
        this.state = { input: '' };
    };

    setInput = (input) => {
        this.setState({input})
    };

    componentDidUpdate() {
        const {input} = this.state;
        document.title = input;
    }

    render = () => {
        const {input} = this.state;
        return (
            <input
                value={input}
                onChange={e => this.setInput(e.target.value)}
            />
        );
    }
}

export default EffectfulComponentOld;


import React from "react";


class StatefulComponentOld extends React.Component {

    constructor (props) {
        super(props);
        this.state = { input: '' };
    };

    setInput = (input) => {
        this.setState({input})
    };

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



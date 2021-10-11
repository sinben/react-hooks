import React  from 'react';

class Hater extends React.Component {
    render() {
        const pos = this.props.pos;
        return (
            <img src="/assets/Haters-gonna-hate.gif" style={{ position: 'absolute', cursor:'pointer', left: pos.x - 200, top: pos.y -200 }} />
        );
    }
}

class MousePosition extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 200, y: 200 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <MousePosition render={pos => (
                    <Hater pos={pos} />
                )}/>
            </div>
        );
    }
}

//https://reactjs.org/docs/render-props.html

//HOC
function withMouse(Component) {
    return class extends React.Component {
        render() {
            return (
                <MousePosition render={pos => (
                    <Component {...this.props} pos={pos}/>
                )}/>
            );
        }
    }
}


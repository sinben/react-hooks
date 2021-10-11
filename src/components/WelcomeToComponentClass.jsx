import React  from 'react';

export default class WelcomeToComponent extends React.Component {
    render() {
        return <h1>Velkommen til {this.props.title}</h1>;
    }
}



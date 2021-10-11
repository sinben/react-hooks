import React  from 'react';

export default class WelcomeToComponent extends React.Component {

    constructor(props){
        super(props);
        //Called first and only once when the page loads
    }

    componentDidMount() {
        //Called once when component is constructed and gets added to the DOM
    }

    componentWillUnmount() {
        //The componentDidMount() method runs when the component is removed from the DOM.
    }


    static getDerivedStateFromProps(nextProps, prevState){
        //Called before every render
    }


    shouldComponentUpdate(nextProps, nextState){
        //Runs immediately before render or when new props and/or state is received by the component.
        //Returns a boolean — default is set to true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        //This method is to allow us to capture some properties that are not stored in the state before we render that component
    }

    componentDidUpdate(previousProps, previousState, snapshot){
        //Called just after a re-render has finished
    }

    render() {
        return <h1>Velkommen til {this.props.title}</h1>;
    }

    static getDerivedStateFromError(){
        //These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
    }
    componentDidCatch(){}
}

//https://medium.com/@nancydo7/understanding-react-16-4-component-lifecycle-methods-e376710e5157
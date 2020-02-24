import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber() {
    this.setState({ data: this.state.data })
  }
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}
class Content extends React.Component {
  componentWillMount() { // trước khi rendering
    console.log('Component WILL MOUNT!')
  }
  componentDidMount() { // sau khi rendering
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {  //được gọi khi nhận vào 1 prop hoặc state của th cha truyền vào được setState
    console.log('Component WILL RECIEVE PROPS!')
    //is invoked as soon as the props are updated before another render is called
    //We triggered it from setNewNumber when we updated the state.
  }
  shouldComponentUpdate(newProps, newState) {  // được gọi sau ComponentWillReceiveProps
    // re-rendering if return true, otherwise return false
    console.log('should update')
    return true;
  }
  componentWillUpdate(nextProps, nextState) { // gọi trước khi rendering, sau shouldComponentUpdate
    console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) { // gọi sau khi redering
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() { // gọi khi component bị xóa hoặc unmount
    console.log('Component WILL UNMOUNT!')
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
export default App;


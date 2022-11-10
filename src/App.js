import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {angka:0}
  }
  dipencet(operasi){
    (operasi) ? this.setState({angka:this.state.angka+1}) : this.setState({angka:this.state.angka-1})
  }
  render(){
    return (
      <div className="App">
        <h1>Counter Dungs</h1>
        <span>{this.state.angka}</span>
        <br/>
        <br/>
        <button onClick={() => {this.dipencet(true)}}>Tambah</button>
        <button onClick={() => {this.dipencet(false)}}>Kureng</button>
      </div>
    );
  }
}

export default App;

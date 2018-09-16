import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.clicked = this.clicked.bind(this);
    this.handleAChange = this.handleAChange.bind(this);
    this.handleBChange = this.handleBChange.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.handleDChange = this.handleDChange.bind(this);
    this.state = {
      a: '',
      b: '',
      c: '',
      d: '',
      rez: null
    };
  }



  clicked(event){
    let a = parseFloat(this.state.a),
    b = parseFloat(this.state.b),
    c = parseFloat(this.state.c),
    d = parseFloat(this.state.d);
    debugger;
    let rez = Math.abs(a*a + b*b)/(Math.sqrt(Math.abs(a - b))/(c + d)).toFixed(4);
    this.setState({ rez })
  }

  handleAChange(event){
    this.setState({a: event.target.value});
  }

  handleBChange(event){
    this.setState({b: event.target.value});
  }

  handleCChange(event){
    this.setState({c: event.target.value});
  }
  handleDChange(event){
    this.setState({d: event.target.value});
  }


  render() {
    return (
      <div className='App'>
        <form>
          <table>
          <tbody>
            <tr>
              <td>A:</td>
              <td><input type="text" value={this.state.a} onChange={this.handleAChange} /></td>
              <td>B:</td>
              <td><input type="text" value={this.state.b} onChange={this.handleBChange}/></td>
              <td>C:</td>
              <td><input type="text" value={this.state.c} onChange={this.handleCChange}/></td>
              <td>D:</td>
              <td><input type="text" value={this.state.d} onChange={this.handleDChange}/></td>
              <td><button type="button" onClick={this.clicked}>Розрахувати</button></td>
            </tr>
            </tbody>
          </table>
        </form>
        <div>Розв'язок: {this.state.rez}</div>
      </div>
    );
  }
}

export default App;

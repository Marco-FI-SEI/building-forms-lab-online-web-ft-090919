// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ""
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            Enter band:
            <input id="band" type="text" onChange={(event) => this.handleChange(event)} value={this.state.name} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;

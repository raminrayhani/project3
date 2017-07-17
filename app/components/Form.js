import React from "react";

var NameField = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    };
  },

  onChange: function() {
    this.setState({
      value: e.target.value
    })
  },

  clear: function() {
    this.setState({
      value: ''
    })
  },

  render: function() {
    return (
      <input className='form-control' 
        placeholder={this.props.type + ' Name'} 
        onChange={this.onChange} value={this.state.value}/>
    );
  }
});

var EmailField = React.createClass({
  getInitialState: function() {
    return {
      valid: true,
      value: ''
    } 
  },

  clear: function() {
    this.setState({
      valid: true,
      value: ''
    })
  },

  render: function() {
    return (
      <div className={formClass}>
        <input className='form-control' onChange={this.onChange} placeholder='Email' value={this.state.value} />
      </div>
    )
  }
});

export default Form;

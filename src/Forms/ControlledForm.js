import React from 'react'

class ControlledForm extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
    }
  }

  // Generic way of handling the updating of the state for each onChange
  // 1. onChange = e => this.setState({ [e.target.name]: e.target.value })
  // 2. 
  handleChange(e) {
    // If you are using babel, you can use ES 6 dictionary syntax
    // let change = { [e.target.name] = e.target.value }
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
    console.log(e.target.value)
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {  
    return (
      <div className="container">
          <br />
          <br />
        <div className="row justify-content-center" >
          <div className="col-8">
            <h4>This is a controlled form</h4>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <form onSubmit={this.onSubmit}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Name</label>
                <input type="text" className="form-control" name="firstname" value={this.state.firstname} onChange={this.handleChange.bind(this)} />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Surname</label>
                <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.handleChange.bind(this)} />
              </div>
              <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    )
  }  
}  
export default ControlledForm  
import React from 'react'

class ControlledForm extends React.Component {  
  constructor(props) {
    super(props);
  }
  
  render() {  
    return (
      <div className="container">
          <br />
          <br />
        <div className="row justify-content-center" >
          <div class="col-8">
            <h4>This is a controlled form</h4>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="row justify-content-center">
          <div class="col-8">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <input type="submit" class="btn btn-primary" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    )
  }  
}  
export default ControlledForm  
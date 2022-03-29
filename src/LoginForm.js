import { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Form: [{
        user: '',
        email: '',
      }]
    }
  };

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    let onChangeHandle = (event) => {
      let name = event.target.name;
      let val = event.target.value;
      this.setState({ [name]: val });
    }
    let submitFunction = (e) => {
      e.preventDefault();
      let a = this.state.form
      this.props.loginHandler(a)
    }

    return (
      <form>
        <h3>Sign In</h3>
        <div className="form-group">
          <label>User Name</label>
          <input type="text" name="Form.user" className="form-control" placeholder="Enter User Name" onChange={onChangeHandle} />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input type="email" name="Form.email" className="form-control" placeholder="Enter E-Mail" onChange={onChangeHandle} />
        </div>
        <button type="submit" className="btn btn-primary btn-block" onSubmit={submitFunction}>Submit</button>
      </form>
    );
  }
};

export default LoginForm;

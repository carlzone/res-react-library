import React, { Component } from "react";
import $ from "jquery";
import SelectInput from "../inputs/selectinput";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reg_email: "",
      reg_password: "",
      reg_confirm: "",
      secret_question: "",
      secret_answer: ""
    };
  }

  render() {
    const question_choices = this.getQuestion();
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <main className="container-sm">
            <h2>Registration</h2>
            <div className="form-group text-start">
              <label htmlFor="register_username">Email Address</label>
              <input
                id="register_email"
                type="email"
                name="reg_email"
                placeholder="Email Address"
                className="form-control mb-2"
                required
                onChange={this.textInput}
              />
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="register_password">Password</label>
                  <input
                    id="register_password"
                    type="password"
                    name="reg_password"
                    placeholder="Password"
                    className="form-control mb-2"
                    required
                    onChange={this.textInput}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="register_confirm">Confirm Password</label>
                  <input
                    id="register_confirm"
                    type="password"
                    name="reg_confirm"
                    placeholder="Confirm Password"
                    className="form-control mb-2"
                    required
                    onChange={this.textInput}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="secret_question">Secret Question</label>
                  <SelectInput
                    id="secret_question"
                    name="secret_question"
                    class="mb-2"
                    selections={question_choices}
                    returnValue={this.returnValue}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="register_confirm">Secret Answer</label>
                  <input
                    id="secret_answer"
                    type="text"
                    name="secret_answer"
                    placeholder="Secret Answer"
                    className="form-control mb-2"
                    required
                    onChange={this.textInput}
                  />
                </div>
              </div>
            </div>
          </main>
          <footer className="container-sm text-end">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </footer>
        </form>
        <div className="container-sm">
          <div className="row row-cols text-start">
            <div className="col-12">{"Email: " + this.state.reg_email}</div>
            <div className="col-12">
              {"Password: " + this.state.reg_password}
            </div>
            <div className="col-12">{"Confirm: " + this.state.reg_confirm}</div>
            <div className="col-12">
              {"Question: " + this.state.secret_question}
            </div>
            <div className="col-12">
              {"Answer: " + this.state.secret_answer}
            </div>
          </div>
        </div>
      </>
    );
  }

  textInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.returnValue(name, value);
  };

  returnValue = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  getQuestion = () => [
    "What is the name of your dog?",
    "What country are you born?",
    "What is you mothers name?",
    "When is your elementary life start?",
    "When is your first kiss?",
    "When is your first trip outside country?"
  ];

  handleSubmit = (e) => {
    e.preventDefault();

    const formJSON = $("form").serializeArray();
    console.log(formJSON);

    return false;
  };
}

export default Registration;

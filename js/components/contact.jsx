import React from 'react';
import ReactDOM from 'react-dom';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      topic: "",
      message: "",
      info: "Wypełnij pola || Fill in the fields",
      borderName: "correct",
      borderMail: "correct",
      borderTopic: "correct",
      borderMessage: "correct"
    }
  }

  enterName(event) {
    this.setState({
      name: event.target.value
    })
  }

  enterMail(event) {
    this.setState({
      mail: event.target.value
    })
  }

  enterTopic(event) {
    this.setState({
      topic: event.target.value
    })
  }

  enterMessage(event) {
    this.setState({
      message: event.target.value
    })
  }

  sendMail(event) {
    event.preventDefault();
    if (
      (this.state.name != "") &&
      (this.state.message != "") &&
      (this.state.mail.indexOf("@") != -1) &&
      (this.state.topic != "")
    ) {
      this.setState({
        name: "",
        mail: "",
        topic: "",
        message: "",
        info: "Wiadomość wysłana || Message sent",
        borderName: "correct",
        borderMail: "correct",
        borderTopic: "correct",
        borderMessage: "correct"
      }, () => console.log("wysyłam"));
    } else {
      this.setState({
        info: "Popraw pola z czerwoną ramką || Correct inputs with red border"
      })

      if (this.state.name == "") {
        this.setState({
          borderName: "incorrect"
        })
      } else {
        this.setState({
          borderName: "correct"
        })
      }

      if (this.state.mail.indexOf("@") == -1) {
        this.setState({
          borderMail: "incorrect"
        })
      } else {
        this.setState({
          borderMail: "correct"
        })
      }

      if (this.state.topic == "") {
        this.setState({
          borderTopic: "incorrect"
        })
      } else {
        this.setState({
          borderTopic: "correct"
        })
      }

      if (this.state.message == "") {
        this.setState({
          borderMessage: "incorrect"
        })
      } else {
        this.setState({
          borderMessage: "correct"
        })
      }
    }
  }

  render() {
    return <div className="container">
      <h3>Kontakt || Contact</h3>
        <p className="info">{this.state.info}</p>
      <form className="contact">
        <div className="contact__inputs">
          <div className="contact__column">
            <input type="text" className={this.state.borderName} placeholder="imię || name" value={this.state.name} onChange={event => this.enterName(event)} />
            <input type="email" className={this.state.borderMail} placeholder="mail" value={this.state.mail} onChange={event => this.enterMail(event)} />
            <input type="text" className={this.state.borderTopic} placeholder="temat || topic" value={this.state.topic} onChange={event => this.enterTopic(event)} />
          </div>
          <div className="contact__column">
            <textarea className={this.state.borderMessage} placeholder="wiadomość || message" value={this.state.message} onChange={event => this.enterMessage(event)} />
          </div>
        </div>
        <div className="contact__submit">
          <input type="submit" value="wyślij || send" onClick={event => this.sendMail(event)} />
        </div>
      </form>
    </div>;
  }
}

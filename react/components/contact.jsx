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
      infoClass: "info--neutral",
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

    let message = {
      name: this.state.name,
      mail: this.state.mail,
      topic: this.state.topic,
      message: this.state.message
    }
    if (
      (this.state.name != "") &&
      (this.state.message != "") &&
      (this.state.mail.indexOf("@") != -1) &&
      (this.state.topic != "")
    ) {
      $.ajax({
		    url: 'https://formspree.io/edworczak@gmail.com',
		    method: 'POST',
        contentType:"application/json; charset=utf-8",
		    data: JSON.stringify(message),
		    dataType: 'json',
		    beforeSend: () => {
          this.setState({
            info: "Wysyłanie... || Sending...",
            infoClass: "info--neutral",
            borderName: "correct",
            borderMail: "correct",
            borderTopic: "correct",
            borderMessage: "correct"
          })
		    },
		    success: (data) => {
          this.setState({
            name: "",
            mail: "",
            topic: "",
            message: "",
            info: "Wiadomość wysłana || Message sent",
            infoClass: "info--sent"
          });
		    },
		    error: (err) => {
          this.setState({
            info: "Błąd wysyłania || Sending error",
            infoClass: "info--error"
          })
		    }
	    });
    } else {
      this.setState({
        info: "Popraw pola z czerwoną ramką || Correct inputs with red border",
        infoClass: "info--error"
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
      <form className="contact" action="https://formspree.io/edworczak@gmail.com" method="POST">
        <div className="contact__inputs">
          <div className="contact__column">
            <input type="text" name="Name" className={this.state.borderName} placeholder="imię || name" value={this.state.name} onChange={event => this.enterName(event)} />
            <input type="email" name="Mail" className={this.state.borderMail} placeholder="mail" value={this.state.mail} onChange={event => this.enterMail(event)} />
            <input type="text" name="Topic" className={this.state.borderTopic} placeholder="temat || topic" value={this.state.topic} onChange={event => this.enterTopic(event)} />
          </div>
          <div className="contact__column">
            <textarea name="Message" className={this.state.borderMessage} placeholder="wiadomość || message" value={this.state.message} onChange={event => this.enterMessage(event)} />
          </div>
        </div>
        <p className={this.state.infoClass}>{this.state.info}</p>
        <div className="contact__submit">
          <input type="submit" value="wyślij || send" onClick={event => this.sendMail(event)} />
        </div>
      </form>
    </div>;
  }
}

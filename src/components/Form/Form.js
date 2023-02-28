import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false
        }

        this.firstNameDataHandler = this.firstNameDataHandler.bind(this)
        this.laststNameDataHandler = this.laststNameDataHandler.bind(this)
        this.emailDataHandler = this.emailDataHandler.bind(this)
    }

    submitHandler (event) {
        event.preventDefault()
        this.setState({
            submitted : true ,
        })
        
        this.state.firstNameData && this.state.lastNameData && this.state.emailData && this.setState({allValid:true});

        setTimeout(() => {
            this.setState({
                allValid:false
            })
        }, 2000);
        
    }

    firstNameDataHandler (event) {
        this.setState({
            firstNameData : event.nativeEvent.target.value 
        })
    }

    laststNameDataHandler (event) {
        this.setState({
            lastNameData : event.nativeEvent.target.value 
        })

    }

    emailDataHandler (event) {
        this.setState({
            emailData : event.nativeEvent.target.value 
        })

    }

    render() {
        return (
            <div className="form-container">
                <form className="register-form" autoComplete="off" onSubmit={this.submitHandler.bind(this)}>
                    {/* Uncomment the next line to show the success message */}
                    {this.state.allValid && (<div className="success-message">Success! Thank you for registering</div>)  }
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value = {this.state.firstNameData}
                        onChange = {this.firstNameDataHandler}

                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && !this.state.firstNameData && <span id="first-name-error">Please enter a first name</span> }
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value = {this.state.lastNameData}
                        onChange = {this.laststNameDataHandler}

                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && !this.state.lastNameData && <span id="last-name-error">Please enter a last name</span> }
                    <input
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value = {this.state.emailData}
                        onChange = {this.emailDataHandler}

                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && !this.state.emailData && <span id="email-error">Please enter an email address</span> }
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}

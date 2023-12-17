// import { useState } from "react"
// import { login } from "../services/loginService"
import { useContext } from "react"
import useForm from "../hooks/useForm"
import AuthContext from "../contexts/authContext"

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext)

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    })


    // const [emailValue, setEmailValue] = useState ('')
    // const [passwordValue, setPasswordValue] = useState ('')

    // useEffect(() => {
    //     login()
    //         .then(result => setProperty({...result}))
    // }, [])

    // const emailChangeHandler = (e) => {
    //     setEmailValue(e.target.value)
    // }

    // const passwordChangeHandler = (e) => {
    //     setPasswordValue(e.target.value)
    // }

    // const resetFormHandler = (e) => {
    //     setEmailValue("")
    //     setPasswordValue("")
    // }

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     resetFormHandler()
    // }

    return (
            <>
                <div className="login-div">
                    <form className="login-form" onSubmit={onSubmit}>
                        <label htmlFor="email">Имейл:</label><br />
                        <input
                            type="email"
                            id="email"
                            name={LoginFormKeys.Email}
                            onChange={onChange}
                            value={values[LoginFormKeys.Email]}
                        />
                        <br />
                        <label htmlFor="password">Парола:</label><br />
                        <input
                            type="password"
                            id="password"
                            name={LoginFormKeys.Password}
                            value={values[LoginFormKeys.Password]}
                            onChange={onChange}
                        />

                        <input type="submit" value="Вход" />
                    </form>

                </div>
            </>
       
    )
  
}
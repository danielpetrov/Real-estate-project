// import { useState } from "react"
// import { login } from "../services/loginService"
import { useContext } from "react"
import useForm from "../../hooks/useForm"
import AuthContext from "../../contexts/authContext"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css'

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

    return (
        <>
            <div className={styles["login-div"]}>
                <Card className={styles["login-form-card"]}>
                    <Form className={styles["login-form"]} onSubmit={onSubmit}>
                        <label htmlFor="email">Имейл: </label><br />
                        <input
                            required
                            type="email"
                            id="email"
                            name={LoginFormKeys.Email}
                            onChange={onChange}
                            value={values[LoginFormKeys.Email]}
                        />
                        <br />
                        <label htmlFor="password">Парола: </label><br />
                        <input
                            required
                            type="password"
                            id="password"
                            name={LoginFormKeys.Password}
                            value={values[LoginFormKeys.Password]}
                            onChange={onChange}
                        />

                        <Button variant="primary" type="submit" value="Вход">Вход</Button>
                    </Form>
                </Card>
            </div>
        </>

    )

}
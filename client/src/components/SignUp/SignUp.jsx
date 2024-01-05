import { useContext } from "react"
import AuthContext from "../../contexts/authContext"
import useForm from "../../hooks/useForm"
import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/Card"
import styles from './SignUp.module.css'
import { Link } from "react-router-dom"


const RegisterFormKeys = {
    Name: 'name',
    Email: 'email',
    Password: 'password',
    Username: 'username',
    ConfirmedPassword: 'confirmedPassword',
}
export default function SignUp() {

    const {registerSubmitHandler} = useContext(AuthContext)
    const {values, onChange, onSubmit} =  useForm(registerSubmitHandler, {
        [RegisterFormKeys.Name]: '', 
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmedPassword]: ''
    })

    return (
        <>
        <div className={styles["signup-form-wrapper"]}>
            <Card className={styles["signup-form-card"]}>
                <h1 className={styles["signup-title"]} >Регистрация</h1>
                <form className={styles["signup-form"]} action="url" onSubmit={onSubmit}>
                    <label htmlFor="name"></label>
                    <input 
                        required
                        type="text" 
                        id="name" 
                        name="name"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Name]}
                        placeholder="Име"
                        className={styles["registration-input"]}
                    />      
                    <label htmlFor="email"></label>
                    <input 
                        placeholder="E-mail"
                        required
                        type="email" 
                        id="email" 
                        name="email"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Email]}
                        className={styles["registration-input"]}
                    />
                    <label htmlFor="username"></label>
                    <input 
                        placeholder="Потребителско име"
                        required
                        type="text" 
                        id="username" 
                        name="username"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Username]}
                        className={styles["registration-input"]}
                    />
                    <label htmlFor="password"></label>
                    <input 
                        placeholder="Парола"
                        required
                        type="password" 
                        id="password"
                        name="password"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Password]} 
                        className={styles["registration-input"]}
                    />
                    <label htmlFor="confirmedPassword"></label>
                    <input 
                        placeholder="Повторете паролата"
                        required
                        type="password" 
                        id="confirmedPassword"
                        name="confirmedPassword"
                        onChange={onChange}
                        value={values[RegisterFormKeys.ConfirmedPassword]} 
                        className={styles["registration-input"]}
                    />

                    <Button className={styles["signup-button"]} variant="primary" type="submit" value="Регистрирай">Регистрирай</Button>

                    <div>
                        <p>Вече имате профил? <Link to='/login' >Влезте в профила си</Link> </p>
                    </div>
                </form>
            </Card>
            </div>
        </>

    )
}
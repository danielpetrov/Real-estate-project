import { useContext } from "react"
import AuthContext from "../../contexts/authContext"
import useForm from "../../hooks/useForm"
import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/Card"
import styles from './SignUp.module.css'


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
                <form className={styles["signup-form"]} action="url" onSubmit={onSubmit}>
                    <label htmlFor="name">Име:</label>
                    <input 
                        required
                        type="text" 
                        id="name" 
                        name="name"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Name]}
                    />      
                    <label htmlFor="email">Имейл:</label>
                    <input 
                        required
                        type="email" 
                        id="email" 
                        name="email"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Email]}
                    />
                    <label htmlFor="username">Потребителско име:</label>
                    <input 
                        required
                        type="text" 
                        id="username" 
                        name="username"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Username]}
                    />
                    <label htmlFor="password">Парола:</label>
                    <input 
                        required
                        type="password" 
                        id="password"
                        name="password"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Password]} 
                    />
                    <label htmlFor="confirmedPassword">Повторете паролата:</label>
                    <input 
                        required
                        type="password" 
                        id="confirmedPassword"
                        name="confirmedPassword"
                        onChange={onChange}
                        value={values[RegisterFormKeys.ConfirmedPassword]} 
                    />

                    <Button variant="primary" type="submit" value="Регистрирай">Регистрирай</Button>
                </form>
            </Card>
            </div>
        </>

    )
}
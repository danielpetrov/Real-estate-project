import { useContext } from "react"
import AuthContext from "../contexts/authContext"
import useForm from "../hooks/useForm"


const RegisterFormKeys = {
    Name: 'name',
    Email: 'email',
    Password: 'password',
    Username: 'username',
    ConfirmedPassword: 'confirmed-password',
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
            <div className="signup-form-wrapper">
                <form className="signup-form" action="url" onSubmit={onSubmit}>
                    <label htmlFor="name">Име:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Name]}
                    />      
                    <label htmlFor="email">Имейл:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Email]}
                    />
                    <label htmlFor="username">Потребителско име:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Username]}
                    />
                    <label htmlFor="password">Парола:</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Password]} 
                    />
                    <label htmlFor="confirmed-password">Повторете паролата:</label>
                    <input 
                        type="password" 
                        id="confirmed-password"
                        name="confirmed-password"
                        onChange={onChange}
                        value={values[RegisterFormKeys.ConfirmedPassword]} 
                    />
                    {/* <p>Вие сте:
                        <input 
                            type="radio" 
                            id="real-estate-agency" 
                            name="agency" 
                            value="Агенция" 
                        />
                        <label htmlFor="real-estate-agency">Агенция</label>
                        <input 
                            type="radio" 
                            id="individual" 
                            name="individual" 
                            value="Частно лице" 
                        />
                        <label htmlFor="individual">Частно лице</label>
                    </p> */}

                    <input type="submit" value="Регистрирай"></input>
                </form>
            </div>
        </>

    )
}
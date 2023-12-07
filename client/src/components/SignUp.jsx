import { useContext } from "react"
import AuthContext from "../contexts/authContext"
import useForm from "../hooks/useForm"


const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',

}
export default function SignUp() {

    const {registerSubmitHandler} = useContext(AuthContext)
    const {values, onClick, onSubmit} =  useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: `${e.target.value}`,
        [RegisterFormKeys.Password]: `${e.target.value}`
    })

    return (
        <>
            <div className="signup-form-wrapper">
                <form className="signup-form" action="url">
                    <label htmlFor="name">Име:</label>
                    <input 
                        type="text" 
                        id="name" 
                    />
                    <label htmlFor="phone-number">Телефонен номер:</label>
                    <input 
                        type="tel" 
                        id="phone-number" 
                        name="phone-number" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                        required 
                    />
                    <label for="email">Имейл:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                    />
                    <label htmlFor="nickname">Потребителско име:</label>
                    <input 
                        type="text" 
                        id="nickname" 
                    />
                    <label htmlFor="password">Парола:</label>
                    <input 
                        type="password" 
                        id="password" 
                    />
                    <label htmlFor="repeat-password">Повторете паролата:</label>
                    <input 
                        type="password" 
                        id="repeat-password" 
                    />
                    <p>Вие сте:
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
                    </p>

                    <input type="submit" value="Регистрирай"></input>
                </form>
            </div>
        </>

    )
}
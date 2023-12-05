export default function Login() {
    return (
        <>
            <div className="login-div">
                <form className="login-form">
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" id="username" name="username" /><br />
                    <label htmlFor="pwd">Password:</label><br />
                    <input type="password" id="pwd" name="pwd" />
                </form>

            </div>
        </>
    )
}
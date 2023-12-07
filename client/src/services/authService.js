const baseUrl = "http://localhost:3030"

export async function login(loginData) {
    const response = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(loginData)
    })
    const loggedData = await response.json()
    return loggedData

}
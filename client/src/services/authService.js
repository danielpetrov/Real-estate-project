const baseUrl = "http://localhost:3030"

export async function login(loginData) {
    const response = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(loginData)
    })

    if (!response.ok) {
        const error = await response.json()
        throw error
    }

    const data = await response.json()   

    return data
}

export async function signup(signupData, token) {
    const response = await fetch(`${baseUrl}/users/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(signupData)
    })

    if (!response.ok) {
        const error = await response.json()
        throw error
    }

    const signedupData = await response.json()
    console.log(signedupData)
    return signedupData
}



export async function logout(token) {
    console.log(token)
    const response = await fetch(`${baseUrl}/users/logout`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Authorization": `${token}`,
        }
    })

    if (response.status === 403) {
        return {}
    }

}

export async function getProfileData(token) {
    const response = await fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Authorization": `${token}`,
        }
    })
    console.log(response)
    const profileData = await response.json()
    console.log(profileData)
    return profileData
}
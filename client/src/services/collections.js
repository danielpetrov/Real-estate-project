const baseUrl = "http://localhost:3030/data"

export const getMyOffers = async () => {
    const response = await fetch(`${baseUrl}/data/properties`)
    if (response.status === 404) {
        return false
    }
    const propertyData = await response.json()
    return Object.values(propertyData)
};


export const addNewOffer = async (propertyDetails) => {
    const response = await fetch(`${baseUrl}/data/properties`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Authorization": `${token}`,
        },
        body: JSON.stringify(loginData)
    })
    const loggedData = await response.json()
    
    return loggedData
}
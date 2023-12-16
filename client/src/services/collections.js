const baseUrl = "http://localhost:3030"

export const getMyOffers = async (token) => {
    const response = await fetch(`${baseUrl}/data/properties`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Authorization": `${token}`,
        }
    })

    if (response.status === 404) {
        return []
    }

    const propertyData = await response.json()
    return Object.values(propertyData)
};


export const addNewOffer = async (propertyDetails, token) => {
    const response = await fetch(`${baseUrl}/data/properties`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Authorization": `${token}`,
        },
        body: JSON.stringify(propertyDetails)
    })
    const propertyData = await response.json()

    return propertyData
}

export async function getMyOffer(id, token) {
    const response = await fetch(`${baseUrl}/data/properties/${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Authorization": `${token}`,
        }
    });

    if (response.status === 404) {
        return {}
    }
    const data = await response.json();
    console.log('data', data)
    return data;
};

export async function editMyOffer(id, token, editedPropertyData) {
    console.log('called', JSON.stringify(editedPropertyData))
    const response = await fetch(`${baseUrl}/data/properties/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Authorization": `${token}`,
        },
        body: JSON.stringify(editedPropertyData)
    });
    

    if (response.status === 404) {
        return {}
    }
    const editedPropertyDetails = await response.json();
    console.log('response', editedPropertyDetails)
    return editedPropertyDetails;
};

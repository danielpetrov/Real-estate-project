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
    if (!response.ok) {
        const error = await response.json()
        throw error
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
    if (!response.ok) {
        const error = await response.json()
        throw error
    }
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
    if (!response.ok) {
        const error = await response.json()
        throw error
    }
    const data = await response.json();

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

export const deleteOffer = async (_id, token) => {
    const response = await fetch(`${baseUrl}/data/properties/${_id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Authorization": `${token}`,
        },
        body: JSON.stringify(_id)
    })

    if (!response.ok) {
        const error = await response.json()
        throw error
    }
    const deletedData = await response.json()

    return deletedData
}
const baseUrl = "http://localhost:3030"

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/jsonstore/properties`)
    if (!response.ok) {
        const error = await response.json()
        throw error
    }
    const propertyData = await response.json()
    return Object.values(propertyData)
};

// TODO: better names
export async function getOne (id) {
    const response = await fetch(`${baseUrl}/jsonstore/properties/${id}`);
    if (!response.ok) {
        const error = await response.json()
        throw error
    }
    const singlePropertyData = await response.json();
    return singlePropertyData;
};
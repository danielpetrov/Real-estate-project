const baseUrl = "http://localhost:3030/jsonstore"

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/properties`)
    const propertyData = await response.json()
    return Object.values(propertyData)
};

export async function getOne (id) {
    const response = await fetch(`${baseUrl}/properties/${id}`);
    console.log(response)
    const singlePropertyData = await response.json();
    return singlePropertyData;
};
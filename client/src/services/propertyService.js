const baseUrl = "http://localhost:3030"

const buildFiltersQuery = (filters) => {
    if (!filters) {
        return ''
    }
    let filtersQuery = ''

    if (filters.city) {
        filtersQuery += `?where=location="${filters.city}"` 
    }

    return filtersQuery
}
const filterProperties = (filters, properties) => {
    return properties.filter(property => {
        if (filters.city) {
            if (property.location !== filters.city) {
                return false
            }
        }

        if (filters.district) {
            if (property.district !== filters.district) {
                return false
            }
        }

        if (filters.budgetLowest) {
            if (property.price < filters.budgetLowest) {
                return false
            }
        }

        if (filters.budgetHighest) {
            if (property.price > filters.budgetHighest) {
                return false
            }
        }

        return true
    })
}
export const getAll = async (filters) => {
    const response = await fetch(`${baseUrl}/jsonstore/properties${buildFiltersQuery(filters)}`)
    if (!response.ok) {
        const error = await response.json()
        throw error
    }
    const propertyData = await response.json()

    const properties = Object.values(propertyData)
    
    if (filters) {
        return filterProperties(filters, properties)
    }
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
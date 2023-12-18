import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default function SearchForm() {
    const [expanded, setExpanded] = useState(false)

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())


    return (
        <Card border="dark" className={`searchFormDiv${expanded ? ' expanded' : ''}`}>
            <h4 id="search-form-title">Започни търсенето</h4>
            <form className="search-form" action="url" >
                {/* <Select
                    showSearch
                    placeholder="Изберете град"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                        {
                            value: 'Sofia',
                            label: 'София',
                        },
                        {
                            value: 'Plovdiv',
                            label: 'Пловдив',
                        },
                        {
                            value: 'Varna',
                            label: 'Варна',
                        },
                    ]}
                /> */}

                <label htmlFor="offer-type"></label>
                <select id="offer-type" name="offer-type">
                    <option value="offer-type" selected hidden>Тип обява</option>
                    <option value="sell">Продава</option>
                    <option value="rent">Дава под наем</option>
                    
                </select>
                
                <label htmlFor="city"></label>
                <select id="city" name="city">
                    <option value="City" selected hidden>Изберете град</option>
                    <option value="Sofia">София</option>
                    <option value="Plovdiv">Пловдив</option>
                    <option value="Varna">Варна</option>
                </select>

                <label htmlFor="type"></label>
                <select id="type" name="type">
                    <option value="Type" selected hidden>Вид имот</option>
                    <option value="Apartment">Апартамент</option>
                    <option value="House">Къща</option>
                    <option value="plot">Парцел</option>
                </select>

                <label htmlFor="budget-lowest"></label>
                <input type="number" id="budget-lowest" name="budget-lowest" placeholder='Бюджет от'/>

                <label htmlFor="budget-highest"></label>
                <input type="number" id="budget-highest" name="budget-highest" placeholder='Бюджет до'/>

                <input className={!expanded ? 'hidden' : ''} type="number" id="rooms" name="rooms" />
            </form>

            <Button variant="primary" className="search-btn-form">Търсене</Button>

            <button className="filters-btn" onClick={() => { setExpanded(!expanded) }}>Допълнителни филтри ⬇</button>

        </Card>
    )
}
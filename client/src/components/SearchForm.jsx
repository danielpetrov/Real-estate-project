import { useState } from 'react'
import { Select } from 'antd'

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
        <div className={`searchForm${expanded ? ' expanded' : ''}`}>
            <form action="url" >
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

                <select id="city" name="city">
                    <option value="City" selected hidden>Изберете град</option>
                    <option value="Sofia">София</option>
                    <option value="Plovdiv">Пловдив</option>
                    <option value="Varna">Варна</option>
                </select>
                <select id="type" name="type">
                    <option value="Type" selected hidden>Изберете вид</option>
                    <option value="Apartment">Апартамент</option>
                    <option value="House">Къща</option>
                    <option value="plot">Парцел</option>
                </select>
                <input type="number" id="budget" name="budget" />

                <input className={!expanded ? 'hidden' : ''} type="number" id="rooms" name="rooms" />
            </form> <br />

            <button className="filters-btn" onClick={() => { setExpanded(!expanded) }}>Допълнителни филтри</button>

        </div>
    )
}
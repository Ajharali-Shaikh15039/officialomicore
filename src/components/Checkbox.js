import React, { useState } from 'react'
// import { Checkbox, Collapse } from 'antd';


function CheckBox(props) {
    
    const [Checked, setChecked] = useState(false)
    const [Product, setproduct] = useState(props.product);
    const handleToggle = (value) => {
       const list = value === "All" ? props.product : props.product.filter(obj => obj.category === value);
       
        setChecked(value);
        //update this checked information into Parent Component 

        //send list data to parent
        props.listCallback(list);

    }

    const renderCheckboxLists = () => props.categories.map((value, index) =>(
        <div style={{flex:1}} className="form-group form-check" key={index}>
            <input className="form-check-input"
                onChange={() => handleToggle(value)}
                type="checkbox"
               checked={Checked === value ? true : false}
            />&nbsp;&nbsp;
            <label className="form-check-label">{value}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    ))

    return (
        <div id="categoryList" style={{display:'flexbox'}}>
            {
                renderCheckboxLists()
            }
        </div>
    )
}

export default CheckBox;

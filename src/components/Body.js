import React,{useState} from 'react';
import product_card from "./product_data";
import CheckBox from "./Checkbox";

const Body = () => {
    const [list, setlist] = useState(product_card);
    const Filters = ["All"];

    for(let i=0; i<product_card.length; i++){
        //To get categories list
        if(Filters.indexOf(product_card[i].category) === -1){
            Filters.push(product_card[i].category);
        }
    }
    
    //To show respective selection of checkbox
    const handleFilters = (filterdList) =>{
        setlist(filterdList);
        console.log('called from child', filterdList);        
    }

    return ( 
         <div><p className="border-bottom" style={{marginTop:'50px',display:'flex',justifyContent:'center',fontSize:'56px',fontFamily:'serif'}}>PRODUCT</p>
        <CheckBox categories={Filters} product={product_card} listCallback={handleFilters}/>
        <div className="row row-cols-1 row-cols-md-3">
           {
               list.map((item) =>
               // <div className="col mb-3">
                   <div className="card border border-white" key={item.id} style={{padding:'20px'}}>
                           <img className="card-img-top" src={item.thumb} alt="omicore"/>
                       <div className="card-body">
                           <h2 className="card-title">{item.product_name}</h2>
                           <p className="card-text">{item.description}</p>
                           <p className="price">{item.price}<span>{item.currency}</span></p>
                       </div>
                   </div>
                   // </div>
               )
           }
        </div>
        </div>
    )
}

export default Body;

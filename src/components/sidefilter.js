import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import product_card from "./product_data.js";
import CheckBox from './Checkbox';
import { Container, Row , Col } from "react-bootstrap";
  
const useStyles = makeStyles((theme) => ({
  root: {
    width: "22%",
    padding: '25px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular
  },
  slide: {
    width: "100%"
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    // borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [list,setlist]=useState(product_card);
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

  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  return (
    // <div className='container'>
    <Container>
    <Row>
          {/* sidefilter  */}
          <Col sm={3}>
          {/* <div  style={{width: "22%",padding: '25px'}}> */}
          <Typography style={{fontSize:'22px'}}>Explore the Collections</Typography>
          <Typography className={classes.heading}>Filter By</Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Price</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.slide}>
                  <Slider
                    ValueLabelComponent={ValueLabelComponent}
                    aria-label="custom thumb label"
                    defaultValue={20}
                  />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Categories</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <div className={clsx(classes.column, classes.helper)}>
              {/* {list.slice(0, 8).map(item => {
                return (
                <FormControlLabel
                  // className={classes.slide}
                  aria-label="Acknowledge"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={item.category}
                />
                );
              })} */}
              <CheckBox categories={Filters} product={product_card} listCallback={handleFilters}/>
                </div>
              </AccordionDetails>
            </Accordion>
          {/* </div> */}
          </Col>
          {/* gridbox */}
          <Col sm={9}>
          <div id="new" className="row row-cols-1 row-cols-md-3" style={{overflowY: 'auto',height:'500px',}}>
           {
               list.map((item) =>
               // <div className="col mb-3">
                   <div className="card border border-white" key={item.id} style={{padding:'20px'}}>
                           <img className="card-img-top" src={item.thumb} alt="omicore"/>
                       <div className="card-body">
                           <h2 className="card-title">{item.product_name}</h2>
                           <p className="card-text">{item.description}</p>
                           <p className="price" style={{textAlign:'right'}}>{item.price}<span>{item.currency}</span></p>
                       </div>
                   </div>
                   // </div>
               )
           }
        </div>
        </Col>
          </Row>
          </Container>
    
  );
}

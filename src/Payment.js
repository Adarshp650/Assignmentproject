import './App.css'

const Payment = (props) =>{
    return(
       <>
       <div  className="paymentbord">
        
        <p style={{fontWeight:"bold"}}><span><img src={process.env.PUBLIC_URL + '/namelogo.png'}
         alt="namelogoimg" height={"30px"} width={"30px"} style={{borderRadius:'50%',marginRight:'8px'}}/></span>Name.com Inc.
        <span style={{marginLeft:"600px"}}>-{props.price}$</span></p>
        <p>Jun 22.Automatic Payment</p>
       </div>
       </>
    )
}

export default Payment
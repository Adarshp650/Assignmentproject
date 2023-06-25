import Payment from './Payment';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li style={{marginLeft:"200px"}}><a href="https://github.com/Adarshp650" >Home </a></li>
          <li><a href="https://www.paypal.com/uk/home">Finances</a></li>
          <li><a href="https://www.paypal.com/uk/home">Send and Request</a></li>
          <li><a href="https://www.paypal.com/uk/home">Deals</a></li>
          <li><a href="https://www.paypal.com/uk/home">Wallet</a></li>
          <li><a href="https://www.paypal.com/uk/home" style={{backgroundColor:"#1e3cb4",borderRadius:"25px"}}>Activity</a></li>
          <li><a href="https://www.paypal.com/uk/home">Help</a></li>
          <li><a href="https://www.paypal.com/uk/home">icon</a></li>
          <li><a href="https://www.paypal.com/uk/home">icon2</a></li>
          <li style={{marginLeft:"200px"}}><a href="https://www.paypal.com/uk/home">LOGOUT</a></li>
        </ul>
      </nav>
      <div className='container'>
      <div className="centered">
          <input id="srchbar"type="search" placeholder='Search by name or email'/>
      </div>
      <div className='centered'>
          <p style={{fontWeight:"bold"}}>Filter By</p>
        
      </div>
      <div className="centered">
      <p style={{color:"navy"}}><span className='items' style={{backgroundColor:"rgb(180, 230, 250)"}}>Date:Last 90 days</span><span className='items' style={{borderRadius:"1px solid black"}}>type</span>
          <span className='items'>status</span>
      </p>
      </div>
      
      <div className="centered">
      <p style={{fontWeight:"bold"}}>completed</p>
      </div>
      <div className="centered">
        This week
      </div>
      <div className="centered">
        <Payment price={9.89}/>
        <Payment price={8.99}/>
        <Payment price={9.99}/>
        <Payment price={9.99}/>
      </div>
      </div>
      </div>
  );
}

export default App;

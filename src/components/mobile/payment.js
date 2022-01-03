import './mobile.css';

export const Payment = () => {

    return (
        // <img class = "ava"  width="50" height="50" />
        <div className="membership">
            <div className="m-header">
                <div className="m-ava">                    
                    <img src = {require('./photo.png')} className="ava"  />                    
                </div>                
                <div className="m-list">
                    <ul className="list-unstyled m-name">
                    <li className="font-12">EXCLUSIVE CONTENT</li>
                    <li className="font-20">Ben Burns</li>
                    </ul>
                </div>
            </div>
            <div className="m-body">
                <div  className="font-18 pt-5">
                Select Payment<br></br>
                <p className='chose-label'>You chose: <span className='price'>$60.00 </span>for 3 months</p>
                </div>
                <div className="choose">                                
                    <div className='radio'>
                        <div className='first'>                    
                            <input type="radio" className='radio-p' id="html" name="fav_language" value="HTML" />
                            <div className='card-radio'>
                                <img src={ require('./card.png') } className='card-img' ></img>
                                <span className='card-num'>Card number</span>
                                <span className='card-date'>MM/YY&nbsp;&nbsp;&nbsp;&nbsp;CVC</span>
                            </div>
                        </div>
                         <div className='second'>                    
                            <input type="radio" className='radio-p' id="html" name="fav_language" value="HTML" />
                            <div className='paypal'>
                                <img src={ require('./paypal.png') } className='pay-img'  ></img>
                            </div>
                            <div className='d-block'>
                            <br></br>
                            <label className='pay-label'>You'll be redirected to paypal.com</label>
                            </div>                            
                        </div>
                    
                    </div>
                </div>
                <div className='pay-ex'>
                By continuing, you agree with Lynq <span className='text-w'> Terms of Use, Privacy Policy</span> and <span className='text-w'> Cookie Policy</span>
                </div>
            </div>     
            <div className='m-foot-btn'>
                <button className='pay-btn'>
                    Pay $60.00
                    </button>    
            </div>       
        </div>
    );
}

export default Payment;
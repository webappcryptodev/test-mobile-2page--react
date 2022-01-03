import './mobile.css';

export const Membership = () => {

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
                Select your membership
                </div>
                <div className="row">                    
                    <div className="col-4 btn-center">
                        <button className="m-btn">
                            $30.00<br></br>
                            per month
                        </button>
                    </div>
                    <div className="col-4 btn-center">
                    <button className="m-btn">
                            $30.00<br></br>
                            per month
                        </button>
                    </div>
                    <div className="col-4 btn-center">
                    <button className="m-btn">
                            $30.00<br></br>
                            per month
                        </button>
                    </div>                    
               
                </div>
                <div className='cancel-label'>
                    Cancel anytime
                </div>
            </div>     
            <div className='m-foot-btn'>
                <button className='continue-btn'>
                    Continue
                    </button>    
            </div>       
        </div>
    );
}

export default Membership;
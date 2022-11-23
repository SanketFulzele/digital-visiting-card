import "./digitalCard.css";
import Typecomp from "./Typecomp/Typecomp";

const DigitalCard = () => {

    const url = "https://trickysys.com/demo/digicards/index.php/Master/getCard";

    const data = {
        "slug": "dr.hemantsonare"
    }

    const options = {
        method: "POST",
        headers: new Headers({
            'Content-type': "text/plain",
        }),
        body: JSON.stringify(data)
    }

    // fetch(url, options)
    // .then(res =>{
    //     res.json().then((result) => {
    //         console.warn(result);
    //     })
    // } )

    
    return (
        <div className="content">

            <div className="main-container">

                <div className="flex">
                    <img className='person-img' src='images/person.jpg' alt='profile-pic' />
                </div>

                <h3 className='text-color heading '>Dr. Hemant Sonare</h3>


                <div className="roles-box">
                    <span className='text-color mid-heading'>Director -</span>
                    <span className='small-text'>Wanjari Group of Institution, Nagpur.</span>
                </div>

                <div className="roles-box">
                    <span className='text-color mid-heading'>President -</span>
                    <span className='small-text'> Maharashtra Pradesh Congress Committee - Industry Cell.</span>
                </div>



                <div className='flex'>
                    <div className="icons-container">

                        <Typecomp/>

                        <div className="icons-row">
                            <div className="icon-box">
                                <img src='https://cdn-icons-png.flaticon.com/512/3256/3256013.png' className="socialIcon" alt='social-icon' />
                            </div>
                            <div className="icon-box">
                                <img src='https://cdn-icons-png.flaticon.com/512/3256/3256013.png' className="socialIcon" alt='social-icon' />
                            </div>
                            <div className="icon-box">
                                <img src='https://cdn-icons-png.flaticon.com/512/3256/3256013.png' className="socialIcon" alt='social-icon' />
                            </div>
                            <div className="icon-box">
                                <img src='https://cdn-icons-png.flaticon.com/512/3256/3256013.png' className="socialIcon" alt='social-icon' />
                            </div>
                            <div className="icon-box">
                                <img src='https://cdn-icons-png.flaticon.com/512/3256/3256013.png' className="socialIcon" alt='social-icon' />
                            </div>
                            <div className="icon-box">
                                <img src='https://cdn-icons-png.flaticon.com/512/3256/3256013.png' className="socialIcon" alt='social-icon' />
                            </div>
                            <div className="icon-box">
                                <img src='https://cdn-icons-png.flaticon.com/512/3256/3256013.png' className="socialIcon" alt='social-icon' />
                            </div>
                            <div className="icon-box">
                                <img src='https://cdn-icons-png.flaticon.com/512/3256/3256013.png' className="socialIcon" alt='social-icon' />
                            </div>
                            <div className="icon-box">
                                <img src='https://cdn-icons-png.flaticon.com/512/3256/3256013.png' className="socialIcon" alt='social-icon' />
                            </div>
                            <div className="icon-box">
                                <img src='https://cdn-icons-png.flaticon.com/512/3256/3256013.png' className="socialIcon" alt='social-icon' />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div className="btn-box">

                    <button className="button downloadBtn">
                        Download Profile
                        <div className="button__horizontal"></div>
                        <div className="button__vertical"></div>
                    </button>

                    <button className="button contactBtn">
                        Save Contact
                        <div className="button__horizontal"></div>
                        <div className="button__vertical"></div>
                    </button>
                </div> 

        </div>
    )
}

export default DigitalCard

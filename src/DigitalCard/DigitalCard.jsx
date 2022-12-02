import { useEffect, useState } from "react";
import "./digitalCard.css";
import Typecomp from "./Typecomp/Typecomp";
import { useNavigate, useParams } from 'react-router-dom';

const DigitalCard = () => {

    const [path, setPath] = useState({});
    const [user, setUser] = useState();
    const [links, setLinks] = useState([]);
    const [designations, setDesignations] = useState([]);

    const url = `https://trickysys.com/demo/digicards/index.php/Master/getCard`;

    const Navigate = useNavigate();

    const { id } = useParams();

    console.log(id)

    useEffect(() => {

        const data = {
            "slug": id
        }

        const options = {
            method: "POST",
            headers: {
                'Content-type': "text/plain",
            },
            body: JSON.stringify(data)
        }


        fetch(url, options)
            .then(res => {
                res.json().then((result) => {
                    if(result.success === 0 ) {
                        Navigate("/error")
                    }else {
                        setPath(result.imagepath)
                        setUser(result.data)
                        setLinks(result.data.links)
                        setDesignations(result.data.designations)
                    }
                })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
        { user === undefined ? "" : 
    
                    <div className="content">

                        <div className="profileImgContainer">
                            <img src="/images/bgOne.jpg" className="bg-img" alt="bg-img" />
                        </div>

                        <div className="shadow-box">

                            <div className="main-container">

                                {user !== undefined ?
                                    <>
                                        <div className="flex avatar-box">
                                            <img className='person-img' src={`${path}image/${user.image}`} alt='profile-pic' />
                                        </div>

                                        <h3 className='text-color heading '> {user.name} </h3>
                                    </>
                                    : ""}

                                {designations !== undefined ?
                                    (designations.map((value) => {
                                        return (
                                            <div className="roles-box" key={value.id}>
                                                <span className='text-color mid-heading'> {value.designation} -</span>
                                                <span className='small-text'>{value.description}</span>
                                            </div>
                                        )
                                    })
                                    )
                                    : ""
                                }

                                <div className='flex'>
                                    <div className="icons-container">

                                        <Typecomp />

                                        <div className="icons-row">

                                            {links !== undefined ? (
                                                links.map((value) => {
                                                    return (
                                                        <div className="icon-box" key={value.id}>
                                                            <a href={value.link} target="_blank" rel="noreferrer">
                                                                <img src={`${path}types/${value.image}`} className="socialIcon" alt='social-icon' />
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            ) : ""}


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

                    </div>

                     }
        </>
    )
}

export default DigitalCard

import React from 'react' //for newer versions, no longer need this line
import { useState, useEffect } from 'react'
import '../App.css'
import TextareaAutosize from 'react-textarea-autosize';

import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const InjuryHelp = (props) => {
    const navigate = useNavigate()
    // use one state and make it an object, 
    //it would be like useState {} key would be one, two, three, etc...
    //when using onChange with radio buttons, use spread operator 
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("")
    const [five, setFive] = useState("");

    const [six, setSix] = useState("");
    const [seven, setSeven] = useState("");
    const [eight, setEight] = useState("");
    const [nine, setNine] = useState("");
    const [ten, setTen] = useState("");

    const handleChangeOne = e => {
        const target = e.target;
        if (target.checked) {
            setOne(target.value);
        }
        };

        const handleChangeTwo = e => {
            const target = e.target;
            if (target.checked) {
                setTwo(target.value);
            }
            };

            const handleChangeThree = e => {
                const target = e.target;
                if (target.checked) {
                    setThree(target.value);
                }
                };

                const handleChangeFour = e => {
                    const target = e.target;
                    if (target.checked) {
                        setFour(target.value);
                    }
                    };

                const handleChangeFive = e => {
                const target = e.target;
                if (target.checked) {
                    setFive(target.value);
                }
                };

                const handleChangeSix = e => {
                    const target = e.target;
                    if (target.checked) {
                        setSix(target.value);
                    }
                    };

                



    const [errors, setErrors] = useState([]);
    const [dbErrors, setDBErrors] = useState([]);

    const createProspect = (e) => {
        e.preventDefault();
        // navigate("/Evaluation")
        

        const newProspect = {
            one: one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        }

        axios.post("http://localhost:8000/api/prospects", newProspect)
            .then(res => {
                console.log(res.data);
                console.log("success adding a Prospect!!");
                navigate("/Evaluation")
            })
            .catch(err => {
                console.log("ERROR ❌ Couldn't Ad Prospect!");
                console.log("?????", err.response.data.error.errors);

                // handle Errors - another way
                const {errors} = err.response.data.error;
                const messages = Object.keys(errors).map( error => errors[error].message )
                console.log(messages);
                setDBErrors(messages);

            })
    }

    
    
    return (
    
    <div>

        <div className='formQ' >

        
        <h1 className='gold'>
        Rana Law Office 
        </h1>
        

        <h1 className='redWhite'>
            Auto Accident & Injury Help
        </h1>
        <h1 className='redWhite'>
            Get a Free Case Evaluation
        </h1>
        <h2>
            100's of people are injured in accidents every day and 
            MOST HAVE SERIOUS INJURIES THAT DESERVE COMPENSATION.
        </h2>
        <br />
        <h2>
            Insurance companies know this and try to settle a claim quickly for as little as possible by employing their own legal experts. This is why you need the best Injury Attorney on your side is essential for all accident cases today.
        </h2> <br />
        <h1 className='gold'>
            You May be Entitled to Maximum Compensation. Take this 60 second qualification and find out:
        </h1>

        </div>

            
            {
                dbErrors.map((err, index) => <p key={index} style={{color: "red", fontSize: "25px"}}>{err}</p>)
            }

            <form onSubmit={createProspect} >
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", alignContent: "space-between",justifyContent: "space-between",  padding: "15px" , border: "2px solid black", height: "auto", width: "auto" }} >

                
                {/* <h2>  How were you hurt? * </h2>
                <input type="textarea" onChange={(e) => setOne(e.target.value)} value={one} /> <br /> */}


            
            
            {/* Use TailWind for buttons, 
            Use import react dropdown via select  */}
                <div  >
                <h2>  How were you hurt? * </h2>
                    <label>
                    <input type="radio" 
                    value="Car Accident" 
                    checked={one === 'Car Accident'} 
                    onChange={handleChangeOne} />
                    Car Accident <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Truck Accident" checked={one === 'Truck Accident'} 
                    onChange={handleChangeOne} />
                    Truck Accident <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Bicycle or Pedestrian Accident" 
                    checked={one === 'Bicycle or Pedestrian Accident'} 
                    onChange={handleChangeOne} />
                    Bicycle or Pedestrian Accident <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Motorcycle Accident" checked={one === 'Motorcycle Accident'} 
                    onChange={handleChangeOne} />
                    Motorcycle Accident <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Other Motor Vehicle Accident or Injury" checked={one === 'Other Motor Vehicle Accident or Injury'} 
                    onChange={handleChangeOne} />
                    Other Motor Vehicle Accident or Injury <br />
                    </label>

                    </div> <br /> 

                {/* <h2> How long ago was your accident? *  </h2>
                <input type="text" onChange={(e) => setTwo(e.target.value)} value={two} /><br /> */}

                <div>
                <h2>  How long ago was your accident? * </h2>
                    <label>
                    <input type="radio" 
                    value="In the last 30 days" 
                    checked={two === 'In the last 30 days'} 
                    onChange={handleChangeTwo} />
                    In the last 30 days <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Within 1-6 months" checked={two === 'Within 1-6 months'} 
                    onChange={handleChangeTwo} />
                    Within 1-6 months <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Within 6-12 months" checked={two === 'Within 6-12 months'} 
                    onChange={handleChangeTwo} />
                    Within 6-12 months <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="More than 1 year ago" checked={two === 'More than 1 year ago'} 
                    onChange={handleChangeTwo} />
                    More than 1 year ago <br />
                    </label>


                    </div> <br />

                {/* <h2>  Was the accident your fault? * </h2>
                <input type="text" onChange={(e) => setThree(e.target.value)} value={three} /><br />
                <br /> */}

                <div>
                <h2>  Was the accident your fault? * </h2>
                    <label>
                    <input type="radio" 
                    value="No, It was not my fault" 
                    checked={three === 'No, It was not my fault'} 
                    onChange={handleChangeThree} />
                    No, It was not my fault <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Yes, it was my fault" checked={three === 'Yes, it was my fault'} 
                    onChange={handleChangeThree} />
                    Yes, it was my fault <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Not Sure" checked={three === 'Not Sure'} 
                    onChange={handleChangeThree} />
                    Not Sure <br />
                    </label>

                    </div> <br />


                {/* <h2>  Did the police arrive? * </h2> 
                <input type="text" onChange={(e) => setFour(e.target.value)} value={four} /><br /> */}

                <div>
                <h2>  Did the police arrive? * </h2>
                    <label>
                    <input type="radio" 
                    value="Yes" 
                    checked={four === 'Yes'} 
                    onChange={handleChangeFour} />
                    Yes <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="No" checked={four === 'No'} 
                    onChange={handleChangeFour} />
                    No <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="I don't know" checked={four === "I don't know"} 
                    onChange={handleChangeFour} />
                    I don't know <br />
                    </label>

                    </div> <br />

                {/* <h2>  How were you injured? * </h2>
                <input type="text" onChange={(e) => setFive(e.target.value)} value={five} /><br /> */}

                <div>
                <h2>  How were you injured? * </h2>
                    <label>
                    <input type="radio" 
                    value="Fatality or Wrongful Death" 
                    checked={five === 'Fatality or Wrongful Death'} 
                    onChange={handleChangeFive} />
                    Fatality or Wrongful Death <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Severe Injury: Fractures, Body Injury, Concussion" checked={five === 'Severe Injury: Fractures, Body Injury, Concussion'} 
                    onChange={handleChangeFive} />
                    Severe Injury: Fractures, Body Injury, Concussion <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Moderate Injury: Neck, Back Pain or Whisplash" checked={five === "Moderate Injury: Neck, Back Pain or Whisplash"} 
                    onChange={handleChangeFive} />
                    Moderate Injury: Neck, Back Pain or Whisplash <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="No Physical Injuries" checked={five === "No Physical Injuries"} 
                    onChange={handleChangeFive} />
                    No Physical Injuries <br />
                    </label>

                    </div> <br />

                {/* <h2>  Are you currently represented by an attorney in this accident? * </h2>
                <input type="text" onChange={(e) => setSix(e.target.value)} value={six} /><br />
                <br /> */}

                <div >
                <h2>  Are you currently represented by an attorney in this accident? * </h2>
                    <label>
                    <input type="radio" 
                    value="No, I do not have an attorney" 
                    checked={six === 'No, I do not have an attorney'} 
                    onChange={handleChangeSix} />
                    No, I do not have an attorney <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="I have an attorney but I need someone else to represent my case" checked={six === 'I have an attorney but I need someone else to represent my case'} 
                    onChange={handleChangeSix} />
                    I have an attorney but I need someone else to represent my case <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="Yes, I have an attorney" checked={six === "Yes, I have an attorney"} 
                    onChange={handleChangeSix} />
                    Yes, I have an attorney <br />
                    </label>

                    <label>
                    <input type="radio" 
                    value="I have already settled my case" checked={six === "I have already settled my case"} 
                    onChange={handleChangeSix} />
                    I have already settled my case <br />
                    </label>

                    </div> <br />

                <h2>
                    Please describe your accidents and injuries? *
                </h2> <br />
                {/* <input type="text" onChange={(e) => setSeven(e.target.value)} value={seven} /><br /> */}

                <TextareaAutosize
                    className='TextareaAuto'
                    onChange={(e) => setSeven(e.target.value)} value={seven} 
                /> <br />

                <h2>
                What's your full name? *
                </h2>
                {/* <input type="text" onChange={(e) => setEight(e.target.value)} value={eight} /><br />
                <br /> */} 
                <br />

                <TextareaAutosize
                    className='TextareaAuto'
                    onChange={(e) => setEight(e.target.value)} value={eight} 
                /> <br />

                {/* <h2>What's your best email? *</h2>
                <input type="text" onChange={(e) => setNine(e.target.value)} value={nine} /><br /> */}
                <br />

                <h2>What's your best email? *</h2>
                <TextareaAutosize
                    className='TextareaAuto'
                    onChange={(e) => setNine(e.target.value)} value={nine} 
                /> <br />

                {/* <h2>Your cell phone number? *</h2>
                <input type="text" onChange={(e) => setTen(e.target.value)} value={ten} /><br /> */}
                <br />

                <h2>Your cell phone number? *</h2>
                <TextareaAutosize
                    className='TextareaAuto'
                    onChange={(e) => setTen(e.target.value)} value={ten} 
                /> <br />

            

                <button className='btn' >Submit Information</button>


                </div>
                

            </form>
        
    </div>

    )
}

export default InjuryHelp
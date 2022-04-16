import React from 'react'

import { Checkmark } from 'react-checkmark'
import "../App.css"
import { useNavigate } from 'react-router-dom'


const Evaluation = () => {

    const navigate = useNavigate()
    const SendToRana = (e) => {
        navigate('/redirect')
    }

  return (

    <div className='App'>

<div className='App EvalPage' >

        
<h1 className='gold'>
Rana Law Office
</h1>


<h1 className='whiteBlack'>
    Thank You For Your Time
</h1>
<h1 className='whiteBlack'>
    You may qualify for compensation
</h1>

<h1 className='blackWhite'>
    Here's What Happens Next 
</h1>

<div>

<Checkmark size="large"  />
<h2 >
    You are going to recieve a confirmation text
</h2>
</div>

<br />
<h2 >
    <Checkmark size="large" />
    We will call you to review your case details
</h2> <br />

<h2 >
    <Checkmark size="large" />
    You'll find out if your accident qualifies for a claim
</h2> <br />


<h1 className='gold'>
    Our Best Attorney Can Start Working On Your Case Today
</h1>


<div className='callNowDiv' > 

<button variant='contained' className='callNow' onClick={SendToRana}>

    <h2 >
        Or Click to Conact Us Now
    </h2>
    <h2>
        Absolutely Free Case Evaluation
    </h2>

</button>

</div>

</div>

    </div>
  )
}

export default Evaluation
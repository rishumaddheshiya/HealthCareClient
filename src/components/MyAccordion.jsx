import React, { useState } from 'react'

import "../Styles/Accordion.css";
const MyAccordion = (props) => {
    const [show,setShow]=useState(false);
    const [isClicked, setIsClicked] = useState(null);
const id=props.id;
    const handleIsClicked = (id) => {
        if (isClicked === id) {
     
            return setIsClicked(null);
        }

        setIsClicked(id);
    };
  return (
    <div className='faq'>
    <div className='main-heading' >
    <h3 className={`
     ${isClicked === id ? 'active' : ''}`}
                                        onClick={() => handleIsClicked(id)} >{props.question}</h3>

<p onClick={()=>setShow(!show)}>  {show? "–" :"+"}</p>
</div>

   {show && <p className='answers'>{props.answer}</p>
} 
    
    </div>
  )
}

export default MyAccordion
import React, {useState} from 'react'

export default function Form(props) {
    const textChangeInUp = ()=> {
         let newText = text.toUpperCase();
         setText(newText);
    }    
    const onChangeHandel = (event)=> {       
        setText(event.target.value);
   }
    const [text, setText] = useState('Enter Text Here'); 
    return (
        <>
        <div className='container my-3'>
                <h3>Enter Text Blow</h3>
                <div className="mb-3">               
                    <textarea className="form-control" value={text} onChange={onChangeHandel} id="info" rows="5"></textarea>
                </div>
                <div>
                    <button className='btn btn-sm btn-primary' onClick={textChangeInUp}> Update Text</button>
                </div>              
        </div>
        
        <div className="container my-3">
            <h3>Text Counting</h3>
            <p> 
                {text.split(" ").length} Words {text.length} character 
            </p>
        </div>


        <div className="container my-3">
            <h4>Preview Text</h4>
            <p>{text}</p>
        </div>

        </>
    )
}

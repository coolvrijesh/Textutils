import React, {useState} from 'react'
import Card from './Card'

export default function About(props) {
const [darkStyle, setStyle] = useState({     
        color:'#000',
        backgroundColor:'#fff'
    
})   
const [btnText, setBtnText] = useState('Enable Dark Mode')
const darkModeEnable= ()=>{
    if(darkStyle.color =='#fff'){
        setStyle({
            color:'#333',
            backgroundColor:'#fff'
        })
        setBtnText("Enable Light Mode")
    }

    else{
        setStyle({
            color:'#fff',
            backgroundColor:'#000'
        })
        setBtnText("Enable Dark Mode")
    }
}
   
    return (
        <>
             <div className="container" style={darkStyle}>
                    <h1 className='pt-4'>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus consectetur amet molestiae, fugiat laudantium dolore porro pariatur nihil! Labore veritatis exercitationem placeat eos blanditiis assumenda dignissimos animi repudiandae harum?
                    </p> 
                    <div className='py-3'>
                        <Card darkStyle={{darkStyle}} Card1="Card title-1" Card2="Card title-2" Card3="Card title-3" ></Card>                   
                    </div>
            </div>

               <div className='container mt-3'>
                    <button className='btn btn-primary' onClick={darkModeEnable}> {btnText} </button>
               </div>
                
         </>
    )
}

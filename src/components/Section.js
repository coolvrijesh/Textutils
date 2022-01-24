import React from 'react' 
import RightSidebar from './RightSidebar'
export default function Section() {
    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 pt-4'>
                    <h1 className='mb-3'> Home Page </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit facere perspiciatis quas incidunt modi architecto quae debitis voluptate eum dolores, est iste minus expedita, quam tenetur suscipit nesciunt similique.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit facere perspiciatis quas incidunt modi architecto quae debitis voluptate eum dolores, est iste minus expedita, quam tenetur suscipit nesciunt similique.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit facere perspiciatis quas incidunt modi architecto quae debitis voluptate eum dolores, est iste minus expedita, quam tenetur suscipit nesciunt similique.</p>
                </div>
                <div className='col-md-4'>
                <RightSidebar/>
                </div>
            </div>
        </div>             
        </>
    )
}

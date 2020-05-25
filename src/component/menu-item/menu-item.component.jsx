import React from "react";
import './menu-item.styles.scss'
// import { Directory } from '../directory/directory.component';



export const MenuItem = (props) => (


    <>
        <div className='menu-item'>
            <div className='background-image'
                style={{
                    backgroundImage: `url(${props.imageUrl})`
                }} >

                <div className='content'>
                    <h1>{props.id}</h1>
                    <div className='title'>

                        <h1>{props.title}</h1>
                    </div>
                    <span className='subtitle'></span>


                </div>
            </div>
        </div>

    </>


)
import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'

function Logo() {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt shadow-2 br2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner flex justify-center pt3">
                <img alt="brain" src="https://img.icons8.com/carbon-copy/100/000000/brain.png"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
import React from 'react'

import './FaceRecognition.css'

function FaceRecognition({ faceBox, imgSrc }) {
    return (
        <div className="flex justify-center ma">
            <div className="absolute mt2">
                <img id="img" src={imgSrc} alt="" width="400px" height="auto"/>
                <div 
                    className="bounding-box"
                    style={{top: faceBox.topRow,
                            right: faceBox.rightCol,
                            bottom: faceBox.bottomRow,
                            left: faceBox.leftCol,
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition
import React from 'react'
import './ImageLinkForm.css'

function ImageLinkForm({ inputChange, submitImg }) {
    return (
        <div>
            <p className="f3">
                {'PASTE IMG SRC INSIDE OF BOX'}
            </p>
            <div className="flex justify-center">
                <div className="form pa4 br3 shadow-5">
                    <input 
                        className="f5 pa2 w-70 center"
                        type="text"
                        onChange={inputChange}
                    />
                    <button 
                        className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple "
                        onClick={submitImg}
                    >Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm
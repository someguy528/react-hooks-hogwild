import React, {useState} from "react";

function HogDisplay({hog}){
    const [isDetailShown, setDetailVisible] = useState(false);
    function handleDetailClick(){
        setDetailVisible((isDetailShown) => !isDetailShown)
    }

    const {name, specialty, image, greased, weight, "highest medal achieved": medal } = hog;

    return (
        <div>
            <img src={image} />
            <h2>{name}</h2>
            <button onClick={handleDetailClick}>{isDetailShown?"Hide Details":"Show Details"}</button>
            {isDetailShown?
                <div>
                    <p>{specialty}</p>
                    <p>Its Weight is {weight}</p>
                    <p>{greased ? 'Greased' : ''}</p>
                    <p>Highest Metal Achieved: {medal}</p>
                </div> 
                : null}
                
        </div>
    )
}

export default HogDisplay
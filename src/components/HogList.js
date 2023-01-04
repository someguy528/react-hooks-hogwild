import React from "react";
import HogDisplay from "./HogDisplay";

function HogList({hogs}){

    const allHogs = hogs.map((hog) => 
                <HogDisplay
                    key={hog.name}
                    hog={hog}
                />
    );

    return (
        <div>
            {allHogs}
        </div>
    )
}

export default HogList
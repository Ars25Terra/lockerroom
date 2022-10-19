import * as React from 'react';

import portrait from "../../../assets/male_portrait.jpg";

//TODO: Dynamical Image, etc

/**
 * Portrait Component
 */
const Portrait = (): JSX.Element => {
    return <div
                style={{backgroundImage: `url(${portrait})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    display: "flex",
                    width: '4em',
                    height: '4em',
                    borderRadius: '50%'
                }}/>
}

export default Portrait
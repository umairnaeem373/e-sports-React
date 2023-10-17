import React from "react";
import Sec1Mod2 from "../Components/Sec1Mod2";
import Sec2Mod1 from "../Components/Section2Mod1";

export default class Special extends React.Component{

    render(){
        return(
            <div>
                <Sec1Mod2/>
                <Sec2Mod1/>
            </div>
        )
    }
}
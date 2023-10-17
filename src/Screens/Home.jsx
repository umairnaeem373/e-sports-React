import React from "react";
import Section1 from "../Components/setion1";
import Ads from "../Components/ads";
import Cards from "../Components/Cards";
import SpecialDeals from "../Components/Special-Deals";
import Sec1Mod1 from "../Components/Sec1Mod1";
import Sec1Mod2 from "../Components/Sec1Mod2";
import Section2 from "../Components/Section2";
import Sec2Mod1 from "../Components/Section2Mod1";
import Sec2Mod2 from "../Components/Section2Mod2";


class Home extends React.Component{
    render(){
        return(
            <div className="Home">
            <Section1/>
            <Ads/>
            <Cards/>
            <SpecialDeals/>
            <Sec1Mod1/>
            <Sec1Mod2/>
            <Section2/>
            <Sec2Mod1/>
            <Sec2Mod2/>
            </div>
        )
    }

}

export default Home;
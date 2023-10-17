import React from "react";

export default class Section2 extends React.Component {
  render() {
    return (
      <div style={{margin:'0'}} className="sec1">
        <h1>VALORANT</h1>
        <div className="grid3">
          <div className="div1">
            <img src="./imgs/New-VALORANT-Agent-abilities-leaked-350x197.jpg" alt="" />
            <div>
                <h1>Have the abilities of the newest VALORANT agent been leaked?</h1>
                <p>According to popular VALORANT twitter account ValorLeaks, the abilities of the newest agent have been leaked.</p>
            </div>
          </div>
          <div className="div2">
          <img src=".//imgs/New-VALORANT-AGent-teaser-350x197.jpg" alt="" />
            <div>
                <h4>VALORANT blog teases newest agent</h4>
                <p>We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.</p>
            </div>
          </div>
          <div className="div3">
            <img src="./imgs/FPX-not-competing-at-vct-masters-350x197.jpg" alt="" />
            <div>
                <h4>Team Liquid to replace FunPlus Phoenix at VCT Masters Reykjavik</h4>
                <p>What many people have feared turned into reality, as FunPlus Phoenix is unable to participate at VCT Masters Reykjavik due to the war in Ukraine.</p>
            </div>
          </div>
          <div className="div4">
            <img src="./imgs/VCT-Masters-might-not-feature-russian-players-350x197.jpg" alt="" />
            <div>
                <h4>Russian VALORANT players likely can’t compete at VCT Masters</h4>
                <p>According to recent rumors, Russian players might not be able to participate during VCT Masters.</p>
            </div>
          </div>
          <div className="div5">
            <img src="./imgs/Cypher-VALORANT-removed-temporarily-350x197.jpg" alt="" />
            <div>
                <h4>VALORANT Bug party continues – Astra returns as Cypher breaks the game</h4>
                <p>VALORANT players are currently unable to play as Cypher due to a game-breaking bug. In the meantime, Astra returns to the field.</p>
            </div>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

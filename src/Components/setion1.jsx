import React from "react";

class Section1 extends React.Component {
  render() {
    return (
      <div className="sec1">
        <h1>Latest News</h1>
        <div className="grid1">
          <div>
            <img
              src="./imgs/wireless-gaming-headsets-affiliates-953x544.jpg"
              alt=""
            />
            <button>Gaming</button>
            <h2>Gaming Gear – The 5 best Wireless Headsets compared</h2>
            <p>
              Headsets are an essential part of your Gaming Gear. Now if you
              also want to enjoy the comfort of wireless headsets there are
              plenty to choose from. Here are our top 5 recommendations.
            </p>
          </div>
          <div>
            <button>League of Legends</button>
            <img
              src="./imgs/LEC-Grand-Final-to-feature-live-audience-350x197.jpg"
              alt=""
            />
            <div>
              <h4>
                LEC Grand Final To Feature Live Audience LEC to bring back live
                audience for Spring Split Finals
              </h4>
              <p>
                The LEC is bringing back the live audience for one series, as
                the competition
              </p>
            </div>
          </div>

          <div>
            <button>Gaming</button>
            <img src=".//imgs/Beste-Gaming-Headsets-350x197.jpg" alt="" />
            <div>
              <h4>
                Gaming Gear – The 5 best Gaming Headsets
              </h4>
              <p>
                The LEC is bringing back the live audience for one series, as
                the competition
              </p>
            </div>
          </div>
          <div>
            <button>League of Legends</button>
            <img
              src="./imgs/NAVI-CEO-about-war-in-Ukraine-350x197.jpg"
              alt=""
            />
            <div>
              <h4>
                How CEO Yevhen Zolotarov charts a
                course for NAVI through
              </h4>
              <p>
                war – “It’s surreal t... We reached out to Natus Vincere's CEO
                Yevhan Zolotarov to talk about his
              </p>
            </div>
          </div>
          <div>
            <button>Valorant</button>
            <img
              src="./imgs/New-VALORANT-Agent-abilities-leaked-350x197.jpg"
              alt=""
            />
            <div>
              <h4>
                Have the abilities of the
                newest VALORANT agent been leaked?
              </h4>
              <p>
                According to popular VALORANT twitter account ValorLeaks, the
                abilities of
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Section1;

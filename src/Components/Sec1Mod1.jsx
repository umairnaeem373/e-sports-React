import React from "react";

class Sec1Mod1 extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "0" }} className="sec1">
        <h1>League of Lengends</h1>
        <div className="grid1">
          <div style={{ gridArea: "1/1/6/4" }}>
            <img
              src="./imgs/Olaf-League-of-Legends-Splash-Art-922x544.jpg"
              alt=""
            />
            <h2>Riot plans mid-scope updates for both Taliyah and Olaf</h2>
            <p>
              League of Legends developers have talked about some possible
              updates to Taliyah and Olaf which <br />
              should be released in a couple of months.
            </p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <img
              src="./imgs/Doublelift-on-NA-servers-and-ping-issues-350x197.jpg"
              alt=""
            />
            <div>
              <h4>
                Doublelift calls out LCS players who don’t use Champions Queue
                to
              </h4>
              <p>
                Former LCS bot laner Doublelift has called out LCS players for
                not using
              </p>
            </div>
          </div>

          <div>
            <img src="./imgs/Best-season-12-mid-laners-350x197.jpg" alt="" />
            <div>
              <h4>The 5 best midlaners for season 12 solo queue</h4>
              <p>
                After covering toplane and jungle, we have arrived at the most
                central role in the
              </p>
            </div>
          </div>
          <div>
            <img
              src="./imgs/TSM-Not-in-playoffs-LCS-2022-350x197.jpg"
              alt=""
            />
            <div>
              <h4>
                TSM miss out on LCS playoffs for first time in franchise history
              </h4>
              <p>
                It certainly hasn’t been the split TSM had been hoping for in
                the LCS, as they’ve
              </p>
            </div>
          </div>
          <div>
            <img
              src="./imgs/TSMFTXmain-350x197.jpg"
              alt=""
            />
            <div>
              <h4>
              Update: Peter Zhang provides statement following being fired
              </h4>
              <p>
              Former TSM coach Peter Zhang has posted a statement after being fired
              </p>
            </div>
          </div>
          <div>
            <img
              src="./imgs/Tryndamere-Barbarian-King-Skin-334x197.jpg"
              alt=""
            />
            <div>
              <h4>
              Tryndamere to get nerfed in newest League of Legends
              </h4>
              <p>
              The newest League of Legends Patch 12.06 is hitting the rift soon, as the
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Sec1Mod1;

import React from "react";

class SpecialDeals extends React.Component{

    render(){

        return(
            <div>
                <div className="h-div">
                    <h1>Special Deals</h1>
                    <div>
                    <p>Contains sponsored content</p>
                    <button>AD</button>
                    </div>
                </div>

                <div className="specialDeals">
                    <div>
                    <img src="./imgs/Best-Gaming-Keyboards-350x197.jpg" alt="" />
                    <h4>Gaming Gear – The 5 best Gaming Keyboards</h4>
                    <p>Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!</p>
                    </div>
                    <div>
                    <img src=".//imgs/Best-Gaming-Mice-350x197.jpg" alt="" />
                    <h4>Gaming Gear – The 5 best gaming mice</h4>
                    <p>Looking for a new gaming mouse but unsure where to look? Let’s take a look at some of the top picks out there!</p>
                    </div>
                    <div>
                    <img src="./imgs/Header_Gaming-Desks-below-150-EN-350x197.jpg" alt="" />
                    <h4>Gaming Gear – The 5 best Gaming Desks for your setup</h4>
                    <p>Do you need a Gaming Desk? We think that you should grab one! Here is everything you need to know about their advantages and the best</p>
                    </div>
                    <div>
                    <img src="./imgs/Best-Gaming-Keyboards-350x197.jpg" alt="" />
                    <h4>Gaming Gear – The 5 best SSDs for Gaming</h4>
                    <p>Which SSDs are the most fitting for Gamers? Here are the Top 5 for every price range and specifications you require.</p>
                    </div>
                </div>
                
                <hr/>
            </div>

        )
    }

} 

export default SpecialDeals
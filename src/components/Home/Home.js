import React from 'react';
import Resgbg from '../../images/res-bg.jpg';
const Home = () => {
     return (
          <div className = "text-center">
          <h1>Resturant Home</h1>
          <h3><small>If you need food, just tap <u> Order/resturant </u> look at the right top corner you got it !!</small></h3>
               <img src={Resgbg} alt="" />
          </div>
     );
};

export default Home;
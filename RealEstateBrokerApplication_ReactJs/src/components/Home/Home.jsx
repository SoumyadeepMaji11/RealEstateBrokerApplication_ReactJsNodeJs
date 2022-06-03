import React from 'react'
import Header from './Header'; 
import img from './home.png';

const Home = () => {

  var styles = {
    h1: {
      fontSize:"70px",
      width: "100%",
      position: "absolute",
      top: "27%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontFamily: "'Brush Script MT', cursive"
    },
      img: {
        position: "absolute",
        top:"15%",
        left:"11%",
        backgroundRepeat: "norepeat",
        backgroundSize: "cover"

      }
  }

  return (
    <>
    <Header/>
    <div class="container">
    {/*  eslint-disable-next-line  */}
      <img style={styles.img} src={img} />
      <h1  style={styles.h1} className="center" >Welcome to Real Estate Broker Application</h1>
    </div>
    </>
  );
}

export default Home
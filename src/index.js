import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Chalo from './Dapp';
// import Janbaz from './Home';
// import Cheeta from './Class';
import Misar from './Prop';
import Yldrm from './Yldrm';
import Newarana from './newranag'
import Mazda from './newranag';


const newranag = ReactDOM.createRoot(document.getElementById('newranag'));
newranag.render(
  <React.StrictMode>
    <Newarana name="Adeema amir " maqsad="zindagi main koi bara kaam karna jisay log hamaisha yad rakhain!!" />
  </React.StrictMode>
);
ReactDOM.render(<Newarana />, document.getElementById('newranag'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






function Janbaz(props) {
  return (
    <div>
      <h1>aap kon ho bhai</h1>
      <h2>I am a { props.brand }!</h2>;      
    </div>
  );
}
let muj = <Janbaz brand="Pakka Mujahid Na Darnay Wala Na Biknay Wala" />;
const sada = ReactDOM.createRoot(document.getElementById('usmania'));
sada.render(muj);



function Car(fun) {
  return <h2>I am a { fun.papa }!</h2>;
} 
  // return <h2>I am a { fun.z }!</h2>;
  // Ha Ha Ha Is Ko Function Kahte Hen Kia

const rabis = <Car papa="good girl adeema" />;

const rana1 = ReactDOM.createRoot(document.getElementById('rana1'));
rana1.render(rabis);


const dil = ReactDOM.createRoot(document.getElementById('muslim'));
dil.render(
  <React.StrictMode>
    <Yldrm />
  </React.StrictMode>
);
ReactDOM.render(<dil />, document.getElementById('muslim'));

// ---------------------RABEES---------------------
function Truck(props) {
  return <h2>I am a { props.brand }!</h2>;
}
function Garage() {
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <Truck brand="Ford" />
    </>
  );
}
const rabees = ReactDOM.createRoot(document.getElementById('rabees'));
rabees.render(<Garage />);
// ---------------------RABEES---------------------


// const watan = ReactDOM.createRoot(document.getElementById('rabees'));
// watan.render(
//   <React.StrictMode>
//     <Cheeta />
//   </React.StrictMode>
// );
// ReactDOM.render(<watan/>, document.getElementById('rabees'));

const usmania = ReactDOM.createRoot(document.getElementById('usmania'));
usmania.render(
  <React.StrictMode>
    <Misar/>
  </React.StrictMode>
);
ReactDOM.render(<Misar/>, document.getElementById('usmania'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.render(<chalo />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const road = ReactDOM.createRoot(document.getElementById('budha'));

road.render(<React.StrictMode>
  <Mazda />
  </React.StrictMode>);

// const sab = ReactDOM.createRoot(document.getElementById('budha'));
// sab.render(
//   <React.StrictMode>
//     <Janbaz />
//   </React.StrictMode>
// );

function Trail(props) {
  return <h2>I am a { props.brand }!</h2>;
  }
  
  function Godam() {
      const gari = "purana";
    return (
      <>
        <h1>Who lives in my Godam?</h1>
        <Trail brand = {gari} />
      </>
    );
  }
  const Jawa = ReactDOM.createRoot(document.getElementById('budha'));
  Jawa.render(<Godam />);


const sabun = ReactDOM.createRoot(document.getElementById('joona'));
sabun.render(
  <React.StrictMode>
    <Chalo />
  </React.StrictMode>
);




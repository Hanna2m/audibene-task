import './App.css';
import Article from './components/Article';
import avatar from './images/author__johannes@2x.png';
import cover from './images/teaser.jpg'
import img from './images/pinch-ha.jpg'
import Footer from './components/Footer';
import logo from  './images/logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{height: "50px"}} alt="logo"/>
      </header>
      <div className='content'>
      <Article headline="How 2 Germans Are Changing Lives With This Amazing Hearing Aid"
              subHeadline="Hear well and save. Hear today explains what requirements you have to meet."
              editorAvatar={avatar}
              editorName="Johannes Gauss"
              articleCover={cover}
              caption1="hear.com founders"
              mainText={"Dr. Marco Vietor and Paul Crusius have been creating successful businesses since college. Now they lead hear.com, the fastest growing hearing aid company in the world. This is their story.\nLet’s be honest, very few people want to wear hearing aids. Although there have been huge improvements in technology, most people don’t use them simply because they are still big and ugly. However, Dr. Marco Vietor and Paul Crusius wanted to change this perception with a revolutionary device developed by the top hearing aid engineers from Signia./nAfter many years of research and development, Signia’s (formerly Siemens) team of engineers came up with a game-changing hearing aid."}
              block2="A hearing device that packs the latest German technology in a design so small, it disappears completely inside the ear. It’s called the Silk Px by Signia."
              articleImg={img}
              caption2="Signia Silk is the most discreet hearing aid in the world."
              block3={"This Silk Px comes with smartphone connectivity, allowing you to control the device with your iPhone or Android.\nIn addition, with this device you will notice remarkable improvements in your ability to clearly understand speech, even in noisy environments like a busy restaurant.\nDr. Vietor expressed his satisfaction with the Signia engineers’ work: “We can now offer amazing speech clarity and smartphone connectivity in a virtually invisible design – and all that for a reasonable price!“"}
              block4={"As of January 2020, hear.com has partnered with over 400 hearing care specialists to ensure the Silk Px is available across India.\nIt’s really no surprise that with this level of innovation, hear.com is gaining momentum. Over the next few months, the company has plans to expand their operations internationally. They have an aggressive strategy in place to open more offices and partner locations in India, Europe and the U.S."}
      />      
      </div>
      <Footer />
    </div>
  );
}

export default App;

import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

function Aboutpage() {
  return (
    <div className="container">
      <Header name = "yarmolchik-nazar" />

      <div className="main">
        <About />
      </div>

      <Footer/>
    </div>
  );
}

export default Aboutpage;
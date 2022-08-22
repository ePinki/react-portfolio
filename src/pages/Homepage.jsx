import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

function Homepage() {
  return (
    <div className="container">
      <Header name = "yarmolchik-nazar" />

      <div className="main">
        <Main />
      </div>

      <Footer/>
    </div>
  );
}

export default Homepage;
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import WhiteLabel from './components/WhiteLabel';
import Services from './components/Services';
import Hero from './components/Hero';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />  
      <main className="flex-grow">
        <Hero/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

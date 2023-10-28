import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import WhiteLabel from './components/WhiteLabel';
import Services from './components/Services';

import ProductsPage from './components/ProductsPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import ProfilePage from './components/ProfilePage';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />  
      <main className="flex-grow">
       <PaymentPage/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

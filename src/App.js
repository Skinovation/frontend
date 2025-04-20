import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Artikel from './component/Artikel';
import Footer from './component/Footer';
import IngredientsChecker from './component/IngredientsChecker';
import Intro from './component/intro';
import Join from './component/Join';
import Navbar from './component/navbar';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Steps from './component/steps/steps';

function HomePage() {
  return (
    <>
      <Navbar />
      <Intro />
      <Steps />
      <Join />
      <Artikel />
      <Footer />
    </>
  );
}

function ArtikelDetail({ artikelId }) {
  const renderContent = () => {
    switch (artikelId) {
      case 'kenali-bahan-skincare':
        return <p>Isi artikel tentang Kenali Bahan Skincare</p>;
      case 'bahan-berbahaya-vs-aman':
        return <p>Isi artikel tentang Bahan Berbahaya vs Aman</p>;
      case 'tips-skincare-jenis-kulit':
        return <p>Isi artikel tentang Tips Skincare Sesuai Jenis Kulit</p>;
      default:
        return <p>Artikel tidak ditemukan</p>;
    }
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Artikel Detail</h2>
        {renderContent()}
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="font-serif">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ingredients-checker" element={<IngredientsChecker />} />
          <Route path="/artikel/:artikelId" element={<ArtikelDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
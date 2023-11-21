import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark:bg-black text-black dark:text-white flex flex-col justify-between h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

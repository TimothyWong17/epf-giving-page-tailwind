import './App.css';
import NavBar from './components/NavBar/navbar';
import DonationForm from './components/DonationForm/DonationForm';

function App() {
  return (
    <>
      <NavBar />
      <div className='bg-indigo-600 flex flex-col gap-10 h-screen items-center justify-center' >
        <DonationForm />
      </div>

    </>
  );
}

export default App;

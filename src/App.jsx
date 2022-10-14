import './App.css'
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConnectWalletModal from './connect-wallet/components/ConnectWalletModal';

export default function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-5xl h-min min-h-screen flex flex-col text-white text-center">
        Test
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ConnectWalletModal />
        <Navbar />
        React ⚛️ + Vite ⚡ + Replit 🌀
      </div>
    </div>
  )
}

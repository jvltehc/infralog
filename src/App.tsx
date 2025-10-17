import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Units from './components/Units';
import ClientArea from './components/ClientArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import InspectionForm from './components/forms/InspectionForm';
import MaintenanceForm from './components/forms/MaintenanceForm';
import BilletForm from './components/forms/BilletForm';

function App() {
  const [modalContent, setModalContent] = useState<{
    isOpen: boolean;
    title: string;
    type: 'inspection' | 'maintenance' | 'billet' | null;
  }>({
    isOpen: false,
    title: '',
    type: null,
  });

  const openModal = (type: 'inspection' | 'maintenance' | 'billet', title: string) => {
    setModalContent({ isOpen: true, title, type });
  };

  const closeModal = () => {
    setModalContent({ isOpen: false, title: '', type: null });
  };

  const renderModalContent = () => {
    switch (modalContent.type) {
      case 'inspection':
        return <InspectionForm onClose={closeModal} />;
      case 'maintenance':
        return <MaintenanceForm onClose={closeModal} />;
      case 'billet':
        return <BilletForm onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Units />
      <ClientArea onOpenModal={openModal} />
      <Contact />
      <Footer />

      <Modal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default App;

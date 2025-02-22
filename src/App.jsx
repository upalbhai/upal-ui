// src/App.jsx
import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Modal from './components/Modal/Modal';
import ModalTrigger from './components/Modal/ModalTrigger';
import ModalHeader from './components/Modal/ModalHeader';
import ModalBody from './components/Modal/ModalBody';
import ModalFooter from './components/Modal/ModalFooter';
import Accordion from './components/Accordion/Accordion';
import AccordionItem from './components/Accordion/AccordionItem';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    console.log('Saved!');
    // Optionally close the modal after saving
    // handleCloseModal();
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    handleCloseModal(); // Close the modal on cancel
  };

  return (
    // <div>
    //   <Button variant="primary" onClick={handleOpenModal}>
    //     Open Modal
    //   </Button>

    //   <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
    //     <ModalHeader  title="Edit Profile" onClose={handleCloseModal} />
    //     <ModalBody >
    //       <form>
    //         <input type="text" placeholder="Name" />
    //         <input type="email" placeholder="Email" />
    //         <input type="email" placeholder="Email" />
    //         <input type="email" placeholder="Email" />
    //         <input type="email" placeholder="Email" />
    //       </form>
    //     </ModalBody>
    //     <ModalFooter >
    //       <Button variant="danger" onClick={handleCancel}>
    //         Cancel
    //       </Button>
    //       <Button variant="success" onClick={handleSave}>
    //         Save
    //       </Button>
    //     </ModalFooter>
    //   </Modal>
    // </div>
    <>

    
    </>
  );
};

export default App;

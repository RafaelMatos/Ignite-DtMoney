import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

export function App() {


  const [ isNewTransactionModalOpen,setINewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal(){

    setINewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setINewTransactionModalOpen(false);
  }

  return (

    <div className="App">
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal } />
      <Dashboard/>
      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} >
          <h2>Cadastrar transação</h2>
        </Modal>
      <h1>Hello World</h1>
      
    </div>
  );
}



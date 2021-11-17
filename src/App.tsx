import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
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
      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen} 
        onRequestClose={ handleCloseNewTransactionModal }
       />
      <h1>Hello World</h1>
      
    </div>
  );
}



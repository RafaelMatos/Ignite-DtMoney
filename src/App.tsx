import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsContext, TransactionsProvider } from './TransactionsContext';

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
    <TransactionsProvider>
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal } />
      <Dashboard/>
      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen} 
        onRequestClose={ handleCloseNewTransactionModal }
       />
      
    
    </TransactionsProvider>
  );
}



import { useState } from 'react';

import { Dashboard } from "./components/Dashboard";
//import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

import { WorkerPage } from './pages/WorkerPage/';

import { NewWorkerModal } from './components/NewWorkerModal';

import { TransactionsProvider } from './hooks/useTransactions';

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (

    <WorkerPage />

    // <TransactionsProvider>

    //   <NewWorkerModal />

    //   <br />
    //   <br />
    //   <br />
    //   <br />


    //   <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    //   <Dashboard />
    //   <NewTransactionModal
    //     isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}
    //   />
    //   <GlobalStyle />
    // </TransactionsProvider>

  );
}

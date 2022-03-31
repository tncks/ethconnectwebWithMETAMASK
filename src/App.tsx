import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import ConnectButton from './components/ConnectButton';
import Layout from './components/Layout';
import theme from './theme';
import AccountModal from './components/AccountModal';
import "@fontsource/inter";
import Count from './components/Count';

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

    <ChakraProvider theme={theme}>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <Count />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>

  );
}

export default App;
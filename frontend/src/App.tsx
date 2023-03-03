import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GamePage } from './Pages/GamePage';
import { ScoreBoard } from './Components/ScoreBoard';
import { Box, HStack } from '@chakra-ui/react';


function App() {
  return (
    <div className="App">
      <HStack>
      <Box>
      <GamePage/>
      </Box>
      <Box w={'20%'} h={'70vh'} border={'1px'}>
      <ScoreBoard/>
      </Box>
      </HStack>
    </div>
  );
}

export default App;

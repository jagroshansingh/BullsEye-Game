import {Box, Heading, VStack} from '@chakra-ui/react'
import React from 'react'
import { Score } from './Score'

export const ScoreBoard = () => {
    const [score,setscore]=React.useState(['one','two','three'])
  return (
    <div>
        <VStack>
            <Heading size={'md'}>Score-Board</Heading>
            {score?.map((each,i)=><Score key={i} props={each} count={i+1}/>)}
        </VStack>
    </div>
  )
}

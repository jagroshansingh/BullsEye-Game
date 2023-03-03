import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Score = (prop:any) => {
    // console.log(prop)
  return (
    <div>
        <Container border={'1px'} w={'17em'}>
        <Heading size={'sm'}>Round {prop.count}</Heading>
        <Text>{prop.props}</Text>
        </Container>
    </div>
  )
}

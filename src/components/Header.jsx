import { Box, Button, Container, Flex, Heading, HStack, Link, Spacer } from '@chakra-ui/react'
import React, {useState} from 'react'


export const Header = ({ account, setAccount, aboutSection }) => {

  const isConnected = Boolean(account[0])

  const connectAccount = async () =>{
    if(window.ethereum){
      const account = await window.ethereum.request({
        method: "eth_requestAccounts", 
      })
      setAccount(account)
      console.log(account);
    }
  }

  const scrollToAbout = () =>{
    aboutSection.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
     <Flex
        justify='space-between'
        align='center'
        padding='30px'
        borderBottom='2px solid black'>
          <Flex
            justify='space-around'
            width='40%'
            padding='0 75px'
            alignItems='center'>
              <Link
              href='#'>STAKE</Link>
              <Link href='#'>MARKETPLACE</Link>
          </Flex>
          <Heading
            fontFamily='reGermany2006'
            color='white'>
              GERMANY06NFT</Heading>
          <Flex
            justify='space-around'
            width='40%'
            padding='0 75px'
            alignItems='center'>
              <Link onClick={scrollToAbout}>ABOUT</Link>
              {isConnected ? (
                <Box margin='0 15px'>Connected</Box>
              ) : (
                <Button
                  onClick={connectAccount}>Connect</Button>
              )}
          </Flex>

      </Flex>
    </>
  )
}

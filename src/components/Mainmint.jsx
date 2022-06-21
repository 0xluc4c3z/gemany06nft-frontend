import React, { useEffect, useState, useRef } from 'react'
import { ethers } from "ethers";
import { VStack, Button, Flex, Image, Text, Box, HStack, Stack, Input, Link } from '@chakra-ui/react'
import Germany06NFT from '../web3/nftabi.json'

export const Mainmint = ({ account }) => {

  const Germany06Address = '0x6B5eA1B2ced8541c8082dFF8865c4A8141c54826'
  const[contractProvider, setContractProvider] = useState()
  const[contractSigner, setContractSigner] = useState()

  const[balanceOf, setBalanceOf] = useState()
  const[balanceGoalkeeper, setBalanceGoalkeeper] = useState()
  const[balanceDefense, setBalanceDefense] = useState()
  const[balanceMidfielder, setBalanceMidfielder] = useState()
  const[balanceForward, setBalanceForward] = useState()
  const[ubi, setUbi] = useState()

  const isConnected = Boolean(account[0])
  const inputRef = useRef();

  useEffect( () =>{
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(
        Germany06Address,
        Germany06NFT,
        provider
      )
      setContractProvider(contract)
      handleBalancePlayers()
      if(isConnected){
        handleBalanceTeam()
      }
    }
  }, [account])

  const handleBalanceTeam = async () =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contractSigner = new ethers.Contract(
      Germany06Address, Germany06NFT, signer
    )
    setContractSigner(contractSigner)
    const value = await contractProvider.balanceOf(account[0])
    setBalanceOf(Number(value))
  }

  const handleBalancePlayers = async () =>{
    const value1 = await contractProvider.s_contadorArqueros()
    const value2 = await contractProvider.s_contadorDefensas()
    const value3 = await contractProvider.s_contadorMediocentros()
    const value4 = await contractProvider.s_contadorDelanteros()

    setBalanceGoalkeeper(Number(value1) - 1)
    setBalanceDefense(Number(value2) - 1)
    setBalanceMidfielder(Number(value3) - 1)
    setBalanceForward(Number(value4) - 1)
  }

  const handleMintGoalkeeper = async () =>{
    if(isConnected){
      console.log({ value: ethers.utils.parseEther("0.02") });
      const value = await contractSigner.mintArquero({ value: ethers.utils.parseEther("0.02") })
    }
    else{
      alert('not connected');
    }
  }

  const handleMintDefender = async () =>{
    if(isConnected){
      console.log({ value: ethers.utils.parseEther("0.02") });
      const value = await contractSigner.mintDefensa({ value: ethers.utils.parseEther("0.02") })
    }
    else{
      alert('not connected');
    }
  }

  const handleMintMidfielder = async () =>{
    if(isConnected){
      console.log({ value: ethers.utils.parseEther("0.02") });
      const value = await contractSigner.mintMediocentro({ value: ethers.utils.parseEther("0.02") })
    }
    else{
      alert('not connected');
    }
  }

  const handleMintForward = async () =>{
    if(isConnected){
      console.log({ value: ethers.utils.parseEther("0.02") });
      const value = await contractSigner.mintDelantero({ value: ethers.utils.parseEther("0.02") })
    }
    else{
      alert('not connected');
    }
  }

  const handleMintTeam= async () =>{
    if(isConnected){
      console.log({ value: ethers.utils.parseEther("0.1") });
      const value = await contractSigner.mintTeam({ value: ethers.utils.parseEther("0.1") })
    }
    else{
      alert('not connected');
    }
  }

  const handleUBI = async () =>{
    const value = inputRef.current.value
    const ubi = await contractProvider.tokenURI(value)
    setUbi(ubi)
    console.log(ubi);
  }

  return (
    <>
      <Flex
      height='89vh'
      width='100%'
      // bg='red'
      justify='center'>
      <HStack position='absolute'>
        <Image src='../../public/cards/flags/italia.png' height='auto' width='50px'  />
        <Image src='../../public/cards/flags/francia.png' height='auto' width='52px' />
        <Image src='../../public/cards/flags/alemania.png' height='auto' width='50px'  />
        <Image src='../../public/cards/flags/portugal.png' height='auto' width='49px'  />
        <Image src='../../public/cards/flags/argentina.png' height='auto' width='51px'  />
        <Image src='../../public/cards/flags/inglaterra.png' height='auto' width='50px'  />
        <Image src='../../public/cards/flags/brazil.png' height='auto' width='52px'  />
        <Image src='../../public/cards/flags/ucrania.png' height='auto' width='47px'  />
      </HStack>
      <VStack position='absolute'
        marginTop='90px'>
          <Text>{account[0]}</Text>
          {isConnected ? (
            <Stack
              textAlign='center'>
              <Text>players in your team</Text>
              <Text>{balanceOf}</Text>
            </Stack>
          ):('')}
      </VStack>
      <Flex
        justify='space-around'
        // align='center'
        height='89vh'
        width='100%'
        paddingBottom='150px'
        >
          <VStack
            textAlign='center'
            // bg='blue'
            marginTop='106px'
            spacing={8}
            >
              <Text>
                  Buffon receives Yashin <br />Award for being<br /> the best goalkeeper <br /> of the tournament
              </Text>
              <Image src='../../public/Buffon.png' alt='Buffon' height='250px' width='auto'
                marginBottom='15px'
                boxShadow='0px 0px 15px black' />
              <Button onClick={() => handleMintGoalkeeper()}>MINT GOALKEEPER</Button>
              <Text>minted goalkeepers</Text>
              <Text>{balanceGoalkeeper}/24</Text>
          </VStack>
          <VStack
            textAlign='center'
            spacing={8}
            marginTop='106px'
            >
              <Text>
                Cannavaro received the silver <br />ball award for being the <br />second most outstanding <br />player of the tournament.
              </Text>
              <Image src='../../public/cannavaro.png' alt='Buffon' height='250px' width='auto' 
              boxShadow='0px 0px 15px black'  />
              <Button onClick={() => handleMintDefender()}>MINT DEFENDER</Button>
              <Text>minted defenders</Text>
              <Text>{balanceDefense}/60</Text>
          </VStack>
          <Box
            textAlign='center'
            // bg='blue'
            width='600px'>
              <HStack
                display='flex'

                >
                <Image src='../../public/shovkoski.png' alt='Buffon' height='250px' width='auto' 
                  marginBottom='15px' 
                  boxShadow='0px 0px 15px black'  
                  position='absolute'
                  zIndex='0'
                  left='34%'
                  top='18%' />
                <Image src='../../public/terry.png' alt='Buffon' height='250px' width='auto' 
                  marginBottom='15px' 
                  boxShadow='0px 0px 15px black'
                  position='absolute'
                  zIndex='1'
                  left='39%'
                  top='18%' />
                <Image src='../../public/cafu.png' alt='Buffon' height='250px' width='auto' 
                  marginBottom='15px' 
                  boxShadow='0px 0px 15px black'
                  position='absolute'
                  zIndex='2'
                  left='45%'
                  top='18%' />
                <Image src='../../public/riquelme.png' alt='Buffon' height='250px' width='auto' 
                  marginBottom='15px' 
                  boxShadow='0px 0px 15px black'
                  position='absolute'
                  zIndex='3'
                  left='51%'
                  top='18%'  />
                <Image src='../../public/figo.png' alt='Buffon' height='250px' width='auto' 
                  marginBottom='15px' 
                  boxShadow='0px 0px 15px black'
                  position='absolute'
                  zIndex='4'
                  left='57%'
                  top='18%' />
              </HStack>              
              <Button marginTop='510px' onClick={handleMintTeam}
                >MINT TEAM</Button>
              <Text marginTop='40px'>enter your token id to get player's information</Text>
              <Input marginTop='20px' marginRight='10px' size='sm' width='10%' bg='white' ref={inputRef}  />
              <Button size='sm' onClick={handleUBI} marginBottom='5px'>Submit</Button>
              <Link isExternal href={ubi}>{ubi}</Link>
            </Box>
            <VStack
            textAlign='center'
            spacing={8}
            marginTop='106px'>
              <Text>
                Zidane received the gold <br />ball award for being <br />the most outstanding <br />player of the tournament.
              </Text>
              <Image src='../../public/zidane.png' alt='Buffon' height='250px' width='auto' 
              boxShadow='0px 0px 15px black'  />
              <Button onClick={() => handleMintMidfielder()}>MINT MIDFIELDER</Button>
              <Text>minted midfielder</Text>
              <Text>{balanceMidfielder}/59</Text>
            </VStack>
            <VStack
            textAlign='center'
            spacing={8}
            marginTop='106px'>
              <Text>
                Klose received the golden <br />boot award for being <br />the tournament's top<br /> scorer.
              </Text>
              <Image src='../../public/klose.png' alt='Buffon' height='250px' width='auto' 
              boxShadow='0px 0px 15px black'  />
              <Button onClick={() => handleMintForward()}>MINT FORWARD</Button>
              <Text>minted forward</Text>
              <Text>{balanceForward}/41</Text>
            </VStack>
        </Flex>
      </Flex>
    </>
  )
}



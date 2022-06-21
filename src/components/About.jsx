import { Container, Flex, Heading, HStack, VStack, Text, Button, Icon, chakra } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'

export const About = ({ aboutSection }) => {
  return (
    <Flex
      width='100%'
      height='90vh'
      // bg='blue'
      borderTop='2px solid black'>
        <Container
          ref={aboutSection} 
          maxW='1200px'
          // bg='red'
          textAlign='center'>
            <Heading
              marginTop='50px'
              fontFamily='reGermany2006'>
                ABOUT
            </Heading>
            <Text
              marginTop='50px'
              fontSize='20px'>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas
               y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar 
               de las industrias desde el año 1500, cuando un impresor 
               (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y 
               los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,
                sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando 
                esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, 
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </Text>
            <HStack
              justify='space-around'
              marginTop='80px'
              color='white'>
              <VStack
                width='40%'
                height='300px'
                bg='#0A0B60'
                borderRadius='55px'>
                  <Heading
                    fontSize='25px'
                    fontFamily='reGermany2006'
                    marginTop='30px'>
                    MARKETPLACE</Heading>
                  <Text
                    paddingLeft={10}
                    paddingRight={10}
                    paddingTop={5}
                    paddingBottom={10}>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas
                        y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar 
                  </Text>
                  <Button color='black' rightIcon={<ExternalLinkIcon />} >Go</Button>
              </VStack>
              <VStack
                width='40%'
                height='300px'
                bg='#0A0B60 '
                borderRadius='55px'>
                  <Heading
                    fontSize='25px'
                    fontFamily='reGermany2006'
                    marginTop='30px'>
                    STAKE</Heading>
                  <Text
                    paddingLeft={10}
                    paddingRight={10}
                    paddingTop={5}
                    paddingBottom={10}>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas
                        y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar 
                  </Text>
                  <Button color='black' rightIcon={<ExternalLinkIcon />}>Go</Button>
              </VStack>
            </HStack>
        </Container>
    </Flex>
  )
}

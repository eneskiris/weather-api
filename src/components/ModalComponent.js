import { Button, Grid, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import CardComponent from './CardComponent'

const ModalComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Weather Info from February 20th</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Grid templateColumns={"repeat(2,1fr)"} gap={2}>
                    <CardComponent city={"Ankara"}/>
                    <CardComponent city={"İzmir"}/>
                </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default ModalComponent
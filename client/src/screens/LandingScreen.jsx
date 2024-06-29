import React from 'react';
import { Box, Flex, Heading, HStack, Icon, Image, Link, Skeleton, Stack, useColorModeValue as mode, Text } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { BsPhoneFlip } from 'react-icons/bs';

const LandingScreen = () => (
    <Box maxW='8xl' mx='auto' p={{ base: '4', lg: '12' }} minH={{ base: 'auto', lg: '6xl' }}>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '8', lg: '20' }}>
            <Box
                flex={{ base: 'none', lg: '1' }}
                bg={{ base: mode('linear-gradient(to bottom right, cyan.50, cyan.200)', 'linear-gradient(to bottom right, gray.700, gray.800)'), lg: 'transparent' }}
                borderRadius='xl'
                boxShadow={{ base: 'none', lg: 'md' }}
                mb={{ base: '8', lg: '0' }}>
                <Stack spacing='8' p={{ base: '6', lg: '8', xl: '12' }}>
                    <Flex alignItems='center'>
                        <Icon as={BsPhoneFlip} h={12} w={12} color={mode('cyan.500', 'yellow.200')} />
                        <Text fontSize={{ base: '2xl', lg: '3xl' }} fontWeight='bold'>
                            Vishal Steel Gujarat
                        </Text>
                    </Flex>
                    <Heading size='xl' fontWeight='bold'>
                        Refresh your equipment
                    </Heading>
                    <HStack spacing='3'>
                        <Link as={ReactLink} to='/products'>
                            <Box
                                as='button'
                                bg={mode('cyan.500', 'yellow.200')}
                                color={mode('white', 'gray.800')}
                                px='4'
                                py='2'
                                borderRadius='full'
                                fontWeight='semibold'
                                _hover={{ bg: mode('cyan.600', 'yellow.300') }}
                                transition='background 0.3s ease-in-out'>
                                Discover Products & Services
                                <Icon as={FaArrowRight} ml='2' />
                            </Box>
                        </Link>
                    </HStack>
                </Stack>
            </Box>
            <Flex flex={{ base: '1', lg: 'none' }} justify='center'>
                <Image
                    src={mode('images/landing-light.jpg', 'images/landing-dark.jpg')}
                    fallback={<Skeleton />}
                    maxH={{ base: '300px', lg: '550px' }}
                    minW='300px'
                    objectFit='cover'
                    borderRadius='xl'
                    boxShadow='lg'
                />
            </Flex>
        </Stack>
    </Box>
);

export default LandingScreen;

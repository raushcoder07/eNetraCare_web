import React from 'react';
import { Box, Flex, IconButton, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Thin = () => {
  return (
    <Box as="header" width="100%" backgroundColor="#004080" color="white" padding="0.5rem 1rem">
      <Flex 
        alignItems="center" 
        justifyContent="center" 
        flexDirection={{ base: 'column', md: 'row' }} 
        gap={{ base: '0.5rem', md: '1rem' }}
      >
        <Box fontSize="0.9rem" fontWeight="bold" textAlign="center">
          Follow us on:
        </Box>
        <Flex alignItems="center" gap="1rem">
          <Link href="https://www.facebook.com" isExternal>
            <IconButton
              icon={<FaFacebook />}
              aria-label="Facebook"
              variant="ghost"
              color="white"
              _hover={{ color: '#3b5998' }}
            />
          </Link>
          <Link href="https://www.instagram.com" isExternal>
            <IconButton
              icon={<FaInstagram />}
              aria-label="Instagram"
              variant="ghost"
              color="white"
              _hover={{ color: '#E1306C' }}
            />
          </Link>
          <Link href="https://www.twitter.com" isExternal>
            <IconButton
              icon={<FaTwitter />}
              aria-label="Twitter"
              variant="ghost"
              color="white"
              _hover={{ color: '#1DA1F2' }}
            />
          </Link>
          <Link href="https://www.linkedin.com" isExternal>
            <IconButton
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              variant="ghost"
              color="white"
              _hover={{ color: '#0077B5' }}
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Thin;

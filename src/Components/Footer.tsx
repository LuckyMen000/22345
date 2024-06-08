import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

const Footer: React.FC = () => {
    return (
        <Box bg="linear-gradient(to right, #fff , #43edf9)" color="black" textAlign="center" py={2} px={8}> 
            <Text>&copy; 2024 IT Online School. All rights reserved.</Text>
            <Text mt={2}>
                <Link href="/privacy" _hover={{ textDecoration: 'none', bg: "#06E1EF" }}>
                    Privacy Policy
                </Link>
                {' | '}
                <Link href="/terms" _hover={{ textDecoration: 'none', bg: "#06E1EF" }}>
                    Terms of Service
                </Link>
            </Text>
        </Box>
    );
};

export default Footer;

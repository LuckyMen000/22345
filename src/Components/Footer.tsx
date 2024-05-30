import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

const Footer: React.FC = () => {
    return (
        <Box bg="purple.600" color="white" py={4} textAlign="center">
            <Text>&copy; 2024 IT Online School. All rights reserved.</Text>
            <Text mt={2}>
                <Link href="/privacy" _hover={{ textDecoration: 'none', color: 'purple.300' }}>
                    Privacy Policy
                </Link>
                {' | '}
                <Link href="/terms" _hover={{ textDecoration: 'none', color: 'purple.300' }}>
                    Terms of Service
                </Link>
            </Text>
        </Box>
    );
};

export default Footer;

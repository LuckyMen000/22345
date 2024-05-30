import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <Box bg="purple.700" color="white" py={2} px={8}>
            <Flex align="center" justify="space-around">
                <Link as={RouterLink} to="/main" _hover={{ textDecoration: 'none', color: 'purple.300' }}>
                    Home
                </Link>
                <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'none', color: 'purple.300' }}>
                    About
                </Link>
                <Link as={RouterLink} to="/courses" _hover={{ textDecoration: 'none', color: 'purple.300' }}>
                    Courses
                </Link>
                <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none', color: 'purple.300' }}>
                    Contact
                </Link>
            </Flex>
        </Box>
    );
};

export default Nav;

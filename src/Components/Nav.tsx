import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import '../Components/Header.css'; // Импортируйте CSS файл

const Nav: React.FC = () => {
    return (
        <Box bg="linear-gradient(to right, white, #43edf9)" color="black" py={2} px={8}>
            <Flex align="center" justify="space-around">
                <Link as={RouterLink} to="/main" className="nav-link">
                    Главное
                </Link>
                <Link as={RouterLink} to="/about" className="nav-link">
                    About
                </Link>
                <Link as={RouterLink} to="/courses" className="nav-link">
                    Курсы
                </Link>
                <Link as={RouterLink} to="/contact" className="nav-link">
                    Contact
                </Link>
            </Flex>
        </Box>
    );
};

export default Nav;

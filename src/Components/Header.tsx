import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
    return (
        <Box bg="purple.600" color="white" py={4} px={8}>
            <Flex align="center" justify="space-between">
                <Heading as="h1" size="lg">IT Online School</Heading>
                <Text fontSize="lg">Learn, Grow, Succeed</Text>
            </Flex>
        </Box>
    );
};

export default Header;

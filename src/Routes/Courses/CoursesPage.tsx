import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Stack, Button, Image } from '@chakra-ui/react';
import Header from '../../Components/Header';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

const CoursesPage: React.FC = () => {
    return (
        <Box>
            <Header />
            <Nav />
            <Container maxW="container.xl" py={10}>
                <Heading as="h2" size="xl" mb={6} color="purple.700" textAlign="center">
                    Our Courses
                </Heading>
                <Text fontSize="lg" color="gray.600" textAlign="center" mb={10}>
                    Explore our range of courses designed to help you advance your career.
                </Text>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Box
                        bg="white"
                        boxShadow="lg"
                        borderRadius="md"
                        p={6}
                        _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
                    >
                        <Image src="https://via.placeholder.com/150" alt="Course 1" borderRadius="md" mb={4} />
                        <Heading as="h3" size="md" color="purple.700" mb={2}>
                            Course 1
                        </Heading>
                        <Text fontSize="md" color="gray.600" mb={4}>
                            Learn the basics of programming with this comprehensive course.
                        </Text>
                        <Button colorScheme="purple" variant="outline">
                            Learn More
                        </Button>
                    </Box>
                    <Box
                        bg="white"
                        boxShadow="lg"
                        borderRadius="md"
                        p={6}
                        _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
                    >
                        <Image src="https://via.placeholder.com/150" alt="Course 2" borderRadius="md" mb={4} />
                        <Heading as="h3" size="md" color="purple.700" mb={2}>
                            Course 2
                        </Heading>
                        <Text fontSize="md" color="gray.600" mb={4}>
                            Advanced web development techniques for modern applications.
                        </Text>
                        <Button colorScheme="purple" variant="outline">
                            Learn More
                        </Button>
                    </Box>
                    <Box
                        bg="white"
                        boxShadow="lg"
                        borderRadius="md"
                        p={6}
                        _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
                    >
                        <Image src="https://via.placeholder.com/150" alt="Course 3" borderRadius="md" mb={4} />
                        <Heading as="h3" size="md" color="purple.700" mb={2}>
                            Course 3
                        </Heading>
                        <Text fontSize="md" color="gray.600" mb={4}>
                            Master data science and machine learning with hands-on projects.
                        </Text>
                        <Button colorScheme="purple" variant="outline">
                            Learn More
                        </Button>
                    </Box>
                    {/* Add more courses as needed */}
                </SimpleGrid>
            </Container>
            <Footer />
        </Box>
    );
};

export default CoursesPage;

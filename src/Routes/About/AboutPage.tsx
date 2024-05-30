import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Stack, Image } from '@chakra-ui/react';
import Header from '../../Components/Header';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

const AboutPage: React.FC = () => {
    return (
        <Box>
            <Header />
            <Nav />
            <Container maxW="container.xl" py={10}>
                <Heading as="h2" size="xl" mb={6} color="purple.700" textAlign="center">
                    About Us
                </Heading>
                <Text fontSize="lg" color="gray.600" textAlign="center" mb={10}>
                    Learn more about our mission, values, and the team behind IT Online School.
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box>
                        <Image src="https://via.placeholder.com/500" alt="About Us" borderRadius="md" mb={4} />
                    </Box>
                    <Box>
                        <Stack spacing={4}>
                            <Heading as="h3" size="lg" color="purple.700">
                                Our Mission
                            </Heading>
                            <Text fontSize="md" color="gray.600">
                                Our mission is to provide high-quality education in the field of IT, making it accessible to everyone, everywhere. We strive to create a learning environment that is supportive, inclusive, and focused on practical skills.
                            </Text>
                            <Heading as="h3" size="lg" color="purple.700">
                                Our Values
                            </Heading>
                            <Text fontSize="md" color="gray.600">
                                At IT Online School, we value integrity, excellence, and innovation. We believe in the power of education to transform lives and are dedicated to helping our students achieve their full potential.
                            </Text>
                            <Heading as="h3" size="lg" color="purple.700">
                                Our Team
                            </Heading>
                            <Text fontSize="md" color="gray.600">
                                Our team is composed of experienced professionals and educators who are passionate about technology and teaching. We are committed to providing the best possible learning experience for our students.
                            </Text>
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Container>
            <Footer />
        </Box>
    );
};

export default AboutPage;

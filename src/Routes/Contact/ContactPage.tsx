import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Stack, Input, Textarea, Button } from '@chakra-ui/react';
import Header from '../../Components/Header';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

const ContactPage: React.FC = () => {
    return (
        <Box>
            <Header />
            <Nav />
            <Container maxW="container.xl" py={10}>
                <Heading as="h2" size="xl" mb={6} color="purple.700" textAlign="center">
                    Contact Us
                </Heading>
                <Text fontSize="lg" color="gray.600" textAlign="center" mb={10}>
                    We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box>
                        <Heading as="h3" size="lg" color="purple.700" mb={4}>
                            Our Address
                        </Heading>
                        <Text fontSize="md" color="gray.600">
                            IT Online School<br />
                            123 Main Street<br />
                            City, Country, 12345
                        </Text>
                        <Heading as="h3" size="lg" color="purple.700" mt={6} mb={4}>
                            Call Us
                        </Heading>
                        <Text fontSize="md" color="gray.600">
                            +1 234 567 890<br />
                            Mon-Fri 9am-6pm
                        </Text>
                        <Heading as="h3" size="lg" color="purple.700" mt={6} mb={4}>
                            Email Us
                        </Heading>
                        <Text fontSize="md" color="gray.600">
                            contact@itonlineschool.com
                        </Text>
                    </Box>
                    <Box>
                        <Heading as="h3" size="lg" color="purple.700" mb={4}>
                            Send Us a Message
                        </Heading>
                        <Stack spacing={4}>
                            <Input placeholder="Your Name" size="md" />
                            <Input placeholder="Your Email" size="md" />
                            <Textarea placeholder="Your Message" size="md" />
                            <Button colorScheme="purple" size="md">Submit</Button>
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Container>
            <Footer />
        </Box>
    );
};

export default ContactPage;

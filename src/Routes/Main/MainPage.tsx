import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Button, Image, useToast } from '@chakra-ui/react';
import Header from '../../Components/Header';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';
import '../../Components/Header.css'; // Импортируйте CSS файл

const MainPage: React.FC = () => {
    const toast = useToast();

    const handleLearnMore = (courseName: string) => {
        toast({
            title: `You clicked on "${courseName}"`,
            status: "info",
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box>
            <Header />
            <Nav />
            <Container maxW="container.xl" py={10}>
                <Heading as="h2" size="xl" mb={6} color="purple.700" textAlign="center">
                    Welcome to IT Online School
                </Heading>
                <Text fontSize="lg" color="gray.600" textAlign="center" mb={10}>
                    Join us to learn the latest skills in IT and advance your career.
                </Text>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <CourseCard
                        courseName="Course 1"
                        description="Learn the basics of programming with this comprehensive course. Perfect for beginners."
                        imageUrl="https://via.placeholder.com/150"
                        onClick={() => handleLearnMore("Course 1")}
                    />
                    <CourseCard
                        courseName="Course 2"
                        description="Advanced web development techniques for modern applications. Take your skills to the next level."
                        imageUrl="https://via.placeholder.com/150"
                        onClick={() => handleLearnMore("Course 2")}
                    />
                    <CourseCard
                        courseName="Course 3"
                        description="Master data science and machine learning with hands-on projects. Dive deep into AI."
                        imageUrl="https://via.placeholder.com/150"
                        onClick={() => handleLearnMore("Course 3")}
                    />
                    {/* Add more CourseCards here */}
                </SimpleGrid>
            </Container>
            <Footer />
        </Box>
    );
};

interface CourseCardProps {
    courseName: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ courseName, description, imageUrl, onClick }) => {
    return (
        <Box
            bg="white"
            boxShadow="lg"
            borderRadius="md"
            p={6}
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
        >
            <Image src={imageUrl} alt={courseName} borderRadius="md" mb={4} />
            <Heading as="h3" size="md" color="purple.700" mb={2}>
                {courseName}
            </Heading>
            <Text fontSize="md" color="gray.600" mb={4}>
                {description}
            </Text>
            <Button colorScheme="purple" variant="outline" onClick={onClick}>
                Learn More
            </Button>
        </Box>
    );
};

export default MainPage;

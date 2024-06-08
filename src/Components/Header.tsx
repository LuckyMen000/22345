import React from 'react';
import {
    Box,
    Flex,
    Image,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    useMediaQuery,
    Text,
    Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import TXSchool from '../img/TXSchool.png';
import '../Components/Header.css'; // Импортируйте CSS файл

const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <Box className="header-bg">
            <Flex align="center" justify="space-between">
                <Flex align="center">
                    <Image src={TXSchool} alt="TXSchool Logo" height="40px" objectFit="contain" />
                    <Text fontSize="sm" ml={2} color="gray.500"></Text>
                </Flex>
                {!isMobile && (
                    <Flex align="center">
                        <Link href="#" mx={2} className="animated-link">Разработчик</Link>
                        <Link href="#" mx={2} className="animated-link">Программист</Link>
                        <Link href="#" mx={2} className="animated-link">Блогер</Link>
                        <Link href="#" mx={2} className="animated-link">3D-моделлер</Link>
                        <Link href="#" mx={2} className="animated-link">Веб-дизайнер</Link>
                    </Flex>
                )}
                <Flex align="center">
                    <Button
                        bg="white"
                        border="2px solid #ff8c28"
                        color="black"
                        borderRadius="full"
                        _hover={{ bg: "#ff8c28", color: "white" }}
                        mr={4}
                        height="40px"
                        px={4}
                    >
                        Подобрать занятия
                    </Button>
                    {isMobile && (
                        <Button
                            onClick={onOpen}
                            variant="outline"
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            height="40px"
                            px={4}
                        >
                            <HamburgerIcon />
                            <Text ml={2}>Меню</Text>
                        </Button>
                    )}
                </Flex>
            </Flex>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Меню</DrawerHeader>
                    <DrawerBody>
                        <Button
                            w="100%"
                            bg="white"
                            border="1px solid #06E1EF"
                            color="black"
                            _hover={{ bg: "#06E1EF", color: "white" }}
                            variant="ghost"
                            borderRadius="full"
                            mb={1}
                        >
                            Разработчик
                        </Button>
                        <Button
                            w="100%"
                            bg="white"
                            border="1px solid #06E1EF"
                            color="black"
                            _hover={{ bg: "#06E1EF", color: "white" }}
                            variant="ghost"
                            borderRadius="full"
                            mb={1}
                        >
                            Программист
                        </Button>
                        <Button
                            w="100%"
                            bg="white"
                            border="1px солид #06E1EF"
                            color="black"
                            _hover={{ bg: "#06E1EF", color: "white" }}
                            variant="ghost"
                            borderRadius="full"
                            mb={1}
                        >
                            Блогер
                        </Button>
                        <Button
                            w="100%"
                            bg="white"
                            border="1px solid #06E1EF"
                            color="black"
                            _hover={{ bg: "#06E1EF", color: "white" }}
                            variant="ghost"
                            borderRadius="full"
                            mb={1}
                        >
                            3D-моделлер
                        </Button>
                        <Button
                            w="100%"
                            bg="white"
                            border="1px solid #06E1EF"
                            color="black"
                            _hover={{ bg: "#06E1EF", color: "white" }}
                            variant="ghost"
                            borderRadius="full"
                            mb={1}
                        >
                            Веб-дизайнер
                        </Button>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose} borderRadius="full">
                            Закрыть
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Header;

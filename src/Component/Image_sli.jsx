import React, { useState, useEffect } from 'react';
import { Box, Image, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  { src: 'https://www.shroffeyecentre.com/wp-content/uploads/2022/03/cataract-desktop.jpg', alt: 'Image 1' },
  { src: 'https://media.istockphoto.com/id/1189207226/photo/female-patient-checking-vision-in-ophthalmological-clinic.jpg?s=1024x1024&w=is&k=20&c=OQBLImUFVlquAK3Rd0YoOgSYto0f4NThAN_jNZ_2TnI=', alt: 'Image 2' },
  { src: 'https://www.shroffeyecentre.com/wp-content/uploads/2022/12/lasik-landing-desktop.jpg', alt: 'Image 3' },
  { src: 'https://www.shroffeyecentre.com/wp-content/uploads/2022/03/dry-eye-desktop.jpg', alt: 'Image 4' },
  { src: 'https://www.shroffeyecentre.com/wp-content/uploads/2022/08/doctor-G-Banner-1.png', alt: 'Image 5' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesCount = images.length;
  const intervalTime = 3000; // Time in milliseconds

  const prevSlide = () => {
    const index = currentIndex === 0 ? slidesCount - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === slidesCount - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const arrowSize = useBreakpointValue({ base: '40px', md: '60px' });

  return (
    <Box position="relative" overflow="hidden" width="full" height="400px">
      <Flex
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${currentIndex * 100}%)`}
      >
        {images.map((image, index) => (
          <Box key={index} flex="none" width="full">
            <Image
              src={image.src}
              alt={image.alt}
              width="full"
              height="400px"
              objectFit="cover"
            />
          </Box>
        ))}
      </Flex>
      <IconButton
        icon={<FaChevronLeft />}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={prevSlide}
        size={arrowSize}
        aria-label="Previous Slide"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        color="white"
      />
      <IconButton
        icon={<FaChevronRight />}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={nextSlide}
        size={arrowSize}
        aria-label="Next Slide"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        color="white"
      />
      <Flex position="absolute" bottom="10px" left="50%" transform="translateX(-50%)" zIndex="1">
        {images.map((_, index) => (
          <Box
            key={index}
            cursor="pointer"
            height="10px"
            width="10px"
            margin="0 5px"
            borderRadius="50%"
            backgroundColor={currentIndex === index ? 'gray.800' : 'gray.400'}
            onClick={() => setSlide(index)}
            transition="background-color 0.3s ease"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Carousel;

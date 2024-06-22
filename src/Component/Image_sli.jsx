import React, { useState, useEffect } from 'react';
import { Box, Image, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import image1 from '../assets/images/img-1.jpeg'
import image2 from '../assets/images/img-2.jpeg'
import image3 from '../assets/images/img-3.jpeg'
import image4 from '../assets/images/img-4.jpeg'

const images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 1' },
  { src: image3, alt: 'Image 1' },
  { src: image4, alt: 'Image 1' },

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
  const carouselHeight = useBreakpointValue({ base: '350px', md: '400px' });

  return (
    <Box position="relative" overflow="hidden" opacity='0.9' width="full" height="650px" zIndex='0'>
      <Flex
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${currentIndex * 100}%)`}
        height="100%"
      >
        {images.map((image, index) => (
          <Box key={index} flex="none" width="100%" height="100%">
            <Image
              src={image.src}
              alt={image.alt}
              width="full"
              height="100%"
              // objectFit="center"
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

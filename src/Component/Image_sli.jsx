import React, { useState, useEffect } from 'react';
import { Box, Image, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  { src: 'https://t3.ftcdn.net/jpg/01/14/54/28/240_F_114542856_uhdDKbtqZoU3rca3CQ2gAZVsYNhMgHRR.jpg', alt: 'Image 1' },
  { src: 'https://t3.ftcdn.net/jpg/07/07/25/90/240_F_707259033_klwARtQp45gGFYjIkBciig8LXRrdUQcx.jpg', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/800x400?text=Image+3', alt: 'Image 3' },
  { src: 'https://via.placeholder.com/800x400?text=Image+4', alt: 'Image 4' },
  { src: 'https://via.placeholder.com/800x400?text=Image+5', alt: 'Image 5' },
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
        icon={<FaArrowLeft />}
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
        icon={<FaArrowRight />}
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

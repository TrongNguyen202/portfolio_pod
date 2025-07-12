import React, { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ImageSlider = ({ images, autoPlayInterval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Auto play
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlay, images.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openZoom = (image) => {
    setZoomedImage(image);
    setIsZoomed(true);
    setIsAutoPlay(false);
  };

  const closeZoom = () => {
    setZoomedImage(null);
    setIsZoomed(false);
    setIsAutoPlay(true);
  };

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          {/* Slides */}
          <div className="relative w-full h-full group">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => openZoom(image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                  {image.title && (
                    <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                      <h3 className="text-3xl font-bold">{image.title}</h3>
                      <p className="text-gray-200">{image.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition"
            >
              <BiChevronLeft className="text-white w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition"
            >
              <BiChevronRight className="text-white w-8 h-8" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-black/40 px-3 py-1 rounded-full text-white text-xs">
              {currentSlide + 1} / {images.length}
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeZoom}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-3 z-10"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const newIndex =
                  (currentSlide - 1 + images.length) % images.length;
                setCurrentSlide(newIndex);
                setZoomedImage(images[newIndex]);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3"
            >
              <BiChevronLeft className="w-6 h-6 text-white" />
            </button>

            <img
              src={zoomedImage.src}
              alt={zoomedImage.title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                const newIndex = (currentSlide + 1) % images.length;
                setCurrentSlide(newIndex);
                setZoomedImage(images[newIndex]);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3"
            >
              <BiChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;

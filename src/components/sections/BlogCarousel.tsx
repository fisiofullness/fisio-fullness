import React, { useState } from 'react';

interface BlogSlide {
  category: string;
  title: string;
  date: string;
  readTime: string;
  backgroundImage: string;
}

interface BlogCarouselProps {
  slides: BlogSlide[];
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div
      className="relative w-full h-96 bg-cover bg-center flex items-center justify-between px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.6), rgba(0, 51, 102, 0.6)), url(${slide.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="text-white text-4xl hover:opacity-70 transition-opacity z-10"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Content */}
      <div className="text-white text-center flex-1 mx-12">
        <span className="inline-block bg-white text-primary px-4 py-1 rounded-[16px] text-sm font-semibold mb-4">
          {slide.category}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h2>
        <div className="flex items-center justify-center gap-6 text-sm">
          <span>{slide.date}</span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            {slide.readTime}
          </span>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="text-white text-4xl hover:opacity-70 transition-opacity z-10"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;

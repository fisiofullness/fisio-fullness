import React from 'react';
import { Topbar, Header, Footer } from '../components/common';
import { BlogCarousel } from '../components/sections';

const BlogPage: React.FC = () => {
  const blogSlides = [
    {
      category: 'Salud',
      title: '¿Dolor lumbar? 5 Tips y ejercicios que puedes hacer en casa',
      date: 'Noviembre 18, 2025',
      readTime: '3 minutos',
      backgroundImage: '/section-banners/blog.png',
    },
    {
      category: 'Salud',
      title: '¿Dolor lumbar? 5 Tips y ejercicios que puedes hacer en casa',
      date: 'Noviembre 18, 2025',
      readTime: '3 minutos',
      backgroundImage: '/section-banners/blog.png',
    },
    {
      category: 'Salud',
      title: '¿Dolor lumbar? 5 Tips y ejercicios que puedes hacer en casa',
      date: 'Noviembre 18, 2025',
      readTime: '3 minutos',
      backgroundImage: '/section-banners/blog.png',
    },
    {
      category: 'Salud',
      title: '¿Dolor lumbar? 5 Tips y ejercicios que puedes hacer en casa',
      date: 'Noviembre 18, 2025',
      readTime: '3 minutos',
      backgroundImage: '/section-banners/blog.png',
    },
  ];

  return (
    <div className="w-full">
      <Topbar />
      <Header />
      <BlogCarousel slides={blogSlides} />
      <Footer />
    </div>
  );
};

export default BlogPage;

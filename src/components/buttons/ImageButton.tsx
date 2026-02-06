import React from 'react';

interface ImageButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  src: string;
  alt: string;
  imageClassName?: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({
  src,
  alt,
  imageClassName = 'h-12',
  className = '',
  ...props
}) => {
  return (
    <a className={`hover:opacity-80 transition ${className}`} {...props}>
      <img src={src} alt={alt} className={imageClassName} />
    </a>
  );
};

export default ImageButton;

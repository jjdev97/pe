'use client'

import React, { useRef, useEffect } from "react";

type LazyImageProps = {
  src: string;
  alt?: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const imageRef = useRef<any>(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        if (entry.isIntersecting) {
          setIsIntersecting(entry.isIntersecting);
        }
      },
      { rootMargin: "-300px" }
    );

    observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (isIntersecting) {
      const dataSrc = imageRef.current.getAttribute("data-src");
      if (dataSrc) {
        imageRef.current.src = dataSrc;
      }
    }
  }, [isIntersecting]);

  return (
    <div className="border-solid border-2 block w-100 h-100 object-cover">
    <img
      data-test-id="component-image"
      className="border-solid border-2 block w-100 h-100 object-cover"
      ref={imageRef}
      src={src + `?w=10`}
      alt={alt}
      data-src={src + `?w=1800`}
    />
    </div>
  );
};

export default LazyImage;
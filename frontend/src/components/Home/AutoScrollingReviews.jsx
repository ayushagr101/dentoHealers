import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from './reviews';
const ResponsiveScrollingReviews = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  const doubledReviews = [...reviews, ...reviews];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 md:py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          Patients Reviews
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-2">
          Don't just take our word for it
        </p>
        </div>

      {/* Desktop: Horizontal Scroll */}
      {!isMobile && (
        <div 
          className="relative hidden md:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className={`flex gap-6 ${isPaused ? '' : 'animate-scroll-horizontal'}`}
              style={{
                width: 'fit-content',
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {doubledReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="flex-shrink-0 w-96 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg truncate">
                        {review.author}
                      </h3>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">{renderStars(review.rating)}</div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                    <p className="text-gray-700 leading-relaxed pl-6 text-base">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-indigo-100 to-transparent pointer-events-none"></div>
        </div>
      )}

      {/* Mobile: Vertical Scroll */}
      {isMobile && (
        <div 
          className="relative md:hidden max-h-screen"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="overflow-hidden h-[600px]">
            <div
              className={`flex flex-col gap-4 ${isPaused ? '' : 'animate-scroll-vertical'}`}
              style={{
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {doubledReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="flex-shrink-0 bg-white rounded-xl shadow-lg p-5 mx-2"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-base truncate">
                        {review.author}
                      </h3>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">{renderStars(review.rating)}</div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-1 -left-1 w-6 h-6 text-blue-200" />
                    <p className="text-gray-700 leading-relaxed pl-5 text-sm">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-indigo-100 to-transparent pointer-events-none"></div>
        </div>
      )}

      <style jsx>{`
        @keyframes scrollHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scrollHorizontal 40s linear infinite;
        }

        .animate-scroll-vertical {
          animation: scrollVertical 30s linear infinite;
        }
      `}</style>

      <div className="text-center mt-8 md:mt-12">
        <p className="text-gray-600 text-xs md:text-sm px-4">
          {isMobile ? 'Touch to pause scrolling' : 'Hover over reviews to pause scrolling'}
        </p>
      </div>
    </div>
  );
};

export default ResponsiveScrollingReviews;
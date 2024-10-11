import React from 'react';
import { AnimeResult } from '../types';

interface MainResultProps {
  result: AnimeResult;
}

const MainResult: React.FC<MainResultProps> = ({ result }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img
            src={result.coverImage}
            alt={result.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
          <p className="text-sm mb-2">Episode: {result.episode}</p>
          <p className="text-sm mb-2">Score: {result.score}</p>
          <p className="text-sm mb-2">Year: {result.year}</p>
          <p className="text-sm mb-2">Producers: {result.producers.join(', ')}</p>
          <p className="text-sm mb-2">Studios: {result.studios.join(', ')}</p>
          <p className="text-sm mb-2">Genres: {result.genres.join(', ')}</p>
          <p className="text-sm mb-4">{result.synopsis}</p>
          <div className="relative">
            <video
              src={result.previewVideo}
              className="w-full rounded-lg"
              autoPlay
              loop
              muted
            ></video>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              {result.from} - {result.to}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="relative w-16 h-16">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeDasharray={`${result.similarity * 100}, 100`}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
            {Math.round(result.similarity * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainResult;
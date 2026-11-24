import React, { useState } from 'react';
import { LOGO_IMAGE } from '../data/siteData';

export function ConsoleBracesSvg({
  className = 'w-7 h-7',
  glow = false,
}: {
  className?: string;
  glow?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? 'white-glow' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M25.5 13C20.5 13 18 15.8 18 20.5V27.2C18 29.8 16.4 31.4 13.5 32C16.4 32.6 18 34.2 18 36.8V43.5C18 48.2 20.5 51 25.5 51"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.5 13C43.5 13 46 15.8 46 20.5V27.2C46 29.8 47.6 31.4 50.5 32C47.6 32.6 46 34.2 46 36.8V43.5C46 48.2 43.5 51 38.5 51"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ConsoleOfficialLogo({
  className = 'w-full max-w-[340px] h-auto',
  alt = 'Console — Smart Innovation, Precise Coding.',
}: {
  className?: string;
  alt?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex flex-col items-center justify-center py-6 px-8 border border-white/15 bg-black">
        <ConsoleBracesSvg className="w-16 h-16 text-white mb-3" glow />
        <span className="text-3xl font-bold tracking-tight text-white">Console</span>
        <span className="text-xs text-[#C7C7C7] mt-1 tracking-wide">
          Smart Innovation, Precise Coding.
        </span>
      </div>
    );
  }

  return (
    <img
      src={LOGO_IMAGE}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`${className} object-contain select-none mix-blend-screen brightness-[0.9] contrast-[1.28] [mask-image:radial-gradient(ellipse_at_center,black_68%,transparent_100%)]`}
    />
  );
}

export function MediaFrame({
  src,
  alt,
  aspectClass = 'aspect-[4/3]',
  className = '',
  fallbackTitle,
}: {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  fallbackTitle?: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#0A0A0A] border border-white/12 ${aspectClass} ${className}`}
    >
      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setErrored(true)}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 architectural-grid bg-[#080808] text-center">
          <ConsoleBracesSvg className="w-12 h-12 text-white/70 mb-3" glow />
          {fallbackTitle && (
            <span className="text-sm font-medium text-[#C7C7C7]">{fallbackTitle}</span>
          )}
        </div>
      )}
    </div>
  );
}

type TLoadingProps = {
  text: string;
  className?: string;
};

export function Loading({ text, className = '' }: TLoadingProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className="font-medium text-[44px] leading-[139%] text-gray-400"
        style={{
          background: 'linear-gradient(90deg, #9CA3AF, #4B5563, #9CA3AF)',
          backgroundSize: '200% 100%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          animation: 'shimmer 1.5s ease-in-out infinite',
        }}
      >
        {text}
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}

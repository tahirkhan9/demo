import Tokens from '@/components/Tokens';

export default function Home() {
  return (
    <div>
      {/* <h1 className="mb-6 pt-3 text-center text-2xl font-bold text-gray-900">
        🚀 Welcome to Clanker Live
      </h1> */}
      <div className="text-center flex justify-center space-x-4">
        <div className="flex items-center justify-center gap-2">
          {/* Live Text */}
          <h1 className="mb-6 pt-3 text-center text-2xl font-bold text-gray-900">
          🚀 Welcome to Clanker Live
        </h1>
          <div className="animate-pulse text-center mb-2 text-lg font-bold tracking-wide text-red-600">
            Live
          </div>

          {/* Animated Pulsing Dot */}
          <div className="relative flex h-4 w-4">
            <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></div>
            <div className="relative inline-flex h-4 w-4 rounded-full bg-red-500 shadow-md"></div>
          </div>
        </div>

        
      </div>
      <div className="flex flex-col gap-4">
        <Tokens />
        {/* <Tokens />  */}
        {/* <Tokens /> */}
      </div>
    </div>
  );
}

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-bone/95 backdrop-blur-md fade-in">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-[3px] border-pink-100" />
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-pink-500 border-r-pink-500 animate-spin" />
          <div
            className="absolute inset-3 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 opacity-60 animate-pulse"
            style={{ animationDuration: '1.5s' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-pink-600 text-xl font-display">✦</span>
          </div>
        </div>

        {/* Wordmark */}
        <div className="text-center">
          <p className="font-display text-2xl tracking-tight">
            <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">GLOW</span>
            <span className="font-serif font-light italic text-ink">beauty</span>
          </p>
          <p className="text-[10px] tracking-[0.35em] uppercase text-ink-light mt-2 animate-pulse">
            Preparing your ritual
          </p>
        </div>
      </div>
    </div>
  );
}

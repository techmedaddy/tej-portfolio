export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated wave background */}
        <div className="absolute inset-0 opacity-30">
          <div className="wave-container">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

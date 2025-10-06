const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left section: Event themed banner */}
      <div
        className="hidden md:flex flex-1 relative items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-white text-center px-10">
          <h2 className="text-4xl font-bold mb-4">Make Every Event Memorable</h2>
          <p className="text-lg">
            Your one-stop platform to plan, manage, and celebrate events with ease.
          </p>
        </div>
      </div>

      {/* Right section: Form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;

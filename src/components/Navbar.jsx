const Navbar = () => {
    return (
      <div className="shadow-sm sticky top-0 z-50 bg-gray-900">
        <div className="max-w-6xl px-10">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Group Agent 48 and Name */}
            <div className="flex items-center space-x-50">
              <h1 className="text-white text-lg font-semibold">✱ Agent 48</h1>
              <h1 className="text-white text-lg hidden sm:block">Idorenyin Udoh</h1>
            </div>
  
            {/* Right side - Toggle button */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <span className="text-white text-sm">🌙</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  
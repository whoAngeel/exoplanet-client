const Minigame = () => {
    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <div className="w-full flex justify-between items-center text-white mb-4">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                        </div>
                    </div>
                    <div className="ml-3">
                        <h4 className="text-lg font-bold">Roxane Harley</h4>
                        <span className="text-xs bg-white text-[#9b59b6] px-2 py-1 rounded-full">
              Expert
            </span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="fas fa-bolt text-orange-500 text-lg"></i>
                    <span className="text-lg font-bold">1200</span>
                </div>
            </div>

            {/* Daily Task */}
            <div className="w-full bg-[#ffffff4d] rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center text-white mb-2">
                    <h3 className="text-xl font-bold">Daily Task</h3>
                    <i className="fas fa-brain"></i>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                    <div
                        className="bg-orange-400 h-2.5 rounded-full"
                        style={{width: '65%'}}
                    ></div>
                </div>
                <span className="text-white">Progress: 9/14</span>
            </div>

            {/* Quiz Icons */}
            <div className="w-full flex justify-around mb-6">
                {[
                    {icon: 'fa-futbol', label: 'Football'},
                    {icon: 'fa-flask', label: 'Science'},
                    {icon: 'fa-tshirt', label: 'Fashion'},
                    {icon: 'fa-film', label: 'Movie'},
                    {icon: 'fa-music', label: 'Music'},
                ].map((item) => (
                    <div key={item.icon} className="flex flex-col items-center text-white">
                        <i className={`fas ${item.icon} text-2xl mb-2`}></i>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>

            {/* More Games */}
            <div className="w-full">
                <div className="flex justify-between items-center text-white mb-4">
                    <h3 className="text-xl font-bold">More Games</h3>
                    <span className="text-sm">View All</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {/* Language Quiz */}
                    <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
                        <i className="fas fa-cut text-2xl mb-2 text-purple-600"></i>
                        <h4 className="text-lg font-bold">Language Quiz</h4>
                        <p className="text-gray-500 text-sm">15 Questions</p>
                        <div className="flex items-center space-x-1 text-orange-500 mt-2">
                            <i className="fas fa-bolt"></i>
                            <span>24.7K</span>
                        </div>
                    </div>

                    {/* Exam Quiz */}
                    <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
                        <i className="fas fa-compass text-2xl mb-2 text-purple-600"></i>
                        <h4 className="text-lg font-bold">Exam Quiz</h4>
                        <p className="text-gray-500 text-sm">12 Questions</p>
                        <div className="flex items-center space-x-1 text-orange-500 mt-2">
                            <i className="fas fa-bolt"></i>
                            <span>12.5K</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="w-full fixed bottom-0 bg-white shadow-lg p-4 flex justify-between">
                {[
                    {icon: 'fa-compass', label: 'Explore'},
                    {icon: 'fa-trophy', label: 'Leaderboard'},
                    {icon: 'fa-bookmark', label: 'Bookmarks'},
                    {icon: 'fa-cog', label: 'Settings'},
                ].map((item) => (
                    <div key={item.icon} className="flex flex-col items-center text-purple-600">
                        <i className={`fas ${item.icon} text-xl mb-1`}></i>
                        <span className="text-xs">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Minigame;

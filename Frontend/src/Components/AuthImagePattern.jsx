const AuthImagePattern = ({ title, subtitle }) => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 ">
            <div className="max-w-sm text-center">
                <div className="grid grid-cols-3 gap-3 pt-10">
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className={`aspect-square rounded-2xl bg-primary/10 ${
                                i % 2 === 0 ? "animate-pulse" : ""
                            }`}
                        />
                    ))}
                </div>
                <h2 className="text-2xl font-bold mb-2 mt-4">{title}</h2>
                <p className="text-base-content/50 mt-4">{subtitle}</p>
            </div>
        </div>
    );
};

export default AuthImagePattern;
export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="relative">
                {/* Outer ring */}
                <div className="w-16 h-16 rounded-full border-4 border-slate-800 border-t-blue-500 animate-spin"></div>
                {/* Inner dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

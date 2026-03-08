export default function ProjectsLoading() {
    return (
        <div className="w-full max-w-5xl mx-auto px-8 py-12">
            <div className="max-w-2xl mb-12">
                <div className="skeleton h-9 w-[160px] mb-4"></div>
                <div className="skeleton h-6 w-[380px]"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {[...Array(4)].map((_, idx) => (
                    <div key={idx} className="group block p-6 border border-foreground/10 bg-white/5 relative h-[250px] flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className="skeleton h-7 w-[55%]"></div>
                            <div className="skeleton h-5 w-5 rounded-sm"></div>
                        </div>
                        <div className="space-y-3 mb-6 mt-4">
                            <div className="skeleton h-5 w-[80%]"></div>
                            <div className="skeleton h-5 w-[60%]"></div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <div className="skeleton h-7 w-20"></div>
                            <div className="skeleton h-7 w-24"></div>
                            <div className="skeleton h-7 w-16"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

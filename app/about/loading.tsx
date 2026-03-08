export default function AboutLoading() {
    return (
        <div className="w-full max-w-5xl mx-auto px-8 py-12">
            <div className="skeleton h-9 w-[150px] mb-8"></div>

            <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
                {/* Background Section */}
                <section>
                    <div className="skeleton h-7 w-32 mb-4"></div>
                </section>
                <section className="space-y-4">
                    <div className="skeleton h-6 w-full"></div>
                    <div className="skeleton h-6 w-[90%]"></div>
                    <div className="skeleton h-6 w-[95%] pt-2 mt-4"></div>
                    <div className="skeleton h-6 w-[80%]"></div>
                </section>

                {/* Technical Skills Section */}
                <section>
                    <div className="skeleton h-7 w-40 mb-4"></div>
                </section>

                <section className="grid sm:grid-cols-2 gap-8">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="skeleton h-4 w-4 rounded-full"></div>
                                <div className="skeleton h-6 w-40"></div>
                            </div>
                            <div className="skeleton h-5 w-full"></div>
                            <div className="skeleton h-5 w-[85%]"></div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default function BlogLoading() {
    return (
        <div className="w-full max-w-5xl mx-auto px-8 py-12">
            {/* Header Section */}
            <div className="max-w-2xl mb-8">
                <div className="skeleton h-9 w-[120px] mb-4"></div>
                <div className="skeleton h-6 w-[280px] mb-8"></div>
            </div>

            {/* Tag Filters */}
            <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide mb-2 border-b border-border/20">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="skeleton h-8 w-20 rounded-full pb-2"></div>
                ))}
            </div>

            {/* Blog List */}
            <div className="flex flex-col border-t border-border/50">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="group flex flex-col lg:flex-row py-8 sm:py-12 border-b border-border/50 relative">
                        {/* Number */}
                        <div className="lg:w-32 shrink-0 mb-4 lg:mb-0 pt-1">
                            <div className="skeleton h-10 w-[40px]"></div>
                        </div>

                        {/* Content Container */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between flex-1 gap-6 lg:gap-12 w-full">

                            {/* Title, Excerpt & Tags */}
                            <div className="flex flex-col gap-3 lg:gap-4 flex-1">
                                <div className="skeleton h-8 w-[55%]"></div>
                                <div className="skeleton h-6 w-[75%]"></div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <div className="skeleton h-6 w-16 rounded-full"></div>
                                    <div className="skeleton h-6 w-20 rounded-full"></div>
                                </div>
                            </div>

                            {/* Meta Data & CTA (Date, Read Time, Read Link) */}
                            <div className="mt-4 lg:mt-0 flex flex-col lg:items-end gap-3 shrink-0 lg:w-48 text-left lg:text-right">
                                <div className="flex items-center gap-3 lg:flex-col lg:items-end lg:gap-1">
                                    <div className="skeleton h-5 w-[60px]"></div>
                                    <div className="lg:hidden w-1 h-1 rounded-full bg-foreground/10"></div>
                                    <div className="skeleton h-5 w-[50px]"></div>
                                </div>

                                <div className="mt-auto pt-2 lg:pt-6 w-full lg:flex lg:justify-end">
                                    <div className="skeleton h-6 w-16"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

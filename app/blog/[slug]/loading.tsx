export default function BlogPostLoading() {
    return (
        <>
            <div className="w-full max-w-5xl mx-auto px-8 py-12">

                {/* Back Button */}
                <div className="mb-8">
                    <div className="skeleton h-5 w-[100px]"></div>
                </div>

                {/* Post Header */}
                <header className="mb-12 sm:mb-16">
                    <div className="mb-6">
                        <div className="skeleton h-7 w-24 rounded-full"></div>
                    </div>

                    <div className="skeleton h-12 sm:h-16 w-[90%] mb-3"></div>
                    <div className="skeleton h-12 sm:h-16 w-[60%] mb-6"></div>

                    <div className="skeleton h-8 w-[65%] mb-8"></div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="skeleton h-5 w-24"></div>
                        <div className="w-1 h-1 rounded-full bg-foreground/10"></div>
                        <div className="skeleton h-5 w-20"></div>
                        <div className="w-1 h-1 rounded-full bg-foreground/10 hidden sm:block"></div>
                        <div className="flex flex-wrap gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                            <div className="skeleton h-6 w-16 rounded-full"></div>
                            <div className="skeleton h-6 w-20 rounded-full"></div>
                        </div>
                    </div>
                </header>

                {/* Divider */}
                <hr className="w-full border-border/40 mb-12 sm:mb-16" />

                {/* Post Body */}
                <article className="max-w-[720px] mx-auto space-y-6">
                    <div className="skeleton h-6 w-[100%]"></div>
                    <div className="skeleton h-6 w-[85%]"></div>
                    <div className="skeleton h-6 w-[70%] mb-10"></div>
                    <div className="skeleton h-6 w-[95%] mt-10"></div>
                    <div className="skeleton h-6 w-[100%]"></div>
                    <div className="skeleton h-6 w-[60%]"></div>
                </article>

            </div>
        </>
    );
}

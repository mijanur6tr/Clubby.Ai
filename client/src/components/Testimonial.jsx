import React from 'react'

/**
* @author
* @function Testimonial
**/

export const Testimonial = (props) => {
    return (
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <h2 className="text-4xl w-full inline-block md:text-5xl text-center py-10 font-bold text-gray-900 col-span-full">
                Testimonial
            </h2>

            <div class="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1">
                {/* First Testimonial Card Content */}
                {/* ... (content omitted for brevity) ... */}
                <div class="flex items-center justify-between">
                    <div class="flex gap-1">
                        {/* ... (star SVGs omitted) ... */}
                    </div>
                    <p>12 Jan 2025</p>
                </div>
                <p>“Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of extra code!”</p>
                <div class="flex items-center gap-2 pt-3">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="Richard Nelson" />
                    <p class="font-medium text-gray-800">Richard Nelson</p>
                </div>
            </div>


            <div class="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1">
                {/* Second Testimonial Card Content */}
                {/* ... (content omitted for brevity) ... */}
                <div class="flex items-center justify-between">
                    <div class="flex gap-1">
                        {/* ... (star SVGs omitted) ... */}
                    </div>
                    <p>15 Mar 2025</p>
                </div>
                <p>“The design quality is top-notch. Perfect balance between simplicity and style. Highly recommend for any creative developer!”</p>
                <div class="flex items-center gap-2 pt-3">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="Sophia Martinez" />
                    <p class="font-medium text-gray-800">Sophia Martinez</p>
                </div>
            </div>


            <div class="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1">
                {/* Third Testimonial Card Content */}
                {/* ... (content omitted for brevity) ... */}
                <div class="flex items-center justify-between">
                    <div class="flex gap-1">
                        {/* ... (star SVGs omitted) ... */}
                    </div>
                    <p>20 Feb 2025</p>
                </div>
                <p>“Absolutely love the reusability of these components. My workflow feels 10x faster now with cleaner and more consistent layouts.”</p>
                <div class="flex items-center gap-2 pt-3">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60" alt="Ethan Roberts" />
                    <p class="font-medium text-gray-800">Ethan Roberts</p>
                </div>
            </div>
        </div>
    )
}
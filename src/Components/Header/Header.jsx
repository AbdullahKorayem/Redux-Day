import React from 'react';

function YourComponent() {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            style={{
                backgroundPosition: '50%',
                backgroundImage: "url('https://tecdn.b-cdn.net/img/new/slides/146.webp')",
                height: '350px'
            }}
        >
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            >
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                        <h1 className="mb-6 text-5xl font-bold">Heading</h1>
                        <h3 className="mb-8 text-3xl font-bold">Subheading</h3>
                        <button
                            className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            onClick={() => console.log('Button clicked')} // Add your click handler function here
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourComponent;

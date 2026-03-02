"use client";

import { motion, Variants } from "framer-motion";

// The 4 paths extracted from your SVG
const SVG_PATHS = [
  "M1205 2167 c-22 -8 -92 -41 -155 -75 -65 -34 -154 -72 -205 -87 -118 -33 -143 -43 -188 -73 -50 -34 -78 -85 -117 -212 -19 -60 -63 -164 -104 -243 -66 -129 -71 -143 -71 -202 0 -60 5 -74 71 -202 42 -82 86 -185 108 -255 58 -186 94 -221 286 -277 63 -19 160 -59 243 -101 132 -67 141 -70 208 -70 66 0 76 3 192 64 118 61 166 79 326 126 62 18 82 30 125 73 49 49 55 60 99 197 29 88 66 179 96 232 103 183 104 229 7 411 -37 71 -79 170 -100 237 -20 63 -46 133 -59 155 -32 57 -98 97 -213 129 -62 17 -155 55 -249 102 -164 82 -223 96 -300 71z m235 -152 c395 -92 656 -455 600 -836 -49 -344 -312 -606 -661 -660 -251 -39 -546 84 -704 292 -57 76 -118 201 -140 283 -36 140 -26 317 26 448 73 188 255 365 452 440 125 48 303 61 427 33z",
  "M1163 1898 l-53 -10 0 -613 0 -613 50 -11 c66 -14 189 -14 246 0 l44 11 0 266 0 266 -42 43 -42 43 42 43 42 43 0 261 0 261 -63 11 c-74 13 -151 13 -224 -1z m177 -295 l0 -197 -37 -38 c-22 -22 -47 -38 -60 -38 l-23 0 0 235 0 235 60 0 60 0 0 -197z m-34 -415 l39 -43 -5 -200 -5 -200 -55 0 -55 0 -3 243 -2 242 24 0 c15 0 37 -15 62 -42z",
  "M960 1823 c-140 -78 -265 -242 -305 -398 -19 -75 -19 -212 0 -293 15 -64 59 -162 73 -162 5 0 23 15 41 34 32 33 32 34 17 64 -19 37 -46 148 -38 156 3 3 45 6 94 6 l88 0 0 -245 0 -244 45 -27 c25 -14 48 -24 51 -22 2 3 3 266 2 586 l-3 581 -65 -36z m-30 -323 l0 -170 -91 0 -92 0 5 45 c8 63 67 181 122 243 27 28 50 52 52 52 2 0 4 -76 4 -170z",
  "M1530 1276 c0 -322 3 -586 7 -586 3 0 26 11 50 25 l43 26 0 245 0 245 93 -3 92 -3 -3 -35 c-2 -19 -14 -62 -28 -95 l-24 -60 34 -34 c19 -18 39 -31 45 -27 6 4 20 28 31 54 70 156 66 371 -8 519 l-29 56 -40 -37 -40 -36 20 -41 c23 -46 48 -145 39 -153 -3 -3 -45 -6 -94 -6 l-88 0 0 238 0 239 -50 27 -50 27 0 -585z"
];

// Variants for infinite draw-and-fill sequence
const pathVariants: Variants = {
  initial: {
    pathLength: 0,
    fillOpacity: 0,
    strokeOpacity: 0,
  },
  animate: (index: number) => ({
    // 1. Draw outline, 2. Fill, 3. Hold, 4. Fade out
    pathLength: [0, 1, 1, 0],
    fillOpacity: [0, 0, 1, 0],
    strokeOpacity: [1, 1, 0, 0],
    transition: {
      duration: 3.5,
      times: [0, 0.4, 0.7, 1], // Timing markers for the array above
      ease: "easeInOut",
      repeat: Infinity,
      delay: index * 0.2, // Stagger effect
    },
  }),
};

export function Loader({ 
  className = "size-44 sm:size-52 text-foreground" 
}: { 
  className?: string 
}) {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className={className}
        initial="initial"
        animate="animate"
      >
        <motion.g
          transform="translate(0,256) scale(0.1,-0.1)"
          stroke="currentColor"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
        >
          {SVG_PATHS.map((pathData, index) => (
            <motion.path
              key={index}
              d={pathData}
              custom={index}
              variants={pathVariants}
            />
          ))}
        </motion.g>
      </motion.svg>
    </div>
  );
}

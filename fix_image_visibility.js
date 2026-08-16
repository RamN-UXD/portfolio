const fs = require('fs');
const path = './app/projects/dr-health/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove the gradient overlays in the carousels that hide the bottom of the images
content = content.replace(
  /<div className="absolute inset-0 bg-gradient-to-t from-\[#080810\] via-transparent to-transparent pointer-events-none" \/>/g,
  ''
);

// 2. Prevent images from stretching and blurring in Feature carousels
content = content.replace(
  /className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000 ease-out"/g,
  'className="w-auto h-auto max-h-[600px] mx-auto object-contain group-hover:scale-105 transition-transform duration-1000 ease-out py-8"'
);

// 3. Remove gradient overlays in High-Fidelity Flow sections
content = content.replace(
  /<div className="absolute inset-0 bg-gradient-to-t from-\[#080810\] to-transparent opacity-80 pointer-events-none" \/>/g,
  ''
);

// 4. Prevent stretching in High-Fidelity Flow sections
content = content.replace(
  /className="w-full h-full object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"/g,
  'className="w-auto h-full mx-auto object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0 py-4"'
);

fs.writeFileSync(path, content, 'utf8');
console.log("Image visibility fixes applied.");

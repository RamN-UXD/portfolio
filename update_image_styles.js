const fs = require('fs');
const path = './app/projects/dr-health/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Feature 1
content = content.replace(
  /<div className="w-full h-\[500px\] rounded-\[32px\] overflow-hidden border border-white\/5 relative group bg-\[#0c0c16\] shadow-2xl shadow-black\/50">/g,
  '<div className="w-full rounded-[32px] overflow-hidden border border-white/5 relative group bg-[#0c0c16] shadow-2xl shadow-black/50">'
);
content = content.replace(
  /className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"/g,
  'className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000 ease-out"'
);

// High-Fidelity flows (Flow A and B)
content = content.replace(
  /<div className="w-full aspect-\[9\/16\] rounded-2xl mb-6 border border-white\/5 relative overflow-hidden bg-black\/50">/g,
  '<div className="w-full aspect-[9/20] rounded-2xl mb-6 border border-white/5 relative overflow-hidden bg-[#0c0c16]">'
);
content = content.replace(
  /className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"/g,
  'className="w-full h-full object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"'
);

fs.writeFileSync(path, content, 'utf8');
console.log("Images un-cropped and set to fully visible.");

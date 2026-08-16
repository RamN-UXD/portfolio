const fs = require('fs');
const path = './app/projects/dr-health/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace Hero Image
content = content.replace(
  /src="\/images\/dr-health\/hero\.png"/g,
  'src="/projects/dr-health/hero.png"'
);

// Replace Feature 1 Carousel Image Source
content = content.replace(
  /src=\{\`\/images\/dr-health\/feature-1-step-\\\$\{activeFeature1Step \+ 1\}\.png\`\}/g,
  'src={`/projects/dr-health/feature 1 step ${activeFeature1Step + 1}.png`}'
);

// Replace Feature 2 Carousel Image Source
content = content.replace(
  /src=\{\`\/images\/dr-health\/feature-2-step-\\\$\{activeFeature2Step \+ 1\}\.png\`\}/g,
  'src={`/projects/dr-health/feature 2 step ${activeFeature2Step + 1}.png`}'
);

// Replace Flow A Images
// The code uses: src="/images/dr-health/feature-1.png" inside the Flow A map block.
// Wait, we need to be careful to only replace the ones in Flow A/B.
// I can just replace the specific strings if they are unique. Let's check how they are written.
// We can use a regex to match the exact img tag inside Flow A and Flow B maps.
const flowAImgRegex = /<img src="\/images\/dr-health\/feature-1\.png" alt=\{screen\.name\} className="(.*?)" style=\{\{ objectPosition: \`center \$\{i \* 20\}\%\` \}\} \/>/g;
content = content.replace(flowAImgRegex, '<img src={`/projects/dr-health/flow a 0${i + 1}.png`} alt={screen.name} className="$1" />');

const flowBImgRegex = /<img src="\/images\/dr-health\/feature-2\.png" alt=\{screen\.name\} className="(.*?)" style=\{\{ objectPosition: \`center \$\{i \* 20\}\%\` \}\} \/>/g;
content = content.replace(flowBImgRegex, '<img src={`/projects/dr-health/flow b 0${i + 1}.png`} alt={screen.name} className="$1" />');

fs.writeFileSync(path, content, 'utf8');
console.log("Images updated successfully.");

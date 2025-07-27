const fs = require('fs');
const path = require('path');

// Directories to ensure exist
const directories = [
  path.join(process.cwd(), 'public', 'blog-images')
];

// Ensure each directory exists
for (const dir of directories) {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    } else {
      console.log(`Directory already exists: ${dir}`);
    }
  } catch (error) {
    console.error(`Error ensuring directory ${dir}:`, error);
    process.exit(1);
  }
}

console.log('All required directories are ready!');

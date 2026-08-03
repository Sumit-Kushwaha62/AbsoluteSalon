import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const sourceRoot = path.resolve('src');
const publicRoot = path.resolve('public');
const sourceFiles = [];

const collectFiles = async (directory) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) await collectFiles(entryPath);
    if (entry.isFile() && /\.(js|jsx)$/.test(entry.name)) sourceFiles.push(entryPath);
  }
};

await collectFiles(sourceRoot);

const referencedAssets = new Set();
const assetPattern = /["'](\/[^"']+\.(?:avif|gif|ico|jpe?g|mp4|png|svg|webm|webp))(?:\?[^"']*)?["']/gi;

for (const sourceFile of sourceFiles) {
  const source = await readFile(sourceFile, 'utf8');
  for (const match of source.matchAll(assetPattern)) referencedAssets.add(match[1]);
}

const missingAssets = [];
for (const asset of referencedAssets) {
  try {
    await access(path.join(publicRoot, asset.slice(1)));
  } catch {
    missingAssets.push(asset);
  }
}

if (missingAssets.length > 0) {
  console.error(missingAssets.map((asset) => `Missing public asset: ${asset}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${referencedAssets.size} public media references from active source files.`);

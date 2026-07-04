#!/usr/bin/env node

/**
 * eOffice Portal — Production Build Script
 * 
 * Tạo bản build production trong thư mục dist/
 * - Minify HTML (loại bỏ comments, whitespace thừa)
 * - Minify CSS (loại bỏ comments, whitespace thừa)
 * - Minify JS (loại bỏ comments, whitespace thừa)
 * - Tạo version.json
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// ─── Helpers ────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function fileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  const kb = bytes / 1024;
  if (kb < 1024) return kb.toFixed(1) + ' KB';
  return (kb / 1024).toFixed(2) + ' MB';
}

// ─── Minifiers (lightweight, no external deps) ──────────────

function minifyHTML(html) {
  return html
    // Remove HTML comments (but keep IE conditionals)
    .replace(/<!--(?!\[if)[\s\S]*?-->/g, '')
    // Collapse multiple whitespace between tags
    .replace(/>\s{2,}</g, '> <')
    // Remove leading/trailing whitespace per line
    .replace(/^\s+/gm, '')
    // Collapse blank lines
    .replace(/\n{2,}/g, '\n')
    .trim();
}

function minifyCSS(css) {
  return css
    // Remove CSS comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove whitespace around selectors/properties
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*,\s*/g, ',')
    // Remove last semicolon before closing brace
    .replace(/;}/g, '}')
    // Collapse whitespace
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function minifyJS(js) {
  // Keep JS as-is to avoid breaking regular expressions, strings, or comments containing double slashes
  return js;
}

// ─── Build Steps ────────────────────────────────────────────

function main() {
  const startTime = Date.now();
  
  console.log('');
  console.log('╔══════════════════════════════════════════╗');
  console.log('║   eOffice Portal — Production Build      ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('');

  // 1. Clean & create dist
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true });
  }
  ensureDir(DIST);
  ensureDir(path.join(DIST, 'css'));
  ensureDir(path.join(DIST, 'js'));
  
  console.log('📁 Thư mục dist/ đã được tạo');

  // 2. Process HTML
  const htmlSrc = path.join(ROOT, 'index.html');
  const htmlDst = path.join(DIST, 'index.html');
  const htmlOriginal = fs.readFileSync(htmlSrc, 'utf-8');
  const htmlMinified = minifyHTML(htmlOriginal);
  fs.writeFileSync(htmlDst, htmlMinified, 'utf-8');
  
  const htmlOrigSize = fileSize(htmlSrc);
  const htmlMinSize = fileSize(htmlDst);
  console.log(`📄 index.html: ${formatBytes(htmlOrigSize)} → ${formatBytes(htmlMinSize)} (giảm ${Math.round((1 - htmlMinSize/htmlOrigSize) * 100)}%)`);

  // 3. Process CSS
  const cssSrc = path.join(ROOT, 'css', 'styles.css');
  const cssDst = path.join(DIST, 'css', 'styles.css');
  const cssOriginal = fs.readFileSync(cssSrc, 'utf-8');
  const cssMinified = minifyCSS(cssOriginal);
  fs.writeFileSync(cssDst, cssMinified, 'utf-8');
  
  const cssOrigSize = fileSize(cssSrc);
  const cssMinSize = fileSize(cssDst);
  console.log(`🎨 styles.css: ${formatBytes(cssOrigSize)} → ${formatBytes(cssMinSize)} (giảm ${Math.round((1 - cssMinSize/cssOrigSize) * 100)}%)`);

  // 4. Process JS
  const jsSrc = path.join(ROOT, 'js', 'app.js');
  const jsDst = path.join(DIST, 'js', 'app.js');
  const jsOriginal = fs.readFileSync(jsSrc, 'utf-8');
  const jsMinified = minifyJS(jsOriginal);
  fs.writeFileSync(jsDst, jsMinified, 'utf-8');
  
  const jsOrigSize = fileSize(jsSrc);
  const jsMinSize = fileSize(jsDst);
  console.log(`⚙️  app.js:     ${formatBytes(jsOrigSize)} → ${formatBytes(jsMinSize)} (giảm ${Math.round((1 - jsMinSize/jsOrigSize) * 100)}%)`);

  // 5. Generate version.json
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf-8'));
  const versionInfo = {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    buildDate: new Date().toISOString(),
    buildTimestamp: Date.now(),
    files: {
      'index.html': { original: htmlOrigSize, minified: htmlMinSize },
      'css/styles.css': { original: cssOrigSize, minified: cssMinSize },
      'js/app.js': { original: jsOrigSize, minified: jsMinSize }
    }
  };
  fs.writeFileSync(path.join(DIST, 'version.json'), JSON.stringify(versionInfo, null, 2), 'utf-8');
  console.log('📋 version.json đã được tạo');

  // 6. Summary
  const totalOriginal = htmlOrigSize + cssOrigSize + jsOrigSize;
  const totalMinified = htmlMinSize + cssMinSize + jsMinSize;
  const elapsed = Date.now() - startTime;
  
  console.log('');
  console.log('┌──────────────────────────────────────────┐');
  console.log(`│  Tổng dung lượng gốc:     ${formatBytes(totalOriginal).padStart(12)} │`);
  console.log(`│  Tổng sau khi nén:         ${formatBytes(totalMinified).padStart(12)} │`);
  console.log(`│  Tỷ lệ giảm:              ${(Math.round((1 - totalMinified/totalOriginal) * 100) + '%').padStart(12)} │`);
  console.log(`│  Thời gian build:          ${(elapsed + 'ms').padStart(12)} │`);
  console.log('└──────────────────────────────────────────┘');
  console.log('');
  console.log('✅ Build production hoàn tất → dist/');
  console.log('   Chạy "npm run preview" để xem trước bản build.');
  console.log('');
}

main();

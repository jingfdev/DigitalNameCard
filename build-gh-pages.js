import { build } from 'vite'

// Build for GitHub Pages with proper base path
async function buildForGitHub() {
  try {
    await build({
      configFile: './vite.config.gh-pages.ts',
    })
    console.log('✅ Build complete for GitHub Pages!')
  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  }
}

buildForGitHub()
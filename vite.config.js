import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// This project lives under Pictures/, which on this machine gets synced by
// OneDrive. OneDrive periodically re-touches/locks files during background
// sync passes — including files nothing in the app even reads, like the
// legacy static-site folders left over from before the React migration —
// and Vite's watcher crashes the whole dev server on the resulting EBUSY.
// So: don't watch anything Vite doesn't actually need to. This is a
// dev-server-only safeguard; it has no effect on the production build.
const LEGACY_ROOT_FOLDERS = ['css', 'icons', 'images']

function isIgnoredPath(filePath) {
  if (/\.pdf$/i.test(filePath)) return true
  const relative = path.relative(process.cwd(), filePath)
  const topLevelDir = relative.split(path.sep)[0]
  return LEGACY_ROOT_FOLDERS.includes(topLevelDir)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: isIgnoredPath,
    },
  },
})

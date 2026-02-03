import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Inject CSS into JS bundles to eliminate the separate CSS request
    cssInjectedByJsPlugin(),
  ],
  base: '/',
  build: {
    cssCodeSplit: true,
    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor libraries
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['lucide-react'],
          
          // Admin features - separate chunk
          'admin': ['./src/admin/layouts/AdminLayout', './src/admin/pages/Dashboard', './src/admin/pages/ManageBlog', './src/admin/pages/ManageReviews'],
          
          // Service pages - separate chunk
          'services': ['./src/components/services/Ecommerce', './src/components/services/SEO', './src/components/services/ContentWriting', './src/components/services/GraphicDesign', './src/components/services/SocialMedia', './src/components/services/MobileApp', './src/components/services/WebDevelopment', './src/components/services/CustomSoftware'],
          
          // Blog features - separate chunk
          'blog': ['./src/pages/Blog', './src/components/blogs/BlogPost'],
        },
      },
    },
    minify: 'terser',
    sourcemap: false, // Disable sourcemaps in production
    chunkSizeWarningLimit: 1000, // Suppress warning since we're splitting intentionally
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
      },
    },
  },
})
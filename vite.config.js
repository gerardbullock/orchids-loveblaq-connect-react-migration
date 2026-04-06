import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const token = env.REPLICATE_API_TOKEN || env.VITE_REPLICATE_API_TOKEN || ''

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api/replicate': {
          target: 'https://api.replicate.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api\/replicate/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              if (token) {
                proxyReq.setHeader('Authorization', `Bearer ${token}`)
              }
            })
          },
        },
      },
    },
  }
})

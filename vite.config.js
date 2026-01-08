import react from '@vitejs/plugin-react'

export default {
  root: './',
  publicDir: 'public',
  plugins: [
    react({
      babel: {
        presets: [
          ['@babel/preset-react', { 
            pragma: 'Didact.createElement',
            pragmaFrag: 'Didact.Fragment'
          }]
        ]
      }
    })
  ],
  build: {
    outDir: 'dist'
  }
}
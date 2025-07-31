const { createStrapi } = require('@strapi/strapi');

process.env.NODE_ENV = 'production';

async function startProduction() {
  console.log('🚀 Iniciando Strapi en PRODUCCIÓN...');
  
  const app = createStrapi({
    // Usar la carpeta dist compilada
    distDir: './dist'
  });
  
  await app.start();
  console.log('✅ Strapi PRODUCCIÓN iniciado en puerto:', process.env.PORT || 1337);
}

startProduction().catch(error => {
  console.error('❌ Error en producción:', error);
  process.exit(1);
});



const fs = require('fs');
const https = require('https');
const path = require('path');

// Criar diretórios base
const baseImagesDir = path.join(__dirname, '../public/images');
const directories = {
  burgers: path.join(baseImagesDir, 'burgers'),
  portions: path.join(baseImagesDir, 'portions'),
  drinks: path.join(baseImagesDir, 'drinks'),
  about: path.join(baseImagesDir, 'about')
};

// Criar diretórios se não existirem
Object.values(directories).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const images = {
  // Hamburgueres
  'burgers/rikas-especial.jpg': 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
  'burgers/big-cheese.jpg': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  'burgers/cheddar-bacon.jpg': 'https://images.unsplash.com/photo-1553979459-d2229ba7433b',
  'burgers/cheese-bacon.jpg': 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5',
  
  // Porções
  'portions/fries.jpg': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877',
  'portions/onion-rings.jpg': 'https://images.unsplash.com/photo-1639024471283-03518883512d',
  
  // Bebidas
  'drinks/soda.jpg': 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13',
  'drinks/milkshake.jpg': 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc',
  
  // Sobre
  'about/about-1.jpg': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
  'about/about-2.jpg': 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
  'about/about-3.jpg': 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
  'about/about-4.jpg': 'https://images.unsplash.com/photo-1550317138-10000687a72b'
};

// Adicionar parâmetros de otimização às URLs do Unsplash
const optimizeUrl = (url) => {
  return `${url}?auto=format&fit=crop&w=800&q=80`;
};

// Função para baixar uma imagem
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(baseImagesDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(optimizeUrl(url), (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
    });
  });
};

// Baixar todas as imagens
async function downloadAllImages() {
  for (const [filename, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`Failed to download ${filename}`);
    }
  }
}

downloadAllImages().then(() => {
  console.log('All images downloaded successfully!');
}).catch((error) => {
  console.error('Error downloading images:', error);
}); 
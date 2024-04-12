export async function preloadImages(imageUrls) {
  if (typeof Image !== 'undefined' || typeof document !== 'undefined') {
    document.body.classList.add('loading');
    const promises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          console.log(`Image loaded successfully: ${url}`);
          resolve();
        };
        img.onerror = reject;
        img.src = url;
      });
    });
    try {
      await Promise.all(promises);
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      document.body.classList.remove('loading');
    }
  } else {
    console.warn('Image object is not available. Preloading images skipped.');
  }
}
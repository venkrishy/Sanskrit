// Import all images from the images folder
const images = {
  // Sanskrit letters or symbols
  letters: {
    a: new URL('@/images/letters/a.png', import.meta.url).href,
    b: new URL('@/images/letters/b.png', import.meta.url).href,
    // Add more letters
  },
  
  // Lesson related images
  lessons: {
    lesson1: new URL('@/images/lessons/lesson1.png', import.meta.url).href,
    lesson2: new URL('@/images/lessons/lesson2.png', import.meta.url).href,
    // Add more lessons
  },
  
  // UI elements
  ui: {
    logo: new URL('@/images/ui/logo.png', import.meta.url).href,
    // Add more UI images
  }
};

export default images; 
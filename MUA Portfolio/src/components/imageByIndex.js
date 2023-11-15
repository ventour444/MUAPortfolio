import image1 from '../assets/KTP1.webp'
import image2 from '../assets/KTP2.webp'
import image3 from '../assets/KTP3.webp'
import image4 from '../assets/KTP4.webp'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex

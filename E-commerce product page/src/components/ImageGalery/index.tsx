import { ImageGalleryContainer } from "./styles";

import imageProduct1Jpg from "../../assets/images/image-product-1.jpg";
import imageProduct2Jpg from "../../assets/images/image-product-2.jpg";
import imageProduct3Jpg from "../../assets/images/image-product-3.jpg";
import imageProduct4Jpg from "../../assets/images/image-product-4.jpg";

import thumbnailProduct1Jpg from "../../assets/images/image-product-1-thumbnail.jpg";
import thumbnailProduct2Jpg from "../../assets/images/image-product-2-thumbnail.jpg";
import thumbnailProduct3Jpg from "../../assets/images/image-product-3-thumbnail.jpg";
import thumbnailProduct4Jpg from "../../assets/images/image-product-4-thumbnail.jpg";

import { useEffect, useState } from "react";

const PRODUCT_IMAGES = [
  imageProduct1Jpg,
  imageProduct2Jpg,
  imageProduct3Jpg,
  imageProduct4Jpg,
];

const PRODUCT_THUMBNAILS = [
  thumbnailProduct1Jpg,
  thumbnailProduct2Jpg,
  thumbnailProduct3Jpg,
  thumbnailProduct4Jpg,
];

interface IProductImage {
  src: string;
  thumbnail: string;
  active: boolean;
}

export function ImageGallery() {
  const [productAlbum, setProductAlbum] = useState<IProductImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<IProductImage>();

  useEffect(() => {
    let productImages: IProductImage[] = [];
    
    for(let i = 0; i < PRODUCT_IMAGES.length; i++) {
      const currentImage = {
        src: PRODUCT_IMAGES[i],
        thumbnail: PRODUCT_THUMBNAILS[i],
        active: false,
      };
  
      if (i === 0) {
        currentImage.active = true;
        setSelectedImage(currentImage);
      }

      productImages.push(currentImage);

    }

    console.log(productImages);

    setProductAlbum(productImages);
  }, []);

  function handleChangeImage(image: string) {
    const updatedImages = productAlbum.map((img) => {
      if (img.src === image) {
        setSelectedImage(img);
        return { ...img, active: true };
      }

      return { ...img, active: false };
    });

    setProductAlbum(updatedImages);
  }

  return (
    <ImageGalleryContainer>
      <div className="selected-product-image">
        <img src={selectedImage?.src} alt="product image" />
      </div>

      <ul className="product-image-album">
        {productAlbum.map((image) => (
          <li
            key={image.src}
            className={image.active ? "active" : ""}
            onClick={() => handleChangeImage(image.src)}
          >
            <img src={image.thumbnail} alt="product image" />
          </li>
        ))}
      </ul>
    </ImageGalleryContainer>
  );
}

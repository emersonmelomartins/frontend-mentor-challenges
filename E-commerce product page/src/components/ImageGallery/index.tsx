import { useEffect, useState } from "react";

import { ImageGalleryContainer, SelectedProductImage } from "./styles";

import nextSvg from "../../assets/images/icon-next.svg";
import previousSvg from "../../assets/images/icon-previous.svg";

import imageProduct1Jpg from "../../assets/images/image-product-1.jpg";
import imageProduct2Jpg from "../../assets/images/image-product-2.jpg";
import imageProduct3Jpg from "../../assets/images/image-product-3.jpg";
import imageProduct4Jpg from "../../assets/images/image-product-4.jpg";

import thumbnailProduct1Jpg from "../../assets/images/image-product-1-thumbnail.jpg";
import thumbnailProduct2Jpg from "../../assets/images/image-product-2-thumbnail.jpg";
import thumbnailProduct3Jpg from "../../assets/images/image-product-3-thumbnail.jpg";
import thumbnailProduct4Jpg from "../../assets/images/image-product-4-thumbnail.jpg";
import { ImageGalleryModal } from "../ImageGalleryModal";

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

interface IImageGalleryProps {
  isModalButtonTriggerActive?: boolean;
  enableAndShowControlGalleryButton?: boolean;
}

export function ImageGallery({
  enableAndShowControlGalleryButton = false,
  isModalButtonTriggerActive = true,
}: IImageGalleryProps) {
  const [productAlbum, setProductAlbum] = useState<IProductImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<IProductImage>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let productImages: IProductImage[] = [];

    for (let i = 0; i < PRODUCT_IMAGES.length; i++) {
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

  function handleNavigateImage(imageControlWay: number) {
    const currentImageIndex = productAlbum.findIndex(
      (img) => img.src === selectedImage?.src
    );

    const nextImageIndex = currentImageIndex + imageControlWay;

    if (!productAlbum[nextImageIndex]) return;

    const updatedImages = productAlbum.map((img, index) => {
      if (index === nextImageIndex) {
        setSelectedImage(img);
        return { ...img, active: true };
      }

      return { ...img, active: false };
    });

    setProductAlbum(updatedImages);
  }

  function handleOpenModal() {
    isModalButtonTriggerActive && setIsModalOpen(true);
  }

  return (
    <ImageGalleryContainer $showControlGalleryButton={enableAndShowControlGalleryButton}>
      <SelectedProductImage $showControls={enableAndShowControlGalleryButton}>
        <button type="button" onClick={() => handleNavigateImage(-1)}>
          <img src={previousSvg} alt="left chevron icon" />
        </button>

        <img src={selectedImage?.src} alt="product image" onClick={handleOpenModal} />

        <button type="button" onClick={() => handleNavigateImage(1)}>
          <img src={nextSvg} alt="right chevron icon" />
        </button>
      </SelectedProductImage>

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

      <ImageGalleryModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </ImageGalleryContainer>
  );
}

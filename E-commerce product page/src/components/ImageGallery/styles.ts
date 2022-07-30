import styled from "styled-components";

interface IImageGalleryContainerProps {
  $showControlGalleryButton: boolean;
}

export const ImageGalleryContainer = styled.div<IImageGalleryContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .product-image-album {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;

    li {
      position: relative;
      cursor: pointer;

      &.active::before {
        content: "";
        border: 2px solid ${(props) => props.theme.orange};
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.7);
        position: absolute;
        width: 100%;
        height: 100%;
      }
      img {
        border-radius: 8px;
        margin: 0 auto;
      }
    }

    @media (max-width: 768px) {
      display: ${(props) =>
        props.$showControlGalleryButton ? "flex" : "none"};
    }
  }
`;

interface ISelectedProductImage {
  $showControls: boolean;
}

export const SelectedProductImage = styled.div<ISelectedProductImage>`
  margin-bottom: 0.5rem;
  display: flex;
  position: relative;

  img {
    border-radius: 8px;
    width: 100%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    img {
      cursor: none;
      pointer-events: none;
    }
  }

  button {
    position: absolute;
    background: ${(props) => props.theme.white};
    border-radius: 50%;
    border: none;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    outline: 0;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);

    img {
      max-width: 1rem;
    }

    &:hover {
      filter: brightness(0.95);
    }

    &:first-child {
      top: 50%;
      left: ${(props) => (props.$showControls ? "0" : "-9999px")};
    }

    &:last-child {
      top: 50%;
      right: ${(props) => (props.$showControls ? "0" : "-9999px")};
    }

    @media (max-width: 768px) {

      
      &:first-child {
        top: 50%;
        left: 0;
      }

      &:last-child {
        top: 50%;
        right: 0;
      }
    }
  }
`;

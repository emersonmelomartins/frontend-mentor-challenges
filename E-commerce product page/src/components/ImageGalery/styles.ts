import styled from "styled-components";

export const ImageGalleryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .selected-product-image {
    margin-bottom: 1rem;

    img {
      border-radius: 8px;
    }
  }

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
  }
`;

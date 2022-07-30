import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;
  position: relative;
  height: 85vh;


  .close-btn {
    position: absolute;
    background: none;
    border: none;
    top: 0px;
    right: 20px;

    img {
      width: 1.5rem;
      filter: brightness(3);
    }
  }

  div {
    margin: 0 auto;
    max-width: 35rem;
    width: 100%;
    .product-image-album {
      margin-top: 1rem;
      img {
        width: 100%;
      }
    }
  }
`;

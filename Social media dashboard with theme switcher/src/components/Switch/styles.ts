import styled from "styled-components";

export const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;

  &:before {
    position: absolute;
    top: 2px;
    left: -100px;
    content: "Dark Mode";
    color: ${props => props.theme["text-secondary"]};
    font-weight: 700;
    font-size: 1rem;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme["toggle-bg"]};
    -webkit-transition: 0.4s;
    transition: 0.4s;

    &.round {
      border-radius: 25px;
    }

    &.round:before {
      border-radius: 50%;
    }

    &:before {
      position: absolute;
      content: "";
      height: 19px;
      width: 19px;
      left: 3px;
      bottom: 3px;
      background-color: #222;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }
  }

  input {
    appearance: none;

    &:checked + .slider {
      background: ${(props) => props.theme["toggle-bg"]};
    }

    &:checked + .slider:before {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }
  }
`;

import styled from "styled-components";

export const Card = styled.div`
  background-color: #daaaff;
  color: #fff;
  width: 154px;
  height: 70px;
  border-radius: 12px;
  text-align: left;
  padding: 12px;
  overflow: hidden;

  position: absolute;
  top: 105px;
  left: 50px;

  small {
    font-size: 20px;
  }

  div {
    display: flex;
    align-items: center;
    span {
      font-size: 25px;
      font-weight: 400;
      margin-right: 5px;
    }
  }

  i {
    width: 154px;
    height: 77px;
    position: absolute;
    border-radius: 50px;

    &.circle1 {
      left: 110px;
      top: -10px;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      );
    }

    &.circle2 {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      );
      left: 90px;
      bottom: -30px;
      transform: rotate(45deg);
    }

    &.circle3 {

      border: 1px solid rgba(255, 255, 255, 0.5);
      transform: rotate(-72.7deg);

      left: 60px;
      top: -72px;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 186px;
  height: 178px;
  bottom: -60px;
  left: -5px;
  padding: 20px;

  animation: showToUp 0.5s linear forwards;
  opacity: 0;
  bottom: -100px;

  border-radius: 18px;
  background-color: #fff;
  box-shadow: 0px 4px 6px 2px rgba(0, 0, 0, 0.1);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-weight: 500;
    }
  }

  @keyframes showToUp {
    from {
      opacity: 0;
    }

    to {
      bottom: -60px;
      opacity: 1;
    }
  }
`;

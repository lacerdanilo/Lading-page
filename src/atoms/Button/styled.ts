import styled from "styled-components";

export const Button = styled.button`
    width: 130px;
    height: 42px;
    border: 1px solid #17a4d0;
    color: #17a4d0;
    font-size: 14px;
    margin-left: 25px;
    border-radius: 5px;
    transition: all 0.25s ease-out;
    box-shadow: 0px 0px 17px -8px transparent;
    cursor: pointer;

    &:hover{
        color: #fff;
        background-color: #17a4d0;
        box-shadow: 0px 0px 17px 0px #17a4d0;

    }
`
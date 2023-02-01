import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

   > div {
        width: 50%;
    }

    h1 {
        color: #1E255E;
        font-size: 56px;
        font-weight: bold;
    }

    h6 {
        color: rgba(30, 37, 94, 0.7);
        font-size: 16px; 
        font-weight: normal;
        padding-right: 150px;
        margin-top: 20px;
    }
`

export const ColunImage = styled.div`
position: relative;

img{
    display: block;
    margin: auto;
    margin-right: 0px;
    border-radius: 50px;
}
`
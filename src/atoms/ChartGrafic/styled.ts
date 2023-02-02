import styled from "styled-components";

function generateBars() {
  const amountBars = [...Array(12).keys()];
  let styleSpan: any = [];

  amountBars.forEach((item) => {
    styleSpan.push(`
        div:nth-child(${item + 1}) {
           display: flex;
           justify-content: center; 
           align-items: center;  
           flex-direction: column;         
            div{
                background-color: #eff3fe;
                height: 91px;
                width: 2.1px ;
                border-radius: 5px;
                display: flex;
                justify-content: flex-end;

            span {
            background-color: #5236ff;
            display: block;
            height: 0px;
            max-height: ${Math.ceil(Math.random() * 100)}px;
            width: 3.5px;
            border-radius: 5px;
            
            animation: animationHeight 1s linear forwards;
        }
    }
    small{
        color: #baccfd;
        font-size: 10px;
        margin-top: 10px;
    }
    }
        `);
  });
  return styleSpan.join("");
}

export const Container = styled.div`
  margin-top: 30px;

  ${generateBars()}


    @keyframes animationHeight { 
        from{
            height: 0px;
        }

        to{
            height: 91px;
        }
    }

    

    

`;

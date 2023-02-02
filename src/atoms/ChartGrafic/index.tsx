import { useCallback } from "react";
import * as S from "./styled";

export const Chart = () => {
  const amountBars = Array.from(Array(12).keys());

  const fillZero = useCallback((value: number) => {
    const number = (value +1).toString()

    return number.padStart(2, "0")
  }, [])
  
  return (
    <S.Container>
      {amountBars.map((item) => (
       <div key={String(item)}> 
       <div>
            <span></span>
        </div>
        <small>{fillZero(item)}</small>
        </div>
      ))}
    </S.Container>
  );
};

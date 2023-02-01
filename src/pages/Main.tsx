import { Frontend } from "../templates/Frontend";
import * as S from "./styled";
import { ColunOne } from "../organisms/ProductInformation";
import { StaticProduct } from "../organisms/ProductStats";

export function Main() {
  return (
      <Frontend>
        <S.Container>
         <ColunOne/>
         <StaticProduct/>
        </S.Container>
      </Frontend>
  );
}

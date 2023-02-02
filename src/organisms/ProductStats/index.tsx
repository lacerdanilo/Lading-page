import ColunImg from "../../assets/img-colun-edit.png";
import { CardActivity } from "../../molecules/CardActivity";
import { CardChart } from "../../molecules/CardChart";

import * as S from "./styled";

export const StaticProduct = () => {
  return (
    <S.Container>
      <CardActivity />
      <CardChart/>
      <img src={ColunImg} alt="Mulher pesquisando"></img>{" "}
    </S.Container>
  );
};

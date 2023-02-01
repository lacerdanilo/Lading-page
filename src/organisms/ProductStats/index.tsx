import ColunImg from "../../assets/img-colun-edit.png";
import { CardActivity } from "../../molecules/CardActivity";
import * as S from "./styled";

export const StaticProduct = () => {
  return (
    <S.Container>
      <CardActivity />
      <img src={ColunImg} alt="Mulher pesquisando"></img>{" "}
    </S.Container>
  );
};

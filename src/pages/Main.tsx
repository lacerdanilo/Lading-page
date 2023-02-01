import { ButtonContact } from "../atoms/ButtonContact";
import { Frontend } from "../templates/Frontend";
import ColunImg from "../assets/img-colun.png"
import * as S from "./styled";
import { CardActivity } from "../molecules/CardActivity";

export function Main() {
  return (
      <Frontend>
        <S.Container>
          <div>
            <h1>Design driven development of your web product</h1>
            <h6>
              We are a full service digital agency that builds immesive user
              experience.
            </h6>
            <ButtonContact/>
          </div>
          <S.ColunImage>
            <CardActivity/>
            <img src={ColunImg} alt="Mulher pesquisando"></img> </S.ColunImage>
        </S.Container>
      </Frontend>
  );
}

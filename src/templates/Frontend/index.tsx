import React from 'react'
import * as S from "./styled"
type FrontendProps = {
    children: React.ReactNode;
}

export const Frontend = ({children}: FrontendProps) => {
  return (
    <S.Container>Teste Frontend{children}</S.Container>
  )
}

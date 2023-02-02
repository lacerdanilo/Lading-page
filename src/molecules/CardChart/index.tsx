import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Chart } from '../../atoms/ChartGrafic'
import * as S from './styled'

export const CardChart = () => {
  return (
    <S.Container>
        <div>
            <FiArrowLeft/>
            <strong>Stats</strong>
            <FiArrowRight/>
        </div>

        <Chart/>
    </S.Container>
  )
}

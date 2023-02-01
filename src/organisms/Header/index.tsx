import React from 'react'
import { Button } from '../../atoms/Button'
import { Logo } from '../../molecules/Logo'
import { Menu } from '../../molecules/Menu'
import { Box } from './styled'

export const Header = () => {
  return (
    <Box>
        <Logo/>
        <Menu/>
        <Button/>
    </Box>
  )
}

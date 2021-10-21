import React from 'react'
import { Grid, ResponsiveContext } from 'grommet'

type TAreas = {
  [k: string]: Array<{
    name: string
    start: number[]
    end: number[]
  }>
}

interface IProps {
  children: JSX.Element | JSX.Element[]
  areas: TAreas
  [k: string]: any
}

const ResponsiveGrid = (props: IProps) => {
  const { children, areas, ...other } = props
  const size = React.useContext(ResponsiveContext);
  return (
    <Grid areas={areas[size]} {...other}>
      {children}
    </Grid>
  )
}

export default ResponsiveGrid

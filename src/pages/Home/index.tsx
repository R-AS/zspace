import React from 'react'
import { Grid, Box, Grommet, ResponsiveContext } from 'grommet'
import ResponsiveGrid from '@/components/ResponsiveGrid'
import { makeStyle } from '@/utils/theme'

const useStyle = makeStyle(() => ({
  red: {
    backgroundColor: 'red',
  },
}))

const Home = () => {
  const [styles, theme] = useStyle()

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <ResponsiveGrid
              responsive= {true}
              rows={['small', 'small', 'small', 'small']}
              columns={['medium', 'medium']}
              gap="medium"
              areas={{
              xsmall: [
                { name: 'one', start: [0, 0], end: [0, 0] },
                { name: 'two', start: [0, 1], end: [0, 1] },
                { name: 'three', start: [0, 2], end: [0, 2] },
                { name: 'four', start: [0, 3], end: [0, 3] },
              ],
              small: [
                { name: 'one', start: [0, 0], end: [1, 0] },
                { name: 'two', start: [0, 1], end: [1, 1] },
                { name: 'three', start: [0, 2], end: [1, 2] },
                { name: 'four', start: [0, 3], end: [1, 3] },
              ],
              medium: [
                { name: 'one', start: [0, 0], end: [1, 0] },
                { name: 'two', start: [0, 1], end: [1, 1] },
                { name: 'three', start: [0, 2], end: [1, 2] },
                { name: 'four', start: [0, 3], end: [1, 3] },
              ],
              middle: [
                { name: 'one', start: [0, 0], end: [1, 0] },
                { name: 'two', start: [1, 0], end: [1, 0] },
                { name: 'three', start: [0, 1], end: [0, 1] },
                { name: 'four', start: [1, 1], end: [1, 1] },
              ]
            }}
            >
            <Box gridArea="one" style={styles.red} />
            <Box gridArea="two" background="red" />
            <Box gridArea="three" background="blue" />
            <Box gridArea="four" background="cyan" />
          </ResponsiveGrid>
          )}
      </ResponsiveContext.Consumer>
    </Grommet>

  )
}

export default Home

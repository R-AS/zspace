import { deepMerge } from 'grommet/utils'
import { TUncheckObject } from '@/types'

const theme = deepMerge({
  global: {
    colors: {
      brand: 'white',
      dark: "blue",
    },
    font: {
      size: '20px',
      height: '20px',
    },
    breakpoints: {
      xsmall: {
        value: 500,
      },
      small: {
        value: 900,
      },
      medium: undefined,
      middle: {
        value: 3000,
      },
    },
  },
})

export const makeStyle = <T>(styleCreator: () => T) => {
  const useTheme = (): [T, TUncheckObject] => {
    const styles = styleCreator()
    return [styles, theme]
  }
  return useTheme
}

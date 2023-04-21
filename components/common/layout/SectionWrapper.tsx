import React, { FC, ReactElement } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

interface SectionWrapperProps {
  justify?: 'center' | 'between'
  direction?: 'col' | 'row'
  items?: 'center' | 'start'
  pt?: number
  pb?: number
  pts?: number
  pbs?: number
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  justify = 'center',
  direction = 'col',
  items = 'center',
  pt = 0,
  pb = 0,
  pts = 0,
  pbs = 120,
  children,
}): ReactElement => {
  const isLargeTablet = useMediaQuery()
  return (
    <div
      style={{
        paddingBottom: isLargeTablet ? `${pb}px` : `${pbs}px`,
        paddingTop: isLargeTablet ? `${pt}px` : `${pts}px`,
      }}
      className={`w-full max-w-[1256px] mx-auto px-6 flex justify-${justify} flex-${direction} items-${items}`}
    >
      {children}
    </div>
  )
}

export default SectionWrapper

import React, { useContext } from 'react'
import cn from 'classnames'

import { EventsContext } from '@/app/providers/event-provider'
import { useCounter } from '@/shared/hooks'

import styles from './styles.module.scss'

export const TimePeriod = () => {
  const { minYear, maxYear, pastMax, pastMin } = useContext(EventsContext)
  const countMinYear = useCounter(minYear, pastMin)
  const countMaxYear = useCounter(maxYear, pastMax)

  return (
    <div className={styles.timePeriod}>
      <p className={cn(styles.minYear, styles.year)}>{countMinYear}</p>
      <p className={cn(styles.maxYear, styles.year)}>{countMaxYear}</p>
    </div>
  )
}

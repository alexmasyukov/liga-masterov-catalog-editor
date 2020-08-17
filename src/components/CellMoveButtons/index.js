import React from 'react'
import cn from "classnames"
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
import styles from 'components/Editor/editor.module.sass'

const CellMoveButtons = ({
                           upVisible = true,
                           downVisible = true,
                           onRowMoveUp,
                           onRowMoveDown
                         }) => {
  return (
     <>
       <AiOutlineArrowUp
          onClick={onRowMoveUp}
          className={cn(!upVisible && styles.empty)}
       />
       <AiOutlineArrowDown
          onClick={onRowMoveDown}
          className={cn(!downVisible && styles.empty)}
       />
     </>
  )
}

export default CellMoveButtons
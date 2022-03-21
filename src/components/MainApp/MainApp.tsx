import React from 'react'

import style from './MainApp.module.scss'

import { ModelsView } from 'types'

/* START - View MainApp additional imports and module code. */
// import { Select } from 'components'

const MainApp: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__select}></div>
        </div>
    )
}

export default MainApp

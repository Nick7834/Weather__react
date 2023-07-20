import React, { useEffect, useState } from 'react'
import styles from './Search.module.scss'

export const Search = ({ onChange }) => {

    const [search, setSearch] = useState('')
    

    function onSubmitForm(e) {
        e.preventDefault();

        onChange(search)
    }


  return (
    <div className={styles.formMain}>

                <label className={styles.label}>
                    <form onSubmit={onSubmitForm} className={styles.form} >
                        <img src="/public/search.svg" alt="search" />
                        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Search city' className={styles.search} />
                    </form>
                </label>


               
    </div>
  )
}

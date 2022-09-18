import React from 'react'
import style from "./style.css"

const CustomSearchBar=()=>{
    const searchBarInnerContainer = document.querySelector('.vtex-store-components-3-x-searchBarInnerContainer')
    const searchBarContainer = document.querySelector('.vtex-store-components-3-x-searchBarContainer')
    //const closeSearchBarBtn = document.createElement('<div class="closeSearchBarBtn" onClick={hiddenSearchBar()}> X </div>')

    const showSearchBar=()=>{
        searchBarInnerContainer?.classList.remove('vtex-store-components-3-x-searchBarInnerContainer--hidden')
        searchBarContainer?.classList.add(style.newZIndexSearchBar)
    }

    return (
        <>
        <div className={style.searchBtn} onClick={()=>showSearchBar()}>

        </div>
        </>
    )
}

export default CustomSearchBar
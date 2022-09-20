import React from 'react'
import style from "./style.css"

const CustomSearchBar=()=>{
    const searchBarInnerContainer = document.querySelector('.vtex-store-components-3-x-searchBarInnerContainer')
    const searchBarContainer = document.querySelector('.vtex-store-components-3-x-searchBarContainer')

    return (
        
        <div 
            className={style.searchBtn} 
            onClick={()=>{
                searchBarInnerContainer?.classList.remove('vtex-store-components-3-x-searchBarInnerContainer--hidden')
                searchBarContainer?.classList.add(style.newZIndexSearchBar)
            }}>
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.22754 16.9615C10.2484 16.9615 11.2593 16.7605 12.2025 16.3698C13.1457 15.9791 14.0027 15.4065 14.7246 14.6846C15.4465 13.9627 16.0191 13.1057 16.4098 12.1625C16.8005 11.2193 17.0016 10.2084 17.0016 9.1875C17.0016 8.1666 16.8005 7.15569 16.4098 6.2125C16.0191 5.26931 15.4465 4.41231 14.7246 3.69042C14.0027 2.96854 13.1457 2.39591 12.2025 2.00522C11.2593 1.61454 10.2484 1.41346 9.22754 1.41346C7.16574 1.41346 5.18838 2.23251 3.73046 3.69042C2.27255 5.14834 1.4535 7.1257 1.4535 9.1875C1.4535 11.2493 2.27255 13.2267 3.73046 14.6846C5.18838 16.1425 7.16574 16.9615 9.22754 16.9615ZM18.415 9.1875C18.415 11.6242 17.4471 13.9611 15.7241 15.684C14.0011 17.407 11.6642 18.375 9.22754 18.375C6.79086 18.375 4.45399 17.407 2.731 15.684C1.00801 13.9611 0.0400391 11.6242 0.0400391 9.1875C0.0400391 6.75082 1.00801 4.41395 2.731 2.69096C4.45399 0.967966 6.79086 0 9.22754 0C11.6642 0 14.0011 0.967966 15.7241 2.69096C17.4471 4.41395 18.415 6.75082 18.415 9.1875Z" fill="white"/>
            <path d="M14.4775 16.0604C14.5123 16.1068 14.5495 16.1509 14.5913 16.1938L19.0585 20.6599C19.2761 20.8775 19.5713 20.9999 19.8791 21C20.1869 21.0001 20.4821 20.878 20.6998 20.6605C20.9176 20.4429 21.0399 20.1479 21.04 19.8402C21.0401 19.5324 20.918 19.2373 20.7004 19.0196L16.2331 14.5535C16.1916 14.5115 16.147 14.4727 16.0997 14.4375C15.6445 15.058 15.0975 15.6056 14.4775 16.0615V16.0604Z" fill="white"/>
            </svg>
            <style>
            {`#menu-item-category-women,#menu-item-category-home,#menu-item-custom-sale{
                font-family: 'Industry';
                font-style: normal;
                font-weight: 600;
                font-size: 19px;
                line-height: 160%;
                display: flex;
                align-items: center;
                text-align: center;
                padding:0px 30px;
                letter-spacing: 0.02em;
                color: #FFFFFF;
            }`}
            </style>
        </div>
    )
}

export default CustomSearchBar
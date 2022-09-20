import React from 'react'
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'
import { useProduct } from 'vtex.product-context'
import { useRuntime } from 'vtex.render-runtime'
import { RecommendationProvider } from 'vtex.recommendation-context/RecommendationContext'
import style from './style.css'

const SugesstedColors=()=>{
    const productContext=useProduct()
    const { searchQuery } = useSearchPage()
    const { page } = useRuntime()
    const product =productContext?.product
    console.log('product Data',product,productContext, page, searchQuery )
    /*const categoryId=product?.categoryTree
    let categoryIdI=0
    const [category, setCategory]=useState('')*/

    return (
        <div className={style.colorVariationContainer}>
            <RecommendationProvider></RecommendationProvider>
        </div>
    )
}

export default SugesstedColors
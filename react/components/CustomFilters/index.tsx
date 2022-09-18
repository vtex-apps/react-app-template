import React, { /*useEffect,*/ useEffect, useState } from 'react'
//import {Button} from 'vtex.styleguide'
import {useCssHandles} from 'vtex.css-handles'
//import { SearchResultLayoutCustomQuery } from 'vtex.search-result'

const CSS_HANDLES=[
    'ContainerUsadosForm',
    'ContentTopUsadosForm',
    'ContentBottomUsadosForm',
    'contentInputUsadosForm',
    'TasaSelectInput',
    'customFormBtn',
    'VerMasUsadosForm',
    'TasaRangeInput'
]

const buscarUsados=()=>{
    const {handles}=useCssHandles(CSS_HANDLES)
    const [cliColor, setColor] = useState('')
    const [cliTalla, setTalla] = useState('')
    const [cliMarca, setMarca] = useState('')

    const [dataFiltros, setDataFiltros]:any = useState([])

    function toogleHide(){
        let isHide=document.querySelector('.busquedaAvanzada')?.classList.contains('hide')
        let isHide2=document.querySelector('.busquedaAvanzada2')?.classList.contains('hide')
        if(isHide&&isHide2){
            document.querySelector('.busquedaAvanzada')?.classList.remove('hide')
            document.querySelector('.busquedaAvanzada2')?.classList.remove('hide')
        }else{
            document.querySelector('.busquedaAvanzada')?.classList.add('hide')
            document.querySelector('.busquedaAvanzada2')?.classList.add('hide')
        }
    }

    useEffect(() => {
        fetch(`/files/filtros.json`)
          .then(response => response.json())
          .then(dataFil => {
            setDataFiltros(dataFil)
            console.log('dataFiltros',dataFil)
          })
          .catch((error) => {
            console.error(error)
          })
      }, [])

    

    return (
    <>
    <style>
        {`
            input[type='range'] { display: block; width: 100%; margin:auto;}
            input[type='range']:focus { outline: none;}
            input[type='range'],
            input[type='range']::-webkit-slider-runnable-track,
            input[type='range']::-webkit-slider-thumb {-webkit-appearance: none;}

            input[type=range]::-webkit-slider-thumb {
            background-color: #b0b0b0;
            width: 20px;
            height: 20px;
            border: 1px solid #fff;
            border-radius: 50%;
            margin-top: -9px;
            }

            input[type=range]::-moz-range-thumb {
            background-color: #777;
            width: 15px;
            height: 15px;
            border: 3px solid #333;
            border-radius: 50%;
            }

            input[type=range]::-ms-thumb {
            background-color: #b0b0b0;
            width: 20px;
            height: 20px;
            border: 3px solid #333;
            border-radius: 50%;
            }

            input[type=range]::-webkit-slider-runnable-track {
            background-color: #b0b0b0;
            height: 3px;
            }

            input[type=range]:focus::-webkit-slider-runnable-track {
            outline: none;
            }

            input[type=range]::-moz-range-track {
            background-color: #b0b0b0;
            height: 3px;
            }

            input[type=range]::-ms-track {
            background-color: #b0b0b0;
            height: 3px;
            }

            input[type=range]::-ms-fill-lower {
            background-color: HotPink
            }

            input[type=range]::-ms-fill-upper {
            background-color: black;
            } 
            .hide{display:none!important;}
            section.vtex-store-components-3-x-container{
                width: -webkit-fill-available;
            }
        `}
    </style>
    <div className={`${handles.ContainerUsadosForm} flex flex-col p10`}>
        <div className={`${handles.ContentTopUsadosForm} flex flex-row p10`}>
            <div className={`${handles.contentInputUsadosForm} flex flex-col w-20`}>
                <label className={`${handles.labelSelect} t-small form-simu-label`}>
                    Color
                </label>
                <select
                    className={`${handles.TasaSelectInput} select-input`}
                    value={cliColor}
                    onChange={(e: any)=>{
                            setColor(e.currentTarget.value)
                    }}>
                    {
                    dataFiltros[0]?.types?.map((element:any)=>{
                        return <option value={element.value}>{element.name}</option>
                    })
                    }
                </select>
            </div>
            <div className={`${handles.contentInputUsadosForm} flex flex-col w-20`}>
                <label className={`${handles.labelSelect} t-small form-simu-label`}>
                    Marca
                </label>
                <select
                    className={`${handles.TasaSelectInput} select-input`}
                    value={cliMarca}
                    onChange={(e: any)=>{
                            setMarca(e.currentTarget.value)
                    }}>
                    {
                    dataFiltros[1]?.types?.map((element:any)=>{
                        return <option value={element.value}>{element.name}</option>
                    })
                    }
                </select>
            </div>
            <div className={`${handles.contentInputUsadosForm} flex flex-col w-20`}>
                <label className={`${handles.labelSelect} t-small form-simu-label`}>
                    Talla
                </label>
                <select
                    className={`${handles.TasaSelectInput} select-input`}
                    value={cliTalla}
                    onChange={(e: any)=>{
                            setTalla(e.currentTarget.value)
                    }}>
                    {
                    dataFiltros[1]?.types?.map((element:any)=>{
                        return <option value={element.value}>{element.name}</option>
                    })
                    }
                </select>
            </div>
            <div className={`${handles.contentInputUsadosForm} flex flex-col w-20`}>
                <a
                    href={`/${cliMarca!=""?'/'+cliMarca:""}${cliColor!=""?'/'+cliColor:""}${cliTalla!=""?'/'+cliTalla:""}?_q=${cliMarca!=""?cliMarca:""}&fuzzy=auto&initialMap=ft&initialQuery=${cliMarca!=""?cliMarca:""}&map=category-1${cliMarca!="Todas"?',brand':''}${cliColor!="Todas"?',color':''}${cliMarca!="Todas"?',marca':''}&operator=and`}
                    className={`${handles.customFormBtn}`}
                >
                    Aplicar
                </a>
            </div>
        </div>
        <div className={`${handles.VerMasUsadosForm}`} 
        onClick={()=>toogleHide()}>
            Filtro
        </div>
    </div>
    </>)
}
export default buscarUsados
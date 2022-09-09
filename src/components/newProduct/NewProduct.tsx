import "./dist/newproduct.css"
import { useState } from "react"

import { ProgressBar } from "../pogressBar/progressBar"
import { NewProdPageOne } from "../newProductPages/newProductPageOne"
import { NewProductPageTwo } from "../newProductPages/newProductpageTwo"
import {  NewProductPageThree } from "../newProductPages/newProductPagesThree"

export const NewProduct = () => {

const [isPage, setPage] = useState<number>(1)

console.log(isPage)
    return (
        <div className="newProductContainer">
            <div className="newProductInner">
                <ProgressBar/>
                <div className="newProdPages">
                    {isPage === 1 &&  <NewProdPageOne  pageSetter={(page)=>setPage(page)}/>}
                    {isPage === 2 &&  <NewProductPageTwo  pageSetter={(page)=>setPage(page)}/>}
                    {isPage === 3 &&  <NewProductPageThree  pageSetter={(page)=>setPage(page)}/>}
                </div>
            </div>
        </div>
    )
} 
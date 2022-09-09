import "./dist/newproduct.css"
import { useState } from "react"

import { ProgressBar } from "../pogressBar/progressBar"
import { NewProdPageOne } from "../newProductPages/newProductPageOne"

export const NewProduct = () => {

const [isPage, setPage] = useState<number>(1)


    return (
        <div className="newProductContainer">
            <div className="newProductInner">
                <ProgressBar/>
                <div className="newProdPages">
                    {isPage === 1 &&  <NewProdPageOne/>}
                </div>
            </div>
        </div>
    )
} 
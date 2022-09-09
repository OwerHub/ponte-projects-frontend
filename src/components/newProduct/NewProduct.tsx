import "./dist/newproduct.css"
import {Iproject} from "../../types/projectTypes"
 import { useState } from "react"


import { ProgressBar } from "../pogressBar/progressBar"
import { NewProdPageOne } from "../newProductPages/newProductPageOne"
import { NewProductPageTwo } from "../newProductPages/newProductpageTwo"
import {  NewProductPageThree } from "../newProductPages/newProductPagesThree"

export const NewProduct = () => {

const [isPage, setPage] = useState<number>(1)
const [isProjectDatas, setProjectDatas] = useState<Iproject>(
{
    name: "",
    description: "",
    colleges: [],
    links: [],
    id: 111
}
)   


const test = (datas:Iproject) => {
    console.log("ez a bejö")
    console.log(datas)
} 

console.log(isProjectDatas)

    return (
        <div className="newProductContainer">
            <div className="newProductInner">
                <ProgressBar/>
                <div className="newProdPages">
                    {isPage === 1 &&  <NewProdPageOne  
                    pageSetter={(page)=>setPage(page)}
                    projectDataSetter={(set)=>setProjectDatas(set)}
                    //projectDataSetter={()=>test()}
                    projectDatas={isProjectDatas}
                    />}
                    {isPage === 2 &&  <NewProductPageTwo  pageSetter={(page)=>setPage(page)}/>}
                    {isPage === 3 &&  <NewProductPageThree  pageSetter={(page)=>setPage(page)}/>}
                </div>
            </div>
        </div>
    )
} 
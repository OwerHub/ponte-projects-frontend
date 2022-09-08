import "./dist/card.css"
import {Iproject} from "../../types/projectTypes"
import placeHolderPic from "../../img/placeholder.jpg"

interface IcardProps {
    projectData : Iproject
}




export  const Card = (props: IcardProps) => {


    return (
        <div className="cardOuter">
            <div>name: {props.projectData.name}</div>
            <img src={placeHolderPic} alt="" />
            <div></div>
        </div>
    )

}
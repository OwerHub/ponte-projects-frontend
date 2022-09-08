import {Iproject} from "../../types/projectTypes"

interface IcardProps {
    projectData : Iproject
}




export  const Card = (props: IcardProps) => {


    return (
        <div>
            <div>name: {props.projectData.name}</div>
            <div></div>
        </div>
    )

}
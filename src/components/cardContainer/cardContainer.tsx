import "./dist/cardContainer.css"
import { Iproject } from "../../types/projectTypes";
import { useState } from "react";


import {Card} from "../card//Card"
interface IcardContainerProps {
  projects: Iproject[];
  deleteCard: (id:number) => void
}




export const CardContainer = (props: IcardContainerProps) => {

const addIdToDelete  = ( id: number ) => {
  props.deleteCard(id)
}



 

  return <div className="cardContainerOuter">

   <div className="cardWrapper">
    {props.projects.map((project, iterator) => (
      <div  key={`cardKey${iterator}`}>
        <Card projectData={project} />
        <button  onClick={()=>addIdToDelete(project.id)}>delete</button>
      </div>
    ))}
   </div>

  </div>;
};

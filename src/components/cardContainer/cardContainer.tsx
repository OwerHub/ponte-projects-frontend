import "./dist/cardContainer.css"
import { Iproject } from "../../types/projectTypes";
import { useState } from "react";


import {Card} from "../card//Card"
interface IcardContainerProps {
  projects: Iproject[];
}




export const CardContainer = (props: IcardContainerProps) => {
  return <div className="cardContainerOuter">
    this is CardContainer

   <div className="cardWrapper">
    {props.projects.map((project, iterator) => (
      <Card projectData={project}  key={`cardKey${iterator}`}/>
    ))}
   </div>

  </div>;
};

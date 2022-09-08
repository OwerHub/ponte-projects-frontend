import { Iproject } from "../../types/projectTypes";
import { useState } from "react";


import {Card} from "../card//Card"
interface IcardContainerProps {
  projects: Iproject[];
}




export const CardContainer = (props: IcardContainerProps) => {
  return <div>
    this is CardContainer

   <div>
    {props.projects.map((project, iterator) => (
      <Card projectData={project}  key={`cardKey${iterator}`}/>
    ))}
   </div>

  </div>;
};

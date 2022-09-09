import "./dist/cardContainer.css"
import { Iproject } from "../../types/projectTypes";
import { useState } from "react";


import {Card} from "../card//Card"
import { act } from "react-dom/test-utils";
interface IcardContainerProps {
  projects: Iproject[];
  deleteCard: (id:number) => void
  resultCard: (id:number) => void
}




export const CardContainer = (props: IcardContainerProps) => {

const sendIdToDelete  = ( id: number ) => {
  props.deleteCard(id)
}

const sendIdToResult = (id:number) => {
  props.resultCard(id)
}

const getIdFromCard = (id:number, action:string) => {
  action === "delete" && sendIdToDelete(id)
  action === "result" && sendIdToResult(id)
}

 

  return (
    <div className="cardContainerOuter">
      <div className="cardWrapper">
        {props.projects.map((project, iterator) => (
          <Card
            key={`cardKey${iterator}`}
            projectData={project}
            sendId={(id, action) => getIdFromCard(id, action)}
          />
        ))}
      </div>
    </div>
  );
};

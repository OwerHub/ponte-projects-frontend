import "./dist/card.css";
import { Iproject } from "../../types/projectTypes";
//import placeHolderPic from "../../img/placeholder.jpg";
import { PictureFromText } from "../picture/PictureFromText";

interface IcardProps {
  projectData: Iproject;
  sendId: (id:number, actionType:string) => void
}

export const Card = (props: IcardProps) => {


  const sendId = (action:string) => {
    props.sendId(props.projectData.id, action)
  }

  return (
    <div className="cardOuter">
      <div className="cardTitle"> {props.projectData.name}</div>
      {/* <img src={placeHolderPic} alt="" /> */}
      <PictureFromText 
        letterA={props.projectData.name.toUpperCase().slice(0,1)} 
        letterB={props.projectData.name.toUpperCase().slice(1,2)}
        />
      <div> {props.projectData.description}</div>
      <div className="buttonDiv">
        <button onClick={()=> sendId("result")}>More</button>
        <button onClick={()=> sendId("delete")}>Delete</button>
      </div>
     
    </div>
  );
};

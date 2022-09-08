import { useState, useEffect } from "react";
import { CardContainer } from "../cardContainer/cardContainer";
import { Iproject } from "../../types/projectTypes";
import { fakebackendAnswer } from "../../services/fakeBackend";

export const Main = () => {

  const [isProjectArray, setProjectArray] = useState<Iproject[]>([]);
  
  


 async function appa(){
    const solved = await fakebackendAnswer(1500)
        setProjectArray(solved as Iproject[])
 }
  

useEffect(() => {
appa()
}, [])


  return (
    <div className="mainWrapper">
        This is main
    {isProjectArray.length > 0 && (
        <CardContainer projects={isProjectArray}/>
    )
    }

    
    </div>
  );
};

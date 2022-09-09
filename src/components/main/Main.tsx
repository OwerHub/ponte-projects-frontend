import "./dist/main.css";

import { useState, useEffect } from "react";
import { Iproject } from "../../types/projectTypes";
import { fakebackendAnswer,  fakebackendAdd, fakebackendDelete } from "../../services/fakeBackend";

import { CardContainer } from "../cardContainer/cardContainer";
import { NewProduct } from "../newProduct/NewProduct";
import { ResultModal } from "../resultModal/Resultmodal";

export const Main = () => {
  const [isProjectArray, setProjectArray] = useState<Iproject[]>([]);
  const [isNewModalOpen, setNewModalOpen] = useState<boolean>(false);
  const [isResultModalOpen, setResultModalOpen] = useState<boolean>(true) 

  async function askProject() {
    const solved = await fakebackendAnswer(1500);
    setProjectArray(solved as Iproject[]);
  }

 
 async  function addProject (project:Iproject){
  setNewModalOpen(false);
  const solved = await fakebackendAdd(project, 400)
  setProjectArray(solved as Iproject[])
  }


  async  function deleteProject  (deleteID:number){
    const solved = await fakebackendDelete(deleteID, 400)
    setProjectArray(solved as Iproject[])
    }


    const showresult = (id:number) => {

    }

  useEffect(() => {
    askProject();
  }, []);

  return (
    <div className="mainWrapper">

      <div className="head">
        <h1>PonteProjects</h1>
        <button onClick={() => setNewModalOpen(true)}>new task</button>
      </div>

      <div className="cardDiv">
        {isProjectArray.length > 0 && (
          <CardContainer 
            projects={isProjectArray} 
            deleteCard={(id) =>deleteProject(id)} 
            resultCard={(id) => showresult(id)}
            />
        )}
      </div>

      <div>
        {isNewModalOpen && (
          <NewProduct
            close={() => setNewModalOpen(false)}
            saveProject={(project: Iproject) => {
              addProject(project);
            }}
          />
        )}

        {isResultModalOpen && (
          <ResultModal id={4243}/>
        )}
      </div>

    

    </div>
  );
};

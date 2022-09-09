import "./dist/resultModal.css";
import { useState, useEffect } from "react";
import { fakebackendResults } from "../../services/fakeBackend";
import { Iproject } from "../../types/projectTypes";
import placeholder from "../../img/placeholder.jpg";

interface IresultModalProps {
  id: number;
  close: ()=> void
}

export const ResultModal = (props: IresultModalProps) => {
  const [isProjectResult, setProjectResut] = useState<Iproject>();

  async function getResults(id: number) {
    const solved = await fakebackendResults(id, 400);
    setProjectResut(solved as Iproject);
  }

  useEffect(() => {
    getResults(props.id);
  }, []);

 

  return (
    <div className="resultModalOuter">
      <div className="resultModalContainer">
        <div className="projectName">{isProjectResult?.name}</div>
        <div className="pictureDiv">
          <img src={placeholder} alt="" />
        </div>
        <div className="resultDiv">{isProjectResult?.description}</div>
        <div className="dataListDivWrapper">

          <div className="dataList">
            <div className="dataListHead">collaborators</div>
            <div className="collaboratorsWrapper">
              {isProjectResult?.collaborators?.map((collaborator, iterator) => (
                <div
                  key={`collaboratorDiv${iterator}`}
                  className="collaboratorDataWrapper"
                >
                  <div>{collaborator.name}</div>
                  <div>{collaborator.position}</div>
                </div>
              ))}
            </div>
          </div>
           {
            isProjectResult?.links?.length  && 
          <div className="dataList">
            <div className="dataListHead">Links</div>
            <div className="linkWrapper">
              {isProjectResult?.links?.map((linkData, iterator) => (
                <div className="linkDataWrapper" key={`linkWrap${iterator}`}>
                  <div>{linkData.name}</div>
                   
                  <div>{linkData.link}</div>
                </div>
              ))}
            </div>
          </div>
           }     

        </div>
        <div className="resultCloseButton" onClick={props.close}>X</div>
      </div>
    </div>
  );
};

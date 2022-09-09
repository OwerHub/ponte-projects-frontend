import "./dist/newProductPages.css";
import { useState, useEffect } from "react";
import { characterValidator } from "../../services/validators";
import { Icollaborator, Iproject } from "../../types/projectTypes";

interface IproductPageProps {
  pageSetter: (page: number) => void;
  projectDataSetter: (project: Iproject) => void;
  projectDatas: Iproject;
}

interface Inputcollaborator {
  name: string;
  position: string;
}
interface IerrorMessagePage2 extends Inputcollaborator {
  next?: string;
}

export const NewProductPageTwo = (props: IproductPageProps) => {
  const [isErrorMessage, setErrorMessage] = useState<IerrorMessagePage2>({
    name: "",
    position: "",
  });

  const [isValuesPageTwo, setValuesPageTwo] = useState<Inputcollaborator>({
    name: "",
    position: "",
  });

  const [iscollaboratorList, setcollaboratorList] = useState<Icollaborator[]>([]);

  const collaboratorValidator = () => {
    setErrorMessage((prev) => ({
      ...prev,
      name: characterValidator(isValuesPageTwo.name, 4),
      position: characterValidator(isValuesPageTwo.position, 4),
    }));
  };

  const addToArray = () => {
    const newcollaborator: Icollaborator = {
      ...isValuesPageTwo,
      id: Date.now(),
    };
    setcollaboratorList((prev) => [...prev, newcollaborator]);
    setValuesPageTwo({ name: "", position: "" });
  };

  const nextButtonHandler = () => {
    props.projectDataSetter({
      ...props.projectDatas,
        collaborators:iscollaboratorList
    });
    props.pageSetter(3);
  };


  const deletecollaborator = (id: number) => {
    setcollaboratorList((prev) => prev.filter((collaborator) => collaborator.id !== id));
  };

  useEffect(() => {
    collaboratorValidator();
  }, [isValuesPageTwo]);

  useEffect(() => {
    setcollaboratorList(props.projectDatas.collaborators)
  }, []);

  return (
    <div className="newProdPageContainer">
      <div className="newProgPageHead">Új Product Létrehozása 2</div>
      <div className="newProgPageBody newProdPage2">
        <div className="page2BodyWrapper">

          <div className="inputWrapper">

            <div className="collaboratorNameInputDiv inputDiv">
              <label htmlFor="name">Name</label>
              <input
                value={isValuesPageTwo.name}
                name="name"
                type="text"
                onChange={(e) => {
                  setValuesPageTwo((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
              <div className="inputErrorDiv">{isErrorMessage.name}</div>
            </div>

            <div className="collaboratorPosInputDiv inputDiv">
              <label htmlFor="name">Position</label>
              <input
                value={isValuesPageTwo.position}
                name="name"
                type="text"
                onChange={(e) => {
                  setValuesPageTwo((prev) => ({
                    ...prev,
                    position: e.target.value,
                  }));
                }}
              />
              <div className="inputErrorDiv">{isErrorMessage.position}</div>
              <button
                className="addButton"
                disabled={
                  isErrorMessage.name.length !== 0 ||
                  isErrorMessage.position.length !== 0
                }
                onClick={() => addToArray()}
              >
                Add collaborator
              </button>
            </div>

          </div>

          <div className="collaboratorWrapper">
            <div className="collaboratorListhead">collaborator List</div>
            <div className="colllegeList">
                {
                  iscollaboratorList.length === 0 &&
                  <div className="collabWarn">Select min one collaborator</div>
                }
              
              {iscollaboratorList.map((collaborator, iterator) => (
                <div key={`collaboratorCard${iterator}`} className="collaboratorCard">
                  <div className="collaboratorCardata">
                    <div>{collaborator.name}</div>
                    <div>{collaborator.position}</div>
                  </div>
                  <div
                    className="delete"
                    onClick={() => deletecollaborator(collaborator.id)}
                  >
                    delete
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="newProdPageFooter">
        <button onClick={() => props.pageSetter(1)}>Prev</button>
        <button
          onClick={() => nextButtonHandler()}
          disabled={iscollaboratorList.length === 0}
        >
          next
        </button>
      </div>
    </div>
  );
};

import "./dist/newProductPages.css";
import { useState, useEffect } from "react";
import { characterValidator } from "../../services/validators";
import { Icollege } from "../../types/projectTypes";

interface IproductPageProps {
  pageSetter: (page: number) => void;
}

interface InputCollege {
  name: string;
  position: string;
}
interface IerrorMessagePage2 extends InputCollege {
  next: string;
}

export const NewProductPageTwo = (props: IproductPageProps) => {
  const [isErrorMessage, setErrorMessage] = useState<IerrorMessagePage2>({
    name: "",
    position: "",
    next: "",
  });

  const [isValuesPageTwo, setValuesPageTwo] = useState<InputCollege>({
    name: "",
    position: "",
  });

  const [isCollegeList, setCollegeList] = useState<Icollege[]>([]);

  const collegeValidator = () => {
    setErrorMessage((prev) => ({
      ...prev,
      name: characterValidator(isValuesPageTwo.name, 4),
      position: characterValidator(isValuesPageTwo.position, 4),
    }));
  };

  const addToArray = () => {
    const newCollege: Icollege = {
      ...isValuesPageTwo,
      id: Date.now(),
    };

    setCollegeList((prev) => [...prev, newCollege]);

    setValuesPageTwo({ name: "", position: "" });
  };


  const deleteCollege = (id:number) => {
    setCollegeList((prev) => prev.filter(college => college.id !== id))
  }




  useEffect(() => {
    collegeValidator();
  }, [isValuesPageTwo]);

  return (
    <div className="newProdPageContainer">
      <div className="newProgPageHead">Új Product Létrehozása 2</div>
      <div className="newProgPageBody newProdPage2">
        <div className="page2BodyWrapper">
          <div className="inputWrapper">
            <div className="collegeNameInputDiv inputDiv">
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

            <div className="collegePosInputDiv inputDiv">
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
                disabled={
                  isErrorMessage.name.length !== 0 ||
                  isErrorMessage.position.length !== 0
                }
                onClick={() => addToArray()}
              >
                Add College
              </button>
            </div>
          </div>



          <div className="collegeWrapper">
            <div className="collegeListhead">College List</div>
            <div className="colllegeList">
              {isCollegeList.map((college, iterator) => (
                <div key={`collegeCard${iterator}`} className="collegeCard">
                    <div className="collegeCardata">

                  <div>{college.name}</div>
                  <div>{college.position}</div>
                    </div>
                    <div className="delete" onClick={()=>deleteCollege(college.id)}>
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
        <button onClick={() => props.pageSetter(3)} disabled={isCollegeList.length===0} >next</button>
      </div>
    </div>
  );
};

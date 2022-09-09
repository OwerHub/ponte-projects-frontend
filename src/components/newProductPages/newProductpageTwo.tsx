import "./dist/newProductPages.css";
import { useState, useEffect } from "react";
import {
  nameValidator,
  descriptionValidator,
  characterValidator,
} from "../../services/validators";
import { Icollege } from "../../types/projectTypes";

interface IproductPageProps {
  pageSetter: (page: number) => void;
}

interface InputCollege {
 name: string
 position: string
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
    const newCollege:Icollege = {
        ...isValuesPageTwo,
        id: 3242323
    }

  }


  useEffect(()=> {
    collegeValidator()
  }, [isValuesPageTwo])

  return (
    <div className="newProdPageContainer">
      <div className="newProgPageHead">Új Product Létrehozása 2</div>
      <div className="newProgPageBody newProdPage2">
        <div className="page2BodyWrapper">
          <div className="inputWrapper">
            <div className="collegeNameInputDiv inputDiv">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                onChange={(e) => {
                  setValuesPageTwo((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
              <div className="inputErrorDiv">{ isErrorMessage.name }</div>
            </div>

            <div className="collegePosInputDiv inputDiv">
              <label htmlFor="name">Position</label>
              <input
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

              >Add College</button>
            </div>
          </div>

          <div className="showWrapper">kettes</div>
        </div>
      </div>

      <div className="newProdPageFooter">
        <button onClick={() => props.pageSetter(1)}>Prev</button>
        <button
        
          onClick={() => props.pageSetter(4)}
        >
          next
        </button>
      </div>
    </div>
  );
};
function setValuesPageTwo(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}

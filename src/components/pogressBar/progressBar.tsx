import "./dist/progressBar.css"

interface IprogressBarProps {
    actualPage: number
}

export const ProgressBar = (props:IprogressBarProps) =>{

const steps = 3

const stepArray = Array.from({length: steps}, (v, k) => k+1)

return(
    <div className="progressBarContainer">
            {stepArray.map((step) =>(
                <div className={` progressCircle  ${step === props.actualPage ? "selectedCircle" : "unSelectedCircle"}`} key={`progPoint${step}`}>
                    {step}
                </div>
            ))}
    </div>
)
}
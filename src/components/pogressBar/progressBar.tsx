import "./dist/progressBar.css"

export const ProgressBar = () =>{

const steps = 3

const stepArray = Array.from({length: steps}, (v, k) => k+1)

return(
    <div className="progressBarContainer">
            {stepArray.map((step) =>(
                <div className="progressPoint" key={`progPoint${step}`}>
                    {step}
                </div>
            ))}
    </div>
)
}
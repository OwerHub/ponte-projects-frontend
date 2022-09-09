import "./dist/pictureFromText.css"

interface IpictureProps{
    letterA: string
    letterB: string
}

export const PictureFromText = (props:IpictureProps)=> {



    return (
        <div className="pictureFormTextContainer">
            <div className="letterA">{props.letterA}</div>
            <div className="letterB">{props.letterB}</div>
        </div>
    )

}
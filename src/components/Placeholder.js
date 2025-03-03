import ReactMarkdown from "react-markdown";

export default function ChefAnswer(props) {
    console.log(props)
    return(
        <div   className="suggested-recipe-container" aria-live="polite">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </div>
        
    )
}
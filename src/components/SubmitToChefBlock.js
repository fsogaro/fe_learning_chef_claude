
export default function SubmitToChefBlock(props) {
   

    return (
        <div className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button 
                // className={props.disabled ? "btn-disabled": "" }
                // disabled={props.disabled}
                onClick={props.getRecipe}
            >
                Get a recipe!
            </button>
        </div>
    )
}
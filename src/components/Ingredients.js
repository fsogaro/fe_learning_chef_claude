
export default function Ingredients(props) {

    const mapped_ingredients = props.ingredients.map(
        ingredient => {
            return(
                <li key={ingredient}>{ingredient}</li>
            )
        }
    )

    return (
        <div className='ingredients-container'>
            <h2>Available Ingredients</h2>
            <ul className="ingredient-list">
                {mapped_ingredients}
            </ul>
        </div>
    )
}
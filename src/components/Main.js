import React, { useState, useEffect, useRef } from 'react';
import Ingredients from './Ingredients';
import SubmitToChefBlock from './SubmitToChefBlock'; 
import getRecipeFromMistral from '../ai';
import ChefAnswer from './Placeholder';



// State : something that within the component needs to change based on user input
// Props: passed and cannot be changed within the component, only wat to update the view == re -render is if I setState
// render == running the function
/**
 * Note: if you ever need the old value of state
 * to help you determine the new value of state,
 * you should pass a callback function to your
 * state setter function instead of using
 * state directly. This callback function will
 * receive the old value of state as its parameter,
 * which you can then use to determine your new
 * value of state. So use a function.
 */

function Form() {
    
    const [ingredients, setIngredients] = useState(["pasta", "tomato", "mozzarella", "crogettes"])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)
    console.log(recipeSection)

    const numIngredients = ingredients.length
    const showIngredients = numIngredients > 0
    const showCallChef = numIngredients > 1
    const haveAnswer = recipe !== ""


    useEffect(() => {
        console.log("in use Effect")
        console.log(recipeSection)
        if (recipeSection.current !== null  ){
            recipeSection.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [recipe])


    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        const isNewItem = ingredients.includes(newIngredient)
        if (!isNewItem){
            setIngredients(
                (prevIngredients) => [...prevIngredients, newIngredient]
            ) // this uses the prev state so must use callback!
        }
    }

    console.log(recipe)

    return (
        <main>
            <form className="form-container" action={addIngredient}>
                <input 
                    type="text" 
                    name="ingredient" 
                    aria-label='Add ingredient' 
                    required={true} 
                    placeholder="E.g Origano" 
                />
                <button type="submit"> + Add Ingredient </button>
            </form>
            <section>
                {
                    showIngredients && 
                    <Ingredients ingredients={ingredients}/> 
                 } 
                {
                    showCallChef && 
                    <SubmitToChefBlock ref={recipeSection} getRecipe={getRecipe} /> 
                }
                {haveAnswer &&  <ChefAnswer recipe={recipe} />}
            </section>
            
            
        </main>
    );
}

export default Form;
import React, { useState } from 'react';
import Placeholder from './Placeholder';
import Ingredients from './Ingredients';
import SubmitToChefBlock from './SubmitToChefBlock'; 


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
    
    const [ingredients, setIngredients] = useState([])
    const [submittedToChef, setSubmittedToChef] = useState(false)

    const numIngredients = ingredients.length
    const showIngredients = numIngredients > 0
    const showCallChef = numIngredients > 3


    function handleSubmitToChef() {
         setSubmittedToChef(prevSub => !prevSub) 
    }


    function handleSubmit(formData) {
        const new_ingredient = formData.get("ingredient") // get the new ingredient based on name
        const isNewItem = ingredients.includes(new_ingredient)
        if (!isNewItem){
            setIngredients((prevIngredients) => [...prevIngredients, new_ingredient]) // this uses the prev state so must use callback!
        }
        console.log(ingredients)
    }
    

    return (
        <main>
            <form className="form-container" action={handleSubmit}>
                <input type="text" name="ingredient" aria-label='Add ingredient' required={true} placeholder="E.g origano" />
                <button type="submit"> + Add Ingredient</button>
            </form>
            <section>
                {showIngredients && <Ingredients ingredients={ingredients} />  } 
                {showCallChef && <SubmitToChefBlock handleSubmitToChef={handleSubmitToChef} /> }
                {submittedToChef && <Placeholder />}
            </section>
            
            
        </main>
    );
}

export default Form;
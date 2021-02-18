import { useReducer } from "react"
import {initialState, reducer} from "../store" 

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            {state.contador}
            <br/>
            <button onClick={() =>dispatch({type:"custom",payload:10})}>
                +10
            </button>
        </>
    )
}

export default Home

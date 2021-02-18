import { useReducer } from "react"
import {initialState, reducer} from "../store" 

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="container">
            {state.contador}
            <br/>
            <button className="btn btn-dark" onClick={() =>dispatch({type:"custom",payload:10})}>
                +10
            </button>
        </div>
    )
}

export default Home

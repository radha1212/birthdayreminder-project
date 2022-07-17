import React, { useState } from 'react'
import data from './components/Data'
import List from './components/List'

function App() {

    let [people, setPeople] = useState(data)
    let clearAll = (e) => {
        setPeople([])
    }
    return ( <
        main >
        <
        section className = 'container' >
        <
        h3 > { people.length }
        Birthday Today < /h3> <
        List people = { people }
        /> <
        button onClick = { clearAll } > Clear All < /button> <
        /section>



        <
        /main>
    )
}

export default App
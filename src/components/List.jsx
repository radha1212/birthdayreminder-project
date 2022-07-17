import React from 'react'

function List(prop)
{
  let{people}=prop;
  return(
    <>
      {
        people.map((person)=>
        {
          let {id,pname,age,image}=person;
          return(
           
            <article key={id} className="person">
              <img src={image} alt=""/>
              <div>
              <h4>{pname}</h4>
              <p>{age} years</p>
              </div>

              
            </article>
          )
        })

      }
    </>
  )
}
export default List

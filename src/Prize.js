import React from 'react'
import WinnerCard from './WinnerCard';
const prize = ({ winner }) => {
  const { year, category, laureates = [] } = winner || {};
  //const 
  // console.log(JSON.parse(laureates));
  return (
    <div className="row">
      {laureates.map(laureate =>
        <div className="col-5 m-3">
          <WinnerCard key={Math.round(Math.random() * 100000)} laureate={laureate} year={year} category={category} />
        </div>
      )}
    </div>
  )
}

export default prize

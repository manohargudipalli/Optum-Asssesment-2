import React from 'react'

const WinnerCard = ({ laureate, year, category }) => {
  const { id,
    firstname,
    surname,
    motivation,
    share } = laureate;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{`${firstname} ${surname}`}</h5>
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary">View More</a>
      </div>
    </div>
  )
}

export default WinnerCard

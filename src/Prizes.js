import React, { useState, useEffect } from 'react'
import Prize from './Prize';
const Prizes = () => {
  const [winners, setWinners] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchWinners();
  }, []);

  const fetchWinners = async () => {
    const dataObj = await fetch('http://api.nobelprize.org/v1/prize.json');
    const data = await dataObj.json();
    setWinners([...data.prizes.slice(0, 10)]);
  }

  const handleFilterByCategory = (value) => {
    setCategory(value);
    if (!value) {
      setIsFiltered(false)
      return;
    }
    setIsFiltered(true);
    const newWinners = winners.filter(winner => winner.category == value);
    setUpdatedData(newWinners)
  }

  const handleFilterByYear = (value) => {
    setYear(value);
    if (!value) {
      setIsFiltered(false)
      return;
    }
    setIsFiltered(true);
    const newWinners = winners.filter(winner => winner.year == value);
    setUpdatedData([...newWinners]);
  }

  return (
    <>
      <div className="row input-filters">
        <div className="input-group m-3 col-5">
          <input value={year} type="text" onChange={e => handleFilterByYear(e.target.value)} className="form-control" placeholder="Filter by year" aria-label="filter_year" />
        </div>
        <div className="input-group m-3 col-5">
          <input value={category} type="text" onChange={e => handleFilterByCategory(e.target.value)} className="form-control" placeholder="Filter by Category" aria-label="filter_category" />
        </div>
      </div>
      {!isFiltered ? (winners.map(winner => <Prize key={Math.round(Math.random() * 1000000000)} winner={winner} />)) : (
        updatedData.filter(winner => winner.year === year || winner.category === category).map(winner => <Prize key={Math.round(Math.random() * 1000000000)} winner={winner} />)
      )}
    </>
  )
}

export default Prizes

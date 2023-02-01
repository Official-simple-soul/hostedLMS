import React, { useState } from 'react';

const DropdownFilter = ({ setFilter, setDropDownFilter, dropDownFilter }) => {
  const [level, setLevel] = useState('Both');
  const [order, setOrder] = useState('');
  const [see_First, setSee_First] = useState('');

  const handleOrder = (e) => setOrder(e.target.value);
  const handleLevel = (e) => setLevel(e.target.value);
  const handleSee_First = (e) => setSee_First(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter({
      level: level,
      order: order,
      see_First: see_First,
    });
    setDropDownFilter(!dropDownFilter);
  };

  return (
    <form
      className="bg-white rounded-lg py-4 px-2 absolute z-40 shadow-lg lg:-ml-0 -ml-20 lg:mt-0 mt-4"
      onSubmit={handleSubmit}
    >
      <div className="checkbox-1">
        <p className="text-[#808080] text-sm my-2">Level</p>
        <div className="flex items-center">
          <input type="radio" value="Both" name="level" onClick={handleLevel} />
          <p className="ml-2">Both</p>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="Beginner"
            name="level"
            onClick={handleLevel}
          />
          <p className="ml-2">Beginner</p>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="Intermidiate"
            name="level"
            onClick={handleLevel}
          />
          <p className="ml-2">Intermediate</p>
        </div>
      </div>
      <hr />
      <div className="checkbox-2">
        <p className="text-[#808080] text-sm my-2">See first By</p>
        <div className="flex items-center">
          <input
            type="radio"
            value="Level"
            name="see_first_by"
            onClick={handleSee_First}
          />
          <p className="ml-2">Level</p>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="Track"
            name="see_first_by"
            onClick={handleSee_First}
          />
          <p className="ml-2">Track</p>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="Gender"
            name="see_first_by"
            onClick={handleSee_First}
          />
          <p className="ml-2">Gender</p>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="ID"
            name="see_first_by"
            onClick={handleSee_First}
          />
          <p className="ml-2">Trainer ID</p>
        </div>
      </div>
      <hr />
      <div className="checkbox-3">
        <p className="text-[#808080] text-sm my-2">Order</p>
        <div className="flex items-center">
          <input
            type="radio"
            value="Increasing"
            name="order"
            onClick={handleOrder}
          />
          <p className="ml-2">Increasing</p>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="Decreasing"
            name="order"
            onClick={handleOrder}
          />
          <p className="ml-2">Decreasing</p>
        </div>
      </div>
      <button type="submit" className="text-[#0D6EFD] cursor-pointer my-1.5">
        Apply
      </button>
    </form>
  );
};

export default DropdownFilter;

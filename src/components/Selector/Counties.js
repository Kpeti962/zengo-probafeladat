import React from 'react';

const Counties = () => {
  return (
    <div className='flex flex-col w-322 h-130 bg-countiBg items-center justify-center'>
      <h5>Megye</h5>
      <select className='w-263 h-34'>
        <option name="" id="">Válassz</option>
      </select>
    </div>
  )
};

export default Counties;
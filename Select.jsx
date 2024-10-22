import React from 'react'

const select = ({label, value, onchange, type, options = [] })=> {

    return(
        <div className='flex flex-col m-3'>
            <label className='text-gray-800 text-xs'>{label}</label>
            <select
            value={value || ""}
            onChange={onchange}
            type={type}
            className='border-gray-400 border rounded-md-1 outline-none px-1 text-xs h-8 min-w-[240px]
             focus:border-green-400'
            >
                {options?.map((item) => {
                    <option key={item.value} value={item.value}>{item.label}</option>
                })}
            </select>
        </div>

    );
};
export default select;
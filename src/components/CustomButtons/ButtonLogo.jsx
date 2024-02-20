import React from 'react';

const ButtonLogo = () => {
    return (
      
<div className='flex flex-col  gap-6 p-6'>
	<div className='button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  '>
		<span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Active</span>
	</div>

	<div className='button w-40 h-16 bg-blue-500  cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    rounded-full  border-[1px] border-blue-400
    
  '>
		<span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Love Me</span>
	</div>

	<div className='button w-16 h-16 bg-rose-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#c11703,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#c11703,0_13px_0_0_#c1170341]
    border-[1px] border-rose-400
  '>
		<span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Oh NO</span>
	</div>
</div>
    );
};

export default ButtonLogo;
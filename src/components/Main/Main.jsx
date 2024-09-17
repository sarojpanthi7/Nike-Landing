import nikeShoes from '../../assets/nikeShoes.png'
export default function Main(){
    return(
        <main className=' mx-24 mt-8 grid grid-cols-2'>
            <div>
            <div className='text-8xl font-Poppins font-extrabold'>
               <p>YOUR FEET</p>
               <p>DESERVE</p>
               <p>THE BEST</p>
            </div>
            <div className=' mt-6'>
                <p>YOUR FEET DESERVES THE BEST SHOES AND WE'RE HERE TO</p>
                <p>HELP YOU WITH OUR SHOES. YOUR FEET DESERVES</p>
                <p>THE BEST SHOES AND WE'RE HERE TO HELP YOU WITH OUR</p>
                <p>Shoes.</p>
            </div>
            <div className='mt-6 flex gap-8'>
              <button className='w-28 p-1 bg-red-500 text-white rounded-sm
               
              '>Shop Now</button>

            <button className='w-28 p-1 border-2 border-gray-800 text-slate-600 rounded-sm
               
               '>Category</button>
            </div>
            </div>
            <div>
                <img src={nikeShoes}/>
            </div>
        </main>
    )
}
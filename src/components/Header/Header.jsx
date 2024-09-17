import NikeLogo from '../../assets/NikeLogo.png'
export default function Header(){
    return(
        <header className='flex justify-between font-bold'>
            <div>
                <img src={NikeLogo} height={100} width={100}/>
            </div>
            <nav>
                <ul>
                    <li className='flex gap-8'>
                        <a href='#'>Menu</a>
                        <a href='#'>Location</a>
                        <a href='#'>About</a>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
            <div>
                <button
                 className=' w-20 p-1 bg-red-500 text-white rounded-sm'
                >
                    Login
                </button>
            </div>
        </header>
    )
}
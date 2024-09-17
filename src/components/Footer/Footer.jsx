import flipcartLogo from '../../assets/flipcartLogo.png'
import amazonLogo from '../../assets/amazonLogo.png'
export default function Footer(){
    return(
        <footer className="mx-24">
            <div className='mt-8'>
                <p className='text-slate-600'>Also Available on</p>
            </div>
            <div className='flex'>
                <img className='mt-2' src={flipcartLogo} height={50} width={50}/>
                <img className='mt-2' src={amazonLogo} height={50} width={50}/>
            </div>
        </footer>
    )
}
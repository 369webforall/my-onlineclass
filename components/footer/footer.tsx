import Link from "next/link";

const Footer = () => {
    return ( 
    <div className="
    border-t-[1px]   ">
       <div className="flex justify-between py-4 px-10">
    
     
                <div> <Link href='/' className='flex items-center gap-1 mr-4'>
            <h1 className='text-orange-600 font-semibold'>stackhub school</h1>
        </Link></div>
        <p>All rights reserved. @{new Date().getFullYear()} stackHub school.</p>
        <div className="flex gap-4 items-center">
            <Link href='/tnc'>T&C</Link>
            <Link href='/privacy-policy'>Privacy-Policy</Link>
            <Link href='/refund'>Refund</Link>
        </div>
        
             
     </div>
    </div>  );
}
 
export default Footer;
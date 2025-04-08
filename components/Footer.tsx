import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-top border-gray-700">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image src="/logo.svg" alt="logo" width={145} height={25} className="object-contain" />
            </div>
            <div className="footer__links">
                {footerLinks.map((link)=>(
                    <div key={link.title}
                    className="footer__link">
                        <h3 className="font-bold">{link.title}</h3>
                        {link.links.map((item)=>(
                            <Link key={item.title}
                            href={item.url}
                            className="text-gray-500 text-base hover:text-primary-blue transition duration-200 ease-in-out">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p>@2025 Carhub. All rights reserved</p>
                <div className="footer__copyrights-link">
                    <Link href="/" className="text-gray-500 text-base hover:text-primary-blue transition duration-200 ease-in-out">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="text-gray-500 text-base hover:text-primary-blue transition duration-200 ease-in-out">
                        Terms of Use
                    </Link>
                </div>
            </div>
    </footer>
  )
}

export default Footer
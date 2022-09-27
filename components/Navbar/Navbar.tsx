import Link from 'next/link'
import style from '../Navbar/Navbar.module.css'
const Navbar=()=>{
    const genres=[
        {
            id: 28,
            name: "Action"
        },
        {
            id: 12,
            name: "Adventure"
        },
        {
            id: 16,
            name: "Animation"
        },
        {
            id: 35,
            name: "Comedy"
        },
        {
            id: 80,
            name: "Crime"
        },
        {
            id: 99,
            name: "Documentary"
        },
        {
            id: 18,
            name: "Drama"
        },
    ]
    return(
        <div className={style.navbarContainer}>
            <div className={style.navbarTitle}><Link href='/'>Website Title</Link></div>
            <ul className={style.navbarList}>
            <li className={style.navbarListItems}><Link href='/'>Home</Link></li>
                <li className={style.navbarListItems}><Link href='/movies'>Movies</Link></li>
                <li className={style.navbarListItems}><Link href='/profile'>Profile</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
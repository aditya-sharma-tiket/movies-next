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
                <li className={style.navbarListItems}> <Link href='/movies'>Movies</Link></li>
                <li className={style.navbarListItems}>Shows</li>
                <li className={style.navbarListItems}>Profile</li>
            </ul>
            {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div>
                   <p>Genre</p>
                    <div>
                    {genres.map((genre)=>{
                        return <option key={genre.id}>{genre.name}</option>
                    })}
                    </div>
                    
                </div>
                <Link href='/profile'><p style={{marginLeft:'3rem'}}>Profile</p></Link>
                <input type='search' placeholder="Search...." style={{color:'white',fontWeight:'bold',fontSize:'18px',height:'40px',backgroundColor:'#51557E',borderRadius:'10px',border:'2px solid #51557E'}}/>
            </div> */}
        </div>
    )
}

export default Navbar;
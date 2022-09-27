import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import style from '../Layout/Layout.module.css'
type DashboardLayoutProps = {
    children: React.ReactNode,
};
export default function Layout({ children }:DashboardLayoutProps) {
  return (
    <div className={style.mainLayoutContainer}>
      <Navbar />
      <main>{children}</main>
      <div className={style.footer}>
        <Footer/>
      </div>
    </div>
  )
}
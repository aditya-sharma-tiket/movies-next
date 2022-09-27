
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
type DashboardLayoutProps = {
    children: React.ReactNode,
};
export default function Layout({ children }:DashboardLayoutProps) {
  return (
    <div style={{position:'relative',minHeight:'100vh'}}>
      <Navbar />
      <main>{children}</main>
      <div  style={{position:'absolute',textAlign:'center',width:'100%',bottom:'0'}}>
        <Footer/>
      </div>
    </div>
  )
}
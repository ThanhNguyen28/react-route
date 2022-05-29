import Header from '../Header'
import SideBar from '../SideBar'
import Footer from '../Footer'
function DefaultLayout({children}) {
    return ( 
    <div>
       <Header/>
       <div className='container'>
            <SideBar/>
            <div className='content'>
             {children}
            </div>
       </div>
       <Footer/>
    </div> 
    );
}

export default DefaultLayout;
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Fragment } from 'react'
import {publicRoutes} from './routes'
import DefaultLayout from './components/Layout/DefaultLayout'
function App() {

  return (
    <Router>
      <div className='App'> 
        <Routes>
           {publicRoutes.map((item,index)=>{
             var Page =item.component;
             var Layout = DefaultLayout;
             if(item.layout){
               Layout = item.layout;
             }else if(item.layout===null){
               Layout = Fragment;
             }
             return (<Route 
                        key={index} 
                        path={item.path} 
                        element={
                        <Layout>
                          <Page/> {/* children */}
                        </Layout>
                      } />)
           })}
        </Routes>
      </div>
    </Router> 
  );
}

export default App;


// --------- import external dependencies ----------
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

// --------- import screen component with lazy load ----------
const Home = lazy(() => import("../screens/Home"))












function AppRoute() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
             <Route exact path="/" element={<Home />} /> 

  





       


              {/* 
          <Route exact path="/signup" component={Signup} />
              <Route exact path="/forget" component={Forget} /> 
             <Route exact path="/dashboard" component={Dashboard} />  */}
            {/*<Route exact path="/music" component={Music} />  */}
  
  
  
            
          </Routes>
        </Router>
      </Suspense>
  
  
    );
  }
  
  export default AppRoute;


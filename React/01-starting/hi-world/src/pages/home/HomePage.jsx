import React from 'react';

// remember to install react router dom to use this.
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const HomePage = () => {

  // Location is to know the current path location
  const location = useLocation()
  // Navigate replaces History. which allows to navigate forward/backwards and more.
  const navigate = useNavigate()

  console.log(`we are in route: ${location.pathname}`);

  const goToProfile = () => {
    navigate("/profile")
  }

  
  const [search, setSearch] = useSearchParams();
  const searching = () => {
    setSearch("searchingHere")
  }

  const navigateProps = () => {
    navigate("/online-state",{
      state: {
        online: true,
      }
    })
  }

  return (
    <div>
      <h1> Home Page </h1>
      <h2> Dashboard </h2>
      <button onClick={goToProfile}> Go to your profile </button>
      {/* add searching() so it searches in this URL, not sure how it would work to click, navigate, and search in that new URL, prob using a use effect under the new URL so once its loading it */}
      <button onClick={ () => { navigateProps(); }}> Go to page with State / Query Params </button>
    </div>
  );
}

export default HomePage;

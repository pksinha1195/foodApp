import RestaurantList from "./RestaurantList";
import "./LandingPage.css";
import "../index.css";
import HomeSection from "./HomeSection";

const LandingPage = () => {
  const detectLocation = (e) => {
    e.preventDefault();
    let x = document.getElementById("detectLoc");
    let y = getComputedStyle(x);
    // in case css styles present in other file
    // console.log(getComputedStyle(document.getElementById("detectLoc")).getPropertyValue("display"));
    if (y.getPropertyValue("display") === "block") {
      x.style.display = "none";
      document.getElementById("caretDown").style.transform = "rotate(-0deg)";
    } else {
      x.style.display = "block";
      document.getElementById("caretDown").style.transform = "rotate(180deg)";
    }
  };

  return (
    <>
      <div className="container-fluid home-sereen">
        <div className="text-center fs-1" style={{ color: "white" }}>
          <div className="welcome"> Welcome To FoodApp</div>
          <div className="welcome">
            Discover the best food & drinks in Patna
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <div className="flex-container">
                <div style={{borderRadius:"10px 0px 0px 10px"}}>
                  <i
                    style={{ color: "red" }}
                    className="fa-solid fa-location-dot pe-3"
                  ></i>
                  <input
                    id="mylocation"
                    size={25}
                    className="p-1"
                    type="text"
                    placeholder="Enter your Location"
                    // autoComplete="true"
                  />
                </div>

                <div>
                  <button
                    onClick={(e) => detectLocation(e)}
                    id="caretDown"
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      marginTop: "6px",
                      transition: "all 0.5s",
                    }}
                  >
                    <i className="fa-solid fa-caret-down"></i>
                  </button>

                  <div id="detectLoc" className="py-2">
                    <i
                      className="fa-solid fa-location-crosshairs pe-2 pt-1"
                      style={{ color: "red" }}
                    ></i>
                    <span style={{ color: "red", fontSize: "18px" }}>
                      Detect Current Location
                    </span>
                    <br />
                    <span style={{ fontSize: "14px", paddingLeft: "30px" }}>
                      Useing GPS
                    </span>
                  </div>
                </div>
                <div style={{borderRadius:"0px 10px 10px 0px"}}>
                  <i
                    style={{ color: "gray", borderLeft: "2px solid gray" }}
                    className="ps-3 fa-solid fa-magnifying-glass pe-2"
                  ></i>
                  <input
                    
                    id="searchInput"
                    size={40}
                    className="p-1"
                    type="text"
                    placeholder="Search for Restaurant, cuisine or a dish"
                  />
                </div>
              </div>
            </div>
        </div>
      </div>

      <RestaurantList />
      <HomeSection />
    </>
  );
};

export default LandingPage;

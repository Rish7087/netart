import "./App.css";

const App = () => {
  return (
    <>
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="main">
        <div className="left">
          <div className="awardImage">
            <img src="/images/award.png" alt="award-image" />
          </div>
        </div>
        <div className="right">
          <div className="heading">
            <h4>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>

            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>
          <div className="main-image">
            <img src="/images/main.png" alt="award-image" />
            <p>
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
      <div className="products">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src="/images/products.png" alt="prdoucts-image" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <hr className="redHr" />

      <div className="footer">
        <h4> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p>
          CHEMICALS & PROCESS <span class="red-bar">|</span> POWER WATER & WASTE WATER <span class="red-bar">|</span> OILS & GAS <span class="red-bar">|</span> PHARMA <span class="red-bar">|</span> SUGARS
          & DISTILLERIES <span class="red-bar">|</span> PAPER & PULP <span class="red-bar">|</span> MARINE & DEFENCE <span class="red-bar">|</span> METAL & MINING <span class="red-bar">|</span> FOOD &
          BEVERAGE <span class="red-bar">|</span> PETROCHEMICAL & REFINERIES <span class="red-bar">|</span> SOLAR <span class="red-bar">|</span> BUILDING <span class="red-bar">|</span> HVAC <span class="red-bar">|</span>FIRE FIGHTING <span class="red-bar">|</span>
          AGRICULTURE & RESIDENTIAL
        </p>
        <div className="contact">
          <ul>
          
            <li><img src="/images/phone.png" alt="phone-icon"/>Toll free <b>1800 200 1234</b></li>
            <li><img src="/images/facebook.png" alt="facebook-icon"/>wwwfacebook.com/cripumps</li>
            <li><img src="/images/web.png" alt="web-icon"/>www.crigroups.com</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default App;

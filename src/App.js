import logo from "./imgs/logo.svg";
import imgs from "./imgs/png3.png";
import section from "./imgs/png5.png";
import apple from "./imgs/png4.png";
import "./App.css";

function App() {
  return (
    <body className="App">
      <header className="App-header">
        <div className="container container__header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-list-items">
                <a href="#">Home </a>
              </li>
              <li className="header__nav-list-items">
                <a href="#">Features </a>
              </li>
              <li className="header__nav-list-items">
                <a href="#">Showcase </a>
              </li>
              <li className="header__nav-list-items">
                <a href="#">Pricing </a>
              </li>
            </ul>
          </nav>
          <a href="#" className="btn">
            Sign in{" "}
          </a>
        </div>
      </header>
      <main className="App-main">
        <div className="container main__container">
          <div className="main__container--title">
            <h1>Manage Payroll Like an Expert</h1>
            <p>
              Payna is helping you to setting up the payroll without required
              any finance skills or knowledge before
            </p>
            <a href="#">Get Started</a>
          </div>
          <div className="imgs">
            <img src={imgs} className="App-png2" alt="logo" />
          </div>
        </div>
        <div className="container logo_container">
          <h3>Trusted by Global Companies</h3>
          <img src={apple} className="App-png2" alt="logo" />
        </div>
        <div className="container">
          <div className="social__title">
            <h3>WORK BETTER</h3>
            <h1>For Your Business</h1>
            <p>
              We did research what your company needs and here we are providing
              all of them just for you
            </p>
          </div>
          <div className="social_section">
            <div className="social_section--box">
              <span className="social_section--box--icon icon-1"></span>
              <div className="social_section--box--info">
                <h3>Share Insights</h3>
                <p>Working together with your team to make decisions</p>
              </div>
            </div>
            <div className="social_section--box">
              <span className="social_section--box--icon icon-2"></span>
              <div className="social_section--box--info">
                <h3>Share Insights</h3>
                <p>Working together with your team to make decisions</p>
              </div>
            </div>
            <div className="social_section--box">
              <span className="social_section--box--icon icon-3"></span>
              <div className="social_section--box--info">
                <h3>Share Insights</h3>
                <p>Working together with your team to make decisions</p>
              </div>
            </div>
            <div className="social_section--box">
              <span className="social_section--box--icon icon-4"></span>
              <div className="social_section--box--info">
                <h3>Share Insights</h3>
                <p>Working together with your team to make decisions</p>
              </div>
            </div>
            <div className="social_section--box">
              <span className="social_section--box--icon icon-5"></span>
              <div className="social_section--box--info">
                <h3>Share Insights</h3>
                <p>Working together with your team to make decisions</p>
              </div>
            </div>
            <div className="social_section--box">
              <span className="social_section--box--icon icon-6"></span>
              <div className="social_section--box--info">
                <h3>Share Insights</h3>
                <p>Working together with your team to make decisions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer_continer">
          <div>
          <img src={section} className="App-png2" alt="logo" />
          </div>
          <div className="footer_continer_title">
          <h3>SAVE MORE TIME</h3>
            <h1>And Boost Productivity</h1>
            <p>
              We did research what your company needs and here we are providing
              all of them just for you
            </p>
            <from>
            <input type="email" placeholder="Email Address" />
            <a href="#">Get Started</a>
            </from>
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;

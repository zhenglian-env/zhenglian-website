import './App.css'
import heroEarth from './assets/hero-earth.png'
import smartRecycling from './assets/smart-recycling.png'
import zhenglianLogo from './assets/zhenglian-logo.png'
function App() {
  return (
    <div className="website">
      <header className="navbar">
        <div className="brand">
  <img
    src={zhenglianLogo}
    alt="正聯環保有限公司"
    className="brand-logo"
  />
</div>

        <nav>
          <a href="#about">關於正聯</a>
          <a href="#services">服務項目</a>
          <a href="#sustainability">永續循環</a>
          <a href="#contact">聯絡我們</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-tag">FOOD WASTE MANAGEMENT</div>

            <h1>
              讓每一份資源
              <br />
              <span>重新回到循環</span>
            </h1>

            <p className="hero-text">
              從廚餘收運、清運管理到數位化紀錄，
              <br />
              正聯環保與企業攜手，讓廢棄資源走向更永續的未來。
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href="#contact">
                聯絡我們
              </a>

              <a className="secondary-button" href="#services">
                了解服務
              </a>
            </div>
          </div>

        <div className="hero-image">
         <img src={heroEarth} alt="永續循環" />
        </div>
        
        </section>
        <section className="smart-recycling-section">
        <img
        src={smartRecycling}
        alt="正聯環保智慧清運與永續循環"
        className="smart-recycling-image"
        />
        </section>
        
        <section className="intro" id="about">
          <div className="section-label">ABOUT US</div>
          <h2>不只是清運，更是資源循環的一環</h2>
          <p>
            正聯環保有限公司專注於廚餘收運與環境管理服務，
            透過標準化作業、數位管理與完整收運紀錄，
            協助客戶提升管理效率，並逐步建立可追溯的環境數據。
          </p>
        </section>

        <section className="services" id="services">
          <div className="section-heading">
            <div>
              <div className="section-label">OUR SERVICES</div>
              <h2>我們的服務</h2>
            </div>

            <p>正聯環保提供新竹、竹北地區廚餘收運及一般事業廢棄物清運服務，從現場收運到數位化清運紀錄，提供企業更清楚、更有效率的清運管理方式。</p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-number">01</div>
              <h3>廚餘收運</h3>
              <p>依客戶需求安排固定或彈性的收運服務，建立穩定清運流程。</p>
            </article>

            <article className="service-card">
              <div className="service-number">02</div>
              <h3>清運紀錄</h3>
              <p>保留日期、桶數、司機、照片與簽名等資料，提升紀錄完整性。</p>
            </article>

            <article className="service-card">
              <div className="service-number">03</div>
              <h3>數位化管理</h3>
              <p>透過管理系統整合派車、收運與客戶資料，降低紙本作業負擔。</p>
            </article>

            <article className="service-card">
              <div className="service-number">04</div>
              <h3>永續數據</h3>
              <p>逐步建立廚餘回收與資源循環數據，協助企業掌握環境績效。</p>
            </article>
          </div>
        </section>

        <section className="sustainability" id="sustainability">
          <div className="sustainability-content">
            <div className="section-label light">SUSTAINABILITY</div>
            <h2>共創永續循環經濟</h2>
            <p>
              廚餘不是終點，而是下一段資源循環的開始。
              我們希望透過更有效率的收運與管理，
              與客戶共同減少浪費、提升資源利用價值。
            </p>
          </div>

          <div className="sustainability-slogan">
            <span>正向循環</span>
            <strong>聯手減碳</strong>
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <div className="section-label">CONTACT</div>
            <h2>一起為環境多做一步</h2>
            <p>如有廚餘收運、企業合作或服務需求，歡迎與正聯環保聯繫。</p>
          </div>

          <div className="contact-info">
            <div>
              <span>公司</span>
              <strong>正聯環保有限公司</strong>
            </div>

            <div>
              <span>電話</span>
              <strong>03-5240065</strong>
            </div>

            <div>
              <span>服務區域</span>
              <strong>新竹地區</strong>
            </div>
          </div>
        </section>
      </main>

<div className="mobile-contact-bar">
  <a href="tel:035240065" className="call-button">
    ☎ 立即來電
  </a>

  <a
    href="https://lin.ee/V42RwgT"
    target="_blank"
    rel="noopener noreferrer"
    className="line-button"
  >
    LINE 諮詢
  </a>
</div>
      <footer>
        <div>正聯環保有限公司</div>
        <div>正向循環・聯手減碳</div>
      </footer>
    </div>
  )
}

export default App
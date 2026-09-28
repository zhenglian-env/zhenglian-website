import { useEffect } from 'react'
import zhenglianLogo from './assets/zhenglian-logo.png'

function HsinchuFoodWastePage() {
  useEffect(() => {
    document.title =
      '新竹廚餘回收業者｜新竹・竹北廚餘清運｜正聯環保'

    let description = document.querySelector(
      'meta[name="description"]'
    )

    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.appendChild(description)
    }

    description.setAttribute(
      'content',
      '正聯環保提供新竹、竹北地區廚餘清運與廚餘回收服務，服務餐廳、公司行號、社區、學校及營業場所，依實際需求安排固定或彈性收運。'
    )

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    )

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    canonical.setAttribute(
      'href',
      'https://www.zhenglian.com.tw/hsinchu-food-waste-recycling'
    )
        const oldSchema = document.getElementById('zhenglian-food-waste-schema')

    if (oldSchema) {
      oldSchema.remove()
    }

    const schema = document.createElement('script')
    schema.id = 'zhenglian-food-waste-schema'
    schema.type = 'application/ld+json'

    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://www.zhenglian.com.tw/#business',
          name: '正聯環保有限公司',
          url: 'https://www.zhenglian.com.tw/',
          logo: 'https://www.zhenglian.com.tw/zhenglian-logo.png',
          description:
            '正聯環保有限公司提供新竹市、新竹縣、竹北及周邊地區的廚餘清運與廚餘回收服務，服務對象包含餐廳、公司行號、社區、學校及營業場所。',
          telephone: '0965-092828',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '03-5240065',
              contactType: 'customer service',
              areaServed: 'TW',
              availableLanguage: 'zh-TW',
            },
            {
              '@type': 'ContactPoint',
              telephone: '0965-092828',
              contactType: 'customer service',
              areaServed: 'TW',
              availableLanguage: 'zh-TW',
            },
          ],
          areaServed: [
            {
              '@type': 'City',
              name: '新竹市',
            },
            {
              '@type': 'AdministrativeArea',
              name: '新竹縣',
            },
            {
              '@type': 'City',
              name: '竹北市',
            },
          ],
        },
        {
          '@type': 'Service',
          '@id':
            'https://www.zhenglian.com.tw/hsinchu-food-waste-recycling#service',
          name: '新竹廚餘清運與廚餘回收服務',
          serviceType: '廚餘清運、廚餘回收',
          provider: {
            '@id': 'https://www.zhenglian.com.tw/#business',
          },
          areaServed: [
            '新竹市',
            '新竹縣',
            '竹北市',
            '新竹及周邊地區',
          ],
          url:
            'https://www.zhenglian.com.tw/hsinchu-food-waste-recycling',
          description:
            '提供餐廳、公司行號、社區、學校及營業場所的新竹廚餘清運與回收服務，可依需求安排固定或彈性收運。',
        },
      ],
    })

    document.head.appendChild(schema)
  }, [])

  return (
    <div className="food-waste-page">

      <header className="food-waste-header">
        <a href="/" className="food-waste-brand">
          <img
            src={zhenglianLogo}
            alt="正聯環保有限公司"
            className="food-waste-logo"
          />
        </a>

        <a href="/#contact" className="food-waste-contact-button">
          聯絡我們
        </a>
      </header>

      <main>

        <section className="food-waste-hero">
          <div className="food-waste-hero-content">

            <p className="food-waste-eyebrow">
              HSINCHU FOOD WASTE MANAGEMENT
            </p>

            <h1>
              新竹廚餘回收業者
              <br />
              <span>廚餘清運與回收服務｜正聯環保</span>
            </h1>

            <p className="food-waste-lead">
              正聯環保有限公司提供新竹市、新竹縣及竹北地區
              廚餘清運與廚餘回收服務，
              依不同營業場所的廚餘量與收運需求，
              安排固定或彈性的清運方式。
            </p>

            <div className="food-waste-actions">
              <a href="/#contact" className="food-waste-primary-button">
                詢問廚餘清運
              </a>

              <a href="#services" className="food-waste-secondary-button">
                查看服務內容
              </a>
            </div>

          </div>
        </section>

        <section
          className="food-waste-section"
          id="services"
        >
          <p className="food-waste-section-label">
            OUR SERVICES
          </p>

          <h2>
            新竹、竹北廚餘清運服務
          </h2>

          <p>
            如果您正在尋找新竹廚餘回收業者，
            正聯環保可依據實際營運情況，
            協助規劃廚餘收運方式與清運頻率。
          </p>

          <div className="food-waste-service-grid">

            <article className="food-waste-card">
              <h3>餐廳廚餘清運</h3>
              <p>
                適用於餐廳、便當店、餐飲門市、
                中央廚房及其他餐飲營業場所。
              </p>
            </article>

            <article className="food-waste-card">
              <h3>公司行號廚餘清運</h3>
              <p>
                協助公司、工廠、員工餐廳及企業場所，
                建立穩定的廚餘收運安排。
              </p>
            </article>

            <article className="food-waste-card">
              <h3>社區廚餘清運</h3>
              <p>
                依社區實際產生量與收運需求，
                安排適合的清運方式。
              </p>
            </article>

            <article className="food-waste-card">
              <h3>學校廚餘清運</h3>
              <p>
                提供學校及團膳相關場所的
                廚餘收運服務規劃。
              </p>
            </article>

          </div>
        </section>

        <section className="food-waste-section food-waste-area">
          <p className="food-waste-section-label">
            SERVICE AREA
          </p>

          <h2>
            新竹廚餘回收服務地區
          </h2>

          <p>
            目前服務範圍以新竹地區為主，
            包含新竹市、新竹縣及竹北市。
            實際清運路線與服務頻率可依案件需求確認。
          </p>
        </section>

        <section className="food-waste-section">
          <p className="food-waste-section-label">
            WHY ZHENGLIAN
          </p>

          <h2>
            不只是清運，更重視完整收運管理
          </h2>

          <p>
            正聯環保從廚餘收運、清運紀錄到數位化管理，
            希望讓企業與營業場所的廚餘管理流程
            更清楚、更有效率。
          </p>
        </section>

        <section className="food-waste-section food-waste-faq">
          <p className="food-waste-section-label">
            FAQ
          </p>

          <h2>
            新竹廚餘清運常見問題
          </h2>

          <details>
            <summary>
              正聯環保有提供新竹廚餘回收服務嗎？
            </summary>
            <p>
              有，正聯環保提供新竹市、新竹縣及竹北地區
              的廚餘清運與收運服務。
            </p>
          </details>

          <details>
            <summary>
              餐廳可以固定安排廚餘清運嗎？
            </summary>
            <p>
              可以，實際清運頻率可依廚餘產生量、
              地點與營業需求進一步確認。
            </p>
          </details>

          <details>
            <summary>
              公司、學校或社區也可以詢問嗎？
            </summary>
            <p>
              可以，服務對象可包含餐廳、公司行號、
              社區、學校及其他營業場所。
            </p>
          </details>
        </section>

        <section className="food-waste-cta">
          <h2>
            尋找新竹廚餘回收業者？
          </h2>

          <p>
            歡迎聯絡正聯環保，
            告訴我們您的地點、廚餘量與預計清運頻率。
          </p>

          <a href="/#contact" className="food-waste-primary-button">
            聯絡正聯環保
          </a>
        </section>

      </main>

      <footer className="food-waste-footer">
        <p>
          正聯環保有限公司
        </p>
        <p>
          正向循環・聯手減碳
        </p>
      </footer>

    </div>
  )
}

export default HsinchuFoodWastePage
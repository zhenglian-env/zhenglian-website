import { useEffect } from 'react'
import './FoodWasteESGPage.css'

function FoodWasteESGPage() {
 useEffect(() => {
  const title =
    '廚餘減量不只是環保｜企業 ESG、廚餘管理與數位清運新趨勢｜正聯環保'

  const description =
    '環境部將廚餘減量列為鼓勵企業投入的永續行動之一。正聯環保帶您了解從源頭減量、清運紀錄到數位化廚餘管理，企業如何把每天的一桶廚餘轉化為可管理的環境數據。'

  const pageUrl =
    'https://www.zhenglian.com.tw/blog/food-waste-reduction-esg'

  const imageUrl =
    'https://www.zhenglian.com.tw/food-waste-esg-cover.png'

  document.title = title

  const setMeta = (selector, attrName, attrValue, content) => {
    let tag = document.head.querySelector(selector)

    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute(attrName, attrValue)
      document.head.appendChild(tag)
    }

    tag.setAttribute('content', content)
  }

  setMeta(
    'meta[name="description"]',
    'name',
    'description',
    description
  )

  setMeta(
    'meta[property="og:title"]',
    'property',
    'og:title',
    title
  )

  setMeta(
    'meta[property="og:description"]',
    'property',
    'og:description',
    description
  )

  setMeta(
    'meta[property="og:type"]',
    'property',
    'og:type',
    'article'
  )

  setMeta(
    'meta[property="og:url"]',
    'property',
    'og:url',
    pageUrl
  )

  setMeta(
    'meta[property="og:image"]',
    'property',
    'og:image',
    imageUrl
  )

  setMeta(
    'meta[name="twitter:card"]',
    'name',
    'twitter:card',
    'summary_large_image'
  )

  let canonical =
    document.head.querySelector('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', pageUrl)

  const oldSchema =
    document.getElementById('food-waste-esg-schema')

  if (oldSchema) {
    oldSchema.remove()
  }

  const schema = document.createElement('script')
  schema.id = 'food-waste-esg-schema'
  schema.type = 'application/ld+json'

  schema.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '廚餘減量，不只是少一桶垃圾',
    description,
    image: imageUrl,
    datePublished: '2026-09-30',
    dateModified: '2026-09-30',
    author: {
      '@type': 'Organization',
      name: '正聯環保有限公司',
      url: 'https://www.zhenglian.com.tw/'
    },
    publisher: {
      '@type': 'Organization',
      name: '正聯環保有限公司',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.zhenglian.com.tw/zhenglian-logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl
    }
  })

  document.head.appendChild(schema)

  window.scrollTo(0, 0)
}, [])

  return (
    <div className="esg-page">

      <header className="esg-header">
        <a href="/" className="esg-logo-link">
          <img
            src="/zhenglian-logo.png"
            alt="正聯環保有限公司"
            className="esg-logo"
          />
        </a>

        <a href="/" className="esg-back">
          ← 回到正聯環保首頁
        </a>
      </header>

      <main className="esg-article">

        <div className="esg-category">
          永續知識 ・ ESG ・ 廚餘管理
        </div>

        <h1>
          廚餘減量，不只是少一桶垃圾
        </h1>

        <p className="esg-subtitle">
          從清運到數據管理，看見企業永續的新方向
        </p>

        <p className="esg-date">
          正聯環保｜2026 年 9 月
        </p>
        <div className="esg-cover">
  <img
    src="/food-waste-esg-cover.png"
    alt="廚餘減量 ESG 從一桶廚餘開始看見企業永續行動"
  />
</div>

        <section className="esg-intro">
          <p>
            過去談到廚餘，大家最先想到的問題往往是：
            「今天的廚餘有沒有清走？」
          </p>

          <p>
            但正聯環保認為，未來的廚餘管理，
            不會只停留在「清運完成」這件事。
          </p>

          <p>
            隨著企業永續、循環經濟與環境資訊揭露逐漸受到重視，
            企業開始需要知道：每天產生多少廚餘？
            有沒有逐月減少？誰負責收運？
            是否留下可以查詢與追溯的紀錄？
          </p>
        </section>

        <section>
          <h2>為什麼「廚餘減量」開始受到重視？</h2>

          <p>
            2026 年 9 月，環境部與金管會公布永續協作相關方向，
            其中將廚餘減量、循環採購、環境教育等列為鼓勵企業投入的
            實質環境行動之一。
          </p>

          <div className="esg-quote">
            永續不能只停留在「有沒有做」，
            而要逐漸走向「做了多少、能不能留下紀錄」。
          </div>

          <p>
            這並不代表企業只要減少廚餘就一定取得 ESG 加分，
            而是顯示廚餘管理正在逐漸成為企業永續管理值得關注的一環。
          </p>
        </section>

        <section>
          <h2>第一步：先知道自己產生多少廚餘</h2>

          <p>
            如果一家餐廳每天都有回收廚餘，
            卻不知道每個月總共產生多少，
            就很難判斷惜食、庫存管理與餐點調整到底有沒有產生效果。
          </p>

          <div className="esg-data-box">
            <div>
              <strong>7 月</strong>
              <span>1,200 kg</span>
            </div>

            <div>
              <strong>8 月</strong>
              <span>1,080 kg</span>
            </div>

            <div>
              <strong>9 月</strong>
              <span>960 kg</span>
            </div>

            <div className="esg-result">
              三個月減少 20%
            </div>
          </div>

          <p>
            當資料被持續記錄，
            「廚餘減量」才會從一句環保口號，
            變成可以真正追蹤與改善的管理目標。
          </p>
        </section>

        <section>
          <h2>廚餘減量，不代表完全沒有廚餘</h2>

          <p>
            即使做好惜食、庫存管理與餐點份量控制，
            餐廳、企業、社區與機構仍可能產生不可避免的廚餘。
          </p>

          <div className="esg-flow">
            <span>源頭減量</span>
            <b>→</b>
            <span>正確分類</span>
            <b>→</b>
            <span>清運紀錄</span>
            <b>→</b>
            <span>妥善處理</span>
            <b>→</b>
            <span>資源循環</span>
          </div>

          <p>
            可以避免的浪費，盡量不要產生；
            無法避免的廚餘，則應做好分類、收運與後續處理。
          </p>
        </section>

        <section>
          <h2>未來的清運服務，可能不只是一台車</h2>

          <p>
            傳統清運服務重視準時、乾淨與可靠，
            這些基本要求依然非常重要。
          </p>

          <p>
            但在數位化與永續管理逐漸發展之後，
            清運服務還可以多做一件事情：
          </p>

          <div className="esg-highlight">
            替每一次收運，留下可以查詢與管理的紀錄。
          </div>

          <p>
            日期、客戶、桶數或重量、收運時間、照片、簽名及後續統計，
            當這些資料長期累積之後，
            企業看到的就不再只是「今年都有清運廚餘」，
            而是可以真正了解自己的廚餘產生量與變化趨勢。
          </p>
        </section>

        <section>
          <h2>從「清掉多少」走向「減少多少」</h2>

          <p>
            正聯環保認為，環保產業未來的價值，
            不只是把廢棄物載離現場，
            更重要的是協助客戶了解自己的廢棄物流向，
            留下可管理的紀錄，並找出持續改善的空間。
          </p>

          <div className="esg-final-quote">
            <p>從一次清運，走向一份紀錄；</p>
            <p>從一份紀錄，走向可以持續改善的環境數據。</p>
          </div>
        </section>

        <section className="esg-contact">
          <h2>企業／餐飲業廚餘管理諮詢</h2>

          <p>
            如果您的公司、餐廳、社區或機構需要廚餘清運服務，
            或希望進一步了解廚餘收運紀錄與數位管理方式，
            歡迎與正聯環保聯繫。
          </p>

          <a href="/#contact" className="esg-contact-button">
            聯絡正聯環保
          </a>
        </section>

      </main>

      <footer className="esg-footer">
        <strong>正聯環保有限公司</strong>
        <span>正向循環・聯手減碳</span>
      </footer>

    </div>
  )
}

export default FoodWasteESGPage
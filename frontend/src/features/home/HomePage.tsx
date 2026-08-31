import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import FeatureSlider from "./components/FeatureSlider"
import { SLIDER_ITEMS } from "./components/sliderData"
import "./HomePage.css"

function HomePage() {
  const [current, setCurrent] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [sliderPaused, setSliderPaused] = useState(false)
  const navigate = useNavigate()

  const item = SLIDER_ITEMS[current]

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPast = window.scrollY > window.innerHeight * 0.5
      setSliderPaused(scrolledPast)
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="home-page">
      <FeatureSlider current={current} setCurrent={setCurrent} paused={sliderPaused} />

      <section className="feature-detail">
        <div className="feature-detail-container">
          <span className="feature-detail-tag">/ {item.tag}</span>
          <h2 className="feature-detail-title">{item.title}</h2>
          <p className="feature-detail-description">{item.longDescription}</p>
          <button
            className="feature-detail-btn"
            onClick={() => navigate(item.route)}
          >
            IR A {item.tag.toUpperCase()}
          </button>
        </div>
      </section>

      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          &#8593;
        </button>
      )}
    </div>
  )
}

export default HomePage
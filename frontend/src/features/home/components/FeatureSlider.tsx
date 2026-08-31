import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { SLIDER_ITEMS } from "./sliderData"
import "./FeatureSlider.css"

const INTERVAL_MS = 10000

function FeatureSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const navigate = useNavigate()

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDER_ITEMS.length)
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + SLIDER_ITEMS.length) % SLIDER_ITEMS.length)
  }

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [paused, next])

  const item = SLIDER_ITEMS[current]

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slider-image-wrap">
        <img
          src={item.image}
          alt={item.title}
          className="slider-image"
        />
        <div className="slider-overlay" />
      </div>

      <div className="slider-content">
        <span className="slider-tag">/ {item.tag}</span>
        <h2 className="slider-title">{item.title}</h2>
        <p className="slider-description">{item.description}</p>
        <button
          className="slider-cta"
          onClick={() => navigate(item.route)}
        >
          IR A {item.tag.toUpperCase()}
        </button>
      </div>

      <button className="slider-arrow slider-arrow-left" onClick={prev} aria-label="Anterior">
        &#8592;
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={next} aria-label="Siguiente">
        &#8594;
      </button>

      <div className="slider-dots">
        {SLIDER_ITEMS.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === current ? "slider-dot-active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default FeatureSlider
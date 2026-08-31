import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { SLIDER_ITEMS } from "./sliderData"
import "./FeatureSlider.css"

const INTERVAL_MS = 10000

interface Props {
  current: number
  setCurrent: (n: number) => void
  paused: boolean
}

function FeatureSlider({ current, setCurrent, paused }: Props) {
  const [hoverPaused, setHoverPaused] = useState(false)
  const navigate = useNavigate()

  const next = useCallback(() => {
    setCurrent((current + 1) % SLIDER_ITEMS.length)
  }, [current, setCurrent])

  const prev = () => {
    setCurrent((current - 1 + SLIDER_ITEMS.length) % SLIDER_ITEMS.length)
  }

  useEffect(() => {
    if (paused || hoverPaused) return
    const timer = setInterval(next, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [paused, hoverPaused, next])

  const item = SLIDER_ITEMS[current]

  return (
    <div
      className="slider"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
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
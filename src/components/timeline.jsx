import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Timeline({ data }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="timeline-container">
      {/* Timeline line */}
      <div className="timeline-line">
        <motion.div 
          className="timeline-line-fill"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Timeline items */}
      <div className="timeline-items">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ item, index }) {
  const itemRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const x = useTransform(scrollYProgress, [0, 0.5], [-30, 0])

  return (
    <motion.div 
      ref={itemRef}
      className="timeline-item"
      style={{ opacity, x }}
    >
      {/* Dot */}
      <div className="timeline-dot-wrapper">
        <motion.div 
          className="timeline-dot"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        />
      </div>

      {/* Title */}
      <div className="timeline-title">
        <h3>{item.title}</h3>
      </div>

      {/* Content */}
      <div className="timeline-content">
        {item.content}
      </div>
    </motion.div>
  )
}

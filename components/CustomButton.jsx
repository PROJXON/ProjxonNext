import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CustomButton({ buttonText, link, buttonStyle, delayTime, isExternal, isAnimated }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const btnClasses = `btn btn-primary fs-5 px-4 ${buttonStyle}`

    const buttonToDisplay = isAnimated ? (
        <motion.button
            className={btnClasses}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: delayTime }}
        >
            {buttonText}
        </motion.button>
    ) : (
        <button className={btnClasses}>
            {buttonText}
        </button>
    )

    return (
        isExternal ? (<a href={link} target="_blank" rel="noopener noreferrer" ref={ref}>
            {buttonToDisplay}
        </a>) : (<div ref={ref}>
            <Link href={link}>
                {buttonToDisplay}
            </Link>
        </div>)
    )
}
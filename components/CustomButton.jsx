import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import CustomButtonWrapper from '@/components/CustomButtonWrapper'

export default function CustomButton({ buttonText, link, buttonStyle, delayTime, isExternal, isAnimated }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const motionBtn = (
        <motion.button
            className={`btn btn-primary fs-5 px-4 ${buttonStyle}`}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: delayTime }}
        >
            {buttonText}
        </motion.button>
    )

    const staticBtn = (
        <button className={`btn btn-primary fs-5 px-4 ${buttonStyle}`}>
            {buttonText}
        </button>
    )

    return (isAnimated ? (
        <CustomButtonWrapper link={link} refProp={ref} isExternal={isExternal}>{motionBtn}</CustomButtonWrapper>
    ) : (
        <CustomButtonWrapper link={link} refProp={ref} isExternal={isExternal}>{staticBtn}</CustomButtonWrapper>
    ))
}
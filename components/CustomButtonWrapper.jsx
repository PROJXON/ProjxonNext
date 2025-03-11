import Link from 'next/link'

export default function CustomButtonWrapper({ link, children, refProp, isExternal }) {
    return (
        isExternal ? (<a href={link} target="_blank" rel="noopener noreferrer" ref={refProp}>
            {children}
        </a>) : (<div ref={refProp}>
            <Link href={link}>
                {children}
            </Link>
        </div>)
    )
}
import { Col } from 'react-bootstrap'
import { createElement } from 'react'
import AnimatedNumber from './AnimatedNumber'
import '@/css/BlackCard.css'

export default function BlackCard({ item, isStat }) {
    return (
        <Col md={12} lg={4} className='mb-4 black-card-container' data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
            <div className='d-flex flex-column black-card-body h-100 black-card'>
                <div className='mb-4'>
                    {createElement(item.icon, {
                        size: 64,
                        className: "text-yellow"
                    })}
                </div>
                <h3 className='fs-2 mb-3 text-yellow'>{item.title}</h3>
                <p className='flex-grow-1 mb-0 black-card-desc text-gray'>{item.description}</p>
                {isStat &&
                    <div>
                        <span className='fw-bold black-card-stat'>
                            <AnimatedNumber value={parseInt(item.stat)} />
                            {item.statSuffix}
                        </span>
                        <span className='black-card-stat-desc d-block'>{item.statDescription}</span>
                    </div>
                }
            </div>
        </Col>
    )
}
import { createElement } from 'react'
import { Col, Card } from 'react-bootstrap'

export default function ServicesCards({ divClasses, servicesPortion }) {
    return (<Col xs="12" md="6">
        <div className={divClasses || undefined}>
            {servicesPortion.map((service, index) => (
                <Card
                    className="p-3 border-0 mt-4 homepage-service-card"
                    key={index}
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${service.image.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Card.Body className='text-white'>
                        <div className="text-yellow">
                            {createElement(service.icon, { size: 40 })}
                        </div>
                        <h3 className="my-4 fs-5 text-yellow">{service.title}</h3>
                        <p className="text-gray mt-3">{service.description}</p>
                    </Card.Body>
                </Card>
            ))}
        </div>
    </Col>)
}
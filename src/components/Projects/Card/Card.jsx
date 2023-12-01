import './Card.sass'

// eslint-disable-next-line react/prop-types
export default function Card({image, link, alt, des, title}){
    return (
        <div className='box-project'>
            <a href={link} target='_blank' rel="noreferrer">
                <img src={image} alt={alt} />
                <h2>{title}</h2>
                <p>{des}</p>
            </a>
        </div>
    )
}
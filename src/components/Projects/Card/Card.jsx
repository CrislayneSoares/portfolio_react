import './Card.sass'

// eslint-disable-next-line react/prop-types
export default function Card({image, link, alt, des}){
    return (
        <div className='box-project'>
            <a href={link} target='_blank' rel="noreferrer">
                <img src={image} alt={alt} />
                <p>{des}</p>
            </a>
        </div>
    )
}
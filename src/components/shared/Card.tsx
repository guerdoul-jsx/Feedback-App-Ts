import { FC } from 'react'

type CardProps = {
    children : React.ReactNode;
    reverse?: boolean;
}

const Card : FC<CardProps> = ({children , reverse}) => {
    return (
        <div className="card" style={{
            backgroundColor : reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color : reverse ? '#fff' : '#000',
        }}>{children}</div>
    );
};

Card.defaultProps = {
    reverse : false,
}

export default Card;

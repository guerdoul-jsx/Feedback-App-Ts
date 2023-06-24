import { FC } from 'react'


type HeaderPropTypes = {
  text?: string,
  bgColor?: string,
  color?: string,
}

const  Header: FC<HeaderPropTypes> = ({text , color, bgColor}) => {
  return (
    <header style={{backgroundColor:bgColor , color: color}}>
        <div className='container'>
          <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text : 'Feedback App',
    bgColor : '#27ae60',
    color : '#fff',
}

export default Header

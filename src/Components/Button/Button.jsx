import { Link } from 'react-router-dom'
import './Button.scss'

export const Button = ({ btnColor, btnContent }) => {


    return <Link to='#' className='btn-comp'>{btnContent}</Link>
}
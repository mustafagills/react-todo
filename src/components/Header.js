import Button from "./Button"
import PropTypes, { string } from 'prop-types'


const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color = {showAdd ? 'red': 'green'} 
                text={showAdd ? 'Close' : 'Add' } 
                onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Todo App',
}

Header.propTypes = {
    title: PropTypes.string
}


export default Header

import Button from '../Button/Button';
import '../../CSS/Input/Input.css'
const Input = ({onChange, value, placeholder, className}) => {
    return (
    <label>
    <input placeholder = {placeholder} onChange = {onChange} value = {value} className = 'inputText'>
    </input>
        <Button className = 'buttonInput' >Pesquisar</Button>
    </label>
        )
}

export default Input;
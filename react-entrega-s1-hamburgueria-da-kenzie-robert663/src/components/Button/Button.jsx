const Button = ({children, onClick, value, className}) => {
   return <button  className = {className} onClick = {onClick} value = {value} >{children}</button>
}

export default Button; 
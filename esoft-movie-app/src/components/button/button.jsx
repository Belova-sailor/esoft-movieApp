import './button.css';

const Button = (props) => {
	const {className, label} = props;
	return(
		<button className={`btn btn-outline-light ${className}`}>Найти фильм{label}</button>
	)
}

export default Button;
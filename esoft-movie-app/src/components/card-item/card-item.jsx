import './card-item.css';

const CardItem = (props) => {
	const {src, name, rating, genre, actors, description} = props;
  
	return (
	  <li className="card-list-item">
		<div className="card">
		  <a href="#" target="_blank">
			<img src={src} className="img_card" alt="card image" />
		  </a>
		  <div className="text-wrap">
		  <h3>{name}</h3>
		  <span className='rating'>{rating}</span>
		  <span className='genre'>{genre}</span>
		  <span className='actors'>{actors}</span>
		  <p className='description'>{description}</p>
		  </div>
		</div>
	  </li>
	);
  };
  
  export default CardItem;

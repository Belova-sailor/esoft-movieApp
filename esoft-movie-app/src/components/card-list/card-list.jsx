import CardItem from "../card-item/card-item";

const CardList = ({data}) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
	
		return <CardItem key={id} data={data} {...itemProps} />;
	  });
	
		return <ul className="app-list">{elements}</ul>;
	
};

export default CardList;

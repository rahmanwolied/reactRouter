const DonationCard = ({ item }) => {
	console.log(item);
	const { id, picture, category, title, card_bg, text_button_bg, category_bg } = item;
	const divStyle = {
		backgroundColor: card_bg,
	};
	const categoryStyle = {
		color: text_button_bg,
		backgroundColor: category_bg,
	};
	const titleStyle = {
		color: text_button_bg,
	};
	return (
		<div style={divStyle} className="rounded-lg hover:cursor-pointer flex">
			<img src={picture} alt="" className="w-48" />
			<div className="p-5">
				<h1 style={categoryStyle} className="text-sm p-2 my-1 inline-block rounded-md">
					{category}
				</h1>
				<h1 style={titleStyle} className="font-semibold text-xl">
					{title}
				</h1>
			</div>
		</div>
	);
};

export default DonationCard;

const data = {
	subscriptionColor: '#36c55f',
	subscriptionHoverColor: '#36c55f',
	subscriptionDisabledColor: '#86dc9f',
	subscriptionLoadingColor: '#36c55f',

	subscriptionErrorColor: '#fd334b',
	subscriptionErrorHoverColor: '#fd334b',
	subscriptionErrorDisabledColor: '#ff8492',
	subscriptionErrorLoadingColor: '#fd334b',

	addActionColor: '#00bebe',
	addActionHoverColor: '#21c6c5',
	addActionDisabledColor: '#80dfdf',
	addActionLoadingColor: '#00bebe',

	actionColor: '#1c76cc',
	actionHoverColor: '#2380da',
	actionDisabledColor: '#8ebbe6',
	actionLoadingColor: '#1c76cc',

	serviceColor: '#f2f2f2',
	serviceHoverColor: '#eaebed',
	serviceDisabledColor: '#f7f7f7',
	serviceLoadingColor: '#f2f2f2',

	mainTextColor: '#0a1b2a',
	addText1Color: '#1e384e',
	addText2Color: '#637889',
	borderColor: '#b2bed0',
	separatorColor: '#d4d4d5',
	blocksBackgroundColor: '#fafafa',
	selectedBlockColor: '#fff6d4',

	tags50Color: '#36c55f',
	tags80Color: '#edbc2f',
	tags100Color: '#fd334b',
	tagsEmptyColor: '#999',

	ratingHigh3Color: '#004f5a',
	ratingHigh2Color: '#007020',
	ratingHigh1Color: '#3a9754',
	rating5Color: '#66b47c',
	rating4Color: '#99c95d',
	rating3Color: '#fac718',
	rating2Color: '#f48e1f',
	rating1Color: '#f05f3a',
	ratingLowColor: '#cb4747',
	ratingLow2Color: '#b60000',
	ratingLow3Color: '#790909',

	subscriptionOfferColor: '#73df70',
	subscriptionOfferHoverColor: '#78e075',
	subscriptionOfferDisabledColor: '#aae6a8',
	subscriptionOfferLoadingColor: '#73df70',

	subscriptionOffer1Color: '#36c55f',
	subscriptionOffer1HoverColor: '#34d562',
	subscriptionOffer1DisabledColor: '#86dc9f',
	subscriptionOffer1LoadingColor: '#36c55f',

	subscriptionOffer2Color: '#4aaa93',
	subscriptionOffer2HoverColor: '#50b39b',
	subscriptionOffer2DisabledColor: '#a0d4c7',
	subscriptionOffer2LoadingColor: '#4aaa93',

	subscriptionOffer3Color: '#438080',
	subscriptionOffer3HoverColor: '#4b8f8f',
	subscriptionOffer3DisabledColor: '#97c4c4',
	subscriptionOffer3LoadingColor: '#438080',

	subscriptionOfferEnterpriceColor: '#1e384e',
	subscriptionOfferEnterpriceHoverColor: '#254967',
	subscriptionOfferEnterpriceDisabledColor: '#a9becf',
	subscriptionOfferEnterpriceLoadingColor: '#1e384e',
};

export const Colors = () => (
	<div>
		<h2>Colors</h2>

		<div className="color">
			{_.keys(data).map(key => (
				<div
					key={key}
					className="color-item"
				>
					<div
						className="color-item__fill"
						style={{
							backgroundColor: data[key],
						}}
					/>
					<div className="color-item__text">${key}</div>
				</div>
			))}
		</div>
	</div>
);

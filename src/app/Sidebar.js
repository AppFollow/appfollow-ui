import history from 'app/history';

const dataLinksSidebar = [
	{
		link: '/',
		text: 'Common',
	},
	{
		link: '/colors',
		text: 'Colors',
	},
	{
		link: '/buttons',
		text: 'Buttons',
	},
];

export const Sidebar = () => (
	<div className="page-sidebar">
		<div className="page-sidebar__logo" />

		{dataLinksSidebar.map(item => (
			<div
				key={item.text}
				className={classNames('page-sidebar__link', {
					'page-sidebar__link--active': window.location.path === item.link,
				})}
				onClick={() => {
					history.push(item.link);
				}}
			>
				{item.text}
			</div>
		))}
	</div>
);

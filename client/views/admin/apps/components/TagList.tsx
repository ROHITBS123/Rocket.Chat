import { Chip, ButtonGroup } from '@rocket.chat/fuselage';
import React, { FC } from 'react';

import { CategoryDropdownItem, CategoryDropDownListProps } from '../definitions/CategoryDropdownDefinitions';

const TagList: FC<{
	categories: (CategoryDropdownItem & { checked: true })[];
	onClick: CategoryDropDownListProps['onSelected'];
}> = ({ categories, onClick }) => (
	<ButtonGroup small flexWrap='wrap'>
		{categories.map((category) => (
			<Chip flexShrink={0} key={category.id} onClick={(): void => onClick(category)} disabled={undefined} mbe='x8'>
				{category.label}
			</Chip>
		))}
	</ButtonGroup>
);

export default TagList;

import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const TabsContext = createContext(null);

function Tabs(props) {
	const contextValue = useMemo(() => ({
		selectedTab: props.value,
		setSelectedTab: props.onValueChange,
	}), [props.onValueChange, props.value]);

	return (
		<TabsContext.Provider value={contextValue}>
			<div className="flex flex-col" role="tabpanel">
				{props.children}
			</div>
		</TabsContext.Provider>
	);
}

Tabs.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.string.isRequired,
	onValueChange: PropTypes.func.isRequired,
};

function List(props) {
	return (
		<ul className="flex gap-1 rounded-lg bg-gray-300 p-1 mb-8 overflow-auto max-w-full" role="tablist">
			{props.children}
		</ul>
	);
}

List.propTypes = {
	children: PropTypes.node.isRequired,
};

function Trigger(props) {
	const context = useContext(TabsContext);
	if (!context) {
		throw new Error('Только для Tabs');
	}

	const isActive = context.selectedTab === props.value;

	return (
		<li className="flex-1" role="tab">
			<button
				className={`flex items-center justify-center text-center w-full  min-h-[46px] text-lg transition rounded-lg min-w-max p-3 ${isActive ? 'bg-[#51597e] text-white' : 'bg-transparent'}`}
				onClick={() => context.setSelectedTab(props.value)}
			>
				{props.children}
			</button>
		</li>
	);
}

Trigger.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.string.isRequired,
};

function Content(props) {
	const context = useContext(TabsContext);
	if (!context) {
		throw new Error('Только для Tabs');
	}
	return (
		<div hidden={context.selectedTab !== props.value}>
			{props.children}
		</div>
	);
}

Content.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.string.isRequired,
};

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export default Tabs;

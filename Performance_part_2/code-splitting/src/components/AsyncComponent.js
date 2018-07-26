import React, { Component } from 'react';

// Higher Order Component
export default function asyncComponent(importComponent) {
	class AsyncComponent extends Component {
		constructor(props){
			super(props);
			this.state = {
				component: null
			}
		}

		async componentDidMount() {
			const { default: component } = await importComponent();
				this.setState({component: component})
		}

		render() {
			const Component = this.state.component;
			// pass any props this component may have
			return Component ? <Component {...this.props} /> : null;
		}
	}

	return AsyncComponent;
}

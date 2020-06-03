import React from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './FooterComponentStyle';

export const FooterComponent = ({logo}) => {
	Icon.loadFont();

	//tab bar items
	const tabs = [{
		title: "Search",
		subTitle: "",
		icon: "search"
	}, {
		title: "Chat Room",
		subTitle: "",
		icon: "users"
	}, {
		title: "Dashboard",
		subTitle: "",
		icon: "dashboard"
	}, {
		title: "Setting",
		subTitle: "",
		icon: "gear"
	}];

	return (
		<Footer>
			<FooterTab style={styles.footerContainer} iosBarStyle='light-content'>
				{
					tabs.map((obj, index)=> {
						return (
							<Button key={index} >
								<Icon size={20} name={obj.icon} color={(index === 0) ? "#FF5E3A" : "grey"}/>
								<Text style={{fontSize:12, color:(index === 0) ? "#FF5E3A" : "#eee"}}> {obj.title} </Text>
								<Text style={styles.subText}>{obj.subTitle}</Text>
							</Button>
						)
					})
				}
			</FooterTab>
		</Footer>
	);
}

export default FooterComponent;
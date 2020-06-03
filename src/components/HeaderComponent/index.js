import React from 'react';
import { Text, Image } from 'react-native';
import { StatusBar } from "react-native";
import { Header, Left, Right, Body, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './HearderComponentStyle';

export const HeaderComponent = ({logo, onMenuOpen}) => {
	Icon.loadFont();
	return (
		<Header style={{backgroundColor: '#000'}} iosBarStyle='light-content'>
			<Left>
				<Button transparent
              		onPress={() => onMenuOpen()}>
					<Icon name='bars' style={styles.icon} />
				</Button>
			</Left>
			<Body>
				<Image resizeMode="contain" style={styles.logo} source={logo} />
			</Body>

			<Right>
				<Button transparent>
					<Icon name="gift" style={styles.icon}/>
				</Button>
			</Right>
		</Header>
	);
}

export default HeaderComponent;
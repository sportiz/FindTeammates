import React from 'react';
import {View, Text} from 'react-native';
import { Container, Drawer } from 'native-base';
import MapContainer from './MapContainer';
import HeaderComponent from '../../../components/HeaderComponent';
import FooterComponent from '../../../components/FooterComponent';
import SideMenuComponent from "../../../components/SideMenuComponent";

const logo = require('../../../assets/img/findteammate_logo.jpg');

class Home extends React.Component{


	componentDidMount(){
		this.props.getCurrentLocation();
	}

	closeDrawer = () => { 
		this.drawer._root.close();
	}

	openDrawer = () => { 
		this.drawer._root.open();
	}

	render(){
		return(
			<Drawer ref={(ref) => { this.drawer = ref; }} 
					content={<SideMenuComponent navigator={this.navigator} />} 
					onClose={() => this.closeDrawer()} >
				<Container>
					<HeaderComponent logo={logo} onMenuOpen={this.openDrawer}/>
					{ this.props.region.latitude && 
						<MapContainer region={this.props.region} />
					}
					<FooterComponent />
				</Container>
			</Drawer>
		);
	}

}

export default Home;
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Contact from '../screens/contact';
import Skills from '../screens/skills';
// import Display from '../screens/display';
// import FlatButton from '../screens/button';
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerStyle: { backgroundColor: '#FFC212', height: 95 }
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'My Profile',
            headerStyle: { backgroundColor: '#FFC212', height: 95 }
        }
    },
    Skills: {
        screen: Skills,
        navigationOptions: {
            title: 'Skills',
            headerStyle: { backgroundColor: '#FFC212', height: 95 }
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            title: 'Contact info',
            headerStyle: { backgroundColor: '#FFC212', height: 95 }
        }
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
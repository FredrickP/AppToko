import { View, Text} from "react-native";
import { ArrowLeft, Filter } from "react-native-feather";
import styles from "./style";



const Toolbar = () => {
    return(
        <View style={styles.toolbarStyle}>
            <View style={styles.toolbarItemLeftContainer}>
                <View style={styles.circleToolbar}><ArrowLeft color={'black'}/></View>
                <Text style={styles.toolbarText}>Shoes</Text>
            </View>
            <View style={styles.toolbarItemRightContainer}>
                <View style={styles.circleToolbar}><Filter color={'black'}/></View>
            </View>
        </View>
    );
}

export default Toolbar;
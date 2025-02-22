import { Text, View, StyleSheet, ImageBackground } from "react-native";
import todayImage from '../../assets/imgs/today.jpg'

import moment from "moment"
import 'moment/locale/pt-br'

export default function TaskList(){
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
    
    return(
        <View style={styles.container}>
            <ImageBackground source={todayImage} style={styles.background}>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>{today}</Text>
                </View>
            </ImageBackground>

            <View style={styles.taskList}>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30   
    }
})
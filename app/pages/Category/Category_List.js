/**
 * 某个课程的列表
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class Category_List extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title

    })


    render(){
        return(
            <View style={styles.flex}>
                <Text>title:{this.props.navigation.state.params.title}</Text>
                <Text>id:{this.props.navigation.state.params.id}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

})




export default Category_List
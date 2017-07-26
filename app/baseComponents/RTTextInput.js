/**
 * Created by Rabbit on 2017/6/6.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Text as NativeText, View, StyleSheet, TextInput, Platform ,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
let {height, width} = Dimensions.get('window');
class RTTextInput extends Component {
    focus() {
        const ref = this.props.textInputRef;
        this.refs[ref].focus();
    }
    blur() {
        const ref = this.props.textInputRef;
        this.refs[ref].blur();
    }

    render() {
        let {
            containerStyle,
            inputStyle,
            textInputRef,
            containerRef,
            selectionColor,
            successColor,
            errorColor,
            iconName,
            status,
            ...attributes
        } = this.props;

        status ? selectionColor = successColor || '#4ECBFC' : selectionColor = errorColor || 'red';
        return (
            <View
                ref={containerRef}
                style={[styles.container,
                { borderBottomColor : selectionColor}] }
            >
                <Icon name={iconName}
                      size = {30}
                      color={selectionColor}
                      style={styles.iconStyle}
                      padding={0}
                />
                <TextInput
                    ref={textInputRef}
                    selectionColor={selectionColor}
                    style={[styles.input, inputStyle && inputStyle]}
                    underlineColorAndroid={'transparent'}
                    clearButtonMode={'while-editing'}
                    {...attributes}
                />
            </View>
        )
    }
}

RTTextInput.propTypes = {
    containerStyle: View.propTypes.style,
    inputStyle: NativeText.propTypes.style,
    selectionColor: PropTypes.string,
    textInputRef: PropTypes.string,
    containerRef: PropTypes.string,
    successColor:PropTypes.string,
    errorColor:PropTypes.string,
    status:PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        flexDirection:'row',
        borderBottomColor:'#4ECBFC',
        borderBottomWidth: 1,

    },
    input: {
        marginLeft:5,
        marginRight:10,
        height: 46,
        width: width - 50,
        color: 'blue',
        fontSize: 14,
    },
    iconStyle:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        height:28,
        width:28,

    }
});

export default RTTextInput;


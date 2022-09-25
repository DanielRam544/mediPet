import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from '../../colors';

const SIZES = ['small', 'medium', 'large'];
const TYPE = ['primary', 'secondary', 'accent', 'error', 'warning', 'info', 'succes'];
const ROUNDED = ['small', 'medium', 'large'];


export default function MyButton({
    children,
    onPress,
    type,
    size,
    label,
    rounded
}) {

    const btnSize = SIZES.includes(size) ? size: 'small';
    const btnType = TYPE.includes(type) ? size: 'primary';
    const btnRound = ROUNDED.includes(rounded) ? size: 'small';

    const btnStyle = {
        height: 50,
        width: btnSize === 'large' ? '90%' : btnSize === 'medium' ? 210 : 'auto',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 10,
        borderRadius: btnRound === 'small' ? 5 : btnRound === 'medium' ? 10 : 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:
            btnType === 'primary'
            ?  Colors.primary : btnType === 'secondary'
            // ?  Colors.secondary : btnType === 'accent'
            // ?  Colors.accent : btnType === 'error'
            // ?  Colors.error : btnType === 'warning'
            // ?  Colors.warning : btnType === 'info'
            ?  Colors.info : Colors.success,
    }

    return (
        <TouchableOpacity
         style={btnStyle}
         onPress={onPress}
         >
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>{label}</Text>
        </TouchableOpacity>
    )
}
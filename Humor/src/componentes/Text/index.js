import React from 'react';
import { Text } from 'react-native';

export function TextRegular({ texto, style, numberOfLines }) {
    return <Text
        numberOfLines={numberOfLines}
        style={[style, { fontFamily: 'SourceSansPro-Regular' }]}
    >
        {texto}
    </Text>
}

export function TextSemiBold({ texto, style, numberOfLines }) {
    return <Text
        numberOfLines={numberOfLines}
        style={[style, { fontFamily: 'SourceSansPro-SemiBold' }]}
    >
        {texto}
    </Text>
}

export function TextBold({ texto, style, numberOfLines }) {
    return <Text
        numberOfLines={numberOfLines}
        style={[style, { fontFamily: 'SourceSansPro-Bold' }]}
    >
        {texto}
    </Text>
}
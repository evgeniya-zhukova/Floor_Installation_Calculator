import React from 'react';
import { SafeAreaView, Text, StatusBar, Button } from 'react-native';

const SecondScreen = ({route, navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'lightblue'}}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <Text style={{fontSize:38, fontWeight: 'bold'}}>About{'\n'}</Text>
            <Text style={{fontSize:24, fontWeight: 'bold'}}>Name: <Text style={{fontWeight: 'normal'}}>Evgeniya Zhukova</Text></Text>
            <Text style={{fontSize:24, fontWeight: 'bold'}}>ID: <Text style={{fontWeight: 'normal'}}>101239316{'\n'}</Text></Text>
            <Button
                title="Back to Calculation"
                onPress={()=>{
                    navigation.goBack();
                }}
            />
        </SafeAreaView>
    );
};

export {SecondScreen};

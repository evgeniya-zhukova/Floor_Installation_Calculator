import React from 'react';
import { SafeAreaView, Picker, View, Text, TextInput, StatusBar, Button } from 'react-native';

function Calculation(props){
    return (
        <View>
            <Text style={{fontSize:20, color:'purple', fontWeight: 'bold'}}>{'\n'}Prices are indicated in CAD per {props.selectedValue}:</Text>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>Total Flooring (before tax):
                <Text style={{fontWeight: 'normal'}}> {props.size * props.flooring_price}</Text></Text>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>Total Installation (before tax):
                <Text style={{fontWeight: 'normal'}}> {props.size * props.installation_cost}</Text></Text>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>Total Cost (before tax):
                <Text style={{fontWeight: 'normal'}}> {props.size * props.flooring_price + props.size * props.installation_cost}</Text></Text>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>Tax:
                <Text style={{fontWeight: 'normal'}}> {(props.size * props.flooring_price + props.size * props.installation_cost)*0.13}{'\n'}</Text></Text>
        </View>
    );
}

const HomeScreen = ({navigation}) => {
    const [size, onChangeSize] = React.useState(0);
    const [flooring_price, onChangePrice] = React.useState(0);
    const [installation_cost, onChangeInstCost] = React.useState(0);
    const [selectedValue, setSelectedValue] = React.useState('sq.m.');
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor:'lightblue'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
            <Text style={{fontSize:18, fontWeight: 'bold'}}>{'\n'}Size of a room:</Text>
            <Picker
                selectedValue={selectedValue}
                style={{ color: 'purple', height: 30, width: 110 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="sq.m." value="sq.m." />
                <Picker.Item label="sq.ft." value="sq.ft." />
            </Picker>
            <TextInput placeholder="Size of a room"
                       style={{borderColor: 'gray', borderWidth: 2, width:200, height:40}}
                       onChangeText={size=>onChangeSize(size)}
                       clearTextOnFocus //this flag work only on iOS
                       value={size}
            />
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Price per unit of flooring (CAD):</Text>
            <TextInput placeholder="Price per unit of flooring"
                       style={{borderColor: 'gray', borderWidth: 2, width:200, height:40}}
                       onChangeText={flooring_price=>onChangePrice(flooring_price)}
                       clearTextOnFocus //this flag work only on iOS
                       value={flooring_price}
            />
            <Text style={{fontSize:18, fontWeight: 'bold'}}>Price per unit of flooring installation (CAD):</Text>
            <TextInput placeholder="Price per unit of installation"
                       style={{borderColor: 'gray', borderWidth: 2, width:200, height:40}}
                       onChangeText={installation_cost=>onChangeInstCost(installation_cost)}
                       clearTextOnFocus //this flag work only on iOS
                       value={installation_cost}
            />
            <Text>{'\n'}</Text>
            <Button title="Clear" onPress={()=>{onChangeSize(0), onChangePrice(0), onChangeInstCost(0)}} color="#C0C0C0" />
            <Calculation size={size} flooring_price = {flooring_price} installation_cost = {installation_cost} selectedValue = {selectedValue}/>
            <Button title="About"
                    onPress={()=>{
                        navigation.navigate('About');
                    }}
            />
        </SafeAreaView>
    );
};
export {HomeScreen};

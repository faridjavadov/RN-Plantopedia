import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;


const AdsCard = () => {
    return (
        <View style={[styles.slider,{width:windowWidth-20}]}>
            <View style={{flex:1}}>
                <Image source={require('../../assets/sliderImages/AdsPic.png')} style={{height:'98%',width:'100%'}}/>
            </View>
            <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:30,color:'#002140',fontWeight:'600'}}>Exclusive Offer</Text>
                <Text style={{fontSize:20,color:'#002140'}}>Get your 1st plant @ 60% off</Text>
            </View>
        </View>
    )
}

export default AdsCard

const styles = StyleSheet.create({
    slider: { backgroundColor: '#F9D7BD', height: 215, borderRadius: 20,flexDirection:'row',paddingHorizontal:10 },

})
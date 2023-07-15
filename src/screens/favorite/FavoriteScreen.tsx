import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../../redux/store/store'
import Card from '../../components/homeComponents/Card'

const FavoriteScreen = ({ navigation, route }: any) => {

  const dispatch = useDispatch<AppDispatch>

  const { favorites } = useSelector((state: StateType) => state.PlantsSlicer)

  const renderItem = ({ item }: any) => {
    return (
      <Card item={item} navigation={navigation} />
    )
  }

  return (
    favorites.length>0?
    <View style={styles.container}>
      <Text style={styles.headertext}>Favorites</Text>
      <FlatList
        data={favorites}
        renderItem={renderItem}
      />
    </View>
    :
    <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white',flex:1}}>
      <Image source={require('../../assets/favoriteImages/NoFavorites.png')} style={{resizeMode:'contain',height:'40%'}} />
      <Text style={{fontSize:30,color:'#002140'}}>No Favorites yet..</Text>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headertext: {
    color: '#002140',
    fontSize: 22,
    fontWeight: '500',
    alignSelf:'center'
  }

})
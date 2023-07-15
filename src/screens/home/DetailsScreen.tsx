import { StyleSheet, Text, View, Image, TouchableOpacity, Share,ScrollView } from 'react-native'
import React from 'react'
import StarIcon from '../../assets/HomeIcons/StarIcon'
import Light from '../../assets/DetailsIcons/Light'
import Temperature from '../../assets/DetailsIcons/Temperature'
import Water from '../../assets/DetailsIcons/Water'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../../redux/store/store'
import FavoriteIcon from '../../assets/DetailsIcons/FavoriteIcon'
import { handleFavorite } from '../../redux/slicers/PlantsSlicer'
import ShareIcon from '../../assets/DetailsIcons/ShareIcon'
import Back from '../../assets/DetailsIcons/Back'


const DetailsScreen = ({ props, navigation, route }: any) => {
  const dispatch = useDispatch<AppDispatch>()
  const { favorites } = useSelector((state: StateType) => state.PlantsSlicer)

  const item = route.params

  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.upper}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <Back />
          </TouchableOpacity>
          <ShareIcon />

        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: '#002140', fontSize: 15 }}>{item.category}</Text>
          <View style={{ marginTop: 8, backgroundColor: '#0D986A', flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 1.5, width: '16%', borderRadius: 15, alignItems: 'center', gap: 5 }}>
            <StarIcon />
            <Text style={{ color: 'white' }}>4.8</Text>

          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#002140', fontSize: 35, marginBottom: '15%' }}>{item.name}</Text>
            <Text style={[styles.featuretext, { fontSize: 20, fontWeight: '400' }]}>Size</Text>
            <Text style={[styles.featuretext, { fontSize: 24, marginBottom: '10%' }]}>{item.size}</Text>
            <View style={styles.favoriteWrapper}>
              <TouchableOpacity onPress={() => dispatch(handleFavorite(item))}>
                <FavoriteIcon color={favorites.find((c: any) => c.id == item.id) ? '#0D986A' : 'white'} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Image source={{ uri: 'https://purepng.com/public/uploads/thumbnail//11232131312312-owi.png' }} style={styles.image} />
          </View>
        </View>

      </View>
      <View style={styles.bottom}>
        <View>
          <Text style={{ color: '#002140', fontSize: 22, fontWeight: '500' }}>Overview</Text>
        </View>
        <View style={styles.features}>

          <View style={styles.featurecontainer}>
            <Light />
            <Text style={styles.featuretext}>Light</Text>
            <Text style={[styles.featuretext, { color: '#0D986A' }]}>{item.light}</Text>

          </View>
          <View style={styles.featurecontainer}>
            <Temperature />
            <Text style={styles.featuretext}>Temperature</Text>
            <Text style={[styles.featuretext, { color: '#0D986A' }]}>{item.temperature}</Text>

          </View>
          <View style={styles.featurecontainer}>
            <Water />
            <Text style={styles.featuretext}>Water</Text>
            <Text style={[styles.featuretext, { color: '#0D986A' }]}>{item.water}</Text>

          </View>

        </View>
        <View>
          <Text style={{ color: '#002140', fontSize: 22, fontWeight: '500' }}>About</Text>
          <Text style={[styles.featuretext, { fontWeight: '300', justifyContent: 'center', lineHeight: 22 }]}>{item.about}</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    height:'40%',
    backgroundColor: '#DEEAD8',
    borderBottomLeftRadius: 35,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  favoriteWrapper: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
    bottom: '-50%',
    padding: 8,
    borderRadius: 10,
  },
  bottom: {
    
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 20
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',


  },
  featurecontainer: {
    alignItems: 'center',
    gap: 5
  },
  featuretext: {
    fontSize: 14,
    color: '#002140',
    fontWeight: '500',

  },

  image: {
    right: '-24%',
    height: 330,
    width: 340,
    position: 'absolute'

  },
})
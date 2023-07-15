import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FavoriteIcon from '../../assets/HomeIcons/FavoriteIcon'
import StarIcon from '../../assets/HomeIcons/StarIcon'
import { AppDispatch, StateType } from '../../redux/store/store'
import { handleFavorite } from '../../redux/slicers/PlantsSlicer';

const Card = (props: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const { favorites } = useSelector((state: StateType) => state.PlantsSlicer)

    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#DCE8D6', height: 100, width: '90%', borderRadius: 8, alignSelf: 'center', marginTop: 15 }}>

            <View style={styles.favoriteWrapper}>
                <TouchableOpacity onPress={()=>dispatch(handleFavorite(props.item))}>
                    <FavoriteIcon color = {favorites.find((c:any)=>c.id == props.item.id)?'#0D986A':'white'} />
                </TouchableOpacity>
            </View>


            <View style={{ flex: 7, marginRight: 10 }} >
                <Image source={{ uri: 'https://purepng.com/public/uploads/thumbnail//11232131312312-owi.png' }} style={styles.image} />
            </View>


            <View style={{ paddingVertical: 10, flex: 10, gap: 2 }}>
                <Text style={{ color: '#002140', fontWeight: '600', fontSize: 16 }}>
                    {props.item.name}
                </Text>
                <Text style={{ color: '#002140', fontWeight: '400', fontSize: 14 }}>
                    {props.item.description}
                </Text>
                <View style={{ marginTop: 8, backgroundColor: '#0D986A', flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 1.5, width: '40%', borderRadius: 15, alignItems: 'center', gap: 5 }}>
                    <StarIcon />
                    <Text style={{ color: 'white' }}>4.8</Text>

                </View>
            </View>
            <View style={{ flex: 4, backgroundColor: '#C3DCB7', height: '100%', width: '30%', borderTopLeftRadius: 120, borderBottomLeftRadius: 120, borderTopRightRadius: 8, borderBottomRightRadius: 8, alignItems: 'center', justifyContent: 'center', paddingLeft: 15 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('DetailsScreen',props.item)}>
                    <MaterialIcons name='navigate-next' size={40} color={'#002140'} />
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default Card

const styles = StyleSheet.create({
    image: {
        height: '100%', resizeMode: 'contain',bottom:'10%'
        

    },
    favoriteWrapper: {
        backgroundColor: 'white',
        position:'absolute',
        zIndex: 1,
        left: 5,
        bottom: 5,
        padding: 8,
        borderRadius: 15,
    },
})
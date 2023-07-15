import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LeafIcon from '../../assets/HomeIcons/LeafIcon'
import { TextInput } from 'react-native'
import Indoor from '../../assets/HomeIcons/Indoor'
import Flower from '../../assets/HomeIcons/Flower'
import Green from '../../assets/HomeIcons/Green'
import SearchIcon from '../../assets/searchIcons/SearchIcon'
import ScanIcon from '../../assets/searchIcons/ScanIcon'
import Card from '../../components/homeComponents/Card'
import AdsCard from '../../components/homeComponents/AdsCard'
import { AppDispatch, StateType } from '../../redux/store/store';
import { data } from '../../data/data';
import { handleCategory } from '../../redux/slicers/PlantsSlicer';




const dataj = [
  {
    img: '',
    name: 'Plant1',
    description: 'Description1'

  },
  {

    img: '',
    name: 'Plant2',
    description: 'Description2'

  },
  {

    img: '',
    name: 'Plant3',
    description: 'Description3'

  },
  {

    img: '',
    name: 'Plant4',
    description: 'Description4'

  },
]




const HomeScreen = ({ navigation }: any) => {

  const dispatch = useDispatch<AppDispatch>()
  const { favorites, category } = useSelector((state: StateType) => state.PlantsSlicer)
  const [filtereddata, setfiltereddata] = useState<any[]>()

  const renderItem = ({ item }: any) => {
    return (
      <Card item={item} navigation={navigation} />
    )
  }
  const renderItemAds = ({ item }: any) => {
    return (
      <AdsCard />
    )
  }
  const flatListRef = useRef(null);

  const scrollToIndex = (index: any) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };


  const setCategory = async (category: any) => {
    await dispatch(handleCategory(category))
    let fdata = data.filter((c: any) => c.category == category)
    setfiltereddata(fdata)
    
  }

  useEffect(() => {

    let currentIndex = 0;


    const interval = setInterval(() => {
      scrollToIndex(currentIndex);
      currentIndex++;

      if (currentIndex === data.length) {
        currentIndex = 0;
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LeafIcon />
        <Text style={styles.headertext}>PLANTOPEDIA</Text>
      </View>
      <View>
        <FlatList
          horizontal
          ref={flatListRef}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => { return (<View style={{ width: 5 }} />) }}
          data={dataj}
          renderItem={renderItemAds}
        />

      </View>
      <View style={styles.inputcontainer}>
        <SearchIcon />
        <TextInput placeholderTextColor={'#435B71'} placeholder='Search' style={styles.input} />
        <ScanIcon />
      </View>
      <View style={styles.categorycontainer}>
        <TouchableOpacity onPress={() => setCategory('Indoor')}>
          <View style={styles.category}>
            <Indoor color={category == 'Indoor' ? '#0D986A' : '#435B71'} strokewidth={category == 'Indoor' ? '3.28264' : '2.18842'} />
            <Text style={[styles.categorytext, { color: category == 'Indoor' ? '#0D986A' : "#435B71", borderBottomWidth: category == 'Indoor' ? 2 : 0, borderBottomColor: '#0D986A' }]}>Indoor</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('Flower')}>
          <View style={styles.category}>
            <Flower color={category == 'Flower' ? '#0D986A' : '#435B71'} strokewidth={category == 'Flower' ? '3.28264' : '2.18842'} />
            <Text style={[styles.categorytext, { color: category == 'Flower' ? '#0D986A' : "#435B71", borderBottomWidth: category == 'Flower' ? 2 : 0, borderBottomColor: '#0D986A' }]}>Flower</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('Green')}>
          <View style={styles.category}>
            <Green color={category == 'Green' ? '#0D986A' : '#435B71'} strokewidth={category == 'Green' ? '3.28264' : '2.18842'} />
            <Text style={[styles.categorytext, { color: category == 'Green' ? '#0D986A' : "#435B71", borderBottomWidth: category == 'Green' ? 2 : 0, borderBottomColor: '#0D986A' }]}>Green</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.plantlists}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={category!='default'?filtereddata:data}
          ItemSeparatorComponent={() => { return (<View style={{ height: 5 }} />) }}
          renderItem={renderItem}

        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 20,
    gap: 15
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  headertext: {
    fontSize: 25,
    color: '#0D986A',
    fontWeight: '500'
  },
  slider: { backgroundColor: '#F9D7BD', width: "100%", height: "30%", borderRadius: 20 },
  inputcontainer: {},
  input: { paddingVertical: 10, borderRadius: 18, borderWidth: 0.8, paddingLeft: 50 },
  categorycontainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40 },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',

  },
  categorytext: {
    color: '#435B71'
  },
  plantlists: { height: '30%' },

})
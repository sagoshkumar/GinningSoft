import React, {useRef, useState} from 'react';
import {View, Text, Image, FlatList, Pressable, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import Heading from '../../Components/ReusableComponent/Heading';
import ButtonComp from '../../Components/ReusableComponent/Button';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import EventCard from '../../Components/ReusableComponent/Events';
import {ScrollView} from 'react-native-gesture-handler';
import MainCard from '../../Components/MainCard';
import BottomSheet from 'src/Components/ReusableComponent/BottomSheet';
import Filters from '../../Components/Filter';
import {yourProfile} from '../../Store/slices';
import {styles} from '../Events/style';

function MainScreen({navigation}) {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state);

  const friends = [
    {
      id: 1,
      bgImg: require('src/Assets/Images/cotton1.png'),
      name: 'Cotton',
      title: 'Down for something',
    },
    {
      id: 2,
      bgImg: require('src/Assets/Images/cotton.png'),
      name: 'Raw Cotton',
      title: 'Down for something',
    },
    {
      id: 3,
      bgImg: require('src/Assets/Images/graph.png'),
      name: 'Graph Sales Trend Analysis',
      title: 'Down for something',
    }
  ];

  const Interest = [
    {
      id: 1,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Date Night',
    },
    {
      id: 2,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Watcher',
    },
    {
      id: 3,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Social Causes',
    },
    {
      id: 4,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Creatives',
    },
    {
      id: 1,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Brunch Time',
    },
    {
      id: 2,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Foodies',
    },
    {
      id: 3,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Music Lovers',
    },
    {
      id: 4,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Nature',
    },
  ];
  const refRBSheet = useRef();

  const width = Dimensions.get('window').width;
  const PhotoWidth = width / 1.12;
  const LandscapePhotoWidth = width / 2.27;

  const height = Dimensions.get('window').height;
  const PhotoHeight = height / 3.1;
  const PhotoHeight1 = height / 2.8;

  const btn = () => {
    dispatch(yourProfile(true));
    // navigation.navigate('Profiledetails');
  };

  const FilterHeight = height / 1.08;

  return (
    <SafeArea>
      <ScrollView>
        <View
          style={{
            flexGrow: 1,
            margin: '4%',

            // justifyContent: 'center',
            // flex: 1,
            // backgroundColor: 'blue',
          }}>
          <View style={{flexWrap: 'wrap'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignContent:'space-between',
                marginLeft: 1,
                // backgroundColor: 'blue',
              }}>
              {/* <TouchableOpacity onPress={navigation.navigate('Profiledetails')}> */}
              <View style={{marginLeft: 5}}>
                <InteractAvatar
                  size={58}
                  // src={require('src/Assets/Images/avatar.png')}
                  press={btn}
                />
              </View>
              {/* </TouchableOpacity> */}
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('src/Assets/Images/logo.png')}
                />
                <Heading
                  Fontsize={24}
                  Heading={'Ginning Soft'}
                  txtAlign={'center'}
                  Fontweight={'700'}
                />
              </View>
              {reducerData?.isDark?.isMatch ? (
                <View style={{right: 5}}>
                  <ButtonComp
                    mode={'outlined'}
                    justify={'center'}
                    align={'center'}
                    btnHeight={63}
                    featherIcon={'message-circle'}
                    Borderwidth={2}
                    radius={30}
                    topMargin={0}
                    // press={() => navigation.navigate('messages')}
                  />
                </View>
              ) : (
                <View>
                  <ButtonComp
                    mode={'outlined'}
                    justify={'center'}
                    align={'center'}
                    btnHeight={60}
                    icon={'options-outline'}
                    Borderwidth={2}
                    radius={15}
                    // align={'flex-end'}
                    // leftMargin={20}
                    rightMargin={5}
                    topMargin={0}
                    // press={() => refRBSheet.current.open()}
                  />
                </View>
              )}

            </View>
          </View>
          {reducerData?.isDark?.isMatch ? (
            <View
              style={{
                marginTop: 30,
                // borderWidth: 1,
              }}>
              <View>
                <Heading
                  ml={7}
                  Heading={'For You'}
                  Fontweight={'700'}
                  Fontsize={23}
                  txtAlign={'left'}
                />
                <Heading
                  Heading={'Recommendations based on your profile'}
                  ml={7}
                  Fontweight={'normal'}
                  Fontsize={14}
                  txtAlign={'left'}
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                
              </View>
              <View style={{marginBottom: 10, marginTop: 30}}>
                <Heading
                  ml={7}
                  Heading={'Nearby Events'}
                  Fontweight={'700'}
                  Fontsize={23}
                  txtAlign={'left'}
                />
                <Heading
                  Heading={'My Vibe...'}
                  ml={7}
                  Fontweight={'normal'}
                  Fontsize={16}
                  txtAlign={'left'}
                />
              </View>
              
              <ButtonComp
                btnwidth={'97%'}
                // leftMargin={5}
                btnHeight={56}
                color={'#EDF9E5'}
                topMargin={20}
                btnText={'See more'}
                txtColor={COLORS.primary}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                fontStyle={'700'}
                txtwidth={'100%'}
                press={() => navigation.navigate('MoreEvent')}
              />
            </View>
          ) : (
            <View
              style={{
                marginTop: 30,
              }}>
              <FlatList
                contentContainerStyle={styles.flexable}
                // numColumns={2}
                data={friends}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View
                        style={{
                          flexGrow: 1,
                          alignItems: 'center',
                          marginLeft: 5,
                          // borderWidth: 1,
                        }}>
                        <Pressable>
                          <EventCard
                            width={
                              (index + 1) % 3 === 0
                                ? PhotoWidth
                                : LandscapePhotoWidth
                            }
                            height={
                              (index + 1) % 3 === 0 ? PhotoHeight : PhotoHeight1
                            }
                            justify={
                              (index + 1) % 3 === 0
                                ? 'space-between'
                                : 'flex-end'
                            }
                            Textalign={
                              (index + 1) % 3 === 0 ? 'center' : 'left'
                            }
                            marginRight={(index + 1) % 3 === 0 ? 0 : 20}
                            Align={(index + 1) % 3 === 0 ? 'left' : 'center'}
                            marginLeft={(index + 1) % 3 === 0 ? 20 : 0}
                            title={item.title}
                            subtitle={item.subtitle}
                            bgImg={item.bgImg}
                            para={item.name}
                          />
                        </Pressable>
                      </View>
                    </>
                  );
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default MainScreen;

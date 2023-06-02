import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from '../../Assets/Style/Color';
import MainCard from '../../Components/MainCard';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import EventCard from '../../Components/ReusableComponent/Events';
import Heading from '../../Components/ReusableComponent/Heading';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {yourProfile} from '../../Store/slices';
import {styles} from './style';

function Events({navigation}) {
  const reducerData = useSelector(state => state);
  const dispatch = useDispatch();
  const btn = () => {
    dispatch(yourProfile(true));
    // navigation.navigate('Profiledetails');
  };


  const width = Dimensions.get('window').width;
  const PhotoWidth = width / 1.13;
  const smallWidth = width / 2.29;

  const height = Dimensions.get('window').height;
  const PhotoHeight = height / 3.1;
  const smallHeight = height / 2.8;

  return (
    <SafeArea>
      <ScrollView>
        {reducerData?.isDark?.isMatch ? (
          <View
            style={{
              flexGrow: 1,
              margin: '4%',
              // backgroundColor: 'blue',
            }}>
            <View
              style={{
                flexDirection: 'row',
                // margin: 30,
                justifyContent: 'space-between',
                marginLeft: 5,
                marginRight: 5,
              }}>
              <InteractAvatar
                size={58}
                // src={require('src/Assets/Images/avatar.png')}
                press={btn}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Image
                    style={{width: 35, height: 30}}
                    source={require('src/Assets/Images/logo.png')}
                  />
                </TouchableOpacity>
                <Heading
                  Fontsize={24}
                  Heading={'Orders'}
                  txtAlign={'center'}
                  Fontweight={'700'}
                />
              </View>
              <ButtonComp
                mode={'outlined'}
                justify={'center'}
                align={'center'}
                btnHeight={60}
                featherIcon={'plus'}
                Borderwidth={2}
                radius={15}
                topMargin={0}
                press={() => navigation.navigate('Addevent')}
              />
            </View>
            <View
              style={{
                marginTop: 30,
                // borderWidth: 1,
              }}>
              
              <ButtonComp
                btnwidth={'96%'}
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
                // press={() => navigation.navigate('MoreEvent')}
              />
            </View>
            <View style={{marginTop: 20}}>
              <Heading
                ml={7}
                Heading={'Created Events'}
                Fontweight={'700'}
                Fontsize={19}
                txtAlign={'left'}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => 'key' + index}
                data={friends}
                renderItem={({item, index}) => {
                  return (
                    <>
                      {index <= 1 ? (
                        <View
                          style={{
                            margin: '1%',
                          }}>
                          <EventCard
                            width={smallWidth}
                            height={smallHeight}
                            justify={'flex-end'}
                            Textalign={'left'}
                            marginRight={20}
                            Align={'center'}
                            marginLeft={0}
                            title={item.title}
                            subtitle={item.subtitle}
                            bgImg={item.bgImg}
                            para={item.name}
                          />
                        </View>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                }}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              flexGrow: 1,
              margin: '4%',
              // backgroundColor: 'blue',
            }}>
            <View
              style={{
                flexDirection: 'row',
                // margin: 10,
                justifyContent: 'space-between',
                marginLeft: 5,
                marginRight: 5,
              }}>
              <InteractAvatar
                size={58}
                // src={require('src/Assets/Images/avatar.png')}
                press={btn}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('src/Assets/Images/logo.png')}
                  />
                </TouchableOpacity>
                <Heading
                  Fontsize={20}
                  Heading={'Orders'}
                  txtAlign={'center'}
                  Fontweight={'700'}
                />
              </View>
              {/* <View style={{right: 15}}> */}
              <ButtonComp
                mode={'outlined'}
                justify={'center'}
                align={'center'}
                btnHeight={63}
                featherIcon={'plus'}
                Borderwidth={2}
                radius={15}
                topMargin={0}
                press={() => navigation.navigate('Addevent')}
              />
              {/* </View> */}
            </View>

            

            <View
              style={{
                marginTop: 30,
              }}>
              <View style={{marginBottom: 10}}>
                <Heading
                  Heading={'Created Orders'}
                  Fontweight={'700'}
                  Fontsize={23}
                  txtAlign={'left'}
                />
                {reducerData?.isDark?.IsEvent ? (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 30,
                    }}>
                    <Pressable
                      onPress={() => navigation.navigate('eventDetails')}>
                      <EventCard
                        width={PhotoWidth}
                        height={PhotoHeight}
                        justify={'space-between'}
                        Textalign={'center'}
                        marginRight={0}
                        Align={'center'}
                        title={'Take you to the your favorite cafe'}
                        bgImg={require('../../Assets/Images/img.png')}
                        para={'Coffee Meetup?'}
                      />
                    </Pressable>
                  </View>
                ) : (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 30,
                    }}>
                    <Image
                      source={require('../../Assets/Images/calender.png')}
                    />
                    <Heading
                      Heading={'No Orders Created Yet !'}
                      mt={20}
                      Fontweight={'700'}
                      Fontsize={16}
                      txtAlign={'left'}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeArea>
  );
}

export default Events;

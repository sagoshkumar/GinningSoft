import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, ScrollView, View, Pressable} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../../Components/ReusableComponent/Button';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import InterestChip from '../../Components/ReusableComponent/InterestChip';
import Gallery from '../../Components/ReusableComponent/Gallery';
import {styles} from './style';
import FriendsCard from '../../Components/ReusableComponent/FriendsCard';
import {useSelector} from 'react-redux';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import BottomSheet from '../../Components/ReusableComponent/BottomSheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function ViewProfile({navigation}) {
  const refRBSheet = useRef();

  const friends = [
    {
      id: 1,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Leilani & Hall',
    },
    {
      id: 2,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Anna & Shan',
    },
    {
      id: 3,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Robin & Latt',
    },
    {
      id: 4,
      bgImg: require('src/Assets/Images/friends.png'),
      name: 'Lilly & Wade',
    },
  ];
  const [banner, setBanner] = useState();

  const reducerData = useSelector(state => state);

  const openGallery = () => {
    let option = {
      include64: true,
      mediaType: 'photo',
    };
    launchImageLibrary(option, res => {
      console.log(res);
      if (res.assets) {
        setBanner(res.assets[0].uri);
        console.log('library Image');
        console.log(res);
        // setIsImageUpload(true);
      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };

  const openCamera = () => {
    let option = {
      include64: true,
      mediaType: 'photo',
    };
    launchCamera(option, res => {
      console.log(res);
      if (res.assets) {
        setBanner(res.assets[0].uri);
        console.log('lCamera Img');
        console.log(res);
        // setIsImageUpload(true);
      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };

  return (
    <SafeArea>
      <View style={{flexGrow: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              margin: '4%',
            }}>
            <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'center'}
              btnHeight={65}
              icon={'chevron-back'}
              radius={15}
              topMargin={10}
              Borderwidth={2}
              press={() => navigation.goBack()}
            />

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={34}
                mt={'8%'}
                Heading={'Profile Details'}
              />
              <View style={styles.avatar}>
                <InteractAvatar
                  icon={'camera'}
                  src={banner ? {uri: banner} : null}
                  size={120}
                  Iconsize={20}
                  IconPress={() => refRBSheet.current.open()}

                  // press={}
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={30}
                mx={-5}
                mt={'8%'}
                Heading={'David Peterson'}
              />
              <InteractParagraph p={'@davidpeter'} />
              <InteractParagraph fs={14} fw={'700'} p={'Texas, US - 21540'} />
            </View>
            <View
              style={{
                borderColor: COLORS.border_color,
                borderWidth: 1,
                marginTop: 20,
                borderRadius: 15,
              }}>
              <InteractParagraph
                p={
                  'My name is David and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading.'
                }
                txtAlign={'center'}
                Padding={20}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                marginTop: 10,
              }}>
              <Heading
                Heading={'Interests'}
                Fontweight={'100'}
                Fontsize={16}
                txtAlign={'center'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 5,
              }}>
              <InterestChip
                IconName={'checkmark-done'}
                title={' Travelling '}
              />
              <InterestChip IconName={'checkmark-done'} title={' Books '} />
              <InterestChip IconName={'checkmark-done'} title={' Music '} />
              <InterestChip IconName={'checkmark-done'} title={' Dancing '} />
              <InterestChip IconName={'checkmark-done'} title={' Modeling '} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: '15%',
                marginBottom: '10%',
              }}>
              <ButtonComp
                btnwidth={'95%'}
                btnHeight={56}
                btnText={'Edit Profile'}
                txtColor={COLORS.white}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                fontStyle={'700'}
                txtwidth={'100%'}
                press={() => navigation.navigate('edit')}
              />
            </View>
            {reducerData?.isDark?.isMatch ? (
              <View
                style={{
                  backgroundColor: 'rgba(77, 197, 0, 0.2)',
                  // padding: 20,
                  borderRadius: 15,
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 30,
                  }}>
                  <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index}
                    data={friends}
                    renderItem={({item}) => {
                      return (
                        <View
                          style={{
                            margin: '1%',
                            flex: 1,
                            alignItems: 'center',
                            alignSelf: 'center',
                          }}>
                          <FriendsCard
                            width={Dimensions.get('window').width / 3}
                            height={Dimensions.get('window').height / 3.8}
                            bgImg={item.bgImg}
                            para={item.name}
                          />
                        </View>
                      );
                    }}
                  />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    flexDirection: 'row',
                    top: -10,
                  }}>
                  <InteractParagraph
                    fw={'700'}
                    color={COLORS.primary}
                    p={'Friends '}
                  />
                  <InteractParagraph p={'(109)'} />
                </View>
                <View
                  style={{
                    marginTop: '5%',
                    marginBottom: '5%',
                  }}>
                  <ButtonComp
                    btnwidth={'90%'}
                    btnHeight={56}
                    btnText={'See All Families'}
                    txtColor={COLORS.white}
                    justify={'center'}
                    align={'center'}
                    fontSize={16}
                    radius={15}
                    fontStyle={'700'}
                    txtwidth={'100%'}
                    press={() => navigation.navigate('families')}
                  />
                </View>
              </View>
            ) : (
              <></>
            )}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexGrow: 1,
                marginTop: 10,
                // justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <Heading
                  Heading={'Gallery'}
                  Fontweight={'700'}
                  Fontsize={16}
                  // ml={10}
                />
                <Pressable onPress={() => navigation.navigate('addAlbum')}>
                  <View style={{flexDirection: 'row'}}>
                    <InteractParagraph
                      fw={'700'}
                      p={'Edit'}
                      mt={3}
                      fs={16}
                      color={COLORS.primary}
                    />
                    <Icon
                      name="right"
                      color={COLORS.primary}
                      style={{top: 8}}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View>
            {/* <ScrollView> */}
            <Gallery navigate={navigation} />
            {/* </ScrollView> */}
          </View>
        </ScrollView>
      </View>
      <BottomSheet refRBSheets={refRBSheet} height={160}>
        <View
          style={{
            alignItems: 'flex-start',
            margin: '8%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              marginLeft: 10,
            }}>
            <Pressable onPress={openCamera}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: 25,
                  padding: 10,
                }}>
                <Icons name="photo-camera" color={'#fff'} size={30} />
              </View>
            </Pressable>
            <InteractParagraph p={'Camera'} />
          </View>
          <View
            style={{
              marginLeft: 40,
            }}>
            <Pressable onPress={openGallery}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: 25,
                  padding: 10,
                }}>
                <Icons name="photo-library" color={'#fff'} size={30} />
              </View>
            </Pressable>
            <InteractParagraph p={' Gallery'} />
          </View>
        </View>
      </BottomSheet>
    </SafeArea>
  );
}

export default ViewProfile;

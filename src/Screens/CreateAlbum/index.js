import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Divider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import FriendsCard from '../../Components/ReusableComponent/FriendsCard';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {Albums, yourProfile} from '../../Store/slices';
import Icon from 'react-native-vector-icons/AntDesign';
import Tabs from '../../Components/Tabs';
import Input from '../../Components/ReusableComponent/input';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import BottomSheet from '../../Components/ReusableComponent/BottomSheet';
import Icons from 'react-native-vector-icons/MaterialIcons';

function CreateAlbum({navigation}) {
  const reducerData = useSelector(state => state);
  const dispatch = useDispatch();
  const [banner, setBanner] = useState();
  const [Text, setText] = useState();
  const [list, setList] = useState([]);
  const refRBSheet = useRef();

  const Album = () => {
    let arr = {Text, banner};
    let tempList = [...list];
    tempList.push(arr);
    setList(tempList);
    dispatch(Albums(arr));
    navigation.navigate('addAlbum');
  };

  const openGallery = () => {
    refRBSheet.current.close();
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error', response.error);
      } else if (response.customButton) {
        console.log('User Tapped custom button', response.customButton);
      } else {
        const source = response.assets[0].uri;
        setBanner(source);
      }
    });
  };

  const openCamera = () => {
    refRBSheet.current.close();
    let options = {
      storageOptions: {
        path: 'images',
        skipBackup: true,
      },
      saveToPhotos: true,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error', response.error);
      } else if (response.customButton) {
        console.log('User Tapped custom button', response.customButton);
      } else {
        const source = response.assets[0].uri;
        setBanner(source);
      }
    });
  };

  return (
    <SafeArea>
      <View style={{flexGrow: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              flex: 1,
              margin: '8%',
              justifyContent: 'space-between',
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                }}>
                <ButtonComp
                  mode={'outlined'}
                  justify={'center'}
                  align={'center'}
                  btnHeight={65}
                  icon={'chevron-back'}
                  radius={15}
                  Borderwidth={1}
                  press={() => navigation.goBack()}
                />
                <Heading
                  Stylefont={'normal'}
                  Fontweight={'700'}
                  Fontsize={28}
                  txtAlign={'center'}
                  ml={'3%'}
                  mt={'2%'}
                  p={10}
                  Heading={'Create Album'}
                />
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  //   flexDirection: 'row',
                }}>
                <Input
                  outline={'#E8E6EA'}
                  width={'95%'}
                  top={'10%'}
                  mode={'outlined'}
                  label={'Album Name'}
                  Value={Text}
                  Onchange={e => setText(e)}
                />
              </View>
              {banner ? (
                <View
                  style={{
                    // flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderRadius: 15,
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                    width: '95%',
                    marginTop: 20,
                    // height: '50%',

                    alignSelf: 'center',
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={{
                      uri: banner,
                    }}
                    style={{width: '100%', height: 200}}
                  />
                </View>
              ) : (
                <View
                  style={{
                    // flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderRadius: 15,
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                    width: '95%',
                    marginTop: 20,
                    // height: '50%',

                    alignSelf: 'center',
                    padding: '20%',
                    overflow: 'hidden',
                  }}>
                  <Pressable onPress={() => refRBSheet.current.open()}>
                    <Icon name="plus" color={COLORS.primary} size={45} />
                  </Pressable>
                </View>
              )}
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'row',
                marginTop: '15%',
                //   marginBottom: '1%',
              }}>
              <ButtonComp
                btnwidth={'97%'}
                btnHeight={56}
                btnText={'Create'}
                txtColor={COLORS.white}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                fontStyle={'700'}
                txtwidth={'100%'}
                press={Album}
              />
            </View>
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

export default CreateAlbum;

import React, {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Icon from 'react-native-vector-icons/AntDesign';
import COLORS from '../../Assets/Style/Color';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';

function ViewAlbum({navigation, route}) {
  const item = [route.params];
  const [banner, setBanner] = useState([]);
  const reducerData = useSelector(state => state);

  const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      selectionLimit: 0,
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
        const res = response.assets;

        res.map((e, i) => {
          setBanner(banner => [...banner, e.uri]);
        });
      }
    });
  };

  return (
    <SafeArea>
      <ScrollView>
        <View
          style={{
            flex: 1,
            margin: '8%',
          }}>
          <View
            style={{
              //   flexDirection: 'row',
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
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Heading
                Stylefont={'normal'}
                Fontweight={'500'}
                Fontsize={25}
                txtAlign={'center'}
                // ml={'3%'}
                mt={'5%'}
                //   p={10}
                Heading={`Album : ${
                  item[0]?.e?.title === undefined
                    ? item[0]?.item?.Text
                    : item[0]?.e?.title
                }`}
              />
            </View>
          </View>
          <View style={{width: '80%', alignSelf: 'center'}}>
            <InteractParagraph
              mt={10}
              fs={16}
              lh={25}
              txtAlign={'center'}
              p={'Upload Images in Albums'}
            />
          </View>
          {reducerData?.isDark?.yourProfile ? (
            <Pressable onPress={openGallery}>
              <View
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  flex: 1,
                  backgroundColor: COLORS.primary,
                  padding: 15,
                  borderRadius: 15,
                }}>
                <Icon name="pluscircleo" color={COLORS.white} size={25} />
                <InteractParagraph
                  ml={5}
                  fs={16}
                  lh={25}
                  color={COLORS.white}
                  txtAlign={'center'}
                  p={'Upload Images'}
                />
              </View>
            </Pressable>
          ) : (
            <></>
          )}

          <View style={{top: 20}}>
            <Image
              style={{
                width: '100%',
                height: 220,
                borderRadius: 15,
                top: 4,
              }}
              resizeMode="cover"
              // source={item[0].e.source}
              source={
                item[0]?.e?.source === undefined
                  ? {uri: item[0].item.banner}
                  : item[0]?.e?.source
              }
              // source={{uri: item[0].item.banner}}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              // width: '100%',
              // height: '100%',
              // overflow: 'hidden',
              // flexDirection: 'row',
              // backgroundColor: 'red',
              // flexDirection: 'row',
            }}>
            <FlatList
              contentContainerStyle={{overflow: 'hidden'}}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => 'key' + index}
              data={banner}
              renderItem={({item}) => {
                return (
                  <View style={{margin: 5}}>
                    {/* <Pressable
                      onPress={() =>
                        navigation.navigate('viewAlbum', {
                          item,
                        })
                        console.log(data.item[0].item.Text);
                      }> */}
                    <View
                      style={{elevation: 10, borderRadius: 15, marginTop: 10}}>
                      <Image
                        style={{
                          width: 90,
                          height: 130,
                          borderRadius: 15,
                        }}
                        resizeMode="contain"
                        resizeMethod="resize"
                        source={{uri: item}}
                      />
                    </View>
                    {/* </Pressable> */}
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default ViewAlbum;

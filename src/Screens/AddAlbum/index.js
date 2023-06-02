import React, {useState} from 'react';
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
import {yourProfile} from '../../Store/slices';
import Icon from 'react-native-vector-icons/AntDesign';
import Tabs from '../../Components/Tabs';

function AddAlbum({navigation}) {
  const reducerData = useSelector(state => state);

  console.log(reducerData?.Albums?.albums);

  const data = reducerData?.Albums?.albums;

  // const [hello, setHello] = useState(true);
  const dispatch = useDispatch();

  const btn = () => {
    dispatch(yourProfile(false));
    navigation.navigate('Mainprofile');
  };

  return (
    <SafeArea>
      <ScrollView>
        <View
          style={{
            flex: 1,
            margin: '4%',
          }}>
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
              Heading={'Albums'}
            />
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

          <View
            style={{
              marginTop: 20,
              width: '100%',
              overflow: 'hidden',

              // backgroundColor: 'red',
              // flexDirection: 'row',
            }}>
            {reducerData?.Albums?.albums.length ? (
              <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => 'key' + index}
                data={data}
                renderItem={({item}) => {
                  return (
                    <>
                      <View
                        style={{
                          flex: 1,
                          flexWrap: 'wrap',
                          margin: 5,
                          // flexDirection: 'row',
                        }}>
                        <Pressable
                          onPress={() =>
                            navigation.navigate('viewAlbum', {
                              item,
                            })
                          }>
                          <Image
                            style={{width: 145, height: 240}}
                            source={{uri: item.banner}}
                          />
                          <InteractParagraph
                            ml={5}
                            fw={'700'}
                            color={COLORS.primary}
                            p={item.Text}
                          />
                        </Pressable>
                      </View>
                      {reducerData?.Albums?.albums.length < 2 ? (
                        <View
                          style={{
                            width: '47%',
                            overflow: 'hidden',
                            marginTop: 5,
                            // marginHorizontal: 5,
                          }}>
                          <Pressable
                            onPress={() => navigation.navigate('createAlbum')}>
                            <View
                              style={{
                                backgroundColor: COLORS.border_color,
                                height: 240,
                              }}>
                              <View
                                style={{
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flex: 1,
                                }}>
                                <Icon
                                  name="plus"
                                  color={COLORS.primary}
                                  size={30}
                                />
                              </View>
                            </View>
                          </Pressable>
                        </View>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                }}
              />
            ) : (
              <></>
            )}
            {reducerData?.Albums?.albums.length == 1 ? (
              <></>
            ) : (
              <View
                style={{
                  width: '47%',
                  overflow: 'hidden',
                  marginHorizontal: 5,
                }}>
                <Pressable onPress={() => navigation.navigate('createAlbum')}>
                  <View
                    style={{
                      backgroundColor: COLORS.border_color,
                      height: 240,
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                      }}>
                      <Icon name="plus" color={COLORS.primary} size={30} />
                    </View>
                  </View>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default AddAlbum;

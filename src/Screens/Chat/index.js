import React from 'react';
import {Dimensions, FlatList, ScrollView, View} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../Components/ReusableComponent/input';
import {useSelector} from 'react-redux';

function Chat({navigation, route}) {
  const item = route.params;

  const width = Dimensions.get('window').width;
  const InputWidth = width / 1.7;
  const margin = width / 25;
  const reducerData = useSelector(state => state);

  const dummyMsg = [
    {
      day: 'today',
      message:
        'Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week 😄',
      currentUserMsg:
        'Haha truly! Nice to meet you Grace! What about a cup of coffee today evening? ☕️ ',
      msgUser: 'Grace - 2:55 PM',
    },
    {
      message: 'Yup ! Fine',
      currentUserMsg:
        'Great I will write later the exact time and place. See you soon!',
      msgUser: 'Grace - 2:55 PM',
    },
    {
      message:
        'Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week 😄',
      currentUserMsg: 'See you soon!',
      msgUser: 'Grace - 2:55 PM',
    },
  ];

  return (
    <SafeArea>
      <View
        style={{
          marginTop: '4%',
          marginLeft: '4%',
          marginRight: '4%',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'flex-start',
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
          </View>
          <View
            style={{
              alignItems: 'center',
              flex: 0.72,
              marginBottom: 10,
            }}>
            <InteractAvatar src={item.avatar} />
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={22}
              txtAlign={'center'}
              ml={'3%'}
              p={10}
              Heading={item.userName}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 6,
                  width: 6,
                  backgroundColor: COLORS.primary,
                  borderRadius: 60,
                }}></View>
              <InteractParagraph p={'Online'} ml={5} />
            </View>
          </View>
        </View>
        <FlatList
          keyExtractor={(item, index) => 'key' + index}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          data={dummyMsg}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={{justifyContent: 'space-between'}}>
                  {item.day ? (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        top: 20,
                        marginBottom: 20,
                      }}>
                      <Divider
                        style={{
                          width: '40%',
                          borderColor: COLORS.border_color,
                          shadowColor: COLORS.dark,
                          borderWidth: 1,
                        }}
                      />
                      <InteractParagraph p={'Today'} Padding={7} />

                      <Divider
                        style={{
                          width: '40%',
                          borderColor: COLORS.border_color,
                          shadowColor: COLORS.dark,
                          borderWidth: 1,
                        }}
                      />
                    </View>
                  ) : (
                    <></>
                  )}
                  <View
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                      alignItems: 'flex-start',
                    }}
                    key={index}>
                    <View
                      style={{
                        backgroundColor: 'rgba(102, 255, 3, 0.1)',
                        padding: 15,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15,
                      }}>
                      <InteractParagraph p={item.message} lh={21} />
                    </View>

                    <InteractParagraph p={item.msgUser} mt={5} ml={2} fs={12} />
                  </View>
                  {item.currentUserMsg ? (
                    <View
                      style={{
                        alignItems: 'flex-end',
                        marginLeft: 50,
                      }}>
                      <View
                        style={{
                          backgroundColor: reducerData.isDark.isdark
                            ? '#292929'
                            : COLORS.border_color,
                          padding: 15,
                          borderTopLeftRadius: 15,
                          borderTopRightRadius: 15,
                          borderBottomLeftRadius: 15,
                        }}>
                        <InteractParagraph p={item.currentUserMsg} lh={21} />
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <InteractParagraph
                          p={item.msgUser}
                          mt={5}
                          mr={2}
                          fs={12}
                        />
                        <Icon
                          name={'checkmark-done-outline'}
                          size={20}
                          color={COLORS.primary}
                        />
                      </View>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: margin,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.border_color,
            borderRadius: 15,
            padding: 15,
            marginBottom: 1,
          }}>
          <MaterialIcon
            color={COLORS.border_color}
            size={25}
            name="sticker-circle-outline"
          />
        </View>
        <View style={{marginBottom: 6}}>
          <Input
            outline={'#E8E6EA'}
            mode={'outlined'}
            width={InputWidth}
            placeholder="Your Message"
            IconName={'send'}
            IconColor={COLORS.primary}
            line={5}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.border_color,
            borderRadius: 15,
            padding: 15,
            marginBottom: 1,
          }}>
          <Icon name="mic" color={COLORS.primary} size={25} />
        </View>
      </View>
    </SafeArea>
  );
}

export default Chat;

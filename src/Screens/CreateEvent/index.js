import React, {useRef} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import BasicBtn from 'src/Components/ReusableComponent/ButtonBasic';
import COLORS from '../../Assets/Style/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import {IsEvent} from '../../Store/slices';

function CreateEvent({navigation}) {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state);
  const statusChange = () => {
    dispatch(IsEvent(true));
    navigation.navigate('Events');
  };

  return (
    <SafeArea>
      <ScrollView>
        <View
          style={{
            margin: '4%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'center'}
              btnHeight={65}
              icon={'chevron-back'}
              radius={15}
              // rightMargin={'5%'}
              // leftMargin={'5%'}
              // topMargin={'5%'}
              Borderwidth={1}
              press={() => navigation.goBack()}
            />
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={27}
              txtAlign={'center'}
              ml={'3%'}
              p={10}
              Heading={'Create Event'}
            />
          </View>
          <View
            style={{
              padding: 5,
              marginTop: '8%',
              justifyContent: 'center',
            }}>
            <View>
              <Heading
                Fontweight={'700'}
                Fontsize={18}
                txtAlign={'center'}
                // p={10}
                mt={'5%'}
                Heading={'Add Cover Photo'}
              />
            </View>
          </View>
          <View style={{flexGrow: 1}}>
            <View style={{marginTop: 10}}>
              <View
                style={{
                  // flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  borderRadius: 15,
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                  width: '100%',
                  // height: '50%',

                  alignSelf: 'center',
                  padding: '20%',
                  overflow: 'hidden',
                }}>
                <Icon name="add" color={COLORS.primary} size={45} />
              </View>
              <View style={{marginTop: 10}}>
                <Heading
                  Stylefont={'normal'}
                  Fontweight={'700'}
                  Fontsize={20}
                  Heading={'Coffee Meetup'}
                />
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon name="earth" color={COLORS.primary} size={25} />
                  <InteractParagraph
                    // JContent={'center'}
                    ml={10}
                    fs={16}
                    p={'Public . Hosted by'}
                  />
                  <InteractParagraph
                    // JContent={'center'}
                    ml={5}
                    fw={'700'}
                    fs={16}
                    p={'David'}
                  />
                </View>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="edit" color={COLORS.primary} size={25} />
                  <View style={{flexDirection: 'column'}}>
                    <InteractParagraph
                      // JContent={'center'}
                      ml={10}
                      fs={16}
                      fw={'700'}
                      p={'Description'}
                    />
                    <InteractParagraph
                      // JContent={'center'}
                      ml={10}
                      // fw={'700'}
                      fs={14}
                      p={'Lorem Ipsum is dummy text'}
                    />
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="location-outline"
                    color={COLORS.primary}
                    size={25}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <InteractParagraph
                      // JContent={'center'}
                      ml={10}
                      fs={16}
                      fw={'700'}
                      p={'Location'}
                    />
                    <InteractParagraph
                      // JContent={'center'}
                      ml={10}
                      // fw={'700'}
                      fs={14}
                      p={'Texas'}
                    />
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    marginTop: '15%',
                    marginBottom: '10%',
                  }}>
                  <ButtonComp
                    btnwidth={'97.6%'}
                    btnHeight={56}
                    btnText={'Create Event'}
                    txtColor={COLORS.white}
                    justify={'center'}
                    align={'center'}
                    fontSize={16}
                    radius={15}
                    fontStyle={'700'}
                    txtwidth={'100%'}
                    press={statusChange}
                  />
                </View>
              </View>
            </View>

            <View></View>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default CreateEvent;

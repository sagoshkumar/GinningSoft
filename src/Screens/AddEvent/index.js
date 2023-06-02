import React, {useRef} from 'react';
import {Dimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Calendars from 'src/Components/ReusableComponent/Calendar';
import BottomSheet from 'src/Components/ReusableComponent/BottomSheet';
import Input from '../../Components/ReusableComponent/input';
import BasicBtn from 'src/Components/ReusableComponent/ButtonBasic';
import COLORS from '../../Assets/Style/Color';

function AddEvent({navigation}) {
  const refRBSheet = useRef();

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
              Heading={'Create Orders'}
            />
          </View>
          <View
            style={{
              // padding: 5,
              marginTop: '8%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <InteractAvatar
              size={60}
              // src={require('src/Assets/Images/avatar.png')}
            />
            <View style={{justifyContent: 'center'}}>
              <Heading
                Fontweight={'700'}
                Fontsize={18}
                txtAlign={'center'}
                // p={10}
                mt={'5%'}
                ml={'10%'}
                Heading={'User Name'}
              />
            </View>
          </View>
          <View style={{flexGrow: 1}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Input
                outline={'#E8E6EA'}
                width={'100%'}
                top={'10%'}
                mode={'outlined'}
                label={'order'}
              />
            </View>
            {/* <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Input
                outline={'#E8E6EA'}
                width={'80%'}
                top={'2%'}
                mode={'outlined'}
                label={'Last name'}
              />
            </View> */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: '4%',
              }}>
              <BasicBtn
                btnText={'Date & Time'}
                icon={'calendar-outline'}
                txtColor={COLORS.primary}
                fontSize={15}
                buttonSize={'100%'}
                viewWidth={'100%'}
                flexDirection={'row-reverse'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                alignSelf={'center'}
                txtLeftMargin={0}
                rightMargin1={-15}
                txtLeftMargin1={0}
                fontStyle={'700'}
                iconSize={21}
                bgcolor={'#EDF9E5'}
                press={() => refRBSheet.current.open()}
              />

              <BottomSheet
                refRBSheets={refRBSheet}
                height={Dimensions.get('window').height / 1.4}>
                <Heading
                  Stylefont={'normal'}
                  Fontsize={14}
                  txtAlign={'center'}
                  Fontweight={'700'}
                  mt={'5%'}
                  Heading={'Birthday'}
                />
                <Calendars />
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    bottom: 20,
                  }}>
                  <ButtonComp
                    // buttonSize={'90%'}
                    // viewWidth={'80%'}
                    btnHeight={56}
                    btnText={'Save'}
                    txtColor={COLORS.white}
                    justify={'center'}
                    align={'center'}
                    fontSize={16}
                    radius={15}
                    fontStyle={'700'}
                    txtwidth={'85%'}
                    press={() => refRBSheet.current.close()}
                  />
                </View>
              </BottomSheet>
            </View>
            <View style={{marginTop: 10}}>
              <BasicBtn
                btnText={'Location'}
                icon={'location-outline'}
                txtColor={COLORS.primary}
                fontSize={15}
                buttonSize={'100%'}
                viewWidth={'100%'}
                flexDirection={'row-reverse'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                alignSelf={'center'}
                txtLeftMargin={0}
                rightMargin1={-15}
                txtLeftMargin1={0}
                fontStyle={'700'}
                iconSize={21}
                bgcolor={'#EDF9E5'}
                // press={() => refRBSheet.current.open()}
              />
            </View>
          </View>
          <Heading
            Fontweight={'700'}
            Fontsize={20}
            mt={'5%'}
            Heading={'Description'}
          />
          <View
            style={{
              // padding: 5,
              // top: 10,
              justifyContent: 'center',
              // width: '90%',
              alignItems: 'center',
              // flexDirection: 'row',
            }}>
            <Input
              outline={'#E8E6EA'}
              width={'100%'}
              top={10}
              mode={'outlined'}
              label={''}
              multiline={true}
              line={3}
            />
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
              btnText={'Place order'}
              txtColor={COLORS.white}
              justify={'center'}
              align={'center'}
              fontSize={16}
              radius={15} 
              fontStyle={'700'}
              txtwidth={'100%'}
              // press={() => navigation.navigate('Createevent')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default AddEvent;

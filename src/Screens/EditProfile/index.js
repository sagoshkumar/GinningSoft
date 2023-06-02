import React, {useRef} from 'react';
import {
  View,
  Image,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';
import {styles} from './style';
import Input from 'src/Components/ReusableComponent/input';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import Heading from 'src/Components/ReusableComponent/Heading';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
import COLORS from 'src/Assets/Style/Color';
import img1 from 'src/Assets/Images/5.png';
import img2 from 'src/Assets/Images/4.png';
import img3 from 'src/Assets/Images/2.png';
import img4 from 'src/Assets/Images/3.png';
import img5 from 'src/Assets/Images/1.png';
import BasicBtn from 'src/Components/ReusableComponent/ButtonBasic';
import {Paragraph, Switch} from 'react-native-paper';
import Calendars from 'src/Components/ReusableComponent/Calendar';
import BottomSheet from 'src/Components/ReusableComponent/BottomSheet';
import TextChip from '../../Components/TextChip';
import {useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default function EditProfile({navigation}) {
  const reducerData = useSelector(state => state);
  const refRBSheet2 = useRef();

  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);
  const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
  const tab = ['Zodiac', 'Pets', 'Smoking'];
  const Zodiac = [
    'Capricorn',
    'Aquarius',
    'Pisces',
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
  ];
  const pets = ['Dog', 'Cat', 'Parrot', 'Fish', 'Reptiles'];
  const smoker = ['Social Smoker', 'Smoker', 'Smoker when drink', 'Non-smoker'];
  const [categoryIndex, setcategoryIndex] = React.useState(0);

  const refRBSheet = useRef();
  const refRBSheet1 = useRef();

  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
  const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);

  const btnPress = () => {
    setcategoryIndex(0);
    refRBSheet.current.open();
  };
  const btnPress1 = () => {
    setcategoryIndex(1);
    refRBSheet.current.open();
  };
  const btnPress2 = () => {
    setcategoryIndex(2);
    refRBSheet.current.open();
  };

  const openGallery = () => {
    let option = {
      include64: true,
      mediaType: 'photo',
    };
    launchImageLibrary(option, res => {
      console.log(res);
      if (res.assets) {
        // setBanner(res.assets[0].uri);
        console.log('Response:', res.assets[0].uri);
        console.log('library Image');
        console.log(res);
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
        // setBanner(res.assets[0].uri);
        console.log('Response:', res.assets[0].uri);
        console.log('lCamera Img');
        console.log(res);
      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };

  return (
    <>
      <SafeArea>
        <View style={{flexGrow: 1, margin: '4%'}}>
          <ScrollView>
            <View style={styles.ContainerfirstBackIcon}>
              <ButtonComp
                mode={'outlined'}
                justify={'center'}
                align={'center'}
                btnHeight={65}
                icon={'chevron-back'}
                radius={15}
                Borderwidth={2}
                topMargin={5}
                press={() => navigation.goBack()}
              />
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={34}
                mt={'5%'}
                ml={'5%'}
                Heading={'Edit Profile'}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View style={styles.containerImageFirst}>
                <Image style={styles.containerImage1} source={img1} />
                <Image style={styles.containerImage1} source={img2} />
              </View>

              <View style={styles.containerImageSecond}>
                <Image style={styles.containerImage} source={img3} />
                <Image style={styles.containerImage} source={img4} />
                <Image style={styles.containerImage} source={img5} />
              </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <InteractParagraph
                pWidth={'80%'}
                Direction={'row'}
                txtAlign={'center'}
                mt={'5%'}
                p={
                  'Add a Video, Video, or loop to get 4% closerto completing your profile and you may even get more likes'
                }
              />
            </View>

            <View style={styles.signUpButton}>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'Add Media'}
                justify={'center'}
                align={'center'}
                fontSize={22}
                radius={15}
                txtColor={COLORS.primary}
                color={'#EDF9E5'}
                topMargin={'5%'}
                fontStyle={'bold'}
                press={() => refRBSheet2.current.open()}
              />
            </View>
            <View>
              <InteractParagraph p={'Name'} fw={'bold'} fs={20} />
            </View>
            <View style={styles.inputMain}>
              <Input outline={'#E8E6EA'} mode={'outlined'} label="Name" />
            </View>
            <View>
              <InteractParagraph mt={'2%'} p={'DOB'} fw={'bold'} fs={20} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: '4%',
              }}>
              <BasicBtn
                btnText={'July 11th, 1995'}
                buttonSize={'100%'}
                viewWidth={'100%'}
                icon={'calendar-outline'}
                txtColor={COLORS.primary}
                fontSize={15}
                flexDirection={'row-reverse'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                alignSelf={'center'}
                txtLeftMargin={0}
                txtLeftMargin1={0}
                fontStyle={'700'}
                iconSize={21}
                bgcolor={COLORS.btn_bgColor}
                press={() => refRBSheet1.current.open()}
              />
              <BottomSheet
                refRBSheets={refRBSheet1}
                height={Dimensions.get('window').height / 1.4}>
                <ScrollView>
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
                      top: 0,
                      bottom: 20,
                    }}>
                    <ButtonComp
                      btnwidth={'90%'}
                      btnHeight={56}
                      btnText={'Save'}
                      txtColor={COLORS.white}
                      justify={'center'}
                      align={'center'}
                      fontSize={16}
                      radius={15}
                      fontStyle={'700'}
                      txtwidth={'100%'}
                      press={() => refRBSheet1.current.close()}
                    />
                  </View>
                </ScrollView>
              </BottomSheet>
            </View>
            <View>
              <InteractParagraph mt={'5%'} p={'Partner'} fw={'bold'} fs={20} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: '4%',
              }}>
              <BasicBtn
                btnText={
                  reducerData?.isDark?.isMatch ? 'Sara Taylor' : 'No Partner'
                }
                viewWidth={'100%'}
                buttonSize={'100%'}
                icon={'chevron-forward'}
                justifyContent={'space-between'}
                fontSize={15}
                fontStyle={'700'}
                iconSize={21}
                press={() =>
                  navigation.navigate(
                    reducerData?.isDark?.isMatch ? 'partnerInfo' : 'spouse',
                  )
                }
              />
            </View>
            <View style={{marginTop: 20}}>
              <InteractParagraph p={'About Me'} fw={'bold'} fs={20} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: '4%',
              }}>
              <BasicBtn
                btnText={'About Me'}
                // viewWidth={'78%'}
                viewWidth={'100%'}
                buttonSize={'100%'}
                icon={'chevron-forward'}
                justifyContent={'space-between'}
                txtColor={reducerData.isDark.isdark ? '#fff' : '#000'}
                fontSize={15}
                iconSize={21}
              />
            </View>
            <View>
              <InteractParagraph
                mt={'4%'}
                p={'Life Style'}
                fw={'bold'}
                fs={20}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: '4%',
              }}>
              <BasicBtn
                btnText={'Zodiac'}
                viewWidth={'100%'}
                buttonSize={'100%'}
                // viewWidth={'76%'}
                icon={'chevron-forward'}
                justifyContent={'space-between'}
                txtColor={reducerData.isDark.isdark ? '#fff' : '#000'}
                fontSize={15}
                iconSize={21}
                press={btnPress}
              />
              <BottomSheet
                refRBSheets={refRBSheet}
                height={Dimensions.get('window').height / 1.4}>
                <ScrollView>
                  <Heading
                    Stylefont={'normal'}
                    Fontsize={24}
                    txtAlign={'center'}
                    Fontweight={'700'}
                    mt={'1%'}
                    Heading={'Filters'}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginLeft: '10%',
                      marginTop: '8%',
                      marginRight: '10%',
                      // margin: '10%',
                    }}>
                    {tab.map((item, index) => {
                      return (
                        <Pressable
                          key={index}
                          onPress={() => setcategoryIndex(index)}>
                          <Paragraph
                            // style={[
                            //   {color: COLORS.txtColor},
                            //   categoryIndex == index && {
                            //     color: COLORS.dark,
                            //     fontWeight: '700',
                            //   },
                            // ]}
                            style={
                              categoryIndex == index
                                ? {
                                    color: reducerData?.isDark?.isdark
                                      ? COLORS.white
                                      : COLORS.dark,
                                    fontWeight: '700',
                                  }
                                : {color: '#323755'}
                            }>
                            {item}
                          </Paragraph>
                        </Pressable>
                      );
                    })}
                    {/* {tab[0] ? (
                  <InteractParagraph
                    fw={'700'}
                    p={tab[0]}
                    color={COLORS.dark}
                  />
                ) : (
                  <InteractParagraph p={tab[0]} color={COLORS.txtColor} />
                )}
                <InteractParagraph p={tab[1]} color={COLORS.txtColor} />
                <InteractParagraph p={tab[2]} /> */}
                  </View>
                  <View style={{marginTop: 10}}>
                    {categoryIndex === 0 ? (
                      // <TextChip title={'Capricorn'} titleSize={14} />
                      <FlatList
                        numColumns={2}
                        data={Zodiac}
                        renderItem={({item, index}) => {
                          return (
                            <View
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginLeft: '5%',
                                // alignSelf: 'center',
                                // alignContent: 'center',
                              }}
                              key={index}>
                              <TextChip
                                setcategoryIndex={setcategoryIndex}
                                categoryIndex={categoryIndex}
                                title={item}
                                titleSize={14}
                              />
                            </View>
                          );
                        }}
                      />
                    ) : (
                      <></>
                    )}
                    {categoryIndex === 1 ? (
                      // <TextChip title={'Capricorn'} titleSize={14} />
                      <FlatList
                        numColumns={2}
                        data={pets}
                        renderItem={({item, index}) => {
                          return (
                            <View
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'center',

                                marginLeft: '5%',
                                // alignSelf: 'center',
                                // alignContent: 'center',
                              }}
                              key={index}>
                              <TextChip title={item} titleSize={14} />
                            </View>
                          );
                        }}
                      />
                    ) : (
                      <></>
                    )}
                    {categoryIndex === 2 ? (
                      // <TextChip title={'Capricorn'} titleSize={14} />
                      <FlatList
                        numColumns={2}
                        data={smoker}
                        renderItem={({item, index}) => {
                          return (
                            <View
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'center',

                                marginLeft: '5%',
                                // alignSelf: 'center',
                                // alignContent: 'center',
                              }}
                              key={index}>
                              {/* <TextChip title={item} titleSize={12} /> */}
                              <TextChip
                                setcategoryIndex={setcategoryIndex}
                                categoryIndex={categoryIndex}
                                refRBSheet={refRBSheet}
                                title={item}
                                titleSize={12}
                              />
                            </View>
                          );
                        }}
                      />
                    ) : (
                      <></>
                    )}
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'row',
                        marginTop: 10,
                        // marginBottom: 20,
                      }}>
                      <ButtonComp
                        btnwidth={'90%'}
                        btnHeight={56}
                        btnText={'Skip'}
                        txtColor={COLORS.primary}
                        justify={'center'}
                        align={'center'}
                        fontSize={16}
                        color={'#EDF9E5'}
                        radius={15}
                        fontStyle={'700'}
                        txtwidth={'100%'}
                        press={() =>
                          setcategoryIndex(
                            categoryIndex === 2
                              ? refRBSheet.current.close()
                              : categoryIndex + 1,
                          )
                        }
                      />
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'row',
                        marginTop: 10,
                        marginBottom: 30,
                      }}>
                      <ButtonComp
                        btnwidth={'90%'}
                        btnHeight={56}
                        btnText={'Continue'}
                        txtColor={COLORS.white}
                        justify={'center'}
                        align={'center'}
                        fontSize={16}
                        radius={15}
                        fontStyle={'700'}
                        txtwidth={'100%'}
                        press={() =>
                          setcategoryIndex(
                            categoryIndex === 2
                              ? refRBSheet.current.close()
                              : categoryIndex + 1,
                          )
                        }
                      />
                    </View>
                  </View>
                </ScrollView>
              </BottomSheet>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: '4%',
              }}>
              <BasicBtn
                btnText={'Pet'}
                viewWidth={'100%'}
                buttonSize={'100%'}
                // viewWidth={'74.5%'}
                icon={'chevron-forward'}
                justifyContent={'space-between'}
                txtColor={reducerData.isDark.isdark ? '#fff' : '#000'}
                fontSize={15}
                iconSize={21}
                press={btnPress1}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: '4%',
              }}>
              <BasicBtn
                btnText={'Smoking'}
                viewWidth={'100%'}
                buttonSize={'100%'}
                icon={'chevron-forward'}
                // viewWidth={'76.99%'}
                justifyContent={'space-between'}
                txtColor={reducerData.isDark.isdark ? '#fff' : '#000'}
                fontSize={15}
                iconSize={21}
                press={btnPress2}
              />
            </View>
            <View>
              <InteractParagraph
                mt={'5%'}
                p={'Living City'}
                fw={'bold'}
                fs={20}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: '4%',
              }}>
              <BasicBtn
                btnText={'Texas'}
                icon={'chevron-forward'}
                justifyContent={'space-between'}
                viewWidth={'100%'}
                buttonSize={'100%'}
                txtColor={reducerData.isDark.isdark ? '#fff' : '#000'}
                fontSize={15}
                iconSize={21}
              />
            </View>
            <View>
              <InteractParagraph mt={'5%'} p={'Gender'} fw={'bold'} fs={20} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: '4%',
              }}>
              <BasicBtn
                btnText={'Men'}
                icon={'chevron-forward'}
                viewWidth={'100%'}
                buttonSize={'100%'}
                justifyContent={'space-between'}
                txtColor={reducerData.isDark.isdark ? '#fff' : '#000'}
                fontSize={15}
                iconSize={21}
              />
            </View>
            <View>
              <InteractParagraph
                mt={'5%'}
                p={'Control Your Profile'}
                fw={'bold'}
                fs={20}
              />
            </View>
            <View style={styles.btnCOntrol}>
              <View style={styles.paragraphCUstomButton}>
                <Paragraph
                  style={{
                    width: '80%',
                    // flexDirection: 'row',
                    marginLeft: '5%',
                    marginTop: '4%',
                    fontSize: 16,
                    color: reducerData.isDark.isdark
                      ? COLORS.white
                      : COLORS.dark,
                  }}>
                  Don't Show My Age
                </Paragraph>
                <Switch
                  style={styles.radioBtn}
                  color={COLORS.primary}
                  value={isSwitchOn1}
                  onValueChange={onToggleSwitch1}
                />
              </View>
            </View>

            <View style={styles.btnCOntrol}>
              <View style={styles.paragraphCUstomButton}>
                <Paragraph
                  style={{
                    // width: '80%',
                    // flexDirection: 'row',
                    marginLeft: '5%',
                    marginTop: '4%',
                    fontSize: 16,
                    color: reducerData.isDark.isdark
                      ? COLORS.white
                      : COLORS.dark,
                  }}>
                  Don’t Show My Distance
                </Paragraph>
                <Switch
                  style={styles.radioBtn}
                  color={COLORS.primary}
                  value={isSwitchOn2}
                  onValueChange={onToggleSwitch2}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <BottomSheet refRBSheets={refRBSheet2} height={160}>
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
    </>
  );
}

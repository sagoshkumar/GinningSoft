import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  DevSettings,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Swiper from 'react-native-deck-swiper';
import CardSwipe from '../../Components/CardSwipe/index';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import Heading from '../../Components/ReusableComponent/Heading';
import ButtonComp from '../../Components/ReusableComponent/Button';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './AppStyles';
import {Card, IconButton, OverlayLabel} from '../../Components/TinderSlider';
import {PhotoCards} from '../../Assets/Constants/';
import BottomSheet from 'src/Components/ReusableComponent/BottomSheet';
import Filters from '../../Components/Filter';
import {yourProfile} from '../../Store/slices';
import SecondFilters from '../../Components/SecondFilter';
import BoostPopup from '../../Components/BoostPopup';
// import {DevSettings} from 'react-native';

const familyIcon = '../../Assets/Images/TinderSLider/Shy-rafiki.png';

const TinderCard = ({navigation}) => {
  const useSwiper = useRef();
  const sliderIndex = useRef(0);
  const [index, setIndex] = useState(0);
  const reducerData = useSelector(state => state);
  const handleOnSwipedLeft = () => useSwiper.current.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.current.swipeTop();
  const handleOnSwipedRight = () => useSwiper.current.swipeRight();
  const refRBSheet = useRef();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const [checkIndex, setCheckIndex] = useState(0);

  const reload = () => {
    // sliderIndex.current(0);
  };
  const height = Dimensions.get('window').height;
  const FilterHeight = height / 1.12;

  const btn = () => {
    dispatch(yourProfile(true));
    navigation.navigate('Profiledetails');
  };
  return (
    <SafeArea>
      <BoostPopup
        Modal={showModal}
        style={styles.Image}
        hideModal={hideModal}
        setVisible={setVisible}
        visible={visible}
      />

      <View
        style={{
          flexGrow: 1,
          margin: '4%',
        }}>
        <View style={{flexWrap: 'wrap'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // alignContent: 'space-between',
              marginLeft: 5,

              // backgroundColor: 'blue',
            }}>
            {/* <TouchableOpacity onPress={navigation.navigate('Profiledetails')}> */}
            <View>
              <InteractAvatar size={58} press={btn} />
            </View>
            {/* </TouchableOpacity> */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('src/Assets/Images/logo.png')}
                />
              </TouchableOpacity>
              <Heading
                Fontsize={24}
                Heading={'Interact'}
                txtAlign={'center'}
                Fontweight={'700'}
              />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Pressable>
                <Material
                  name="bell-badge-outline"
                  size={30}
                  color={COLORS.primary}
                />
              </Pressable>
              <Pressable onPress={() => refRBSheet.current.open()}>
                <View
                  style={{
                    borderWidth: 1,
                    height: 45,
                    width: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: COLORS.border_color,
                    borderRadius: 15,
                    marginLeft: 5,
                  }}>
                  <Ionicons
                    name="options-outline"
                    size={25}
                    color={COLORS.primary}
                  />
                </View>
              </Pressable>
            </View>
            <BottomSheet refRBSheets={refRBSheet} height={FilterHeight}>
              <ScrollView>
                <SecondFilters />
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 20,
                  }}>
                  <ButtonComp
                    btnwidth={'87%'}
                    btnHeight={56}
                    btnText={'Continue'}
                    txtColor={COLORS.white}
                    justify={'center'}
                    align={'center'}
                    fontSize={16}
                    radius={15}
                    fontStyle={'700'}
                    txtwidth={'100%'}
                    press={() => refRBSheet.current.close()}
                  />
                </View>
              </ScrollView>
            </BottomSheet>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <Swiper
            ref={useSwiper}
            containerStyle={styles.container}
            cards={PhotoCards}
            renderCard={card => (
              <Card card={card} sliderIndex={sliderIndex} index={index} />
            )}
            cardIndex={0}
            backgroundColor={
              reducerData?.isDark?.isdark ? COLORS.darkMode : COLORS.bgcolor
            }
            onSwiped={cardIndex => {
              setIndex(cardIndex);
            }}
            stackSize={3}
            swipeAnimationDuration={650}
            stackSeparation={-10}
            swipeBack={55}
            // stackAnimationFriction={54}
            stackAnimationTension={0}
            // Andoomi
            // swipeBack={true}
            // stackAnimationFriction={0}
            // zoomFriction={8}
            stackScale={0}
            // secondCardZoom={1.27}
            disableBottomSwipe={true}
            // inputOverlayLabelsOpacityRangeY={[80008]}
            outputRotationRange={['-30deg', '0deg', '30deg']}
            infinite={true}
            // onTapCard={index => console.log(index)}
            showSecondCard={true}
            overlayOpacityHorizontalThreshold={100 / 2}
            overlayOpacityVerticalThreshold={100 / 2}
            // outputCardOpacityRangeY={[0.9, 823, 50, 621, 0.8]}
            overlayLabels={{
              left: {
                title: 'NOPE',
                element: (
                  <IconButton
                    size={40}
                    name="close"
                    onPress={handleOnSwipedLeft}
                    color={COLORS.darkGreen}
                    backgroundColor={COLORS.white}
                  />
                ),
                style: {
                  wrapper: styles.overlayWrapper,
                },
              },
              top: {
                title: 'NOPE',
                element: (
                  <IconButton
                    size={40}
                    name="star"
                    onPress={handleOnSwipedTop}
                    color={COLORS.darkGreen}
                    backgroundColor={COLORS.white}
                  />
                ),
                style: {
                  wrapper: styles.overlayWrapper,
                },
              },
              right: {
                title: 'LIKE',
                element: (
                  <IconButton
                    size={40}
                    name="heart"
                    onPress={handleOnSwipedRight}
                    color={COLORS.darkGreen}
                    backgroundColor={COLORS.white}
                  />
                ),
                style: {
                  wrapper: {
                    ...styles.overlayWrapper,
                    // alignItems: 'center',
                    marginLeft: 1,
                  },
                },
              },
            }}
          />
          {/* </TouchableOpacity> */}
        </View>
        <View style={styles.buttonsContainer}>
          <IconButton
            name="reload1"
            onPress={reload}
            color={COLORS.lightGreen}
            backgroundColor={COLORS.white}
          />
          <IconButton
            size={30}
            name="close"
            onPress={handleOnSwipedLeft}
            color={COLORS.white}
            backgroundColor={COLORS.darkGreen}
          />
          <IconButton
            name="star"
            onPress={handleOnSwipedTop}
            color={COLORS.lightGreen}
            backgroundColor={COLORS.white}
          />
          <IconButton
            size={30}
            name="heart"
            onPress={handleOnSwipedRight}
            color={COLORS.white}
            backgroundColor={COLORS.darkGreen}
          />
          {/* <IconButton
            sizes={30}
            IconName="flash"
            onPress={handleOnSwipedLeft}
            colors={COLORS.white}
            backgroundColor={COLORS.darkGreen}
          /> */}
          {/* <Pressable onPress={() => navigation.navigate('Match')}> */}
          <Pressable
            onPress={showModal}
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: 'black',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowRadius: 6,
              shadowOpacity: 0.3,
              elevation: 2,
              padding: 15,
            }}>
            <Entypo name="flash" size={20} style={{color: COLORS.lightGreen}} />
          </Pressable>
        </View>
        {/* <Portal>
          <Modal
            style={{height: '90%'}}
            visible={visible}
            onDismiss={hideModal}>
            <Button onPress={hideModal}>x</Button>
            <Image
              style={styles.image}
              source={require(familyIcon)}
              resizeMode="contain"
              height="30%"
              width="100%"
            />
            <Modal.Title>Alert</Modal.Title>
            <Modal.Content>
              <Paragraph>This is simple Modal</Paragraph>
            </Modal.Content>
            <Modal.Actions></Modal.Actions>
          </Modal>
        </Portal> */}
      </View>
    </SafeArea>
  );
};

export default TinderCard;

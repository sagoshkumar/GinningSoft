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

function Matches({navigation}) {
  const reducerData = useSelector(state => state);

  // const [hello, setHello] = useState(true);
  const dispatch = useDispatch();

  const btn = () => {
    dispatch(yourProfile(false));
    navigation.navigate('Mainprofile');
  };

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

  return (
    <SafeArea>
      {reducerData?.isDark?.isMatch ? (
        <ScrollView>
        </ScrollView>
      ) : (
        <View
          style={{
            // flex: 1,
            flexGrow: 1,
            margin: '4%',
            // backgroundColor: 'blue',
          }}>
          <View style={{alignItems: 'center'}}>
            <Heading
              Fontsize={34}
              Heading={'Transactions'}
              txtAlign={'center'}
              Fontweight={'700'}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
            }}>
            <InteractParagraph
              mt={10}
              fs={17}
              fw={'normal'}
              lh={25}
              txtAlign={'center'}
              p={
                'All transactions will be displayed here'
              }
            />
          </View>
          {/* </View> */}
        </View>
      )}
    </SafeArea>
  );
}

export default Matches;

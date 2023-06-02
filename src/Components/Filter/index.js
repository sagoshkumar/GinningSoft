import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../ReusableComponent/Button';
import Heading from '../ReusableComponent/Heading';
import Input from '../ReusableComponent/input';
import Bars from 'src/Components/ReusableComponent/Bars';
import InteractParagraph from '../ReusableComponent/Paragraph';
import InteractChip from 'src/Components/Chip';
import {Chip} from 'react-native-paper';
import BasicBtn from '../ReusableComponent/ButtonBasic';

function Filters() {
  const width = Dimensions.get('window').width;
  const center = width / 5;

  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [low1, setLow1] = useState(0);
  const [high1, setHigh1] = useState(100);
  const emptyIcon = () => null;
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked1, setChecked1] = React.useState(true);

  const tap = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  const tap1 = () => {
    if (checked2) {
      setChecked2(false);
    } else {
      setChecked2(true);
    }
  };
  const tap2 = () => {
    if (checked1) {
      setChecked1(false);
    } else {
      setChecked1(true);
    }
  };

  return (
    <View style={{margin: '4%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          //   alignSelf: 'center',
          //   alignContent: 'center',
          //   //   flex: 1,
        }}>
        <View style={{width: center}}></View>
        <View>
          <Heading
            Fontsize={24}
            // txtAlign={'center'}
            Fontweight={'700'}
            // mt={'%'}
            Heading={'Filters'}
          />
        </View>
        {/* <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}> */}
        <ButtonComp
          mode={'text'}
          btnHeight={40}
          //   txtRightMargin={16}
          txtLeftMargin={0}
          btnText={'Clear'}
          //   align={'flex-end'}
          fontStyle={'700'}
          fontSize={16}

          //   press={() => navigation.navigate('main')}
        />
        {/* </View> */}
      </View>
      <Heading
        Stylefont={'normal'}
        Fontweight={'700'}
        Fontsize={16}
        txtAlign={'left'}
        ml={'5%'}
        mt={'5%'}
        p={10}
        Heading={'Interested In'}
      />
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
          txtColor={COLORS.primary}
          justifyContent={'space-between'}
          fontSize={15}
          fontStyle={'700'}
          viewWidth={'97%'}
          iconSize={21}
          // bgcolor={COLORS.bgcolor}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Heading
          Stylefont={'normal'}
          Fontweight={'700'}
          Fontsize={16}
          txtAlign={'left'}
          ml={'5%'}
          mt={'5%'}
          p={10}
          Heading={'Distance'}
        />
        <Heading
          Stylefont={'normal'}
          //   Fontweight={'700'}
          Fontsize={14}
          txtAlign={'left'}
          mx={20}
          mt={'7%'}
          p={10}
          Heading={`${low} Km`}
        />
      </View>
      <View
        style={{
          overflow: 'hidden',
          width: '85%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Bars
          range={true}
          txt={' km'}
          low={low}
          high={high}
          setLow={setLow}
          setHigh={setHigh}
        />
      </View>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Heading
          Stylefont={'normal'}
          Fontweight={'700'}
          Fontsize={16}
          txtAlign={'left'}
          ml={'5%'}
          mt={'5%'}
          p={10}
          Heading={'Couple With Kids'}
        />
        <Heading
          Stylefont={'normal'}
          //   Fontweight={'700'}
          Fontsize={14}
          txtAlign={'left'}
          mx={20}
          mt={'5%'}
          p={10}
          Heading={'Without'}
        />
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 30,
        }}>
        {/* <InteractChip titleSize={14} title={'With'} /> */}
        <Chip
          mode="outlined"
          icon={emptyIcon}
          style={{
            backgroundColor: checked ? COLORS.primary : COLORS.bgcolor,
            height: 45,
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            width: 80,
          }}
          selected={checked}
          selectedColor={checked ? '#fff' : '#000'}
          onPress={tap}>
          <InteractParagraph
            color={checked ? '#fff' : COLORS.dark}
            fs={12}
            txtAlign={'center'}
            p={'Families'}
          />
        </Chip>
        <Chip
          mode="outlined"
          icon={emptyIcon}
          style={{
            backgroundColor: checked1 ? COLORS.primary : COLORS.bgcolor,
            height: 45,
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            width: 80,
          }}
          selected={checked1}
          selectedColor={checked1 ? '#fff' : '#000'}
          onPress={tap2}>
          <InteractParagraph
            color={checked1 ? '#fff' : COLORS.dark}
            fs={12}
            txtAlign={'center'}
            p={'Friends'}
          />
        </Chip>
        <Chip
          mode="outlined"
          icon={emptyIcon}
          style={{
            backgroundColor: checked2 ? COLORS.primary : COLORS.bgcolor,
            height: 45,
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            width: 115,
          }}
          selected={checked2}
          selectedColor={checked2 ? '#fff' : '#000'}
          onPress={tap1}>
          <InteractParagraph
            color={checked2 ? '#fff' : COLORS.dark}
            fs={11}
            txtAlign={'center'}
            p={'Business Partners'}
          />
        </Chip>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Heading
          Stylefont={'normal'}
          Fontweight={'700'}
          Fontsize={16}
          txtAlign={'left'}
          ml={'5%'}
          mt={'5%'}
          p={10}
          Heading={'Preferences'}
        />
        <Heading
          Stylefont={'normal'}
          //   Fontweight={'700'}
          Fontsize={14}
          txtAlign={'left'}
          mx={20}
          mt={'5%'}
          p={10}
          Heading={'5+'}
        />
      </View>
      <View
        style={{
          height: 58,
          justifyContent: 'space-between',
          overflow: 'hidden',
          borderColor: COLORS.border_color,
          borderRadius: 15,
          borderWidth: 1,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <InteractParagraph
          p={'Food, Dating, 3+..'}
          Padding={15}
          Fontsize={14}
        />
        <ButtonComp
          mode={'text'}
          justify={'center'}
          //   Btnicon={'chevron-right'}
          align={'center'}
          btnText={'Edit >'}
          fontStyle={'bold'}
          fontSize={14}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Heading
          Stylefont={'normal'}
          Fontweight={'700'}
          Fontsize={16}
          txtAlign={'left'}
          ml={'5%'}
          mt={'5%'}
          p={10}
          Heading={'Age'}
        />
        <Heading
          Stylefont={'normal'}
          //   Fontweight={'700'}
          Fontsize={14}
          txtAlign={'left'}
          mx={20}
          mt={'5%'}
          p={10}
          Heading={`${low1} - ${high1}`}
        />
      </View>
      <View
        style={{
          overflow: 'hidden',
          width: '85%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Bars
          range={false}
          low={low1}
          high={high1}
          setLow={setLow1}
          setHigh={setHigh1}
        />
      </View>
    </View>
  );
}

export default Filters;

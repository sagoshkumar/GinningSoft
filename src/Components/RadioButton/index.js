import React, {useState} from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {Pressable} from 'react-native';

function RadioBtn() {
  const reducerData = useSelector(state => state);
  const [isdark, setisDark] = useState(reducerData?.isDark?.isdark);
  const [checked, setChecked] = useState('');

  return (
    <View style={styles.borderView}>
      <Pressable
        style={checked === 'first' ? styles.Mainborder2 : styles.Mainborder}
        onPress={() => setChecked('first')}>
        {/* <View> */}
        <Text
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
          style={
            checked === 'first' ? styles.InnerBorder2 : styles.InnerBorder
          }>
          Man
        </Text>
        <RadioButton.Android
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
          color={COLORS.white}
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
        />
        {/* </View> */}
      </Pressable>
      <Pressable
        style={checked === 'second' ? styles.Mainborder2 : styles.Mainborder}
        onPress={() => setChecked('second')}>
        <Text
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
          style={
            checked === 'second' ? styles.InnerBorder2 : styles.InnerBorder
          }>
          Women
        </Text>
        <RadioButton.Android
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
          color={COLORS.white}
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
        />
      </Pressable>
      <Pressable
        onPress={() => setChecked('third')}
        style={checked === 'third' ? styles.Mainborder2 : styles.Mainborder}>
        <Text
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
          style={
            checked === 'third' ? styles.InnerBorder2 : styles.InnerBorder
          }>
          Choose another
        </Text>
        <RadioButton.Android
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('third')}
          color={COLORS.white}
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
        />
      </Pressable>
    </View>
  );
}

export default RadioBtn;

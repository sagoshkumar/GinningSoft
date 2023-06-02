import React from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import {useSelector} from 'react-redux';
import COLORS from 'src/Assets/Style/Color';
import Heading from '../Heading';

export default function Calendars(props) {
  const reducerData = useSelector(state => state);

  return (
    <DatePicker
      options={{
        backgroundColor: reducerData?.isDark?.isdark
          ? COLORS.darkMode
          : COLORS.bgcolor,
        textHeaderColor: COLORS.primary,
        textDefaultColor: reducerData?.isDark?.isdark
          ? COLORS.white
          : COLORS.dark,
        selectedTextColor: COLORS.white,
        mainColor: COLORS.primary,
        textSecondaryColor: reducerData?.isDark?.isdark
          ? COLORS.white
          : COLORS.dark,
        // textHeaderFontSize:34
        borderColor: 'transparent',
        textFontSize: 14,

        // borderColor: 'rgba(122, 146, 165, 0.1)',
      }}
      current="2020-07-13"
      selected="2020-07-23"
      mode="calendar"
    />
  );
}

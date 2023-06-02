import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import Input from 'src/Components/ReusableComponent/input';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {styles} from './style';
import * as yup from 'yup';
import {Formik} from 'formik';

let EmailValidationScheme = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required '),
});
export default function ViaEmail({navigation}) {
  return (
    <Formik
      initialValues={{email: ''}}
      validateOnMount={true}
      onSubmit={values => console.log(values)}
      validationSchema={EmailValidationScheme}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <SafeArea>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View
              style={{
                justifyContent: 'space-evenly',
                flexGrow: 1,
                margin: '4%',
              }}>
              <View>
                <ButtonComp
                  mode={'outlined'}
                  justify={'center'}
                  align={'flex-start'}
                  btnHeight={65}
                  icon={'chevron-back'}
                  radius={15}
                  Borderwidth={2}
                  topMargin={5}
                  press={() => navigation.goBack()}
                />
              </View>
              <View>
                <Heading
                  Stylefont={'normal'}
                  Fontweight={'700'}
                  Fontsize={34}
                  mt={'10%'}
                  // p={10}
                  lh={40}
                  Heading={'Via Email'}
                />
              </View>
              <View style={{justifyContent: 'space-between', flex: 1}}>
                <View style={{marginTop: 20}}>
                  <Input
                    Onchange={handleChange('email')}
                    Onblur={handleBlur('email')}
                    Value={values.email}
                    Keyboard={'email-address'}
                    outline={'#E8E6EA'}
                    mode={'outlined'}
                    label={'Email address'}
                  />
                  {errors.email && touched.email && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'red',
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 5,
                      }}>
                      {errors.email}
                    </Text>
                  )}
                </View>

                <View>
                  <ButtonComp
                    btnwidth={'100%'}
                    btnHeight={56}
                    btnText={'Send Invite'}
                    justify={'center'}
                    align={'center'}
                    txtwidth={'100%'}
                    fontSize={16}
                    radius={15}
                    color={isValid ? COLORS.primary : COLORS.border_color}
                    enable={!isValid}
                    txtColor={COLORS.white}
                    //press={() => navigation.navigate('successEmail')}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeArea>
      )}
    </Formik>
  );
}

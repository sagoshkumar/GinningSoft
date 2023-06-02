import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './style';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import Input from 'src/Components/ReusableComponent/input';
import {ScrollView} from 'react-native-gesture-handler';
import * as yup from 'yup';
import {Formik} from 'formik';

let emailValidationScheme = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required '),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required ')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

export default function Email({navigation}) {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      onSubmit={values => console.log(values)}
      validationSchema={emailValidationScheme}>
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
                margin: '4%',
                justifyContent: 'space-between',
                flexGrow: 1,
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
                  press={() => navigation.goBack()}
                />
              </View>

              <View>
                <Heading
                  Stylefont={'normal'}
                  Fontweight={'700'}
                  Fontsize={34}
                  mt={'10%'}
                  // ml={'10%'}
                  // p={10}
                  lh={40}
                  Heading={'My email'}
                />
              </View>

              <View>
                {/* <Text style={styles.ContainerMyEmailDescription}>
                        
                    </Text> */}
                <InteractParagraph
                  pWidth={'100%'}
                  Direction={'row'}
                  pAlign={'center'}
                  txtAlign={'justify'}
                  // lh={30}
                  p={
                    'Please enter your valid email address. We will send you a 4-digit code to verify your account.'
                  }
                />
              </View>
              <View style={{justifyContent: 'space-between', flexGrow: 1}}>
                <View style={{marginTop: 30}}>
                  <Input
                    Onchange={handleChange('email')}
                    Onblur={handleBlur('email')}
                    Value={values.email}
                    Keyboard={'email-address'}
                    outline={'#E8E6EA'}
                    mode={'outlined'}
                    label="Email address"
                  />
                  {errors.email && touched.email && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'red',
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 15,
                      }}>
                      {errors.email}
                    </Text>
                  )}
                  <Input
                    Onchange={handleChange('password')}
                    Onblur={handleBlur('password')}
                    Value={values.password}
                    Pass={true}
                    outline={'#E8E6EA'}
                    mode={'outlined'}
                    label="Password"
                    // placeholder={'eg:Abc@'}
                  />
                  {errors.password && touched.password && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'red',
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 15,
                      }}>
                      {errors.password}
                    </Text>
                  )}
                </View>

                <View>
                  <ButtonComp
                    btnwidth={'100%'}
                    btnHeight={56}
                    btnText={'Sign up'}
                    justify={'center'}
                    align={'center'}
                    fontSize={16}
                    radius={15}
                    color={isValid ? COLORS.primary : COLORS.border_color}
                    enable={!isValid}
                    txtColor={COLORS.white}
                    // press={() => navigation.navigate('verifyEmail')}
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

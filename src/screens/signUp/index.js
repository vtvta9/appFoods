import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Input from '../../components/input'
import ButtonCustomize from '../../components/button'
import colors from '../../assets/themes/colors'
import {Formik} from 'formik'
import auth from '@react-native-firebase/auth'

const SignUpScreen = ({navigation}) => {
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
    const initialValues = {phone_number: '', name: '', email: '', passWord: ''};
    const signUp = async(data) =>{
        const {email, passWord} = data;
        try{
            await auth().createUserWithEmailAndPassword(email, passWord);
            navigation.navigate('SignIn');
        }
        catch(err){
            if(err.code === 'auth/email-already-n-use'){
                Alert.alert(
                    'That email address is already'
                )
            }
            else{
                Alert.alert(
                    err.code
                )
            }
        }
    }
    return (
        <View style={{width: '100%', padding: 10, justifyContent: 'space-around', height: '100%'}}>
            <Text style={{fontSize: 16, color: colors.orange}}>Sign Up</Text>
            <Text style={{fontSize: 13, color: colors.black, textAlign: 'center'}}>Now on in XpressFood?</Text>
                <Formik
                    initialValues={{initialValues}}
                    onSubmit={(value) => signUp(value)}
                >
                    {(props) => 
                        <View>
                            <Input
                                placeholder='Email'
                                width='100%'
                                height={40}
                                borderWidth={1}
                                padding={10}
                                bg={colors.white}
                                color={colors.black}
                                borderRadius={5}
                                borderColor={colors.sliver}
                                marginVertical={10}
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                            />
                            <Input
                                placeholder='Name'
                                width='100%'
                                height={40}
                                borderWidth={1}
                                padding={10}
                                bg={colors.white}
                                color={colors.black}
                                borderRadius={5}
                                borderColor={colors.sliver}
                                marginVertical={10}
                                onChangeText={props.handleChange('name')}
                                value={props.values.name}
                            />
                            <Input
                                placeholder='Phone'
                                width='100%'
                                height={40}
                                borderWidth={1}
                                padding={10}
                                bg={colors.white}
                                color={colors.black}
                                borderRadius={5}
                                borderColor={colors.sliver}
                                marginVertical={10}
                                keyboardType='number-pad'
                                onChangeText={props.handleChange('phone_number')}
                                value={props.values.phone_number}
                            />
                            <Input
                                placeholder='PassWord'
                                width='100%'
                                height={40}
                                borderWidth={1}
                                padding={10}
                                bg={colors.white}
                                color={colors.black}
                                borderRadius={5}
                                borderColor={colors.sliver}
                                marginVertical={10}
                                icon={isSecureTextEntry ? 'eye' : 'eye-remove'}
                                secureTextEntry
                                isSecureTextEntry={isSecureTextEntry}
                                setIsSecureTextEntry={setIsSecureTextEntry}
                                onChangeText={props.handleChange('passWord')}
                                value={props.values.passWord}
                            />
                            <Input
                                placeholder='Confirm PassWord'
                                width='100%'
                                height={40}
                                borderWidth={1}
                                padding={10}
                                bg={colors.white}
                                color={colors.black}
                                borderRadius={5}
                                borderColor={colors.sliver}
                                marginVertical={10}
                                icon={isSecureTextEntry ? 'eye' : 'eye-remove'}
                                secureTextEntry
                                isSecureTextEntry={isSecureTextEntry}
                                setIsSecureTextEntry={setIsSecureTextEntry}
                                // onChangeText={props.handleChange('passWord')}
                                // value={props.values.passWord}
                            />
                            <Text style={{fontSize: 13, color: colors.black, textAlign: 'center', padding: 20}}>By creating or logging into an account you are agreeing with our Tems & Conditions and Privacy Statement</Text>
                            <ButtonCustomize
                                onPress={() => props.handleSubmit()}
                                title='CREATE MY ACCOUNT'
                                bg={colors.orange}
                                color={colors.white}
                                width='100%'
                                height={40}
                                fontSize={15}
                                borderRadius={7}
                                marginVertical={10}
                            />
                        </View>
                    }
                </Formik>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black, textAlign: 'center', padding: 10}}>OR</Text>
                <Text 
                    onPress={() => navigation.navigate('SignIn')}
                    style={{fontSize: 13, color: colors.black, textAlign: 'center', padding: 10}}
                >
                        Already have an account with XpressFood
                </Text>
            </View>
        
    )
}

export default SignUpScreen
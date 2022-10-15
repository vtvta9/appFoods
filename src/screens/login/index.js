import { View, Text, Alert } from 'react-native'
import React from 'react'
import Input from '../../components/input'
import ButtonCustomize from '../../components/button'
import colors from '../../assets/themes/colors'
import { useState, useContext } from 'react'
import {Formik} from 'formik'
import auth from '@react-native-firebase/auth'
import { GlobalContext } from '../../context/Provider'

const SignInScreen = ({navigation}) => {
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
    const {dispatchSignedIn} = useContext(GlobalContext);
    const signIn = async(data) =>{
        dispatchSignedIn({type: 'UPDATE_SIGNIN', payload: {userToken: 'singed-in'}})
        // const {email, passWord} = data;
        // try{
        //     const user = await auth().signInWithEmailAndPassword(email, passWord);
        //     if(user){
        //         // navigation.navigate('ClientTab');
        //         dispatchSignedIn({type: 'UPDATE_SIGNIN', payload: {userToken: 'singed-in'}})
        //         console.log('login');
        //     }
        // }
        // catch(err){
        //     Alert.alert(
        //         err.name,
        //         err.message,
        //     )
        // }
    }
    return (
        <View style={{width: '100%', padding: 10, justifyContent: 'space-around', height: '100%'}}>
            <Text style={{fontSize: 16, color: colors.orange}}>Sign In</Text>
            <Text style={{fontSize: 13, color: colors.black, textAlign: 'center', padding: 20}}>Please enter the email and password registered with your account</Text>
            <Formik
                initialValues={{email: '', passWord: ''}}
                onSubmit={(value) => signIn(value)}
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
                        <ButtonCustomize
                            onPress={() => props.handleSubmit()}
                            title='SIGN IN'
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
            <View style={{width:'100%', paddingVertical: 10, borderBottomWidth: 1, bordercolor: colors.sliver}}>
                <Text style={{textAlign: 'center',}}>Forgot Password?</Text>
            </View>
            <Text style={{paddingTop: 20, textAlign: 'center', color: colors.black}}>OR</Text>
            <ButtonCustomize
                title='Sign in with Facebook'
                bg={colors.blue}
                color={colors.white}
                width='100%'
                height={40}
                fontSize={15}
                borderRadius={7}
                marginVertical={10}
                icon={require(`../../assets/images/fb-logo.png`)}
            />
            <ButtonCustomize
                title='Sign in with Google'
                bg={colors.orange}
                color={colors.white}
                width='100%'
                height={40}
                fontSize={15}
                borderRadius={7}
                marginVertical={10}
                icon={require(`../../assets/images/google-logo.png`)}
            />
            <Text style={{paddingVertical: 10}}>New on XpressFood?</Text>
            <View style={{alignItems: 'flex-end'}}>
                <ButtonCustomize
                    onPress={() => navigation.navigate('SignUp')}
                    title='Create an account'
                    bg={colors.white}
                    color={colors.orange}
                    width='50%'
                    height={30}
                    fontSize={13}
                    borderRadius={10}
                    borderWidth={1}
                    borderColor={colors.orange}
                    marginVertical={10}
                />
            </View>
        </View>
    )
}

export default SignInScreen
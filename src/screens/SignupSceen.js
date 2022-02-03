import React, {  useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } =useContext(AuthContext);
 
    return <SafeAreaView style={styles.container}>
           <NavigationEvents 
                onWillBlur={ clearErrorMessage }
            />
        <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={({ email, password }) => signup({email, password})}
        />
        <NavLink
            routeName="Signin"
            text="Already Have an account? Sign in instead"
        />
    </SafeAreaView>
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown:false
    }
};

const styles = StyleSheet.create({
    container: {
      //  backgroundColor: '#232323',
        flex:1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignupScreen;
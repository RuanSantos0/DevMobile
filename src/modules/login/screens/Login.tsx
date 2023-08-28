/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native';
import { ContainerPlugin } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';


const Login = () => {
    return (
        <View>
            <ContainerPlugin>
                <Text>Login</Text>
                <Input value="Email" />
                <Input value="Senha" />

            </ContainerPlugin>
        </View>
    );
};

export default Login;

import  Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  ContainerLoginScreen,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <Input title="USUÁRIO"/>
          <Input  title= "SENHA"/>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;

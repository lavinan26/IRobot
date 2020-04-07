import {NetworkInfo} from 'react-native-network-info';

export const getRobotIP = () => {
  NetworkInfo.getGatewayIPAddress().then(defaultGateway => {
    console.log(defaultGateway);
  });
};

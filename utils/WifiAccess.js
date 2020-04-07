import {NetworkInfo} from 'react-native-network-info';

export const getRobotIP = () => {
  return new Promise((resolve, reject) => {
    NetworkInfo.getGatewayIPAddress()
      .then(defaultGateway => {
        resolve(defaultGateway);
      })
      .catch(error => {
        reject("Failed to get default gateway IP");
      });
  });
};

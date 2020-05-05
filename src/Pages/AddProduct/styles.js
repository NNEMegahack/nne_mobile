import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  loadingState: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingInfo: {
    fontSize: 25,
  },
  barCodeInformation: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  barCodeImage: {
    marginBottom: 15,
    transform: [
      { scale: 1.7 },
    ],
  },
  barCodeNumber: {
    color: '#FF404A',
    fontWeight: 'bold',
  },
  buttonBack: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF404A',
    paddingLeft: 15,
    paddingVertical: 10,
  },
  buttonBackText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#FF404A',
  },
  headerBarText: {
    fontSize: 20,
    color: '#ffffff',
    width: '40%',
  },
  inputBarCodeWrapper: {
    // flex: 1,
    width: '100%',
    position: 'relative',
    marginVertical: 10,
  },
  inputBarCodeLabel: {
    position: 'absolute',
    top: -10,
    left: 20,
    zIndex: 1,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  inputBarCode: {
    paddingLeft: 10,
    paddingVertical: 10,
    color: '#FF404A',
    width: '100%',
    height: 60,
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,.12)',
  },
  actionButtons: {
    // flex: 1,
    // backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
  },
});

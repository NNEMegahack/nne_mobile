import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    width: '100%',
    resizeMode: 'cover',
    alignItems: 'flex-start',
  },
  userIcon: {
    position: 'absolute',
    marginTop: 10,
    zIndex: 1,
  },
  headerBar: {
    flex: 1,
    backgroundColor: '#FF404A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    paddingVertical: 15,
    paddingLeft: 100,
  },
  productsList: {
    marginTop: 55,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
  },
  productInfo: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    marginBottom: 5,
  },
  productCode: {
    flexDirection: 'row',
  },
  productCodeName: {
    color: 'rgba(0,0,0, 0.6)',
    fontSize: 14,
  },
  productCodeValue: {
    paddingLeft: 10,
    color: 'rgba(0,0,0, 0.6)',
    fontSize: 14,
  },
  addProductButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 65,
    right: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#FF404A',
    borderWidth: 1,
    borderColor: '#FF404A',
    borderRadius: 10,

  },
  addProductButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/products';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [isloading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(baseURL)
      .then(({data}) => {
        setProduct(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setloading(false));
  }, []);

  const productCard = ({item}) => {
    return (
      <View style={styles.productContainer}>
        <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
        <Text>{item.category}</Text>
      </View>
    );
  };

  return (
    <View>
      {isloading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={product}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={productCard}
        />
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  productContainer: {
    width: WIDTH / 2 - 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#EDF2FB',
    borderRadius: 20,
  },
});

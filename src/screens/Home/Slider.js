import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  View,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import { Opacity } from '@material-ui/icons';

const images = [
  {
    id: 1,
    link: 'https://i.ibb.co/cNvyfLF/1.png',
  },
  {
    id: 2,
    link: 'https://i.ibb.co/ZdXbqGG/2.png',
  },
  {
    id: 3,
    link: 'https://i.ibb.co/tp9CV1S/3.png',
  },
  {
    id: 4,
    link: 'https://i.ibb.co/VpNSkYY/4.png',
  },
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Slider = () => {
  const [image, setImage] = useState(0);
  return (
    <View>
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      style={[styles.sliderContainer, styles.sliderShadow]}>
      {images.map(img => {
        return (
          <Image
            key={img.id}
            source={{uri: img.link}}
            style={styles.imageStyle}
          />
        );
      })}
    </ScrollView>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: 5,
    position: 'relative'
  },
  imageStyle: {
    width: WIDTH,
    height: WIDTH * 0.5,
  }
});

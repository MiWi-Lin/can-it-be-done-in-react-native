// @flow
import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import type { ImageSourcePropType } from 'react-native/Libraries/Image/ImageSourcePropType';

type Story = {
  id: string,
  source: ImageSourcePropType,
};

type StoryProps = {
  story: Story,
};

export default class extends React.PureComponent<StoryProps> {
  render(): React.Node {
    const { story: { source } } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} {...{ source }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
  },
});
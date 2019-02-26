import React from 'react';
import { Animated, Text } from 'react-native';
import PropTypes from 'prop-types';

import style from '../style';

function FlipCard({
  setRef, type, size, number, flipCardStyle, numberStyle,
}) {
  return (
    <Animated.View
      ref={setRef}
      style={[style.flipCard,
        type === 'front'
          ? {
            top: 0,
            borderTopLeftRadius: size / 10,
            borderTopRightRadius: size / 10,
            borderBottomWidth: 1,
          }
          : {
            top: '50%',
            borderBottomLeftRadius: size / 10,
            borderBottomRightRadius: size / 10,
            borderTopWidth: 1,
          },
        flipCardStyle,
      ]}
    >
      <Text style={[style.number, {
        transform: [type === 'front' ? { translateY: size * 0.3 } : { translateY: -size * 0.3 }],
        fontSize: size / 1.5,
        lineHeight: size / 1.5,
      }, numberStyle]}
      >
        {number}
      </Text>
    </Animated.View>
  );
}

FlipCard.defaultProps = {
  flipCardStyle: {},
  numberStyle: {},
};

FlipCard.propTypes = {
  setRef: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  flipCardStyle: PropTypes.object,
  numberStyle: PropTypes.object,
};

export default FlipCard;
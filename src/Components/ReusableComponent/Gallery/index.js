import React, {useState} from 'react';
import MasonryList from 'react-native-masonry-list';
import {useSelector} from 'react-redux';
import COLORS from '../../../Assets/Style/Color';
import InteractParagraph from '../Paragraph';

function Gallery({navigate}) {
  // const [checked, setChecked] = useState(true);
  const reducerData = useSelector(state => state);

  const data = [
    {
      source: require('src/Assets/Images/photo.png'),
      height: 290,
      width: 182,
      title: 'Album 1',
    },
    {
      source: require('src/Assets/Images/photo2.png'),
      height: 280,
      width: 272,
      title: 'Album 2',
    },
    {
      source: require('src/Assets/Images/photo3.png'),
      height: 215,
      width: 182,
      title: 'Album 3',
    },
    {
      source: require('src/Assets/Images/photo1.png'),
      height: 222,
      width: 182,
      title: 'Album 4',
    },
    {
      source: require('src/Assets/Images/photo4.png'),
      height: 140,
      width: 220,
      title: 'Album 5',
    },
  ];

  return (
    <MasonryList
      columns={2}
      spacing={3}
      rerender={true}
      backgroundColor={
        reducerData.isDark.isdark ? COLORS.darkMode : COLORS.bgcolor
      }
      imageContainerStyle={{borderRadius: 5}}
      onPressImage={e => navigate.navigate('viewAlbum', {e})}
      // onPressImage={() => console.log(e)}
      images={data}
      renderIndividualFooter={data => {
        return reducerData?.isDark?.yourProfile ? (
          <InteractParagraph
            ml={5}
            fw={'700'}
            color={COLORS.primary}
            p={data.title}
          />
        ) : (
          <></>
        );
      }}
    />
  );
}

export default Gallery;

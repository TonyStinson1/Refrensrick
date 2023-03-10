import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import SceneBuilder from '../../components/common/SceneBuilder';
import { BLACK, GREY } from '../../constants/colors';
import { ROOT_PADDING } from '../../constants/styles';
import ProfileImage from '../../components/Profile/ProfileImage';
import PropSection from '../../components/Profile/PropSection';
import WhereaboutsSection from '../../components/Profile/WhereaboutsSection';
import ChaptersSection from '../../components/Profile/ChaptersSection';
import { IProfileProps } from '../../types';

const Profile = (props: IProfileProps) => {
  const character = props.route.params.data;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SceneBuilder showTopBar={true}>
        <ScrollView
          centerContent
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View>
            {/* Profile Image */}
            <ProfileImage character={character} />
            {/* Character Name */}
            <Text numberOfLines={2} style={styles.name}>
              {character.name}
            </Text>
            {/* Basic Properties */}
            <PropSection character={character} />
            {/* Advanced Properties */}
            <WhereaboutsSection
              origin={character.origin}
              location={character.location}
            />
            {/* Advanced Properties */}
            <ChaptersSection episodes={character.episode} />
            {/* End Note */}
            <View style={{ height: 200 }}>
              <Text style={styles.footerText}>That's all we know!</Text>
            </View>
          </View>
        </ScrollView>
      </SceneBuilder>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { marginHorizontal: -ROOT_PADDING },
  footerText: {
    color: `${GREY}55`,
    fontSize: 14,
    marginTop: 25,
    textAlign: 'center',
  },
  name: {
    color: BLACK,
    fontSize: 28,
    width: '100%',
    padding: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

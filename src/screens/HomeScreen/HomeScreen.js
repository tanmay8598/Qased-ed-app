import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreenHeader from './../../components/Header/HomeScreenHeader';
import ThoughtOfDayCard from './../../components/Cards/ThoughtOfDayCard';
import AttendanceHomeScreenCard from './../../components/Cards/AttendanceHomeScreenCard';
import UserInfoHomeCard from './../../components/Cards/UserInfoHomeCard';
import HomeSchedule from './../../components/HomeSchedule/HomeSchedule';
import colors from '../../config/colors';
import Assignments from './../../components/Assignments/Assignments';
import Instructors from './../../components/Instructors/Instructors';
import Modules from './../../components/Modules/Modules';
import TrainingCenters from './../../components/TrainingCenters/TrainingCenters';

const HomeScreen = () => {
  const dummyData = [{ id: '1' }];

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenHeader />
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <View>
            <UserInfoHomeCard />
            <ThoughtOfDayCard />
            <AttendanceHomeScreenCard />
            <HomeSchedule />
            <Assignments />
            <Instructors />
            <Modules />
            <TrainingCenters />
          </View>
        }
        renderItem={null}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

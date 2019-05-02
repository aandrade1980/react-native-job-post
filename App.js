import React from 'react';
import { ScrollView } from 'react-native';

import Header from './src/components/Header';
import JobPostList from './src/components/JobPostList';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView stickyHeaderIndices={ [0] }>
        <Header />
        <JobPostList />
      </ScrollView>
    );
  }
}

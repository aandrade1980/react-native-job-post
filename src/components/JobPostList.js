import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

const JOBS_API_URL = 'https://react-job-post.herokuapp.com';

export default class JobPostList extends Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    fetch(`${JOBS_API_URL}/api/getJobs`)
      .then(response => response.json())
      .then(jsonRes => this.setState({
        jobs: jsonRes.data
      }))
  }

  render() {
    return this.state.jobs.map((job) => {
      return (
        <View key={job._id}>
          <Text>{job.title}</Text>
          <Image
            style={{ width: 150, height: 150 }} 
            source={{ uri: `${JOBS_API_URL}/${job.imgUrl}` }}
          />
        </View>
      )
    })
  }
}

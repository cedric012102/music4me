// import React, { Component } from 'react';
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import SearchInput, { createFilter } from 'react-native-search-filter';
// import songs from '../assets/data';
// import genres from '../assets/genres';
// import MusicPlayer from '../components/music-player';
// // const KEYS_TO_FILTERS = ['artist', 'title'];
// const KEYS_TO_FILTERS = ['title'];

// export default class SearchScreen extends Component<{}> {
//  constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: ''
//     }
//   }
//   searchUpdated(term) {
//     this.setState({ searchTerm: term })
//   }
//   render() {
//     const filteredEmails = genres.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
//     return (
//       <View style={styles.container}>
//         <SearchInput 
//           onChangeText={(term) => { this.searchUpdated(term) }} 
//           style={styles.searchInput}
//           placeholder="Type to search for a track"
//           />
//         <ScrollView>
//           {filteredEmails.map(email => {
//             return (
//               <TouchableOpacity onPress={() => this.props.navigation.navigate('Single', {track: email.id, albumCover: email.artwork, musician: email.artist, name: email.title, sound: email.url})} key={email.id} style={styles.emailItem}>
//                 <View>
//                   <Text>{email.title}</Text>
//                   {/* <Text style={styles.emailSubject}>{email.title}</Text> */}
//                 </View>
//               </TouchableOpacity>
//             )
//           })}
//         </ScrollView>

//       </View>
      
//     );
//   }

// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'flex-start'
//   },
//   emailItem:{
//     borderBottomWidth: 0.5,
//     borderColor: 'rgba(0,0,0,0.3)',
//     padding: 10
//   },
//   emailSubject: {
//     color: 'rgba(0,0,0,0.5)'
//   },
//   searchInput:{
//     padding: 10,
//     borderColor: '#CCC',
//     borderWidth: 1
//   }
// });

import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import songs from '../assets/data';
import MusicPlayer from '../components/music-player';
import { styles } from './styles/search-screen-style';

const KEYS_TO_FILTERS = ['artist', 'title'];

const SearchScreen = ({term, navigation}) => {

const [searchTerm, setSearchTerm] = useState('');
   
    const filteredEmails = songs.filter(createFilter(searchTerm, KEYS_TO_FILTERS))

    
    return (
      <View style={styles.container}>
        <SearchInput 
          onChangeText={(term) => { setSearchTerm(term) }} 
          style={styles.searchInput}
          placeholder="Type to search for a track"
          />
        <ScrollView>
          {filteredEmails.map((email) => {
            return (
              <TouchableOpacity key={email.id} style={styles.emailItem}>
                <View>
                  <Text>{email.title}</Text>
                  <Text style={styles.emailSubject}>{email.artist}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

      </View>
      
    );
  }


export default SearchScreen;



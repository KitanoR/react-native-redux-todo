import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './Lista';
import Input from './Input'
import { connect } from 'react-redux';
import { complete, submit, saveTodo } from '../reducers/todos';

const App = ({todos, complete, submit }) => {
    const [value, setValue] = useState('');
    const handleChange = (val) => {
      setValue(val);
    }
    const handleSubmit = () => {
      submit(value);
      setValue('');
      setValue(' ');
      console.log(value)
    }
    return (
      <View style={styles.container}>
          <Input 
            onSubmit={handleSubmit}
            onChange={handleChange} 
            value={value}/>

          <FlatList
            style={styles.list}
            data={todos}
            keyExtractor={x => String(x.id)}
            renderItem={({item}) => <ListItem 
                completed={item.completed}
                onPress={() => complete(item.id)}
                desc={item.desc}
            />}
          />
      </View>
    );
  }

const mapStateToProps = state => {
    console.log(state);
    return state
}

const mapDispatchToProps = (dispatch) => ({
  complete: (id) => dispatch(complete(id)),
  submit: (val) => dispatch(saveTodo(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    list: {
      alignSelf: 'stretch'
    }
  });
  
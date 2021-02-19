import React, { Component } from 'react';
import { auth, db } from '../services/firebase';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      chats: [],
      content: '',
      readError: null,
      writeError: null,
    };
  }

  async componentDidMount() {
    this.setState({ readError: null });
    try {
      db.ref('chats').on('value', (snapshot) => {
        const chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        this.setState({ chats });
      });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }
}

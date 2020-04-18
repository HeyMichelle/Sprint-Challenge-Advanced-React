import React, { useState } from 'react';
import './App.css';

// function App() {

//   const [card, setCard] = useState({});
  
//   useEffect(() => {
//       fetch('http://localhost:5000/api/players')
//       .then(res => res.json())
//       .then((card) => setCard(card));
      
//       // return a clean-up function in order to debug terminal, cannot do setCard on an un-mounted component

//   }, []);

// }

class App extends React.Component {
  // constructor with state
  constructor() {
    super();
    this.state = {
      card: card
    };
  }


  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
 /**
  // rule of thumb for when/how often to use preventdefault? *** on submission buttons
  addTask = item => {
    // console.log("First data set: ", this.state.data);
    // e.preventDefault();

    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };
    // this is used to generate a new item/task to the list
    // Date.now() is a dirty way of doing/creating new id's for each item

    this.setState({
      data: [...this.state.data, newTask]
    });
    console.log("Second data set: ", this.state.data);
  };

  // logic for onClick/toggle
  toggleComplete = taskId => {
    this.setState({
      data: this.state.data.map(data => {
        if (taskId === data.id) {
          return {
            ...data,
            completed: !data.completed
          };
        }
        return data;
      })
    });
  };

  clearList = e => {
    e.preventDefault();
    this.setState({
			data: this.state.data.filter(item => !item.completed)
		});
	};
	
	// clearList = e => {
  //   e.preventDefault();
	// 	this.setState({data:[]})
	// }
 */
	render() {
    return (
      <div className="App">
        <h1>Name</h1>
        <p className="card-name">{card.name}</p>
      </div>
    );
  }
}

export default App;

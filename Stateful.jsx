import React from 'react';

class Stateful extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{
                "id": 111,
                "name": "Foo",
                "age": "10"
            },
            {
                "id": 222,
                "name": "Bar",
                "age": "20"
            },
            {
                "id": 333,
                "name": "Test",
                "age": "30"
            }
            ]
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                        {
                            this.state.data.map(
                                (person,i) => <TableRow key = {i} data = {person} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}


class Header extends React.Component {
    render() {
        return (
            <div> <h1>Header Of the Sample</h1> </div>
        );
    }

}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default Stateful;
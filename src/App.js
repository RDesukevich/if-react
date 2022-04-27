import {Component} from "react";

import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import EmploeesList from "./components/employees-list/emploees-list";
import EmployeesAddForm from "./components/emploees-add-form/employees-add-form";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John', surname: 'Baden', salary: 473, rise: false, increase: false, id: '1'},
                {name: 'Bread', surname: 'Patch',salary: 6950, rise: false, increase: false, id: '2'},
                {name: 'Juli', surname: 'Baden', salary: 23423, rise: false, increase: false, id: '3'},
                {name: 'June', surname: 'Summery', salary: 675, rise: false, increase: false, id: '4'},
                {name: 'May', surname: 'Spring', salary: 123, rise: false, increase: false, id: '5'},
                {name: 'February', surname: 'Winter', salary: 952, rise: false, increase: false, id: '6'},
                {name: 'April', surname: 'Spring', salary: 126, rise: false, increase: false, id: '7'},
                {name: 'Mart', surname: 'Spring', salary: 573, rise: false, increase: false, id: '8'},
                {name: 'August', surname: 'Summery', salary: 353, rise: false, increase: false, id: '9'},
                {name: 'September', surname: 'Autumn', salary: 645, rise: false, increase: false, id: '10'},
                {name: 'October', surname: 'Autumn', salary: 123, rise: false, increase: false, id: '11'},
                {name: 'November',  surname: 'Autumn', salary: 7548, rise: false, increase: false, id: '12'},
                {name: 'December',  surname: 'Winter', salary: 4124, rise: false, increase: false, id: '13'},
                {name: 'January',  surname: 'Winter', salary: 642, rise: false, increase: false, id: '14'},
            ],
            term: '',
            filter:''
        }
        this.maxId = 15;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, surname, salary) => {
        const newItem = {
            name,
            surname,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    onSearch = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }
    render() {
        const {data, term, filter} = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length;
        const visibleData = this.onFilterPost(this.onSearch(data, term), filter);
        return (
            <div className="App">
                <AppInfo employees={employees} increased={increased}/>

                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmploeesList
                    data={visibleData}
                    onDelete={id => this.deleteItem(id)}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;

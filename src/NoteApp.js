import React from 'react'
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';
import {getInitialData} from './utils/index'

export default class NoteApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : getInitialData(),
            search: ''
        };
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onAddEventHandler = this.onAddEventHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }
    onArchiveEventHandler(id){
        this.setState(() =>{
            return{
                data: this.state.data.map(item =>
                    item.id === id ? {...item, archived: !item.archived} : item)
            }
        })
    }
    
    onDeleteEventHandler(id){
        const data = this.state.data.filter(e => e.id !== id);
        this.setState({data});
    }

    onAddEventHandler({title, body}){
        this.setState(prevState =>{
            return{
                data: [...prevState.data, {
                    id: + new Date(),
                    title,
                    body,
                    archived : false,
                    createdAt: new Date().toLocaleDateString(),
                }]
            }
        });
    }

    onSearchEventHandler(search){
        this.setState({search: search.toLowerCase()})
    }

    render() {
        return (
            <div>
                <NoteAppHeader onSearch={this.onSearchEventHandler}/>
                <NoteAppBody
                    data={this.state.data}
                    archive={this.onArchiveEventHandler} 
                    onDelete={this.onDeleteEventHandler} 
                    onAdd={this.onAddEventHandler}
                    search={this.state.search}
                />
            </div>
        )
    }
}
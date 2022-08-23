import React from 'react'

export default class NoteAppInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            count: 50,
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
    }

    onTitleChange(e){
        if(e.target.value.length > 50)return;
        this.setState(() =>{
            return{
                title: e.target.value,
                count: 50 - e.target.value.length
            }
        })
    }
    onBodyChange(e){
        this.setState(() =>{
            return{
                body: e.target.value
            }
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state)
    }
    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmit}>
                    <p className="note-input__title__char-limit">Sisa karakter: {this.state.count}</p>
                    <input type="text" className="note-input__title" placeholder="ini adalah judul..." onChange={this.onTitleChange} value={this.state.title}/>
                    <textarea type="text" placeholder="Tuliskan catatanmu di sini..." className="note-input__body" onChange={this.onBodyChange} value={this.state.body}></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}
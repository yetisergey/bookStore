import React from "react";

export default class ImageUploader extends React.Component {
    constructor(props) {
        super(props)
        this.state = { image: props.file && URL.createObjectURL(props.file) };
        this.onFileChanged = this.onFileChanged.bind(this);
    }

    componentDidMount() {
        this.setState(this.props)
    }

    onFileChanged(event) {
        if (event.target && event.target.files.length > 0) {
            this.setState({ 'image': URL.createObjectURL(event.target.files[0]) });
            this.props.onChange(event.target.files[0]);
        }
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.onFileChanged} accept="image/*" />
                {this.state.image && <img width='100' src={this.state.image || ''} />}
            </div>
        )
    }
}
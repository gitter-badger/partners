import React from 'react';
import ReactDOM from 'react-dom';
import debounce from 'debounce';

class Search extends React.Component {

    static propTypes = {
        className: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        wait: React.PropTypes.number,
        onBlur: React.PropTypes.func,
        onChange: React.PropTypes.func,
        onFocus: React.PropTypes.func
    };

    static defaultProps = {
        className: '',
        disabled: false,
        debounce: 0
    };

    componentDidMount() {
        this.input  = ReactDOM.findDOMNode(this.refs.input);
    }

    onFocus() {
        //animate on focus
        this.input = ReactDOM.findDOMNode(this.refs.input);
        this.input.setSelectionRange(0, this.input.value.length);
    }

    onBlur() {
        //TODO animate on blur
    }

    render() {
        const attrs = {
            className:  this.props.className,
            disabled:   this.props.disabled,
            onBlur:     (this.onBlur)? this.onBlur.bind(this) : this.props.onBlur.bind(this),
            onChange:   (this.props.onChange)? debounce(this.props.onChange.bind(this), this.props.wait) : null,
            onFocus:    (this.onFocus)? this.onFocus.bind(this) : this.props.onFocus.bind(this)
        };

        return <input ref="input" {...attrs} />
    }
}

export default Search;

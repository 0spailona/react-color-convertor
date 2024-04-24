import './App.css'
import React, {Component} from "react";

const defaultColor = '#3D3D66'

class App extends Component {
    state: { hex: string, rgb: string | null } = {
        hex: defaultColor,
        rgb: this.convert(defaultColor),
    }

    convert(hex: string) {
        const r = parseInt(hex.substring(1, 3), 16)
        const g = parseInt(hex.substring(3, 5), 16)
        const b = parseInt(hex.substring(5, 7), 16)

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            return null
        }
        return `rgb(${r}, ${g}, ${b})`
    }

    onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {

        if (e.target.value[0] !== '#') {
            return;
        }

        if (e.target.value.length === e.target.maxLength) {
            this.setState({hex: e.target.value, rgb: this.convert(e.target.value)})
        } else {
            this.setState({hex: e.target.value || "#"})
        }
    }

    render() {
        return (
            <div className="container" style={{backgroundColor: this.state.rgb ?? "red"}}>
                <div className="wrp">
                    <input onChange={this.onChangeInput.bind(this)}
                           value={this.state.hex} maxLength={7}/>
                    <span className="showResult">{this.state.rgb ?? "Ошибка!"}</span>
                </div>
            </div>
        )
    }
}

export default App

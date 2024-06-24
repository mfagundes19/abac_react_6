import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";

class KeyBoardKey extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isClicked: false,
            className: props.className,
            keyboardKey: props.name
        };
    }

    handleClick(event) {
        let display_calculator = document.getElementById("display_calculator").value;
        let element = this.state.keyboardKey;
        switch(element){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                display_calculator+= element;
                document.getElementById("display_calculator").value = display_calculator;
                document.getElementById("sentence_calculator").value+= element;
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                display_calculator = "";
                document.getElementById("display_calculator").value = display_calculator;
                document.getElementById("sentence_calculator").value+= element;    
                break;
            case 'A/C':
                document.getElementById("sentence_calculator").value = "";
                document.getElementById("display_calculator").value = "";
                break;
            case '=':
                let sentence = document.getElementById("sentence_calculator").value;
                let sentence_one = "";
                let operator = "";
                let sentence_two = "";
                let array = sentence.split('');
                for(var i=0; i < array.length; i++){
                    switch(array[i]) {
                        case '+':
                            operator = array[i];
                            break;
                        case '-':
                            operator = array[i];
                            break;
                        case '*':
                            operator = array[i];
                            break;
                        case '/':
                            operator = array[i];
                            break;
                    }
                }
                let explode = sentence.split(operator);
                sentence_one = explode[0];
                sentence_two = explode[1];
                let result = 0;
                switch(operator) {
                    case '+':
                        result = (parseFloat(sentence_one)) + (parseFloat(sentence_two));
                        break;
                    case '-':
                        result = Math.abs((parseFloat(sentence_one)) - (parseFloat(sentence_two)));
                        break;
                    case '*':
                        result = (parseFloat(sentence_one)) * (parseFloat(sentence_two));
                        break;
                    case '/':
                        result = (parseFloat(sentence_one)) / (parseFloat(sentence_two));
                        break;
                }
                let strCalculator = new String(result);
                strCalculator = strCalculator.replace(".",",");
                result = strCalculator;
                document.getElementById("display_calculator").value = result;
                document.getElementById("sentence_calculator").value = result;
                break;
        }
    }

    render() {
        return  (
           <div class={this.props.className}>
                <button type="button" className="btn-keyboard" id="btn_keyboard_{this.props.name}" data-param={this.props.name} onClick={(event) => this.handleClick(event)}>
                    {this.props.name}
                </button>
            </div>
        );
    }

}

export default KeyBoardKey;
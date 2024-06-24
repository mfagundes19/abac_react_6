import React from "react";

class Display extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return  (
            <div class="display">
                <input type="text" name="display_calculator" id="display_calculator" value="" class="input-display"/>
                <input type="text" name="sentence_calculator" id="sentence_calculator" value=""/>
            </div>
        );
    }
}

export default Display;
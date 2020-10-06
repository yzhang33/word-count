import React, { Component } from 'react';
/**
 * count words
 * @param {*} tokens 
 */
function wordCount(tokens){
    tokens = tokens.split(" ");
    var counts ={};
    var keys=[];
    for(var i=0;i<tokens.length;i++){
        var word = tokens[i].toLowerCase();
        if(counts[word] === undefined){
            counts[word] = 1;
            keys.push(word);
        }else{
            counts[word]++;
        }
    }

    keys.sort((a,b)=>{
        return counts[b] - counts[a];
    })
    return [keys,counts]
}
/**
 * fill canvas with text
 * @param {*} keys 
 * @param {*} counts 
 */
function fillCanvas(keys,counts){
    var removeList = ["the","i","to","and", "of", "my", "in", "a", "is", "you", "this", "it", "his", "not",
                        "but", "", "be","me", "he", "your", "with","for", "let", "on", "what", "are", "if", "him", "from", "will", 
                        "have","by", "shall", "do", "would", "thy", "our", "how", "their", "they", "am", "very", "so", "more", "good", "come"]
    var canvas = document.getElementById("#myCanvas");
    var ctx = canvas.getContext("2d");

    for(var i=0;i<keys.length;i++){
        if(!removeList.includes(keys[i])){
            var fontSize = counts[keys[i]]*3;
            var intensity = 1;
            ctx.font = `bold ${fontSize}px Impact`;
            ctx.fillStyle = `rgb(0,77,154, ${intensity} )`;
            ctx.fillText(keys[i],randomInt(960-ctx.measureText(keys[i]).width),randomInt(600));
            intensity -= 0.2;
        }
       
       
    }

}
/**
 * random integer
 * @param {int} max 
 */
function randomInt(max){
    return Math.floor(Math.random()*Math.floor(max));
}

class Text extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({text:event.target.value});
    }

    handleSubmit(event){
        var s = this.state.text;
        var tokens = s.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"");
        tokens = s.replace('the',"");
        tokens = tokens.replace(/\n/g, " ");
        tokens = tokens.toLocaleLowerCase();

        //word count 
        var retVal = wordCount(tokens);
        var keys = retVal[0];
        var counts = retVal[1];
        fillCanvas(keys,counts);

        event.preventDefault();
    }

    render() { 
        return ( 
            <div>
                <div id="vis">
                <canvas id="#myCanvas" width="960" height="600" style={{border:"#333 10px solid"}}>
                </canvas>
                </div>
                <div id="f">
                    <form id="form">
                    <label>Paste Your Text<br></br>
                        <textarea id="textArea" value ={this.state.text} onChange={this.handleChange} spellCheck="false" rows="10" cols="60" ></textarea><br></br>
                    </label>
                        <button id="count" type="submit" onClick ={this.handleSubmit}>Count!</button>
                </form>
                </div>
            </div>
         );
    }
}
 
export default Text;
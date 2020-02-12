import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: 'every through yummy squeal queen fry',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin.



  myPigLatinCodeHere = () => {
    // the variable 'userInput' will contain the text input from the user
    // no need to change this variable
    let userInput = this.state.phrase

    // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
    // no need to change this variable
    let translatedWordsArray = []

    // taking the user input and spliting the text into an array of words
    let splitUserInput = userInput.toLowerCase().split(" ")

    // now that we have an array of words, we can map over the array and access each word
    let vowelList = ["a", "e", "i", "o", "u", "y"]
    splitUserInput.map(currentWord => {
      // ACTION ITEM: use 'currentWord' as a starting point for your code

      ////  ===  ===  ===  ===  ===  ===
/*
        - Vowels
        currentWord += "way"
        - Consonants
        currentWord = "move consonants up to the first vowel to the end of the word and then add "ay" at the end."
        - Special:
            - "qu" same as consanants but after "qu"
*/
      ////  ===  ===  ===  ===  ===  ===
      // this.findFirstConsonants (vowelList, currentWord)
      // console.log(this.vowelWord (vowelList, currentWord))

      //console.log(this.findFirstConsonants(vowelList, currentWord))

      if(this.checkStartVowel(vowelList,currentWord))
      {
          currentWord = currentWord + "way"
      }
      else
      {
          currentWord =  this.findFirstConsonants(vowelList, currentWord)
      }


/*
      "mice"  -->  variable_ME --> function TWO() -->  takeInVariable
      logically takeInVariable = "every"


      function One(){
          variable_ME = "mice"
          Two(variable_ME)
      }

      function Two(takeInVariable){
          variable_JIMBO = takeInVariable  // "mice"
      }
*/



      // your code here!
      // if (currentWord.charAt(0))

      //stringIn.split("").filter(letter => vowelsList.indexOf(letter.toLowerCase()) < 0 ).join("")

      // Remember: console.log is your friend :)


      // ACTION ITEM: change the value of currentWord in the push method to the name of whatever variable you made containing your Pig Latin'd word
      return translatedWordsArray.push(currentWord)
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join("  ")

    // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
    // done!
  }




  checkStartVowel = (vowelList,wordIn) =>{
      let outputValue = false;
      for (let i = 0; i < vowelList.length; i++) {
          if (vowelList[i] === wordIn.charAt(0)){
              outputValue = true
          }
      }
      return outputValue
  }


  findFirstConsonants = (vowelList,wordIn) => {
      //for (let i = 0; i < vowelList.length; i++) {

      //if() // check to see if word begins with vowel
            // if so, return the word as is (or return it through a the pigLatinVowel function (not defined yet))

            //split vowel functions into 2 functions
                // - 1.  returns 'true' or 'false' if word begins with a vowel
                // - 2.  converts the 'vowel word' into piglatin


      for (let Li = 1; Li < wordIn.length; Li++) {
          for (let vi = 0; vi < vowelList.length; vi++) {
              if (wordIn.charAt(Li) === vowelList[vi]){

                  //QU stuff
                  // test if vowel is 'u'
                  // is so, test if value before it is 'q'
                  // if both are true, do the thang

                  let quFound = 0;
                  if (wordIn.charAt(Li) === 'u'){
                      if(wordIn.charAt(Li-1) === 'q')
                      {
                          quFound = 1
                      }
                  }

                  let outputWord = ""
                  outputWord += wordIn.substr(Li + quFound)
                  outputWord += wordIn.substring(0,Li + quFound)
                  outputWord += "ay"
                  return outputWord
                  //substring(0, 2);

              }
          }
      }
          //wordIn.charAt(i)


          // if (vowelList[i] === wordIn.charAt(0)){
          //     //return
          //     let outputWord = ""
          //     outputWord += wordIn.substr(1)
          //     outputWord += wordIn.charAt(0)
          //     outputWord += "way"
          //
          //     console.log(outputWord)
          // }
      return wordIn
  }


  setUpPreventDefault = (e) => {
    // this method prevents react from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: 'through every squeal queen fry',
      phraseTranslated: 'This is where your translated sentence will appear.'
    })
  }

  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
      <div>
      <div class="container">
        <h1>Pig Latin Translator</h1>
          <div id="pigImage">
            <img
              src="https://lh3.googleusercontent.com/proxy/COnL7roh51jn5qjk26o-OKkZjsUlTLpQ5hZ90uwl44eFi7lxmS8GbRURLyH_KCmkW2tJeQmVdzLYHEUUPm00O6pr2NzPfNWSDxaHTCImOLwXN_smHREgImALwEGYNJGcpko"
              alt="pig with butcher cut names in pig latin"
              id="butcherPig"
            />
          </div>
          </div>
          <div className="box">
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault }>Submit</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p class="translated">{ this.state.phraseTranslated }</p>
          </div>
        <footer>
          Coded by ~Shaker Kattoula, Jonas Fernandes, and Austin Majeski~
        </footer>
      </div>
    );
  }
}

export default App;
